<template>
  <div class="top-bar">
    <div class="container top-bar__inner">
      <div class="top-bar__promo">
        <span class="italic">ИНФОРМАТИКА НА 90+</span> С
        <span class="badge-red">ВИТАЛИЕМ ТЕЧИЕВЫМ</span>
      </div>
      <div class="top-bar__right">
        <!-- Если картинки нет, этот блок можно заменить на <div class="avatar-placeholder">ВТ</div> -->
        <img src="/images/teacher-small.png" alt="Виталий Течиев" class="top-bar__teacher" />
        
        <!-- Обновленная кнопка "Записаться" -->
        <button class="btn-red">Записаться</button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '~/assets/styles/variables';

.top-bar {
  background: #fff;
  padding: 12px 0;
  border-bottom: 1px solid #eee;

  &__inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__promo {
    display: flex;
    align-items: center;
    gap: 12px;
    font-size: 16px;
    font-weight: 700;

    .italic {
      color: $color-red;
      font-style: italic;
      font-size: 18px;
    }
  }

  &__right {
    display: flex;
    align-items: center;
    gap: 16px;
  }

  &__teacher {
    width: 45px;
    height: 45px;
    border-radius: 50%;
    object-fit: cover;
    background: #ccc;
    border: 1px solid #ddd; /* Добавили тонкую аккуратную рамку */
  }
}

.badge-red {
  background: $color-red;
  color: #fff;
  padding: 6px 16px;
  border-radius: 4px;
  font-size: 13px;
  font-weight: 800;
  letter-spacing: 0.5px;
}

/* ===== ОБНОВЛЕННАЯ КНОПКА ===== */
.btn-red {
  background: #d32f2f;
  color: #fff;
  padding: 10px 24px;
  border-radius: 25px;
  font-weight: 600;
  font-size: 14px;
  transition: all 0.2s ease;
  box-shadow: 0 2px 8px rgba(211, 47, 47, 0.25);
  cursor: pointer;
  
  /* УБИРАЕМ ОБВОДКУ */
  border: none;
  outline: none;

  &:hover {
    background: #b71c1c;
    box-shadow: 0 4px 12px rgba(211, 47, 47, 0.4);
    transform: translateY(-1px);
  }
  
  /* Убираем обводку при клике */
  &:focus {
    outline: none;
  }
}
</style>