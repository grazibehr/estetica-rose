<script setup>
import { ref, onMounted } from 'vue'
import { BaseButton } from './ui'

const isVisible = ref(false)

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

onMounted(() => {
  setTimeout(() => {
    isVisible.value = true
  }, 100)
})
</script>

<template>
  <section class="hero" id="home">
    <div class="hero__bg">
      <div class="hero__shape hero__shape--1"></div>
      <div class="hero__shape hero__shape--2"></div>
      <div class="hero__shape hero__shape--3"></div>
    </div>

    <div class="hero__content container">
      <div class="hero__data" :class="{ 'hero__data--visible': isVisible }">
        <span class="hero__subtitle">Bem-vinda à</span>
        <h1 class="hero__title">
          Clínica Rosé
          <span class="hero__title-accent">Estética</span>
        </h1>
        <p class="hero__description">
          Descubra tratamentos personalizados que realçam sua beleza natural.
          Nossa equipe especializada cuida de você com carinho, tecnologia de ponta
          e técnicas inovadoras.
        </p>
        <div class="hero__buttons">
          <BaseButton
            variant="primary"
            icon="→"
            href="#services"
            @click.prevent="scrollToSection('services')"
          >
            Nossos Tratamentos
          </BaseButton>
          <BaseButton
            variant="outline"
            href="#contact"
            @click.prevent="scrollToSection('contact')"
          >
            Agende sua Consulta
          </BaseButton>
        </div>
      </div>

      <div class="hero__image" :class="{ 'hero__image--visible': isVisible }">
        <div class="hero__image-wrapper">
          <div class="hero__image-decoration"></div>
          <img
            src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=800&auto=format&fit=crop"
            alt="Profissional de estética realizando procedimento com seringa"
            class="hero__img"
            loading="eager"
          />
        </div>
        <div class="hero__floating hero__floating--1">✦</div>
        <div class="hero__floating hero__floating--2">✿</div>
      </div>
    </div>

    <a href="#services" class="hero__scroll" @click.prevent="scrollToSection('services')" aria-label="Rolar para baixo">
      <span class="hero__scroll-text">Descubra mais</span>
      <span class="hero__scroll-icon">↓</span>
    </a>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 8rem 0 4rem;
  overflow: hidden;
}

.hero__bg {
  position: absolute;
  inset: 0;
  z-index: -1;
  overflow: hidden;
}

.hero__shape {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.5;
}

.hero__shape--1 {
  width: 600px;
  height: 600px;
  background: var(--color-primary-light);
  top: -200px;
  right: -100px;
  animation: float 15s ease-in-out infinite;
}

.hero__shape--2 {
  width: 400px;
  height: 400px;
  background: var(--color-secondary);
  bottom: -100px;
  left: -100px;
  animation: float 12s ease-in-out infinite reverse;
}

.hero__shape--3 {
  width: 300px;
  height: 300px;
  background: var(--color-accent);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: pulse 8s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { transform: translateY(0) scale(1); }
  50% { transform: translateY(-30px) scale(1.05); }
}

@keyframes pulse {
  0%, 100% { opacity: 0.3; transform: translate(-50%, -50%) scale(1); }
  50% { opacity: 0.5; transform: translate(-50%, -50%) scale(1.1); }
}

.hero__content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.hero__data {
  opacity: 0;
  transform: translateX(-30px);
  transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
}

.hero__data--visible {
  opacity: 1;
  transform: translateX(0);
}

.hero__subtitle {
  display: inline-block;
  font-size: 1rem;
  font-weight: 500;
  color: var(--color-primary);
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 1rem;
}

.hero__title {
  font-family: var(--font-display);
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 600;
  line-height: 1.1;
  color: var(--color-text-dark);
  margin-bottom: 1.5rem;
}

.hero__title-accent {
  display: block;
  color: var(--color-primary);
}

.hero__description {
  font-size: 1.1rem;
  line-height: 1.8;
  color: var(--color-text);
  margin-bottom: 2rem;
  max-width: 500px;
}

.hero__buttons {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.hero__image {
  position: relative;
  opacity: 0;
  transform: translateX(30px);
  transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.2s;
}

.hero__image--visible {
  opacity: 1;
  transform: translateX(0);
}

.hero__image-wrapper {
  position: relative;
  aspect-ratio: 4/5;
  max-width: 450px;
  margin: 0 auto;
}

.hero__image-decoration {
  position: absolute;
  inset: 20px -20px -20px 20px;
  border: 2px solid var(--color-primary);
  border-radius: 200px 200px 40px 40px;
  opacity: 0.3;
}

.hero__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
  border-radius: 200px 200px 40px 40px;
  filter: brightness(1.02) contrast(1.02);
  transition: transform 0.5s ease, filter 0.3s ease;
}

.hero__image-wrapper:hover .hero__img {
  transform: scale(1.02);
  filter: brightness(1.05) contrast(1.05);
}

.hero__floating {
  position: absolute;
  font-size: 2rem;
  color: var(--color-primary);
  animation: floatElement 6s ease-in-out infinite;
}

.hero__floating--1 {
  top: 10%;
  right: 10%;
  animation-delay: 0s;
}

.hero__floating--2 {
  bottom: 20%;
  left: 10%;
  animation-delay: 2s;
}

@keyframes floatElement {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(10deg); }
}

.hero__scroll {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  color: var(--color-text);
  animation: bounce 2s ease-in-out infinite;
}

.hero__scroll-text {
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 2px;
}

.hero__scroll-icon {
  font-size: 1.5rem;
}

@keyframes bounce {
  0%, 100% { transform: translateX(-50%) translateY(0); }
  50% { transform: translateX(-50%) translateY(10px); }
}

@media (max-width: 968px) {
  .hero__content {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .hero__description {
    margin-left: auto;
    margin-right: auto;
  }

  .hero__buttons {
    justify-content: center;
  }

  .hero__image {
    order: -1;
  }

  .hero__image-wrapper {
    max-width: 300px;
  }
}

@media (max-width: 480px) {
  .hero__buttons {
    flex-direction: column;
  }
}
</style>
