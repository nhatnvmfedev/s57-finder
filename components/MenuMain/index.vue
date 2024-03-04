<script src="./script.js"></script>
<style lang="scss" scoped src="./style.scss"></style>

<template>
  <div class="container mx-auto">
    <v-list>
      <v-list-item v-for="item in items" :key="item.title">
        <v-list-item-icon class="mr-3">
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </div>
</template>
