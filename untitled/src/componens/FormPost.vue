

<template>
  <div :id="this.post.id" class="w-80 mx-auto mt-10 h-80 overflow-y-scroll scrollbar:!w-1.5 scrollbar:!h-1.5 scrollbar-track:!bg-slate-100 scrollbar-thumb:!rounded scrollbar-thumb:!bg-slate-300 bg-cover shadow-lg" style="background-image:url('https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=666&q=80'); background-position: center -80px;">
    <div class="mt-56"></div>
    <router-link :to="'/post/' + post.id "> <div class="bg-white p-4 sm:p-8 rounded-t-3xl">
      <div class="mb-3">
        <strong class="font-serif" >{{ post.title }} <br></strong>
      </div>
      <span class="font-serif">{{ post.subtitle }}</span>
      <div class=" m-auto">
        <button class="block w-auto px-4 my-4 mx-auto py-2 font-semibold text-sm bg-fuchsia-600 text-white rounded-md shadow-sm hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 ease-in-out delay-150 duration-300, border-0"> Delete </button>
    </div>
    </div>
    </router-link>
  </div>
</template>

<script>


export default {
  props: {
    post:{
      type:Object,
      required:true
    }
  },
  methods:{
    Imeg(){
      const element = document.getElementById(this.post.id);
      const imageUrl = `http://localhost:8000${this.post.imgFile.Path}`;

      const image = new Image();
      image.src = imageUrl;

      image.onload = () => {
        // Установить backgroundImage, если изображение загружено успешно
        if (element) {
          element.style.backgroundImage = `url(${imageUrl})`;
        }
      };

      image.onerror = () => {
        // Обработать ошибку 404 (Not Found)
        console.error(`Ошибка загрузки изображения по URL: ${imageUrl}`);
        if (element) {
          // Установить фоновое изображение по умолчанию в случае ошибки
          element.style.backgroundImage = `url(https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=666&q=80)`;
        }
    }
    }
  },
  data() {
    return {
      uniqueId: 0
    };
  },
  created() {
    this.uniqueId++; // Инкрементируем uniqueId после создания компонента
  },
  mounted() {
    this.Imeg();
  }
}

</script>

<style scoped>

</style>