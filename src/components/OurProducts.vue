<!-- components/OurProducts.vue -->
<template>
  <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
    <div class="md:grid md:grid-cols-2 md:items-center md:gap-12 xl:gap-32">
      <div>
        <img class="rounded-xl" :src="karoonBagImage" alt="Karoon Basmatiris" />
      </div>
      <div class="mt-5 sm:mt-10 lg:mt-0">
        <div class="space-y-6 sm:space-y-8">
          <!-- Title -->
          <div class="space-y-2 md:space-y-4">
            <h1
              class="mb-4 font-semibold text-gray-800 text-4xl lg:text-5xl dark:text-white"
            >
              Våra produkter
            </h1>

            <p class="text-gray-500 dark:text-neutral-200">
              Ett naturligt gott och hälsosamt basmatiris – odlat med omsorg,
              förfinat med tradition och framtaget för att ge bästa
              smakupplevelse.
            </p>

            <p class="text-gray-500 dark:text-neutral-200">
              Våra påsar finns i 1, 2, 5, 10 eller 20 kilo. 👉 1 kg räcker till
              ca 13 måltider för 1 person.
            </p>

            <p class="text-gray-500 dark:text-neutral-200">
              Med Karoon får du alltid ett långkornigt ris som håller sig
              luftigt, doftar härligt och lyfter varje måltid – från vardagens
              enkla rätter till festens större middagar.
            </p>
          </div>
          <!-- End Title -->

          <!-- List -->
          <ul class="space-y-2 sm:space-y-4">
            <li class="flex gap-x-3">
              <div class="grow">
                <span
                  class="text-sm sm:text-base text-gray-500 dark:text-neutral-200"
                >
                  🌱 <span class="font-bold">Naturligt</span> – odlat och testat
                  för ren smak
                </span>
              </div>
            </li>

            <li class="flex gap-x-3">
              <div class="grow">
                <span
                  class="text-sm sm:text-base text-gray-500 dark:text-neutral-200"
                >
                  ⚖️ <span class="font-bold">Rättvist</span> – bönderna får
                  rättvist betalt
                </span>
              </div>
            </li>

            <li class="flex gap-x-3">
              <div class="grow">
                <span
                  class="text-sm sm:text-base text-gray-500 dark:text-neutral-200"
                >
                  ✨ <span class="font-bold">Kvalité</span> – långkornigt ris
                  som alltid är luftigt
                </span>
              </div>
            </li>
          </ul>
          <!-- End List -->

          <div class="pt-6">
            <a
              href="#aterforsaljare"
              class="inline-block rounded-full bg-green-700 px-6 py-3 text-white font-semibold shadow hover:bg-green-900 transition"
            >
              Hitta återförsäljare
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import karoonBagImage from "@/assets/img/karoon-bag.png";
</script>
