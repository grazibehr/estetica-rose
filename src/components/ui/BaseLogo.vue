<script setup>
defineProps({
  size: {
    type: String,
    default: 'medium',
    validator: (value) => ['small', 'medium', 'large'].includes(value)
  },
  variant: {
    type: String,
    default: 'default',
    validator: (value) => ['default', 'light', 'dark'].includes(value)
  }
})
</script>

<template>
  <div class="logo" :class="[`logo--${size}`, `logo--${variant}`]">
    <span class="logo__icon">✿</span>
    <span class="logo__text">Rosé Estética</span>
  </div>
</template>

<style scoped>
.logo {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-family: var(--font-display);
  font-weight: 600;
  text-decoration: none;
}

/* Sizes */
.logo--small {
  font-size: 1.25rem;
}

.logo--small .logo__icon {
  font-size: 1.5rem;
}

.logo--medium {
  font-size: 1.5rem;
}

.logo--medium .logo__icon {
  font-size: 1.75rem;
}

.logo--large {
  font-size: 2rem;
}

.logo--large .logo__icon {
  font-size: 2.25rem;
}

/* Variants */
.logo--default {
  color: var(--color-primary-dark);
}

.logo--default .logo__icon {
  color: var(--color-primary);
}

.logo--light {
  color: white;
}

.logo--light .logo__icon {
  color: var(--color-secondary);
}

.logo--dark {
  color: #8b5a6b;
}

.logo--dark .logo__icon {
  color: #8b5a6b;
}
</style>
