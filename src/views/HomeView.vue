<script setup name="Home">
import { onActivated, onDeactivated } from 'vue'
import TheWelcome from '../components/TheWelcome.vue'

onActivated(() => {
  console.log('Home actived')
})

onDeactivated(() => {
  console.log('home deactived')
})
</script>

<template>
  <main>
    <TheWelcome />
  </main>
</template>
