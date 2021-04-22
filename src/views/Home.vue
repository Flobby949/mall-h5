<template>
  <div class="home">
    <s-header title="首页">
      <template v-slot:icon1>
        <i class="iconfont icon-scan" @click.stop></i>
      </template>
      <template v-slot:icon2>
        <i class="iconfont icon-login" @click="login"></i>
      </template>
    </s-header>
  </div>
</template>
<script>
import sHeader from '@/components/SimpleHeader'
export default {
  name: 'Home',
  components: {
    sHeader,
  },
  methods: {
    login() {
      this.$router.push('/login')
    },
  },
}
</script>
<style lang="less" scoped>
.iconfont {
  color: #6e6e6e;
}
</style>