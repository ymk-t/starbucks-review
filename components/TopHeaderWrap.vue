<template>
  <div class="Header-wrapper">
    <div class="Header-logo">
      <img src="../assets/img/StaReco.png" />
    </div>
    <button class="Header-button register" type="button" onclick="location.href='./SignUp'">
      登録する
    </button>
    <button class="Header-button login" type="button" onclick="location.href='./LogIn'">
      ログイン
    </button>
    <link
      href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
      rel="stylesheet"
    />
    <form method="get" action="#" class="search_container">
      <input type="text" size="25" placeholder="店舗・メニューを探す" />
      <input type="submit" value="検索" />
    </form>
  </div>
</template>

<script>
export default {
  name: 'TopHeaderWrap'
}
</script>

<style>
.Header-wrapper {
  height: 65px;
  width: 100%;
  position: fixed;
  background-color: lightgrey;
  opacity: 1;
  top: 0;
  z-index: 20;
}

.Header-logo {
  width: 200px;
  opacity: 1;
  float: left;
}

.search_container {
  box-sizing: border-box;
  position: relative;
  border: 1px solid black;
  display: block;
  margin-top: 25px;
  margin-right: 20px;
  border-radius: 20px;
  width: 250px;
  overflow: hidden;
  float: right;
}
.search_container input[type='text'] {
  border: none;
  padding-left: 10px;
}
.search_container input[type='text']:focus {
  outline: 0;
}
.search_container input[type='submit'] {
  box-sizing: inherit;
  cursor: pointer;
  width: 40px;
  font-family: FontAwesome;
  font-size: 16px;
  border: none;
  background: #3879d9;
  color: white;
  position: absolute;
  right: 0;
  top: 0;
  outline: none;
}

.Header-button {
  max-width: 180px;
  text-align: center;
  font-size: 16px;
  color: #fff;
  text-decoration: none;
  font-weight: bold;
  padding: 10px 10px;
  border-radius: 4px;
  margin: 10px;
  float: right;
}

.Header-button:active {
  transform: translateY(4px);
  border-bottom: none;
}

.register {
  width: 95px;
  background-color: green;
  border-bottom: 2px solid darkgreen;
}

.login {
  color: green;
  font-size: 18px;
  width: 95px;
  background-color: rgb(240, 240, 240);
  border-bottom: 2px solid darkgray;
}

.register:hover {
  background-color: rgba(60, 210, 60);
  border-bottom: 2px solid green;
}

.login:hover {
  background-color: white;
  border-bottom: 2px solid darkgray;
}
</style>
