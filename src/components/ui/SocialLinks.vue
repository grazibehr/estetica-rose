<script setup>
import BaseIcon from './BaseIcon.vue'

defineProps({
  links: {
    type: Array,
    default: () => [
      { name: 'instagram', url: '#', label: 'Instagram' },
      { name: 'facebook', url: '#', label: 'Facebook' },
      { name: 'whatsapp', url: '#', label: 'WhatsApp' }
    ]
  },
  size: {
    type: String,
    default: 'medium',
    validator: (value) => ['small', 'medium', 'large'].includes(value)
  }
})
</script>

<template>
  <div class="social-links" :class="`social-links--${size}`">
    <a
      v-for="link in links"
      :key="link.name"
      :href="link.url"
      class="social-link"
      :aria-label="link.label"
      target="_blank"
      rel="noopener noreferrer"
    >
      <BaseIcon :name="link.name" :size="size === 'small' ? 18 : size === 'large' ? 26 : 22" />
    </a>
  </div>
</template>

<style scoped>
.social-links {
  display: flex;
  gap: 1rem;
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  color: var(--color-primary);
}

/* Sizes */
.social-links--small .social-link {
  width: 40px;
  height: 40px;
  border-radius: 10px;
}

.social-links--medium .social-link {
  width: 48px;
  height: 48px;
  border-radius: 12px;
}

.social-links--large .social-link {
  width: 56px;
  height: 56px;
  border-radius: 14px;
}

.social-link:hover {
  background: var(--color-primary);
  color: white;
  transform: translateY(-5px);
}
</style>
