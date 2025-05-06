// بيانات الأقسام والخدمات (يمكن استبدالها بقاعدة بيانات فعلية)
let departments = [
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
const departmentForm = document.getElementById('department-form');
const serviceForm = document.getElementById('service-form');
const departmentsList = document.getElementById('departments-list');
const servicesList = document.getElementById('services-list');
const serviceDepartmentSelect = document.getElementById('service-department');
const alertMessage = document.getElementById('alert-message');

// تهيئة التطبيق
function init() {
    // تعبئة قائمة الأقسام في نموذج الخدمة
    populateDepartmentSelect();
    
    // عرض الأقسام والخدمات
    renderDepartments();
    renderServices();
    
    // أحداث النماذج
    departmentForm.addEventListener('submit', handleDepartmentSubmit);
    serviceForm.addEventListener('submit', handleServiceSubmit);
    
    // أحداث التبويبات
    document.querySelectorAll('[data-toggle="tab"]').forEach(tab => {
        tab.addEventListener('click', switchTab);
    });
}

// تعبئة قائمة الأقسام في نموذج الخدمة
function populateDepartmentSelect() {
    serviceDepartmentSelect.innerHTML = '<option value="">اختر القسم</option>';
    
    departments.forEach(dept => {
        const option = document.createElement('option');
        option.value = dept.id;
        option.textContent = dept.name;
        serviceDepartmentSelect.appendChild(option);
    });
}

// عرض الأقسام في الجدول
function renderDepartments() {
    departmentsList.innerHTML = '';
    
    if (departments.length === 0) {
        departmentsList.innerHTML = '<tr><td colspan="5" style="text-align:center">لا توجد أقسام مضافة</td></tr>';
        return;
    }
    
    departments.forEach((dept, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${dept.name}</td>
            <td><i class="${dept.icon}"></i></td>
            <td>${dept.description}</td>
            <td class="action-btns">
                <button class="btn btn-primary edit-dept" data-id="${dept.id}">
                    <i class="fas fa-edit"></i> تعديل
                </button>
                <button class="btn btn-danger delete-dept" data-id="${dept.id}">
                    <i class="fas fa-trash"></i> حذف
                </button>
            </td>
        `;
        
        departmentsList.appendChild(row);
    });
    
    // إضافة أحداث لأزرار التعديل والحذف
    document.querySelectorAll('.edit-dept').forEach(btn => {
        btn.addEventListener('click', editDepartment);
    });
    
    document.querySelectorAll('.delete-dept').forEach(btn => {
        btn.addEventListener('click', deleteDepartment);
    });
}

// عرض الخدمات في الجدول
function renderServices() {
    servicesList.innerHTML = '';
    
    if (services.length === 0) {
        servicesList.innerHTML = '<tr><td colspan="7" style="text-align:center">لا توجد خدمات مضافة</td></tr>';
        return;
    }
    
    services.forEach((service, index) => {
        const dept = departments.find(d => d.id === service.departmentId);
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${service.name}</td>
            <td>${dept ? dept.name : 'غير معروف'}</td>
            <td>${service.description}</td>
            <td>${service.price} د.ع</td>
            <td>${service.popular ? '<i class="fas fa-check text-success"></i>' : '<i class="fas fa-times text-danger"></i>'}</td>
            <td class="action-btns">
                <button class="btn btn-primary edit-service" data-id="${service.id}">
                    <i class="fas fa-edit"></i> تعديل
                </button>
                <button class="btn btn-danger delete-service" data-id="${service.id}">
                    <i class="fas fa-trash"></i> حذف
                </button>
            </td>
        `;
        
        servicesList.appendChild(row);
    });
    
    // إضافة أحداث لأزرار التعديل والحذف
    document.querySelectorAll('.edit-service').forEach(btn => {
        btn.addEventListener('click', editService);
    });
    
    document.querySelectorAll('.delete-service').forEach(btn => {
        btn.addEventListener('click', deleteService);
    });
}

// إضافة قسم جديد
function handleDepartmentSubmit(e) {
    e.preventDefault();
    
    const name = document.getElementById('department-name').value;
    const icon = document.getElementById('department-icon').value;
    const description = document.getElementById('department-description').value;
    
    const newDept = {
        id: departments.length > 0 ? Math.max(...departments.map(d => d.id)) + 1 : 1,
        name,
        icon,
        description
    };
    
    departments.push(newDept);
    renderDepartments();
    populateDepartmentSelect();
    
    // إعادة تعيين النموذج
    departmentForm.reset();
    
    // عرض رسالة نجاح
    showAlert('تم إضافة القسم بنجاح', 'success');
}

// إضافة خدمة جديدة
function handleServiceSubmit(e) {
    e.preventDefault();
    
    const departmentId = parseInt(document.getElementById('service-department').value);
    const name = document.getElementById('service-name').value;
    const description = document.getElementById('service-description').value;
    const price = parseFloat(document.getElementById('service-price').value);
    const image = document.getElementById('service-image').value;
    const popular = document.getElementById('service-popular').checked;
    
    const newService = {
        id: services.length > 0 ? Math.max(...services.map(s => s.id)) + 1 : 1,
        departmentId,
        name,
        description,
        price,
        image,
        popular
    };
    
    services.push(newService);
    renderServices();
    
    // إعادة تعيين النموذج
    serviceForm.reset();
    
    // عرض رسالة نجاح
    showAlert('تم إضافة الخدمة بنجاح', 'success');
}

// تعديل قسم
function editDepartment(e) {
    const deptId = parseInt(e.currentTarget.dataset.id);
    const dept = departments.find(d => d.id === deptId);
    
    if (!dept) return;
    
    // تعبئة النموذج ببيانات القسم
    document.getElementById('department-name').value = dept.name;
    document.getElementById('department-icon').value = dept.icon;
    document.getElementById('department-description').value = dept.description;
    
    // تغيير نص زر الحفظ
    const submitBtn = departmentForm.querySelector('button[type="submit"]');
    submitBtn.innerHTML = '<i class="fas fa-save"></i> تحديث القسم';
    submitBtn.dataset.id = dept.id;
    
    // إزالة معالج الحدث القديم وإضافة معالج جديد للتحديث
    departmentForm.removeEventListener('submit', handleDepartmentSubmit);
    departmentForm.addEventListener('submit', updateDepartment);
    
    // التمرير إلى قسم الإضافة
    document.getElementById('add-department').scrollIntoView({ behavior: 'smooth' });
    
    // عرض رسالة
    showAlert('يمكنك الآن تعديل بيانات القسم', 'info');
}

// تحديث قسم
function updateDepartment(e) {
    e.preventDefault();
    
    const deptId = parseInt(e.target.querySelector('button[type="submit"]').dataset.id);
    const name = document.getElementById('department-name').value;
    const icon = document.getElementById('department-icon').value;
    const description = document.getElementById('department-description').value;
    
    const deptIndex = departments.findIndex(d => d.id === deptId);
    
    if (deptIndex !== -1) {
        departments[deptIndex] = {
            id: deptId,
            name,
            icon,
            description
        };
        
        renderDepartments();
        populateDepartmentSelect();
        departmentForm.reset();
        
        // إعادة زر الحفظ إلى حالته الأصلية
        const submitBtn = departmentForm.querySelector('button[type="submit"]');
        submitBtn.innerHTML = '<i class="fas fa-save"></i> حفظ القسم';
        delete submitBtn.dataset.id;
        
        // إعادة معالج الحدث الأصلي
        departmentForm.removeEventListener('submit', updateDepartment);
        departmentForm.addEventListener('submit', handleDepartmentSubmit);
        
        showAlert('تم تحديث القسم بنجاح', 'success');
    }
}

// حذف قسم
function deleteDepartment(e) {
    if (!confirm('هل أنت متأكد من حذف هذا القسم؟ سيتم حذف جميع الخدمات التابعة له أيضاً.')) {
        return;
    }
    
    const deptId = parseInt(e.currentTarget.dataset.id);
    
    // حذف الخدمات التابعة للقسم أولاً
    services = services.filter(s => s.departmentId !== deptId);
    
    // ثم حذف القسم
    departments = departments.filter(d => d.id !== deptId);
    
    renderDepartments();
    renderServices();
    populateDepartmentSelect();
    
    showAlert('تم حذف القسم وخدماته بنجاح', 'success');
}

// تعديل خدمة
function editService(e) {
    const serviceId = parseInt(e.currentTarget.dataset.id);
    const service = services.find(s => s.id === serviceId);
    
    if (!service) return;
    
    // تعبئة النموذج ببيانات الخدمة
    document.getElementById('service-department').value = service.departmentId;
    document.getElementById('service-name').value = service.name;
    document.getElementById('service-description').value = service.description;
    document.getElementById('service-price').value = service.price;
    document.getElementById('service-image').value = service.image || '';
    document.getElementById('service-popular').checked = service.popular;
    
    // تغيير نص زر الحفظ
    const submitBtn = serviceForm.querySelector('button[type="submit"]');
    submitBtn.innerHTML = '<i class="fas fa-save"></i> تحديث الخدمة';
    submitBtn.dataset.id = service.id;
    
    // إزالة معالج الحدث القديم وإضافة معالج جديد للتحديث
    serviceForm.removeEventListener('submit', handleServiceSubmit);
    serviceForm.addEventListener('submit', updateService);
    
    // التمرير إلى قسم الإضافة
    document.getElementById('add-service').scrollIntoView({ behavior: 'smooth' });
    
    // عرض رسالة
    showAlert('يمكنك الآن تعديل بيانات الخدمة', 'info');
}

// تحديث خدمة
function updateService(e) {
    e.preventDefault();
    
    const serviceId = parseInt(e.target.querySelector('button[type="submit"]').dataset.id);
    const departmentId = parseInt(document.getElementById('service-department').value);
    const name = document.getElementById('service-name').value;
    const description = document.getElementById('service-description').value;
    const price = parseFloat(document.getElementById('service-price').value);
    const image = document.getElementById('service-image').value;
    const popular = document.getElementById('service-popular').checked;
    
    const serviceIndex = services.findIndex(s => s.id === serviceId);
    
    if (serviceIndex !== -1) {
        services[serviceIndex] = {
            id: serviceId,
            departmentId,
            name,
            description,
            price,
            image,
            popular
        };
        
        renderServices();
        serviceForm.reset();
        
        // إعادة زر الحفظ إلى حالته الأصلية
        const submitBtn = serviceForm.querySelector('button[type="submit"]');
        submitBtn.innerHTML = '<i class="fas fa-save"></i> حفظ الخدمة';
        delete submitBtn.dataset.id;
        
        // إعادة معالج الحدث الأصلي
        serviceForm.removeEventListener('submit', updateService);
        serviceForm.addEventListener('submit', handleServiceSubmit);
        
        showAlert('تم تحديث الخدمة بنجاح', 'success');
    }
}

// حذف خدمة
function deleteService(e) {
    if (!confirm('هل أنت متأكد من حذف هذه الخدمة؟')) {
        return;
    }
    
    const serviceId = parseInt(e.currentTarget.dataset.id);
    services = services.filter(s => s.id !== serviceId);
    renderServices();
    
    showAlert('تم حذف الخدمة بنجاح', 'success');
}

// تبديل التبويبات
function switchTab(e) {
    e.preventDefault();
    
    // إزالة النشاط من جميع التبويبات
    document.querySelectorAll('[data-toggle="tab"]').forEach(tab => {
        tab.parentElement.classList.remove('active');
    });
    
    // إضافة النشاط للتبويب المحدد
    e.currentTarget.parentElement.classList.add('active');
    
    // إخفاء جميع محتويات التبويبات
    document.querySelectorAll('.tab-pane').forEach(pane => {
        pane.classList.remove('active');
    });
    
    // إظهار محتوى التبويب المحدد
    const targetPane = document.querySelector(e.currentTarget.getAttribute('href'));
    targetPane.classList.add('active');
}

// عرض رسالة تنبيه
function showAlert(message, type) {
    alertMessage.innerHTML = `
        <div class="alert alert-${type}">
            ${message}
        </div>
    `;
    alertMessage.style.display = 'block';
    
    // إخفاء الرسالة بعد 5 ثواني
    setTimeout(() => {
        alertMessage.style.display = 'none';
    }, 5000);
}

// بدء التطبيق
document.addEventListener('DOMContentLoaded', init);