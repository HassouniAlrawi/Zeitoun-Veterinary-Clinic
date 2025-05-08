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