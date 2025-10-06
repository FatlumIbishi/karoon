<!-- components/Hero.vue -->
<template>
  <div class="px-4 sm:px-6 lg:px-8">
    <div class="relative h-120 md:h-[80dvh] rounded-2xl overflow-hidden">
      <!-- Video Background -->
      <video
        class="absolute inset-0 w-full h-full object-cover"
        :src="videoSrc"
        autoplay
        muted
        loop
        playsinline
      ></video>

      <!-- Overlay -->
      <div class="absolute inset-0 bg-black/40"></div>

      <!-- Hero Content -->
      <div
        class="relative mt-auto w-2/3 md:max-w-lg ps-5 pb-5 md:ps-10 md:pb-10 flex flex-col h-full justify-end"
      >
        <h1 class="text-xl md:text-3xl lg:text-5xl text-white">
          {{ title }}
        </h1>
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  videoSrc: {
    type: String,
    default: "https://karoon.se/media/video.e2dcde27.mp4",
  },
  title: {
    type: String,
    default: "Äkta långkornigt basmatiris",
  },
});
</script>
