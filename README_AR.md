# BADR Atelier — Developer-Centric Premium Website

## الفكرة الأساسية
هذه النسخة تحافظ على **الهوية الأولى للموقع**: Warm Ivory + Black + Gold، مع Typography هادئ وفخم ومساحات بيضاء واضحة.

لكن تم تغيير الرسالة الأساسية للموقع لتكون موجهة للمطور العقاري ومالك الأرض:

**Profit + Value + Impact**

الرسالة: بدر لا يقدم رسومات فقط؛ بل يدخل مبكرًا مع المطور لفهم الأرض والسوق والمنتج، ثم يربط القرار التجاري بالتصميم المميز والـBIM والتنسيق الفني.

## أهم الصفحات
- `index.html` — الصفحة الرئيسية ورسالة BADR للمطور.
- `developers.html` — صفحة كاملة للمطورين العقاريين وإطار BADR PVI.
- `projects.html` — الأعمال التصميمية وصور فعلية مستخرجة من Architecture Portfolio.
- `bim-digital.html` — مشروعات BIM وصور فعلية من BIM Services Portfolio.
- `about.html` — الاستوديو وكلمة Dr. Hani Youssef ومقر بدر في مدينة بدر - القاهرة.
- `services.html` — الخدمات.
- `process.html` — منهج العمل.
- `project-al-rehab.html` — دراسة Al Rehab Oasis الموجودة من النسخة السابقة.
- `contact.html` — نموذج تواصل موجه للمطور ومالك الأرض.

## بيانات تم أخذها من الملفات المرفوعة
- Headquarters: **Badr City, Cairo**.
- Founded: **2014**.
- Markets: **Egypt | GCC | North America**.
- Architecture portfolio locations represented: Cairo, Riyadh, Dubai, Doha, Kuwait City, Muscat, Toronto, New Jersey.
- BIM service scope: Architecture + Structure + MEP, LOD 100–500, coordination, drawings, QTO/BOQ, 4D/5D, COBie / handover.
- Phone shown in the portfolios: **+201033825435**.

## ملاحظة مهمة قبل النشر
يوجد اختلاف داخل Architecture Portfolio نفسه بشأن سنة مشروع **Al Noor Grand Mosque**:
- صفحة المشروع التفصيلية تذكر **Riyadh — 2024**.
- صفحة Selected Works overview تذكر **2016**.

الموقع الحالي يستخدم **2024** لأنه التاريخ الموجود على صفحة المشروع التفصيلية. راجع السنة النهائية قبل النشر الرسمي.

كما أن **Palm Horizon Compound — Jeddah — 2015** يظهر في صفحة Selected Works overview، لكنه لا يملك قصة مشروع تفصيلية مستقلة في الملف؛ لذلك تم إدراجه في Project Grid باستخدام صورة Portfolio overview وليس صورة مشروع منفصلة.

## البريد والدومين
`studio@badratelier.com` و `www.badratelier.com` موجودان كبيانات قابلة للتعديل. إذا لم يكونا البيانات الرسمية النهائية، عدلهما من:

`assets/js/site-config.js`

## رفع الموقع
1. فك ضغط ملف ZIP.
2. ارفع **محتويات المجلد نفسه** إلى `public_html` أو مجلد الموقع الرئيسي.
3. تأكد أن `index.html` موجود مباشرة في جذر الموقع.
4. لا تحتاج إلى React أو WordPress أو Build step.

## تعديل الصور
الصور المستخرجة من الملفات موجودة في:
- `assets/img/portfolio/`
- `assets/img/bim/`

يمكن استبدال أي صورة بصورة أصلية أعلى دقة بنفس اسم الملف دون تعديل HTML.

## تعديل الهوية
الألوان الرئيسية موجودة في أعلى:
`assets/css/styles.css`

القيم الأساسية:
- Ink: `#11110f`
- Paper: `#f4f1e9`
- Warm White: `#fbfaf6`
- Gold: `#cba24d`
- Deep Gold: `#8b6728`
