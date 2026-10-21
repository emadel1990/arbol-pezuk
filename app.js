(function(){
  /* datos.js usa nombres en castellano; aquí se pasan al formato interno */
  function aPersona(p){
    const n=v=>v==null?'':String(v);
    const notas=p.notas==null?[]:(Array.isArray(p.notas)?p.notas:[p.notas]);
    return {code:n(p.codigo),name:n(p.nombre)||'(sin nombre)',spouse:n(p.pareja),birth:n(p.nacio),death:n(p.fallecio),
      sbirth:n(p.pareja_nacio),sdeath:n(p.pareja_fallecio),notes:notas.map(String),children:(p.hijos||[]).map(aPersona)};
  }
  const SRC=window.DATOS;
  const DATA={version:SRC.version,contacto:SRC.contacto,fundadores:SRC.fundadores,ramas:SRC.ramas.map(aPersona)};
  const $=s=>document.querySelector(s);
  const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
  document.getElementById('ver').textContent=DATA.version;

  /* ---- text size ---- */
  const SIZES=[18,20,22,24,27,30,34,38,44];
  const phone=matchMedia('(max-width:640px)').matches;
  let si=SIZES.indexOf(phone?20:24);
  try{const s=parseInt(localStorage.getItem('pezuk-size'));if(SIZES.includes(s))si=SIZES.indexOf(s);}catch(e){}
  function applySize(){document.documentElement.style.setProperty('--base',SIZES[si]+'px');try{localStorage.setItem('pezuk-size',SIZES[si])}catch(e){}}
  applySize();
  $('#bigger').onclick=()=>{if(si<SIZES.length-1){si++;applySize();}};
  $('#smaller').onclick=()=>{if(si>0){si--;applySize();}};

  /* ---- founders ---- */
  const F=DATA.fundadores;
  $('#founders').innerHTML=`
    <div class="founder"><h3>${esc(F.el.name)}</h3><div class="d">☆ Nació en ${esc(F.el.birth)} · † Falleció en ${esc(F.el.death)}</div>
      <p>Hijo de <b>${esc(F.el.padres)}</b>.</p><p>Tenía ${esc(F.el.edad)}.</p></div>
    <div class="founder"><h3>${esc(F.ella.name)}</h3><div class="d">☆ Nació en ${esc(F.ella.birth)} · † Falleció en ${esc(F.ella.death)}</div>
      <p>Hija de <b>${esc(F.ella.padres)}</b>; nieta de ${esc(F.ella.abuelos)}.</p><p>Tenía ${esc(F.ella.edad)}. Viajó con sus hermanos:</p>
      <div class="sib">${F.ella.hermanos.map(h=>`<span>${esc(h)}</span>`).join('')}</div></div>`;
  $('#story').innerHTML=`<p><b>El viaje.</b> ${esc(F.viaje)}</p><p><b>Otros Pezuk en el barco.</b> ${esc(F.juan)}</p>`;

  /* ---- people ---- */
  const GEN=['hijo/a','nieto/a','bisnieto/a','tataranieto/a','chozno/a','bichozno/a'];
  const all=[]; // flat index for search
  function count(p){return 1+p.children.reduce((a,c)=>a+count(c),0)}
  function idFor(p,parentId,i){return p.code?('p-'+p.code.replace(/\./g,'-')):(parentId+'-x'+i)}
  function datesHtml(p){
    const out=[];
    if(p.birth)out.push(`<span>☆ Nació ${esc(p.birth)}</span>`);
    if(p.death)out.push(`<span>† Falleció ${esc(p.death)}</span>`);
    if(p.spouse&&(p.sbirth||p.sdeath)){
      const s=[];if(p.sbirth)s.push('☆ '+esc(p.sbirth));if(p.sdeath)s.push('† '+esc(p.sdeath));
      out.push(`<span>${esc(p.spouse.split(' ')[0])}: ${s.join(' · ')}</span>`);
    }
    return out.length?`<div class="dates">${out.join('')}</div>`:'';
  }
  function render(p,gen,path,parentId,i,branch){
    const id=idFor(p,parentId,i);
    const first=p.name.split(' ')[0];
    const myPath=path.concat([{name:p.name,code:p.code}]);
    all.push({p,id,gen,path:myPath,branch});
    let h=`<div class="per" id="${id}" data-gen="${gen}">
      <div class="row">
        <span class="code${p.code?'':' none'}">${p.code?esc(p.code):'·'}</span>
        <div class="who"><span class="nm">${esc(p.name)}</span>${p.spouse?`<span class="sp">${esc(p.spouse)}</span>`:''}
          ${datesHtml(p)}${p.notes&&p.notes.length?`<div class="note">${esc(p.notes.join(' · '))}</div>`:''}</div>
        <button type="button" class="fix" data-id="${id}" aria-label="Corregir datos de ${esc(p.name)}">Corregir</button>
      </div>`;
    if(p.children.length){
      h+=`<div class="kids"><div class="kids-label">Hijos de ${esc(first)}</div>`+
        p.children.map((c,j)=>render(c,gen+1,myPath,id,j,branch)).join('')+`</div>`;
    }
    return h+`</div>`;
  }
  const idx=[],ramas=[];
  DATA.ramas.forEach((r,ri)=>{
    const n=count(r)-1;
    const title=`${esc(r.name)}${r.spouse?` y ${esc(r.spouse)}`:''}`;
    idx.push(`<a href="#rama-${r.code}" data-rama="${r.code}"><span class="n">${r.code}</span><span class="t">${title}<small>${n?n+' descendientes anotados':'sin descendientes anotados'}</small></span></a>`);
    const dates=[];if(r.birth)dates.push('☆ '+esc(r.birth));if(r.death)dates.push('† '+esc(r.death));
    ramas.push(`<details class="rama" id="rama-${r.code}">
      <summary><span class="n">${r.code}</span><span class="t"><h2>${title}</h2><div class="meta">${dates.join(' · ')}${dates.length&&n?' · ':''}${n?n+' descendientes':''}${r.notes&&r.notes.length?' · '+esc(r.notes.join(' · ')):''}</div></span>
      <span class="arrow"><span class="o">Ver ▾</span><span class="c">Cerrar ▴</span></span></summary>
      <div class="body">${r.children.length?`<div class="kids-label" style="margin-left:0">Hijos de ${esc(r.name.split(' ')[0])}${r.spouse?' y '+esc(r.spouse.split(' ')[0]):''}</div>`+r.children.map((c,j)=>render(c,0,[{name:r.name,code:r.code}],'rama-'+r.code,j,r)).join(''):'<p style="color:var(--muted)">Todavía no hay descendientes anotados en esta rama.</p>'}</div>
    </details>`);
  });
  $('#index').innerHTML=idx.join('');
  $('#ramas').innerHTML=ramas.join('');

  /* ---- navigation ---- */
  function goto(id){
    const el=document.getElementById(id); if(!el)return;
    const d=el.closest('details'); if(d)d.open=true;
    el.scrollIntoView({behavior:'smooth',block:'center'});
    const row=el.classList.contains('per')?el.querySelector(':scope > .row'):null;
    if(row){row.classList.add('hl');setTimeout(()=>row.classList.remove('hl'),4000);}
  }
  document.querySelectorAll('.index a').forEach(a=>a.addEventListener('click',e=>{e.preventDefault();const d=$('#rama-'+a.dataset.rama);d.open=true;d.scrollIntoView({behavior:'smooth',block:'start'});}));
  $('#openall').onclick=()=>document.querySelectorAll('.rama').forEach(d=>d.open=true);
  $('#closeall').onclick=()=>document.querySelectorAll('.rama').forEach(d=>d.open=false);
  function fromHash(){const h=(location.hash||'').slice(1);if(h==='imprimir'){document.querySelectorAll('.rama').forEach(d=>d.open=true);return;}if(h)goto(h);}
  fromHash(); addEventListener('hashchange',fromHash);

  /* ---- search ---- */
  const norm=s=>s.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
  const q=$('#q'),res=$('#results');
  function relation(e){
    // e.path: [rama root, ..., person]; describe like the original: hijo de X, nieto de Y, bisnieto de Z, ... de Miguel
    const anc=e.path.slice(0,-1).reverse(); // nearest first
    const parts=anc.map((a,i)=>`${GEN[i]||'descendiente'} de ${a.name.split(' ')[0]}`);
    parts.push(`${GEN[anc.length]||'descendiente'} de Miguel y Maria`);
    return parts.join(', ');
  }
  q.addEventListener('input',()=>{
    const v=norm(q.value.trim());
    if(v.length<2){res.hidden=true;res.innerHTML='';return;}
    const hits=all.filter(e=>norm(e.p.name+' '+(e.p.spouse||'')+' '+e.p.code).includes(v)).slice(0,40);
    res.innerHTML=hits.length?hits.map(e=>`<button type="button" class="r" data-id="${e.id}"><b>${e.p.code?`<span class="code">${esc(e.p.code)}</span> `:''}${esc(e.p.name)}${e.p.spouse?' y '+esc(e.p.spouse):''}</b><span>Rama ${e.branch.code} · ${esc(relation(e))}</span></button>`).join('')
      :`<div class="none">No se encontró a nadie con ese nombre. Pruebe con menos letras.</div>`;
    res.hidden=false;
  });
  res.addEventListener('click',e=>{const b=e.target.closest('.r');if(!b)return;res.hidden=true;goto(b.dataset.id);});
  document.addEventListener('click',e=>{if(!e.target.closest('.search'))res.hidden=true;});
  q.addEventListener('focus',()=>{if(res.innerHTML)res.hidden=false;});

  /* ---- corrections ---- */
  const C=DATA.contacto; const tel=C.telefono.replace(/\D/g,''); const wa='549'+tel;
  $('#mail').textContent=C.email.toLowerCase(); $('#tel').textContent=C.telefono;
  $('#walink').href='https://wa.me/'+wa+'?text='+encodeURIComponent('Hola Mauricio, tengo un dato para el árbol genealógico Pezuk: ');
  $('#maillink').href='mailto:'+C.email.toLowerCase()+'?subject='+encodeURIComponent('Árbol genealógico Pezuk');
  function toast(t){const d=document.createElement('div');d.className='toast';d.textContent=t;document.body.appendChild(d);setTimeout(()=>d.remove(),2200);}
  document.addEventListener('click',e=>{
    const b=e.target.closest('.fix'); if(!b)return;
    const entry=all.find(x=>x.id===b.dataset.id); if(!entry)return;
    const per=document.getElementById(entry.id);
    const existing=per.querySelector(':scope > .fixpanel');
    if(existing){existing.remove();return;}
    const who=`${entry.p.name}${entry.p.spouse?' y '+entry.p.spouse:''}`;
    const ref=entry.p.code?`código ${entry.p.code}`:`rama ${entry.branch.code}, ${relation(entry)}`;
    const text=`Corrección para el árbol Pezuk – ${ref} (${who}):\n`;
    const panel=document.createElement('div'); panel.className='fixpanel';
    panel.innerHTML=`<label for="t-${entry.id}">Escriba aquí el dato correcto o lo que falta:</label>
      <textarea id="t-${entry.id}">${esc(text)}</textarea>
      <div class="actions">
        <a class="btn" target="_blank" rel="noopener" data-wa>Enviar por WhatsApp</a>
        <a class="btn ghost" data-mail>Enviar por correo</a>
        <button type="button" class="btn ghost" data-copy>Copiar el texto</button>
        <button type="button" class="btn ghost" data-close>Cerrar</button>
      </div>
      <div class="contact">Si los botones no abren nada, copie el texto y mándelo a <b>${esc(C.email.toLowerCase())}</b> o al <b>${esc(C.telefono)}</b>.</div>`;
    per.insertBefore(panel,per.querySelector(':scope > .row').nextSibling);
    const ta=panel.querySelector('textarea');
    const upd=()=>{panel.querySelector('[data-wa]').href='https://wa.me/'+wa+'?text='+encodeURIComponent(ta.value);
      panel.querySelector('[data-mail]').href='mailto:'+C.email.toLowerCase()+'?subject='+encodeURIComponent('Corrección árbol Pezuk – '+ref)+'&body='+encodeURIComponent(ta.value);};
    upd(); ta.addEventListener('input',upd);
    panel.querySelector('[data-close]').onclick=()=>panel.remove();
    panel.querySelector('[data-copy]').onclick=()=>{
      const done=()=>toast('Texto copiado');
      const fallback=()=>{ta.focus();ta.select();try{document.execCommand('copy');done();}catch(e){toast('Seleccione el texto y cópielo');}};
      if(navigator.clipboard&&navigator.clipboard.writeText){navigator.clipboard.writeText(ta.value).then(done,fallback);}else fallback();
    };
    ta.focus(); ta.setSelectionRange(ta.value.length,ta.value.length);
  });
})();
