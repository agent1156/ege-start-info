<template>
  <div class="hero">
    <div class="container">
      <div class="hero__box">
        <div class="hero__content">
          <div class="hero__subtitle">
            <span class="icon-ege">ЕГЭ</span> по информатике
          </div>

          <h1 class="hero__title">
            Подготовка к ЕГЭ<br />
            на <span class="title-bg-blue">90+</span><br />
            и к ОГЭ на <span class="title-bg-light">5 баллов</span><br />
            <span class="title-sub">с любого уровня.</span>
          </h1>

          <div class="hero__feature">
            <div class="cloud-icon">
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
                <path d="M19 9.5C19 9.5 18.5 5 13.5 5C9.5 5 8 8.5 8 8.5C8 8.5 6.5 8 5 8C2.5 8 1 10 1 12.5C1 15 3 17 5 17H19C21 17 23 15 23 12.5C23 10.5 21 9.5 19 9.5Z" fill="white" />
              </svg>
            </div>
            <p>Онлайн-платформа,<br />которая готова на всё<br />ради твоей подготовки</p>
          </div>

          <button class="btn-hero">Записаться на подготовку</button>
        </div>

        <div class="hero__image">
          <img src="/images/teacher-main.png" alt="Виталий Течиев" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '~/assets/styles/variables';

.hero {
  background: #fff;
  padding-bottom: 40px;

  &__box {
    background: linear-gradient(90deg, $color-light-blue 50%, $color-blue 50%);
    border-radius: 20px;
    padding: 40px 60px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    overflow: hidden;
    min-height: 520px;

    /* Планшеты и мобильные */
    @media (max-width: 992px) {
      flex-direction: column;
      /* Меняем градиент на вертикальный */
      background: linear-gradient(180deg, $color-light-blue 40%, $color-blue 100%);
      padding: 40px 20px 0 20px; 
      min-height: auto;
    }
  }

  &__content {
    max-width: 650px;
    position: relative;
    z-index: 2;

    /* Планшеты и мобильные */
    @media (max-width: 992px) {
      max-width: 100%;
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }

  &__subtitle {
    display: flex;
    align-items: center;
    gap: 12px;
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 25px;

    @media (max-width: 992px) {
      justify-content: center;
      font-size: 16px;
    }

    &::after {
      content: '';
      display: block;
      width: 60px;
      height: 3px;
      background: $color-blue;
      margin-left: 10px;

      @media (max-width: 992px) {
        display: none;
      }
    }
  }

  &__title {
    font-size: 64px;
    line-height: 1.1;
    font-weight: 900;
    margin-bottom: 30px;
    letter-spacing: -1px;
    word-wrap: break-word; /* Разрешаем перенос длинных слов */
    overflow-wrap: break-word;

    /* Планшеты */
    @media (max-width: 992px) {
      font-size: 40px;
      line-height: 1.2;
    }
    /* Мобильные */
    @media (max-width: 480px) {
      font-size: 28px; /* Радикально уменьшаем на телефонах */
    }
  }

  &__feature {
    display: flex;
    align-items: center;
    gap: 15px;
    margin-bottom: 40px;

    @media (max-width: 992px) {
      margin-bottom: 30px;
    }

    p {
      font-size: 16px;
      font-weight: 500;
      line-height: 1.4;
      color: #444;

      @media (max-width: 480px) {
        font-size: 14px;
      }
    }
  }

  &__image {
    position: absolute;
    right: 0;
    bottom: 0;
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    z-index: 1;

    img {
      max-height: 100%;
      object-fit: contain;
    }

    @media (max-width: 992px) {
      position: relative; 
      width: 100%;
      height: auto;
      margin-top: 20px;
      justify-content: center;

      img {
        max-height: 300px; 
      }
    }
  }
}

.icon-ege {
  background: $color-blue;
  color: #fff;
  padding: 4px 10px;
  border-radius: 6px;
  font-weight: 800;
  font-size: 14px;
}

.title-bg-blue {
  background: $color-blue;
  color: #fff;
  padding: 0 12px;
  border-radius: 12px;
  display: inline-block;
  transform: rotate(-2deg);
  margin: 5px 0;

  @media (max-width: 992px) {
    transform: none; /* Убираем наклон на планшетах и телефонах */
  }
}

.title-bg-light {
  background: #7cb0ff;
  color: $color-blue;
  padding: 0 12px;
  border-radius: 12px;
  display: inline-block;
  transform: rotate(1deg);
  margin: 5px 0;

  @media (max-width: 992px) {
    transform: none; /* Убираем наклон на планшетах и телефонах */
  }
}

.title-sub {
  font-size: 28px;
  font-weight: 600;
  display: block;
  margin-top: 15px;
  color: #333;

  @media (max-width: 992px) {
    font-size: 22px;
  }
  @media (max-width: 480px) {
    font-size: 18px;
  }
}

.cloud-icon {
  width: 50px;
  height: 50px;
  background: $color-blue;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  svg {
    width: 24px;
    height: 24px;
  }
}

.btn-hero {
  background-color: #5c73db;
  border: none; 
  color: #ffffff;
  width: 100%;
  max-width: 500px;
  padding: 18px 30px;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-family: $font-heading;
  transition: all 0.3s ease;
  cursor: pointer;
  box-shadow: 0 4px 15px rgba(92, 115, 219, 0.3);

  &:hover {
    background-color: #4a5fc1;
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(92, 115, 219, 0.5);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 4px 10px rgba(92, 115, 219, 0.3);
  }

  @media (max-width: 480px) {
    font-size: 13px;
    padding: 15px 20px;
    letter-spacing: 0; /* Убираем разрядку на узких экранах */
  }
}
</style>