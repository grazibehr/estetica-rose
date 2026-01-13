<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { SectionHeader, TestimonialCard } from './ui'

const testimonials = ref([
  {
    id: 1,
    name: 'Maria Clara',
    initials: 'MC',
    service: 'Preenchimento Labial',
    rating: 5,
    text: 'Fiz o preenchimento labial e amei o resultado! Super natural, exatamente como eu queria. A equipe é muito atenciosa e profissional.'
  },
  {
    id: 2,
    name: 'Ana Silva',
    initials: 'AS',
    service: 'Toxina Botulínica',
    rating: 5,
    text: 'O botox ficou incrível! Minha pele está muito mais jovem e natural. Já indiquei para todas as minhas amigas.'
  },
  {
    id: 3,
    name: 'Juliana Oliveira',
    initials: 'JO',
    service: 'Peeling Químico',
    rating: 5,
    text: 'O tratamento de peelings transformou minha pele! As manchas sumiram e minha pele está radiante. Recomendo demais!'
  },
  {
    id: 4,
    name: 'Fernanda Costa',
    initials: 'FC',
    service: 'Harmonização Facial',
    rating: 5,
    text: 'A harmonização facial mudou minha autoestima! O resultado ficou super harmonioso e natural. Equipe maravilhosa!'
  }
])

const currentIndex = ref(0)
const isAnimating = ref(false)
let autoplayInterval = null

const visibleTestimonials = computed(() => {
  const result = []
  for (let i = 0; i < 3; i++) {
    const index = (currentIndex.value + i) % testimonials.value.length
    result.push(testimonials.value[index])
  }
  return result
})

const nextSlide = () => {
  if (isAnimating.value) return
  isAnimating.value = true
  currentIndex.value = (currentIndex.value + 1) % testimonials.value.length
  setTimeout(() => {
    isAnimating.value = false
  }, 500)
}

const prevSlide = () => {
  if (isAnimating.value) return
  isAnimating.value = true
  currentIndex.value = (currentIndex.value - 1 + testimonials.value.length) % testimonials.value.length
  setTimeout(() => {
    isAnimating.value = false
  }, 500)
}

const goToSlide = (index) => {
  if (isAnimating.value) return
  isAnimating.value = true
  currentIndex.value = index
  setTimeout(() => {
    isAnimating.value = false
  }, 500)
}

const startAutoplay = () => {
  autoplayInterval = setInterval(nextSlide, 5000)
}

const stopAutoplay = () => {
  if (autoplayInterval) {
    clearInterval(autoplayInterval)
  }
}

onMounted(() => {
  startAutoplay()
})

onUnmounted(() => {
  stopAutoplay()
})
</script>

<template>
  <section class="testimonials section" id="testimonials">
    <div class="container">
      <SectionHeader
        subtitle="Depoimentos"
        title="O que nossas"
        highlight="Clientes dizem"
        description="A satisfação das nossas clientes é nossa maior recompensa."
      />

      <div
        class="testimonials__slider"
        data-animate="fade-up"
        @mouseenter="stopAutoplay"
        @mouseleave="startAutoplay"
      >
        <div class="testimonials__track">
          <TransitionGroup name="slide">
            <TestimonialCard
              v-for="testimonial in visibleTestimonials"
              :key="testimonial.id"
              :name="testimonial.name"
              :initials="testimonial.initials"
              :service="testimonial.service"
              :text="testimonial.text"
              :rating="testimonial.rating"
            />
          </TransitionGroup>
        </div>

        <div class="testimonials__navigation">
          <button
            class="testimonials__btn testimonials__btn--prev"
            @click="prevSlide"
            aria-label="Anterior"
          >
            ←
          </button>
          <div class="testimonials__dots">
            <button
              v-for="(_, index) in testimonials"
              :key="index"
              class="testimonials__dot"
              :class="{ 'testimonials__dot--active': index === currentIndex }"
              @click="goToSlide(index)"
              :aria-label="`Ir para slide ${index + 1}`"
            ></button>
          </div>
          <button
            class="testimonials__btn testimonials__btn--next"
            @click="nextSlide"
            aria-label="Próximo"
          >
            →
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.testimonials {
  background: linear-gradient(135deg, var(--color-primary-light) 0%, white 50%, var(--color-secondary) 100%);
}

.testimonials__slider {
  margin-top: 3rem;
}

.testimonials__track {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.testimonials__navigation {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  margin-top: 2rem;
}

.testimonials__btn {
  width: 48px;
  height: 48px;
  background: white;
  border: 2px solid var(--color-primary);
  border-radius: 50%;
  cursor: pointer;
  font-size: 1.25rem;
  color: var(--color-primary);
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.testimonials__btn:hover {
  background: var(--color-primary);
  color: white;
}

.testimonials__dots {
  display: flex;
  gap: 0.5rem;
}

.testimonials__dot {
  width: 10px;
  height: 10px;
  background: var(--color-primary-light);
  border: none;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease;
}

.testimonials__dot--active {
  width: 30px;
  border-radius: 5px;
  background: var(--color-primary);
}

/* Transitions */
.slide-enter-active,
.slide-leave-active {
  transition: all 0.5s ease;
}

.slide-enter-from {
  opacity: 0;
  transform: translateX(30px);
}

.slide-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}

@media (max-width: 968px) {
  .testimonials__track {
    grid-template-columns: 1fr;
  }

  .testimonials__track > *:nth-child(2),
  .testimonials__track > *:nth-child(3) {
    display: none;
  }
}
</style>
