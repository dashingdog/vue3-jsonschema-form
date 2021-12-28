/*
 * @Description:
 * @Date: 2021-12-22 17:05:13
 */
import { FiledPropsDefine } from '../types'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'StringFeild',
  props: FiledPropsDefine,
  setup(props) {
    const handleChange = (e: any) => {
      console.log(e)
      props.onChange(e.target.value)
    }
    return () => {
      const { value } = props
      return <input type="text" value={value as any} onInput={handleChange} />
    }
  },
})
