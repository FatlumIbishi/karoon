<!-- components/DataMap.vue -->
<template>
  <section class="relative overflow-hidden isolate">
    <div id="hs-users-datamap" class="h-[420px] w-full relative z-0"></div>
    <div
      class="pointer-events-none absolute inset-x-0 top-0 h-50 z-10 bg-gradient-to-b from-white to-transparent dark:from-neutral-900"
    ></div>
    <div
      class="pointer-events-none absolute inset-x-0 bottom-0 h-50 z-10 bg-gradient-to-t from-white to-transparent dark:from-neutral-900"
    ></div>
  </section>
</template>

<script setup>
import { onMounted } from "vue";

onMounted(() => {
  const retailersSE = [
    { name: "ICA Kvantum", logo: "/img/aterforsaljare/icakvantum.svg" },
    { name: "ICA Nära", logo: "/img/aterforsaljare/icanara.svg" },
    { name: "Stora Coop", logo: "/img/aterforsaljare/stora-coop.png" },
    { name: "ÖoB", logo: "/img/aterforsaljare/oob.png" },
    { name: "Göteborgs Orienthus", logo: "/img/aterforsaljare/orienthus.png" },
  ];

  const map = new window.Datamap({
    element: document.getElementById("hs-users-datamap"),
    projection: "mercator",
    responsive: true,
    fills: {
      defaultFill: "#d1d5db",
      MAJOR: "oklch(52.7% 0.154 150.069)",
    },
    data: {
      SWE: { fillKey: "MAJOR" },
      GBR: { fillKey: "MAJOR" },
      NOR: { fillKey: "MAJOR" },
      POL: { fillKey: "MAJOR" },
      IRQ: { fillKey: "MAJOR" },
      LBN: { fillKey: "MAJOR" },
      BEL: { fillKey: "MAJOR" },
    },
    geographyConfig: {
      borderColor: "rgba(0,0,0,.09)",
      highlightFillColor: "oklch(85.2% 0.199 91.936)",
      highlightBorderColor: "oklch(85.2% 0.199 91.936)",
      popupTemplate: function (geo, data) {
        if (geo.id === "SWE") {
          return `
            <div class="bg-white p-3 rounded shadow w-64">
              <strong class="block mb-2">Sverige</strong>
              <ul class="space-y-2">
                ${retailersSE
                  .map(
                    (r) => `
                  <li class="flex items-center gap-2">
                    <img src="${r.logo}" alt="${r.name}" class="w-14 h-auto" />
                    <span class="text-s">${r.name}</span>
                  </li>
                `
                  )
                  .join("")}
              </ul>
            </div>
          `;
        }
        if (data) {
          return `<div class="bg-white p-3 rounded shadow"><strong class="block">${geo.properties.name}</strong></div>`;
        }
        return null;
      },
    },
  });

  window.addEventListener("resize", () => map.resize());
});
</script>
