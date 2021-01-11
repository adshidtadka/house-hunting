<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-card class="mx-auto" max-width="744">
        <v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" height="200px"></v-img>
        <v-card-title>{{ room.name }}</v-card-title>
        <v-card-subtitle>{{ room.station_name }}, {{ room.route_name }}</v-card-subtitle>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      room: {
        name: "beautiful beautiful house",
        station_name: "koenji",
        route_name: "JR sobu line",
      },
    };
  },
};
</script>

