<template>
  <div>
    <Head>
      <Title>Nuxt Dojo | {{ product.title }}</Title>
      <Meta name="description" :content="product.description" />
    </Head>
    <ProductDetails :product="product" />
  </div>
</template>

<script setup>
const { id } = useRoute().params;
definePageMeta({
  layout: 'products',
});

const uri = 'https://fakestoreapi.com/products/' + id;

const { data: product } = await useFetch(uri, { key: id });
console.log(product);

if (!product.value) {
  throw createError({
    statusCode: 404,
    statusMessage: `This '${id}' Product not found`,
    fatal: true,
  });
}
</script>

<style scoped></style>
