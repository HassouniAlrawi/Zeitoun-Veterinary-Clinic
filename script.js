// ==================== متغيرات DOM ====================
const menuContainer = document.getElementById('menu-container');
const cartItemsContainer = document.getElementById('cart-items');
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const cartCount = document.querySelector('.cart-count');
const totalPriceElement = document.querySelector('.total-price');
const categoryFilters = document.querySelectorAll('.category-filter');
const cartIcon = document.querySelector('.top-nav .cart-icon');
const floatingCart = document.querySelector('.floating-cart');
const closeCartBtn = document.querySelector('.close-cart');
const checkoutBtn = document.querySelector('.checkout-btn');
const navCartBtn = document.querySelector('.nav-cart-btn');


// ==================== إدارة السلة ====================
let cart = JSON.parse(localStorage.getItem('cart')) || [];

function updateCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
    
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    cartCount.textContent = totalItems;
    document.querySelector('.cart-badge').textContent = totalItems;
    
    renderCartItems();
    
    const totalPrice = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    totalPriceElement.textContent = `${totalPrice} د.ع`;
}

function renderCartItems() {
    cartItemsContainer.innerHTML = '';
    
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p class="empty-cart">السلة فارغة</p>';
        return;
    }
    
    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
            <div class="cart-item-image">
                <img src="${item.image}" alt="${item.name}">
            </div>
            <div class="cart-item-details">
                <h4 class="cart-item-title">${item.name}</h4>
                <div class="cart-item-price">${item.price} د.ع</div>
                <div class="cart-item-actions">
                    <button class="quantity-btn decrease" data-id="${item.id}">-</button>
                    <span class="quantity">${item.quantity}</span>
                    <button class="quantity-btn increase" data-id="${item.id}">+</button>
                    <span class="remove-item" data-id="${item.id}"><i class="fas fa-trash"></i></span>
                </div>
            </div>
        `;
        cartItemsContainer.appendChild(cartItem);
    });
    
    document.querySelectorAll('.decrease').forEach(btn => {
        btn.addEventListener('click', decreaseQuantity);
    });
    
    document.querySelectorAll('.increase').forEach(btn => {
        btn.addEventListener('click', increaseQuantity);
    });
    
    document.querySelectorAll('.remove-item').forEach(btn => {
        btn.addEventListener('click', removeItem);
    });
}

function decreaseQuantity(e) {
    const itemId = parseInt(e.currentTarget.dataset.id);
    const item = cart.find(item => item.id === itemId);
    
    if (item.quantity > 1) {
        item.quantity -= 1;
    } else {
        cart = cart.filter(item => item.id !== itemId);
    }
    
    updateCart();
}

function increaseQuantity(e) {
    const itemId = parseInt(e.currentTarget.dataset.id);
    const item = cart.find(item => item.id === itemId);
    
    item.quantity += 1;
    updateCart();
}

function removeItem(e) {
    const itemId = parseInt(e.currentTarget.dataset.id);
    cart = cart.filter(item => item.id !== itemId);
    updateCart();
}

function toggleCart(e) {
    if (e) e.preventDefault();
    
    floatingCart.classList.toggle('active');
    document.body.classList.toggle('no-scroll');
    
    const existingOverlay = document.querySelector('.overlay');
    if (floatingCart.classList.contains('active')) {
        if (!existingOverlay) {
            const overlay = document.createElement('div');
            overlay.classList.add('overlay');
            overlay.addEventListener('click', toggleCart);
            document.body.appendChild(overlay);
        }
    } else {
        existingOverlay?.remove();
    }
}


function checkout() {
    if (cart.length === 0) {
        alert('السلة فارغة، أضف بعض العناصر أولاً');
        return;
    }
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const orderDetails = cart.map(item => 
        `${item.name} (${item.quantity}) - ${item.price * item.quantity} د.ع`
    ).join('\n');
    
    alert(`تفاصيل الطلب:\n\n${orderDetails}\n\nالمجموع: ${total} د.ع\n\nشكراً لطلبك!`);
    
    cart = [];
    updateCart();
    toggleCart();
}

// ==================== إدارة المنتجات ====================
function displayMenuItems(items) {
    menuContainer.innerHTML = '';
    
    items.forEach(item => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        productCard.innerHTML = `
            ${item.popular ? '<div class="product-badge">الأكثر طلباً</div>' : ''}
            <div class="product-image">
                <img src="${item.image}" alt="${item.name}">
            </div>
            <div class="product-info">
                <h3 class="product-title">${item.name}</h3>
                <p class="product-description">${item.description}</p>
                <div class="product-footer">
                    <span class="product-price">${item.price} د.ع</span>
                    <button class="add-to-cart" data-id="${item.id}">
                        <i class="fas fa-plus"></i> أضف للسلة
                    </button>
                </div>
            </div>
        `;
        menuContainer.appendChild(productCard);
    });
    
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', addToCart);
    });
}

function addToCart(e) {
    const itemId = parseInt(e.currentTarget.dataset.id);
    const item = menuItems.find(item => item.id === itemId);
    
    const existingItem = cart.find(cartItem => cartItem.id === itemId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...item,
            quantity: 1
        });
    }
    
    updateCart();
    showCartNotification(item.name);
}

function showCartNotification(itemName) {
    const notification = document.createElement('div');
    notification.classList.add('notification');
    notification.innerHTML = `
        <i class="fas fa-check-circle"></i>
        <span>تمت إضافة "${itemName}" إلى السلة</span>
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.classList.add('show');
    }, 10);
    
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

