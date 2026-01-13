<script setup>
import { BaseButton } from './ui'

const scrollToContact = () => {
  const element = document.getElementById('contact')
  if (element) {
    const headerHeight = 80
    const elementPosition = element.offsetTop - headerHeight
    window.scrollTo({
      top: elementPosition,
      behavior: 'smooth'
    })
  }
}
</script>

<template>
  <section class="cta section">
    <div class="cta__bg">
      <div class="cta__shape cta__shape--1"></div>
      <div class="cta__shape cta__shape--2"></div>
    </div>
    <div class="container">
      <div class="cta__content" data-animate="fade-up">
        <h2 class="cta__title">
          Pronta para Realçar sua
          <span>Beleza Natural</span>?
        </h2>
        <p class="cta__text">
          Agende sua avaliação gratuita e descubra o tratamento ideal para você.
        </p>
        <BaseButton
          variant="white"
          size="large"
          icon="→"
          href="#contact"
          @click.prevent="scrollToContact"
        >
          Agendar Avaliação Gratuita
        </BaseButton>
      </div>
    </div>
  </section>
</template>

<style scoped>
.cta {
  position: relative;
  background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%);
  padding: 5rem 0;
  overflow: hidden;
}

.cta__bg {
  position: absolute;
  inset: 0;
  overflow: hidden;
}

.cta__shape {
  position: absolute;
  border-radius: 50%;
  opacity: 0.1;
  background: white;
}

.cta__shape--1 {
  width: 400px;
  height: 400px;
  top: -100px;
  right: -100px;
  animation: float 10s ease-in-out infinite;
}

.cta__shape--2 {
  width: 300px;
  height: 300px;
  bottom: -80px;
  left: -80px;
  animation: float 12s ease-in-out infinite reverse;
}

@keyframes float {
  0%, 100% { transform: translateY(0) scale(1); }
  50% { transform: translateY(-20px) scale(1.05); }
}

.cta__content {
  position: relative;
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
}

.cta__title {
  font-family: var(--font-display);
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 600;
  color: white;
  margin-bottom: 1rem;
  line-height: 1.2;
}

.cta__title span {
  display: block;
  color: var(--color-secondary);
}

.cta__text {
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 2rem;
}
</style>
