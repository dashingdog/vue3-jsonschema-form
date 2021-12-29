/*
 * @Description:
 * @Date: 2021-12-22 17:05:24
 */
import { defineComponent } from 'vue'
import { FiledPropsDefine, CommonWidgetNames } from '../types'
import { getWidget } from '../theme'

export default defineComponent({
  name: 'NumberFeild',
  props: FiledPropsDefine,
  setup(props) {
    const handleChange = (v: string) => {
      const num = Number(v)

      if (Number.isNaN(num)) {
        props.onChange(undefined)
      } else {
        props.onChange(num)
      }
    }
    const NumberWidgetRef = getWidget(CommonWidgetNames.NumberWidget)
    return () => {
      const NumberWidget = NumberWidgetRef.value
      const { schema, rootSchema, ...rest } = props
      // return <input value={value as any} type="number" onInput={handleChange} />
      return <NumberWidget {...rest} onChange={handleChange} />
    }
  },
})
