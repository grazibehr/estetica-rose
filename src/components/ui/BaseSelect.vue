<script setup>
defineProps({
  modelValue: {
    type: String,
    default: ''
  },
  label: {
    type: String,
    default: ''
  },
  placeholder: {
    type: String,
    default: 'Selecione uma opção'
  },
  options: {
    type: Array,
    default: () => []
  },
  error: {
    type: String,
    default: ''
  },
  required: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['update:modelValue', 'change'])

const handleChange = (e) => {
  emit('update:modelValue', e.target.value)
  emit('change', e.target.value)
}
</script>

<template>
  <div class="form-group">
    <label v-if="label" class="form-label">
      {{ label }}
      <span v-if="required" class="form-label__required">*</span>
    </label>
    <select
      :value="modelValue"
      :disabled="disabled"
      class="form-select"
      :class="{ 'form-select--error': error }"
      @change="handleChange"
    >
      <option value="">{{ placeholder }}</option>
      <option
        v-for="option in options"
        :key="option.value"
        :value="option.value"
      >
        {{ option.label }}
      </option>
    </select>
    <Transition name="fade">
      <span v-if="error" class="form-error">{{ error }}</span>
    </Transition>
  </div>
</template>

<style scoped>
.form-group {
  margin-bottom: 1.5rem;
}

.form-label {
  display: block;
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--color-text-dark);
  margin-bottom: 0.5rem;
}

.form-label__required {
  color: var(--color-primary);
}

.form-select {
  width: 100%;
  padding: 1rem 3rem 1rem 1.25rem;
  font-family: var(--font-body);
  font-size: 1rem;
  color: var(--color-text-dark);
  background: var(--color-bg-alt);
  border: 2px solid transparent;
  border-radius: 12px;
  transition: all 0.3s ease;
  cursor: pointer;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23666' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 1rem center;
}

.form-select:focus {
  outline: none;
  border-color: var(--color-primary);
  background-color: white;
  box-shadow: 0 0 0 4px rgba(var(--color-primary-rgb), 0.1);
}

.form-select:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.form-select--error {
  border-color: #dc3545;
}

.form-select--error:focus {
  box-shadow: 0 0 0 4px rgba(220, 53, 69, 0.1);
}

.form-error {
  display: block;
  font-size: 0.8rem;
  color: #dc3545;
  margin-top: 0.5rem;
}

/* Transition */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
