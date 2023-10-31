import { createApp } from 'vue';
import Antd from 'ant-design-vue';
import App from './App.vue';
import 'ant-design-vue/dist/reset.css';
import router from "@/router/router";
import {QuillEditor} from "@vueup/vue-quill";


const app = createApp(App);

App.config.maxHandlers = 15;

app
    // .component("ImageResize", ImageResize)
    .component('QuillEditor', QuillEditor)
    .use(router)
    .use(Antd)
    .mount('#app');


