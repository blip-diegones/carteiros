import './style.css';
import confetti from 'canvas-confetti';

// Estado global da aplicação e do formulário (Mobile-First)
const state = {
  selectedPlan: 'magica', // 'direto' | 'arte' | 'magica'
  recipientName: 'Mariana',
  recipientContact: '(11) 98765-4321',
  deliveryChannel: 'whatsapp', // 'whatsapp' | 'instagram' | 'email'
  isAnonymous: true,
  senderName: 'Um amigo secreto',
  messageText: 'Feliz aniversário! 🎂 Que o seu novo ano venha repleto de sorrisos, paz e sonhos realizados. Obrigado por iluminar a vida de quem está ao seu redor! ✨❤️',
  addons: {
    schedule: false,
    audio: false
  },
  envelopeOpen: false,
  mobileActiveTab: 'form' // 'form' | 'preview' para o wizard mobile
};

// Tabela de Preços
const PLAN_PRICES = {
  direto: { name: 'Recado Direto', price: 7.90, maxChars: 280 },
  arte: { name: 'Recado com Arte', price: 12.90, maxChars: 450 },
  magica: { name: 'A Carta Mágica (Envelope 3D)', price: 19.90, maxChars: 800 }
};

const ADDON_PRICES = {
  schedule: 3.90,
  audio: 4.90
};

