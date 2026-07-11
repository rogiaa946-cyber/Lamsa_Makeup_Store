
        // 1. Product Data
        const products = [
            { id: 1, category: 'lips', name: 'Velvet Lipstick', price: 15000, description: 'Creamy, long-lasting matte formula.', image: '/static/images/lipstick.webp' },
            { id: 2, category: 'lips', name: 'Glossy Lip Oil', price: 12000, description: 'Deep hydration with high shine.', image: '/static/images/lip-oil.avif' },
            { id: 3, category: 'lips', name: 'Lip Liner', price: 9000, description: 'Used to define and shape lips', image: '/static/images/lip-liner.webp' },
            { id: 4, category: 'lips', name: 'Lip Tint', price: 7000, description: 'Light color wash gives natural tint; comes sheer, buildable, or long-lasting', image: '/static/images/lip-tint.jpg' },
            { id: 5, category: 'Lips', name: 'Lip Scrub', price: 14000, description: 'Textured exfoliant smooths lips; comes sugar, salt, or gentle formulas', image: '/static/images/lip-scrub.webp' },
            { id: 6, category: 'lips', name: 'Lip Combos', price: 13000, description: 'Sets bundle essentials together; comes with lipstick, gloss, and liner', image: '/static/images/lip-combos.jpg' },
            
		    { id: 7, category: 'eyes', name: 'Earth Palette', price: 40000, description: '14 highly pigmented matte shades.', image: '/static/images/earth-palette.avif' },
		    { id: 8, category: 'eyes', name: 'Brow Pencil', price: 29000, description: 'Slim pencil defines brows; comes soft, fine, or angled tips', image: '/static/images/brow-pencil.webp' },
		    { id: 9, category: 'eyes', name: 'Mascara', price: 38000, description: 'Lash enhancer boosts volume; comes lengthening, volumizing, or waterproof', image: '/static/images/mascara.webp' },
		    { id: 10, category: 'eyes', name: 'Eyeliner', price: 27000, description: 'Precision liner frames eyes; comes pencil, liquid, or gel formulas', image: '/static/images/eyeliner.webp' },
		    { id: 11, category: 'eyes', name: 'Brow Gel', price: 36000, description: 'Taming gel shapes brows; comes clear, tinted, or fiber-infused', image: '/static/images/brow-gel.webp' },
		    { id: 12, category: 'eyes', name: 'Eye Primer', price: 31000, description: 'Base smooths lids for color; comes matte, luminous, or long-wear formulas', image: '/static/images/eye-primer.webp' },
		    { id: 13, category: 'eyes', name: 'Eyelashes', price: 24000, description: 'Fluttery lash add-ons enhance eyes; comes natural, dramatic, or volume packs', image: '/static/images/eyelashes.webp' },
            
			{ id: 14, category: 'face', name: 'Silk Foundation', price: 75000, description: 'Natural coverage for all skin types.', image: '/static/images/silk-foundation.avif' },
			{ id: 15, category: 'face', name: 'Concealer', price: 40000, description: 'Targeted coverage hides flaws; comes liquid, cream, or stick', image: '/static/images/concealer.webp' },
			{ id: 16, category: 'face', name: 'Liquid / Cream Blush', price: 66000, description: 'Soft color flushes cheeks; comes dewy, natural, or buildable', image: '/static/images/blush.webp' },
			{ id: 17, category: 'face', name: 'Liquid Highlighter', price: 47000, description: 'Glow enhancer reflects light; comes subtle, radiant, or intense shine', image: '/static/images/highlighter.webp' },
			{ id: 18, category: 'face', name: 'Liquid / Cream Contour', price: 68000, description: 'Sculpting formula defines face; comes cool-tone or warm shades', image: '/static/images/setting-powder.webp' },
			{ id: 19, category: 'face', name: 'Setting Powder', price: 28000, description: 'Fine powder sets makeup; comes loose or pressed formulas', image: '/static/images/powder.jpg' },
			{ id: 20, category: 'face', name: 'Compact Powder', price: 59000, description: 'Pressed powder smooths skin; comes matte or natural finish', image: '/static/images/compact-powder.webp' },
			{ id: 21, category: 'face', name: 'Powder Bronzer', price: 34000, description: 'Warm powder adds sun-kissed glow; comes matte or shimmer', image: '/static/images/bronzer.jpg' },
			{ id: 22, category: 'face', name: 'Setting Spray', price: 45000, description: 'Mist locks makeup in place; comes matte, glow, or long-wear', image: '/static/images/setting-spray.jpg' },
			{ id: 23, category: 'face', name: 'Makeup Sponge', price: 33000, description: 'Soft blender evens base; comes classic, mini, or angled shapes', image: '/static/images/sponge.webp' },
			{ id: 24, category: 'face', name: 'Face Brushes', price: 46000, description: 'Brush tools apply makeup; comes foundation, powder, or contour types', image: '/static/images/brushes.webp' },
			{ id: 25, category: 'face', name: 'Cleanser', price: 36000, description: 'Gentle wash removes dirt; comes gel, foam, or cream formulas', image: '/static/images/cleanser.webp' },
			{ id: 26, category: 'face', name: 'Toner', price: 50000, description: 'Light liquid balances skin; comes hydrating, calming, or exfoliating', image: '/static/images/face-toner.jpg' },
			{ id: 27, category: 'face', name: 'Face Serum', price: 56000, description: 'Concentrated treatment targets skin; comes brightening, anti-aging, or hydrating', image: '/static/images/serum.webp' },
			{ id: 28, category: 'face', name: 'Moisturizer', price: 67000, description: 'Cream locks in moisture; comes gel, lotion, or rich textures', image: '/static/images/moisturizer.webp' },
			{ id: 29, category: 'face', name: 'Sunscreen', price: 48000, description: 'Protective formula shields skin; comes matte, glow, or tinted SPF', image: '/static/images/sunscreen.webp' },
			{ id: 30, category: 'face', name: 'Face Scrub / Exfoliator', price: 53000, description: 'Exfoliating formula smooths skin; comes physical or chemical exfoliants', image: '/static/images/face-scrub.jpeg' },
			{ id: 31, category: 'face', name: 'Face Mask', price: 23000, description: 'Treatment mask boosts skin; comes clay, sheet, or gel masks', image: '/static/images/face-mask.jpg' },
			{ id: 32, category: 'face', name: 'Soft Blush', price: 12000, description: 'A touch of fresh pink radiance.', image: '/static/images/soft-blush.avif' }
        ];

        let cart = [];
        let currentCategory = 'all';
        let currentUser = null;

        // 2. Render Products based on filter
        function renderProducts() {
            const grid = document.getElementById('products-grid');
            const filtered = currentCategory === 'all' ? products : products.filter(p => p.category === currentCategory);
            
            grid.innerHTML = filtered.map(p => `
                <div class="product-card rounded-2xl p-4 flex flex-col h-full">
                    <img class="w-full h-48 object-cover rounded-xl mb-4" src="${p.image}">
                    <h3 class="text-lg font-bold text-luxury mb-1">${p.name}</h3>
                    <p class="text-gray-400 text-xs mb-4 line-clamp-2">${p.description}</p>
                    <div class="flex justify-between items-center mt-auto pt-3 border-t border-rose-50">
                        <span class="text-xl font-bold text-luxury">${p.price.toLocaleString()} <small class="text-[10px]">SDG</small></span>
                        <button onclick="addToCart(${p.id})" class="accent-bg text-white p-2 rounded-full shadow-md hover:opacity-80 transition">
                            <i data-lucide="plus" class="w-4 h-4"></i>
                        </button>
                    </div>
                </div>
            `).join('');
            lucide.createIcons();
        }

        // 3. Category Filter Function (Global Scope)
        window.filterCategory = function(cat) {
            currentCategory = cat;
            
            // UI Button Active State
            document.querySelectorAll('.category-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            document.getElementById(`cat-${cat}`).classList.add('active');
            
            renderProducts();
        };

        // 4. Cart Logic
        window.addToCart = (id) => {
            const p = products.find(x => x.id === id);
            const exist = cart.find(item => item.id === id);
            if(exist) exist.qty++; else cart.push({...p, qty: 1});
            updateUI();
            openCart();
        };

        window.updateQty = (id, delta) => {
            const item = cart.find(i => i.id === id);
            if (item) {
                item.qty += delta;
                if (item.qty <= 0) cart = cart.filter(x => x.id !== id);
                updateUI();
            }
        };

        function updateUI() {
            const cartItemsContainer = document.getElementById('cart-items');
            cartItemsContainer.innerHTML = cart.map(item => `
                <div class="flex items-center justify-between mb-4 pb-4 border-b">
                    <div class="flex items-center gap-3">
                        <img src="${item.image}" class="w-12 h-12 rounded-lg object-cover">
                        <div>
                            <h4 class="text-sm font-bold">${item.name}</h4>
                            <span class="text-xs text-gray-400">${item.price.toLocaleString()} SDG</span>
                        </div>
                    </div>
                    <div class="flex items-center gap-2">
                        <button onclick="updateQty(${item.id}, -1)" class="w-6 h-6 bg-rose-50 rounded flex items-center justify-center">-</button>
                        <span class="text-xs font-bold">${item.qty}</span>
                        <button onclick="updateQty(${item.id}, 1)" class="w-6 h-6 bg-rose-50 rounded flex items-center justify-center">+</button>
                    </div>
                </div>
            `).join('') || '<p class="text-center text-gray-400 mt-10">Your bag is empty.</p>';

            const total = cart.reduce((s, i) => s + (i.price * i.qty), 0);
            document.getElementById('cart-total').innerText = `${total.toLocaleString()} SDG`;
            document.getElementById('cart-count').innerText = cart.reduce((s, i) => s + i.qty, 0);
        }

        // 5. UI Controls
        const sidebar = document.getElementById('cart-sidebar');
        const overlay = document.getElementById('cart-overlay');
        const authModal = document.getElementById('auth-modal');
        const checkoutModal = document.getElementById('checkout-modal');

        const openCart = () => { sidebar.classList.remove('translate-x-full'); overlay.classList.remove('hidden'); };
        const closeCart = () => { sidebar.classList.add('translate-x-full'); overlay.classList.add('hidden'); };

        document.getElementById('open-cart-btn').onclick = openCart;
        document.getElementById('close-cart-btn').onclick = closeCart;
        overlay.onclick = closeCart;

        document.getElementById('open-auth-btn').onclick = () => authModal.style.display = 'flex';
        document.getElementById('close-auth').onclick = () => authModal.style.display = 'none';
        document.getElementById('close-checkout').onclick = () => checkoutModal.style.display = 'none';

        // 6. User Auth & Orders
        window.processLogin = () => {
            currentUser = { name: 'Guest' };
            authModal.style.display = 'none';
            document.getElementById('auth-section').classList.add('hidden');
            document.getElementById('user-section').classList.remove('hidden');
            document.getElementById('username-display').innerText = `Hello, ${currentUser.name}`;
        };

        window.logout = () => {
            currentUser = null;
            document.getElementById('auth-section').classList.remove('hidden');
            document.getElementById('user-section').classList.add('hidden');
        };

        document.getElementById('checkout-btn').onclick = () => {
            if (!currentUser) { authModal.style.display = 'flex'; return; }
            if (cart.length === 0) return;
            closeCart();
            checkoutModal.style.display = 'flex';
            const total = cart.reduce((s, i) => s + (i.price * i.qty), 0);
            document.getElementById('checkout-summary').innerText = `Total Order: ${total.toLocaleString()} SDG`;
        };

        window.confirmOrder = () => {
            alert('Order received! Thank you for shopping with Lamsa.');
            checkoutModal.style.display = 'none';
            cart = [];
            updateUI();
        };

        // Initialize
        document.addEventListener('DOMContentLoaded', () => {
            lucide.createIcons();
            renderProducts();
        });
    