
        // 1. Product Data
        const products = [
            { id: 1, category: 'lips', name: 'Velvet Lipstick', price: 15000, description: 'Creamy, long-lasting matte formula.', image: 'https://media.istockphoto.com/id/1458639401/photo/red-lipstick-close-up-on-pink-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=eem65oPoDCW2mr9WN2cQ-bR3qJu8OfDy2kn9fXrr5Es=' },
            { id: 2, category: 'lips', name: 'Glossy Lip Oil', price: 12000, description: 'Deep hydration with high shine.', image: 'https://images.unsplash.com/photo-1687195821497-fed0346cdc34?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGxpcCUyMGdsb3NzfGVufDB8fDB8fHww' },
            { id: 3, category: 'lips', name: 'Lip Liner', price: 9000, description: 'Used to define and shape lips', image: 'https://th.bing.com/th/id/OIP.Fi2coFX1qua9qFB9Oyy7rAHaHa?w=204&h=204&c=7&r=0&o=7&cb=ucfimg2&dpr=1.3&pid=1.7&rm=3&ucfimg=1' },
            { id: 4, category: 'lips', name: 'Lip Tint', price: 7000, description: 'Light color wash gives natural tint; comes sheer, buildable, or long-lasting', image: 'https://th.bing.com/th?id=OIF.bgVOov%2bjlSxF2c6Wh8HmMg&w=182&h=185&c=7&r=0&o=7&cb=ucfimg2&dpr=1.3&pid=1.7&rm=3&ucfimg=1' },
            { id: 5, category: 'Lips', name: 'Lip Scrub', price: 14000, description: 'Textured exfoliant smooths lips; comes sugar, salt, or gentle formulas', image: 'https://th.bing.com/th/id/OIP.nqYdR8wXKxYrBlKR-Rnd_AHaHa?w=277&h=208&c=7&r=0&o=7&cb=ucfimg2&dpr=1.3&pid=1.7&rm=3&ucfimg=1' },
            { id: 6, category: 'lips', name: 'Lip Combos', price: 13000, description: 'Sets bundle essentials together; comes with lipstick, gloss, and liner', image: 'https://th.bing.com/th/id/OIF.FyrqRwL1d5WSKF2oyu6OYg?w=177&h=196&c=7&r=0&o=7&cb=ucfimg2&dpr=1.3&pid=1.7&rm=3&ucfimg=1' },
            
		    { id: 7, category: 'eyes', name: 'Earth Palette', price: 40000, description: '14 highly pigmented matte shades.', image: 'https://images.unsplash.com/photo-1547934659-7fa699ef3ce0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZXllc2hhZG93fGVufDB8fDB8fHww' },
		    { id: 8, category: 'eyes', name: 'Brow Pencil', price: 29000, description: 'Slim pencil defines brows; comes soft, fine, or angled tips', image: 'https://th.bing.com/th/id/OIP.2b0QVgcF1_R1UFnhyee4ZAHaHa?w=184&h=184&c=7&r=0&o=7&cb=ucfimg2&dpr=1.3&pid=1.7&rm=3&ucfimg=1' },
		    { id: 5, category: 'eyes', name: 'Mascara', price: 38000, description: 'Lash enhancer boosts volume; comes lengthening, volumizing, or waterproof', image: 'https://th.bing.com/th/id/OIP.ULsVwlfBhD56uewy0_g5jwHaEK?w=333&h=187&c=7&r=0&o=7&cb=ucfimg2&dpr=1.3&pid=1.7&rm=3&ucfimg=1' },
		    { id: 5, category: 'eyes', name: 'Eyeliner', price: 27000, description: 'Precision liner frames eyes; comes pencil, liquid, or gel formulas', image: 'https://th.bing.com/th/id/OIP.U1c89kuz-2aOJt6Z3HqNmQHaEK?w=271&h=180&c=7&r=0&o=7&cb=ucfimg2&dpr=1.3&pid=1.7&rm=3&ucfimg=1' },
		    { id: 5, category: 'eyes', name: 'Brow Gel', price: 36000, description: 'Taming gel shapes brows; comes clear, tinted, or fiber-infused', image: 'https://th.bing.com/th/id/OIP.uXrZufz3-njpx0nH0xM7WwHaHa?w=202&h=203&c=7&r=0&o=7&cb=ucfimg2&dpr=1.3&pid=1.7&rm=3&ucfimg=1' },
		    { id: 5, category: 'eyes', name: 'Eye Primer', price: 31000, description: 'Base smooths lids for color; comes matte, luminous, or long-wear formulas', image: 'https://th.bing.com/th/id/OIP.weFdItMa0gHT3Bm4UaCHKgHaHa?w=185&h=186&c=7&r=0&o=7&cb=ucfimg2&dpr=1.3&pid=1.7&rm=3&ucfimg=1' },
		    { id: 5, category: 'eyes', name: 'Eyelashes', price: 24000, description: 'Fluttery lash add-ons enhance eyes; comes natural, dramatic, or volume packs', image: 'https://th.bing.com/th/id/OIP.3gv4Gt7QrtFpjRRC0EM3AgHaHa?w=187&h=187&c=7&r=0&o=7&cb=ucfimg2&dpr=1.3&pid=1.7&rm=3&ucfimg=1' },
            
			{ id: 6, category: 'face', name: 'Silk Foundation', price: 75000, description: 'Natural coverage for all skin types.', image: 'https://plus.unsplash.com/premium_photo-1678932075247-2d5e29363a3f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fGZvdW5kYXRpb24lMjBtYWtldXB8ZW58MHx8MHx8fDA%3D' },
			{ id: 6, category: 'face', name: 'Concealer', price: 40000, description: 'Targeted coverage hides flaws; comes liquid, cream, or stick', image: 'https://th.bing.com/th/id/OIP.S8wRaf13BLKVxNi-S6QK3QHaI4?w=144&h=180&c=7&r=0&o=7&cb=ucfimg2&dpr=1.3&pid=1.7&rm=3&ucfimg=1' },
			{ id: 6, category: 'face', name: 'Liquid / Cream Blush', price: 66000, description: 'Soft color flushes cheeks; comes dewy, natural, or buildable', image: 'https://th.bing.com/th/id/OIP.VsWQert6lSFrJCX0BaOWOgHaJk?w=153&h=199&c=7&r=0&o=7&cb=ucfimg2&dpr=1.3&pid=1.7&rm=3&ucfimg=1' },
			{ id: 6, category: 'face', name: 'Liquid Highlighter', price: 47000, description: 'Glow enhancer reflects light; comes subtle, radiant, or intense shine', image: 'https://th.bing.com/th/id/OIP.t8l8DRkR0aD-C7NrX7rdXAHaEK?w=333&h=187&c=7&r=0&o=7&cb=ucfimg2&dpr=1.3&pid=1.7&rm=3&ucfimg=1' },
			{ id: 6, category: 'face', name: 'Liquid / Cream Contour', price: 68000, description: 'Sculpting formula defines face; comes cool-tone or warm shades', image: 'https://th.bing.com/th/id/OIF.jT6BdRSmhgYacthsKnDlqQ?w=214&h=215&c=7&r=0&o=7&cb=ucfimg2&dpr=1.3&pid=1.7&rm=3&ucfimg=1' },
			{ id: 6, category: 'face', name: 'Setting Powder', price: 28000, description: 'Fine powder sets makeup; comes loose or pressed formulas', image: 'https://th.bing.com/th/id/OIF.ZLWIuQTiBkm7pZn5tkYzRA?w=149&h=180&c=7&r=0&o=7&cb=ucfimg2&dpr=1.3&pid=1.7&rm=3&ucfimg=1' },
			{ id: 6, category: 'face', name: 'Compact Powder', price: 59000, description: 'Pressed powder smooths skin; comes matte or natural finish', image: 'https://th.bing.com/th/id/OIP.nUJBt7zuy-X0COsy-hk-AAHaHa?w=213&h=213&c=7&r=0&o=7&cb=ucfimg2&dpr=1.3&pid=1.7&rm=3&ucfimg=1' },
			{ id: 6, category: 'face', name: 'Powder Bronzer', price: 34000, description: 'Warm powder adds sun-kissed glow; comes matte or shimmer', image: 'https://th.bing.com/th/id/OIP.v-CJTzk3byRNdgYN98_MQgHaD4?w=324&h=180&c=7&r=0&o=7&cb=ucfimg2&dpr=1.3&pid=1.7&rm=3&ucfimg=1' },
			{ id: 6, category: 'face', name: 'Setting Spray', price: 45000, description: 'Mist locks makeup in place; comes matte, glow, or long-wear', image: 'https://th.bing.com/th/id/OIP._5oNUICmSRuZHPY1SJq3kQHaHa?w=182&h=187&c=7&r=0&o=7&cb=ucfimg2&dpr=1.3&pid=1.7&rm=3&ucfimg=1' },
			{ id: 6, category: 'face', name: 'Makeup Sponge', price: 33000, description: 'Soft blender evens base; comes classic, mini, or angled shapes', image: 'https://th.bing.com/th?id=OIF.7zEzToB5Rn7Y1RDSS%2fHIRw&w=160&h=180&c=7&r=0&o=7&cb=ucfimg2&dpr=1.3&pid=1.7&rm=3&ucfimg=1' },
			{ id: 6, category: 'face', name: 'Face Brushes', price: 46000, description: 'Brush tools apply makeup; comes foundation, powder, or contour types', image: 'https://th.bing.com/th/id/OIP.fYZVHe57JbFqWoouVXBDxQHaHa?w=180&h=180&c=7&r=0&o=7&cb=ucfimg2&dpr=1.3&pid=1.7&rm=3&ucfimg=1' },
			{ id: 6, category: 'face', name: 'Cleanser', price: 36000, description: 'Gentle wash removes dirt; comes gel, foam, or cream formulas', image: 'https://th.bing.com/th/id/OIP.0cRD2FCr-btVZDWU0aIB9QHaHa?w=172&h=180&c=7&r=0&o=7&cb=ucfimg2&dpr=1.3&pid=1.7&rm=3&ucfimg=1' },
			{ id: 6, category: 'face', name: 'Toner', price: 50000, description: 'Light liquid balances skin; comes hydrating, calming, or exfoliating', image: 'https://th.bing.com/th/id/OIF.ebahuxv7iWJsBFXFzHDQYg?w=115&h=144&c=7&r=0&o=7&cb=ucfimg2&dpr=1.3&pid=1.7&rm=3&ucfimg=1' },
			{ id: 6, category: 'face', name: 'Face Serum', price: 56000, description: 'Concentrated treatment targets skin; comes brightening, anti-aging, or hydrating', image: 'https://th.bing.com/th/id/OIP.1G-jmjqvES2A6BrFn3if8gHaE8?w=261&h=180&c=7&r=0&o=7&cb=ucfimg2&dpr=1.3&pid=1.7&rm=3&ucfimg=1' },
			{ id: 6, category: 'face', name: 'Moisturizer', price: 67000, description: 'Cream locks in moisture; comes gel, lotion, or rich textures', image: 'https://th.bing.com/th?id=OIF.B6HD1qg7%2barVxbdg6HuYAw&w=120&h=180&c=7&r=0&o=7&cb=ucfimg2&dpr=1.3&pid=1.7&rm=3&ucfimg=1' },
			{ id: 6, category: 'face', name: 'Sunscreen', price: 48000, description: 'Protective formula shields skin; comes matte, glow, or tinted SPF', image: 'https://th.bing.com/th?q=La+Roche+Posay+Sunscreen+Face&w=120&h=120&c=1&rs=1&qlt=70&o=7&cb=1&dpr=1.3&pid=InlineBlock&rm=3&ucfimg=1&mkt=en-XA&cc=SA&setlang=en&adlt=strict&t=1&mw=247' },
			{ id: 6, category: 'face', name: 'Face Scrub / Exfoliator', price: 53000, description: 'Exfoliating formula smooths skin; comes physical or chemical exfoliants', image: 'https://th.bing.com/th/id/OIP.QpA4qc9CZkpDf608dAMADAHaHa?w=144&h=180&c=7&r=0&o=7&cb=ucfimg2&dpr=1.3&pid=1.7&rm=3&ucfimg=1' },
			{ id: 6, category: 'face', name: 'Face Mask', price: 23000, description: 'Treatment mask boosts skin; comes clay, sheet, or gel masks', image: 'https://th.bing.com/th/id/OIP.Bf_ETmGL7W70XitxM-cdRwHaEV?w=293&h=180&c=7&r=0&o=7&cb=ucfimg2&dpr=1.3&pid=1.7&rm=3&ucfimg=1' },
			
            
			{ id: 7, category: 'face', name: 'Soft Blush', price: 12000, description: 'A touch of fresh pink radiance.', image: 'https://plus.unsplash.com/premium_photo-1726840825289-8de3e79e42d5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }
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
    