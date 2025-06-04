
# 髙島春樹 公式サイト統合プロジェクト

## 📁 プロジェクト構成

```
takashima-haruki-site/
├── hub/                    # ハブサイト（メインサイト）
├── pianist/                # ピアニストサイト
├── nara-piano-studio/      # 奈良ピアノスタジオサイト
└── creative-lab/           # クリエイティブラボサイト
    └── astro-migration/    # Astroプロジェクト ✅ 動作確認済み
```

## �� 開発方法

### 📦 依存関係のインストール
```bash
npm run install:creative-lab
```

### 🛠️ 開発サーバー起動
```bash
npm run dev:creative-lab
```

### 📦 ビルド・プレビュー
```bash
npm run build:creative-lab
npm run preview:creative-lab
```

## ✅ 動作確認済み機能

- **Astroプロジェクト**: ビルド成功、開発サーバー起動成功
- **Tailwind CSS**: プラグイン含めて正常動作
- **アクセス**: http://localhost:4321/creative-lab または http://localhost:4322/creative-lab

## 🎯 開発方針

### アクセシビリティ最優先
- **Windows 7 + Chrome 109対応**: ハブ・ピアニスト・スタジオサイト
- **フォントサイズ**: 16px以上（ピアニストサイトは18px以上）
- **コントラスト**: WCAG AA準拠（4.5:1以上）
- **クリック領域**: 最小44px×44px

### 技術戦略
- **モノレポ構成**: 効率的な管理と段階的移行
- **段階的移行**: HTML/CSS → Astro → Next.js
- **自動デプロイ**: Cloudflare Pages + GitHub Actions

## 🎵 サイト詳細

### 1. ハブサイト
3つの専門サイトへの誘導・プロフィール・連絡先

### 2. ピアニストサイト
演奏活動・CDショップ・ブログ・写真ギャラリー

### 3. 奈良ピアノスタジオサイト
録音・映像制作・ピアノウィジェット・スタジオブログ

### 4. クリエイティブラボサイト（動作確認済み）
Web制作・技術教育・技術ブログ・技術スタック展示

## 🔗 リンク
- **本番サイト**: https://takashimaharuki.jp
- **クリエイティブラボ**: https://takashimaharuki.jp/creative-lab

## 📄 ライセンス
MIT License
