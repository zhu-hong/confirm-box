<script>
import { useConfirmBox } from '../../src'

export default {
  methods: {
    confirmBox() {
      useConfirmBox({
        content: `
第一：绝对不意气用事
第二：绝对不漏判任何一件坏事
第三：绝对裁判的公正漂亮
裁判机器人蜻蜓队长前来进见`,
      })
    },
  },
}
</script>

<template>
  <el-button @click="confirmBox" type="primary" style="font-size: large;position: fixed;top: 50%;left: 50%;transform: translate(-50%,-50%);">😲</el-button>
</template>
