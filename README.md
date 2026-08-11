# QCA Conference Website

小規模なQCA関連カンファレンス／研究会の公式ウェブサイトを、QuartoとGitHubで構築・管理するプロジェクトです。

> **現在の状態：公開候補版（GitHubでの公開操作は未実施）**
>
> 会場、運営者、問い合わせ先、科研費謝辞、申込フォームを反映済みです。公開前のローカル検証とGitHub Pages方式の最終確認を行います。

## 目的

当面は、参加希望者が以下の情報へ簡単にアクセスできるサイトを作ります。

- 開催趣旨
- 開催日程
- プログラム
- 会場・アクセス
- 参加登録
- 主催者・運営者
- 問い合わせ先
- 更新情報

将来的には、以下の研究資源を追加できる構成にします。

- QCA文献リスト
- QCA関連ソフトウェア・教材
- 過去大会の記録
- 発表資料または公開可能な関連資料
- Zotero、OSF、GitHub等の外部リソースへのリンク

## 技術構成

- **制作**：Quarto Website
- **編集**：RStudio、テキストエディタ、Codex
- **バージョン管理**：Git / GitHub
- **公開先（承認後）**：GitHub Pages
- **素材共有**：Dropbox
- **参加登録**：Google Formsまたは大学が提供するフォームへの外部リンク

初期段階では、Rコードを実行しなくてもレンダリングできる軽量なサイトを優先します。QCA文献リストをRで自動生成する必要が生じた段階で、`renv`等の依存関係管理を追加します。

## 推奨する共同作業の構成

### GitHub：サイト本体の「正本」

GitHubの非公開リポジトリを、サイトソースの唯一の正本とします。

例：

```text
Organization: qca-conference-japan
Repository: conference-website
Visibility: Private
```

Quarto、CSS、画像、公開予定の文章、変更履歴はGitHubで管理します。

### Dropbox：先生方との素材共有

Dropboxには、先生方が確認・提供しやすい原稿、Word、PDF、ロゴ、地図、写真などを置きます。

推奨構成：

```text
QCA_Conference_Website/
├─ 00_Admin/
├─ 01_Content_Input/
├─ 02_Approved_Content/
├─ 03_Assets/
├─ 04_Preview/
└─ 99_Archive/
```

- `01_Content_Input/`：未確認の原稿や素材
- `02_Approved_Content/`：先生方の確認が済んだ文章
- `03_Assets/`：掲載許可済みのロゴ、画像、PDF
- `04_Preview/`：スクリーンショットや確認用PDF
- `99_Archive/`：旧版

**Gitリポジトリ全体をDropboxで同期しないことを推奨します。**  
GitとDropboxの双方で同じファイルを同時管理すると、複数人の編集や同期のタイミングによって競合を判断しにくくなるためです。

先生方がGitHubを使わない場合は、Dropboxで修正案を受け取り、担当者が承認済み内容だけをGitHub側へ反映します。

## ローカル環境の推奨配置

GitHubからcloneした作業フォルダはDropbox外に置きます。

Windowsの例：

```text
C:\Users\<USER>\Documents\GitHub\conference-website
```

Dropboxの素材共有フォルダ：

```text
C:\Users\<USER>\Dropbox\QCA_Conference_Website
```

## 必要なソフトウェア

- Git
- GitHub DesktopまたはGitコマンド
- RStudio
- Quarto
- Codex（デスクトップアプリ、CLI、IDE拡張、またはCloud）

確認コマンド：

```bash
git --version
quarto --version
quarto check
```

## ローカルプレビュー

プロジェクトのルートで以下を実行します。

```bash
quarto preview
```

またはRStudioの **Render Website** を使用します。

ローカルプレビューは通常、次のようなアドレスで開きます。

```text
http://localhost:xxxx/
```

この段階ではインターネット上に公開されません。

## サイトの編集方法

サイト本体は英語専用です。RStudioで `qca-conference-website.Rproj` を開くか、任意のテキストエディタで次のファイルを編集します。

| ファイル | 内容 |
|---|---|
| `_quarto.yml` | サイト名、英語ナビゲーション、出力設定 |
| `index.qmd` | Home |
| `about.qmd` | About |
| `program.qmd` | Programme |
| `venue.qmd` | Venue & Access |
| `registration.qmd` | Call for Papers |
| `organizers.qmd` | Organizers |
| `bibliography.qmd` | QCA Bibliography |
| `contact.qmd` | Contact |
| `styles.css` | サイト共通の見た目 |
| `design-options.qmd` | 内部確認用の4案比較ページ（公開render対象外） |
| `design-options/*.qmd` | 各ヘッダーデザイン案（公開render対象外） |
| `_includes/*.qmd` | Home本文とデザイン案の共通部分 |
| `hero-rotation.js` | Homeで案2と案4をページ読込時に切り替える最小スクリプト |

編集時の基本手順：

1. 主催者が承認した英語原稿だけを該当する `.qmd` ファイルへ反映する
2. 未確定の値は推測せず、`TBA` または “In preparation” とする
3. 新しいページを追加した場合は `_quarto.yml` のナビゲーションも更新する
4. `quarto preview` で内容を確認する
5. `quarto render` でサイト全体を確認する

