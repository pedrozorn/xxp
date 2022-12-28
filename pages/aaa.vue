<template>
  <div class="p-3 m-3 border rounded-lg">
    <div>
      <input class="mt-2 p-2 rounded border border-blue-300 w-9/12" type="text" v-model="testEmail" placeholder="email address" />
      <div v-for="(error, index) in v$.testEmail.$errors" :key="index" class="text-xs text-red-500 mb-2">
        <div v-if="error.$validator == 'email'">メールアドレスの形式が正しくありません。</div>
      </div>
      <input class="mt-2 p-2 rounded border border-blue-300 w-9/12" type="text" v-model="testMinLength" placeholder="min length 5" />
      <div v-for="(error, index) in v$.testMinLength.$errors" :key="index" class="text-xs text-red-500 mb-2">
        <div v-if="error.$validator == 'minLength'">5文字以上を入力してください。</div>
      </div>
      <input class="mt-2 p-2 rounded border border-blue-300 w-9/12" type="text" v-model="testMaxLength" placeholder="max length 10" />
      <div v-for="(error, index) in v$.testMaxLength.$errors" :key="index" class="text-xs text-red-500 mb-2">
        <div v-if="error.$validator == 'maxLength'">10文字以上を入力してください。</div>
      </div>
      <input class="mt-2 p-2 rounded border border-blue-300 w-9/12" type="text" v-model="testRequired" placeholder="required" />
      <div v-for="(error, index) in v$.testRequired.$errors" :key="index" class="text-xs text-red-500 mb-2">
        <div v-if="error.$validator == 'required'">必須入力です。</div>
      </div>
      <input class="mt-2 p-2 rounded border border-blue-300 w-9/12" type="text" v-model="testInteger" placeholder="integer" />
      <div v-for="(error, index) in v$.testInteger.$errors" :key="index" class="text-xs text-red-500 mb-2">
        <div v-if="error.$validator == 'required'">必須入力です。</div>
        <div v-if="error.$validator == 'integer'">数値(整数)のみを入力してください。</div>
        <div v-if="error.$validator == 'minLength'">3文字以上を入力してください。</div>
      </div>
    </div>
    <button 
      @click="validateTest"
      class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 mt-3 border-b-4 border-blue-700 hover:border-blue-500 rounded"
    >validateテスト</button>
  </div>
</template>
<script>
import { ref } from 'vue'
import { useVuelidate } from '@vuelidate/core'
import { required, email, integer, maxLength, minLength } from '@vuelidate/validators'
export default ({
  setup() {
    const testEmail = ref('')
    const testMinLength = ref('')
    const testMaxLength = ref('')
    const testRequired = ref('')
    const testInteger = ref('')

    const rules = {
      testEmail: { email },
      testMinLength: { minLength: minLength(5) },
      testMaxLength: { maxLength: maxLength(10) },
      testRequired: { required },
      testInteger: { integer, required, minLength: minLength(3) },
    }

    const v$ = useVuelidate(rules, { testEmail, testMinLength, testMaxLength, testRequired, testInteger })

    const validateTest = async () => {
      const isFormCorrect = await v$.value.$validate()
      if (!isFormCorrect) return

      // バリデーションエラーじゃない場合にやりたい処理
    }

    return {
      testEmail,
      testInteger,
      testMinLength,
      testMaxLength,
      testRequired,
      validateTest,
      v$
    }
  }
})
</script>