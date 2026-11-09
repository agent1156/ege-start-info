<template>
  <div>
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

<script setup>
import HeaderHero from '~/components/header/HeaderHero.vue'
import MaterialsSection from '~/components/sections/MaterialsSection.vue' // Проверьте точное имя
import StartPath from '~/components/sections/StartPath.vue'
import HeroBanner from '~/components/sections/HeroBanner.vue' // Проверьте точное имя
import ContactForm from '~/components/sections/ContactForm.vue'
import ScheduleCalendar from '~/components/schedule/ScheduleCalendar.vue'
</script>