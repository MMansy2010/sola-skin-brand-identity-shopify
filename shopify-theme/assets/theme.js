/**
 * Sola Skin — Shopify 2.0 Production Client Theme Script
 * 100% Native Shopify Ajax Cart API Integration (/cart.js, /cart/add.js, /cart/change.js)
 */

(function () {
  'use strict';

  var SolaTheme = {
    cart: {
      item_count: 0,
      total_price: 0,
      items: []
    },

    moneyFormat: '{{amount}} RON',

    init: function () {
      if (window.SolaConfig && window.SolaConfig.moneyFormat) {
        this.moneyFormat = window.SolaConfig.moneyFormat;
      }
      this.initHeader();
      this.initMobileMenu();
      this.initCartDrawer();
      this.initAccordions();
      this.initProductGallery();
      this.fetchCart();
    },

    // Currency Formatter
    formatMoney: function (cents) {
      if (typeof cents !== 'number') cents = parseInt(cents, 10) || 0;
      var val = (cents / 100).toFixed(2);
      // Replace with Romanian number format: comma for decimal
      val = val.replace('.', ',');
      var format = this.moneyFormat || '{{amount}} RON';
      if (format.indexOf('{{amount}}') !== -1) {
        return format.replace('{{amount}}', val);
      } else if (format.indexOf('{{ amount }}') !== -1) {
        return format.replace('{{ amount }}', val);
      } else if (format.indexOf('{{amount_with_comma_separator}}') !== -1) {
        return format.replace('{{amount_with_comma_separator}}', val);
      } else if (format.indexOf('{{ amount_with_comma_separator }}') !== -1) {
        return format.replace('{{ amount_with_comma_separator }}', val);
      } else if (format.indexOf('{{amount_no_decimals}}') !== -1) {
        return format.replace('{{amount_no_decimals}}', Math.round(cents / 100));
      } else if (format.indexOf('{{ amount_no_decimals }}') !== -1) {
        return format.replace('{{ amount_no_decimals }}', Math.round(cents / 100));
      }
      return val + ' RON';
    },

    // 1. Sticky Header
    initHeader: function () {
      var header = document.querySelector('.site-header');
      if (!header) return;

      window.addEventListener('scroll', function () {
        if (window.scrollY > 20) {
          header.classList.add('scrolled');
        } else {
          header.classList.remove('scrolled');
        }
      }, { passive: true });
    },

    // 2. Mobile Menu Drawer
    initMobileMenu: function () {
      var toggle = document.querySelector('.mobile-menu-toggle');
      var drawer = document.querySelector('.mobile-nav-drawer');
      var closeBtn = document.querySelector('.mobile-nav-close');

      if (!toggle || !drawer) return;

      var openMenu = function () {
        drawer.classList.add('open');
        document.body.style.overflow = 'hidden';
      };

      var closeMenu = function () {
        drawer.classList.remove('open');
        document.body.style.overflow = '';
      };

      toggle.addEventListener('click', openMenu);
      if (closeBtn) closeBtn.addEventListener('click', closeMenu);

      drawer.addEventListener('click', function (e) {
        if (e.target === drawer) closeMenu();
      });
    },

    isUpdatingCart: false,

    setCartControlsDisabled: function (disabled) {
      var controls = document.querySelectorAll('.cart-qty-btn, .cart-item-remove, [data-cart-checkout-btn]');
      controls.forEach(function (btn) {
        if (disabled) {
          btn.setAttribute('disabled', 'disabled');
          btn.style.pointerEvents = 'none';
          btn.style.opacity = '0.5';
        } else {
          btn.removeAttribute('disabled');
          btn.style.pointerEvents = '';
          btn.style.opacity = '';
        }
      });
    },

    // 3. Cart Drawer & Shopify Ajax API
    initCartDrawer: function () {
      var drawer = document.querySelector('.cart-drawer-overlay');
      var cartTriggers = document.querySelectorAll('[data-cart-drawer-trigger]');
      var closeBtn = document.querySelector('.cart-drawer-close');
      var lastFocusedElement = null;

      if (!drawer) return;

      window.openCartDrawer = function () {
        lastFocusedElement = document.activeElement;
        drawer.classList.add('open');
        drawer.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
        if (closeBtn) {
          setTimeout(function () { closeBtn.focus(); }, 50);
        }
      };

      window.closeCartDrawer = function () {
        drawer.classList.remove('open');
        drawer.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
        if (lastFocusedElement && typeof lastFocusedElement.focus === 'function') {
          lastFocusedElement.focus();
        }
      };

      cartTriggers.forEach(function (btn) {
        btn.addEventListener('click', function (e) {
          e.preventDefault();
          window.openCartDrawer();
        });
      });

      if (closeBtn) closeBtn.addEventListener('click', window.closeCartDrawer);

      drawer.addEventListener('click', function (e) {
        if (e.target === drawer) window.closeCartDrawer();
      });

      // Escape key to close accessible drawer
      document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && drawer.classList.contains('open')) {
          window.closeCartDrawer();
        }
      });

      // Quick Add Delegated Click Listener
      var self = this;
      document.addEventListener('click', function (e) {
        var addBtn = e.target.closest('[data-quick-add]');
        if (addBtn) {
          e.preventDefault();
          var rawVariantId = addBtn.getAttribute('data-variant-id');
          var variantId = parseInt(rawVariantId, 10);
          if (!variantId || isNaN(variantId) || variantId <= 0) {
            // Non-purchasable item or placeholder notice
            alert('Acest produs conceptual trebuie configurat în Shopify Admin pentru a putea fi achiziționat.');
            return;
          }

          var originalText = addBtn.textContent;
          addBtn.setAttribute('disabled', 'disabled');
          addBtn.textContent = 'Se adaugă...';

          self.addToCart(variantId, 1, function () {
            addBtn.removeAttribute('disabled');
            addBtn.textContent = originalText;
          });
        }
      });
    },

    // Fetch live cart from Shopify (/cart.js)
    fetchCart: function (callback) {
      var self = this;
      fetch('/cart.js', {
        headers: { 'Accept': 'application/json' }
      })
        .then(function (res) {
          if (!res.ok) throw new Error('Network error fetching cart');
          return res.json();
        })
        .then(function (cart) {
          self.cart = cart;
          self.updateCartUI();
          if (typeof callback === 'function') callback(null, cart);
        })
        .catch(function (err) {
          self.updateCartUI();
          if (typeof callback === 'function') callback(err);
        });
    },

    // Add Item to Shopify Cart (/cart/add.js)
    addToCart: function (variantId, quantity, callback) {
      var self = this;
      var safeId = parseInt(variantId, 10);
      var safeQty = Math.max(1, parseInt(quantity, 10) || 1);

      if (!safeId || isNaN(safeId) || safeId <= 0) {
        alert('Varianta selectată nu este validă.');
        if (typeof callback === 'function') callback(new Error('Varianta invalidă'));
        return;
      }

      fetch('/cart/add.js', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          id: safeId,
          quantity: safeQty
        })
      })
        .then(function (res) {
          return res.json().then(function (data) {
            return { ok: res.ok, status: res.status, data: data };
          }).catch(function () {
            return { ok: res.ok, status: res.status, data: {} };
          });
        })
        .then(function (response) {
          if (!response.ok) {
            var msg = (response.data && (response.data.description || response.data.message)) ||
              'Produsul nu a putut fi adăugat în coș.';
            alert('Atenție: ' + msg);
            if (typeof callback === 'function') callback(new Error(msg), response);
          } else {
            // Open cart drawer ONLY after fetchCart successfully completes
            self.fetchCart(function (err) {
              if (!err && typeof window.openCartDrawer === 'function') {
                window.openCartDrawer();
              }
              if (typeof callback === 'function') callback(null, response);
            });
          }
        })
        .catch(function (err) {
          alert('Eroare de conexiune la adăugarea în coș. Vă rugăm să reîncercați.');
          if (typeof callback === 'function') callback(err);
        });
    },

    // Change Item Quantity via Shopify API (/cart/change.js) with Race Condition Prevention
    changeItemQuantity: function (lineIndex, newQuantity) {
      var self = this;
      if (this.isUpdatingCart) return;

      var safeLine = parseInt(lineIndex, 10);
      if (isNaN(safeLine) || safeLine < 1) return;

      var safeQty = Math.max(0, parseInt(newQuantity, 10) || 0);

      this.isUpdatingCart = true;
      this.setCartControlsDisabled(true);

      fetch('/cart/change.js', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          line: safeLine,
          quantity: safeQty
        })
      })
        .then(function (res) {
          return res.json().then(function (data) {
            return { ok: res.ok, status: res.status, data: data };
          }).catch(function () {
            return { ok: res.ok, status: res.status, data: {} };
          });
        })
        .then(function (response) {
          if (!response.ok) {
            var msg = (response.data && (response.data.description || response.data.message)) ||
              'Nu s-a putut actualiza cantitatea în coș.';
            alert('Atenție: ' + msg);
          }
          // Refresh cart from /cart.js and restore controls
          self.fetchCart(function () {
            self.isUpdatingCart = false;
            self.setCartControlsDisabled(false);
          });
        })
        .catch(function (err) {
          alert('A apărut o problemă de conexiune la actualizarea coșului.');
          self.fetchCart(function () {
            self.isUpdatingCart = false;
            self.setCartControlsDisabled(false);
          });
        });
    },

    // Remove Item from Shopify Cart
    removeItem: function (lineIndex) {
      this.changeItemQuantity(lineIndex, 0);
    },

    // Update DOM Cart UI safely without XSS vulnerabilities
    updateCartUI: function () {
      var self = this;

      // Update badges
      var badges = document.querySelectorAll('.cart-count-badge');
      badges.forEach(function (b) {
        b.textContent = self.cart.item_count || 0;
        b.style.display = self.cart.item_count > 0 ? 'flex' : 'none';
      });

      // Cart Drawer Container
      var itemsContainer = document.querySelector('.cart-drawer-items');
      var subtotalEl = document.querySelector('[data-cart-subtotal]');
      var checkoutBtn = document.querySelector('[data-cart-checkout-btn]');

      if (!itemsContainer) return;

      // Clear container safely
      itemsContainer.innerHTML = '';

      if (!this.cart.items || this.cart.items.length === 0) {
        var emptyDiv = document.createElement('div');
        emptyDiv.className = 'cart-drawer-empty';

        var p = document.createElement('p');
        p.textContent = 'Coșul tău este gol';

        var link = document.createElement('a');
        link.href = '/collections/all';
        link.className = 'btn btn-secondary';
        link.textContent = 'Descoperă colecția';
        link.addEventListener('click', function () {
          if (window.closeCartDrawer) window.closeCartDrawer();
        });

        emptyDiv.appendChild(p);
        emptyDiv.appendChild(link);
        itemsContainer.appendChild(emptyDiv);

        if (subtotalEl) subtotalEl.textContent = this.formatMoney(0);
        if (checkoutBtn) checkoutBtn.setAttribute('disabled', 'disabled');
        return;
      }

      if (checkoutBtn) checkoutBtn.removeAttribute('disabled');

      this.cart.items.forEach(function (item, idx) {
        var lineNum = idx + 1; // 1-based line index for /cart/change.js
        var priceFormatted = self.formatMoney(item.final_line_price);

        // Safe Fallback for item.image and item.featured_image
        var imgUrl = '';
        if (typeof item.image === 'string' && item.image.length > 0) {
          imgUrl = item.image;
        } else if (item.featured_image) {
          if (typeof item.featured_image === 'string' && item.featured_image.length > 0) {
            imgUrl = item.featured_image;
          } else if (item.featured_image.url && typeof item.featured_image.url === 'string') {
            imgUrl = item.featured_image.url;
          }
        }

        var itemDiv = document.createElement('div');
        itemDiv.className = 'cart-item';
        itemDiv.setAttribute('data-line', String(lineNum));

        // Product thumbnail
        if (imgUrl) {
          var img = document.createElement('img');
          img.className = 'cart-item-img';
          img.src = imgUrl;
          img.alt = item.product_title || item.title || 'Produs';
          itemDiv.appendChild(img);
        } else {
          var placeholder = document.createElement('div');
          placeholder.className = 'cart-item-img';
          placeholder.style.backgroundColor = '#F8F6F1';
          itemDiv.appendChild(placeholder);
        }

        // Details
        var detailsDiv = document.createElement('div');
        detailsDiv.className = 'cart-item-details';

        var titleEl = document.createElement('h4');
        titleEl.textContent = item.product_title || item.title || '';
        detailsDiv.appendChild(titleEl);

        if (item.variant_title && item.variant_title !== 'Default Title') {
          var variantEl = document.createElement('div');
          variantEl.style.fontSize = '0.8rem';
          variantEl.style.color = '#77716B';
          variantEl.textContent = item.variant_title;
          detailsDiv.appendChild(variantEl);
        }

        var priceEl = document.createElement('div');
        priceEl.className = 'cart-item-price';
        priceEl.textContent = priceFormatted;
        detailsDiv.appendChild(priceEl);

        // Quantity Stepper
        var stepperDiv = document.createElement('div');
        stepperDiv.className = 'cart-qty-stepper';

        var minusBtn = document.createElement('button');
        minusBtn.type = 'button';
        minusBtn.className = 'cart-qty-btn';
        minusBtn.setAttribute('aria-label', 'Scade cantitatea');
        minusBtn.textContent = '–';
        (function (line, currentQty) {
          minusBtn.addEventListener('click', function () {
            self.changeItemQuantity(line, Math.max(0, currentQty - 1));
          });
        })(lineNum, item.quantity || 1);

        var qtyVal = document.createElement('span');
        qtyVal.className = 'cart-qty-val';
        qtyVal.textContent = String(item.quantity || 1);

        var plusBtn = document.createElement('button');
        plusBtn.type = 'button';
        plusBtn.className = 'cart-qty-btn';
        plusBtn.setAttribute('aria-label', 'Crește cantitatea');
        plusBtn.textContent = '+';
        (function (line, currentQty) {
          plusBtn.addEventListener('click', function () {
            self.changeItemQuantity(line, currentQty + 1);
          });
        })(lineNum, item.quantity || 1);

        stepperDiv.appendChild(minusBtn);
        stepperDiv.appendChild(qtyVal);
        stepperDiv.appendChild(plusBtn);
        detailsDiv.appendChild(stepperDiv);

        itemDiv.appendChild(detailsDiv);

        // Remove Button
        var removeBtn = document.createElement('button');
        removeBtn.type = 'button';
        removeBtn.className = 'cart-item-remove';
        removeBtn.setAttribute('aria-label', 'Elimină produs');
        removeBtn.innerHTML = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>';
        (function (line) {
          removeBtn.addEventListener('click', function () {
            self.removeItem(line);
          });
        })(lineNum);
        itemDiv.appendChild(removeBtn);

        itemsContainer.appendChild(itemDiv);
      });

      if (subtotalEl) {
        subtotalEl.textContent = this.formatMoney(this.cart.total_price);
      }
    },

    // 4. Accordions for PDP
    initAccordions: function () {
      var triggers = document.querySelectorAll('.product-accordion-trigger');
      triggers.forEach(function (trigger) {
        trigger.addEventListener('click', function () {
          var item = this.closest('.product-accordion-item');
          if (item) {
            var isOpen = item.classList.contains('open');
            item.classList.toggle('open');
            this.setAttribute('aria-expanded', !isOpen);
          }
        });
      });
    },

    // 5. Product Gallery Thumbnails with Keyboard Navigation
    initProductGallery: function () {
      var thumbs = document.querySelectorAll('.product-thumb');
      var mainImg = document.getElementById('ProductGalleryMainImage');

      if (!thumbs.length || !mainImg) return;

      thumbs.forEach(function (thumb) {
        var activateThumb = function () {
          thumbs.forEach(function (t) { t.classList.remove('active'); });
          thumb.classList.add('active');
          var targetSrc = thumb.getAttribute('data-full-src');
          if (targetSrc) {
            mainImg.src = targetSrc;
          }
        };

        thumb.addEventListener('click', activateThumb);
        thumb.addEventListener('keydown', function (e) {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            activateThumb();
          }
        });
      });
    }
  };

  // Expose to window
  window.SolaTheme = SolaTheme;

  // DOMContentLoaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () { SolaTheme.init(); });
  } else {
    SolaTheme.init();
  }
})();
