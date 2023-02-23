import { defineConfig } from 'cypress'

export default defineConfig({
  env: {
    email: 'test@test.com',
    password: '123'
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    }
  }
})
