<script setup name="About">
import { onActivated, onDeactivated } from 'vue'
import { useCounterStore } from '../stores/counter'
const counter = useCounterStore()

onActivated(() => {
  console.log('About actived')
})

onDeactivated(() => {
  console.log('About deactived')
})
</script>
<template>
  <div class="about">
    <van-button type="primary" @click="counter.increment">{{ counter.count }}</van-button>
    <p>{{ counter.doubleCount }}</p>
  </div>
</template>

<style>
@media (width >= 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
