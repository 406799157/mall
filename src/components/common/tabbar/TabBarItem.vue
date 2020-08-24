<template>
  <div class="tab-bar-item" @click="itemClick">
    <slot v-if="!isActive" name='item-icon'></slot>
    <slot v-else name='item-icon-active'></slot>
    <div :style="activeStyle">
      <slot name='item-text'></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    path: String,
    activeColor: {
      type: String,
      default: '#ff6666'
    }
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) != -1;
    },
    activeStyle() {
      return this.isActive ? {color: this.activeColor } : {};
    }
  },
  methods: {
    itemClick() {
      this.$router.push(this.path);
    }
  }
}
</script>

<style>
  .tab-bar-item {
    flex: 1;
    height: 49px;
    background-color: #f6f6f6;
    text-align: center;
    font-size: 14px;
    font-weight: bold;
  }
  .tab-bar-item img {
    height: 24px;
    width: 24px;
    vertical-align: middle;
    margin-top: 3px;
  }
</style>