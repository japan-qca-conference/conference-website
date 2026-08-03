# 共同作業ガイド

## 基本原則

- **GitHub**：ウェブサイト本体の正本
- **Dropbox**：原稿、素材、確認用ファイルの共有
- **メール／会議**：最終承認
- **Codex**：GitHub側の制作・修正補助

同じ`.qmd`やCSSを、GitHubとDropboxの両方で別々に編集しないようにします。

## 推奨Dropbox構成

```text
QCA_Conference_Website/
├─ 00_Admin/
│  ├─ decisions.md
│  └─ contact_list_private.xlsx
├─ 01_Content_Input/
│  ├─ homepage_draft.docx
│  ├─ program_draft.xlsx
│  └─ access_notes.docx
├─ 02_Approved_Content/
│  ├─ about_approved.docx
│  ├─ program_approved.xlsx
│  └─ organizers_approved.docx
├─ 03_Assets/
│  ├─ logos/
│  ├─ photos/
│  ├─ maps/
│  └─ downloadable_pdfs/
├─ 04_Preview/
│  ├─ screenshots/
│  └─ review_notes/
└─ 99_Archive/
```

`00_Admin`には個人情報や内部資料が含まれる可能性があるため、サイトリポジトリへコピーしません。

## 素材の状態

ファイル名またはフォルダで状態を区別します。

- `draft`：未確認
- `review`：確認中
- `approved`：掲載承認済み
- `archived`：旧版

Codexには、`approved`と明示された内容のみをサイトへ反映させます。

## 先生方がGitHubを使わない場合

1. 先生方がDropbox内のWordまたはExcelを修正
2. 最終確認済みファイルを`02_Approved_Content`へ移動
3. RAが変更点を確認
4. Codexに反映を依頼
5. RAがローカルプレビューを確認
6. スクリーンショットまたは確認用ファイルをDropboxへ置く
7. 主催者の承認後にGitへcommit
8. 公開承認後にのみpush／公開

## 先生方がGitHubを使う場合

先生方をOrganizationまたはprivate repositoryへ招待できます。ただし、初期段階ではRAが変更を取りまとめ、Pull Requestまたはレビューを通じて反映する方が混乱を減らせます。

## Codexへの更新依頼例

```text
Dropboxの承認済み原稿をもとにAboutページを更新したいです。
対象ファイルは次の内容です：[承認済み文章を貼る、またはリポジトリへコピーしたファイルを示す]

既存のデザインと見出し構造を維持してください。
内容を要約・創作せず、承認済み文章を忠実に反映してください。
変更後にquarto renderを実行し、変更点と残っているTBAを報告してください。
commit、push、公開は行わないでください。
```

## 同時編集を避けるルール

- 同じページを複数人が同時に編集しない
- 編集開始前に担当ページを共有する
- Dropboxの原稿に更新日と担当者を記載する
- GitHub側の変更前に`git pull`またはGitHub DesktopのFetch/Pullを行う
- 競合が発生した場合、内容を推測して自動統合せず、RAが確認する

## 公開前の承認記録

公開対象ごとに、承認者と承認日を簡単に記録します。

例：

```text
Program page
Approved by: [Name]
Approved on: YYYY-MM-DD
Source file: 02_Approved_Content/program_approved.xlsx
```

この記録自体に非公開情報が含まれる場合は、Dropboxの`00_Admin`に保存し、公開リポジトリへ置きません。
