<template>
  <div class="root bg-gray-200">
    <header class="border-b-1 border-gray-100 shadow-md p-4 bg-white">
      <div class="grid grid-cols-3 gap-4 max-w-11xl mx-auto place-items-center">
        <NuxtLogo class="col-span-1" />
        <MenuTop class="col-span-2"></MenuTop>
      </div>
    </header>
    <div class="con_content container mx-auto">
      <div class="grid grid-cols-9 gap-4">
        <Nuxt class="col-span-7" />
        <TheSideBar class="col-span-2 bg-white rounded shadow-lg p-4" />
      </div>
    </div>
    <footer class="border-t-1 border-gray-100 shadow-md p-4 bg-white mt-20">
      <p class="text-center">{{ new Date().getFullYear() }}</p>
    </footer>
  </div>
</template>

<style lang="scss">
.root {
  min-height: 100vh;
  .con_content {
    padding-top: 50px;
  }
}
</style>
<script>
import NuxtLogo from "~/components/common/NuxtLogo.vue";
import MenuTop from "~/components/common/Menu/Menu.vue";
import TheSideBar from "~/components/common/TheSideBar/TheSideBar.vue";

export default {
  name: "DefaultLayout",
  data() {
    return {};
  },
  components: { NuxtLogo, MenuTop, TheSideBar },
};
</script>
