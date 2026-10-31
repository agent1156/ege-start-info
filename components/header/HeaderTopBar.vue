<template>
  <div class="top-bar">
    <div class="container top-bar__inner">
      <div class="top-bar__promo">
        <span class="italic">ИНФОРМАТИКА НА 90+</span> С
        <span class="badge-red">ВИТАЛИЕМ ТЕЧИЕВЫМ</span>
      </div>
      <div class="top-bar__right">
        <img src="/images/teacher-small.png" alt="Виталий Течиев" class="top-bar__teacher" />
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

.btn-red {
  background: $color-red;
  color: #fff;
  padding: 10px 28px;
  border-radius: 20px;
  font-weight: 700;
  font-size: 14px;
  transition: 0.3s;

  &:hover { background: darken($color-red, 10%); }
}

.top-bar__inner {
  display: flex;
  justify-content: space-between;
  align-items: center;

  /* АДАПТИВ */
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
    text-align: center;
  }
}

.top-bar__promo {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 16px;
  font-weight: 700;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 5px;
    font-size: 14px;
  }
}
</style>