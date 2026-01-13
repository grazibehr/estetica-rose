<script setup>
defineProps({
  name: {
    type: String,
    required: true
  },
  initials: {
    type: String,
    required: true
  },
  service: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    default: 5,
    validator: (value) => value >= 1 && value <= 5
  }
})
</script>

<template>
  <article class="testimonial-card">
    <div class="testimonial-card__rating">
      <span v-for="n in rating" :key="n" class="star">★</span>
    </div>
    <p class="testimonial-card__text">"{{ text }}"</p>
    <div class="testimonial-card__author">
      <div class="testimonial-card__avatar">{{ initials }}</div>
      <div class="testimonial-card__info">
        <strong>{{ name }}</strong>
        <span>{{ service }}</span>
      </div>
    </div>
  </article>
</template>

<style scoped>
.testimonial-card {
  background: white;
  padding: 2rem;
  border-radius: 20px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.testimonial-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 50px rgba(var(--color-primary-rgb), 0.15);
}

.testimonial-card__rating {
  display: flex;
  gap: 0.25rem;
  margin-bottom: 1rem;
}

.star {
  color: #fbbf24;
  font-size: 1.1rem;
}

.testimonial-card__text {
  font-size: 1rem;
  line-height: 1.7;
  color: var(--color-text);
  margin-bottom: 1.5rem;
  font-style: italic;
}

.testimonial-card__author {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.testimonial-card__avatar {
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.9rem;
  font-weight: 600;
  color: white;
}

.testimonial-card__info {
  display: flex;
  flex-direction: column;
}

.testimonial-card__info strong {
  font-size: 1rem;
  color: var(--color-text-dark);
}

.testimonial-card__info span {
  font-size: 0.85rem;
  color: var(--color-primary);
}
</style>
