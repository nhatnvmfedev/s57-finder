<script src="./script.js"></script>
<style lang="scss" scoped src="./style.scss"></style>

<template>
  <div class="menu_left color-white">
    <v-navigation-drawer class="bg-green" v-model="drawer" :mini-variant.sync="mini">
      <v-list-item class="px-1">
        <v-btn class="btn_nav" icon @click.stop="mini = !mini">
          <button><i class="fa-solid fa-bars-staggered"></i></button>
        </v-btn>
      </v-list-item>

      <v-list dense class="col-10 mx-auto">
        <v-list-item v-for="item in items" :key="item.title" link>
          <v-list-item-icon class="mr-3">
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>
