<script setup>
const props = defineProps({
  modelValue: {
    type: String,
    default: ''
  },
  type: {
    type: String,
    default: 'text'
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
  autocomplete: {
    type: String,
    default: 'off'
  },
  maxlength: {
    type: [String, Number],
    default: null
  }
})

const emit = defineEmits(['update:modelValue', 'blur', 'focus'])

const handleInput = (e) => {
  emit('update:modelValue', e.target.value)
}

const handleBlur = (e) => {
  emit('blur', e)
}

const handleFocus = (e) => {
  emit('focus', e)
}
</script>

<template>
  <div class="form-group">
    <label v-if="label" class="form-label">
      {{ label }}
      <span v-if="required" class="form-label__required">*</span>
    </label>
    <input
      :type="type"
      :value="modelValue"
      :placeholder="placeholder"
      :disabled="disabled"
      :autocomplete="autocomplete"
      :maxlength="maxlength"
      class="form-input"
      :class="{ 'form-input--error': error }"
      @input="handleInput"
      @blur="handleBlur"
      @focus="handleFocus"
    >
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

.form-input {
  width: 100%;
  padding: 1rem 1.25rem;
  font-family: var(--font-body);
  font-size: 1rem;
  color: var(--color-text-dark);
  background: var(--color-bg-alt);
  border: 2px solid transparent;
  border-radius: 12px;
  transition: all 0.3s ease;
}

.form-input::placeholder {
  color: var(--color-text);
  opacity: 0.6;
}

.form-input:focus {
  outline: none;
  border-color: var(--color-primary);
  background: white;
  box-shadow: 0 0 0 4px rgba(var(--color-primary-rgb), 0.1);
}

.form-input:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.form-input--error {
  border-color: #dc3545;
}

.form-input--error:focus {
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
