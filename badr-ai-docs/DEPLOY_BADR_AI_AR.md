# تشغيل BADR AI — خطوات عملية

## ما الموجود في الحزمة؟

### داخل GitHub Pages (الواجهة)
- `assets/badr-ai/badr-ai.css`
- `assets/badr-ai/badr-ai.js`
- `assets/badr-ai/badr-ai-config.js`
- تم تحديث `assets/js/main-v20.js` ليحمّل BADR AI تلقائيًا في كل صفحة تستخدم هذا الملف.

### Backend آمن (الكود يمكن أن يبقى في GitHub، لكن المفتاح لا)
- `badr-ai-backend/`
- Cloudflare Worker يستقبل سؤال الزائر ويستدعي OpenAI API.
- `OPENAI_API_KEY` يجب أن يكون Secret داخل Cloudflare، وليس داخل GitHub.

## 1) جرّب الواجهة أولًا
ارفع الموقع إلى GitHub Pages. سيظهر BADR AI في Preview Mode حتى قبل توصيل الـBackend.

## 2) أنشئ OpenAI API key
أنشئ المفتاح من منصة OpenAI. لا تكتبه في HTML أو JavaScript ولا ترفعه إلى GitHub.

## 3) انشر Cloudflare Worker
من مجلد `badr-ai-backend`:

```bash
npm install
npx wrangler login
npx wrangler secret put OPENAI_API_KEY
npm run deploy
```

عند `wrangler secret put OPENAI_API_KEY` الصق المفتاح في الطرفية فقط.

بعد النشر ستحصل على رابط يشبه:
`https://badr-ai.<your-subdomain>.workers.dev`

## 4) اربط الموقع بالـWorker
افتح:
`assets/badr-ai/badr-ai-config.js`

غيّر فقط:
```js
endpoint: "https://YOUR-WORKER-SUBDOMAIN.workers.dev"
```
إلى رابط الـWorker الحقيقي، ثم ارفع التعديل إلى GitHub.

## 5) اضبط الـDomains المسموحة
في `badr-ai-backend/wrangler.toml` يوجد:
`ALLOWED_ORIGINS`

تأكد أن الدومين النهائي للموقع موجود. GitHub Pages يستخدم Origin بدون مسار، لذلك `https://hhadhood.github.io` كافٍ لموقع داخل repository path.

## 6) الاختبار
اختبر على الأقل:
- عربي / إنجليزي
- سؤال: ما خدمات BADR؟
- سؤال: من هو د. هاني يوسف؟
- سؤال سعر: تصميم 500 م² (يجب أن يوضح أنها design area)
- سؤال عن BIM
- سؤال من داخل صفحة مشروع محدد
- سؤال غير معروف خاص بـBADR (يجب ألا يخترع)
- الموبايل

## Knowledge Base في V1
الإصدار الحالي يستخدم:
1. معرفة BADR عامة ومراجعة داخل `knowledge.js`.
2. Context مباشر من الصفحة التي يتصفحها الزائر (العنوان، H1، headings، ونص مختصر من الصفحة).

هذا يجعل المساعد Page-Aware من البداية بدون نظام RAG معقد.

## المرحلة الثانية المقترحة
عندما تريد إضافة PDFs وPortfolio كبير وFAQ وعروض خدمات كثيرة، انتقل إلى server-side Retrieval/File Search بدل إرسال ملفات ضخمة مع كل سؤال.

## مهم جدًا
- لا تضع `OPENAI_API_KEY` في GitHub أبدًا.
- لا تضع ملفات سرية أو عروض أسعار خاصة أو عقودًا في Knowledge Base عامة.
- المعلومات العامة فقط يمكن أن تكون داخل المستودع العام.
