<script setup>
defineProps({
  subtitle: {
    type: String,
    default: ''
  },
  title: {
    type: String,
    required: true
  },
  highlight: {
    type: String,
    default: ''
  },
  description: {
    type: String,
    default: ''
  },
  centered: {
    type: Boolean,
    default: true
  }
})
</script>

<template>
  <div class="section-header" :class="{ 'section-header--centered': centered }" data-animate="fade-up">
    <span v-if="subtitle" class="section-header__subtitle">{{ subtitle }}</span>
    <h2 class="section-header__title">
      {{ title }} <span v-if="highlight" class="section-header__highlight">{{ highlight }}</span>
    </h2>
    <p v-if="description" class="section-header__description">{{ description }}</p>
    <slot />
  </div>
</template>

<style scoped>
.section-header {
  max-width: 700px;
  margin-bottom: 3rem;
}

.section-header--centered {
  text-align: center;
  margin-left: auto;
  margin-right: auto;
}

.section-header__subtitle {
  display: inline-block;
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--color-primary);
  text-transform: uppercase;
  letter-spacing: 3px;
  margin-bottom: 0.75rem;
}

.section-header__title {
  font-family: var(--font-display);
  font-size: clamp(2rem, 4vw, 2.75rem);
  font-weight: 600;
  color: var(--color-text-dark);
  margin-bottom: 1rem;
  line-height: 1.2;
}

.section-header__highlight {
  color: var(--color-primary);
}

.section-header__description {
  font-size: 1.05rem;
  color: var(--color-text);
  line-height: 1.8;
}
</style>
