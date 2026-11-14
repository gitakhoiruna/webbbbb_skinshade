
(() => {
 const ARROW='<svg class="ico arr" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 17 17 7"/><path d="M7 7h10v10"/></svg>';
 const menuToggle = document.querySelector('.menu-toggle');
 const nav = document.querySelector('.nav-links');
 if (menuToggle && nav) menuToggle.addEventListener('click', () => {
   const open = nav.classList.toggle('open');
   menuToggle.setAttribute('aria-expanded', String(open));
 });

 const questionData = [
  {q:'Bagaimana kondisi kulitmu sekitar 30–60 menit setelah mencuci wajah tanpa memakai produk?',hint:'Pilih kondisi yang paling sering kamu rasakan.',a:[
   {t:'Terasa nyaman, tidak terlalu berminyak atau kering',s:'normal'},
   {t:'Tampak mengilap di hampir seluruh wajah',s:'berminyak'},
   {t:'Terasa kencang, kasar, atau ada bagian yang mengelupas',s:'kering'},
   {t:'Dahi, hidung, dan dagu berminyak, tetapi pipi normal atau kering',s:'kombinasi'},
   {t:'Mudah merah, perih, gatal, atau terasa panas',s:'sensitif'}]},
  {q:'Bagaimana kondisi minyak pada wajahmu menjelang siang atau sore?',hint:'Ingat kondisi kulitmu pada hari biasa, bukan setelah olahraga.',a:[
   {t:'Sedikit minyak saja dan wajah tetap terasa nyaman',s:'normal'},
   {t:'Minyak terlihat di sebagian besar area wajah',s:'berminyak'},
   {t:'Hampir tidak berminyak dan kulit terasa kering atau tertarik',s:'kering'},
   {t:'Minyak terutama muncul di dahi, hidung, dan dagu',s:'kombinasi'},
   {t:'Kulit terasa tidak nyaman atau mudah bereaksi',s:'sensitif'}]},
  {q:'Bagaimana tampilan pori-pori dan tekstur kulitmu?',hint:'Perhatikan area pipi, hidung, dan dahi dengan cahaya yang cukup.',a:[
   {t:'Pori-pori tidak terlalu terlihat dan tekstur relatif merata',s:'normal'},
   {t:'Pori-pori terlihat jelas, terutama di hidung dan pipi',s:'berminyak'},
   {t:'Tekstur terasa kasar, kusam, atau ada sisik halus',s:'kering'},
   {t:'Pori-pori lebih terlihat di zona T, tetapi area pipi lebih normal/kering',s:'kombinasi'},
   {t:'Kulit mudah memerah atau terasa perih saat terkena gesekan/produk',s:'sensitif'}]},
  {q:'Apa yang paling sering kamu alami setelah menggunakan produk perawatan atau terkena perubahan cuaca?',hint:'Pilih respons yang paling sering terjadi.',a:[
   {t:'Biasanya tetap nyaman dan jarang mengalami masalah',s:'normal'},
   {t:'Wajah cepat berminyak atau muncul komedo',s:'berminyak'},
   {t:'Kulit terasa kering, tertarik, atau mengelupas',s:'kering'},
   {t:'Sebagian area berminyak, sedangkan bagian lain terasa kering',s:'kombinasi'},
   {t:'Mudah gatal, perih, kemerahan, atau terasa panas',s:'sensitif'}]},
  {q:'Jika harus memilih, kondisi mana yang paling menggambarkan kulitmu secara keseluruhan?',hint:'Pertanyaan ini membantu menentukan hasil utama. Kulit sensitif juga dapat bersamaan dengan jenis kulit lain.',a:[
   {t:'Seimbang dan relatif jarang bermasalah',s:'normal'},
   {t:'Cepat mengilap di hampir seluruh wajah',s:'berminyak'},
   {t:'Sering terasa kencang dan kurang lembap',s:'kering'},
   {t:'Zona T berminyak, pipi normal atau kering',s:'kombinasi'},
   {t:'Sangat mudah bereaksi terhadap produk atau lingkungan',s:'sensitif'}]}
 ];
 const typeDetails = {
  normal:{name:'Kulit Normal',desc:'Kulit normal cenderung memiliki keseimbangan air dan minyak yang baik. Wajah biasanya terasa nyaman, tidak terlalu berminyak atau kering, dan pori-pori tidak terlalu terlihat.',ingredients:['Hyaluronic acid','Vitamin C','Ceramide'],care:['Gunakan pembersih wajah yang lembut.','Pakai pelembap untuk menjaga kelembapan kulit.','Gunakan tabir surya SPF minimal 30 setiap pagi.','Tambahkan serum sesuai kebutuhan; tidak perlu memakai banyak bahan aktif sekaligus.'],routine:'Pagi: pembersih lembut, pelembap, tabir surya. Malam: bersihkan wajah, pelembap, dan bahan tambahan bila diperlukan.'},
  berminyak:{name:'Kulit Berminyak',desc:'Kulit berminyak menghasilkan sebum lebih banyak sehingga wajah mudah mengilap dan pori-pori tampak lebih jelas. Minyak berlebih juga dapat berkontribusi pada komedo atau jerawat, tetapi kulit tetap membutuhkan hidrasi.',ingredients:['Niacinamide','Salicylic acid (BHA)','Hyaluronic acid'],care:['Pilih tekstur gel atau lotion ringan yang terasa nyaman.','Tetap gunakan pelembap; cari tekstur ringan dan non-comedogenic.','Bila menggunakan BHA, mulai perlahan dan hentikan jika iritasi.','Hindari mencuci wajah berlebihan atau menggosok terlalu keras.','Gunakan tabir surya setiap pagi.'],routine:'Pagi: pembersih lembut, pelembap ringan, tabir surya. Malam: bersihkan wajah, pelembap; bahan seperti BHA hanya ditambahkan bertahap sesuai toleransi.'},
  kering:{name:'Kulit Kering',desc:'Kulit kering cenderung menghasilkan lebih sedikit sebum. Kulit bisa terasa kencang, kasar, kusam, atau mengelupas karena kelembapan mudah hilang.',ingredients:['Hyaluronic acid','Ceramide','Glycerin','Panthenol'],care:['Gunakan pembersih lembut dan hindari air yang terlalu panas.','Pilih pelembap krim yang membantu menjaga kelembapan.','Aplikasikan pelembap saat kulit masih sedikit lembap.','Hindari produk yang membuat kulit makin kering atau terasa perih.','Gunakan tabir surya setiap pagi.'],routine:'Pagi: pembersih lembut, pelembap krim, tabir surya. Malam: pembersih lembut, bahan hidrasi, dan pelembap yang lebih kaya bila diperlukan.'},
  kombinasi:{name:'Kulit Kombinasi',desc:'Kulit kombinasi memiliki zona T (dahi, hidung, dagu) yang lebih berminyak, sementara pipi cenderung normal atau kering. Karena itu, kebutuhan tiap area dapat berbeda.',ingredients:['Niacinamide','Hyaluronic acid','Ceramide'],care:['Mulai dengan pembersih dan pelembap ringan yang nyaman di seluruh wajah.','Tambahkan hidrasi pada pipi jika terasa kering.','Bahan pengontrol minyak bisa difokuskan pada zona T bila dibutuhkan.','Jangan membuat area kering semakin kering dengan eksfoliasi berlebihan.','Gunakan tabir surya setiap pagi.'],routine:'Pagi: pembersih, pelembap ringan, tabir surya. Malam: bersihkan wajah, beri hidrasi, lalu sesuaikan pelembap di zona yang terasa kering.'},
  sensitif:{name:'Kulit Sensitif',desc:'Kulit sensitif mudah bereaksi terhadap bahan atau kondisi lingkungan, misalnya terasa perih, gatal, panas, atau kemerahan. Sensitivitas dapat muncul bersamaan dengan kulit kering, berminyak, atau kombinasi.',ingredients:['Ceramide','Panthenol','Centella asiatica (cica)','Hyaluronic acid'],care:['Utamakan rutinitas sederhana dan produk tanpa pewangi jika cocok.','Perkenalkan produk baru satu per satu dan lakukan uji tempel.','Hindari bahan yang pernah memicu reaksi pada kulitmu.','Hentikan produk yang menyebabkan reaksi.','Jika reaksi berat atau berulang, konsultasikan dengan dokter kulit.'],routine:'Pagi: pembersih lembut, pelembap sederhana, tabir surya yang cocok. Malam: pembersih lembut dan pelembap penenang. Hindari mencoba banyak bahan aktif sekaligus.'}
 };
 const quiz = document.querySelector('[data-quiz]');
 if (quiz) {
  let index = 0;
  const answers = Array(questionData.length).fill(null);
  const area = document.getElementById('question-area');
  const count = document.getElementById('question-count');
  const percent = document.getElementById('progress-percent');
  const fill = document.getElementById('progress-fill');
  const prev = document.getElementById('prev-btn');
  const next = document.getElementById('next-btn');
  const error = document.getElementById('quiz-error');
  function render(){
   const item = questionData[index];
   count.textContent = `Pertanyaan ${index+1} dari ${questionData.length}`;
   const p = Math.round(((index+1)/questionData.length)*100);
   percent.textContent = `${p}%`; fill.style.width = `${p}%`;
   area.innerHTML = `<h2 class="quiz-question">${item.q}</h2><p class="quiz-hint">${item.hint}</p><div class="answer-list">${item.a.map((a,i)=>`<label class="answer-option ${answers[index]===i?'selected':''}"><input type="radio" name="answer" value="${i}" ${answers[index]===i?'checked':''}><span>${a.t}</span></label>`).join('')}</div>`;
   area.querySelectorAll('input[name="answer"]').forEach(input=>input.addEventListener('change',e=>{answers[index]=Number(e.target.value);error.textContent='';renderSelection();}));
   prev.disabled = index===0;
   prev.style.opacity = prev.disabled ? '.45' : '1';
   next.innerHTML = index===questionData.length-1 ? 'Lihat Hasil '+ARROW : 'Lanjut '+ARROW;
   error.textContent = '';
  }
  function renderSelection(){area.querySelectorAll('.answer-option').forEach((el,i)=>el.classList.toggle('selected',answers[index]===i));}
  prev.addEventListener('click',()=>{if(index>0){index--;render();}});
  next.addEventListener('click',()=>{
   if(answers[index]===null){error.textContent='Pilih satu jawaban terlebih dahulu untuk melanjutkan.';return;}
   if(index<questionData.length-1){index++;render();return;}
   const scores={normal:0,berminyak:0,kering:0,kombinasi:0,sensitif:0};
   answers.forEach((answer,i)=>{const key=questionData[i].a[answer].s;scores[key]++;});
   // Sensitivity is treated as a co-occurring characteristic; main type is selected among the four oil/moisture patterns unless sensitivity is the strongest repeated response.
   const sorted=Object.entries(scores).sort((a,b)=>b[1]-a[1]);
   const resultType=sorted[0][0];
   sessionStorage.setItem('skinshadeResult',JSON.stringify({type:resultType,scores,answers,createdAt:new Date().toISOString()}));
   window.location.href='result.html';
  });
  render();
 }
 const resultNode=document.getElementById('result-content');
 if(resultNode){
  let data=null;try{data=JSON.parse(sessionStorage.getItem('skinshadeResult')||'null')}catch(e){}
  if(!data||!typeDetails[data.type]){
   resultNode.innerHTML='<div class="content-callout">Belum ada hasil analisis pada sesi ini. <a class="text-link" href="analysis.html">Isi kuesioner terlebih dahulu '+ARROW+'</a></div>';
  }else{
   const d=typeDetails[data.type];
   const scoreText=Object.entries(data.scores||{}).sort((a,b)=>b[1]-a[1]).slice(0,3).map(([k,v])=>`${typeDetails[k].name}: ${v}`).join(' • ');
   resultNode.innerHTML=`
    <section class="result-hero"><div><h2 class="result-type">${d.name}</h2><p>${d.desc}</p><div class="result-pills"><span class="pill">5 pertanyaan dijawab</span><span class="pill">Hasil edukatif</span></div><p class="small-note">Ringkasan jawaban: ${scoreText}</p></div><img class="result-image" src="assets/hasil.jpg" alt="Ilustrasi perawatan kulit" onerror="this.src='assets/beauty-placeholder.svg'"></section>
    <div class="result-grid"><section class="result-panel"><h3>Kandungan yang bisa dipelajari</h3><p>Kandungan berikut umum digunakan untuk mendukung kebutuhan kulit ini. Kecocokan tetap bergantung pada formulasi dan respons masing-masing kulit.</p><div class="ingredient-list">${d.ingredients.map(x=>`<span class="ingredient">${x}</span>`).join('')}</div></section>
    <section class="result-panel"><h3>Hal yang perlu diperhatikan</h3><ul>${d.care.map(x=>`<li>${x}</li>`).join('')}</ul></section>
    <section class="result-panel"><h3>Contoh rutinitas sederhana</h3><p>${d.routine}</p></section>
    <section class="result-panel"><h3>Lanjutkan ke panduan skincare</h3><p>Baca penjelasan lengkap tentang jenis kulit, kandungan, layering, dan tips memakai skincare dengan aman.</p><a class="btn" href="skincare.html">Buka Panduan Skincare ${ARROW}</a></section></div>
    <div class="inline-promo"><strong>Butuh bantuan mengingat rutinitas?</strong><p>Fitur Reminder tersedia di aplikasi Skin&amp;Shade. Untuk mencoba tampilan makeup virtual, gunakan fitur AR Try-On di aplikasi.</p><a class="text-link" href="makeup.html">Baca juga Panduan Makeup ${ARROW}</a></div>
    <p class="small-note">Catatan: Kuesioner ini merupakan alat edukasi sederhana, bukan diagnosis medis. Kulit sensitif bisa bersamaan dengan jenis kulit lain. Bila kamu mengalami reaksi berat, nyeri, ruam menetap, atau jerawat parah, mintalah saran dokter kulit.</p>`;
  }
 }
 const loginForm=document.getElementById('login-form');
 if(loginForm)loginForm.addEventListener('submit',e=>{e.preventDefault();const email=document.getElementById('login-email').value.trim();const pass=document.getElementById('login-password').value;const msg=document.getElementById('login-message');if(!email||!pass){msg.textContent='Lengkapi email dan kata sandi terlebih dahulu.';return;}msg.textContent='Tampilan login prototipe berhasil divalidasi. Belum ada autentikasi server.';});
 const registerForm=document.getElementById('register-form');
 if(registerForm)registerForm.addEventListener('submit',e=>{e.preventDefault();const name=document.getElementById('reg-name').value.trim();const email=document.getElementById('reg-email').value.trim();const pass=document.getElementById('reg-password').value;const confirm=document.getElementById('reg-confirm').value;const msg=document.getElementById('register-message');if(!name||!email||!pass||!confirm){msg.textContent='Lengkapi semua kolom terlebih dahulu.';return;}if(pass.length<8){msg.textContent='Kata sandi minimal 8 karakter.';return;}if(pass!==confirm){msg.textContent='Konfirmasi kata sandi belum sama.';return;}msg.textContent='Formulir valid. Pendaftaran belum menyimpan data karena belum terhubung ke server.';});
})();

