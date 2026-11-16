<template>
  <div>
    <h1 class="visually-hidden">
      Подготовка к ЕГЭ по информатике: задания, теория и расписание
    </h1>
    <!-- Главный баннер -->
    <HeaderHero />
    
    <!-- Обучающие материалы -->
    <MaterialsSection />
    
    <!-- Начни свой путь -->
    <StartPath />
    
    <!-- Блок с картинкой/баннером -->
    <HeroBanner />
    
    <!-- Форма заявки -->
    <ContactForm />
    <ScheduleCalendar />
  </div>
</template>
<style scoped>
/* Класс, который скрывает текст от глаз, но оставляет его для поисковиков */
.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}
</style>
<script setup>
import HeaderHero from '~/components/header/HeaderHero.vue'
import MaterialsSection from '~/components/sections/MaterialsSection.vue' // Проверьте точное имя
import StartPath from '~/components/sections/StartPath.vue'
import HeroBanner from '~/components/sections/HeroBanner.vue' // Проверьте точное имя
import ContactForm from '~/components/sections/ContactForm.vue'
import ScheduleCalendar from '~/components/schedule/ScheduleCalendar.vue'
</script>