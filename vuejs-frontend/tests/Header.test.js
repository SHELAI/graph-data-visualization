import { mount } from '@vue/test-utils'
import Header from '../src/components/layout/Header.vue'

describe('Header.vue', () => {
  it('renders the header correctly', () => {
    const wrapper = mount(Header)
    expect(wrapper.find('nav').exists()).toBe(true)
    expect(wrapper.find('.font-bold').text()).toBe('Graph Visulization')
    expect(wrapper.findAll('li').length).toBe(2)
  })

  it('has correct navigation links', () => {
    const wrapper = mount(Header)
    const links = wrapper.findAll('a')
    expect(links[0].text()).toBe('Graph Visulization')
    expect(links[1].text()).toBe('Home')
    expect(links[2].text()).toBe('About')
  })
})