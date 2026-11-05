<template>
  <section class="hero-banner-section">
    <div class="container">
         <a href="#materials" class="hero-link">
            <NuxtImg
                src="/images/hero-banner.jpg"
                alt="Полезные материалы для учителей по информатике"
                class="hero-image"
                format="webp"
                loading="lazy"
                link="#"
            />
        </a>
    </div>
  </section>
</template>

<script setup>
// Компонент не требует логики, только отображение картинки
</script>

<style scoped lang="scss">
.hero-banner-section {
  width: 100%;
  padding: 2rem 0;
 
  display: flex;
  justify-content: center;
}



.hero-image {
  width: 100%;
  height: auto;
  display: block; /* Убирает лишние отступы снизу у inline-элементов */
  border-radius: 20px; /* Скругление углов, если нужно */
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1); /* Легкая тень для объема */
  object-fit: cover;

  /* Адаптивность для мобильных */
  @media (max-width: 768px) {
    border-radius: 12px;
  }
}
</style>