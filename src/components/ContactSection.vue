<script setup>
import { ref, reactive } from 'vue'
import { SectionHeader, BaseInput, BaseSelect, BaseTextarea, BaseButton, InfoCard, SocialLinks } from './ui'

const form = reactive({
  name: '',
  email: '',
  phone: '',
  service: '',
  message: ''
})

const errors = reactive({
  name: '',
  email: '',
  phone: '',
  service: ''
})

const isSubmitting = ref(false)
const isSubmitted = ref(false)

const serviceOptions = [
  { value: 'botox', label: 'Toxina Botulínica' },
  { value: 'preenchimento', label: 'Preenchimento' },
  { value: 'peeling', label: 'Peelings' },
  { value: 'harmonizacao', label: 'Harmonização Facial' },
  { value: 'bioestimuladores', label: 'Bioestimuladores' },
  { value: 'skincare', label: 'Skincare Avançado' },
  { value: 'outro', label: 'Outro' }
]

const contactInfo = [
  {
    icon: 'location',
    title: 'Endereço',
    content: 'Rua das Flores, 123 - Centro<br>São Paulo - SP, 01234-567'
  },
  {
    icon: 'phone',
    title: 'Telefone',
    content: '(11) 99999-9999<br>(11) 3333-3333'
  },
  {
    icon: 'clock',
    title: 'Horário',
    content: 'Seg - Sex: 9h às 19h<br>Sábado: 9h às 14h'
  }
]

const socialLinks = [
  { name: 'instagram', url: '#', label: 'Instagram' },
  { name: 'facebook', url: '#', label: 'Facebook' },
  { name: 'whatsapp', url: '#', label: 'WhatsApp' }
]

// Security: Input sanitization
const sanitizeInput = (input) => {
  if (typeof input !== 'string') return ''
  return input
    .replace(/[<>]/g, '')
    .replace(/javascript:/gi, '')
    .replace(/on\w+=/gi, '')
    .trim()
}

// Validation functions
const validateName = (value) => {
  const sanitized = sanitizeInput(value)
  if (!sanitized) return 'Nome é obrigatório'
  if (sanitized.length < 3) return 'Nome deve ter pelo menos 3 caracteres'
  if (sanitized.length > 100) return 'Nome deve ter no máximo 100 caracteres'
  if (!/^[a-zA-ZÀ-ÿ\s]+$/.test(sanitized)) return 'Nome deve conter apenas letras'
  return ''
}

const validateEmail = (value) => {
  const sanitized = sanitizeInput(value)
  if (!sanitized) return 'E-mail é obrigatório'
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(sanitized)) return 'E-mail inválido'
  if (sanitized.length > 100) return 'E-mail deve ter no máximo 100 caracteres'
  return ''
}

const validatePhone = (value) => {
  const sanitized = sanitizeInput(value)
  if (!sanitized) return 'Telefone é obrigatório'
  const phoneRegex = /^[\d\s()-]+$/
  if (!phoneRegex.test(sanitized)) return 'Telefone inválido'
  const digits = sanitized.replace(/\D/g, '')
  if (digits.length < 10 || digits.length > 11) return 'Telefone deve ter 10 ou 11 dígitos'
  return ''
}

const validateService = (value) => {
  if (!value) return 'Selecione um tratamento'
  const validServices = serviceOptions.map(s => s.value)
  if (!validServices.includes(value)) return 'Tratamento inválido'
  return ''
}

const formatPhone = (value) => {
  let cleanValue = value.replace(/\D/g, '')
  if (cleanValue.length > 11) cleanValue = cleanValue.slice(0, 11)

  if (cleanValue.length > 0) {
    cleanValue = '(' + cleanValue
    if (cleanValue.length > 3) {
      cleanValue = cleanValue.slice(0, 3) + ') ' + cleanValue.slice(3)
    }
    if (cleanValue.length > 10) {
      cleanValue = cleanValue.slice(0, 10) + '-' + cleanValue.slice(10)
    }
  }
  form.phone = cleanValue
}

const validateField = (field) => {
  switch (field) {
    case 'name':
      errors.name = validateName(form.name)
      break
    case 'email':
      errors.email = validateEmail(form.email)
      break
    case 'phone':
      errors.phone = validatePhone(form.phone)
      break
    case 'service':
      errors.service = validateService(form.service)
      break
  }
}

