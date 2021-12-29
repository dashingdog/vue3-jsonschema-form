import { CommonWidgetPropsDefine, CommonWidgetDefine } from '../types'
import { defineComponent } from 'vue'

const TextWidget: any = defineComponent({
  props: CommonWidgetPropsDefine,
  setup(props) {
    const handleChange = (e: any) => {
      const value = e.target.value
      e.target.value = props.value
      props.onChange(value)
    }
    return () => {
      return (
        <input type="text" value={props.value as any} onInput={handleChange} />
      )
    }
  },
})

export default TextWidget
