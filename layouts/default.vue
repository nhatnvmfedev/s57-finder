<template>
  <v-app dark>
    <v-container>
      <v-row>
        <!-- Cột chiếm 4/12 của dòng -->
        <v-col class="col-2">
          <MenuLeft />
        </v-col>

        <!-- Cột chiếm 8/12 của dòng -->
        <v-col class="col-8">
          <MenuMain />
          Content
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import MenuLeft from './../components/MenuLeft'
import MenuMain from './../components/MenuMain'

export default {
  name: 'DefaultLayout',
  comments: {
    MenuLeft,
    MenuMain
  },
  data() {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
  .container {
    padding-top: 3em;
  }
</style>
