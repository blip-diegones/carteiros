(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e={};(function e(t,n,r,i){var a=!!(t.Worker&&t.Blob&&t.Promise&&t.OffscreenCanvas&&t.OffscreenCanvasRenderingContext2D&&t.HTMLCanvasElement&&t.HTMLCanvasElement.prototype.transferControlToOffscreen&&t.URL&&t.URL.createObjectURL),o=typeof Path2D==`function`&&typeof DOMMatrix==`function`,s=(function(){if(!t.OffscreenCanvas)return!1;try{var e=new OffscreenCanvas(1,1),n=e.getContext(`2d`);n.fillRect(0,0,1,1);var r=e.transferToImageBitmap();n.createPattern(r,`no-repeat`)}catch{return!1}return!0})();function c(){}function l(e){var r=n.exports.Promise,i=r===void 0?t.Promise:r;return typeof i==`function`?new i(e):(e(c,c),null)}var u=(function(e,t){return{transform:function(n){if(e)return n;if(t.has(n))return t.get(n);var r=new OffscreenCanvas(n.width,n.height);return r.getContext(`2d`).drawImage(n,0,0),t.set(n,r),r},clear:function(){t.clear()}}})(s,new Map),d=function(){var e,t,n={},r=0;return typeof requestAnimationFrame==`function`&&typeof cancelAnimationFrame==`function`?(e=function(e){var t=Math.random();return n[t]=requestAnimationFrame(function i(a){r===a||r+16-1<a?(r=a,delete n[t],e()):n[t]=requestAnimationFrame(i)}),t},t=function(e){n[e]&&cancelAnimationFrame(n[e])}):(e=function(e){return setTimeout(e,16)},t=function(e){return clearTimeout(e)}),{frame:e,cancel:t}}(),f=(function(){var t,n,i={};function o(e){function t(t,n){e.postMessage({options:t||{},callback:n})}e.init=function(t){var n=t.transferControlToOffscreen();e.postMessage({canvas:n},[n])},e.fire=function(r,a,o){if(n)return t(r,null),n;var s=Math.random().toString(36).slice(2);return n=l(function(a){function c(t){t.data.callback===s&&(delete i[s],e.removeEventListener(`message`,c),n=null,u.clear(),o(),a())}e.addEventListener(`message`,c),t(r,s),i[s]=c.bind(null,{data:{callback:s}})}),n},e.reset=function(){for(var t in e.postMessage({reset:!0}),i)i[t](),delete i[t]}}return function(){if(t)return t;if(!r&&a){var n=[`var CONFETTI, SIZE = {}, module = {};`,`(`+e.toString()+`)(this, module, true, SIZE);`,`onmessage = function(msg) {`,`  if (msg.data.options) {`,`    CONFETTI(msg.data.options).then(function () {`,`      if (msg.data.callback) {`,`        postMessage({ callback: msg.data.callback });`,`      }`,`    });`,`  } else if (msg.data.reset) {`,`    CONFETTI && CONFETTI.reset();`,`  } else if (msg.data.resize) {`,`    SIZE.width = msg.data.resize.width;`,`    SIZE.height = msg.data.resize.height;`,`  } else if (msg.data.canvas) {`,`    SIZE.width = msg.data.canvas.width;`,`    SIZE.height = msg.data.canvas.height;`,`    CONFETTI = module.exports.create(msg.data.canvas);`,`  }`,`}`].join(`
`);try{t=new Worker(URL.createObjectURL(new Blob([n])))}catch(e){return typeof console<`u`&&typeof console.warn==`function`&&console.warn(`🎊 Could not load worker`,e),null}o(t)}return t}})(),p={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:[`square`,`circle`],zIndex:100,colors:[`#26ccff`,`#a25afd`,`#ff5e7e`,`#88ff5a`,`#fcff42`,`#ffa62d`,`#ff36ff`],disableForReducedMotion:!1,scalar:1};function m(e,t){return t?t(e):e}function h(e){return e!=null}function g(e,t,n){return m(e&&h(e[t])?e[t]:p[t],n)}function _(e){return e<0?0:Math.floor(e)}function v(e,t){return Math.floor(Math.random()*(t-e))+e}function y(e){return parseInt(e,16)}function b(e){return e.map(x)}function x(e){var t=String(e).replace(/[^0-9a-f]/gi,``);return t.length<6&&(t=t[0]+t[0]+t[1]+t[1]+t[2]+t[2]),{r:y(t.substring(0,2)),g:y(t.substring(2,4)),b:y(t.substring(4,6))}}function S(e){var t=g(e,`origin`,Object);return t.x=g(t,`x`,Number),t.y=g(t,`y`,Number),t}function C(e){e.width=document.documentElement.clientWidth,e.height=document.documentElement.clientHeight}function w(e){var t=e.getBoundingClientRect();e.width=t.width,e.height=t.height}function T(e){var t=document.createElement(`canvas`);return t.style.position=`fixed`,t.style.top=`0px`,t.style.left=`0px`,t.style.pointerEvents=`none`,t.style.zIndex=e,t}function E(e,t,n,r,i,a,o,s,c){e.save(),e.translate(t,n),e.rotate(a),e.scale(r,i),e.arc(0,0,1,o,s,c),e.restore()}function D(e){var t=e.angle*(Math.PI/180),n=e.spread*(Math.PI/180);return{x:e.x,y:e.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:e.startVelocity*.5+Math.random()*e.startVelocity,angle2D:-t+(.5*n-Math.random()*n),tiltAngle:(Math.random()*.5+.25)*Math.PI,color:e.color,shape:e.shape,tick:0,totalTicks:e.ticks,decay:e.decay,drift:e.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:e.gravity*3,ovalScalar:.6,scalar:e.scalar,flat:e.flat}}function O(e,t){t.x+=Math.cos(t.angle2D)*t.velocity+t.drift,t.y+=Math.sin(t.angle2D)*t.velocity+t.gravity,t.velocity*=t.decay,t.flat?(t.wobble=0,t.wobbleX=t.x+10*t.scalar,t.wobbleY=t.y+10*t.scalar,t.tiltSin=0,t.tiltCos=0,t.random=1):(t.wobble+=t.wobbleSpeed,t.wobbleX=t.x+10*t.scalar*Math.cos(t.wobble),t.wobbleY=t.y+10*t.scalar*Math.sin(t.wobble),t.tiltAngle+=.1,t.tiltSin=Math.sin(t.tiltAngle),t.tiltCos=Math.cos(t.tiltAngle),t.random=Math.random()+2);var n=t.tick++/t.totalTicks,r=t.x+t.random*t.tiltCos,i=t.y+t.random*t.tiltSin,a=t.wobbleX+t.random*t.tiltCos,s=t.wobbleY+t.random*t.tiltSin;if(e.fillStyle=`rgba(`+t.color.r+`, `+t.color.g+`, `+t.color.b+`, `+(1-n)+`)`,e.beginPath(),o&&t.shape.type===`path`&&typeof t.shape.path==`string`&&Array.isArray(t.shape.matrix))e.fill(N(t.shape.path,t.shape.matrix,t.x,t.y,Math.abs(a-r)*.1,Math.abs(s-i)*.1,Math.PI/10*t.wobble));else if(t.shape.type===`bitmap`){var c=Math.PI/10*t.wobble,l=Math.abs(a-r)*.1,d=Math.abs(s-i)*.1,f=t.shape.bitmap.width*t.scalar,p=t.shape.bitmap.height*t.scalar,m=new DOMMatrix([Math.cos(c)*l,Math.sin(c)*l,-Math.sin(c)*d,Math.cos(c)*d,t.x,t.y]);m.multiplySelf(new DOMMatrix(t.shape.matrix));var h=e.createPattern(u.transform(t.shape.bitmap),`no-repeat`);h.setTransform(m),e.globalAlpha=1-n,e.fillStyle=h,e.fillRect(t.x-f/2,t.y-p/2,f,p),e.globalAlpha=1}else if(t.shape===`circle`)e.ellipse?e.ellipse(t.x,t.y,Math.abs(a-r)*t.ovalScalar,Math.abs(s-i)*t.ovalScalar,Math.PI/10*t.wobble,0,2*Math.PI):E(e,t.x,t.y,Math.abs(a-r)*t.ovalScalar,Math.abs(s-i)*t.ovalScalar,Math.PI/10*t.wobble,0,2*Math.PI);else if(t.shape===`star`)for(var g=Math.PI/2*3,_=4*t.scalar,v=8*t.scalar,y=t.x,b=t.y,x=5,S=Math.PI/x;x--;)y=t.x+Math.cos(g)*v,b=t.y+Math.sin(g)*v,e.lineTo(y,b),g+=S,y=t.x+Math.cos(g)*_,b=t.y+Math.sin(g)*_,e.lineTo(y,b),g+=S;else e.moveTo(Math.floor(t.x),Math.floor(t.y)),e.lineTo(Math.floor(t.wobbleX),Math.floor(i)),e.lineTo(Math.floor(a),Math.floor(s)),e.lineTo(Math.floor(r),Math.floor(t.wobbleY));return e.closePath(),e.fill(),t.tick<t.totalTicks}function k(e,t,n,a,o){var s=t.slice(),c=e.getContext(`2d`),f,p,m=l(function(t){function l(){f=p=null,c.clearRect(0,0,a.width,a.height),u.clear(),o(),t()}function m(){r&&(a.width!==i.width||a.height!==i.height)&&(a.width=e.width=i.width,a.height=e.height=i.height),!a.width&&!a.height&&(n(e),a.width=e.width,a.height=e.height),c.clearRect(0,0,a.width,a.height),s=s.filter(function(e){return O(c,e)}),s.length?f=d.frame(m):l()}f=d.frame(m),p=l});return{addFettis:function(e){return s=s.concat(e),m},canvas:e,promise:m,reset:function(){f&&d.cancel(f),p&&p()}}}function A(e,n){var r=!e,i=!!g(n||{},`resize`),o=!1,s=g(n,`disableForReducedMotion`,Boolean),c=a&&g(n||{},`useWorker`)?f():null,u=r?C:w,d=e&&c?!!e.__confetti_initialized:!1,p=typeof matchMedia==`function`&&matchMedia(`(prefers-reduced-motion)`).matches,m;function h(t,n,r){for(var i=g(t,`particleCount`,_),a=g(t,`angle`,Number),o=g(t,`spread`,Number),s=g(t,`startVelocity`,Number),c=g(t,`decay`,Number),l=g(t,`gravity`,Number),d=g(t,`drift`,Number),f=g(t,`colors`,b),p=g(t,`ticks`,Number),h=g(t,`shapes`),y=g(t,`scalar`),x=!!g(t,`flat`),C=S(t),w=i,T=[],E=e.width*C.x,O=e.height*C.y;w--;)T.push(D({x:E,y:O,angle:a,spread:o,startVelocity:s,color:f[w%f.length],shape:h[v(0,h.length)],ticks:p,decay:c,gravity:l,drift:d,scalar:y,flat:x}));return m?m.addFettis(T):(m=k(e,T,u,n,r),m.promise)}function y(n){var a=s||g(n,`disableForReducedMotion`,Boolean),f=g(n,`zIndex`,Number);if(a&&p)return l(function(e){e()});r&&m?e=m.canvas:r&&!e&&(e=T(f),document.body.appendChild(e)),i&&!d&&u(e);var _={width:e.width,height:e.height};c&&!d&&c.init(e),d=!0,c&&(e.__confetti_initialized=!0);function v(){if(c){var t={getBoundingClientRect:function(){if(!r)return e.getBoundingClientRect()}};u(t),c.postMessage({resize:{width:t.width,height:t.height}})}else _.width=_.height=null}function y(){m=null,i&&(o=!1,t.removeEventListener(`resize`,v)),r&&e&&(document.body.contains(e)&&document.body.removeChild(e),e=null,d=!1)}return i&&!o&&(o=!0,t.addEventListener(`resize`,v,!1)),c?c.fire(n,_,y):h(n,_,y)}return y.reset=function(){c&&c.reset(),m&&m.reset()},y}var j;function M(){return j||=A(null,{useWorker:!0,resize:!0}),j}function N(e,t,n,r,i,a,o){var s=new Path2D(e),c=new Path2D;c.addPath(s,new DOMMatrix(t));var l=new Path2D;return l.addPath(c,new DOMMatrix([Math.cos(o)*i,Math.sin(o)*i,-Math.sin(o)*a,Math.cos(o)*a,n,r])),l}function P(e){if(!o)throw Error(`path confetti are not supported in this browser`);var t,n;typeof e==`string`?t=e:(t=e.path,n=e.matrix);var r=new Path2D(t),i=document.createElement(`canvas`).getContext(`2d`);if(!n){for(var a=1e3,s=a,c=a,l=0,u=0,d,f,p=0;p<a;p+=2)for(var m=0;m<a;m+=2)i.isPointInPath(r,p,m,`nonzero`)&&(s=Math.min(s,p),c=Math.min(c,m),l=Math.max(l,p),u=Math.max(u,m));d=l-s,f=u-c;var h=10,g=Math.min(h/d,h/f);n=[g,0,0,g,-Math.round(d/2+s)*g,-Math.round(f/2+c)*g]}return{type:`path`,path:t,matrix:n}}function F(e){var t,n=1,r=`#000000`,i=`"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif`;typeof e==`string`?t=e:(t=e.text,n=`scalar`in e?e.scalar:n,i=`fontFamily`in e?e.fontFamily:i,r=`color`in e?e.color:r);var a=10*n,o=``+a+`px `+i,s=new OffscreenCanvas(a,a),c=s.getContext(`2d`);c.font=o;var l=c.measureText(t),u=Math.ceil(l.actualBoundingBoxRight+l.actualBoundingBoxLeft),d=Math.ceil(l.actualBoundingBoxAscent+l.actualBoundingBoxDescent),f=2,p=l.actualBoundingBoxLeft+f,m=l.actualBoundingBoxAscent+f;u+=f+f,d+=f+f,s=new OffscreenCanvas(u,d),c=s.getContext(`2d`),c.font=o,c.fillStyle=r,c.fillText(t,p,m);var h=1/n;return{type:`bitmap`,bitmap:s.transferToImageBitmap(),matrix:[h,0,0,h,-u*h/2,-d*h/2]}}n.exports=function(){return M().apply(this,arguments)},n.exports.reset=function(){M().reset()},n.exports.create=A,n.exports.shapeFromPath=P,n.exports.shapeFromText=F})((function(){return typeof window<`u`?window:typeof self<`u`?self:this||{}})(),e,!1);var t=e.exports;e.exports.create;var n={selectedPlan:`magica`,recipientName:`Mariana`,recipientContact:`(11) 98765-4321`,deliveryChannel:`whatsapp`,isAnonymous:!0,senderName:`Um amigo secreto`,messageText:`Feliz aniversário! 🎂 Que o seu novo ano venha repleto de sorrisos, paz e sonhos realizados. Obrigado por iluminar a vida de quem está ao seu redor! ✨❤️`,addons:{schedule:!1,audio:!1},envelopeOpen:!1,mobileActiveTab:`form`},r={direto:{name:`Recado Direto`,price:7.9,maxChars:280},arte:{name:`Recado com Arte`,price:12.9,maxChars:450},magica:{name:`A Carta Mágica (Envelope 3D)`,price:19.9,maxChars:800}},i={schedule:3.9,audio:4.9};function a(){let e=document.getElementById(`app`);e.innerHTML=`
    <!-- HEADER MOBILE-FIRST -->
    <header class="site-header">
      <div class="container header-container">
        <a href="#" class="brand-logo">
          <div class="brand-icon">💌</div>
          <span>O Carteiro Secreto</span>
        </a>
        <nav class="desktop-nav">
          <ul class="nav-links">
            <li><a href="#simulador-envelope">A Carta Mágica</a></li>
            <li><a href="#planos">Planos & Preços</a></li>
            <li><a href="#criar-recado">Montar Recado</a></li>
            <li><a href="#como-funciona">Como Funciona</a></li>
            <li><a href="#depoimentos">Depoimentos</a></li>
            <li><a href="#faq">Dúvidas</a></li>
          </ul>
        </nav>
        <div class="header-actions">
          <a href="#criar-recado" class="btn btn-primary btn-sm header-cta">Enviar Recado</a>
          <button class="mobile-toggle" id="mobile-menu-btn" aria-label="Abrir Menu">
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
          </button>
        </div>
      </div>
    </header>

    <!-- MENU MOBILE GAVETA (DRAWER) -->
    <div class="mobile-drawer-overlay" id="mobile-drawer-overlay"></div>
    <div class="mobile-drawer" id="mobile-drawer">
      <div class="drawer-header">
        <div class="brand-logo">
          <div class="brand-icon">💌</div>
          <span>O Carteiro</span>
        </div>
        <button class="drawer-close-btn" id="drawer-close-btn">✕</button>
      </div>
      <ul class="drawer-links">
        <li><a href="#simulador-envelope" class="drawer-nav-item">🎁 A Carta Mágica 3D</a></li>
        <li><a href="#planos" class="drawer-nav-item">💰 Planos & Preços</a></li>
        <li><a href="#criar-recado" class="drawer-nav-item">✍️ Montar Recado</a></li>
        <li><a href="#como-funciona" class="drawer-nav-item">🚀 Como Funciona</a></li>
        <li><a href="#depoimentos" class="drawer-nav-item">❤️ Depoimentos</a></li>
        <li><a href="#faq" class="drawer-nav-item">❓ Dúvidas Frequentes</a></li>
      </ul>
      <div class="drawer-footer">
        <a href="#criar-recado" class="btn btn-primary btn-lg drawer-cta-btn">Montar meu Recado Agora</a>
      </div>
    </div>

    <!-- HERO SECTION (MOBILE-FIRST) -->
    <section class="hero-section">
      <div class="container hero-grid">
        <div class="hero-content">
          <div class="badge-wrapper">
            <span class="badge-pill">🎂 Presente & Recado Especial</span>
          </div>
          <h1 class="hero-title">
            Envie o que seu coração sente e sua voz <span class="text-gradient">não teve coragem de dizer</span>
          </h1>
          <p class="hero-subtitle">
            Entregamos felicitações de aniversário, declarações e surpresas de forma <strong>100% anônima ou assinada</strong> no WhatsApp ou no <strong>Envelope Virtual Interativo 3D</strong>.
          </p>
          
          <div class="hero-cta-group">
            <a href="#criar-recado" class="btn btn-primary btn-lg btn-full-mobile">
              <span>Montar meu Recado</span>
              <span>→</span>
            </a>
            <a href="#simulador-envelope" class="btn btn-secondary btn-lg btn-full-mobile">
              <span>Ver Envelope 3D</span>
              <span>✨</span>
            </a>
          </div>

          <div class="hero-trust-bar">
            <div class="trust-item">
              <span class="icon">✓</span>
              <span>100% Anônimo garantido</span>
            </div>
            <div class="trust-item">
              <span class="icon">✓</span>
              <span>Entrega no WhatsApp e Insta</span>
            </div>
            <div class="trust-item">
              <span class="icon">✓</span>
              <span>+45.000 recadinhos entregues</span>
            </div>
          </div>
        </div>

        <!-- MOCKUP VISUAL HERO (WhatsApp com Feliz Aniversário) -->
        <div class="hero-visual">
          <div class="hero-mockup-wrapper">
            <div class="hero-floating-bubble top-right">
              <div class="floating-avatar">🎂</div>
              <div class="floating-text">
                <strong>Aniversário Inesquecível</strong>
                <span>Entrega pontual</span>
              </div>
            </div>

            <div class="chat-phone-card">
              <div class="phone-header">
                <div class="phone-avatar">💌</div>
                <div class="phone-user-info">
                  <h4>O Carteiro Secreto</h4>
                  <span>online agora</span>
                </div>
              </div>

              <div class="chat-bubble-received">
                <p>🎉 <strong>Olá, Mariana! Tudo bem?</strong></p>
                <p>Eu sou o Carteiro Secreto. Alguém que admira muito você me pediu para te entregar uma surpresa especial de aniversário:</p>
                <div class="chat-quote">
                  "Feliz aniversário! 🎂 Que o seu novo ano venha repleto de sorrisos, paz e sonhos realizados. Obrigado por iluminar a vida de quem está ao seu redor! ✨❤️"
                </div>
                <p style="font-size: 0.8rem; color: #64748b; margin-top: 6px;">
                  — Enviado por: <strong>Um amigo secreto 🤫</strong>
                </p>
                
                <div class="chat-interactive-attachment" id="hero-attachment-btn">
                  <div class="attachment-icon">🎁</div>
                  <div class="attachment-info">
                    <strong>Carta Especial Interativa</strong>
                    <span>Toque para quebrar o lacre de cera e abrir</span>
                  </div>
                </div>

                <span class="chat-time">00:00 ✓✓</span>
              </div>
            </div>

            <div class="hero-floating-bubble bottom-left">
              <div class="floating-avatar">🤫</div>
              <div class="floating-text">
                <strong>100% Discreto</strong>
                <span>Você escolhe o mistério</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SEÇÃO ENVELOPE INTERATIVO 3D (A CARTA MÁGICA) -->
    <!-- SEÇÃO ENVELOPE INTERATIVO 3D (A CARTA MÁGICA) -->
    <section class="envelope-showcase-section" id="simulador-envelope">
      <div class="container">
        <div class="section-header">
          <span class="badge-pill">🎉 Experiência Real Demonstrável</span>
          <h2>A Carta Mágica Envelopada</h2>
          <p>
            O aniversariante recebe o link exclusivo no WhatsApp e vive uma experiência cinematográfica ao abrir o envelope 3D!
          </p>
        </div>

        <div class="envelope-experience-card">
          <!-- SELETOR DE CENÁRIOS RÁPIDOS PARA TESTAR NA HORA -->
          <div class="scenario-selector-bar">
            <div class="scenario-selector-title">✨ Escolha um modelo para testar a experiência:</div>
            <div class="scenario-pill-group">
              <button type="button" class="scenario-pill active" data-scenario="aniversario">🎂 Aniversário da Mariana</button>
              <button type="button" class="scenario-pill" data-scenario="amor">💖 Declaração Secreta</button>
              <button type="button" class="scenario-pill" data-scenario="desculpa">🥺 Pedido de Desculpas</button>
              <button type="button" class="scenario-pill" data-scenario="gratidao">🌟 Amizade & Gratidão</button>
            </div>
          </div>

          <div class="envelope-instruction-badge">
            👇 Toque no selo de cera dourado para quebrar o lacre e ver a carta abrir!
          </div>

          <div class="envelope-stage">
            <div class="envelope-wrapper" id="envelope-element">
              <div class="envelope-back"></div>
              
              <!-- A Carta de Papel -->
              <div class="envelope-letter">
                <div class="letter-header">
                  <div class="letter-stamp" id="interactive-letter-stamp">🎂</div>
                  <span class="letter-date" id="interactive-letter-date">Hoje</span>
                </div>
                <div class="letter-body">
                  <p class="letter-greeting">Para: <span id="interactive-letter-to">Mariana</span></p>
                  <p class="letter-text" id="interactive-letter-text">
                    "Feliz aniversário! 🎂 Que o seu novo ano venha repleto de sorrisos, paz e sonhos realizados. Obrigado por iluminar a vida de quem está ao seu redor! ✨❤️"
                  </p>
                </div>
                <div class="letter-sign">
                  Com carinho, <span id="interactive-letter-from">Um amigo secreto 💌</span>
                </div>
              </div>

              <!-- Bolso frontal e abas -->
              <div class="envelope-pocket"></div>
              <div class="envelope-flap"></div>

              <!-- Selo de Cera Clicável -->
              <div class="wax-seal" id="wax-seal-btn" title="Toque para abrir!">
                <span>⚜️</span>
              </div>
            </div>
          </div>

          <!-- ÁREA INTERATIVA DO DESTINATÁRIO -->
          <div class="recipient-interactive-box" id="recipient-interactive-box">
            <div class="interactive-box-title">🎁 O que o aniversariante pode fazer ao abrir o link:</div>
            <div class="recipient-btn-group">
              <button type="button" class="recipient-reaction-btn" id="btn-react-love">
                ❤️ Reagir com Amor
              </button>
              <button type="button" class="recipient-reaction-btn" id="btn-react-reply">
                💬 Ver Resposta do Homenageado
              </button>
            </div>
            <div class="reaction-feedback-toast" id="reaction-toast">
              ✨ Reação enviada com sucesso!
            </div>
          </div>

          <div class="envelope-actions-bar">
            <button class="btn btn-secondary btn-sm" id="reset-envelope-btn">
              🔄 Fechar Envelope
            </button>
            <a href="#criar-recado" class="btn btn-primary btn-sm" id="btn-select-magica">
              ✨ Quero Enviar Esta Carta Mágica (R$ 19,90)
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- TABELA DE PREÇOS / PACOTES -->
    <section class="pricing-section" id="planos">
      <div class="container">
        <div class="section-header">
          <span class="badge-pill">💰 Preços Transparentes & Acessíveis</span>
          <h2>Escolha como deseja surpreender</h2>
          <p>
            Do recado direto no WhatsApp ao presente virtual completo com envelope 3D e efeitos mágicos.
          </p>
        </div>

        <div class="pricing-grid">
          <!-- PLANO 1: RECADO DIRETO -->
          <div class="pricing-card" data-plan="direto">
            <div class="plan-header">
              <div class="plan-icon-box">💬</div>
              <h3 class="plan-name">Recado Direto</h3>
              <p class="plan-tagline">O carteiro entrega o recado em texto oficial direto no WhatsApp ou Direct.</p>
            </div>
            <div class="plan-price-box">
              <span class="price-currency">R$</span>
              <span class="price-value">7,90</span>
              <span class="price-period"> / envio único</span>
            </div>
            <ul class="plan-features-list">
              <li><span class="check-icon">✓</span> Entrega no WhatsApp ou Instagram</li>
              <li><span class="check-icon">✓</span> Até 280 caracteres</li>
              <li><span class="check-icon">✓</span> 100% Anônimo ou Assinado com seu nome</li>
              <li><span class="check-icon">✓</span> Moderação humana cuidadosa contra ofensas</li>
              <li><span class="check-icon">✓</span> Confirmação com print da entrega</li>
            </ul>
            <button class="btn btn-secondary plan-choose-btn" data-plan="direto">
              Escolher Recado Direto
            </button>
          </div>

          <!-- PLANO 2: RECADO COM ARTE -->
          <div class="pricing-card" data-plan="arte">
            <div class="plan-header">
              <div class="plan-icon-box">🎨</div>
              <h3 class="plan-name">Recado com Arte</h3>
              <p class="plan-tagline">Mensagem com design ilustrado em alta resolução pronto para salvar ou postar.</p>
            </div>
            <div class="plan-price-box">
              <span class="price-currency">R$</span>
              <span class="price-value">12,90</span>
              <span class="price-period"> / envio único</span>
            </div>
            <ul class="plan-features-list">
              <li><span class="check-icon">✓</span> Tudo do plano anterior</li>
              <li><span class="check-icon">✓</span> Card ilustrado exclusivo em alta qualidade</li>
              <li><span class="check-icon">✓</span> Até 450 caracteres</li>
              <li><span class="check-icon">✓</span> Perfeito para salvar na galeria ou Stories</li>
              <li><span class="check-icon">✓</span> Design elegante com tipografia especial</li>
            </ul>
            <button class="btn btn-secondary plan-choose-btn" data-plan="arte">
              Escolher com Arte
            </button>
          </div>

          <!-- PLANO 3: A CARTA MÁGICA (DESTAQUE) -->
          <div class="pricing-card featured" data-plan="magica">
            <div class="featured-ribbon">⭐ O Mais Escolhido</div>
            <div class="plan-header">
              <div class="plan-icon-box" style="background: #ffe4e6; color: #e11d48;">🎁</div>
              <h3 class="plan-name">A Carta Mágica</h3>
              <p class="plan-tagline">A experiência do Envelope Virtual 3D com selo de cera e chuva de confetes.</p>
            </div>
            <div class="plan-price-box">
              <span class="price-currency">R$</span>
              <span class="price-value">19,90</span>
              <span class="price-period"> / presente completo</span>
            </div>
            <ul class="plan-features-list">
              <li><span class="check-icon">✓</span> <strong>Envelope 3D Interativo</strong> com Lacre de Cera</li>
              <li><span class="check-icon">✓</span> Chuva de confetes e corações na abertura</li>
              <li><span class="check-icon">✓</span> Link exclusivo para o destinatário guardar</li>
              <li><span class="check-icon">✓</span> Até 800 caracteres com caligrafia clássica</li>
              <li><span class="check-icon">✓</span> Mensagem no WhatsApp com o convite da surpresa</li>
              <li><span class="check-icon">✓</span> Canal para o destinatário responder você</li>
            </ul>
            <button class="btn btn-primary plan-choose-btn" data-plan="magica">
              Escolher Carta Mágica
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- SEÇÃO DE CONFIANÇA & GARANTIA ANTES DO PAGAMENTO (PONTO 3) -->
    <section class="trust-guarantee-section">
      <div class="container">
        <div class="trust-guarantee-box">
          <div class="trust-guarantee-header">
            <span class="badge-pill" style="background: #ecfdf5; color: #059669; border-color: #a7f3d0;">🛡️ Compra 100% Protegida</span>
            <h3>O que acontece logo após você pagar o Pix?</h3>
            <p>Sua homenagem é tratada com total sigilo, pontualidade e respeito.</p>
          </div>

          <div class="guarantee-grid">
            <div class="guarantee-item">
              <div class="guarantee-icon">⚡</div>
              <div class="guarantee-text">
                <h4>Entrega Expressa em até 15 minutos</h4>
                <p>Assim que o Pix compensa, seu recado entra em fila prioritária e é enviado no mesmo instante ou no minuto exato que você agendar (ex: 00:00).</p>
              </div>
            </div>

            <div class="guarantee-item">
              <div class="guarantee-icon">📸</div>
              <div class="guarantee-text">
                <h4>Comprovante com Print Oficial</h4>
                <p>Nossa equipe envia para você o print da tela do WhatsApp comprovando que a mensagem foi entregue e lida com sucesso.</p>
              </div>
            </div>

            <div class="guarantee-item">
              <div class="guarantee-icon">🔒</div>
              <div class="guarantee-text">
                <h4>Blindagem Total & Anonimato LGPD</h4>
                <p>Caso escolha anônimo, em hipótese alguma seu nome, número ou chave Pix serão revelados ao destinatário. Sigilo garantido por contrato.</p>
              </div>
            </div>

            <div class="guarantee-item">
              <div class="guarantee-icon">🤝</div>
              <div class="guarantee-text">
                <h4>Garantia de Reenvio ou Estorno Pix</h4>
                <p>Se o destinatário tiver trocado de número ou houver qualquer instabilidade, corrigimos na hora via suporte humano ou devolvemos seu dinheiro.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- WIZARD / SIMULADOR DE ENVIO (MOBILE TABS INCLUSAS) -->
    <section class="creator-section" id="criar-recado">
      <div class="container">
        <div class="section-header">
          <span class="badge-pill">✍️ Personalize Agora</span>
          <h2>Monte seu recado em segundos</h2>
          <p>
            Edite os detalhes e veja em tempo real como o destinatário vai receber.
          </p>
        </div>

        <!-- ABAS MOBILE-FIRST PARA ALTERNAR FORM E PRÉVIA NO CELULAR -->
        <div class="mobile-wizard-tabs" id="mobile-wizard-tabs">
          <button class="wizard-tab-btn active" id="tab-btn-form" data-tab="form">
            <span>✏️ 1. Escrever Recado</span>
          </button>
          <button class="wizard-tab-btn" id="tab-btn-preview" data-tab="preview">
            <span>👁️ 2. Ver Prévia no Chat</span>
          </button>
        </div>

        <div class="creator-grid">
          <!-- FORMULÁRIO -->
          <div class="creator-card" id="wizard-form-container">
            <form id="message-wizard-form">
              <!-- PASSO 1: ESCOLHA DO PLANO -->
              <div class="form-group">
                <label class="form-label">1. Escolha o Formato da Mensagem:</label>
                <div class="plan-selector-cards">
                  <label class="plan-option-card ${n.selectedPlan===`direto`?`selected`:``}" data-val="direto">
                    <input type="radio" name="plan" value="direto" ${n.selectedPlan===`direto`?`checked`:``}>
                    <span class="opt-title">Recado Direto</span>
                    <span class="opt-price">R$ 7,90</span>
                  </label>

                  <label class="plan-option-card ${n.selectedPlan===`arte`?`selected`:``}" data-val="arte">
                    <input type="radio" name="plan" value="arte" ${n.selectedPlan===`arte`?`checked`:``}>
                    <span class="opt-title">Com Arte</span>
                    <span class="opt-price">R$ 12,90</span>
                  </label>

                  <label class="plan-option-card ${n.selectedPlan===`magica`?`selected`:``}" data-val="magica">
                    <input type="radio" name="plan" value="magica" ${n.selectedPlan===`magica`?`checked`:``}>
                    <span class="opt-title">Carta Mágica 3D</span>
                    <span class="opt-price">R$ 19,90</span>
                  </label>
                </div>
              </div>

              <!-- PASSO 2: DESTINATÁRIO & CANAL -->
              <div class="form-group">
                <label class="form-label">2. Para quem é o recado?</label>
                <div class="recipient-inputs-grid">
                  <div>
                    <input type="text" id="input-recipient-name" class="input-text" placeholder="Nome ou Apelido (ex: Mariana)" value="${n.recipientName}">
                  </div>
                  <div>
                    <input type="text" id="input-recipient-contact" class="input-text" placeholder="DDD + WhatsApp ou @ do Insta" value="${n.recipientContact}">
                  </div>
                </div>

                <div class="delivery-channel-tabs">
                  <div class="channel-tab ${n.deliveryChannel===`whatsapp`?`active`:``}" data-channel="whatsapp">
                    <span>📱 WhatsApp</span>
                  </div>
                  <div class="channel-tab ${n.deliveryChannel===`instagram`?`active`:``}" data-channel="instagram">
                    <span>📸 Instagram</span>
                  </div>
                  <div class="channel-tab ${n.deliveryChannel===`email`?`active`:``}" data-channel="email">
                    <span>✉️ E-mail</span>
                  </div>
                </div>
              </div>

              <!-- PASSO 3: TEXTO DO RECADO -->
              <div class="form-group">
                <label class="form-label">3. Escreva sua mensagem:</label>
                <textarea id="input-message-text" class="textarea-custom" placeholder="Escreva aqui tudo o que você quer dizer...">${n.messageText}</textarea>
                <div class="char-counter">
                  <span id="char-count-current">${n.messageText.length} caracteres</span>
                  <span id="char-count-max">Máx: ${r[n.selectedPlan].maxChars} caracteres</span>
                </div>
              </div>

              <!-- PASSO 4: IDENTIDADE (ANÔNIMO OU ASSINADO) -->
              <div class="form-group">
                <div class="toggle-anon-group">
                  <div>
                    <strong style="display: block; font-size: 0.95rem; color: #0f172a;">Manter 100% Anônimo?</strong>
                    <span style="font-size: 0.8rem; color: #64748b;">Sua identidade jamais será revelada.</span>
                  </div>
                  <label class="toggle-switch">
                    <input type="checkbox" id="toggle-anon" ${n.isAnonymous?`checked`:``}>
                    <span class="slider"></span>
                  </label>
                </div>

                <div id="sender-name-box" style="margin-top: 12px; display: ${n.isAnonymous?`none`:`block`};">
                  <label class="form-label" style="font-size: 0.85rem;">Como deseja assinar?</label>
                  <input type="text" id="input-sender-name" class="input-text" placeholder="Seu nome ou apelido (ex: Um amigo secreto)" value="${n.senderName}">
                </div>
              </div>

              <!-- UPSELLS OPCIONAIS -->
              <div class="addons-box">
                <strong style="display: block; font-size: 0.9rem; color: #78350f; margin-bottom: 8px;">✨ Adicionais Especiais:</strong>
                
                <div class="addon-row">
                  <label class="addon-info" style="cursor: pointer;">
                    <input type="checkbox" id="addon-schedule" ${n.addons.schedule?`checked`:``}>
                    <span>⏰ Agendar no minuto exato (Ex: 00:00 do aniversário)</span>
                  </label>
                  <span class="addon-price-tag">+R$ 3,90</span>
                </div>

                <div class="addon-row">
                  <label class="addon-info" style="cursor: pointer;">
                    <input type="checkbox" id="addon-audio" ${n.addons.audio?`checked`:``}>
                    <span>🎙️ Gravar ou anexar áudio de voz com sua própria voz</span>
                  </label>
                  <span class="addon-price-tag">+R$ 4,90</span>
                </div>
              </div>

              <!-- BOTÃO DE SUBMIT -->
              <button type="button" class="btn btn-primary btn-lg" id="btn-proceed-checkout" style="width: 100%;">
                <span>Prosseguir para Pagamento Pix</span>
                <span id="btn-price-display">R$ 19,90</span>
              </button>
            </form>
          </div>

          <!-- LIVE PREVIEW AO VIVO -->
          <div class="live-preview-panel" id="wizard-preview-container">
            <div class="preview-container">
              <div class="preview-badge-header">
                <span>📱 Como chega no destino</span>
                <span id="preview-channel-badge" style="background: #e2e8f0; color: #334155; padding: 3px 10px; border-radius: 6px; font-size: 0.75rem; font-weight: 700;">WhatsApp</span>
              </div>

              <div class="chat-phone-card" style="border-width: 4px; box-shadow: none; border-radius: 24px; padding: 18px;">
                <div class="phone-header" style="margin-bottom: 12px; padding-bottom: 10px;">
                  <div class="phone-avatar" style="width: 36px; height: 36px; font-size: 1.1rem;">💌</div>
                  <div class="phone-user-info">
                    <h4 style="font-size: 0.85rem;">O Carteiro Secreto</h4>
                    <span style="font-size: 0.7rem;">notificação oficial</span>
                  </div>
                </div>

                <div class="chat-bubble-received" style="padding: 12px; font-size: 0.85rem;">
                  <p>Olá, <strong id="preview-recipient-name">${n.recipientName}</strong>! 🎉</p>
                  <p>Você acabou de receber um recado especial:</p>
                  
                  <div class="chat-quote" id="preview-quote-text" style="font-size: 0.85rem; padding: 8px 12px;">
                    "${n.messageText}"
                  </div>

                  <p style="font-size: 0.75rem; color: #64748b;">
                    De: <strong id="preview-sender-name">${n.isAnonymous?`Um amigo secreto 🤫`:n.senderName}</strong>
                  </p>

                  <div id="preview-interactive-box" style="display: ${n.selectedPlan===`magica`?`flex`:`none`};" class="chat-interactive-attachment">
                    <div class="attachment-icon" style="font-size: 1.3rem;">🎁</div>
                    <div class="attachment-info">
                      <strong style="font-size: 0.8rem;">Sua Carta Mágica 3D</strong>
                      <span style="font-size: 0.7rem;">Toque para quebrar o lacre com confetes</span>
                    </div>
                  </div>

                  <span class="chat-time" style="font-size: 0.65rem;">00:00 ✓✓</span>
                </div>
              </div>

              <!-- RESUMO DO VALOR -->
              <div class="summary-order-box">
                <div class="summary-row">
                  <span id="summary-plan-name">${r[n.selectedPlan].name}</span>
                  <span id="summary-plan-price">R$ ${r[n.selectedPlan].price.toFixed(2).replace(`.`,`,`)}</span>
                </div>
                <div class="summary-row" id="summary-schedule-row" style="display: none;">
                  <span>Agendamento no minuto exato</span>
                  <span>+R$ 3,90</span>
                </div>
                <div class="summary-row" id="summary-audio-row" style="display: none;">
                  <span>Áudio de voz anexado</span>
                  <span>+R$ 4,90</span>
                </div>
                <div class="summary-row total">
                  <span>Total</span>
                  <span class="total-price" id="summary-total-price">R$ 19,90</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- COMO FUNCIONA (ETAPAS) -->
    <section class="steps-section" id="como-funciona">
      <div class="container">
        <div class="section-header">
          <span class="badge-pill">🚀 Simples & Rápido</span>
          <h2>Como seu recado é entregue</h2>
          <p>Cuidamos de tudo para garantir que sua homenagem chegue perfeita.</p>
        </div>

        <div class="steps-grid">
          <div class="step-card">
            <div class="step-num-badge">1</div>
            <h3>Você escreve</h3>
            <p>Escolha o formato (recado direto, arte ou carta envelopada) e digite o que está no seu coração.</p>
          </div>

          <div class="step-card">
            <div class="step-num-badge">2</div>
            <h3>Escolha a discrição</h3>
            <p>Decida se quer assinar com seu nome, apelido ou manter segredo absoluto como anônimo.</p>
          </div>

          <div class="step-card">
            <div class="step-num-badge">3</div>
            <h3>Pagamento Pix</h3>
            <p>Liberação imediata por Pix sem burocracia ou cadastros demorados.</p>
          </div>

          <div class="step-card">
            <div class="step-num-badge">4</div>
            <h3>Entrega & Print</h3>
            <p>O carteiro digital bate no WhatsApp da pessoa com a surpresa e você recebe a confirmação.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CASOS REAIS & DEMONSTRAÇÕES DE ENTREGA (CREDIBILIDADE TOTAL) -->
    <section class="testimonials-section" id="depoimentos">
      <div class="container">
        <div class="section-header">
          <span class="badge-pill">❤️ Experiências Reais</span>
          <h2>Veja como a homenagem chega no WhatsApp</h2>
          <p>Exemplos reais e autênticos de como o Carteiro Secreto surpreende e emociona quem recebe.</p>
        </div>

        <div class="testimonials-grid">
          <!-- CASO 1: ANIVERSÁRIO -->
          <div class="testimonial-card">
            <div class="testimonial-header-info">
              <span class="testimonial-tag tag-aniversario">🎂 Aniversário à Meia-Noite</span>
              <span class="delivery-timestamp">Entregue às 00:01 ✓✓</span>
            </div>
            
            <div class="case-chat-bubble">
              <p>💌 <strong>O Carteiro Secreto:</strong> "Olá, Mariana! Alguém muito especial pediu para te entregar uma surpresa emocionante de aniversário..."</p>
              <div style="background: #fff1f2; border: 1px dashed #e11d48; border-radius: 8px; padding: 8px 12px; margin: 8px 0; font-size: 0.85rem; color: #be123c;">
                🎁 <strong>Envelope Interativo 3D Aberto</strong> com confetes
              </div>
            </div>

            <div class="case-reaction-bubble">
              <span class="label">Reação da Mariana (Destinatária):</span>
              <p>"Gente do céu, quem mandou isso?! Abri o envelope e começou a chover confetes, chorei horrores de emoção aqui ❤️🥺"</p>
            </div>

            <div class="testimonial-footer">
              <span>Destino: <strong>Mariana S. (SP)</strong></span>
              <span>Envio: <strong>100% Anônimo</strong></span>
            </div>
          </div>

          <!-- CASO 2: DECLARAÇÃO TÍMIDA -->
          <div class="testimonial-card">
            <div class="testimonial-header-info">
              <span class="testimonial-tag tag-amor">💌 Declaração Tímida</span>
              <span class="delivery-timestamp">Entregue no WhatsApp ✓✓</span>
            </div>
            
            <div class="case-chat-bubble">
              <p>💌 <strong>O Carteiro Secreto:</strong> "Olá, Camila! Há sentimentos que precisam ser ditos. Recebemos um recado especial para você com Card Ilustrado..."</p>
              <div style="background: #fdf2f8; border: 1px dashed #ec4899; border-radius: 8px; padding: 8px 12px; margin: 8px 0; font-size: 0.85rem; color: #9d174d;">
                🎨 <strong>Card de Arte Exclusivo</strong> em alta definição
              </div>
            </div>

            <div class="case-reaction-bubble">
              <span class="label">Reação da Camila (Destinatária):</span>
              <p>"Não acredito... nunca imaginei que alguém reparasse tanto em mim. Fez o meu mês todinho, já salvei na galeria!"</p>
            </div>

            <div class="testimonial-footer">
              <span>Destino: <strong>Camila M. (MG)</strong></span>
              <span>Envio: <strong>Assinado com segredo</strong></span>
            </div>
          </div>

          <!-- CASO 3: RECONEXÃO / DESCULPAS -->
          <div class="testimonial-card">
            <div class="testimonial-header-info">
              <span class="testimonial-tag tag-desculpa">✨ Agradecimento & Perdão</span>
              <span class="delivery-timestamp">Entregue e Respondido ✓✓</span>
            </div>
            
            <div class="case-chat-bubble">
              <p>💌 <strong>O Carteiro Secreto:</strong> "Olá, Felipe! Alguém que valoriza muito sua trajetória enviou uma mensagem sincera do coração..."</p>
              <div style="background: #f5f3ff; border: 1px dashed #8b5cf6; border-radius: 8px; padding: 8px 12px; margin: 8px 0; font-size: 0.85rem; color: #6d28d9;">
                💬 <strong>Recado Direto</strong> com moderação cuidadosa
              </div>
            </div>

            <div class="case-reaction-bubble">
              <span class="label">Reação do Felipe (Destinatário):</span>
              <p>"Muito obrigado Carteiro por intermediar isso. Eu precisava ouvir essas palavras, já respondi e estamos em paz!"</p>
            </div>

            <div class="testimonial-footer">
              <span>Destino: <strong>Felipe R. (RS)</strong></span>
              <span>Envio: <strong>Comprovante Enviado ✓</strong></span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- DÚVIDAS FREQUENTES (FAQ) -->
    <section class="faq-section" id="faq">
      <div class="container">
        <div class="section-header">
          <span class="badge-pill">❓ Perguntas Frequentes</span>
          <h2>Tire suas dúvidas antes de enviar</h2>
        </div>

        <div class="faq-container">
          <div class="faq-item active">
            <button class="faq-question">
              <span>A mensagem é 100% anônima mesmo?</span>
              <span class="faq-icon">+</span>
            </button>
            <div class="faq-answer">
              Sim! Caso você marque a opção anônima, em hipótese alguma o aniversariante ou destinatário saberá seu número, nome ou rede social. Seus dados cadastrais e o comprovante Pix ficam totalmente blindados em conformidade com a LGPD.
            </div>
          </div>

          <div class="faq-item">
            <button class="faq-question">
              <span>Em quanto tempo a mensagem é entregue após o Pix?</span>
              <span class="faq-icon">+</span>
            </button>
            <div class="faq-answer">
              Para entregas imediatas, nosso sistema despacha em até 15 minutos após a confirmação do Pix. Caso selecione a opção de agendamento, entregamos pontualmente no dia e minuto programados (por exemplo, exatamente às 00:00 do aniversário).
            </div>
          </div>

          <div class="faq-item">
            <button class="faq-question">
              <span>Como recebo a confirmação de que foi entregue?</span>
              <span class="faq-icon">+</span>
            </button>
            <div class="faq-answer">
              Assim que o destinatário recebe e lê a mensagem, enviamos para você uma notificação com o print da tela do WhatsApp comprovando a entrega realizada com sucesso.
            </div>
          </div>

          <div class="faq-item">
            <button class="faq-question">
              <span>E se o número estiver incorreto ou não receber?</span>
              <span class="faq-icon">+</span>
            </button>
            <div class="faq-answer">
              Nossa equipe de suporte humano entra em contato imediatamente para você fornecer o número correto ou, se preferir, realizamos o estorno integral do seu Pix no mesmo dia sem burocracia.
            </div>
          </div>

          <div class="faq-item">
            <button class="faq-question">
              <span>Posso mandar mensagens com ofensas ou ameaças?</span>
              <span class="faq-icon">+</span>
            </button>
            <div class="faq-answer">
              Não. Temos uma política rigorosa de moderação humana e algorítmica. Mensagens contendo assédio, ofensas, ódio ou ameaças são imediatamente bloqueadas e o valor não é reembolsado.
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FOOTER -->
    <footer class="site-footer">
      <div class="container">
        <div class="footer-grid">
          <div class="footer-brand">
            <div class="brand-logo">
              <div class="brand-icon">💌</div>
              <span>O Carteiro Secreto</span>
            </div>
            <p style="margin-top: 14px; font-size: 0.95rem;">
              Transformando sentimentos e palavras sinceras em momentos inesquecíveis. Entregamos carinho, aniversários e surpresas especiais com segurança absoluta.
            </p>
          </div>

          <div class="footer-col">
            <h4>Produtos</h4>
            <ul class="footer-links">
              <li><a href="#planos">Recado Direto</a></li>
              <li><a href="#planos">Recado com Arte</a></li>
              <li><a href="#simulador-envelope">A Carta Mágica 3D</a></li>
            </ul>
          </div>

          <div class="footer-col">
            <h4>Navegação</h4>
            <ul class="footer-links">
              <li><a href="#como-funciona">Como Funciona</a></li>
              <li><a href="#depoimentos">Demonstrações Reais</a></li>
              <li><a href="#faq">Dúvidas Frequentes</a></li>
            </ul>
          </div>

          <div class="footer-col">
            <h4>Segurança</h4>
            <ul class="footer-links">
              <li><a href="#">Privacidade Total (LGPD)</a></li>
              <li><a href="#">Termos de Uso</a></li>
              <li><a href="#">Canal de Suporte WhatsApp</a></li>
            </ul>
          </div>
        </div>

        <div class="footer-bottom">
          <p>© 2026 O Carteiro Secreto. Todos os direitos reservados.</p>
          <p>Feito com amor ❤️ no Brasil • Suporte oficial via WhatsApp</p>
        </div>
      </div>
    </footer>

    <!-- BARRA FIXA MOBILE BOTTOM CTA (CONVERSÃO NO CELULAR) -->
    <div class="mobile-sticky-bottom-bar" id="mobile-sticky-bar">
      <div class="sticky-info">
        <span class="sticky-badge">A partir de R$ 7,90</span>
        <strong class="sticky-title">Surpreenda quem você ama</strong>
      </div>
      <a href="#criar-recado" class="btn btn-primary btn-sm sticky-btn">Enviar Recado 💌</a>
    </div>

    <!-- MODAL DE CHECKOUT PIX COM GARANTIAS & CONFIANÇA -->
    <div class="modal-overlay" id="checkout-modal">
      <div class="modal-box">
        <button class="modal-close-btn" id="modal-close-btn">✕</button>
        <span class="badge-pill" style="margin-bottom: 12px; background: #ecfdf5; color: #059669; border-color: #a7f3d0;">🔒 Pagamento Seguro Pix</span>
        <h3 style="font-size: 1.45rem; margin-bottom: 8px;">Quase lá! Pague via Pix</h3>
        <p style="font-size: 0.95rem; color: #475569;">
          Seu recado para <strong id="modal-recipient-name">Mariana</strong> está pronto para ser enviado.
        </p>

        <!-- Passos Claros de Entrega (Ponto 3) -->
        <div class="modal-delivery-steps">
          <h4>🚀 O que acontece após seu pagamento:</h4>
          <ul>
            <li><span>✓</span> <strong>Em até 15 minutos:</strong> Recado despachado no WhatsApp do destinatário.</li>
            <li><span>✓</span> <strong>Print de confirmação:</strong> Enviamos a comprovação para o seu contato.</li>
            <li><span>✓</span> <strong>Blindagem garantida:</strong> Nenhuma informação sua é revelada se anônimo.</li>
          </ul>
        </div>

        <div class="pix-qr-container">
          <div class="pix-qr-code">
            <!-- QR Code SVG ilustrativo e fiel -->
            <svg viewBox="0 0 100 100" width="150" height="150">
              <rect width="100" height="100" fill="#ffffff" />
              <!-- Cantos Posicionadores -->
              <rect x="10" y="10" width="24" height="24" fill="#0f172a" rx="4"/>
              <rect x="14" y="14" width="16" height="16" fill="#ffffff" rx="2"/>
              <rect x="18" y="18" width="8" height="8" fill="#e11d48" rx="1"/>

              <rect x="66" y="10" width="24" height="24" fill="#0f172a" rx="4"/>
              <rect x="70" y="14" width="16" height="16" fill="#ffffff" rx="2"/>
              <rect x="74" y="18" width="8" height="8" fill="#e11d48" rx="1"/>

              <rect x="10" y="66" width="24" height="24" fill="#0f172a" rx="4"/>
              <rect x="14" y="70" width="16" height="16" fill="#ffffff" rx="2"/>
              <rect x="18" y="74" width="8" height="8" fill="#e11d48" rx="1"/>

              <!-- Padrão Pix Central -->
              <circle cx="50" cy="50" r="8" fill="#e11d48" />
              <rect x="42" y="20" width="16" height="6" fill="#0f172a" />
              <rect x="42" y="74" width="16" height="6" fill="#0f172a" />
              <rect x="20" y="42" width="6" height="16" fill="#0f172a" />
              <rect x="74" y="42" width="6" height="16" fill="#0f172a" />
            </svg>
          </div>
          <div style="margin-top: 10px; font-weight: 800; font-size: 1.35rem; color: #0f172a;" id="modal-pix-val">
            R$ 19,90
          </div>
        </div>

        <div class="pix-copy-box">
          <input type="text" class="pix-code-input" id="pix-copy-input" readonly value="00020126580014br.gov.bcb.pix0136carteiro-secreto-recado-pagamento5204000053039865802BR5920CARTEIRO SECRETO6009SAO PAULO62070503***6304E8A9">
          <button class="btn btn-secondary btn-sm" id="btn-copy-pix">Copiar</button>
        </div>

        <div style="font-size: 0.85rem; color: #64748b; margin-bottom: 16px;">
          ⏱️ Este código Pix expira em: <strong>09:59</strong> • Liberação automática
        </div>

        <button class="btn btn-primary" id="btn-confirm-pix-simulated" style="width: 100%; margin-bottom: 10px;">
          ✓ Já realizei o pagamento Pix
        </button>

        <a href="https://wa.me/?text=Ol%C3%A1%2C%20tenho%20uma%20d%C3%BAvida%20sobre%20o%20recado%20no%20Carteiro%20Secreto" target="_blank" rel="noopener" style="font-size: 0.85rem; color: #059669; font-weight: 700; display: inline-flex; align-items: center; gap: 4px;">
          💬 Dúvidas antes de pagar? Fale no WhatsApp de Suporte
        </a>
      </div>
    </div>
  `,s(),d()}var o={aniversario:{recipientName:`Mariana`,senderName:`Um amigo secreto`,isAnonymous:!0,message:`Feliz aniversário! 🎂 Que o seu novo ano venha repleto de sorrisos, paz e sonhos realizados. Obrigado por iluminar a vida de quem está ao seu redor! ✨❤️`,stamp:`🎂`,date:`Hoje`},amor:{recipientName:`Lucas`,senderName:`Alguém que te admira em segredo`,isAnonymous:!0,message:`Seu sorriso muda o meu dia sempre que você passa. Não sei se um dia terei coragem de te dizer isso olhando nos olhos, mas saiba que você é incrivelmente especial pra mim! ✨🥰`,stamp:`💖`,date:`Momento Especial`},desculpa:{recipientName:`Bia`,senderName:`Com carinho e respeito`,isAnonymous:!1,message:`Eu errei com você e meu coração não descansa sem pedir perdão. Nossa amizade vale infinitamente mais que qualquer orgulho. Se você aceitar, quero recomeçar com você. 🥺🤍`,stamp:`🕊️`,date:`Do Coração`},gratidao:{recipientName:`Carlos`,senderName:`Um eterno admirador do seu trabalho`,isAnonymous:!0,message:`Só queria te agradecer por tudo o que você fez por mim recentemente. Você faz a diferença na vida das pessoas sem nem perceber. Muito sucesso sempre! 🌟🙌`,stamp:`🌟`,date:`Gratidão Sincera`}};function s(){let e=document.getElementById(`mobile-menu-btn`),r=document.getElementById(`drawer-close-btn`),i=document.getElementById(`mobile-drawer`),a=document.getElementById(`mobile-drawer-overlay`);function s(){i&&a&&(i.classList.add(`open`),a.classList.add(`open`),document.body.style.overflow=`hidden`)}function f(){i&&a&&(i.classList.remove(`open`),a.classList.remove(`open`),document.body.style.overflow=``)}e&&e.addEventListener(`click`,s),r&&r.addEventListener(`click`,f),a&&a.addEventListener(`click`,f),document.querySelectorAll(`.drawer-nav-item, .drawer-cta-btn`).forEach(e=>{e.addEventListener(`click`,f)});let p=document.getElementById(`tab-btn-form`),m=document.getElementById(`tab-btn-preview`),h=document.getElementById(`wizard-form-container`),g=document.getElementById(`wizard-preview-container`);function _(e){n.mobileActiveTab=e,e===`form`?(p?.classList.add(`active`),m?.classList.remove(`active`),h?.classList.remove(`mobile-hidden`),g?.classList.add(`mobile-hidden`)):(m?.classList.add(`active`),p?.classList.remove(`active`),h?.classList.add(`mobile-hidden`),g?.classList.remove(`mobile-hidden`))}p&&p.addEventListener(`click`,()=>_(`form`)),m&&m.addEventListener(`click`,()=>_(`preview`)),document.querySelectorAll(`.scenario-pill`).forEach(e=>{e.addEventListener(`click`,e=>{document.querySelectorAll(`.scenario-pill`).forEach(e=>e.classList.remove(`active`)),e.currentTarget.classList.add(`active`);let t=o[e.currentTarget.getAttribute(`data-scenario`)];if(t){n.recipientName=t.recipientName,n.senderName=t.senderName,n.isAnonymous=t.isAnonymous,n.messageText=t.message;let e=document.getElementById(`input-recipient-name`);e&&(e.value=n.recipientName);let r=document.getElementById(`input-message-text`);r&&(r.value=n.messageText);let i=document.getElementById(`toggle-anon`);i&&(i.checked=n.isAnonymous);let a=document.getElementById(`sender-name-box`);a&&(a.style.display=n.isAnonymous?`none`:`block`);let o=document.getElementById(`interactive-letter-stamp`);o&&(o.innerText=t.stamp);let s=document.getElementById(`interactive-letter-date`);s&&(s.innerText=t.date),d(),c()}})});let v=document.getElementById(`wax-seal-btn`),y=document.getElementById(`envelope-element`),b=document.getElementById(`reset-envelope-btn`),x=document.getElementById(`recipient-interactive-box`);v&&y&&v.addEventListener(`click`,()=>{c()}),b&&y&&b.addEventListener(`click`,()=>{y.classList.remove(`is-open`),n.envelopeOpen=!1,x&&x.classList.remove(`show`)});let S=document.getElementById(`btn-react-love`),C=document.getElementById(`btn-react-reply`),w=document.getElementById(`reaction-toast`);S&&w&&S.addEventListener(`click`,()=>{t({particleCount:50,spread:60,origin:{y:.65},colors:[`#e11d48`,`#ff4d6d`,`#fda4af`]}),w.style.display=`block`,w.innerHTML=`❤️ <strong>${n.recipientName} reagiu:</strong> "Amei demais essa surpresa! Muito obrigado(a)!"`,setTimeout(()=>{w.style.display=`none`},5e3)}),C&&w&&C.addEventListener(`click`,()=>{w.style.display=`block`,w.innerHTML=`💬 <strong>Resposta de ${n.recipientName}:</strong> "Gente, quem me enviou isso?! Não tô acreditando de tão lindo! Me chama no WhatsApp!"`,setTimeout(()=>{w.style.display=`none`},6e3)});let T=document.getElementById(`hero-attachment-btn`);T&&T.addEventListener(`click`,()=>{let e=document.getElementById(`simulador-envelope`);e&&(e.scrollIntoView({behavior:`smooth`}),setTimeout(()=>{c()},500))}),document.querySelectorAll(`.plan-choose-btn`).forEach(e=>{e.addEventListener(`click`,e=>{l(e.currentTarget.getAttribute(`data-plan`));let t=document.getElementById(`criar-recado`);t&&t.scrollIntoView({behavior:`smooth`}),_(`form`)})});let E=document.getElementById(`btn-select-magica`);E&&E.addEventListener(`click`,()=>{l(`magica`),_(`form`)}),document.querySelectorAll(`.plan-option-card`).forEach(e=>{e.addEventListener(`click`,e=>{l(e.currentTarget.getAttribute(`data-val`))})});let D=document.getElementById(`input-recipient-name`);D&&D.addEventListener(`input`,e=>{n.recipientName=e.target.value||`Mariana`,d()});let O=document.getElementById(`input-recipient-contact`);O&&O.addEventListener(`input`,e=>{n.recipientContact=e.target.value});let k=document.getElementById(`input-message-text`);k&&k.addEventListener(`input`,e=>{n.messageText=e.target.value,d()}),document.querySelectorAll(`.channel-tab`).forEach(e=>{e.addEventListener(`click`,e=>{document.querySelectorAll(`.channel-tab`).forEach(e=>e.classList.remove(`active`)),e.currentTarget.classList.add(`active`),n.deliveryChannel=e.currentTarget.getAttribute(`data-channel`),d()})});let A=document.getElementById(`toggle-anon`),j=document.getElementById(`sender-name-box`);A&&j&&A.addEventListener(`change`,e=>{n.isAnonymous=e.target.checked,j.style.display=n.isAnonymous?`none`:`block`,d()});let M=document.getElementById(`input-sender-name`);M&&M.addEventListener(`input`,e=>{n.senderName=e.target.value||`Um amigo secreto`,d()});let N=document.getElementById(`addon-schedule`);N&&N.addEventListener(`change`,e=>{n.addons.schedule=e.target.checked,d()});let P=document.getElementById(`addon-audio`);P&&P.addEventListener(`change`,e=>{n.addons.audio=e.target.checked,d()}),document.querySelectorAll(`.faq-question`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.closest(`.faq-item`),n=t.classList.contains(`active`);document.querySelectorAll(`.faq-item`).forEach(e=>e.classList.remove(`active`)),n||t.classList.add(`active`)})});let F=document.getElementById(`btn-proceed-checkout`),I=document.getElementById(`checkout-modal`),L=document.getElementById(`modal-close-btn`),R=document.getElementById(`btn-copy-pix`),z=document.getElementById(`btn-confirm-pix-simulated`);F&&I&&F.addEventListener(`click`,()=>{let e=u();document.getElementById(`modal-recipient-name`).innerText=n.recipientName,document.getElementById(`modal-pix-val`).innerText=`R$ ${e.toFixed(2).replace(`.`,`,`)}`,I.classList.add(`open`)}),L&&I&&L.addEventListener(`click`,()=>{I.classList.remove(`open`)}),R&&R.addEventListener(`click`,()=>{let e=document.getElementById(`pix-copy-input`);e.select(),navigator.clipboard.writeText(e.value),R.innerText=`Copiado! ✓`,R.style.background=`#dcfce7`,R.style.color=`#15803d`,setTimeout(()=>{R.innerText=`Copiar`,R.style.background=``,R.style.color=``},2e3)}),z&&z.addEventListener(`click`,()=>{z.innerHTML=`⏳ Confirmando recebimento...`,z.disabled=!0,setTimeout(()=>{t({particleCount:120,spread:80,origin:{y:.6}}),alert(`🎉 Parabéns! Pedido Pix confirmado com sucesso!\n\nSeu recado de aniversário para "${n.recipientName}" está na fila do Carteiro e será entregue com muito carinho.`),I.classList.remove(`open`),z.innerHTML=`✓ Já realizei o pagamento Pix`,z.disabled=!1},1200)})}function c(){let e=document.getElementById(`envelope-element`);if(!e)return;e.classList.add(`is-open`),n.envelopeOpen=!0;let r=document.getElementById(`recipient-interactive-box`);r&&r.classList.add(`show`),t({particleCount:90,spread:75,origin:{y:.6},colors:[`#e11d48`,`#ff4d6d`,`#fbbf24`,`#8b5cf6`,`#ffffff`]}),setTimeout(()=>{t({particleCount:50,angle:60,spread:60,origin:{x:.15,y:.65},colors:[`#ff4d6d`,`#fda4af`,`#f59e0b`]}),t({particleCount:50,angle:120,spread:60,origin:{x:.85,y:.65},colors:[`#e11d48`,`#8b5cf6`,`#ffffff`]})},250)}function l(e){n.selectedPlan=e,document.querySelectorAll(`.plan-option-card`).forEach(t=>{if(t.getAttribute(`data-val`)===e){t.classList.add(`selected`);let e=t.querySelector(`input`);e&&(e.checked=!0)}else t.classList.remove(`selected`)}),d()}function u(){let e=r[n.selectedPlan].price;return n.addons.schedule&&(e+=i.schedule),n.addons.audio&&(e+=i.audio),e}function d(){let e=u(),t=r[n.selectedPlan],i=document.getElementById(`preview-recipient-name`);i&&(i.innerText=n.recipientName);let a=document.getElementById(`preview-quote-text`);a&&(a.innerText=`"${n.messageText}"`);let o=document.getElementById(`preview-sender-name`);o&&(o.innerText=n.isAnonymous?`Um amigo secreto 🤫`:n.senderName);let s=document.getElementById(`preview-interactive-box`);s&&(s.style.display=n.selectedPlan===`magica`?`flex`:`none`);let c=document.getElementById(`preview-channel-badge`);c&&(c.innerText={whatsapp:`WhatsApp`,instagram:`Instagram Direct`,email:`E-mail`}[n.deliveryChannel]||`WhatsApp`);let l=document.getElementById(`interactive-letter-to`);l&&(l.innerText=n.recipientName);let d=document.getElementById(`interactive-letter-text`);d&&(d.innerText=`"${n.messageText}"`);let f=document.getElementById(`interactive-letter-from`);f&&(f.innerText=n.isAnonymous?`Um amigo secreto 💌`:`${n.senderName} 💌`);let p=document.getElementById(`char-count-current`),m=document.getElementById(`char-count-max`);p&&m&&(p.innerText=`${n.messageText.length} caracteres`,m.innerText=`Máx: ${t.maxChars} caracteres`,n.messageText.length>t.maxChars?(p.style.color=`#ef4444`,p.style.fontWeight=`bold`):(p.style.color=`#64748b`,p.style.fontWeight=`normal`));let h=document.getElementById(`summary-plan-name`),g=document.getElementById(`summary-plan-price`);h&&g&&(h.innerText=t.name,g.innerText=`R$ ${t.price.toFixed(2).replace(`.`,`,`)}`);let _=document.getElementById(`summary-schedule-row`);_&&(_.style.display=n.addons.schedule?`flex`:`none`);let v=document.getElementById(`summary-audio-row`);v&&(v.style.display=n.addons.audio?`flex`:`none`);let y=document.getElementById(`summary-total-price`);y&&(y.innerText=`R$ ${e.toFixed(2).replace(`.`,`,`)}`);let b=document.getElementById(`btn-price-display`);b&&(b.innerText=`R$ ${e.toFixed(2).replace(`.`,`,`)}`)}window.addEventListener(`DOMContentLoaded`,a);