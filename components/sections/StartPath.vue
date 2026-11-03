<template>
  <section class="start-path-section">
    <div class="container">
      <NuxtLink to="/ege" class="start-path-link">
        <img 
          src="/images/start-path-banner.png" 
          alt="Начни свой путь уже сегодня - Репетитор по информатике ЕГЭ" 
          class="start-path-image"
        />
      </NuxtLink>
    </div>
  </section>
</template>

<style scoped lang="scss">
.start-path-section {
  padding: 60px 0;
  background-color: #ffffff; 
}

.start-path-link {
  display: block;
  text-decoration: none;
  border-radius: 24px;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  }
}

.start-path-image {
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
  border-radius: 24px;
}

/* ===== АДАПТИВНОСТЬ ===== */
@media (max-width: 768px) {
  .start-path-section {
    padding: 30px 0;
  }
}
</style>