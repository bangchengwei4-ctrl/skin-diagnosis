// Treatment plans
var plans={
  hormonal:{
    name:'雄激素型痘痘',desc:'雄激素波动导致皮脂分泌旺盛。常见于月经前后、青春期、30+女性。',
    p1:{t:'控油+抗炎',do:['用壬二酸10%-15%局部或全脸','加烟酰胺4%-5%辅助控油','每天防晒(硬防晒或物理防晒霜)'],dont:['不要过度清洁','不要用手挤痘','不要在经前一周突然换护肤品']},
    p2:{t:'深化调节',do:['继续第一阶段','壬二酸可升级全脸','可加入低浓度水杨酸0.5%-1%在T区'],w:'注意观察经期前后变化,提前3-5天加强管理'},
    p3:{t:'巩固维持',do:['建立长期稳定的护肤节奏','保持壬二酸+烟酰胺组合','咨询医生是否适合口服螺内酯(女性)'],dr:'自行处理8-12周无效\n月经严重不规律+长痘\n出现囊肿/结节型大痘'}
  },
  barrier:{
    name:'屏障受损型痘痘',desc:'角质层受损导致刺激物渗入引发微炎症和毛囊角化异常。常见于过度清洁、刷酸不当、油类手搓按摩。',
    p1:{t:'修护屏障(绝对优先)',do:['停用一切酸类/A醇/高浓度VC/磨砂/洗脸仪','氨基酸表活洁面','含B5+神经酰胺+积雪草苷的修护产品'],dont:['不要用任何活性成分','不要用热水洗脸','不要做任何摩擦面部动作','不要敷片状面膜过久']},
    p2:{t:'修护打底+温和治痘',do:['继续修护打底','加壬二酸10%只在白头/痘区局部点涂','加低浓度烟酰胺3%-5%'],w:'涂壬二酸有刺痛感的话先用修护产品打底过15分钟再涂'},
    p3:{t:'恢复期进阶',do:['保持修护+壬二酸+烟酰胺组合','屏障恢复后加入低浓度水杨酸或A醇'],dr:'修护4周后屏障未见改善\n痘痘在修护期反而加重\n出现大面积炎症或脓疱'}
  },
  diet:{
    name:'饮食型痘痘',desc:'高GI食物和乳制品刺激IGF-1分泌,导致皮脂增多和角质过度增生。常见于喝牛奶/吃甜食后2-4天爆痘。',
    p1:{t:'饮食干预+辅助疏通',do:['停掉牛奶/奶茶/甜面包/蛋糕/乳清蛋白粉2周','外用壬二酸或水杨酸辅助疏通'],dont:['不要全面断食(会升高皮质醇)','不要完全不吃碳水(控制高GI食物即可)']},
    p2:{t:'食物挑战(找元凶)',do:['第3周起每3天加回一种食物观察反应','常见触发顺序:牛奶→奶茶→蛋糕→面包','找到触发物后日常避开即可']},
    p3:{t:'建立长期饮食模式',do:['保持低GI+低乳制品模式','偶尔吃了触发食物提前加强护肤管理','外用低浓度水杨酸或壬二酸每周3-4次'],dr:'严格控制饮食4周后无任何改善\n伴有消化系统不适'}
  },
  stress:{
    name:'压力型痘痘',desc:'皮质醇升高刺激皮脂腺活跃+炎症因子上升。常见于考试/加班/熬夜后爆痘,多为红肿炎性痘。',
    p1:{t:'抗炎+控油+作息',do:['壬二酸10%-15%全脸或局部(抗炎主力)','烟酰胺4%-5%辅助控油','保证睡眠≥7小时'],dont:['不要在压力期叠加太多活性成分','不要熬夜后疯狂敷面膜/刷酸补救']},
    p2:{t:'建立抗压护肤节奏',do:['维持壬二酸+烟酰胺','加入绿茶提取物EGCG','运动后及时洗脸']},
    p3:{t:'长期维稳',do:['壬二酸作为常备武器','保持稳定作息','学会识别压力信号提前加强管理'],dr:'压力源消除后8周无改善\n出现大面积炎性痘或囊肿结节'}
  },
  cosmetic:{
    name:'化妆品堵塞型',desc:'致痘成分堵塞毛囊口。常见于新换防晒/粉底/护发素/发胶后。',
    p1:{t:'排查+停用+疏通',do:['回溯2-4周内新换的所有产品','停用可疑产品换不致痘配方','水杨酸0.5%-2%或壬二酸局部疏通'],dont:['不要叠加更多新产品','不要用油类产品试图溶解闭口']},
    p2:{t:'观察确认',do:['停用后观察2-3周','如痘痘减少则锁定元凶','更换护发素/防晒为不致痘配方'],dr:'停用4周后闭口无变化'}
  },
  friction:{
    name:'摩擦型痘痘',desc:'摩擦导致角质层微损和毛囊角化异常。常见于戴口罩/侧睡/手托脸/打电话。',
    p1:{t:'停止摩擦(核心)',do:['戴口罩每4小时换一次到家立刻洗脸','侧睡换真丝枕套养仰睡习惯','打电话用耳机或免提','手托脸意识到就放下'],dont:['不要继续做任何摩擦面部的行为']},
    p2:{t:'处理已形成的痘',do:['壬二酸或水杨酸处理已有的痘','继续保持零摩擦习惯'],dr:'停止摩擦4周后仍持续长痘'}
  },
  medication:{
    name:'药物诱发型痘痘',desc:'某些药物(皮质类固醇/锂剂/大剂量B12等)可诱发或加重痤疮。',
    p1:{t:'咨询医生+维稳',do:['咨询开药医生能否减量/换药','不要自行停药','最温和护肤:氨基酸洁面+B5+物理防晒'],dont:['不要自行停药或改药','不要用高浓度活性成分']}
  },
  fungal:{
    name:'真菌性毛囊炎(假痘)',desc:'马拉色菌过度繁殖导致毛囊炎症。不是普通痘痘,用祛痘产品会加重。',
    p1:{t:'抗真菌治疗',do:['酮康唑洗剂停留面部3-5分钟洗掉每周2-3次','联苯苄唑乳膏每晚涂','勤换枕套毛巾(60度以上水洗)'],dont:['不要用任何祛痘产品(会加重)','不要用含油脂护肤品(真菌吃油脂)','不要用椰子油等长链脂肪酸产品']},
    p2:{t:'维持防复发',do:['症状消退后酮康唑洗剂改为每周1次','保持面部干爽出汗及时洗掉','持续避免油性护肤品'],dr:'自行处理2-4周无改善(需皮肤科做真菌镜片)\n反复发作'}
  }
};

