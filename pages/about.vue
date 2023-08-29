<template>
  <div>
    <h2 class="bg-cyan-400 p-5">About Page</h2>
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente,
      quaerat tempora in accusamus error explicabo! Nostrum similique voluptates
      dignissimos, nemo magni explicabo!
    </p>
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente,
      quaerat tempora in accusamus error explicabo! Nostrum similique voluptates
      dignissimos, nemo magni explicabo!
    </p>
    <!-- 
      <div class="text-green-500">{{ data.currency }}</div>
    <div class="text-blue-500">{{ data.name }}</div> 
    <div class="text-red-500">{{ data.body.status }}</div>
  -->
  <div class="text-green-500">{{ data}}</div>

  </div>
</template>

<script setup>
//const { data } = await useFetch('/api/ninja');
/*const { data } = await useFetch('/api/ninja?name=yusuf', {
  method: 'post',
  body: { status: 'deneme!' },
}); */
const { data } = await useFetch('/api/currency/CHF');

</script>

<style scoped>
h2 {
  margin-bottom: 20px;
  font-size: 36px;
}
p {
  margin: 20px 0px;
}
</style>
