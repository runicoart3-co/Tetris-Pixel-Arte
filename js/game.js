const VERSION="1.0";

function iniciar(){
  console.log("Juego iniciado");
}

window.onload=iniciar;

const OBRAS=[];
(function(){

// Función auxiliar: ensambla obra
function o(id,t,a,s,imagen){OBRAS.push({id,t,a,s,imagen});}

o(1,"La Mona Lisa","Leonardo da Vinci","Renacimiento","assets/art/monalisa.webp");
o(2,"La Última Cena","Leonardo da Vinci","Renacimiento","assets/art/ultimacena.webp");
o(3,"La Creación de Adán","Miguel Ángel","Renacimiento","assets/art/creacionadan.webp");
o(4,"La Escuela de Atenas","Rafael","Renacimiento","assets/art/escuelaatenas.webp");
o(5,"El Nacimiento de Venus","Sandro Botticelli","Renacimiento","assets/art/nacimientovenus.webp");
o(6,"La Primavera","Sandro Botticelli","Renacimiento","assets/art/primavera.webp");
o(7,"David","Miguel Ángel","Renacimiento","assets/art/david.webp");
o(8,"La Piedad","Miguel Ángel","Renacimiento","assets/art/piedad.webp");
o(9,"La Torre de Babel","Pieter Brueghel el Viejo","Renacimiento Flamenco","assets/art/torrebabel.webp");
o(10,"La Joven de la Perla","Johannes Vermeer","Barroco","assets/art/jovenperla.webp");
o(11,"La Ronda de Noche","Rembrandt","Barroco","assets/art/rondanoche.webp");
o(12,"Las Meninas","Diego Velázquez","Barroco","assets/art/meninas.webp");
o(13,"El Éxtasis de Santa Teresa","Gian Lorenzo Bernini","Barroco","assets/art/extasissantateresa.webp");
o(14,"Judith Decapitando a Holofernes","Artemisia Gentileschi","Barroco","assets/art/judithdecapitandoholofernes.webp");
o(15,"El Llamado de San Mateo","Caravaggio","Barroco","assets/art/llamadosanmateo.webp");
o(16,"Muerte Marat","Jacques-Louis David","Neoclasicismo","assets/art/muertemarat.webp");
o(17,"El Juramento de los Horacios","Jacques-Louis David","Neoclasicismo","assets/art/juramentohoracios.webp");
o(18,"La Libertad Guiando al Pueblo","Eugène Delacroix","Romanticismo","assets/art/libertadguiandopueblo.webp");
o(19,"El Caminante sobre el Mar de Nubes","Caspar David Friedrich","Romanticismo","assets/art/caminantesobremarnubes.webp");
o(20,"El 3 de Mayo de 1808","Francisco de Goya","Romanticismo","assets/art/3mayo1808.webp");
o(21,"Saturno Devorando a su Hijo","Francisco de Goya","Romanticismo","assets/art/saturnodevorandohijo.webp");
o(22,"La Pesadilla","	Johann Heinrich Füssli","Romanticismo","assets/art/pesadilla.webp");
o(23,"Aquelarre","Francisco de Goya","Romanticismo","assets/art/aquelarre.webp");
o(24,"El Último Viaje del Temerario","Joseph Mallord William Turner","Romanticismo","assets/art/ultimoviajetemerario.webp");
o(25,"La Gran Ola de Kanagawa","Katsushika Hokusai","Ukiyo-e","assets/art/granolakanagawa.webp");
o(26,"Ofelia","John Everett Millais","Prerrafaelita","assets/art/ofelia.webp");
o(27,"La Dama de Shalott","John William Waterhouse","Prerrafaelita","assets/art/damashalott.webp");
o(28,"Impresión, Sol Naciente","Claude Monet","Impresionismo","assets/art/impresionsolnaciente.webp");
o(29,"Nenúfares","Claude Monet","Impresionismo","assets/art/nenufares.webp");
o(30,"Almuerzo de los Remeros","Pierre-Auguste Renoir","Impresionismo","assets/art/almuerzoremeros.webp");
o(31,"El Moulin de la Galette","Pierre-Auguste Renoir","Impresionismo","assets/art/moulingalette.webp");
o(32,"La Clase de Danza","Edgar Degas","Impresionismo","assets/art/clasedanza.webp");
o(33,"El Bar del Folies-Bergère","Édouard Manet","Impresionismo","assets/art/barfoiles.webp");
o(34,"Retrato de la Madre del Artista","James McNeill Whistler","Esteticismo","assets/art/retratomadreartista.webp");
o(35,"Los Jugadores de Cartas","Paul Cézanne","Postimpresionismo","assets/art/jugadorescartas.webp");
o(36,"La Noche Estrellada","Vincent van Gogh","Postimpresionismo","assets/art/nocheestrellada.webp");
o(37,"Los Girasoles","Vincent van Gogh","Postimpresionismo","assets/art/girasoles.webp");
o(38,"Terraza de Café por la Noche","Vincent van Gogh","Postimpresionismo","assets/art/terrazacafenoche.webp");
o(39,"Habitación en Arlés","Vincent van Gogh","Postimpresionismo","assets/art/habitacionarles.webp");
o(40,"¿De Dónde Venimos?","Paul Gauguin","Postimpresionismo","assets/art/dondevenimos.webp");
o(41,"El Cristo Amarillo","Paul Gauguin","Postimpresionismo","assets/art/cristoamarillo.webp");
o(42,"El Beso","Gustav Klimt","Simbolismo","assets/art/beso.webp");
o(43,"Retrato de Adele Bloch-Bauer I","Gustav Klimt","Modernismo","assets/art/retratoadele.webp");
o(44,"El Grito","Edvard Munch","Expresionismo","assets/art/grito.webp");
o(45,"Naturaleza en Silencio","Carlos Correa","Expresionismo","assets/art/naturalezasilencio.webp");
o(46,"La República","Débora Arango","Expresionismo","assets/art/republica.webp");
o(47,"Horizontes","Francisco Antonio Cano","Costumbrismo","assets/art/horizontes.webp");
o(48,"El Sueño","Henri Rousseau","Naíf","assets/art/sueño.webp");
o(49,"Les Demoiselles d'Avignon","Pablo Picasso","Cubismo","assets/art/damiselas.webp");
o(50,"Guernica","Pablo Picasso","Cubismo","assets/art/guernica.webp");
o(51,"Muchacha Frente al Espejo","Pablo Picasso","Cubismo","assets/art/muchachafrenteespejo.webp");
o(52,"Violín y Candelabro","Georges Braque","Cubismo","assets/art/violincandelabro.webp");
o(53,"Composición VIII","Wassily Kandinsky","Arte abstracto","assets/art/composicion8.webp");
o(54,"Amarillo-Rojo-Azul","Wassily Kandinsky","Arte abstracto","assets/art/amarillorojoazul.webp");
o(55,"Composición Rojo, Azul y Amarillo","Piet Mondrian","Neoplasticismo","assets/art/composicionrojoazulamarillo.webp");
o(56,"Fuente","Marcel Duchamp","Dadaísmo","assets/art/fuente.webp");
o(57,"La Persistencia de la Memoria","Salvador Dalí","Surrealismo","assets/art/persistenciamemoria.webp");
o(58,"Cisnes Reflejando Elefantes","Salvador Dalí","Surrealismo","assets/art/cisnesreflejandoelefantes.webp");
o(59,"Papilla Estelar","Remedios Varo","Surrealismo","assets/art/papillaestelar.webp");
o(60,"La Creación de las Aves","Remedios Varo","Surrealismo","assets/art/creacionaves.webp");
o(61,"Los Amantes","René Magritte","Surrealismo","assets/art/amantes.webp");
o(62,"El Hijo del Hombre","René Magritte","Surrealismo","assets/art/hijohombre.webp");
o(63,"Carnaval de Arlequín","Joan Miró","Surrealismo","assets/art/carnavalarlequin.webp");
o(64,"Las Dos Fridas","Frida Kahlo","Surrealismo","assets/art/dosfridas.webp");
o(65,"Autorretrato con Collar de Espinas","Frida Kahlo","Surrealismo","assets/art/autoretratocollarespinas.webp");
o(66,"La Columna Rota","Frida Kahlo","Surrealismo","assets/art/columnarota.webp");
o(67,"Migrant Mother","Dorothea Lange","Fotografía documental","assets/art/madremigrante.webp");
o(68,"Lunch Atop a Skyscraper","Charles C. Ebbets","Fotografía","assets/art/lunchatopskyscraper.webp");
o(69,"Afghan Girl","Steve McCurry","Fotografía","assets/art/afghangirl.webp");
o(70,"Nighthawks","Edward Hopper","Realismo moderno","assets/art/nighthawks.webp");
o(71,"American Gothic","Grant Wood","Regionalismo","assets/art/americangothic.webp");
o(72,"Sueño de una Tarde Dominical","Diego Rivera","Muralismo","assets/art/sueñotardedominical.webp");
o(73,"El Hombre Controlador del Universo","Diego Rivera","Muralismo","assets/art/hombrecontroladoruniverso.webp");
o(74,"Prometeo","José Clemente Orozco","Muralismo","assets/art/prometeo.webp");
o(75,"Del Porfirismo a la Revolución","David Alfaro Siqueiros","Muralismo","assets/art/porfirismorevolucion.webp");
o(76,"Woman I","Willem de Kooning","Expresionismo abstracto","assets/art/womani.webp");
o(77,"Diptico Marilyn","Andy Warhol","Pop Art","assets/art/dipticomarilyn.webp");
o(78,"Whaam!","Roy Lichtenstein","Pop Art","assets/art/whaam.webp");
o(79,"Spiral Jetty","Robert Smithson","Land Art","assets/art/spiraljetty.webp");
o(80,"Running Fence","Christo y Jeanne-Claude","Land Art","assets/art/runningfence.webp");
o(81,"The Gates","Christo y Jeanne-Claude","Instalación","assets/art/gates.webp");
o(82,"Untitled Film Still #21","Cindy Sherman","Arte conceptual","assets/art/untitledfilmstill21.webp");
o(83,"Girl with Balloon","Banksy","Street Art","assets/art/niñaconglobo.webp");
o(84,"Balloon Dog","Jeff Koons","Neo-Pop","assets/art/balloondog.webp");
o(85,"Rabbit","Jeff Koons","Neo-Pop","assets/art/rabbit.webp");
o(86,"The Physical Impossibility of Death","Damien Hirst","Arte contemporáneo","assets/art/physicalimpossibilitydeath.webp");
o(87,"For the Love of God","Damien Hirst","Arte contemporáneo","assets/art/forlovegod.webp");
o(88,"Infinity Mirror Rooms","Yayoi Kusama","Arte contemporáneo","assets/art/infinitymirrors.webp");
o(89,"Pumpkin","Yayoi Kusama","Arte contemporáneo","assets/art/pumpkin.webp");
o(90,"El Jardín de las Delicias","El Bosco","Renacimiento del Norte","assets/art/jardindelicias.webp");
o(91,"El Matrimonio Arnolfini","Jan van Eyck","Gótico","assets/art/matrimonioarnolfini.webp");
o(92,"El Pensador","Auguste Rodin","Escultura Moderna","assets/art/pensador.webp");
o(93,"El Beso (Rodin)","Auguste Rodin","Escultura Moderna","assets/art/besorodin.webp");
o(94,"Venus de Milo","Alejandro de Antioquía","Arte Helenístico","assets/art/venusmilo.webp");
o(95,"Victoria de Samotracia","Desconocido","Arte Helenístico","assets/art/victoriasamotracia.webp");
o(96,"Discóbolo","Mirón","Arte Griego Clásico","assets/art/discobolo.webp");
o(97,"Busto de Nefertiti","Thutmose","Arte Egipcio","assets/art/bustonefertiti.webp");
o(98,"Guerreros de Terracota","Desconocido","Arte Chino Antiguo","assets/art/guerrerosterracota.webp");
o(99,"La Gran Esfinge de Guiza","Desconocido","Arte Egipcio","assets/art/granesfingeguiza.webp");
o(100,"La Capilla Sixtina","Miguel Ángel","Renacimiento","assets/art/capillasixtina.webp");

})();;

