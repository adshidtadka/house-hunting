<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-card v-if="room" class="mx-auto" max-width="744">
        <v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" height="200px"></v-img>
        <v-card-title>{{ room.name }}</v-card-title>
        <v-card-subtitle>{{ room.station_name }}, {{ room.route_name }}</v-card-subtitle>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  async created() {
    const room = await this.$axios.$get(
      `http://localhost:3001/rooms/${this.$route.params.id}`
    );
    this.room = room.data;
  },
  data() {
    return {
      room: null,
    };
  },
};
</script>

