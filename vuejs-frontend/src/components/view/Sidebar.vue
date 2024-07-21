<template>
  <div class="sidebar fixed right-0 top-0 bg-white shadow-lg p- w-80 h-full overflow-y-auto">
    <button @click="$emit('close')" class="text-xl font-bold mb-4"><i style = "color: #4d94ff;" class="bi bi-x-square-fill"></i></button>
    <p class="font-semibold text-center">Node name: </p>
    <h2 class="text-2xl text-center border-b-2 mb-4 pb-2">{{ node.name }}</h2>
    <p class="font-semibold text-center p-5">Node description: </p>
    <p class="text-center">{{ node.description }}</p>
    <p class="font-semibold text-center p-5">Node parent: </p>
    <p class="text-center">{{ node.parent }}</p>
  </div>
</template>

<script setup>
const props = defineProps({
  node: Object,
});
</script>

<style scoped>
.sidebar {
  z-index: 10;
  transition: transform 0.3s ease;
  margin-top: 4rem;
}
</style>

  