import * as LottiePlayer from '@lottiefiles/lottie-player'

export default defineNuxtPlugin((nuxtApp) =>
  nuxtApp.provide('lottieplayer', LottiePlayer),
)
