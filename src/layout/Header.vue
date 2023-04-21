<template>
  <header>
    <nav class="left-0 right-0 z-10" style="position: fixed">
      <div class="bg-white top-0 grid grid-cols-6 gap-4 py-4">
        <div class="flex flex-1 justify-around items-center">
          <router-link
            as="nav"
            class="btn hover:text-sky-500 dark:hover:text-sky-400"
            active-class="active"
            to="/"
            exact
          >
            <fa icon="house-chimney" />
            <span class="pl-2">{{ "Home" }}</span>
          </router-link>
          <div>
            <Menu as="div">
              <MenuButton
                class="
                  justify-center
                  rounded-md
                  bg-sky-700
                  px-4
                  py-2
                  text-sm
                  font-medium
                  text-white
                  hover:bg-sky-800
                  focus:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-white
                  focus-visible:ring-opacity-75
                "
              >
                <fa icon="list-ul" />
                {{ "Categories" }}
              </MenuButton>

              <div v-if="{ active }">
                <category-items />
              </div>
            </Menu>
          </div>
        </div>
        <div
          class="
            flex flex-1
            items-center
            justify-center
            col-start-3 col-span-2
            hover:text-sky-500
            font-semibold
            dark:hover:text-sky-400
          "
        >
          <span>{{ "Desi Adda" }}</span>
        </div>
        <div class="flex flex-1 lg:flex-none px-5 pt-2 rounded-md">
          <Search />
        </div>
        <div class="col-end-7 flex">
          <div class="flex flex-1 items-center">
            <Menu>
              <MenuButton
                class="
                  rounded-md
                  bg-sky-700
                  px-4
                  py-2
                  text-sm text-white
                  hover:bg-sky-800
                "
              >
                <fa icon="bars" />
              </MenuButton>

              <div v-if="{ active }">
                <div class="fixed top-16 w-56 text-right">
                  <transition
                    enter-active-class="transition duration-100 ease-out"
                    enter-from-class="transform scale-95 opacity-0"
                    enter-to-class="transform scale-100 opacity-100"
                    leave-active-class="transition duration-75 ease-in"
                    leave-from-class="transform scale-100 opacity-100"
                    leave-to-class="transform scale-95 opacity-0"
                  >
                    <MenuItems
                      class="
                        absolute
                        mt-2
                        w-56
                        divide-y divide-gray-100
                        rounded-md
                        bg-white
                        shadow-lg
                        ring-1 ring-black ring-opacity-5
                        focus:outline-none
                      "
                    >
                      <div class="px-1 py-1">
                        <MenuItem
                          v-slot="{ active }"
                          v-for="menu in menuItems"
                          :key="menu.id"
                        >
                          <router-link
                            as="nav"
                            :class="[
                              active
                                ? 'bg-sky-500 text-white'
                                : 'text-gray-900',
                              'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                            ]"
                            active-class="active"
                            :to="menu.to"
                          >
                            <span>{{ menu.title }}</span>
                          </router-link>
                        </MenuItem>
                      </div>
                    </MenuItems>
                  </transition>
                </div>
              </div>
            </Menu>

            <button
              class="
                flex-1
                hover:text-sky-700
                dark:hover:text-sky-600
                items-center
              "
              @click="openLoginModal()"
            >
              <fa
                icon="fa-user"
                class="scale-100 hover:scale-150 ease-in duration-500"
              />
            </button>
            <div v-if="state.isOpen">
              <Login :isOpen="state.isOpen" :onClose="onClose" />
            </div>
            <router-link
              class="
                btn
                flex flex-1
                items-center
                hover:text-sky-700
                dark:hover:text-sky-600
              "
              to="/cart"
            >
              <fa
                icon="fa-bag-shopping"
                class="scale-100 hover:scale-150 ease-in duration-500"
              />

              <div
                class="badge ml-2 badge-outline"
                v-text="cartTotalItems"
              ></div>
            </router-link>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { computed, reactive, ref } from "vue";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/vue";

import Home from "../views/home/index.vue";
import About from "../views/about/index.vue";
import Contact from "../views/contact/index.vue";

import Login from "../components/Login.vue";
import CategoryItems from "../components/categories/MenuItems.vue";
import Search from "../components/search/Search.vue";
import { useStore } from "vuex";

const isOpen = ref(false);
const active = ref(false);
const store = useStore();

const menuItems = ref([
  { to: "/about", title: "About" },
  { to: "/contact", title: "Contact" },
]);

const state = reactive({ isOpen });

function openLoginModal() {
  state.isOpen = true;
}

function onClose() {
  state.isOpen = false;
}

const cartTotalItems = computed(
  () => store.getters["productDetails/getCartTotalItems"]
);
</script>
