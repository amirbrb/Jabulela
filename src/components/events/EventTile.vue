<template>
  <div class="container-fluid tile clickable" @click="showDetails">
      <div class="tile-title">
        <h5>{{this.eventData.title}}</h5>
      </div>
      <div class="tile-data">
          <div class="tile-img-container">
              <img :src="this.eventData.img" class="tile-img"></div>
          </div>
          <div class="tile-details">
              <div>
                <font-awesome-icon icon="clock" class="tile-icon"/>
                {{this.eventData.timeStart}}-{{this.eventData.timeEnd}} 
              </div>
              <div>
                <font-awesome-icon icon="coins" class="tile-icon"/>
                {{this.eventData.cost == 0 ? 'free' : this.eventData.cost}}
              </div>
          </div>
      </div>
  </div>
</template>

<script>
  export default {
    components: {},
    props: ['eventData'],
    methods: {
      showDetails () {
        this.$router.push({ name: 'eventDetails', params: { id: this.eventData.id } })
      }
    }
  }
</script>

<style scoped>
  .tile{
    background: lightgray;
    margin-top: 15px;
    width: 230px;
    border: gray 1px solid;
    box-shadow: 3px 3px grey;
  }

  .tile-title{
    padding: 10px;
    text-align: center;
  }

  .tile-data{
    padding-bottom: 10px;
  }

  .tile-img-container{
    width: 70px;
    float: left;
    margin-bottom: 15px;
  }

  .tile-details{
    float: right;
  }

  .tile-icon{
    font-size: 18px;
  }

  .tile-img{
    width: 70px;
    height: 70px;
    border-radius: 70px;
  }
</style>