<template>
  <li>
    <div class="card">
      <img class="card-img" :src="photo" />
      <div class="card-content">
        <h1>{{ name }}</h1>
        <p>{{ formattedAddress }}</p>
      </div>
      <div class="card-link">
        <nuxt-link :to="getUrl">About</nuxt-link>
      </div>
    </div>
  </li>
</template>

<script>
export default {
  props: {
    name: String,
    placeId: String,
    formattedAddress: String,
    photo: String
  },
  computed: {
    getUrl() {
      return `/store/${this.placeId}`
    }
  }
}
</script>

<style>
.card {
  display: inline-block;
  margin: 20px;
  width: 300px;
  background: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 5px #ccc;
  position: relative;
  z-index: 10;
}
.card-img {
  border-radius: 5px 5px 0 0;
  max-width: 250px;
  height: auto;
  margin: 0 auto;
  padding-top: 10px;
}
.card-content {
  padding: 20px;
  text-align: left;
}
.card-content h1 {
  font-size: 22px;
  margin-bottom: 20px;
  color: #333;
  text-align: left;
}
.card-content p {
  color: #777;
  font-size: 14px;
  line-height: 1.5;
}
.card-link {
  text-align: center;
  border-top: 1px solid #eee;
  font-size: 24px;
  font: bold;
  padding: 10px;
}
.card-link a {
  text-decoration: none;
  color: rgba(50, 100, 200, 1);
  margin: 0 10px;
}
.card-link a:hover {
  color: rgba(20, 170, 220, 1);
}
</style>
