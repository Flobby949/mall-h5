<template>
  <div>
    <s-header title="详情">
      <template v-slot:icon1>
        <i class="iconfont icon-fanhui"></i>
      </template>
      <template v-slot:icon2>
        <i class="iconfont icon-more"></i>
      </template>
    </s-header>
  </div>
</template>
<script>
import sHeader from '@/components/SimpleHeader'
export default {
  name: 'Detail',
  components: {
    sHeader,
  },
}
</script>
<style lang="less" scoped></style>