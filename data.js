// بيانات المنتجات البيطرية
const menuItems = [
    {
    ///الخدمات/////
        id: 1,
        name: "شامبو",
        description: "",
        price: 7500,
        category: "care",
        image: "IMG_20250509_225801_548.jpg",
        popular: false
    },
    {
        id: 2,
        name: "ويبس قطط",
        description: "منتج لتنعيم وتلميع فراء القطط، يحافظ على صحة الشعر",
        price: 3500,
        category: "care",
        image: "IMG_20250509_230034_436.jpg",
        popular: false
    },
    {
        id: 3,
        name: "حليب قطط",
        description: "حليب مغذي للقطط الصغيرة، سهل الهضم",
        price: 15000,
        category: "care",
        image: "IMG_20250509_230036_457.jpg",
        popular: false
    },
    {
        id: 4,
        name: "حليب قطط",
        description: "حليب عالي الجودة مدعم بالفيتامينات للقطط",
        price: 10000,
        category: "care",
        image: "IMG_20250509_230038_361.jpg",
        popular: false
    },
    {
        id: 5,
        name: "ألعاب",
        description: "ألعاب متنوعة للحيوانات الأليفة",
        price: 9000,
        category: "الألعاب",
        image: "IMG_20250509_230449_954.jpg",
        popular: false
    },
    {
        id: 6,
        name: "عصارة كرات شعر",
        description: "علاج فعال لإزالة كرات الشعر من أمعاء القطط",
        price: 9750,
        category: "treatments",
        image: "IMG_20250509_230452_930.jpg",
        popular: false
    },
    {
        id: 7,
        name: "عصارة كالسيوم",
        description: "مكمل غذائي غني بالكالسيوم لصحة العظام",
        price: 9750,
        category: "treatments",
        image: "IMG_20250509_230454_537.jpg",
        popular: false
    },
    {
        id: 8,
        name: "عصارات فيتامينات",
        description: "مكمل غذائي متعدد الفيتامينات للحيوانات الأليفة",
        price: 9750,
        category: "treatments",
        image: "IMG_20250509_230936_274.jpg",
        popular: false
    },
    {
        id: 9,
        name: "معطر فم",
        description: "معطر فم لتحسين رائحة النفس للكلاب والقطط",
        price: 10000,
        category: "care",
        image: "IMG_20250509_230938_389.jpg",
        popular: false
    },
    {
        id: 10,
        name: " عناية تدريب كلاب",
        description: "عناية تدريب متخصصة للكلاب",
        price: 10000,
        category: "care",
        image: "IMG_20250509_230940_846.jpg",
        popular: false
    },
    {
        id: 11,
        name: "سيريلاك طيور",
        description: "غذاء متكامل للطيور الصغيرة",
        price: 8500,
        category: "الطيور",
        image: "IMG_20250509_231245_707.jpg",
        popular: false
    },
    {
        id: 12,
        name: "بخاخ التهاب فموي",
        description: "بخاخ لعلاج التهابات الفم واللثة",
        price: 10000,
        category: "treatments",
        image: "IMG_20250509_231247_705.jpg",
        popular: false
    },
    {
        id: 13,
        name: "عصارات فيتامينات",
        description: "مكمل فيتامينات سائل للحيوانات الأليفة",
        price: 10000,
        category: "treatments",
        image: "IMG_20250509_231251_371.jpg",
        popular: false
    },
    {
        id: 14,
        name: "دراي شامبو",
        description: "شامبو جاف لتنظيف الحيوانات الأليفة بدون ماء",
        price: 8000,
        category: "care",
        image: "IMG_20250510_095959_497.jpg",
        popular: false
    },
    {
        id: 15,
        name: "حليب مع كالسيوم",
        description: "حليب مدعم بالكالسيوم لنمو صحي للعظام",
        price: 13000,
        category: "treatments",
        image: "IMG_20250510_100001_302.jpg",
        popular: false
    },
    {
        id: 16,
        name: "حليب معادن و فيتامينات",
        description: "حليب غني بالمعادن والفيتامينات الأساسية",
        price: 13000,
        category: "treatments",
        image: "IMG_20250510_100003_790.jpg",
        popular: false
    },
    {
        id: 17,
        name: "منظفات عيون",
        description: "محلول لطيف لتنظيف عيون الحيوانات الأليفة",
        price: 5500,
        category: "care",
        image: "IMG_20250510_100004_961.jpg",
        popular: false
    },
    {
        id: 18,
        name: "منظفات اذن",
        description: "محلول آمن لتنظيف آذان الحيوانات الأليفة",
        price: 5500,
        category: "care",
        image: "IMG_20250510_100006_328.jpg",
        popular: false
    },
    {
        id: 19,
        name: "حليب قطط وكلاب",
        description: "حليب مناسب لكل من القطط والكلاب الصغيرة",
        price: 10250,
        category: "care",
        image: "IMG_20250510_100008_358.jpg",
        popular: false
    },
    {
        id: 20,
        name: "قطرة تنظيف اذان",
        description: "قطرات لتنظيف وتطهير آذان الحيوانات الأليفة",
        price: 8500,
        category: "العناية",
        image: "IMG_20250510_100010_013.jpg",
        popular: false
    },
    {
        id: 21,
        name: "منظف اذن",
        description: "محلول متخصص لتنظيف آذان الحيوانات الأليفة",
        price: 8500,
        category: "care",
        image: "IMG_20250510_100012_065.jpg",
        popular: false
    },
    {
        id: 22,
        name: "بخاخات قمل للقطط و الكلاب",
        description: "بخاخ فعال للقضاء على القمل والبراغيث",
        price: 10000,
        category: "treatments",
        image: "IMG_20250510_100013_569.jpg",
        popular: false
    },
    {
        id: 23,
        name: "منظفات قدم",
        description: "منتجات لتنظيف وتطهير أقدام الحيوانات الأليفة",
        price: 7500,
        category: "care",
        image: "IMG_20250510_100015_551.jpg",
        popular: false
    },
    {
        id: 24,
        name: "شامبو",
        description: "شامبو لطيف للحيوانات الأليفة",
        price: 7000,
        category: "care",
        image: "IMG_20250510_100016_847.jpg",
        popular: false
    },
    {
        id: 25,
        name: "شامبو فطريات",
        description: "شامبو طبي لعلاج الالتهابات الفطرية",
        price: 10250,
        category: "treatments",
        image: "IMG_20250510_100019_941.jpg",
        popular: false
    },
    {
        id: 26,
        name: "بودرة قطط",
        description: "بودرة لتنعيم فراء القطط وامتصاص الزيوت",
        price: 8500,
        category: "care",
        image: "IMG_20250510_100022_054.jpg",
        popular: false
    },
    {
        id: 27,
        name: "قطرات قمل خارجية",
        description: "قطرات للوقاية من القمل والبراغيث",
        price: 5000,
        category: "care",
        image: "IMG_20250510_100023_470.jpg",
        popular: false
    },
    {
        id: 28,
        name: "منظف كبد",
        description: "مكمل غذائي لدعم وظائف الكبد",
        price: 15000,
        category: "treatments",
        image: "IMG_20250510_100024_927.jpg",
        popular: false
    },
    {
        id: 29,
        name: "عصارة فطريات",
        description: "علاج سائل للالتهابات الفطرية",
        price: 15000,
        category: "treatments",
        image: "IMG_20250510_100028_080.jpg",
        popular: false
    },
    {
        id: 30,
        name: "علاج فطريات مرهم",
        description: "مرهم لعلاج الالتهابات الفطرية الجلدية",
        price: 10000,
        category: "treatments",
        image: "IMG_20250510_102212_809.jpg",
        popular: false
    },
    {
        id: 31,
        name: "بخاخ فطريات",
        description: "بخاخ لعلاج الالتهابات الفطرية",
        price: 10000,
        category: "treatments",
        image: "IMG_20250510_101727_782.jpg",
        popular: false
    },
    {
        id: 32,
        name: "بودرة شعر لحماية القطط",
        description: "بودرة واقية لشعر القطط",
        price: 8500,
        category: "care",
        image: "IMG_20250510_101730_578.jpg",
        popular: false
    },
    {
        id: 33,
        name: "قطرات عثة الاذن و التهاباتها",
        description: "قطرات لعلاج عث الأذن والالتهابات",
        price: 15000,
        category: "treatments",
        image: "IMG_20250510_101734_529.jpg",
        popular: false
    },
    {
        id: 34,
        name: "بخاخ جروح متميز",
        description: "بخاخ لعلاج الجروح السطحية",
        price: 10000,
        category: "treatments",
        image: "IMG_20250510_101736_154.jpg",
        popular: false
    },
    {
        id: 35,
        name: "شراب كالسيوم",
        description: "شراب غني بالكالسيوم لدعم صحة العظام",
        price: 15000,
        category: "treatments",
        image: "IMG_20250510_101739_211.jpg",
        popular: false
    },  
    {
        id: 36,
        name: "علاج التهاب عيون ",
        description: "",
        price: 15000,
        category: "treatments",
        image: "IMG_20250510_101732_085.jpg",
        popular: false
    }, 
    {
        id: 37,
        name: "علاج منع تساقط الشعر ",
        description: "",
        price: 11000,
        category: "treatments",
        image: "IMG_20250510_101737_664.jpg",
        popular: false
    },
    {
        id: 54,
        name: "مغلفات ",
        description: "مغلفات طعام للحيوانات الأليفة",
        price: 1250,
        category: "food",
        image: "IMG_20250511_140859_410.jpg",
        popular: false
    },

   
    {
        id: 38,
        name: "قلادة رقبة للقطط",
        description: "قلادة مريحة وآمنة للقطط",
        price: 1750,
        category: "accessories",
        image: "IMG_20250511_140931_659.jpg",
        popular: false
    },
    {
        id: 39,
        name: "بوكس نقل حديد",
        description: "صندوق نقل معدني للحيوانات الأليفة",
        price: 14500,
        category: "beds",
        image: "IMG_20250511_140919_428.jpg",
        popular: false
    },

    // قسم الرمل
    {
        id: 40,
        name: "رمل 5 لتر",
        description: "رمل للقطط سعة 5 لتر",
        price: 4750,
        category: "sand",
        image: "IMG_20250511_140909_221.jpg",
        popular: false
    },
    {
        id: 41,
        name: "رمل 10 لتر",
        description: "رمل للقطط سعة 10 لتر",
        price: 9500,
        category: "sand",
        image: "IMG_20250511_140914_563.jpg",
        popular: false
    },
    {
        id: 42,
        name: "رمل قطط لتر بوكس",
        description: "رمل خاص بصندوق فضلات القطط",
        price: 8500,
        category: "sand",
        image: "IMG_20250511_140927_453.jpg",
        popular: false
    },

    // قسم الدراي فود
    {
        id: 43,
        name: "دراي فود درايفوود",
        description: "طعام جاف للقطط من درايفوود",
        price: 15000,
        category: "dry_food",
        image: "IMG_20250511_140935_819.jpg",
        popular: false
    },
    {
        id: 44,
        name: "رويال كانين درايفوود",
        description: "طعام طبي للكلاب من رويال كانين",
        price: 35000,
        category: "dry_food",
        image: "IMG_20250511_140942_708.jpg",
        popular: false
    },
    {
        id: 45,
        name: "رفلكس كيلوين",
        description: "دراي فود عالي الجودة للقطط",
        price: 10000,
        category: "dry_food",
        image: "IMG_20250511_140946_883.jpg",
        popular: false
    },
    {
        id: 46,
        name: "مولي كيلوين",
        description: "دراي فود للقطط البالغة",
        price: 15000,
        category: "dry_food",
        image: "IMG_20250511_140950_312.jpg",
        popular: false
    },

    // قسم المعلبات والمغلفات
    {
        id: 47,
        name: "معلبات (3 قطع)",
        description: "وجبات معلبة للقطط",
        price: 5000,
        category: "canned_food",
        image: "IMG_20250511_140954_155.jpg",
        popular: false
    },
    {
        id: 48,
        name: "مغلفات وايسكاس",
        description: "أكياس طعام للقطط",
        price: 14000,
        category: "canned_food",
        image: "IMG_20250511_140958_896.jpg",
        popular: false
    },
    {
        id: 49,
        name: "مغلفات هاي كلهة",
        description: "مغلفات طعام للحيوانات الأليفة (1000 قطعة)",
        price: 1250,
        category: "canned_food",
        image: "IMG_20250511_140859_410.jpg",
        popular: false
    },
    {
        id: 50,
        name: "مغلف رويال كناين الطبي",
        description: "طعام طبي للكلاب من رويال كانين",
        price: 2000,
        category: "canned_food",
        image: "IMG_20250511_140901_330.jpg",
        popular: false
    },
    {
        id: 51,
        name: "باكيت سناك كاتي",
        description: "علبة سناكات تحتوي على 10 قطع للقطط",
        price: 2000,
        category: "canned_food",
        image: "IMG_20250511_140904_858.jpg",
        popular: false
    },

    // قسم السناكات
    {
        id: 52,
        name: "سناكات صوصج",
        description: "وجبات خفيفة للحيوانات الأليفة",
        price: 4250,
        category: "snacks",
        image: "IMG_20250511_140902_763.jpg",
        popular: false
    },

    // قسم العناية (تم نقل بعض المنتجات هنا)
    {
        id: 53,
        name: "قطرات عث",
        description: "قطرات لعلاج عث الأذن في القطط",
        price: 10000,
        category: "prevention",
        image: "IMG_20250510_101741_710.jpg",
        popular: false
    }
];