function filterItems(category) {
    if (category === 'all') {
        displayMenuItems(menuItems);
        return;
    }
    
    const filteredItems = menuItems.filter(item => item.category === category);
    displayMenuItems(filteredItems);
}

function searchItems() {
    const searchTerm = searchInput.value.toLowerCase().trim();
    
    if (searchTerm === '') {
        displayMenuItems(menuItems);
        return;
    }
    
    const searchedItems = menuItems.filter(item => 
        item.name.toLowerCase().includes(searchTerm) || 
        item.description.toLowerCase().includes(searchTerm)
    );
    
    displayMenuItems(searchedItems);
}

// ==================== إعداد الشريط السفلي ====================
function setupBottomNav() {
    const expandableItem = document.querySelector('.nav-expand-btn');
    const expandedMenu = document.querySelector('.expanded-menu');
    
    if (expandableItem && expandedMenu) {
        expandableItem.addEventListener('click', function() {
            expandedMenu.classList.toggle('show');
        });
        
        document.addEventListener('click', function(e) {
            if (!e.target.closest('.nav-expand-btn') && !e.target.closest('.expanded-menu')) {
                expandedMenu.classList.remove('show');
            }
        });
    }
}

// ==================== التهيئة الرئيسية ====================
function init() {
    displayMenuItems(menuItems);
    updateCart();
    setupBottomNav();
    
    // أحداث التصنيفات
    categoryFilters.forEach(filter => {
        filter.addEventListener('click', () => {
            categoryFilters.forEach(f => f.classList.remove('active'));
            filter.classList.add('active');
            filterItems(filter.dataset.category);
        });
    });
    
    // أحداث البحث
    searchBtn.addEventListener('click', searchItems);
    searchInput.addEventListener('keyup', (e) => {
        if (e.key === 'Enter') searchItems();
    });
    
    // أحداث السلة
    cartIcon.addEventListener('click', toggleCart);
    closeCartBtn.addEventListener('click', toggleCart);
    checkoutBtn.addEventListener('click', checkout);
    
    if (navCartBtn) {
        navCartBtn.addEventListener('click', function(e) {
            e.preventDefault();
            toggleCart(e);
        });
    }
}

// بدء التطبيق
document.addEventListener('DOMContentLoaded', init);

