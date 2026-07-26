document.addEventListener("DOMContentLoaded", function () {
    
    
    const searchForm = document.getElementById("search-form");
    const searchInput = document.getElementById("search");
    const productsGrid = document.getElementById("products-grid");

    function performSearch() {
        if (!searchInput || !productsGrid) return;

        const query = searchInput.value.trim();

        fetch(`/search/?q=${encodeURIComponent(query)}`)
            .then(response => {
                if (!response.ok) throw new Error("Network error");
                return response.json();
            })
            .then(data => {
                productsGrid.innerHTML = `
                    <div class="col-span-full">
                        <h1 class="text-3xl font-bold text-red-600 mb-6">Results count: ${data.length}</h1>
                    </div>
                `;

                if (data.length > 0) {
                    data.forEach(product => {
                        let imgSource = product.image_url || product.image || '';

                        if (imgSource && !imgSource.startsWith('http') && !imgSource.startsWith('/')) {
                            imgSource = '/static/' + imgSource;
                        }

                        const card = document.createElement("div");
                        card.className = "product-card rounded-2xl p-4 flex flex-col h-full";
                        card.innerHTML = `
                            ${imgSource 
                                ? `<img class="w-full h-48 object-cover rounded-xl mb-4" src="${imgSource}" alt="${product.name}" onerror="this.onerror=null; this.src='https://via.placeholder.com/300x200?text=No+Image';">` 
                                : `<div class="w-full h-48 bg-gray-100 rounded-xl mb-4 flex items-center justify-center text-gray-400 text-sm">لا توجد صورة</div>`
                            }
                            <h3 class="text-lg font-bold text-luxury mb-1">${product.name || 'Product Name'}</h3>
                            <p class="text-gray-400 text-xs mb-4 line-clamp-2">${product.description || ''}</p>
                            <div class="flex justify-between items-center mt-auto pt-3 border-t border-rose-50">
                                <span class="text-xl font-bold text-luxury">${product.price || '0'} <small class="text-[10px]">SDG</small></span>
                                <a href="/add-to-cart/${product.id}/" class="accent-bg text-white p-2 rounded-full shadow-md hover:opacity-80 transition flex items-center justify-center">
                                    <i data-lucide="plus" class="w-4 h-4"></i>
                                </a>
                            </div>
                        `;
                        productsGrid.appendChild(card);
                    });
                    if (window.lucide) lucide.createIcons();
                }
            })
            .catch(error => console.error("Search Fetch Error:", error));
    }

    
    if (searchForm) {
        searchForm.addEventListener("submit", function (e) {
            e.preventDefault();
            performSearch();
        });
    }

    if (searchInput) {
        searchInput.addEventListener("keyup", function (e) {
            if (e.key !== "Enter") {
                performSearch();
            }
        });
    }

    // ==========================================
    // 2. ضيفي أي وظائف أو كودات ثانية هنا
    // ==========================================
    // مثال: فتح وإغلاق المنيو، التعامل مع السلة، إلخ...

});