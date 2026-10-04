const STORAGE_KEY = 'abilash-career-os-v1';

const roadmap = [
  { id:'p0', phase:'00', date:'NOW · OCT 2026', title:'Apply + sharpen the story', desc:'Do not wait for the roadmap to finish. Start interviewing while you build depth.', items:[
    'Position profile as Staff Mobile / Mobile Platform Engineer',
    'Update resume with architecture, performance and leadership impact',
    'Apply / ask for referrals to 10 focused roles each week',
    'Restart DSA with a curated interview plan',
    'Prepare 3 strong project walkthroughs from Best Buy / Diligent / personal products'
  ]},
  { id:'p1', phase:'01', date:'OCT–NOV 2026', title:'Mobile system design', desc:'Move from feature-level thinking to platform-level architecture.', items:[
    'Design a large-scale offline-first mobile app',
    'Master caching, sync, conflicts and data consistency',
    'Design authentication, token refresh, feature flags and deep links',
    'Cover observability, crash monitoring and mobile performance',
    'Practice architecture for 50+ engineers / modular codebases'
  ]},
  { id:'p2', phase:'02', date:'OCT–DEC 2026', title:'Modern Android depth', desc:'Close the Android depth gap so you can own architecture across both native platforms.', items:[
    'Kotlin coroutines + Flow',
    'Jetpack Compose state, navigation and performance',
    'Room + offline-first data layer',
    'Hilt / dependency injection and modular Gradle setup',
    'Testing, profiling, Baseline Profiles and Macrobenchmark'
  ]},
  { id:'p3', phase:'03', date:'NOV–DEC 2026', title:'React Native internals', desc:'Turn existing production experience into a rare platform-level specialization.', items:[
    'JSI internals and bridge vs bridgeless architecture',
    'Fabric render / commit / mount pipeline',
    'TurboModules + native Swift/Kotlin modules',
    'Hermes, threading, startup and memory profiling',
    'Write one sanitized case study from RN New Architecture work'
  ]},
  { id:'p4', phase:'04', date:'NOV 2026–JAN 2027', title:'Cloud + backend architecture', desc:'Learn enough backend/cloud to design the whole mobile system.', items:[
    'REST, GraphQL, WebSockets, OAuth/OIDC and JWT',
    'API Gateway, queues/events, cache and CDN concepts',
    'SQL vs NoSQL and data modeling trade-offs',
    'AWS core architecture services + Well-Architected Framework',
    'Finish AWS Solutions Architect Associate preparation'
  ]},
  { id:'p5', phase:'05', date:'DEC 2026–FEB 2027', title:'AI engineering', desc:'Be a mobile/platform engineer who can architect AI-powered product experiences.', items:[
    'Structured output + tool/function calling',
    'Embeddings, vector search and RAG',
    'Agent workflows + MCP/tool integrations',
    'Evals, guardrails, observability and failure handling',
    'Streaming, latency, cost optimization and on-device AI concepts'
  ]},
  { id:'p6', phase:'06', date:'JAN–MAR 2027', title:'Staff interview readiness', desc:'Make technical leadership as rehearsed as your coding skills.', items:[
    'Complete 100–150 curated DSA problems',
    'Practice 15+ mobile/system design prompts',
    'Prepare 12 leadership / behavioral stories',
    'Run mock Staff interviews and collect feedback',
    'Create one public Mobile Platform Lab architecture showcase'
  ]},
  { id:'p7', phase:'07', date:'MAR–JUN 2027', title:'Architect trajectory', desc:'Deepen distributed systems, technical strategy and cross-team influence.', items:[
    'Distributed systems fundamentals and failure modes',
    'Architecture decision records and technical RFC writing',
    'Platform governance, release strategy and dependency ownership',
    'Mentoring / technical influence across teams',
    'Target Mobile Architect / Staff+ scope in role selection'
  ]}
];

