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
  content: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="info-card">
    <div class="info-card__icon">
      <BaseIcon :name="icon" :size="24" />
    </div>
    <div class="info-card__content">
      <h4 class="info-card__title">{{ title }}</h4>
      <p class="info-card__text" v-html="content"></p>
    </div>
  </div>
</template>

<style scoped>
.info-card {
  display: flex;
  gap: 1rem;
  padding: 1.5rem;
  background: white;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
}

.info-card:hover {
  transform: translateX(10px);
  box-shadow: 0 10px 30px rgba(var(--color-primary-rgb), 0.1);
}

.info-card__icon {
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, var(--color-primary-light) 0%, var(--color-secondary) 100%);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  color: var(--color-primary);
}

.info-card__title {
  font-family: var(--font-display);
  font-size: 1.1rem;
  color: var(--color-text-dark);
  margin-bottom: 0.5rem;
}

.info-card__text {
  font-size: 0.95rem;
  color: var(--color-text);
  line-height: 1.6;
}
</style>
