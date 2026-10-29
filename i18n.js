/* GirlStyle: Arabic/English + Light/Dark. Load in <head> (no defer), before script.js */
(function () {
  var get = function (k) { try { return localStorage.getItem(k); } catch (e) { return null; } };
  var put = function (k, v) { try { localStorage.setItem(k, v); } catch (e) {} };
  var root = document.documentElement;

  var lang = get("gs-lang") || ((navigator.language || "").slice(0, 2) === "ar" ? "ar" : "en");
  var theme = get("gs-theme") || (window.matchMedia && matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");

  function applyRoot() {
    root.lang = lang;
    root.dir = lang === "ar" ? "rtl" : "ltr";
    root.setAttribute("data-theme", theme);
  }
  applyRoot(); // runs before first paint, so no flash

  var AR = {
    "GirlStyle - Premium Fashion": "GirlStyle - أزياء راقية",
    "Home": "الرئيسية", "Shop": "المتجر", "Collections": "المجموعات", "Sale": "التخفيضات", "Contact": "تواصل معنا",
    "Order Now": "اطلبي الآن", "Order Request": "طلب منتج",
    "Fill in your details and we will contact you to confirm your order.": "املئي بياناتك وسنتواصل معك لتأكيد طلبك.",
    "Full name": "الاسم بالكامل", "Your full name": "اسمك بالكامل",
    "Phone / WhatsApp": "رقم الهاتف / واتساب", "City": "المدينة", "e.g. Fayoum": "مثال: الفيوم",
    "Size": "المقاس", "Not specified": "غير محدد", "Quantity": "الكمية",
    "Notes (optional)": "ملاحظات (اختياري)", "Color, delivery time, any request...": "اللون، موعد التسليم، أي طلب خاص...",
    "Send order on WhatsApp": "إرسال الطلب على واتساب",
    "About": "عن المشروع", "Student Project": "مشروع طالبة", "About the Project": "عن المشروع",
    "GirlStyle is a fashion marketing website designed for female high-school students, showcasing the latest trends, collections and special offers in an interactive and easy-to-use way.": "GirlStyle موقع تسويقي للأزياء والموضة موجّه لطالبات المرحلة الثانوية، يعرض أحدث الصيحات والمجموعات والعروض بأسلوب تفاعلي وسهل الاستخدام.",
    "Prepared by": "إعداد الطالبة", "Shahd Khair Hamed El-Dayekh": "شهد خير حامد الدايخ",
    "University": "الجامعة", "Fayoum University": "جامعة الفيوم",
    "Faculty": "الكلية", "Faculty of Specific Education": "كلية التربية النوعية",
    "Department": "القسم", "Educational Technology": "تكنولوجيا التعليم",
    "Academic Year": "الفرقة", "Fourth Year": "الرابعة",
    "Under the supervision of": "تحت إشراف", "Dr. Abeer Kamal": "د. عبير كمال", "Ms. Shaimaa": "أ. شيماء",
    "Elevate Your Style with Premium Fashion": "ارتقي بأناقتك مع أزياء راقية",
    "Discover the latest trends in women's fashion. From elegant dresses to casual wear, we have everything to make you shine.": "اكتشفي أحدث صيحات أزياء المرأة. من الفساتين الأنيقة إلى الإطلالات اليومية، عندنا كل ما يجعلك تتألقين.",
    "Shop Now": "تسوّقي الآن", "Explore Collections": "استكشفي المجموعات",
    "Featured Products": "منتجات مميزة",
    "Floral Summer Dress": "فستان صيفي مزهّر", "Party Dress": "فستان سهرة", "Elegant Day Dress": "فستان نهاري أنيق",
    "Red Necklace Set": "طقم عقد أحمر", "Pearl Necklace Set": "طقم عقد لؤلؤ", "Necklace Set": "طقم عقد",
    "Add to Cart": "أضيفي إلى السلة",
    "Join Our Fashion Community": "انضمي إلى مجتمع الموضة لدينا",
    "Subscribe to get exclusive offers, style tips, and early access to new collections.": "اشتركي لتصلك عروض حصرية ونصائح أناقة وأولوية الوصول للمجموعات الجديدة.",
    "Your email address": "بريدك الإلكتروني", "Subscribe": "اشتراك",
    "Our Collections": "مجموعاتنا",
    "Discover our carefully curated fashion collections designed to elevate your style and express your unique personality.": "اكتشفي مجموعاتنا المختارة بعناية، المصممة لترتقي بأسلوبك وتعبّر عن شخصيتك المميزة.",
    "All Collections": "كل المجموعات", "New Arrivals": "وصل حديثاً", "Seasonal": "موسمية", "Special Occasion": "مناسبات خاصة", "Trending Now": "الأكثر رواجاً",
    "Summer Vibes": "أجواء الصيف", "Bright and colorful outfits perfect for sunny days": "إطلالات زاهية وملوّنة تناسب الأيام المشمسة",
    "Autumn Elegance": "أناقة الخريف", "Warm tones and cozy fabrics for the fall season": "ألوان دافئة وأقمشة مريحة لموسم الخريف",
    "Evening Glam": "سحر السهرة", "Stunning dresses and accessories for special nights": "فساتين وإكسسوارات مبهرة لليالي الخاصة",
    "Street Style": "ستايل الشارع", "Urban fashion with an edge and personality": "موضة عصرية بشخصية جريئة",
    "Minimalist Chic": "شياكة بسيطة", "Clean lines and timeless pieces for everyday elegance": "خطوط نظيفة وقطع خالدة لأناقة كل يوم",
    "Bridal Dreams": "أحلام العروس", "Ethereal gowns and accessories for your special day": "فساتين وإكسسوارات حالمة ليومك المميز",
    "View Collection": "عرض المجموعة",
    "Featured Collection": "مجموعة مميزة", "Spring Bloom": "أزهار الربيع",
    "Our most popular collection featuring floral patterns, lightweight fabrics, and vibrant colors inspired by the beauty of spring. Perfect for making a statement this season.": "مجموعتنا الأكثر شعبية بنقشات الزهور والأقمشة الخفيفة والألوان النابضة المستوحاة من جمال الربيع. مثالية لتتركي بصمتك هذا الموسم.",
    "Items": "قطعة", "Likes": "إعجاب", "Positive Reviews": "تقييمات إيجابية", "Explore Spring Bloom": "استكشفي أزهار الربيع",
    "MEGA SALE": "تخفيضات ضخمة", "Up to 70% OFF on selected items! Limited time offer. Don't miss out!": "خصم حتى 70% على منتجات مختارة! عرض لوقت محدود، لا تفوّتيه!",
    "Days": "أيام", "Hours": "ساعات", "Minutes": "دقائق", "Seconds": "ثوانٍ",
    "FLASH SALE!": "عرض سريع!", "Next 2 hours only - Extra 25% OFF on already reduced prices": "خلال الساعتين القادمتين فقط - خصم إضافي 25% على الأسعار المخفّضة",
    "All Sale Items": "كل المنتجات المخفّضة", "Dresses": "فساتين", "Tops": "بلوزات", "Shoes": "أحذية", "Accessories": "إكسسوارات",
    "Elegant Heels": "كعب عالٍ أنيق", "Silk Blouse": "بلوزة حرير", "Designer Handbag": "حقيبة يد فاخرة",
    "Hot Deal": "عرض ساخن", "Popular": "رائج", "Premium": "مميز", "Luxury": "فاخر",
    "Limited stock:": "الكمية محدودة:",
    "Deal of the Day": "عرض اليوم", "Complete Summer Outfit Set": "طقم إطلالة صيفية كامل",
    "Get this complete summer outfit including dress, hat, and sunglasses at an unbelievable price. Perfect for vacation and beach days!": "احصلي على إطلالة صيفية كاملة تشمل فستاناً وقبعة ونظارة شمسية بسعر لا يُصدَّق. مثالية للإجازات وأيام الشاطئ!",
    "Get This Deal": "احصلي على العرض",
    "Your destination for premium women's fashion. We believe every woman deserves to feel confident and beautiful.": "وجهتك لأزياء المرأة الراقية. نؤمن أن كل امرأة تستحق أن تشعر بالثقة والجمال.",
    "Bottoms": "بناطيل وتنانير", "Help": "المساعدة", "Customer Service": "خدمة العملاء", "Shipping & Returns": "الشحن والإرجاع",
    "Size Guide": "دليل المقاسات", "Contact Us": "اتصلي بنا", "FAQs": "الأسئلة الشائعة",
    "123 Fashion Street, NY": "123 شارع الموضة، نيويورك",
    "© 2026 | Shahd Khair | GirlStyle. All rights reserved.": "© 2026 | شهد خير | GirlStyle. جميع الحقوق محفوظة."
  };
  var RX = [
    [/^(\d+)% OFF$/, "خصم $1%"],
    [/^Save (\d+)%$/, "وفّري $1%"],
    [/^(\d+) items$/, "$1 قطعة"],
    [/^([\d.]+k) likes$/, "$1 إعجاب"],
    [/^([\d.]+) \((\d+) reviews\)$/, "$1 ($2 تقييم)"],
    [/^(\d+) left$/, "باقي $1"]
  ];
  function tr(s) {
    if (AR[s]) return AR[s];
    for (var i = 0; i < RX.length; i++) if (RX[i][0].test(s)) return s.replace(RX[i][0], RX[i][1]);
    return null;
  }

  // Translate native alert() messages from script.js
  var nativeAlert = window.alert;
  window.alert = function (m) {
    if (lang === "ar") {
      m = String(m)
        .replace(/^Opening (.+) collection!$/, "جاري فتح مجموعة $1!")
        .replace(/^Added (.+) to your cart!$/, "تمت إضافة $1 إلى سلتك!")
        .replace(/^Thanks for subscribing!$/, "شكراً لاشتراكك!");
    }
    nativeAlert.call(window, m);
  };

  var texts = [], fields = [], enTitle = "", langBtn, themeBtn;

  function render() {
    applyRoot();
    texts.forEach(function (o) { o.n.nodeValue = lang === "ar" ? o.ar : o.en; });
    fields.forEach(function (o) { o.el.placeholder = lang === "ar" ? o.ar : o.en; });
    document.title = lang === "ar" ? (tr(enTitle) || enTitle) : enTitle;
    langBtn.textContent = lang === "ar" ? "EN" : "عربي";
    langBtn.setAttribute("aria-label", lang === "ar" ? "Switch to English" : "التبديل إلى العربية");
    themeBtn.innerHTML = '<i class="fa-solid ' + (theme === "dark" ? "fa-sun" : "fa-moon") + '"></i>';
    themeBtn.setAttribute("aria-label", lang === "ar"
      ? (theme === "dark" ? "الوضع الفاتح" : "الوضع الداكن")
      : (theme === "dark" ? "Light mode" : "Dark mode"));
  }

  function init() {
    enTitle = document.title;
    var w = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT), n;
    while ((n = w.nextNode())) {
      var p = n.parentNode.nodeName;
      if (p === "SCRIPT" || p === "STYLE") continue;
      var key = n.nodeValue.replace(/\s+/g, " ").trim();
      var ar = key && tr(key);
      if (ar) texts.push({ n: n, en: n.nodeValue, ar: " " + ar + " " });
    }
    document.querySelectorAll("[placeholder]").forEach(function (el) {
      var ar = tr(el.placeholder);
      if (ar) fields.push({ el: el, en: el.placeholder, ar: ar });
    });

    var box = document.createElement("div");
    box.className = "nav-controls";
    box.innerHTML = '<button class="nav-btn" id="langBtn" type="button"></button>' +
                    '<button class="nav-btn" id="themeBtn" type="button"></button>';
    var nav = document.getElementById("navbar");
    nav.insertBefore(box, document.getElementById("menuToggle"));
    langBtn = document.getElementById("langBtn");
    themeBtn = document.getElementById("themeBtn");

    langBtn.addEventListener("click", function () { lang = lang === "ar" ? "en" : "ar"; put("gs-lang", lang); render(); });
    themeBtn.addEventListener("click", function () { theme = theme === "dark" ? "light" : "dark"; put("gs-theme", theme); render(); });
    render();
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
