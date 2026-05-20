const questions = [
  {
    eyebrow: "세안 직후",
    title: "폼클렌징 후 10분 동안 피부가 어떻게 변하나요?",
    answers: [
      {
        title: "얼굴 전체가 빨리 번들거려요",
        desc: "당김은 거의 없고 유분이 먼저 올라와요.",
        color: "#d4a23d",
        weights: { oily: 3 },
      },
      {
        title: "전체적으로 조이고 하얗게 떠요",
        desc: "웃거나 말할 때 피부가 팽팽하게 느껴져요.",
        color: "#b96848",
        weights: { dry: 3, dehydrated: 1 },
      },
      {
        title: "볼은 당기고 코와 이마는 편해요",
        desc: "부위마다 반응이 확실히 달라요.",
        color: "#76aeb4",
        weights: { combination: 3, dehydrated: 1 },
      },
      {
        title: "따갑거나 붉어지는 날이 많아요",
        desc: "세정 후 열감이나 붉은기가 쉽게 올라와요.",
        color: "#d47b73",
        weights: { sensitive: 3, dry: 1 },
      },
    ],
  },
  {
    eyebrow: "오후 2시",
    title: "낮 시간이 지나면 가장 신경 쓰이는 변화는 무엇인가요?",
    answers: [
      {
        title: "기름종이가 여러 장 필요해요",
        desc: "이마, 코, 볼까지 전체적으로 번들거려요.",
        color: "#d4a23d",
        weights: { oily: 3 },
      },
      {
        title: "T존만 번들거리고 볼은 건조해요",
        desc: "수정 화장이 부위별로 다르게 필요해요.",
        color: "#76aeb4",
        weights: { combination: 3 },
      },
      {
        title: "유분은 있는데 속은 조여요",
        desc: "겉은 번들거리는데 피부 속이 마른 느낌이에요.",
        color: "#7e9d82",
        weights: { dehydrated: 3, oily: 1 },
      },
      {
        title: "각질과 잔주름이 더 보여요",
        desc: "광보다 메마른 결이 먼저 보여요.",
        color: "#b96848",
        weights: { dry: 3 },
      },
    ],
  },
  {
    eyebrow: "피부결",
    title: "모공, 블랙헤드, 각질 중 더 자주 보이는 쪽은요?",
    answers: [
      {
        title: "코와 볼 모공, 블랙헤드",
        desc: "피지가 막힌 느낌이 자주 있어요.",
        color: "#d4a23d",
        weights: { oily: 2, combination: 1 },
      },
      {
        title: "볼과 입가 각질",
        desc: "제품을 발라도 들뜨는 부분이 생겨요.",
        color: "#b96848",
        weights: { dry: 2, dehydrated: 1 },
      },
      {
        title: "둘 다 부위별로 있어요",
        desc: "T존은 모공, U존은 각질이 보여요.",
        color: "#76aeb4",
        weights: { combination: 3 },
      },
      {
        title: "붉은기와 좁쌀이 먼저 올라와요",
        desc: "새 제품을 쓰면 반응이 빠른 편이에요.",
        color: "#d47b73",
        weights: { sensitive: 3 },
      },
    ],
  },
  {
    eyebrow: "메이크업과 선크림",
    title: "베이스 제품을 바른 날 가장 흔한 현상은요?",
    answers: [
      {
        title: "금방 무너지고 번들거려요",
        desc: "파우더를 써도 오래 버티기 어려워요.",
        color: "#d4a23d",
        weights: { oily: 2 },
      },
      {
        title: "건조한 부위에 끼고 갈라져요",
        desc: "코 옆, 입가, 볼에 들뜸이 생겨요.",
        color: "#b96848",
        weights: { dry: 2 },
      },
      {
        title: "광은 도는데 피부결은 거칠어요",
        desc: "유분과 건조 신호가 동시에 보여요.",
        color: "#7e9d82",
        weights: { dehydrated: 3 },
      },
      {
        title: "눈가나 볼이 따가울 때가 있어요",
        desc: "향이나 자외선차단제에 예민하게 반응해요.",
        color: "#d47b73",
        weights: { sensitive: 3 },
      },
    ],
  },
  {
    eyebrow: "트러블",
    title: "최근 한 달 동안 반복된 고민은 무엇인가요?",
    answers: [
      {
        title: "피지, 여드름, 화이트헤드",
        desc: "특히 코, 턱, 이마에 자주 생겨요.",
        color: "#d4a23d",
        weights: { oily: 3 },
      },
      {
        title: "당김, 가려움, 잔각질",
        desc: "보습을 해도 금방 건조해져요.",
        color: "#b96848",
        weights: { dry: 3 },
      },
      {
        title: "겉번들 속당김",
        desc: "피지는 많은데 수분감이 오래가지 않아요.",
        color: "#7e9d82",
        weights: { dehydrated: 3 },
      },
      {
        title: "홍조, 열감, 따가움",
        desc: "피부 컨디션이 쉽게 흔들려요.",
        color: "#d47b73",
        weights: { sensitive: 3 },
      },
    ],
  },
  {
    eyebrow: "잘 맞는 제형",
    title: "지금까지 가장 편했던 보습제 질감은요?",
    answers: [
      {
        title: "가벼운 젤이나 로션",
        desc: "산뜻하게 흡수되는 제형이 편해요.",
        color: "#d4a23d",
        weights: { oily: 2, combination: 1 },
      },
      {
        title: "진한 크림이나 밤",
        desc: "유분막이 있어야 편안해요.",
        color: "#b96848",
        weights: { dry: 3 },
      },
      {
        title: "가벼운 로션에 부분 크림",
        desc: "T존과 볼을 다르게 바르는 게 좋아요.",
        color: "#76aeb4",
        weights: { combination: 3 },
      },
      {
        title: "수분 세럼 뒤에 장벽 크림",
        desc: "한 겹만으로는 속당김이 남아요.",
        color: "#7e9d82",
        weights: { dehydrated: 3, sensitive: 1 },
      },
    ],
  },
  {
    eyebrow: "루틴 성향",
    title: "새 제품을 고를 때 가장 피하고 싶은 것은요?",
    answers: [
      {
        title: "무거운 오일감",
        desc: "답답한 막이 생기면 트러블이 걱정돼요.",
        color: "#d4a23d",
        weights: { oily: 2 },
      },
      {
        title: "매트하고 건조한 마무리",
        desc: "바르고 나서도 촉촉함이 남아야 해요.",
        color: "#b96848",
        weights: { dry: 2, dehydrated: 1 },
      },
      {
        title: "한 제품으로 전부 해결하는 방식",
        desc: "부위별로 조절할 수 있어야 편해요.",
        color: "#76aeb4",
        weights: { combination: 2 },
      },
      {
        title: "향, 스크럽, 고함량 액티브",
        desc: "자극 가능성이 낮은 구성이 좋아요.",
        color: "#d47b73",
        weights: { sensitive: 3 },
      },
    ],
  },
];

