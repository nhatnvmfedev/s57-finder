<script src="./script.js"></script>
<style lang="scss" scoped src="./style.scss"></style>

<template>
  <div class="flex justify-center mt-6">
    <nav class="mx-auto">
      <ul class="flex items-center space-x-4">
        <li>
          <button
            class="px-3 py-2 bg-gray-300 rounded"
            :disabled="currentPage === 1"
            @click="changePage(currentPage - 1)"
          >
            Previous
          </button>
        </li>
        <li v-for="pageNumber in totalPages" :key="pageNumber">
          <button
            :class="[
              'px-3 py-2',
              currentPage === pageNumber
                ? 'bg-green-600 text-white'
                : 'bg-gray-300',
            ]"
            @click="changePage(pageNumber)"
          >
            {{ pageNumber }}
          </button>
        </li>
        <li>
          <button
            class="px-3 py-2 bg-gray-300 rounded"
            :disabled="currentPage === totalPages"
            @click="changePage(currentPage + 1)"
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  </div>
</template>
