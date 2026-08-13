# BADR Atelier — GitHub Pages V8

هذه النسخة كاملة وجاهزة للرفع مباشرة إلى Repository الخاص بـ GitHub Pages.

## أهم تحديثات V8
- تصغير العناوين الكبيرة في Heroes على مستوى الموقع، خصوصًا صفحة المطورين والموبايل.
- استخدام صورة د. هاني يوسف الأصلية كما هي داخل إخراج Founder Editorial جديد؛ لا توجد صورة مولدة أو تغيير لملامح الوجه.
- الاسم عند اللغة العربية: **د. هاني يوسف**.
- إعادة صياغة Founder Message لتخاطب المطور العقاري بمنهج: قراءة الأرض والسوق → اختبار المنتج والجدوى → صياغة الهوية والتصميم → حماية التنفيذ بالهندسة وBIM.
- تطوير Developer + BADR = Project إلى مسار بصري متحرك ومترابط.
- تحسين بوابات Architecture / Engineering / Value Creation وإضافة تفاعل Hover / Tilt خفيف على الأجهزة المناسبة.
- خريطة Leaflet + OpenStreetMap حقيقية وتفاعلية: إجمالي المشروعات حسب الدولة، وعند التكبير تظهر المدن والمشروعات، مع بقاء أرقام الدول مرئية بدرجة خفيفة.
- أيقونات Social حقيقية بصيغة SVG: LinkedIn / X / WhatsApp / YouTube / Facebook.
- WhatsApp مرتبط بالرقم السعودي: **+966 54 803 6680**.
- الرقم المصري والسعودي في Contact/Footer يفتحان محادثة WhatsApp مباشرة، بدون تكرار سطر WhatsApp السعودي.
- الهوية أسفل اللوجو: `Architecture • Planning • Design • BIM` مع `Real Estate Developer Advisory`.
- إضافة حركة Parallax خفيفة، Magnetic Buttons، وPointer Tilt مع احترام `prefers-reduced-motion`.

## روابط Social
لم يتم اختلاق روابط رسمية غير معروفة. ضع الروابط النهائية في:
`assets/js/site-config.js`

الحقول:
- `linkedin`
- `x`
- `youtube`
- `facebook`

WhatsApp يعمل بالفعل من الحقل `whatsapp`.

## الرفع إلى GitHub Pages
1. فك ضغط ZIP.
2. افتح Repository: `BADR-Atelier-`.
3. ارفع **محتويات ZIP نفسها** إلى Root؛ يجب أن يكون `index.html` مباشرة في الجذر.
4. اختر Replace للملفات القديمة ثم Commit.
5. انتظر GitHub Pages ثم استخدم `Ctrl + F5` أو امسح Cache الهاتف.

## ملاحظة الخريطة
الخريطة تحتاج اتصال إنترنت لأنها تستخدم Leaflet/OpenStreetMap. بقية الموقع Static ويمكن تشغيله بدون Build step.
