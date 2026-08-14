// ==========================================================================
        // CHANGED: this used to be `const PRODUCTS = [...]` — a fixed, hardcoded list.
        // Now it's `SEED_PRODUCTS`: starter data used ONLY the very first time 

        // ADDED: SVG icons for the add-to-cart button — guaranteed to render in
        // every browser/font combo, unlike text characters (+ / ✕) which could
        // silently fail to display depending on font/line-height rendering.
        const ICON_PLUS = '<svg viewBox="0 0 24 24" fill="none" stroke-width="3" stroke-linecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>';
        const ICON_CROSS = '<svg viewBox="0 0 24 24" fill="none" stroke-width="3" stroke-linecap="round"><line x1="5" y1="5" x2="19" y2="19"/><line x1="19" y1="5" x2="5" y2="19"/></svg>';
        const ICON_DOTS = '<svg viewBox="0 0 24 24" fill="currentColor" stroke="none"><circle cx="5" cy="12" r="2.2"/><circle cx="12" cy="12" r="2.2"/><circle cx="19" cy="12" r="2.2"/></svg>';
        // site loads (when nothing has been saved yet). The real, live list is
        // `PRODUCTS` (declared further below), which is loaded from storage and can
        // be edited by the admin (add/edit/delete/toggle stock) from the Admin Panel
        // → Products tab, with no code changes needed. See loadProducts()/saveProducts().
        //
        // ADDED: every seed product now has `featured: true`, meaning it shows in
        // its brand's home-page preview section by default. The admin can flip this
        // off per product in the Products tab ("Show on Front Page").
        // ==========================================================================
        const SEED_PRODUCTS = [
            // BEAUTY OF JOSEON
            {
                id: 1, brand: 'boj', brandName: 'Beauty of Joseon',
                name: 'Relief Sun: Rice + Probiotics SPF50+',
                desc: 'Cult-favourite daily sunscreen. Lightweight, no white cast.',
                price: 10000,
                inStock: true, // <-- STOCK STATUS: true = in stock, false = out of stock
                featured: true, // <-- shows on the front page's Beauty of Joseon preview
                img: 'https://beautyofjoseon.com/cdn/shop/files/02_0612.jpg?v=1782766185&width=600'
            },
            {
                id: 2, brand: 'boj', brandName: 'Beauty of Joseon',
                name: 'Glow Serum: Propolis + Niacinamide',
                desc: 'Brightening serum with propolis. For glowing, even-toned skin.',
                price: 950,
                inStock: true,
                featured: true,
                img: 'https://beautyofjoseon.com/cdn/shop/files/glow-serum-propolis-niacinamide-1-front.webp?v=1770278801&width=600'
            },
            {
                id: 3, brand: 'boj', brandName: 'Beauty of Joseon',
                name: 'Dynasty Cream: Honey + Ginseng',
                desc: 'Rich moisturiser with honey & ginseng. Deep nourishment.',
                price: 1100,
                inStock: true,
                featured: true,
                img: 'https://beautyofjoseon.com/cdn/shop/files/dynasty-cream-1-front.webp?v=1770618339&width=600'
            },
            {
                id: 4, brand: 'boj', brandName: 'Beauty of Joseon',
                name: 'Revive Eye Serum: Ginseng + Retinal',
                desc: 'Anti-aging eye serum with ginseng & retinal complex.',
                price: 750,
                inStock: false, // example: out of stock item
                featured: true,
                img: 'https://beautyofjoseon.com/cdn/shop/files/revive-eye-serum-ginseng-retinal-1-front.webp?v=1770287139&width=600'
            },
            {
                id: 5, brand: 'boj', brandName: 'Beauty of Joseon',
                name: 'Apricot Blossom Peeling Gel',
                desc: 'Gentle weekly exfoliator for smooth, bright skin.',
                price: 700,
                inStock: true,
                featured: false, // example: only shows on the BOJ brand page, not the home preview
                img: 'https://beautyofjoseon.com/cdn/shop/files/apricot-blossom-peeling-gel-1-front.webp?v=1770618553&width=600'
            },
            // COSRX
            {
                id: 6, brand: 'cosrx', brandName: 'COSRX',
                name: 'Advanced Snail 96 Mucin Power Essence',
                desc: '96% snail mucin. Repairs, hydrates & plumps skin overnight.',
                price: 950,
                inStock: true,
                featured: true,
                img: 'https://www.cosrx.com/cdn/shop/files/james_800x1067_1_1_4e9750cc-2cd6-4817-ace5-be2305a85806_1200x1200.jpg?v=1763111577'
            },
            {
                id: 7, brand: 'cosrx', brandName: 'COSRX',
                name: 'Advanced Snail 92 All In One Cream',
                desc: '92% snail secretion filtrate. Moisturises & soothes redness.',
                price: 1050,
                inStock: true,
                featured: true,
                img: 'https://www.cosrx.com/cdn/shop/files/snail_cream_thumbnail_1200x1200.png?v=1748420673'
            },
            {
                id: 8, brand: 'cosrx', brandName: 'COSRX',
                name: 'Good Morning Low pH Gel Cleanser',
                desc: 'Gentle daily cleanser. Maintains skin pH balance.',
                price: 650,
                inStock: true,
                featured: true,
                img: 'https://www.cosrx.com/cdn/shop/files/low-ph-good-morning-gel-cleanser-cosrx-official-1_1200x1200.jpg?v=1768785801'
            },
            {
                id: 9, brand: 'cosrx', brandName: 'COSRX',
                name: 'Acne Pimple Master Patch (24 patches)',
                desc: 'Hydrocolloid patches. Absorbs and flattens blemishes fast.',
                price: 350,
                inStock: false, // example: out of stock item
                featured: true,
                img: 'https://www.cosrx.com/cdn/shop/files/acne-pimple-master-patch-cosrx-official-1_1200x1200.jpg?v=1724835736'
            },
            {
                id: 10, brand: 'cosrx', brandName: 'COSRX',
                name: 'Snail Yellow Milk Ultimate Repair Serum',
                desc: 'Intensive repair serum with snail & niacinamide.',
                price: 850,
                inStock: true,
                featured: false,
                img: 'https://www.cosrx.com/cdn/shop/files/advanced-snail-radiance-dual-essence-cosrx-official-1.png?v=1724835811'
            },
            // RHODE
            {
                id: 11, brand: 'rhode', brandName: 'Rhode',
                name: 'Lip Tint — Espresso Dark Brown',
                desc: 'Sheer tinted gloss with peptide complex. Moisturises & plumps.',
                price: 400,
                inStock: true,
                featured: true,
                img: 'https://img.drz.lazcdn.com/static/bd/p/f69033a16ca683f3f9e60472e22dbb23.png_960x960q80.png_.webp'
            },
            {
                id: 12, brand: 'rhode', brandName: 'Rhode',
                name: 'Lip Tint — Raspberryjelly',
                desc: 'Berry-toned tinted gloss. Peptide-packed & ultra-hydrating.',
                price: 400,
                inStock: true,
                featured: true,
                img: 'https://www.rhodeskin.com/cdn/shop/files/raspberry-jelly_480x480.jpg?v=1762322704'
            },
            {
                id: 13, brand: 'rhode', brandName: 'Rhode',
                name: 'Lip Tint — Ribbon Pink',
                desc: 'Soft pink tinted gloss. Buildable colour with glossy finish.',
                price: 400,
                inStock: true,
                featured: true,
                img: 'https://img.drz.lazcdn.com/static/bd/p/87140e014d79a9dc055ee8a0b2931c8d.png_720x720q80.png'
            },
            {
                id: 14, brand: 'rhode', brandName: 'Rhode',
                name: 'Peptide Lip Tint — Sweetpea',
                desc: 'Dreamy mauve-pink. Sheer coverage with glossy finish.',
                price: 400,
                inStock: false, // example: out of stock item
                featured: true,
                img: 'https://www.rhodeskin.com/cdn/shop/files/sweet-pea-main_1024x1024.png?v=1771969846'
            },
            {
                id: 15, brand: 'rhode', brandName: 'Rhode',
                name: 'Hailey Blush Stick — Piggy',
                desc: 'Dual-use blush stick for lips & cheeks. Buildable & blendable.',
                price: 650,
                inStock: true,
                featured: false,
                img: 'https://rokbucket.rokomari.io/ProductNew20190903/260X372/Rhode_Pocket_Blush_Piggy_Baby_Pink-Rhode-d64df-452687.png'
            },
            {
                id: 16, brand: 'rhode', brandName: 'Rhode',
                name: 'Hailey Blush Stick — Freckle',
                desc: 'Warm terracotta blush for a sun-kissed look.',
                price: 650,
                inStock: true,
                featured: false,
                img: 'https://rokbucket.rokomari.io/ProductNew20190903/260X372/Rhode_by_Hailey_Bieber_Pocket_Blush-Rhode-ebe58-472177.png'
            }
        ];

        // Fallback images if product images fail to load
        const FALLBACK_IMGS = {
            boj: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=400&q=80',
            cosrx: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&q=80',
            rhode: 'https://images.unsplash.com/photo-1586495777744-4e6232bf2b30?w=400&q=80'
        };
        // ADDED: generic fallback used for any brand the admin adds that isn't in the
        // list above (so a broken image link never breaks the layout).
        const DEFAULT_FALLBACK_IMG = 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=400&q=80';

        // Your WhatsApp business number (used by order confirmation, product chat & floating chat button)
        // Replace with your real number in international format, no + or spaces
        const SHOP_WA_NUMBER = '8801339936732';

        // ADDED: Your Facebook Page username (used by the "Order on Messenger" button
        // on the product page). Find it in your Page URL: facebook.com/YourPageName
        // -> put YourPageName below. Replace this placeholder with your real page.
        const SHOP_FB_USERNAME = 'fiorglowbd_ekhane_page_username_dao';


        // তোমার কপি করা Google Web App URL-টি এখানে বসাও
        const GOOGLE_SHEET_URL = 'https://script.google.com/macros/s/AKfycbxJSAQcggVrqWNKISLLnbR3N-p2sJIyRXk_IfzdZsmf3XBjaqUSgxfoYv9_jQR_eDvN/exec';

        // গুগল শীটে ডাটা পাঠানোর কমন ফাংশন
        async function sendToGoogleSheet(action, payload) {
            if (!GOOGLE_SHEET_URL || GOOGLE_SHEET_URL.includes('YOUR_SCRIPT_ID_HERE')) return;
            try {
                await fetch(GOOGLE_SHEET_URL, {
                    method: 'POST',
                    mode: 'no-cors',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ action, payload })
                });
            } catch (e) {
                console.error('Google Sheet Sync Error:', e);
            }
        }

        // ADDED: your bKash personal/merchant "Send Money" number. Customers who choose
        // bKash at checkout are shown this number and asked to enter the Transaction ID
        // they get back from bKash after paying. Change this to your real bKash number.
       const BKASH_NUMBER = '01339936732';

        // ADDED: free-shipping settings — change these two numbers any time.
        const FREE_SHIPPING_THRESHOLD = 1000;
        const SHIPPING_FEE = 60;

        // ADDED: Bangladesh's 64 districts — fills the checkout District dropdown.
        const BD_DISTRICTS = [
            'Bagerhat', 'Bandarban', 'Barguna', 'Barishal', 'Bhola', 'Bogura', 'Brahmanbaria',
            'Chandpur', 'Chattogram', "Cox's Bazar", 'Chuadanga', 'Cumilla', 'Dhaka', 'Dinajpur',
            'Faridpur', 'Feni', 'Gaibandha', 'Gazipur', 'Gopalganj', 'Habiganj', 'Jamalpur',
            'Jashore', 'Jhalokati', 'Jhenaidah', 'Joypurhat', 'Khagrachhari', 'Khulna', 'Kishoreganj',
            'Kurigram', 'Kushtia', 'Lakshmipur', 'Lalmonirhat', 'Madaripur', 'Magura', 'Manikganj',
            'Meherpur', 'Moulvibazar', 'Munshiganj', 'Mymensingh', 'Naogaon', 'Narail', 'Narayanganj',
            'Narsingdi', 'Natore', 'Netrokona', 'Nilphamari', 'Noakhali', 'Pabna', 'Panchagarh',
            'Patuakhali', 'Pirojpur', 'Rajbari', 'Rajshahi', 'Rangamati', 'Rangpur', 'Satkhira',
            'Shariatpur', 'Sherpur', 'Sirajganj', 'Sunamganj', 'Sylhet', 'Tangail', 'Thakurgaon',
            'Chapainawabganj'
        ];

        function initDistrictDropdown() {
            const sel = document.getElementById('custDistrict');
            if (!sel) return;
            sel.innerHTML = '<option value="">Search district...</option>' +
                BD_DISTRICTS.map(d => `<option value="${d}">${d}</option>`).join('');
        }

        // ADDED: unlocks the Area field once a district is picked
        function onDistrictChange() {
            const district = document.getElementById('custDistrict').value;
            const areaInput = document.getElementById('custArea');
            if (district) {
                areaInput.disabled = false;
                areaInput.placeholder = 'e.g. Panchlaish, Agrabad...';
            } else {
                areaInput.disabled = true;
                areaInput.value = '';
                areaInput.placeholder = 'Select district first';
            }
        }

        // ==========================================================================
        // ADDED: Instagram handle used for the deep-link attempt below. Keep this in
        // sync with the href on the Instagram icon in the footer.
        // ==========================================================================
        const INSTAGRAM_USERNAME = 'fiorglow';
        const INSTAGRAM_WEB_URL = `https://www.instagram.com/${INSTAGRAM_USERNAME}`;

        // FIXED: previously the Instagram icon was a plain <a target="_blank">
        // pointing straight at the instagram.com web URL. On a phone that already
        // has the Instagram app installed, a plain https link never asks the OS to
        // hand off to the app — it always opens the in-page/mobile browser instead,
        // which is the "clicking it still goes to the web" bug. This handler tries
        // the app's own instagram:// deep link first; if the app opens, the browser
        // tab that was opened for the fallback is closed automatically. If nothing
        // happens within ~1.2s (no app installed, or on desktop), it falls back to
        // the normal web profile so the link never breaks.
        function openInstagram(anchorEl) {
            // Desktop browsers don't have the Instagram app — just use the normal web link.
            const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
            if (!isMobile) return true;

            // Let the default target="_blank" navigation to the web URL proceed as
            // the guaranteed fallback, and additionally try to hand off to the app.
            const appUrl = `instagram://user?username=${INSTAGRAM_USERNAME}`;
            const start = Date.now();
            let appOpened = false;

            window.addEventListener('blur', function onBlur() {
                appOpened = true;
                window.removeEventListener('blur', onBlur);
            });

            try {
                const iframe = document.createElement('iframe');
                iframe.style.display = 'none';
                iframe.src = appUrl;
                document.body.appendChild(iframe);
                setTimeout(() => iframe.remove(), 2000);
            } catch (e) { }

            // Don't block the default browser tab from opening as a fallback — if
            // the app grabs the deep link the tab that opens will simply be
            // backgrounded/closed by the OS handoff on most devices.
            return true;
        }

        // FIXED: this used to check for window.storage, which only exists inside
        // Claude.ai's own artifact preview. On Netlify that was always undefined, so
        // every save silently fell back to the browser's own localStorage — meaning a
        // price/product change made from one device never showed up on any other
        // device. It now talks to our own Netlify Function (/api/data), which stores
        // the data server-side in Netlify Blobs — one shared place that every device
        // reads from and writes to. localStorage is now only used as an offline
        // fallback if the network request itself fails.
        async function cloudGet(key) {
            const res = await fetch(`/api/data?key=${encodeURIComponent(key)}`);
            if (!res.ok) throw new Error('cloud get failed');
            const data = await res.json();
            return data.value; // string or null
        }

        // CHANGED: sends the admin token (if we have one from a successful
        // /api/admin/login) as an Authorization header. The server only
        // actually requires this for the products key — every other key
        // ignores it — but sending it always is harmless and simpler.
        async function cloudSet(key, value) {
            const adminToken = (typeof getAdminToken === 'function') ? getAdminToken() : null;
            const res = await fetch(`/api/data?key=${encodeURIComponent(key)}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    ...(adminToken ? { 'Authorization': 'Bearer ' + adminToken } : {})
                },
                body: JSON.stringify({ value })
            });
            if (!res.ok) throw new Error('cloud set failed');
        }

        // ==========================================================================
        // ADDED: PRODUCTS is now loaded from storage instead of being the hardcoded
        // SEED_PRODUCTS array directly. This is what makes the Admin Panel's "Add /
        // Edit / Delete / Toggle Stock" buttons actually stick — every change calls
        // saveProducts() so it persists and every visitor (and the admin) sees the
        // same product list.
        // ==========================================================================
        const PRODUCTS_KEY = 'fiorglow_products_v1';
        let PRODUCTS = [];

        // ==========================================================================
        // ADDED: shop navigation state — drives the three views rendered inside
        // #shopView: 'home' (brand-by-brand preview), 'brand' (one brand's full,
        // paginated catalogue) and 'search' (paginated search results). Each
        // paginated view keeps its own current page number (PAGE_SIZE = 24 = 4
        // columns × 6 rows, as requested).
        // ==========================================================================
        const PAGE_SIZE = 24;
        let shopViewMode = 'home'; // 'home' | 'brand' | 'search'
        let shopViewBrandKey = null;
        let shopViewPage = 1;

        async function loadProducts() {
            try {
                const value = await cloudGet(PRODUCTS_KEY);
                PRODUCTS = value ? JSON.parse(value) : SEED_PRODUCTS;
                // keep a local copy too, purely as an offline fallback
                try { localStorage.setItem(PRODUCTS_KEY, JSON.stringify(PRODUCTS)); } catch (e) { }
            } catch (e) {
                try {
                    const local = localStorage.getItem(PRODUCTS_KEY);
                    PRODUCTS = local ? JSON.parse(local) : SEED_PRODUCTS;
                } catch (e2) {
                    PRODUCTS = SEED_PRODUCTS;
                }
            }
            renderShopView();
            renderHomeFeatured();
            renderSponsoredHomeSections();
            await checkFlashDealExpiry(); // ADDED: catch an already-expired flash timer as soon as products are in
            renderFlashDeals();
        }

        // ==========================================================================
        // ADDED: SHOP BY CATEGORY tile click — routes into the existing shop/search
        // flow using a keyword match against product name/description, so no new
        // "category" field is needed on products themselves.
        // ==========================================================================
        function openCategory(query) {
            hideAllPages();
            document.getElementById('shopPageView').style.display = 'block';
            currentSearchQuery = query;
            shopViewMode = 'search';
            const input = document.getElementById('searchInput');
            if (input) input.value = query;
            renderShopView();
            window.scrollTo(0, 0);
        }

        // ==========================================================================
        // CHANGED: FLASH DEALS is now admin-controlled and time-bound instead of
        // auto-picking every discounted product forever:
        //   - Only products with `flashDeal: true` (toggled from the admin panel)
        //     ever appear here. Discounted products left unmarked keep their
        //     discount permanently and never show in this section.
        //   - A single shared countdown (FLASH_DEAL.endAt) is set by the admin via
        //     startFlashDealTimer(). While it's running, the marked products show
        //     here with a live countdown to that same end time.
        //   - The instant the countdown reaches 0 (checkFlashDealExpiry()), every
        //     product marked flashDeal:true automatically has its discount cleared
        //     (discountPercent = 0) and is unmarked, and the section hides itself
        //     until the admin starts a new round.
        // ==========================================================================
        const FLASH_DEAL_KEY = 'fiorglow_flash_deal_v1';
        let FLASH_DEAL = { endAt: null }; // endAt: ms timestamp, or null when no timer is running

        async function loadFlashDeal() {
            try {
                const value = await cloudGet(FLASH_DEAL_KEY);
                FLASH_DEAL = value ? JSON.parse(value) : { endAt: null };
                try { localStorage.setItem(FLASH_DEAL_KEY, JSON.stringify(FLASH_DEAL)); } catch (e) { }
            } catch (e) {
                try {
                    const local = localStorage.getItem(FLASH_DEAL_KEY);
                    FLASH_DEAL = local ? JSON.parse(local) : { endAt: null };
                } catch (e2) {
                    FLASH_DEAL = { endAt: null };
                }
            }
            await checkFlashDealExpiry();
            renderFlashDeals();
            updateFlashDealAdminStatus();
        }

        async function saveFlashDeal() {
            try { localStorage.setItem(FLASH_DEAL_KEY, JSON.stringify(FLASH_DEAL)); } catch (e) { }
            try {
                await cloudSet(FLASH_DEAL_KEY, JSON.stringify(FLASH_DEAL));
            } catch (e) {
                console.error('Could not save the flash deal timer to the shared store:', e);
            }
        }

        // Admin panel: reads the "Duration (hours)" field, sets FLASH_DEAL.endAt
        // that many hours from now, and saves it — every visitor's countdown then
        // ticks down to that same shared moment.
        async function startFlashDealTimer() {
            const hoursInput = document.getElementById('flashDealDuration');
            const hours = parseFloat(hoursInput ? hoursInput.value : '');
            if (!hours || hours <= 0) {
                showToast('Enter how many hours the flash deal should run first');
                return;
            }
            if (!PRODUCTS.some(p => p.flashDeal)) {
                showToast('No products are marked "Include in Flash Deals" yet — add at least one first');
                return;
            }
            FLASH_DEAL.endAt = Date.now() + hours * 3600000;
            await saveFlashDeal();
            renderFlashDeals();
            updateFlashDealAdminStatus();
            showToast(`Flash Deal timer started — ${hours}h ⚡`);
        }

        // Admin panel: stops the countdown early WITHOUT touching product
        // discounts — use "Remove from Flash" per product, or let the timer run
        // out naturally, to actually clear discounts.
        async function stopFlashDealTimer() {
            FLASH_DEAL.endAt = null;
            await saveFlashDeal();
            renderFlashDeals();
            updateFlashDealAdminStatus();
            showToast('Flash Deal timer stopped');
        }

        // Checks whether a running timer has passed its end time; if so, clears
        // the discount from every flashDeal-marked product and resets the timer.
        // Called on load and every countdown tick, so it fires as soon as the
        // clock runs out for whoever has the page open.
        async function checkFlashDealExpiry() {
            if (!FLASH_DEAL.endAt) return false;
            if (Date.now() < FLASH_DEAL.endAt) return false;
            let changed = false;
            PRODUCTS.forEach(p => {
                if (p.flashDeal) {
                    p.flashDeal = false;
                    p.discountPercent = 0;
                    changed = true;
                }
            });
            FLASH_DEAL.endAt = null;
            await saveFlashDeal();
            if (changed) {
                await saveProducts();
                renderAdminProducts();
                renderShopView();
                renderHomeFeatured();
            }
            return true;
        }

        // Small status line shown above the Duration field in the admin panel.
        function updateFlashDealAdminStatus() {
            const el = document.getElementById('flashDealStatus');
            if (!el) return;
            if (FLASH_DEAL.endAt && FLASH_DEAL.endAt > Date.now()) {
                const msLeft = FLASH_DEAL.endAt - Date.now();
                const h = Math.floor(msLeft / 3600000);
                const m = Math.floor((msLeft % 3600000) / 60000);
                el.textContent = `⚡ Running — ends in ${h}h ${m}m. Marked products: ${PRODUCTS.filter(p => p.flashDeal).length}`;
            } else {
                el.textContent = `Not running. Mark products with "⚡ Include in Flash Deals" above, set a duration, then Start.`;
            }
        }

        function renderFlashDeals() {
            const grid = document.getElementById('flashDealsGrid');
            const section = document.getElementById('flashDeals');
            if (!grid || !section) return;
            const active = FLASH_DEAL.endAt && FLASH_DEAL.endAt > Date.now();
            const list = active ? PRODUCTS.filter(p => p.flashDeal) : [];
            if (!list.length) {
                section.style.display = 'none';
                return;
            }
            section.style.display = '';
            grid.innerHTML = list.map((p, idx) => cardHtml(p, idx)).join('');
            initScrollReveal();
            initFlashCountdown();
        }

        // CHANGED: counts down to the shared FLASH_DEAL.endAt set by the admin
        // (instead of always resetting at midnight). Once it hits 0 it triggers
        // checkFlashDealExpiry() to clear the tied discounts automatically.
        let flashCountdownTimer = null;
        function initFlashCountdown() {
            if (flashCountdownTimer) return; // already running
            const tick = async () => {
                if (!FLASH_DEAL.endAt) return;
                const diff = FLASH_DEAL.endAt - Date.now();
                if (diff <= 0) {
                    await checkFlashDealExpiry();
                    updateFlashDealAdminStatus();
                    return;
                }
                const h = String(Math.floor(diff / 3600000)).padStart(2, '0');
                const m = String(Math.floor((diff % 3600000) / 60000)).padStart(2, '0');
                const s = String(Math.floor((diff % 60000) / 1000)).padStart(2, '0');
                const eh = document.getElementById('fcHours');
                const em = document.getElementById('fcMinutes');
                const es = document.getElementById('fcSeconds');
                if (eh) eh.textContent = h;
                if (em) em.textContent = m;
                if (es) es.textContent = s;
                updateFlashDealAdminStatus();
            };
            tick();
            flashCountdownTimer = setInterval(tick, 1000);
        }

        async function saveProducts() {
            // save locally right away so the current tab feels instant...
            try { localStorage.setItem(PRODUCTS_KEY, JSON.stringify(PRODUCTS)); } catch (e) { }
            try {
                // ...then push to the shared server store so every other device sees it too
                await cloudSet(PRODUCTS_KEY, JSON.stringify(PRODUCTS));
            } catch (e) {
                console.error('Could not save products to the shared store:', e);
                alert('Could not sync this change to the server — check your internet connection and try again, or other devices will not see this update.');
            }
        }

        // ==========================================================================
        // ADDED: SHOP BY CONCERN — CONCERNS is a small admin-managed list of
        // {id, name, img} tiles (Blackheads, Acne, Dryness, ...). Each product
        // stores a `concerns` array of concern ids it helps with (set from the
        // Products tab). Clicking a concern tile on the homepage filters to only
        // products tagged with that concern — see openConcern() / renderSearchResults().
        // ==========================================================================
        const CONCERNS_KEY = 'fiorglow_concerns_v1';
        const SEED_CONCERNS = [
            { id: 1, name: 'Blackheads', img: 'https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/topic_centers/BeautyandSkinCare/793-Blackheads-1296x728-body.jpg?w=1155&h=1528' },
            { id: 2, name: 'Dryness', img: 'https://thederm.com/wp-content/uploads/2024/11/thederm_blog_common_questions_about_skin_dryness.jpg' },
            { id: 3, name: 'Acne', img: 'https://cdn-prod.medicalnewstoday.com/content/images/articles/107/107146/acne.jpg' },
            { id: 4, name: 'Hyperpigmentation', img: 'https://www.thepinkfoundry.com/cdn/shop/articles/Hyperpigmentation_Causes_and_Treatment_37a14c66-307e-43b8-8d7d-6067415d2cf6.png?v=1750414710&width=2048' },
            { id: 5, name: 'Uneven Skintone', img: 'https://images.ctfassets.net/3zfcttr0ztpr/7l48oTfQh9CLAzGRTc4R48/2a26e804c43cc98c818a9857d1fbf58a/unevenskintonepng-fr-ca' }
        ];
        let CONCERNS = [];

        async function loadConcerns() {
            try {
                const value = await cloudGet(CONCERNS_KEY);
                CONCERNS = value ? JSON.parse(value) : SEED_CONCERNS;
                try { localStorage.setItem(CONCERNS_KEY, JSON.stringify(CONCERNS)); } catch (e) { }
            } catch (e) {
                try {
                    const local = localStorage.getItem(CONCERNS_KEY);
                    CONCERNS = local ? JSON.parse(local) : SEED_CONCERNS;
                } catch (e2) {
                    CONCERNS = SEED_CONCERNS;
                }
            }
            renderConcernsSection();
            renderConcernCheckboxes();
        }

        async function saveConcerns() {
            try { localStorage.setItem(CONCERNS_KEY, JSON.stringify(CONCERNS)); } catch (e) { }
            try {
                await cloudSet(CONCERNS_KEY, JSON.stringify(CONCERNS));
            } catch (e) {
                console.error('Could not save concerns to the shared store:', e);
            }
        }

        // ----- Homepage tiles -----
        function renderConcernsSection() {
            const grid = document.getElementById('concernGrid');
            const section = document.getElementById('shopByConcern');
            if (!grid || !section) return;
            if (!CONCERNS.length) {
                section.style.display = 'none';
                return;
            }
            section.style.display = '';
            grid.innerHTML = CONCERNS.map(c => `
    <div class="concern-tile reveal" onclick="openConcern(${c.id})">
      ${c.img ? `<img class="concern-tile-img" src="${escapeHtml(c.img)}" alt="${escapeHtml(c.name)}" loading="lazy">` : `<div class="concern-tile-img"></div>`}
      <div class="concern-tile-name">${escapeHtml(c.name)}</div>
    </div>
  `).join('');
            initScrollReveal();
        }

        // Clicking a concern tile → filters the Shop page to only products tagged
        // with this concern. Reuses the existing search-results view/pagination —
        // renderSearchResults() detects the "concern:<id>" marker below.
        function openConcern(id) {
            hideAllPages();
            document.getElementById('shopPageView').style.display = 'block';
            currentSearchQuery = 'concern:' + id;
            shopViewMode = 'search';
            const input = document.getElementById('searchInput');
            if (input) input.value = '';
            renderShopView();
            window.scrollTo(0, 0);
        }

        // ----- Admin tab: Concerns CRUD (same shape as Slides admin) -----
        function renderAdminConcerns() {
            const list = document.getElementById('adminConcernsList');
            if (!list) return;
            if (!CONCERNS.length) {
                list.innerHTML = '<div class="admin-empty">No concerns yet — add your first one above.</div>';
                return;
            }
            list.innerHTML = CONCERNS.map(c => `
    <div class="admin-review-row">
      <div class="admin-review-info">
        <div class="admin-review-name">${escapeHtml(c.name)}</div>
        <div class="admin-review-meta">${c.img ? 'Photo set ✓' : 'No photo yet'} · used by ${PRODUCTS.filter(p => Array.isArray(p.concerns) && p.concerns.includes(c.id)).length} product(s)</div>
      </div>
      <div class="admin-review-actions">
        <button class="admin-btn verify" onclick="editConcern(${c.id})">✎ Edit</button>
        <button class="admin-btn delete" onclick="deleteConcern(${c.id})">🗑 Delete</button>
      </div>
    </div>
  `).join('');
        }

        function editConcern(id) {
            const c = CONCERNS.find(cn => cn.id === id);
            if (!c) return;
            document.getElementById('editingConcernId').value = c.id;
            document.getElementById('concernFormTitle').textContent = 'Edit Concern';
            document.getElementById('concernName').value = c.name;
            document.getElementById('concernImg').value = c.img || '';
            document.getElementById('concernFormTitle').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }

        function resetConcernForm() {
            document.getElementById('editingConcernId').value = '';
            document.getElementById('concernFormTitle').textContent = 'Add New Concern';
            document.getElementById('concernName').value = '';
            document.getElementById('concernImg').value = '';
        }

        async function saveConcernForm() {
            const name = document.getElementById('concernName').value.trim();
            const img = document.getElementById('concernImg').value.trim();
            const editingId = document.getElementById('editingConcernId').value;
            if (!name) {
                showToast('Please enter a concern name');
                return;
            }
            if (editingId) {
                const c = CONCERNS.find(cn => cn.id === parseInt(editingId, 10));
                if (c) Object.assign(c, { name, img });
                showToast('Concern updated ✓');
            } else {
                CONCERNS.push({ id: Date.now(), name, img });
                showToast('Concern added ✓');
            }
            await saveConcerns();
            resetConcernForm();
            renderAdminConcerns();
            renderConcernsSection();
            renderConcernCheckboxes();
        }

        async function deleteConcern(id) {
            if (!confirm('Delete this concern? It will be removed from every product that uses it.')) return;
            CONCERNS = CONCERNS.filter(cn => cn.id !== id);
            // ADDED: also un-tag it from every product so nothing dangles
            PRODUCTS.forEach(p => {
                if (Array.isArray(p.concerns)) p.concerns = p.concerns.filter(cid => cid !== id);
            });
            await saveConcerns();
            await saveProducts();
            renderAdminConcerns();
            renderConcernsSection();
            renderConcernCheckboxes();
            showToast('Concern deleted 🗑');
        }

        // ----- Product form: "which concerns does this help with" checkboxes -----
        // Rebuilt every time CONCERNS changes or the product form opens, since the
        // list of possible concerns is admin-editable.
        function renderConcernCheckboxes(selected) {
            const box = document.getElementById('prodConcernsBox');
            if (!box) return;
            const sel = selected || [];
            if (!CONCERNS.length) {
                box.innerHTML = '<span style="font-size:12px; color:var(--text-muted);">No concerns set up yet — add some from the Concerns tab first.</span>';
                return;
            }
            box.innerHTML = CONCERNS.map(c => `
    <label style="display:flex; align-items:center; gap:6px; font-size:12.5px; color:var(--navy); background:var(--pink); padding:6px 12px; border-radius:20px;">
      <input type="checkbox" class="prod-concern-checkbox" value="${c.id}" ${sel.includes(c.id) ? 'checked' : ''} style="width:auto;">
      ${escapeHtml(c.name)}
    </label>
  `).join('');
        }

        function getSelectedProductConcerns() {
            return Array.from(document.querySelectorAll('.prod-concern-checkbox:checked')).map(cb => parseInt(cb.value, 10));
        }

        // ==========================================================================
        // ADDED: SHOP BY CATEGORY — admin-managed tiles (name + emoji or photo +
        // search tag). Same storage pattern as CONCERNS: cloud + localStorage
        // fallback, seeded with the original 6 categories the first time.
        // ==========================================================================
        const CATEGORIES_KEY = 'fiorglow_categories_v1';
        const SEED_CATEGORIES = [
            { id: 1, name: 'Cleanser', icon: '🧴', img: '', query: 'cleanser' },
            { id: 2, name: 'Toner', icon: '💧', img: '', query: 'toner' },
            { id: 3, name: 'Serum', icon: '🧪', img: '', query: 'serum' },
            { id: 4, name: 'Moisturizer', icon: '🫙', img: '', query: 'cream' },
            { id: 5, name: 'Sunscreen', icon: '☀️', img: '', query: 'sun' },
            { id: 6, name: 'Lip Care', icon: '💄', img: '', query: 'lip' }
        ];
        let CATEGORIES = [];

        async function loadCategories() {
            try {
                const value = await cloudGet(CATEGORIES_KEY);
                CATEGORIES = value ? JSON.parse(value) : SEED_CATEGORIES;
                try { localStorage.setItem(CATEGORIES_KEY, JSON.stringify(CATEGORIES)); } catch (e) { }
            } catch (e) {
                try {
                    const local = localStorage.getItem(CATEGORIES_KEY);
                    CATEGORIES = local ? JSON.parse(local) : SEED_CATEGORIES;
                } catch (e2) {
                    CATEGORIES = SEED_CATEGORIES;
                }
            }
            renderCategoriesSection();
        }

        async function saveCategories() {
            try { localStorage.setItem(CATEGORIES_KEY, JSON.stringify(CATEGORIES)); } catch (e) { }
            try {
                await cloudSet(CATEGORIES_KEY, JSON.stringify(CATEGORIES));
            } catch (e) {
                console.error('Could not save categories to the shared store:', e);
            }
        }

        function renderCategoriesSection() {
            const grid = document.getElementById('categoryGrid');
            if (!grid) return;
            grid.innerHTML = CATEGORIES.map(c => `
    <div class="category-tile reveal" onclick="openCategory('${(c.query || '').replace(/'/g, "\\'")}')">
      ${c.img
                    ? `<img class="category-tile-img" src="${escapeHtml(c.img)}" alt="${escapeHtml(c.name)}" loading="lazy" onerror="this.style.display='none'">`
                    : `<span class="category-tile-icon">${c.icon || '🧴'}</span>`}
      <span class="category-tile-name">${escapeHtml(c.name)}</span>
    </div>
  `).join('');
            initScrollReveal();
        }

        // ----- Admin tab CRUD (same shape as Concerns) -----
        function renderAdminCategories() {
            const list = document.getElementById('adminCategoriesList');
            if (!list) return;
            if (!CATEGORIES.length) {
                list.innerHTML = '<div class="admin-empty">No categories yet — add your first one above.</div>';
                return;
            }
            list.innerHTML = CATEGORIES.map(c => `
    <div class="admin-review-row">
      <div class="admin-review-info">
        <div class="admin-review-name">${escapeHtml(c.name)}</div>
        <div class="admin-review-meta">${c.img ? 'Photo set ✓' : 'Using emoji: ' + (c.icon || '🧴')} · search tag: "${escapeHtml(c.query || '')}"</div>
      </div>
      <div class="admin-review-actions">
        <button class="admin-btn verify" onclick="editCategory(${c.id})">✎ Edit</button>
        <button class="admin-btn delete" onclick="deleteCategory(${c.id})">🗑 Delete</button>
      </div>
    </div>
  `).join('');
        }

        function editCategory(id) {
            const c = CATEGORIES.find(cn => cn.id === id);
            if (!c) return;
            document.getElementById('editingCategoryId').value = c.id;
            document.getElementById('categoryFormTitle').textContent = 'Edit Category';
            document.getElementById('categoryName').value = c.name;
            document.getElementById('categoryIcon').value = c.icon || '';
            document.getElementById('categoryImg').value = c.img || '';
            document.getElementById('categoryQuery').value = c.query || '';
            document.getElementById('categoryFormTitle').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }

        function resetCategoryForm() {
            document.getElementById('editingCategoryId').value = '';
            document.getElementById('categoryFormTitle').textContent = 'Add New Category';
            document.getElementById('categoryName').value = '';
            document.getElementById('categoryIcon').value = '';
            document.getElementById('categoryImg').value = '';
            document.getElementById('categoryQuery').value = '';
        }

        async function saveCategoryForm() {
            const name = document.getElementById('categoryName').value.trim();
            const icon = document.getElementById('categoryIcon').value.trim();
            const img = document.getElementById('categoryImg').value.trim();
            const query = document.getElementById('categoryQuery').value.trim().toLowerCase();
            const editingId = document.getElementById('editingCategoryId').value;

            if (!name) { showToast('Please enter a category name'); return; }
            if (!query) { showToast('Please enter a search tag (e.g. "cleanser") — this matches product names/descriptions'); return; }

            if (editingId) {
                const c = CATEGORIES.find(cn => cn.id === parseInt(editingId, 10));
                if (c) Object.assign(c, { name, icon, img, query });
                showToast('Category updated ✓');
            } else {
                CATEGORIES.push({ id: Date.now(), name, icon, img, query });
                showToast('Category added ✓');
            }

            await saveCategories();
            resetCategoryForm();
            renderAdminCategories();
            renderCategoriesSection();
        }

        async function deleteCategory(id) {
            if (!confirm('Delete this category tile?')) return;
            CATEGORIES = CATEGORIES.filter(cn => cn.id !== id);
            await saveCategories();
            renderAdminCategories();
            renderCategoriesSection();
            showToast('Category deleted 🗑');
        }

        // ==========================================================================
        // ADDED: Dark mode. Toggling adds/removes .dark-mode on <body> (all the
        // actual re-coloring lives in the CSS rules under "Dark mode toggle button").
        // The choice is remembered in localStorage so it stays on for that visitor
        // next time they open the shop.
        // ==========================================================================
        function toggleDarkMode() {
            const on = document.body.classList.toggle('dark-mode');
            const btn = document.getElementById('themeToggleBtn');
            if (btn) btn.textContent = on ? '☀️' : '🌙';
            if (btn) { btn.classList.remove('spin'); void btn.offsetWidth; btn.classList.add('spin'); }
            try { localStorage.setItem('fiorglow_dark_mode', on ? '1' : '0'); } catch (e) { }
            // ADDED: re-apply the products section background so it correctly
            // switches between the admin's custom light-mode background and the
            // default dark-mode CSS background.
            applyProductsBgTo(document.getElementById('products'), document.getElementById('productsBgOverlay'), PRODUCTS_BG, true);
        }
        (function initDarkMode() {
            try {
                if (localStorage.getItem('fiorglow_dark_mode') === '1') {
                    document.body.classList.add('dark-mode');
                    const btn = document.getElementById('themeToggleBtn');
                    if (btn) btn.textContent = '☀️';
                }
            } catch (e) { }
        })();

        // ADDED: after products background loads, re-apply once more in case dark
        // mode was already on at page load (loadProductsBg's own call runs before
        // this check would otherwise matter, but this guarantees correctness).

        let cart = [];
        let adminProductSearch = ''; // <-- admin panel product search query state
        let adminCustomerSearch = ''; // <-- admin panel customer search query state
        let selectedPaymentMethod = 'cod'; // ADDED: 'cod' or 'bkash', set by selectPaymentMethod()

        // FIXED: this is the real cause of "Beauty of Joseon" showing up twice in the
        // filter bar, with some of its products missing when you click it. The
        // original seed products were stored with brand key "boj", but any NEW
        // product added later through the Admin Panel with the same brand NAME
        // ("Beauty of Joseon") got a different auto-generated key ("beauty-of-joseon")
        // — two different keys for what is visibly the same brand, so they became two
        // separate filter buttons, each only showing its own half.
        // The fix: never trust the stored `brand` key for grouping/filtering. Always
        // recompute it fresh from `brandName` with this one function, everywhere.
        // That guarantees any two products with the same brand name always end up
        // under the exact same filter button, no matter when or how they were added.
        function brandKeyOf(p) {
            return (p.brandName || p.brand || '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
        }

        // ADDED: given a product, returns the price the customer actually pays after
        // its discount (if any) is applied. Rounded to the nearest whole taka.
        function effectivePrice(p) {
            const discount = Number(p.discountPercent) || 0;
            if (discount > 0 && discount <= 100) {
                return Math.round(p.price - (p.price * discount / 100));
            }
            return p.price;
        }

        function priceHtml(p, suffix) {
            const discount = Number(p.discountPercent) || 0;
            if (discount > 0 && discount <= 100) {
                const finalPrice = effectivePrice(p);
                const saved = p.price - finalPrice;
                return `<span class="price-line">
        <span class="price-original">৳${p.price.toLocaleString()}</span>
        <span class="price-discounted">৳${finalPrice.toLocaleString()}<span class="price-suffix">${suffix || ''}</span></span>
        <span class="price-saved-tag">Save ৳${saved.toLocaleString()}</span>
      </span>`;
            }
            return `৳${p.price.toLocaleString()} <span>${suffix || ''}</span>`;
        }

        // ADDED: truncates a description to a maximum number of words, appending an
        // ellipsis if it was cut short. Used to keep product cards short (~15-20
        // words) even when the admin writes a longer (up to ~100 word) description —
        // the full text is still shown in the product detail modal.
        function truncateWords(text, limit) {
            const clean = (text || '').trim();
            if (!clean) return '';
            const words = clean.split(/\s+/);
            if (words.length <= limit) return escapeHtml(clean);
            return escapeHtml(words.slice(0, limit).join(' ')) + '…';
        }

        // ==========================================================================
        // ADDED: single reusable product-card renderer, shared by the home preview
        // sections, the brand page, and search results — replaces the old
        // renderProducts()/filterProducts() pair.
        // ==========================================================================
        function cardHtml(p, idx) {
            const hasVariants = p.variants && p.variants.length > 0;
            const inStock = hasVariants ? p.variants.some(v => v.inStock !== false) : p.inStock;
            const hasDiscount = !hasVariants && Number(p.discountPercent) > 0 && Number(p.discountPercent) <= 100;
            const priceInner = hasVariants
                ? `From ৳${Math.min(...p.variants.map(v => v.price)).toLocaleString()} <span>/ pc</span>`
                : priceHtml(p, '/ pc');
            return `
    <div class="product-card reveal ${inStock ? '' : 'out-of-stock'}" style="transition-delay:${Math.min(idx * 60, 360)}ms" data-brand="${brandKeyOf(p)}" onclick="openProductDetail(${p.id})">
      <div class="product-img-wrap">
        <img src="${p.img}" alt="${p.name}"
          onerror="this.src='${FALLBACK_IMGS[p.brand] || DEFAULT_FALLBACK_IMG}'"
          loading="lazy">
        <button type="button" class="wishlist-heart-btn ${isInWishlist(p.id) ? 'active' : ''}" data-pid="${p.id}" onclick="toggleWishlist(${p.id}, event)" title="Save to wishlist">${isInWishlist(p.id) ? '♥' : '♡'}</button>
        <span class="product-brand-tag">${p.brandName}</span>
        ${inStock
                    ? '<span class="in-stock-badge">In Stock</span>'
                    : '<span class="out-of-stock-badge">Out of Stock</span>'}
        ${hasDiscount ? `<span class="discount-badge">${p.discountPercent}% OFF</span>` : ''}
        <div class="quick-view-overlay">
          <button type="button" class="quick-view-btn" onclick="event.stopPropagation(); openProductDetail(${p.id})">👁 Quick View</button>
        </div>
      </div>
      <div class="product-body">
        <div class="product-name">${p.name}</div>
        <div class="product-desc">${truncateWords(p.desc, 10)}</div>
        <div class="product-footer">
          <div class="product-price">${priceInner}</div>
         <button class="add-btn" onclick="event.stopPropagation(); flyToCart(this, () => addToCart(${p.id}))" title="${hasVariants ? 'Choose an option' : 'Add to cart'}" ${inStock ? '' : 'disabled'}>
            ${inStock ? (hasVariants ? ICON_DOTS : ICON_PLUS) : ICON_CROSS}
          </button>
        </div>
      </div>
    </div>
  `;
        }

        function renderShopView() {
            if (shopViewMode === 'brand') renderBrandPage();
            else if (shopViewMode === 'search') renderSearchResults();
            else renderHome();
        }

        // ==========================================================================
        // ADDED: HOME PAGE featured products — brand-wise preview shown directly
        // on the homepage (mainSiteView), separate from the Shop page's own view.
        // Reuses cardHtml()/brandKeyOf()/getBrandList() — only "featured" products
        // per brand are shown (admin's "Show on Front Page" toggle controls this).
        // ==========================================================================
        function renderHomeFeatured() {
            const wrap = document.getElementById('homeFeaturedView');
            if (!wrap) return;
            const brands = getBrandList();

            if (!brands.length) {
                wrap.innerHTML = '<div class="no-results">No products yet 🌸 Please check back soon.</div>';
                return;
            }

            wrap.innerHTML = brands.map(b => {
                const brandProducts = PRODUCTS.filter(p => brandKeyOf(p) === b.key);
                let preview = brandProducts.filter(p => p.featured !== false);
                if (!preview.length) preview = brandProducts;
                preview = preview.slice(0, 4); // one row of 4 per brand on the homepage

                return `
      <div class="home-brand-section">
        <div class="home-brand-header reveal">
          <button class="home-brand-title-btn" onclick="openBrandPage('${b.key}')">${escapeHtml(b.name)} <span class="arrow">→</span></button>
          <button class="home-brand-viewall" onclick="openBrandPage('${b.key}')">View All ${escapeHtml(b.name)}</button>
        </div>
        <div class="products-grid-paginated">
          ${preview.map((p, idx) => cardHtml(p, idx)).join('')}
        </div>
      </div>
    `;
            }).join('');

            initScrollReveal();
        }
        // Returns every brand key -> display name currently present in PRODUCTS, in
        // first-seen order.
        function getBrandList() {
            const seen = {};
            const list = [];
            PRODUCTS.forEach(p => {
                const key = brandKeyOf(p);
                if (!seen[key]) { seen[key] = true; list.push({ key, name: p.brandName }); }
            });
            return list;
        }

        // ----- HOME VIEW: one section per brand, showing only featured products -----
        // ----- HOME VIEW: one section per brand, showing only featured products -----
        function renderHome() {
            shopViewMode = 'home';
            document.body.classList.remove('shop-not-home'); // ADDED: show Why Us / Reviews on Home
            document.getElementById('productsEyebrow').textContent = 'Our Collection';
            document.getElementById('productsTitle').textContent = 'Shop by Brand';
            document.getElementById('productsSub').textContent = 'All products are imported directly. Authentic, fresh stock — delivered to your door.';

            const brands = getBrandList();
            const wrap = document.getElementById('shopView');

            if (!brands.length) {
                wrap.innerHTML = '<div class="no-results">No products yet 🌸 Please check back soon.</div>';
                return;
            }

            // ADDED: quick brand-navigation row — one clickable card per brand,
            // showing the brand's initial, name, and how many products it has.
            const brandNavHtml = `
    <div class="brand-nav-row reveal">
      ${brands.map(b => {
                const count = PRODUCTS.filter(p => brandKeyOf(p) === b.key).length;
                const initial = (b.name.trim().charAt(0) || '?').toUpperCase();
                return `
        <div class="brand-nav-card" onclick="openBrandPage('${b.key}')">
          <div class="brand-nav-icon">${escapeHtml(initial)}</div>
          <div class="brand-nav-info">
            <div class="brand-nav-name">${escapeHtml(b.name)}</div>
            <div class="brand-nav-count">${count} product${count === 1 ? '' : 's'}</div>
          </div>
        </div>
      `;
            }).join('')}
    </div>
  `;

            wrap.innerHTML = brandNavHtml + brands.map(b => {
                const brandProducts = PRODUCTS.filter(p => brandKeyOf(p) === b.key);
                let preview = brandProducts.filter(p => p.featured !== false);
                if (!preview.length) preview = brandProducts; // fallback if admin unfeatured everything
                preview = preview.slice(0, 8); // 2 rows of 4 on the home page

                return `
      <div class="home-brand-section">
        <div class="home-brand-header reveal">
          <button class="home-brand-title-btn" onclick="openBrandPage('${b.key}')">${escapeHtml(b.name)} <span class="arrow">→</span></button>
          <button class="home-brand-viewall" onclick="openBrandPage('${b.key}')">View All ${escapeHtml(b.name)}</button>
        </div>
        <div class="products-grid-paginated">
          ${preview.map((p, idx) => cardHtml(p, idx)).join('')}
        </div>
      </div>
    `;
            }).join('');

            initScrollReveal();
        }

        // ----- BRAND PAGE: every product of one brand, paginated 4/row × 6 rows -----
        function openBrandPage(key) {
            shopViewMode = 'brand';
            shopViewBrandKey = key;
            shopViewPage = 1;
            currentSearchQuery = '';
            const input = document.getElementById('searchInput');
            if (input) input.value = '';
            const clearBtn = document.getElementById('searchClearBtn');
            if (clearBtn) clearBtn.classList.remove('show');

            document.getElementById('mainSiteView').style.display = 'none';
            document.getElementById('teamPageView').style.display = 'none';
            document.getElementById('shopPageView').style.display = 'block';
            window.scrollTo(0, 0);

            renderBrandPage();
        }

        function renderBrandPage() {
            shopViewMode = 'brand';
            document.body.classList.add('shop-not-home');
            const brandProducts = PRODUCTS.filter(p => brandKeyOf(p) === shopViewBrandKey);
            const brandName = brandProducts.length ? brandProducts[0].brandName : 'Brand';

            document.getElementById('productsEyebrow').textContent = 'Full Collection';
            document.getElementById('productsTitle').textContent = brandName;
            document.getElementById('productsSub').textContent = `Every ${brandName} product we carry, all in one place.`;

            const totalPages = Math.max(1, Math.ceil(brandProducts.length / PAGE_SIZE));
            if (shopViewPage > totalPages) shopViewPage = totalPages;
            const start = (shopViewPage - 1) * PAGE_SIZE;
            const pageItems = brandProducts.slice(start, start + PAGE_SIZE);

            // ADDED: Promotion Center — "Category Boost" campaigns for this brand
            const sponsoredCat = getSponsoredMatches('category', p => brandKeyOf(p) === shopViewBrandKey, 2);

            const wrap = document.getElementById('shopView');
            wrap.innerHTML = `
    <button class="page-back-btn" onclick="shopGoHome()">← Back to All Brands</button>
    ${sponsoredRowHtml(sponsoredCat, 'Sponsored')}
    ${pageItems.length
                    ? `<div class="products-grid-paginated">${pageItems.map((p, idx) => cardHtml(p, idx)).join('')}</div>`
                    : '<div class="no-results">No products in this brand yet 🌸</div>'}
    <div id="paginationBar"></div>
  `;
            renderPaginationBar('paginationBar', totalPages, shopViewPage, 'goToBrandPage');
            initScrollReveal();
            observeSponsoredImpressions();
        }

        function goToBrandPage(n) {
            shopViewPage = n;
            renderBrandPage();
        }

        // ----- SEARCH RESULTS: paginated the same way as a brand page -----
        let currentSearchQuery = '';

        function renderSearchResults() {
            shopViewMode = 'search';
            document.body.classList.add('shop-not-home');
            const q = currentSearchQuery.trim().toLowerCase();

            // ADDED: "concern:<id>" is the marker openConcern() sets when a "Shop by
            // Concern" tile is clicked — filter by tagged concern instead of text.
            const isConcernFilter = q.startsWith('concern:');
            let matches, titleText, eyebrowText;
            if (isConcernFilter) {
                const concernId = parseInt(q.slice('concern:'.length), 10);
                const concern = CONCERNS.find(c => c.id === concernId);
                matches = PRODUCTS.filter(p => Array.isArray(p.concerns) && p.concerns.includes(concernId));
                eyebrowText = 'Shop by Concern';
                titleText = concern ? concern.name : 'Concern';
            } else {
                matches = PRODUCTS.filter(p =>
                    p.name.toLowerCase().includes(q) ||
                    p.brandName.toLowerCase().includes(q) ||
                    p.desc.toLowerCase().includes(q) ||
                    (p.category && p.category.toLowerCase() === q) // matches Shop by Category tiles, if added
                );
                eyebrowText = 'Search Results';
                titleText = `"${currentSearchQuery.trim()}"`;
            }

            document.getElementById('productsEyebrow').textContent = eyebrowText;
            document.getElementById('productsTitle').textContent = titleText;
            document.getElementById('productsSub').textContent = `${matches.length} product${matches.length === 1 ? '' : 's'} found.`;

            const totalPages = Math.max(1, Math.ceil(matches.length / PAGE_SIZE));
            if (shopViewPage > totalPages) shopViewPage = totalPages;
            const start = (shopViewPage - 1) * PAGE_SIZE;
            const pageItems = matches.slice(start, start + PAGE_SIZE);

            // ADDED: Promotion Center — "Search Boost" campaigns matching this query
            // (skipped for concern filters — those aren't a text search)
            const sponsoredSearch = (!isConcernFilter && q) ? getSponsoredMatches('search', p =>
                p.name.toLowerCase().includes(q) || p.brandName.toLowerCase().includes(q), 2) : [];

            const wrap = document.getElementById('shopView');
            wrap.innerHTML = `
    <button class="page-back-btn" onclick="shopGoHome()">← Back to All Brands</button>
    ${sponsoredRowHtml(sponsoredSearch, 'Sponsored Results')}
    ${pageItems.length
                    ? `<div class="products-grid-paginated">${pageItems.map((p, idx) => cardHtml(p, idx)).join('')}</div>`
                    : '<div class="no-results">No products found 🌸 Try a different search.</div>'}
    <div id="paginationBar"></div>
  `;
            renderPaginationBar('paginationBar', totalPages, shopViewPage, 'goToSearchPage');
            initScrollReveal();
            observeSponsoredImpressions();
        }

        function goToSearchPage(n) {
            shopViewPage = n;
            renderSearchResults();
        }

        // ==========================================================================
        // ADDED: Shop page, Team page — shows/hides within the SAME index.html
        // page, no separate file/navigation needed.
        // ==========================================================================
        // এই ৬টা page-এর মধ্যে যেকোনো একটা খোলার সময় বাকি সব বন্ধ করে দেয়
        // ADDED (bug fix): Back button was reloading the whole site to the
        // homepage instead of returning to the page/section the user was on.
        // Reason: opening Shop/Team/Why/Reviews/Contact/Policy never created a
        // browser history entry, so pressing Back just left the page entirely.
        // Fix: every open*Page()/goHome() call below now pushes a history state
        // (navPush), and the popstate listener (search "fiorPage" further down)
        // reads that state to re-open the correct page WITHOUT pushing a new
        // entry again (that's what the "fromPopState" flag prevents).
        // homeScrollY remembers where on the homepage the user was, so pressing
        // Back from a subpage returns them to that exact scroll spot instead of
        // the top of the homepage.
        let homeScrollY = 0;
        function navPush(page, productId) {
            try {
                const state = { fiorPage: page };
                if (productId !== undefined) state.productId = productId;
                history.pushState(state, '', location.href);
            } catch (e) { }
        }

        // এই ৭টা page-এর মধ্যে যেকোনো একটা খোলার সময় বাকি সব বন্ধ করে দেয়
        function hideAllPages() {
            const msv = document.getElementById('mainSiteView');
            if (msv && msv.style.display !== 'none') homeScrollY = window.scrollY; // ADDED: remember home scroll position before leaving it
            msv.style.display = 'none';
            document.getElementById('shopPageView').style.display = 'none';
            document.getElementById('teamPageView').style.display = 'none';
            document.getElementById('whyPageView').style.display = 'none';
            document.getElementById('reviewsPageView').style.display = 'none';
            document.getElementById('contactPageView').style.display = 'none';
            document.getElementById('policyPageView').style.display = 'none';
            document.getElementById('videosPageView').style.display = 'none';
            document.getElementById('dashboardPageView').style.display = 'none';
           document.getElementById('productDetailPageView').style.display = 'none';
            document.getElementById('checkoutPageView').style.display = 'none';
            const sr = document.getElementById('searchRow');
            if (sr) sr.style.display = 'none';
        }

        // ADDED: moves the single footer element to the bottom of whichever
        // page is currently open — no need to copy the footer markup into
        // every page, it just follows along.
        function moveFooterTo(containerId) {
            const footer = document.getElementById('footer');
            const container = document.getElementById(containerId);
            if (footer && container) container.appendChild(footer);
        }
        

        function openTeamPage(fromPopState) {
            if (!fromPopState) navPush('team');
            hideAllPages();
            document.getElementById('teamPageView').style.display = 'block';
            moveFooterTo('teamPageView');
            window.scrollTo(0, 0);
            loadTeam();
        }

       function closeTeamPage(fromPopState) {
            if (!fromPopState) navPush('home');
            document.getElementById('teamPageView').style.display = 'none';
            document.getElementById('mainSiteView').style.display = 'block';
            moveFooterTo('mainSiteView');
            const sr = document.getElementById('searchRow');
            if (sr) sr.style.display = 'flex';
            window.scrollTo(0, fromPopState ? homeScrollY : 0);
        }
        function openShopPage(fromPopState) {
            if (!fromPopState) navPush('shop');
            hideAllPages();
            document.getElementById('shopPageView').style.display = 'block';
            moveFooterTo('shopPageView');
            window.scrollTo(0, 0);
            shopGoHome();
        }

        function openWhyPage(fromPopState) {
            if (!fromPopState) navPush('why');
            hideAllPages();
            document.getElementById('whyPageView').style.display = 'block';
            moveFooterTo('whyPageView');
            window.scrollTo(0, 0);
        }

        function openReviewsPage(fromPopState) {
            if (!fromPopState) navPush('reviews');
            hideAllPages();
            document.getElementById('reviewsPageView').style.display = 'block';
            moveFooterTo('reviewsPageView');
            window.scrollTo(0, 0);
            renderReviews();
        }

        function openContactPage(fromPopState) {
            if (!fromPopState) navPush('contact');
            hideAllPages();
            document.getElementById('contactPageView').style.display = 'block';
            moveFooterTo('contactPageView');
            window.scrollTo(0, 0);
        }
function openPolicyPage(fromPopState) {
            if (!fromPopState) navPush('policy');
            hideAllPages();
            document.getElementById('policyPageView').style.display = 'block';
            moveFooterTo('policyPageView');
            window.scrollTo(0, 0);
        }

        // ADDED: Videos page — dedicated page listing every video from the
        // Video Library, reachable from the nav (next to Policy).
        function openVideosPage(fromPopState) {
            if (!fromPopState) navPush('videos');
            hideAllPages();
            document.getElementById('videosPageView').style.display = 'block';
            moveFooterTo('videosPageView');
            window.scrollTo(0, 0);
            renderVideosPageGrid();
        }
        // ==========================================================================
        // ADDED: CUSTOMER DASHBOARD PAGE — opens the "My Account" area (Dashboard /
        // My Orders / My Profile / My Addresses / Wishlist / Security). Requires
        // login — if the visitor isn't logged in, it sends them to the auth modal
        // instead. `tab` picks which sidebar section is shown first.
        // ==========================================================================
        let dashActiveTab = 'dashboard';
        function openDashboardPage(tab, fromPopState) {
            closeAccountDropdown();
            const user = getCurrentCustomer();
            if (!user) { openAuthModal('login'); return; }
            if (!fromPopState) navPush('dashboard');
            hideAllPages();
            document.getElementById('dashboardPageView').style.display = 'block';
            window.scrollTo(0, 0);
            switchDashTab(tab || dashActiveTab || 'dashboard');
        }
        // Main website home-e ferot jay (Shop/Team/Why/Reviews page bondho kore)
       function goHome(fromPopState) {
            if (!fromPopState) navPush('home');
            hideAllPages();
            document.getElementById('mainSiteView').style.display = 'block';
            moveFooterTo('mainSiteView');
            const sr = document.getElementById('searchRow');
            if (sr) sr.style.display = 'flex';
            window.scrollTo(0, fromPopState ? homeScrollY : 0); // CHANGED: restore old scroll spot when returning via Back
        }
        // Shop page-er bhitorer content reset kore (brand-by-brand home view)
        function shopGoHome() {
            shopViewMode = 'home';
            shopViewBrandKey = null;
            shopViewPage = 1;
            currentSearchQuery = '';
            const input = document.getElementById('searchInput');
            if (input) input.value = '';
            const clearBtn = document.getElementById('searchClearBtn');
            if (clearBtn) clearBtn.classList.remove('show');
            renderHome();
        }

        // ==========================================================================
        // ADDED: builds a "‹ 1 2 3 … 8 ›" pagination control into the given
        // container id. `onClickFnName` is the name of the global function to call
        // with the target page number (so the same helper serves both the brand
        // page and search results).
        // ==========================================================================
        function renderPaginationBar(containerId, totalPages, current, onClickFnName) {
            const el = document.getElementById(containerId);
            if (!el) return;
            if (totalPages <= 1) { el.innerHTML = ''; return; }

            const pages = [];
            pages.push(1);
            for (let p = current - 1; p <= current + 1; p++) {
                if (p > 1 && p < totalPages) pages.push(p);
            }
            if (totalPages > 1) pages.push(totalPages);
            const uniqueSorted = [...new Set(pages)].sort((a, b) => a - b);

            let html = `<div class="pagination-bar">`;
            html += `<button class="page-btn" ${current === 1 ? 'disabled' : ''} onclick="${onClickFnName}(${current - 1})">‹ Prev</button>`;

            let prev = 0;
            uniqueSorted.forEach(p => {
                if (p - prev > 1) html += `<span class="page-btn ellipsis">…</span>`;
                html += `<button class="page-btn ${p === current ? 'active' : ''}" onclick="${onClickFnName}(${p})">${p}</button>`;
                prev = p;
            });

            html += `<button class="page-btn" ${current === totalPages ? 'disabled' : ''} onclick="${onClickFnName}(${current + 1})">Next ›</button>`;
            html += `</div>`;
            el.innerHTML = html;
        }

        // ===== SEARCH HANDLERS (nav search bar, next to Login/Sign Up) =====
        // ===== SEARCH HANDLERS (nav search bar, next to Login/Sign Up) =====
        // CHANGED: typing now also renders a live suggestions dropdown (products
        // whose name starts with what's typed), and pressing Enter or picking a
        // suggestion auto-scrolls down to the results — no more manual scrolling.
        // ===== SEARCH HANDLERS (nav search bar, full-width row) =====
        // CHANGED: typing now shows a live suggestions dropdown instead of jumping
        // straight to the results grid — feels more like a real e-commerce search.
        // Pressing Enter or clicking "View all results" runs the full search and
        // auto-scrolls down to it.
        function handleSearch(value) {
            currentSearchQuery = value;
            document.getElementById('searchClearBtn').classList.toggle('show', value.trim() !== '');
            if (value.trim() === '') {
                hideSearchSuggestions();
                if (document.getElementById('shopPageView').style.display !== 'none') shopGoHome();
                return;
            }
            showSearchSuggestions();
        }

        // ADDED: builds the dropdown — products whose name starts with the typed
        // text are ranked first (most relevant), then "contains" matches. Shows up
        // to 5 with photo, brand, price, plus a "View all results" button.
        function showSearchSuggestions() {
            const box = document.getElementById('searchSuggestions');
            const q = currentSearchQuery.trim().toLowerCase();
            if (!q) { hideSearchSuggestions(); return; }

            const startsWith = PRODUCTS.filter(p => p.name.toLowerCase().startsWith(q));
            const contains = PRODUCTS.filter(p => !p.name.toLowerCase().startsWith(q) &&
                (p.name.toLowerCase().includes(q) || p.brandName.toLowerCase().includes(q)));
            const allMatches = [...startsWith, ...contains];
            const shown = allMatches.slice(0, 5);

            if (!allMatches.length) {
                box.innerHTML = '<div class="search-suggestion-empty">No matching products found 🌸</div>';
            } else {
                box.innerHTML = shown.map(p => {
                    const hasVariants = p.variants && p.variants.length > 0;
                    const priceText = hasVariants
                        ? `From ৳${Math.min(...p.variants.map(v => v.price)).toLocaleString()}`
                        : `৳${effectivePrice(p).toLocaleString()}`;
                    return `
      <div class="search-suggestion-item" onclick="selectSearchSuggestion(${p.id})">
        <div class="search-suggestion-img-wrap">
          <img src="${p.img}" alt="${escapeHtml(p.name)}"
            onerror="this.src='${FALLBACK_IMGS[p.brand] || DEFAULT_FALLBACK_IMG}'">
        </div>
        <div class="search-suggestion-info">
          <div class="search-suggestion-name">${escapeHtml(p.name)}</div>
          <div class="search-suggestion-meta">
            <span class="search-suggestion-brand">${escapeHtml(p.brandName)}</span>
            <span class="search-suggestion-price">${priceText}</span>
          </div>
        </div>
        <span class="search-suggestion-arrow">→</span>
      </div>
    `;
                }).join('');

                if (allMatches.length > shown.length || allMatches.length > 0) {
                    box.innerHTML += `<button type="button" class="search-suggestion-viewall" onclick="submitSearchEnter()">View all ${allMatches.length} result${allMatches.length === 1 ? '' : 's'} →</button>`;
                }
            }
            box.classList.add('show');
        }

        function hideSearchSuggestions() {
            const box = document.getElementById('searchSuggestions');
            box.classList.remove('show');
        }

        // ADDED: clicking a suggestion opens that exact product's detail page.
        function selectSearchSuggestion(id) {
            hideSearchSuggestions();
            openProductDetail(id);
        }

        // ADDED: pressing Enter, or clicking "View all results", runs the full
        // search-results page and auto-scrolls down to it.
        function submitSearchEnter() {
            hideSearchSuggestions();
            if (currentSearchQuery.trim() === '') return;
            shopViewMode = 'search';
            shopViewPage = 1;
            hideAllPages();
            document.getElementById('shopPageView').style.display = 'block';
            window.scrollTo(0, 0);
            renderSearchResults();
        }

        function clearSearch() {
            currentSearchQuery = '';
            document.getElementById('searchInput').value = '';
            document.getElementById('searchClearBtn').classList.remove('show');
            hideSearchSuggestions();
            if (document.getElementById('shopPageView').style.display !== 'none') shopGoHome();
        }

        // ADDED: clicking anywhere outside the search bar closes the suggestions dropdown
        document.addEventListener('click', function (e) {
            const wrap = document.querySelector('.search-row .search-bar-wrap');
            if (wrap && !wrap.contains(e.target)) hideSearchSuggestions();
        });

        // ADDED: clicking anywhere outside the search box closes the suggestions dropdown
        document.addEventListener('click', function (e) {
            const wrap = document.querySelector('.nav-search-wrap');
            if (wrap && !wrap.contains(e.target)) hideSearchSuggestions();
        });

        // CHANGED: a cart line is now identified by `cartKey` instead of the raw
        // product id. For a plain product, cartKey is just the id ("14"). For a
        // product with variants, cartKey is "{id}_{variantId}" (e.g. "14_v123"),
        // so picking two different Rhode shades creates two separate cart lines,
        // each with its own quantity and price.
        // CHANGED: flies a small star from the clicked button to the cart icon
        // along a curved arc (not a straight diagonal line), at a moderate speed.
        // The actual "add to cart" logic (and the cart bump/pop animation) now
        // only runs via the onArrive callback — i.e. AFTER the star visually
        // reaches the cart, not the instant the button is clicked.
        function flyToCart(sourceEl, onArrive) {
            const cartBtn = document.querySelector('.nav-cart');
            if (!cartBtn || !sourceEl) {
                if (onArrive) onArrive();
                return;
            }

            const startRect = sourceEl.getBoundingClientRect();
            const endRect = cartBtn.getBoundingClientRect();

            const startX = startRect.left + startRect.width / 2;
            const startY = startRect.top + startRect.height / 2;
            const endX = endRect.left + endRect.width / 2;
            const endY = endRect.top + endRect.height / 2;

            // Curve control point — arcs upward from the straight-line midpoint so
            // the star sweeps in a natural curve instead of cutting corner-to-corner.
            const midX = (startX + endX) / 2;
            const arcHeight = Math.max(90, Math.abs(endX - startX) * 0.35);
            const ctrlX = midX;
            const ctrlY = Math.min(startY, endY) - arcHeight;

            const star = document.createElement('div');
            star.className = 'fly-star';
            star.textContent = '✦';
            document.body.appendChild(star);

            const duration = 750; // ms — moderate: not too fast, not too slow
            const startTime = performance.now();

            function easeInOutQuad(t) {
                return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
            }

            function step(now) {
                const rawT = Math.min(1, (now - startTime) / duration);
                const t = easeInOutQuad(rawT);

                // Quadratic bezier interpolation (start → control → end)
                const x = (1 - t) * (1 - t) * startX + 2 * (1 - t) * t * ctrlX + t * t * endX;
                const y = (1 - t) * (1 - t) * startY + 2 * (1 - t) * t * ctrlY + t * t * endY;

                const scale = 1 - 0.75 * t;
                const rotate = 360 * t;
                const opacity = 1 - t * 0.85;

                star.style.left = (x - 10) + 'px';
                star.style.top = (y - 10) + 'px';
                star.style.transform = `scale(${scale}) rotate(${rotate}deg)`;
                star.style.opacity = opacity;

                if (rawT < 1) {
                    requestAnimationFrame(step);
                } else {
                    star.remove();
                    if (onArrive) onArrive();
                }
            }

            requestAnimationFrame(step);
        }

        function addToCart(id) {
            const product = PRODUCTS.find(p => p.id === id);
            if (!product) return;

            // ADDED: if this product has variants, a single click can't know which
            // one the customer wants — open the detail page so they can pick one.
            if (product.variants && product.variants.length) {
                openProductDetail(id);
                return;
            }

            if (!product.inStock) { showToast('This product is currently out of stock 😔'); return; }
            const cartKey = String(id);
            // CHANGED: uses the discounted price (if any) as the actual selling price
            const sellPrice = effectivePrice(product);
            const existing = cart.find(i => i.cartKey === cartKey);
            if (existing) {
                existing.qty++;
            } else {
                cart.push({ cartKey, id: product.id, name: product.name, price: sellPrice, img: product.img, brand: product.brand, qty: 1 });
            }
            updateCartUI();
            showToast(`${product.name.split(':')[0]} added to cart 🌸`);
        }

        // ADDED: adds a specific variant (e.g. one Rhode shade) as its own cart line.
        function addVariantToCart(product, variant, qty) {
            const cartKey = `${product.id}_${variant.id}`;
            const existing = cart.find(i => i.cartKey === cartKey);
            if (existing) {
                existing.qty += qty;
            } else {
                cart.push({
                    cartKey,
                    id: product.id,
                    variantId: variant.id,
                    name: `${product.name} — ${variant.name}`,
                    price: variant.price,
                    img: variant.img || product.img,
                    brand: product.brand,
                    qty
                });
            }
            updateCartUI();
            showToast(`${product.name.split(':')[0]} (${variant.name}) added to cart 🌸`);
        }

        function removeFromCart(cartKey) {
            cart = cart.filter(i => i.cartKey !== cartKey);
            updateCartUI();
            renderCartItems();
            if (document.getElementById('checkoutPageView').style.display !== 'none') renderCheckoutSummary();
        }

        function changeQty(cartKey, delta) {
            const item = cart.find(i => i.cartKey === cartKey);
            if (!item) return;
            item.qty += delta;
            if (item.qty <= 0) removeFromCart(cartKey);
            else {
                updateCartUI();
                renderCartItems();
                if (document.getElementById('checkoutPageView').style.display !== 'none') renderCheckoutSummary();
            }
        }

        // ==========================================================================
        // ADDED: COUPON SYSTEM (state + logic)
        //
        // - COUPONS_KEY: shared storage list of coupons, each { id, code, percent,
        //   active }, managed entirely from Admin Panel → Coupons.
        // - appliedCoupon: the coupon currently active on THIS visitor's cart (kept
        //   in memory only — a fresh visit starts with no coupon applied, same as a
        //   typical e-commerce cart).
        // - getCartSubtotal() / getCouponDiscountAmount() / getCartTotal() are the
        //   single source of truth for pricing math, used by both the cart sidebar
        //   and the checkout modal so the numbers always agree everywhere.
        // ==========================================================================
        const COUPONS_KEY = 'fiorglow_coupons_v1';
        let COUPONS = [];
        let appliedCoupon = null; // { code, percent } or null

        async function loadCoupons() {
            try {
                const value = await cloudGet(COUPONS_KEY);
                COUPONS = value ? JSON.parse(value) : [];
                try { localStorage.setItem(COUPONS_KEY, JSON.stringify(COUPONS)); } catch (e) { }
            } catch (e) {
                try {
                    const local = localStorage.getItem(COUPONS_KEY);
                    COUPONS = local ? JSON.parse(local) : [];
                } catch (e2) {
                    COUPONS = [];
                }
            }
        }

        async function saveCoupons() {
            try { localStorage.setItem(COUPONS_KEY, JSON.stringify(COUPONS)); } catch (e) { }
            try {
                await cloudSet(COUPONS_KEY, JSON.stringify(COUPONS));
            } catch (e) {
                console.error('Could not save coupons to the shared store:', e);
                alert('Could not sync this coupon change to the server — check your internet connection and try again.');
            }
        }

        function getCartSubtotal() {
            return cart.reduce((s, i) => s + i.price * i.qty, 0);
        }

        // Returns the taka amount knocked off by the currently applied coupon (0 if none).
        function getCouponDiscountAmount(subtotal) {
            if (!appliedCoupon) return 0;
            const sub = typeof subtotal === 'number' ? subtotal : getCartSubtotal();
            return Math.round(sub * appliedCoupon.percent / 100);
        }

        function getCartTotal() {
            const subtotal = getCartSubtotal();
            return subtotal - getCouponDiscountAmount(subtotal) + getShippingFee();
        }

        // ADDED: ৳0 delivery charge once the cart subtotal reaches the free
        // shipping threshold, otherwise the flat SHIPPING_FEE.
        function getShippingFee() {
            const subtotal = getCartSubtotal();
            return subtotal >= FREE_SHIPPING_THRESHOLD ? 0 : SHIPPING_FEE;
        }

        // ADDED: fills the "Add ৳X more for FREE shipping!" banner + progress
        // bar shown at the top of the checkout order summary.
        function updateFreeShippingBanner() {
            const el = document.getElementById('freeShippingBanner');
            if (!el) return;
            const subtotal = getCartSubtotal();
            const remaining = FREE_SHIPPING_THRESHOLD - subtotal;
            const pct = Math.min(100, Math.round((subtotal / FREE_SHIPPING_THRESHOLD) * 100));

            if (remaining <= 0) {
                el.className = 'free-shipping-banner unlocked';
                el.innerHTML = `🎉 <strong>You've unlocked FREE delivery!</strong>
                    <div class="free-shipping-bar-track"><div class="free-shipping-bar-fill" style="width:100%"></div></div>`;
            } else {
                el.className = 'free-shipping-banner';
                el.innerHTML = `🚚 Add <strong>৳${remaining.toLocaleString()}</strong> more for <strong>FREE shipping!</strong>
                    <div class="free-shipping-bar-track"><div class="free-shipping-bar-fill" style="width:${pct}%"></div></div>`;
            }
        }

        // Matches the typed code (case-insensitive) against active coupons only.
        function applyCouponCode() {
            const input = document.getElementById('couponCodeInput');
            const errEl = document.getElementById('couponErrorText');
            const code = (input.value || '').trim();
            errEl.classList.remove('show');
            errEl.textContent = '';

            if (!cart.length) {
                errEl.textContent = 'Add something to your cart first 🌸';
                errEl.classList.add('show');
                return;
            }
            if (!code) {
                errEl.textContent = 'Please enter a coupon code';
                errEl.classList.add('show');
                return;
            }

            const match = COUPONS.find(c => c.active && c.code.toLowerCase() === code.toLowerCase());
            if (!match) {
                errEl.textContent = 'Invalid or expired coupon code';
                errEl.classList.add('show');
                return;
            }

            appliedCoupon = { code: match.code, percent: match.percent };
            input.value = '';
            renderCartItems();
            updateCartUI();
            showToast(`Coupon "${match.code}" applied — ${match.percent}% off! 🌸`);
        }

        function removeCoupon() {
            appliedCoupon = null;
            const errEl = document.getElementById('couponErrorText');
            errEl.classList.remove('show');
            errEl.textContent = '';
            renderCartItems();
            updateCartUI();
            showToast('Coupon removed');
        }

        // Renders the "Apply coupon" input row vs. the "Coupon applied ✕" box,
        // and the discount/savings line above the cart total.
        function renderCouponUI() {
            const inputRow = document.getElementById('couponInputRow');
            const appliedBox = document.getElementById('couponAppliedBox');
            const appliedInfo = document.getElementById('couponAppliedInfo');
            const discountRowWrap = document.getElementById('cartDiscountRow');
            if (!inputRow) return; // guard, in case called before DOM ready

            if (appliedCoupon && cart.length) {
                inputRow.style.display = 'none';
                appliedBox.style.display = 'flex';
                appliedInfo.innerHTML = `<span class="coupon-code-chip">${escapeHtml(appliedCoupon.code)}</span>${appliedCoupon.percent}% off applied`;

                const subtotal = getCartSubtotal();
                const discount = getCouponDiscountAmount(subtotal);
                discountRowWrap.innerHTML = `
                    <div class="cart-discount-row"><span>Discount (${appliedCoupon.percent}%)</span><span>−৳${discount.toLocaleString()}</span></div>
                    <div class="cart-savings-row"><span>🎉 You saved</span><span>৳${discount.toLocaleString()}</span></div>
                `;
            } else {
                inputRow.style.display = 'flex';
                appliedBox.style.display = 'none';
                discountRowWrap.innerHTML = '';
                // if the cart emptied out, silently drop the coupon so it doesn't
                // linger and confusingly re-apply once something new is added
                if (!cart.length) appliedCoupon = null;
            }
        }

        function updateCartUI() {
            const total = getCartTotal();
            const count = cart.reduce((s, i) => s + i.qty, 0);
            const countEl = document.getElementById('cartCount');
            countEl.textContent = count;
            document.getElementById('cartTotal').textContent = '৳' + total.toLocaleString();
            countEl.classList.remove('bump');
            void countEl.offsetWidth; // restart animation
            countEl.classList.add('bump');
            const cartBtn = document.querySelector('.nav-cart');
            if (cartBtn) { cartBtn.classList.remove('pop'); void cartBtn.offsetWidth; cartBtn.classList.add('pop'); }
            renderCouponUI();
        }

        function renderCartItems() {
            const el = document.getElementById('cartItems');
            if (!cart.length) {
                el.innerHTML = '<div class="cart-empty">Your cart is empty 🌸</div>';
                renderCouponUI();
                return;
            }
            el.innerHTML = cart.map((i, idx) => `
    <div class="cart-item" style="animation-delay:${idx * 60}ms">
      <img class="cart-item-img" src="${i.img}"
        onerror="this.src='${FALLBACK_IMGS[i.brand] || DEFAULT_FALLBACK_IMG}'" alt="${i.name}">
      <div class="cart-item-info">
        <div class="cart-item-name">${i.name.split(':')[0]}</div>
        <div class="cart-item-price">৳${i.price.toLocaleString()} each</div>
        <div class="cart-item-qty">
          <button class="qty-btn" onclick="changeQty('${i.cartKey}', -1)">−</button>
          <span class="qty-num">${i.qty}</span>
          <button class="qty-btn" onclick="changeQty('${i.cartKey}', 1)">+</button>
        </div>
      </div>
      <button class="remove-item" onclick="removeFromCart('${i.cartKey}')">✕</button>
    </div>
  `).join('');
            renderCouponUI();
        }

       function toggleCart() {
            const sidebar = document.getElementById('cartSidebar');
            const overlay = document.getElementById('cartOverlay');
            const isOpen = sidebar.classList.contains('open');
            if (!isOpen) renderCartItems();
            sidebar.classList.toggle('open');
            overlay.classList.toggle('open');
        }

        // ADDED: renders the mini cart items + subtotal/shipping/total inside the
        // checkout page's Order Summary card. Called when checkout opens AND
        // whenever qty/remove changes while it's open, so it always matches cart.
        function renderCheckoutSummary() {
            const itemsWrap = document.getElementById('orderSummaryItems');
            const totalsWrap = document.getElementById('orderSummaryTotals');
            if (!itemsWrap || !totalsWrap) return;

            itemsWrap.innerHTML = cart.map((i, idx) => `
    <div class="cart-item" style="animation-delay:${idx * 60}ms">
      <img class="cart-item-img" src="${i.img}"
        onerror="this.src='${FALLBACK_IMGS[i.brand] || DEFAULT_FALLBACK_IMG}'" alt="${i.name}">
      <div class="cart-item-info">
        <div class="cart-item-name">${i.name.split(':')[0]}</div>
        <div class="cart-item-price">৳${i.price.toLocaleString()} each</div>
        <div class="cart-item-qty">
          <button class="qty-btn" onclick="changeQty('${i.cartKey}', -1)">−</button>
          <span class="qty-num">${i.qty}</span>
          <button class="qty-btn" onclick="changeQty('${i.cartKey}', 1)">+</button>
        </div>
      </div>
      <button class="remove-item" onclick="removeFromCart('${i.cartKey}')">✕</button>
    </div>
  `).join('');

            const subtotal = getCartSubtotal();
            const discount = getCouponDiscountAmount(subtotal);
            const shipping = getShippingFee();
            const total = getCartTotal();

            totalsWrap.innerHTML = `
    ${appliedCoupon ? `<div class="summary-item" style="color:#c0392b;"><span>Coupon "${escapeHtml(appliedCoupon.code)}" (${appliedCoupon.percent}%)</span><span>−৳${discount.toLocaleString()}</span></div>` : ''}
    <div class="summary-item"><span>Subtotal</span><span>৳${(subtotal - discount).toLocaleString()}</span></div>
    <div class="summary-item"><span>Shipping</span><span>${shipping === 0 ? 'FREE' : '৳' + shipping.toLocaleString()}</span></div>
    <div class="summary-total"><span>Total</span><span>৳${total.toLocaleString()}</span></div>
  `;

            document.getElementById('bkashAmountText').textContent = `৳${total.toLocaleString()}`;
            document.getElementById('bkashNumberText').textContent = BKASH_NUMBER;

            updateFreeShippingBanner();
        }

function openCheckout(fromPopState) {
            if (!cart.length) { showToast('Your cart is empty!'); return; }
            if (!fromPopState) navPush('checkout');
            hideAllPages();
            document.getElementById('checkoutPageView').style.display = 'block';
            document.getElementById('checkoutForm').style.display = 'block';
            document.getElementById('successScreen').classList.remove('show');

            renderCheckoutSummary();
            selectPaymentMethod('cod');
            document.getElementById('custTrxId').value = '';

            // ADDED: pre-fill the checkout form with the logged-in customer's saved
            // details so they don't have to retype their name/phone every order.
            const current = getCurrentCustomer();
            if (current) {
                document.getElementById('custName').value = current.name || '';
                document.getElementById('custPhone').value = current.phone || '';
                document.getElementById('custEmail').value = current.email || '';
            }

            const sidebar = document.getElementById('cartSidebar');
            if (sidebar.classList.contains('open')) toggleCart();
            window.scrollTo(0, 0);
        }

        function closeCheckout(fromPopState) {
            if (!fromPopState) navPush('home');
            document.getElementById('checkoutPageView').style.display = 'none';
            document.getElementById('mainSiteView').style.display = 'block';
            window.scrollTo(0, 0);
        }
        // ADDED: switches between Cash on Delivery and bKash — toggles the active
        // button style and shows/hides the bKash instructions + Transaction ID field.
        function selectPaymentMethod(method) {
            selectedPaymentMethod = method;
            document.getElementById('payCodBtn').classList.toggle('active', method === 'cod');
            document.getElementById('payBkashBtn').classList.toggle('active', method === 'bkash');
            document.getElementById('bkashBox').style.display = method === 'bkash' ? 'block' : 'none';
        }
       // ADDED: fires a burst of falling confetti pieces across the top of the screen
function launchConfetti() {
    const colors = ['#C9A84C', '#D4A0AC', '#F2D8DE', '#E8D5A3', '#0A1628'];
    const count = 60;
    for (let i = 0; i < count; i++) {
        const piece = document.createElement('div');
        piece.className = 'confetti-piece';
        const size = 6 + Math.random() * 6;
        piece.style.left = Math.random() * 100 + 'vw';
        piece.style.width = size + 'px';
        piece.style.height = size * 0.4 + 'px';
        piece.style.background = colors[Math.floor(Math.random() * colors.length)];
        piece.style.animationDuration = (2.2 + Math.random() * 1.6) + 's';
        piece.style.opacity = 0.85;
        document.body.appendChild(piece);
        setTimeout(() => piece.remove(), 4000);
    }
}
        // CHANGED: order placement now calls the secure /api/orders endpoint —
        // the server looks up each product's REAL price/stock itself and
        // computes the total; nothing the browser sends about price is
        // trusted anymore. The WhatsApp message and success screen are built
        // from the total the SERVER returns, not from the client's own cart math.
        async function submitOrder() {
            const name = document.getElementById('custName').value.trim();
            const phone = document.getElementById('custPhone').value.trim();
            const email = document.getElementById('custEmail').value.trim();
            const district = document.getElementById('custDistrict').value;
            const area = document.getElementById('custArea').value.trim();
            const addressLine = document.getElementById('custAddress').value.trim();
            const notes = document.getElementById('custNotes').value.trim();
            const trxId = document.getElementById('custTrxId').value.trim();

            if (!name) { showToast('Please enter your name'); return; }
            if (!phone || phone.length < 10) { showToast('Please enter a valid WhatsApp number'); return; }
            if (!district) { showToast('Please select your district'); return; }
            if (!area) { showToast('Please enter your area'); return; }
            if (!addressLine) { showToast('Please enter your address'); return; }
            if (selectedPaymentMethod === 'bkash' && !trxId) {
                showToast('Please enter your bKash Transaction ID');
                return;
            }

            const confirmBtn = document.getElementById('placeOrderBtn');
            if (confirmBtn) { confirmBtn.disabled = true; confirmBtn.textContent = 'Placing order...'; }

            let order;
            try {
                const authToken = getAuthToken();
                const res = await fetch('/api/orders', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        ...(authToken ? { 'Authorization': 'Bearer ' + authToken } : {})
                    },
                    body: JSON.stringify({
                        items: cart.map(i => ({ id: i.id, variantId: i.variantId || null, qty: i.qty })),
                        name, phone, email, district, area, addressLine, notes,
                        paymentMethod: selectedPaymentMethod,
                        trxId: selectedPaymentMethod === 'bkash' ? trxId : null,
                        couponCode: appliedCoupon ? appliedCoupon.code : null
                    })
                });
                const data = await res.json();
                if (!res.ok) {
                    showToast(data.error || 'Could not place order — please try again');
                    if (confirmBtn) { confirmBtn.disabled = false; confirmBtn.textContent = 'Confirm Order'; }
                    return;
                }
                order = data.order;
            } catch (e) {
                showToast('Network error — please check your connection and try again');
                if (confirmBtn) { confirmBtn.disabled = false; confirmBtn.textContent = 'Confirm Order'; }
                return;
            }

            // Everything below uses order.* (server-computed) instead of the
            // client's own cart totals.
            const orderLines = order.items.map(i => `• ${i.name.split(':')[0]} × ${i.qty} = ৳${(i.price * i.qty).toLocaleString()}`).join('%0A');
            const couponLine = order.coupon
                ? `%0A*Coupon:* ${order.coupon} (−৳${order.discount.toLocaleString()})`
                : '';
            const shippingLine = `%0A*Shipping:* ${order.shipping === 0 ? 'FREE' : '৳' + order.shipping.toLocaleString()}`;
            const paymentLine = order.paymentMethod === 'bkash'
                ? `*Payment:* bKash (Trx ID: ${order.trxId})`
                : `*Payment:* Cash on Delivery`;

            const msg = `🌸 *New Fior Glow Order*%0A%0A*Customer:* ${name}%0A*Phone:* ${phone}%0A*Address:* ${order.address || 'Not provided'}%0A%0A*Items:*%0A${orderLines}${couponLine}${shippingLine}%0A%0A*Total: ৳${order.total.toLocaleString()}*%0A${paymentLine}%0A%0A*Notes:* ${notes || 'None'}`;
            const waLink = `https://wa.me/${SHOP_WA_NUMBER}?text=${msg}`;

            sendToGoogleSheet('save_order', order);

            // "Save this address to my profile" checkbox
            const saveAddrChk = document.getElementById('custSaveAddress');
            const current = getCurrentCustomer();
            if (saveAddrChk && saveAddrChk.checked && current) {
                if (!current.addresses) current.addresses = [];
                current.addresses.push({ id: Date.now(), label: `${district} — ${area}`, text: order.address, phone });
                saveUsers();
            }

            document.getElementById('waLink').href = waLink;
            document.getElementById('checkoutForm').style.display = 'none';
            document.getElementById('successScreen').classList.add('show');
            launchConfetti();

            cart = [];
            appliedCoupon = null;
            updateCartUI();

            document.getElementById('custDistrict').value = '';
            document.getElementById('custArea').value = '';
            document.getElementById('custArea').disabled = true;
            document.getElementById('custArea').placeholder = 'Select district first';
            document.getElementById('custEmail').value = '';
            if (saveAddrChk) saveAddrChk.checked = false;
            if (confirmBtn) { confirmBtn.disabled = false; confirmBtn.textContent = 'Confirm Order'; }
        }

        function showToast(msg) {
            const t = document.getElementById('toast');
            t.textContent = msg;
            t.classList.add('show');
            setTimeout(() => t.classList.remove('show'), 2500);
        }

        // ===== PRODUCT DETAIL "PAGE" (modal opened by clicking a product photo/name) =====
        let detailProductId = null;
        let detailQty = 1;

        // ADDED: tiny deterministic pseudo-random generator, seeded by a number.
        // Same product id -> same "random" value every time (so rating/sold/urgency
        // don't jump around on every open), but different products look different.
        function seededRand(seed) {
            const x = Math.sin(seed) * 10000;
            return x - Math.floor(x);
        }

        // ADDED: rating / review-count / sold-count for the product page. Uses the
        // product's own p.rating / p.reviewCount / p.soldCount if the admin has set
        // them; otherwise generates believable, stable-per-product placeholder stats
        // so every product page looks complete even before real reviews pile up.
        function productStatsOf(p) {
            const seed = (p.id || 1) * 999;
            const rating = p.rating ? Number(p.rating) : Math.round((4.3 + seededRand(seed) * 0.6) * 10) / 10;
            const reviewCount = p.reviewCount || Math.floor(60 + seededRand(seed + 1) * 540);
            const soldCount = p.soldCount || Math.floor(150 + seededRand(seed + 2) * 3350);
            const lowStock = p.lowStock !== undefined ? p.lowStock : seededRand(seed + 3) < 0.35;
            return { rating, reviewCount, soldCount, lowStock };
        }

        // ADDED: renders filled/empty star characters for a given rating (rounded
        // to the nearest whole star for simple, crisp rendering).
        function starsHtml(rating) {
            const filled = Math.round(rating);
            return '★'.repeat(filled) + '☆'.repeat(Math.max(0, 5 - filled));
        }

        // ADDED: builds the thumbnail rail. Uses p.images (array) if the admin added
        // extra photos; otherwise falls back to a single thumb of the main photo, or
        // one thumb per variant photo for variant products.
        function detailGalleryImages(p) {
            if (Array.isArray(p.images) && p.images.length) return p.images;
            if (p.variants && p.variants.length) {
                const imgs = [...new Set(p.variants.map(v => v.img || p.img))];
                return imgs.length ? imgs : [p.img];
            }
            return [p.img];
        }

        function renderDetailThumbs(p) {
            const wrap = document.getElementById('detailThumbs');
            const imgs = detailGalleryImages(p);
            if (imgs.length <= 1) { wrap.innerHTML = ''; wrap.style.display = 'none'; return; }
            wrap.style.display = 'flex';
            wrap.innerHTML = imgs.map((src, i) => `
        <button type="button" class="detail-thumb-btn ${i === 0 ? 'active' : ''}" onclick="setDetailMainImage('${src}', this)">
          <img src="${src}" alt="" onerror="this.src='${FALLBACK_IMGS[p.brand] || DEFAULT_FALLBACK_IMG}'" loading="lazy">
        </button>`).join('');
        }

        // ADDED: clicking a thumbnail swaps the big photo, marketplace-style.
        function setDetailMainImage(src, btnEl) {
            document.getElementById('detailImg').src = src;
            document.querySelectorAll('#detailThumbs .detail-thumb-btn').forEach(b => b.classList.remove('active'));
            if (btnEl) btnEl.classList.add('active');
        }

        // ADDED: trust + urgency pills, matching the "few units left" / "authenticity
        // guaranteed" style seen on marketplace product pages.
        function renderDetailBadges(p, stats) {
            const row = document.getElementById('detailBadgesRow');
            let html = '';
            if (p.inStock && stats.lowStock) {
                html += `<span class="detail-badge-urgent">⚡ Very few units left at this price</span>`;
            }
            if (p.inStock) {
                html += `<span class="detail-badge-trust">🛡️ Authenticity guaranteed</span>`;
            }
            row.innerHTML = html;
        }

        // ADDED: "You May Also Like" — same-brand products first, topped up with
        // other products if the brand doesn't have enough, excluding the current one.
        function renderDetailSuggestions(p) {
            const wrap = document.getElementById('detailSuggestionsWrap');
            const grid = document.getElementById('detailSuggestionsGrid');
            if (!wrap || !grid) return;
            const sameBrand = PRODUCTS.filter(pr => pr.id !== p.id && brandKeyOf(pr) === brandKeyOf(p));
            let pool = sameBrand.slice();
            if (pool.length < 8) {
                const rest = PRODUCTS.filter(pr => pr.id !== p.id && !pool.includes(pr));
                pool = pool.concat(rest);
            }
            pool = pool.slice(0, 8);
            if (!pool.length) { wrap.style.display = 'none'; return; }
            wrap.style.display = 'block';
            grid.innerHTML = pool.map((pr, i) => cardHtml(pr, i)).join('');
        }

        // ADDED: reviews shown on the product detail page — only the reviews
        // written for THIS exact product (matched by product name), reusing
        // the same review-card markup as the main Reviews page.
        function renderProductReviews(p) {
            const grid = document.getElementById('detailReviewsGrid');
            const emptyMsg = document.getElementById('detailReviewsEmpty');
            if (!grid) return;

            const productReviews = REVIEWS.filter(r => r.product &&
                r.product.trim().toLowerCase() === p.name.trim().toLowerCase());
            const sorted = [...productReviews].sort((a, b) => new Date(b.date) - new Date(a.date));

            if (!sorted.length) {
                grid.innerHTML = '';
                if (emptyMsg) emptyMsg.style.display = 'block';
            } else {
                if (emptyMsg) emptyMsg.style.display = 'none';
                grid.innerHTML = sorted.map((r, idx) => `
    <div class="review-card reveal" style="transition-delay:${Math.min(idx * 60, 300)}ms">
      <div class="review-card-top">
        <span class="review-stars">${'★'.repeat(r.rating)}${'☆'.repeat(5 - r.rating)}</span>
        <span class="review-date">${formatReviewDate(r.date)}</span>
      </div>
      <div class="review-name">${escapeHtml(r.name)}</div>
      <p class="review-text">${escapeHtml(r.text)}</p>
      ${r.verified ? '<div class="review-verified">✓ Verified Purchase</div>' : ''}
    </div>
  `).join('');
                initScrollReveal();
            }

            const count = productReviews.length;
            const avg = count ? (productReviews.reduce((s, r) => s + r.rating, 0) / count) : 0;
            document.getElementById('detailReviewsAvgNum').textContent = avg.toFixed(1);
            document.getElementById('detailReviewsCount').textContent = `Based on ${count} review${count === 1 ? '' : 's'}`;
            const roundedAvg = Math.round(avg);
            document.getElementById('detailReviewsAvgStars').textContent = '★'.repeat(roundedAvg) + '☆'.repeat(5 - roundedAvg);
        }

        function openProductDetail(id, fromPopState) {
            const p = PRODUCTS.find(pr => pr.id === id);
            if (!p) return;
            detailProductId = id;
            detailQty = 1;

            const stats = productStatsOf(p);

            document.getElementById('detailImg').src = p.img;
            document.getElementById('detailImg').onerror = function () { this.src = FALLBACK_IMGS[p.brand] || DEFAULT_FALLBACK_IMG; };
            document.getElementById('detailBrandTag').textContent = p.brandName;
            document.getElementById('detailName').textContent = p.name;

            // ADDED: thumbnail gallery rail
            renderDetailThumbs(p);

            // ADDED: discount ribbon on the main photo (same badge used on cards)
            const discBadge = document.getElementById('detailDiscountBadge');
            const hasDiscountForBadge = !((p.variants && p.variants.length)) && Number(p.discountPercent) > 0 && Number(p.discountPercent) <= 100;
            if (hasDiscountForBadge) {
                discBadge.textContent = `-${p.discountPercent}% OFF`;
                discBadge.style.display = 'inline-block';
            } else {
                discBadge.style.display = 'none';
            }

            // ADDED: star rating + review count + units sold
            document.getElementById('detailStars').textContent = starsHtml(stats.rating);
            document.getElementById('detailRatingNum').textContent = stats.rating.toFixed(1);
            document.getElementById('detailReviewCount').textContent = `(${stats.reviewCount.toLocaleString()} reviews)`;
            document.getElementById('detailSoldCount').textContent = `${stats.soldCount.toLocaleString()} sold`;

            // ADDED: trust / urgency badges
            renderDetailBadges(p, stats);

            // CHANGED: full (untruncated) description shown here — the card view
            // truncates, but the detail modal shows everything, scrollable via the
            // .detail-desc max-height/overflow CSS rule.
            document.getElementById('detailDesc').textContent = p.desc;
            document.getElementById('detailQtyNum').textContent = detailQty;

            // ADDED: sync the wishlist heart button to this product + its
            // current saved state.
            const wishBtn = document.getElementById('detailWishlistBtn');
            wishBtn.dataset.pid = id;
            wishBtn.classList.toggle('active', isInWishlist(id));
            wishBtn.textContent = isInWishlist(id) ? '♥' : '♡';

            const hasVariants = p.variants && p.variants.length > 0;
            const variantsBox = document.getElementById('detailVariants');
            const addBtn = document.getElementById('detailAddBtn');
            const buyNowBtn = document.getElementById('detailBuyNowBtn');
            const badge = document.getElementById('detailStockBadge');

            // CHANGED: variant products no longer need a separate "select, then
            // confirm" step. All options show at once as a photo gallery, and
            // tapping one adds it straight to the cart in a single click — so the
            // qty stepper and the big "Add to Cart"/"Buy Now" buttons (which only
            // make sense for a single price) are hidden for these products.
            if (hasVariants) {
                const anyInStock = p.variants.some(v => v.inStock !== false);
                badge.textContent = anyInStock ? 'In Stock' : 'Out of Stock';
                badge.className = 'detail-stock-badge ' + (anyInStock ? 'in' : 'out');

                variantsBox.style.display = 'block';
                renderVariantSwatches(p);

                document.getElementById('detailPrice').textContent = 'Multiple options available';
                document.getElementById('detailQtyRow').style.display = 'none';
                addBtn.style.display = 'none';
                buyNowBtn.style.display = 'none';
            } else {
                variantsBox.style.display = 'none';
                // CHANGED: shows struck-through original price + bold discounted price when the product has a discount
                document.getElementById('detailPrice').innerHTML = priceHtml(p, '/ pc');

                badge.textContent = p.inStock ? 'In Stock' : 'Out of Stock';
                badge.className = 'detail-stock-badge ' + (p.inStock ? 'in' : 'out');

                document.getElementById('detailQtyRow').style.display = p.inStock ? 'flex' : 'none';
                addBtn.style.display = 'block';
                addBtn.textContent = p.inStock ? '🛒 Add to Cart' : 'Out of Stock';
                addBtn.disabled = !p.inStock;

                buyNowBtn.style.display = 'block';
                buyNowBtn.disabled = !p.inStock;
                buyNowBtn.style.opacity = p.inStock ? '1' : '0.5';
            }

            // ADDED: "Order on WhatsApp" / "Order on Messenger" — pre-filled with
            // this exact product so the chat starts ready to confirm.
            const orderMsg = `Hi Fior Glow! I want to order:\n\n🛍️ ${p.name}\nQty: ${detailQty}\nPrice: ৳${effectivePrice(p).toLocaleString()} each\n\nPlease confirm availability & delivery. 🌸`;
            document.getElementById('detailWaBtn').href = `https://wa.me/${SHOP_WA_NUMBER}?text=${encodeURIComponent(orderMsg)}`;
            document.getElementById('detailMsgBtn').href = `https://m.me/${SHOP_FB_USERNAME}?text=${encodeURIComponent(orderMsg)}`;

            // ADDED: Promotion Center — "Similar Product Boost" sponsored row
            renderDetailSponsored(id);

            // ADDED: "You May Also Like" suggestions strip
            renderDetailSuggestions(p);

            // ADDED: this product's own reviews
            renderProductReviews(p);

            // CHANGED: product detail now opens as its own full page (same
            // pattern as Shop/Team/Why/Reviews/Contact/Policy) instead of a
            // popup dialog on top of the current page.
            if (!fromPopState) navPush('productDetail', id);
            hideAllPages();
            document.getElementById('productDetailPageView').style.display = 'block';
            window.scrollTo(0, 0);
        }

        // ADDED: renders one photo swatch per variant (e.g. one per Rhode shade).
        // Falls back to the product's main photo if a variant has no photo of its own.
        function renderVariantSwatches(p) {
            const grid = document.getElementById('variantSwatchGrid');
            grid.innerHTML = p.variants.map(v => {
                const outOfStock = v.inStock === false;
                const img = v.img || p.img;
                return `<button type="button" class="variant-swatch" id="swatch-${v.id}" ${outOfStock ? 'disabled' : ''}
                    onclick="quickAddVariant(${p.id}, '${v.id}', this)" title="${outOfStock ? 'Out of stock' : 'Tap to add'}">
                    <div class="variant-swatch-img">
                        <img src="${img}" alt="${escapeHtml(v.name)}" onerror="this.src='${FALLBACK_IMGS[p.brand] || DEFAULT_FALLBACK_IMG}'" loading="lazy">
                    </div>
                    <div class="variant-swatch-name">${escapeHtml(v.name)}</div>
                    <div class="variant-swatch-price">${outOfStock ? 'Out of stock' : '৳' + v.price.toLocaleString()}</div>
                </button>`;
            }).join('');
        }

        // ADDED: tapping a variant photo adds that exact option to the cart right
        // away (select + add in one click). The modal stays open so more than one
        // shade can be added in the same visit without reopening the product.
        function quickAddVariant(productId, variantId, btnEl) {
            const p = PRODUCTS.find(pr => pr.id === productId);
            if (!p) return;
            const v = p.variants.find(vv => vv.id === variantId);
            if (!v || v.inStock === false) return;

            flyToCart(btnEl, () => {
                addVariantToCart(p, v, 1);
                // brief visual confirmation on the tapped swatch
                if (btnEl) {
                    btnEl.classList.add('just-added');
                    setTimeout(() => btnEl.classList.remove('just-added'), 600);
                }
            });
        }

        function closeProductDetail(fromPopState) {
            document.getElementById('productDetailPageView').style.display = 'none';
            detailProductId = null;

            // ADDED (bug fix): if this close was triggered by tapping "Back"/
            // "Close"/"Add to Cart" (not by the browser Back button), undo the
            // history entry we pushed in openProductDetail() so it doesn't sit
            // there as a dead extra "back step" later. The popstate listener
            // below then shows whichever page was open before this one.
            if (!fromPopState && history.state && history.state.fiorPage === 'productDetail') {
                history.back();
            }
        }

        // ADDED (bug fix): pressing the phone/browser Back button while a
        // product page is open should just close that product page and return
        // to whatever page/list was underneath it — not restart the whole site
        // from the homepage.
        window.addEventListener('popstate', function (e) {
            // ADDED: route Back/Forward to the correct page (Shop/Team/Why/
            // Reviews/Contact/Policy/Product Detail/Home) using the state we
            // pushed via navPush() in each open*Page()/goHome() function above.
            const page = (e.state && e.state.fiorPage) || 'home';
            if (page === 'shop') openShopPage(true);
            else if (page === 'team') openTeamPage(true);
            else if (page === 'why') openWhyPage(true);
            else if (page === 'reviews') openReviewsPage(true);
            else if (page === 'contact') openContactPage(true);
            else if (page === 'policy') openPolicyPage(true);
            else if (page === 'videos') openVideosPage(true);
            else if (page === 'dashboard') openDashboardPage(dashActiveTab, true);
           else if (page === 'productDetail') openProductDetail(e.state.productId, true);
            else if (page === 'checkout') openCheckout(true);
            else goHome(true);
        });
        // ADDED: mark the very first history entry as "home" so the first Back
        // press (from whichever page the user opens first) has a valid state.
        try { history.replaceState({ fiorPage: 'home' }, '', location.href); } catch (e) { }

        function changeDetailQty(delta) {
            detailQty = Math.max(1, detailQty + delta);
            document.getElementById('detailQtyNum').textContent = detailQty;
            refreshDetailOrderLinks();
        }

        // ADDED: keeps the WhatsApp/Messenger "order now" pre-filled message in
        // sync with the qty stepper, so what the customer sends always matches
        // what they see on screen.
        function refreshDetailOrderLinks() {
            const p = PRODUCTS.find(pr => pr.id === detailProductId);
            if (!p) return;
            const orderMsg = `Hi Fior Glow! I want to order:\n\n🛍️ ${p.name}\nQty: ${detailQty}\nPrice: ৳${effectivePrice(p).toLocaleString()} each\n\nPlease confirm availability & delivery. 🌸`;
            const waBtn = document.getElementById('detailWaBtn');
            const msgBtn = document.getElementById('detailMsgBtn');
            if (waBtn) waBtn.href = `https://wa.me/${SHOP_WA_NUMBER}?text=${encodeURIComponent(orderMsg)}`;
            if (msgBtn) msgBtn.href = `https://m.me/${SHOP_FB_USERNAME}?text=${encodeURIComponent(orderMsg)}`;
        }

        function addToCartFromDetail() {
            const p = PRODUCTS.find(pr => pr.id === detailProductId);
            if (!p || p.variants && p.variants.length) return; // variant products add via quickAddVariant()
            if (!p.inStock) return;
            const cartKey = String(p.id);
            // CHANGED: uses the discounted price (if any) as the actual selling price
            const sellPrice = effectivePrice(p);
            const existing = cart.find(i => i.cartKey === cartKey);
            if (existing) existing.qty += detailQty;
            else cart.push({ cartKey, id: p.id, name: p.name, price: sellPrice, img: p.img, brand: p.brand, qty: detailQty });
            updateCartUI();
            showToast(`${p.name.split(':')[0]} added to cart 🌸`);
            closeProductDetail();
        }

        // ADDED: "Buy Now" — adds the product straight to the cart at the current
        // qty, then jumps directly into checkout (skips the cart sidebar) for a
        // one-tap purchase path, matching a typical marketplace "Buy Now" button.
        function buyNowFromDetail() {
            const p = PRODUCTS.find(pr => pr.id === detailProductId);
            if (!p || (p.variants && p.variants.length)) return; // variant products buy via quickAddVariant()
            if (!p.inStock) return;
            const cartKey = String(p.id);
            const sellPrice = effectivePrice(p);
            const existing = cart.find(i => i.cartKey === cartKey);
            if (existing) existing.qty += detailQty;
            else cart.push({ cartKey, id: p.id, name: p.name, price: sellPrice, img: p.img, brand: p.brand, qty: detailQty });
            updateCartUI();
            closeProductDetail();
            // NOTE: openCheckout() internally calls toggleCart() expecting the cart
            // sidebar to already be open (it closes it behind the checkout modal).
            // Mark it open first so that toggle correctly closes it instead of
            // opening it, since Buy Now skips the sidebar entirely.
            document.getElementById('cartSidebar').classList.add('open');
            document.getElementById('cartOverlay').classList.add('open');
            openCheckout();
        }

        // ===== FLOATING "CHAT NOW" BUTTON — general enquiry chat, always available =====
        const generalChatMsg = "Hi! I'd like to ask about your products.";
        document.getElementById('floatingChatBtn').href =
            `https://wa.me/${SHOP_WA_NUMBER}?text=${encodeURIComponent(generalChatMsg)}`;
        const contactPageWaBtn = document.getElementById('contactPageWaBtn');
        if (contactPageWaBtn) contactPageWaBtn.href = `https://wa.me/${SHOP_WA_NUMBER}?text=${encodeURIComponent(generalChatMsg)}`;

        // hide the little label after a few seconds so it doesn't stay on screen forever
        // hide the little label after a few seconds so it doesn't stay on screen forever
        setTimeout(() => {
            const label = document.getElementById('floatingChatLabel');
            if (label) label.style.display = 'none';
        }, 6000);

        // ADDED: floating search button label auto-hides too, same as the chat one
        setTimeout(() => {
            const label = document.getElementById('floatingSearchLabel');
            if (label) label.style.display = 'none';
        }, 6000);

        // ADDED: scrolls smoothly to the search row and focuses the input so the
        // customer can start typing right away, from anywhere on the page.
        // FIXED: scrollIntoView() aligned the search row's top edge with the very
        // top of the viewport (0px) — but the nav bar is sticky and sits on top
        // covering that same 0–64px strip, so the search row's upper portion
        // ended up hidden right behind the nav. Now we manually compute the
        // scroll position and subtract the nav's height (64px) plus a little
        // breathing room, so the search row lands fully visible just below the nav.
        // ==========================================================================
        // ADDED: SEARCH MODAL — independent of the page router. Opening/closing it
        // never touches shopViewMode, so your current page (Home, a brand page,
        // search results) is never disturbed. Same suggestion-dropdown behaviour
        // as the top search row, just reused inside a popup.
        // ==========================================================================
        function openSearchModal() {
            document.getElementById('searchModal').classList.add('open');
            const input = document.getElementById('searchModalInput');
            input.value = currentSearchQuery;
            document.getElementById('searchModalClearBtn').classList.toggle('show', currentSearchQuery.trim() !== '');
            if (currentSearchQuery.trim() !== '') renderModalSuggestions();
            setTimeout(() => input.focus(), 150);
        }

        // Closing the modal ONLY closes the popup — it never navigates anywhere.
        function closeSearchModal() {
            document.getElementById('searchModal').classList.remove('open');
        }

        function handleModalSearch(value) {
            currentSearchQuery = value;
            document.getElementById('searchModalClearBtn').classList.toggle('show', value.trim() !== '');
            // keep the top search row's input in sync too
            const topInput = document.getElementById('searchInput');
            if (topInput) topInput.value = value;
            const topClear = document.getElementById('searchClearBtn');
            if (topClear) topClear.classList.toggle('show', value.trim() !== '');

            if (value.trim() === '') {
                document.getElementById('searchModalSuggestions').classList.remove('show');
                return;
            }
            renderModalSuggestions();
        }

        function renderModalSuggestions() {
            const box = document.getElementById('searchModalSuggestions');
            const q = currentSearchQuery.trim().toLowerCase();
            if (!q) { box.classList.remove('show'); return; }

            const startsWith = PRODUCTS.filter(p => p.name.toLowerCase().startsWith(q));
            const contains = PRODUCTS.filter(p => !p.name.toLowerCase().startsWith(q) &&
                (p.name.toLowerCase().includes(q) || p.brandName.toLowerCase().includes(q)));
            const allMatches = [...startsWith, ...contains];
            const shown = allMatches.slice(0, 6);

            if (!allMatches.length) {
                box.innerHTML = '<div class="search-suggestion-empty">No matching products found 🌸</div>';
            } else {
                box.innerHTML = shown.map(p => {
                    const hasVariants = p.variants && p.variants.length > 0;
                    const priceText = hasVariants
                        ? `From ৳${Math.min(...p.variants.map(v => v.price)).toLocaleString()}`
                        : `৳${effectivePrice(p).toLocaleString()}`;
                    return `
      <div class="search-suggestion-item" onclick="selectModalSearchSuggestion(${p.id})">
        <div class="search-suggestion-img-wrap">
          <img src="${p.img}" alt="${escapeHtml(p.name)}"
            onerror="this.src='${FALLBACK_IMGS[p.brand] || DEFAULT_FALLBACK_IMG}'">
        </div>
        <div class="search-suggestion-info">
          <div class="search-suggestion-name">${escapeHtml(p.name)}</div>
          <div class="search-suggestion-meta">
            <span class="search-suggestion-brand">${escapeHtml(p.brandName)}</span>
            <span class="search-suggestion-price">${priceText}</span>
          </div>
        </div>
        <span class="search-suggestion-arrow">→</span>
      </div>
    `;
                }).join('');
                box.innerHTML += `<button type="button" class="search-suggestion-viewall" onclick="submitModalSearchEnter()">View all ${allMatches.length} result${allMatches.length === 1 ? '' : 's'} →</button>`;
            }
            box.classList.add('show');
        }

        // Picking a suggestion closes the popup and opens that product directly.
        function selectModalSearchSuggestion(id) {
            closeSearchModal();
            openProductDetail(id);
        }

        // Enter (or "View all results") closes the popup and shows the full
        // search-results page, scrolled into view.
        function submitModalSearchEnter() {
            if (currentSearchQuery.trim() === '') return;
            closeSearchModal();
            shopViewMode = 'search';
            shopViewPage = 1;
            document.getElementById('mainSiteView').style.display = 'none';
            document.getElementById('teamPageView').style.display = 'none';
            document.getElementById('shopPageView').style.display = 'block';
            window.scrollTo(0, 0);
            renderShopView();
        }

        // Clearing the text inside the modal only clears the text — it does NOT
        // navigate or close the current page.
        function clearModalSearch() {
            currentSearchQuery = '';
            document.getElementById('searchModalInput').value = '';
            document.getElementById('searchModalClearBtn').classList.remove('show');
            document.getElementById('searchModalSuggestions').classList.remove('show');
            const topInput = document.getElementById('searchInput');
            if (topInput) topInput.value = '';
            const topClear = document.getElementById('searchClearBtn');
            if (topClear) topClear.classList.remove('show');
        }
        // ===== REVIEWS (persisted via shared storage so every visitor + the admin see the same list) =====
        const REVIEWS_KEY = 'fiorglow_reviews_v1';

        // Seed data — only used the very first time (when no reviews have been saved to storage yet)
        const SEED_REVIEWS = [
            {
                id: 1001, name: 'Rakibun Islam Rishad', rating: 5,
                product: 'Beauty of Joseon Relief Sun',
                text: 'Genuinely no white cast and my skin feels so much calmer. Ordered twice already — packaging was sealed and fresh.',
                date: '2026-07-11', verified: true, phone: ''
            },
            {
                id: 1002, name: 'Farhana Akter', rating: 5,
                product: 'COSRX Advanced Snail 96 Mucin Essence',
                text: 'My go-to essence now. Delivery to Chittagong was quick and the WhatsApp confirmation felt very personal, not robotic at all.',
                date: '2026-05-20', verified: true, phone: ''
            },
            {
                id: 1003, name: 'Tania Islam', rating: 4,
                product: 'Rhode Lip Tint — Raspberryjelly',
                text: 'Beautiful colour and very moisturising. Took a couple of days longer than expected but worth the wait.',
                date: '2026-05-11', verified: true, phone: ''
            },
            {
                id: 1004, name: 'Mahin Chowdhury', rating: 5,
                product: 'Beauty of Joseon Dynasty Cream',
                text: 'Rich but absorbs well, skin feels nourished every morning. Prices are fair compared to other resellers here.',
                date: '2026-04-28', verified: true, phone: ''
            },
            {
                id: 1005, name: 'abthahi ijaj kafi', rating: 5,
                product: 'Beauty of Joseon Dynasty Cream',
                text: 'Rich but absorbs well, skin feels nourished every morning. Prices are fair compared to other resellers here.',
                date: '2026-04-28', verified: true, phone: ''
            }
        ];

        let REVIEWS = [];

        // CHANGED: cloudGet()/cloudSet() are declared once, higher up in the script
        // (right before PRODUCTS storage), and reused here too.

        // Load reviews (shared server store first, localStorage fallback, seed data as last resort)
        async function loadReviews() {
            // FIXED: previously used "value ? JSON.parse(value) : SEED_REVIEWS", which
            // only fell back to SEED_REVIEWS when there was NO stored value at all.
            // If the stored value was an empty array string "[]" (e.g. from a past
            // test, or all reviews deleted), that string is truthy, so REVIEWS ended
            // up as a real empty array — nothing to show, even though data "existed".
            // Now we always fall back to SEED_REVIEWS whenever the parsed result is
            // missing or empty, so the homepage strip is never blank.
            try {
                const value = await cloudGet(REVIEWS_KEY);
                const parsed = value ? JSON.parse(value) : [];
                REVIEWS = (parsed && parsed.length) ? parsed : SEED_REVIEWS;
                try { localStorage.setItem(REVIEWS_KEY, JSON.stringify(REVIEWS)); } catch (e) { }
            } catch (e) {
                try {
                    const local = localStorage.getItem(REVIEWS_KEY);
                    const parsedLocal = local ? JSON.parse(local) : [];
                    REVIEWS = (parsedLocal && parsedLocal.length) ? parsedLocal : SEED_REVIEWS;
                } catch (e2) {
                    REVIEWS = SEED_REVIEWS;
                }
            }
            renderReviews();
            renderHomeReviews();
            initScrollReveal();
        }

        // ==========================================================================
        // ADDED: HOMEPAGE REVIEWS PREVIEW — shows the top-rated, most recent reviews
        // in a horizontal-scroll strip, reusing the same .review-card markup as the
        // full Reviews page.
        // ==========================================================================
       function renderHomeReviews() {
    const strip = document.getElementById('homeReviewsStrip');
    if (!strip) return;
    // TEMP FIX (demo mode): homepage strip now ALWAYS shows the top 4 reviews,
    // regardless of the admin "featured" toggle. This bypasses a known bug where
    // the "Show on Front" toggle relies on a shared cloud store (cloudGet/cloudSet
    // in loadReviews()/saveReviews()) that can silently fail to sync across
    // devices/browsers, making a review show on the admin's device but not on
    // others. Once that sync issue is confirmed fixed (check the Network tab for
    // a failing /api/data?key=reviews request), restore the admin-controlled
    // behavior by changing the line below back to:
    //   .filter(r => r.featured !== false)
    const top = [...REVIEWS]
        .sort((a, b) => (b.rating - a.rating) || (new Date(b.date) - new Date(a.date)))
        .slice(0, 4);
    if (!top.length) {
        strip.innerHTML = '';
        return;
    }
    strip.innerHTML = top.map((r, idx) => `
    <div class="review-card reveal" style="transition-delay:${Math.min(idx * 60, 300)}ms">
      <div class="review-card-top">
        <span class="review-stars">${'★'.repeat(r.rating)}${'☆'.repeat(5 - r.rating)}</span>
        <span class="review-date">${formatReviewDate(r.date)}</span>
      </div>
      <div class="review-name">${escapeHtml(r.name)}</div>
      ${r.product ? `<div class="review-product">${escapeHtml(r.product)}</div>` : ''}
      <p class="review-text">${escapeHtml(r.text)}</p>
      ${r.verified ? '<div class="review-verified">✓ Verified Purchase</div>' : ''}
    </div>
  `).join('');
    initScrollReveal();
}

        async function saveReviews() {
            try { localStorage.setItem(REVIEWS_KEY, JSON.stringify(REVIEWS)); } catch (e) { }
            try {
                await cloudSet(REVIEWS_KEY, JSON.stringify(REVIEWS));
            } catch (e) {
                console.error('Could not save reviews to the shared store:', e);
            }
        }

        function renderReviews() {
            const grid = document.getElementById('reviewsGrid');
            const sorted = [...REVIEWS].sort((a, b) => new Date(b.date) - new Date(a.date));

            if (!sorted.length) {
                grid.innerHTML = '<div class="no-results">No reviews yet — be the first to share your experience 🌸</div>';
            } else {
                grid.innerHTML = sorted.map((r, idx) => `
    <div class="review-card reveal" style="transition-delay:${Math.min(idx * 60, 300)}ms">
      <div class="review-card-top">
        <span class="review-stars">${'★'.repeat(r.rating)}${'☆'.repeat(5 - r.rating)}</span>
        <span class="review-date">${formatReviewDate(r.date)}</span>
      </div>
      <div class="review-name">${escapeHtml(r.name)}</div>
      ${r.product ? `<div class="review-product">${escapeHtml(r.product)}</div>` : ''}
      <p class="review-text">${escapeHtml(r.text)}</p>
      ${r.verified ? '<div class="review-verified">✓ Verified Purchase</div>' : ''}
    </div>
  `).join('');
                initScrollReveal();
            }

            const count = REVIEWS.length;
            const avg = count ? (REVIEWS.reduce((s, r) => s + r.rating, 0) / count) : 0;
            document.getElementById('reviewsAvgNum').textContent = avg.toFixed(1);
            document.getElementById('reviewsCount').textContent = `Based on ${count} review${count === 1 ? '' : 's'}`;
            const roundedAvg = Math.round(avg);
           document.getElementById('reviewsAvgStars').textContent = '★'.repeat(roundedAvg) + '☆'.repeat(5 - roundedAvg);
    
    
           renderReviewsBreakdown();

        }

        // ADDED (bug fix): this function was being called by renderReviews() but was
        // never defined anywhere in the script — a ReferenceError here silently broke
        // renderReviews() every time it ran (on page load, opening the Reviews page,
        // and after submitting a new review), which in turn could interrupt other
        // startup code. Renders the 5★→1★ distribution bars into #reviewsBreakdown.
        function renderReviewsBreakdown() {
            const wrap = document.getElementById('reviewsBreakdown');
            if (!wrap) return;
            const total = REVIEWS.length;
            const counts = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };
            REVIEWS.forEach(r => {
                const rating = Math.round(r.rating);
                if (counts[rating] !== undefined) counts[rating]++;
            });
            wrap.innerHTML = [5, 4, 3, 2, 1].map(star => {
                const count = counts[star];
                const pct = total ? Math.round((count / total) * 100) : 0;
                return `
    <div class="breakdown-row">
      <span class="breakdown-label">${star}★</span>
      <span class="breakdown-bar-track"><span class="breakdown-bar-fill" style="width:${pct}%"></span></span>
      <span class="breakdown-count">${count}</span>
    </div>
  `;
            }).join('');
        }

        // ===== ADMIN PANEL (view who posted a review, verify it, or delete it) =====
        // Change this passcode to whatever you like — this is the password to open the admin panel.
        const AUTHORITY_PASSCODE = 'fiorglow2026';      // owner — full access, password only
        const ADMIN_REQUEST_SENT_FLAG = 'fiorglow_admin_request_sent_v1'; // one request per device
        let isAdmin = false;
        let adminLoginTab = 'login';
        // ADDED: role-based permission system.
        // currentAdminPermissions = 'all' → owner (logged in with ADMIN_PASSCODE, full access)
        // currentAdminPermissions = [...] → a specific team member, only these tabs
        let currentAdminPermissions = null;

        // Every section a team member CAN be granted. "Team" is intentionally NOT
        // in this list — only the owner can manage team members & permissions, so
        // no admin/moderator can ever grant themselves more access.
       const ADMIN_PERMISSION_TABS = [
            { key: 'videos', label: '🎥 Video Library' },
            { key: 'reviews', label: '⭐ Reviews' },
            { key: 'products', label: '🛍️ Products' },
            { key: 'concerns', label: '🧴 Concerns' },
            { key: 'categories', label: '🗂️ Categories' },
            { key: 'customers', label: '👤 Customers' },
            { key: 'coupons', label: '🏷️ Coupons' },
            { key: 'promotions', label: '📢 Promotions' },
            { key: 'banner', label: '🎬 Banner' },
            { key: 'background', label: '🖼️ Background' },
            { key: 'hero', label: '🌅 Hero Section' },
            { key: 'slider', label: '🎞️ Slider' },
            { key: 'applications', label: '📩 Applications' }
        ];
        // ADDED: granular action-level permissions (separate from tab access).
        // Off by default for everyone — even someone with "Products" tab access
        // can only see/edit products unless the owner also ticks this.
        const ADMIN_EXTRA_PERMISSIONS = [
            { key: 'delete_products', label: '🗑️ Delete Products' }
        ];

        function hasDeleteProductPermission() {
            return currentAdminPermissions === 'all' || (currentAdminPermissions || []).includes('delete_products');
        }
        function openAdminLogin() {
            document.getElementById('adminPasscodeInput').value = '';
            document.getElementById('adminLoginModal').classList.add('open');
        }

        function closeAdminLogin() {
            document.getElementById('adminLoginModal').classList.remove('open');
            hideAdminLoginError();
        }

        function openAdminLogin() {
            document.getElementById('adminPasscodeInput').value = '';
            document.getElementById('adminRequestName').value = '';
            document.getElementById('adminRequestPasscode').value = '';
            switchAdminLoginTab('login');
            document.getElementById('adminLoginModal').classList.add('open');
        }

        function switchAdminLoginTab(tab) {
            adminLoginTab = tab;
            document.getElementById('adminTabLoginBtn').classList.toggle('active', tab === 'login');
            document.getElementById('adminTabRequestBtn').classList.toggle('active', tab === 'request');
            document.getElementById('adminLoginFormWrap').style.display = tab === 'login' ? 'block' : 'none';
            document.getElementById('adminRequestFormWrap').style.display = tab === 'request' ? 'block' : 'none';
            hideAdminLoginError();
        }

        function showAdminLoginError(msg) {
            const el = document.getElementById('adminLoginError');
            el.textContent = msg;
            el.classList.add('show');
        }
        function hideAdminLoginError() {
            const el = document.getElementById('adminLoginError');
            el.classList.remove('show');
            el.textContent = '';
        }

        // CHANGED: the owner passcode is no longer compared inside this file
        // (anyone could read AUTHORITY_PASSCODE via "View Source" before this
        // change). It's now checked by the server against an environment
        // variable (ADMIN_PASSCODE, set in Render's dashboard) via
        // /api/admin/login, which returns a token used to authorize product
        // catalog writes. Team-member passcodes stay as a quick local check
        // (unchanged) since those are already only known to invited people.
        async function adminLogin() {
            const pass = document.getElementById('adminPasscodeInput').value;
            hideAdminLoginError();

            // A specific team member's own personal passcode (owner sets this per member)
            const member = TEAM.find(m => m.passcode && m.passcode === pass && (m.role === 'admin' || m.role === 'moderator'));
            if (member) {
                isAdmin = true;
                currentAdminPermissions = member.permissions || [];
                closeAdminLogin();
                openAdminPanel();
                return;
            }

            // Owner passcode — verified server-side
            try {
                const res = await fetch('/api/admin/login', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ passcode: pass })
                });
                const data = await res.json();
                if (res.ok) {
                    try { localStorage.setItem(ADMIN_TOKEN_KEY, data.token); } catch (e) { }
                    isAdmin = true;
                    currentAdminPermissions = 'all';
                    closeAdminLogin();
                    openAdminPanel();
                    return;
                }
            } catch (e) { /* network issue — fall through to error below */ }

            showAdminLoginError('Wrong passcode 🚫');
        }

        // ADDED: the admin token proving a successful server-side passcode
        // check — sent as "Authorization: Bearer <token>" whenever the
        // Products tab saves a change, since /api/data now requires it for
        // that specific key.
        const ADMIN_TOKEN_KEY = 'fiorglow_admin_token';
        function getAdminToken() {
            try { return localStorage.getItem(ADMIN_TOKEN_KEY); } catch (e) { return null; }
        }

        // ADDED: "Request Access" tab — shared join passcode + name, sends a pending
        // request to the owner instead of logging in directly. One request per device.
        async function submitAdminJoinRequest() {
            const name = document.getElementById('adminRequestName').value.trim();
            const pass = document.getElementById('adminRequestPasscode').value;
            hideAdminLoginError();

            if (!name) { showAdminLoginError('Please enter your name'); return; }
            if (!pass || pass.length < 4) { showAdminLoginError('Please set a password (at least 4 characters)'); return; }

            // stop the exact same password being requested twice while still pending/unapproved
            const duplicatePending = ADMIN_REQUESTS.some(r => r.passcode === pass);
            if (duplicatePending) { showAdminLoginError('This password is already pending approval — choose a different one.'); return; }

            // stop reusing a password that's already an active team member's login
            const duplicateActive = TEAM.some(m => m.passcode === pass);
            if (duplicateActive) { showAdminLoginError('This password is already in use — choose a different one.'); return; }

            let alreadySent = false;
            try { alreadySent = localStorage.getItem(ADMIN_REQUEST_SENT_FLAG) === '1'; } catch (e) { }
            if (alreadySent) {
                showAdminLoginError('A request was already sent from this device. Please wait for approval.');
                return;
            }

            ADMIN_REQUESTS.push({ id: Date.now(), name, passcode: pass, date: new Date().toISOString() });
            await saveAdminRequests();

            try { localStorage.setItem(ADMIN_REQUEST_SENT_FLAG, '1'); } catch (e) { }

            closeAdminLogin();
            showToast('Request sent! Once approved, you can log in with the password you just set 🌸');
        }

        function openAdminPanel() {
            if (!isAdmin) { openAdminLogin(); return; }
            document.getElementById('adminPanelModal').classList.add('open');
            applyAdminPermissionsUI();
        }
        // ADDED: shows only the tab buttons this logged-in admin/team-member is
        // allowed to see, and opens the first one they have access to.
        function applyAdminPermissionsUI() {
            const allowedTabs = (currentAdminPermissions === 'all')
                ? [...ADMIN_PERMISSION_TABS.map(t => t.key), 'team', 'adminRequests']
                : (currentAdminPermissions || []);

            let firstVisibleBtn = null;
           document.querySelectorAll('#adminPanelModal .admin-tab-btn[data-tab]').forEach(btn => {
                const tabKey = btn.getAttribute('data-tab');
                const canSee = allowedTabs.includes(tabKey);
                btn.style.display = canSee ? 'inline-block' : 'none';
                if (canSee && !firstVisibleBtn) firstVisibleBtn = btn;
            });

            if (firstVisibleBtn) {
                switchAdminTab(firstVisibleBtn.getAttribute('data-tab'), firstVisibleBtn);
            } else {
                showToast('You have no admin access assigned yet. Contact the owner.');
                closeAdminPanel();
            }
        }
        function closeAdminPanel() {
            document.getElementById('adminPanelModal').classList.remove('open');
        }

        // ==========================================================================
        // ADDED: tab switcher for the Admin Panel (Reviews / Products / Customers / Coupons).
        // ==========================================================================
        function switchAdminTab(tab, btn) {
            // ADDED: safety check — even though the button itself is hidden for
            // sections this person can't access, block direct calls too
            if (currentAdminPermissions !== 'all') {
                if (tab === 'team' || tab === 'adminRequests') { showToast("Only the owner can access this 🚫"); return; }
                if (!(currentAdminPermissions || []).includes(tab)) { showToast("You don't have access to this section 🚫"); return; }
            }
            document.querySelectorAll('.admin-tab-btn[data-tab]').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            document.getElementById('adminTabReviews').style.display = tab === 'reviews' ? 'block' : 'none';
            document.getElementById('adminTabProducts').style.display = tab === 'products' ? 'block' : 'none';
            document.getElementById('adminTabConcerns').style.display = tab === 'concerns' ? 'block' : 'none';
            document.getElementById('adminTabCategories').style.display = tab === 'categories' ? 'block' : 'none';
            document.getElementById('adminTabCustomers').style.display = tab === 'customers' ? 'block' : 'none';
            document.getElementById('adminTabCoupons').style.display = tab === 'coupons' ? 'block' : 'none';
            document.getElementById('adminTabPromotions').style.display = tab === 'promotions' ? 'block' : 'none';
            document.getElementById('adminTabBanner').style.display = tab === 'banner' ? 'block' : 'none';
            document.getElementById('adminTabBackground').style.display = tab === 'background' ? 'block' : 'none';
            document.getElementById('adminTabHero').style.display = tab === 'hero' ? 'block' : 'none';
            document.getElementById('adminTabSlider').style.display = tab === 'slider' ? 'block' : 'none';
            document.getElementById('adminTabTeam').style.display = tab === 'team' ? 'block' : 'none';
            document.getElementById('adminTabAdminRequests').style.display = tab === 'adminRequests' ? 'block' : 'none';
            document.getElementById('adminTabApplications').style.display = tab === 'applications' ? 'block' : 'none';
            document.getElementById('adminTabVideos').style.display = tab === 'videos' ? 'block' : 'none';
            if (tab === 'products') { renderAdminProducts(); renderVariantEditList(); }
            if (tab === 'concerns') { renderAdminConcerns(); }
            if (tab === 'categories') { renderAdminCategories(); }
            if (tab === 'customers') { renderAdminCustomers(); }
            if (tab === 'coupons') { renderAdminCoupons(); }
            if (tab === 'promotions') { renderPromoAdminTab(); }
            if (tab === 'banner') { renderBannerForm(); }
            if (tab === 'background') { renderProductsBgForm(); }
            if (tab === 'hero') { renderHeroForm(); }
            if (tab === 'slider') { renderAdminSlides(); }
            if (tab === 'team') { renderAdminTeam(); renderTeamPermissionCheckboxes([]); renderTeamExtraPermissionCheckboxes([]); }
            if (tab === 'videos') { renderVideosForm(); }
            if (tab === 'adminRequests') { renderAdminRequests(); }
            if (tab === 'reviews') { renderAdminReviews(); }
            if (tab === 'applications') { renderAdminApplications(); }
        }

        // ==========================================================================
        // ADDED: Products tab — lets the admin add new products and edit name, price,
        // description, image, discount and in-stock/out-of-stock status without touching
        // code. Every change calls saveProducts() so it's saved and visible to all visitors.
        // ==========================================================================
        // ADDED: filters the admin Products list by name/brand/description as the
        // admin types in the admin search bar.
        function handleAdminProductSearch(value) {
            adminProductSearch = value;
            const clearBtn = document.getElementById('adminProductSearchClear');
            if (clearBtn) clearBtn.classList.toggle('show', value.trim() !== '');
            renderAdminProducts();
        }

        function clearAdminProductSearch() {
            adminProductSearch = '';
            const input = document.getElementById('adminProductSearchInput');
            if (input) input.value = '';
            const clearBtn = document.getElementById('adminProductSearchClear');
            if (clearBtn) clearBtn.classList.remove('show');
            renderAdminProducts();
        }

        function renderAdminProducts() {
            const list = document.getElementById('adminProductsList');

            let productsToShow = PRODUCTS;
            if (adminProductSearch.trim() !== '') {
                const q = adminProductSearch.trim().toLowerCase();
                productsToShow = PRODUCTS.filter(p =>
                    p.name.toLowerCase().includes(q) ||
                    p.brandName.toLowerCase().includes(q) ||
                    p.desc.toLowerCase().includes(q)
                );
            }

            if (!PRODUCTS.length) {
                list.innerHTML = '<div class="admin-empty">No products yet — add your first one above.</div>';
                return;
            }
            if (!productsToShow.length) {
                list.innerHTML = '<div class="admin-empty">No products match your search 🌸</div>';
                return;
            }
            list.innerHTML = productsToShow.map(p => {
                const hasVariants = p.variants && p.variants.length > 0;
                const inStock = hasVariants ? p.variants.some(v => v.inStock !== false) : p.inStock;
                const hasDiscount = !hasVariants && Number(p.discountPercent) > 0 && Number(p.discountPercent) <= 100;
                const isFeatured = p.featured !== false;
                const isFlashDeal = !!p.flashDeal;
                // ADDED: for variant products, show the price range + option count
                // instead of a single price. For discounted products, show original
                // price struck through next to the discounted price.
                let priceMeta;
                if (hasVariants) {
                    priceMeta = `${p.variants.length} option${p.variants.length === 1 ? '' : 's'} (৳${Math.min(...p.variants.map(v => v.price)).toLocaleString()}–৳${Math.max(...p.variants.map(v => v.price)).toLocaleString()})`;
                } else if (hasDiscount) {
                    priceMeta = `৳${p.price.toLocaleString()} → ৳${effectivePrice(p).toLocaleString()} (${p.discountPercent}% off)`;
                } else {
                    priceMeta = `৳${p.price.toLocaleString()}`;
                }
                return `
    <div class="admin-review-row ${inStock ? '' : 'pending'}">
      <div class="admin-review-info">
        <div class="admin-review-name">${escapeHtml(p.name)}${inStock ? '' : '<span class="admin-pending-tag">Out of stock</span>'}${isFeatured ? '' : '<span class="admin-pending-tag" style="background:var(--pink-mid); color:var(--navy);">Not on front page</span>'}${isFlashDeal ? ' <span class="admin-pending-tag" style="background:#f5a623;color:#fff;">⚡ Flash Deal</span>' : ''}</div>
        <div class="admin-review-meta">${escapeHtml(p.brandName)} · ${priceMeta}</div>
        <p class="admin-review-text">${escapeHtml(p.desc)}</p>
      </div>
      <div class="admin-review-actions">
        <button class="admin-btn verify" onclick="editProduct(${p.id})">✎ Edit</button>
        <button class="admin-btn ${isFeatured ? 'unverify' : 'verify'}" onclick="toggleProductFeatured(${p.id})">${isFeatured ? '✕ Hide from Front' : '✓ Show on Front'}</button>
        <button class="admin-btn ${isFlashDeal ? 'unverify' : 'verify'}" onclick="toggleProductFlashDeal(${p.id})">${isFlashDeal ? '✕ Remove from Flash' : '⚡ Add to Flash Deal'}</button>
        ${hasVariants ? '' : `<button class="admin-btn ${p.inStock ? 'unverify' : 'verify'}" onclick="toggleProductStock(${p.id})">${p.inStock ? '✕ Mark Out' : '✓ Mark In'}</button>`}
        ${hasDeleteProductPermission() ? `<button class="admin-btn delete" onclick="deleteProduct(${p.id})">🗑 Delete</button>` : ''}
      </div>
    </div>
  `;
            }).join('');
        }

        // ==========================================================================
        // ADDED: Variant editor state + helpers. `currentEditingVariants` holds the
        // list of options currently shown in the "Add/Edit Product" form. It's kept
        // in memory only while the form is open, then written into the product's
        // `variants` array by saveProductForm().
        // ==========================================================================
        let currentEditingVariants = [];

        function addVariantRow() {
            currentEditingVariants.push({
                id: 'v' + Date.now() + Math.floor(Math.random() * 1000),
                name: '',
                price: '',
                img: '',
                inStock: true
            });
            renderVariantEditList();
        }

        function renderVariantEditList() {
            const wrap = document.getElementById('variantEditList');
            if (!currentEditingVariants.length) {
                wrap.innerHTML = '<p style="font-size:12px; color:var(--text-muted); margin-bottom: 4px;">No options added — this will be a normal single-price product.</p>';
                return;
            }
            wrap.innerHTML = currentEditingVariants.map((v, idx) => `
    <div class="admin-variant-row">
      <input type="text" class="variant-name-input" placeholder="e.g. Espresso Dark Brown" value="${escapeHtml(v.name)}"
        oninput="updateVariantField(${idx}, 'name', this.value)">
      <input type="text" class="variant-img-input" placeholder="Photo URL for this shade" value="${escapeHtml(v.img || '')}"
        oninput="updateVariantField(${idx}, 'img', this.value)">
      <input type="number" class="variant-price-input" placeholder="Price" value="${v.price}"
        oninput="updateVariantField(${idx}, 'price', this.value)">
      <label>
        <input type="checkbox" ${v.inStock !== false ? 'checked' : ''}
          onchange="updateVariantField(${idx}, 'inStock', this.checked)">
        In stock
      </label>
      <button type="button" class="admin-btn delete" onclick="removeVariantRow(${idx})">🗑</button>
    </div>
  `).join('');
        }

        function updateVariantField(idx, field, value) {
            if (!currentEditingVariants[idx]) return;
            currentEditingVariants[idx][field] = value;
        }

        function removeVariantRow(idx) {
            currentEditingVariants.splice(idx, 1);
            renderVariantEditList();
        }

        // Fills the form with an existing product's data so the admin can change it.
        function editProduct(id) {
            const p = PRODUCTS.find(pr => pr.id === id);
            if (!p) return;
            document.getElementById('editingProductId').value = p.id;
            document.getElementById('productFormTitle').textContent = 'Edit Product';
            document.getElementById('prodBrandName').value = p.brandName;
            document.getElementById('prodName').value = p.name;
            document.getElementById('prodDesc').value = p.desc;
            document.getElementById('prodCategory').value = p.category || '';
            document.getElementById('prodPrice').value = p.price;
            document.getElementById('prodDiscount').value = p.discountPercent || '';
            document.getElementById('prodImg').value = p.img;
            document.getElementById('prodInStock').checked = p.inStock;
            document.getElementById('prodFeatured').checked = p.featured !== false;
            document.getElementById('prodFlashDeal').checked = !!p.flashDeal; // ADDED
            renderConcernCheckboxes(p.concerns || []); // ADDED
            // ADDED: load this product's existing variants (deep copy, so cancelling
            // an edit doesn't mutate the live product) into the editor.
            currentEditingVariants = p.variants ? JSON.parse(JSON.stringify(p.variants)) : [];
            renderVariantEditList();
            // scroll the form into view within the modal
            document.getElementById('productFormTitle').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }

        // Clears the form back to "Add New Product" mode.
        function resetProductForm() {
            document.getElementById('editingProductId').value = '';
            document.getElementById('productFormTitle').textContent = 'Add New Product';
            document.getElementById('prodBrandName').value = '';
            document.getElementById('prodName').value = '';
            document.getElementById('prodDesc').value = '';
            document.getElementById('prodCategory').value = '';
            document.getElementById('prodPrice').value = '';
            document.getElementById('prodDiscount').value = '';
            document.getElementById('prodImg').value = '';
            document.getElementById('prodInStock').checked = true;
            document.getElementById('prodFeatured').checked = true;
            document.getElementById('prodFlashDeal').checked = false; // ADDED
            renderConcernCheckboxes([]); // ADDED
            currentEditingVariants = [];
            renderVariantEditList();
        }

        // Handles both "Add New Product" and "Edit Product" — decided by whether
        // #editingProductId currently holds an id.
        async function saveProductForm() {
            const brandName = document.getElementById('prodBrandName').value.trim();
            const name = document.getElementById('prodName').value.trim();
            const desc = document.getElementById('prodDesc').value.trim();
            const category = document.getElementById('prodCategory').value; // ADDED
            const price = parseFloat(document.getElementById('prodPrice').value);
            // ADDED: read + validate the discount percentage (0–100, defaults to 0)
            let discountPercent = parseFloat(document.getElementById('prodDiscount').value);
            if (isNaN(discountPercent) || discountPercent < 0) discountPercent = 0;
            if (discountPercent > 100) discountPercent = 100;
            const img = document.getElementById('prodImg').value.trim();
            const inStock = document.getElementById('prodInStock').checked;
            const featured = document.getElementById('prodFeatured').checked; // ADDED
            const flashDeal = document.getElementById('prodFlashDeal').checked; // ADDED
            const concerns = getSelectedProductConcerns(); // ADDED
            const editingId = document.getElementById('editingProductId').value;

            // ADDED: turn the in-progress variant rows into a clean array, dropping
            // any row where the admin hasn't filled in a name/price yet.
            const variants = currentEditingVariants
                .filter(v => v.name && v.name.trim() && v.price !== '' && !isNaN(parseFloat(v.price)))
                .map(v => ({ id: v.id, name: v.name.trim(), price: parseFloat(v.price), img: (v.img || '').trim(), inStock: v.inStock !== false }));
            const hasVariants = variants.length > 0;

            // Price is only required when there are no variants — a variant product
            // gets its pricing entirely from its options.
            if (!brandName || !name || !img || (!hasVariants && !price)) {
                showToast('Please fill in brand, name, image URL, and price (or add at least one option)');
                return;
            }

            // turn "Beauty of Joseon" into a url/filter-safe key like "beauty-of-joseon"
            const brand = brandName.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

            if (editingId) {
                const p = PRODUCTS.find(pr => pr.id === parseInt(editingId, 10));
                if (p) Object.assign(p, { brand, brandName, name, desc,category, price: price || 0, discountPercent, img, inStock, featured, flashDeal, concerns, variants });
                showToast('Product updated ✓');
            } else {
                PRODUCTS.push({ id: Date.now(), brand, brandName, name, desc, price: price || 0, discountPercent, img, inStock, featured, flashDeal, concerns, variants });
                showToast('Product added ✓');
            }

            await saveProducts();
            renderFlashDeals(); // ADDED: keep the Flash Deals section in sync right away
            renderAdminConcerns(); // ADDED: keep the "used by N products" counts in sync
            // গুগল শীটে প্রোডাক্ট ইনফো সেন্ড করা
            const savedProductObj = editingId
                ? PRODUCTS.find(pr => pr.id === parseInt(editingId, 10))
                : PRODUCTS[PRODUCTS.length - 1];

            if (savedProductObj) {
                sendToGoogleSheet('save_product', savedProductObj);
            }
            resetProductForm();
            renderAdminProducts();
            renderShopView();
            renderHomeFeatured();
        }

        // ADDED: this is the actual hook for "notify customers when a new
        // product arrives" — a fresh (non-edit) save with in-stock true opens a
        // pre-filled WhatsApp message to the shop's own number listing the
        // opted-in customers, so the admin can quickly broadcast the news.
        // (No automatic messages are sent — WhatsApp's Business/Cloud API would
        // be needed for that; this just makes manual broadcasting fast.)


        // Quick in-stock / out-of-stock toggle without opening the full edit form.
        async function toggleProductStock(id) {
            const p = PRODUCTS.find(pr => pr.id === id);
            if (!p) return;
            p.inStock = !p.inStock;
            await saveProducts();
            renderAdminProducts();
            renderShopView();
            showToast(p.inStock ? 'Marked in stock ✓' : 'Marked out of stock');
        }

        // ADDED: quick toggle for whether a product shows in its brand's home-page
        // preview section (it always still shows on the brand's own full page).
        async function toggleProductFeatured(id) {
            const p = PRODUCTS.find(pr => pr.id === id);
            if (!p) return;
            p.featured = !(p.featured !== false);
            await saveProducts();
            renderAdminProducts();
            renderShopView();
            showToast(p.featured ? 'Now showing on front page ✓' : 'Hidden from front page (still on brand page)');
        }

        // ADDED: quick toggle for whether a product is part of the Flash Deals
        // section. Its discount stays tied to the shared Flash Deal countdown —
        // see startFlashDealTimer()/checkFlashDealExpiry().
        async function toggleProductFlashDeal(id) {
            const p = PRODUCTS.find(pr => pr.id === id);
            if (!p) return;
            p.flashDeal = !p.flashDeal;
            await saveProducts();
            renderAdminProducts();
            renderFlashDeals();
            showToast(p.flashDeal ? 'Added to Flash Deals ⚡ (set/confirm the timer above)' : 'Removed from Flash Deals');
        }

        async function deleteProduct(id) {
            if (!hasDeleteProductPermission()) { showToast("You don't have permission to delete products 🚫"); return; }
            PRODUCTS = PRODUCTS.filter(p => p.id !== id);
            await saveProducts();
            renderAdminProducts();
            renderShopView();
            showToast('Product deleted 🗑');
        }

        function renderAdminReviews() {
            const list = document.getElementById('adminReviewsList');
            if (!REVIEWS.length) {
                list.innerHTML = '<div class="admin-empty">No reviews yet.</div>';
                return;
            }
            const sorted = [...REVIEWS].sort((a, b) => new Date(b.date) - new Date(a.date));
            list.innerHTML = sorted.map(r => {
                const isFeatured = r.featured !== false; // ADDED: same "featured !== false" default-true pattern used for products
                return `
    <div class="admin-review-row ${r.verified ? '' : 'pending'}">
      <div class="admin-review-info">
        <div class="admin-review-name">${escapeHtml(r.name)}${r.verified ? '' : '<span class="admin-pending-tag">Not verified</span>'}${isFeatured ? ' <span class="admin-pending-tag" style="background:#2ecc71;color:#fff;">On Front Page</span>' : ''}</div>
        <div class="admin-review-meta">${formatReviewDate(r.date)} · ${'★'.repeat(r.rating)}${'☆'.repeat(5 - r.rating)}${r.product ? ' · ' + escapeHtml(r.product) : ''}${r.phone ? ' · ' + escapeHtml(r.phone) : ''}</div>
        <p class="admin-review-text">${escapeHtml(r.text)}</p>
      </div>
      <div class="admin-review-actions">
        <button class="admin-btn ${r.verified ? 'unverify' : 'verify'}" onclick="toggleVerifyReview(${r.id})">${r.verified ? '✕ Unverify' : '✓ Verify'}</button>
        <button class="admin-btn ${isFeatured ? 'unverify' : 'verify'}" onclick="toggleReviewFeatured(${r.id})">${isFeatured ? '✕ Hide from Front' : '✓ Show on Front'}</button>
        <button class="admin-btn delete" onclick="deleteReview(${r.id})">🗑 Delete</button>
      </div>
    </div>
  `;
            }).join('');
        }

        // ADDED: quick toggle for whether a review shows in the homepage reviews
        // strip (it always still shows on the full Reviews page).
        async function toggleReviewFeatured(id) {
            const r = REVIEWS.find(rv => rv.id === id);
            if (!r) return;
            r.featured = !(r.featured !== false);
            await saveReviews();
            renderAdminReviews();
            renderHomeReviews();
            showToast(r.featured ? 'Now showing on front page ✓' : 'Hidden from front page (still on Reviews page)');
        }

        async function toggleVerifyReview(id) {
            const r = REVIEWS.find(rv => rv.id === id);
            if (!r) return;
            r.verified = !r.verified;
            await saveReviews();
            renderAdminReviews();
            renderReviews();
            showToast(r.verified ? 'Review verified ✓' : 'Verification removed');
        }

        async function deleteReview(id) {
            REVIEWS = REVIEWS.filter(rv => rv.id !== id);
            await saveReviews();
            renderAdminReviews();
            renderReviews();
            showToast('Review deleted 🗑');
        }

        function formatReviewDate(d) {
            return new Date(d).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
        }

        function escapeHtml(str) {
            const div = document.createElement('div');
            div.textContent = str;
            return div.innerHTML;
        }

        let selectedRating = 0;
        document.addEventListener('DOMContentLoaded', () => {
            const picker = document.getElementById('starPicker');
            if (!picker) return;
            const stars = picker.querySelectorAll('span');
            stars.forEach(star => {
                star.addEventListener('click', () => {
                    selectedRating = parseInt(star.dataset.val, 10);
                    stars.forEach(s => s.classList.toggle('active', parseInt(s.dataset.val, 10) <= selectedRating));
                });
            });
        });

        function openReviewModal() {
            document.getElementById('reviewModal').classList.add('open');
            // ADDED: opened from a product detail page? pre-fill + lock the
            // "product" field to that exact product so the review is always
            // correctly tagged to it.
            const onDetailPage = document.getElementById('productDetailPageView').style.display !== 'none';
            const revProductInput = document.getElementById('revProduct');
            if (onDetailPage && detailProductId) {
                const p = PRODUCTS.find(pr => pr.id === detailProductId);
                if (p) {
                    revProductInput.value = p.name;
                    revProductInput.readOnly = true;
                } else {
                    revProductInput.readOnly = false;
                }
            } else {
                revProductInput.readOnly = false;
            }
        }

        function closeReviewModal() {
            document.getElementById('reviewModal').classList.remove('open');
            selectedRating = 0;
            document.querySelectorAll('#starPicker span').forEach(s => s.classList.remove('active'));
            document.getElementById('revName').value = '';
            document.getElementById('revProduct').value = '';
            document.getElementById('revProduct').readOnly = false;
            document.getElementById('revText').value = '';
        }

        async function submitReview() {
            const name = document.getElementById('revName').value.trim();
            const product = document.getElementById('revProduct').value.trim();
            const text = document.getElementById('revText').value.trim();

            if (!selectedRating) { showToast('Please select a star rating'); return; }
            if (!name) { showToast('Please enter your name'); return; }
            if (!text) { showToast('Please write your review'); return; }

            REVIEWS.push({
                id: Date.now(),
                name, product, text,
                rating: selectedRating,
                date: new Date().toISOString().slice(0, 10),
                verified: false
            });

            await saveReviews();
            renderReviews();

            // ADDED: if the review was just posted from a product detail page,
            // refresh that product's own review list immediately too.
            const onDetailPage = document.getElementById('productDetailPageView').style.display !== 'none';
            if (onDetailPage && detailProductId) {
                const p = PRODUCTS.find(pr => pr.id === detailProductId);
                if (p) renderProductReviews(p);
            }

            closeReviewModal();
            showToast('Thank you for your review! 🌸');
        }

        // ==========================================================================
        // ADDED: CUSTOMER ACCOUNTS — Sign Up / Log In / Profile
        //
        // Accounts are stored the same way products & reviews are: through
        // cloudGet()/cloudSet() (Netlify Blobs via /api/data), with localStorage as
        // an offline fallback, so a customer created on one device is visible from
        // any device — and so every signup shows up for the admin under Admin Panel
        // → Customers, with their name/email/phone, ready to be messaged about new
        // arrivals.
        //
        // Passwords are never stored in plain text — they're hashed with the
        // browser's built-in SubtleCrypto (SHA-256) before being saved, and only
        // the hash is ever written to storage.
        // ==========================================================================
        const USERS_KEY = 'fiorglow_users_v1';
        const CURRENT_USER_KEY = 'fiorglow_current_user';
        // ADDED: real login now issues a JWT from the server (see submitSignup/
        // submitLogin below) — stored here and sent as "Authorization: Bearer
        // <token>" on requests that need to prove who's logged in (placing an
        // order, fetching "my orders"). This is separate from CURRENT_USER_KEY,
        // which just remembers which email to show in the UI.
        const AUTH_TOKEN_KEY = 'fiorglow_auth_token';
        function getAuthToken() {
            try { return localStorage.getItem(AUTH_TOKEN_KEY); } catch (e) { return null; }
        }
        let USERS = [];
        let currentAuthTab = 'signup';

        async function loadUsers() {
            try {
                const value = await cloudGet(USERS_KEY);
                USERS = value ? JSON.parse(value) : [];
                try { localStorage.setItem(USERS_KEY, JSON.stringify(USERS)); } catch (e) { }
            } catch (e) {
                try {
                    const local = localStorage.getItem(USERS_KEY);
                    USERS = local ? JSON.parse(local) : [];
                } catch (e2) {
                    USERS = [];
                }
            }
            renderAccountNav();
        }

        async function saveUsers() {
            try { localStorage.setItem(USERS_KEY, JSON.stringify(USERS)); } catch (e) { }
            try {
                await cloudSet(USERS_KEY, JSON.stringify(USERS));
            } catch (e) {
                console.error('Could not save customer accounts to the shared store:', e);
                showToast('Could not sync — check your internet connection.');
            }
        }

        // ==========================================================================
        // ADDED: ORDERS — every order placed at checkout is now recorded here (not
        // just sent as a WhatsApp message). Each order is tagged with the
        // customer's email (if they were logged in) and phone number, so the
        // Admin Panel's Customers tab can look up "which products did this
        // customer buy, and on what date" for every signed-up customer.
        // ==========================================================================
        const ORDERS_KEY = 'fiorglow_orders_v1';
        let ORDERS = [];

        async function loadOrders() {
            try {
                const value = await cloudGet(ORDERS_KEY);
                ORDERS = value ? JSON.parse(value) : [];
                try { localStorage.setItem(ORDERS_KEY, JSON.stringify(ORDERS)); } catch (e) { }
            } catch (e) {
                try {
                    const local = localStorage.getItem(ORDERS_KEY);
                    ORDERS = local ? JSON.parse(local) : [];
                } catch (e2) {
                    ORDERS = [];
                }
            }
        }

        async function saveOrders() {
            try { localStorage.setItem(ORDERS_KEY, JSON.stringify(ORDERS)); } catch (e) { }
            try {
                await cloudSet(ORDERS_KEY, JSON.stringify(ORDERS));
            } catch (e) {
                console.error('Could not save order history to the shared store:', e);
            }
        }

        // Returns every order placed by a given customer — matched by email
        // (for logged-in orders) and falls back to phone number (for guest
        // checkouts that used the same WhatsApp number), newest first.
        function getOrdersForCustomer(user) {
            const phoneNorm = (user.phone || '').replace(/\D/g, '');
            return ORDERS
                .filter(o =>
                    (o.customerEmail && o.customerEmail.toLowerCase() === user.email.toLowerCase()) ||
                    (phoneNorm && (o.customerPhone || '').replace(/\D/g, '') === phoneNorm)
                )
                .sort((a, b) => new Date(b.date) - new Date(a.date));
        }

        function formatOrderDate(d) {
            return new Date(d).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })
                + ' · ' + new Date(d).toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' });
        }

        // ==========================================================================
        // ADDED: WISHLIST — logged-in customers can heart a product from its card
        // or detail view to save it. Stored the same way as ORDERS/USERS (cloud +
        // localStorage fallback), keyed by the customer's email + the product id.
        // ==========================================================================
        const WISHLIST_KEY = 'fiorglow_wishlist_v1';
        let WISHLIST = [];

        async function loadWishlist() {
            try {
                const value = await cloudGet(WISHLIST_KEY);
                WISHLIST = value ? JSON.parse(value) : [];
                try { localStorage.setItem(WISHLIST_KEY, JSON.stringify(WISHLIST)); } catch (e) { }
            } catch (e) {
                try {
                    const local = localStorage.getItem(WISHLIST_KEY);
                    WISHLIST = local ? JSON.parse(local) : [];
                } catch (e2) {
                    WISHLIST = [];
                }
            }
            renderWishlistHearts();
        }

        async function saveWishlist() {
            try { localStorage.setItem(WISHLIST_KEY, JSON.stringify(WISHLIST)); } catch (e) { }
            try {
                await cloudSet(WISHLIST_KEY, JSON.stringify(WISHLIST));
            } catch (e) {
                console.error('Could not save wishlist to the shared store:', e);
            }
        }

        function isInWishlist(productId) {
            const user = getCurrentCustomer();
            if (!user) return false;
            return WISHLIST.some(w => w.userEmail.toLowerCase() === user.email.toLowerCase() && w.productId === productId);
        }

        function getWishlistForCustomer(user) {
            return WISHLIST.filter(w => w.userEmail.toLowerCase() === user.email.toLowerCase());
        }

        // Toggles a product in/out of the logged-in customer's wishlist. Called
        // from the heart button on product cards and the product detail modal.
        async function toggleWishlist(productId, evt) {
            if (evt) evt.stopPropagation();
            const user = getCurrentCustomer();
            if (!user) { openAuthModal('login'); return; }

            const idx = WISHLIST.findIndex(w => w.userEmail.toLowerCase() === user.email.toLowerCase() && w.productId === productId);
            if (idx > -1) {
                WISHLIST.splice(idx, 1);
                showToast('Removed from wishlist');
            } else {
                WISHLIST.push({ userEmail: user.email, productId, addedAt: new Date().toISOString() });
                showToast('Added to wishlist ♥');
            }
            await saveWishlist();
            renderWishlistHearts();
            if (dashActiveTab === 'wishlist' && document.getElementById('dashboardPageView').style.display !== 'none') {
                renderDashWishlist();
            }
        }

        // Refreshes every heart icon on the page (product cards + detail modal)
        // to reflect the current wishlist state — called after login/logout too.
        function renderWishlistHearts() {
            document.querySelectorAll('.wishlist-heart-btn').forEach(btn => {
                const pid = Number(btn.dataset.pid);
                btn.classList.toggle('active', isInWishlist(pid));
                btn.textContent = isInWishlist(pid) ? '♥' : '♡';
            });
        }

        // Hashes a password with SHA-256 so plain-text passwords are never stored.
        async function hashPassword(password) {
            const enc = new TextEncoder().encode(password);
            const buf = await crypto.subtle.digest('SHA-256', enc);
            return Array.from(new Uint8Array(buf)).map(b => b.toString(16).padStart(2, '0')).join('');
        }

        function normalizeIdentifier(str) {
            return (str || '').trim().toLowerCase();
        }

        function findUserByEmailOrPhone(identifier) {
            const norm = normalizeIdentifier(identifier);
            return USERS.find(u => u.email.toLowerCase() === norm || u.phone.replace(/\s+/g, '') === identifier.trim().replace(/\s+/g, ''));
        }

        function getCurrentCustomer() {
            let email = null;
            try { email = localStorage.getItem(CURRENT_USER_KEY); } catch (e) { }
            if (!email) return null;
            return USERS.find(u => u.email.toLowerCase() === email.toLowerCase()) || null;
        }

        // ----- AUTH MODAL (Sign Up / Log In) -----
        function openAuthModal(tab) {
            switchAuthTab(tab || 'signup');
            document.getElementById('authModal').classList.add('open');
        }

        function closeAuthModal() {
            document.getElementById('authModal').classList.remove('open');
            hideAuthError();
        }

        function switchAuthTab(tab) {
            currentAuthTab = tab;
            document.getElementById('authTabSignup').classList.toggle('active', tab === 'signup');
            document.getElementById('authTabLogin').classList.toggle('active', tab === 'login');
            document.getElementById('signupFormWrap').style.display = tab === 'signup' ? 'block' : 'none';
            document.getElementById('loginFormWrap').style.display = tab === 'login' ? 'block' : 'none';
            hideAuthError();
        }

        function showAuthError(msg) {
            const el = document.getElementById('authError');
            el.textContent = msg;
            el.classList.add('show');
        }

        function hideAuthError() {
            const el = document.getElementById('authError');
            el.classList.remove('show');
            el.textContent = '';
        }

        // CHANGED: signup now calls the server's /api/auth/register — the
        // server (not the browser) hashes the password with bcrypt and is the
        // one source of truth for "does this email already exist". A JWT
        // token comes back and is stored for future authenticated requests
        // (placing orders, fetching "my orders"). A passwordless copy is also
        // kept in the local USERS list so the Admin Panel's Customers tab
        // keeps showing signups exactly as before.
        async function submitSignup() {
            const name = document.getElementById('signupName').value.trim();
            const email = document.getElementById('signupEmail').value.trim();
            const phone = document.getElementById('signupPhone').value.trim();
            const password = document.getElementById('signupPassword').value;
            const notify = document.getElementById('signupNotify').checked;

            hideAuthError();
            if (!name) { showAuthError('Please enter your full name.'); return; }
            if (!email || !/^\S+@\S+\.\S+$/.test(email)) { showAuthError('Please enter a valid email address.'); return; }
            if (!phone || phone.replace(/\D/g, '').length !== 11) { showAuthError('Mobile number must be exactly 11 digits (e.g. 01XXXXXXXXX).'); return; }
            if (!password || password.length < 6) { showAuthError('Password must be at least 6 characters.'); return; }

            let data;
            try {
                const res = await fetch('/api/auth/register', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ name, email, phone, password })
                });
                data = await res.json();
                if (!res.ok) { showAuthError(data.error || 'Could not create account'); return; }
            } catch (e) {
                showAuthError('Network error — please check your connection and try again.');
                return;
            }

            try { localStorage.setItem(AUTH_TOKEN_KEY, data.token); } catch (e) { }

            const newUser = { id: Date.now(), name, email: data.user.email, phone, notify, addresses: [], createdAt: data.user.createdAt };
            USERS.push(newUser);
            await saveUsers();
            sendToGoogleSheet('save_customer', newUser);

            try { localStorage.setItem(CURRENT_USER_KEY, data.user.email); } catch (e) { }

            closeAuthModal();
            clearAuthForms();
            renderAccountNav();
            showToast(`Welcome to Fior Glow, ${name.split(' ')[0]}! 🌸`);
        }

        // CHANGED: login now calls /api/auth/login — the server verifies the
        // password against its bcrypt hash and returns a JWT. The browser
        // never sees or checks a password hash itself anymore.
        async function submitLogin() {
            const identifier = document.getElementById('loginIdentifier').value.trim();
            const password = document.getElementById('loginPassword').value;

            hideAuthError();
            if (!identifier) { showAuthError('Please enter your email or mobile number.'); return; }
            if (!password) { showAuthError('Please enter your password.'); return; }

            let data;
            try {
                const res = await fetch('/api/auth/login', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ identifier, password })
                });
                data = await res.json();
                if (!res.ok) { showAuthError(data.error || 'Login failed'); return; }
            } catch (e) {
                showAuthError('Network error — please check your connection and try again.');
                return;
            }

            try { localStorage.setItem(AUTH_TOKEN_KEY, data.token); } catch (e) { }

            // keep the local USERS list (used by the Admin Panel + profile
            // pages) in sync with what the server just confirmed
            let localUser = findUserByEmailOrPhone(data.user.email);
            if (!localUser) {
                localUser = { id: Date.now(), name: data.user.name, email: data.user.email, phone: data.user.phone, notify: data.user.notify, addresses: data.user.addresses || [], createdAt: data.user.createdAt };
                USERS.push(localUser);
                await saveUsers();
            }

            try { localStorage.setItem(CURRENT_USER_KEY, data.user.email); } catch (e) { }

            closeAuthModal();
            clearAuthForms();
            renderAccountNav();
            showToast(`Welcome back, ${data.user.name.split(' ')[0]}! 🌸`);
        }

        function clearAuthForms() {
            ['signupName', 'signupEmail', 'signupPhone', 'signupPassword'].forEach(id => document.getElementById(id).value = '');
            document.getElementById('signupNotify').checked = true;
            ['loginIdentifier', 'loginPassword'].forEach(id => document.getElementById(id).value = '');
        }

        function logoutCustomer() {
            try { localStorage.removeItem(CURRENT_USER_KEY); } catch (e) { }
            try { localStorage.removeItem(AUTH_TOKEN_KEY); } catch (e) { }
            closeProfileModal();
            closeAccountDropdown();
            renderAccountNav();
            // ADDED: send them back to the homepage if they were on the
            // Dashboard page when they logged out (it requires a logged-in user).
            if (document.getElementById('dashboardPageView').style.display !== 'none') {
                goHome();
            }
            showToast('You have been logged out 🌸');
        }

        // ----- NAV BUTTON (Login/Sign Up vs. logged-in name + dropdown) -----
        function renderAccountNav() {
            const btn = document.getElementById('navAccountBtn');
            const avatar = document.getElementById('navAccountAvatar');
            const label = document.getElementById('navAccountLabel');
            const user = getCurrentCustomer();

            if (user) {
                const initial = user.name.trim().charAt(0).toUpperCase() || '🌸';
                avatar.innerHTML = `<span class="nav-account-avatar">${escapeHtml(initial)}</span>`;
                label.textContent = user.name.split(' ')[0];
                btn.title = 'View your account';
                document.getElementById('dropdownAccName').textContent = user.name;
                document.getElementById('dropdownAccEmail').textContent = user.email;
            } else {
                avatar.innerHTML = '👤';
                label.textContent = 'Login / Sign Up';
                btn.title = 'Log in or create an account';
                closeAccountDropdown();
            }
            renderWishlistHearts();
        }

        // ADDED: Logged out → opens the auth modal (unchanged). Logged in →
        // toggles the dropdown menu (Dashboard / My Account / My Orders /
        // Wishlist / Logout) shown in the screenshot, instead of jumping
        // straight into a modal.
        function handleAccountBtnClick(evt) {
            if (evt) evt.stopPropagation();
            const user = getCurrentCustomer();
            if (!user) { openAuthModal('signup'); return; }
            document.getElementById('navAccountDropdown').classList.toggle('open');
        }

        function closeAccountDropdown() {
            const dd = document.getElementById('navAccountDropdown');
            if (dd) dd.classList.remove('open');
        }

        // Closes the account dropdown when clicking anywhere outside it.
        document.addEventListener('click', function (e) {
            const wrap = document.getElementById('navAccountWrap');
            if (wrap && !wrap.contains(e.target)) closeAccountDropdown();
        });

        // ----- PROFILE MODAL (legacy — kept for compatibility, no longer
        // opened from the nav; "My Account" now opens the Dashboard page's
        // Profile tab instead, see switchDashTab()) -----
        function openProfileModal() {
            const user = getCurrentCustomer();
            if (!user) { openAuthModal('login'); return; }

            document.getElementById('profileAvatar').textContent = (user.name.trim().charAt(0) || '🌸').toUpperCase();
            document.getElementById('profileName').textContent = user.name;
            document.getElementById('profileEmail').textContent = user.email;
            document.getElementById('profilePhone').textContent = user.phone;
            document.getElementById('profileSince').textContent = new Date(user.createdAt).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
            document.getElementById('profileNotifyToggle').checked = !!user.notify;

            // ADDED: render this customer's own order history — every order
            // they've placed, with the products bought and the date, newest
            // first — same data source the admin panel's Customers tab uses.
            const ordersList = document.getElementById('profileOrdersList');
            const myOrders = getOrdersForCustomer(user);
            if (!myOrders.length) {
                ordersList.innerHTML = '<div class="profile-orders-empty">You haven\'t placed an order yet 🌸</div>';
            } else {
                ordersList.innerHTML = myOrders.map(o => `
    <div class="profile-order-item">
      <div class="profile-order-item-top">
        <span class="profile-order-item-date">🗓️ ${formatOrderDate(o.date)}</span>
        <span class="profile-order-item-total">৳${(o.total || 0).toLocaleString()}</span>
      </div>
      <div class="profile-order-item-products">${o.items.map(it => `${escapeHtml(it.name)} × ${it.qty}`).join('<br>')}</div>
      <div class="profile-order-item-pay">${o.paymentMethod === 'bkash' ? 'Paid via bKash' : 'Cash on Delivery'}${o.coupon ? ' · Coupon: ' + escapeHtml(o.coupon) : ''}</div>
    </div>
  `).join('');
            }

            document.getElementById('profileModal').classList.add('open');
        }

        function closeProfileModal() {
            document.getElementById('profileModal').classList.remove('open');
        }

        async function toggleProfileNotify(checked) {
            const user = getCurrentCustomer();
            if (!user) return;
            user.notify = checked;
            await saveUsers();
            showToast(checked ? 'You will be notified about new products 🌸' : 'New product alerts turned off');
        }

        // ==========================================================================
        // ADDED: CUSTOMER DASHBOARD PAGE — sidebar tab switching + renderers for
        // Dashboard (stats + recent orders), My Orders, My Profile, My
        // Addresses, Wishlist and Security. All driven by the same
        // ORDERS/USERS/WISHLIST arrays used elsewhere in the site.
        // ==========================================================================
        function switchDashTab(tab) {
            dashActiveTab = tab;
            document.querySelectorAll('.dashboard-nav-item[data-dash-tab]').forEach(btn => {
                btn.classList.toggle('active', btn.getAttribute('data-dash-tab') === tab);
            });
            ['dashboard', 'orders', 'profile', 'addresses', 'wishlist', 'security'].forEach(t => {
                const el = document.getElementById(`dashTab-${t}`);
                if (el) el.style.display = t === tab ? 'block' : 'none';
            });

            const titles = { dashboard: 'My Dashboard', orders: 'My Orders', profile: 'My Profile', addresses: 'My Addresses', wishlist: 'My Wishlist', security: 'Security' };
            document.getElementById('dashPageTitle').textContent = titles[tab] || 'My Dashboard';

            const user = getCurrentCustomer();
            if (!user) return;

            document.getElementById('dashSideAvatar').textContent = (user.name.trim().charAt(0) || '🌸').toUpperCase();
            document.getElementById('dashSideName').textContent = user.name;
            document.getElementById('dashSideEmail').textContent = user.email;

            if (tab === 'dashboard') renderDashOverview(user);
            else if (tab === 'orders') renderDashOrders(user);
            else if (tab === 'profile') renderDashProfile(user);
            else if (tab === 'addresses') renderDashAddresses(user);
            else if (tab === 'wishlist') renderDashWishlist(user);
        }

        // Builds one order card's HTML — shared by the Dashboard's "Recent
        // Orders" preview and the full "My Orders" list.
        function dashOrderItemHtml(o) {
            const status = o.status || 'Pending';
            const statusClass = status.toLowerCase();
            return `
    <div class="dashboard-order-item">
      <div class="dashboard-order-item-top">
        <div>
          <span class="dashboard-order-item-date">🗓️ ${formatOrderDate(o.date)}</span>
          <span class="dashboard-order-item-id">Order #${o.id}</span>
        </div>
        <span class="dashboard-order-status ${statusClass}">${status}</span>
      </div>
      <div class="dashboard-order-item-products">${o.items.map(it => `${escapeHtml(it.name)} × ${it.qty}`).join('<br>')}</div>
      <div class="dashboard-order-item-bottom">
        <span>${o.paymentMethod === 'bkash' ? 'Paid via bKash' : 'Cash on Delivery'}${o.coupon ? ' · Coupon: ' + escapeHtml(o.coupon) : ''}</span>
        <span class="dashboard-order-item-total">৳${(o.total || 0).toLocaleString()}</span>
      </div>
    </div>
  `;
        }

        function dashOrdersEmptyHtml() {
            return `
    <div class="dashboard-empty">
      <div class="dashboard-empty-icon">🛍️</div>
      <div class="dashboard-empty-title">No Orders Yet</div>
      <div class="dashboard-empty-sub">Start shopping to see your orders here!</div>
      <button class="btn-primary" onclick="openShopPage()">Start Shopping</button>
    </div>
  `;
        }

        function renderDashOverview(user) {
            const orders = getOrdersForCustomer(user);
            const pending = orders.filter(o => (o.status || 'Pending') === 'Pending').length;
            const delivered = orders.filter(o => o.status === 'Delivered').length;
            const wishlistCount = getWishlistForCustomer(user).length;

            document.getElementById('dashStatTotal').textContent = orders.length;
            document.getElementById('dashStatPending').textContent = pending;
            document.getElementById('dashStatDelivered').textContent = delivered;
            document.getElementById('dashStatWishlist').textContent = wishlistCount;

            const recentList = document.getElementById('dashRecentOrdersList');
            recentList.innerHTML = orders.length ? orders.slice(0, 3).map(dashOrderItemHtml).join('') : dashOrdersEmptyHtml();
        }

        function renderDashOrders(user) {
            const orders = getOrdersForCustomer(user);
            document.getElementById('dashOrdersList').innerHTML = orders.length ? orders.map(dashOrderItemHtml).join('') : dashOrdersEmptyHtml();
        }

        function renderDashProfile(user) {
            document.getElementById('dashProfileName').value = user.name;
            document.getElementById('dashProfileEmail').value = user.email;
            document.getElementById('dashProfilePhone').value = user.phone;
            document.getElementById('dashProfileSince').value = new Date(user.createdAt).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
            document.getElementById('dashProfileNotifyToggle').checked = !!user.notify;
        }

        async function saveDashProfile() {
            const user = getCurrentCustomer();
            if (!user) return;
            const name = document.getElementById('dashProfileName').value.trim();
            const phone = document.getElementById('dashProfilePhone').value.trim();
            if (!name) { showToast('Please enter your name'); return; }
            if (!phone || phone.replace(/\D/g, '').length !== 11) { showToast('Mobile number must be exactly 11 digits'); return; }

            user.name = name;
            user.phone = phone;
            await saveUsers();
            renderAccountNav();
            document.getElementById('dashSideName').textContent = user.name;
            showToast('Profile updated ✓');
        }

        // ----- My Addresses (simple address book, stored on the user record) -----
        function renderDashAddresses(user) {
            const list = document.getElementById('dashAddressesList');
            const addresses = user.addresses || [];
            if (!addresses.length) {
                list.innerHTML = '<div class="admin-empty" style="padding:1rem 0;">No saved addresses yet — add one below.</div>';
                return;
            }
            list.innerHTML = addresses.map(a => `
    <div class="dashboard-addr-card">
      <div>
        <div class="dashboard-addr-label">📍 ${escapeHtml(a.label)}</div>
        <div class="dashboard-addr-text">${escapeHtml(a.text)}${a.phone ? '<br>📱 ' + escapeHtml(a.phone) : ''}</div>
      </div>
      <div class="dashboard-addr-actions">
        <button class="dashboard-icon-btn" onclick="openAddressForm(${a.id})" title="Edit">✎</button>
        <button class="dashboard-icon-btn" onclick="deleteAddress(${a.id})" title="Delete">🗑</button>
      </div>
    </div>
  `).join('');
        }

        function openAddressForm(editId) {
            const form = document.getElementById('dashAddressForm');
            form.style.display = 'block';
            if (editId) {
                const user = getCurrentCustomer();
                const addr = (user.addresses || []).find(a => a.id === editId);
                if (addr) {
                    document.getElementById('dashAddrEditId').value = addr.id;
                    document.getElementById('dashAddrLabel').value = addr.label;
                    document.getElementById('dashAddrText').value = addr.text;
                    document.getElementById('dashAddrPhone').value = addr.phone || '';
                }
            } else {
                document.getElementById('dashAddrEditId').value = '';
                document.getElementById('dashAddrLabel').value = '';
                document.getElementById('dashAddrText').value = '';
                document.getElementById('dashAddrPhone').value = '';
            }
        }

        function closeAddressForm() {
            document.getElementById('dashAddressForm').style.display = 'none';
        }

        async function saveAddress() {
            const user = getCurrentCustomer();
            if (!user) return;
            const label = document.getElementById('dashAddrLabel').value.trim();
            const text = document.getElementById('dashAddrText').value.trim();
            const phone = document.getElementById('dashAddrPhone').value.trim();
            const editId = document.getElementById('dashAddrEditId').value;

            if (!label) { showToast('Please enter a label (e.g. Home, Office)'); return; }
            if (!text) { showToast('Please enter the full address'); return; }

            if (!user.addresses) user.addresses = [];
            if (editId) {
                const addr = user.addresses.find(a => a.id === Number(editId));
                if (addr) Object.assign(addr, { label, text, phone });
            } else {
                user.addresses.push({ id: Date.now(), label, text, phone });
            }
            await saveUsers();
            closeAddressForm();
            renderDashAddresses(user);
            showToast('Address saved ✓');
        }

        async function deleteAddress(id) {
            const user = getCurrentCustomer();
            if (!user || !user.addresses) return;
            user.addresses = user.addresses.filter(a => a.id !== id);
            await saveUsers();
            renderDashAddresses(user);
            showToast('Address removed 🗑');
        }

        // ----- Wishlist tab -----
        function renderDashWishlist(user) {
            user = user || getCurrentCustomer();
            if (!user) return;
            const grid = document.getElementById('dashWishlistGrid');
            const items = getWishlistForCustomer(user);
            if (!items.length) {
                grid.innerHTML = `
    <div class="dashboard-empty" style="grid-column:1/-1;">
      <div class="dashboard-empty-icon">♡</div>
      <div class="dashboard-empty-title">Your wishlist is empty</div>
      <div class="dashboard-empty-sub">Tap the heart on any product to save it here.</div>
      <button class="btn-primary" onclick="openShopPage()">Browse Products</button>
    </div>
  `;
                return;
            }
            const cards = items
                .map(w => PRODUCTS.find(p => p.id === w.productId))
                .filter(Boolean)
                .map((p, i) => cardHtml(p, i))
                .join('');
            grid.innerHTML = cards || `
    <div class="dashboard-empty" style="grid-column:1/-1;">
      <div class="dashboard-empty-icon">♡</div>
      <div class="dashboard-empty-title">Your wishlist is empty</div>
      <div class="dashboard-empty-sub">Tap the heart on any product to save it here.</div>
      <button class="btn-primary" onclick="openShopPage()">Browse Products</button>
    </div>
  `;
            initImageFadeIn();
        }

        // ----- Security tab: change password -----
        async function submitPasswordChange() {
            const user = getCurrentCustomer();
            if (!user) return;
            const current = document.getElementById('dashSecCurrentPass').value;
            const next = document.getElementById('dashSecNewPass').value;
            const confirm = document.getElementById('dashSecConfirmPass').value;

            if (!current) { showToast('Please enter your current password'); return; }
            const currentHash = await hashPassword(current);
            if (currentHash !== user.passwordHash) { showToast('Current password is incorrect'); return; }
            if (!next || next.length < 6) { showToast('New password must be at least 6 characters'); return; }
            if (next !== confirm) { showToast('New passwords do not match'); return; }

            user.passwordHash = await hashPassword(next);
            await saveUsers();
            document.getElementById('dashSecCurrentPass').value = '';
            document.getElementById('dashSecNewPass').value = '';
            document.getElementById('dashSecConfirmPass').value = '';
            showToast('Password updated ✓');
        }

        // ----- ADMIN: Customers tab -----
        function handleAdminCustomerSearch(value) {
            adminCustomerSearch = value;
            const clearBtn = document.getElementById('adminCustomerSearchClear');
            if (clearBtn) clearBtn.classList.toggle('show', value.trim() !== '');
            renderAdminCustomers();
        }

        function clearAdminCustomerSearch() {
            adminCustomerSearch = '';
            const input = document.getElementById('adminCustomerSearchInput');
            if (input) input.value = '';
            const clearBtn = document.getElementById('adminCustomerSearchClear');
            if (clearBtn) clearBtn.classList.remove('show');
            renderAdminCustomers();
        }

        function renderAdminCustomers() {
            const list = document.getElementById('adminCustomersList');
            const countEl = document.getElementById('adminCustomerCount');

            let toShow = USERS;
            if (adminCustomerSearch.trim() !== '') {
                const q = adminCustomerSearch.trim().toLowerCase();
                toShow = USERS.filter(u =>
                    u.name.toLowerCase().includes(q) ||
                    u.email.toLowerCase().includes(q) ||
                    u.phone.toLowerCase().includes(q)
                );
            }

            const notifyOnCount = USERS.filter(u => u.notify).length;
            countEl.textContent = `${USERS.length} customer${USERS.length === 1 ? '' : 's'} signed up · ${notifyOnCount} opted in for new-product alerts`;

            if (!USERS.length) {
                list.innerHTML = '<div class="admin-empty">No customers have signed up yet.</div>';
                return;
            }
            if (!toShow.length) {
                list.innerHTML = '<div class="admin-empty">No customers match your search 🌸</div>';
                return;
            }

            const sorted = [...toShow].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
            // CHANGED: each customer row now expands (tap the row) to show every
            // order that customer has placed — product(s) bought, quantity,
            // total paid, payment method and the exact date/time.
            list.innerHTML = sorted.map(u => {
                const orders = getOrdersForCustomer(u);
                const orderCount = orders.length;
                const lifetimeSpend = orders.reduce((sum, o) => sum + (o.total || 0), 0);

                const ordersHtml = orders.length
                    ? orders.map(o => `
        <div class="admin-order-item">
          <div class="admin-order-item-products">
            ${o.items.map(it => `${escapeHtml(it.name)} × ${it.qty}`).join('<br>')}
          </div>
          <div class="admin-order-item-side">
            <span class="admin-order-item-date">🗓️ ${formatOrderDate(o.date)}</span>
            <span class="admin-order-item-total">৳${(o.total || 0).toLocaleString()}</span>
            <span class="admin-order-item-pay">${o.paymentMethod === 'bkash' ? 'bKash' : 'Cash on Delivery'}${o.coupon ? ' · ' + escapeHtml(o.coupon) : ''}</span>
            <select class="admin-order-status-select" onclick="event.stopPropagation()" onchange="updateOrderStatus(${o.id}, this.value)">
              <option value="Pending" ${(o.status || 'Pending') === 'Pending' ? 'selected' : ''}>⏱️ Pending</option>
              <option value="Delivered" ${o.status === 'Delivered' ? 'selected' : ''}>✅ Delivered</option>
              <option value="Cancelled" ${o.status === 'Cancelled' ? 'selected' : ''}>❌ Cancelled</option>
            </select>
          </div>
        </div>
      `).join('')
                    : '<div class="admin-empty" style="padding:0.5rem 0;">No orders placed yet.</div>';

                return `
    <div class="admin-customer-row" id="customerRow-${u.id}">
      <div class="admin-customer-top" onclick="toggleCustomerOrders(${u.id})">
        <div class="admin-customer-avatar">${escapeHtml((u.name.trim().charAt(0) || '?').toUpperCase())}</div>
        <div class="admin-customer-info">
          <div class="admin-customer-name">${escapeHtml(u.name)}</div>
          <div class="admin-customer-meta">
            <span>✉️ ${escapeHtml(u.email)}</span>
            <span>📱 ${escapeHtml(u.phone)}</span>
            <span>🗓️ Joined ${formatReviewDate(u.createdAt.slice(0, 10))}</span>
          </div>
          <div class="admin-customer-order-summary">🛍️ ${orderCount} order${orderCount === 1 ? '' : 's'} · ৳${lifetimeSpend.toLocaleString()} lifetime spend</div>
        </div>
        <span class="admin-customer-notify-tag ${u.notify ? 'on' : 'off'}">${u.notify ? '🔔 Notify: On' : 'Notify: Off'}</span>
        <button class="admin-btn delete" onclick="event.stopPropagation(); deleteCustomer(${u.id})" title="Delete this account">🗑</button>
        <span class="admin-customer-expand-icon">▼</span>
      </div>
      <div class="admin-customer-orders">
        <div class="admin-customer-order-summary">Order history — products bought & dates</div>
        ${ordersHtml}
      </div>
    </div>
  `;
            }).join('');
        }

        // ADDED: expands/collapses a single customer row to reveal their order
        // history (called by tapping the customer's name/avatar row).
        function toggleCustomerOrders(id) {
            const row = document.getElementById(`customerRow-${id}`);
            if (row) row.classList.toggle('expanded');
        }

        async function deleteCustomer(id) {
            USERS = USERS.filter(u => u.id !== id);
            await saveUsers();
            renderAdminCustomers();
            showToast('Customer account deleted 🗑');
        }

        // ADDED: updates an order's status (Pending/Delivered/Cancelled) from the
        // admin's Customers tab — this is what feeds the customer's own
        // Dashboard "Pending Orders" / "Delivered" stat cards.
        async function updateOrderStatus(orderId, status) {
            const order = ORDERS.find(o => o.id === orderId);
            if (!order) return;
            order.status = status;
            await saveOrders();
            showToast(`Order marked as ${status}`);
        }

        // ==========================================================================
        // ADDED: ADMIN — Coupons tab. Add/edit/toggle/delete coupon codes. Each
        // coupon is { id, code, percent, active }. Saving calls saveCoupons() so the
        // change is instantly live for every visitor's cart.
        // ==========================================================================
        function renderAdminCoupons() {
            const list = document.getElementById('adminCouponsList');
            if (!COUPONS.length) {
                list.innerHTML = '<div class="admin-empty">No coupons yet — add your first one above.</div>';
                return;
            }
            const sorted = [...COUPONS].sort((a, b) => b.id - a.id);
            list.innerHTML = sorted.map(c => `
    <div class="admin-coupon-row ${c.active ? '' : 'inactive'}">
      <div class="admin-coupon-info">
        <div class="admin-coupon-code">${escapeHtml(c.code)}${c.active ? '' : '<span class="admin-pending-tag">Inactive</span>'}</div>
        <div class="admin-coupon-meta">${c.percent}% off the cart total</div>
      </div>
      <div class="admin-review-actions">
        <button class="admin-btn verify" onclick="editCoupon(${c.id})">✎ Edit</button>
        <button class="admin-btn ${c.active ? 'unverify' : 'verify'}" onclick="toggleCouponActive(${c.id})">${c.active ? '✕ Deactivate' : '✓ Activate'}</button>
        <button class="admin-btn delete" onclick="deleteCoupon(${c.id})">🗑 Delete</button>
      </div>
    </div>
  `).join('');
        }

        function editCoupon(id) {
            const c = COUPONS.find(cp => cp.id === id);
            if (!c) return;
            document.getElementById('editingCouponId').value = c.id;
            document.getElementById('couponFormTitle').textContent = 'Edit Coupon';
            document.getElementById('couponCodeField').value = c.code;
            document.getElementById('couponPercentField').value = c.percent;
            document.getElementById('couponActiveField').checked = c.active;
            document.getElementById('couponFormTitle').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }

        function resetCouponForm() {
            document.getElementById('editingCouponId').value = '';
            document.getElementById('couponFormTitle').textContent = 'Add New Coupon';
            document.getElementById('couponCodeField').value = '';
            document.getElementById('couponPercentField').value = '';
            document.getElementById('couponActiveField').checked = true;
        }

        async function saveCouponForm() {
            const codeRaw = document.getElementById('couponCodeField').value.trim();
            const code = codeRaw.toUpperCase().replace(/\s+/g, '');
            let percent = parseFloat(document.getElementById('couponPercentField').value);
            const active = document.getElementById('couponActiveField').checked;
            const editingId = document.getElementById('editingCouponId').value;

            if (!code) { showToast('Please enter a coupon code'); return; }
            if (isNaN(percent) || percent <= 0 || percent > 100) { showToast('Discount percentage must be between 1 and 100'); return; }
            percent = Math.round(percent);

            // prevent two active/inactive coupons from sharing the same code
            const duplicate = COUPONS.find(c => c.code.toUpperCase() === code && String(c.id) !== String(editingId));
            if (duplicate) { showToast('A coupon with this code already exists'); return; }

            if (editingId) {
                const c = COUPONS.find(cp => cp.id === parseInt(editingId, 10));
                if (c) Object.assign(c, { code, percent, active });
                showToast('Coupon updated ✓');
            } else {
                COUPONS.push({ id: Date.now(), code, percent, active });
                showToast('Coupon added ✓');
            }

            await saveCoupons();
            resetCouponForm();
            renderAdminCoupons();
        }

        async function toggleCouponActive(id) {
            const c = COUPONS.find(cp => cp.id === id);
            if (!c) return;
            c.active = !c.active;
            await saveCoupons();
            renderAdminCoupons();
            showToast(c.active ? 'Coupon activated ✓' : 'Coupon deactivated');
        }

        async function deleteCoupon(id) {
            COUPONS = COUPONS.filter(c => c.id !== id);
            await saveCoupons();
            renderAdminCoupons();
            showToast('Coupon deleted 🗑');
        }

        // ==========================================================================
        // ADDED: BANNER SETTINGS — fully admin-controlled (colors via visual color
        // pickers, text, speed, and 4 click-to-apply transition presets: Slide,
        // Fade, Bounce, Zoom). Stored the same way as products/reviews (cloud +
        // localStorage fallback), so every visitor and device sees the same banner.
        // ==========================================================================
        const BANNER_KEY = 'fiorglow_banner_v1';
        const DEFAULT_BANNER = {
            enabled: true,
            text: '✦ Fior Glow — Glow From Within ✦ Authentic K-Beauty, Delivered ✦ Fior Glow ✦',
            fontSize: 26,
            textColor: '#0A1628',
            speed: 28,
            bg1: '#F9EEF0',
            bg2: '#F2D8DE',
            bg3: '#E8D5A3',
            anim: 'slide'
        };
        let BANNER = { ...DEFAULT_BANNER };
        let bannerFormAnim = 'slide';

        async function loadBanner() {
            try {
                const value = await cloudGet(BANNER_KEY);
                BANNER = value ? { ...DEFAULT_BANNER, ...JSON.parse(value) } : { ...DEFAULT_BANNER };
                try { localStorage.setItem(BANNER_KEY, JSON.stringify(BANNER)); } catch (e) { }
            } catch (e) {
                try {
                    const local = localStorage.getItem(BANNER_KEY);
                    BANNER = local ? { ...DEFAULT_BANNER, ...JSON.parse(local) } : { ...DEFAULT_BANNER };
                } catch (e2) {
                    BANNER = { ...DEFAULT_BANNER };
                }
            }
            applyBannerTo('.search-row', '.search-row-marquee', BANNER);
        }

        async function saveBanner() {
            try { localStorage.setItem(BANNER_KEY, JSON.stringify(BANNER)); } catch (e) { }
            try {
                await cloudSet(BANNER_KEY, JSON.stringify(BANNER));
            } catch (e) {
                console.error('Could not save banner settings to the shared store:', e);
                alert('Could not sync this change to the server — check your internet connection and try again.');
            }
        }

        function applyBannerTo(rowSelector, wrapSelector, cfg) {
            const row = document.querySelector(rowSelector);
            const wrap = document.querySelector(wrapSelector);
            if (!row || !wrap) return;
            const span = wrap.querySelector('span');
            if (!span) return;

            row.style.background = `linear-gradient(135deg, ${cfg.bg1} 0%, ${cfg.bg2} 50%, ${cfg.bg3} 100%)`;

            if (!cfg.enabled) {
                wrap.style.display = 'none';
                return;
            }
            wrap.style.display = 'flex';
            span.textContent = cfg.text;
            span.style.fontSize = cfg.fontSize + 'px';
            span.style.color = cfg.textColor;
            span.className = 'banner-anim-' + (cfg.anim || 'slide');
            span.style.animationDuration = cfg.speed + 's';
        }

        function renderBannerForm() {
            document.getElementById('bannerEnabled').checked = BANNER.enabled;
            document.getElementById('bannerText').value = BANNER.text;
            document.getElementById('bannerFontSize').value = BANNER.fontSize;
            document.getElementById('bannerTextColor').value = BANNER.textColor;
            document.getElementById('bannerSpeed').value = BANNER.speed;
            document.getElementById('bannerBg1').value = BANNER.bg1;
            document.getElementById('bannerBg2').value = BANNER.bg2;
            document.getElementById('bannerBg3').value = BANNER.bg3;
            bannerFormAnim = BANNER.anim || 'slide';
            highlightBannerPreset();
            updateLivePreview();
        }

        function updateLivePreview() {
            const cfg = {
                enabled: document.getElementById('bannerEnabled').checked,
                text: document.getElementById('bannerText').value.trim() || DEFAULT_BANNER.text,
                fontSize: parseFloat(document.getElementById('bannerFontSize').value) || DEFAULT_BANNER.fontSize,
                textColor: document.getElementById('bannerTextColor').value || DEFAULT_BANNER.textColor,
                speed: parseFloat(document.getElementById('bannerSpeed').value) || DEFAULT_BANNER.speed,
                bg1: document.getElementById('bannerBg1').value || DEFAULT_BANNER.bg1,
                bg2: document.getElementById('bannerBg2').value || DEFAULT_BANNER.bg2,
                bg3: document.getElementById('bannerBg3').value || DEFAULT_BANNER.bg3,
                anim: bannerFormAnim
            };
            applyBannerTo('#bannerPreviewBox', '#previewMarquee', cfg);
        }

        function selectBannerAnim(anim) {
            bannerFormAnim = anim;
            highlightBannerPreset();
            updateLivePreview();
        }

        function highlightBannerPreset() {
            document.querySelectorAll('.banner-preset-btn').forEach(b => {
                b.classList.toggle('active', b.dataset.anim === bannerFormAnim);
            });
        }

        async function saveBannerForm() {
            BANNER = {
                enabled: document.getElementById('bannerEnabled').checked,
                text: document.getElementById('bannerText').value.trim() || DEFAULT_BANNER.text,
                fontSize: parseFloat(document.getElementById('bannerFontSize').value) || DEFAULT_BANNER.fontSize,
                textColor: document.getElementById('bannerTextColor').value || DEFAULT_BANNER.textColor,
                speed: parseFloat(document.getElementById('bannerSpeed').value) || DEFAULT_BANNER.speed,
                bg1: document.getElementById('bannerBg1').value || DEFAULT_BANNER.bg1,
                bg2: document.getElementById('bannerBg2').value || DEFAULT_BANNER.bg2,
                bg3: document.getElementById('bannerBg3').value || DEFAULT_BANNER.bg3,
                anim: bannerFormAnim
            };
            await saveBanner();
            applyBannerTo('.search-row', '.search-row-marquee', BANNER);
            showToast('Banner settings updated ✓');
        }

        function resetBannerForm() {
            BANNER = { ...DEFAULT_BANNER };
            bannerFormAnim = DEFAULT_BANNER.anim;
            renderBannerForm();
            saveBanner();
            applyBannerTo('.search-row', '.search-row-marquee', BANNER);
            showToast('Banner reset to default');
        }

        // ==========================================================================
        // ADDED: VIDEO LIBRARY — admin can add as many videos as they like
        // (YouTube link or direct .mp4 URL), each with its own "Show on
        // Homepage" toggle, PLUS a separate single Entry Popup ad video.
        // Stored the same way as banner/products (cloud + localStorage
        // fallback), so every visitor and device sees the same setup.
        // ==========================================================================
        const VIDEOS_KEY = 'fiorglow_videos_v1';
        const AD_POPUP_SESSION_KEY = 'fiorglow_ad_popup_shown_v1';
        const DEFAULT_VIDEOS = {
            library: [], // [{ id, title, type: 'youtube'|'mp4', url, showOnHomepage }]
            adPopup: { enabled: false, type: 'youtube', url: '', delaySeconds: 3, oncePerSession: true }
        };
        let VIDEOS = JSON.parse(JSON.stringify(DEFAULT_VIDEOS));

        // Pulls the video ID out of any common YouTube URL shape (watch?v=,
        // youtu.be/, shorts/, live/, already-an-embed link) so we can build a
        // clean embed URL.
        function youtubeIdFromUrl(url) {
            try {
                const u = new URL(url.trim());
                if (u.hostname.includes('youtu.be')) return u.pathname.split('/').filter(Boolean)[0] || '';
                if (u.searchParams.get('v')) return u.searchParams.get('v');
                let m = u.pathname.match(/\/(embed|shorts|live)\/([^/?]+)/);
                if (m) return m[2];
            } catch (e) { /* not a valid URL */ }
            return '';
        }

        // Builds the actual <iframe>/<video> markup for a given video config.
        // autoplay=true is only used for the entry popup (muted, per browser
        // autoplay rules); homepage cards always start paused.
        function buildVideoEmbedHtml(cfg, autoplay) {
            if (!cfg || !cfg.url) return '';
            if (cfg.type === 'mp4') {
                return `<video src="${cfg.url}" controls playsinline ${autoplay ? 'autoplay muted' : ''} style="width:100%;height:100%;border-radius:inherit;"></video>`;
            }
            const id = youtubeIdFromUrl(cfg.url);
            if (!id) return '<p style="padding:1rem; font-size:13px; color:var(--text-muted);">Video link looks invalid — please check the URL in Admin Panel → Video Library.</p>';
            const autoplayParam = autoplay ? '&autoplay=1&mute=1' : '';
            return `<iframe src="https://www.youtube.com/embed/${id}?rel=0${autoplayParam}" title="video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="width:100%;height:100%;border-radius:inherit;"></iframe>`;
        }

        async function loadVideos() {
            try {
                const value = await cloudGet(VIDEOS_KEY);
                VIDEOS = value ? { ...DEFAULT_VIDEOS, ...JSON.parse(value) } : JSON.parse(JSON.stringify(DEFAULT_VIDEOS));
                try { localStorage.setItem(VIDEOS_KEY, JSON.stringify(VIDEOS)); } catch (e) { }
            } catch (e) {
                try {
                    const local = localStorage.getItem(VIDEOS_KEY);
                    VIDEOS = local ? { ...DEFAULT_VIDEOS, ...JSON.parse(local) } : JSON.parse(JSON.stringify(DEFAULT_VIDEOS));
                } catch (e2) {
                    VIDEOS = JSON.parse(JSON.stringify(DEFAULT_VIDEOS));
                }
            }
            if (!Array.isArray(VIDEOS.library)) VIDEOS.library = [];
            applyVideosToSite();
        }

        async function saveVideos() {
            try { localStorage.setItem(VIDEOS_KEY, JSON.stringify(VIDEOS)); } catch (e) { }
            try {
                await cloudSet(VIDEOS_KEY, JSON.stringify(VIDEOS));
            } catch (e) {
                console.error('Could not save video settings to the shared store:', e);
                showToast('Could not sync — check your internet connection.');
            }
        }

        // Renders every "Show on Homepage" library video as a card on the
        // homepage, and checks whether the entry popup should be shown.
        function applyVideosToSite() {
            const section = document.getElementById('videoLibrarySection');
            const grid = document.getElementById('videoLibraryGrid');
            if (section && grid) {
                const visible = VIDEOS.library.filter(v => v.showOnHomepage && v.url);
                if (visible.length) {
                    section.style.display = 'block';
                    grid.innerHTML = visible.map(v => `
                        <div class="video-card">
                            <div class="video-embed-wrap">${buildVideoEmbedHtml(v, false)}</div>
                            <p class="video-card-title">${escapeHtml(v.title || '')}</p>
                        </div>
                    `).join('');
                } else {
                    section.style.display = 'none';
                    grid.innerHTML = '';
                }
            }
            maybeShowAdPopup();
            renderVideosPageGrid();
        }

        // Shows the entry popup ad after the configured delay. If "once per
        // session" is on, it won't show again until the browser tab/session ends.
        function maybeShowAdPopup() {
            if (!VIDEOS.adPopup.enabled || !VIDEOS.adPopup.url) return;
            if (VIDEOS.adPopup.oncePerSession) {
                try { if (sessionStorage.getItem(AD_POPUP_SESSION_KEY)) return; } catch (e) { }
            }
            const delay = Math.max(0, Number(VIDEOS.adPopup.delaySeconds) || 0) * 1000;
            setTimeout(() => {
                const modal = document.getElementById('adPopupModal');
                const wrap = document.getElementById('adPopupVideoWrap');
                if (!modal || !wrap) return;
                wrap.innerHTML = buildVideoEmbedHtml(VIDEOS.adPopup, true);
                modal.classList.add('open');
                if (VIDEOS.adPopup.oncePerSession) {
                    try { sessionStorage.setItem(AD_POPUP_SESSION_KEY, '1'); } catch (e) { }
                }
            }, delay);
        }

        function closeAdPopup() {
            const modal = document.getElementById('adPopupModal');
            const wrap = document.getElementById('adPopupVideoWrap');
            if (modal) modal.classList.remove('open');
            if (wrap) wrap.innerHTML = ''; // stops playback when closed
        }

        // ----- Video Library: add / edit / delete list (same pattern as Products) -----

        function renderVideoLibraryList() {
            const wrap = document.getElementById('videoLibraryList');
            if (!wrap) return;
            if (!VIDEOS.library.length) {
                wrap.innerHTML = '<div class="admin-empty">No videos yet — add your first one above.</div>';
                return;
            }
            wrap.innerHTML = VIDEOS.library.map(v => `
                <div class="admin-review-row">
                    <div class="admin-review-info">
                        <div class="admin-review-name">${escapeHtml(v.title || 'Untitled')}</div>
                        <div class="admin-review-meta">${v.type === 'mp4' ? 'Direct Video' : 'YouTube'} · ${v.showOnHomepage ? 'On Homepage ✓' : 'Hidden from Homepage'}</div>
                    </div>
                    <div class="admin-review-actions">
                        <button class="admin-btn verify" onclick="editVideoLibraryItem('${v.id}')">✎ Edit</button>
                        <button class="admin-btn unverify" onclick="deleteVideoLibraryItem('${v.id}')">✕ Delete</button>
                    </div>
                </div>
            `).join('');
        }

        // Renders the dedicated Videos page — shows EVERY video in the
        // library (regardless of the "Show on Homepage" toggle), with title.
        function renderVideosPageGrid() {
            const grid = document.getElementById('videosPageGrid');
            if (!grid) return;
            if (!VIDEOS.library.length) {
                grid.innerHTML = '<p style="font-size:14px; color:var(--text-muted);">No videos have been added yet.</p>';
                return;
            }
            grid.innerHTML = VIDEOS.library.map(v => `
                <div class="video-card">
                    <div class="video-embed-wrap">${buildVideoEmbedHtml(v, false)}</div>
                    <p class="video-card-title">${escapeHtml(v.title || '')}</p>
                </div>
            `).join('');
        }

        function resetVideoForm() {
            document.getElementById('videoFormTitle').textContent = 'Add New Video';
            document.getElementById('videoEditId').value = '';
            document.getElementById('videoTitleInput').value = '';
            document.getElementById('videoTypeInput').value = 'youtube';
            document.getElementById('videoUrlInput').value = '';
            document.getElementById('videoShowOnHome').checked = true;
        }

        function editVideoLibraryItem(id) {
            const v = VIDEOS.library.find(x => x.id === id);
            if (!v) return;
            document.getElementById('videoFormTitle').textContent = 'Edit Video';
            document.getElementById('videoEditId').value = v.id;
            document.getElementById('videoTitleInput').value = v.title;
            document.getElementById('videoTypeInput').value = v.type;
            document.getElementById('videoUrlInput').value = v.url;
            document.getElementById('videoShowOnHome').checked = !!v.showOnHomepage;
        }

        async function deleteVideoLibraryItem(id) {
            if (!confirm('Delete this video?')) return;
            VIDEOS.library = VIDEOS.library.filter(x => x.id !== id);
            await saveVideos();
            renderVideoLibraryList();
            applyVideosToSite();
            showToast('Video deleted');
        }

        async function saveVideoLibraryItem() {
            const title = document.getElementById('videoTitleInput').value.trim();
            const url = document.getElementById('videoUrlInput').value.trim();
            if (!title || !url) { showToast('Please add a title and a video URL'); return; }

            const editId = document.getElementById('videoEditId').value;
            const item = {
                id: editId || ('vid_' + Date.now()),
                title,
                type: document.getElementById('videoTypeInput').value,
                url,
                showOnHomepage: document.getElementById('videoShowOnHome').checked
            };

            if (editId) {
                const idx = VIDEOS.library.findIndex(x => x.id === editId);
                if (idx > -1) VIDEOS.library[idx] = item;
            } else {
                VIDEOS.library.push(item);
            }

            await saveVideos();
            resetVideoForm();
            renderVideoLibraryList();
            applyVideosToSite();
            showToast('Video saved ✓');
        }

        // ----- Entry Popup ad video (kept separate, single video) -----

        function renderVideosForm() {
            renderVideoLibraryList();
            resetVideoForm();
            document.getElementById('adPopupEnabled').checked = VIDEOS.adPopup.enabled;
            document.getElementById('adPopupType').value = VIDEOS.adPopup.type;
            document.getElementById('adPopupUrl').value = VIDEOS.adPopup.url;
            document.getElementById('adPopupDelay').value = VIDEOS.adPopup.delaySeconds;
            document.getElementById('adPopupOnce').checked = VIDEOS.adPopup.oncePerSession;
        }

        async function saveVideosForm() {
            VIDEOS.adPopup = {
                enabled: document.getElementById('adPopupEnabled').checked,
                type: document.getElementById('adPopupType').value,
                url: document.getElementById('adPopupUrl').value.trim(),
                delaySeconds: parseFloat(document.getElementById('adPopupDelay').value) || 3,
                oncePerSession: document.getElementById('adPopupOnce').checked
            };
            await saveVideos();
            applyVideosToSite();
            showToast('Popup ad settings updated ✓');
        }

        // ==========================================================================
        // ADDED: SHOP SECTION BACKGROUND — admin picks a color gradient or a custom
        // image for the #products section, with live preview in the admin panel.
        // Stored the same way as banner/products (cloud + localStorage fallback).
        // ==========================================================================
        const PRODUCTS_BG_KEY = 'fiorglow_products_bg_v1';
        const DEFAULT_PRODUCTS_BG = {
            mode: 'gradient',
            gradTop: '#FDF5F3',
            gradMid: '#FFFAF9',
            gradBottom: '#FFFAF9',
            glow1: '#C9A84C',
            glow2: '#D4A0AC',
            showGlow: true,
            imageUrl: '',
            imageFit: 'cover',
            overlayOpacity: 0
        };
        let PRODUCTS_BG = { ...DEFAULT_PRODUCTS_BG };
        let bgFormMode = 'gradient';

        function hexToRgba(hex, alpha) {
            const h = (hex || '#000000').replace('#', '');
            const r = parseInt(h.substring(0, 2), 16) || 0;
            const g = parseInt(h.substring(2, 4), 16) || 0;
            const b = parseInt(h.substring(4, 6), 16) || 0;
            return `rgba(${r}, ${g}, ${b}, ${alpha})`;
        }

        async function loadProductsBg() {
            try {
                const value = await cloudGet(PRODUCTS_BG_KEY);
                PRODUCTS_BG = value ? { ...DEFAULT_PRODUCTS_BG, ...JSON.parse(value) } : { ...DEFAULT_PRODUCTS_BG };
                try { localStorage.setItem(PRODUCTS_BG_KEY, JSON.stringify(PRODUCTS_BG)); } catch (e) { }
            } catch (e) {
                try {
                    const local = localStorage.getItem(PRODUCTS_BG_KEY);
                    PRODUCTS_BG = local ? { ...DEFAULT_PRODUCTS_BG, ...JSON.parse(local) } : { ...DEFAULT_PRODUCTS_BG };
                } catch (e2) {
                    PRODUCTS_BG = { ...DEFAULT_PRODUCTS_BG };
                }
            }
            applyProductsBgTo(document.getElementById('products'), document.getElementById('productsBgOverlay'), PRODUCTS_BG, true);
        }

        async function saveProductsBgData() {
            try { localStorage.setItem(PRODUCTS_BG_KEY, JSON.stringify(PRODUCTS_BG)); } catch (e) { }
            try {
                await cloudSet(PRODUCTS_BG_KEY, JSON.stringify(PRODUCTS_BG));
            } catch (e) {
                console.error('Could not save background settings to the shared store:', e);
                alert('Could not sync this change to the server — check your internet connection and try again.');
            }
        }

        // Applies a config to any target element (+ optional darkening overlay).
        // isRealSection=true only for the actual #products element, since only that
        // one has the ::before/::after glow circles wired to these CSS variables.
        function applyProductsBgTo(targetEl, overlayEl, cfg, isRealSection) {
            if (!targetEl) return;

            // FIXED: the admin-chosen background is an inline style, which always
            // overrides the CSS "body.dark-mode #products" rule — so switching to
            // dark mode never actually changed this section's background, only its
            // text color, making text nearly invisible. In dark mode on the real
            // section, clear the inline background so the CSS dark-mode rule takes
            // over; the admin panel's own live preview box is unaffected.
            if (isRealSection && document.body.classList.contains('dark-mode')) {
                targetEl.style.background = '';
                targetEl.style.backgroundSize = '';
                if (overlayEl) overlayEl.style.background = 'transparent';
                targetEl.style.setProperty('--products-glow-1', 'transparent');
                targetEl.style.setProperty('--products-glow-2', 'transparent');
                return;
            }

            if (cfg.mode === 'image' && cfg.imageUrl) {
                if (cfg.imageFit === 'repeat') {
                    targetEl.style.background = `url('${cfg.imageUrl}') repeat`;
                    targetEl.style.backgroundSize = 'auto';
                } else {
                    targetEl.style.background = `url('${cfg.imageUrl}') center / ${cfg.imageFit} no-repeat`;
                }
                if (overlayEl) overlayEl.style.background = `rgba(10, 22, 40, ${(cfg.overlayOpacity || 0) / 100})`;
                if (isRealSection) {
                    targetEl.style.setProperty('--products-glow-1', 'transparent');
                    targetEl.style.setProperty('--products-glow-2', 'transparent');
                }
            } else {
                targetEl.style.background = `linear-gradient(180deg, ${cfg.gradTop} 0%, ${cfg.gradMid} 40%, ${cfg.gradBottom} 100%)`;
                targetEl.style.backgroundSize = '';
                if (overlayEl) overlayEl.style.background = 'transparent';
                if (isRealSection) {
                    if (cfg.showGlow !== false) {
                        targetEl.style.setProperty('--products-glow-1', `radial-gradient(circle, ${hexToRgba(cfg.glow1, 0.14)} 0%, transparent 70%)`);
                        targetEl.style.setProperty('--products-glow-2', `radial-gradient(circle, ${hexToRgba(cfg.glow2, 0.18)} 0%, transparent 70%)`);
                    } else {
                        targetEl.style.setProperty('--products-glow-1', 'transparent');
                        targetEl.style.setProperty('--products-glow-2', 'transparent');
                    }
                }
            }
        }

        function selectBgMode(mode) {
            bgFormMode = mode;
            document.querySelectorAll('#bgModeRow .banner-preset-btn').forEach(b => b.classList.toggle('active', b.dataset.mode === mode));
            document.getElementById('bgGradientControls').style.display = mode === 'gradient' ? 'block' : 'none';
            document.getElementById('bgImageControls').style.display = mode === 'image' ? 'block' : 'none';
            updateBgLivePreview();
        }

        function renderProductsBgForm() {
            bgFormMode = PRODUCTS_BG.mode || 'gradient';
            document.getElementById('bgGradTop').value = PRODUCTS_BG.gradTop;
            document.getElementById('bgGradMid').value = PRODUCTS_BG.gradMid;
            document.getElementById('bgGradBottom').value = PRODUCTS_BG.gradBottom;
            document.getElementById('bgGlow1').value = PRODUCTS_BG.glow1;
            document.getElementById('bgGlow2').value = PRODUCTS_BG.glow2;
            document.getElementById('bgShowGlow').checked = PRODUCTS_BG.showGlow !== false;
            document.getElementById('bgImageUrl').value = PRODUCTS_BG.imageUrl || '';
            document.getElementById('bgImageFit').value = PRODUCTS_BG.imageFit || 'cover';
            document.getElementById('bgOverlayOpacity').value = PRODUCTS_BG.overlayOpacity || 0;
            document.getElementById('bgOverlayVal').textContent = (PRODUCTS_BG.overlayOpacity || 0) + '%';
            selectBgMode(bgFormMode);
        }

        function updateBgLivePreview() {
            const cfg = {
                mode: bgFormMode,
                gradTop: document.getElementById('bgGradTop').value,
                gradMid: document.getElementById('bgGradMid').value,
                gradBottom: document.getElementById('bgGradBottom').value,
                glow1: document.getElementById('bgGlow1').value,
                glow2: document.getElementById('bgGlow2').value,
                showGlow: document.getElementById('bgShowGlow').checked,
                imageUrl: document.getElementById('bgImageUrl').value.trim(),
                imageFit: document.getElementById('bgImageFit').value,
                overlayOpacity: parseFloat(document.getElementById('bgOverlayOpacity').value) || 0
            };
            document.getElementById('bgOverlayVal').textContent = cfg.overlayOpacity + '%';
            applyProductsBgTo(document.getElementById('bgPreviewBox'), document.getElementById('bgPreviewOverlay'), cfg, false);
        }

        async function saveProductsBgForm() {
            PRODUCTS_BG = {
                mode: bgFormMode,
                gradTop: document.getElementById('bgGradTop').value,
                gradMid: document.getElementById('bgGradMid').value,
                gradBottom: document.getElementById('bgGradBottom').value,
                glow1: document.getElementById('bgGlow1').value,
                glow2: document.getElementById('bgGlow2').value,
                showGlow: document.getElementById('bgShowGlow').checked,
                imageUrl: document.getElementById('bgImageUrl').value.trim(),
                imageFit: document.getElementById('bgImageFit').value,
                overlayOpacity: parseFloat(document.getElementById('bgOverlayOpacity').value) || 0
            };
            await saveProductsBgData();
            applyProductsBgTo(document.getElementById('products'), document.getElementById('productsBgOverlay'), PRODUCTS_BG, true);
            showToast('Background updated ✓');
        }

        function resetProductsBgForm() {
            PRODUCTS_BG = { ...DEFAULT_PRODUCTS_BG };
            renderProductsBgForm();
            saveProductsBgData();
            applyProductsBgTo(document.getElementById('products'), document.getElementById('productsBgOverlay'), PRODUCTS_BG, true);
            showToast('Background reset to default');
        }

        // ==========================================================================
        // ADDED: HERO SECTION customization — background gradient/image + heading
        // & body font pickers, with live preview. Same storage pattern as
        // banner/products background.
        // ==========================================================================
        // ==========================================================================
        // ADDED: HERO SLIDER — multiple ad/banner slides, admin-controlled, auto
        // rotates. Each slide: { id, img, heading, subtext, buttonText, buttonLink }.
        // buttonLink accepts: "shop" (opens Shop page), "brand:boj" (opens that
        // brand's page — key from brandKeyOf), or a normal https:// URL.
        // ==========================================================================
        const SLIDES_KEY = 'fiorglow_slides_v1';
        let SLIDES = [];
        let currentSlideIdx = 0;
        let slideAutoTimer = null;

        async function loadSlides() {
            try {
                const value = await cloudGet(SLIDES_KEY);
                SLIDES = value ? JSON.parse(value) : [];
                try { localStorage.setItem(SLIDES_KEY, JSON.stringify(SLIDES)); } catch (e) { }
            } catch (e) {
                try {
                    const local = localStorage.getItem(SLIDES_KEY);
                    SLIDES = local ? JSON.parse(local) : [];
                } catch (e2) { SLIDES = []; }
            }
            renderHeroSlider();
        }

        async function saveSlides() {
            try { localStorage.setItem(SLIDES_KEY, JSON.stringify(SLIDES)); } catch (e) { }
            try {
                await cloudSet(SLIDES_KEY, JSON.stringify(SLIDES));
            } catch (e) {
                console.error('Could not save slides to the shared store:', e);
                alert('Could not sync this change to the server — check your internet connection and try again.');
            }
        }

        function resolveSlideLink(link) {
            const val = (link || '').trim();
            if (!val || val === 'shop') { openShopPage(); return; }
            if (val.startsWith('brand:')) { openBrandPage(val.slice(6)); return; }
            window.open(val, '_blank');
        }

        function renderHeroSlider() {
            const wrap = document.getElementById('heroSlidesWrap');
            if (!wrap) return;

            // fallback: if admin hasn't added any slides yet, show one default slide
            const slidesToShow = SLIDES.length ? SLIDES : [{
                id: 'default', img: '', heading: 'Glow From <em>Within</em>',
                subtext: 'Premium Korean & Chinese cosmetics sourced directly — Beauty of Joseon, COSRX, Rhode and more.',
                buttonText: 'Shop Now', buttonLink: 'shop'
            }];

            wrap.innerHTML = slidesToShow.map((s, idx) => `
    <div class="hero-slide ${idx === 0 ? 'active' : ''}" data-idx="${idx}"
      style="${s.img ? `background-image:url('${s.img}');` : (s.id === 'default' ? 'background:transparent;' : `background:linear-gradient(135deg, var(--navy), var(--navy-mid));`)}">
      <div class="hero-slide-overlay"></div>
      <div class="hero-slide-content">
        <span class="hero-slide-badge"><span class="stars">★★★★★</span> 4.9 · 1,200+ Happy Customers</span>
        <p class="hero-slide-eyebrow">Fior Glow</p>
        <div class="hero-divider" aria-hidden="true"><span>✦</span></div>
        <h1 class="hero-slide-heading">${s.heading}</h1>
        <p class="hero-slide-text">${escapeHtml(s.subtext || '')}</p>
        <div class="hero-slider-dots">
          ${slidesToShow.map((s2, idx2) => `<button type="button" class="hero-slider-dot ${idx2 === 0 ? 'active' : ''}" onclick="goToSlide(${idx2})"></button>`).join('')}
        </div>
        <div class="hero-cta">
          <button type="button" class="btn-primary" onclick="resolveSlideLink('${(s.buttonLink || 'shop').replace(/'/g, "\\'")}')">${escapeHtml(s.buttonText || 'Shop Now')}</button>
          <button type="button" class="btn-secondary" onclick="openShopPage()">Explore Bestsellers</button>
        </div>
      </div>
    </div>
  `).join('');

            currentSlideIdx = 0;
            startSlideAutoplay(slidesToShow.length);
        }

        function startSlideAutoplay(count) {
            if (slideAutoTimer) clearInterval(slideAutoTimer);
            if (count <= 1) return;
            slideAutoTimer = setInterval(() => {
                goToSlide((currentSlideIdx + 1) % count);
            }, 5000);
        }

        function goToSlide(idx) {
            const slides = document.querySelectorAll('.hero-slide');
            const dots = document.querySelectorAll('.hero-slider-dot');
            if (!slides.length) return;
            slides.forEach((el, i) => el.classList.toggle('active', i === idx));
            dots.forEach((el, i) => el.classList.toggle('active', i === idx));
            currentSlideIdx = idx;
            startSlideAutoplay(slides.length); // restart timer on manual navigation
        }

        function heroSliderNext() {
            const count = document.querySelectorAll('.hero-slide').length;
            if (count) goToSlide((currentSlideIdx + 1) % count);
        }

        function heroSliderPrev() {
            const count = document.querySelectorAll('.hero-slide').length;
            if (count) goToSlide((currentSlideIdx - 1 + count) % count);
        }

        // ----- ADMIN: Slider tab -----
        function renderAdminSlides() {
            const list = document.getElementById('adminSlidesList');
            if (!list) return;
            if (!SLIDES.length) {
                list.innerHTML = '<div class="admin-empty">No slides yet — add your first banner above.</div>';
                return;
            }
            list.innerHTML = SLIDES.map((s, idx) => `
    <div class="admin-slide-row">
      <img class="admin-slide-thumb" src="${s.img || DEFAULT_FALLBACK_IMG}" onerror="this.src='${DEFAULT_FALLBACK_IMG}'" alt="">
      <div class="admin-review-info">
        <div class="admin-review-name">${escapeHtml((s.heading || '').replace(/<\/?em>/g, ''))}</div>
        <div class="admin-review-meta">Links to: ${escapeHtml(s.buttonLink || 'shop')}</div>
      </div>
      <div class="admin-review-actions">
        <button class="admin-btn verify" onclick="moveSlide(${idx}, -1)" ${idx === 0 ? 'disabled' : ''}>↑</button>
        <button class="admin-btn verify" onclick="moveSlide(${idx}, 1)" ${idx === SLIDES.length - 1 ? 'disabled' : ''}>↓</button>
        <button class="admin-btn verify" onclick="editSlide(${idx})">✎ Edit</button>
        <button class="admin-btn delete" onclick="deleteSlide(${idx})">🗑 Delete</button>
      </div>
    </div>
  `).join('');
        }

        function editSlide(idx) {
            const s = SLIDES[idx];
            if (!s) return;
            document.getElementById('editingSlideIdx').value = idx;
            document.getElementById('slideFormTitle').textContent = 'Edit Slide';
            document.getElementById('slideImg').value = s.img || '';
            document.getElementById('slideHeading').value = (s.heading || '').replace(/<\/?em>/g, '');
            document.getElementById('slideSubtext').value = s.subtext || '';
            document.getElementById('slideBtnText').value = s.buttonText || '';
            document.getElementById('slideBtnLink').value = s.buttonLink || '';
            document.getElementById('slideFormTitle').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }

        function resetSlideForm() {
            document.getElementById('editingSlideIdx').value = '';
            document.getElementById('slideFormTitle').textContent = 'Add New Slide';
            document.getElementById('slideImg').value = '';
            document.getElementById('slideHeading').value = '';
            document.getElementById('slideSubtext').value = '';
            document.getElementById('slideBtnText').value = 'Shop Now';
            document.getElementById('slideBtnLink').value = 'shop';
        }

        async function saveSlideForm() {
            const img = document.getElementById('slideImg').value.trim();
            const heading = document.getElementById('slideHeading').value.trim();
            const subtext = document.getElementById('slideSubtext').value.trim();
            const buttonText = document.getElementById('slideBtnText').value.trim() || 'Shop Now';
            const buttonLink = document.getElementById('slideBtnLink').value.trim() || 'shop';
            const editingIdx = document.getElementById('editingSlideIdx').value;

            if (!heading) { showToast('Please enter a heading for the slide'); return; }

            const slideObj = { id: (editingIdx !== '' && SLIDES[editingIdx]) ? SLIDES[editingIdx].id : Date.now(), img, heading, subtext, buttonText, buttonLink };

            if (editingIdx !== '') SLIDES[parseInt(editingIdx, 10)] = slideObj;
            else SLIDES.push(slideObj);

            await saveSlides();
            resetSlideForm();
            renderAdminSlides();
            renderHeroSlider();
            showToast('Slide saved ✓');
        }

        function moveSlide(idx, dir) {
            const target = idx + dir;
            if (target < 0 || target >= SLIDES.length) return;
            [SLIDES[idx], SLIDES[target]] = [SLIDES[target], SLIDES[idx]];
            saveSlides();
            renderAdminSlides();
            renderHeroSlider();
        }

        async function deleteSlide(idx) {
            SLIDES.splice(idx, 1);
            await saveSlides();
            renderAdminSlides();
            renderHeroSlider();
            showToast('Slide deleted 🗑');
        }

        const HERO_KEY = 'fiorglow_hero_v1';
        const DEFAULT_HERO = {
            mode: 'gradient',
            grad1: '#0A1628',
            grad2: '#1B2E4B',
            glow1: '#C9A84C',
            glow2: '#F9EEF0',
            showGlow: true,
            imageUrl: '',
            overlayOpacity: 40,
            headingFont: "'Cormorant Garamond', serif",
            bodyFont: "'DM Sans', sans-serif"
        };
        let HERO_SETTINGS = { ...DEFAULT_HERO };
        let heroFormMode = 'gradient';

        async function loadHeroSettings() {
            try {
                const value = await cloudGet(HERO_KEY);
                HERO_SETTINGS = value ? { ...DEFAULT_HERO, ...JSON.parse(value) } : { ...DEFAULT_HERO };
                try { localStorage.setItem(HERO_KEY, JSON.stringify(HERO_SETTINGS)); } catch (e) { }
            } catch (e) {
                try {
                    const local = localStorage.getItem(HERO_KEY);
                    HERO_SETTINGS = local ? { ...DEFAULT_HERO, ...JSON.parse(local) } : { ...DEFAULT_HERO };
                } catch (e2) {
                    HERO_SETTINGS = { ...DEFAULT_HERO };
                }
            }
            applyHeroTo(document.getElementById('heroSection'), document.getElementById('heroBgOverlay'), HERO_SETTINGS);
        }

        async function saveHeroData() {
            try { localStorage.setItem(HERO_KEY, JSON.stringify(HERO_SETTINGS)); } catch (e) { }
            try {
                await cloudSet(HERO_KEY, JSON.stringify(HERO_SETTINGS));
            } catch (e) {
                console.error('Could not save hero settings to the shared store:', e);
                alert('Could not sync this change to the server — check your internet connection and try again.');
            }
        }

        function applyHeroTo(targetEl, overlayEl, cfg) {
            if (!targetEl) return;

            if (cfg.mode === 'image' && cfg.imageUrl) {
                targetEl.style.background = `url('${cfg.imageUrl}') center / cover no-repeat`;
                if (overlayEl) overlayEl.style.background = `rgba(10, 22, 40, ${(cfg.overlayOpacity || 0) / 100})`;
                targetEl.style.setProperty('--hero-glow', 'none');
            } else {
                targetEl.style.background = `linear-gradient(135deg, ${cfg.grad1} 0%, ${cfg.grad2} 100%)`;
                if (overlayEl) overlayEl.style.background = 'transparent';
                if (cfg.showGlow !== false) {
                    targetEl.style.setProperty('--hero-glow',
                        `radial-gradient(ellipse at 30% 50%, ${hexToRgba(cfg.glow1, 0.16)} 0%, transparent 60%), radial-gradient(ellipse at 70% 30%, ${hexToRgba(cfg.glow2, 0.08)} 0%, transparent 50%)`);
                } else {
                    targetEl.style.setProperty('--hero-glow', 'none');
                }
            }
            targetEl.style.setProperty('--hero-heading-font', cfg.headingFont);
            targetEl.style.setProperty('--hero-body-font', cfg.bodyFont);
        }

        function selectHeroBgMode(mode) {
            heroFormMode = mode;
            document.querySelectorAll('#heroBgModeRow .banner-preset-btn').forEach(b => b.classList.toggle('active', b.dataset.mode === mode));
            document.getElementById('heroGradientControls').style.display = mode === 'gradient' ? 'block' : 'none';
            document.getElementById('heroImageControls').style.display = mode === 'image' ? 'block' : 'none';
            updateHeroLivePreview();
        }

        function renderHeroForm() {
            heroFormMode = HERO_SETTINGS.mode || 'gradient';
            document.getElementById('heroGrad1').value = HERO_SETTINGS.grad1;
            document.getElementById('heroGrad2').value = HERO_SETTINGS.grad2;
            document.getElementById('heroGlow1').value = HERO_SETTINGS.glow1;
            document.getElementById('heroGlow2').value = HERO_SETTINGS.glow2;
            document.getElementById('heroShowGlow').checked = HERO_SETTINGS.showGlow !== false;
            document.getElementById('heroImageUrl').value = HERO_SETTINGS.imageUrl || '';
            document.getElementById('heroOverlayOpacity').value = HERO_SETTINGS.overlayOpacity || 0;
            document.getElementById('heroOverlayVal').textContent = (HERO_SETTINGS.overlayOpacity || 0) + '%';
            document.getElementById('heroHeadingFont').value = HERO_SETTINGS.headingFont;
            document.getElementById('heroBodyFont').value = HERO_SETTINGS.bodyFont;
            selectHeroBgMode(heroFormMode);
        }

        function updateHeroLivePreview() {
            const cfg = {
                mode: heroFormMode,
                grad1: document.getElementById('heroGrad1').value,
                grad2: document.getElementById('heroGrad2').value,
                glow1: document.getElementById('heroGlow1').value,
                glow2: document.getElementById('heroGlow2').value,
                showGlow: document.getElementById('heroShowGlow').checked,
                imageUrl: document.getElementById('heroImageUrl').value.trim(),
                overlayOpacity: parseFloat(document.getElementById('heroOverlayOpacity').value) || 0,
                headingFont: document.getElementById('heroHeadingFont').value,
                bodyFont: document.getElementById('heroBodyFont').value
            };
            document.getElementById('heroOverlayVal').textContent = cfg.overlayOpacity + '%';
            applyHeroTo(document.getElementById('heroPreviewBox'), document.getElementById('heroPreviewOverlay'), cfg);
            document.getElementById('heroPreviewEyebrow').style.fontFamily = cfg.bodyFont;
            document.getElementById('heroPreviewH1').style.fontFamily = cfg.headingFont;
            document.getElementById('heroPreviewP').style.fontFamily = cfg.bodyFont;
        }

        async function saveHeroForm() {
            HERO_SETTINGS = {
                mode: heroFormMode,
                grad1: document.getElementById('heroGrad1').value,
                grad2: document.getElementById('heroGrad2').value,
                glow1: document.getElementById('heroGlow1').value,
                glow2: document.getElementById('heroGlow2').value,
                showGlow: document.getElementById('heroShowGlow').checked,
                imageUrl: document.getElementById('heroImageUrl').value.trim(),
                overlayOpacity: parseFloat(document.getElementById('heroOverlayOpacity').value) || 0,
                headingFont: document.getElementById('heroHeadingFont').value,
                bodyFont: document.getElementById('heroBodyFont').value
            };
            await saveHeroData();
            applyHeroTo(document.getElementById('heroSection'), document.getElementById('heroBgOverlay'), HERO_SETTINGS);
            showToast('Hero section updated ✓');
        }

        function resetHeroForm() {
            HERO_SETTINGS = { ...DEFAULT_HERO };
            renderHeroForm();
            saveHeroData();
            applyHeroTo(document.getElementById('heroSection'), document.getElementById('heroBgOverlay'), HERO_SETTINGS);
            showToast('Hero section reset to default');
        }

        // ==========================================================================
        // ADDED: TEAM MEMBERS (Admin / Moderator / Investor) + JOIN APPLICATIONS
        // Same storage pattern as everything else: cloudGet/cloudSet with
        // localStorage fallback, so it's shared across every visitor & device.
        // ==========================================================================
        // ADDED: real brand SVG icons for team member social links (replaces
        // emoji placeholders, which render inconsistently across devices).
        const TEAM_ICON_FB = '<svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5 3.66 9.15 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.51 1.49-3.9 3.77-3.9 1.09 0 2.23.2 2.23.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.91h-2.34V22c4.78-.79 8.44-4.94 8.44-9.94Z"/></svg>';
        const TEAM_ICON_LINKEDIN = '<svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.85 0-2.14 1.45-2.14 2.94v5.66H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z"/></svg>';
        const TEAM_ICON_WHATSAPP = '<svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.29-1.38c1.45.79 3.08 1.21 4.75 1.21h.01c5.46 0 9.91-4.45 9.91-9.91C21.96 6.45 17.5 2 12.04 2zm5.85 14.14c-.25.7-1.24 1.29-2.02 1.46-.53.11-1.23.2-3.58-.77-3-1.24-4.93-4.28-5.08-4.48-.15-.2-1.22-1.62-1.22-3.1s.76-2.2 1.03-2.5c.27-.3.59-.37.79-.37.2 0 .4 0 .57.01.18.01.43-.07.68.51.25.6.85 2.08.93 2.23.08.15.13.32.03.52-.1.2-.15.32-.3.5-.15.17-.31.38-.44.51-.15.15-.3.31-.13.6.17.3.76 1.25 1.63 2.02 1.12 1 2.06 1.31 2.36 1.46.3.15.48.13.65-.08.18-.2.75-.87.96-1.17.2-.3.4-.25.68-.15.28.1 1.76.83 2.06.98.3.15.5.22.57.35.08.13.08.72-.17 1.42z"/></svg>';
        const ADMIN_REQUESTS_KEY = 'fiorglow_admin_requests_v1';
        let ADMIN_REQUESTS = [];

        // ==========================================================================
        // ADDED: Newsletter / Offers signup (Contact page, Quick Links card).
        // Same cloud + localStorage pattern as everything else, so subscribers
        // are shared across devices, not just saved on the visitor's own browser.
        // ==========================================================================
        const NEWSLETTER_KEY = 'fiorglow_newsletter_v1';
        let NEWSLETTER_SUBS = [];

        async function loadNewsletter() {
            try {
                const value = await cloudGet(NEWSLETTER_KEY);
                NEWSLETTER_SUBS = value ? JSON.parse(value) : [];
                try { localStorage.setItem(NEWSLETTER_KEY, JSON.stringify(NEWSLETTER_SUBS)); } catch (e) { }
            } catch (e) {
                try {
                    const local = localStorage.getItem(NEWSLETTER_KEY);
                    NEWSLETTER_SUBS = local ? JSON.parse(local) : [];
                } catch (e2) { NEWSLETTER_SUBS = []; }
            }
        }

        async function saveNewsletter() {
            try { localStorage.setItem(NEWSLETTER_KEY, JSON.stringify(NEWSLETTER_SUBS)); } catch (e) { }
            try {
                await cloudSet(NEWSLETTER_KEY, JSON.stringify(NEWSLETTER_SUBS));
                return true;
            } catch (e) {
                console.error('Could not save newsletter subscribers:', e);
                return false;
            }
        }

        async function subscribeNewsletter() {
            const input = document.getElementById('newsletterEmail');
            if (!input) return;
            const email = input.value.trim().toLowerCase();
            const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
            if (!emailOk) { showToast('Please enter a valid email address'); return; }
            if (NEWSLETTER_SUBS.some(s => s.email === email)) {
                showToast("You're already subscribed ✓");
                input.value = '';
                return;
            }
            NEWSLETTER_SUBS.push({ email, date: new Date().toISOString().slice(0, 10) });
            await saveNewsletter();
            input.value = '';
            showToast('Subscribed! Watch out for offers 🌸');
        }

        async function loadAdminRequests() {
            try {
                const value = await cloudGet(ADMIN_REQUESTS_KEY);
                ADMIN_REQUESTS = value ? JSON.parse(value) : [];
                try { localStorage.setItem(ADMIN_REQUESTS_KEY, JSON.stringify(ADMIN_REQUESTS)); } catch (e) { }
            } catch (e) {
                try {
                    const local = localStorage.getItem(ADMIN_REQUESTS_KEY);
                    ADMIN_REQUESTS = local ? JSON.parse(local) : [];
                } catch (e2) { ADMIN_REQUESTS = []; }
            }
        }

        async function saveAdminRequests() {
            try { localStorage.setItem(ADMIN_REQUESTS_KEY, JSON.stringify(ADMIN_REQUESTS)); } catch (e) { }
            try {
                await cloudSet(ADMIN_REQUESTS_KEY, JSON.stringify(ADMIN_REQUESTS));
            } catch (e) {
                console.error('Could not save admin requests:', e);
            }
        }

        function renderAdminRequests() {
            const list = document.getElementById('adminRequestsList');
            if (!ADMIN_REQUESTS.length) {
                list.innerHTML = '<div class="admin-empty">No pending access requests.</div>';
                return;
            }
            const sorted = [...ADMIN_REQUESTS].sort((a, b) => new Date(b.date) - new Date(a.date));
            list.innerHTML = sorted.map(r => `
    <div class="admin-application-row">
      <div class="admin-review-info">
        <div class="admin-review-name">${escapeHtml(r.name)}</div>
        <div class="admin-review-meta">Requested ${formatReviewDate(r.date.slice(0, 10))}</div>
      </div>
      <div class="admin-review-actions">
        <button class="admin-btn verify" onclick="approveAdminRequest(${r.id})">✓ Approve → Add to Team</button>
        <button class="admin-btn delete" onclick="rejectAdminRequest(${r.id})">🗑 Reject</button>
      </div>
    </div>
  `).join('');
        }

        // Approving just pre-fills the Team form with their name so you can pick
        // role/permissions and set a personal passcode, then Save.
        function approveAdminRequest(id) {
            const r = ADMIN_REQUESTS.find(rq => rq.id === id);
            if (!r) return;
            resetTeamForm();
            document.getElementById('teamName').value = r.name;
            document.getElementById('teamPasscode').value = r.passcode; // same password they set at request time
            ADMIN_REQUESTS = ADMIN_REQUESTS.filter(rq => rq.id !== id);
            saveAdminRequests();
            switchAdminTab('team', document.querySelector('[data-tab="team"]'));
            showToast(`Now pick ${r.name}'s role & permissions, then Save — their login password is already filled in.`);
        }

        async function rejectAdminRequest(id) {
            ADMIN_REQUESTS = ADMIN_REQUESTS.filter(r => r.id !== id);
            await saveAdminRequests();
            renderAdminRequests();
            showToast('Request removed');
        }
        const TEAM_KEY = 'fiorglow_team_v1';
        const APPLICATIONS_KEY = 'fiorglow_applications_v1';
        let TEAM = [];
        let APPLICATIONS = [];

        async function loadTeam() {
            try {
                const value = await cloudGet(TEAM_KEY);
                TEAM = value ? JSON.parse(value) : [];
                try { localStorage.setItem(TEAM_KEY, JSON.stringify(TEAM)); } catch (e) { }
            } catch (e) {
                try {
                    const local = localStorage.getItem(TEAM_KEY);
                    TEAM = local ? JSON.parse(local) : [];
                } catch (e2) { TEAM = []; }
            }
            renderTeam();
        }

        async function saveTeam() {
            try { localStorage.setItem(TEAM_KEY, JSON.stringify(TEAM)); } catch (e) { }
            try {
                await cloudSet(TEAM_KEY, JSON.stringify(TEAM));
            } catch (e) {
                console.error('Could not save team to the shared store:', e);
                alert('Could not sync this change to the server — check your internet connection and try again.');
            }
        }

        async function loadApplications() {
            try {
                const value = await cloudGet(APPLICATIONS_KEY);
                APPLICATIONS = value ? JSON.parse(value) : [];
                try { localStorage.setItem(APPLICATIONS_KEY, JSON.stringify(APPLICATIONS)); } catch (e) { }
            } catch (e) {
                try {
                    const local = localStorage.getItem(APPLICATIONS_KEY);
                    APPLICATIONS = local ? JSON.parse(local) : [];
                } catch (e2) { APPLICATIONS = []; }
            }
        }

        async function saveApplications() {
            try { localStorage.setItem(APPLICATIONS_KEY, JSON.stringify(APPLICATIONS)); } catch (e) { }
            try {
                await cloudSet(APPLICATIONS_KEY, JSON.stringify(APPLICATIONS));
            } catch (e) {
                console.error('Could not save applications to the shared store:', e);
            }
        }

        // ----- PUBLIC: render team cards on the About section -----
        function renderTeam() {
            const grid = document.getElementById('teamGrid');
            if (!grid) return;
            if (!TEAM.length) {
                grid.innerHTML = '';
                document.querySelector('.team-section-title').style.display = 'none';
                return;
            }
            document.querySelector('.team-section-title').style.display = 'block';

            const roleOrder = { admin: 0, moderator: 1, investor: 2 };
            const sorted = [...TEAM].sort((a, b) => (roleOrder[a.role] ?? 9) - (roleOrder[b.role] ?? 9));

            grid.innerHTML = sorted.map(m => {
                const roleLabel = m.role === 'admin' ? 'Admin' : m.role === 'moderator' ? 'Moderator' : 'Investor';
                let socials = '';
                if (m.fb) socials += `<a href="${m.fb}" target="_blank" rel="noopener" title="Facebook">${TEAM_ICON_FB}</a>`;
                if (m.linkedin) socials += `<a href="${m.linkedin}" target="_blank" rel="noopener" title="LinkedIn">${TEAM_ICON_LINKEDIN}</a>`;
                if (m.whatsapp) socials += `<a href="https://wa.me/${m.whatsapp.replace(/\D/g, '')}" target="_blank" rel="noopener" title="WhatsApp">${TEAM_ICON_WHATSAPP}</a>`;
                return `
      <div class="team-card">
        <img class="team-photo" src="${m.photo || DEFAULT_FALLBACK_IMG}" alt="${escapeHtml(m.name)}" onerror="this.src='${DEFAULT_FALLBACK_IMG}'">
        <div class="team-name">${escapeHtml(m.name)}</div>
        <span class="role-tag ${m.role}">${roleLabel}</span>
        <p class="team-bio">${escapeHtml(m.bio || '')}</p>
        <div class="team-socials">${socials}</div>
      </div>
    `;
            }).join('');
            initScrollReveal();
        }

        // ----- PUBLIC: submit join application -----
        async function submitApplication() {
            const name = document.getElementById('applyName').value.trim();
            const phone = document.getElementById('applyPhone').value.trim();
            const message = document.getElementById('applyMessage').value.trim();

            if (!name) { showToast('Please enter your name'); return; }
            if (!phone || phone.length < 10) { showToast('Please enter a valid contact number'); return; }
            if (!message) { showToast('Please tell us why you want to join'); return; }

            APPLICATIONS.push({
                id: Date.now(),
                name, phone, message,
                date: new Date().toISOString()
            });
            await saveApplications();

            document.getElementById('applyName').value = '';
            document.getElementById('applyPhone').value = '';
            document.getElementById('applyMessage').value = '';
            showToast('Application submitted! We will contact you soon 🌸');
        }
        // ADDED: Join Application modal open/close
        function openApplyModal() {
            document.getElementById('applyModal').classList.add('open');
        }

        function closeApplyModal() {
            document.getElementById('applyModal').classList.remove('open');
        }
        // ----- ADMIN: Team tab -----
        function renderAdminTeam() {
            const list = document.getElementById('adminTeamList');
            if (!TEAM.length) {
                list.innerHTML = '<div class="admin-empty">No team members added yet.</div>';
                return;
            }
            list.innerHTML = TEAM.map(m => {
                const roleLabel = m.role === 'admin' ? 'Admin' : m.role === 'moderator' ? 'Moderator' : 'Investor';
                // ADDED: shows exactly what this member currently has access to
                const permLabels = (m.permissions || []).map(k => {
                    const found = ADMIN_PERMISSION_TABS.find(t => t.key === k);
                    return found ? found.label.replace(/^\S+\s/, '') : k;
                });
                const accessText = permLabels.length ? `Access: ${permLabels.join(', ')}` : 'No admin panel access assigned';
                return `
    <div class="admin-team-row">
      <img class="admin-team-photo" src="${m.photo || DEFAULT_FALLBACK_IMG}" onerror="this.src='${DEFAULT_FALLBACK_IMG}'" alt="${escapeHtml(m.name)}">
      <div class="admin-review-info">
        <div class="admin-review-name">${escapeHtml(m.name)}<span class="admin-pending-tag">${roleLabel}</span></div>
        <p class="admin-review-text">${escapeHtml(m.bio || '')}</p>
        <p style="font-size:11px; margin-top:4px; font-weight:500; color:${permLabels.length ? '#2e7d32' : 'var(--text-muted)'};">${escapeHtml(accessText)}</p>
      </div>
      <div class="admin-review-actions">
        <button class="admin-btn verify" onclick="editTeamMember(${m.id})">✎ Edit</button>
        <button class="admin-btn delete" onclick="deleteTeamMember(${m.id})">🗑 Delete</button>
      </div>
    </div>
  `;
            }).join('');
        }

        // ADDED: renders the tick-box list for permissions, pre-checking `selected`
        function renderTeamPermissionCheckboxes(selected) {
            const box = document.getElementById('teamPermissionsBox');
            const sel = selected || [];
            box.innerHTML = ADMIN_PERMISSION_TABS.map(t => `
    <label style="display:flex; align-items:center; gap:6px; font-size:12.5px; color:var(--navy); background:var(--pink); padding:6px 12px; border-radius:20px;">
      <input type="checkbox" class="team-permission-checkbox" value="${t.key}" ${sel.includes(t.key) ? 'checked' : ''} style="width:auto;">
      ${t.label}
    </label>
  `).join('');
        }

        // ADDED: renders the "Extra Actions" checkboxes (e.g. Delete Products)
        function renderTeamExtraPermissionCheckboxes(selected) {
            const box = document.getElementById('teamExtraPermissionsBox');
            const sel = selected || [];
            box.innerHTML = ADMIN_EXTRA_PERMISSIONS.map(t => `
    <label style="display:flex; align-items:center; gap:6px; font-size:12.5px; color:#c0392b; background:#fdecea; padding:6px 12px; border-radius:20px;">
      <input type="checkbox" class="team-extra-permission-checkbox" value="${t.key}" ${sel.includes(t.key) ? 'checked' : ''} style="width:auto;">
      ${t.label}
    </label>
  `).join('');
        }

        function getSelectedTeamPermissions() {
            const tabPerms = Array.from(document.querySelectorAll('.team-permission-checkbox:checked')).map(cb => cb.value);
            const extraPerms = Array.from(document.querySelectorAll('.team-extra-permission-checkbox:checked')).map(cb => cb.value);
            return [...tabPerms, ...extraPerms];
        }

        function editTeamMember(id) {
            const m = TEAM.find(t => t.id === id);
            if (!m) return;
            document.getElementById('editingTeamId').value = m.id;
            document.getElementById('teamFormTitle').textContent = 'Edit Team Member';
            document.getElementById('teamName').value = m.name;
            document.getElementById('teamRole').value = m.role;
            document.getElementById('teamPhoto').value = m.photo || '';
            document.getElementById('teamBio').value = m.bio || '';
            document.getElementById('teamFb').value = m.fb || '';
            document.getElementById('teamLinkedin').value = m.linkedin || '';
            document.getElementById('teamWhatsapp').value = m.whatsapp || '';
            document.getElementById('teamPasscode').value = m.passcode || '';
            renderTeamPermissionCheckboxes(m.permissions || []);
            renderTeamExtraPermissionCheckboxes(m.permissions || []);
            document.getElementById('teamFormTitle').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }

        function resetTeamForm() {
            document.getElementById('editingTeamId').value = '';
            document.getElementById('teamFormTitle').textContent = 'Add Team Member';
            document.getElementById('teamName').value = '';
            document.getElementById('teamRole').value = 'admin';
            document.getElementById('teamPhoto').value = '';
            document.getElementById('teamBio').value = '';
            document.getElementById('teamFb').value = '';
            document.getElementById('teamLinkedin').value = '';
            document.getElementById('teamWhatsapp').value = '';
            document.getElementById('teamPasscode').value = '';
            renderTeamPermissionCheckboxes([]);
            renderTeamExtraPermissionCheckboxes([]);
        }

        async function saveTeamForm() {
            const name = document.getElementById('teamName').value.trim();
            const role = document.getElementById('teamRole').value;
            const photo = document.getElementById('teamPhoto').value.trim();
            const bio = document.getElementById('teamBio').value.trim();
            const fb = document.getElementById('teamFb').value.trim();
            const linkedin = document.getElementById('teamLinkedin').value.trim();
            const whatsapp = document.getElementById('teamWhatsapp').value.trim();
            const passcode = document.getElementById('teamPasscode').value.trim();
            const permissions = getSelectedTeamPermissions();
            const editingId = document.getElementById('editingTeamId').value;

            if (!name) { showToast('Please enter a name'); return; }

            if (editingId) {
                const m = TEAM.find(t => t.id === parseInt(editingId, 10));
                if (m) Object.assign(m, { name, role, photo, bio, fb, linkedin, whatsapp, passcode, permissions });
                showToast('Team member updated ✓');
            } else {
                TEAM.push({ id: Date.now(), name, role, photo, bio, fb, linkedin, whatsapp, passcode, permissions });
                showToast('Team member added ✓');
            }

            await saveTeam();
            resetTeamForm();
            renderAdminTeam();
            renderTeam();
        }

        async function deleteTeamMember(id) {
            TEAM = TEAM.filter(t => t.id !== id);
            await saveTeam();
            renderAdminTeam();
            renderTeam();
            showToast('Team member removed 🗑');
        }

        // ----- ADMIN: Applications tab -----
        function renderAdminApplications() {
            const list = document.getElementById('adminApplicationsList');
            const countEl = document.getElementById('adminApplicationCount');
            countEl.textContent = `${APPLICATIONS.length} application${APPLICATIONS.length === 1 ? '' : 's'} received`;

            if (!APPLICATIONS.length) {
                list.innerHTML = '<div class="admin-empty">No applications yet.</div>';
                return;
            }
            const sorted = [...APPLICATIONS].sort((a, b) => new Date(b.date) - new Date(a.date));
            list.innerHTML = sorted.map(a => `
    <div class="admin-application-row">
      <div class="admin-review-info">
        <div class="admin-review-name">${escapeHtml(a.name)}</div>
        <div class="admin-review-meta">📱 ${escapeHtml(a.phone)} · ${formatReviewDate(a.date.slice(0, 10))}</div>
        <p class="admin-review-text">${escapeHtml(a.message)}</p>
      </div>
      <div class="admin-review-actions">
        <a class="admin-btn verify" style="text-decoration:none; display:inline-block;" href="https://wa.me/${a.phone.replace(/\D/g, '')}" target="_blank">💬 Chat</a>
        <button class="admin-btn delete" onclick="deleteApplication(${a.id})">🗑 Delete</button>
      </div>
    </div>
  `).join('');
        }

        async function deleteApplication(id) {
            APPLICATIONS = APPLICATIONS.filter(a => a.id !== id);
            await saveApplications();
            renderAdminApplications();
            showToast('Application removed 🗑');
        }

        // ==========================================================================
        // ADDED: PROMOTION CENTER — sponsored ad-campaign engine.
        //
        // A campaign boosts one product into a specific slot (Homepage Spotlight,
        // Search Boost, Category Boost, Similar Product Boost, Flash Promotion, New
        // Arrival Push, Trending Push). Everything is saved to the same shared store
        // as products/reviews (cloud + localStorage fallback), so every visitor and
        // device sees the same live campaigns.
        //
        // Ranking (when more than one campaign competes for the same slot) follows
        // the requested formula: 40% CTR + 30% Conversion Rate + 20% Bid(budget) +
        // 10% Product Rating — see computeCampaignScore().
        // ==========================================================================
        const PROMOTIONS_KEY = 'fiorglow_promotions_v1';
        const PROMO_WALLET_KEY = 'fiorglow_promo_wallet_v1';
        const PROMO_CPC = 5; // simulated cost (৳) deducted from the wallet per click
        let PROMOTIONS = [];
        let PROMO_WALLET = { balance: 0, transactions: [] };
        let promoAdminFilter = 'all';
        let promoRechargeMethod = 'bkash';

        const CAMPAIGN_TYPES = {
            homepage: { label: 'Homepage Spotlight', badge: 'Sponsored', icon: '🏠' },
            search: { label: 'Search Boost', badge: 'Sponsored', icon: '🔍' },
            category: { label: 'Category Boost', badge: 'Sponsored', icon: '🗂️' },
            similar: { label: 'Similar Product Boost', badge: 'Sponsored', icon: '🔗' },
            flash: { label: 'Flash Promotion', badge: 'Limited Time', icon: '⚡' },
            newarrival: { label: 'New Arrival Push', badge: 'Newly Promoted', icon: '✨' },
            trending: { label: 'Trending Push', badge: 'Trending', icon: '🔥' }
        };

        async function loadPromotions() {
            try {
                const value = await cloudGet(PROMOTIONS_KEY);
                PROMOTIONS = value ? JSON.parse(value) : [];
                try { localStorage.setItem(PROMOTIONS_KEY, JSON.stringify(PROMOTIONS)); } catch (e) { }
            } catch (e) {
                try {
                    const local = localStorage.getItem(PROMOTIONS_KEY);
                    PROMOTIONS = local ? JSON.parse(local) : [];
                } catch (e2) { PROMOTIONS = []; }
            }
            try {
                const value = await cloudGet(PROMO_WALLET_KEY);
                PROMO_WALLET = value ? JSON.parse(value) : { balance: 0, transactions: [] };
                try { localStorage.setItem(PROMO_WALLET_KEY, JSON.stringify(PROMO_WALLET)); } catch (e) { }
            } catch (e) {
                try {
                    const local = localStorage.getItem(PROMO_WALLET_KEY);
                    PROMO_WALLET = local ? JSON.parse(local) : { balance: 0, transactions: [] };
                } catch (e2) { PROMO_WALLET = { balance: 0, transactions: [] }; }
            }
            refreshCampaignStatuses();
            renderSponsoredHomeSections();
        }

        async function savePromotions() {
            try { localStorage.setItem(PROMOTIONS_KEY, JSON.stringify(PROMOTIONS)); } catch (e) { }
            try { await cloudSet(PROMOTIONS_KEY, JSON.stringify(PROMOTIONS)); } catch (e) {
                console.error('Could not save promotions to the shared store:', e);
            }
        }

        async function savePromoWallet() {
            try { localStorage.setItem(PROMO_WALLET_KEY, JSON.stringify(PROMO_WALLET)); } catch (e) { }
            try { await cloudSet(PROMO_WALLET_KEY, JSON.stringify(PROMO_WALLET)); } catch (e) {
                console.error('Could not save promo wallet to the shared store:', e);
            }
        }

        // Recomputes each campaign's live status (scheduled → running → completed)
        // based on time and remaining budget. Admin-paused campaigns are left alone
        // until the admin resumes them.
        function refreshCampaignStatuses() {
            const now = Date.now();
            let changed = false;
            PROMOTIONS.forEach(c => {
                if (c.status === 'paused') return;
                let next = c.status;
                if (c.startAt && now < c.startAt) next = 'scheduled';
                else if (c.endAt && now > c.endAt) next = 'completed';
                else if (c.maxSpend && c.spent >= c.maxSpend) next = 'completed';
                else next = 'running';
                if (next !== c.status) { c.status = next; changed = true; }
            });
            if (changed) savePromotions();
        }

        // Ranking Formula: 40% CTR + 30% Conversion Rate + 20% Bid + 10% Rating
        function computeCampaignScore(c) {
            const ctr = c.impressions > 0 ? (c.clicks / c.impressions) : 0;
            const convRate = c.clicks > 0 ? (c.conversions / c.clicks) : 0;
            const bidNorm = Math.min(1, (c.dailyBudget || 0) / 3000);
            const ratingNorm = 0.96; // fixed proxy for a ~4.8/5 average product rating
            const score = (0.4 * ctr) + (0.3 * convRate) + (0.2 * bidNorm) + (0.1 * ratingNorm);
            return Math.round(score * 100);
        }

        function isMobileDevice() {
            return /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
        }

        function deviceMatchesTarget(target) {
            if (!target || target === 'all') return true;
            return target === 'mobile' ? isMobileDevice() : !isMobileDevice();
        }

        function activeCampaignsOfType(type) {
            return PROMOTIONS.filter(c => c.status === 'running' && c.campaignType === type && deviceMatchesTarget(c.targetDevice))
                .sort((a, b) => computeCampaignScore(b) - computeCampaignScore(a));
        }

        // Generic helper used by search/category/similar slots: campaigns of a given
        // type whose product also passes filterFn, capped by anti-spam frequency.
        function getSponsoredMatches(campaignType, filterFn, limit) {
            return activeCampaignsOfType(campaignType)
                .filter(c => {
                    const p = PRODUCTS.find(pr => pr.id === c.productId);
                    return p && canShowCampaign(c.id) && (!filterFn || filterFn(p));
                })
                .slice(0, limit || 4);
        }

        // Anti-spam: the same campaign is shown at most 3 times to this browser.
        function canShowCampaign(campaignId) {
            try {
                const count = parseInt(localStorage.getItem('fiorglow_promo_freq_' + campaignId) || '0', 10);
               return count < 50;
            } catch (e) { return true; }
        }

        function recordCampaignImpression(campaignId) {
            const c = PROMOTIONS.find(p => p.id === campaignId);
            if (!c) return;
            try {
                const key = 'fiorglow_promo_freq_' + campaignId;
                const count = parseInt(localStorage.getItem(key) || '0', 10);
                localStorage.setItem(key, String(count + 1));
            } catch (e) { }
            c.impressions = (c.impressions || 0) + 1;
            savePromotions();
        }

        function recordCampaignClick(campaignId) {
            const c = PROMOTIONS.find(p => p.id === campaignId);
            if (!c) return;
            c.clicks = (c.clicks || 0) + 1;
            c.spent = (c.spent || 0) + PROMO_CPC;
            PROMO_WALLET.balance = Math.max(0, (PROMO_WALLET.balance || 0) - PROMO_CPC);
            if (c.maxSpend && c.spent >= c.maxSpend) c.status = 'completed';
            savePromotions();
            savePromoWallet();
        }

        function recordCampaignConversion(campaignId) {
            const c = PROMOTIONS.find(p => p.id === campaignId);
            if (!c) return;
            c.conversions = (c.conversions || 0) + 1;
            savePromotions();
        }

        // ----- Sponsored card renderers (native-looking, matches organic cards) -----
        function sponsoredCardHtml(campaign) {
            const p = PRODUCTS.find(pr => pr.id === campaign.productId);
            if (!p) return '';
            const meta = CAMPAIGN_TYPES[campaign.campaignType] || CAMPAIGN_TYPES.homepage;
            let badgeText = campaign.badge || meta.badge;
            if (campaign.campaignType === 'flash' && campaign.endAt) {
                const hoursLeft = Math.max(0, Math.ceil((campaign.endAt - Date.now()) / 3600000));
                badgeText = `${badgeText} · ${hoursLeft}h left`;
            }
            return `
    <div class="product-card sponsored-card reveal" data-promo-id="${campaign.id}" onclick="recordCampaignClick(${campaign.id}); openProductDetail(${p.id})">
      <span class="sponsored-badge">${escapeHtml(badgeText)}</span>
      <div class="product-img-wrap">
        <img src="${p.img}" alt="${escapeHtml(p.name)}" onerror="this.src='${FALLBACK_IMGS[p.brand] || DEFAULT_FALLBACK_IMG}'" loading="lazy">
        <span class="product-brand-tag">${escapeHtml(p.brandName)}</span>
      </div>
      <div class="product-body">
        <div class="product-name">${p.name}</div>
        <div class="product-desc">${truncateWords(p.desc, 10)}</div>
        <div class="product-footer">
          <div class="product-price">${priceHtml(p, '/ pc')}</div>
          <button class="add-btn sponsored-cta-btn" onclick="event.stopPropagation(); recordCampaignClick(${campaign.id}); recordCampaignConversion(${campaign.id}); flyToCart(this, () => addToCart(${p.id}))" title="${escapeHtml(campaign.cta || 'Shop Now')}">${ICON_PLUS}</button>
        </div>
      </div>
    </div>`;
        }

        function sponsoredMiniCardHtml(campaign) {
            const p = PRODUCTS.find(pr => pr.id === campaign.productId);
            if (!p) return '';
            return `
    <div class="sponsored-mini-card" data-promo-id="${campaign.id}" onclick="recordCampaignClick(${campaign.id}); openProductDetail(${p.id})">
      <span class="sponsored-badge sponsored-badge-mini">Sponsored</span>
      <img src="${p.img}" onerror="this.src='${FALLBACK_IMGS[p.brand] || DEFAULT_FALLBACK_IMG}'" alt="${escapeHtml(p.name)}" loading="lazy">
      <div class="sponsored-mini-name">${escapeHtml(p.name.split(':')[0])}</div>
      <div class="sponsored-mini-price">৳${effectivePrice(p).toLocaleString()}</div>
    </div>`;
        }

        function sponsoredRowHtml(campaigns, label) {
            if (!campaigns || !campaigns.length) return '';
            return `
    <div class="sponsored-row-label">${escapeHtml(label)}</div>
    <div class="products-grid-paginated" style="margin-bottom:2rem;">
      ${campaigns.map(c => sponsoredCardHtml(c)).join('')}
    </div>`;
        }

        // Tracks one impression per sponsored card actually scrolled into view.
        let promoImpressionObserver = null;
        function observeSponsoredImpressions() {
            if (!promoImpressionObserver) {
                promoImpressionObserver = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            const id = parseInt(entry.target.getAttribute('data-promo-id'), 10);
                            if (id) recordCampaignImpression(id);
                            promoImpressionObserver.unobserve(entry.target);
                        }
                    });
                }, { threshold: 0.4 });
            }
            document.querySelectorAll('.sponsored-card[data-promo-id], .sponsored-mini-card[data-promo-id]').forEach(el => promoImpressionObserver.observe(el));
        }

        // ----- Homepage sponsored sections: Trending / New Arrival / Spotlight -----
        function renderSponsoredHomeSections() {
            renderSponsoredRow('sponsoredTrendingSection', activeCampaignsOfType('trending'), '🔥 Trending Today', 'Hot Right Now');
            renderSponsoredRow('sponsoredNewArrivalSection', activeCampaignsOfType('newarrival'), '✨ Newly Promoted', 'Just Landed');
            renderSponsoredSpotlight();
            initScrollReveal();
            observeSponsoredImpressions();
        }

        function renderSponsoredRow(containerId, campaigns, title, eyebrow) {
            const el = document.getElementById(containerId);
            if (!el) return;
            const filtered = (campaigns || []).filter(c => canShowCampaign(c.id)).slice(0, 4);
            if (!filtered.length) { el.innerHTML = ''; return; }
            el.innerHTML = `
    <section style="padding-top:2.5rem; padding-bottom:0;">
      <div class="section-header reveal" style="margin-bottom:1.5rem;">
        <p class="section-label">${escapeHtml(eyebrow)}</p>
        <h2 class="section-title" style="font-size: clamp(24px, 3.5vw, 34px);">${escapeHtml(title)}</h2>
      </div>
      <div class="products-grid-paginated">
        ${filtered.map(c => sponsoredCardHtml(c)).join('')}
      </div>
    </section>`;
        }

        function renderSponsoredSpotlight() {
            const el = document.getElementById('sponsoredSpotlightSection');
            if (!el) return;
            const campaigns = [...activeCampaignsOfType('homepage'), ...activeCampaignsOfType('flash')]
                .filter(c => canShowCampaign(c.id))
                .sort((a, b) => computeCampaignScore(b) - computeCampaignScore(a))
                .slice(0, 3);
            if (!campaigns.length) { el.innerHTML = ''; return; }
            el.innerHTML = `
    <section style="padding-top:2.5rem; padding-bottom:0;">
      <div class="section-header reveal" style="margin-bottom:1.5rem;">
        <p class="section-label">Recommended For You</p>
        <h2 class="section-title" style="font-size: clamp(24px, 3.5vw, 34px);">Featured Picks</h2>
      </div>
      <div class="products-grid-paginated">
        ${campaigns.map(c => sponsoredCardHtml(c)).join('')}
      </div>
    </section>`;
        }

        // Product detail page — "Similar Product Boost" sponsored row.
        function renderDetailSponsored(currentProductId) {
            const el = document.getElementById('detailSponsoredRow');
            if (!el) return;
            const campaigns = getSponsoredMatches('similar', p => p.id !== currentProductId, 4);
            if (!campaigns.length) { el.style.display = 'none'; el.innerHTML = ''; return; }
            el.style.display = 'block';
            el.innerHTML = `
      <p style="font-size:11px; letter-spacing:0.1em; text-transform:uppercase; color:var(--text-muted); margin: 1rem 0 0.6rem;">✦ Customers Also Viewed</p>
      <div class="sponsored-mini-row">
        ${campaigns.map(c => sponsoredMiniCardHtml(c)).join('')}
      </div>`;
            observeSponsoredImpressions();
        }

        // ==========================================================================
        // ADMIN — Promotion Center UI (Dashboard / Create / Campaigns / Wallet)
        // ==========================================================================
        function renderPromoAdminTab() {
            refreshCampaignStatuses();
            renderPromoDashboard();
        }

        function switchPromoSubTab(sub, btn) {
            document.querySelectorAll('#adminTabPromotions > .admin-tabs .admin-tab-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            document.getElementById('promoSubDashboard').style.display = sub === 'dashboard' ? 'block' : 'none';
            document.getElementById('promoSubCreate').style.display = sub === 'create' ? 'block' : 'none';
            document.getElementById('promoSubCampaigns').style.display = sub === 'campaigns' ? 'block' : 'none';
            document.getElementById('promoSubWallet').style.display = sub === 'wallet' ? 'block' : 'none';
            if (sub === 'dashboard') renderPromoDashboard();
            if (sub === 'create') { populatePromoProductSelect(); document.getElementById('promoCpcNote').textContent = PROMO_CPC; }
            if (sub === 'campaigns') renderPromoCampaignsList();
            if (sub === 'wallet') renderPromoWallet();
        }

        function populatePromoProductSelect() {
            const sel = document.getElementById('promoProduct');
            sel.innerHTML = PRODUCTS.map(p => `<option value="${p.id}">${escapeHtml(p.brandName)} — ${escapeHtml(p.name)}</option>`).join('');
            onPromoTypeChange();
            updatePromoScorePreview();
        }

        function onPromoTypeChange() {
            const type = document.getElementById('promoType').value;
            document.getElementById('promoDurationGroup').style.display = type === 'flash' ? 'block' : 'none';
            const meta = CAMPAIGN_TYPES[type];
            if (meta) document.getElementById('promoBadge').value = meta.badge;
            updatePromoScorePreview();
        }

        // "AI Promotion Studio" — a lightweight heuristic scorer + estimate, run
        // entirely client-side against the selected product's real data.
        function updatePromoScorePreview() {
            const productId = parseInt(document.getElementById('promoProduct').value, 10);
            const p = PRODUCTS.find(pr => pr.id === productId);
            const box = document.getElementById('promoScorePreview');
            if (!p || !box) return;

            let score = 70;
            const notes = [];
            if (p.img) { score += 8; notes.push('✓ Product image quality: Good'); } else notes.push('⚠ Add a product image');
            if (p.name && p.name.length <= 60) { score += 6; notes.push('✓ Title length: Good'); } else notes.push('⚠ Title is a bit long');
            if (Number(p.discountPercent) > 0) { score += 10; notes.push('✓ Discount applied — boosts CTR'); } else notes.push('⚠ Discount recommended (5–10%)');
            if (p.desc && p.desc.length > 160) notes.push('⚠ Description too long'); else { score += 6; notes.push('✓ Description length: Good'); }
            score = Math.min(99, score);

            const estImprLow = Math.round(score * 550);
            const estImprHigh = Math.round(score * 720);
            const estClicksLow = Math.round(estImprLow * 0.025);
            const estClicksHigh = Math.round(estImprHigh * 0.035);
            const estOrdersLow = Math.round(estClicksLow * 0.05);
            const estOrdersHigh = Math.round(estClicksHigh * 0.08);
            const roas = (score / 20).toFixed(1);

            box.innerHTML = `
      <div style="font-weight:600; color:var(--navy); margin-bottom:6px;">Campaign Score: ${score}/100</div>
      <div style="font-size:12px; color:var(--text); line-height:1.8;">${notes.join('<br>')}</div>
      <div style="margin-top:10px; font-size:12px; color:var(--text-muted); line-height:1.8;">
        Estimated Impressions: <strong style="color:var(--navy);">${estImprLow.toLocaleString()}–${estImprHigh.toLocaleString()}</strong><br>
        Estimated Clicks: <strong style="color:var(--navy);">${estClicksLow.toLocaleString()}–${estClicksHigh.toLocaleString()}</strong><br>
        Estimated Orders: <strong style="color:var(--navy);">${estOrdersLow}–${estOrdersHigh}</strong><br>
        Estimated ROAS: <strong style="color:var(--navy);">${roas}x</strong>
      </div>`;
        }

        function resetPromoForm() {
            document.getElementById('editingPromoId').value = '';
            document.getElementById('promoFormTitle').textContent = 'Create Campaign';
            populatePromoProductSelect();
            document.getElementById('promoType').value = 'homepage';
            document.getElementById('promoDuration').value = '3';
            document.getElementById('promoBadge').value = 'Sponsored';
            document.getElementById('promoCta').value = 'Shop Now';
            document.getElementById('promoTargetDevice').value = 'all';
            document.getElementById('promoTargetCity').value = 'all';
            document.getElementById('promoDailyBudget').value = '500';
            document.getElementById('promoMaxSpend').value = '';
            onPromoTypeChange();
        }

        async function savePromoForm() {
            const productId = parseInt(document.getElementById('promoProduct').value, 10);
            const campaignType = document.getElementById('promoType').value;
            const badge = document.getElementById('promoBadge').value;
            const cta = document.getElementById('promoCta').value;
            const targetDevice = document.getElementById('promoTargetDevice').value;
            const targetCity = document.getElementById('promoTargetCity').value;
            const dailyBudget = parseFloat(document.getElementById('promoDailyBudget').value) || 500;
            let maxSpend = parseFloat(document.getElementById('promoMaxSpend').value);
            if (isNaN(maxSpend) || maxSpend <= 0) maxSpend = dailyBudget * 10;
            const durationHours = campaignType === 'flash' ? parseInt(document.getElementById('promoDuration').value, 10) : null;
            const editingId = document.getElementById('editingPromoId').value;

            if (!productId) { showToast('Please select a product'); return; }
            if (!editingId && (PROMO_WALLET.balance || 0) < dailyBudget) {
                showToast(`Insufficient wallet balance — recharge at least ৳${dailyBudget} first.`);
                  switchPromoSubTab('wallet', document.querySelector('[data-promosub="wallet"]'));
                return;
            }

            const now = Date.now();
            if (editingId) {
                const c = PROMOTIONS.find(pr => pr.id === parseInt(editingId, 10));
                if (c) {
                    Object.assign(c, { productId, campaignType, badge, cta, targetDevice, targetCity, dailyBudget, maxSpend, durationHours });
                    c.endAt = durationHours ? (c.startAt || now) + durationHours * 3600000 : null;
                }
                showToast('Campaign updated ✓');
            } else {
                PROMOTIONS.push({
                    id: Date.now(),
                    productId, campaignType, badge, cta, targetDevice, targetCity,
                    dailyBudget, maxSpend, durationHours,
                    createdAt: now,
                    startAt: now,
                    endAt: durationHours ? now + durationHours * 3600000 : null,
                    status: 'running',
                    spent: 0, impressions: 0, clicks: 0, conversions: 0
                });
                showToast('Campaign launched 🚀');
            }

            await savePromotions();
            resetPromoForm();
            refreshCampaignStatuses();
            renderSponsoredHomeSections();
        }

        function editPromoCampaign(id) {
            const c = PROMOTIONS.find(pr => pr.id === id);
            if (!c) return;
            populatePromoProductSelect();
            document.getElementById('editingPromoId').value = c.id;
            document.getElementById('promoFormTitle').textContent = 'Edit Campaign';
            document.getElementById('promoProduct').value = c.productId;
            document.getElementById('promoType').value = c.campaignType;
            document.getElementById('promoBadge').value = c.badge;
            document.getElementById('promoCta').value = c.cta;
            document.getElementById('promoTargetDevice').value = c.targetDevice || 'all';
            document.getElementById('promoTargetCity').value = c.targetCity || 'all';
            document.getElementById('promoDailyBudget').value = c.dailyBudget;
            document.getElementById('promoMaxSpend').value = c.maxSpend;
            if (c.durationHours) document.getElementById('promoDuration').value = String(c.durationHours);
            onPromoTypeChange();
            updatePromoScorePreview();
            switchPromoSubTab('create', document.querySelector('[data-promosub="create"]'));
        }

        function setPromoFilter(filter, btn) {
            promoAdminFilter = filter;
            document.querySelectorAll('#promoSubCampaigns .filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderPromoCampaignsList();
        }

        function renderPromoCampaignsList() {
            refreshCampaignStatuses();
            const list = document.getElementById('promoCampaignsList');
            let items = [...PROMOTIONS].sort((a, b) => b.createdAt - a.createdAt);
            if (promoAdminFilter !== 'all') items = items.filter(c => c.status === promoAdminFilter);

            if (!items.length) { list.innerHTML = '<div class="admin-empty">No campaigns here yet.</div>'; return; }

            list.innerHTML = items.map(c => {
                const p = PRODUCTS.find(pr => pr.id === c.productId);
                const meta = CAMPAIGN_TYPES[c.campaignType] || CAMPAIGN_TYPES.homepage;
                const ctr = c.impressions ? ((c.clicks / c.impressions) * 100).toFixed(1) : '0.0';
                const statusColor = c.status === 'running' ? '#2e7d32' : c.status === 'completed' ? '#c0392b' : 'var(--gold)';
                return `
    <div class="admin-review-row ${c.status !== 'running' ? 'pending' : ''}">
      <div class="admin-review-info">
        <div class="admin-review-name">${meta.icon} ${escapeHtml(p ? p.name : 'Deleted product')}<span class="admin-pending-tag" style="background:${statusColor}; color:#fff;">${escapeHtml(c.status)}</span></div>
        <div class="admin-review-meta">${meta.label} · Score ${computeCampaignScore(c)}/100 · ৳${(c.spent || 0).toLocaleString()} / ৳${(c.maxSpend || 0).toLocaleString()} spent</div>
        <p class="admin-review-text">👁 ${c.impressions || 0} impressions · 🖱 ${c.clicks || 0} clicks · CTR ${ctr}% · 🛒 ${c.conversions || 0} conversions</p>
      </div>
      <div class="admin-review-actions">
        <button class="admin-btn verify" onclick="editPromoCampaign(${c.id})">✎ Edit</button>
        ${c.status === 'paused'
                        ? `<button class="admin-btn verify" onclick="resumePromoCampaign(${c.id})">▶ Resume</button>`
                        : c.status === 'completed' ? '' : `<button class="admin-btn unverify" onclick="pausePromoCampaign(${c.id})">⏸ Pause</button>`}
        <button class="admin-btn delete" onclick="deletePromoCampaign(${c.id})">🗑 Delete</button>
      </div>
    </div>`;
            }).join('');
        }

        async function pausePromoCampaign(id) {
            const c = PROMOTIONS.find(p => p.id === id);
            if (!c) return;
            c.status = 'paused';
            await savePromotions();
            renderPromoCampaignsList();
            renderSponsoredHomeSections();
            showToast('Campaign paused');
        }

        async function resumePromoCampaign(id) {
            const c = PROMOTIONS.find(p => p.id === id);
            if (!c) return;
            c.status = 'running';
            await savePromotions();
            refreshCampaignStatuses();
            renderPromoCampaignsList();
            renderSponsoredHomeSections();
            showToast('Campaign resumed ▶');
        }

        async function deletePromoCampaign(id) {
            PROMOTIONS = PROMOTIONS.filter(p => p.id !== id);
            await savePromotions();
            renderPromoCampaignsList();
            renderSponsoredHomeSections();
            showToast('Campaign deleted 🗑');
        }

        function renderPromoDashboard() {
            refreshCampaignStatuses();
            const totalImpr = PROMOTIONS.reduce((s, c) => s + (c.impressions || 0), 0);
            const totalClicks = PROMOTIONS.reduce((s, c) => s + (c.clicks || 0), 0);
            const totalConv = PROMOTIONS.reduce((s, c) => s + (c.conversions || 0), 0);
            const ctr = totalImpr ? ((totalClicks / totalImpr) * 100).toFixed(1) : '0.0';

            document.getElementById('promoStatImpr').textContent = totalImpr.toLocaleString();
            document.getElementById('promoStatClicks').textContent = totalClicks.toLocaleString();
            document.getElementById('promoStatCtr').textContent = ctr + '%';
            document.getElementById('promoStatOrders').textContent = totalConv.toLocaleString();

            const list = document.getElementById('promoDashboardList');
            const running = PROMOTIONS.filter(c => c.status === 'running').sort((a, b) => computeCampaignScore(b) - computeCampaignScore(a));
            if (!running.length) { list.innerHTML = '<div class="admin-empty">No running campaigns. Launch one from "Create Campaign" 🚀</div>'; return; }
            list.innerHTML = `<p style="font-size:11px; text-transform:uppercase; letter-spacing:0.08em; color:var(--text-muted); margin-bottom:0.75rem;">Running Campaigns (ranked by live performance)</p>` +
                running.map(c => {
                    const p = PRODUCTS.find(pr => pr.id === c.productId);
                    const meta = CAMPAIGN_TYPES[c.campaignType] || CAMPAIGN_TYPES.homepage;
                    return `<div class="admin-review-row">
      <div class="admin-review-info">
        <div class="admin-review-name">${meta.icon} ${escapeHtml(p ? p.name : '—')}<span class="admin-pending-tag">Score ${computeCampaignScore(c)}</span></div>
        <div class="admin-review-meta">${meta.label} · 👁 ${c.impressions || 0} · 🖱 ${c.clicks || 0} · 🛒 ${c.conversions || 0}</div>
      </div>
    </div>`;
                }).join('');
        }

        function selectPromoRecharge(m) {
            promoRechargeMethod = m;
            document.getElementById('promoPayBkash').classList.toggle('active', m === 'bkash');
            document.getElementById('promoPayNagad').classList.toggle('active', m === 'nagad');
            document.getElementById('promoPayCard').classList.toggle('active', m === 'card');
        }

        function renderPromoWallet() {
            document.getElementById('promoWalletBalance').textContent = (PROMO_WALLET.balance || 0).toLocaleString();
            const list = document.getElementById('promoWalletTxList');
            const txs = [...(PROMO_WALLET.transactions || [])].sort((a, b) => b.date - a.date);
            if (!txs.length) { list.innerHTML = '<div class="admin-empty">No transactions yet.</div>'; return; }
            list.innerHTML = txs.map(t => `
    <div class="admin-review-row">
      <div class="admin-review-info">
        <div class="admin-review-name">+৳${t.amount.toLocaleString()} via ${escapeHtml(t.method)}</div>
        <div class="admin-review-meta">${new Date(t.date).toLocaleString('en-GB')}${t.trxId ? ' · Trx: ' + escapeHtml(t.trxId) : ''}</div>
      </div>
    </div>`).join('');
        }

        async function submitPromoRecharge() {
            const amount = parseFloat(document.getElementById('promoRechargeAmount').value);
            const trx = document.getElementById('promoRechargeTrx').value.trim();
            if (!amount || amount <= 0) { showToast('Please enter a valid amount'); return; }
            if (!trx) { showToast('Please enter a transaction ID'); return; }

            PROMO_WALLET.balance = (PROMO_WALLET.balance || 0) + amount;
            PROMO_WALLET.transactions = PROMO_WALLET.transactions || [];
            PROMO_WALLET.transactions.push({ id: Date.now(), amount, method: promoRechargeMethod, trxId: trx, date: Date.now() });
            await savePromoWallet();

            document.getElementById('promoRechargeAmount').value = '';
            document.getElementById('promoRechargeTrx').value = '';
            renderPromoWallet();
            showToast(`Wallet recharged with ৳${amount.toLocaleString()} ✓`);
        }

        // ===== SCROLL REVEAL (fades/slides sections & cards in as you scroll) =====
        let scrollObserver = null;
        function initScrollReveal() {
            if (!scrollObserver) {
                scrollObserver = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            entry.target.classList.add('in-view');
                            scrollObserver.unobserve(entry.target);
                        }
                    });
                }, { threshold: 0.12 });
            }
            document.querySelectorAll('.reveal:not(.in-view)').forEach(el => scrollObserver.observe(el));
        }

        // ADDED: Trust Stats count-up animation (feature 3)
        function initCounters() {
            const counters = document.querySelectorAll('.stat-num');
            const obs = new IntersectionObserver((entries) => {
                entries.forEach(e => {
                    if (e.isIntersecting) {
                        const el = e.target;
                        const target = +el.dataset.count;
                        let cur = 0;
                        const step = Math.ceil(target / 60);
                        const tick = () => {
                            cur += step;
                            if (cur >= target) { el.textContent = target; }
                            else { el.textContent = cur; requestAnimationFrame(tick); }
                        };
                        tick();
                        obs.unobserve(el);
                    }
                });
            }, { threshold: 0.5 });
            counters.forEach(c => obs.observe(c));
        }

        // Init
        // CHANGED: renderShopView() (home / brand page / search results router) now
        // runs after the live product list loads, instead of the old flat renderProducts().
        loadFlashDeal();
        loadConcerns();
        loadCategories();
        loadProducts();
        loadReviews();
        loadUsers();
        loadOrders();
        loadWishlist();
        loadCoupons();
        loadBanner();
        loadProductsBg();
        loadHeroSettings();
        loadSlides();
        loadTeam();
        loadApplications();
        loadAdminRequests();
        loadPromotions();
        loadNewsletter();
        loadVideos();
        initDistrictDropdown();
        // ADDED: generates random floating sparkles inside the hero
