<template>
  <div>
    <pre>{{ data }}</pre>
  </div>
</template>

<script>

export default {
  data: () => ({
    name: '',
    company: '',
    email: '',
    message: '',
    title: 'Contact',
    contents: '',
    sample: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
  }),

  async asyncData({ $microcms }) {
    const data = await $microcms.get({
      endpoint: 'contact',
    });
    return { data };
  }
}
</script>