// Renderização Principal do App
function initApp() {
  const app = document.getElementById('app');
  app.innerHTML = `
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
    <section class="envelope-showcase-section" id="simulador-envelope">
      <div class="container">
        <div class="section-header">
          <span class="badge-pill">🎉 Experiência Real Demonstrável</span>
          <h2>A Carta Mágica Envelopada</h2>
          <p>
            O destinatário recebe o link exclusivo no WhatsApp e vive uma experiência cinematográfica ao abrir o envelope 3D!
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
              <button type="button" class="scenario-pill scenario-pill-custom" id="btn-custom-scenario" title="Testar com seu próprio texto">✍️ Meu Próprio Texto</button>
            </div>
          </div>

          <!-- CAMPO RÁPIDO PARA O PRÓPRIO TEXTO NA DEMO -->
          <div class="custom-demo-text-box" id="custom-demo-text-box" style="display: none;">
            <label for="demo-custom-textarea" class="custom-demo-label">Escreva sua mensagem personalizada para ver na Carta Mágica (até 800 caracteres):</label>
            <textarea id="demo-custom-textarea" class="textarea-custom textarea-demo" maxlength="800" placeholder="Escreva aqui sua declaração, felicitação ou desculpas para testar o envelope ao vivo..."></textarea>
            <div class="custom-demo-footer">
              <span id="demo-char-counter">0 / 800 caracteres</span>
              <button type="button" class="btn btn-secondary btn-sm" id="btn-apply-demo-text">Aplicar na Carta ✨</button>
            </div>
          </div>

          <div class="envelope-instruction-badge" id="envelope-instruction-badge">
            <span class="badge-icon">👇</span>
            <span class="badge-text" id="envelope-instruction-text">Toque no selo de cera dourado para quebrar o lacre e ver a carta abrir!</span>
          </div>

          <div class="envelope-stage" id="envelope-stage">
            <div class="envelope-wrapper theme-aniversario" id="envelope-element">
              <div class="envelope-back"></div>
              
              <!-- A Carta de Papel (Expansível, sem corte e com scroll interno suave) -->
              <article class="envelope-letter" id="envelope-letter" aria-label="Carta do Carteiro Secreto">
                <header class="letter-header">
                  <div class="letter-stamp" id="interactive-letter-stamp">🎂</div>
                  <div class="letter-stamp-postmark">CORREIO SECRETO • ENTREGA COM AMOR</div>
                  <span class="letter-date" id="interactive-letter-date">Hoje</span>
                </header>
                <div class="letter-body">
                  <p class="letter-greeting">Para: <span id="interactive-letter-to">Mariana</span></p>
                  <div class="letter-text-container">
                    <p class="letter-text" id="interactive-letter-text">
                      "Feliz aniversário! 🎂 Que o seu novo ano venha repleto de sorrisos, paz e sonhos realizados. Obrigado por iluminar a vida de quem está ao seu redor! ✨❤️"
                    </p>
                  </div>
                </div>
                <footer class="letter-sign">
                  <span class="letter-sign-prefix">Com carinho,</span>
                  <span class="letter-sign-name" id="interactive-letter-from">Um amigo secreto 💌</span>
                </footer>
              </article>

              <!-- Bolso frontal -->
              <div class="envelope-pocket"></div>
              
              <!-- Aba superior dobrável 3D -->
              <div class="envelope-flap" id="envelope-flap"></div>

              <!-- Selo de Cera Clicável e Acessível (<button>) -->
              <button type="button" class="wax-seal" id="wax-seal-btn" title="Toque para abrir a Carta Mágica!" aria-label="Toque para quebrar o selo de cera e abrir a carta mágica">
                <span class="seal-icon" id="seal-icon-display">🎂</span>
                <span class="seal-label">TOQUE</span>
              </button>
            </div>
          </div>

          <!-- ÁREA INTERATIVA DO DESTINATÁRIO -->
          <div class="recipient-interactive-box" id="recipient-interactive-box">
            <div class="interactive-box-title">🎁 O que o destinatário pode fazer ao abrir o link:</div>
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
            <button type="button" class="btn btn-secondary btn-sm" id="reset-envelope-btn">
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
                  <label class="plan-option-card ${state.selectedPlan === 'direto' ? 'selected' : ''}" data-val="direto">
                    <input type="radio" name="plan" value="direto" ${state.selectedPlan === 'direto' ? 'checked' : ''}>
                    <span class="opt-title">Recado Direto</span>
                    <span class="opt-price">R$ 7,90</span>
                  </label>

                  <label class="plan-option-card ${state.selectedPlan === 'arte' ? 'selected' : ''}" data-val="arte">
                    <input type="radio" name="plan" value="arte" ${state.selectedPlan === 'arte' ? 'checked' : ''}>
                    <span class="opt-title">Com Arte</span>
                    <span class="opt-price">R$ 12,90</span>
                  </label>

                  <label class="plan-option-card ${state.selectedPlan === 'magica' ? 'selected' : ''}" data-val="magica">
                    <input type="radio" name="plan" value="magica" ${state.selectedPlan === 'magica' ? 'checked' : ''}>
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
                    <input type="text" id="input-recipient-name" class="input-text" placeholder="Nome ou Apelido (ex: Mariana)" value="${state.recipientName}">
                  </div>
                  <div>
                    <input type="text" id="input-recipient-contact" class="input-text" placeholder="DDD + WhatsApp ou @ do Insta" value="${state.recipientContact}">
                  </div>
                </div>

                <div class="delivery-channel-tabs">
                  <div class="channel-tab ${state.deliveryChannel === 'whatsapp' ? 'active' : ''}" data-channel="whatsapp">
                    <span>📱 WhatsApp</span>
                  </div>
                  <div class="channel-tab ${state.deliveryChannel === 'instagram' ? 'active' : ''}" data-channel="instagram">
                    <span>📸 Instagram</span>
                  </div>
                  <div class="channel-tab ${state.deliveryChannel === 'email' ? 'active' : ''}" data-channel="email">
                    <span>✉️ E-mail</span>
                  </div>
                </div>
              </div>

              <!-- PASSO 3: TEXTO DO RECADO -->
              <div class="form-group">
                <label class="form-label">3. Escreva sua mensagem:</label>
                <textarea id="input-message-text" class="textarea-custom" placeholder="Escreva aqui tudo o que você quer dizer...">${state.messageText}</textarea>
                <div class="char-counter">
                  <span id="char-count-current">${state.messageText.length} caracteres</span>
                  <span id="char-count-max">Máx: ${PLAN_PRICES[state.selectedPlan].maxChars} caracteres</span>
                </div>
                <!-- AVISO DE MODERAÇÃO AMIGÁVEL -->
                <div id="message-moderation-warning" class="message-moderation-alert"></div>
              </div>

              <!-- PASSO 4: IDENTIDADE (ANÔNIMO OU ASSINADO) -->
              <div class="form-group">
                <div class="toggle-anon-group">
                  <div>
                    <strong style="display: block; font-size: 0.95rem; color: #0f172a;">Manter 100% Anônimo?</strong>
                    <span style="font-size: 0.8rem; color: #64748b;">Sua identidade jamais será revelada.</span>
                  </div>
                  <label class="toggle-switch">
                    <input type="checkbox" id="toggle-anon" ${state.isAnonymous ? 'checked' : ''}>
                    <span class="slider"></span>
                  </label>
                </div>

                <div id="sender-name-box" style="margin-top: 12px; display: ${state.isAnonymous ? 'none' : 'block'};">
                  <label class="form-label" style="font-size: 0.85rem;">Como deseja assinar?</label>
                  <input type="text" id="input-sender-name" class="input-text" placeholder="Seu nome ou apelido (ex: Um amigo secreto)" value="${state.senderName}">
                </div>
              </div>

              <!-- UPSELLS OPCIONAIS -->
              <div class="addons-box">
                <strong style="display: block; font-size: 0.9rem; color: #78350f; margin-bottom: 8px;">✨ Adicionais Especiais:</strong>
                
                <div class="addon-row">
                  <label class="addon-info" style="cursor: pointer;">
                    <input type="checkbox" id="addon-schedule" ${state.addons.schedule ? 'checked' : ''}>
                    <span>⏰ Agendar no minuto exato (Ex: 00:00 do aniversário)</span>
                  </label>
                  <span class="addon-price-tag">+R$ 3,90</span>
                </div>

                <div class="addon-row">
                  <label class="addon-info" style="cursor: pointer;">
                    <input type="checkbox" id="addon-audio" ${state.addons.audio ? 'checked' : ''}>
                    <span>🎙️ Gravar ou anexar áudio de voz com sua própria voz</span>
                  </label>
                  <span class="addon-price-tag">+R$ 4,90</span>
                </div>
              </div>

              <!-- ACEITE DOS TERMOS DE USO OBRIGATÓRIO (REQUISITO DA PLATAFORMA) -->
              <div class="terms-acceptance-group">
                <label class="terms-acceptance-label" for="check-accept-terms">
                  <input type="checkbox" id="check-accept-terms" required>
                  <span>Li e aceito os <a href="#termos" id="link-open-terms">Termos de Uso</a>. Declaro que o recado não contém ofensas, ódio, assédio, conteúdo sexual, bullying ou exposição de dados pessoais.</span>
                </label>
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
                  <p>Olá, <strong id="preview-recipient-name">${state.recipientName}</strong>! 🎉</p>
                  <p>Você acabou de receber um recado especial:</p>
                  
                  <div class="chat-quote" id="preview-quote-text" style="font-size: 0.85rem; padding: 8px 12px;">
                    "${state.messageText}"
                  </div>

                  <p style="font-size: 0.75rem; color: #64748b;">
                    De: <strong id="preview-sender-name">${state.isAnonymous ? 'Um amigo secreto 🤫' : state.senderName}</strong>
                  </p>

                  <div id="preview-interactive-box" style="display: ${state.selectedPlan === 'magica' ? 'flex' : 'none'};" class="chat-interactive-attachment">
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
                  <span id="summary-plan-name">${PLAN_PRICES[state.selectedPlan].name}</span>
                  <span id="summary-plan-price">R$ ${PLAN_PRICES[state.selectedPlan].price.toFixed(2).replace('.', ',')}</span>
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
  `;

  setupEventListeners();
  updateLivePreview();
}