/* ===== Maskot & adegan 3D ===== */
(() => {
 const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
 const holder = document.createElement('div');
 holder.style.cssText = 'position:absolute;width:0;height:0;overflow:hidden';
 holder.innerHTML = '<svg width="0" height="0" aria-hidden="true"><defs><radialGradient id="gDrop" cx=".35" cy=".3" r=".85"><stop offset="0" stop-color="#ffe6ee"/><stop offset=".42" stop-color="#f7a9c1"/><stop offset="1" stop-color="#dc7596"/></radialGradient><radialGradient id="gSun" cx=".4" cy=".35" r=".8"><stop offset="0" stop-color="#fff3b8"/><stop offset="1" stop-color="#ffc857"/></radialGradient></defs></svg>';
 document.body.appendChild(holder);

 const spark = (x, y, s = 1, d = 0, c = '#fff') => `<g transform="translate(${x} ${y}) scale(${s})"><path class="s-tw" style="animation-delay:${d}s" d="M0-9 2.4-2.4 9 0 2.4 2.4 0 9-2.4 2.4-9 0-2.4-2.4z" fill="${c}"/></g>`;
 const bub = (x, y, r = 8, d = 0) => `<circle class="s-rise" style="animation-delay:${d}s" cx="${x}" cy="${y}" r="${r}" fill="rgba(255,255,255,.45)" stroke="#fff" stroke-width="2"/>`;
 const heart = (x, y, s = 1, d = 0, c = '#f09bb4') => `<path class="s-bob" style="animation-delay:${d}s" transform="translate(${x} ${y}) scale(${s})" d="M0 10C-18-4-12-18-4-18c3 0 4 2 4 4 0-2 1-4 4-4 8 0 14 14-4 28z" fill="${c}"/>`;
 const arm = (d, hand) => `<path d="${d}" fill="none" stroke="#e58aa8" stroke-width="9" stroke-linecap="round"/><circle cx="${hand[0]}" cy="${hand[1]}" r="6" fill="#f7a9c1"/>`;

 // Maskot tetesan
 const M = (o = {}) => {
  const eyes = o.eyes === 'cuke'
   ? '<circle cx="-21" cy="18" r="16" fill="#dff2d6" stroke="#9fd194" stroke-width="3"/><circle cx="-21" cy="18" r="8" fill="none" stroke="#bfe3b3" stroke-width="2"/><circle cx="21" cy="18" r="16" fill="#dff2d6" stroke="#9fd194" stroke-width="3"/><circle cx="21" cy="18" r="8" fill="none" stroke="#bfe3b3" stroke-width="2"/>'
   : o.eyes === 'happy'
   ? '<g class="m-eyes"><path d="M-29 20q8-11 16 0M13 20q8-11 16 0" fill="none" stroke="#3a2a33" stroke-width="3.5" stroke-linecap="round"/></g>'
   : '<g class="m-eyes"><ellipse cx="-21" cy="18" rx="6.5" ry="9" fill="#3a2a33"/><ellipse cx="21" cy="18" rx="6.5" ry="9" fill="#3a2a33"/><circle cx="-19" cy="14" r="2.6" fill="#fff"/><circle cx="23" cy="14" r="2.6" fill="#fff"/></g>';
  const mouth = o.open
   ? '<path d="M-10 33q10 16 20 0z" fill="#b94a6b" stroke="#3a2a33" stroke-width="2.5" stroke-linejoin="round"/>'
   : '<path d="M-8 34q8 9 16 0" fill="none" stroke="#3a2a33" stroke-width="3" stroke-linecap="round"/>';
  const left = o.left || arm('M-58 38q-22 2-27 22', [-85, 60]);
  const right = o.right || `<g class="m-wave">${arm('M58 38q22-4 30-26', [88, 12])}</g>`;
  return `<g transform="translate(${o.x || 200} ${o.y || 170}) scale(${o.s || 1})">
  <ellipse class="m-shadow" cx="0" cy="96" rx="54" ry="9" fill="#c25f80" opacity=".22"/>
  <g class="m-body">
   <ellipse cx="-22" cy="86" rx="15" ry="7" fill="#d97996"/><ellipse cx="22" cy="86" rx="15" ry="7" fill="#d97996"/>
   ${left}${right}
   <path d="M0-100C-16-66-62-38-62 22a62 62 0 0 0 124 0C62-38 16-66 0-100z" fill="url(#gDrop)"/>
   <path d="M-44 8c-2-22 8-40 24-54" fill="none" stroke="#fff" stroke-width="8" stroke-linecap="round" opacity=".55"/><circle cx="-47" cy="26" r="4" fill="#fff" opacity=".6"/>
   <ellipse cx="-37" cy="35" rx="10" ry="6" fill="#ff7fa6" opacity=".55"/><ellipse cx="37" cy="35" rx="10" ry="6" fill="#ff7fa6" opacity=".55"/>
   ${eyes}${mouth}${o.top || ''}
  </g></g>`;
 };

 const scenes = {
  hero: { bg: 'linear-gradient(140deg,#fff0f4,#fcdde7 55%,#f8eadf)', vb: '0 0 400 340',
   back: '<circle cx="330" cy="70" r="85" fill="#f7bfd1" opacity=".5"/><circle cx="60" cy="290" r="85" fill="#f6e3d3" opacity=".8"/><ellipse cx="200" cy="268" rx="150" ry="20" fill="#fff" opacity=".6"/>',
   mid: M({ s: 1.12, open: true }) + heart(318, 92, 1.7),
   front: spark(70, 70, 1.3, 0, '#f09bb4') + spark(340, 200, 1, .8) + spark(110, 230, .9, 1.6, '#f09bb4') + bub(60, 190, 9, 0) + bub(350, 130, 7, 1.2) },
  mask: { bg: 'linear-gradient(140deg,#ecf7ea,#fdeef2 60%,#fff6ee)', vb: '0 0 400 340',
   back: '<path d="M10 70c50-16 90 8 100 56-52 6-92-18-100-56z" fill="#cfe8c6"/><path d="M390 280c-50 16-90-8-100-56 52-6 92 18 100 56z" fill="#c4e2b9"/><circle cx="330" cy="60" r="60" fill="#fff" opacity=".6"/><ellipse cx="200" cy="268" rx="140" ry="18" fill="#fff" opacity=".6"/>',
   mid: M({ s: 1.1, eyes: 'cuke', top: '<path d="M-47-28q47-24 94 0l-3 17q-44-20-88 0z" fill="#fff" stroke="#f3c1d0" stroke-width="3" stroke-linejoin="round"/>' }),
   front: bub(80, 230, 10, 0) + bub(320, 200, 8, 1) + bub(250, 280, 6, 2) + spark(60, 150, 1.1, .4, '#9fd194') + spark(345, 120, 1, 1.2, '#f09bb4') },
  serum: { bg: 'linear-gradient(140deg,#fff3ea,#fde3e9 60%,#fff0f4)', vb: '0 0 400 340',
   back: '<circle cx="60" cy="60" r="70" fill="#fff" opacity=".6"/><circle cx="350" cy="280" r="80" fill="#f8cfdb" opacity=".5"/><ellipse cx="200" cy="268" rx="160" ry="18" fill="#fff" opacity=".6"/>',
   mid: '<g class="s-float" transform="translate(52 112)"><ellipse cx="32" cy="12" rx="14" ry="14" fill="#d97996"/><rect x="20" y="22" width="24" height="26" rx="5" fill="#fff" stroke="#d97996" stroke-width="4"/><rect x="0" y="48" width="64" height="106" rx="16" fill="#fff" stroke="#d97996" stroke-width="4"/><rect x="8" y="88" width="48" height="56" rx="10" fill="#f09bb4" opacity=".6"/><rect x="14" y="62" width="36" height="10" rx="5" fill="#fce8ee"/></g>' +
    '<g class="s-float" style="animation-delay:.8s" transform="translate(290 196)"><rect x="-6" y="0" width="92" height="28" rx="11" fill="#f09bb4" stroke="#d97996" stroke-width="4"/><rect x="0" y="26" width="80" height="44" rx="12" fill="#fff" stroke="#d97996" stroke-width="4"/></g>' +
    M({ s: 1.0, x: 205, open: true }) + '<path class="s-drop" transform="translate(84 92)" d="M0-9C5 0 9 5 9 9a9 9 0 0 1-18 0c0-4 4-9 9-18z" fill="#f7a9c1"/>',
   front: spark(40, 40, 1.1, 0, '#f09bb4') + spark(360, 90, 1.2, .6) + bub(330, 160, 8, 0) + bub(130, 60, 6, 1.5) },
  lip: { bg: 'linear-gradient(140deg,#ffe8ee,#f8cdd9 60%,#f9dfd6)', vb: '0 0 400 340',
   back: '<circle cx="330" cy="260" r="70" fill="#fff" stroke="#e8a0b5" stroke-width="4" opacity=".9"/><circle cx="310" cy="244" r="10" fill="#f09bb4"/><circle cx="338" cy="236" r="10" fill="#d97996"/><circle cx="352" cy="266" r="10" fill="#f2c4b3"/><circle cx="316" cy="276" r="10" fill="#e8736f"/><path d="M60 300L110 150" stroke="#d97996" stroke-width="8" stroke-linecap="round"/><path d="M118 130c-12-6-14-24-6-38 14 6 20 24 6 38z" fill="#f09bb4" stroke="#d97996" stroke-width="4"/><circle cx="70" cy="70" r="55" fill="#fff" opacity=".5"/>',
   mid: M({ s: 1.08, open: true, top: '<g transform="translate(16 -90) rotate(20)"><path d="M0 0L-30-16V16z" fill="#f09bb4" stroke="#d97996" stroke-width="3" stroke-linejoin="round"/><path d="M0 0L30-16V16z" fill="#f09bb4" stroke="#d97996" stroke-width="3" stroke-linejoin="round"/><circle r="7" fill="#d97996"/></g>',
    right: '<g class="m-wave">' + arm('M58 38q24-2 32-24', [90, 14]) + '<g transform="translate(90 8)"><rect x="-9" y="-2" width="18" height="30" rx="3" fill="#d97996"/><rect x="-10" y="-9" width="20" height="9" rx="2" fill="#fff" stroke="#d97996" stroke-width="2"/><path d="M-8-9V-34l16-8V-9z" fill="#f2557f" stroke="#d97996" stroke-width="2" stroke-linejoin="round"/></g></g>' }),
   front: heart(70, 200, 1, 0, '#e8527a') + heart(350, 110, 1.3, .8, '#fff') + spark(120, 60, 1.2, .3) + spark(300, 190, 1, 1.1) },
  scan: { bg: 'linear-gradient(140deg,#f3ecfb,#ffe8f1 60%,#fff3ea)', vb: '0 0 400 340',
   back: '<circle cx="340" cy="60" r="70" fill="#fff" opacity=".6"/><circle cx="50" cy="290" r="75" fill="#f2d9ec" opacity=".6"/><path class="s-pulse" d="M90 70V46h24M286 46h24v24M310 270v24h-24M114 294H90v-24" fill="none" stroke="#d97996" stroke-width="5" stroke-linecap="round"/><rect class="s-scan" x="96" y="56" width="208" height="5" rx="3" fill="#f09bb4" opacity=".85"/>',
   mid: M({ s: 1.0, x: 190,
    right: '<g class="m-wave">' + arm('M58 40q16 2 30-8', [88, 30]) + '<line x1="88" y1="30" x2="106" y2="12" stroke="#d97996" stroke-width="9" stroke-linecap="round"/><circle cx="126" cy="-8" r="30" fill="#fff" fill-opacity=".55" stroke="#d97996" stroke-width="6"/><path d="M112-14q6-9 18-7" fill="none" stroke="#fff" stroke-width="4" stroke-linecap="round"/></g>' }),
   front: '<g class="s-bob" transform="translate(52 130)"><circle r="14" fill="#fff" stroke="#d97996" stroke-width="3"/><path d="M-6 0l4 4 8-8" fill="none" stroke="#d97996" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/></g><g class="s-bob" style="animation-delay:.7s" transform="translate(356 200)"><circle r="12" fill="#fff" stroke="#d97996" stroke-width="3"/><path d="M-5 0l3.5 3.5 7-7" fill="none" stroke="#d97996" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/></g>' + spark(330, 110, 1.1) + spark(70, 60, 1, 1, '#f09bb4') },
  wash: { bg: 'linear-gradient(140deg,#e6f4fb,#f4f0fb 55%,#fff0f4)', vb: '0 0 400 340',
   back: '<circle cx="60" cy="70" r="65" fill="#fff" opacity=".65"/><circle cx="340" cy="270" r="80" fill="#cfe8f5" opacity=".55"/><ellipse cx="200" cy="268" rx="140" ry="18" fill="#fff" opacity=".6"/><g stroke="#9ed3ec" stroke-width="4" stroke-linecap="round"><line class="s-fall" x1="150" y1="-10" x2="150" y2="14"/><line class="s-fall" style="animation-delay:.4s" x1="200" y1="-10" x2="200" y2="14"/><line class="s-fall" style="animation-delay:.8s" x1="250" y1="-10" x2="250" y2="14"/><line class="s-fall" style="animation-delay:1.2s" x1="175" y1="-10" x2="175" y2="14"/><line class="s-fall" style="animation-delay:.2s" x1="225" y1="-10" x2="225" y2="14"/></g>',
   mid: M({ s: 1.05, eyes: 'happy', open: true, top: '<g fill="#fff" stroke="#cfe6f2" stroke-width="2.5"><circle cx="-16" cy="-90" r="16"/><circle cx="12" cy="-94" r="18"/><circle cx="0" cy="-112" r="13"/><circle cx="-30" cy="-76" r="11"/><circle cx="30" cy="-78" r="12"/></g>' }),
   front: bub(70, 240, 12, 0) + bub(330, 220, 9, .8) + bub(120, 150, 7, 1.6) + bub(290, 120, 10, .4) + bub(360, 300, 6, 2) + spark(60, 130, 1, .5, '#9ed3ec') },
  result: { bg: 'linear-gradient(140deg,#fff5da,#ffe3ec 60%,#fdeaf2)', vb: '0 0 400 340',
   back: '<circle cx="200" cy="140" r="130" fill="#fff" opacity=".45"/><g class="s-spin" style="transform-origin:200px 140px" stroke="#ffe08a" stroke-width="6" stroke-linecap="round" opacity=".8"><line x1="200" y1="-10" x2="200" y2="20"/><line x1="320" y1="20" x2="300" y2="40"/><line x1="80" y1="20" x2="100" y2="40"/><line x1="360" y1="140" x2="330" y2="140"/><line x1="40" y1="140" x2="70" y2="140"/></g><ellipse cx="200" cy="268" rx="140" ry="18" fill="#fff" opacity=".6"/>',
   mid: M({ s: 1.05, open: true, left: '<g class="m-wave2">' + arm('M-58 36q-26-8-32-36', [-90, 0]) + '</g>', right: '<g class="m-wave">' + arm('M58 36q26-8 32-36', [90, 0]) + '</g>', top: '<path d="M-20-86l-8-26 16 14 12-20 12 20 16-14-8 26z" fill="#ffd36e" stroke="#e8a93a" stroke-width="3" stroke-linejoin="round"/>' }),
   front: '<g class="s-conf"><rect x="60" y="-10" width="10" height="16" rx="2" fill="#f09bb4"/><rect style="animation-delay:.5s" x="130" y="-10" width="10" height="16" rx="2" fill="#ffd36e"/><rect style="animation-delay:1s" x="220" y="-10" width="10" height="16" rx="2" fill="#9ed3ec"/><rect style="animation-delay:1.5s" x="300" y="-10" width="10" height="16" rx="2" fill="#f09bb4"/><rect style="animation-delay:.9s" x="350" y="-10" width="10" height="16" rx="2" fill="#bfe3b3"/><rect style="animation-delay:.3s" x="30" y="-10" width="10" height="16" rx="2" fill="#ffd36e"/></g>' + spark(70, 90, 1.4, 0, '#ffc857') + spark(340, 70, 1.2, .7, '#ffc857') + heart(60, 250, .9, .4) + heart(350, 240, .9, 1) },
  routine: { bg: 'linear-gradient(90deg,#fff3d6,#fde6ee 50%,#e6e0f6)', vb: '0 0 800 340',
   back: '<g class="s-spin" style="transform-origin:140px 90px"><g stroke="#ffc857" stroke-width="6" stroke-linecap="round"><line x1="140" y1="30" x2="140" y2="42"/><line x1="140" y1="138" x2="140" y2="150"/><line x1="80" y1="90" x2="92" y2="90"/><line x1="188" y1="90" x2="200" y2="90"/><line x1="98" y1="48" x2="106" y2="56"/><line x1="174" y1="124" x2="182" y2="132"/><line x1="182" y1="48" x2="174" y2="56"/><line x1="106" y1="124" x2="98" y2="132"/></g></g><circle cx="140" cy="90" r="34" fill="url(#gSun)"/><path d="M690 52a40 40 0 1 0 38 56 34 34 0 0 1-38-56z" fill="#fff" stroke="#cfc6ec" stroke-width="3"/>' + spark(600, 60, 1, 0, '#fff') + spark(740, 170, 1.2, .8, '#fff') + spark(640, 130, .8, 1.5, '#fff'),
   mid: '<g class="s-float" transform="translate(110 190)"><rect x="12" y="0" width="36" height="22" rx="6" fill="#ffc857" stroke="#e8a93a" stroke-width="3"/><rect x="0" y="20" width="60" height="92" rx="14" fill="#fff" stroke="#e8a93a" stroke-width="4"/><rect x="10" y="50" width="40" height="40" rx="8" fill="#ffe29a"/></g><g class="s-float" style="animation-delay:.9s" transform="translate(640 220)"><rect x="-6" y="0" width="92" height="26" rx="10" fill="#cfc6ec" stroke="#8f84c6" stroke-width="4"/><rect x="0" y="24" width="80" height="48" rx="12" fill="#fff" stroke="#8f84c6" stroke-width="4"/></g>' + M({ x: 400, s: 1.12, open: true }),
   front: heart(280, 100, 1, 0) + heart(540, 90, 1, .8) + bub(220, 260, 8, 0) + bub(560, 250, 9, 1) }
 };
 const FILES = { 'homee': 'hero', 'masker': 'mask', 'skincare': 'serum', 'makeup': 'lip', 'analisisskin': 'scan', 'cucimuka': 'wash', 'hasil': 'result', 'skincare 3': 'routine' };
 const keyOf = img => {
  const n = decodeURIComponent((img.getAttribute('src') || '').split('/').pop()).toLowerCase().replace(/\.[a-z]+$/, '');
  return FILES[n] || 'hero';
 };

 // Loop 3D (miring mengikuti kursor, goyang pelan saat diam)
 const list = []; let loopOn = false;
 const loop = t => {
  list.forEach(s => {
   if (!s.vis) return;
   const tx = s.hover ? s.px : Math.sin(t / 2000 + s.ph) * 3;
   const ty = s.hover ? s.py : Math.sin(t / 2600 + s.ph) * 8;
   s.rx += (tx - s.rx) * .08; s.ry += (ty - s.ry) * .08;
   s.stage.style.transform = `rotateX(${s.rx.toFixed(2)}deg) rotateY(${s.ry.toFixed(2)}deg)`;
  });
  requestAnimationFrame(loop);
 };
 const io = 'IntersectionObserver' in window ? new IntersectionObserver(es => es.forEach(e => { const s = list.find(x => x.el === e.target); if (s) s.vis = e.isIntersecting; })) : null;

 const build = key => {
  const d = scenes[key] || scenes.hero;
  const el = document.createElement('div');
  el.className = 'scene scene-' + key;
  el.style.setProperty('--scene-bg', d.bg);
  el.setAttribute('role', 'img');
  el.setAttribute('aria-label', 'Ilustrasi maskot Skin&Shade');
  const lay = (cls, inner) => `<svg class="lay ${cls}" viewBox="${d.vb}" preserveAspectRatio="xMidYMid meet" aria-hidden="true">${inner}</svg>`;
  el.innerHTML = `<div class="stage">${lay('lay-bg', d.back)}${lay('lay-mid', d.mid)}${lay('lay-fg', d.front)}</div>`;
  if (!reduce) {
   const s = { el, stage: el.firstChild, rx: 0, ry: 0, px: 0, py: 0, hover: false, vis: true, ph: Math.random() * 6 };
   list.push(s); io && io.observe(el);
   el.addEventListener('pointermove', e => { if (e.pointerType === 'touch') return; const r = el.getBoundingClientRect(); s.py = ((e.clientX - r.left) / r.width - .5) * 22; s.px = -((e.clientY - r.top) / r.height - .5) * 16; s.hover = true; });
   el.addEventListener('pointerleave', () => { s.hover = false; });
   if (!loopOn) { loopOn = true; requestAnimationFrame(loop); }
  } else el.classList.add('static');
  el.addEventListener('click', () => { el.classList.remove('jump'); void el.offsetWidth; el.classList.add('jump'); });
  return el;
 };
 const failed = img => img.complete && img.naturalWidth === 0;
 // Pasang adegan hanya jika foto aslinya tidak ada / gagal dimuat
 window.SkinScene = {
  hook(img, target, replaceSelf) {
   const mount = () => {
    const sc = build(keyOf(img));
    if (replaceSelf) { sc.classList.add('article-scene', 'img-frame', 'has-scene'); img.replaceWith(sc); }
    else { target.classList.add('has-scene'); target.replaceChildren(sc); }
   };
   if (failed(img)) mount(); else img.addEventListener('error', mount, { once: true });
  }
 };
})();

