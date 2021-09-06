# Azure Light-up for GitHub + Jamstack ワークショップ用リポジトリ

このリポジトリは、Azure Light-up ワークショップシリーズのうち、GitHub と Jamstack を学ぶワークショップの資料です。

このワークショップでは、Nuxt.js を用いて Jamstack で構成されたアプリケーションを作成し、GitHub Actions と Azure Static Web Apps を用いてホストする一連の流れを学習します。

### 用語解説

<details>
<summary>用語解説はこちら</summary>
<br/>

| 用語 | 説明 |
|----|----|
| [GitHub](https://github.com/) | Git を用いてバージョン管理を行うためのプラットフォーム。ファイルの管理だけでなく、コラボレーションのための機能が豊富で、セキュリティの強化の機能が拡充されて行っています。 |
| [Azure Static Web Apps (SWA)](https://docs.microsoft.com/en-us/azure/static-web-apps/) | 静的サイトをホストできる Azure サービス。Azure Functions を内包または外部連携することができるので、バックエンドの API も一括で管理することができます。 |
| [Visual Studio Code](https://code.visualstudio.com/) | オープンソースのエディタ。さまざまな拡張機能により、幅広い言語、用途で利用されています。 |
| [Nuxt.js](https://ja.nuxtjs.org/) | Vue.js をベースとしたフロントエンドフレームワーク。Nuxt.js を利用することで、よく利用されるルーティングや Linter、テストフレームワークなどを簡単に導入できます。 |
| [Nuxt Content](https://content.nuxtjs.org/) | Nuxt.js のモジュールで、プロジェクト内に配置した Markdown などからコンテンツを取得してアプリケーションに取り込むことができます。 |
| Markdown |  |

</details>

## 全体の流れ

1. 事前準備の環境チェック
2. 追加の環境準備
3. 新規の Nuxt.js プロジェクトを作成する
4. プロジェクトを GitHub のリポジトリに push する
5. Azure Static Web App にデプロイする
6. Jamstack をセットアップする
7. GitHub のプルリクエストを利用して SWA に自動デプロイする

## 1. 事前準備環境チェック

アカウントは下記をご用意ください。

- [ ] GitHub アカウント
- [ ] Azure アカウント

ハンズオンの作業を行う環境では下記をご用意ください。

- [ ] Git のインストール
- [ ] Visual Studio Code のインストール
- [ ] Node.js のインストール
- [ ] ネットワークの確認（ `git` コマンドで GitHub に接続できること）

<details>
<summary>環境準備については、こちらをご参考ください。</summary>
<br/>

環境チェック用リポジトリ [zengeeks/preparation-check](https://github.com/zengeeks/preparation-check) でご案内している、下記のパターンが満たされているかご確認ください。手順も併記されています。

- [パターンA: GitHub を利用するワークショップ](https://github.com/zengeeks/preparation-check#パターンa-github-を利用するワークショップ)
- [パターンD: Microsoft Azure を利用するワークショップ](https://github.com/zengeeks/preparation-check#パターンd-microsoft-azure-を利用するワークショップ)
- [パターンF: Jamstack を学ぶワークショップ](https://github.com/zengeeks/preparation-check#パターンf-jamstack-を学ぶワークショップ)

</details>

## 2. 追加の環境準備

[1. 事前準備環境チェック](#1-事前準備環境チェック) で準備した環境をベースに、さらに下記の環境を用意します。

- [Azure Static Web Apps CLI のインストール](#azure-static-web-apps-cli-のインストール)
- [Visual Studio Code の拡張機能 Vetur のインストール](#visual-studio-code-の拡張機能-vetur-のインストール)

### Azure Static Web Apps CLI のインストール

Azure Static Web Apps では、ローカルでクラウド上と同じ動作をエミュレートできる CLI が用意されています。

> [Azure Static Web Apps 用にローカル開発環境を設定する | Microsoft Docs](https://docs.microsoft.com/ja-jp/azure/static-web-apps/local-development)

Azure Static Web Apps CLI (SWA CLI) をインストールするには、下記のコマンドを実行してください（`npm` のグローバルインストールを行います）。

```sh
npm install -g @azure/static-web-apps-cli
```

SWA CLI が正しくインストールできたか確認するには、任意のシェルで `swa -v` などのコマンドを実行し、エラーが出ないことを確認してください。

```sh
swa -v

0.7.1
...
```

### Visual Studio Code の拡張機能 Vetur のインストール

Visual Studio Code の拡張機能 Vetur は、Vue のコードの記述をサポートしてくれる拡張機能です。

下記のページを開き、「Install」ボタンを選択して Vetur をインストールしましょう。

- [Vetur - Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=octref.vetur)

## 3. 新規の Nuxt.js プロジェクトを作成する

それではまず、手元の環境で Nuxt.js を用いて新規プロジェクトを作成していきます。

- [ローカル環境でアプリケーションを作成する](docs/create-local-app.md)

## 4. プロジェクトを GitHub のリポジトリに push する

つぎに、作成したプロジェクトを GitHub のリポジトリに反映させます。

- [プロジェクトを GitHub のリポジトリに push する](docs/push-to-github.md)

## 5. Azure Static Web App にデプロイする

GitHub のリポジトリにプロジェクトを反映したので、Azure Static Web Apps へデプロイする準備ができました。Azure ポータルでリソースを作成しデプロイしてみましょう。

- [アプリケーションを Azure Static Web Apps にデプロイする](docs/deploy-to-swa.md)

## 6. Jamstack をセットアップする

先の手順で、Azure Static Web Apps へデプロイする CI/CD の環境が整いました。

ここからは、Jamstack の仕組みを用いてコンテンツを管理する実装をつくります。

- [Jamstack をセットアップする](docs/setup-jamstack.md)

## 7. GitHub のプルリクエストを利用して SWA に自動デプロイする

最後に、実際の開発でコラボレーションを行うことを想定して、GitHub のプルリクエストを活用して CI/CD のパイプラインが実行される流れを作ります。

- [GitHub リポジトリを安全に保つための設定を行う](docs/configure-github-repo-securely.md)

GitHub の設定が整ったら、Jamstack のコンテンツを更新して一連の流れを体験してみましょう。

- [Jamstack でコンテンツを更新する](docs/add-article.md)
