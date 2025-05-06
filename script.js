// بيانات المنتجات البيطرية
const menuItems = [
    {
        id: 1,
        name: "علاج الديدان للقطط",
        description: "علاج فعال للديدان المعوية للقطط، عبوة تحتوي على 4 أقراص",
        price: 35,
        category: "treatments",
        image: "https://petite-store.com/cdn/shop/articles/10.png?crop=center&height=810&v=1721122150&width=1080",
        popular: true
    },
    {
        id: 2,
        name: "طوق برغوث للكلاب",
        description: "طوق وقائي ضد البراغيث والقراد للكلاب، فعال لمدة 8 أشهر",
        price: 45,
        category: "prevention",
        image: "https://images.unsplash.com/photo-1582456891955-9d9a7af45b9e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        popular: false
    },
    {
        id: 3,
        name: "سرير قطط مريح",
        description: "سرير ناعم ومريح للقطط مع وسادة قابلة للإزالة والغسل",
        price: 120,
        category: "beds",
        image: "https://images.unsplash.com/photo-1594149929911-78975a43d4f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        popular: true
    },
    {
        id: 4,
        name: "رمل قطط عالي الامتصاص",
        description: "رمل عضوي عالي الامتصاص للقطط، خالي من الغبار والعطور",
        price: 25,
        category: "sand",
        image: "https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        popular: false
    },
    {
        id: 5,
        name: "دراي فوود للكلاب الصغيرة",
        description: "طعام جاف متكامل للجراء، 5 كجم، غني بالبروتين والفيتامينات",
        price: 180,
        category: "dry_food",
        image: "https://images.unsplash.com/photo-1589927986089-35812388d1f4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        popular: true
    },
    {
        id: 6,
        name: "علبة طعام للقطط",
        description: "علبة طعام معلبة للقطط بنكهة السمك، 85 جرام",
        price: 15,
        category: "canned_food",
        image: "https://images.unsplash.com/photo-1571566882372-1598d03b449c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        popular: false
    },
    {
        id: 7,
        name: "شامبو للكلاب الحساسة",
        description: "شامبو لطيف للكلاب ذات البشرة الحساسة، 500 مل",
        price: 55,
        category: "care",
        image: "https://images.unsplash.com/photo-1588943211346-0908a1fb0b01?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        popular: true
    },
    {
        id: 8,
        name: "لعبة عظم مطاطي",
        description: "لعبة عظم مطاطي متينة للكلاب، مقاومة للمضغ",
        price: 30,
        category: "accessories",
        image: "https://images.unsplash.com/photo-1551189014-10acb1e1b442?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        popular: false
    },
    {
        id: 9,
        name: "حقيبة نقل للقطط",
        description: "حقيبة نقل للقطط ذات تهوية جيدة، مع فتحة علوية وجانبية",
        price: 150,
        category: "beds",
        image: "https://images.unsplash.com/photo-1591769225440-811ad7d6eab2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        popular: true
    },
    {
        id: 10,
        name: "فرشاة تنظيف الأسنان",
        description: "فرشاة أسنان للكلاب مع معجون أسنان بنكهة الدجاج",
        price: 40,
        category: "care",
        image: "https://images.unsplash.com/photo-1582456891955-9d9a7af45b9e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        popular: false
    }
];

// عناصر DOM
const menuContainer = document.getElementById('menu-container');
const cartItemsContainer = document.getElementById('cart-items');
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const cartCount = document.querySelector('.cart-count');
const totalPriceElement = document.querySelector('.total-price');
const categoryFilters = document.querySelectorAll('.category-filter');
const cartIcon = document.querySelector('.cart-icon');
const floatingCart = document.querySelector('.floating-cart');
const closeCartBtn = document.querySelector('.close-cart');
const checkoutBtn = document.querySelector('.checkout-btn');

// سلة التسوق
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// عرض المنتجات
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
    
    // إضافة أحداث النقر لأزرار الإضافة للسلة
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', addToCart);
    });
}

// تصفية العناصر حسب التصنيف
function filterItems(category) {
    if (category === 'all') {
        displayMenuItems(menuItems);
        return;
    }
    
    const filteredItems = menuItems.filter(item => item.category === category);
    displayMenuItems(filteredItems);
}

// البحث عن العناصر
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

// إضافة عنصر للسلة
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

// عرض إشعار عند الإضافة للسلة
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

// تحديث السلة
function updateCart() {
    // حفظ السلة في localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
    
    // تحديث العداد
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    cartCount.textContent = totalItems;
    
    // عرض عناصر السلة
    renderCartItems();
    
    // حساب المجموع الكلي
    const totalPrice = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    totalPriceElement.textContent = `${totalPrice} د.ع`;
}

// عرض عناصر السلة
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
    
    // إضافة الأحداث لأزرار الكمية والإزالة
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

// تقليل الكمية
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

// زيادة الكمية
function increaseQuantity(e) {
    const itemId = parseInt(e.currentTarget.dataset.id);
    const item = cart.find(item => item.id === itemId);
    
    item.quantity += 1;
    updateCart();
}

// إزالة العنصر
function removeItem(e) {
    const itemId = parseInt(e.currentTarget.dataset.id);
    cart = cart.filter(item => item.id !== itemId);
    updateCart();
}

// فتح/إغلاق السلة
function toggleCart() {
    floatingCart.classList.toggle('active');
    document.body.classList.toggle('no-scroll');
    
    // إنشاء أو إزالة الطبقة الخلفية
    if (floatingCart.classList.contains('active')) {
        const overlay = document.createElement('div');
        overlay.classList.add('overlay', 'active');
        overlay.addEventListener('click', toggleCart);
        document.body.appendChild(overlay);
    } else {
        document.querySelector('.overlay')?.remove();
    }
}

// إتمام الطلب
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

// تهيئة التطبيق
function init() {
    displayMenuItems(menuItems);
    updateCart();
    
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
}

// بدء التطبيق
document.addEventListener('DOMContentLoaded', init);