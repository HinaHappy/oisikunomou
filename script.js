// スクロールインアニメーション
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('slide-in');
    }
  });
});

document.querySelectorAll('.situation-card').forEach(card => {
  card.classList.add('before-slide'); // 初期状態
  observer.observe(card);
});
document.getElementById("startDiagnosisBtn").addEventListener("click", function () {
  document.getElementById("diagnosisModal").style.display = "flex";
});

document.getElementById("closeModal").addEventListener("click", function () {
  document.getElementById("diagnosisModal").style.display = "none";
});
document.getElementById("diagnosisForm").addEventListener("submit", function(e) {
  e.preventDefault(); // フォームの送信を止める

  // 診断処理を書く場所（例：選択値取得 → 結果表示など）
 document.getElementById("diagnosisForm").style.display = "none";
  document.getElementById("diagnosisResult").classList.remove("hidden");
});
document.addEventListener("DOMContentLoaded", () => {
  const diagnosisForm = document.getElementById("diagnosisForm");
  const diagnosisResult = document.getElementById("diagnosisResult");
  const resultText = document.getElementById("resultText");
  const resultImage = document.getElementById("resultImage");
  const externalLink = document.getElementById("externalLink");

  diagnosisForm.addEventListener("submit", (e) => {
    e.preventDefault(); // フォーム送信によるページリロードを防止

    // 選択された値を取得
    const mood = document.getElementById("mood").value;
    const activity = document.getElementById("activity").value;

// 診断ロジック（例）
    let recommendation = "";
    let imageSrc = "";
    let linkUrl = "#";

    if (mood === "relax" && activity === "book") {
      recommendation = "落ち着いた読書時間には赤ワインがおすすめです。";
      imageSrc = "images/red_wine.jpg";
      linkUrl = "https://example.com/red-wine";
    } else if (mood === "refresh" && activity === "music") {
      recommendation = "音楽と一緒にクラフトビールを楽しんで。";
      imageSrc = "images/beer.jpg";
      linkUrl = "https://example.com/craft-beer";
    } else if (mood === "inspire" && activity === "movie") {
      recommendation = "映画と共に日本酒の新しい一面を。";
      imageSrc = "images/sake.jpg";
      linkUrl = "https://example.com/japanese-sake";
    } else if (mood === "heal" && activity === "bath") {
      recommendation = "お風呂上がりにはスパークリングワインを。";
      imageSrc = "images/sparkling.jpg";
      linkUrl = "https://example.com/sparkling";
    } else {
      recommendation = "今夜は自分だけの一杯をゆっくり探してみてください。";
      imageSrc = "images/default.jpg";
      linkUrl = "#";
    }

    // 結果の表示処理
    resultText.textContent = recommendation;
    resultImage.src = imageSrc;
    resultImage.alt = recommendation;
    externalLink.href = linkUrl;

    // 結果表示エリアを表示
    diagnosisResult.classList.remove("hidden");
  });
});
 
// 投稿モーダル表示
const modal = document.getElementById('ugcModal');
const openBtn = document.getElementById('submitPostBtn');
const closeBtn = document.querySelector('.close');

openBtn.addEventListener('click', () => {
  modal.style.display = 'flex';
});

closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});
function scrollToDiagnosis() {
  const diagnosis = document.getElementById('diagnosis');
  diagnosis.scrollIntoView({ behavior: 'smooth' });
}
document.getElementById('diagnosisForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const mood = document.getElementById('mood').value;
  const activity = document.getElementById('activity').value;

  const resultText = document.getElementById('resultText');
  const resultImage = document.getElementById('resultImage');
  const externalLink = document.getElementById('externalLink');
  // グラデーション背景ラッパーのCSSは外部CSSファイルまたは<style>タグに記述してください

  document.getElementById('shareBtn').addEventListener('click', () => {
    const text = encodeURIComponent("今夜の一杯を診断しました！ #わたしのお酒時間");
    const url = encodeURIComponent(window.location.href);
    window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`, "_blank");
  });

}); // ← 修正: 閉じ忘れた関数の終了
// 「もう一度、診断する」ボタンでモーダルを再表示
document.getElementById("retryDiagnosisBtn").addEventListener("click", function () {
  document.getElementById("diagnosisModal").style.display = "flex";
  
  // 診断フォームをリセットして表示
  document.getElementById("diagnosisForm").reset();
  document.getElementById("diagnosisForm").style.display = "block";

  // 結果は非表示に
  document.getElementById("diagnosisResult").classList.add("hidden");
});
document.getElementById("ugcForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("ご投稿ありがとうございます！※この機能は現在デモ表示です。");
  document.getElementById("ugcModal").style.display = "none";
  this.reset();
});

// 投稿モーダルを閉じる
document.getElementById("closeUgcModal").addEventListener("click", function () {
  document.getElementById("ugcModal").style.display = "none";
});
