# BADR Atelier — V36.13 BADR AI V1

## الجديد
- إضافة BADR AI كواجهة عائمة Premium في كل صفحات الموقع التي تستخدم `assets/js/main-v20.js`.
- دعم عربي / English تلقائي.
- Quick prompts تتغير حسب الصفحة الحالية.
- Page-aware context: يرسل للـBackend عنوان الصفحة، H1، بعض العناوين، ووصفًا ونصًا مختصرًا من الصفحة الحالية.
- Session memory داخل المتصفح فقط باستخدام `sessionStorage` في V1.
- Preview Mode يعمل بدون API لإظهار التجربة والرد على بعض الأسئلة الأساسية.
- Backend آمن جاهز لـCloudflare Workers داخل `badr-ai-backend/`.
- لا يوجد أي API key داخل الملفات.
- Knowledge Master عامة وآمنة للـGitHub داخل `badr-ai-docs/BADR_AI_KNOWLEDGE.md`.
- تسعير استرشادي 100 SAR/m² من design area فقط، وليس quotation نهائية.
- معرفة معتمدة عن المؤسس د. هاني يوسف وفق المعلومات التي تم اعتمادها للمساعد.
- روابط Contextual actions للمشروعات وBIM والتواصل.

## ملفات الواجهة
- `assets/badr-ai/badr-ai.css`
- `assets/badr-ai/badr-ai.js`
- `assets/badr-ai/badr-ai-config.js`
- تعديل `assets/js/main-v20.js` لإطلاق BADR AI تلقائيًا.

## Backend
- `badr-ai-backend/src/index.js`
- `badr-ai-backend/src/knowledge.js`
- `badr-ai-backend/wrangler.toml`
- `badr-ai-backend/package.json`
- `badr-ai-backend/.dev.vars.example`

## التفعيل
راجع:
- `badr-ai-docs/DEPLOY_BADR_AI_AR.md`

