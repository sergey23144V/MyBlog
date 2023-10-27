
<template>
  <div class="p-0 mx-auto w-auto px-0  text-center">
    <div class="grid  mx-auto  grid-cols-1 w-auto gap-6">
      <label class="block ">
        <h2 class="text-2xl font-bold"><span data-index="12-0" data-translated="true" data-source-lang="en" data-target-lang="ru" data-value="Underline" data-translation="Подчеркивание" data-ch="0" data-type="trSpan">Строка ввода</span></h2>
        <span class="text-gray-700"><span data-index="14-0" data-translated="true" data-source-lang="en" data-target-lang="ru" data-value="Full name" data-translation="Полное имя" data-ch="0" data-type="trSpan" data-selected="false">Вставте изображение</span></span>
        <input type="file" id="imageInput" @change="handleImageChange" class=" m-auto mt-5 block file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100 " accept="image/*">
      </label>
      <label class="block ">
        <span class="text-gray-700"><span data-index="14-0" data-translated="true" data-source-lang="en" data-target-lang="ru" data-value="title" data-translation="Заголовок" data-ch="0" data-type="trSpan" data-selected="false">Заголовок</span></span>
        <input type="text"  v-model="post.title" class="mt-0 mx-auto block w-2/3 px-0.5 h-10 border-0 border-b-2 border-gray-200 focus:ring-0 outline-none text-center" placeholder="Введите заголовок статьи">
      </label>
      <label class="block ">
        <span class="text-gray-700"><span data-index="14-0" data-translated="true" data-source-lang="en" data-target-lang="ru" data-value="Subtitle" data-translation="Подзаголовок" data-ch="0" data-type="trSpan" data-selected="false">Подзаголовок</span></span>
        <input type="text"  v-model="post.subtitle" class="mt-0 mx-auto block w-2/3 px-0.5 h-10 border-0 border-b-2 border-gray-200 focus:ring-0 outline-none text-center" placeholder="Введите подзаголовок статьи">
      </label>
      <label class="block ">
        <span class="text-gray-700"><span data-index="14-0" data-translated="true" data-source-lang="en" data-target-lang="ru" data-value="Subtitle" data-translation="Подзаголовок" data-ch="0" data-type="trSpan" data-selected="false">Дата</span></span>
        <input type="text" :value="post.createAt" id="createAt" class="mt-0 mx-auto block w-2/3 px-0.5 h-10 border-0 border-b-2 border-gray-200 focus:ring-0 outline-none text-center" placeholder="Введите подзаголовок статьи" readonly >
      </label>
      <label class="block ">
        <span class="text-gray-700"><span data-index="14-0" data-translated="true" data-source-lang="en" data-target-lang="ru" data-value="Subtitle" data-translation="Подзаголовок" data-ch="0" data-type="trSpan" data-selected="false">Опубликовать в общий досткп</span></span>
        <input type="checkbox" class="ms-5" id="checkbox" v-model="post.public" />

      </label>
      <label class="block ">
        <span class="text-gray-700"><span data-index="14-0" data-translated="true" data-source-lang="en" data-target-lang="ru" data-value="subject" data-translation="Тема" data-ch="0" data-type="trSpan" data-selected="false">Выберете тему</span></span>
        <div class="m-auto w-80">
          <my-combobox class="m-auto" @selectedItem="handleSelectedItem"></my-combobox>
        </div>

      </label>
   <div  class="mt-5 my-20" >
     <span class="text-gray-700 my-2"><span data-index="14-0" data-translated="true" data-source-lang="en" data-target-lang="ru" data-value="Full name" data-translation="Полное имя" data-ch="0" data-type="trSpan" data-selected="false">Описание</span></span>
     <quill-editor id="editor" theme="snow"  :options="editorOption" :toolbar="toolbarOptions"/>
        <button @click="Save" class="block  h-10 max-w-1/3 px-4 my-4 m-auto font-semi-bold text-sm bg-fuchsia-600 text-white rounded-md shadow-sm hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 ease-in-out delay-150 duration-300, border-0">
          Сохранить пост
        </button>
      </div>
    </div>
  </div>
</template>

<script >


import {Quill, QuillEditor} from "@vueup/vue-quill";
import '@vueup/vue-quill/dist/vue-quill.snow.css';
import axios from "axios";
import MyCombobox from "@/componens/MyCombobox.vue";



export default {
  computed: {

  },
  components:{
    MyCombobox,
    QuillEditor,

  },
  data(){
    return{
      toolbarOptions:[
        ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
        ['blockquote', 'code-block'],

        [{ 'header': 1 }, { 'header': 2 }],               // custom button values
        [{ 'list': 'ordered'}, { 'list': 'bullet' }],
        [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
        [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
        [{ 'direction': 'rtl' }],                         // text direction

        [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
        [{ 'header': [ 3, 4, 5, 6, false] }],

        [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
        [{ 'font': [] }],
        ['image'],
        [{ 'align': [] }],

        ['clean']                                         // remove formatting button
      ],
      editorOption: {
        modules: {
          toolbar: {
            container: this.toolbarOptions, // Панель инструментов
            imageResize: {// Добавить
              displayStyles: {// Добавить
                backgroundColor: 'black',
                border: 'none',
                color: 'white'
              },
              modules: ['Resize', 'DisplaySize', 'Toolbar'] // Добавить
            },
            }
          },
      },

      checked: null,
      post: {
        title: "",
        subtitle:"",
        imeg: null,
        description: "",
        public: false,
        createAt: "",
        selectedItemId:""
      },
      selectedItem: {},
      currentDate: new Date(),
    }
  },

  methods:{
    async Save(){
      // try {
      const quill = new Quill("#editor", {
        // настройки Quill
      });

      this.post.description = quill.root.innerHTML;
      console.log(this.post.description)

        if (this.post.title.trim() === '' || this.post.subtitle.trim() === '') {
          alert('Пожалуйста, заполните все поля.');
          }
        else {
        const formData = new FormData();
        this.post.selectedItemId = this.selectedItem.id
        formData.append("title", this.post.title);
        formData.append("subtitle", this.post.subtitle);
        formData.append("createAt", this.post.createAt);
        formData.append("content", this.post.description);
        formData.append("public", this.post.public);
        formData.append("image", this.post.imeg);
        formData.append("theme", this.post.selectedItemId);

        const response = await axios.post("http://localhost:8000/articles/", formData)
        console.log(response)
        }
      // }catch (e){
      //   alert("Не получилось")
      // }
    },
    formattedDate() {
      const day = this.currentDate.getDate();
      const month = this.currentDate.getMonth() + 1; // Месяцы начинаются с 0, поэтому добавляем 1
      const year = this.currentDate.getFullYear();

      return `${day}.${month}.${year}`;
    },
    handleSelectedItem(item) {
      this.selectedItem = item;
      console.log(this.selectedItem)
      const editoe = document.getElementById("editor")
      editoe.style.backgroundColor = this.selectedItem.color
    },
    handleImageChange(event) {
      const file = event.target.files[0];
      if (file) {
        // Здесь вы можете обработать выбранный файл (например, загрузить его на сервер или выполнить другие действия)
        this.post.imeg = file; // Устанавливаем выбранный файл в свойство imeg
      }
    },
    getEditorContent() {
      const editor = this.$refs.editor;
      if (editor) {
        this.post.description = editor.root.innerHTML; // Получить содержимое Quill-редактора
      }
    },
  },
  mounted() {
    this.post.createAt =  this.formattedDate()
  }
}

</script>


<style scoped>

</style>