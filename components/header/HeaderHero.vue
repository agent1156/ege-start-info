<template>
  <div class="top-bar">
    <div class="container">
      <!-- Контейнер для картинки и кнопки -->
      <div class="top-bar__image-wrapper">
        <!-- Ваша картинка -->
        <img 
          src="/images/top-bar-bg.jpg" 
          alt="Информатика на 90+ с Виталием Течиевым" 
          class="top-bar__bg-img" 
        />
        
        <!-- Кнопка поверх картинки -->
        <button class="btn-red top-bar__button">Записаться</button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '~/assets/styles/variables';

.top-bar {
  background: #fff;
  border-bottom: 1px solid #eee;
  padding: 10px 0; 
}

/* Если у вас нет глобального класса .container, добавьте его */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
}

.top-bar__image-wrapper {
  position: relative; /* Точка отсчета для кнопки */
  width: 100%;
  display: flex;
  justify-content: center;
  overflow: hidden; 
  border-radius: 8px; 
}

.top-bar__bg-img {
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
}

/* ===== КНОПКА ПОВЕРХ КАРТИНКИ ===== */
.top-bar__button {
    position: absolute;
    top: 90%;
    text-align: center;
    /* right: 50%; */
    z-index: 10;
    width: 90%;
    height: 3pc;

}

.btn-red {
    background: #4F66AE;
    color: #fff;
    padding: 10px 24px;
    border-radius: 13px;
    font-weight: 600;
    font-size: 18px;
    transition: all 0.2s ease;
    box-shadow: 0 2px 8px rgba(211, 47, 47, 0.25);
    cursor: pointer;
    border: none;
    outline: none;
    text-transform: uppercase;
    transition: 0.3s;

  &:hover {
    opacity: 0.9;
    box-shadow: 0 4px 12px rgba(211, 47, 47, 0.4);
    transform: translateY(-2px); /* Убрали translateY(-50%), так как кнопка больше не центрируется */
  }
  
  &:focus {
    outline: none;
  }
}

/* Адаптивность для мобильных */
@media (max-width: 768px) {
  .top-bar__button {
    top: 30%;
    right: 5%;
  }
  
  .btn-red {
    padding: 8px 16px;
    font-size: 12px;
  }
}

@media (max-width: 480px) {
  .btn-red {
    padding: 6px 12px;
    font-size: 10px;
  }
}
</style>