<template>
  <div class="seting-box">
    <s-header :title="'账号管理'">
      <template v-slot:icon1>
        <i class="iconfont icon-fanhui"></i>
      </template>
      <template v-slot:icon2>
        <i class="iconfont icon-more"></i>
      </template>
    </s-header>
    <div class="input-item">
      <van-field v-model="nickName" label="昵称" />
      <van-field v-model="introduceSign" label="个性签名" />
      <van-field v-model="password" type="password" label="修改密码" />
      <van-image
        round
        width="80px"
        height="80px"
        :src="avatar"
        style="margin-left: 10px"
        @click="handleClick"
      ></van-image>
      <div style="display: none">
        <input type="file" @change="onChange" ref="selectFile" />
      </div>
    </div>
    <van-button class="save-btn" color="#c40000" type="primary" @click="save" block>保存</van-button>
    <van-button class="save-btn" color="#c40000" type="primary" @click="logout" block>退出登录</van-button>
  </div>
</template>

<script>
import sHeader from '@/components/SimpleHeader'
import { getUserInfo, editUserInfo, logout } from '../service/user'
import { setLocal } from '@/common/js/utils'
import { Toast } from 'vant'
import { getOssClient } from '../utils/client'
import { renameFile } from '../utils/utils'
export default {
  name: 'Setting',
  components: {
    sHeader,
  },
  data() {
    return {
      nickName: '',
      introduceSign: '',
      password: '',
      avatar: '',
      file: {},
    }
  },
  async mounted() {
    const { data } = await getUserInfo()
    this.nickName = data.nickName
    this.introduceSign = data.introduceSign
    this.avatar = data.avatar
  },
  methods: {
    handleClick() {
      console.log(this.$refs)
      this.$refs.selectFile.click()
    },
    onChange(e) {
      let _this = this
      //确定选中的文件
      this.file = this.$refs.selectFile.files[0]
      if (!e || !window.FileReader) return // 判断是否支持FileReader
      let reader = new FileReader()
      reader.readAsDataURL(this.file) // 文件转换
      reader.onloadend = function () {
        _this.avatar = this.result
      }
    },
    async save() {
      let _this = this
      let _client = getOssClient()
      async function put() {
        try {
          let fileName = renameFile(_this.file.name)
          let prefix = _client.options.prefix
          let result = await _client.put(`${prefix}/${fileName}`, _this.file)
          _this.avatar = result.url
          const params = {
            introduceSign: _this.introduceSign,
            nickName: _this.nickName,
            passwordMd5: _this.$md5(_this.password),
            avatar: _this.avatar,
          }
          const { message } = await editUserInfo(params)
          if (message == 'SUCCESS') {
            Toast.success('保存成功')
            _this.$router.push({ path: 'user' })
          }
        } catch (e) {
          console.log(e)
        }
      }
      put()
    },
    async logout() {
      const { resultCode } = await logout()
      if (resultCode == 200) {
        setLocal('token', '')
        setLocal('userId', '')
        window.location.href = '/'
      }
    },
  },
}
</script>

<style lang="less" scoped>
.hidden {
  display: hidden;
}
.seting-box {
  .input-item {
    margin-top: 44px;
  }
  .save-btn {
    width: 80%;
    margin: 20px auto;
  }
}
</style>