const typeData = {
  oily: {
    label: "지성",
    color: "#1587e8",
    title: "유분 많은 지성 피부",
    tags: "#피지 #모공 #번들거림",
    summaryLead: "번들거림이 빨리 올라오고 모공 고민이 잘 보이는 타입이에요. ",
    highlight: "유분을 잡되 수분은 남기는 산뜻한 루틴",
    summaryTail: "이 잘 맞아요.",
    morning: ["약산성 세안 후 수분 토너", "가벼운 젤크림 + 산뜻한 선크림"],
    night: ["선크림은 꼼꼼히 클렌징", "BHA는 주 1-2회만"],
    avoid: ["뽀득한 과세안", "보습 생략", "고함량 산 매일 사용"],
    products: [
      ["CL", "약산성 젤 클렌저", "코스알엑스 약산성 굿모닝 젤 클렌저"],
      ["TO", "피지 밸런스 토너", "아누아 어성초 토너"],
      ["MO", "가벼운 젤 크림", "닥터지 레드 블레미쉬 클리어 수딩 크림"],
      ["UV", "산뜻한 선크림", "라운드랩 자작나무 수분 선크림"],
    ],
  },
  dry: {
    label: "건성",
    color: "#1587e8",
    title: "수분 부족 건성 피부",
    tags: "#당김 #각질 #보습 고민",
    summaryLead: "세안 후 당김과 들뜸이 쉽게 느껴지는 타입이에요. ",
    highlight: "세안은 줄이고 보습막을 오래 남기는 루틴",
    summaryTail: "이 피부 컨디션을 편하게 만들어줘요.",
    morning: ["물세안 또는 순한 세안", "수분 세럼 + 세라마이드 크림"],
    night: ["부드럽게 클렌징", "리치 크림으로 마무리"],
    avoid: ["뜨거운 물 세안", "잦은 스크럽", "매트 제품 단독 사용"],
    products: [
      ["CL", "순한 보습 클렌저", "세타필 젠틀 스킨 클렌저"],
      ["SE", "수분 세럼", "토리든 다이브인 세럼"],
      ["CR", "세라마이드 크림", "일리윤 세라마이드 아토 집중 크림"],
      ["UV", "촉촉한 선크림", "닥터지 그린 마일드 업 선 플러스"],
    ],
  },
  combination: {
    label: "복합성",
    color: "#1587e8",
    title: "부위별 복합성 피부",
    tags: "#T존유분 #볼당김 #밸런스",
    summaryLead: "T존은 번들거리고 볼은 건조한 신호가 함께 보여요. ",
    highlight: "부위별로 보습 양을 조절하는 루틴",
    summaryTail: "이 가장 효율적이에요.",
    morning: ["T존은 가볍게, 볼은 촉촉하게", "수분 로션 + 선크림"],
    night: ["T존 피지는 꼼꼼히", "볼에는 장벽 크림 추가"],
    avoid: ["얼굴 전체를 같은 양으로 바르기", "볼 각질을 강하게 밀기", "T존 기준 과건조 관리"],
    products: [
      ["CL", "균형 클렌저", "라운드랩 1025 독도 클렌저"],
      ["TO", "수분 토너", "라운드랩 1025 독도 토너"],
      ["LO", "가벼운 로션", "에스트라 아토베리어365 로션"],
      ["CR", "부분 장벽 크림", "피지오겔 데일리 모이스처 테라피 페이셜 크림"],
    ],
  },
  dehydrated: {
    label: "수부지",
    color: "#1587e8",
    title: "수분부족 지성 민감",
    tags: "#여드름 #잡티 #탄력 고민",
    summaryLead: "겉은 번들거리지만 속은 건조한, 유분과 수분의 균형이 무너진 피부예요. 그래서 피지만 잡는 관리보다 ",
    highlight: "수분 충전과 산뜻한 보습을 함께하는 루틴",
    summaryTail: "이 필요해요.",
    morning: ["약산성 세안 + 수분 세럼", "가벼운 장벽 크림 + 수분 선크림"],
    night: ["자극 적은 클렌징", "판테놀/세라마이드 보습"],
    avoid: ["보습 줄이기", "알코올 토너로 매일 닦기", "매트 제품만 쓰기"],
    products: [
      ["CL", "약산성 클렌저", "비플레인 녹두 약산성 클렌징폼"],
      ["SE", "수분 진정 세럼", "토리든 다이브인 세럼"],
      ["CR", "장벽 크림", "에스트라 아토베리어365 크림"],
      ["UV", "수분 선크림", "라운드랩 자작나무 수분 선크림"],
    ],
  },
  sensitive: {
    label: "민감",
    color: "#1587e8",
    title: "자극 민감성 피부",
    tags: "#홍조 #열감 #장벽 고민",
    summaryLead: "붉은기와 따가움이 쉽게 올라오는 타입이에요. ",
    highlight: "기능성은 줄이고 장벽을 먼저 달래는 루틴",
    summaryTail: "이 피부를 안정시키는 데 잘 맞아요.",
    morning: ["물세안 또는 저자극 세안", "진정 크림 + 순한 선크림"],
    night: ["짧고 부드러운 클렌징", "시카/판테놀 보습"],
    avoid: ["향 강한 제품", "따가운데 계속 사용", "신제품 여러 개 동시 사용"],
    products: [
      ["CL", "저자극 클렌저", "라로슈포제 똘러리앙 클렌저"],
      ["CR", "시카 크림", "라로슈포제 시카플라스트 밤 B5"],
      ["MO", "장벽 보습 크림", "일리윤 세라마이드 아토 집중 크림"],
      ["UV", "민감 피부 선크림", "닥터지 그린 마일드 업 선 플러스"],
    ],
  },
};

