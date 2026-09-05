# BADR Atelier V36.17 — BADR AI V2.3
## Pricing Intelligence + Full-Site Knowledge + Land Use + Investor Brain

### 1) سياسة التسعير المعتمدة
- الأعمال المهنية المتكاملة: **60–100 ريال سعودي/م²** من المساحة التصميمية/المبنية المؤكدة الداخلة في نطاق العمل.
- النطاق المتكامل يشمل: **معماري + إنشائي + كهرباء + ميكانيكا + صحي/تنسيق كهروميكانيكال**.
- التصميم فقط = **40%** من أتعاب النطاق المتكامل = استرشاديًا **24–40 ريال/م²**.
- ما يقاربها بالدولار (مرجع تقريبي 1 USD ≈ 3.75 SAR):
  - متكامل: **16.00–26.67 USD/m²**.
  - تصميم فقط: **6.40–10.67 USD/m²**.
- BADR AI لا يعرض أي أسعار بالجنيه المصري.
- لا يتم ضرب مساحة الأرض تلقائيًا؛ إذا المساحة المذكورة Plot/Land Area، يطلب الـDesign/Built-up Area أولًا.
- هذه أتعاب مهنية وليست تكلفة إنشاء المشروع، والأرقام استرشادية وليست عرض سعر ملزمًا.

### 2) Full-Site Knowledge
- تمت فهرسة **39 صفحة عامة** من نسخة الموقع الحالية.
- تمت فهرسة **326 مقطع معرفة** و**277 رابط/مسار**.
- الفهرسة تقرأ النصوص الإنجليزية والعربية المخزنة داخل data-en وdata-ar، بالإضافة للعناوين والمحتوى المرئي.
- Contact وTeam لهما إجابات Fast Facts مباشرة لتقليل الهلوسة وزيادة السرعة.

### 3) Land Use Brain
تمت إضافة منطق تقييم:
- Residential
- Commercial / Retail
- Office
- Hospitality
- Industrial / Logistics
- Mixed Use
- Civic / Education / Healthcare

ويحلل عبر: Regulatory Fit + Market Fit + Site Fit + Financial Fit + Delivery/Operations Fit.

### 4) Investor / Cash Flow Brain
يتبع منطق صفحة Investors:
LAND → SCENARIOS → VALUE → DESIGN → DELIVERY

ويفهم GFA, Sellable Efficiency, Revenue, Total Cost, Profit, Margin, ROI, Equity, Cash Flow, Peak Funding, Break-even, IRR, Sensitivity وPhasing.

### 5) التركيب
أولًا: ارفع محتويات هذا Patch إلى GitHub مع Replace.

ثانيًا: Cloudflare → Workers & Pages → badr-ai → Edit code.
- Ctrl+A
- الصق كامل محتوى:
  `badr-ai-v2-cloudflare/BADR_AI_V2_3_CLOUDFLARE_WORKER_COPY_PASTE.txt`
- لا تغيّر Binding `AI`.
- Deploy.

ثالثًا: افتح:
`https://www.badratelier.com/assets/badr-ai/badr-ai-knowledge-v2-3.json`
وتأكد أن JSON يفتح.

رابعًا: اختبر الأسئلة الموجودة في `EVALUATION_V2_3_AR.md`.
