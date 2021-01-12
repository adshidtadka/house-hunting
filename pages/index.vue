<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-card>
        <v-card-title class="headline">Let's hunt your house!</v-card-title>
        <v-form>
          <v-container>
            <v-text-field v-model="query" placeholder="Station, Route..." clearable></v-text-field>
            <template>
              <v-simple-table>
                <template v-slot:default>
                  <thead>
                    <tr>
                      <th class="text-left">Name</th>
                      <th class="text-left">Station Name</th>
                      <th class="text-left">Route Name</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="room in filteredRooms" :key="room.id">
                      <td>{{ room.name }}</td>
                      <td>{{ room.station_name }}</td>
                      <td>{{ room.route_name }}</td>
                    </tr>
                  </tbody>
                </template>
              </v-simple-table>
            </template>
          </v-container>
        </v-form>
      </v-card>
    </v-col>
  </v-row>
</template>
          </v-container>
        </v-form>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  async created() {
    const rooms = await this.$axios.$get("http://localhost:3001/rooms");
    this.rooms = rooms.data;
  },
  computed: {
    filteredRooms() {
      if (this.rooms.length && this.query !== null && this.query !== "") {
        return this.rooms.filter(
          (room) =>
            room.name.includes(this.query) ||
            room.station_name.includes(this.query) ||
            room.route_name.includes(this.query)
        );
      } else {
        return this.rooms;
      }
    },
  },
  data() {
    return {
      rooms: [],
      query: "",
    };
  },
};
</script>
