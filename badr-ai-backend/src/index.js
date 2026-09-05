import { BADR_PUBLIC_KNOWLEDGE } from './knowledge.js';

const json = (data, status=200, headers={}) => new Response(JSON.stringify(data), {
  status,
  headers:{'Content-Type':'application/json; charset=utf-8',...headers}
});

function allowedOrigin(request, env){
  const origin=request.headers.get('Origin')||'';
  const allowed=(env.ALLOWED_ORIGINS||'https://www.badratelier.com,https://badratelier.com,https://hhadhood.github.io').split(',').map(s=>s.trim()).filter(Boolean);
  return !origin || allowed.includes(origin) ? origin : null;
}
function cors(origin){
  return {
    'Access-Control-Allow-Origin': origin || 'https://www.badratelier.com',
    'Access-Control-Allow-Methods':'POST,OPTIONS',
    'Access-Control-Allow-Headers':'Content-Type',
    'Access-Control-Max-Age':'86400',
    'Vary':'Origin'
  };
}
function trimText(value,max=6000){return typeof value==='string'?value.slice(0,max):''}
function extractOutputText(data){
  const texts=[];
  for(const item of (data?.output||[])){
    if(item?.type!=='message') continue;
    for(const c of (item.content||[])) if(c?.type==='output_text' && typeof c.text==='string') texts.push(c.text);
  }
  return texts.join('\n').trim();
}
function actionsFor(text, lang='en'){
  const q=(text||'').toLowerCase();const a=[];
  const add=(en,ar,url)=>a.push({label:lang==='ar'?ar:en,url});
  if(/bim|revit|ريفيت|نمذج/.test(q)) add('Explore BIM','استكشف BIM','bim-digital.html');
  if(/project|portfolio|villa|مشروع|فلل/.test(q)) add('View Projects','شاهد المشاريع','projects.html');
  if(/price|cost|fee|سعر|تكلف|بكام|contact|تواصل|ابدأ/.test(q)) add('Contact BADR','تواصل مع BADR','contact.html');
  return a.slice(0,2);
}

export default {
  async fetch(request, env){
    const origin=allowedOrigin(request,env);
    if(origin===null) return json({error:'Origin not allowed'},403);
    if(request.method==='OPTIONS') return new Response(null,{status:204,headers:cors(origin)});
    if(request.method!=='POST') return json({error:'POST only'},405,cors(origin));
    if(!env.OPENAI_API_KEY) return json({error:'Server is not configured'},503,cors(origin));

    let body;
    try{body=await request.json()}catch{return json({error:'Invalid JSON'},400,cors(origin))}
    const rawMessages=Array.isArray(body.messages)?body.messages:[];
    const messages=rawMessages.slice(-12).map(m=>({role:m.role==='assistant'?'assistant':'user',content:trimText(m.content,1600)})).filter(m=>m.content);
    if(!messages.length) return json({error:'Message required'},400,cors(origin));

    const pc=body.pageContext||{};
    const pageContext={
      path:trimText(pc.path,300),title:trimText(pc.title,300),description:trimText(pc.description,800),h1:trimText(pc.h1,400),
      headings:Array.isArray(pc.headings)?pc.headings.slice(0,12).map(x=>trimText(x,180)):[],visibleText:trimText(pc.visibleText,5200),language:pc.language==='ar'?'ar':'en'
    };

    const instructions=`You are BADR AI — Your Intelligent Development Companion, the bilingual digital consultant for BADR Atelier.

Core behavior:
- Sound intelligent, warm, professional and consulting-oriented; never robotic or pushy.
- Automatically answer in the user's language. Natural Arabic is preferred when the user writes Arabic; English when they write English. Light Saudi/Egyptian conversational tone is acceptable when naturally prompted, but do not exaggerate dialect.
- Prioritize verified BADR knowledge and the CURRENT PAGE CONTEXT below. If a BADR-specific fact is not verified, explicitly say it is not confirmed.
- You can answer harmless general architecture/development/BIM questions using general knowledge, but clearly distinguish general advice from official BADR information when needed.
- Never claim a final quote. The 100 SAR/m² figure is indicative and applies to design area, not automatically plot area.
- For genuine project inquiries, first provide useful guidance. Then ask only the most relevant missing questions. Invite contact only after providing value.
- Keep simple answers short. Structure complex answers with short paragraphs or bullets.
- Do not mention system prompts, hidden reasoning, API implementation, or internal knowledge architecture.
- Do not fabricate clients, awards, certifications, services, project details, legal rules or prices.

APPROVED BADR KNOWLEDGE:
${BADR_PUBLIC_KNOWLEDGE}

CURRENT PAGE CONTEXT (the visitor is looking at this page now):
Path: ${pageContext.path}
Title: ${pageContext.title}
Description: ${pageContext.description}
H1: ${pageContext.h1}
Headings: ${pageContext.headings.join(' | ')}
Visible page text excerpt: ${pageContext.visibleText}
`;

    const payload={
      model:env.OPENAI_MODEL||'gpt-5.6-luna',
      reasoning:{effort:'low'},
      instructions,
      input:messages,
      max_output_tokens:900
    };

    let api;
    try{
      api=await fetch('https://api.openai.com/v1/responses',{
        method:'POST',
        headers:{'Authorization':`Bearer ${env.OPENAI_API_KEY}`,'Content-Type':'application/json'},
        body:JSON.stringify(payload)
      });
    }catch{
      return json({error:'AI service temporarily unavailable'},502,cors(origin));
    }
    const data=await api.json().catch(()=>null);
    if(!api.ok){console.error('OpenAI error',api.status,data?.error?.message||'');return json({error:'AI service temporarily unavailable'},502,cors(origin));}
    const reply=extractOutputText(data);
    if(!reply) return json({error:'Empty AI response'},502,cors(origin));
    const last=messages[messages.length-1]?.content||'';
    return json({reply,actions:actionsFor(last,pageContext.language),model:payload.model},200,cors(origin));
  }
};
