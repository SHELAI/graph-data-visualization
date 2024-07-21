import { expect } from 'vitest'
import { config } from '@vue/test-utils'
import { vi } from 'vitest'

// Setup a mock for the Vue Router
config.global.mocks = {
  $router: {
    push: vi.fn()
  }
}

// Extend expect to include custom matchers (optional)
expect.extend({
  // Custom matchers can be added here
})