/* ─────────────────────────────────────────
   WEB AUDIO — SONIDOS CHIPTUNE
──────────────────────────────────────── */
let AC = null;
function getAC(){if(!AC)AC=new(window.AudioContext||window.webkitAudioContext)();return AC;}

function playTone(freq,dur,type='square',vol=0.18,startDel=0){
  try{
    const ac=getAC(),o=ac.createOscillator(),g=ac.createGain();
    o.connect(g);g.connect(ac.destination);
    o.type=type;o.frequency.setValueAtTime(freq,ac.currentTime+startDel);
    g.gain.setValueAtTime(0,ac.currentTime+startDel);
    g.gain.linearRampToValueAtTime(vol,ac.currentTime+startDel+0.01);
    g.gain.exponentialRampToValueAtTime(0.001,ac.currentTime+startDel+dur);
    o.start(ac.currentTime+startDel);o.stop(ac.currentTime+startDel+dur);
  }catch(e){}
}

function sfxMove(){
  if(!G.sfxOn)return;
  playTone(220,0.04,'square',0.08);
}
function sfxRotate(){
  if(!G.sfxOn)return;
  playTone(330,0.06,'square',0.12);
  playTone(440,0.06,'square',0.10,0.04);
}
function sfxLand(){
  if(!G.sfxOn)return;
  playTone(150,0.08,'square',0.15);
  playTone(120,0.08,'square',0.12,0.06);
}
function sfxLine(n){
  if(!G.sfxOn)return;
  const notes=n>=4?[523,659,784,1047]:[261,330,392];
  notes.forEach((f,i)=>playTone(f,0.1,'square',0.2,i*0.05));
}
function sfxLevelUp(){
  if(!G.sfxOn)return;
  // Fanfarria de trompeta 8-bit
  const m=[523,659,784,1047,784,1047,1319];
  m.forEach((f,i)=>{playTone(f,0.12,'square',0.22,i*0.09);playTone(f/2,0.12,'sawtooth',0.08,i*0.09)});
}
function sfxArtwork(){
  if(!G.sfxOn)return;
  // Melodía alegre de desbloqueo
  [392,494,587,784].forEach((f,i)=>{
    playTone(f,0.14,'triangle',0.2,i*0.1);
    playTone(f*1.5,0.08,'square',0.08,i*0.1+0.05);
  });
}
function sfxGameOver(){
  if(!G.sfxOn)return;
  // Melodía descendente nostálgica
  [392,349,330,294,261,220,196,175].forEach((f,i)=>{
    playTone(f,0.18,'sawtooth',0.18,i*0.12);
    playTone(f*0.5,0.18,'square',0.09,i*0.12);
  });
}
function sfxBtn(){
  if(!G.sfxOn)return;
  playTone(660,0.05,'square',0.12); 
}
function sfxPause(){
  if(!G.sfxOn)return;
  playTone(440,0.08,'square',0.15);
  playTone(330,0.08,'square',0.12,0.07);
}
function sfxRecord(){
  if(!G.sfxOn)return;
  const t=[523,659,784,1047,1319,1047,784,659,523];
  t.forEach((f,i)=>{playTone(f,0.1,'square',0.2,i*0.07);playTone(f*0.5,0.1,'triangle',0.07,i*0.07)});
}

