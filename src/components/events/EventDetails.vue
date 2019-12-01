<template>
  <div class="container-fluid">
      <div class="event-title text-center">
        <img :src="eventData.img" class="event-cover img-fluid"/>
        <h2>{{eventData.title}}</h2>
      </div>
      <div class="event-info-wrapper">
        <div class="event-info">
          <font-awesome-icon icon="globe" class="d-sm-none"/>
          <div class="d-sm-flex d-none title" style="float:left">where:</div>
          <strong>{{eventData.location.literal}}</strong>
        </div>
        <div class="event-info">
          <font-awesome-icon icon="clock" class="d-sm-none"/>
          <div class="d-sm-flex d-none title" style="float:left">when:</div>
          <strong>{{eventData.date.day}}-{{eventData.date.month}}-{{eventData.date.year}}</strong>
        </div>
        <div class="event-info">
          <font-awesome-icon icon="history" class="d-sm-none"/>
          <div class="d-sm-flex d-none title" style="float:left">recurrance:</div>
          <strong>{{eventRecurrance}}</strong>
        </div>
        <div class="event-info">
          <font-awesome-icon icon="coins" class="d-sm-none"/>
          <div class="d-sm-flex d-none title" style="float:left">cost:</div>
          <strong>{{eventData.cost === 0 ? 'free!' : eventData.cost}}</strong>
        </div>
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
    },
    computed: {
      eventRecurrance: function () {
        if (!this.eventData.recurrance) {
          return 'single event'
        } else {
          let eventRecurrance = 'every '
          let days = []
          this.eventData.recurrance.forEach(element => {
            if (element === 1) {
              days.push('sunday')
            }
            if (element === 2) {
              days.push("monday")
            }
            if (element === 3) {
              days.push("tuesday")
            }
            if (element === 4) {
              days.push("wednesday")
            }
            if (element === 5) {
              days.push("thursday")
            }
            if (element === 6) {
              days.push("friday")
            }
            if (element === 7) {
              days.push("saturday")
            }
          })

          eventRecurrance += days.join(", ")
          return eventRecurrance
        }
      }
    }
  }
</script>

<style scoped>
  .event-title {
    width: 100%;
  }

  .event-title h2 {
    margin-top: 30px;
  }

  .event-cover{
    height: 150px;
    width: 70%;
    border-radius: 15px 0 10px;
  }

  .event-info-wrapper{
    margin-top: 30px;
    margin-left: 15px;
  }

  .event-info{
    margin-top: 8px;
  }

  .event-info strong{
    margin-left: 15px;
  }

  .event-description{
    margin-left: 30px;
    margin-top: 30px;
    font-size: 18px;
  }

  .title{
    width: 100px !important;
    max-width: 100px;
  }
</style>