日本語版は作成しません。将来ほかの言語版が必要になった場合は、別階層に追加して英語版とページ単位で対応させます。

画像は `images/` に置きます。公開許可、著作権、個人情報を確認し、必要なファイルだけを追加してください。

## 完成確認

公開前には、最低限以下を実行します。

```bash
quarto render
```

確認項目：

- エラーなくレンダリングできる
- ナビゲーションがすべて動く
- スマートフォン幅でも読める
- 外部リンクが正しい
- 仮の日付・仮名・`TBA`が意図せず残っていない
- 個人情報や内部資料が含まれていない
- 画像やロゴの掲載許可がある
- 問い合わせ先が正式に承認されている
- 登録フォームの公開範囲が適切である

## 想定ページ

```text
Home
About
Program
Venue & Access
Registration
Organizers
QCA Bibliography
Contact
```

最初から全ページを完成させる必要はありません。内容が未確定のページには、事実を推測せず `TBA` または「準備中」と表示します。

## デザイン方針

- 小規模学術会議に適した、落ち着いた専門的な外観
- モバイル対応
- 十分な文字サイズとコントラスト
- 情報を探しやすい明確なナビゲーション
- 過剰なアニメーションを使用しない
- 広告、外部トラッカー、不要なCookieを使用しない
- 画像を多用せず、開催情報を最優先する
- サイト本体は英語のみとし、日本語版は作成しない

## 参考サイト

機能、構成、制作プロセスの参考：

- Gary King, “Build Your Academic Website in 15 Minutes”  
  https://gking.harvard.edu/mysite/
- Mike Pierce, Conference Website Template  
  https://mikepierce.github.io/conference-website-template/
- Template repository  
  https://github.com/mikepierce/conference-website-template

Mike Pierceのテンプレートは、Home、Registration、Program、Directions、Flyerという小規模会議向けの情報設計が参考になります。一方、元リポジトリはHTML/CSS製でGPL-3.0ライセンスです。本プロジェクトではコードをそのまま複製せず、機能と情報構成のみを参考にしてQuartoで独自に実装します。

## Codexの使用方法

Codexはプロジェクトルートで開始してください。Codexは最初に `AGENTS.md` を読み、プロジェクト固有のルールを確認します。

初回は `CODEX_START_PROMPT.md` の内容を貼り付けます。

Codexに変更を依頼する際は、作業を小さく分けます。

例：

```text
Programページに暫定プログラム表を追加してください。
事実を補完せず、未確定項目はTBAにしてください。
変更後にquarto renderを実行し、変更ファイルと確認結果を報告してください。
公開、push、Pages設定は行わないでください。
```

## Git運用

基本方針：

1. 作業前に最新状態を取得する
2. 小さな単位で変更する
3. ローカルプレビューを確認する
4. `quarto render`を実行する
5. diffを確認する
6. 内容を承認してからcommitする
7. pushまたはPull Requestは明示的な指示後に行う

推奨commit例：

```text
Initialize private Quarto conference site
Add draft venue and access page
Update approved program information
Improve mobile navigation
```

## 公開手順

公開は、主催者から明示的な承認を得た後にのみ行います。

公開前に決めること：

- 正式な大会名
- 正式なURL
- リポジトリを公開にするか
- GitHub Pagesの公開方法
- 問い合わせメール
- 個人情報保護方針
- 登録フォーム
- 掲載する主催者名、所属、ロゴ
- 科研費等の謝辞表記
- 公開日

公開方法は後から以下のいずれかを選びます。

- GitHub Pagesで`docs/`を公開
- GitHub ActionsでQuartoを自動レンダリングして公開
- その他の静的ホスティング

GitHub Pagesの有効化、push、visibility変更は、公開候補版の最終確認後に明示的な承認を得て実施します。

## 個人情報・安全管理

GitHubまたは公開サイトに置かないもの：

- 参加者のメールアドレス
- 登録者名簿
- 電話番号
- 未公開の発表要旨
- 内部の予算・科研費書類
- 会議の内部議事録
- APIキー、パスワード、アクセストークン
- 掲載許可のない写真、ロゴ、資料

秘密情報は `.env` 等にも安易に保存せず、GitHubへcommitしません。

## 役割

暫定的な役割分担：

- **主催教員**：正式名称、文章、日程、掲載情報の最終承認
- **RA／サイト管理担当**：素材整理、Quarto編集、プレビュー、更新、Git管理
- **Codex**：指示に基づく制作補助、修正、レンダリング確認、コードレビュー
- **GitHub**：サイトソースと履歴の正本
- **Dropbox**：原稿と素材の受け渡し、確認用ファイルの共有

## 未決定事項

- [ ] 正式な大会名
- [ ] 開催日
- [ ] 会場
- [ ] 使用言語
- [ ] 正式な問い合わせメール
- [ ] 登録方法
- [ ] プログラム
- [ ] 主催者・協力者の掲載範囲
- [ ] 科研費等の表記
- [ ] ロゴ・画像
- [ ] QCA文献リストの形式
- [ ] 公開用リポジトリ名
- [ ] 公開URL
- [ ] GitHub Pagesの公開方式