// MÚSICA CHIPTUNE (loop oscilador)
let musicNodes=[];
let musicPlaying=false;
function startMusic(){
  if(!G.musicOn)return;
  if(musicPlaying)return;
  stopMusic();
  musicPlaying=true;
  try{
    const ac=getAC();
    // Melodía principal: tema nostálgico
    const melody=[
      523,0,523,0,659,0,784,0,
      880,0,784,0,659,0,523,0,
      392,0,440,0,523,0,659,0,
      523,0,0,0,0,0,0,0,
      659,0,659,0,784,0,880,0,
      988,0,880,0,784,0,659,0,
      523,0,587,0,659,0,523,0,
      392,0,0,0,0,0,0,0
    ];
    const bass=[
      131,0,131,0,165,0,196,0,
      220,0,196,0,165,0,131,0,
      98,0,110,0,131,0,165,0,
      131,0,0,0,0,0,0,0,
      165,0,165,0,196,0,220,0,
      247,0,220,0,196,0,165,0,
      131,0,147,0,165,0,131,0,
      98,0,0,0,0,0,0,0
    ];
    const bps=5,step=1/bps;
    const loop=()=>{
      const now=ac.currentTime+0.05;
      melody.forEach((f,i)=>{
        if(!f)return;
        const o=ac.createOscillator(),g=ac.createGain();
        o.connect(g);g.connect(ac.destination);
        o.type='square';o.frequency.value=f;
        const t=now+i*step;
        g.gain.setValueAtTime(0,t);
        g.gain.linearRampToValueAtTime(G.musicVol*0.15,t+0.01);
        g.gain.exponentialRampToValueAtTime(0.001,t+step*0.8);
        o.start(t);o.stop(t+step);
        musicNodes.push(o);
      });
      bass.forEach((f,i)=>{
        if(!f)return;
        const o=ac.createOscillator(),g=ac.createGain();
        o.connect(g);g.connect(ac.destination);
        o.type='sawtooth';o.frequency.value=f;
        const t=now+i*step;
        g.gain.setValueAtTime(0,t);
        g.gain.linearRampToValueAtTime(G.musicVol*0.08,t+0.01);
        g.gain.exponentialRampToValueAtTime(0.001,t+step*0.9);
        o.start(t);o.stop(t+step);
        musicNodes.push(o);
      });
    };
    loop();
    const total=melody.length*step*1000;
    G._musicTimer=setInterval(()=>{if(G.musicOn){loop();}},total-200);
  }catch(e){}
  musicNodes = musicNodes.slice(-500);
}

setInterval(()=>{
  if(
    G.musicOn &&
    musicPlaying &&
    !G._musicTimer
  ){
    startMusic();
  }
},3000);

function stopMusic(){
  musicPlaying=false;
  clearInterval(G._musicTimer);
  musicNodes.forEach(n=>{try{n.stop()}catch(e){}});
  musicNodes=[];
}
function vibrate(pattern=80){
  try{
    if(!G.vibOn) return;
    if(navigator.vibrate){
      navigator.vibrate(pattern);
    }
  }catch(err){
    console.log(err);
  }
}

