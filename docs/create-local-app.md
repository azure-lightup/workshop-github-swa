# ローカル環境でアプリケーションを作成する

## Nuxt.js アプリケーションの新規作成

CLI を使って新規アプリケーションを作成します。作成時のオプションは以下を参考にして下さい。`<アプリケーション名>` は任意の名称を設定して下さい（`stapp-nuxt-content` など）。

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

## 静的ファイルの出力

Nuxt.js では Full Static Generation と呼ばれる静的ファイルの出力機能を使って、アプリケーションを静的サイトとして出力することができます。

```sh
npm run generate
```

出力されたサイトを確認するには以下のコマンドを実行します。

```sh
npm run start
```

## Static Web App CLI を使ったエミュレート

ローカル環境に Azure Static Web Apps CLI (SWA CLI) をインストールします（npm のグローバルインストールになります）。

```sh
npm install -g @azure/static-web-apps-cli
```

SWA CLI で出力された静的サイトの動作確認をしてみます。

```sh
swa start dist
```

開発しながら SWA CLI で動作確認する場合は以下のコマンドを使います。

```sh
swa start http://localhost:3000 --run "npm run dev"
```

最後に、Git で変更をプッシュしておいて下さい。
