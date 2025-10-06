<template>
  <Header />
  <div
    v-if="recipe"
    class="relative max-w-7xl w-full flex flex-wrap lg:grid lg:grid-cols-12 basis-full items-center px-4 md:px-6 lg:px-8 mx-auto py-14"
  >
    <!-- Bild -->
    <div class="lg:col-span-5 mb-8 lg:mb-0">
      <img
        :src="recipe.image"
        :alt="recipe.title"
        class="rounded-xl w-full object-cover shadow-md"
      />
    </div>

    <!-- Innehåll -->
    <div class="lg:col-span-7 lg:pl-12">
      <h1 class="text-4xl font-semibold text-gray-800 dark:text-white mb-4">
        {{ recipe.title }}
      </h1>

      <p
        class="text-gray-600 dark:text-neutral-400 mb-8 text-lg leading-relaxed"
      >
        {{ recipe.description }}
      </p>

      <div>
        <h2 class="text-2xl font-bold mt-6 mb-3">Ingredienser</h2>
        <slot name="ingredients">
          <p class="text-gray-700 dark:text-neutral-300">
            Ingredienser listas här…
          </p>
        </slot>

        <h2 class="text-2xl font-bold mt-8 mb-3">Gör så här</h2>
        <slot name="instructions">
          <p class="text-gray-700 dark:text-neutral-300">
            Instruktioner listas här…
          </p>
        </slot>
      </div>
    </div>
  </div>

  <div v-else class="text-center py-32">
    <h2 class="text-3xl font-semibold text-gray-800 dark:text-white">
      Recept hittades inte
    </h2>
    <p class="text-gray-600 dark:text-neutral-400 mt-2">
      Kontrollera länken eller gå tillbaka till
      <router-link
        to="/recept"
        class="text-green-600 underline hover:text-green-700"
        >alla recept</router-link
      >.
    </p>
  </div>
  <Footer />
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";

import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

const route = useRoute();
const recipe = ref(null);

// 🔹 Dynamisk import av alla .json filer
const recipeFiles = import.meta.glob("@/content/blog/*.json", { eager: true });

onMounted(() => {
  const slug = route.params.slug;
  const path = `/src/content/blog/${slug}.json`;
  recipe.value = recipeFiles[path] || null;
});
</script>
