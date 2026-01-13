<script setup>
import { ref } from 'vue'
import { BaseLogo, BaseInput, BaseButton } from './ui'

const quickLinks = [
  { id: 'home', label: 'Início' },
  { id: 'services', label: 'Tratamentos' },
  { id: 'about', label: 'Sobre' },
  { id: 'testimonials', label: 'Depoimentos' },
  { id: 'contact', label: 'Contato' }
]

const treatmentLinks = [
  { label: 'Toxina Botulínica' },
  { label: 'Preenchimento' },
  { label: 'Peelings' },
  { label: 'Harmonização' },
  { label: 'Bioestimuladores' }
]

const newsletterEmail = ref('')
const isSubmitted = ref(false)
const error = ref('')

const scrollToSection = (id) => {
  const element = document.getElementById(id)
  if (element) {
    const headerHeight = 80
    const elementPosition = element.offsetTop - headerHeight
    window.scrollTo({
      top: elementPosition,
      behavior: 'smooth'
    })
  }
}

const validateEmail = (email) => {
  const sanitized = email.replace(/[<>]/g, '').trim()
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(sanitized)
}

const handleNewsletterSubmit = () => {
  error.value = ''

  if (!newsletterEmail.value) {
    error.value = 'E-mail é obrigatório'
    return
  }

  if (!validateEmail(newsletterEmail.value)) {
    error.value = 'E-mail inválido'
    return
  }

  console.log('Newsletter subscription:', newsletterEmail.value)
  isSubmitted.value = true
  newsletterEmail.value = ''

  setTimeout(() => {
    isSubmitted.value = false
  }, 3000)
}
</script>

<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__grid">
        <div class="footer__brand">
          <a href="#home" class="footer__logo" @click.prevent="scrollToSection('home')">
            <BaseLogo variant="dark" />
          </a>
          <p class="footer__description">
            Realçando a beleza natural de cada mulher com tratamentos
            seguros, modernos e personalizados.
          </p>
        </div>

        <div class="footer__links">
          <h4 class="footer__title">Links Rápidos</h4>
          <ul class="footer__list">
            <li v-for="link in quickLinks" :key="link.id">
              <a :href="`#${link.id}`" @click.prevent="scrollToSection(link.id)">
                {{ link.label }}
              </a>
            </li>
          </ul>
        </div>

        <div class="footer__links">
          <h4 class="footer__title">Tratamentos</h4>
          <ul class="footer__list">
            <li v-for="link in treatmentLinks" :key="link.label">
              <a href="#services" @click.prevent="scrollToSection('services')">
                {{ link.label }}
              </a>
            </li>
          </ul>
        </div>

        <div class="footer__newsletter">
          <h4 class="footer__title">Newsletter</h4>
          <p>Receba novidades e dicas de beleza.</p>

          <Transition name="fade" mode="out-in">
            <p v-if="isSubmitted" class="footer__success">
              ✓ Inscrito com sucesso!
            </p>
            <form v-else class="footer__form" @submit.prevent="handleNewsletterSubmit" novalidate>
              <input
                type="email"
                v-model="newsletterEmail"
                placeholder="Seu e-mail"
                class="footer__input"
                :class="{ 'footer__input--error': error }"
                autocomplete="email"
              >
              <button type="submit" class="footer__btn" aria-label="Inscrever">
                →
              </button>
            </form>
          </Transition>
          <Transition name="fade">
            <p v-if="error" class="footer__error">{{ error }}</p>
          </Transition>
        </div>
      </div>

      <div class="footer__bottom">
        <p>&copy; {{ new Date().getFullYear() }} Clínica Rosé Estética. Todos os direitos reservados.</p>
        <p class="footer__credits">Criado por <strong>GB</strong></p>
        <div class="footer__legal">
          <a href="#">Política de Privacidade</a>
          <a href="#">Termos de Uso</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: linear-gradient(135deg, #fdf2f5 0%, #f9e4e8 100%);
  color: var(--color-text-dark);
  padding: 4rem 0 2rem;
}

.footer__grid {
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr 1.5fr;
  gap: 3rem;
  padding-bottom: 3rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
}

.footer__logo {
  display: inline-block;
  text-decoration: none;
  margin-bottom: 1rem;
}

.footer__description {
  font-size: 0.95rem;
  color: var(--color-text);
  line-height: 1.7;
}

.footer__title {
  font-family: var(--font-display);
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: #8b5a6b;
}

.footer__list {
  list-style: none;
}

.footer__list li {
  margin-bottom: 0.75rem;
}

.footer__list a {
  color: var(--color-text);
  text-decoration: none;
  font-size: 0.95rem;
  transition: all 0.3s ease;
}

.footer__list a:hover {
  color: #8b5a6b;
  padding-left: 5px;
}

.footer__newsletter p {
  font-size: 0.95rem;
  color: var(--color-text);
  margin-bottom: 1rem;
}

.footer__form {
  display: flex;
  gap: 0.5rem;
}

.footer__input {
  flex: 1;
  padding: 0.875rem 1rem;
  font-family: var(--font-body);
  font-size: 0.95rem;
  color: var(--color-text-dark);
  background: white;
  border: 2px solid rgba(0, 0, 0, 0.08);
  border-radius: 10px;
  transition: all 0.3s ease;
}

.footer__input:focus {
  outline: none;
  border-color: var(--color-primary);
  box-shadow: 0 0 0 3px rgba(232, 160, 180, 0.2);
}

.footer__input--error {
  border-color: #dc3545;
}

.footer__btn {
  width: 48px;
  height: 48px;
  background: #8b5a6b;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-size: 1.25rem;
  color: white;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.footer__btn:hover {
  background: #6d4555;
  transform: translateX(3px);
}

.footer__success {
  color: #28a745;
  font-size: 0.9rem;
}

.footer__error {
  color: #dc3545;
  font-size: 0.8rem;
  margin-top: 0.5rem;
}

.footer__bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 2rem;
  font-size: 0.9rem;
  color: var(--color-text);
}

.footer__credits {
  color: var(--color-text);
  font-size: 0.85rem;
}

.footer__credits strong {
  color: #8b5a6b;
  font-weight: 600;
}

.footer__legal {
  display: flex;
  gap: 2rem;
}

.footer__legal a {
  color: var(--color-text);
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer__legal a:hover {
  color: #8b5a6b;
}

/* Transitions */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@media (max-width: 968px) {
  .footer__grid {
    grid-template-columns: 1fr 1fr;
  }

  .footer__brand {
    grid-column: 1 / -1;
  }
}

@media (max-width: 600px) {
  .footer__grid {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .footer__logo {
    display: flex;
    justify-content: center;
  }

  .footer__bottom {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }

  .footer__credits {
    order: 3;
  }

  .footer__legal {
    flex-direction: column;
    gap: 0.5rem;
  }
}
</style>