// Modelos de Cenários para demonstração imediata
const SCENARIOS = {
  aniversario: {
    recipientName: 'Mariana',
    senderName: 'Um amigo secreto',
    isAnonymous: true,
    message: 'Feliz aniversário! 🎂 Que o seu novo ano venha repleto de sorrisos, paz e sonhos realizados. Obrigado por iluminar a vida de quem está ao seu redor! ✨❤️',
    stamp: '🎂',
    date: 'Hoje'
  },
  amor: {
    recipientName: 'Lucas',
    senderName: 'Alguém que te admira em segredo',
    isAnonymous: true,
    message: 'Seu sorriso muda o meu dia sempre que você passa. Não sei se um dia terei coragem de te dizer isso olhando nos olhos, mas saiba que você é incrivelmente especial pra mim! ✨🥰',
    stamp: '💖',
    date: 'Momento Especial'
  },
  desculpa: {
    recipientName: 'Bia',
    senderName: 'Com carinho e respeito',
    isAnonymous: false,
    message: 'Eu errei com você e meu coração não descansa sem pedir perdão. Nossa amizade vale infinitamente mais que qualquer orgulho. Se você aceitar, quero recomeçar com você. 🥺🤍',
    stamp: '🕊️',
    date: 'Do Coração'
  },
  gratidao: {
    recipientName: 'Carlos',
    senderName: 'Um eterno admirador do seu trabalho',
    isAnonymous: true,
    message: 'Só queria te agradecer por tudo o que você fez por mim recentemente. Você faz a diferença na vida das pessoas sem nem perceber. Muito sucesso sempre! 🌟🙌',
    stamp: '🌟',
    date: 'Gratidão Sincera'
  }
};

