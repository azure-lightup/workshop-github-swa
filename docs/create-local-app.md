# ローカル環境でアプリケーションを作成する

## Nuxt.js アプリケーションの新規作成

NuxtJS 付属の CLI を使って新規アプリケーションを作成します。

> [インストール - NuxtJS](https://ja.nuxtjs.org/docs/2.x/get-started/installation)

作成時のオプションは以下を参考にして下さい。`<アプリケーション名>` は任意の名称を設定して下さい（`stapp-nuxt-content` など）。

```sh
npx create-nuxt-app stapp-nuxt-content

create-nuxt-app v3.7.1
✨  Generating Nuxt.js project in <アプリケーション名>
? Project name: <アプリケーション名>
? Programming language: JavaScript
? Package manager: Npm
? UI framework: Tailwind CSS
? Nuxt.js modules: Content - Git-based headless CMS
? Linting tools: ESLint, Prettier
? Testing framework: None
? Rendering mode: Universal (SSR / SSG)
? Deployment target: Static (Static/Jamstack hosting)
? Development tools: (Press <space> to select, <a> to toggle all, <i> to invert selection)
? Continuous integration: None
? Version control system: Git
```

CLI によるパッケージのインストールと初期ビルドが完了したら、Nuxt.js 標準の dev server を使って動作確認をします。

```sh
cd stapp-nuxt-content
npm run dev
```

<details>
<summary>Nuxt.js モジュールの確認について</summary>
<br/>
このワークショップでは、のちに Nuxt Content を利用して作業を進めます。

`create-nuxt-app` コマンドでのプロジェクト作成の手順において、
```
? Nuxt.js modules: Content - Git-based headless CMS
```
で _Content_ が選択できていれば、 `package.json` および `nuxt.config.js` には以下のような設定が含まれています。

package.json
```json:package.json
...
  "dependencies": {
    "@nuxt/content": "^1.14.0",
...
```

nuxt.config.js
```js:nuxt.config.js
...
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
  ],
...
```

もしこれらが記載されていない場合は、再度 `create-nuxt-app` コマンドを実行してプロジェクトを作成し直してください。（ `@nuxt/content` はそれ自体を `npm install` で導入することもできますが、サンプルコードなども手動で設定しなければならないため、この時点ではプロジェクトを作成しなおした方がよいでしょう。）

</details>

<details>
<summary>プロジェクトを Visual Studio Code で開くには</summary>
<br/>

このプロジェクトを Visual Studio Code で開き、移行の操作を付属のターミナルで行うこともできます。

下記のように `code` コマンドを利用したり、Visual Studio Code を起動してメニューの「File」>「Open Folder...」からプロジェクトのディレクトリ開くことができます。

```sh
# カレントディレクトリを Visual Studio Code で開く
code .
```

</details>

## 静的ファイルの出力

Nuxt.js では Full Static Generation と呼ばれる静的ファイルの出力機能を使って、アプリケーションを静的サイトとして出力することができます。

> [Going Full Static - NuxtJS](https://ja.nuxtjs.org/blog/going-full-static)

まず、以下のコマンドで静的ファイルを生成します。生成された静的ファイルは、 `dist` ディレクトリに格納されます。

```sh
npm run generate
```

出力されたサイトを確認するには以下のコマンドを実行します。

```sh
npm run start
```

## Azure Static Web App CLI を使ったエミュレート

この Nuxt.js のアプリケーションは、最終的に Azure Static Web Apps でホストする想定です。

ここでは、 SWA CLI を使って Azure Static Web Apps をローカル環境でエミュレートし、先ほど生成した Nuxt.js の静的サイトの動作確認をしてみます。

```sh
swa start dist
```

開発しながら SWA CLI で動作確認する場合は以下のコマンドを使います。

```sh
swa start http://localhost:3000 --run "npm run dev"
```
