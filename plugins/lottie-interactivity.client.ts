import { create } from '@lottiefiles/lottie-interactivity'

export default defineNuxtPlugin(() => {
  return {
    provide: {
      create: create,
    },
  }
})