/* ─────────────────────────────────────────
   DATOS DEL JUEGO
──────────────────────────────────────── */
const COLS=10,ROWS=20,CS=20;
const SHAPES={
  I:{s:[[1,1,1,1]],c:'#4FC3F7'},
  O:{s:[[1,1],[1,1]],c:'#FDD835'},
  T:{s:[[0,1,0],[1,1,1]],c:'#AB47BC'},
  S:{s:[[0,1,1],[1,1,0]],c:'#66BB6A'},
  Z:{s:[[1,1,0],[0,1,1]],c:'#EF5350'},
  J:{s:[[1,0,0],[1,1,1]],c:'#FF7043'},
  L:{s:[[0,0,1],[1,1,1]],c:'#29B6F6'}
};
const SK=Object.keys(SHAPES);
let lastPieceType = null;
let repeatCount = 0;
const LP=[0,100,100,100,100];
const PUNTOS_POR_NIVEL=1000;

/* ─────────────────────────────────────────
   ESTADO GLOBAL
──────────────────────────────────────── */
const G={
  board:[],cur:null,cx:0,cy:0,nxt:null,
  score:0,level:0,lines:0,time:0,levelProgress:0,levelPts:0,
  running:false,paused:false,_holdTimeout:null,_holdInterval:null,
  musicOn:true,sfxOn:true,vibOn:true,
  musicVol:0.8,sfxVol:0.8,
  saved:false,gallery:[],scores:[],
  _raf:null,_timer:null,_hold:null,_lastDrop:0,_musicTimer:null,selectedArt:null,
};

/* ─────────────────────────────────────────
   TÍTULOS PIXEL FICHAS DE TETRIS
──────────────────────────────────────── */
const CC=['c1','c2','c3','c4','c5','c6'];
function buildTitle(id,text){
  const el=document.getElementById(id);if(!el)return;
  el.innerHTML='';
  [...text].forEach((ch,i)=>{
    if(ch===' '){const sp=document.createElement('span');sp.className='sp';el.appendChild(sp);return;}
    const s=document.createElement('span');
    s.className='pl '+CC[i%CC.length];
    s.textContent=ch;
    el.appendChild(s);
  });
}

/* ─────────────────────────────────────────
   PIXEL-ART CANVAS PAINTER
──────────────────────────────────────── */
function drawPixelArt(canvas, artId, size){
  const obra = G.gallery.find(o=>o.id===artId) || OBRAS.find(o=>o.id===artId);
  if(!obra) return;
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, size, size);

  if(obra.imagen){
    const img = new Image();
    img.onload = () => {
      ctx.drawImage(img, 0, 0, size, size);
    };
    img.onerror = () => {
      // Si no carga la imagen, dibuja un placeholder con el número
      ctx.fillStyle = '#1a1d26';
      ctx.fillRect(0, 0, size, size);
      ctx.fillStyle = '#ffd700';
      ctx.font = `bold ${Math.floor(size/4)}px monospace`;
      ctx.textAlign = 'center';
      ctx.fillText(String(obra.id).padStart(2,'0'), size/2, size/2 + size/8);
    };
    img.src = obra.imagen;
  } else if(obra.M && obra.P){
    // Fallback pixel-art procedural
    const grid = obra.M;
    const dim = grid.length;
    const cs = size / dim;
    grid.forEach((row,r) => row.forEach((v,c) => {
      ctx.fillStyle = obra.P[v] || '#111';
      ctx.fillRect(Math.floor(c*cs), Math.floor(r*cs), Math.ceil(cs), Math.ceil(cs));
    }));
  } else {
    // Placeholder con número
    ctx.fillStyle = '#1a1d26';
    ctx.fillRect(0, 0, size, size);
    ctx.fillStyle = '#ffd700';
    ctx.font = `bold ${Math.floor(size/4)}px monospace`;
    ctx.textAlign = 'center';
    ctx.fillText(String(obra.id).padStart(2,'0'), size/2, size/2 + size/8);
  }
}

/* ─────────────────────────────────────────
   PERSISTENCIA
──────────────────────────────────────── */
function saveAll(){
  localStorage.setItem('tg2',JSON.stringify({
    gallery:G.gallery.map(g=>g.unlocked),
    scores:G.scores,
    musicOn:G.musicOn,sfxOn:G.sfxOn,vibOn:G.vibOn,
    musicVol:G.musicVol,sfxVol:G.sfxVol
  }));
  if(G.saved&&G.running){
    localStorage.setItem('tgsave2',JSON.stringify({
      board:G.board,score:G.score,level:G.level,lines:G.lines,time:G.time,levelPts:G.levelPts,
      cx:G.cx,cy:G.cy,cur:G.cur,nxt:G.nxt,gallery:G.gallery,paused:G.paused
    }));
  }
}
function loadAll(){
  G.gallery=OBRAS.map(o=>({...o,unlocked:false}));
  const raw=localStorage.getItem('tg2');
  if(raw){
    const d=JSON.parse(raw);
    if(d.gallery)d.gallery.forEach((u,i)=>{if(G.gallery[i])G.gallery[i].unlocked=u});
    G.scores=d.scores||[];
    G.musicOn=d.musicOn!==undefined?d.musicOn:true;
    G.sfxOn=d.sfxOn!==undefined?d.sfxOn:true;
    G.vibOn=d.vibOn!==undefined?d.vibOn:true;
    G.musicVol=d.musicVol||0.8;
    G.sfxVol=d.sfxVol||0.8;
  } else {G.scores=[];}
  G.saved=!!localStorage.getItem('tgsave2');
}
function loadSave(){
  const raw=localStorage.getItem('tgsave2');
  if(!raw)return false;
  const d=JSON.parse(raw);
  Object.assign(G,d);return true;
}

/* ─────────────────────────────────────────
   NAVEGACIÓN
──────────────────────────────────────── */
function irA(id){
  sfxBtn();
  document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  if(id==='s-gallery')renderGallery();
  if(id==='s-hs')renderHS();
  if(id==='s-menu'){updateContBtn();updateSettingsUI();}
  if(id==='s-instr')drawMiniBoard();
}