const skills = [
  {code:'ARCH', title:'Mobile System Design', text:'Your highest-priority track at 11+ years.', list:['Offline-first + sync','Modular architecture','Security + auth','Observability + performance','Release / migration strategy'], outcome:'Design a mobile platform for millions of users and dozens of teams.'},
  {code:'AND', title:'Android / Kotlin', text:'Build architecture-level depth rather than just UI familiarity.', list:['Coroutines / Flow','Jetpack Compose','Hilt + Room','Multi-module Gradle','Benchmarking + profiling'], outcome:'Own Android architecture discussions with the same confidence as iOS.'},
  {code:'RN', title:'React Native Platform', text:'Convert current production work into a specialized advantage.', list:['JSI','Fabric','TurboModules','Hermes','Native interoperability'], outcome:'Explain and debug RN from JS through C++/native rendering boundaries.'},
  {code:'CLOUD', title:'Cloud / Backend', text:'Enough breadth to architect the system behind the app.', list:['APIs + auth','Data + cache','Queues/events','AWS architecture','Observability'], outcome:'Design end-to-end architecture instead of stopping at the mobile client.'},
  {code:'AI', title:'AI Engineering', text:'Stay an engineer, not a “prompt engineer.”', list:['Tool calling','RAG','Agents','Evals/guardrails','Streaming + cost'], outcome:'Ship reliable AI features with measurable quality and failure handling.'},
  {code:'STAFF', title:'Staff Leadership', text:'Technical influence is part of the job.', list:['Architecture RFCs','Trade-off communication','Mentoring','Incident leadership','Cross-team alignment'], outcome:'Demonstrate that you can change the direction of an engineering organization.'}
];

const dsaTopics = ['Arrays & strings','Hash maps / sets','Two pointers','Sliding window','Stack / queue','Linked lists','Binary search','Trees / BST','Graphs · BFS / DFS','Heap / priority queue','Intervals','Dynamic programming basics'];
const systemTopics = ['Offline-first sync','Feed / pagination','Auth + token lifecycle','Push notifications','Deep linking','Feature flags / experiments','Caching strategy','Analytics / observability','App startup & performance','Modularization at scale','Release / rollback / OTA','API evolution / compatibility'];
const storyTopics = ['Architecture decision','Production incident','Performance win','Migration / modernization','Technical disagreement','Mentoring / growth','Cross-team influence','Ambiguous project','Failure / lesson','Technical debt','Delivery under pressure','Innovation / initiative'];

const resources = [
  {cat:'Profile', title:'Your Portfolio', desc:'Public portfolio — use this as the canonical story of your work.', url:'https://abilashblnair.github.io/profile/'},
  {cat:'Profile', title:'GitHub — abilashblnair', desc:'Repositories and public engineering work.', url:'https://github.com/abilashblnair'},
  {cat:'Profile', title:'LinkedIn', desc:'Professional profile and networking.', url:'https://www.linkedin.com/in/abilash-balasubramanian-629918b4/'},
  {cat:'DSA', title:'LeetCode Top Interview 150', desc:'A structured 150-problem interview plan suitable for multi-month prep.', url:'https://leetcode.com/studyplan/top-interview-150/'},
  {cat:'System Design', title:'System Design Primer', desc:'Open-source reference for scalable architecture fundamentals and interview practice.', url:'https://github.com/donnemartin/system-design-primer'},
  {cat:'Android', title:'Android App Architecture', desc:'Official architecture guidance: layers, UDF, state, repositories and modularity.', url:'https://developer.android.com/topic/architecture'},
  {cat:'Android', title:'Modern Android Architecture Pathway', desc:'Official guided learning path for production-quality Android architecture.', url:'https://developer.android.com/courses/pathways/android-architecture'},
  {cat:'Android', title:'Offline-first Android', desc:'Official data-layer patterns for local sources, sync and unreliable networks.', url:'https://developer.android.com/topic/architecture/data-layer/offline-first'},
  {cat:'React Native', title:'RN New Architecture', desc:'Official overview of JSI, new rendering and native interop architecture.', url:'https://reactnative.dev/architecture/landing-page'},
  {cat:'React Native', title:'RN Architecture Overview', desc:'Rendering, Fabric, threading, Hermes and architecture internals.', url:'https://reactnative.dev/architecture/overview'},
  {cat:'iOS', title:'Swift Concurrency', desc:'Official Apple documentation for tasks, actors and strict concurrency.', url:'https://developer.apple.com/documentation/swift/concurrency'},
  {cat:'Cloud', title:'AWS SAA-C03 Exam Guide', desc:'Official exam scope for Solutions Architect Associate.', url:'https://docs.aws.amazon.com/aws-certification/latest/solutions-architect-associate-03/solutions-architect-associate-03.html'},
  {cat:'Cloud', title:'AWS Well-Architected', desc:'Architecture framework for operational excellence, security, reliability, performance, cost and sustainability.', url:'https://aws.amazon.com/architecture/well-architected/'},
  {cat:'AI', title:'OpenAI Developer Docs', desc:'API, structured outputs, tools, agents and production AI development references.', url:'https://developers.openai.com/'},
  {cat:'AI', title:'Model Context Protocol', desc:'Open protocol for connecting AI applications to tools and context.', url:'https://modelcontextprotocol.io/'},
  {cat:'Career', title:'Google Careers', desc:'Search Staff / Senior mobile and platform roles in India.', url:'https://www.google.com/about/careers/applications/jobs/results/?location=India'},
  {cat:'Career', title:'LinkedIn Jobs', desc:'Search Staff Mobile, Lead Mobile, Mobile Platform and Mobile Architect roles.', url:'https://www.linkedin.com/jobs/'}
];