const state = {
  step: 0,
  answers: [],
};

const $ = (selector) => document.querySelector(selector);

const stepLabel = $("#stepLabel");
const progressFill = $("#progressFill");
const questionEyebrow = $("#questionEyebrow");
const questionTitle = $("#questionTitle");
const answerList = $("#answerList");
const backBtn = $("#backBtn");
const resetBtn = $("#resetBtn");
const resultPanel = $("#resultPanel");
const questionCard = $("#questionCard");
const retakeBtn = $("#retakeBtn");
const shareBtn = $("#shareBtn");
const startBtn = $("#startBtn");
const quizPanel = $("#quizPanel");
const resultVisual = $("#resultVisual");

function renderQuestion() {
  const question = questions[state.step];
  stepLabel.textContent = `${state.step + 1} / ${questions.length}`;
  progressFill.style.width = `${(state.step / questions.length) * 100}%`;
  questionEyebrow.textContent = question.eyebrow;
  questionTitle.textContent = question.title;
  answerList.replaceChildren();

  question.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.className = "answer-btn";
    button.type = "button";
    button.style.setProperty("--chip-color", answer.color);
    button.innerHTML = `
      <span class="answer-glyph" aria-hidden="true"></span>
      <span class="answer-copy">
        <span class="answer-title">${answer.title}</span>
        <span class="answer-desc">${answer.desc}</span>
      </span>
    `;
    button.addEventListener("click", () => chooseAnswer(answer));
    answerList.append(button);
  });

  backBtn.disabled = state.step === 0;
  quizPanel.classList.remove("hidden");
  questionCard.classList.remove("hidden");
  resultPanel.classList.add("hidden");
}

