<script setup>
import { ref } from 'vue'
import { SectionHeader, ServiceCard } from './ui'

const services = ref([
  {
    id: 1,
    icon: 'botox',
    title: 'Toxina Botulínica',
    description: 'Tratamento para suavizar rugas e linhas de expressão, proporcionando um aspecto mais jovem e descansado.',
    features: ['Rugas de expressão', 'Linhas da testa', 'Pés de galinha']
  },
  {
    id: 2,
    icon: 'filler',
    title: 'Preenchimento',
    description: 'Ácido hialurônico para restaurar volume, definir contornos e rejuvenescer a face de forma natural.',
    features: ['Lábios e contorno', 'Bigode chinês', 'Olheiras']
  },
  {
    id: 3,
    icon: 'peeling',
    title: 'Peelings',
    description: 'Renovação celular para uma pele mais uniforme, luminosa e livre de manchas e imperfeições.',
    features: ['Peeling químico', 'Peeling de cristal', 'Peeling de diamante']
  },
  {
    id: 4,
    icon: 'harmony',
    title: 'Harmonização Facial',
    description: 'Conjunto de procedimentos para equilibrar e harmonizar os traços faciais de forma personalizada.',
    features: ['Análise facial', 'Protocolo personalizado', 'Resultados naturais']
  },
  {
    id: 5,
    icon: 'bio',
    title: 'Bioestimuladores',
    description: 'Estimulam a produção natural de colágeno, melhorando a qualidade e firmeza da pele a longo prazo.',
    features: ['Sculptra', 'Radiesse', 'Ellansé']
  },
  {
    id: 6,
    icon: 'skincare',
    title: 'Skincare Avançado',
    description: 'Tratamentos faciais personalizados com tecnologias de ponta para cuidar da saúde da sua pele.',
    features: ['Limpeza de pele', 'Microagulhamento', 'LED terapia']
  }
])

const scrollToContact = (e) => {
  e.preventDefault()
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
  <section class="services section" id="services">
    <div class="container">
      <SectionHeader
        subtitle="Nossos Tratamentos"
        title="Procedimentos"
        highlight="Estéticos"
        description="Oferecemos uma variedade de tratamentos para cuidar da sua beleza com segurança e resultados naturais."
      />

      <div class="services__grid">
        <ServiceCard
          v-for="(service, index) in services"
          :key="service.id"
          :icon="service.icon"
          :title="service.title"
          :description="service.description"
          :features="service.features"
          link-href="#contact"
          :style="{ '--delay': `${index * 100}ms` }"
          data-animate="fade-up"
          @click="scrollToContact"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
.services {
  background: var(--color-bg-alt);
}

.services__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
}

@media (max-width: 768px) {
  .services__grid {
    grid-template-columns: 1fr;
  }
}
</style>
