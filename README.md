# Vue.js starter template

Features:

- 🛠 [Vue 3](https://v3.vuejs.org/guide/introduction.html)
- ⚡️ [Vite](https://vitejs.dev/guide/)
- 🗂 [PNPM](https://pnpm.io)
- 🛣 [Vue Router](https://github.com/vuejs/vue-router-next)
- 🔄 [Auto import](https://github.com/unplugin/unplugin-auto-import)
- 🎨 [Tailwind CSS](https://tailwindcss.com/docs/)
- 🌗 [Light and dark mode composable](https://github.com/lecoueyl/vue3-template/blob/main/src/composables/theme.js)
- 🔡 [Inter var font](https://rsms.me/inter/)
- 📄 [Github pages action](https://pages.github.com)

[Open in Visual Studio Code](https://open.vscode.dev/lecoueyl/vue3-template)

## Getting Started

Scaffold this repository

```sh
pnpx degit lecoueyl/vue3-template my-project
cd my-project
```

Install and start dev server

```sh
pnpm install
pnpm run dev
```

## Deployment

### Github pages

The default github action will build to `gh-page` when pushing on `main` branch.

For a project page, the base path of the repository must be specified. Add the following secret in the Github repository `Settings` > `Secrets` > `Actions`

| Name                        | Value                    |
| --------------------------- | ------------------------ |
| VITE_BASE_PUBLIC_PATH       | `/repository-name/`      |
