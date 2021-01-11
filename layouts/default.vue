<template>
  <v-app dark>
    <v-navigation-drawer v-model="drawer" :mini-variant="miniVariant" :clipped="clipped" fixed app>
      <v-list>
        <v-list-item v-for="(item, i) in items" :key="i" :to="item.to" router exact>
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar :clipped-left="clipped" fixed app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <!-- <v&#45;btn icon @click.stop="miniVariant = !miniVariant"> -->
      <!--   <v&#45;icon>mdi&#45;{{ `chevron&#45;${miniVariant ? 'right' : 'left'}` }}</v&#45;icon> -->
      <!-- </v&#45;btn> -->
      <!-- <v&#45;btn -->
      <!--   icon -->
      <!--   @click.stop="clipped = !clipped" -->
      <!-- > -->
      <!--   <v&#45;icon>mdi&#45;application</v&#45;icon> -->
      <!-- </v&#45;btn> -->
      <!-- <v&#45;btn icon @click.stop="fixed = !fixed"> -->
      <!--   <v&#45;icon>mdi&#45;minus</v&#45;icon> -->
      <!-- </v&#45;btn> -->
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <!-- <v&#45;btn -->
      <!--   icon -->
      <!--   @click.stop="rightDrawer = !rightDrawer" -->
      <!-- > -->
      <!--   <v&#45;icon>mdi&#45;menu</v&#45;icon> -->
      <!-- </v&#45;btn> -->
    </v-app-bar>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
    <!-- <v&#45;navigation&#45;drawer v&#45;model="rightDrawer" :right="right" temporary fixed> -->
    <!--   <v&#45;list> -->
    <!--     <v&#45;list&#45;item @click.native="right = !right"> -->
    <!--       <v&#45;list&#45;item&#45;action> -->
    <!--         <v&#45;icon light>mdi&#45;repeat</v&#45;icon> -->
    <!--       </v&#45;list&#45;item&#45;action> -->
    <!--       <v&#45;list&#45;item&#45;title>Switch drawer (click me)</v&#45;list&#45;item&#45;title> -->
    <!--     </v&#45;list&#45;item> -->
    <!--   </v&#45;list> -->
    <!-- </v&#45;navigation&#45;drawer> -->
    <v-footer :absolute="!fixed" app>
      <span>House hunting &copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: "mdi-apps",
          title: "Let's hunt",
          to: "/",
        },
        {
          icon: "mdi-chart-bubble",
          title: "About",
          to: "/about",
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: "House hunting",
    };
  },
};
</script>
