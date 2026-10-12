# BADR Atelier V36.25 — Cinematic Image Reliability Fix

- تم استبدال خلفية شاشة الدخول المعتمدة على CSS بصورة HTML حقيقية `<img>` في كل صفحة.
- كل صفحة لها ملف صورة مستقل داخل `assets/img/cinematic-v3625/` بدقة 1920×1080.
- صفحات Contact / Careers / Team / Developers / Investors تحتوي مشهدًا بصريًا إضافيًا معبرًا عن نشاط الصفحة فوق خلفية من مشروعات BADR.
- صفحة Contact تعرض مشهد سيدة سعودية/خليجية تجري اتصالًا داخل بيئة مكتبية تحمل هوية BADR.
- تم الحفاظ على لوجو BADR والنص `شريكك الاستراتيجي في التطوير / Strategic Development Partner`.
- لا تعتمد شاشة الدخول على JavaScript لكي تظهر الصورة؛ JavaScript مسؤول فقط عن توقيت الخروج.
- للاختبار الثابت أضف `?badrIntro=hold` إلى رابط أي صفحة.
