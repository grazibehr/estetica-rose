<script setup>
import { onMounted, ref } from 'vue'
import AppHeader from './components/AppHeader.vue'
import HeroSection from './components/HeroSection.vue'
import ServicesSection from './components/ServicesSection.vue'
import AboutSection from './components/AboutSection.vue'
import TestimonialsSection from './components/TestimonialsSection.vue'
import CtaSection from './components/CtaSection.vue'
import ContactSection from './components/ContactSection.vue'
import AppFooter from './components/AppFooter.vue'
import WhatsAppButton from './components/WhatsAppButton.vue'
import CookieConsent from './components/CookieConsent.vue'

const isLoaded = ref(false)

onMounted(() => {
  // Initialize animations on scroll
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-visible')
      }
    })
  }, observerOptions)

  document.querySelectorAll('[data-animate]').forEach(el => {
    observer.observe(el)
  })

  isLoaded.value = true
})
</script>

<template>
  <div class="app" :class="{ 'app--loaded': isLoaded }">
    <AppHeader />

    <main>
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <TestimonialsSection />
      <CtaSection />
      <ContactSection />
    </main>

    <AppFooter />
    <WhatsAppButton />
    <CookieConsent />
  </div>
</template>

<style scoped>
.app {
  opacity: 0;
  transition: opacity 0.3s ease;
}

.app--loaded {
  opacity: 1;
}
</style>
