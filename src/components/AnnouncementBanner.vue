<!-- components/AnnouncementBanner.vue -->
<template>
  <div class="py-2 bg-black text-center dark:bg-white">
    <div class="max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto">
      <p class="text-sm text-white dark:text-black">
        {{ message }}
      </p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  message: {
    type: String,
    default: "Äkta långkornigt basmatiris, finns i butiker över hela Sverige",
  },
});
</script>
