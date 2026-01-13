<script setup>
import { ref, onMounted } from 'vue'

const isVisible = ref(false)
const COOKIE_KEY = 'rose-estetica-cookies-accepted'

onMounted(() => {
  const accepted = localStorage.getItem(COOKIE_KEY)
  if (!accepted) {
    setTimeout(() => {
      isVisible.value = true
    }, 1000)
  }
})

const acceptCookies = () => {
  localStorage.setItem(COOKIE_KEY, 'true')
  isVisible.value = false
}

const declineCookies = () => {
  localStorage.setItem(COOKIE_KEY, 'false')
  isVisible.value = false
}
</script>

<template>
  <Transition name="cookie-fade">
    <div v-if="isVisible" class="cookie-consent">
      <div class="cookie-consent__content">
        <div class="cookie-consent__icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" fill="currentColor"/>
          </svg>
        </div>
        <div class="cookie-consent__text">
          <p class="cookie-consent__title">Utilizamos cookies</p>
          <p class="cookie-consent__description">
            Este site utiliza cookies para melhorar sua experiência de navegação e fornecer conteúdo personalizado.
          </p>
        </div>
        <div class="cookie-consent__actions">
          <button class="cookie-consent__btn cookie-consent__btn--decline" @click="declineCookies">
            Recusar
          </button>
          <button class="cookie-consent__btn cookie-consent__btn--accept" @click="acceptCookies">
            Aceitar
          </button>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.cookie-consent {
  position: fixed;
  bottom: 1.5rem;
  left: 1.5rem;
  right: 1.5rem;
  z-index: 9999;
  display: flex;
  justify-content: center;
  pointer-events: none;
}

.cookie-consent__content {
  display: flex;
  align-items: center;
  gap: 1rem;
  max-width: 800px;
  padding: 1.25rem 1.5rem;
  background: var(--color-bg);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-lg);
  border: 1px solid var(--color-secondary);
  pointer-events: auto;
}

.cookie-consent__icon {
  flex-shrink: 0;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--color-primary-light);
  border-radius: var(--radius-full);
  color: var(--color-primary-dark);
}

.cookie-consent__text {
  flex: 1;
}

.cookie-consent__title {
  font-family: var(--font-display);
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--color-text-dark);
  margin: 0 0 0.25rem 0;
}

.cookie-consent__description {
  font-family: var(--font-body);
  font-size: 0.875rem;
  color: var(--color-text);
  margin: 0;
  line-height: 1.5;
}

.cookie-consent__actions {
  display: flex;
  gap: 0.75rem;
  flex-shrink: 0;
}

.cookie-consent__btn {
  font-family: var(--font-body);
  font-size: 0.875rem;
  font-weight: 500;
  padding: 0.625rem 1.25rem;
  border-radius: var(--radius-full);
  cursor: pointer;
  transition: var(--transition-fast);
}

.cookie-consent__btn--decline {
  background: transparent;
  border: 1px solid var(--color-text-light);
  color: var(--color-text);
}

.cookie-consent__btn--decline:hover {
  border-color: var(--color-text);
  color: var(--color-text-dark);
}

.cookie-consent__btn--accept {
  background: var(--color-primary);
  border: none;
  color: white;
}

.cookie-consent__btn--accept:hover {
  background: var(--color-primary-dark);
}

/* Transition */
.cookie-fade-enter-active,
.cookie-fade-leave-active {
  transition: all 0.4s ease;
}

.cookie-fade-enter-from,
.cookie-fade-leave-to {
  opacity: 0;
  transform: translateY(20px);
}

/* Responsive */
@media (max-width: 768px) {
  .cookie-consent {
    bottom: 1rem;
    left: 1rem;
    right: 1rem;
  }

  .cookie-consent__content {
    flex-direction: column;
    text-align: center;
    padding: 1.25rem;
  }

  .cookie-consent__actions {
    width: 100%;
  }

  .cookie-consent__btn {
    flex: 1;
  }
}
</style>
