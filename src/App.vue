<template>
  <div id="app">
    <transition :name="transitionName">
      <router-view class="router-view" />
    </transition>
    <nav-bar v-if="isShowNav"></nav-bar>
  </div>
</template>
<script>
import navBar from '@/components/NavBar'
export default {
  data() {
    return {
      transitionName: 'slide-left',
      isShowNav: true,
      ShowMenuList: ['/', '/home', '/category', '/cart', '/user'],
    }
  },
  components: { navBar },
  watch: {
    $route(to, from) {
      if (this.ShowMenuList.includes(to.path)) {
        this.isShowNav = true
      } else {
        this.isShowNav = false
      }
      if (to.meta.index > from.meta.index) {
        this.transitionName = 'slide-left'
      } else if (to.meta.index < from.meta.index) {
        this.transitionName = 'slide-right'
      } else {
        this.transitionName = ''
      }
    },
  },
}
</script>


<style lang="less">
@import './common/style/mixin';
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  position: absolute;
  top: 0;
  left: 50%;
  z-index: 1000;
}
.router-view {
  width: 100%;
  height: auto;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: 0 auto;
  -webkit-overflow-scrolling: touch;
}
.slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active {
  height: 100%;
  will-change: transform;
  transition: all 500ms;
  position: absolute;
  backface-visibility: hidden;
}
.slide-right-enter {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
.slide-right-leave-active {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.slide-left-enter {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.slide-left-leave-active {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
</style>