<script setup>
import { useSEO } from "@/composables/useSEO";
import AnnouncementBanner from "@/components/AnnouncementBanner.vue";
import Header from "@/components/Header.vue";
import Hero from "@/components/Hero.vue";
import OurProducts from "@/components/OurProducts.vue";
import BlogSection from "@/components/BlogSection.vue";
import DataMap from "@/components/DataMap.vue";
import Resellers from "@/components/Resellers.vue";
import Contact from "@/components/Contact.vue";
import Footer from "@/components/Footer.vue";

// 🔍 SEO + Meta
useSEO({
  title: "Karoon - Långkornigt Basmatiris",
  description:
    "Karoon erbjuder högkvalitativt långkornigt basmatiris för alla dina matlagningsbehov. Vårt ris är rättvist producerat, smakrikt och finns hos utvalda återförsäljare i hela Sverige.",
  keywords:
    "basmatiris, basmati, långkornigt ris, ris av hög kvalitet, Karoon ris, Karoon basmatiris, rättvist ris, premium ris",
  image: "https://karoon.se/images/metaimg.jpg",
  url: "https://karoon.se",
  type: "website",
  robots: "index, follow",
});
</script>

<template>
  <div class="bg-white dark:bg-neutral-900">
    <AnnouncementBanner />
    <Header />
    <main id="content">
      <Hero :title="$t('hero.title')" />
      <OurProducts />
      <BlogSection />
      <DataMap class="hidden md:block" />
      <Resellers />
      <Contact />
    </main>
    <Footer />
  </div>
</template>
