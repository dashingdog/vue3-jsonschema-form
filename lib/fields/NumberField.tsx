/*
 * @Description:
 * @Date: 2021-12-22 17:05:24
 */
import { FiledPropsDefine } from '../types'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'NumberFeild',
  props: FiledPropsDefine,
  setup() {
    return () => <div>Number field</div>
  },
})
