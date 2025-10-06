<!-- components/Contact.vue -->
<template>
  <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
    <div class="max-w-2xl lg:max-w-5xl mx-auto">
      <div class="text-center">
        <h1
          class="text-3xl font-bold text-gray-800 sm:text-4xl dark:text-white"
        >
          Kontakta oss
        </h1>
        <p class="mt-1 text-gray-600 dark:text-neutral-400">
          Vi ser fram emot att höra från dig.
        </p>
      </div>

      <div class="mt-12 grid items-center lg:grid-cols-2 gap-6 lg:gap-16">
        <!-- Form -->
        <div
          class="flex flex-col border border-gray-200 rounded-xl p-4 sm:p-6 lg:p-8 dark:border-neutral-700"
        >
          <h2
            class="mb-8 text-xl font-semibold text-gray-800 dark:text-neutral-200"
          >
            Fyll i formuläret
          </h2>

          <form>
            <div class="grid gap-4">
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    placeholder="Förnamn"
                    class="py-2.5 px-4 block w-full border-gray-200 rounded-lg sm:text-sm focus:border-green-500 focus:ring-green-500 dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Efternamn"
                    class="py-2.5 px-4 block w-full border-gray-200 rounded-lg sm:text-sm focus:border-green-500 focus:ring-green-500 dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400"
                  />
                </div>
              </div>

              <div>
                <input
                  type="email"
                  placeholder="E-post"
                  class="py-2.5 px-4 block w-full border-gray-200 rounded-lg sm:text-sm focus:border-green-500 focus:ring-green-500 dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400"
                />
              </div>

              <div>
                <input
                  type="text"
                  placeholder="Telefon"
                  class="py-2.5 px-4 block w-full border-gray-200 rounded-lg sm:text-sm focus:border-green-500 focus:ring-green-500 dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400"
                />
              </div>

              <div>
                <textarea
                  rows="4"
                  placeholder="Meddelande"
                  class="py-2.5 px-4 block w-full border-gray-200 rounded-lg sm:text-sm focus:border-green-500 focus:ring-green-500 dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400"
                ></textarea>
              </div>
            </div>

            <div class="mt-4 grid">
              <button
                type="submit"
                class="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg bg-green-600 text-white hover:bg-green-700 focus:outline-hidden focus:bg-green-700"
              >
                Skicka
              </button>
            </div>
          </form>
        </div>
        <!-- Form -->

        <!-- Contact -->
        <div class="divide-y divide-gray-200 dark:divide-neutral-800">
          <div class="flex flex-col gap-y-4 py-6">
            <img
              class="w-full h-48 rounded-lg object-cover"
              src="https://stamen-tiles.a.ssl.fastly.net/toner-lite/10/545/345.png"
              alt="Karta"
            />

            <div class="flex gap-x-7">
              <svg
                class="shrink-0 size-6 mt-1.5 text-gray-800 dark:text-neutral-200"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0Z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <div>
                <h3 class="font-semibold text-gray-800 dark:text-neutral-200">
                  Adress
                </h3>
                <p class="mt-1 text-sm text-gray-500 dark:text-neutral-500">
                  Lärjeågatan 7<br />415 25 Göteborg, Sverige
                </p>
              </div>
            </div>
          </div>

          <div class="flex gap-x-7 py-6">
            <svg
              class="shrink-0 size-6 mt-1.5 text-gray-800 dark:text-neutral-200"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path
                d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
              />
            </svg>
            <div>
              <h3 class="font-semibold text-gray-800 dark:text-neutral-200">
                Telefon
              </h3>
              <p class="mt-1 text-sm text-gray-500 dark:text-neutral-500">
                <a href="tel:+46317800200">+46 31-780 02 00</a>
              </p>
            </div>
          </div>

          <div class="flex gap-x-7 py-6">
            <svg
              class="shrink-0 size-6 mt-1.5 text-gray-800 dark:text-neutral-200"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path
                d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z"
              />
              <path d="m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10" />
            </svg>
            <div>
              <h3 class="font-semibold text-gray-800 dark:text-neutral-200">
                Mail
              </h3>
              <p class="mt-1 text-sm text-gray-500 dark:text-neutral-500">
                <a href="mailto:info@karoon.se">info@karoon.se</a>
              </p>
            </div>
          </div>
        </div>
        <!-- Contact -->
      </div>
    </div>
  </div>
</template>

<script setup></script>