// Configuração de Eventos
function setupEventListeners() {
  // Menu Mobile Drawer
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const drawerCloseBtn = document.getElementById('drawer-close-btn');
  const mobileDrawer = document.getElementById('mobile-drawer');
  const drawerOverlay = document.getElementById('mobile-drawer-overlay');

  function openDrawer() {
    if (mobileDrawer && drawerOverlay) {
      mobileDrawer.classList.add('open');
      drawerOverlay.classList.add('open');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeDrawer() {
    if (mobileDrawer && drawerOverlay) {
      mobileDrawer.classList.remove('open');
      drawerOverlay.classList.remove('open');
      document.body.style.overflow = '';
    }
  }

  if (mobileMenuBtn) mobileMenuBtn.addEventListener('click', openDrawer);
  if (drawerCloseBtn) drawerCloseBtn.addEventListener('click', closeDrawer);
  if (drawerOverlay) drawerOverlay.addEventListener('click', closeDrawer);

  document.querySelectorAll('.drawer-nav-item, .drawer-cta-btn').forEach(link => {
    link.addEventListener('click', closeDrawer);
  });

  // Mobile Tabs do Wizard (Form vs Preview)
  const tabBtnForm = document.getElementById('tab-btn-form');
  const tabBtnPreview = document.getElementById('tab-btn-preview');
  const formContainer = document.getElementById('wizard-form-container');
  const previewContainer = document.getElementById('wizard-preview-container');

  function switchMobileTab(tab) {
    state.mobileActiveTab = tab;
    if (tab === 'form') {
      tabBtnForm?.classList.add('active');
      tabBtnPreview?.classList.remove('active');
      formContainer?.classList.remove('mobile-hidden');
      previewContainer?.classList.add('mobile-hidden');
    } else {
      tabBtnPreview?.classList.add('active');
      tabBtnForm?.classList.remove('active');
      formContainer?.classList.add('mobile-hidden');
      previewContainer?.classList.remove('mobile-hidden');
    }
  }

  if (tabBtnForm) tabBtnForm.addEventListener('click', () => switchMobileTab('form'));
  if (tabBtnPreview) tabBtnPreview.addEventListener('click', () => switchMobileTab('preview'));

  // Seletor de Cenários de Demonstração
  document.querySelectorAll('.scenario-pill').forEach(btn => {
    btn.addEventListener('click', (e) => {
      document.querySelectorAll('.scenario-pill').forEach(p => p.classList.remove('active'));
      e.currentTarget.classList.add('active');
      const scenarioKey = e.currentTarget.getAttribute('data-scenario');
      const scenario = SCENARIOS[scenarioKey];
      if (scenario) {
        state.recipientName = scenario.recipientName;
        state.senderName = scenario.senderName;
        state.isAnonymous = scenario.isAnonymous;
        state.messageText = scenario.message;

        const inputRecipient = document.getElementById('input-recipient-name');
        if (inputRecipient) inputRecipient.value = state.recipientName;

        const inputMsg = document.getElementById('input-message-text');
        if (inputMsg) inputMsg.value = state.messageText;

        const toggleAnon = document.getElementById('toggle-anon');
        if (toggleAnon) toggleAnon.checked = state.isAnonymous;

        const senderBox = document.getElementById('sender-name-box');
        if (senderBox) senderBox.style.display = state.isAnonymous ? 'none' : 'block';

        const stampEl = document.getElementById('interactive-letter-stamp');
        if (stampEl) stampEl.innerText = scenario.stamp;

        const dateEl = document.getElementById('interactive-letter-date');
        if (dateEl) dateEl.innerText = scenario.date;

        updateLivePreview();
        openInteractiveEnvelope();
      }
    });
  });

  // Envelope Showcase Lacre de Cera
  const waxSealBtn = document.getElementById('wax-seal-btn');
  const envelopeEl = document.getElementById('envelope-element');
  const resetEnvelopeBtn = document.getElementById('reset-envelope-btn');
  const recipientInteractiveBox = document.getElementById('recipient-interactive-box');

  if (waxSealBtn && envelopeEl) {
    waxSealBtn.addEventListener('click', () => {
      openInteractiveEnvelope();
    });
  }

  if (resetEnvelopeBtn && envelopeEl) {
    resetEnvelopeBtn.addEventListener('click', () => {
      envelopeEl.classList.remove('is-open');
      state.envelopeOpen = false;
      if (recipientInteractiveBox) recipientInteractiveBox.classList.remove('show');
    });
  }

  // Reações do Destinatário no Envelope 3D
  const btnReactLove = document.getElementById('btn-react-love');
  const btnReactReply = document.getElementById('btn-react-reply');
  const reactionToast = document.getElementById('reaction-toast');

  if (btnReactLove && reactionToast) {
    btnReactLove.addEventListener('click', () => {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.65 },
        colors: ['#e11d48', '#ff4d6d', '#fda4af']
      });
      reactionToast.style.display = 'block';
      reactionToast.innerHTML = `❤️ <strong>${state.recipientName} reagiu:</strong> "Amei demais essa surpresa! Muito obrigado(a)!"`;
      setTimeout(() => {
        reactionToast.style.display = 'none';
      }, 5000);
    });
  }

  if (btnReactReply && reactionToast) {
    btnReactReply.addEventListener('click', () => {
      reactionToast.style.display = 'block';
      reactionToast.innerHTML = `💬 <strong>Resposta de ${state.recipientName}:</strong> "Gente, quem me enviou isso?! Não tô acreditando de tão lindo! Me chama no WhatsApp!"`;
      setTimeout(() => {
        reactionToast.style.display = 'none';
      }, 6000);
    });
  }

  // Atalho do Hero para abrir o envelope
  const heroAttachmentBtn = document.getElementById('hero-attachment-btn');
  if (heroAttachmentBtn) {
    heroAttachmentBtn.addEventListener('click', () => {
      const showcaseSection = document.getElementById('simulador-envelope');
      if (showcaseSection) {
        showcaseSection.scrollIntoView({ behavior: 'smooth' });
        setTimeout(() => {
          openInteractiveEnvelope();
        }, 500);
      }
    });
  }

  // Botões de escolha na Tabela de Preços
  document.querySelectorAll('.plan-choose-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const plan = e.currentTarget.getAttribute('data-plan');
      selectPlan(plan);
      const wizardSection = document.getElementById('criar-recado');
      if (wizardSection) wizardSection.scrollIntoView({ behavior: 'smooth' });
      switchMobileTab('form');
    });
  });

  // Botão "Quero Enviar Esta Carta Mágica" no showcase
  const btnSelectMagica = document.getElementById('btn-select-magica');
  if (btnSelectMagica) {
    btnSelectMagica.addEventListener('click', () => {
      selectPlan('magica');
      switchMobileTab('form');
    });
  }

  // Radio cards de plano no Wizard
  document.querySelectorAll('.plan-option-card').forEach(card => {
    card.addEventListener('click', (e) => {
      const plan = e.currentTarget.getAttribute('data-val');
      selectPlan(plan);
    });
  });

  // Inputs de Destinatário e Mensagem
  const inputRecipientName = document.getElementById('input-recipient-name');
  if (inputRecipientName) {
    inputRecipientName.addEventListener('input', (e) => {
      state.recipientName = e.target.value || 'Mariana';
      updateLivePreview();
    });
  }

  const inputRecipientContact = document.getElementById('input-recipient-contact');
  if (inputRecipientContact) {
    inputRecipientContact.addEventListener('input', (e) => {
      state.recipientContact = e.target.value;
    });
  }

  const inputMessageText = document.getElementById('input-message-text');
  if (inputMessageText) {
    inputMessageText.addEventListener('input', (e) => {
      state.messageText = e.target.value;
      updateLivePreview();
    });
  }

  // Canais de entrega (WhatsApp, Insta, Email)
  document.querySelectorAll('.channel-tab').forEach(tab => {
    tab.addEventListener('click', (e) => {
      document.querySelectorAll('.channel-tab').forEach(t => t.classList.remove('active'));
      e.currentTarget.classList.add('active');
      state.deliveryChannel = e.currentTarget.getAttribute('data-channel');
      updateLivePreview();
    });
  });

  // Toggle Anônimo
  const toggleAnon = document.getElementById('toggle-anon');
  const senderNameBox = document.getElementById('sender-name-box');
  if (toggleAnon && senderNameBox) {
    toggleAnon.addEventListener('change', (e) => {
      state.isAnonymous = e.target.checked;
      senderNameBox.style.display = state.isAnonymous ? 'none' : 'block';
      updateLivePreview();
    });
  }

  const inputSenderName = document.getElementById('input-sender-name');
  if (inputSenderName) {
    inputSenderName.addEventListener('input', (e) => {
      state.senderName = e.target.value || 'Um amigo secreto';
      updateLivePreview();
    });
  }

  // Checkboxes de Addons (Upsells)
  const addonSchedule = document.getElementById('addon-schedule');
  if (addonSchedule) {
    addonSchedule.addEventListener('change', (e) => {
      state.addons.schedule = e.target.checked;
      updateLivePreview();
    });
  }

  const addonAudio = document.getElementById('addon-audio');
  if (addonAudio) {
    addonAudio.addEventListener('change', (e) => {
      state.addons.audio = e.target.checked;
      updateLivePreview();
    });
  }

  // FAQ Accordion
  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const parent = btn.closest('.faq-item');
      const isActive = parent.classList.contains('active');
      document.querySelectorAll('.faq-item').forEach(item => item.classList.remove('active'));
      if (!isActive) {
        parent.classList.add('active');
      }
    });
  });

  // Modal Checkout
  const btnProceed = document.getElementById('btn-proceed-checkout');
  const checkoutModal = document.getElementById('checkout-modal');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const btnCopyPix = document.getElementById('btn-copy-pix');
  const btnConfirmPix = document.getElementById('btn-confirm-pix-simulated');

  if (btnProceed && checkoutModal) {
    btnProceed.addEventListener('click', () => {
      const total = calculateTotal();
      document.getElementById('modal-recipient-name').innerText = state.recipientName;
      document.getElementById('modal-pix-val').innerText = `R$ ${total.toFixed(2).replace('.', ',')}`;
      checkoutModal.classList.add('open');
    });
  }

  if (modalCloseBtn && checkoutModal) {
    modalCloseBtn.addEventListener('click', () => {
      checkoutModal.classList.remove('open');
    });
  }

  if (btnCopyPix) {
    btnCopyPix.addEventListener('click', () => {
      const input = document.getElementById('pix-copy-input');
      input.select();
      navigator.clipboard.writeText(input.value);
      btnCopyPix.innerText = 'Copiado! ✓';
      btnCopyPix.style.background = '#dcfce7';
      btnCopyPix.style.color = '#15803d';
      setTimeout(() => {
        btnCopyPix.innerText = 'Copiar';
        btnCopyPix.style.background = '';
        btnCopyPix.style.color = '';
      }, 2000);
    });
  }

  if (btnConfirmPix) {
    btnConfirmPix.addEventListener('click', () => {
      btnConfirmPix.innerHTML = '⏳ Confirmando recebimento...';
      btnConfirmPix.disabled = true;
      setTimeout(() => {
        confetti({
          particleCount: 120,
          spread: 80,
          origin: { y: 0.6 }
        });

        alert(`🎉 Parabéns! Pedido Pix confirmado com sucesso!\n\nSeu recado de aniversário para "${state.recipientName}" está na fila do Carteiro e será entregue com muito carinho.`);
        checkoutModal.classList.remove('open');
        btnConfirmPix.innerHTML = '✓ Já realizei o pagamento Pix';
        btnConfirmPix.disabled = false;
      }, 1200);
    });
  }
}

