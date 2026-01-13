<script setup>
defineProps({
  variant: {
    type: String,
    default: 'primary',
    validator: (value) => ['primary', 'outline', 'white'].includes(value)
  },
  size: {
    type: String,
    default: 'medium',
    validator: (value) => ['small', 'medium', 'large'].includes(value)
  },
  fullWidth: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  },
  loading: {
    type: Boolean,
    default: false
  },
  href: {
    type: String,
    default: null
  },
  icon: {
    type: String,
    default: null
  }
})

const emit = defineEmits(['click'])

const handleClick = (e) => {
  emit('click', e)
}
</script>

<template>
  <component
    :is="href ? 'a' : 'button'"
    :href="href"
    :disabled="disabled || loading"
    class="btn"
    :class="[
      `btn--${variant}`,
      `btn--${size}`,
      { 'btn--full': fullWidth, 'btn--loading': loading }
    ]"
    @click="handleClick"
  >
    <span v-if="loading" class="btn__loader">
      <span class="btn__loader-dot"></span>
      <span class="btn__loader-dot"></span>
      <span class="btn__loader-dot"></span>
    </span>
    <span v-else class="btn__content">
      <slot />
      <span v-if="icon" class="btn__icon">{{ icon }}</span>
    </span>
  </component>
</template>

<style scoped>
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  font-family: var(--font-body);
  font-weight: 600;
  border: none;
  border-radius: 9999px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  white-space: nowrap;
}

/* Sizes */
.btn--small {
  padding: 0.625rem 1.25rem;
  font-size: 0.875rem;
}

.btn--medium {
  padding: 1rem 2rem;
  font-size: 0.95rem;
}

.btn--large {
  padding: 1.25rem 2.5rem;
  font-size: 1.1rem;
}

/* Variants */
.btn--primary {
  background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%);
  color: white;
  box-shadow: 0 4px 15px rgba(var(--color-primary-rgb), 0.35);
}

.btn--primary:hover:not(:disabled) {
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(var(--color-primary-rgb), 0.45);
}

.btn--outline {
  background: transparent;
  color: var(--color-primary);
  border: 2px solid var(--color-primary);
}

.btn--outline:hover:not(:disabled) {
  background: var(--color-primary);
  color: white;
}

.btn--white {
  background: white;
  color: var(--color-primary);
  border: none;
}

.btn--white:hover:not(:disabled) {
  background: var(--color-secondary);
  color: var(--color-primary-dark);
  transform: translateY(-3px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

/* States */
.btn--full {
  width: 100%;
}

.btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.btn--loading {
  pointer-events: none;
}

/* Icon */
.btn__content {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
}

.btn__icon {
  transition: transform 0.3s ease;
}

.btn:hover:not(:disabled) .btn__icon {
  transform: translateX(5px);
}

/* Loader */
.btn__loader {
  display: flex;
  gap: 4px;
}

.btn__loader-dot {
  width: 6px;
  height: 6px;
  background: currentColor;
  border-radius: 50%;
  animation: loader 0.6s ease-in-out infinite;
}

.btn__loader-dot:nth-child(2) {
  animation-delay: 0.1s;
}

.btn__loader-dot:nth-child(3) {
  animation-delay: 0.2s;
}

@keyframes loader {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-6px); }
}
</style>
