<template>
  <div>
    <div v-for="map in maps" id="read-map" :key="map.name" class="card">
      <img class="card-img" :src="map.photo.photo_reference" />
      <div class=".card-content">
        <h1>{{ map.name }}</h1>
        <p>{{ map.formatted_address }}</p>
      </div>
      <div class="card-link">
        <a href="">About</a>
      </div>
    </div>
  </div>
</template>

<script>
import store from '~/store/store.js'

export default {
  computed: {
    maps() {
      return store.state.mapCandidate
    }
  }
}
</script>

<style>
.card {
  display: inline-block;
  margin: 20px;
  width: 150px;
  background: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 5px #ccc;
  position: relative;
  z-index: 10;
}
.card-img {
  border-radius: 5px 5px 0 0;
  max-width: 140px;
  height: auto;
  padding-left: 10px;
}
.card-content {
  padding: 20px;
}
.card-content h1 {
  font-size: 20px;
  margin-bottom: 20px;
  text-align: center;
  color: #333;
}
.card-content p {
  color: #777;
  font-size: 14px;
  line-height: 1.5;
}
.card-link {
  text-align: center;
  border-top: 1px solid #eee;
  padding: 20px;
}
.card-link a {
  text-decoration: none;
  color: #0bd;
  margin: 0 10px;
}
.card-link a:hover {
  color: #0090aa;
}
</style>