const defaultWeeklyTasks = [
  {id:'w1', text:'Solve 5 focused DSA problems', tag:'DSA', metric:'dsa', value:5},
  {id:'w2', text:'Complete 2 mobile system-design exercises', tag:'SYSTEM DESIGN', metric:'design', value:2},
  {id:'w3', text:'Do 2 Android / Compose deep-work sessions', tag:'ANDROID'},
  {id:'w4', text:'Review one RN New Architecture topic deeply', tag:'REACT NATIVE'},
  {id:'w5', text:'Apply or get referrals to 10 focused roles', tag:'CAREER', metric:'applications', value:10},
  {id:'w6', text:'Write one STAR / leadership story', tag:'STAFF'},
  {id:'w7', text:'Add one learning / achievement to the work log', tag:'EVIDENCE'}
];

function baseState(){
  return { roadmap:{}, checks:{dsa:{},system:{},stories:{}}, weekly:defaultWeeklyTasks.map(t=>({...t,done:false,custom:false})), cert:0, notes:'', applications:[], theme:'dark' };
}
let state = load();

function load(){ try{ return {...baseState(), ...JSON.parse(localStorage.getItem(STORAGE_KEY)||'{}')}; }catch{return baseState();} }
function save(){ localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); updateSummary(); }
function esc(s=''){return s.replace(/[&<>'"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));}

function renderRoadmap(){
  const root=document.querySelector('#roadmapGrid'); root.innerHTML='';
  roadmap.forEach(p=>{
    const done=p.items.filter((_,i)=>state.roadmap[`${p.id}-${i}`]).length;
    const el=document.createElement('article'); el.className='phase card';
    el.innerHTML=`<div class="phase-top"><span class="phase-index">PHASE ${p.phase}</span><span class="phase-date">${p.date}</span></div><h3>${p.title}</h3><p>${p.desc}</p><div class="phase-items">${p.items.map((it,i)=>{const k=`${p.id}-${i}`,c=!!state.roadmap[k];return `<label class="check-row ${c?'completed':''}"><input type="checkbox" data-roadmap="${k}" ${c?'checked':''}><span>${it}</span></label>`}).join('')}</div><div class="phase-progress"><i style="width:${done/p.items.length*100}%"></i></div>`;
    root.appendChild(el);
  });
  root.querySelectorAll('[data-roadmap]').forEach(cb=>cb.addEventListener('change',e=>{state.roadmap[e.target.dataset.roadmap]=e.target.checked;save();renderRoadmap();}));
}

function renderSkills(){document.querySelector('#skillGrid').innerHTML=skills.map(s=>`<article class="skill-card card"><span class="skill-icon">${s.code}</span><h3>${s.title}</h3><p>${s.text}</p><ul>${s.list.map(x=>`<li>${x}</li>`).join('')}</ul><div class="outcome"><strong>DONE LOOKS LIKE</strong><br>${s.outcome}</div></article>`).join('');}

function renderCheckGroup(rootId,items,key,countId){
  const root=document.querySelector(rootId); const obj=state.checks[key]||{};
  root.innerHTML=items.map((x,i)=>`<label><input type="checkbox" data-group="${key}" data-idx="${i}" ${obj[i]?'checked':''}><span>${x}</span></label>`).join('');
  root.querySelectorAll('input').forEach(cb=>cb.addEventListener('change',e=>{state.checks[key][e.target.dataset.idx]=e.target.checked;save();renderInterview();}));
  document.querySelector(countId).textContent=`${items.filter((_,i)=>obj[i]).length}/${items.length}`;
}
function renderInterview(){renderCheckGroup('#dsaTopics',dsaTopics,'dsa','#dsaTopicCount');renderCheckGroup('#systemTopics',systemTopics,'system','#systemTopicCount');renderCheckGroup('#storyTopics',storyTopics,'stories','#storyTopicCount');}

function renderWeekly(){
  const root=document.querySelector('#weeklyTasks');
  root.innerHTML=state.weekly.map(t=>`<div class="task-item ${t.done?'done':''}"><input type="checkbox" data-weekly="${t.id}" ${t.done?'checked':''}><label><span>${esc(t.text)}</span><div class="task-meta">${esc(t.tag||'CUSTOM')}</div></label>${t.custom?`<button class="delete-task" data-delete-task="${t.id}" title="Delete">×</button>`:''}</div>`).join('');
  root.querySelectorAll('[data-weekly]').forEach(cb=>cb.addEventListener('change',e=>{const t=state.weekly.find(x=>x.id===e.target.dataset.weekly);if(t)t.done=e.target.checked;save();renderWeekly();}));
  root.querySelectorAll('[data-delete-task]').forEach(b=>b.addEventListener('click',e=>{state.weekly=state.weekly.filter(x=>x.id!==e.currentTarget.dataset.deleteTask);save();renderWeekly();}));
}

function renderApplications(){
  const body=document.querySelector('#applicationTable'); const empty=document.querySelector('#emptyApplications');
  body.innerHTML=state.applications.map(a=>`<tr><td>${esc(a.company)}</td><td>${esc(a.role)}</td><td><span class="status-badge">${esc(a.status)}</span></td><td>${esc(a.date)}</td><td>${a.link?`<a class="table-link" href="${esc(a.link)}" target="_blank" rel="noreferrer">Open ↗</a>`:'—'}</td><td><button class="remove-app" data-app-id="${a.id}">×</button></td></tr>`).join('');
  empty.style.display=state.applications.length?'none':'block';
  body.querySelectorAll('[data-app-id]').forEach(b=>b.addEventListener('click',e=>{state.applications=state.applications.filter(x=>x.id!==e.currentTarget.dataset.appId);save();renderApplications();}));
}

let resourceFilter='All';
function renderResourceFilters(){
  const cats=['All',...new Set(resources.map(r=>r.cat))];
  document.querySelector('#resourceFilters').innerHTML=cats.map(c=>`<button class="${resourceFilter===c?'active':''}" data-resource-filter="${c}">${c}</button>`).join('');
  document.querySelectorAll('[data-resource-filter]').forEach(b=>b.addEventListener('click',e=>{resourceFilter=e.currentTarget.dataset.resourceFilter;renderResourceFilters();renderResources();}));
}
function renderResources(){
  const q=document.querySelector('#resourceSearch').value.trim().toLowerCase();
  const list=resources.filter(r=>(resourceFilter==='All'||r.cat===resourceFilter)&&(`${r.title} ${r.desc} ${r.cat}`.toLowerCase().includes(q)));
  document.querySelector('#resourceGrid').innerHTML=list.map(r=>`<article class="resource card"><span class="category">${r.cat}</span><h3>${r.title}</h3><p>${r.desc}</p><a href="${r.url}" target="_blank" rel="noreferrer">Open resource ↗</a></article>`).join('');
}

function updateSummary(){
  const allRoadmap=roadmap.flatMap(p=>p.items.map((_,i)=>`${p.id}-${i}`));
  const doneRoadmap=allRoadmap.filter(k=>state.roadmap[k]).length; const percent=Math.round(doneRoadmap/allRoadmap.length*100);
  document.querySelector('#overallPercent').textContent=`${percent}%`; document.querySelector('#overallRing').style.setProperty('--p',percent); document.querySelector('#overallCount').textContent=`${doneRoadmap} of ${allRoadmap.length} roadmap items completed`;
  document.querySelector('#overallMessage').textContent=percent<20?'Building momentum':percent<50?'Foundation taking shape':percent<80?'Staff-level depth growing':'Ready for the next level';
  const next=roadmap.find(p=>p.items.some((_,i)=>!state.roadmap[`${p.id}-${i}`]))||roadmap.at(-1); document.querySelector('#currentPhase').textContent=next.title;
  const weekDone=state.weekly.filter(t=>t.done).length; document.querySelector('#weekDone').textContent=weekDone; document.querySelector('#weekTotal').textContent=state.weekly.length;
  const metric=(name,target)=>{const completed=state.weekly.filter(t=>t.metric===name&&t.done).reduce((s,t)=>s+(t.value||0),0);return [completed,target]};
  [['dsa',5,'#dsaScore','#dsaBar'],['design',2,'#designScore','#designBar'],['applications',10,'#appScore','#appBar']].forEach(([n,t,l,b])=>{const[v,target]=metric(n,t);document.querySelector(l).textContent=`${v} / ${target}`;document.querySelector(b).style.width=`${Math.min(100,v/target*100)}%`;});
}

function exportData(){
  const blob=new Blob([JSON.stringify({...state, exportedAt:new Date().toISOString()},null,2)],{type:'application/json'}); const url=URL.createObjectURL(blob); const a=document.createElement('a'); a.href=url; a.download=`abilash-career-os-backup-${new Date().toISOString().slice(0,10)}.json`; a.click(); URL.revokeObjectURL(url);
}
function applyTheme(){document.documentElement.dataset.theme=state.theme==='light'?'light':'dark';document.querySelector('#themeToggle').textContent=state.theme==='light'?'☾':'☼';}

function init(){
  renderRoadmap(); renderSkills(); renderInterview(); renderWeekly(); renderApplications(); renderResourceFilters(); renderResources(); updateSummary(); applyTheme();
  const cert=document.querySelector('#certProgress'); cert.value=state.cert||0; document.querySelector('#certProgressLabel').textContent=`${cert.value}%`; cert.addEventListener('input',e=>{state.cert=+e.target.value;document.querySelector('#certProgressLabel').textContent=`${state.cert}%`;save();});
  const notes=document.querySelector('#weeklyNotes'); notes.value=state.notes||''; notes.addEventListener('input',e=>{state.notes=e.target.value;save();});
  document.querySelector('#resourceSearch').addEventListener('input',renderResources);
  document.querySelector('#addTaskBtn').addEventListener('click',()=>document.querySelector('#taskForm').classList.remove('hidden')); document.querySelector('#cancelTaskBtn').addEventListener('click',()=>document.querySelector('#taskForm').classList.add('hidden'));
  document.querySelector('#taskForm').addEventListener('submit',e=>{e.preventDefault();const input=document.querySelector('#taskInput');state.weekly.push({id:`custom-${Date.now()}`,text:input.value.trim(),tag:'CUSTOM',done:false,custom:true});input.value='';document.querySelector('#taskForm').classList.add('hidden');save();renderWeekly();});
  document.querySelector('#addApplicationBtn').addEventListener('click',()=>document.querySelector('#applicationForm').classList.remove('hidden')); document.querySelector('#cancelApplicationBtn').addEventListener('click',()=>document.querySelector('#applicationForm').classList.add('hidden'));
  document.querySelector('#applicationForm').addEventListener('submit',e=>{e.preventDefault();const link=document.querySelector('#linkInput').value.trim();state.applications.unshift({id:`app-${Date.now()}`,company:document.querySelector('#companyInput').value.trim(),role:document.querySelector('#roleInput').value.trim(),status:document.querySelector('#statusInput').value,link,date:new Date().toLocaleDateString('en-IN',{day:'2-digit',month:'short',year:'numeric'})});e.target.reset();e.target.classList.add('hidden');save();renderApplications();});
  ['#exportBtn','#exportBtn2'].forEach(s=>document.querySelector(s).addEventListener('click',exportData));
  document.querySelector('#importInput').addEventListener('change',async e=>{const f=e.target.files[0];if(!f)return;try{const imported=JSON.parse(await f.text());state={...baseState(),...imported};save();location.reload();}catch{alert('That file is not a valid Career OS backup.');}});
  document.querySelector('#themeToggle').addEventListener('click',()=>{state.theme=state.theme==='light'?'dark':'light';save();applyTheme();});
  document.querySelector('#resetBtn').addEventListener('click',()=>{if(confirm('Reset all Career OS progress? Export a backup first if you may need it.')){state=baseState();save();location.reload();}});
}

