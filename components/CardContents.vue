<template>
  <div id="recommend" class="card">
    <img
      class="card-img"
      src="https://media-cdn.tripadvisor.com/media/photo-s/0f/e8/9e/39/photo0jpg.jpg"
    />
    <div class=".card-content">
      <h1>Title</h1>
      <p>contents</p>
    </div>
    <div class="card-link">
      <a href="">About</a>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    cloneCards(cardsId, items) {
      const cards = document.getElementById('cardsId')
      const clone = cards.firstElementChild.cloneNode(true)
      for (let i = 1; i < items; i++) {
        cards.appendChild(clone)
      }
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
