<script setup>
import { ref, onMounted } from 'vue'

const stats = ref([
  { count: 500, label: 'Clientes Satisfeitas', current: 0 },
  { count: 10, label: 'Anos de Experiência', current: 0 }
])

const features = [
  'Profissionais especializados e certificados',
  'Produtos de alta qualidade e procedência',
  'Ambiente seguro e acolhedor',
  'Atendimento personalizado e humanizado'
]

const animateCount = (index) => {
  const stat = stats.value[index]
  const duration = 2000
  const steps = 60
  const increment = stat.count / steps
  let current = 0

  const timer = setInterval(() => {
    current += increment
    if (current >= stat.count) {
      stats.value[index].current = stat.count
      clearInterval(timer)
    } else {
      stats.value[index].current = Math.floor(current)
    }
  }, duration / steps)
}

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

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        stats.value.forEach((_, index) => animateCount(index))
        observer.disconnect()
      }
    })
  }, { threshold: 0.5 })

  const statsElement = document.querySelector('.about__stats')
  if (statsElement) {
    observer.observe(statsElement)
  }
})
</script>

<template>
  <section class="about section" id="about">
    <div class="container">
      <div class="about__grid">
        <div class="about__image" data-animate="fade-right">
          <div class="about__image-wrapper">
            <div class="about__image-placeholder">
              <span class="placeholder-icon">✿</span>
              <span class="placeholder-text">Nossa Clínica</span>
            </div>
            <div class="about__image-decoration"></div>
          </div>
          <div class="about__stats">
            <div v-for="(stat, index) in stats" :key="index" class="about__stat">
              <span class="about__stat-number">{{ stat.current }}+</span>
              <span class="about__stat-text">{{ stat.label }}</span>
            </div>
          </div>
        </div>

        <div class="about__content" data-animate="fade-left">
          <span class="section__subtitle">Sobre Nós</span>
          <h2 class="section__title">Cuidado e <span>Dedicação</span></h2>
          <p class="about__text">
            A Clínica Rosé Estética nasceu do sonho de oferecer tratamentos
            de beleza com excelência, segurança e resultados naturais.
            Nossa missão é realçar a beleza única de cada mulher.
          </p>
          <p class="about__text">
            Contamos com profissionais altamente qualificados, ambiente
            acolhedor e equipamentos de última geração para proporcionar
            a melhor experiência em cuidados estéticos.
          </p>

          <ul class="about__features">
            <li v-for="feature in features" :key="feature" class="about__feature">
              <span class="about__feature-icon">✓</span>
              <span>{{ feature }}</span>
            </li>
          </ul>

          <a href="#contact" class="btn btn--primary" @click.prevent="scrollToContact">
            Conheça Nossa Clínica
            <span class="btn__icon">→</span>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about__grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.about__image {
  position: relative;
}

.about__image-wrapper {
  position: relative;
  aspect-ratio: 4/5;
  max-width: 400px;
}

.about__image-decoration {
  position: absolute;
  inset: -20px 20px 20px -20px;
  border: 2px solid var(--color-primary);
  border-radius: 40px;
  opacity: 0.3;
}

.about__image-placeholder {
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, var(--color-primary-light) 0%, var(--color-secondary) 100%);
  border-radius: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  position: relative;
  z-index: 1;
}

.about__image-placeholder .placeholder-icon {
  font-size: 4rem;
  color: var(--color-primary);
}

.about__image-placeholder .placeholder-text {
  font-family: var(--font-display);
  font-size: 1.5rem;
  color: var(--color-primary-dark);
}

.about__stats {
  position: absolute;
  bottom: -30px;
  right: -30px;
  background: white;
  padding: 1.5rem 2rem;
  border-radius: 20px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
  display: flex;
  gap: 2rem;
  z-index: 2;
}

.about__stat {
  text-align: center;
}

.about__stat-number {
  display: block;
  font-family: var(--font-display);
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--color-primary);
  line-height: 1;
}

.about__stat-text {
  font-size: 0.85rem;
  color: var(--color-text);
  margin-top: 0.5rem;
  display: block;
}

.about__content {
  padding-left: 2rem;
}

.about__text {
  font-size: 1rem;
  line-height: 1.8;
  color: var(--color-text);
  margin-bottom: 1rem;
}

.about__features {
  list-style: none;
  margin: 2rem 0;
}

.about__feature {
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 1rem;
  color: var(--color-text);
  margin-bottom: 1rem;
}

.about__feature-icon {
  width: 24px;
  height: 24px;
  background: linear-gradient(135deg, var(--color-primary-light) 0%, var(--color-secondary) 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  color: var(--color-primary);
  font-weight: bold;
  flex-shrink: 0;
}

@media (max-width: 968px) {
  .about__grid {
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  .about__image-wrapper {
    max-width: 350px;
    margin: 0 auto;
  }

  .about__stats {
    position: relative;
    bottom: -20px;
    right: 0;
    margin: 0 auto;
    justify-content: center;
  }

  .about__content {
    padding-left: 0;
    text-align: center;
  }

  .about__features {
    display: inline-block;
    text-align: left;
  }
}

@media (max-width: 480px) {
  .about__stats {
    flex-direction: column;
    gap: 1rem;
    padding: 1.5rem;
  }
}
</style>
