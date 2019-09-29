<template>
  <div class="signup">
    <h2>Sign Up</h2>
    <input v-mmodel="username" type="text" placeholder="Username" />
    <input v-mmodel="password" type="password" placeholder="Password" />
    <button @click="signUp">登録</button>
    <p>
      アカウントをお持ちですか？
      <router-link to="/signin">登録はこちら！</router-link>
    </p>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'Signup',
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    signUp() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.username, this.password)
        .then((user) => {
          alert('Create account: ', user.email)
        })
        .catch((error) => {
          alert(error.message)
        })
    }
  }
}
</script>

<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.signin {
  margin-top: 20px;

  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
}
input {
  margin: 10px 0;
  padding: 10px;
}
</style>
