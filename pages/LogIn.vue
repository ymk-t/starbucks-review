<template>
  <div class="w-screen h-screen flex flex-col justify-center items-center bg-gray-200">
    <div class="max-w-2xl bg-white shadow-md rounded px-8 pt-6 pb-8 border border-green-600">
      <h2 class="font-bold text-3xl text-center mb-2">ログイン</h2>
      <div class="flex flex-col mb-4">
        <input
          v-model="username"
          class="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 mb-4 block w-full appearance-none leading-normal"
          type="text"
          placeholder="メールアドレス"
        />
        <input
          v-model="password"
          class="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
          type="password"
          placeholder="パスワード"
        />
      </div>
      <div class="flex justify-end my-2">
        <button
          class="w-full bg-green-700 hover:bg-green-500 text-white font-bold py-2 px-4 rounded"
          @click="signUp"
        >
          登録
        </button>
      </div>

      <p class>
        アカウントはお持ちですか？
        <nuxt-link class="text-blue-400" to="/SignUp">登録はこちら！</nuxt-link>
      </p>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState, mapGetters } from 'vuex'
import firebase from '~/plugins/firebase'

export default {
  name: 'Signup',
  data() {
    return {
      username: '',
      password: ''
    }
  },
  computed: {
    ...mapState(['user']),
    ...mapGetters(['isAuthenticated'])
  },
  mounted() {
    firebase.auth().onAuthStateChanged((user) => {
      this.setUser(user)
    })
  },
  methods: {
    ...mapActions(['setUser']),
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

<style scoped></style>