/* ─────────────────────────────────────────
   SETTINGS UI
──────────────────────────────────────── */
function updateSettingsUI(){
  const tM=document.getElementById('tog-music');
  const tS=document.getElementById('tog-sfx');
  const tV=document.getElementById('tog-vib');
  tM.textContent=G.musicOn?'ON':'OFF';tM.className='stog '+(G.musicOn?'ton':'toff');
  tS.textContent=G.sfxOn?'ON':'OFF';tS.className='stog '+(G.sfxOn?'ton':'toff');
  tV.textContent=G.vibOn?'ON':'OFF';tV.className='stog '+(G.vibOn?'ton':'toff');
  buildVolBar('vbar-music',G.musicOn?Math.round(G.musicVol*7):0);
  buildVolBar('vbar-sfx',G.sfxOn?Math.round(G.sfxVol*7):0);
}
function buildVolBar(id,filled){
  const el=document.getElementById(id);if(!el)return;
  el.innerHTML='';
  for(let i=0;i<7;i++){
    const s=document.createElement('span');
    s.className='vseg '+(i<filled?'vfill':'vempty');
    s.onclick=(()=>{
      const lv=(i+1)/7;
      if(id==='vbar-music'){G.musicVol=lv;if(!G.musicOn){G.musicOn=true;}else{stopMusic();startMusic();}}
      if(id==='vbar-sfx'){G.sfxVol=lv;if(!G.sfxOn)G.sfxOn=true;}
      updateSettingsUI();saveAll();sfxBtn();
    });
    el.appendChild(s);
  }
}
function toggleMusic(){
  G.musicOn=!G.musicOn;
  if(G.musicOn)startMusic();else stopMusic();
  updateSettingsUI();saveAll();
}
function toggleSfx(){G.sfxOn=!G.sfxOn;updateSettingsUI();saveAll();}
function toggleVib(){G.vibOn=!G.vibOn;updateSettingsUI();saveAll();}

/* ─────────────────────────────────────────
   TECLADO PIXEL (game over)
──────────────────────────────────────── */
let initBuf=[];
function buildKeyboard(){
  const rows=[
    ['A','B','C','D','E','F','G','H','I'],
    ['J','K','L','M','N','O','P','Q','R'],
    ['S','T','U','V','W','X','Y','Z']
  ];
  rows.forEach((row,ri)=>{
    const el=document.getElementById('kr'+ri);
    el.innerHTML='';
    row.forEach(ch=>{
      const b=document.createElement('button');
      b.className='kkey';b.textContent=ch;
      b.onclick=()=>kPress(ch);
      el.appendChild(b);
    });
  });
}
function kPress(l){if(initBuf.length<3){initBuf.push(l);sfxBtn();renderInits();}}
function kBack(){initBuf.pop();sfxBtn();renderInits();}
function kDel(){initBuf=[];sfxBtn();renderInits();}
function kOk(){
  if(initBuf.length===0)return;
  const name=initBuf.join('').padEnd(3,'A');
  const hh=Math.floor(G.time/3600),mm=Math.floor((G.time%3600)/60),ss=G.time%60;
  const ts=`${pad(hh)}:${pad(mm)}:${pad(ss)}`;
  G.scores.push({name,score:G.score,time:G.time,ts});
  G.scores.sort((a,b)=>b.score-a.score);
  if(G.scores.length>10)G.scores.length=10;
  saveAll();
  document.getElementById('go-rec').style.display='none';
  document.getElementById('go-thanks').style.display='block';
  document.getElementById('go-thanks-txt').textContent='¡RÉCORD GUARDADO!';
  sfxRecord();
}
function renderInits(){
  for(let i=0;i<3;i++){
    const el=document.getElementById('i'+i);
    el.textContent=initBuf[i]||'_';
    el.classList.toggle('filled',!!initBuf[i]);
  }
}

/* ─────────────────────────────────────────
   TETRIS LÓGICA
──────────────────────────────────────── */
function mkBoard(){return Array.from({length:ROWS},()=>Array(COLS).fill(0));}
function randPiece(){
  let k;
  do{
    k = SK[Math.floor(Math.random()*SK.length)];
  }
  while(
    repeatCount >= 3 &&
    k === lastPieceType
  );
  if(k === lastPieceType){
    repeatCount++;
  }else{
    lastPieceType = k;
    repeatCount = 1;
  }
  return {
    k,
    ...SHAPES[k],
    s: SHAPES[k].s.map(r => [...r])
  };
}function rotate(s){return Array.from({length:s[0].length},(_,c)=>Array.from({length:s.length},(_,r)=>s[s.length-1-r][c]));}
function hits(sh,x,y,bd){
  for(let r=0;r<sh.length;r++)for(let c=0;c<sh[r].length;c++){
    if(!sh[r][c])continue;
    const nr=y+r,nc=x+c;
    if(nr>=ROWS||nc<0||nc>=COLS)return true;
    if(nr>=0&&bd[nr][nc])return true;
  }return false;
}
function lockPiece(){
  G.cur.s.forEach((row,r)=>row.forEach((v,c)=>{
    if(v)G.board[G.cy+r][G.cx+c]=G.cur.c;
  }));
  sfxLand();
  const cl=clearLines();
  if(cl>0){
    const pts=cl*100;// 100 puntos por línea siempre
    G.score+=pts;
    G.levelPts+=pts;
    G.lines+=cl;
    sfxLine(cl);
    updateHUD();// Subir de nivel cada 1000 puntos acumulados en el nivel
    if(G.levelPts >= PUNTOS_POR_NIVEL){
      G.levelPts = 0; // reinicia barra
      G.level += 1;
      showLevelUp();
      return; // no hacer spawn hasta que el jugador presione continuar
    }
  }
  spawn();
}
function clearLines(){
  let n=0;
  G.board=G.board.filter(row=>{
    if(row.every(c=>c!==0)){n++;return false;}return true;
  });
  while(G.board.length<ROWS)G.board.unshift(Array(COLS).fill(0));
  return n;
}
function spawn(){
  G.cur = G.nxt || randPiece();
  G.nxt = randPiece();
  G.cx = Math.floor(COLS/2) - Math.floor(G.cur.s[0].length/2);
  G.cy = 0;
  if(hits(G.cur.s, G.cx, G.cy, G.board)){ triggerGO(); return; }
  drawNext();
}
function doRotate(){
  if(!G.running||G.paused)return;
  const rot=rotate(G.cur.s);
  const kicks=[0,-1,1,-2,2];
  for(const k of kicks){
    if(!hits(rot,G.cx+k,G.cy,G.board)){G.cur.s=rot;G.cx+=k;sfxRotate();break;}
  }
  drawBoard();
}
function doLeft(){if(!G.running||G.paused)return;if(!hits(G.cur.s,G.cx-1,G.cy,G.board)){G.cx--;sfxMove();}drawBoard();}
function doRight(){if(!G.running||G.paused)return;if(!hits(G.cur.s,G.cx+1,G.cy,G.board)){G.cx++;sfxMove();}drawBoard();}
function doDown(){
  if(!G.running||G.paused)return;
  if(!hits(G.cur.s,G.cx,G.cy+1,G.board)){G.cy++;}else{lockPiece();}
  drawBoard();
}

