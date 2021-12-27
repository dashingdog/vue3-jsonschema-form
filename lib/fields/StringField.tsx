/*
 * @Description:
 * @Date: 2021-12-22 17:05:13
 */
import { FiledPropsDefine } from '../types'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'StringFeild',
  props: FiledPropsDefine,
  setup() {
    return () => <div>String field</div>
  },
})