// Abrir o Envelope com Confetes
function openInteractiveEnvelope() {
  const envelopeEl = document.getElementById('envelope-element');
  if (!envelopeEl) return;
  
  envelopeEl.classList.add('is-open');
  state.envelopeOpen = true;

  const recipientInteractiveBox = document.getElementById('recipient-interactive-box');
  if (recipientInteractiveBox) {
    recipientInteractiveBox.classList.add('show');
  }

  // Disparo comemorativo de Confetes e Corações
  confetti({
    particleCount: 90,
    spread: 75,
    origin: { y: 0.6 },
    colors: ['#e11d48', '#ff4d6d', '#fbbf24', '#8b5cf6', '#ffffff']
  });

  setTimeout(() => {
    confetti({
      particleCount: 50,
      angle: 60,
      spread: 60,
      origin: { x: 0.15, y: 0.65 },
      colors: ['#ff4d6d', '#fda4af', '#f59e0b']
    });
    confetti({
      particleCount: 50,
      angle: 120,
      spread: 60,
      origin: { x: 0.85, y: 0.65 },
      colors: ['#e11d48', '#8b5cf6', '#ffffff']
    });
  }, 250);
}

// Selecionar Plano
function selectPlan(planKey) {
  state.selectedPlan = planKey;
  
  document.querySelectorAll('.plan-option-card').forEach(card => {
    if (card.getAttribute('data-val') === planKey) {
      card.classList.add('selected');
      const radio = card.querySelector('input');
      if (radio) radio.checked = true;
    } else {
      card.classList.remove('selected');
    }
  });

  updateLivePreview();
}