// Hold
function hstart(d){hstop();exec(d);G._holdTimeout=setTimeout(()=>{G._holdInterval=setInterval(()=>{exec(d);},120);},250);}
function hstop(){clearTimeout(G._holdTimeout);clearInterval(G._holdInterval);}
function exec(d){if(d==='l')doLeft();else if(d==='r')doRight();else if(d==='d')doDown();
}

// Game loop
function loop(ts){
  if(!G.running||G.paused)return;
  const di=Math.max(450,1500-(G.level*50));
  if(ts-G._lastDrop>di){G._lastDrop=ts;doDown();}
  drawBoard();
  G._raf=requestAnimationFrame(loop);
}

function updateHUD(){
  document.getElementById('h-score').textContent=String(G.score).padStart(6,'0');
  document.getElementById('h-level').textContent=String(G.level).padStart(2,'0');
  drawLBar();
}
function drawLBar(){
  const el=document.getElementById('lbar');if(!el)return;
  el.innerHTML='';// Cuántos cuadros verdes: cada 100 pts del nivel actual = 1 cuadro
  const prog = Math.floor(G.levelPts / 100);
  for(let i=0;i<10;i++){
    const d=document.createElement('div');
    d.className='lseg '+(i<prog?'lfill':'lempty');
    el.appendChild(d);
  }
}

function timerTick(){
  if(!G.running||G.paused)return;
  G.time++;
  const m=Math.floor(G.time/60),s=G.time%60;
  document.getElementById('h-time').textContent=`${pad(m)}:${pad(s)}`;
}

/* ─────────────────────────────────────────
   RENDER CANVAS
──────────────────────────────────────── */
function drawBoard(){
  const cv=document.getElementById('cvb');if(!cv)return;
  const ctx=cv.getContext('2d');
  const W=cv.width,H=cv.height;
  const cw=W/COLS,ch=H/ROWS;
  ctx.fillStyle='#0D0F14';ctx.fillRect(0,0,W,H);
  // Grid
  ctx.strokeStyle='#1A1D26';ctx.lineWidth=.5;
  for(let r=0;r<=ROWS;r++){ctx.beginPath();ctx.moveTo(0,r*ch);ctx.lineTo(W,r*ch);ctx.stroke();}
  for(let c=0;c<=COLS;c++){ctx.beginPath();ctx.moveTo(c*cw,0);ctx.lineTo(c*cw,H);ctx.stroke();}
  // Board
  G.board.forEach((row,r)=>row.forEach((col,c)=>{if(col)drawCell(ctx,c,r,col,cw,ch);}));
  // Ghost
  if(G.cur){
    let gy=G.cy;while(!hits(G.cur.s,G.cx,gy+1,G.board))gy++;
    G.cur.s.forEach((row,r)=>row.forEach((v,c)=>{
      if(!v)return;
      ctx.globalAlpha=.18;drawCell(ctx,G.cx+c,gy+r,G.cur.c,cw,ch);ctx.globalAlpha=1;
    }));
    G.cur.s.forEach((row,r)=>row.forEach((v,c)=>{if(v)drawCell(ctx,G.cx+c,G.cy+r,G.cur.c,cw,ch);}));
  }
}
function drawCell(ctx,c,r,col,cw,ch){
  ctx.fillStyle=col;ctx.fillRect(c*cw+1,r*ch+1,cw-2,ch-2);
  ctx.fillStyle='rgba(255,255,255,0.18)';ctx.fillRect(c*cw+1,r*ch+1,cw-2,3);
  ctx.fillStyle='rgba(0,0,0,0.35)';ctx.fillRect(c*cw+1,r*ch+ch-3,cw-2,3);
}
function drawNext(){
  const cv=document.getElementById('cvn');if(!cv||!G.nxt)return;
  const ctx=cv.getContext('2d'),W=cv.width,H=cv.height;
  ctx.fillStyle='#0D0F14';ctx.fillRect(0,0,W,H);
  const sh=G.nxt.s,cs=12;
  const ox=Math.floor((W-sh[0].length*cs)/2),oy=Math.floor((H-sh.length*cs)/2);
  sh.forEach((row,r)=>row.forEach((v,c)=>{
    if(!v)return;
    ctx.fillStyle=G.nxt.c;ctx.fillRect(ox+c*cs+1,oy+r*cs+1,cs-2,cs-2);
    ctx.fillStyle='rgba(255,255,255,0.18)';ctx.fillRect(ox+c*cs+1,oy+r*cs+1,cs-2,2);
  }));
}

/* Mini tablero instrucciones */
function drawMiniBoard(){
  const cv=document.getElementById('mini-board');if(!cv)return;
  const ctx=cv.getContext('2d');ctx.fillStyle='#0D0F14';ctx.fillRect(0,0,90,90);
  ctx.strokeStyle='#1A1D26';ctx.lineWidth=.4;
  const cs=9;
  for(let r=0;r<=10;r++){ctx.beginPath();ctx.moveTo(0,r*cs);ctx.lineTo(90,r*cs);ctx.stroke();}
  for(let c=0;c<=10;c++){ctx.beginPath();ctx.moveTo(c*cs,0);ctx.lineTo(c*cs,90);ctx.stroke();}
  // Demo piezas
  const demo=[[3,8],[4,8],[5,8],[6,8],[3,7],[4,7],[5,6],[6,7],[3,6],[4,5]];
  const dcols=['#4FC3F7','#FDD835','#AB47BC','#EF5350','#66BB6A','#FF7043','#29B6F6'];
  demo.forEach(([c,r],i)=>{
    ctx.fillStyle=dcols[i%dcols.length];ctx.fillRect(c*cs+1,r*cs+1,cs-2,cs-2);
    ctx.fillStyle='rgba(255,255,255,0.18)';ctx.fillRect(c*cs+1,r*cs+1,cs-2,2);
  });
  // Pieza cayendo
  [[4,2],[5,2],[5,3],[6,3]].forEach(([c,r])=>{
    ctx.fillStyle='#66BB6A';ctx.fillRect(c*cs+1,r*cs+1,cs-2,cs-2);
    ctx.fillStyle='rgba(255,255,255,0.18)';ctx.fillRect(c*cs+1,r*cs+1,cs-2,2);
  });
  // Pixel art instrucciones
  const cv2=document.getElementById('instr-art');if(!cv2)return;
  const cvInstr = document.getElementById('instr-art');
if(cvInstr) drawPixelArt(cvInstr, 33, 58);
}

