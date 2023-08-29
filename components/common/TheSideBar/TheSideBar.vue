<script src="./script.js"></script>
<style lang="scss" scoped src="./style.scss"></style>

<template>
  <div class="">
    <div class="container mx-auto">
      <p class="text-green-800 font-bold">Tìm kèo</p>
      <div class="find_list pt-4">
        <div v-for="i in 5" class="item border rounded-md mb-5">
          <p class="font-bold text-gray-500 text-xs border-b pb-2 mb-2">
            FC Friends
          </p>
          <div class="grid grid-cols-5 gap-2">
            <p class="item_accept">
              <i class="fa-regular fa-futbol animate-spin"></i>
            </p>
            <div class="col-span-3 font-semibold text-sm">
              <p class="mb-2">
                <i class="pr-1 fa-regular fa-clock text-red-600"></i> 16:00, 22
                May 2023
              </p>
              <p class="mb-2">
                <i class="pr-1 fa-solid fa-futbol text-green-700"></i> Tuyên Sơn
              </p>
              <p class="mb-2">
                <i class="pr-1 fa-solid fa-users text-red-600"></i> 7 slots
              </p>
              <p class="mb-2">
                <i
                  class="pr-1 fa-solid fa-hand-holding-dollar text-green-700"
                ></i>
                70/30
              </p>
              <p class="mb-2">
                <i class="pr-1 fa-regular fa-face-smile-wink text-red-600"></i>
                Fun, friendly
              </p>
              <p>
                <i class="pr-1 fa-regular fa-address-book text-green-600"></i>
                070696969
              </p>
            </div>
            <div
              class="item_avt col-span-2"
              :style="{ backgroundImage: `url(${avtClub})` }"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
