(function () {
  if (window.location.href.indexOf('brand-story') === -1 &&
      window.location.href.indexOf('information_id=4') === -1) return;

  function injectContent() {
    var target = document.querySelector('#content .content');
    if (!target) return;
    target.innerHTML = '<h3>選擇，是一種態度</h3><p>市場上從不缺保養品與保健食品，缺的是值得信任的選擇。</p><p>ANSEI PRIME（アンセイ プライム）是一間選品電商，我們不自行生產，而是在全球市場中，以最嚴格的標準尋找那些真正值得被推薦的品牌——它們有科學依據、有道德立場、有經得起時間驗證的效果。</p><p>我們的客人，是那些不輕易相信廣告、習慣自己做功課、願意為真正的品質付出代價的人。ANSEI PRIME 的工作，就是替你問清楚，然後只留下答得出來的那些。</p><h3>我們代理的三個品牌</h3><h4>iL BRiLLE（日本）</h4><p>以柬埔寨黃金蠶絲（CGS）為核心原料，結合日本脂質體導入技術，開發兼顧保濕、抗老與修護的高端保養系列。CGS 的稀有性不僅在於產量——全球佔比僅 0.0001%——更在於其雙重分子量結構，使其同時具備表面屏障修護與深層滲透的能力。</p><p>品牌核心開發者為擁有逾 20 年高端護膚經驗的日本美容專家，曾任職 SK-II，連續兩年獲西日本銷售冠軍。iL BRiLLE 兩度通過日本國際協力機構（JICA）嚴格審核，並在金邊皇家農業大學設立專屬實驗室，以科學方式持續驗證原料品質。</p><h4>TREEANNSEA（韓國）</h4><p>以「極端環境生存科學」為靈感，從沙漠、極地、馬達加斯加荒野中提取稀有植物與微生物萃取，配方含 80% 以上天然來源成分。持有 ISO 9001 與 ISO 14001 認證，堅持無動物實驗、可持續包裝與公平貿易原則。通過韓國食藥署（MFDS）美白與抗皺雙重功能性認證，獲韓國《Get it Beauty》等媒體推薦。</p><p>選擇 TREEANNSEA，是為了那些相信成分透明度、不需要過度包裝說服自己的人。</p><h4>BLOOMAGE HEALTH（台灣獨家代理）</h4><p>以麥角硫因（Ergothioneine，EGT）與亞精胺（Spermidine）為雙核心的細胞級保健補充品。EGT 是一種存在於自然界中極為稀有的胺基酸，被科學界視為目前最具潛力的抗氧化成分之一；Spermidine 則與細胞自噬活化密切相關，近年受到抗老研究領域的廣泛關注。</p><p>BLOOMAGE HEALTH 源於全球生物科技領導者 Bloomage 公司的先進技術，在 Made in USA 的嚴格品質標準下製造。ANSEI PRIME 為其在日本市場的唯一正規代理商，單粒 EGT 50mg 的高濃度標準，是我們對有感保養的基本要求。</p><h3>為何是這三個品牌</h3><p>它們來自不同的國家，面向不同的需求，但有一件事是共同的——每一個進入 ANSEI PRIME 的品牌，都必須提供具體的成分數據或第三方檢測報告。我們不代理只靠故事行銷的品牌，也不代理動物實驗品牌，更不代理將成本壓至極低、只靠包裝溢價的品牌。</p><p>這不是高標準，這只是最基本的誠實。</p><h3>品牌理念</h3><p><strong>智慧，是最高等級的自我養護。</strong><br>能辨別資訊、為自己選擇真正好的產品，才是最極致的愛護自己。</p><p><strong>比起外在的華麗，更追求內在的活力。</strong><br>我們追求的並非裝飾性的美麗，而是由內而外、真正容光煥發的健康狀態。</p><p><strong>今天，是創造未來自己的一天。</strong><br>今日的選擇，將會是給10年後自己最棒的禮物。讓科學實證的安心感，成為您每日的習慣。</p><p>科學 × 純度 × 實感力。</p>';
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', injectContent);
  } else {
    injectContent();
  }
  setTimeout(injectContent, 500);
  setTimeout(injectContent, 1500);
})();
