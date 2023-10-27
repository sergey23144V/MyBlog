

<template>
  <div class="bg-white py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl lg:mx-0">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Публичные статьи</h2>
        <p class="mt-2 text-lg leading-8 text-gray-600">Здесь расположены все ваши публичьные статьи</p>
      </div>
      <div class=" grid  grid-cols-1 border-t  pt-10 m-2 lg:grid-cols-3">
          <form-post  v-for="post in posts"  :post="post"/>
     </div>
    </div>
  </div>
</template>

<script>
import FormPost from "@/componens/FormPost.vue";
export default {
  components: {FormPost},

  props: {
        posts: {
          type:Array,
          require: true
        }
      }


}
</script>

<style scoped>

</style>