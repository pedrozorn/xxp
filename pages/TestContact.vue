<template>
  <form>
    <AppBackgroundHolder :title="title" />
    <div class="flex justify-center contact-form">
      <template v-if="!finished">
        <v-text-field v-model="name" :error-messages="nameErrors" :counter="10" label="お名前 ※必須" required
          @input="$v.name.$touch()" @blur="$v.name.$touch()"></v-text-field>
        <v-text-field v-model="company" :error-messages="companyErrors" :counter="30" label="会社名"
          @input="$v.company.$touch()" @blur="$v.company.$touch()"></v-text-field>
        <v-text-field v-model="email" :error-messages="emailErrors" label="メールアドレス" required @input="$v.email.$touch()"
          @blur="$v.email.$touch()"></v-text-field>
        <v-textarea class="message-area" v-model="content" :counter="1000" label="お問合せ内容" required
          @input="$v.content.$touch()" @blur="$v.content.$touch()"></v-textarea>
        <v-btn class="mr-4 disable-btn-color" :disabled="$v.$invalid" @click="handleSubmit">
          submit
        </v-btn>
        <v-btn @click="clear">
          clear
        </v-btn>
      </template>

      <template v-else>
        <div class="flex justify-center contact-form">
            <br>
            お問い合わせいただきありがとうございました。<br>
            お問い合わせを受け付けました。            
            <br>
            <br>
            折り返し、担当者よりご連絡いたしますので、
            恐れ入りますが、しばらくお待ちください。
            <br>
        </div>
      </template>
    </div>
  </form>
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
    content: { maxLength: maxLength(1000) },
  },

  data() {
    return {
      title: 'Contact',
      name: '',
      company: '',
      email: '',
      content: '',
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
      // !this.$v.email.email && errors.push('Must be valid e-mail')
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
      const form = {
        name: this.name,
        company: this.company,
        email: this.email,
        content: this.content,
      }
      console.log(form)
      const axiosConfig = {
        header: { 'Content-Type': 'application/x-www-form-urlencoded' }
      }
      axios
        .post(
          '/',
          this.encode({
            'form-name': 'contact',
            ...form
          }),
          axiosConfig
        )
        .then(() => {
          this.finished = true
        })
        console.log("test2")
    },
    
    //   await axios.post('https://xxxx.microcms.io/api/v1/contact',
    //     this.postData
    //     , {
    //     headers: {
    //       'Content-Type': 'application/json',
    //       'X-MICROCMS-API-KEY': process.env.MICROCMS_API_KEY
    //     },
    //   })
    // },
    // async postData() {
    //   const res = this.$axios.post('https://xxxx.microcms.io/api/v1/contact',
    //     postData,
    //             headers: {
    //       'Content-Type': 'application/json',
    //       'X-MICROCMS-API-KEY': process.env.MICROCMS_API_KEY
    //     },


    //   ).catch(err => {
    //     return error.response
    //     }
    //   )
    // }
    async postTest() {
      const param = {
        content: this.postData,
        headers: {
          'Content-Type': 'application/json',
          'X-MICROCMS-API-KEY': process.env.MICROCMS_API_KEY
        },
      }
      const res = this.$axios.post('https://xxxx.microcms.io/api/v1/contact',param
      ).catch(err => {
        return error.response
        }
      )
    },

    async asyncData({ $microcms }) {
      const data = await $microcms.post({
        endpoint: 'contact',
        content: this.postData,
      });
      return { data };
    }

  }
}
</script>


<style lang="scss" scoped>
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
// .disable-btn-color {
//   background-color: rgba(0, 0, 0, 0.12) !important;
//   color: rgba(0, 0, 0, 0.26) !important;
// }
</style>