<template>
  <div class="title col-12 text-center">
    <div class="jumbotron">
      <h3>Events happening near you at</h3>
      <h5>
        <font-awesome-icon class="clickable mr-3" icon="chevron-circle-left" @click="addDate(-1)"/>
        <em class="clickable">{{parseDate(this.selectedDate, "ddd, MMM-DD-YYYY")}}</em>
        <font-awesome-icon class="clickable ml-3" icon="chevron-circle-right" @click="addDate(1)"/>
      </h5>
      <div class="container">
        <div class="row">
          <div class="col-12">
            <DatetimePicker value="this.selectedDate"></DatetimePicker>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import dateParser from '../../mixins/dateParser'
  import { DatetimePicker } from 'vue-datetime'
  export default {
    mixins: [dateParser],
    components: {
      DatetimePicker
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
    methods: {
      addDate (dateChange) {
        this.$store.commit('setDate', dateChange)
      }
    }
  }
</script>