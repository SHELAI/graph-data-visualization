import { mount } from "@vue/test-utils";
import Footer from '../src/components/layout/Footer.vue';

describe('Footer.vue', () => {
    it('renders the footer correctly', () => {
      const wrapper = mount(Footer)
      expect(wrapper.find('footer').exists()).toBe(true)
      expect(wrapper.find('div').text()).toBe('© 2024 - Sinan Helai')
    })
  })