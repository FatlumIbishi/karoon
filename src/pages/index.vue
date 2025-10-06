<script setup>
import AnnouncementBanner from "@/components/AnnouncementBanner.vue";
import Header from "@/components/Header.vue";
import Hero from "@/components/Hero.vue";
import OurProducts from "@/components/OurProducts.vue";
import BlogSection from "@/components/BlogSection.vue";
import DataMap from "../components/DataMap.vue";
import Resellers from "@/components/Resellers.vue";
import Contact from "@/components/Contact.vue";
import Footer from "@/components/Footer.vue";
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
