# Jamstack をセットアップする

## Nuxt/Content の設定

NuxtJS アプリケーションを Jamstack 構成 (Git ベースのヘッドレス CMS) に拡張できる `nuxt/content` モジュールを導入します。`nuxt/content` を使うと、Markdown などのコンテンツを API から取得して静的サイトとして出力することができるようになります。

### 記事詳細画面の作成

まず、記事詳細ページを作成しましょう。

`pages` ディレクトリ配下に `_slug.vue` というファイルを作成し、以下のコードを貼りつけます。

```js
<template>
  <article class="container mx-auto my-8">
    <h1 class="text-4xl font-bold mb-2">{{ page.title }}</h1>
    <p class="mb-4 text-xl">{{ page.date }}</p>
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

このファイルは、Vue における [SFC（Single File Components, 単一ファイルコンポーネント）](https://jp.vuejs.org/v2/guide/single-file-components.html) の構造で記述されています。`<template>`, `<script>`, `<style>` を１つのファイルにまとめることで、プロジェクト全体のファイル構成を見通しよくすることができます。

この `<script>` に書かれたコードでは、 `content` ディレクトリ配下の Markdown ファイルを読み込んでいます。

また、`_slug.vue` というファイルは、NuxtJS の [動的ルーティング機能](https://ja.nuxtjs.org/docs/2.x/directory-structure/pages#%E5%8B%95%E7%9A%84%E3%81%AA%E3%83%9A%E3%83%BC%E3%82%B8) の仕組みを用いており、動的にページ名を取得することができます。例えば、`/hello` にアクセスされると、`params.slug` には `hello` が格納されるので、上記のコードと組み合わせて `content/hello.md` のファイルの中身を読み込むといった処理を行うことができます。

それでは、動作を確認してみましょう。静的ファイルを更新し、SWA CLI でエミュレートします。

```sh
npm run generate
swa start dist
```

ブラウザで記事詳細の URL `http://localhost:4280/hello` を開きます。すると、 `content/hello.md` の内容が表示されることが確認できます。

### 記事一覧コンポーネントの作成

次に記事の一覧ページを準備します。

まず、一覧表示部分は今後複数のページから呼ばれる可能性があるので、Vue.js の [コンポーネント](https://ja.nuxtjs.org/docs/2.x/directory-structure/components) としてを作成します。

`components` ディレクトリに `ArticleList.vue` ファイルを作成し、以下のコードを貼りつけます。

```js
<template>
  <nuxt-link :to="slug">
    <div class="border p-4 rounded my-1">
      <h2 class="text-2xl mb-2">{{ title }}</h2>
      <div class="text-l text-gray-400"><code>/{{ slug }}</code></div>
      <div class="text-l">{{ date }}</div>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    title: { type: String, required: true },
    date: { type: String, required: false, default: 'xxxx.xx.xx' },
    slug: { type: String, required: true },
  },
}
</script>
```

`pages/index.vue` で `ArticleList` コンポーネントを呼ぶように以下のようにコードを修正します。

```js
<template>
  <div class="container mx-auto my-8">
    <h1 class="text-4xl font-bold my-6">Blog Posts</h1>
    <div class="grid grid-cols-1 gap-4">
      <ArticleList
        v-for="(article, index) in articles"
        :key="index"
        :title="article.title"
        :date="article.date"
        :slug="article.slug"
      ></ArticleList>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const query = await $content('/')
    const articles = await query.fetch()
    return { articles }
  },
}
</script>
```

ブラウザで記事一覧の URL `http://localhost:4280` を開きます。すると、`content` ディレクトリ配下の Markdown ファイルを参照する記事一覧が表示されます。

最後に、変更を GitHub にプッシュしておいて下さい。

```sh
# 変更したファイルをステージに追加する
git add pages/_slug.vue
git add components/ArticleList.vue
git add pages/index.vue

# ステージの変更をコミットする
git commit

# 現在のブランチのアップストリームに push する（ `origin main` を省略可能）
git push
```