// Calcular Total
function calculateTotal() {
  let base = PLAN_PRICES[state.selectedPlan].price;
  if (state.addons.schedule) base += ADDON_PRICES.schedule;
  if (state.addons.audio) base += ADDON_PRICES.audio;
  return base;
}

// Atualizar Live Preview
function updateLivePreview() {
  const total = calculateTotal();
  const planInfo = PLAN_PRICES[state.selectedPlan];

  // Atualizar textos da prévia
  const previewRecipientName = document.getElementById('preview-recipient-name');
  if (previewRecipientName) previewRecipientName.innerText = state.recipientName;

  const previewQuoteText = document.getElementById('preview-quote-text');
  if (previewQuoteText) previewQuoteText.innerText = `"${state.messageText}"`;

  const previewSenderName = document.getElementById('preview-sender-name');
  if (previewSenderName) {
    previewSenderName.innerText = state.isAnonymous ? 'Um amigo secreto 🤫' : state.senderName;
  }

  const previewInteractiveBox = document.getElementById('preview-interactive-box');
  if (previewInteractiveBox) {
    previewInteractiveBox.style.display = state.selectedPlan === 'magica' ? 'flex' : 'none';
  }

  const previewChannelBadge = document.getElementById('preview-channel-badge');
  if (previewChannelBadge) {
    const channelNames = {
      whatsapp: 'WhatsApp',
      instagram: 'Instagram Direct',
      email: 'E-mail'
    };
    previewChannelBadge.innerText = channelNames[state.deliveryChannel] || 'WhatsApp';
  }

  // Atualizar textos da carta do envelope showcase
  const letterTo = document.getElementById('interactive-letter-to');
  if (letterTo) letterTo.innerText = state.recipientName;

  const letterText = document.getElementById('interactive-letter-text');
  if (letterText) letterText.innerText = `"${state.messageText}"`;

  const letterFrom = document.getElementById('interactive-letter-from');
  if (letterFrom) {
    letterFrom.innerText = state.isAnonymous ? 'Um amigo secreto 💌' : `${state.senderName} 💌`;
  }

  // Contadores de Caracteres
  const charCurrent = document.getElementById('char-count-current');
  const charMax = document.getElementById('char-count-max');
  if (charCurrent && charMax) {
    charCurrent.innerText = `${state.messageText.length} caracteres`;
    charMax.innerText = `Máx: ${planInfo.maxChars} caracteres`;
    if (state.messageText.length > planInfo.maxChars) {
      charCurrent.style.color = '#ef4444';
      charCurrent.style.fontWeight = 'bold';
    } else {
      charCurrent.style.color = '#64748b';
      charCurrent.style.fontWeight = 'normal';
    }
  }

  // Resumo de Pedido e Botão
  const summaryPlanName = document.getElementById('summary-plan-name');
  const summaryPlanPrice = document.getElementById('summary-plan-price');
  if (summaryPlanName && summaryPlanPrice) {
    summaryPlanName.innerText = planInfo.name;
    summaryPlanPrice.innerText = `R$ ${planInfo.price.toFixed(2).replace('.', ',')}`;
  }

  const scheduleRow = document.getElementById('summary-schedule-row');
  if (scheduleRow) scheduleRow.style.display = state.addons.schedule ? 'flex' : 'none';

  const audioRow = document.getElementById('summary-audio-row');
  if (audioRow) audioRow.style.display = state.addons.audio ? 'flex' : 'none';

  const summaryTotalPrice = document.getElementById('summary-total-price');
  if (summaryTotalPrice) {
    summaryTotalPrice.innerText = `R$ ${total.toFixed(2).replace('.', ',')}`;
  }

  const btnPriceDisplay = document.getElementById('btn-price-display');
  if (btnPriceDisplay) {
    btnPriceDisplay.innerText = `R$ ${total.toFixed(2).replace('.', ',')}`;
  }
}

// Iniciar quando o DOM carregar
window.addEventListener('DOMContentLoaded', initApp);