// Questions data
var qs=[
  {q:'你长痘主要在哪些位置?',os:[{l:'额头/发际线',v:'fh'},{l:'脸颊',v:'ck'},{l:'下巴/下颌线',v:'jw'},{l:'全脸',v:'al'}],k:'loc',multi:1},
  {q:'痘痘是什么样子的?',os:[{l:'闭口/粉刺(不红不痛)',v:'cl'},{l:'红肿痘(按着痛)',v:'in'},{l:'脓包(有脓头)',v:'pu'},{l:'囊肿/结节(大且深)',v:'cy'}],k:'mor',multi:1},
  {q:'痘痘有什么规律?',os:[{l:'月经前后加重',v:'m'},{l:'压力/熬夜后加重',v:'s'},{l:'吃甜食/牛奶后加重',v:'d'},{l:'换季加重',v:'se'},{l:'无明显规律',v:'n'}],k:'pt',multi:1},
  {q:'长痘多久了?',os:[{l:'刚几周',v:'wk'},{l:'反复几个月',v:'mo'},{l:'断断续续很多年',v:'yr'},{l:'一直没停过',v:'al'}],k:'dur'},
  {q:'喝牛奶/吃甜食多吗?',os:[{l:'每天',v:'dy'},{l:'每周几次',v:'of'},{l:'偶尔/很少',v:'oc'}],k:'diet'},
  {q:'睡眠和压力?',os:[{l:'睡眠足压力小',v:'lo'},{l:'偶尔熬夜/有点压力',v:'md'},{l:'长期高压/经常熬夜',v:'hi'}],k:'str'},
  {q:'用油类产品吗?',os:[{l:'没在用',v:'n'},{l:'荷荷巴油',v:'jj'},{l:'卸妆油/护肤油',v:'co'}],k:'oil',multi:1},
  {q:'以下哪些符合你?',os:[{l:'每天戴口罩超2小时',v:'mk'},{l:'侧睡',v:'ss'},{l:'手托脸/摸脸',v:'tf'},{l:'以上都没有',v:'n'}],k:'ph',multi:1}
];

