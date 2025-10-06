<!-- components/BlogSection.vue -->
<template>
  <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
    <!-- Title -->
    <div class="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
      <h2
        class="mb-4 font-semibold text-gray-800 text-4xl lg:text-5xl dark:text-white"
      >
        Inspiration & Recept
      </h2>
      <p class="mt-1 text-gray-600 dark:text-neutral-400">
        Upptäck nya sätt att njuta av vårt långkorniga basmatiris.
      </p>
    </div>
    <!-- End Title -->

    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <BlogCard v-for="(article, i) in articles" :key="i" :article="article" />

      <a
        class="group relative flex flex-col w-full min-h-60 bg-[url('https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80')] bg-center bg-cover rounded-xl hover:shadow-lg transition"
        href="/aktuellt"
      >
        <div class="flex-auto p-4 md:p-6">
          <h3 class="text-xl text-white/90 group-hover:text-white font-bold">
            Våra värderingar
          </h3>
          <p class="mt-2 text-white/80">
            Läs mer om vårt arbete med kvalité, miljö och rättvisa villkor.
          </p>
        </div>
        <div class="pt-0 p-4 md:p-6">
          <div
            class="inline-flex items-center gap-2 text-sm font-medium text-white group-hover:text-white/70"
          >
            Läs mer
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
          </div>
        </div>
      </a>
    </div>
  </div>
</template>

<script setup>
import BlogCard from "@/components/BlogCard.vue";

import stektris from "@/content/blog/stektris.json";
import festlig from "@/content/blog/festlig.json";

const articles = [stektris, festlig];
</script>
