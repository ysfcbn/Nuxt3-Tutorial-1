<template>
  <div>
    <h1>Products</h1>
  </div>
  <div class="grid grid-cols-4 items-center gap-5">
    <div v-for="p in products" :key="p.id">
      <ProductCard :product="p" />
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'products',
});

// fetch the products
const { data: products } = await useFetch('https://fakestoreapi.com/products');

useHead({
    title: 'Nuxt Dojo | Merch',
    meta: [
      { name: 'description', content: 'Nuxt 3 Merch'}
    ]
  })
</script>

<style scoped></style>
