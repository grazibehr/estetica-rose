# Rose Estética - Landing Page

Landing page profissional para clínica de estética, desenvolvida com Vue.js 3 e Vite.

## Tecnologias

- **Vue.js 3.4** - Framework JavaScript progressivo
- **Vite 5.0** - Build tool moderna e rápida
- **CSS3** - Estilização com variáveis CSS e design responsivo

## Pré-requisitos

- [Node.js](https://nodejs.org/) (versão 18 ou superior)
- npm ou yarn

## Instalação

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/landing-estetica.git
cd estetica-rose
```

2. Instale as dependências:
```bash
npm install
```

3. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

O projeto estará disponível em `http://localhost:3000`.

## Scripts Disponíveis

| Comando | Descrição |
|---------|-----------|
| `npm run dev` | Inicia o servidor de desenvolvimento |
| `npm run build` | Gera a build de produção |
| `npm run preview` | Visualiza a build de produção localmente |

## Estrutura do Projeto

```
src/
├── main.js                 # Ponto de entrada da aplicação
├── App.vue                 # Componente raiz
├── assets/
│   └── styles/
│       └── main.css        # Estilos globais
└── components/
    ├── AppHeader.vue       # Navegação
    ├── HeroSection.vue     # Seção principal
    ├── ServicesSection.vue # Serviços oferecidos
    ├── AboutSection.vue    # Sobre a clínica
    ├── TestimonialsSection.vue # Depoimentos
    ├── CtaSection.vue      # Call-to-action
    ├── ContactSection.vue  # Formulário de contato
    ├── AppFooter.vue       # Rodapé
    ├── WhatsAppButton.vue  # Botão flutuante WhatsApp
    └── ui/                 # Componentes reutilizáveis
        ├── BaseButton.vue
        ├── BaseInput.vue
        ├── BaseSelect.vue
        ├── BaseTextarea.vue
        ├── BaseIcon.vue
        ├── BaseLogo.vue
        ├── SectionHeader.vue
        ├── ServiceCard.vue
        ├── TestimonialCard.vue
        ├── InfoCard.vue
        ├── StatCounter.vue
        └── SocialLinks.vue
```

## Funcionalidades

- Design responsivo (desktop, tablet e mobile)
- Navegação suave com scroll
- Animações de entrada ao rolar a página
- Formulário de contato com validação
- Carrossel de depoimentos
- Botão flutuante do WhatsApp
- SEO otimizado com meta tags
- Suporte a preferências de movimento reduzido

## Personalização

### Cores

As cores podem ser alteradas no arquivo `src/assets/styles/main.css`:

```css
:root {
  --color-primary: #e8a0b4;
  --color-primary-light: #fdf2f5;
  --color-primary-dark: #c77d92;
  --color-secondary: #f9e4e8;
  --color-accent: #ffd6e0;
}
```

### Fontes

O projeto utiliza:
- **Cormorant Garamond** - Títulos
- **Montserrat** - Texto

As fontes são carregadas via Google Fonts no `index.html`.
