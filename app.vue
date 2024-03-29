<script setup lang="ts">
import { ref, onMounted } from 'vue'

const { $create } = useNuxtApp()
const animationRef = ref()
const animationUrl = computed(
  () => '/lottie/loading.json',
)

onMounted(() => {
  $create({
    player: animationRef.value
  })
})
</script>

<template>
  <div class="fixed top-0 left-0 bottom-0 right-0 bg-[rgba(255,255,255,0.9)] backdrop-blur-sm z-2 flex justify-center items-end">
    <lottie-player
        id="loadingAnimation"
        ref="animationRef"
        class="w-[1000px] h-[270px]"
        mode="normal"
        autoplay="true"
        loop="true"
        renderer="svg"
        speed="1"
        :src="animationUrl"
    />
  </div>

  <div class="py-10 px-12 max-w-[80%]">
    <p>Page content Page content Page content Page content Page content Page content Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lorem velit, scelerisque vel lectus quis, tincidunt suscipit arcu. Pellentesque sollicitudin tincidunt neque. Maecenas luctus turpis non mauris porttitor, ac luctus neque suscipit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur nunc mauris, semper vitae mauris et, finibus egestas ante. Integer molestie dui sed tellus efficitur, non vestibulum leo interdum. Sed pretium blandit mauris, non volutpat ante tincidunt at. Ut eu velit sollicitudin, posuere ipsum nec, tincidunt augue. </p>
    <p><br /><br />Nulla ultrices sollicitudin erat, quis rhoncus lorem consectetur non. Curabitur aliquam posuere ultrices. Pellentesque efficitur posuere semper. Quisque vestibulum, eros nec ultrices molestie, ipsum lectus placerat nisi, ut mattis elit nisi et nisi. Nulla ut orci in ligula laoreet venenatis. Morbi molestie vestibulum odio, id placerat turpis rutrum quis. Mauris ac nisi faucibus, accumsan odio in, rhoncus magna.</p>
    <p><br /><br />Duis sit amet varius mi, eu ultrices velit. Sed diam diam, interdum vel nunc non, viverra dictum nisi. Pellentesque vitae fermentum turpis. Aenean eu suscipit orci. Curabitur euismod neque quis lacus laoreet lacinia. Ut efficitur eros vitae lobortis posuere. Morbi eu diam vitae tellus tempor convallis. Mauris id ligula tempor, eleifend nisi faucibus, gravida est. Integer malesuada fermentum consequat. Etiam interdum, ipsum eget vulputate commodo, massa nibh pharetra quam, at interdum nisi lorem non elit. Vivamus molestie, lorem convallis eleifend ultrices, mi metus varius enim, eget blandit velit nulla dignissim tellus. Proin venenatis ante bibendum neque hendrerit, vitae interdum ex accumsan. Ut ultricies condimentum metus quis congue. Morbi viverra dui in tortor laoreet auctor. Nulla a vestibulum eros. Praesent purus turpis, convallis at rutrum non, hendrerit non urna.</p>
    <p><br /><br />Etiam interdum, ipsum eget vulputate commodo, massa nibh pharetra quam, at interdum nisi lorem non elit. Vivamus molestie, lorem convallis eleifend ultrices, mi metus varius enim, eget blandit velit nulla dignissim tellus. Proin venenatis ante bibendum neque hendrerit, vitae interdum ex accumsan. Ut ultricies condimentum metus quis congue. Morbi viverra dui in tortor laoreet auctor. Nulla a vestibulum eros. Praesent purus turpis, convallis at rutrum non, hendrerit non urna.</p>
    <p><br /><br />Duis sit amet varius mi, eu ultrices velit. Sed diam diam, interdum vel nunc non, viverra dictum nisi. Pellentesque vitae fermentum turpis. Aenean eu suscipit orci. Curabitur euismod neque quis lacus laoreet lacinia. Ut efficitur eros vitae lobortis posuere. Morbi eu diam vitae tellus tempor convallis. Mauris id ligula tempor, eleifend nisi faucibus, gravida est. Integer malesuada fermentum consequat. Etiam interdum, ipsum eget vulputate commodo, massa nibh pharetra quam, at interdum nisi lorem non elit. Vivamus molestie, lorem convallis eleifend ultrices, mi metus varius enim, eget blandit velit nulla dignissim tellus. Proin venenatis ante bibendum neque hendrerit, vitae interdum ex accumsan. Ut ultricies condimentum metus quis congue. Morbi viverra dui in tortor laoreet auctor. Nulla a vestibulum eros. Praesent purus turpis, convallis at rutrum non, hendrerit non urna.</p>
    <p><br /><br />Etiam interdum, ipsum eget vulputate commodo, massa nibh pharetra quam, at interdum nisi lorem non elit. Vivamus molestie, lorem convallis eleifend ultrices, mi metus varius enim, eget blandit velit nulla dignissim tellus. Proin venenatis ante bibendum neque hendrerit, vitae interdum ex accumsan. Ut ultricies condimentum metus quis congue. Morbi viverra dui in tortor laoreet auctor. Nulla a vestibulum eros. Praesent purus turpis, convallis at rutrum non, hendrerit non urna.</p>
  </div>
</template>
