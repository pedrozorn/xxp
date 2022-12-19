<template>
  <div>
    <b-navbar class="footer" type="dark" variant="dark">
      <footer class="secondary">
        <div class="copy-right">
          Copyright xxP {{ new Date().getFullYear() }}. All right reserved
        </div>
      </footer>
    </b-navbar>
  </div>
</template>

<style lang="scss" scoped>
.footer {
  color: wheat;
  text-align: center;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
}

.copy-right {
  font-size: 1.0rem;
  margin: 0 auto;
}
</style>