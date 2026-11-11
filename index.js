document.addEventListener("DOMContentLoaded", () => {
  const basePath = "public/images/blurred";
  const understandFiles = [
  "01_이해__001.png__image_001__118c989730.png",
  "01_이해__002.png__image_001__0729f74c8f.png",
  "01_이해__이벤트마케팅솔루션.pdf__page_002__5571ec09cd.png",
  "01_이해__이벤트마케팅솔루션.pdf__page_005__5571ec09cd.png",
  "01_이해__이벤트마케팅솔루션_sns문자.pdf__page_002__bf976de4bd.png",
  "01_이해__이벤트마케팅솔루션_sns문자.pdf__page_003__bf976de4bd.png",
  "infominer_page_01.png",
  "infominer_page_02.png",
  "infominer_page_03.png",
  "infominer_page_04.png",
  "page_04_full_blur.png",
  "page_09_full_blur.png",
  "page_13_full_blur.png",
  "solution_a_page_01.jpg",
  "solution_a_page_02.jpg",
  "solution_a_page_03.jpg",
  "solution_a_page_04.jpg",
  "solution_a_page_05.jpg"
];
  const analyzeFiles = [
  "02_파악__20260330_NIPA_AI에이전트확산_수행계획서_v06_제출.pdf__page_010__734ba12a0e.png",
  "02_파악__20260330_NIPA_AI에이전트확산_수행계획서_v06_제출.pdf__page_014__734ba12a0e.png",
  "02_파악__20260513_KEITI_AI신속상용화_사업계획서_v08_앰앤테크.pdf__page_007__831df5f4d8.png",
  "02_파악__20260513_KEITI_AI신속상용화_사업계획서_v08_앰앤테크.pdf__page_009__831df5f4d8.png",
  "02_파악__InfoMiner_251104.pdf__page_006__cf5eb9e394__02.png",
  "02_파악__InfoMiner_251104.pdf__page_007__cf5eb9e394.png",
  "02_파악__[LS엠트론]_myFarmWorks_구축_제안서_몽키소프트.pptx__slide_005__8d8f866a79.png",
  "02_파악__[LS엠트론]_myFarmWorks_구축_제안서_몽키소프트.pptx__slide_019__8d8f866a79__02.png",
  "02_파악__[MonkeySoft]_GSWaterS_추가_기능_제안_데이터_상태_감시_및_AI_주간_리포트_20260908.pdf.pdf__page_004__8ec0d7aa7f.png",
  "02_파악__[MonkeySoft]_GSWaterS_추가_기능_제안_데이터_상태_감시_및_AI_주간_리포트_20260908.pdf.pdf__page_008__8ec0d7aa7f.png",
  "02_파악__monkeysoft.pdf__page_004__f15b0849c4.png",
  "02_파악__monkeysoft.pdf__page_005__f15b0849c4.png",
  "02_파악__몽키소프트_마포문화재단_AI통합관제_활용검토안.pdf__page_005__eb4e91aa0e.png",
  "02_파악__몽키소프트_마포문화재단_AI통합관제_활용검토안.pdf__page_006__eb4e91aa0e.png",
  "02_파악__이벤트_마케팅_솔루션___제품소개서___금복주.pdf__page_002__4febf8b207.png",
  "02_파악__이벤트_마케팅_솔루션___제품소개서___금복주.pdf__page_004__4febf8b207.png",
  "02_파악__한국삼공_RAG_제안서.pdf__page_003__3c14ce6289.png",
  "02_파악__한국삼공_RAG_제안서.pdf__page_005__3c14ce6289.png"
];
  const realizeBundles = [
  {
    "title": "운영 매뉴얼 및 설치 가이드",
    "files": [
      "04_구체화__BKM-MA-AS-A0303-03-InfoMiner_운영_매뉴얼.pdf__page_003__60d625cf68.png",
      "04_구체화__BKM-MA-AS-A0303-03-InfoMiner_운영_매뉴얼.pdf__page_033__60d625cf68.png",
      "04_구체화__BKM-MS-CO-E0101-01-키오스크_에이전트_설치_매뉴얼.pptx__slide_022__a30587dab9.png",
      "04_구체화__BKM-MS-CO-E0101-01-키오스크_에이전트_설치_매뉴얼.pptx__slide_023__a30587dab9.png"
    ]
  },
  {
    "title": "화면 설계 및 앱 등록",
    "files": [
      "04_구체화__BKM-MS-CO-E0101-02-안드로이드,_iOS_App_store_등록_매뉴얼.pdf__page_007__ca6ed5db36.png",
      "04_구체화__BKM-MS-CO-E0101-02-안드로이드,_iOS_App_store_등록_매뉴얼.pdf__page_009__ca6ed5db36.png",
      "04_구체화__BKM-MS-KA-A0101-01-01-Windows_키오스크_에이전트_화면설계서_v1.4.pptx__slide_009__b0877d6dd7.png",
      "04_구체화__BKM-MS-KA-A0101-01-01-Windows_키오스크_에이전트_화면설계서_v1.4.pptx__slide_010__b0877d6dd7.png"
    ]
  },
  {
    "title": "시스템 운영 및 프로세스",
    "files": [
      "04_구체화__GS_건설_자산관리_시스템_매뉴얼.pptx__slide_002__3f3cbbb11d.png",
      "04_구체화__GS_건설_자산관리_시스템_매뉴얼.pptx__slide_005__3f3cbbb11d.png",
      "04_구체화__InfoMiner_프로세스_설명자료.pdf__page_004__761efc0c87.png",
      "04_구체화__InfoMiner_프로세스_설명자료.pdf__page_006__761efc0c87.png"
    ]
  },
  {
    "title": "솔루션 활용 및 사용자 지원",
    "files": [
      "04_구체화__ThingsMiner_사용매뉴얼.pptx__slide_008__6fb0daeaa0.png",
      "04_구체화__ThingsMiner_사용매뉴얼.pptx__slide_014__6fb0daeaa0.png",
      "04_구체화__화면_캡처_2026-02-11_161544.png__image_001__5157d6a1d6.png",
      "04_구체화__화면_캡처_2026-02-11_161920.png__image_001__b163b993af.png"
    ]
  }
];

  const understandLabels = understandFiles.map((file, index) => {
    if (file.startsWith("01_이해")) {
      return ["이벤트 마케팅 솔루션", "이벤트 마케팅 솔루션", "서비스 소개 자료", "서비스 구성 자료", "SNS 마케팅 자료", "SNS 운영 자료"][index];
    }
    if (file.startsWith("infominer_page_")) return `솔루션 소개 자료 ${String(index - 5).padStart(2, "0")}`;
    if (file.startsWith("page_")) return `서비스 소개 및 구조 자료 ${String(index - 5).padStart(2, "0")}`;
    if (file.startsWith("solution_a_page_")) return `솔루션 구성 자료 ${String(index - 5).padStart(2, "0")}`;
    return "사업 이해 자료";
  });

  function imagePath(file) {
    return `${basePath}/${encodeURIComponent(file)}`;
  }

  function createDocCard(file, label, ratioClass = "") {
    const src = imagePath(file);
    return `<article class="doc-card ${ratioClass}">
      <div class="doc-thumb">
        <img src="${src}" alt="${label}" loading="lazy" decoding="async"
             onerror="this.closest('.doc-card').classList.add('image-missing')">
      </div>
      <div class="doc-meta"><span>${label}</span><span>PROJECT ARCHIVE</span></div>
    </article>`;
  }

  // 01 이해: 이해 관련 자료 6개 + 솔루션/서비스 소개 아카이브 12개
  const layout01 = document.getElementById("layout-01");
  if (layout01) {
    const left = document.createElement("div");
    const right = document.createElement("div");
    left.className = "asym-col col-left";
    right.className = "asym-col col-right";
    const ratios = ["ratio-tall", "ratio-wide", "ratio-square", "ratio-wide", "ratio-tall", "ratio-square"];
    understandFiles.forEach((file, index) => {
      const card = createDocCard(file, understandLabels[index], ratios[index % ratios.length]);
      (index % 2 === 0 ? left : right).insertAdjacentHTML("beforeend", card);
    });
    layout01.append(left, right);
  }

  // 02 파악: 실제 업로드된 18개 분석 자료를 3개 클러스터로 배치
  const layout02 = document.getElementById("layout-02");
  const clusters = [
    { title: "사업 제안 및 정책 과제 분석", sub: "ANALYSIS 01 — 06" },
    { title: "서비스·시스템 구조 및 현황 분석", sub: "ANALYSIS 07 — 12" },
    { title: "요구사항 및 개선 방향 도출", sub: "ANALYSIS 13 — 18" }
  ];
  if (layout02) {
    clusters.forEach((cluster, clusterIndex) => {
      const files = analyzeFiles.slice(clusterIndex * 6, clusterIndex * 6 + 6);
      const cards = files.map((file) => {
        let label = "분석 자료";
        if (file.includes("NIPA_AI에이전트")) label = "AI 에이전트 사업 분석";
        else if (file.includes("KEITI_AI신속상용화")) label = "AI 신속상용화 분석";
        else if (file.includes("InfoMiner")) label = "InfoMiner 구조 분석";
        else if (file.includes("LS엠트론")) label = "myFarmWorks 분석";
        else if (file.includes("GSWaterS")) label = "GS WaterS 개선 분석";
        else if (file.includes("마포문화재단")) label = "AI 통합관제 검토";
        else if (file.includes("이벤트_마케팅")) label = "이벤트 솔루션 분석";
        else if (file.includes("한국삼공")) label = "RAG 제안 분석";
        else if (file.includes("monkeysoft")) label = "기업 현황 분석";
        return createDocCard(file, label);
      }).join("");
      layout02.insertAdjacentHTML("beforeend", `<div class="cluster-row">
        <div class="cluster-head"><span class="cluster-title">${cluster.title}</span>
        <span class="cluster-sub">${cluster.sub}</span></div>
        <div class="cluster-nodes">${cards}</div>
      </div>`);
    });
  }

  // 03 구체화: 문서의 실제 종류에 따라 4개 산출물 묶음으로 구성
  const layout03 = document.getElementById("layout-03");
  if (layout03) {
    realizeBundles.forEach((bundle) => {
      const stack = bundle.files.map((file) => {
        const label = file.includes("InfoMiner_운영") ? "InfoMiner 운영 매뉴얼"
          : file.includes("키오스크_에이전트_설치") ? "키오스크 설치 매뉴얼"
          : file.includes("App_store") ? "앱 등록 매뉴얼"
          : file.includes("화면설계서") ? "키오스크 화면 설계"
          : file.includes("GS_건설") ? "자산관리 시스템 매뉴얼"
          : file.includes("InfoMiner_프로세스") ? "InfoMiner 프로세스 안내"
          : file.includes("ThingsMiner") ? "ThingsMiner 사용자 매뉴얼"
          : "서비스 화면 및 결과";
        return `<div class="stack-card"><div class="doc-thumb">
          <img src="${imagePath(file)}" alt="${label}" loading="lazy" decoding="async"
               onerror="this.closest('.stack-card').classList.add('image-missing')">
        </div></div>`;
      }).join("");
      layout03.insertAdjacentHTML("beforeend", `<div class="bundle-group">
        <div class="bundle-stack">${stack}</div>
        <div class="bundle-info"><span class="bundle-title">${bundle.title}</span>
        <span class="bundle-badge">${bundle.files.length} DOCUMENTS</span></div>
      </div>`);
    });
  }

  // 좌측 메뉴 현재 섹션 표시
  const sections = document.querySelectorAll(".section-block");
  const navItems = document.querySelectorAll(".step-item");
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) navItems.forEach((item) => {
          item.classList.toggle("active", item.dataset.section === entry.target.id);
        });
      });
    }, { rootMargin: "-28% 0px -58% 0px" });
    sections.forEach((section) => observer.observe(section));
  }
});
