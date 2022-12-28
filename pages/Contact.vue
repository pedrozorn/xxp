<template>
  <section class="contact-container">
    <template v-if="!finished">
      <form name="contact" method="POST" data-netlify="true" @submit.prevent>
        <div class="flex justify-center contact-form">
          <v-text-field v-model="name" :error-messages="nameErrors" :counter="10" label="お名前 ※必須" required
            @input="$v.name.$touch()" @blur="$v.name.$touch()"></v-text-field>
          <v-text-field v-model="company" :error-messages="companyErrors" :counter="30" label="会社名"
            @input="$v.company.$touch()" @blur="$v.company.$touch()"></v-text-field>
          <v-text-field v-model="email" :error-messages="emailErrors" label="メールアドレス" required @input="$v.email.$touch()"
            @blur="$v.email.$touch()"></v-text-field>
          <v-textarea class="message-area" v-model="message" :counter="1000" label="お問合せ内容" required
            @input="$v.message.$touch()" @blur="$v.message.$touch()"></v-textarea>
          <v-btn class="mr-4" @click="encode">
            submit
          </v-btn>
          <v-btn @click="clear">
            clear
          </v-btn>
      </div>
    </form>
    </template>
    <template v-else>
      <p v-text="'お問い合わせ頂きありがとうございました。'" />
      <p><nuxt-link to="/" v-text="'TOPへ'" /></p>
    </template>
  </section>
</template>
<script>
import { validationMixin } from 'vuelidate'
import { required, maxLength, email } from 'vuelidate/lib/validators'

import axios from 'axios'
export default {
  mixins: [validationMixin],

  validations: {
    name: { required, maxLength: maxLength(10) },
    company: { maxLength: maxLength(30) },
    email: { required, email },
    message: { maxLength: maxLength(1000) },
  },


  data() {
    return {
      title: 'Contact',
      form: {
        name: '',
        email: '',
        content: ''
      },
      finished: false
    }
  },

  computed: {
    nameErrors() {
      const errors = []
      if (!this.$v.name.$dirty) return errors
      !this.$v.name.maxLength && errors.push('名前が長すぎます。10文字以内で入力してください。')
      !this.$v.name.required && errors.push('必須項目です.')
      return errors
    },
    companyErrors() {
      const errors = []
      if (!this.$v.company.$dirty) return errors
      !this.$v.company.maxLength && errors.push('会社名')
      return errors
    },
    emailErrors() {
      const errors = []
      if (!this.$v.email.$dirty) return errors
      !this.$v.email.email && errors.push('Must be valid e-mail')
      !this.$v.email.required && errors.push('E-mail is required')
      return errors
    },
  },


  methods: {
    submit() {
      this.$v.$touch()
      this.clear()
    },
    clear() {
      this.$v.$reset()
      this.name = ''
      this.company = ''
      this.email = ''
      this.message = ''
    },
    encode(data) {
      return Object.keys(data)
        .map(
          (key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
        )
        .join('&')
    },
    handleSubmit() {
      const axiosConfig = {
        header: { 'Content-Type': 'application/x-www-form-urlencoded' }
      }
      axios
        .post(
          '/',
          this.encode({
            'form-name': 'contact',
            ...this.form
          }),
          axiosConfig
        )
        .then(() => {
          this.finished = true
        })
    }
  }
}
</script>
<style>
.contact-form {
  margin-left: auto;
  margin-right: auto;
  width: 50%;
}

.message-area {
  padding-bottom: 1rem;
}

.font-test {
  font-family: 'M PLUS 1 Code', sans-serif;
  font-weight: 900;
}
</style>
