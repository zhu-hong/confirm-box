<script>
export default {
  props: {
    resolve: Function,
    reject: Function,
    title: {
      type: String,
      default: '提示',
    },
    content: {
      type: String,
      default: '😅',
    },
    isDanger: {
      type: Boolean,
      default: false,
    },
    showCancel: {
      type: Boolean,
      default: true,
    },
    confirmText: {
      type: String,
      default: '确定',
    },
    cancelText: {
      type: String,
      default: '取消',
    },
    fill: {
      type: String,
      default: '#FF9900',
    },
    showClose: {
      type: Boolean,
      default: false,
    },
    width: {
      type: String,
      default: '440px',
    },
    top: {
      type: String,
      default: '25vh',
    },
    modal: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      visible: false,
    }
  },
  mounted() {
    this.visible = true
  },
  methods: {
    useDestroy() {
      this.visible = false      
      const timeout = setTimeout(() => {
        this.$destroy()
        this.$el.remove()
        clearTimeout(timeout)
      }, 300)
    },
    useResolve() {
      this.resolve('zh-confirmbox: resolve')
      this.useDestroy()
    },
    useReject() {
      this.reject('zh-confirmbox: reject')
      this.useDestroy()
    },
  },
}
</script>

<template>
  <el-dialog
    custom-class="zh-confirmbox"
    :show-close="false"
    :close-on-click-modal="false" 
    :visible.sync="visible" 
    :append-to-body="true"
    :modal-append-to-body="true"
    :width="width"
    :top="top"
    :modal="modal"
  >
    <div class="zh-confirmbox-header">
      <svg class="zh-confirmbox-header-icon" xmlns="http://www.w3.org/2000/svg" width="24px" height="24px"><path d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1Zm0 14.3a1.3 1.3 0 1 0 0 2.6 1.3 1.3 0 0 0 0-2.6ZM12 6a1 1 0 0 0-1 1v6a1 1 0 0 0 2 0V7a1 1 0 0 0-1-1Z" :fill="fill" fill-rule="nonzero"/></svg>
      <span class="zh-confirmbox-header-text">{{ title }}</span>
      <svg @click="useDestroy" v-show="showClose" class="zh-confirmbox-header-close" width="24px" height="24px" xmlns="http://www.w3.org/2000/svg"><path d="M17.071 2.929a.833.833 0 0 1 0 1.178L11.18 10l5.892 5.893a.833.833 0 0 1-1.178 1.178L10 11.18l-5.893 5.89a.833.833 0 0 1-1.178-1.178l5.893-5.894L2.93 4.107A.833.833 0 1 1 4.107 2.93l5.894 5.892 5.892-5.892a.833.833 0 0 1 1.178 0Z" fill="#646A73" fill-rule="evenodd"/></svg>
    </div>
    <div class="zh-confirmbox-content" v-html="content"></div>
    <div class="zh-confirmbox-footer">
      <el-button @click="useReject" size="small" v-show="showCancel">{{ cancelText }}</el-button>
      <el-button @click="useResolve" size="small" :type="isDanger ? 'danger' : 'primary'">{{ confirmText }}</el-button>
    </div>
  </el-dialog>
</template>

<style lang="scss">
.zh-confirmbox {
  border-radius: 8px !important;
  overflow: hidden;
  .el-dialog {
    &__header, &__footer {
      padding: 0;
      display: none;
    }
    &__body {
      padding: 24px;
      color: #000C25;
      display: flex;
      flex-direction: column;
    }
  }
  &-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 16px;

    &-icon {
      flex: none;
    }
    &-text {
      flex: 1;
      font-size: 16px;
      font-weight: 500;
    }
    &-close {
      cursor: pointer;
    }
  }
  &-content {
    margin: 16px 0 24px 40px;
    font-size: 14px;
  }
  &-footer {
    display: flex;
    justify-content: flex-end;

    .el-button {
      min-width: 72px;
      height: 32px;
      font-size: 14px;
      display: flex;
      justify-content: center;
      align-items: center;

      &--default {
        color: #646A73;
        border-color: #DFE3E9;
      }
    }
  }
}
</style>
