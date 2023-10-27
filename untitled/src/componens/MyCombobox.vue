<template>
  <div class="w2/4 m-auto">
  <Listbox as="div" v-model="selected" @click="selectedItem">

    <div class="relative mt-2">
      <ListboxButton class="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6">
        <span class="flex items-center">
          <svg width="26" height="26" :fill=selected.color viewBox="0 0 26 26" xmlns="http://www.w3.org/2000/svg"><path d="m19.576 18.5154-3.561-3.561a4.9232 4.9232 0 0 0 0-5.9088l3.561-3.5611a9.9684 9.9684 0 0 1 0 13.0309zm-7.576-11.5154a4.9579 4.9579 0 0 1 2.9544.985l3.561-3.561a9.9683 9.9683 0 0 0 -13.0308 0l3.561 3.561a4.9579 4.9579 0 0 1 2.9544-.985zm-4.015 7.9544a4.9232 4.9232 0 0 1 0-5.9088l-3.561-3.5611a9.9684 9.9684 0 0 0 0 13.0309zm4.015 7.0456a9.9519 9.9519 0 0 0 6.5154-2.424l-3.561-3.561a4.9232 4.9232 0 0 1 -5.9088 0l-3.561 3.561a9.9519 9.9519 0 0 0 6.5154 2.424z"/></svg>
          <span class="ml-3 block truncate">{{ selected.name }}</span>
        </span>
        <span class="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
          <ChevronUpDownIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
        </span>
      </ListboxButton>

      <transition leave-active-class="transition ease-in duration-100" leave-from-class="opacity-100" leave-to-class="opacity-0">
        <ListboxOptions class="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
          <ListboxOption as="template" v-for="person in tems" :key="person.id" :value="person" v-slot="{ active, selected }">
            <li :class="[active ? 'bg-indigo-600 text-white' : 'text-gray-900', 'relative cursor-default select-none py-2 pl-3 pr-9']">
              <div class="flex items-center ">
                <svg width="26" height="26" :fill=person.color viewBox="0 0 26 26" xmlns="http://www.w3.org/2000/svg"><path d="m19.576 18.5154-3.561-3.561a4.9232 4.9232 0 0 0 0-5.9088l3.561-3.5611a9.9684 9.9684 0 0 1 0 13.0309zm-7.576-11.5154a4.9579 4.9579 0 0 1 2.9544.985l3.561-3.561a9.9683 9.9683 0 0 0 -13.0308 0l3.561 3.561a4.9579 4.9579 0 0 1 2.9544-.985zm-4.015 7.9544a4.9232 4.9232 0 0 1 0-5.9088l-3.561-3.5611a9.9684 9.9684 0 0 0 0 13.0309zm4.015 7.0456a9.9519 9.9519 0 0 0 6.5154-2.424l-3.561-3.561a4.9232 4.9232 0 0 1 -5.9088 0l-3.561 3.561a9.9519 9.9519 0 0 0 6.5154 2.424z"/></svg>
                <span :class="[selected ? 'font-semibold' : 'font-normal', 'ml-3 block truncate']">{{ person.name }}</span>
              </div>

              <span v-if="selected" :class="[active ? 'text-white' : 'text-indigo-600', 'absolute inset-y-0 right-0 flex items-center pr-4']">
                <CheckIcon class="h-5 w-5" aria-hidden="true" />
              </span>
            </li>
          </ListboxOption>
        </ListboxOptions>
      </transition>
    </div>
  </Listbox>
  </div>
</template>

<script>
import { ref } from 'vue'
import { Listbox, ListboxButton, ListboxLabel, ListboxOption, ListboxOptions } from '@headlessui/vue'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/vue/20/solid'
import {background} from "quill/ui/icons";
import axios from "axios";

export default
{
  components:{
    CheckIcon,
    Listbox,
    ListboxButton,
    ListboxOptions,
    ListboxOption,
    ChevronUpDownIcon,
  },
    data()
    {
      return {
        selected: {
          id:"",
          name: "",
          color:"",
          image: ""
        },
        tems: []
      };
    },
  methods:{
    selectedItem(){
      this.$emit("selectedItem", this.selected)
    },

    async Get(){
      try {
        const response = await axios.get("http://localhost:8000/theme/")
        this.tems = response.data
        this.selected = ref(this.tems[3]);
      }catch (e){
        alert("Не получилось")
      }
    },
  },
    mounted()
    {
      this.Get()
    }
}



</script>