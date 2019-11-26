<template>
  <div class="title col-12 text-center">
    <div class="jumbotron">
      <h3>Events happening near you at</h3>
      <h5>
        <font-awesome-icon class="clickable mr-3" icon="chevron-circle-left" @click="addDate(-1)"/>
        <em class="clickable" @click="changeCalendarVisibility">{{parseDate(this.selectedDate, "ddd, MMM-DD-YYYY")}}</em>
        <font-awesome-icon class="clickable ml-3" icon="chevron-circle-right" @click="addDate(1)"/>
      </h5>
      <div class="container">
        <div class="row">
          <div class="col-12" v-bind:style="{ display: showCalendar ? 'block' : 'none' }">
            <datepicker calendar-class="calendar-wrapper" wrapper-class="datepicker-wrapper" :inline="true" :value="selectedDate" @selected="dateSelected" :disabled-dates="this.disabledDates"></datepicker>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import dateParser from '../../mixins/dateParser'
  import Datepicker from "vuejs-datepicker/dist/vuejs-datepicker.esm.js"
  export default {
    mixins: [dateParser],
    components: {
      Datepicker
    },
    created: function () {
    },
    mounted: function () {
    },
    computed: {
      selectedDate () {
        return this.$store.state.selectedDate
      }
    },
    data: function () {
      return {
        showCalendar: false,
        disabledDates: {
          to: this.$store.state.selectedDate
        }
      }
    },
    methods: {
      addDate (dateChange) {
        this.$store.commit('setDateMovment', dateChange)
      },
      dateSelected (selectedDate) {
        this.$store.commit('setDate', selectedDate)
        this.changeCalendarVisibility()
      },
      changeCalendarVisibility () {
        this.showCalendar = !this.showCalendar
      }
    }
  }
</script>
<style>

  .calendar-wrapper.vdp-datepicker__calendar {
    width: 100% ;
  }
</style>