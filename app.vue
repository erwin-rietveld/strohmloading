<script setup lang="ts">
import { ref, onMounted } from "vue";

// const { $create } = useNuxtApp()
// const animationRef = ref()
// const animationUrl = computed(
//   () => '/lottie/loading.json',
// )

// onMounted(() => {
//   $create({
//     player: animationRef.value
//   })
// })

const loading = ref(true);
</script>

<template>
  <div
    class="fixed top-0 left-0 bottom-0 right-0 bg-[rgba(255,255,255,0.9)] backdrop-blur-sm z-2 flex justify-center items-center text-[#FF8F00]"
    v-if="loading"
  >
    <div class="flex items-center gap-5">
      <div class="relative w-[70px] h-[70px]">
        <svg
          width="60"
          height="70"
          viewBox="0 0 40 50"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0"
            d="M1.49707 10.9415L0 11.386C1.49708 16.2983 2.269 21.4445 2.269 26.731C2.269 31.3392 1.68421 35.8538 0.538009 40.1813L2.03508 40.579C3.20467 36.1111 3.83626 31.4562 3.83626 26.731C3.83626 21.3041 3.04093 15.9942 1.49707 10.9415ZM7.81286 9.02341L4.65497 9.98247C6.2924 15.3392 7.1345 20.9766 7.1345 26.731C7.1345 31.7602 6.47953 36.6959 5.23976 41.4445L8.44444 42.2866C9.77777 37.2807 10.4561 32.0643 10.4561 26.731C10.4327 20.6491 9.54386 14.6842 7.81286 9.02341Z"
          >
            <animate
              id="op"
              attributeType="CSS"
              attributeName="opacity"
              values="0;1;0"
              dur="0.4s"
              begin="0s;op3.end"
              repeatCount="0"
            />
          </path>
          <path
            opacity="0"
            d="M13.0701 7.42087L11.2281 7.97096C13.0701 14.0509 14.0199 20.4203 14.0199 26.9634C14.0199 32.6669 13.3004 38.2546 11.8901 43.6107L13.7321 44.1029C15.1712 38.5731 15.9483 32.8117 15.9483 26.9634C15.9483 20.2466 14.9697 13.6745 13.0701 7.42087ZM20.8412 5.04681L16.9557 6.23384C18.9704 12.8638 20.0065 19.8412 20.0065 26.9634C20.0065 33.1881 19.2007 39.2969 17.6752 45.1741L21.6183 46.2164C23.2589 40.0207 24.0936 33.5644 24.0936 26.9634C24.0648 19.4359 22.9711 12.0532 20.8412 5.04681Z"
          >
            <animate
              id="op2"
              attributeType="CSS"
              attributeName="opacity"
              values="0;1;0"
              dur="0.4s"
              begin="op.end"
              repeatCount="0"
            />
          </path>
          <path
            opacity="0"
            d="M26.5714 3.48899L24.3275 4.15785C26.5714 11.5504 27.7284 19.2951 27.7284 27.2509C27.7284 34.1859 26.8519 40.98 25.1339 47.4926L27.3778 48.091C29.1309 41.3673 30.0776 34.3619 30.0776 27.2509C30.0776 19.0839 28.8855 11.0928 26.5714 3.48899ZM36.038 0.602356L31.3047 2.04567C33.759 10.1071 35.0213 18.591 35.0213 27.2509C35.0213 34.8195 34.0395 42.2474 32.1813 49.3935L36.9847 50.6608C38.9832 43.1274 40 35.2772 40 27.2509C39.9649 18.0982 38.6326 9.12145 36.038 0.602356Z"
          >
            <animate
              id="op3"
              attributeType="CSS"
              attributeName="opacity"
              values="0;1;0"
              dur="0.4s"
              begin="op2.end"
              repeatCount="0"
            />
          </path>
        </svg>
      </div>
      <span class="text-black">Just a moment ..</span>
    </div>
  </div>

  <div class="py-10 px-12 max-w-[80%]">
    <p>
      Page content Page content Page content Page content Page content Page
      content Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lorem
      velit, scelerisque vel lectus quis, tincidunt suscipit arcu. Pellentesque
      sollicitudin tincidunt neque. Maecenas luctus turpis non mauris porttitor,
      ac luctus neque suscipit. Pellentesque habitant morbi tristique senectus
      et netus et malesuada fames ac turpis egestas. Curabitur nunc mauris,
      semper vitae mauris et, finibus egestas ante. Integer molestie dui sed
      tellus efficitur, non vestibulum leo interdum. Sed pretium blandit mauris,
      non volutpat ante tincidunt at. Ut eu velit sollicitudin, posuere ipsum
      nec, tincidunt augue.
    </p>
    <p>
      <br /><br />Nulla ultrices sollicitudin erat, quis rhoncus lorem
      consectetur non. Curabitur aliquam posuere ultrices. Pellentesque
      efficitur posuere semper. Quisque vestibulum, eros nec ultrices molestie,
      ipsum lectus placerat nisi, ut mattis elit nisi et nisi. Nulla ut orci in
      ligula laoreet venenatis. Morbi molestie vestibulum odio, id placerat
      turpis rutrum quis. Mauris ac nisi faucibus, accumsan odio in, rhoncus
      magna.
    </p>
    <p>
      <br /><br />Duis sit amet varius mi, eu ultrices velit. Sed diam diam,
      interdum vel nunc non, viverra dictum nisi. Pellentesque vitae fermentum
      turpis. Aenean eu suscipit orci. Curabitur euismod neque quis lacus
      laoreet lacinia. Ut efficitur eros vitae lobortis posuere. Morbi eu diam
      vitae tellus tempor convallis. Mauris id ligula tempor, eleifend nisi
      faucibus, gravida est. Integer malesuada fermentum consequat. Etiam
      interdum, ipsum eget vulputate commodo, massa nibh pharetra quam, at
      interdum nisi lorem non elit. Vivamus molestie, lorem convallis eleifend
      ultrices, mi metus varius enim, eget blandit velit nulla dignissim tellus.
      Proin venenatis ante bibendum neque hendrerit, vitae interdum ex accumsan.
      Ut ultricies condimentum metus quis congue. Morbi viverra dui in tortor
      laoreet auctor. Nulla a vestibulum eros. Praesent purus turpis, convallis
      at rutrum non, hendrerit non urna.
    </p>
    <p>
      <br /><br />Etiam interdum, ipsum eget vulputate commodo, massa nibh
      pharetra quam, at interdum nisi lorem non elit. Vivamus molestie, lorem
      convallis eleifend ultrices, mi metus varius enim, eget blandit velit
      nulla dignissim tellus. Proin venenatis ante bibendum neque hendrerit,
      vitae interdum ex accumsan. Ut ultricies condimentum metus quis congue.
      Morbi viverra dui in tortor laoreet auctor. Nulla a vestibulum eros.
      Praesent purus turpis, convallis at rutrum non, hendrerit non urna.
    </p>
    <p>
      <br /><br />Duis sit amet varius mi, eu ultrices velit. Sed diam diam,
      interdum vel nunc non, viverra dictum nisi. Pellentesque vitae fermentum
      turpis. Aenean eu suscipit orci. Curabitur euismod neque quis lacus
      laoreet lacinia. Ut efficitur eros vitae lobortis posuere. Morbi eu diam
      vitae tellus tempor convallis. Mauris id ligula tempor, eleifend nisi
      faucibus, gravida est. Integer malesuada fermentum consequat. Etiam
      interdum, ipsum eget vulputate commodo, massa nibh pharetra quam, at
      interdum nisi lorem non elit. Vivamus molestie, lorem convallis eleifend
      ultrices, mi metus varius enim, eget blandit velit nulla dignissim tellus.
      Proin venenatis ante bibendum neque hendrerit, vitae interdum ex accumsan.
      Ut ultricies condimentum metus quis congue. Morbi viverra dui in tortor
      laoreet auctor. Nulla a vestibulum eros. Praesent purus turpis, convallis
      at rutrum non, hendrerit non urna.
    </p>
    <p>
      <br /><br />Etiam interdum, ipsum eget vulputate commodo, massa nibh
      pharetra quam, at interdum nisi lorem non elit. Vivamus molestie, lorem
      convallis eleifend ultrices, mi metus varius enim, eget blandit velit
      nulla dignissim tellus. Proin venenatis ante bibendum neque hendrerit,
      vitae interdum ex accumsan. Ut ultricies condimentum metus quis congue.
      Morbi viverra dui in tortor laoreet auctor. Nulla a vestibulum eros.
      Praesent purus turpis, convallis at rutrum non, hendrerit non urna.
    </p>
  </div>

  <!-- <div class="fixed top-0 left-0 bottom-0 right-0 bg-[rgba(255,255,255,0.9)] backdrop-blur-sm z-2 flex justify-center items-end">
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
  </div>-->
</template>
