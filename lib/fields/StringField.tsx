/*
 * @Description:
 * @Date: 2021-12-22 17:05:13
 */
import { FiledPropsDefine, CommonWidgetNames } from '../types'
import { defineComponent } from 'vue'
import { getWidget } from '../theme'
export default defineComponent({
  name: 'StringFeild',
  props: FiledPropsDefine,
  setup(props) {
    const handleChange = (v: string) => {
      // console.log(e)
      props.onChange(v)
    }
    const TextWidgetRef = getWidget(CommonWidgetNames.TextWidget)
    return () => {
      const { schema, rootSchema, ...rest } = props
      const TextWidget = TextWidgetRef.value
      return <TextWidget {...rest} onChange={handleChange} />
    }
  },
})
