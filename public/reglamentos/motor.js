/* Calibrador de perillas · Reglamentos
   Borradores de reglamento conectados a las perillas calibradas.

   Formato del texto de cada artículo (se guarda como texto plano):
   - Una línea = un párrafo. Las líneas que empiezan con "a) ", "1. ", "- " se muestran como incisos.
   - {{...}}  = valor conectado al calibrador (se actualiza solo):
       {{canton}}                 nombre del cantón
       {{hpv}}                    habitantes por vivienda
       {{v:C01:T4}}               valor de una perilla en una zona, con unidad
       {{z:C01}}                  valor de la perilla en la zona del artículo (artículos por zona)
       {{z:codigo}} {{z:nombre}}  código y nombre de la zona del artículo
       {{zonas:cu}}               lista de zonas (cu, fuera, inc, emisoras, receptoras, todas)
       {{art:id}}                 "artículo N" (número automático del artículo con ese id)
       {{tabla:C01,C02|Título}}   tabla perillas × zonas
       {{ficha}}                  tabla de parámetros de la zona del artículo
       {{zonas}}                  tabla de zonas del transecto
       {{usos}}                   resumen de la tabla de usos por zona
       {{practicas}}              tabla de prácticas incentivables
   - [[...]] = texto por completar (se resalta en amarillo).
   - Líneas que empiezan con "|" forman una tabla fija; la primera fila es el encabezado.
*/
(function(){
"use strict";
const C=()=>window.CAL;
const S=()=>C().S;
const esc=s=>String(s==null?'':s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const clone=o=>JSON.parse(JSON.stringify(o));
const ROM=['','I','II','III','IV','V','VI','VII','VIII','IX','X','XI','XII','XIII','XIV','XV'];
const TOK=/\{\{([^{}]+)\}\}|\[\[([^\[\]]*)\]\]/g;
const BLOCK=/^(tabla:|ficha$|zonas$|usos$|practicas$)/;
const FICHA_DEF=['A05','A03','B01','B02','B03','F05','C01','C02','C03','C04','C09','D01','D05','D03','D08','D02','D07','E01','E02','E03','E05','E06','F01'];
const NOMBRES={'00':'Generalidades','01':'Zonificación','02':'Fraccionamiento y Urbanizaciones','03':'Mapa Oficial','04':'Renovación Urbana','05':'Construcciones','06':'Vialidad y Movilidad','07':'Espacio Público y Paisaje','08':'Publicidad Exterior','09':'Audiencia Pública'};
/* Escudos municipales: endpoint del propio Worker (ver worker.js y public/escudos.json).
   Devuelve la imagen ya en base64 para que entre al PDF sin pelear con CORS ni hotlink.
   Es del Calibrador, no del atlas, para no depender de los permisos de otra aplicación. */
const ESCUDOS_API='/api/escudos';
/* Isotipo de PlanoExactoCR (trazos vectoriales, sin red) para el pie de la portada del PDF. */
const PE_LOGO_SVG='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 322.39 256.00"><g transform="translate(161.195,128.000) scale(2.38589) translate(-0.000,-0.000)"><path d="M0.000,41.913 L55.826,14.000 L43.503,7.839 L35.677,11.752 L40.174,14.000 L0.000,34.087 L-40.174,14.000 L-35.677,11.752 L-43.503,7.839 L-55.826,14.000 Z" fill="#073B32"/><path d="M0.000,27.913 L55.826,0.000 L43.503,-6.161 L35.677,-2.248 L40.174,0.000 L0.000,20.087 L-40.174,0.000 L-35.677,-2.248 L-43.503,-6.161 L-55.826,0.000 Z" fill="#159B75"/><path d="M-55.826,-14.000 L0.000,13.913 L55.826,-14.000 L0.000,-41.913 Z M40.174,-14.000 L0.000,6.087 L-40.174,-14.000 L0.000,-34.087 Z" fill="#073B32"/></g></svg>';

/* ---------- estado ---------- */
function st(){ const s=S(); if(!s.regs||typeof s.regs!=='object') s.regs={}; if(!s.regSel) s.regSel='01'; return s; }
const base=id=>(window.REG_BASE||{})[id]||null;
const getReg=id=>st().regs[id]||base(id);
function mut(id){ const s=st(); if(!s.regs[id]) s.regs[id]=clone(base(id)||skeleton(id)); return s.regs[id]; }
const isEdited=id=>!!st().regs[id];

/* ---------- valores ---------- */
function defOf(code,z){
  const c=C(), p=c.PBY[code]; if(!p) return null;
  const zz=c.ZBY[z]; let t=c.tplOf(z);
  if(zz&&!zz.base&&code==='A01') return zz.name;
  if(zz&&!zz.base&&code==='A03') return zz.strat;
  if(zz&&!zz.base&&code==='A02') return zz.fam==='T'?'Transecto':'Sector '+zz.fam;
  const i=c.BIDX[t]; if(i==null) return null;
  if(p.num) return p.num.def[i];
  return (c.TXT[code]&&c.TXT[code][i]!=null)?c.TXT[code][i]:'';
}
function fmtNum(code,v){ const c=C(); if(code==='C03') return '1:'+c.nf(+v); return c.nf(+v); }
const DUNIT={D02:'m²/m²',D04:'viv/ha',D07:'m²/m²'};
function unitOf(p){ return p.num?p.num.u:(DUNIT[p.code]||''); }
function withUnit(p,txt){ const u=unitOf(p); if(!u||u==='n') return txt; if(u==='%') return txt+' %'; return txt+' '+u; }
/* celda de una perilla en una zona: {t, k:'v'|'pd'|'na'|'err', chg, def} */
function cell(code,z,unit){
  const c=C(), p=c.PBY[code];
  if(!p) return {t:code+'?',k:'err'};
  if(!c.ZBY[z]) return {t:'zona '+z+'?',k:'err'};
  if(!c.applies(p,z)) return {t:'No aplica',k:'na'};
  if(c.USO_CODES[p.code]){ const n=c.usoCount(z,c.USO_CODES[p.code]); return {t:n+' usos',k:'v'}; }
  if(c.DERIVED[p.code]){ const dv=c.DERIVED[p.code](z); return dv==null?{t:'por definir',k:'pd'}:{t:unit?withUnit(p,c.nf(dv)):c.nf(dv),k:'v',calc:true}; }
  const v=c.V(z,code);
  if(v==null||v==='') return {t:'por definir',k:'pd'};
  const d=defOf(code,z);
  let t, chg;
  if(p.num){ t=fmtNum(code,v); if(unit) t=withUnit(p,t); chg=d!=null&&+d!==+v; }
  else { t=String(v); chg=d!=null&&String(d)!==t; }
  return {t,k:'v',chg,def:d==null||d===''?'sin valor':(p.num?withUnit(p,fmtNum(code,d)):String(d))};
}
function zoneFilter(f){
  const c=C(); const tpl=z=>c.tplOf(z);
  const F={
    cu:z=>!!c.ZBY[z].cu, fuera:z=>!c.ZBY[z].cu&&tpl(z)!=='ZE',
    inc:z=>['NR','T4','T5','T6'].includes(tpl(z)),
    emisoras:z=>String(c.V(z,'J01')||'').toLowerCase().startsWith('emisora'),
    receptoras:z=>String(c.V(z,'J01')||'').toLowerCase().startsWith('receptora'),
    todas:()=>true
  };
  return c.ZID.filter(F[f]||F.todas);
}
function zoneList(ids){ const c=C(); if(!ids.length) return 'ninguna zona'; const n=ids.map(z=>`${z} (${c.ZBY[z].name})`); return n.length===1?n[0]:n.slice(0,-1).join(', ')+' y '+n[n.length-1]; }

/* ---------- numeración ---------- */
function zonesFor(pz){ const c=C(); if(!pz||pz==='*') return c.ZID.slice(); const p=c.PBY[pz]; return p?c.ZID.filter(z=>c.applies(p,z)):c.ZID.slice(); }
function numbering(reg){
  const art={}; let n=0;
  reg.caps.forEach(cap=>cap.arts.forEach(a=>{ const zs=a.pz?zonesFor(a.pz):[null]; zs.forEach((z,i)=>{ n++; if(i===0) art[a.id]=n; }); }));
  return art;
}

/* ---------- texto → bloques ---------- */
/* resuelve un token en línea → run */
function inlineTok(tok,ctx){
  const c=C(), s=S();
  const [k,...rest]=tok.split(':'); const arg=rest.join(':');
  if(k==='canton') return {t:s.datos.canton||'[cantón]',k:'v'};
  if(k==='hpv') return {t:c.nf(+s.datos.hpv,1),k:'v'};
  if(k==='v'){ const [code,z]=arg.split(':'); const r=cell(code,z,true); return r; }
  if(k==='z'){
    if(!ctx.z) return {t:'(zona del artículo)',k:'err'};
    const zz=c.ZBY[ctx.z];
    if(arg==='codigo') return {t:ctx.z,k:'tx'};
    if(arg==='nombre') return {t:zz.name,k:'tx'};
    if(arg==='estrategia') return {t:String(c.V(ctx.z,'A03')||zz.strat),k:'tx'};
    return cell(arg,ctx.z,true);
  }
  if(k==='zonas') return {t:zoneList(zoneFilter(arg)),k:'v'};
  if(k==='art'){ const n=ctx.nums[arg]; return n?{t:'artículo '+n,k:'tx'}:{t:'artículo ?',k:'err'}; }
  return {t:'{{'+tok+'}}',k:'err'};
}
function runsOf(line,ctx){
  const out=[]; let last=0; TOK.lastIndex=0; let m;
  while((m=TOK.exec(line))){
    if(m.index>last) out.push({t:line.slice(last,m.index),k:'tx'});
    if(m[2]!=null) out.push({t:m[2]||'por completar',k:'pc'});
    else out.push(inlineTok(m[1].trim(),ctx));
    last=TOK.lastIndex;
  }
  if(last<line.length) out.push({t:line.slice(last),k:'tx'});
  return out;
}
let TABN=0;
function zoneHead(ids){ const c=C(); return ids.map(z=>({t:z,color:c.ZBY[z].color,sub:c.ZBY[z].name})); }
function blockTok(tok,ctx){
  const c=C(), s=S();
  const [k0,cap]=tok.split('|'); const ci=k0.indexOf(':'); const k=ci<0?k0:k0.slice(0,ci), arg=ci<0?'':k0.slice(ci+1);
  const caption=t=>t?`Tabla ${++TABN}. ${t}`:null;
  if(k==='tabla'){
    const codes=arg.split(',').map(x=>x.trim()).filter(Boolean);
    const zs=c.ZID.filter(z=>codes.some(cd=>c.PBY[cd]&&c.applies(c.PBY[cd],z)));
    const rows=codes.map(cd=>{ const p=c.PBY[cd]; if(!p) return [{t:cd+'?',k:'err',rh:true}]; const u=unitOf(p);
      return [{t:p.name+(u&&u!=='n'?` (${u})`:p.code==='C03'?' (frente : fondo)':''),k:'tx',rh:true,code:cd},...zs.map(z=>cell(cd,z,false))]; });
    return {k:'tbl',cap:caption(cap||codes.map(cd=>c.PBY[cd]?c.PBY[cd].name:cd).join(', ')),head:[{t:'Parámetro'},...zoneHead(zs)],rows,src:codes};
  }
  if(k==='ficha'){
    if(!ctx.z) return {k:'p',runs:[{t:'(la ficha solo funciona en artículos por zona)',k:'err'}]};
    const codes=(arg?arg.split(','):FICHA_DEF).map(x=>x.trim());
    const rows=[];
    codes.forEach(cd=>{ const p=c.PBY[cd]; if(!p||!c.applies(p,ctx.z)) return; rows.push([{t:p.name,k:'tx',rh:true,code:cd},cell(cd,ctx.z,true)]); });
    const zz=c.ZBY[ctx.z];
    return {k:'tbl',cap:caption(cap||`Configuración de la zona ${ctx.z} · ${zz.name}`),head:[{t:'Parámetro'},{t:ctx.z+' · '+zz.name,color:zz.color}],rows,ficha:true,src:codes};
  }
  if(k==='zonas'){
    const rows=c.ZID.map(z=>{ const zz=c.ZBY[z]; const a=+s.datos.area[z]||0;
      return [{t:z,k:'tx',rh:true,color:zz.color},{t:zz.name,k:'tx'},cell('A03',z,false),{t:zz.cu?'Dentro':'Fuera',k:'tx'},{t:a?c.nf(a,1):'—',k:'tx'}]; });
    return {k:'tbl',cap:caption(cap||'Zonas del transecto'),head:[{t:'Código'},{t:'Zona'},{t:'Estrategia de gestión'},{t:'Cuadrante urbano'},{t:'Área (ha)'}],rows,src:['A01','A03']};
  }
  if(k==='usos'){
    const lab={S:'Permitidos',C:'Condicionados',N:'Prohibidos'};
    const rows=['S','C','N'].map(ch=>[{t:'Usos '+lab[ch].toLowerCase(),k:'tx',rh:true},...c.ZID.map(z=>({t:String(c.usoCount(z,ch)),k:'v'}))]);
    return {k:'tbl',cap:caption(cap||'Resumen de la tabla de usos por zona (número de actividades)'),head:[{t:'Condición'},...zoneHead(c.ZID)],rows,src:['B01','B02','B03']};
  }
  if(k==='practicas'){
    const ZS=['T3','T4','T5','T6'];
    const rows=s.pract.list.map(p=>{ const f=z=>{ const v=p.f[z]; return v==null?'—':c.nf(v); };
      return [{t:`${p.id} · ${p.name}`,k:'tx',rh:true},{t:p.tipo,k:'tx'},{t:p.prio,k:'tx'},...ZS.map(z=>({t:f(z),k:'v'})),{t:p.zru==null?'—':c.nf(p.zru),k:'v'}]; });
    return {k:'tbl',cap:caption(cap||'Prácticas incentivables y factor de cambio según zona'),head:[{t:'Práctica'},{t:'Tipo'},{t:'Prioridad'},...ZS.map(z=>({t:z,color:c.ZBY[z]&&c.ZBY[z].color})),{t:'Renovación urbana'}],rows,src:['J07']};
  }
  return {k:'p',runs:[{t:'{{'+tok+'}}',k:'err'}]};
}
function fixedTable(lines,ctx){
  const rows=lines.map(l=>l.replace(/^\|/,'').replace(/\|\s*$/,'').split('|').map(x=>x.trim()));
  let cap=null;
  if(rows[0].length===1&&rows[0][0].startsWith('#')){ cap=rows.shift()[0].replace(/^#\s*/,''); }
  const head=(rows.shift()||[]).map(t=>({t}));
  return {k:'tbl',cap:cap?`Tabla ${++TABN}. ${cap}`:null,head,rows:rows.map(r=>r.map((t,i)=>({runs:runsOf(t,ctx),k:'tx',rh:i===0})))};
}
const isLi=l=>/^\s*(?:[a-zA-Z]\)|[ivxIVX]+\)|\d+[.)]|[A-Z]\.|-)\s/.test(l);
function textBlocks(text,ctx){
  const out=[]; const lines=String(text||'').split('\n');
  for(let i=0;i<lines.length;i++){
    const raw=lines[i], line=raw.trim(); if(!line) continue;
    if(line.startsWith('|')){ const grp=[]; while(i<lines.length&&lines[i].trim().startsWith('|')){ grp.push(lines[i].trim()); i++; } i--; out.push(fixedTable(grp,ctx)); continue; }
    // tokens de bloque: si la línea los contiene, se parte
    let rest=line, m; const re=/\{\{([^{}]+)\}\}/g; let lastIdx=0, segs=[];
    while((m=re.exec(line))){ if(BLOCK.test(m[1].trim())){ segs.push({t:line.slice(lastIdx,m.index)}); segs.push({b:m[1].trim()}); lastIdx=re.lastIndex; } }
    segs.push({t:line.slice(lastIdx)});
    segs.forEach(sg=>{ if(sg.b) out.push(blockTok(sg.b,ctx)); else if(sg.t.trim()){ const t=sg.t.trim(); out.push({k:'p',li:isLi(t),runs:runsOf(isLi(t)?t.replace(/^-\s/,'• '):t,ctx)}); } });
    void rest;
  }
  return out;
}
function build(id){
  const reg=getReg(id); if(!reg) return null;
  TABN=0; const nums=numbering(reg); const blocks=[]; let n=0;
  reg.caps.forEach((cap,ci)=>{
    blocks.push({k:'cap',n:ROM[ci+1]||String(ci+1),t:cap.t,ci});
    if(cap.x) textBlocks(cap.x,{nums}).forEach(b=>blocks.push(b));
    cap.arts.forEach((a,ai)=>{
      const zs=a.pz?zonesFor(a.pz):[null];
      zs.forEach(z=>{ n++; const ctx={nums,z};
        const title=runsOf(a.t||'',ctx).map(r=>r.t).join('');
        blocks.push({k:'art',n,t:title,id:a.id,ci,ai,z});
        textBlocks(a.x,ctx).forEach(b=>blocks.push(b));
      });
    });
  });
  return {reg,blocks,nums};
}

/* ---------- cobertura de perillas ---------- */
function usedCodes(reg){
  const used=new Set(); const scan=t=>{ String(t||'').replace(/\{\{([^{}]+)\}\}/g,(m,tok)=>{ tok=tok.trim(); const [k0]=tok.split('|'); const ci=k0.indexOf(':'); const k=ci<0?k0:k0.slice(0,ci), arg=ci<0?'':k0.slice(ci+1);
    if(k==='tabla') arg.split(',').forEach(x=>used.add(x.trim()));
    else if(k==='v') used.add(arg.split(':')[0]);
    else if(k==='z') used.add(arg);
    else if(k==='ficha') (arg?arg.split(','):FICHA_DEF).forEach(x=>used.add(x.trim()));
    else if(k==='usos'){ used.add('B01'); used.add('B02'); used.add('B03'); }
    else if(k==='practicas') used.add('J07');
    else if(k==='zonas'&&!arg){ used.add('A01'); used.add('A03'); }
    return m; }); };
  reg.caps.forEach(cap=>{ scan(cap.x); cap.arts.forEach(a=>{ scan(a.t); scan(a.x); }); });
  return used;
}
const regOfP=(p,id)=>String(p.reg||'').startsWith(id);
const regvOfP=(p,id)=>String(p.regv||'').startsWith(id);

/* ---------- esqueleto desde las perillas ---------- */
function skeleton(id){
  const c=C(); const name=NOMBRES[id]||id;
  const ps=c.P.filter(p=>regOfP(p,id));
  const caps=[{t:'Disposiciones generales',arts:[
    {id:'objeto',t:'Objeto',x:`El presente Reglamento de ${name} forma parte del Plan Regulador del cantón de {{canton}} y se aplica en la totalidad de su territorio, de acuerdo con la Ley de Planificación Urbana N.º 4240.\n[[Completar el objeto y alcance del reglamento.]]`}
  ]}];
  Object.entries(c.BLOQUES).forEach(([b,[t]])=>{ const bp=ps.filter(p=>p.b===b); if(!bp.length) return;
    caps.push({t,arts:bp.map(p=>artFor(p))}); });
  return {id,t:'Reglamento de '+name,fuente:'Esqueleto generado desde las perillas del calibrador',caps};
}
function artFor(p){ const C_=C(); const nums=!!p.num||C_.DERIVED[p.code]; const txt=`${p.def}.`;
  return {id:'p-'+p.code,t:p.name,x:`${txt}\n{{tabla:${p.code}|${p.name} por zona}}\n[[Completar la redacción del artículo.]]`}; }

/* ---------- vista ---------- */
const $=id=>document.getElementById(id);
function runHTML(r){
  const t=esc(r.t);
  if(r.k==='v') return r.chg?`<span class="rv chg" title="Calibrado. Valor de partida: ${esc(r.def)}">${t}</span>`:`<span class="rv"${r.calc?' title="Calculado a partir de otras perillas"':''}>${t}</span>`;
  if(r.k==='pd') return `<span class="rpd" title="Perilla sin definir en el calibrador">${t}</span>`;
  if(r.k==='na') return `<span class="rna">${t}</span>`;
  if(r.k==='pc') return `<span class="rpc" title="Texto por completar">${t}</span>`;
  if(r.k==='err') return `<span class="rerr" title="Referencia no válida">${t}</span>`;
  return t;
}
function cellHTML(x){
  const cls=['rc']; if(x.rh) cls.push('rh');
  if(x.runs) return `<td class="${cls.join(' ')}">${x.runs.map(runHTML).join('')}</td>`;
  if(x.k==='pd') cls.push('pd'); if(x.k==='na') cls.push('na'); if(x.k==='err') cls.push('err'); if(x.chg) cls.push('chg');
  const ttl=x.chg?` title="Calibrado. Valor de partida: ${esc(x.def)}"`:'';
  const sw=x.color?`<span class="zc" style="background:${x.color}">${esc(x.t)}</span>`:esc(x.t);
  return `<td class="${cls.join(' ')}"${ttl}>${x.code&&x.rh?`<span class="rcode">${x.code}</span>`:''}${sw}</td>`;
}
function tableHTML(b){
  return `<figure class="rg-fig">${b.cap?`<figcaption>${esc(b.cap)}</figcaption>`:''}<div class="rg-tw"><table class="rg-tbl num${b.ficha?' ficha':''}"><thead><tr>${b.head.map(h=>`<th${h.color?` style="background:${h.color};color:#fff"`:''}${h.sub?` title="${esc(h.sub)}"`:''}>${esc(h.t)}</th>`).join('')}</tr></thead><tbody>${b.rows.map(r=>`<tr>${r.map(cellHTML).join('')}</tr>`).join('')}</tbody></table></div></figure>`;
}
function blocksHTML(blocks){
  return blocks.map(b=>{
    if(b.k==='cap') return `<h3 class="rg-cap"><span>Capítulo ${b.n}</span>${esc(b.t)}</h3>`;
    if(b.k==='art') return `<h4 class="rg-art" id="art-${esc(b.id)}${b.z?'-'+b.z:''}">Artículo ${b.n}. ${esc(b.t)}</h4>`;
    if(b.k==='p') return `<p class="rg-p${b.li?' li':''}">${b.runs.map(runHTML).join('')}</p>`;
    if(b.k==='tbl') return tableHTML(b);
    return '';
  }).join('');
}

/* ---- editor: texto ↔ chips ---- */
function tokLabel(tok,ctxPz){
  const c=C(); const [k0,cap]=tok.split('|'); const ci=k0.indexOf(':'); const k=ci<0?k0:k0.slice(0,ci), arg=ci<0?'':k0.slice(ci+1);
  const pn=cd=>c.PBY[cd]?c.PBY[cd].name:cd+'?';
  if(k==='canton') return 'Cantón: '+(S().datos.canton||'');
  if(k==='hpv') return 'Habitantes por vivienda';
  if(k==='v'){ const [cd,z]=arg.split(':'); const r=cell(cd,z,true); return `${pn(cd)} · ${z}: ${r.t}`; }
  if(k==='z'){ if(arg==='codigo') return 'Código de la zona'; if(arg==='nombre') return 'Nombre de la zona'; if(arg==='estrategia') return 'Estrategia de la zona'; return `${pn(arg)} · de cada zona`; }
  if(k==='zonas') return arg?'Lista de zonas: '+({cu:'dentro del cuadrante urbano',fuera:'fuera del cuadrante urbano',inc:'con incentivos',emisoras:'emisoras de derechos',receptoras:'receptoras de derechos',todas:'todas'}[arg]||arg):'Tabla de zonas del transecto';
  if(k==='art'){ return 'Referencia: artículo de «'+(findArt(arg)||arg)+'»'; }
  if(k==='tabla') return 'Tabla: '+arg.split(',').map(x=>pn(x.trim())).join(', ');
  if(k==='ficha') return 'Ficha de parámetros de la zona';
  if(k==='usos') return 'Tabla: resumen de usos por zona';
  if(k==='practicas') return 'Tabla: prácticas incentivables';
  return tok;
}
function findArt(id){ const reg=getReg(st().regSel); let t=null; reg&&reg.caps.forEach(c=>c.arts.forEach(a=>{ if(a.id===id) t=a.t; })); return t; }
function chipHTML(tok){ const blk=BLOCK.test(tok.trim()); return `<span class="tok${blk?' blk':''}" contenteditable="false" data-t="${esc(tok)}">${esc(tokLabel(tok.trim()))}</span>`; }
function textToEditor(text){
  return esc(text||'').replace(/\{\{([^{}]+)\}\}/g,(m,t)=>chipHTML(t.replace(/&amp;/g,'&').replace(/&lt;/g,'<').replace(/&gt;/g,'>').replace(/&quot;/g,'"')));
}
function serialize(el){
  let out='';
  const walk=n=>{
    n.childNodes.forEach(ch=>{
      if(ch.nodeType===3){ out+=ch.nodeValue.replace(/ /g,' '); return; }
      if(ch.nodeType!==1) return;
      if(ch.classList&&ch.classList.contains('tok')){ out+='{{'+ch.dataset.t+'}}'; return; }
      const tag=ch.tagName;
      if(tag==='BR'){ out+='\n'; return; }
      const blockEl=/^(DIV|P|LI|H\d)$/.test(tag);
      if(blockEl&&out&&!out.endsWith('\n')) out+='\n';
      walk(ch);
      if(blockEl&&!out.endsWith('\n')) out+='\n';
    });
  };
  walk(el);
  return out.replace(/\n{3,}/g,'\n\n').replace(/\n+$/,'');
}

let saveT=null;
function commit(fn){ fn(); clearTimeout(saveT); saveT=setTimeout(()=>{ C().save(); renderSide(); },350); }

function regIds(){ return Object.keys(NOMBRES); }
function renderSide(){
  const s=st(), c=C();
  const box=$('rgSide'); if(!box) return;
  box.innerHTML=regIds().map(id=>{
    const b=base(id), ed=isEdited(id), n=c.P.filter(p=>regOfP(p,id)).length;
    const status=ed?'<span class="rgs ed">editado</span>':b?'<span class="rgs ok">borrador</span>':'<span class="rgs no">sin borrador</span>';
    return `<button class="rg-item${s.regSel===id?' on':''}" data-reg="${id}"><b>${id}</b><span class="nm">${esc(NOMBRES[id])}<small>${n} perilla${n===1?'':'s'} · ${status}</small></span></button>`;
  }).join('');
  box.querySelectorAll('.rg-item').forEach(b=>b.onclick=()=>{ s.regSel=b.dataset.reg; c.save(); render(); });
}
function coverage(id){
  const c=C(), reg=getReg(id); if(!reg) return '';
  const used=usedCodes(reg);
  const miss=c.P.filter(p=>regOfP(p,id)&&!used.has(p.code));
  const vinc=c.P.filter(p=>!regOfP(p,id)&&regvOfP(p,id)&&!used.has(p.code));
  const pchip=p=>`<button class="rg-pchip" data-add="${p.code}" title="${esc(p.def)}${st().regEdit?' · clic para agregar un artículo':''}"><span class="rcode">${p.code}</span>${esc(p.name)}</button>`;
  if(!miss.length&&!vinc.length) return `<div class="rg-cov ok">${C().ic('circle-check')}Todas las perillas de este reglamento aparecen en el texto.</div>`;
  return `<div class="rg-cov">${miss.length?`<div><b>${C().ic('circle-alert')}Perillas de este reglamento que aún no aparecen en el texto (${miss.length}):</b><div class="rg-pchips">${miss.map(pchip).join('')}</div></div>`:''}
    ${vinc.length?`<details><summary>Perillas vinculadas a este reglamento que no se mencionan (${vinc.length})</summary><div class="rg-pchips">${vinc.map(pchip).join('')}</div></details>`:''}
    <p class="hint" style="margin:6px 0 0">${st().regEdit?'Clic en una perilla para agregarle un artículo al final del reglamento.':'Activa <b>Editar texto</b> para agregarlas como artículos.'}</p></div>`;
}
function render(){
  const s=st(), c=C(), id=s.regSel;
  renderSide();
  const reg=getReg(id), main=$('rgMain');
  $('rgEdit').setAttribute('aria-pressed',!!s.regEdit);
  $('rgEdit').innerHTML=s.regEdit?`${c.ic('eye')}Ver resultado`:`${c.ic('pencil')}Editar texto`;
  $('rgReset').disabled=!isEdited(id);
  $('rgWord').disabled=!reg; $('rgCopy').disabled=!reg; $('rgPdf').disabled=!reg;
  if(!reg){
    const n=c.P.filter(p=>regOfP(p,id)).length;
    main.innerHTML=`<div class="rg-body"><div class="rg-empty">${c.ic('file-plus-2','width:28px;height:28px')}<h3>Reglamento de ${esc(NOMBRES[id])}</h3><p>Todavía no hay un borrador de este reglamento. Puedes crear un esqueleto con un artículo por cada una de sus ${n} perillas y luego completar la redacción.</p><button class="btn primary" id="rgSkel">${c.ic('wand-sparkles')}Crear esqueleto desde las perillas</button></div></div>`;
    $('rgSkel').onclick=()=>{ mut(id); s.regEdit=true; c.save(); render(); c.toast('Esqueleto creado'); };
    c.refreshIcons&&c.refreshIcons(); return;
  }
  const head=`<header class="rg-head"><div class="ey">Plan Regulador del cantón de ${esc(s.datos.canton||'')}</div><h2>${esc(reg.t)}</h2>${reg.fuente?`<p class="hint">${esc(reg.fuente)}</p>`:''}
    <div class="rg-leg"><span><i class="rv chg">valor</i> calibrado, distinto al de partida</span><span><i class="rv">valor</i> del calibrador</span><span><i class="rpd">por definir</i> perilla sin valor</span><span><i class="rpc">texto</i> por completar</span></div></header>`;
  if(!s.regEdit){
    const B=build(id);
    main.innerHTML=head+`<div class="rg-body">`+coverage(id)+`<article class="rg-doc">${blocksHTML(B.blocks)}</article></div>`;
  } else {
    main.innerHTML=head+`<div class="rg-body">`+coverage(id)+`<div class="rg-help">${c.ic('info')}<span>Escribe libremente. Los recuadros azules son <b>valores conectados</b> a las perillas: se actualizan solos cuando calibras. Para agregar uno, pon el cursor y pulsa <b>Insertar valor</b>. Lo que va entre <code>[[ ]]</code> se marca como pendiente. Los cambios se guardan solos.</span></div>`+editorHTML(reg)+`</div>`;
    bindEditor(id);
  }
  main.querySelectorAll('.rg-pchip').forEach(b=>b.onclick=()=>{ if(!s.regEdit){ c.toast('Activa «Editar texto» para agregar artículos'); return; } const p=c.PBY[b.dataset.add]; const r=mut(id); r.caps[r.caps.length-1].arts.push(artFor(p)); c.save(); render(); c.toast('Artículo agregado al final'); });
  c.refreshIcons&&c.refreshIcons();
}
function editorHTML(reg){
  const c=C(); const nums=numbering(reg);
  return `<div class="rg-ed-doc">`+reg.caps.map((cap,ci)=>`
    <section class="rg-ecap" data-ci="${ci}">
      <div class="rg-ecap-h"><span class="rg-capn">Capítulo ${ROM[ci+1]||ci+1}</span><input class="rg-in cap" data-ci="${ci}" value="${esc(cap.t)}" aria-label="Título del capítulo">
        <span class="rg-tools"><button class="ib" data-act="capup" data-ci="${ci}" title="Subir capítulo">${c.ic('arrow-up')}</button><button class="ib" data-act="capdel" data-ci="${ci}" title="Borrar capítulo">${c.ic('trash-2')}</button></span></div>
      <div class="rg-ed intro" contenteditable="true" data-ci="${ci}" data-ai="-1" data-ph="Texto introductorio del capítulo (opcional)">${textToEditor(cap.x)}</div>
      ${cap.arts.map((a,ai)=>`
      <div class="rg-eart" data-ci="${ci}" data-ai="${ai}">
        <div class="rg-eart-h"><span class="rg-artn">Art. ${nums[a.id]||'?'}</span><input class="rg-in art" data-ci="${ci}" data-ai="${ai}" value="${esc(a.t)}" aria-label="Título del artículo">
          <label class="rg-pz" title="Repite este artículo una vez por cada zona"><input type="checkbox" data-act="pz" data-ci="${ci}" data-ai="${ai}"${a.pz?' checked':''}> Uno por zona</label>
          <span class="rg-tools"><button class="ib" data-act="ins" data-ci="${ci}" data-ai="${ai}" title="Insertar un valor del calibrador">${c.ic('plus')}Insertar valor</button><button class="ib" data-act="up" data-ci="${ci}" data-ai="${ai}" title="Subir">${c.ic('arrow-up')}</button><button class="ib" data-act="down" data-ci="${ci}" data-ai="${ai}" title="Bajar">${c.ic('arrow-down')}</button><button class="ib" data-act="del" data-ci="${ci}" data-ai="${ai}" title="Borrar artículo">${c.ic('trash-2')}</button></span></div>
        ${a.pz?`<p class="hint" style="margin:0 0 4px">Se repite para: ${zonesFor(a.pz).map(z=>c.chip(z)).join(' ')}. Usa «de cada zona» al insertar valores.</p>`:''}
        <div class="rg-ed" contenteditable="true" data-ci="${ci}" data-ai="${ai}">${textToEditor(a.x)}</div>
      </div>`).join('')}
      <button class="btn rg-addart" data-act="addart" data-ci="${ci}">${c.ic('plus')}Agregar artículo</button>
    </section>`).join('')+`<button class="btn" data-act="addcap">${c.ic('folder-plus')}Agregar capítulo</button></div>`;
}
let lastRange=null, lastEd=null;
function bindEditor(id){
  const c=C(), main=$('rgMain');
  main.querySelectorAll('.rg-ed').forEach(ed=>{
    try{ ed.contentEditable='plaintext-only'; }catch(e){ ed.contentEditable='true'; }
    if(ed.contentEditable!=='plaintext-only') ed.contentEditable='true';
    const keep=()=>{ const sel=window.getSelection(); if(sel.rangeCount&&ed.contains(sel.anchorNode)){ lastRange=sel.getRangeAt(0).cloneRange(); lastEd=ed; } };
    ['keyup','mouseup','focus','input'].forEach(e=>ed.addEventListener(e,keep));
    ed.addEventListener('input',()=>commit(()=>{ const r=mut(id), ci=+ed.dataset.ci, ai=+ed.dataset.ai; const v=serialize(ed); if(ai<0) r.caps[ci].x=v; else r.caps[ci].arts[ai].x=v; }));
    ed.addEventListener('paste',e=>{ if(ed.contentEditable==='plaintext-only') return; e.preventDefault(); const t=(e.clipboardData||window.clipboardData).getData('text/plain'); document.execCommand('insertText',false,t); });
  });
  main.querySelectorAll('.rg-in').forEach(inp=>inp.addEventListener('input',()=>commit(()=>{ const r=mut(id), ci=+inp.dataset.ci; if(inp.classList.contains('cap')) r.caps[ci].t=inp.value; else r.caps[ci].arts[+inp.dataset.ai].t=inp.value; })));
  main.querySelectorAll('[data-act]').forEach(b=>{
    const ev=b.type==='checkbox'?'change':'click';
    b.addEventListener(ev,()=>{
      const act=b.dataset.act, ci=+b.dataset.ci, ai=+b.dataset.ai;
      if(act==='ins'){ const ed=main.querySelector(`.rg-ed[data-ci="${ci}"][data-ai="${ai}"]`); if(lastEd!==ed){ lastEd=ed; lastRange=null; } openPicker(id,ci,ai,b); return; }
      const r=mut(id);
      if(act==='pz'){ const a=r.caps[ci].arts[ai]; if(b.checked) a.pz='*'; else delete a.pz; }
      if(act==='up'&&ai>0){ const A=r.caps[ci].arts; [A[ai-1],A[ai]]=[A[ai],A[ai-1]]; }
      else if(act==='up'&&ai===0&&ci>0){ const a=r.caps[ci].arts.shift(); r.caps[ci-1].arts.push(a); }
      if(act==='down'){ const A=r.caps[ci].arts; if(ai<A.length-1) [A[ai+1],A[ai]]=[A[ai],A[ai+1]]; else if(ci<r.caps.length-1){ const a=A.pop(); r.caps[ci+1].arts.unshift(a); } }
      if(act==='del'){ const a=r.caps[ci].arts[ai]; if(!confirmDel(`¿Borrar el artículo «${a.t}»?`)) return; r.caps[ci].arts.splice(ai,1); }
      if(act==='addart') r.caps[ci].arts.push({id:'a'+Date.now().toString(36),t:'Nuevo artículo',x:''});
      if(act==='addcap') r.caps.push({t:'Nuevo capítulo',arts:[{id:'a'+Date.now().toString(36),t:'Nuevo artículo',x:''}]});
      if(act==='capup'&&ci>0){ [r.caps[ci-1],r.caps[ci]]=[r.caps[ci],r.caps[ci-1]]; }
      if(act==='capdel'){ if(!confirmDel(`¿Borrar el capítulo «${r.caps[ci].t}» con sus ${r.caps[ci].arts.length} artículos?`)) return; r.caps.splice(ci,1); }
      c.save(); render();
    });
  });
}
/* confirmación sin diálogos del navegador: segundo clic en 3 s */
let pendingDel=null;
function confirmDel(msg){ const now=Date.now(); if(pendingDel&&pendingDel.msg===msg&&now-pendingDel.t<3000){ pendingDel=null; return true; } pendingDel={msg,t:now}; C().toast(msg+' Pulsa otra vez para confirmar.'); return false; }

/* ---- selector de valores ---- */
function openPicker(id,ci,ai,anchor){
  const c=C(), reg=getReg(id), art=reg.caps[ci].arts[ai];
  const pk=$('rgPicker');
  const own=c.P.filter(p=>regOfP(p,id)), oth=c.P.filter(p=>!regOfP(p,id));
  const opt=p=>`<option value="${p.code}">${p.code} · ${esc(p.name)}</option>`;
  const ids=[]; reg.caps.forEach(cp=>cp.arts.forEach(a=>ids.push(a)));
  pk.innerHTML=`<div class="rg-pk-h"><b>Insertar valor conectado</b><button class="ib" id="pkX" title="Cerrar">${c.ic('x')}</button></div>
    <label>Perilla<select id="pkP"><optgroup label="De este reglamento">${own.map(opt).join('')}</optgroup>${Object.entries(c.BLOQUES).map(([b,[t]])=>{ const ps=oth.filter(p=>p.b===b); return ps.length?`<optgroup label="${b}. ${esc(t)}">${ps.map(opt).join('')}</optgroup>`:''; }).join('')}</select></label>
    <label>Cómo mostrarla<select id="pkF"><option value="tabla">Tabla con todas las zonas</option>${art.pz?'<option value="z" selected>Valor de cada zona (este artículo se repite por zona)</option>':''}${c.ZID.map(z=>`<option value="v:${z}">Solo el valor de la zona ${z} · ${esc(c.ZBY[z].name)}</option>`).join('')}</select></label>
    <div class="rg-pk-b"><button class="btn primary" id="pkGo">${c.ic('plus')}Insertar</button></div>
    <div class="rg-pk-o"><span class="hint">Otros:</span>
      <button class="chip" data-tok="canton">Nombre del cantón</button>
      <button class="chip" data-tok="zonas">Tabla de zonas</button>
      <button class="chip" data-tok="usos">Resumen de usos</button>
      <button class="chip" data-tok="practicas">Prácticas incentivables</button>
      <button class="chip" data-tok="zonas:cu">Zonas del cuadrante urbano</button>
      <button class="chip" data-tok="zonas:fuera">Zonas fuera del cuadrante</button>
      ${art.pz?'<button class="chip" data-tok="ficha">Ficha de la zona</button><button class="chip" data-tok="z:codigo">Código de la zona</button><button class="chip" data-tok="z:nombre">Nombre de la zona</button>':''}
    </div>
    <label>Referencia a otro artículo<select id="pkA"><option value="">Elegir…</option>${ids.filter(a=>a!==art).map(a=>`<option value="${esc(a.id)}">${esc(a.t)}</option>`).join('')}</select></label>`;
  const r=anchor.getBoundingClientRect();
  pk.style.top=(window.scrollY+r.bottom+6)+'px'; pk.style.left=Math.max(10,Math.min(window.innerWidth-380,r.right-360))+'px';
  pk.classList.add('show');
  const ins=tok=>{ insertTok(ci,ai,tok); pk.classList.remove('show'); };
  $('pkX').onclick=()=>pk.classList.remove('show');
  $('pkGo').onclick=()=>{ const code=$('pkP').value, f=$('pkF').value; const p=c.PBY[code];
    ins(f==='tabla'?`tabla:${code}|${p.name} por zona`:f==='z'?`z:${code}`:`v:${code}:${f.slice(2)}`); };
  pk.querySelectorAll('[data-tok]').forEach(b=>b.onclick=()=>ins(b.dataset.tok));
  $('pkA').onchange=e=>{ if(e.target.value) ins('art:'+e.target.value); };
  c.refreshIcons&&c.refreshIcons();
}
function insertTok(ci,ai,tok){
  const main=$('rgMain'); const ed=main.querySelector(`.rg-ed[data-ci="${ci}"][data-ai="${ai}"]`); if(!ed) return;
  const tmp=document.createElement('div'); tmp.innerHTML=chipHTML(tok); const node=tmp.firstChild;
  const blk=BLOCK.test(tok);
  let range=(lastEd===ed&&lastRange&&ed.contains(lastRange.startContainer))?lastRange:null;
  if(!range){ range=document.createRange(); range.selectNodeContents(ed); range.collapse(false); }
  else { const n=range.startContainer, el=n.nodeType===1?n:n.parentElement, tk=el&&el.closest('.tok'); if(tk&&ed.contains(tk)){ range=document.createRange(); range.setStartAfter(tk); range.collapse(true); } }
  range=range.cloneRange(); range.collapse(false);
  { const n=range.startContainer, el=n.nodeType===1?n:n.parentElement, tk=el&&el.closest('.tok'); if(tk&&ed.contains(tk)){ range.setStartAfter(tk); range.collapse(true); } }
  const frag=document.createDocumentFragment();
  if(blk) frag.appendChild(document.createTextNode('\n'));
  frag.appendChild(node);
  const after=document.createTextNode(blk?'\n':' ');
  frag.appendChild(after);
  range.insertNode(frag);
  const sel=window.getSelection(); const nr=document.createRange(); nr.setStart(after,after.length); nr.collapse(true); sel.removeAllRanges(); sel.addRange(nr); lastRange=nr.cloneRange(); lastEd=ed;
  ed.dispatchEvent(new Event('input'));
  C().toast('Valor insertado');
}

/* ---------- copiar y Word ---------- */
function plainCopyHTML(blocks,reg){
  const s=S(); const cs='border:1px solid #9aa3ad;padding:3px 5px;font-family:Arial;font-size:9pt;';
  const rh=r=>r.map(x=>x.runs?x.runs.map(y=>y.k==='pc'?`<span style="background:#fff59d">${esc(y.t)}</span>`:esc(y.t)).join(''):esc(x.t));
  let h=`<div style="font-family:Arial;font-size:11pt"><p style="font-size:9pt;color:#555">Plan Regulador del cantón de ${esc(s.datos.canton)}</p><h1 style="font-size:16pt">${esc(reg.t)}</h1>`;
  blocks.forEach(b=>{
    if(b.k==='cap') h+=`<h2 style="font-size:13pt;text-align:center">Capítulo ${b.n}<br>${esc(b.t)}</h2>`;
    if(b.k==='art') h+=`<p style="font-weight:bold;margin-top:12pt">Artículo ${b.n}. ${esc(b.t)}</p>`;
    if(b.k==='p') h+=`<p style="${b.li?'margin-left:18pt;':''}text-align:justify">${b.runs.map(r=>r.k==='pd'||r.k==='pc'?`<span style="background:#fff59d">${esc(r.t)}</span>`:esc(r.t)).join('')}</p>`;
    if(b.k==='tbl'){ h+=(b.cap?`<p style="font-size:9pt;font-weight:bold">${esc(b.cap)}</p>`:'')+`<table style="border-collapse:collapse"><tr>${b.head.map(x=>`<th style="${cs}background:${x.color||'#1f4e79'};color:#fff">${esc(x.t)}</th>`).join('')}</tr>${b.rows.map(r=>`<tr>${rh(r).map((t,i)=>`<td style="${cs}${r[i].rh?'font-weight:bold;':''}${r[i].k==='pd'?'background:#fff59d;':''}">${t}</td>`).join('')}</tr>`).join('')}</table>`; }
  });
  return h+'</div>';
}
function plainText(blocks,reg){
  const out=[reg.t,''];
  blocks.forEach(b=>{
    if(b.k==='cap') out.push('',`CAPÍTULO ${b.n}. ${b.t.toUpperCase()}`,'');
    if(b.k==='art') out.push('',`Artículo ${b.n}. ${b.t}`);
    if(b.k==='p') out.push(b.runs.map(r=>r.t).join(''));
    if(b.k==='tbl'){ if(b.cap) out.push(b.cap); out.push(b.head.map(x=>x.t).join('\t')); b.rows.forEach(r=>out.push(r.map(x=>x.runs?x.runs.map(y=>y.t).join(''):x.t).join('\t'))); }
  });
  return out.join('\n');
}
async function copyReg(){
  const s=st(), B=build(s.regSel); if(!B) return;
  const html=plainCopyHTML(B.blocks,B.reg), txt=plainText(B.blocks,B.reg);
  try{ await navigator.clipboard.write([new ClipboardItem({'text/html':new Blob([html],{type:'text/html'}),'text/plain':new Blob([txt],{type:'text/plain'})})]); C().toast('Reglamento copiado: pégalo en Word o Docs'); }
  catch(e){ C().copyText(txt,'Reglamento copiado como texto'); }
}

/* --- .docx mínimo (sin librerías) --- */
const CRC=(()=>{ const t=new Uint32Array(256); for(let n=0;n<256;n++){ let c=n; for(let k=0;k<8;k++) c=c&1?0xEDB88320^(c>>>1):c>>>1; t[n]=c>>>0; } return t; })();
function crc32(u){ let c=0xFFFFFFFF; for(let i=0;i<u.length;i++) c=CRC[(c^u[i])&0xFF]^(c>>>8); return (c^0xFFFFFFFF)>>>0; }
function zip(files){
  const enc=new TextEncoder(); const parts=[], cent=[]; let off=0;
  files.forEach(f=>{
    const name=enc.encode(f.name), data=typeof f.data==='string'?enc.encode(f.data):f.data, crc=crc32(data);
    const h=new DataView(new ArrayBuffer(30));
    h.setUint32(0,0x04034b50,true); h.setUint16(4,20,true); h.setUint16(6,0x0800,true); h.setUint16(8,0,true); h.setUint16(10,0,true); h.setUint16(12,0x21,true);
    h.setUint32(14,crc,true); h.setUint32(18,data.length,true); h.setUint32(22,data.length,true); h.setUint16(26,name.length,true); h.setUint16(28,0,true);
    parts.push(new Uint8Array(h.buffer),name,data);
    const c=new DataView(new ArrayBuffer(46));
    c.setUint32(0,0x02014b50,true); c.setUint16(4,20,true); c.setUint16(6,20,true); c.setUint16(8,0x0800,true); c.setUint16(10,0,true); c.setUint16(12,0,true); c.setUint16(14,0x21,true);
    c.setUint32(16,crc,true); c.setUint32(20,data.length,true); c.setUint32(24,data.length,true); c.setUint16(28,name.length,true);
    c.setUint16(30,0,true); c.setUint16(32,0,true); c.setUint16(34,0,true); c.setUint16(36,0,true); c.setUint32(38,0,true); c.setUint32(42,off,true);
    cent.push(new Uint8Array(c.buffer),name);
    off+=30+name.length+data.length;
  });
  const csize=cent.reduce((a,b)=>a+b.length,0);
  const e=new DataView(new ArrayBuffer(22));
  e.setUint32(0,0x06054b50,true); e.setUint16(8,files.length,true); e.setUint16(10,files.length,true); e.setUint32(12,csize,true); e.setUint32(16,off,true);
  return new Blob([...parts,...cent,new Uint8Array(e.buffer)],{type:'application/vnd.openxmlformats-officedocument.wordprocessingml.document'});
}
const X=s=>String(s==null?'':s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F]/g,'');
function wRun(t,o={}){ return `<w:r><w:rPr>${o.b?'<w:b/>':''}${o.i?'<w:i/>':''}${o.color?`<w:color w:val="${o.color}"/>`:''}${o.sz?`<w:sz w:val="${o.sz}"/><w:szCs w:val="${o.sz}"/>`:''}${o.hl?`<w:highlight w:val="${o.hl}"/>`:''}</w:rPr><w:t xml:space="preserve">${X(t)}</w:t></w:r>`; }
function wPar(inner,o={}){ return `<w:p><w:pPr>${o.style?`<w:pStyle w:val="${o.style}"/>`:''}${o.keep?'<w:keepNext/>':''}${o.jc?`<w:jc w:val="${o.jc}"/>`:''}${o.ind?`<w:ind w:left="${o.ind}" w:hanging="${o.hang||0}"/>`:''}</w:pPr>${inner}</w:p>`; }
function runsW(runs,sz){ return runs.map(r=>wRun(r.t,{sz,hl:(r.k==='pd'||r.k==='pc'||r.k==='err')?'yellow':null})).join(''); }
function hexOf(c){ return String(c||'1F4E79').replace('#','').toUpperCase(); }
function tblW(b){
  const ncol=b.head.length, sz=ncol>9?14:ncol>6?16:18;
  const bd='<w:tblBorders>'+['top','left','bottom','right','insideH','insideV'].map(k=>`<w:${k} w:val="single" w:sz="4" w:space="0" w:color="9AA3AD"/>`).join('')+'</w:tblBorders>';
  const cellW=(inner,o={})=>`<w:tc><w:tcPr>${o.fill?`<w:shd w:val="clear" w:color="auto" w:fill="${o.fill}"/>`:''}<w:tcMar><w:left w:w="60" w:type="dxa"/><w:right w:w="60" w:type="dxa"/></w:tcMar></w:tcPr><w:p><w:pPr><w:spacing w:before="20" w:after="20"/>${o.jc?`<w:jc w:val="${o.jc}"/>`:''}</w:pPr>${inner}</w:p></w:tc>`;
  let x=(b.cap?wPar(wRun(b.cap,{b:true,sz:18}),{style:'Caption',keep:true}):'')+`<w:tbl><w:tblPr><w:tblW w:w="5000" w:type="pct"/>${bd}<w:tblLayout w:type="autofit"/></w:tblPr><w:tblGrid>${b.head.map(()=>'<w:gridCol/>').join('')}</w:tblGrid>`;
  x+=`<w:tr><w:trPr><w:tblHeader/></w:trPr>${b.head.map(h=>cellW(wRun(h.t,{b:true,sz,color:'FFFFFF'}),{fill:hexOf(h.color),jc:'center'})).join('')}</w:tr>`;
  b.rows.forEach(r=>{ x+=`<w:tr>${r.map((c,i)=>{ const inner=c.runs?runsW(c.runs,sz):wRun(c.t,{sz,b:!!c.rh,hl:c.k==='pd'||c.k==='err'?'yellow':null});
    return cellW(inner,{fill:c.color?hexOf(c.color):c.rh&&!b.ficha&&!c.runs?'EEF2F6':null,jc:(i>0&&!b.ficha&&!c.runs&&b.head.length>2)?'center':null}); }).join('')}</w:tr>`; });
  return x+'</w:tbl>'+wPar('',{});
}
function docxOf(B){
  const s=S(); const reg=B.reg;
  let body=wPar(wRun('Plan Regulador del cantón de '+(s.datos.canton||''),{sz:20,color:'586577'}),{jc:'center'})+wPar(wRun(reg.t),{style:'Title'});
  B.blocks.forEach(b=>{
    if(b.k==='cap') body+=wPar(wRun('Capítulo '+b.n)+'<w:r><w:br/></w:r>'+wRun(b.t),{style:'Heading1'});
    if(b.k==='art') body+=wPar(wRun(`Artículo ${b.n}. `,{b:true})+wRun(b.t,{b:true}),{style:'Heading2'});
    if(b.k==='p') body+=wPar(runsW(b.runs),b.li?{ind:567,hang:283}:{jc:'both'});
    if(b.k==='tbl') body+=tblW(b);
  });
  const doc=`<?xml version="1.0" encoding="UTF-8" standalone="yes"?><w:document xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"><w:body>${body}<w:sectPr><w:pgSz w:w="12240" w:h="15840"/><w:pgMar w:top="1418" w:right="1134" w:bottom="1418" w:left="1418" w:header="709" w:footer="709" w:gutter="0"/></w:sectPr></w:body></w:document>`;
  const styles=`<?xml version="1.0" encoding="UTF-8" standalone="yes"?><w:styles xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main">
<w:docDefaults><w:rPrDefault><w:rPr><w:rFonts w:ascii="Arial" w:hAnsi="Arial" w:eastAsia="Arial" w:cs="Arial"/><w:sz w:val="22"/><w:szCs w:val="22"/><w:lang w:val="es-CR"/></w:rPr></w:rPrDefault><w:pPrDefault><w:pPr><w:spacing w:after="120" w:line="264" w:lineRule="auto"/></w:pPr></w:pPrDefault></w:docDefaults>
<w:style w:type="paragraph" w:default="1" w:styleId="Normal"><w:name w:val="Normal"/><w:qFormat/></w:style>
<w:style w:type="paragraph" w:styleId="Title"><w:name w:val="Title"/><w:basedOn w:val="Normal"/><w:qFormat/><w:pPr><w:jc w:val="center"/><w:spacing w:after="360"/></w:pPr><w:rPr><w:b/><w:color w:val="14304F"/><w:sz w:val="34"/></w:rPr></w:style>
<w:style w:type="paragraph" w:styleId="Heading1"><w:name w:val="heading 1"/><w:basedOn w:val="Normal"/><w:next w:val="Normal"/><w:qFormat/><w:pPr><w:keepNext/><w:jc w:val="center"/><w:spacing w:before="360" w:after="200"/><w:outlineLvl w:val="0"/></w:pPr><w:rPr><w:b/><w:caps/><w:color w:val="14304F"/><w:sz w:val="24"/></w:rPr></w:style>
<w:style w:type="paragraph" w:styleId="Heading2"><w:name w:val="heading 2"/><w:basedOn w:val="Normal"/><w:next w:val="Normal"/><w:qFormat/><w:pPr><w:keepNext/><w:spacing w:before="240" w:after="80"/><w:outlineLvl w:val="1"/></w:pPr><w:rPr><w:b/><w:sz w:val="22"/></w:rPr></w:style>
<w:style w:type="paragraph" w:styleId="Caption"><w:name w:val="caption"/><w:basedOn w:val="Normal"/><w:qFormat/><w:pPr><w:keepNext/><w:spacing w:before="120" w:after="60"/></w:pPr><w:rPr><w:b/><w:sz w:val="18"/></w:rPr></w:style>
</w:styles>`;
  return zip([
    {name:'[Content_Types].xml',data:'<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/><Default Extension="xml" ContentType="application/xml"/><Override PartName="/word/document.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml"/><Override PartName="/word/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.styles+xml"/></Types>'},
    {name:'_rels/.rels',data:'<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="word/document.xml"/></Relationships>'},
    {name:'word/_rels/document.xml.rels',data:'<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/></Relationships>'},
    {name:'word/document.xml',data:doc},
    {name:'word/styles.xml',data:styles}
  ]);
}
function downloadWord(){
  const s=st(), B=build(s.regSel); if(!B) return;
  const blob=docxOf(B);
  const name=`PR_${(s.datos.canton||'canton').replace(/[^\wÁÉÍÓÚÑáéíóúñ]+/g,'_')}_-_${s.regSel}_${NOMBRES[s.regSel].replace(/\s+/g,'_')}.docx`;
  const a=document.createElement('a'); a.href=URL.createObjectURL(blob); a.download=name; document.body.appendChild(a); a.click(); setTimeout(()=>{ URL.revokeObjectURL(a.href); a.remove(); },4000);
  C().toast('Word descargado');
}

/* Escudo municipal: lo sirve el atlas (ya resuelto en base64, listo para el PDF sin CORS).
   Si el cantón no está en esa base, o el atlas no responde a tiempo, sigue sin escudo. */
const ESCUDO_CACHE={}; // cantón → base64 (o null): un PDF más del mismo cantón ya no vuelve a pedirlo
async function fetchEscudo(canton){
  if(!canton) return null;
  if(canton in ESCUDO_CACHE) return ESCUDO_CACHE[canton];
  let img=null;
  try{
    const ctrl=new AbortController(); const t=setTimeout(()=>ctrl.abort(),8000);
    const r=await fetch(ESCUDOS_API+'?canton='+encodeURIComponent(canton),{signal:ctrl.signal});
    clearTimeout(t);
    if(r.ok){ const j=await r.json(); img=j.imagen||null; }
  }catch(e){ img=null; }
  ESCUDO_CACHE[canton]=img;
  return img;
}
function fechaLarga(){
  const MESES=['enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre'];
  const d=new Date();
  return `${d.getDate()} de ${MESES[d.getMonth()]} de ${d.getFullYear()}`;
}
/* ---------- Portada ---------- */
function buildCoverHTML(s,B,escudoImg){
  const canton=s.datos.canton||'', prov=(C().provOf&&C().provOf(canton))||'';
  const escudo=escudoImg
    ? `<div class="rg-cover-escudo"><img src="${escudoImg}" alt=""></div>`
    : `<div class="rg-cover-escudo ph">Escudo</div>`;
  return `<div class="rg-cover">
    <div class="rg-cover-top"></div>
    <div class="rg-cover-body">
      ${escudo}
      <div class="rg-cover-muni">Municipalidad${canton?' de '+esc(canton):''}</div>
      <div class="rg-cover-prov">${canton?`Cantón de ${esc(canton)}${prov?', '+esc(prov):''} · Costa Rica`:'Costa Rica'}</div>
      <div class="rg-cover-div"></div>
      <div class="rg-cover-eyebrow">Plan Regulador</div>
      <div class="rg-cover-title"><small>Reglamento ${esc(s.regSel)}</small>${esc(B.reg.t)}</div>
      ${B.reg.fuente?`<div class="rg-cover-sub">${esc(B.reg.fuente)}</div>`:''}
    </div>
    <div class="rg-cover-foot">
      <div class="rg-cover-date">Documento generado el ${fechaLarga()}</div>
      <div class="rg-cover-brand">${PE_LOGO_SVG}PlanoExactoCR</div>
    </div>
  </div>`;
}

/* ---------- aviso de progreso ----------
   Armar el PDF de un reglamento largo toma su rato (cada página se dibuja aparte), y un
   botón girando no dice si algo está pasando o si se colgó. Este aviso muestra el paso real
   —qué página va de cuántas— y, de paso, hace la espera menos tiesa. Las frases van atadas
   a lo que de verdad está ocurriendo en ese momento, no son adorno suelto. */
const FRASES=[
  'Acomodando los artículos para que ninguno quede partido',
  'Midiendo los márgenes a tamaño carta',
  'Revisando que ninguna tabla quede huérfana',
  'Poniendo cada valor donde el calibrador lo dejó',
  'Pasando los capítulos a números romanos',
  'Alineando las columnas de las zonas',
  'Dejando respirar los encabezados',
  'Ordenando los incisos a), b), c)…',
  'Sacudiendo el polvo de los considerandos',
  'Cuadrando el texto justificado'
];

function avisoProgreso(subtitulo){
  const wrap=document.createElement('div');
  wrap.className='modal show rg-prog';
  wrap.innerHTML=`<div class="dlg">
    <header><i data-lucide="file-text" class="ic" style="width:22px;height:22px"></i>
      <div><h2>Armando el documento</h2>
      <div class="rg-prog-sub">${esc(subtitulo)}</div></div></header>
    <div class="bd">
      <div class="rg-prog-bar"><span></span></div>
      <p class="rg-prog-paso" role="status">Alistando…</p>
      <p class="rg-prog-frase"></p>
    </div>
    <footer><span class="rg-prog-pct">0 %</span>
      <button class="btn" data-cancelar>Cancelar</button></footer>
  </div>`;
  document.body.appendChild(wrap);
  let cancelado=false;
  wrap.querySelector('[data-cancelar]').onclick=()=>{
    cancelado=true;
    wrap.querySelector('.rg-prog-paso').textContent='Cancelando…';
  };
  if(window.lucide&&window.lucide.createIcons) window.lucide.createIcons();
  const bar=wrap.querySelector('.rg-prog-bar>span');
  const paso=wrap.querySelector('.rg-prog-paso');
  const frase=wrap.querySelector('.rg-prog-frase');
  const pct=wrap.querySelector('.rg-prog-pct');
  return {
    get cancelado(){ return cancelado; },
    /* Devuelve una promesa que espera dos cuadros de pintado: sin eso el navegador no
       alcanza a mostrar el paso nuevo antes de clavarse en el trabajo pesado que sigue. */
    async paso(texto,p,f){
      paso.textContent=texto;
      if(f!=null){
        frase.textContent=f;
        /* La animación de entrada solo se dispara si se reinicia a mano: el elemento es
           siempre el mismo, así que cambiarle el texto no la vuelve a lanzar. */
        frase.style.animation='none'; void frase.offsetWidth; frase.style.animation='';
      }
      const v=Math.max(0,Math.min(100,Math.round(p)));
      bar.style.width=v+'%'; pct.textContent=v+' %';
      await new Promise(r=>requestAnimationFrame(()=>requestAnimationFrame(r)));
    },
    cerrar(){ wrap.remove(); }
  };
}

/* ---------- PDF (html2canvas + jsPDF, portada + paginado por bloques) ---------- */
async function downloadPdf(){
  const s=st(), c=C(), B=build(s.regSel); if(!B) return;
  if(!(window.jspdf&&window.jspdf.jsPDF)){ c.toast('No se pudo cargar el generador de PDF'); return; }
  if(!window.html2canvas){ c.toast('No se pudo cargar el generador de PDF'); return; }
  const btn=$('rgPdf'); const prevHTML=btn.innerHTML; btn.disabled=true; btn.innerHTML=c.ic('loader-circle')+'Generando…';
  const SCALE=2, CSSW=740; // ancho de medición (css px) ≈ área imprimible de una carta
  const pageW=215.9, pageH=279.4, margin=12;
  const contentWmm=pageW-margin*2;
  const pxPerMM=(CSSW*SCALE)/contentWmm;
  const pageHpxCSS=(pageH-margin*2)*(CSSW/contentWmm); // alto de página en css px, sin escalar
  // El PDF siempre es claro, sin importar el tema de la pantalla: se fuerza mientras se genera.
  const root=document.documentElement, prevTheme=root.getAttribute('data-theme');
  root.setAttribute('data-theme','light');
  const mkHost=()=>{
    const h=document.createElement('div');
    h.className='rg-doc rg-pdf-render';
    h.style.cssText=`position:fixed;left:-99999px;top:0;width:${CSSW}px;background:#fff;padding:0;`;
    return h;
  };
  const renderHosts=[];
  const renderPage=async(el)=>{
    document.body.appendChild(el); renderHosts.push(el);
    return window.html2canvas(el,{scale:SCALE,backgroundColor:'#ffffff',useCORS:true});
  };
  const addCanvas=(doc,canvas,isFirst)=>{
    // si el contenido (p. ej. una tabla larga) excede una página, se reparte por recorte de píxeles
    const pageHpxScaled=Math.round(pageHpxCSS*SCALE);
    let y=0, first=isFirst;
    do{
      const sliceH=Math.min(pageHpxScaled,canvas.height-y);
      const pc=document.createElement('canvas'); pc.width=canvas.width; pc.height=sliceH;
      pc.getContext('2d').drawImage(canvas,0,y,canvas.width,sliceH,0,0,canvas.width,sliceH);
      const img=pc.toDataURL('image/jpeg',0.93);
      if(!first) doc.addPage(); first=false;
      doc.addImage(img,'JPEG',margin,margin,contentWmm,sliceH/pxPerMM);
      y+=sliceH;
    } while(y<canvas.height);
  };
  const av=avisoProgreso(`Reglamento ${s.regSel} · ${NOMBRES[s.regSel]}`);
  try{
    await av.paso('Buscando el escudo de la municipalidad…',4,FRASES[0]);
    const escudoImg=await fetchEscudo(s.datos.canton);
    await av.paso(escudoImg?'Escudo encontrado: va a la portada':'Sin escudo en la base: la portada sigue igual',8);
    const coverHost=mkHost();
    coverHost.style.height=pageHpxCSS+'px';
    coverHost.innerHTML=buildCoverHTML(s,B,escudoImg);
    const head=`<header class="rg-head"><div class="ey">Plan Regulador del cantón de ${esc(s.datos.canton||'')}</div><h2>${esc(B.reg.t)}</h2>${B.reg.fuente?`<p class="hint">${esc(B.reg.fuente)}</p>`:''}</header>`;
    const host=mkHost();
    host.innerHTML=head+blocksHTML(B.blocks);
    document.body.appendChild(host);
    c.refreshIcons&&c.refreshIcons();
    await av.paso('Midiendo dónde cae cada corte de página…',12,FRASES[1]);
    await new Promise(r=>setTimeout(r,60));
    // agrupar los hijos del documento en páginas, cortando entre bloques (nunca a mitad de una tabla o un párrafo).
    // se usa offsetTop (no la suma de offsetHeight) porque los márgenes entre bloques colapsan en el flujo original.
    const kids=Array.from(host.children);
    const pages=[[]]; let pageStart=0;
    kids.forEach(el=>{
      const top=el.offsetTop, bottom=top+el.offsetHeight;
      if(pages[pages.length-1].length && (bottom-pageStart)>pageHpxCSS){ pages.push([]); pageStart=top; }
      pages[pages.length-1].push(el);
    });
    /* Los bloques son el trabajo real (cada uno se dibuja aparte), así que el porcentaje se
       mide sobre ellos. El número de páginas es una estimación: un bloque más alto que la
       página —una tabla larga— se reparte en varias, así que puede salir alguna de más. Por
       eso se anuncia como estimación y al final se dice el número de verdad. */
    const bloques=pages.filter(p=>p.length).length, estimadas=bloques+1; // +1 por la portada
    const {jsPDF}=window.jspdf; const doc=new jsPDF({unit:'mm',format:'letter',orientation:'portrait'});
    await av.paso(`Serán unas ${estimadas} páginas. Dibujando la portada…`,15,'Sellando la portada con el escudo');
    const coverCanvas=await renderPage(coverHost);
    addCanvas(doc,coverCanvas,true);
    let i=0;
    for(const chunk of pages){
      if(!chunk.length) continue;
      if(av.cancelado) { c.toast('Generación cancelada'); return; }
      i++;
      // de 15 % a 95 %: el tramo largo es dibujar las páginas, que es lo que de verdad tarda
      await av.paso(`Dibujando la página ${doc.getNumberOfPages()+1}…`,15+(80*i/estimadas),FRASES[(i-1)%FRASES.length]);
      const pageHost=mkHost();
      chunk.forEach(el=>pageHost.appendChild(el.cloneNode(true)));
      const canvas=await renderPage(pageHost);
      addCanvas(doc,canvas,false);
    }
    await av.paso('Cerrando el documento…',97,'Listo para firmar');
    const name=`PR_${(s.datos.canton||'canton').replace(/[^\wÁÉÍÓÚÑáéíóúñ]+/g,'_')}_-_${s.regSel}_${NOMBRES[s.regSel].replace(/\s+/g,'_')}.pdf`;
    const paginas=doc.getNumberOfPages();
    doc.save(name);
    await av.paso(`${paginas} páginas listas`,100,'');
    c.toast(`PDF descargado · ${paginas} páginas`);
  } catch(e){ c.toast('No se pudo generar el PDF'); }
  finally{
    av.cerrar();
    renderHosts.forEach(h=>h.remove());
    if(prevTheme==null) root.removeAttribute('data-theme'); else root.setAttribute('data-theme',prevTheme);
    btn.disabled=false; btn.innerHTML=prevHTML; c.refreshIcons&&c.refreshIcons();
  }
}

/* ---------- inicio ---------- */
let bound=false;
function bindOnce(){
  if(bound) return; bound=true;
  const c=C();
  $('rgEdit').onclick=()=>{ const s=st(); s.regEdit=!s.regEdit; c.save(); render(); };
  $('rgReset').onclick=()=>{ const s=st(); if(!isEdited(s.regSel)) return; if(!confirmDel('¿Volver al borrador original de este reglamento? Se pierden tus cambios de texto.')) return; delete s.regs[s.regSel]; c.save(); render(); c.toast('Borrador original restablecido'); };
  $('rgWord').onclick=downloadWord;
  $('rgPdf').onclick=downloadPdf;
  $('rgCopy').onclick=copyReg;
  document.addEventListener('mousedown',e=>{ const pk=$('rgPicker'); if(pk&&pk.classList.contains('show')&&!pk.contains(e.target)&&!e.target.closest('[data-act="ins"]')) pk.classList.remove('show'); });
}
window.REG={
  render(){ bindOnce(); render(); },
  build, docxOf, serialize, textToEditor, usedCodes, skeleton,
  snapshot(){ return clone(st().regs||{}); }
};
})();