function chooseAnswer(answer) {
  state.answers[state.step] = answer;

  if (state.step < questions.length - 1) {
    state.step += 1;
    renderQuestion();
    return;
  }

  progressFill.style.width = "100%";
  renderResult();
}

function calculateScores() {
  const scores = {
    oily: 0,
    dry: 0,
    combination: 0,
    dehydrated: 0,
    sensitive: 0,
  };

  state.answers.forEach((answer) => {
    Object.entries(answer.weights).forEach(([type, value]) => {
      scores[type] += value;
    });
  });

  return scores;
}

function getPrimaryType(scores) {
  const sorted = Object.entries(scores).sort((a, b) => b[1] - a[1]);
  const [topType] = sorted[0];
  const [secondType, secondScore] = sorted[1];

  if (topType === "sensitive") {
    return secondScore >= scores.sensitive - 2 ? secondType : "sensitive";
  }

  if (scores.sensitive >= 9 && scores.sensitive >= scores[topType] - 1) {
    return "sensitive";
  }

  return topType;
}

function coupangSearchUrl(query) {
  return `https://www.coupang.com/np/search?q=${encodeURIComponent(query)}`;
}

function renderList(target, items) {
  target.replaceChildren();
  items.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    target.append(li);
  });
}

function renderProducts(type) {
  const productGrid = $("#productGrid");
  productGrid.replaceChildren();

  typeData[type].products.forEach(([code, category, query], index) => {
    const card = document.createElement("article");
    card.className = "product-card";
    card.innerHTML = `
      <div class="product-top">
        <span class="product-icon" style="--product-color: ${typeData[type].color}">${code}</span>
        <div>
          <h4>${category}</h4>
          <p>${query}</p>
        </div>
      </div>
      <a class="product-link" href="${coupangSearchUrl(query)}" target="_blank" rel="noopener noreferrer">
        쿠팡에서 검색
      </a>
    `;
    card.style.animationDelay = `${index * 70}ms`;
    productGrid.append(card);
  });
}

function renderResult() {
  const scores = calculateScores();
  const primaryType = getPrimaryType(scores);
  const data = typeData[primaryType];
  const sensitivityNote =
    primaryType !== "sensitive" && scores.sensitive >= 6
      ? " 새 제품은 턱선에 먼저 테스트해보세요."
      : "";

  resultVisual.className = `result-visual type-${primaryType}`;
  resultVisual.setAttribute("aria-label", `${data.title} 일러스트`);
  $("#resultTitle").textContent = data.title;
  $("#resultTags").textContent = data.tags;
  $("#resultSummary").innerHTML = `${data.summaryLead}<strong>${data.highlight}</strong>${data.summaryTail}${sensitivityNote}`;
  renderList($("#morningRoutine"), data.morning);
  renderList($("#nightRoutine"), data.night);
  renderList($("#avoidList"), data.avoid);
  renderProducts(primaryType);

  quizPanel.classList.add("hidden");
  questionCard.classList.add("hidden");
  resultPanel.classList.remove("hidden");
  resultPanel.scrollIntoView({ behavior: "smooth", block: "start" });
}

function resetQuiz({ scrollToQuiz = true } = {}) {
  state.step = 0;
  state.answers = [];
  renderQuestion();
  if (scrollToQuiz) {
    quizPanel.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

backBtn.addEventListener("click", () => {
  if (state.step === 0) return;
  state.step -= 1;
  renderQuestion();
});

resetBtn.addEventListener("click", resetQuiz);
retakeBtn.addEventListener("click", resetQuiz);

shareBtn.addEventListener("click", async () => {
  const title = $("#resultTitle").textContent;
  const summary = $("#resultSummary").textContent;
  const text = `내 피부 타입 결과: ${title}\n${summary}`;

  try {
    await navigator.clipboard.writeText(text);
    shareBtn.textContent = "복사 완료";
    setTimeout(() => {
      shareBtn.textContent = "결과 복사";
    }, 1400);
  } catch {
    shareBtn.textContent = "복사 실패";
  }
});

startBtn.addEventListener("click", () => {
  resetQuiz();
});

renderQuestion();
quizPanel.classList.add("hidden");