// State
var qi=0,an={};
var stg=document.getElementById('stages'),pb=document.getElementById('pb');
var pbl=document.getElementById('pbl'),ld=document.getElementById('loading');
var lsteps=document.getElementById('lsteps'),intE=document.getElementById('intercept');

// Start
document.getElementById('startBtn').onclick=function(){
  document.getElementById('intro').classList.remove('a');
  showQ(0);
};

function showQ(i){
  if(i>=qs.length){runAnalysis();return;}
  var q=qs[i];
  var h='<div class="cd a"><h2>第'+(i+1)+'/'+qs.length+'步</h2><div class=st>'+q.q+'</div><div class=ops>';
  for(var j=0;j<q.os.length;j++){
    var c=q.multi?'cb':'rb';
    h+='<div class=op><div class='+c+'></div><span>'+q.os[j].l+'</span></div>';
  }
  h+='</div><div class=bg><button class=btn-p id=nx>下一步</button></div></div>';
  stg.innerHTML=h;
  pb.style.width=((i/qs.length)*85)+'%';
  pbl.textContent='步骤'+(i+1)+'/'+qs.length;
  
  // Bind option clicks
  var ops=stg.querySelectorAll('.op');
  for(var j=0;j<ops.length;j++){
    (function(idx){
      ops[idx].onclick=function(){
        var q=qs[i];
        if(q.multi){
          if(!an[i])an[i]=[];
          var arr=an[i];var v=q.os[idx].v;
          if(v==='n'){an[i]=['n'];stg.querySelectorAll('.op').forEach(function(e){e.classList.remove('s')});ops[idx].classList.add('s');return;}
          arr=arr.filter(function(x){return x!=='n'});
          var pos=arr.indexOf(v);
          if(pos>-1){arr.splice(pos,1);ops[idx].classList.remove('s')}else{arr.push(v);ops[idx].classList.add('s')}
          an[i]=arr;
        }else{
          an[i]=v;
          stg.querySelectorAll('.op').forEach(function(e){e.classList.remove('s')});
          ops[idx].classList.add('s');
        }
      };
    })(j);
  }
  
  // Bind next
  document.getElementById('nx').onclick=function(){
    var a=an[i];
    if(a===undefined||a===null||(typeof a==='object'&&a.length===0)){alert('请选择');return;}
    qi=i+1;showQ(qi);
  };
}

function runAnalysis(){
  stg.innerHTML='';ld.classList.add('a');
  var steps=['匹配症状特征...','分析屏障状态...','计算权重...','生成方案...','优化中...'];
  var si=0;
  var ti=setInterval(function(){si++;if(si<steps.length)lsteps.textContent=steps[si];},800);
  setTimeout(function(){
    clearInterval(ti);ld.classList.remove('a');
    var r=calcResult();showResult(r);
  },3000);
}

