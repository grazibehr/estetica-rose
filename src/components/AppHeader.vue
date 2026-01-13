<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { BaseLogo, BaseButton } from './ui'

const isScrolled = ref(false)
const isMenuOpen = ref(false)
const activeSection = ref('home')

const navLinks = [
  { id: 'home', label: 'Início' },
  { id: 'services', label: 'Tratamentos' },
  { id: 'about', label: 'Sobre' },
  { id: 'testimonials', label: 'Depoimentos' },
  { id: 'contact', label: 'Contato' }
]

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50

  // Update active section
  const sections = navLinks.map(link => document.getElementById(link.id))
  const scrollPos = window.scrollY + 100

  sections.forEach((section, index) => {
    if (section) {
      const top = section.offsetTop
      const height = section.offsetHeight
      if (scrollPos >= top && scrollPos < top + height) {
        activeSection.value = navLinks[index].id
      }
    }
  })
}

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
  document.body.style.overflow = isMenuOpen.value ? 'hidden' : ''
}

const closeMenu = () => {
  isMenuOpen.value = false
  document.body.style.overflow = ''
}

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
  closeMenu()
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <header class="header" :class="{ 'header--scrolled': isScrolled }">
    <nav class="nav container">
      <a href="#home" class="nav__logo" @click.prevent="scrollToSection('home')">
        <BaseLogo size="medium" />
      </a>

      <div class="nav__menu" :class="{ 'nav__menu--open': isMenuOpen }">
        <ul class="nav__list">
          <li v-for="link in navLinks" :key="link.id" class="nav__item">
            <a
              :href="`#${link.id}`"
              class="nav__link"
              :class="{ 'nav__link--active': activeSection === link.id }"
              @click.prevent="scrollToSection(link.id)"
            >
              {{ link.label }}
            </a>
          </li>
        </ul>

        <button class="nav__close" @click="closeMenu" aria-label="Fechar menu">
          ×
        </button>
      </div>

      <div class="nav__actions">
        <BaseButton
          variant="primary"
          size="small"
          href="#contact"
          @click.prevent="scrollToSection('contact')"
        >
          Agendar
        </BaseButton>
        <button
          class="nav__toggle"
          :class="{ 'nav__toggle--active': isMenuOpen }"
          @click="toggleMenu"
          aria-label="Abrir menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  </header>
</template>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 1rem 0;
  transition: all 0.3s ease;
}

.header--scrolled {
  background: rgba(255, 255, 255, 0.98);
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.08);
  padding: 0.75rem 0;
  backdrop-filter: blur(10px);
}

.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.nav__logo {
  text-decoration: none;
}

.nav__list {
  display: flex;
  gap: 2rem;
  list-style: none;
}

.nav__link {
  position: relative;
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--color-text);
  text-decoration: none;
  padding: 0.5rem 0;
  transition: color 0.3s ease;
}

.nav__link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--color-primary);
  transition: width 0.3s ease;
}

.nav__link:hover,
.nav__link--active {
  color: var(--color-primary);
}

.nav__link:hover::after,
.nav__link--active::after {
  width: 100%;
}

.nav__actions {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.nav__toggle {
  display: none;
  flex-direction: column;
  gap: 5px;
  padding: 0.5rem;
  background: none;
  border: none;
  cursor: pointer;
}

.nav__toggle span {
  display: block;
  width: 24px;
  height: 2px;
  background: var(--color-text);
  transition: all 0.3s ease;
}

.nav__toggle--active span:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}

.nav__toggle--active span:nth-child(2) {
  opacity: 0;
}

.nav__toggle--active span:nth-child(3) {
  transform: rotate(-45deg) translate(5px, -5px);
}

.nav__close {
  display: none;
}

@media (max-width: 768px) {
  .nav__menu {
    position: fixed;
    top: 0;
    right: -100%;
    width: 80%;
    max-width: 320px;
    height: 100vh;
    background: white;
    padding: 5rem 2rem 2rem;
    transition: right 0.3s ease;
    box-shadow: -5px 0 30px rgba(0, 0, 0, 0.1);
  }

  .nav__menu--open {
    right: 0;
  }

  .nav__list {
    flex-direction: column;
    gap: 1rem;
  }

  .nav__link {
    font-size: 1.1rem;
    padding: 0.75rem 0;
  }

  .nav__toggle {
    display: flex;
  }

  .nav__close {
    display: flex;
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;
    font-size: 2rem;
    background: none;
    border: none;
    cursor: pointer;
    color: var(--color-text);
  }

  .nav__actions .btn {
    display: none;
  }
}
</style>
