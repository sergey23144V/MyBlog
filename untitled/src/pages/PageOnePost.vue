<template>
  <div id="bodyItem" class=" isolate w-auto rounded-3xl mx-auto shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] ">
    <div  class="mx-auto px-6 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
      <div class="-mt-1 p-12 lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 ">
        <img id="img" class=" rounded-xl bg-gray-900 shadow-xl" src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=666&q=80"  alt="" />
      </div>
      <div  class="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8" >
        <div class="lg:pr-4">
          <div class="lg:max-w-lg">
            <p  class="text-base font-semibold leading-7 mt-5">Статья</p>
            <h1 class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{{ this.postItem.title }}</h1>
            <p class="mt-6 text-xl leading-8 text-gray-700">{{ this.postItem.subtitle }}</p>
          </div>
        </div>
      </div>

    </div>
    <div class="m-auto text-base leading-7 text-gray-700 px-10" v-html="postItem.content">

    </div>
  </div>
</template>

<script>
import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/vue/20/solid'
import axios from "axios"
export default {
  data(){
    return{
      postItem: {
        title: "",
        subtitle:"",
        imgFile: {
          Path: ""
        },
        content: "",
        public: false,
        createAt: "",
        selectedItemId:""
      },
    }
  },
  methods:{
    async GetPostById(){
      try {
        const  response = await axios.get(`http://localhost:8000/articles/${this.$route.params.id}`)
        this.postItem = response.data
        const element = document.getElementById("img");
        const bodyItem = document.getElementById("bodyItem");
        bodyItem.style.backgroundColor = this.postItem.theme.color

        const imageUrl = `http://localhost:8000` + this.postItem.imgFile.Path;
        const image = new Image();

        element.src = `${imageUrl}`;
        image.src = imageUrl;

        image.onload = () => {
          // Установить backgroundImage, если изображение загружено успешно
          if (element) {
            element.src = `${imageUrl}`;
          }
        };

        image.onerror = () => {
          // Обработать ошибку 404 (Not Found)
          console.error(`Ошибка загрузки изображения по URL: ${imageUrl}`);
          if (element) {
            // Установить фоновое изображение по умолчанию в случае ошибки
            element.src = `https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=666&q=80`;
          }
        }
        console.log(this.postItem)
      }catch (e){
        alert("Не получилось")
      }
    },

  },

  mounted() {
    this.GetPostById()

  }
}

</script>


<style>

.img-with-text {
  float: left; /* Выравнивание изображения слева */
  margin-right: 20px; /* Расстояние между изображением и текстом */
  shape-outside: circle(50%); /* Форма вокруг изображения (здесь используется круглая форма) */
  width: 200px; /* Ширина изображения */
  height: 200px; /* Высота изображения */
}
</style>