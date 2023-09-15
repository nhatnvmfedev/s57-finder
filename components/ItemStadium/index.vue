<script src="./script.js"></script>
<style lang="scss" scoped src="./style.scss"></style>

<template>
  <div class="max-w-sm rounded overflow-hidden shadow-lg bg-white cursor-pointer">
    <NuxtLink to="/child-stadium">
      <img class="w-full" src="~/assets/images/img_01.jpg" alt="Item Image" />
    </NuxtLink>
    <div class="px-4 py-4">
      <div class="font-bold text-lg mb-2">Sân Tuyên Sơn</div>
      <p class="text-gray-700 text-base">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
      </p>
    </div>
    <div class="box_info px-4 py-3 grid grid-cols-3">
      <p class="flex flex-col items-center text-gray-600">
        <i class="fa-solid fa-location-dot"></i>
        <span class="text-xs pt-1">Da Nang</span>
      </p>
      <p class="flex flex-col items-center text-gray-600">
        <i class="fa-solid fa-users"></i>
        <span class="text-xs pt-1">5, 7</span>
      </p>
      <p class="flex flex-col items-center text-gray-600">
        <i class="fa-regular fa-clock"></i>
        <span class="text-xs pt-1">10:00 - 21:00</span>
      </p>
      <!-- <p class="flex flex-col items-center text-gray-600">
            <i class="fa-solid fa-users"></i>
            <span class="text-xs pt-1">5</span>
          </p> -->
    </div>
    <div class="px-4 py-4">
      <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">Tag 1</span>
      <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">Tag 2</span>
      <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">Tag 3</span>
    </div>
  </div>
</template>
