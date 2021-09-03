# アプリケーションを Azure Static Web Apps にデプロイする

## Azure Static Web Apps 準備する

Azure ポータル ( https://portal.azure.com ) でリソースグループを作成します。

- 名称は `rg-jamstack` などワークショップ用とわかるようにしておくと、後でリソースをまとめて削除する際に便利です。

Azure ポータルで `リソースの作成` から `Static Web App` と検索して `作成` をクリックします。

- Resource Group: 前のステップで作成したリソースグループ名
- Name: `stapp-nuxt-content` など任意の文字列
- Hosting Plan: Free
- Azure Functions and staging details: リージョンはどこでも良い（ここでは API は使わないのであまり影響がない）
- Deployment details: `GitHub` を選択し認証連携を行う
- Build Details
  - リポジトリ: アプリケーションを作成した Organization, Repository, ブランチ名を選択する
  - Build Presets: Vue.js を選択
  - それ以外はデフォルト
- Create を実行

> [クイック スタート:Azure portal で Azure Static Web Apps を使用して静的 Web アプリを初めてビルドする | Microsoft Docs](https://docs.microsoft.com/ja-jp/azure/static-web-apps/get-started-portal?tabs=vanilla-javascript)

## GitHub Actions による CI/CD を設定する

### ワークフローファイルの取得

ローカル開発環境に戻り、一旦コードをプルします。

```sh
# remote の origin から変更を取得する
git pull
```

するとこのように表示され、リポジトリ側での更新を取得することができます。

```sh
Updating 5adccaf..d5af591
Fast-forward
 .../azure-static-web-apps-green-tree-0bfcfd010.yml | 45 ++++++++++++++++++++++
 1 file changed, 45 insertions(+)
 create mode 100644 .github/workflows/azure-static-web-apps-green-tree-0bfcfd010.yml
```

ここでは、先ほどの Azure ポータル上での操作で自動生成された GitHub Actions 用のワークフロー YAML ファイル `.github/workflows/azure-static-web-apps-xxx.yml` が取得されたことがわかります。

### GitHub Actions ワークフローを編集する

`.github/workflows` 以下に作成された yaml を開いて以下のように編集します

```yaml
app_location: '/examples/stapp-nuxt-content'
api_location: ''
output_location: 'dist'
app_build_command: 'npm run generate' # この行を追加します
```

> [Azure Static Web Apps の GitHub Actions ワークフロー | Microsoft Docs](https://docs.microsoft.com/ja-jp/azure/static-web-apps/github-actions-workflow)

ここまでの変更を GitHub にプッシュしておきます。

```sh
git status
git add <変更したファイル>
git commit
git push
```

### GitHub Actions ワークフローの動作確認

ブラウザで GitHub のリポジトリで `Actions` タブからビルドとデプロイの状況を確認します。

- 直近に実行されたジョブが成功していることを確認します

### Azure にデプロイされたアプリの動作確認

Azure ポータルで Static Web App 画面で確認します。

- `Overview` 右上部分に表示されている URL をクリックして、実際にデプロイされているアプリケーションを確認できます
