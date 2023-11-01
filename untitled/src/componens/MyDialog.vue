<template>
  <div class="container mx-auto">
    <div class="flex justify-center">
      <div
          v-show="show"
          class="
          absolute
          inset-0
          flex
          items-center
          justify-center
          bg-gray-700 bg-opacity-50
        "
      >
        <div class="max-w-2xl p-6 mx-4 bg-white rounded-md shadow-xl">
          <div class="flex items-center justify-between">
            <h3 class="text-2xl">Запись создана</h3>
            <svg
                @click="show = false"
                xmlns="http://www.w3.org/2000/svg"
                class="w-8 h-8 text-red-900 cursor-pointer"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
              <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <div class="mt-4">
            <p class="mb-4 text-sm">
              Сгенерированная ссылка: <a v-bind:href="url" id="generatedLink">{{url}}</a>
            </p>
            <img  width="512" height="512" v-bind:src="qrcode" src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=666&q=80" alt="QR Code" id="QRCode" class="mb-5 mx-auto">
            <a v-bind:href="url" id="generatedLink">
            <button
                class="px-6 py-2 text-blue-800 border border-blue-600 rounded"
            >

              К Статье
            </button>
            </a>
            <a href="/post" id="generatedLink">
            <button class="px-6 py-2 ml-2 text-blue-100 bg-blue-600 rounded">
              На главную
            </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props:{
    show:{
      type:Boolean,
      required:true
    },
    url:{
      type:String,
      required:true
    },
    qrcode:{
      type:String,
      required:true
    }
  },

};
</script>