<template>
  <div class="container">
    <div class="row">
      <EventDatePicker/>
    </div>
  </div>
</template>

<script>
  import EventDatePicker from '../general/EventDatePicker'
  import eventsService from '../../mixins/eventsService'
  import { mapState } from 'vuex'
  export default {
    components: {EventDatePicker},
    mixins: [eventsService],
    methods: {
    },
    computed: mapState(['selectedDate']),
    watch: {
      selectedDate (newValue, oldValue) {
        this.getEventsByDateAndGeoLocation(newValue, 0, 0)
      }
    },
    data: function () {
      return {}
    }
  }
</script>

<style scoped>
  
</style>