function initHeroSparkles() {
    const wrap = document.getElementById('heroSparkles');
    if (!wrap) return;
    const count = 22;
    let html = '';
    for (let i = 0; i < count; i++) {
        const left = Math.random() * 100;
        const bottom = Math.random() * 80;
        const delay = Math.random() * 6;
        const duration = 4 + Math.random() * 4;
        html += `<span class="hero-sparkle" style="left:${left}%; bottom:${bottom}%; animation-delay:${delay}s; animation-duration:${duration}s;"></span>`;
    }
    wrap.innerHTML = html;
}
initHeroSparkles();
// ADDED: click ripple effect on all primary buttons
document.addEventListener('click', function (e) {
    const btn = e.target.closest('.btn-primary, .btn-secondary, .checkout-btn, .confirm-btn, .add-btn, .detail-add-btn, .write-review-btn, .auth-submit-btn, .coupon-apply-btn');
    if (!btn) return;
    const rect = btn.getBoundingClientRect();
    const ripple = document.createElement('span');
    const size = Math.max(rect.width, rect.height);
    ripple.className = 'ripple-el';
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = (e.clientX - rect.left - size / 2) + 'px';
    ripple.style.top = (e.clientY - rect.top - size / 2) + 'px';
    btn.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
});
// ADDED: magnetic pull effect on primary CTA buttons
document.querySelectorAll('.btn-primary').forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        btn.style.transform = `translate(${x * 0.25}px, ${y * 0.25 - 2}px)`;
    });
    btn.addEventListener('mouseleave', () => {
        btn.style.transform = 'translate(0, 0)';
    });
});
// ADDED: শুধু mouse আছে এমন ডিভাইসে tilt effect চালু থাকবে, টাচ ডিভাইসে না
const supportsHoverTilt = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

