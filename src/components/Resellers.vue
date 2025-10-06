<!-- components/Resellers.vue -->
<template>
  <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
    <!-- Title -->
    <div class="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
      <h2
        class="mb-4 font-semibold text-gray-800 text-4xl lg:text-5xl dark:text-white"
      >
        Våra återförsäljare
      </h2>
      <p class="mt-1 text-gray-600 dark:text-neutral-400">
        Hitta butiker och grossister som säljer Karoon ris.
      </p>
    </div>

    <!-- Logos -->
    <div
      class="my-8 md:my-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 sm:gap-x-12 lg:gap-x-16 items-center"
    >
      <a href="https://www.coop.se/" target="_blank">
        <img
          src="/img/aterforsaljare/stora-coop.png"
          alt="Stora Coop"
          class="w-40 h-12 md:h-14 mx-auto object-contain opacity-80 hover:opacity-100"
        />
      </a>
      <a href="https://www.oob.se/" target="_blank">
        <img
          src="/img/aterforsaljare/oob.png"
          alt="ÖoB"
          class="w-40 h-12 md:h-14 mx-auto object-contain opacity-80 hover:opacity-100"
        />
      </a>
      <a href="https://www.ica.se/butiker/kvantum/" target="_blank">
        <img
          src="/img/aterforsaljare/icakvantum.svg"
          alt="ICA Kvantum"
          class="w-40 h-12 md:h-14 mx-auto object-contain opacity-80 hover:opacity-100"
        />
      </a>
      <a href="https://www.ica.se/butiker/nara/" target="_blank">
        <img
          src="/img/aterforsaljare/icanara.svg"
          alt="ICA Nära"
          class="w-40 h-12 md:h-14 mx-auto object-contain opacity-80 hover:opacity-100"
        />
      </a>
      <a href="https://goteborgsorienthus.se/" target="_blank">
        <img
          src="/img/aterforsaljare/orienthus.png"
          alt="Göteborgs Orienthus"
          class="w-40 h-12 md:h-14 mx-auto object-contain opacity-80 hover:opacity-100"
        />
      </a>
    </div>

    <!-- Counters -->
    <div
      class="mt-4 md:mt-10 grid grid-cols-12 sm:flex sm:justify-center gap-6 sm:gap-x-12 lg:gap-x-20"
    >
      <div class="col-span-6 text-center">
        <h4
          id="count-250"
          class="text-3xl md:text-5xl font-semibold text-gray-800 dark:text-neutral-200"
        >
          {{ useCountUp(250) }}+
        </h4>
        <p class="text-sm md:text-base text-gray-600 dark:text-neutral-400">
          Butiker i Sverige
        </p>
      </div>
      <div class="col-span-6 text-center">
        <h4
          id="count-10"
          class="text-3xl md:text-5xl font-semibold text-gray-800 dark:text-neutral-200"
        >
          {{ useCountUp(10) }}+
        </h4>
        <p class="text-sm md:text-base text-gray-600 dark:text-neutral-400">
          Grossister
        </p>
      </div>
      <div class="col-span-12 sm:col-auto text-center">
        <h4
          id="count-3"
          class="text-3xl md:text-5xl font-semibold text-gray-800 dark:text-neutral-200"
        >
          {{ useCountUp(3) }}
        </h4>
        <p class="text-sm md:text-base text-gray-600 dark:text-neutral-400">
          Länder
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

function useCountUp(target, duration = 1200) {
  const value = ref(0);
  let started = false;

  const start = () => {
    if (started) return;
    started = true;
    const startTime = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      value.value = Math.floor(progress * target);
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };

  onMounted(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            start();
            observer.disconnect();
          }
        });
      },
      { threshold: 0.4 }
    );
    observer.observe(document.querySelector(`#count-${target}`));
  });

  return value;
}
</script>
