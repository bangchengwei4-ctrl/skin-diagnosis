const fs=require('fs');
const outPath = fs.realpathSync('./index.html');
const html = '<!DOCTYPE html><html lang=zh-CN><head><meta charset=UTF-8><meta name=viewport content=width=device-width,initial-scale=1.0><title>痘痘皮肤自测诊断</title><style>
:root{--p:#2d6a4f;--pl:#40916c;--pb:#e8f5e9;--a:#ff6b6b;--al:#ffe8e8;--w:#e67e22;--wb:#fef3e2}
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
html{font-size:16px}
body{font-family:-apple-system,PingFang SC,Noto Sans SC,Microsoft YaHei,sans-serif;background:#fafafa;color:#171717;min-height:100vh;display:flex;align-items:center;flex-direction:column}
.c{width:100%;max-width:640px;padding:20px}
.hd{text-align:center;padding:24px 0}
.hd h1{font-size:22px;color:#171717}
.pb{height:6px;background:#e5e5e5;border-radius:3px;margin:8px 0 16px;overflow:hidden}
.pb-bar{height:100%;background:linear-gradient(90deg,#2d6a4f,#40916c);border-radius:3px;transition:width .5s;width:0%}
.cd{background:#fff;border-radius:12px;padding:24px;box-shadow:0 1px 3px rgba(0,0,0,.06);margin-bottom:16px;display:none}
.cd.a{display:block;animation:in .35s}
@keyframes in{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}
.btn{flex:1;padding:14px 24px;border:none;border-radius:8px;font-size:15px;font-weight:600;cursor:pointer}
.btn-p{background:#2d6a4f;color:#fff}
.in{text-align:center;padding:40px 0}
.in h2{font-size:24px;font-weight:700;color:#171717}
.in p{font-size:14px;color:#737373;line-height:1.6;max-width:480px;margin:0 auto 24px}
.q{margin-bottom:16px}
.ql{font-size:14px;font-weight:600;color:#404040;margin-bottom:8px}
.ops{display:flex;flex-direction:column;gap:8px}
.op{display:flex;align-items:center;padding:12px 16px;border:1.5px solid #d4d4d4;border-radius:8px;cursor:pointer;font-size:14px;gap:10px;user-select:none}
.op:hover{border-color:#40916c;background:#e8f5e9}
.op.s{border-color:#2d6a4f;background:#e8f5e9;font-weight:600}
.op .rb{width:20px;height:20px;border:2px solid #d4d4d4;border-radius:50%;flex-shrink:0}
.op.s .rb{border-color:#2d6a4f}
.bg{display:flex;gap:12px;margin-top:20px}
.ld{display:none;text-align:center;padding:60px 0;flex-direction:column;align-items:center}
.ld.a{display:flex}
.ld .sp{width:40px;height:40px;border:4px solid #e5e5e5;border-top-color:#2d6a4f;border-radius:50%;animation:spin 1s linear infinite}
@keyframes spin{to{transform:rotate(360deg)}}
@media(max-width:480px){.c{padding:16px}.cd{padding:20px}.bg{flex-direction:column}}
</style></head><body><div class=c>
<div class=hd><h1>痘痘皮肤自测诊断</h1><p>6步找到解决方案</p></div>
<div class=pb><div class=pb-bar id=pb></div></div>
<div class=cd id=intro><div class=in><h2>开始自测</h2><p>回答简单问题获取专业的痘痘皮肤分析方案</p><button class=btn-p id=startBtn>开始</button></div></div>
<div id=stages></div>
<div class=ld id=loading><div class=sp></div><p>分析中...</p></div>
<div id=result></div>
</div>
<script>
const btn=document.getElementById("startBtn");
const stages=document.getElementById("stages");
const loading=document.getElementById("loading");
const result=document.getElementById("result");
const pb=document.getElementById("pb");
const questions=[
{q:"你长痘主要在哪些位置?",opts:[{l:"额头/发际线",v:"forehead"},{l:"脸颊",v:"cheek"},{l:"下巴/下颌线",v:"jawline"},{l:"全脸",v:"all"}]},
{q:"痘痘是什么样子的?",opts:[{l:"闭口/粉刺(不红不痛)",v:"closed"},{l:"红肿痘(按着痛)",v:"inflamed"},{l:"囊肿/结节(大且深)",v:"cyst"}]},
{q:"主要规律?",opts:[{l:"月经前后加重",v:"hormonal"},{l:"压力/熬夜后加重",v:"stress"},{l:"吃甜食/牛奶后加重",v:"diet"}]},
{q:"长痘多长时间了?",opts:[{l:"刚几周",v:"new"},{l:"反复几个月",v:"months"},{l:"很多年了",v:"years"}]},
{q:"之前用过?",opts:[{l:"没处理过",v:"none"},{l:"刷酸/护肤品",v:"otc"},{l:"看医生/吃药",v:"rx"}]}
];
let qIdx=0,ans={};
function showQ(i){
if(i>=questions.length){analyze();return;}
const q=questions[i];
let h="<div class=cd.a><h2>第"+(i+1)+"/"+questions.length+"步</h2><div class=ql>"+q.q+"</div><div class=ops>";
for(let j=0;j<q.opts.length;j++)h+="<div class=op data-i="+j+"><div class=rb></div><span>"+q.opts[j].l+"</span></div>";
h+="</div><button class=btn-p id=nextBtn>下一步</button></div>";
stages.innerHTML=h;
pb.style.width=((i/questions.length)*85)+"%";
document.getElementById("nextBtn").onclick=()=>next(i);
document.querySelectorAll(".op").forEach((el,k)=>{el.onclick=()=>{ans[i]=k;document.querySelectorAll(".op").forEach(e=>e.classList.remove("s"));el.classList.add("s");};});
}
btn.onclick=()=>{document.getElementById("intro").classList.remove("a");showQ(0);};
function next(i){if(ans[i]===undefined){alert("请选择一个选项");return;}qIdx=i+1;showQ(qIdx);}
function analyze(){
stages.innerHTML="";loading.classList.add("a");
setTimeout(()=>{loading.classList.remove("a");showResult();},1500);
}
function showResult(){
pb.style.width="100%";
result.style.display="block";
result.innerHTML="<div style=background:linear-gradient(135deg,#2d6a4f,#1b4332);color:#fff;border-radius:12px;padding:20px;margin-bottom:16px><h2>分析完成</h2><p style=opacity:.9>根据你的回答,建议优先修护屏障和抗炎。</p></div><div style=background:#fff;border:1px solid #e5e5e5;border-radius:12px;padding:16px;margin-bottom:12px><div style=background:#e8f5e9;border-radius:6px;padding:8px 12px;margin:6px 0;font-size:13px;color:#2d6a4f>✅ 建议使用:氨基酸洁面+B5修护+壬二酸局部点涂</div><div style=background:#ffe8e8;border-radius:6px;padding:8px 12px;margin:6px 0;font-size:13px;color:#c0392b>❌ 暂停使用:酸类/A醇/磨砂/荷荷巴油</div></div><div style=background:#fff;border:1px solid #e5e5e5;border-radius:12px;padding:16px><div style=background:#e8f5e9;border-radius:6px;padding:8px 12px;margin:6px 0;font-size:13px;color:#2d6a4f><b>阶段一(第1-2周):</b>纯修护,停用所有功能产品</div><div style=background:#e8f5e9;border-radius:6px;padding:8px 12px;margin:6px 0;font-size:13px;color:#2d6a4f><b>阶段二(第3-5周):</b>修护打底+壬二酸局部点涂</div><div style=background:#e8f5e9;border-radius:6px;padding:8px 12px;margin:6px 0;font-size:13px;color:#2d6a4f><b>阶段三(第6-12周):</b>逐步恢复完整护肤</div></div>";
}
</script>
</div></body></html>';
fs.writeFileSync(outPath, html, 'utf8');
console.log('OK: ' + html.length + ' bytes');
