# Jamstack をセットアップする

## Nuxt/Content の設定

NuxtJS アプリケーションを Jamstack 構成 (Git ベースのヘッドレス CMS) に拡張できる `nuxt/content` モジュールを導入します。`nuxt/content` を使うと、Markdown などのコンテンツを API から取得して静的サイトとして出力することができるようになります。

### 記事詳細画面の作成

`pages` ディレクトリ配下に `_slug.vue` というファイルを作成し、以下のコードを貼りつけます。

```js
<template>
  <article class="container mx-auto my-8">
    <h1 class="text-4xl font-bold mb-2">{{ page.title }}</h1>
    <hr />
    <nuxt-content :document="page" class="my-6" />
  </article>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const page = await $content('/', params.slug).fetch()
    return {
      page,
    }
  },
}
</script>
```

このコードで `content` ディレクトリ配下の Markdown ファイルを読み込むことができます。なお、`_slug.vue` は NuxtJS の [動的ルーティング機能](https://ja.nuxtjs.org/docs/2.x/directory-structure/pages#%E5%8B%95%E7%9A%84%E3%81%AA%E3%83%9A%E3%83%BC%E3%82%B8) を使ってルート名とファイル名を対応させて動的にページを表示しています。

以下の SWA CLI コマンドで、ローカル dev server を起動します。

```sh
swa start http://localhost:3000 --run "npm run dev"
```

ブラウザで記事詳細の URL `http://localhost:4280/hello` を開きます。