function calcResult(){
  var w={hormonal:0,barrier:0,diet:0,stress:0,cosmetic:0,friction:0,medication:0};
  var loc=an[0]||[];
  if(loc.includes('ck'))w.barrier+=1;
  if(loc.includes('jw'))w.hormonal+=2;
  if(loc.includes('fh'))w.diet+=1;
  var mor=an[1]||[];
  if(mor.includes('cy'))w.hormonal+=1;
  var pat=an[2]||[];
  if(pat.includes('m'))w.hormonal+=2;
  if(pat.includes('s'))w.stress+=2;
  if(pat.includes('d'))w.diet+=2;
  if(pat.includes('se'))w.barrier+=1;
  var diet=an[4];
  if(diet==='dy')w.diet+=2;
  var str=an[5];
  if(str==='hi')w.stress+=2;
  var oil=an[6]||[];
  if(oil.includes('jj'))w.barrier+=1;
  if(oil.length&&!oil.includes('n'))w.cosmetic+=1;
  var phy=an[7]||[];
  var pc=0;phy.forEach(function(p){if(p!=='n')pc++;});
  if(pc>0)w.friction+=pc;
  var sorted=Object.keys(w).filter(function(k){return w[k]>0}).sort(function(a,b){return w[b]-w[a]});
  return{primary:sorted[0]||'hormonal',secondary:sorted.slice(1,3)||[]};
}

function showResult(res){
  pb.style.width='100%';pbl.textContent='诊断完成';
  var plan=plans[res.primary]||plans.barrier;
  var r='<div class=rsum><h2>诊断结论</h2><div>';
  r+='<span class=ct>🎯 '+plan.name+'</span>';
  res.secondary.forEach(function(s){if(plans[s])r+='<span class=ct>'+plans[s].name+'</span>';});
  r+='</div><p>'+plan.desc+'</p></div>';
  if(plan.p1){
    r+='<div class=pc><div class=pl>🥇 第一阶段</div><div class=pt>'+plan.p1.t+'</div>';
    if(plan.p1.do&&plan.p1.do.length)plan.p1.do.forEach(function(d){r+='<div class=pd>✅ '+d+'</div>';});
    if(plan.p1.dont&&plan.p1.dont.length)plan.p1.dont.forEach(function(d){r+='<div class=px>❌ '+d+'</div>';});
    r+='</div>';
  }
  if(plan.p2){
    r+='<div class=pc><div class=pl>🥈 第二阶段</div><div class=pt>'+plan.p2.t+'</div>';
    if(plan.p2.do&&plan.p2.do.length)plan.p2.do.forEach(function(d){r+='<div class=pd>✅ '+d+'</div>';});
    if(plan.p2.w)r+='<div class=pw>⚠️ '+plan.p2.w+'</div>';
    r+='</div>';
  }
  if(plan.p3){
    r+='<div class=pc><div class=pl>🥉 第三阶段</div><div class=pt>'+plan.p3.t+'</div>';
    if(plan.p3.do&&plan.p3.do.length)plan.p3.do.forEach(function(d){r+='<div class=pd>✅ '+d+'</div>';});
    r+='</div>';
  }
  r+='<div class=rs><div class=st>📅 预期变化时间线</div><table class=tt>';
  r+='<tr><th>时间</th><th>能看到的变化</th><th>还看不到的变化</th></tr>';
  r+='<tr><td>第1-2周</td><td>不再长新的(如果做对了)</td><td>旧痘还没消别急</td></tr>';
  r+='<tr><td>第3-4周</td><td>旧痘开始消退新痘明显减少</td><td>毛孔/痘坑/痘印需更久</td></tr>';
  r+='<tr><td>第8-12周</td><td>整体改善明显出油减少</td><td>逆转长年问题需多个周期</td></tr>';
  r+='</table></div>';
  if(plan.p3&&plan.p3.dr){
    r+='<div class=db><h4>🆘 什么时候该看医生</h4><p>'+plan.p3.dr.replace(/\n/g,'<br>')+'</p></div>';
  }
  r+='<button class=btn-p style=margin-top:16px;width:100% onclick=location.reload()>🔄 重新测试</button>';
  document.getElementById('result').innerHTML=r;document.getElementById('result').style.display='block';
}
