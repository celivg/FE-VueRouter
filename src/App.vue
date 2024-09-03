<script setup>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
import MediosPago from '@/components/MediosPago.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <Navbar />
  
  <RouterView />
  
  <medios-pago/>
  <Footer />
</template>
