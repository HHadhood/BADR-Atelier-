# BADR Atelier — V36.9 BIM Video Refresh (Pakistan Diplomatic Project)

## ما الذي تم تحديثه؟

1. **استبدال فيلم BIM**
   - تم إدراج الفيديو المرفق `فيلا مجمعه 720.mp4` داخل المشروع الدبلوماسي الباكستاني.
   - تم حفظه داخل المسار:
     - `assets/video/pakistan-diplomatic-jeddah/bim-journey.mp4`

2. **إضافة علامة BADR على فيديو BIM**
   - تم دمج لوجو BADR داخل الفيديو نفسه كـ watermark بصري.
   - ما زال هناك أيضًا لوجو فوق الفيديو داخل الصفحة لزيادة الحماية والهوية.

3. **تحديث صورة Poster الخاصة بفيلم BIM**
   - تم استخراج صورة جديدة من الفيديو لاستخدامها كـ Poster:
     - `assets/video/pakistan-diplomatic-jeddah/bim-journey.jpg`

4. **استخراج صور مميزة من فيديو BIM**
   - تم استخراج 8 صور ثابتة من لحظات قوية داخل الفيديو لدعم ملف BIM للمشروع.
   - تم حفظها داخل:
     - `assets/img/pakistan-diplomatic-jeddah/bim-film/01.webp` إلى `08.webp`

5. **تحديث صفحة BIM الخاصة بالمشروع**
   - الصفحة:
     - `bim-project-pakistan-consulate.html`
   - أصبحت تعرض:
     - فيلم BIM المحدث
     - معرض صور BIM مستخرج من الفيديو
     - محتوى نصي يوضح أن هذه اللقطات مستخرجة من الفيلم الرسمي

6. **تعزيز قسم BIM داخل صفحة المشروع المعماري**
   - الصفحة:
     - `project-pakistan-diplomatic-jeddah.html`
   - تم ربطها بالفيلم الجديد وتحديث النصوص لتوضيح أن الفيلم الرسمي موجود بعلامة BADR.

7. **تشغيل الفيديو بمجرد المرور Hover**
   - تم تحديث السلوك التفاعلي في:
     - `assets/js/main-v20.js`
   - بحيث:
     - المرور على فصول أفلام المشروع في الشريط السفلي يغيّر الفيديو الرئيسي ويشغله مباشرة.
     - بعض فيديوهات الكروت الداعمة تعمل بمجرد المرور عليها.

8. **تحديث cache-busting version**
   - تم رفع أرقام الاستدعاء إلى `36.9.0` في الصفحات المعدلة لضمان تحميل التحديثات الجديدة.

## الصفحات المعدلة
- `project-pakistan-diplomatic-jeddah.html`
- `bim-project-pakistan-consulate.html`
- `bim-digital.html`
- `assets/js/main-v20.js`

## الأصول الجديدة/المحدثة
- `assets/video/pakistan-diplomatic-jeddah/bim-journey.mp4`
- `assets/video/pakistan-diplomatic-jeddah/bim-journey.jpg`
- `assets/img/pakistan-diplomatic-jeddah/bim-film/01.webp`
- `assets/img/pakistan-diplomatic-jeddah/bim-film/02.webp`
- `assets/img/pakistan-diplomatic-jeddah/bim-film/03.webp`
- `assets/img/pakistan-diplomatic-jeddah/bim-film/04.webp`
- `assets/img/pakistan-diplomatic-jeddah/bim-film/05.webp`
- `assets/img/pakistan-diplomatic-jeddah/bim-film/06.webp`
- `assets/img/pakistan-diplomatic-jeddah/bim-film/07.webp`
- `assets/img/pakistan-diplomatic-jeddah/bim-film/08.webp`

