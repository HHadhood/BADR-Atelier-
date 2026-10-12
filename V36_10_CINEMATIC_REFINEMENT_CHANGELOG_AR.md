# BADR Atelier — V36.10 Cinematic Refinement

## التحديثات الرئيسية

### 1) حركة افتتاحية Cinematic أكثر
- تم تطوير افتتاحية صفحة المشروع الدبلوماسي لتصبح أكثر حيوية بصريًا.
- أضيفت:
  - **Hero cinematic load-in animation**
  - **Spotlight / pointer glow effect** داخل الهيرو
  - **Cinematic ribbon** يعرّف محتوى الافتتاحية
  - **Scroll cue** بصري أنيق لبدء الرحلة
  - **Mini cinematic preview card** داخل الهيرو تعرض مشهد الافتتاح

### 2) Video Hover Previews أكثر احترافية
- تم تطوير أسلوب المعاينات المرئية عند المرور Hover على الفيديوهات/البطاقات.
- أصبح يوجد:
  - تشغيل/إيقاف أوتوماتيكي للمعاينة عند المرور
  - حالة **is-previewing** لإبراز البطاقة الفعالة
  - شريط ضوئي سفلي متحرك
  - Badge مرئي من نوع **Preview / Live Preview / Featured Now**
  - Zoom + grading effect للفيديو أثناء المعاينة
- تم دعم هذا السلوك في:
  - بطاقات المعاينة الجديدة داخل **Diplomatic Projects**
  - البطاقة السينمائية داخل Hero المشروع
  - بطاقة المشروع الدبلوماسي المميزة داخل Projects
  - بطاقة مشروع BIM داخل صفحة BIM + Digital

### 3) تحسين إضافي لقسم Diplomatic Projects داخل Projects
- تم تحويل القسم إلى **featured diplomatic chapter** أكثر قوة.
- أضيفت:
  - شارة تعريف للقسم
  - تحديث العدادات/الإحصاءات
  - **3 showcase hover cards**:
    1. Arrival Film
    2. BIM Film
    3. Garden Film
- هذا يجعل قسم المشروعات الدبلوماسية أكثر وضوحًا، وأكثر تفاعلًا، وأسهل في استكشاف المشروع.

### 4) خلفية صورة مميزة في صفحة المشروع
- تم إنشاء خلفية بصرية جديدة مخصصة لافتتاحية صفحة المشروع:
  - `assets/img/pakistan-diplomatic-jeddah/project-hero-bg.webp`
- الخلفية تعتمد على الواجهة الرئيسية للمشروع مع grading وتعتيم وتوهج بصري مناسب لطابع الصفحة.
- تم ربطها في:
  - خلفية الصفحة العامة
  - Hero section الخاصة بصفحة المشروع
  - قسم Diplomatic Projects داخل صفحة Projects

## الملفات المعدلة
- `project-pakistan-diplomatic-jeddah.html`
- `projects.html`
- `bim-digital.html`
- `bim-project-pakistan-consulate.html`
- `assets/css/styles-v20.css`
- `assets/js/main-v20.js`

## الأصول الجديدة
- `assets/img/pakistan-diplomatic-jeddah/project-hero-bg.webp`
- `V36_10_CINEMATIC_REFINEMENT_CHANGELOG_AR.md`

## Version bump
- تم تحديث الاستدعاءات إلى:
  - `36.10.0`

