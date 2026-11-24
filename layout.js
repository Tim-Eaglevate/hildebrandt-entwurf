/* Hildebrandt Entwurf: Kopf, Menü, Fuß, Icons, Anfrageliste, Standortsuche */
(function(){
const P={
box:'<path d="M21 8l-9-5-9 5v8l9 5 9-5z"/><path d="M3 8l9 5 9-5M12 13v8"/>',
layers:'<path d="M12 2 2 7l10 5 10-5-10-5z"/><path d="m2 17 10 5 10-5"/><path d="m2 12 10 5 10-5"/>',
cloud:'<path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9z"/>',
tape:'<circle cx="10" cy="12" r="7"/><circle cx="10" cy="12" r="2.5"/><path d="M17 12h5"/>',
shield:'<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>',
cog:'<circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1"/>',
drop:'<path d="M12 2.7 6.3 8.4a8 8 0 1 0 11.4 0z"/>',
mail:'<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 6-10 7L2 6"/>',
leaf:'<path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.5 19 2c1 2 2 4.2 2 8 0 5.5-4.8 10-10 10z"/><path d="M2 21c0-3 1.9-5.4 5.1-6"/>',
spark:'<path d="M12 3l2.5 6.5L21 12l-6.5 2.5L12 21l-2.5-6.5L3 12l6.5-2.5z"/>',
truck:'<path d="M1 3h15v13H1zM16 8h4l3 3v5h-7z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/>',
cart:'<circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.7 13.4a2 2 0 0 0 2 1.6h9.7a2 2 0 0 0 2-1.6L23 6H6"/>',
phone:'<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z"/>',
search:'<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>',
arrow:'<path d="M5 12h14M13 6l6 6-6 6"/>',
ext:'<path d="M15 3h6v6M10 14 21 3M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>',
pin:'<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>',
check:'<path d="M20 6 9 17l-5-5"/>',
factory:'<path d="M2 20h20V8l-6 4V8l-6 4V4H2z"/><path d="M6 16h2M12 16h2M18 16h0"/>',
food:'<path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2M7 2v20M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3zm0 0v7"/>',
ship:'<path d="M2 21c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1 .6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/><path d="M19.4 17 21 12H3l1.6 5M12 12V3l6 6h-6"/>',
build:'<path d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-6h6v6"/>',
book:'<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20V3H6.5A2.5 2.5 0 0 0 4 5.5z"/><path d="M4 19.5V21h16"/>',
down:'<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/>',
users:'<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8"/>',
award:'<circle cx="12" cy="8" r="6"/><path d="M15.5 13 17 22l-5-3-5 3 1.5-9"/>',
case:'<rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>',
clock:'<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',
file:'<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/>',
pkg:'<path d="M16.5 9.4 7.5 4.2M21 16V8a2 2 0 0 0-1-1.7l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.7l7 4a2 2 0 0 0 2 0l7-4a2 2 0 0 0 1-1.7z"/><path d="M3.3 7 12 12l8.7-5M12 22V12"/>',
hammer:'<path d="m15 12-8.5 8.5a2.1 2.1 0 0 1-3-3L12 9"/><path d="M17.6 15 22 10.6M20 12l-8-8 2.5-2.5 8 8z"/>',
list:'<path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"/>',
chev:'<path d="m6 9 6 6 6-6"/>',
menu:'<path d="M3 6h18M3 12h18M3 18h18"/>',
plus:'<path d="M12 5v14M5 12h14"/>',
ruler:'<path d="M21.3 8.7 8.7 21.3a1 1 0 0 1-1.4 0l-4.6-4.6a1 1 0 0 1 0-1.4L15.3 2.7a1 1 0 0 1 1.4 0l4.6 4.6a1 1 0 0 1 0 1.4z"/><path d="m7.5 10.5 2 2M10.5 7.5l2 2M13.5 4.5l2 2M4.5 13.5l2 2"/>'
};
const I=(n,c)=>`<svg class="ico${c?' '+c:''}" viewBox="0 0 24 24">${P[n]||''}</svg>`;
window.HB_ICON=I;

const SHOP='https://www.hilde24.de/';
const NAV=[
 {t:'Produkte',c:'c2',top:'Über 55.000 Artikel in acht Produktwelten',d:'Vom Karton bis zur Stretchfolie. Alles für Ihren Packplatz, ab Lager aus 16 Standorten.',foot:['Alle Produkte','/hildebrandt-entwurf/#produkte'],items:[
  ['box','Kartons und Wellpappe','Faltkartons, Wellpappe, Papier, Pappen','#'],
  ['layers','Folien und Stretchfolie','Stretchfolie, Beutel, Schrumpffolie','/hildebrandt-entwurf/produkte/stretchfolien/'],
  ['cloud','Polster und Füllmaterial','Luftpolster, Füllchips, Schaumsysteme','#'],
  ['pkg','Versandverpackung','Versandtaschen, Hülsen, Begleitpapiertaschen','#'],
  ['tape','Kleben, Heften, Umreifen','Klebeband, Hefter, Umreifungsband','#'],
  ['shield','Ladungssicherung und Korrosionsschutz','Paletten, Kantenschutz, VCI','#'],
  ['cog','Maschinen und Packplatz','Stretchwickler, Packtische, Luftkissen','#'],
  ['drop','Betriebsbedarf','Hygiene, Entsorgung, Streusalz','#']]},
 {t:'Lösungen',c:'c2',top:'Mehr als Katalogware',d:'Wenn Standard nicht reicht: Wir planen, fertigen und betreuen. Von der Einlage nach Maß bis zur Stretchanlage.',foot:['Beratung anfragen','/hildebrandt-entwurf/anfrage/'],items:[
  ['ruler','Individualverpackung','Kartons und Einlagen nach Maß, mit Ihrem Druck','#'],
  ['leaf','Nachhaltig verpacken','laio Green und die neue EU-Verpackungsverordnung','#'],
  ['cog','Stretchanlagen leasen','Maschine mieten statt kaufen, inklusive Service','#'],
  ['case','Packplatz einrichten','Packtische und Abläufe, vor Ort geplant','#']]},
 {t:'Branchen',c:'c2',top:'Verpackung nach Einsatzgebiet',d:'Jede Branche verpackt anders. Hier finden Sie, was in Ihrem Betrieb gebraucht wird.',items:[
  ['cart','Versandhandel und E-Commerce','Versandkartons, Polster, Klebeband','#'],
  ['factory','Industrie und Maschinenbau','Schwergut, VCI, Ladungssicherung','#'],
  ['food','Lebensmittel','Lebensmittelechte Folien und Kartons','#'],
  ['truck','Logistik und Spedition','Stretchfolie, Paletten, Umreifung','#'],
  ['ship','Export und Seefracht','Containertrocknung, Korrosionsschutz','#'],
  ['hammer','Handwerk und Bau','Abdeckfolie, Malerkrepp, Big Bags','#']]},
 {t:'Wissen',c:'c2',top:'Ratgeber, Normen, Kataloge',d:'Normen, Verordnungen und Praxiswissen rund ums Verpacken, verständlich aufbereitet.',items:[
  ['book','Ratgeber','Fachartikel rund ums Verpacken','#'],
  ['box','FEFCO-Code','Alle Kartonbauarten im Überblick','#'],
  ['leaf','EU-Verpackungsverordnung','Was die PPWR für Sie bedeutet','#'],
  ['down','Kataloge und Downloads','Katalog, Produktflyer, Zertifikate','#']]},
 {t:'Unternehmen',c:'c2',top:'Paul Hildebrandt AG',d:'Seit über 135 Jahren Verpackungspartner für Industrie und Handel, mit 16 Niederlassungen in vier Ländern.',items:[
  ['build','Über uns','Seit über 135 Jahren','#'],
  ['pin','Standorte','16 Niederlassungen in vier Ländern','/hildebrandt-entwurf/#kontakt'],
  ['users','Referenzen','Kunden, die mit uns verpacken','#'],
  ['award','Zertifikate','Qualität und Umwelt','#'],
  ['clock','Aktuelles','Neuigkeiten aus dem Unternehmen','#'],
  ['case','Karriere','Offene Stellen an allen Standorten','#']]}
];
const tile=i=>`<a class="mtile" href="${i[3]}"><span class="ic">${I(i[0])}</span><span class="tx"><b>${i[1]}</b><small>${i[2]}</small></span>${I('arrow','go')}</a>`;
const cur=document.body.dataset.nav||'';

const hdr=`
<div class="topbar"><div class="wrap">
 <div class="l"><span>${I('phone')}Beratung <b>04193 994 5</b></span><span>${I('truck')}Lieferung aus 16 Standorten</span><span>${I('pkg')}55.000 Artikel ab Lager</span></div>
 <a href="${SHOP}" target="_blank" rel="noopener">${I('cart')}Sofort bestellen im Onlineshop HILDE24 ${I('ext')}</a>
</div></div>
<header class="hdr"><div class="wrap">
 <a class="logo" href="/hildebrandt-entwurf/"><img src="/hildebrandt-entwurf/img/logo.png" alt="Hildebrandt, Packende Welten"></a>
 <ul class="nav">${NAV.map(n=>`<li class="${cur===n.t?'on':''}"><a href="#">${n.t}${I('chev','chev')}</a>
  <div class="mega"><div class="wrap"><div class="mega-in">
   <aside class="mega-lead"><span class="k">${n.t}</span><h3>${n.top}</h3><p>${n.d}</p>
    ${n.foot?`<a class="mlink" href="${n.foot[1]}">${n.foot[0]}${I('arrow')}</a>`:''}
    <a class="mlink" href="${SHOP}" target="_blank" rel="noopener">Direkt im Onlineshop bestellen${I('ext')}</a>
    <div class="mega-call">${I('phone')}<span>Fragen? Wir beraten Sie<b>04193 994 5</b></span></div></aside>
   <div class="mgrid ${n.c}">${n.items.map(tile).join('')}</div></div></div></div></li>`).join('')}</ul>
 <div class="hdr-r">
  <a class="icon-btn hide-m" href="/hildebrandt-entwurf/#kontakt" title="Ansprechpartner">${I('pin')}</a>
  <a class="btn btn-o btn-s" href="${SHOP}" target="_blank" rel="noopener">Onlineshop${I('ext')}</a>
  <a class="btn btn-p btn-s" href="/hildebrandt-entwurf/anfrage/">Anfrage <span class="cnt" data-cnt hidden>0</span></a>
  <button class="icon-btn burger" aria-label="Menü">${I('menu')}</button>
 </div>
</div></header>
<nav class="mnav">${NAV.map(n=>`<details><summary>${n.t}${I('chev')}</summary><div class="mgrid">${n.items.map(tile).join('')}</div></details>`).join('')}
 <div class="btns"><a class="btn btn-p" href="/hildebrandt-entwurf/anfrage/">Anfrage stellen</a><a class="btn btn-o" href="${SHOP}" target="_blank" rel="noopener">${I('cart')}Zum Onlineshop</a></div></nav>`;

const ft=`
<footer class="foot"><div class="wrap">
 <div class="cta">
  <div><h2>Was dürfen wir für Sie <span class="y">verpacken?</span></h2><p>Bestellen Sie Katalogware direkt im Shop oder sprechen Sie mit Ihrer Niederlassung. Für Sonderformate, Großmengen und Muster sind wir persönlich da.</p></div>
  <div class="opts">
   <a class="opt first" href="/hildebrandt-entwurf/anfrage/"><span><b>Angebot oder Muster anfragen</b><small>Antwort in der Regel am selben Werktag</small></span>${I('arrow')}</a>
   <a class="opt" href="tel:+4941939945"><span><b class="big-tel">04193 994 5</b><small>Zentrale Henstedt-Ulzburg</small></span>${I('arrow')}</a>
   <a class="opt" href="${SHOP}" target="_blank" rel="noopener"><span><b>Onlineshop HILDE24</b><small>Staffelpreise, Lieferung in ganz Deutschland</small></span>${I('ext')}</a>
  </div>
 </div>
 <div class="fcols">
  <div class="fbrand"><img src="/hildebrandt-entwurf/img/logo.png" alt="Hildebrandt"><p>Paul Hildebrandt AG<br>Lise-Meitner-Straße 1<br>24558 Henstedt-Ulzburg</p>
   <div class="cert">ISO 9001 <i>/</i> FSC zertifiziert <i>/</i> 16 Standorte</div></div>
  <div><h4>Produkte</h4><ul><li><a href="#">Kartons und Wellpappe</a></li><li><a href="/hildebrandt-entwurf/produkte/stretchfolien/">Stretchfolie</a></li><li><a href="#">Polster und Füllmaterial</a></li><li><a href="#">Versandverpackung</a></li><li><a href="#">Alle Produkte</a></li></ul></div>
  <div><h4>Lösungen</h4><ul><li><a href="#">Individualverpackung</a></li><li><a href="#">Nachhaltig verpacken</a></li><li><a href="#">Stretchanlagen leasen</a></li><li><a href="#">Packplatz einrichten</a></li></ul></div>
  <div><h4>Wissen</h4><ul><li><a href="#">Ratgeber</a></li><li><a href="#">FEFCO-Code</a></li><li><a href="#">EU-Verpackungsverordnung</a></li><li><a href="#">Kataloge</a></li></ul></div>
  <div><h4>Unternehmen</h4><ul><li><a href="#">Über uns</a></li><li><a href="/hildebrandt-entwurf/#kontakt">Standorte</a></li><li><a href="#">Referenzen</a></li><li><a href="#">Karriere</a></li></ul></div>
 </div>
 <div class="fbot"><span>© 2026 Paul Hildebrandt AG · Onlineshop: HILDE24 GmbH, ein Unternehmen der Hildebrandt-Gruppe</span><div class="l"><a href="#">Impressum</a><a href="#">Datenschutz</a><a href="#">AGB</a></div></div>
</div></footer><div class="toast"></div>`;

document.body.insertAdjacentHTML('afterbegin',hdr);
document.body.insertAdjacentHTML('beforeend',ft);
document.querySelectorAll('i[data-i]').forEach(e=>{e.outerHTML=I(e.dataset.i,e.className)});

const mn=document.querySelector('.mnav');
document.querySelector('.burger').onclick=()=>mn.classList.toggle('on');

/* Nicht ausgebaute Seiten */
const toast=document.querySelector('.toast');let tt;
document.addEventListener('click',e=>{const a=e.target.closest('a[href="#"]');if(!a)return;e.preventDefault();
 toast.textContent='Im Entwurf ausgebaut: Startseite, Stretchfolie, Handstretchfolie, Anfrage';toast.classList.add('on');clearTimeout(tt);tt=setTimeout(()=>toast.classList.remove('on'),2600)});

/* Einblenden */
const io=new IntersectionObserver(es=>es.forEach(x=>{if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}}),{threshold:.12});
document.querySelectorAll('.rv').forEach(e=>io.observe(e));

/* Anfrageliste (nur in diesem Browser) */
const K='hb-anfrage';
const get=()=>{try{return JSON.parse(localStorage.getItem(K)||'[]')}catch(e){return[]}};
const set=v=>{try{localStorage.setItem(K,JSON.stringify(v))}catch(e){}};
const paint=()=>{const n=get().length;document.querySelectorAll('[data-cnt]').forEach(c=>{c.textContent=n;c.hidden=!n})};
window.HB_LIST={get,set,paint};
document.querySelectorAll('[data-add]').forEach(b=>{
 const id=b.dataset.add;const on=()=>get().some(x=>x.id===id);
 const draw=()=>{b.classList.toggle('on',on());b.innerHTML=on()?I('check')+'Vorgemerkt':I('plus')+'Anfragen'};
 draw();b.onclick=()=>{let l=get();l=on()?l.filter(x=>x.id!==id):[...l,{id,t:b.dataset.t}];set(l);draw();paint()};
});
paint();

/* Standortsuche nach PLZ (Zuordnung zur Veranschaulichung) */
const ST={
 hu:['Henstedt-Ulzburg (Hamburg)','Lise-Meitner-Straße 1, 24558 Henstedt-Ulzburg','04193 994 5','+4941939945'],
 oy:['Oyten (Bremen)','An der Autobahn 25, 28876 Oyten','04207 9169 0','+49420791690'],
 bn:['Bad Nenndorf (Hannover)','Osterkamp 12, 31542 Bad Nenndorf','05723 9900 0','+49572399000'],
 hm:['Hann. Münden','Auf dem Dreisch 6, 34346 Hann. Münden','05541 90249 0','+495541902490'],
 bk:['Bergkamen (Dortmund)','Industriestraße 18, 59192 Bergkamen','02389 90439 0','+492389904390'],
 mh:['Mühlheim (Frankfurt)','Industriestraße 12, 63165 Mühlheim','06108 82579 0','+496108825790'],
 pf:['Pfullingen (Stuttgart)','Uhlandstraße 66, 72793 Pfullingen','07121 43359 0','+497121433590'],
 wo:['Wörth an der Isar (München)','Siemensstraße 21, 84109 Wörth','08702 67999 0','+498702679990'],
 fu:['Fürth (Nürnberg)','Eggenweg 8, 90765 Fürth','0911 58180 0','+49911581800'],
 lo:['Löbichau (Gera)','Saure Allee 26 e, 04626 Löbichau','034496 2351 0','+493449623510'],
 dd:['Dresden','Rethelstraße 49, 01139 Dresden','0351 89765 0','+49351897650'],
 gk:['Groß Kienitz (Berlin)','Weidendamm 3, 15831 Blankenfelde-Mahlow','033708 500 4','+49337085004'],
 ka:['Kavelstorf (Rostock)','Ellernbruch 1, 18196 Kavelstorf','038208 646 0','+49382086460']
};
const MAP={0:'dd',1:'dd',2:'dd',3:'gk',4:'lo',6:'lo',7:'lo',8:'lo',9:'dd',10:'gk',12:'gk',13:'gk',14:'gk',15:'gk',16:'gk',17:'ka',18:'ka',19:'ka',
 20:'hu',21:'hu',22:'hu',23:'hu',24:'hu',25:'hu',26:'oy',27:'oy',28:'oy',29:'bn',30:'bn',31:'bn',32:'bn',33:'bk',34:'hm',35:'mh',36:'mh',37:'hm',38:'bn',39:'gk',
 40:'bk',41:'bk',42:'bk',44:'bk',45:'bk',46:'bk',47:'bk',48:'bk',49:'oy',50:'bk',51:'bk',52:'bk',53:'bk',54:'mh',55:'mh',56:'mh',57:'bk',58:'bk',59:'bk',
 60:'mh',61:'mh',63:'mh',64:'mh',65:'mh',66:'mh',67:'mh',68:'mh',69:'mh',70:'pf',71:'pf',72:'pf',73:'pf',74:'pf',75:'pf',76:'pf',77:'pf',78:'pf',79:'pf',
 80:'wo',81:'wo',82:'wo',83:'wo',84:'wo',85:'wo',86:'wo',87:'pf',88:'pf',89:'pf',90:'fu',91:'fu',92:'fu',93:'wo',94:'wo',95:'fu',96:'fu',97:'fu',98:'lo',99:'lo'};
document.querySelectorAll('[data-finder]').forEach(f=>{
 const inp=f.querySelector('input'),out=f.querySelector('[data-out]');
 const show=k=>{const s=ST[k];out.innerHTML=`<div class="contact-card"><small>Ihre Niederlassung</small><b>${s[0]}</b><div class="ad">${s[1]}</div><div class="row2"><a class="btn btn-p btn-s" href="tel:${s[3]}">${I('phone')}${s[2]}</a><a class="btn btn-o btn-s" href="/hildebrandt-entwurf/anfrage/">Anfrage an diesen Standort</a></div></div>`};
 const run=()=>{const v=(inp.value||'').replace(/\D/g,'');if(v.length<2)return;const k=MAP[+v.slice(0,2)]||'hu';show(k)};
 inp.addEventListener('input',run);f.querySelector('button')?.addEventListener('click',run);
 show(f.dataset.finder||'hu');
});
/* Standortverzeichnis Startseite */
const ORDER=['hu','ka','gk','oy','bn','hm','dd','lo','bk','mh','fu','pf','wo'];
const lb=document.querySelector('[data-locs]');
if(lb){lb.innerHTML=ORDER.map(k=>{const x=ST[k];const n=x[0].replace(/ \(.*\)/,''),r=(x[0].match(/\((.*)\)/)||[,'Region'])[1];const REG={hm:'Kassel',dd:'Dresden'};return `<div class="lc" data-k="${k}"><b>${n}</b><span>Region ${REG[k]||r}</span><a href="tel:${x[3]}">${x[2]}</a></div>`}).join('')+`<div class="lc abroad"><b>Ausland</b><span>Aabenraa, Ansfelden, Langenthal</span><a href="#">Länderseiten</a></div>`;
 const box=document.querySelector('[data-loc]'),inp=box.querySelector('input');
 const run=()=>{const v=(inp.value||'').replace(/\D/g,'');if(v.length<2)return;const k=MAP[+v.slice(0,2)]||'hu';lb.querySelectorAll('.lc').forEach(e=>e.classList.toggle('hit',e.dataset.k===k))};
 inp.addEventListener('input',run);box.querySelector('button').addEventListener('click',run);}
})();
