import Vue from 'vue'
import _ConfirmBoxVue from './ConfirmBox.vue'

/** 
 * @param { object } config
 * @param { string } config.title
 * @param { string } config.content
 * @param { boolean } config.isDanger
 * @param { boolean } config.showCancel
 * @param { string } config.confirmText
 * @param { string } config.cancelText
 * @param { string } config.fill
 * @param { string } config.showClose
 * @param { string } config.width
 * @param { string } config.top
 * @param { string } config.modal
 * @returns { Promise<string> }
*/
export function useConfirmBox(config) {
  return new Promise((resolve, reject) => {
    const _ConfirmBox = new Vue({
      render(h) {
        return h(
          _ConfirmBoxVue, {
            props: {
              resolve,
              reject,
              ...config,
            },
          }
        )
      },
    }).$mount()

    document.body.append(_ConfirmBox.$el)
  })
}