/* ===== Animasi gambar ===== */
(() => {
 const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
 const page = (location.pathname.split('/').pop() || 'index.html').replace('.html','') || 'index';
 document.body.dataset.page = page === 'index' ? 'home' : page;

 // Bungkus gambar dengan bingkai supaya bisa zoom/geser halus tanpa keluar dari sudutnya
 const wrap = (img, moveClass) => {
  if (!img || img.closest('.img-frame')) return null;
  const f = document.createElement('div');
  f.className = 'img-frame' + (moveClass ? ' ' + img.className : '');
  img.parentNode.insertBefore(f, img);
  f.appendChild(img);
  img.className = 'frame-img';
  return f;
 };
 const frames = [];
 document.querySelectorAll('.hero-photo,.split-image,.result-image').forEach(i => { const f = wrap(i, true); frames.push(f); window.SkinScene && window.SkinScene.hook(i, f); });
 document.querySelectorAll('.page-hero img:not(.brand-logo),.analysis-aside img').forEach(i => { const f = wrap(i, false); frames.push(f); window.SkinScene && window.SkinScene.hook(i, f); });
 document.querySelectorAll('img.article-image').forEach(i => window.SkinScene && window.SkinScene.hook(i, null, true));

 // Efek hiasan di atas gambar
 const rnd = (a, b) => a + Math.random() * (b - a);
 const sparkle = '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2l2.2 6.8L21 11l-6.8 2.2L12 20l-2.2-6.8L3 11l6.8-2.2z"/></svg>';
 const addFx = (box, kind, n) => {
  if (!box || reduce || box.querySelector('.fx') || box.classList.contains('has-scene')) return;
  for (let i = 0; i < n; i++) {
   const s = document.createElement('span');
   s.className = 'fx fx-' + kind;
   if (kind === 'bubble') {
    const size = rnd(8, 26);
    s.style.cssText = `--x:${rnd(4, 92).toFixed(0)}%;--s:${size.toFixed(0)}px;--t:${rnd(6, 11).toFixed(1)}s;--dl:${rnd(0, 7).toFixed(1)}s`;
   } else {
    s.innerHTML = sparkle;
    s.style.cssText = `left:${rnd(6, 90).toFixed(0)}%;top:${rnd(6, 88).toFixed(0)}%;width:${rnd(12, 24).toFixed(0)}px;height:${rnd(12, 24).toFixed(0)}px;--t:${rnd(2.2, 4).toFixed(1)}s;--dl:${rnd(0, 4).toFixed(1)}s`;
   }
   box.appendChild(s);
  }
 };
 const kind = page === 'makeup' || page === 'result' || page === 'index' ? 'twinkle' : 'bubble';
 const pageKind = page === 'makeup' ? 'twinkle' : (page === 'skincare' || page === 'analysis' ? 'bubble' : 'twinkle');
 document.querySelectorAll('.img-frame,.guide-visual').forEach(b => addFx(b, pageKind, 7));

 // Parallax halus saat scroll
 if (!reduce) {
  const imgs = [...document.querySelectorAll('.img-frame > img, .guide-visual > img')];
  let t = false;
  const upd = () => {
   const vh = window.innerHeight;
   imgs.forEach(im => {
    if (!im.isConnected) return;
    const r = im.parentElement.getBoundingClientRect();
    if (r.bottom < -50 || r.top > vh + 50) return;
    const p = ((r.top + r.height / 2) - vh / 2) / vh;
    im.style.translate = `0 ${(-p * 28).toFixed(1)}px`;
   });
   t = false;
  };
  window.addEventListener('scroll', () => { if (!t) { t = true; requestAnimationFrame(upd); } }, {passive: true});
  window.addEventListener('resize', upd); upd();
 }
})();

