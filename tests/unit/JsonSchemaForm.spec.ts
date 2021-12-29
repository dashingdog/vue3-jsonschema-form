import { mount, shallowMount } from '@vue/test-utils'
import JsonSchemaForm, { NumberFiled } from '../../lib'

describe('JsonSchemaForm', () => {
  it('should render correct number field', async () => {
    let value: any = ''
    const wrapper = mount(JsonSchemaForm, {
      props: {
        schema: {
          type: 'number',
        },
        value,
        onChange: (v: any) => {
          value = v
        },
      },
    })
    const numberFiled = wrapper.findComponent(NumberFiled)
    expect(numberFiled.exists()).toBeTruthy()
    // await numberFiled.props('onChange')('123')
    const input = numberFiled.find('input')
    input.element.value = '123'
    input.trigger('input')
    expect(value).toBe(123)
  })

  // it('schema type is not supported', async () => {
  //   let value: any =""
  //   const wrapper = mount(JsonSchemaForm, {
  //     props: {
  //       schema: {
  //         type: 'someType',
  //       },
  //       value,
  //       onChange: (v: any) => {
  //         value = v
  //       },
  //     },
  //   })
  //   const numberFiled = wrapper.findComponent(NumberFiled)
  //   expect(numberFiled.exists()).not.toBeTruthy()
  // })
})
