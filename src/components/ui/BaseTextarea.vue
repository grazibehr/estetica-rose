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
    default: ''
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
  },
  rows: {
    type: [String, Number],
    default: 4
  },
  maxlength: {
    type: [String, Number],
    default: null
  }
})

const emit = defineEmits(['update:modelValue', 'blur'])

const handleInput = (e) => {
  emit('update:modelValue', e.target.value)
}

const handleBlur = (e) => {
  emit('blur', e)
}
</script>

<template>
  <div class="form-group">
    <label v-if="label" class="form-label">
      {{ label }}
      <span v-if="required" class="form-label__required">*</span>
    </label>
    <textarea
      :value="modelValue"
      :placeholder="placeholder"
      :disabled="disabled"
      :rows="rows"
      :maxlength="maxlength"
      class="form-textarea"
      :class="{ 'form-textarea--error': error }"
      @input="handleInput"
      @blur="handleBlur"
    ></textarea>
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

.form-textarea {
  width: 100%;
  padding: 1rem 1.25rem;
  font-family: var(--font-body);
  font-size: 1rem;
  color: var(--color-text-dark);
  background: var(--color-bg-alt);
  border: 2px solid transparent;
  border-radius: 12px;
  transition: all 0.3s ease;
  resize: vertical;
  min-height: 120px;
}

.form-textarea::placeholder {
  color: var(--color-text);
  opacity: 0.6;
}

.form-textarea:focus {
  outline: none;
  border-color: var(--color-primary);
  background: white;
  box-shadow: 0 0 0 4px rgba(var(--color-primary-rgb), 0.1);
}

.form-textarea:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.form-textarea--error {
  border-color: #dc3545;
}

.form-textarea--error:focus {
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