/* ─────────────────────────────────────────
   FLUJO DE JUEGO
──────────────────────────────────────── */
function updateContBtn(){
  const b=document.getElementById('btn-cont');
  if(b){b.classList.toggle('disabled',!G.saved);}
}
function nuevoJuego(){
  sfxBtn();
  localStorage.removeItem('tgsave2');
  G.board=mkBoard();G.score=0;G.level=0;G.lines=0;G.time=0;G.levelPts=0;
  G.nxt=randPiece();G.running=true;G.paused=false;G.saved=false;
  irA('s-game');spawn();updateHUD();
  clearInterval(G._timer);G._timer=setInterval(timerTick,1000);
  cancelAnimationFrame(G._raf);G._lastDrop=performance.now();
  G._raf=requestAnimationFrame(loop);
  updateContBtn();
  if(Date.now() % 5000 < 16){
    saveAll();
  }
}
function continuarJuego(){
  if(!G.saved)return;sfxBtn();
  if(!loadSave())return;
  G.running=true;G.paused=false;
  irA('s-game');drawBoard();drawNext();updateHUD();
  clearInterval(G._timer);G._timer=setInterval(timerTick,1000);
  cancelAnimationFrame(G._raf);G._lastDrop=performance.now();
  G._raf=requestAnimationFrame(loop);
}
function pausar(){
  if(!G.running)return;
  G.paused=true;sfxPause();
  document.getElementById('ov-pause').classList.remove('hid');
  G.saved=true;saveAll();
}
function reanudar(){
  sfxBtn();G.paused=false;
  document.getElementById('ov-pause').classList.add('hid');
  G._lastDrop=performance.now();
  G._raf=requestAnimationFrame(loop);
}
function irMenuJuego(){
  G.saved=true;G.paused=true;
  cancelAnimationFrame(G._raf);clearInterval(G._timer);
  document.getElementById('ov-pause').classList.add('hid');
  saveAll();irA('s-menu');updateContBtn();
}
function triggerGO(){
  G.running=false;G.saved=false;
  cancelAnimationFrame(G._raf);clearInterval(G._timer);
  localStorage.removeItem('tgsave2');
  updateContBtn();
  sfxGameOver();if(G.vibOn && navigator.vibrate){
  navigator.vibrate([600,300,600,300,900]);};
  const hh=Math.floor(G.time/3600),mm=Math.floor((G.time%3600)/60),ss=G.time%60;
  document.getElementById('go-score').textContent=String(G.score).padStart(6,'0');
  document.getElementById('go-time').textContent=`${pad(hh)}:${pad(mm)}:${pad(ss)}`;
  const esR=isRecord(G.score);
  document.getElementById('go-rec').style.display=esR?'':'none';
  document.getElementById('go-thanks').style.display=esR?'none':'block';
  document.getElementById('go-thanks-txt').textContent='¡GRACIAS POR JUGAR!';
  if(esR){initBuf=[];renderInits();}
  irA('s-go');
}
function isRecord(sc){  
  if(G.scores.length<10)return true;
  return sc>G.scores[G.scores.length-1].score;
}
function showLevelUp(){
  vibrate(500,300,500);
 G.paused = true;
  cancelAnimationFrame(G._raf);
  clearInterval(G._timer);
  hstop(); // ← AGREGAR

  const obraIdx = G.level - 1; // level ya fue incrementado antes de llamar esto
  if(obraIdx >= 0 && obraIdx < G.gallery.length){
    G.gallery[obraIdx].unlocked = true;
  }
  const art=G.gallery[obraIdx]||G.gallery[0];
  sfxLevelUp();sfxArtwork();vibrate(500,300,500);

  document.getElementById('lu-old').textContent=`NIVEL ${pad(G.level-1)}`;
  document.getElementById('lu-new').textContent=`NIVEL ${pad(G.level)}`;
  document.getElementById('lu-title').textContent=art.t.toUpperCase();
  document.getElementById('lu-author').textContent=art.a.toUpperCase();
  document.getElementById('lu-style').textContent=art.s.toUpperCase();
  const cv = document.getElementById('lu-canvas');
  if(cv) drawPixelArt(cv, art.id, 160);
  sparks();saveAll();irA('s-level');
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById('s-level').classList.add('active');
}
function continuarTrasNivel(){
  hstop();
  sfxBtn();
  G.paused = false;
  G.running = true;// Mostrar pantalla de juego directamente sin irA (para no disparar sfxBtn doble)
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById('s-game').classList.add('active');
  updateHUD();     // actualiza el nivel nuevo y la barra vacía
  spawn();         // genera la siguiente pieza activa
  drawBoard();     // redibuja el tablero tal como estaba
  drawNext();      // muestra la siguiente pieza
  clearInterval(G._timer);
  G._timer = setInterval(timerTick, 1000);
  G._lastDrop = performance.now();
  G._raf = requestAnimationFrame(loop);
  saveAll();       // guarda el estado con el nivel actualizado
}
function sparks(){
  const el=document.getElementById('sparks');if(!el)return;
  el.innerHTML='';
  for(let i=0;i<14;i++){
    const s=document.createElement('span');s.className='spark';
    s.textContent=['✦','✧','⋆','+','★'][Math.floor(Math.random()*5)];
    s.style.left=Math.random()*88+'%';s.style.top=Math.random()*75+'%';
    s.style.animationDelay=(Math.random()*1.2)+'s';
    s.style.color=['#FFD700','#76FF03','#AB47BC','#4FC3F7','#EF5350'][Math.floor(Math.random()*5)];
    el.appendChild(s);
  }
}
function salir(){sfxBtn();if(confirm('¿Salir del juego?')){irMenuJuego();}}

