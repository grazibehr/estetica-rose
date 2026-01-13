<script setup>
import { ref, onMounted } from 'vue'

const props = defineProps({
  count: {
    type: Number,
    required: true
  },
  label: {
    type: String,
    required: true
  },
  suffix: {
    type: String,
    default: '+'
  },
  duration: {
    type: Number,
    default: 2000
  }
})

const currentValue = ref(0)
const hasAnimated = ref(false)

const animateCount = () => {
  if (hasAnimated.value) return
  hasAnimated.value = true

  const steps = 60
  const increment = props.count / steps
  let current = 0

  const timer = setInterval(() => {
    current += increment
    if (current >= props.count) {
      currentValue.value = props.count
      clearInterval(timer)
    } else {
      currentValue.value = Math.floor(current)
    }
  }, props.duration / steps)
}

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCount()
        observer.disconnect()
      }
    })
  }, { threshold: 0.5 })

  const el = document.querySelector('.stat-counter')
  if (el) observer.observe(el)
})
</script>

<template>
  <div class="stat-counter">
    <span class="stat-counter__number">{{ currentValue }}{{ suffix }}</span>
    <span class="stat-counter__label">{{ label }}</span>
  </div>
</template>

<style scoped>
.stat-counter {
  text-align: center;
}

.stat-counter__number {
  display: block;
  font-family: var(--font-display);
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--color-primary);
  line-height: 1;
}

.stat-counter__label {
  font-size: 0.85rem;
  color: var(--color-text);
  margin-top: 0.5rem;
  display: block;
}
</style>
