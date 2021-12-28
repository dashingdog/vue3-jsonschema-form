import { mount, shallowMount } from '@vue/test-utils'
import JsonSchemaForm, { NumberFiled } from '../../lib'

describe('JsonSchemaFrom', () => {
  it('should render correct number field', async () => {
    let value: string | number = ''
    const wrapper = mount(JsonSchemaForm, {
      props: {
        schema: {
          type: 'number',
        },
        value,
        onChange: (v: string | number) => {
          value = v
        },
      },
    })
    const numberFiled = wrapper.findComponent(NumberFiled)
    expect(numberFiled.exists()).toBeTruthy()
  })
})