/* ===== Animasi & interaksi tambahan ===== */
(() => {
 const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

 // Header: bayangan + bar progres scroll
 const header = document.querySelector('.site-header');
 let bar = null;
 if (header) { bar = document.createElement('div'); bar.className = 'scroll-progress'; header.appendChild(bar); }
 let ticking = false;
 const onScroll = () => {
  if (ticking) return; ticking = true;
  requestAnimationFrame(() => {
   const y = window.scrollY, max = document.documentElement.scrollHeight - window.innerHeight;
   if (header) header.classList.toggle('scrolled', y > 8);
   if (bar) bar.style.transform = `scaleX(${max > 0 ? Math.min(y / max, 1) : 0})`;
   ticking = false;
  });
 };
 window.addEventListener('scroll', onScroll, {passive: true}); onScroll();

 // Tutup menu HP saat link diklik / klik di luar
 const nav = document.querySelector('.nav-links'), tg = document.querySelector('.menu-toggle');
 if (nav && tg) {
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => { nav.classList.remove('open'); tg.setAttribute('aria-expanded','false'); }));
  document.addEventListener('click', e => { if (!nav.contains(e.target) && !tg.contains(e.target)) { nav.classList.remove('open'); tg.setAttribute('aria-expanded','false'); } });
 }

 // Muncul saat di-scroll
 const groups = [
  ['.section-head', null], ['.feature', 'stagger'], ['.split > div', 'left'], ['.split > .img-frame', 'right'],
  ['.promo', null], ['.article-content > *', null], ['.type-section', null], ['.skin-type-nav', null],
  ['.analysis-aside', 'left'], ['.result-panel', 'stagger'], ['.inline-promo', null], ['.guide-intro-copy', null], ['.visual-note', null]
 ];
 const targets = [];
 groups.forEach(([sel, mode]) => {
  document.querySelectorAll(sel).forEach((el, i) => {
   if (el.closest('.hero') || el.closest('.page-hero') || el.classList.contains('reveal')) return;
   el.classList.add('reveal');
   if (mode === 'left') el.classList.add('reveal-left');
   if (mode === 'right') el.classList.add('reveal-right');
   if (mode === 'stagger') el.style.setProperty('--d', `${(i % 3) * 0.12}s`);
   targets.push(el);
  });
 });
 if ('IntersectionObserver' in window && !reduce) {
  const io = new IntersectionObserver(entries => entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } }), {threshold: .12, rootMargin: '0px 0px -40px 0px'});
  targets.forEach(t => io.observe(t));
 } else targets.forEach(t => t.classList.add('in'));

 // Hasil kuesioner dibuat lewat JS: tampilkan langsung dengan animasi bawaan
 // Efek parallax ikon di hero mengikuti kursor
 const hv = document.querySelector('.hero-visual');
 if (hv && !reduce && window.matchMedia('(hover: hover)').matches) {
  hv.addEventListener('mousemove', e => {
   const r = hv.getBoundingClientRect(), x = (e.clientX - r.left) / r.width - .5, y = (e.clientY - r.top) / r.height - .5;
   hv.querySelectorAll('.chip').forEach((c, i) => { const k = (i + 1) * 14; c.style.transform = `translate(${x * k}px, ${y * k}px)`; });
  });
  hv.addEventListener('mouseleave', () => hv.querySelectorAll('.chip').forEach(c => c.style.transform = ''));
 }

 // Efek riak (ripple) pada tombol
 document.addEventListener('click', e => {
  const b = e.target.closest('.btn'); if (!b || reduce) return;
  const r = b.getBoundingClientRect(), s = Math.max(r.width, r.height), d = document.createElement('span');
  d.style.cssText = `position:absolute;border-radius:50%;pointer-events:none;background:rgba(255,255,255,.55);width:${s}px;height:${s}px;left:${e.clientX - r.left - s/2}px;top:${e.clientY - r.top - s/2}px;transform:scale(0);opacity:1;transition:transform .6s ease-out,opacity .6s ease-out`;
  b.appendChild(d);
  requestAnimationFrame(() => { d.style.transform = 'scale(2.4)'; d.style.opacity = '0'; });
  setTimeout(() => d.remove(), 650);
 });

 // Kartu login/daftar: getar kalau ada pesan error
 document.querySelectorAll('.form-message').forEach(m => new MutationObserver(() => {
  const card = m.closest('.auth-card'); if (card && !reduce) card.animate([{transform:'translateX(0)'},{transform:'translateX(-7px)'},{transform:'translateX(7px)'},{transform:'translateX(0)'}], {duration: 350});
 }).observe(m, {childList: true, characterData: true, subtree: true}));
})();
