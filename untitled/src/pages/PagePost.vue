<template>
  <FormList :posts="posts" ></FormList>
</template>

<script >
import axios from "axios";
import "@/stayl.css"
import FormList from "@/componens/FormList.vue"

export default {
  components:{
    FormList,
  },
  data() {
    return {
      posts : [],
    }
  },
  methods: {
    Seve(post){
      this.posts.push(post)
    },
    async GetPost(){
      try {
        const  response = await axios.get("http://localhost:8000/articles/")
        this.posts = response.data
      }catch (e){
        alert("Не получилось")
      }
    }
  },
  mounted() {
    // Вызываем метод preloadImage при монтировании компонента
    this.GetPost();
  }
}




</script>