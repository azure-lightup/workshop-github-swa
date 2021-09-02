# Azure Light-up for GitHub + Azure Static Web Apps ワークショップ用リポジトリ

このリポジトリは、Azure Light-up ワークショップシリーズのうち、GitHub と Azure Static Web Apps を学ぶワークショップの資料です。

### 用語解説

<details>
<summary>用語解説はこちら</summary>

| 用語 | 説明 |
|----|----|
| GitHub | Git を用いてバージョン管理を行うためのプラットフォーム。ファイルの管理だけでなく、コラボレーションのための機能が豊富で、セキュリティの強化の機能が拡充されて行っています。 |
| Azure Static Web Apps (SWA) | |
| Visual Studio Code | |
| Nuxt.js | |
| Nuxt Content | |
| Markdown | |

</details>

## 全体の流れ

- 1. 事前準備の環境チェック
- 2. 追加の環境準備
- 3. 新規の Nuxt.js プロジェクトを作成する
- 4. Azure Static Web App のリソースを作成する
- 5. Nuxt Content を組み込む
- 6. GitHub プルリクエストで SWA に自動デプロイする

## 1. 事前準備環境チェック

アカウントは下記をご用意ください。

- [ ] GitHub アカウント
- [ ] Azure アカウント

ハンズオンの作業を行う環境では下記をご用意ください。

- [ ] Git のインストール
- [ ] Visual Studio Code のインストール
- [ ] Node.js のインストール
- [ ] ネットワークの確認

<details>
<summary>環境準備については、こちらをご参考ください。</summary>

環境チェック用リポジトリ [zengeeks/preparation-check](https://github.com/zengeeks/preparation-check) でご案内している、下記のパターンが満たされているかご確認ください。手順も併記されています。

- [パターンA: GitHub を利用するワークショップ](https://github.com/zengeeks/preparation-check#パターンa-github-を利用するワークショップ)
- [パターンD: Microsoft Azure を利用するワークショップ](https://github.com/zengeeks/preparation-check#パターンd-microsoft-azure-を利用するワークショップ)
- [パターンF: Jamstack を学ぶワークショップ](https://github.com/zengeeks/preparation-check#パターンf-jamstack-を学ぶワークショップ)

</details>

## 2. 追加の環境準備

[1. 事前準備環境チェック](#1-事前準備環境チェック) でご準備してもらった環境をベースに、さらに下記の環境を用意します。

- [Azure Static Web Apps CLI のインストール](#azure-static-web-apps-cli-のインストール)
- [Visual Studio Code の拡張機能 Vetur のインストール](#visual-studio-code-の拡張機能-vetur-のインストール)

### Azure Static Web Apps CLI のインストール

Azure Static Web Apps ではローカルでクラウド上と同じ動作をエミュレートできる CLI が用意されています。

> [Azure Static Web Apps 用にローカル開発環境を設定する | Microsoft Docs](https://docs.microsoft.com/ja-jp/azure/static-web-apps/local-development)

Azure Static Web Apps CLI (SWA CLI) をインストールするには、下記のコマンドを実行してください（`npm` のグローバルインストールを行います）。

```sh
npm install -g @azure/static-web-apps-cli
```

### Visual Studio Code の拡張機能 Vetur のインストール

Visual Studio Code の拡張機能 Vetur は、Vue のコードの記述をサポートしてくれる拡張機能です。

下記のページを開き、「Install」ボタンを選択して Vetur をインストールしましょう。

- [Vetur - Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=octref.vetur)

## 3. 新規の Nuxt.js プロジェクトを作成する

## 4. Azure Static Web App のリソースを作成する

## 5. Nuxt Content を組み込む

## 6. GitHub プルリクエストで SWA に自動デプロイする
