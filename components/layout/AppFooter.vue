
<template>
  <footer class="footer">
    <div class="container">
      
      <!-- Основная сетка -->
      <div class="footer__grid">
        
        <!-- Колонка 1: Соцсети -->
        <div class="footer__col">
          <h4 class="footer__title">Соцсети</h4>
          <div class="social-links">
            <a href="https://youtube.com" target="_blank" rel="noopener" class="social-link">
              <svg class="icon-youtube" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              YouTube
            </a>
            <a href="https://vk.com" target="_blank" rel="noopener" class="social-link">
              <svg class="icon-vk" viewBox="0 0 24 24"><path d="M12.785 17.333c-6.003 0-9.428-4.114-9.571-10.953h3.009c.099 5.017 2.309 7.144 4.062 7.581V6.38h2.834v4.326c1.73-.186 3.546-2.155 4.158-4.326h2.834c-.47 2.673-2.438 4.642-3.842 5.452 1.404.655 3.652 2.369 4.514 5.502h-3.114c-.671-2.078-2.338-3.686-4.55-3.906v3.906h-.334z"/></svg>
              ВКонтакте
            </a>
            <a href="https://t.me" target="_blank" rel="noopener" class="social-link">
              <svg class="icon-telegram" viewBox="0 0 24 24"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
              Telegram
            </a>
          </div>
        </div>

        <!-- Колонка 2: Навигация -->
        <div class="footer__col">
          <h4 class="footer__title">Обучение</h4>
          <ul class="footer__list">
            <li><NuxtLink to="/ege" class="footer__link">Курсы ЕГЭ</NuxtLink></li>
            <li><NuxtLink to="/oge" class="footer__link">Курсы ОГЭ</NuxtLink></li>
            <li><NuxtLink to="/olympiads" class="footer__link">Олимпиады</NuxtLink></li>
            <li><NuxtLink to="/medcollege" class="footer__link">Медколледж</NuxtLink></li>
          </ul>
        </div>

        <!-- Колонка 3: Контакты -->
        <div class="footer__col">
          <h4 class="footer__title">Контакты</h4>
          <div class="footer__contacts">
            <p>Звоните с 10:00 до 20:00</p>
            <a href="tel:89194268920">8-(919)-426-89-20</a>
            <p>Пишите по любым вопросам</p>
            <a href="mailto:vitaliktechiew@yandex.ru">vitaliktechiew@yandex.ru</a>
          </div>
        </div>

      </div>

      <!-- Нижняя часть -->
      <div class="footer__bottom">
        <span>© 2026 ИнфоСтарт | Все права защищены</span>
        
        <button @click="scrollToTop" class="scroll-top" title="Наверх">
          <svg viewBox="0 0 24 24"><path d="M12 4l-8 8h6v8h4v-8h6z"/></svg>
        </button>
      </div>

    </div>
  </footer>
</template>

<script setup>
// Функция для плавного скролла наверх
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}
</script>

<style scoped lang="scss">
@import '~/assets/styles/variables';
/* Переменные ($color-blue, $font-heading) у вас уже должны работать глобально */

.footer {
  background-color: #2b2b2b;
  color: #ffffff;
  padding: 50px 0 20px;
  border-top: 4px solid $color-blue; /* Синяя полоска сверху */
  margin-top: 60px;

  &__grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1.2fr;
    gap: 40px;
    margin-bottom: 40px;
  }

  &__title {
    color: #eab308;
    font-size: 14px;
    font-weight: 700;
    margin-bottom: 20px;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    font-family: $font-heading;
  }

  &__list {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  &__link {
    color: #a0a0a0;
    text-decoration: none;
    font-size: 14px;
    transition: color 0.2s, transform 0.2s;
    display: inline-block;

    &:hover {
      color: #ffffff;
      transform: translateX(4px);
    }
  }

  &__contacts {
    display: flex;
    flex-direction: column;
    gap: 12px;
    font-size: 14px;
    color: #a0a0a0;

    a {
      color: #ffffff;
      text-decoration: none;
      font-weight: 600;
      font-size: 16px;
      transition: color 0.2s;

      &:hover {
        color: #eab308;
      }
    }
  }

  &__bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 20px;
    border-top: 1px solid #444;
    font-size: 13px;
    color: #777;
  }
}

/* Соцсети */
.social-links {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.social-link {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  color: #ffffff;
  text-decoration: none;
  font-size: 14px;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.7;
  }

  svg {
    width: 20px;
    height: 20px;
    fill: currentColor;
  }
}

.icon-youtube { color: #ff0000; }
.icon-vk { color: #0077ff; }
.icon-telegram { color: #0088cc; }

/* Кнопка "Наверх" */
.scroll-top {
  width: 40px;
  height: 40px;
  background-color: $color-blue;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.2s, transform 0.2s;
  border: none;

  &:hover {
    background-color: darken($color-blue, 10%);
    transform: translateY(-3px);
  }

  svg {
    width: 20px;
    height: 20px;
    fill: currentColor;
  }
}

/* ===== АДАПТИВНОСТЬ ===== */
@media (max-width: 900px) {
  .footer__grid {
    grid-template-columns: 1fr 1fr;
  }
  .footer__contacts {
    grid-column: span 2;
    flex-direction: row;
    gap: 30px;
  }
}

@media (max-width: 600px) {
  .footer {
    padding-top: 30px;
  }
  .footer__grid {
    grid-template-columns: 1fr;
    gap: 30px;
  }
  .footer__contacts {
    grid-column: span 1;
    flex-direction: column;
    gap: 10px;
  }
  .footer__bottom {
    flex-direction: column;
    gap: 20px;
    text-align: center;
  }
}
</style>