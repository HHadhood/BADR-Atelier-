# BADR Atelier — V36.27 Visibility & Footer QA

تحديث عام مبني فوق V36.26 لتحسين الظهور والقراءة والـFooter على جميع الصفحات.

## ما تم إصلاحه
- Footer عالي التباين على كل الصفحات مع إظهار شعار BADR والنصوص وروابط التواصل والمكاتب.
- Fallback تلقائي للـFooter إذا تعطل سكربت الصفحة الأساسي قبل بناء الفوتر.
- Fallback نصي للشعار إذا تعذر تحميل صورة الشعار لأي سبب.
- إصلاح تباين النصوص على الخلفيات الذهبية: النص الأساسي أصبح داكنًا وواضحًا بدل الأبيض منخفض التباين.
- إصلاح حالة رابط الـNavigation النشط: نص داكن واضح على الذهبي.
- تحسين تباين النصوص في الأقسام الداكنة.
- Safety layer لمنع بقاء Sections مخفية إذا تعطل Scroll Reveal.
- Responsive QA للـFooter على Desktop / Tablet / Mobile.
- Cache-busting إلى V36.27 للطبقات البصرية الجديدة.

## الملفات الجديدة
- `assets/css/badr-v3627-visibility.css`
- `assets/js/badr-v3627-visibility.js`

## ملاحظات
- لم يتم إعادة إدخال صور شاشات البداية؛ تجربة V36.26 الـImage-Free محفوظة.
- بريد الوظائف يظل `careers@badratelier.com`.
- شعار BADR المستخدم هو `assets/img/badr-logo.png`.
