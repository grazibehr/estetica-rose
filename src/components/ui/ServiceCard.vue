<script setup>
import BaseIcon from './BaseIcon.vue'

defineProps({
  icon: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  features: {
    type: Array,
    default: () => []
  },
  linkText: {
    type: String,
    default: 'Saiba mais'
  },
  linkHref: {
    type: String,
    default: '#contact'
  }
})

const emit = defineEmits(['click'])
</script>

<template>
  <article class="service-card">
    <div class="service-card__icon">
      <BaseIcon :name="icon" :size="28" />
    </div>
    <h3 class="service-card__title">{{ title }}</h3>
    <p class="service-card__description">{{ description }}</p>
    <ul v-if="features.length" class="service-card__features">
      <li v-for="feature in features" :key="feature">{{ feature }}</li>
    </ul>
    <a :href="linkHref" class="service-card__link" @click="emit('click', $event)">
      {{ linkText }} <span>→</span>
    </a>
  </article>
</template>

<style scoped>
.service-card {
  background: white;
  padding: 2.5rem;
  border-radius: 20px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.service-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(var(--color-primary-rgb), 0.15);
}

.service-card__icon {
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, var(--color-primary-light) 0%, var(--color-secondary) 100%);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  transition: transform 0.3s ease;
  color: var(--color-primary);
}

.service-card:hover .service-card__icon {
  transform: scale(1.1) rotate(5deg);
}

.service-card__title {
  font-family: var(--font-display);
  font-size: 1.4rem;
  font-weight: 600;
  color: var(--color-text-dark);
  margin-bottom: 1rem;
}

.service-card__description {
  font-size: 0.95rem;
  line-height: 1.7;
  color: var(--color-text);
  margin-bottom: 1.5rem;
}

.service-card__features {
  list-style: none;
  margin-bottom: 1.5rem;
}

.service-card__features li {
  position: relative;
  padding-left: 1.5rem;
  font-size: 0.9rem;
  color: var(--color-text);
  margin-bottom: 0.5rem;
}

.service-card__features li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: var(--color-primary);
  font-weight: bold;
}

.service-card__link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--color-primary);
  text-decoration: none;
  transition: gap 0.3s ease;
}

.service-card__link:hover {
  gap: 1rem;
}

.service-card__link span {
  transition: transform 0.3s ease;
}

.service-card__link:hover span {
  transform: translateX(5px);
}

@media (max-width: 768px) {
  .service-card {
    padding: 2rem;
  }
}
</style>
