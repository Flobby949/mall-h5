<template>
  <div class="address-box">
    <s-Header title="地址管理" :back="'/user'">
      <template v-slot:icon1>
        <i class="iconfont icon-fanhui"></i>
      </template>
      <template v-slot:icon2>
        <i class="iconfont icon-more"></i>
      </template>
    </s-Header>
    <div class="address-item">
      <van-address-list
        v-if="from != 'mine'"
        v-model="chosenAddressId"
        :list="list"
        default-tag-text="默认"
        @add="onAdd"
        @edit="onEdit"
        @select="select"
      />
      <van-address-list
        v-else
        v-model="chosenAddressId"
        :list="list"
        default-tag-text="默认"
        @add="onAdd"
        @edit="onEdit"
      />
    </div>
  </div>
</template>

<script>
import { Toast } from 'vant'
import { getAddressList } from '../service/address'
import sHeader from '@/components/SimpleHeader'
export default {
  name: 'Address',
  components: {
    sHeader,
  },
  data() {
    return {
      chosenAddressId: '1',
      list: [],
      from: this.$route.query.from,
    }
  },
  async mounted() {
    const { data } = await getAddressList()
    this.list = data.map((item) => {
      return {
        id: item.addressId,
        name: item.userName,
        tel: item.userPhone,
        address: `${item.provinceName}-${item.cityName}-${item.regionName} ${item.detailAddress}`,
        isDefault: !!item.defaultFlag,
      }
    })
    if (this.list.length == 0) {
      Toast.fail('暂无地址')
    }
  },
  methods: {
    onAdd() {
      this.$router.push({
        path: `address-edit?type=add&from=${this.from}`,
      })
    },
    onEdit(item, index) {
      this.$router.push({
        path: `address-edit?type=edit&addressId=${item.id}&from=${this.from}`,
      })
    },
    select(item, index) {
      this.$router.push({
        path: `create-order&addressId=${item.id}&from=${this.from}`,
      })
    },
  },
}
</script>

<style lang="less" scoped>
@import '../common/style/mixin.less';
.address-box {
  .van-radio__icon {
    display: none;
  }
  .address-item {
    margin-top: 44px;
    .van-button {
      background: @primary;
      border-color: @primary;
    }
  }
}
</style>