const validateForm = () => {
  errors.name = validateName(form.name)
  errors.email = validateEmail(form.email)
  errors.phone = validatePhone(form.phone)
  errors.service = validateService(form.service)

  return !errors.name && !errors.email && !errors.phone && !errors.service
}

const handleSubmit = async () => {
  if (!validateForm()) return

  isSubmitting.value = true

  // Sanitize all inputs before submission
  const sanitizedData = {
    name: sanitizeInput(form.name),
    email: sanitizeInput(form.email),
    phone: sanitizeInput(form.phone),
    service: sanitizeInput(form.service),
    message: sanitizeInput(form.message).slice(0, 1000)
  }

  // Simulate form submission
  await new Promise(resolve => setTimeout(resolve, 1500))

  console.log('Form submitted:', sanitizedData)

  isSubmitting.value = false
  isSubmitted.value = true

  // Reset form
  Object.keys(form).forEach(key => form[key] = '')

  // Reset success message after 5 seconds
  setTimeout(() => {
    isSubmitted.value = false
  }, 5000)
}
</script>

<template>
  <section class="contact section" id="contact">
    <div class="container">
      <SectionHeader
        subtitle="Contato"
        title="Entre em"
        highlight="Contato"
        description="Estamos aqui para esclarecer suas dúvidas e agendar sua consulta."
      />

      <div class="contact__grid">
        <div class="contact__info" data-animate="fade-right">
          <InfoCard
            v-for="info in contactInfo"
            :key="info.title"
            :icon="info.icon"
            :title="info.title"
            :content="info.content"
          />

          <SocialLinks :links="socialLinks" class="contact__social" />
        </div>

        <form class="contact__form" data-animate="fade-left" @submit.prevent="handleSubmit" novalidate>
          <Transition name="fade">
            <div v-if="isSubmitted" class="form__success">
              <span class="form__success-icon">✓</span>
              <p>Mensagem enviada com sucesso! Entraremos em contato em breve.</p>
            </div>
          </Transition>

          <BaseInput
            v-model="form.name"
            label="Nome Completo"
            placeholder="Seu nome completo"
            :error="errors.name"
            required
            autocomplete="name"
            @blur="validateField('name')"
          />

          <BaseInput
            v-model="form.email"
            type="email"
            label="E-mail"
            placeholder="seu@email.com"
            :error="errors.email"
            required
            autocomplete="email"
            @blur="validateField('email')"
          />

          <BaseInput
            v-model="form.phone"
            type="tel"
            label="Telefone"
            placeholder="(11) 99999-9999"
            :error="errors.phone"
            required
            autocomplete="tel"
            @blur="validateField('phone')"
            @input="formatPhone(form.phone)"
          />

          <BaseSelect
            v-model="form.service"
            label="Tratamento de Interesse"
            placeholder="Selecione um tratamento"
            :options="serviceOptions"
            :error="errors.service"
            required
            @change="validateField('service')"
          />

          <BaseTextarea
            v-model="form.message"
            label="Mensagem (opcional)"
            placeholder="Conte-nos mais sobre o que você procura..."
            :rows="4"
            :maxlength="1000"
          />

          <BaseButton
            type="submit"
            variant="primary"
            full-width
            :loading="isSubmitting"
            :disabled="isSubmitting"
            icon="→"
          >
            Enviar Mensagem
          </BaseButton>

          <p class="form__disclaimer">
            Ao enviar, você concorda com nossa política de privacidade.
          </p>
        </form>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact {
  background: var(--color-bg-alt);
}

.contact__grid {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 4rem;
}

.contact__info {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.contact__social {
  margin-top: 1rem;
}

.contact__form {
  background: white;
  padding: 2.5rem;
  border-radius: 24px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
}

.form__success {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 1.5rem;
  background: linear-gradient(135deg, #d4edda 0%, #c3e6cb 100%);
  border-radius: 12px;
  margin-bottom: 1.5rem;
}

.form__success-icon {
  width: 32px;
  height: 32px;
  background: #28a745;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
}

.form__success p {
  font-size: 0.95rem;
  color: #155724;
}

.form__disclaimer {
  font-size: 0.8rem;
  color: var(--color-text);
  text-align: center;
  margin-top: 1rem;
}

/* Transitions */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@media (max-width: 968px) {
  .contact__grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .contact__form {
    padding: 2rem;
  }
}

@media (max-width: 480px) {
  .contact__form {
    padding: 1.5rem;
  }
}
</style>
