<template>
  <section class="start-path-section">
    <NuxtLink to="/ege" class="start-path-link">
      <img 
        src="/images/start-path-banner.png" 
        alt="Начни свой путь уже сегодня - Репетитор по информатике ЕГЭ" 
        class="start-path-image"
      />
    </NuxtLink>
  </section>
</template>

<style scoped lang="scss">
.start-path-section {
  width: 100%;
  height: 100vh; /* Блок на всю высоту экрана */
  background-color: #ffffff;
  overflow: hidden;
  position: relative;
}

.start-path-link {
  display: block;
  width: 100%;
  height: 100%;
  text-decoration: none;
  position: relative;

  &:hover .start-path-image {
    transform: scale(1.02); /* Легкий эффект при наведении */
  }
}

.start-path-image {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: contain; /* Картинка вписывается целиком, не обрезаясь */
  object-position: center;
  transition: transform 0.5s ease;
}

/* ===== АДАПТИВНОСТЬ ===== */
@media (max-width: 768px) {
  .start-path-section {
    height: auto; /* На телефонах высота будет по размеру картинки */
    min-height: 50vh;
  }
  
  /* Если на телефоне картинка обрезается, можно использовать cover */
  .start-path-image {
    object-fit: cover; 
  }
}
</style>