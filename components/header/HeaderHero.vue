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
  }

  &__content {
    max-width: 650px;
    position: relative;
    z-index: 2;
  }

  &__subtitle {
    display: flex;
    align-items: center;
    gap: 12px;
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 25px;

    &::after {
      content: '';
      display: block;
      width: 60px;
      height: 3px;
      background: $color-blue;
      margin-left: 10px;
    }
  }

  &__title {
    font-size: 64px;
    line-height: 1.05;
    font-weight: 900;
    margin-bottom: 30px;
    letter-spacing: -1px;
  }

  &__feature {
    display: flex;
    align-items: center;
    gap: 20px;
    margin-bottom: 40px;

    p {
      font-size: 16px;
      font-weight: 500;
      line-height: 1.4;
      color: #444;
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
  padding: 0 16px;
  border-radius: 12px;
  display: inline-block;
  transform: rotate(-2deg);
  margin: 5px 0;
}

.title-bg-light {
  background: #7cb0ff;
  color: $color-blue;
  padding: 0 16px;
  border-radius: 12px;
  display: inline-block;
  transform: rotate(1deg);
  margin: 5px 0;
}

.title-sub {
  font-size: 28px;
  font-weight: 600;
  display: block;
  margin-top: 15px;
  color: #333;
}

.cloud-icon {
  width: 60px;
  height: 60px;
  background: $color-blue;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.btn-hero {
  background: #6c83c7;
  color: #fff;
  width: 100%;
  max-width: 500px;
  padding: 18px 30px;
  border-radius: 40px;
  font-size: 16px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: 0.3s;

  &:hover { background: darken(#6c83c7, 10%); }
}
</style>