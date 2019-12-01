<template>
  <div class="container-fluid">
      <div class="event-title">
          <h2>{{eventData.title}}</h2>
      </div>
      <div class="event-description">{{eventData.description}}</div>
  </div>
</template>

<script>
  import eventsService from '../../mixins/eventsService'
  export default {
    components: {},
    props: ['id'],
    mixins: [eventsService],
    created: function () {
      this.getEventById(this.id).then(e => {
        this.eventData = e
      })
    },
    data: () => {
      return {
        eventData: {
        }
      }
    },
    methods: {
    }
  }
</script>

<style scoped>
  
</style>