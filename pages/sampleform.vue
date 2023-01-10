<template>
  <div>
    <AppBackgroundHolder :title="title" />
    <section class="contact-container">
      <div class="flex justify-center contact-form">
        <template v-if="!finished">
          <form class="Form" name="contact" method="POST" data-netlify="true" @submit.prevent>
            <div class="Form-Item">
              <p class="Form-Item-Label"><span class="Form-Item-Label-Required">必須</span>お名前</p>
              <input v-model="testName" type="text" class="Form-Item-Input" placeholder="氏名">
              <v-row>
                <div v-for="(error, index) in v$.testName.$errors" :key="index" class="text-xs text-red-500 mb-2">
                  <div v-if="error.$validator == 'required'">必須入力です。</div>
                  <div v-if="error.$validator == 'maxLength'">文字数が多すぎます。200文字以内で入力してください。</div>
                </div>
              </v-row>
            </div>
            <div class="Form-Item">
              <p class="Form-Item-Label"><span class="Form-Item-Label-Required">必須</span>メールアドレス</p>
              <input v-model="email" type="email" class="Form-Item-Input" placeholder="メールアドレス">
            </div>
            <div class="Form-Item">
              <p class="Form-Item-Label">会社名</p>
              <input v-model="company" type="text" class="Form-Item-Input" placeholder="会社名">
            </div>
            <div class="Form-Item">
              <p class="Form-Item-Label isMsg"><span class="Form-Item-Label-Required">必須</span>お問い合わせ内容</p>
              <textarea v-model="content" class="Form-Item-Textarea"></textarea>
            </div>
            <input type="submit" class="Form-Btn" value="送信"  @click="validateTest">
          </form>
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
              <br><br>一週間以内に連絡がなかった場合大変お手数ですが、再度お問い合わせの手続きをお願い致します。
          </div>
        </template>
      </div>
    </section>
  </div>
</template>
<script>
import axios from 'axios'
import { ref } from 'vue'
import { useVuelidate } from '@vuelidate/core'
import { required, email, integer, maxLength, minLength } from '@vuelidate/validators'

export default {
  data() {
    return {
      title: 'Contact',
      // form: {
      //   name: '',
      //   email: '',
      //   company: '',
      //   content: '',
      // },
      testName: '',
      email: '',
      company: '',
      content: '',

      form: {
        testName: this.testName,
        email: this.email,
        company: this.company,
        content: this.content,
      },

      finished: false
    }
  },
    setup() {
    // const testEmail = ref('')
    // const testMaxLength = ref('')
    // const testRequired = ref('')
    const testName = ref('')
    const email = ref('')
    const company = ref('')
    const content = ref('')

    const rules = {
      testName: { email, maxLength: maxLength(3)  },
      maxLength: { maxLength: maxLength(3) },
      required: { required },
    }

    const v$ = useVuelidate(rules, { email, maxLength, required})

    const validateTest = async () => {
      const isFormCorrect = await v$.value.$validate()
      if (!isFormCorrect) return
      handleSubmit;
      // バリデーションエラーじゃない場合にやりたい処理
    }

    return {
      testName,
      validateTest,
      v$
    }
  },
  methods: {
    encode(data) {
      return Object.keys(data)
        .map(
          (key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
        )
        .join('&')
    },
    handleSubmit() {
      const axiosConfig = {
        header: { 'Content-Type': 'applicati`on/x-www-form-urlencoded' }
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

.Form {
  margin-top: 0px;
  margin-left: auto;
  margin-right: auto;
  max-width: 720px;
}
@media screen and (max-width: 480px) {
  .Form {
    margin-top: 40px;
  }
}
.Form-Item {
  padding-bottom: 24px;
  width: 100%;
  display: flex;
  align-items: center;
}
@media screen and (max-width: 480px) {
  .Form-Item {
    padding-left: 14px;
    padding-right: 14px;
    padding-top: 16px;
    padding-bottom: 16px;
    flex-wrap: wrap;
  }
}
.Form-Item:nth-child(5) {

}
.Form-Item-Label {
  width: 100%;
  max-width: 248px;
  letter-spacing: 0.05em;
  font-weight: bold;
  font-size: 18px;
}
@media screen and (max-width: 480px) {
  .Form-Item-Label {
    max-width: inherit;
    display: flex;
    align-items: center;
    font-size: 15px;
  }
}
.Form-Item-Label.isMsg {
  margin-top: 8px;
  margin-bottom: auto;
}
@media screen and (max-width: 480px) {
  .Form-Item-Label.isMsg {
    margin-top: 0;
  }
}
.Form-Item-Label-Required {
  border-radius: 6px;
  margin-right: 8px;
  padding-top: 8px;
  padding-bottom: 8px;
  width: 48px;
  display: inline-block;
  text-align: center;
  background: #545454;
  color: #fff;
  font-size: 14px;
}
@media screen and (max-width: 480px) {
  .Form-Item-Label-Required {
    border-radius: 4px;
    padding-top: 4px;
    padding-bottom: 4px;
    width: 32px;
    font-size: 10px;
  }
}
.Form-Item-Input {
  border: 1px solid #ddd;
  border-radius: 6px;
  margin-left: 40px;
  padding-left: 1em;
  padding-right: 1em;
  height: 48px;
  flex: 1;
  width: 100%;
  max-width: 410px;
  background: #eaedf2;
  font-size: 18px;
}
@media screen and (max-width: 480px) {
  .Form-Item-Input {
    margin-left: 0;
    margin-top: 18px;
    height: 40px;
    flex: inherit;
    font-size: 15px;
  }
}
.Form-Item-Textarea {
  border: 1px solid #ddd;
  border-radius: 6px;
  margin-left: 40px;
  padding-left: 1em;
  padding-right: 1em;
  height: 216px;
  flex: 1;
  width: 100%;
  max-width: 410px;
  background: #eaedf2;
  font-size: 18px;
}
@media screen and (max-width: 480px) {
  .Form-Item-Textarea {
    margin-top: 18px;
    margin-left: 0;
    height: 200px;
    flex: inherit;
    font-size: 15px;
  }
}
.Form-Btn {
  border-radius: 6px;
  margin-top: 15px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 10px;
  padding-bottom: 10px;
  width: 90px;
  display: block;
  letter-spacing: 0.05em;
  background: #545454;
  color: #fff;
  font-weight: bold;
  font-size: 20px;
  // border-radius: 4px;
  //   padding-top: 4px;
  //   padding-bottom: 4px;
  //   width: 32px;
  //   font-size: 10px;

  // border-radius: 6px;
  // margin-top: 32px;
  // margin-left: auto;
  // margin-right: auto;
  // padding-top: 20px;
  // padding-bottom: 20px;
  // width: 280px;
  // display: block;
  // letter-spacing: 0.05em;
  // background: #545454;
  // color: #fff;
  // font-weight: bold;
  // font-size: 20px;
}
@media screen and (max-width: 480px) {
  .Form-Btn {
    margin-top: 24px;
    padding-top: 8px;
    padding-bottom: 8px;
    width: 160px;
    font-size: 16px;
  }
}
</style>
