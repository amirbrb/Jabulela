<template>
  <div class="container">
    <div class="row">
      <EventDatePicker/>
    </div>
    <div class="row">
      <EventTile v-for="e in events" :eventData="e"></EventTile>
    </div>
  </div>
</template>

<script>
  import EventDatePicker from '../general/EventDatePicker'
  import EventTile from '../events/EventTile'
  import eventsService from '../../mixins/eventsService'
  import { mapState } from 'vuex'
  export default {
    components: {EventDatePicker, EventTile},
    mixins: [eventsService],
    methods: {
    },
    computed: mapState(['selectedDate']),
    created: function () {
      let self = this
      this.getEventsByDateAndGeoLocation(this.$store.state.selectedDate, 0, 0).then((events) => {
        self.events = events
      })
    },
    watch: {
      selectedDate (newValue, oldValue) {
        let self = this
        this.getEventsByDateAndGeoLocation(newValue, 0, 0).then((events) => {
          self.events = events
        })
      }
    },
    data: function () {
      return {
        events: []
      }
    }
  }
</script>

<style scoped>
  
</style>