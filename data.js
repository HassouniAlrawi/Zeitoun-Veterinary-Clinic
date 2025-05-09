// بيانات المنتجات البيطرية
const menuItems = [
    {
       
    ///الخدمات/////
    
        id: 1,
        name: "شامبو",
        description: "",
        price: 7500,
        category: "care",
        image: "",
        popular: false
    },
    {
        id: 2,
        name: "ويبس قطط",
        description: "منتج لتنعيم وتلميع فراء القطط، يحافظ على صحة الشعر",
        price: 3500,
        category: "care",
        image: "",
        popular: false
    },
    {
        id: 3,
        name: "حليب قطط",
        description: "حليب مغذي للقطط الصغيرة، سهل الهضم",
        price: 15000,
        category: "care",
        image: "",
        popular: false
    },
    {
        id: 4,
        name: "حليب قطط",
        description: "حليب عالي الجودة مدعم بالفيتامينات للقطط",
        price: 10000,
        category: "care",
        image: "",
        popular: false
    },
    {
        id: 5,
        name: "ألعاب",
        description: "ألعاب متنوعة للحيوانات الأليفة",
        price: 9,
        category: "الألعاب",
        image: "",
        popular: false
    },
    {
        id: 6,
        name: "عصارة كرات شعر",
        description: "علاج فعال لإزالة كرات الشعر من أمعاء القطط",
        price: 9750,
        category: "treatments",
        image: "",
        popular: false
    },
    {
        id: 7,
        name: "عصارة كالسيوم",
        description: "مكمل غذائي غني بالكالسيوم لصحة العظام",
        price: 9750,
        category: "treatments",
        image: "",
        popular: false
    },
    {
        id: 8,
        name: "عصارات فيتامينات",
        description: "مكمل غذائي متعدد الفيتامينات للحيوانات الأليفة",
        price: 9750,
        category: "treatments",
        image: "",
        popular: false
    },
    {
        id: 9,
        name: "معطر فم",
        description: "معطر فم لتحسين رائحة النفس للكلاب والقطط",
        price: 10000,
        category: "care",
        image: "",
        popular: false
    },
    {
        id: 10,
        name: " عناية تدريب كلاب",
        description: "عناية تدريب متخصصة للكلاب",
        price: 10000,
        category: "care",
        image: "",
        popular: false
    },
    {
        id: 11,
        name: "سيريلاك طيور",
        description: "غذاء متكامل للطيور الصغيرة",
        price: 8500,
        category: "الطيور",
        image: "",
        popular: false
    },
    {
        id: 12,
        name: "بخاخ التهاب فموي",
        description: "بخاخ لعلاج التهابات الفم واللثة",
        price: 10000,
        category: "treatments",
        image: "",
        popular: false
    },
    {
        id: 13,
        name: "عصارات فيتامينات",
        description: "مكمل فيتامينات سائل للحيوانات الأليفة",
        price: 10000,
        category: "treatments",
        image: "",
        popular: false
    },
    {
        id: 14,
        name: "دراي شامبو",
        description: "شامبو جاف لتنظيف الحيوانات الأليفة بدون ماء",
        price: 8000,
        category: "care",
        image: "",
        popular: false
    },
    {
        id: 15,
        name: "حليب مع كالسيوم",
        description: "حليب مدعم بالكالسيوم لنمو صحي للعظام",
        price: 13,
        category: "treatments",
        image: "",
        popular: false
    },
    {
        id: 16,
        name: "حليب معادن و فيتامينات",
        description: "حليب غني بالمعادن والفيتامينات الأساسية",
        price: 13000,
        category: "treatments",
        image: "",
        popular: false
    },
    {
        id: 17,
        name: "منظفات عيون",
        description: "محلول لطيف لتنظيف عيون الحيوانات الأليفة",
        price: 5500,
        category: "care",
        image: "",
        popular: false
    },
    {
        id: 18,
        name: "منظفات اذن",
        description: "محلول آمن لتنظيف آذان الحيوانات الأليفة",
        price: 5500,
        category: "care",
        image: "",
        popular: false
    },
    {
        id: 19,
        name: "حليب قطط وكلاب",
        description: "حليب مناسب لكل من القطط والكلاب الصغيرة",
        price: 10250,
        category: "care",
        image: "",
        popular: false
    },
    {
        id: 20,
        name: "قطرة تنظيف اذان",
        description: "قطرات لتنظيف وتطهير آذان الحيوانات الأليفة",
        price: 8500,
        category: "العناية",
        image: "",
        popular: false
    },
    {
        id: 21,
        name: "منظف اذن",
        description: "محلول متخصص لتنظيف آذان الحيوانات الأليفة",
        price: 8500,
        category: "care",
        image: "",
        popular: false
    },
    {
        id: 22,
        name: "بخاخات قمل للقطط و الكلاب",
        description: "بخاخ فعال للقضاء على القمل والبراغيث",
        price: 10000,
        category: "treatments",
        image: "",
        popular: false
    },
    {
        id: 23,
        name: "منظفات قدم",
        description: "منتجات لتنظيف وتطهير أقدام الحيوانات الأليفة",
        price: 7500,
        category: "care",
        image: "",
        popular: false
    },
    {
        id: 24,
        name: "شامبو",
        description: "شامبو لطيف للحيوانات الأليفة",
        price: 7000,
        category: "care",
        image: "",
        popular: false
    },
    {
        id: 25,
        name: "شامبو فطريات",
        description: "شامبو طبي لعلاج الالتهابات الفطرية",
        price: 10250,
        category: "treatments",
        image: "",
        popular: false
    },
    {
        id: 26,
        name: "بودرة قطط",
        description: "بودرة لتنعيم فراء القطط وامتصاص الزيوت",
        price: 8500,
        category: "care",
        image: "",
        popular: false
    },
    {
        id: 27,
        name: "قطرات قمل خارجية",
        description: "قطرات للوقاية من القمل والبراغيث",
        price: 5000,
        category: "care",
        image: "",
        popular: false
    },
    {
        id: 28,
        name: "منظف كبد",
        description: "مكمل غذائي لدعم وظائف الكبد",
        price: 15000,
        category: "treatments",
        image: "",
        popular: false
    },
    {
        id: 29,
        name: "عصارة فطريات",
        description: "علاج سائل للالتهابات الفطرية",
        price: 15000,
        category: "treatments",
        image: "",
        popular: false
    },
    {
        id: 30,
        name: "علاج فطريات مرهم",
        description: "مرهم لعلاج الالتهابات الفطرية الجلدية",
        price: 10000,
        category: "treatments",
        image: "",
        popular: false
    },
    {
        id: 31,
        name: "بخاخ فطريات",
        description: "بخاخ لعلاج الالتهابات الفطرية",
        price: 10000,
        category: "treatments",
        image: "",
        popular: false
    },
    {
        id: 32,
        name: "بودرة شعر لحماية القطط",
        description: "بودرة واقية لشعر القطط",
        price: 8500,
        category: "care",
        image: "",
        popular: false
    },
    {
        id: 33,
        name: "قطرات عثة الاذن و التهاباتها",
        description: "قطرات لعلاج عث الأذن والالتهابات",
        price: 15000,
        category: "treatments",
        image: "",
        popular: false
    },
    {
        id: 34,
        name: "بخاخ جروح متميز",
        description: "بخاخ لعلاج الجروح السطحية",
        price: 10000,
        category: "treatments",
        image: "",
        popular: false
    },
    {
        id: 35,
        name: "شراب كالسيوم",
        description: "شراب غني بالكالسيوم لدعم صحة العظام",
        price: 15000,
        category: "treatments",
        image: "",
        popular: false
    }
];