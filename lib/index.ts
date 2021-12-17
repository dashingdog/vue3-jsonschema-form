/*
 * @Description:
 * @Date: 2021-12-17 17:02:08
 */
import { defineComponent, h } from 'vue'

export default defineComponent({
  setup(p, { slots }) {
    return () => h('div', 'this is form')
  },
})