/* ─────────────────────────────────────────
   GALERÍA
──────────────────────────────────────── */
function renderGallery(){
  const list=document.getElementById('glist');
  const cnt=G.gallery.filter(g=>g.unlocked).length;
  document.getElementById('gcnt').textContent=String(cnt).padStart(2,'0');
  list.innerHTML='';
  G.gallery.forEach(art=>{
    const row=document.createElement('div');
    row.className='grow '+(art.unlocked?'unl':'lkd');
    if(art.unlocked){
      // Thumb canvas
      const th=document.createElement('div');th.className='gthumb';
      const cv=document.createElement('canvas');cv.width=36;cv.height=36;cv.style.imageRendering='pixelated';
      th.appendChild(cv);
      const info=document.createElement('div');info.className='ginfo';
      info.innerHTML=`<div class="gnt"><span class="gnum">${String(art.id).padStart(2,'0')}</span> : <span class="gtxt">${art.t.toUpperCase()}</span></div><div class="gmeta"><span class="green">${art.a}</span> | <span class="purple">${art.s}</span></div>`;
      const st=document.createElement('span');st.className='gstatus green';st.textContent='DESBLOQUEADA ★';
      row.appendChild(th);row.appendChild(info);row.appendChild(st);
      row.addEventListener('click',()=>showDetail(art));
      row.addEventListener('click',()=>sfxBtn());
      setTimeout(()=>drawPixelArt(cv, art.id, 36), 0);
    } else {
      const th=document.createElement('div');th.className='gthumb lkt';th.textContent='?';
      const info=document.createElement('div');info.className='ginfo';
      info.innerHTML=`<div class="gnt"><span class="gray">${String(art.id).padStart(2,'0')} : BLOQUEADA</span></div>`;
      const lk=document.createElement('span');lk.style.fontSize='16px';lk.textContent='🔒';
      row.appendChild(th);row.appendChild(info);row.appendChild(lk);
    }
    list.appendChild(row);
  });
}
function showDetail(art){
  G.selectedArt = art;
  sfxBtn();
  const cv = document.getElementById('det-canvas');
  if(cv) drawPixelArt(cv, art.id, 200);
  document.getElementById('det-title').textContent=art.t.toUpperCase();
  document.getElementById('det-author').textContent=art.a.toUpperCase();
  document.getElementById('det-style').textContent=art.s.toUpperCase();
  document.getElementById('ov-art').classList.remove('hid');
}
function cerrarDet(){sfxBtn();document.getElementById('ov-art').classList.add('hid');}
function jugarNivelGaleria(){
  if(!G.selectedArt) return;
  const nivel = G.selectedArt.id;
  cerrarDet();
  G.board = mkBoard();
  G.score = 0;
  G.lines = 0;
  G.time = 0;
  G.level = nivel;
  G.levelPts = 0;
  G.cur = null;
  G.nxt = randPiece();
  G.running = true;
  G.paused = false;
  G.saved = false;
  irA('s-game');
  spawn();
  updateHUD();
  clearInterval(G._timer);
  G._timer = setInterval(timerTick,1000);
  cancelAnimationFrame(G._raf);
  G._lastDrop = performance.now();
  G._raf = requestAnimationFrame(loop);
}

/* ─────────────────────────────────────────
   MEJORES PUNTAJES
──────────────────────────────────────── */
function renderHS(){
  const list=document.getElementById('hslist');list.innerHTML='';
  if(G.scores.length===0){
    const el=document.createElement('div');el.className='empty-hs';
    el.textContent='¡SÉ EL PRIMERO EN JUGAR!';list.appendChild(el);return;
  }
  const med=['🥇','🥈','🥉'];
  const rc=['#FFD700','#C0C0C0','#CD7F32'];
  G.scores.forEach((e,i)=>{
    const row=document.createElement('div');
    row.className='hsrow '+(i===0?'r1':i===1?'r2':i===2?'r3':'');
    const rk=i<3
      ?`<span class="medal" style="color:${rc[i]}">${med[i]}</span>`
      :`<span class="rankn" style="color:${rc[2]||'#FFD700'}">${i+1}.</span>`;
    const ts=e.ts||formatTime(e.time||0);
    row.innerHTML=`<span class="hsr-rank">${rk}</span><span>${e.name}</span><span>${String(e.score).padStart(6,'0')}</span><span style="color:var(--cyan);font-size:7px">${ts}</span>`;
    list.appendChild(row);
  });
}
function formatTime(s){
  return`${pad(Math.floor(s/3600))}:${pad(Math.floor((s%3600)/60))}:${pad(s%60)}`;
}
function pad(n){return String(n).padStart(2,'0');}

/* ─────────────────────────────────────────
   TECLADO PC
──────────────────────────────────────── */
document.addEventListener('keydown',e=>{
  if(e.repeat)return;
  if(!document.getElementById('s-game').classList.contains('active'))return;
  if(!G.running||G.paused)return;
  if(e.key==='ArrowLeft'){doLeft();e.preventDefault();}
  else if(e.key==='ArrowRight'){doRight();e.preventDefault();}
  else if(e.key==='ArrowDown'){doDown();e.preventDefault();  }
  else if(e.key==='ArrowUp'||e.key===' '){doRotate();e.preventDefault();}
  else if(e.key==='p'||e.key==='P'){pausar();e.preventDefault();}
});

/* ─────────────────────────────────────────
   INICIALIZACIÓN
──────────────────────────────────────── */
window.addEventListener('load',()=>{
  loadAll();
  buildTitle('title-tetris','TETRIS');
  buildTitle('title-gallery','GALERÍA DE ARTE');
  buildTitle('title-instr','INSTRUCCIONES');
  buildTitle('title-hs','MEJORES PUNTAJES');
  buildTitle('title-go','        FIN  DEL        JUEGO');
  buildKeyboard();
  updateContBtn();
  updateSettingsUI();
  // Inicia música al primer toque (por política de autoplay)
  document.addEventListener('click',()=>{if(G.musicOn&&!G._musicTimer)startMusic();},{once:true});
   if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js')
      .catch(err => console.error('SW Error:', err));
  }
});
