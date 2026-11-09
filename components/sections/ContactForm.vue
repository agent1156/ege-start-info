<template>
  <section class="contact-form">
    <div class="container">
      
      <!-- Главный блок с фоновой картинкой -->
      <div class="contact-form__banner">
        
        <!-- Форма, которая "плавает" поверх белой области -->
        <div class="contact-form__box">
          
          <h2 class="contact-form__title">ОСТАВЬТЕ ЗАЯВКУ</h2>
          <p class="contact-form__subtitle">
            и получите бесплатную консультацию<br>по подготовке к ЕГЭ по информатике
          </p>

          <form @submit.prevent="submitForm" class="contact-form__form">
            
            <!-- Поле Имя -->
            <div class="input-group">
              <div class="input-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
              </div>
              <input type="text" v-model="form.name" placeholder="Ваше имя" required />
            </div>

            <!-- Поле Телефон -->
            <div class="input-group">
              <div class="input-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              </div>
              <input type="tel" v-model="form.phone" placeholder="Номер телефона" required />
            </div>

            <!-- Поле Email -->
            <div class="input-group">
              <div class="input-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              </div>
              <input type="email" v-model="form.email" placeholder="Email (необязательно)" />
            </div>

            <!-- Поле Вопрос -->
            <div class="input-group input-group--textarea">
              <div class="input-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
              </div>
              <textarea v-model="form.question" placeholder="Ваш вопрос" rows="2"></textarea>
            </div>

            <!-- Уведомление об успехе или ошибке -->
            <transition name="fade">
              <div v-if="statusMessage" :class="['status-message', statusType]">
                {{ statusMessage }}
              </div>
            </transition>

            <!-- Кнопка -->
            <button type="submit" class="contact-form__submit" :disabled="isLoading">
              {{ isLoading ? 'Отправка...' : 'Отправить заявку' }}
              <svg v-if="!isLoading" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </button>

            <!-- Политика конфиденциальности -->
            <div class="contact-form__privacy">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
              Ваши данные в безопасности
            </div>

          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const form = ref({
  name: '',
  phone: '',
  email: '',
  question: ''
})

const isLoading = ref(false)
const statusMessage = ref('')
const statusType = ref('') // 'success' или 'error'

const submitForm = async () => {
  isLoading.value = true
  statusMessage.value = ''
  
  try {
    // Отправляем POST-запрос на Django API
    await $fetch('http://127.0.0.1:8000/api/contact/', {
      method: 'POST',
      body: {
        name: form.value.name,
        phone: form.value.phone,
        email: form.value.email,
        message: form.value.question // В Django модель поле называется message
      }
    })
    
    // Если успешно
    statusType.value = 'success'
    statusMessage.value = 'Спасибо! Ваша заявка отправлена.'
    
    // Очищаем форму
    form.value = { name: '', phone: '', email: '', question: '' }
    
    // Скрываем сообщение через 5 секунд
    setTimeout(() => {
      statusMessage.value = ''
    }, 5000)
    
  } catch (error) {
    console.error('Ошибка отправки:', error)
    statusType.value = 'error'
    statusMessage.value = 'Произошла ошибка. Проверьте поля и попробуйте снова.'
  } finally {
    isLoading.value = false
  }
}
</script>

<style scoped lang="scss">
@import '~/assets/styles/variables';

/* ... ВАШИ СТИЛИ ОСТАЮТСЯ БЕЗ ИЗМЕНЕНИЙ ... */
/* (Я добавил только стили для .status-message и анимации ниже) */

.contact-form {
  padding: 40px 0;
  background: #fff;

  &__banner {
    position: relative;
    width: 100%;
    background-image: url('/images/form-bg.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 30px;
    min-height: 776px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 40px;
    overflow: hidden;

    @media (max-width: 992px) {
      flex-direction: column;
      justify-content: center;
      padding: 20px;
      min-height: auto;
      background-position: left center;
    }
  }

  &__box {
    background: #fff;
    width: 100%;
    max-width: 518px;
    padding: 40px;
    border-radius: 20px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);

    @media (max-width: 992px) {
      max-width: 100%;
      margin-top: 300px;
    }
    @media (max-width: 576px) {
      padding: 24px;
    }
  }

  &__title {
    font-family: $font-heading;
    font-size: 28px;
    font-weight: 800;
    color: #1a1a1a;
    margin-bottom: 10px;
    text-align: center;
  }

  &__subtitle {
    font-size: 14px;
    color: #666;
    line-height: 1.5;
    margin-bottom: 24px;
    text-align: center;
  }

  &__form {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  &__submit {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    background: #005bff;
    color: #fff;
    font-family: $font-heading;
    font-size: 16px;
    font-weight: 600;
    padding: 14px;
    border-radius: 10px;
    border: none;
    cursor: pointer;
    transition: background 0.3s;

    svg { width: 20px; height: 20px; }

    &:hover:not(:disabled) { background: #0047cc; }
    &:disabled { background: #ccc; cursor: not-allowed; }
  }

  &__privacy {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    font-size: 11px;
    color: #888;
    margin-top: 10px;
    svg { width: 12px; height: 12px; }
  }
}

/* Стили полей */
.input-group {
  position: relative;
  display: flex;
  align-items: center;
  background: #f8f9fa;
  border: 1px solid #e2e8f0;
  border-radius: 10px;
  transition: border-color 0.2s;

  &:focus-within {
    border-color: #005bff;
  }

  &--textarea {
    align-items: flex-start;
    .input-icon { padding-top: 14px; }
  }

  .input-icon {
    position: absolute;
    left: 16px;
    color: #999;
    display: flex;
    align-items: center;
    justify-content: center;

    svg { width: 20px; height: 20px; }
  }

  input, textarea {
    width: 100%;
    padding: 14px 14px 14px 48px;
    background: transparent;
    border: none;
    outline: none;
    font-family: $font-text;
    font-size: 14px;
    color: #333;

    &::placeholder { color: #aaa; }
  }

  textarea { resize: none; }
}

/* СТИЛИ ДЛЯ УВЕДОМЛЕНИЙ */
.status-message {
  padding: 10px;
  border-radius: 8px;
  font-family: $font-text;
  font-size: 13px;
  text-align: center;
  margin-top: 4px;

  &.success {
    background: #ecfdf5;
    color: #059669;
    border: 1px solid #a7f3d0;
  }

  &.error {
    background: #fef2f2;
    color: #dc2626;
    border: 1px solid #fecaca;
  }
}

/* Анимация появления */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>