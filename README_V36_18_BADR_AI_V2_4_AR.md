# BADR AI V2.4 — V36.18

## ما الجديد
- تسعير طبيعي: SAR أولًا ثم USD تقريبي، بدون تعليق تلقائي على العملات غير المستخدمة.
- Leadership facts: Dr. Hani Youssef, Kamal Salem (Executive Director), Yousra Dahaoui (Chief Marketing & Brand Officer).
- استخراج أسرع لكل أعضاء الفريق المنشورين في صفحة Team.
- Public-client policy: ذكر العملاء/الجهات المعلنة فقط وعدم اختراع أسماء غير منشورة.
- Featured public institutional reference: Consulate General of Pakistan — Jeddah.
- Portfolio geography intelligence: 15 مشروعًا في صفحة Projects الرئيسية مع عدّ حسب الدولة والمدينة.
- تمييز واضح بين عدد البورتفوليو المنشور وإجمالي الخبرة التاريخية.
- Real-estate advisor brain أعمق للسكني والتجاري والمكاتب والضيافة والصناعي والـmixed-use والتدفقات النقدية.
- إضافة Source Chips داخل BADR AI لعرض مصدر المعلومة من صفحات الموقع عندما تكون الإجابة مبنية على الموقع.

## التثبيت
1. ارفع Patch V36.18 على GitHub مع Replace.
2. تأكد أن assets/badr-ai/badr-ai-knowledge-v2-4.json يفتح من الموقع.
3. في Cloudflare Worker استبدل الكود بملف BADR_AI_V2_4_CLOUDFLARE_WORKER_COPY_PASTE.txt ثم Deploy.
4. اترك Binding باسم AI كما هو.