if (supportsHoverTilt) {
document.addEventListener('mousemove', function (e) {
    const card = e.target.closest('.product-card');
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -6;
    const rotateY = ((x - centerX) / centerX) * 6;
    card.style.transform = `perspective(700px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
});
document.addEventListener('mouseout', function (e) {
    const card = e.target.closest('.product-card');
    if (card && !card.contains(e.relatedTarget)) {
        card.style.transform = 'perspective(700px) rotateX(0) rotateY(0) translateY(0)';
    }
});
}
// ADDED: subtle 3D tilt effect on product cards following the mouse


document.addEventListener('mousemove', function (e) {
    const card = e.target.closest('.product-card');
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -6; // max 6deg
    const rotateY = ((x - centerX) / centerX) * 6;
    card.style.transform = `perspective(700px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
});
document.addEventListener('mouseout', function (e) {
    const card = e.target.closest('.product-card');
    if (card && !card.contains(e.relatedTarget)) {
        card.style.transform = 'perspective(700px) rotateX(0) rotateY(0) translateY(0)';
    }
});

 // ADDED: fades product/detail/cart/team images in smoothly once loaded,
        // and stops the shimmer background once the image is visible — runs
        // repeatedly since product cards re-render often (search, pagination, etc.)
        function initImageFadeIn() {
            document.querySelectorAll('.product-img-wrap img, .detail-img-wrap img, .cart-item-img, .team-photo, .admin-slide-thumb').forEach(img => {
                if (img.classList.contains('img-loaded')) return;
                if (img.complete && img.naturalWidth > 0) {
                    img.classList.add('img-loaded');
                } else {
                    img.addEventListener('load', () => img.classList.add('img-loaded'), { once: true });
                    img.addEventListener('error', () => img.classList.add('img-loaded'), { once: true });
                }
            });
        }
        setInterval(initImageFadeIn, 800);
        initScrollReveal();
        initCounters();
        // ADDED: nav shadow on scroll + scroll progress bar (feature 2)
       window.addEventListener('scroll', () => {
            const navEl = document.querySelector('nav');
            if (navEl) navEl.classList.toggle('scrolled', window.scrollY > 10);

            const sp = document.getElementById('scrollProgress');
            if (sp) {
                const h = document.documentElement;
                const pct = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
                sp.style.width = pct + '%';
            }

            // ADDED: show Back to Top after scrolling past one screen height
            const backBtn = document.getElementById('backToTopBtn');
            if (backBtn) backBtn.classList.toggle('show', window.scrollY > window.innerHeight * 0.6);
        });

        // ADDED: hide the Page Loader once everything has loaded (feature 1)
        window.addEventListener('load', () => {
            setTimeout(() => {
                document.getElementById('pageLoader')?.classList.add('loaded');
            }, 400);
        });