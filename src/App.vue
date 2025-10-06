<template>
  <div class="flex flex-col min-h-screen bg-white dark:bg-neutral-900">
    <main class="flex-grow">
      <router-view />
    </main>
  </div>
</template>

<script setup></script>

<style>
html,
body,
#app {
  height: 100%;
  margin: 0;
}
</style>
