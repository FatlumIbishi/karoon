<!-- components/Resellers.vue -->
<template>
  <div class="max-w-[85rem] py-10 lg:py-14 mx-auto overflow-hidden">
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

    <!-- Marquee -->
    <div
      class="relative w-full overflow-hidden group cursor-default select-none"
    >
      <div
        class="flex items-center gap-12 animate-marquee group-hover:[animation-play-state:paused]"
        :style="{ '--marquee-duration': `${logos.length * 3}s` }"
      >
        <template v-for="(logo, index) in doubledLogos" :key="index">
          <a
            :href="logo.link"
            target="_blank"
            class="flex-shrink-0 opacity-80 hover:opacity-100 transition-opacity"
          >
            <img
              :src="logo.src"
              :alt="logo.alt"
              class="h-12 md:h-14 w-40 object-contain"
            />
          </a>
        </template>
      </div>
    </div>

    <!-- Counters -->
    <div
      class="mt-10 grid grid-cols-12 sm:flex sm:justify-center gap-6 sm:gap-x-12 lg:gap-x-20"
    >
      <div class="col-span-6 text-center">
        <h4
          ref="elStores"
          class="text-3xl md:text-5xl font-semibold text-gray-800 dark:text-neutral-200"
        >
          {{ countStores }}+
        </h4>
        <p class="text-sm md:text-base text-gray-600 dark:text-neutral-400">
          Butiker i Sverige
        </p>
      </div>
      <div class="col-span-6 text-center">
        <h4
          ref="elWholesalers"
          class="text-3xl md:text-5xl font-semibold text-gray-800 dark:text-neutral-200"
        >
          {{ countWholesalers }}+
        </h4>
        <p class="text-sm md:text-base text-gray-600 dark:text-neutral-400">
          Grossister
        </p>
      </div>
      <div class="col-span-12 sm:col-auto text-center">
        <h4
          ref="elCountries"
          class="text-3xl md:text-5xl font-semibold text-gray-800 dark:text-neutral-200"
        >
          {{ countCountries }}
        </h4>
        <p class="text-sm md:text-base text-gray-600 dark:text-neutral-400">
          Länder
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";

// 🔁 LOGO DATA
const logos = [
  {
    src: "/img/aterforsaljare/stora-coop.png",
    alt: "Stora Coop",
    link: "https://www.coop.se/",
  },
  {
    src: "/img/aterforsaljare/oob.png",
    alt: "ÖoB",
    link: "https://www.oob.se/",
  },
  {
    src: "/img/aterforsaljare/icakvantum.svg",
    alt: "ICA Kvantum",
    link: "https://www.ica.se/butiker/kvantum/",
  },
  {
    src: "/img/aterforsaljare/icanara.svg",
    alt: "ICA Nära",
    link: "https://www.ica.se/butiker/nara/",
  },
  {
    src: "/img/aterforsaljare/orienthus.png",
    alt: "Göteborgs Orienthus",
    link: "https://goteborgsorienthus.se/",
  },
];

// Dubblar listan så den loopar sömlöst
const doubledLogos = computed(() => [...logos, ...logos]);

// 🔢 COUNT-UP FUNCTION
function useCountUp(target, elRef, duration = 1200) {
  const value = ref(0);

  const start = () => {
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
    if (elRef.value) observer.observe(elRef.value);
  });

  return value;
}

// refs till elementen
const elStores = ref(null);
const elWholesalers = ref(null);
const elCountries = ref(null);

// använd hooken
const countStores = useCountUp(250, elStores);
const countWholesalers = useCountUp(10, elWholesalers);
const countCountries = useCountUp(7, elCountries);
</script>

<style scoped>
@keyframes marquee {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

.animate-marquee {
  animation: marquee var(--marquee-duration, 30s) linear infinite;
  width: max-content;
  will-change: transform;
}

/* paus på hover/touch (för extra säkerhet) */
.group:hover .animate-marquee,
.group:active .animate-marquee {
  animation-play-state: paused !important;
}
</style>
