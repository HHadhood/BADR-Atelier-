# BADR Atelier — V36.14 BADR AI V2 Developer Brain

## التحول الرئيسي
BADR AI لم يعد مجرد FAQ assistant. أصبح Development-oriented AI Consultant.

## التطويرات
- Land Development Mode
- Product Strategy Mode
- Commercial Logic Mode
- Architecture Strategy Mode
- BIM Advisory Mode
- Portfolio Matching Mode
- Developer Decision Framework
- سؤال بحد أقصى 4 أسئلة حاسمة في الجولة
- Preliminary Recommendation عند كفاية المعطيات
- حماية من اختلاق الاشتراطات
- Project matching حسب منطق التطوير لا التشابه الشكلي فقط
- Intelligent lead handoff إلى فريق BADR بعد تقديم قيمة
- Mode + Preliminary Confidence badges داخل واجهة BADR AI
- Quick prompts جديدة بعقلية مطور عقاري
- Knowledge routing لتقليل الحشو وتحسين جودة الإجابات

## Cloudflare
الملف الجاهز للنسخ إلى Worker:
`badr-ai-v2-cloudflare/worker-v2.1.js`

يستمر باستخدام نفس Workers AI binding باسم `AI` ونفس النموذج المجاني المستخدم بنجاح:
`@cf/meta/llama-3.1-8b-instruct-fast`
