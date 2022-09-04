## install

```bash
pnpm install @zhu-hong/confirm-box
```

## attention
> Make sure you have registered the dialog and button components of element-ui

## usage
```ts
import { useConfirmBox } from '@zhu-hong/confirm-box'

useConfirmBox(config: IConfirmBoxConfig)

interface IConfirmBoxConfig {
  /**
   * @default '提示'
   * @description 标题文字
   */
  title: string
  /**
   * @default '😅'
   * @description 内容
   */
  content: string
  /**
   * @default false
   * @description 确认按钮是否为危险类型
   */
  isDanger: boolean
  /**
   * @default true
   * @description 显示取消按钮
   */
  showCancel: boolean
  /**
   * @default '确定'
   * @description 确认按钮文字
   */
  confirmText: string
  /**
   * @default '取消'
   * @description 取消按钮文字
   */
  cancelText: string
  /**
   * @default '#FF9900'
   * @description 图标颜色
   */
  fill: string
  /**
   * @default false
   * @description 显示关闭按钮
   */
  showClose: boolean,
  /**
   * @default '440px'
   * @description 确认框宽度
   */
  width: string
  /**
   * @default '15vh
   * @description 确认框距离顶部的距离
   */
  top: string
  /**
   * @default true
   * @description 显示遮罩层
   */
  modal: boolean
}
```