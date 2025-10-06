<!-- components/BlogCard.vue -->
<template>
  <a class="group flex flex-col focus:outline-hidden" :href="article.link">
    <div class="relative pt-[50%] sm:pt-[70%] rounded-xl overflow-hidden">
      <img
        class="size-full absolute top-0 start-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl"
        :src="article.image"
        :alt="article.title"
      />
    </div>
    <div class="mt-7">
      <h3
        class="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-neutral-300 dark:group-hover:text-white"
      >
        {{ article.title }}
      </h3>
      <p class="mt-3 text-gray-800 dark:text-neutral-200">
        {{ article.description }}
      </p>
      <p
        class="mt-5 inline-flex items-center gap-x-1 text-sm text-green-700 decoration-2 group-hover:underline font-medium dark:text-green-400"
      >
        {{ article.cta }}
        <svg
          class="shrink-0 size-4"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m9 18 6-6-6-6"
          />
        </svg>
      </p>
    </div>
  </a>
</template>

<script setup>
defineProps({
  article: {
    type: Object,
    required: true,
  },
});
</script>
