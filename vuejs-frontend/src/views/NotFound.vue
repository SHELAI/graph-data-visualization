<template>
    <div class="not-found bg-gray-100 min-h-screen flex items-center justify-center flex-col">
      <div class="text-center mb-4">
        <h1 class="text-4xl font-bold">404</h1>
        <p class="text-lg">Oops! The page you're looking for cannot be found.</p>
      </div>
      <button @click="goHome" class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        Go Home
      </button>
    </div>
  </template>
  
  <script setup>
  import { useRouter } from 'vue-router';
  
  const router = useRouter();
  
  const goHome = () => {
    router.push('/');
  };
  </script>
  
  <style scoped>
  .not-found {
    max-width: 600px;
    margin: auto;
  }
  </style>
  