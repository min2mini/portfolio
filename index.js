document.addEventListener("DOMContentLoaded", () => {
  const basePath = "public/images/blurred";
  const range = (start, end) => Array.from({ length: end - start + 1 }, (_, i) => start + i);

  // Anonymous filenames preserve the original, already blurred image bytes.
  function createDocCard(group, index, label) {
    const card = document.createElement("figure");
    card.className = "doc-card";
    const thumb = document.createElement("div");
    thumb.className = "doc-thumb";
    const img = document.createElement("img");
    const extension = group === "understand" && index >= 14 ? "jpg" : "png";
    img.alt = `${label} ${String(index).padStart(2, "0")} (보안 처리)`;
    img.loading = "lazy";
    img.decoding = "async";
    img.addEventListener("error", () => {
      card.classList.add("image-missing");
      const message = document.createElement("span");
      message.className = "image-error";
      message.textContent = "이미지를 불러오지 못했습니다.";
      thumb.append(message);
    }, { once: true });
    img.src = `${basePath}/${group}-${String(index).padStart(2, "0")}.${extension}`;
    thumb.append(img);
    card.append(thumb);
    return card;
  }

  function fillGallery(id, group, indices, label) {
    const gallery = document.getElementById(id);
    if (gallery) gallery.append(...indices.map(index => createDocCard(group, index, label)));
  }

  fillGallery("layout-01", "understand", range(1, 18), "기업 및 솔루션 소개자료");
  // Only documents identified as proposals are associated with the proposal work.
  fillGallery("proposal-gallery", "analyze", [7, 8, 9, 10, 13, 14, 15, 16, 17, 18], "기업 맞춤형 제안자료");
  fillGallery("analyze-common-gallery", "analyze", [5, 6, 11, 12], "기업 및 솔루션 공통 자료");
  fillGallery("agent-gallery", "analyze", [1, 2], "AI AGENT 융합·확산 사업계획서");
  fillGallery("commercial-gallery", "analyze", [3, 4], "AI 신속상용화 사업계획서");

  const deliverables = [
    { target: "kiosk-gallery", title: "운영 및 설치 매뉴얼", indices: [1, 2, 3, 4] },
    { target: "kiosk-gallery", title: "화면 설계 및 앱 등록", indices: [5, 6, 7, 8] },
    { target: "materialize-common-gallery", title: "시스템 운영 및 프로세스", indices: [9, 10, 11, 12] },
    { target: "materialize-common-gallery", title: "솔루션 활용 및 사용자 지원", indices: [13, 14, 15, 16] }
  ];
  deliverables.forEach(({ target, title, indices }) => {
    const gallery = document.getElementById(target);
    if (!gallery) return;
    const group = document.createElement("div");
    group.className = "deliverable-group";
    const heading = document.createElement("h4");
    heading.textContent = title;
    const images = document.createElement("div");
    images.className = "deliverable-grid";
    images.append(...indices.map(index => createDocCard("materialize", index, title)));
    group.append(heading, images);
    gallery.append(group);
  });

  const sections = [...document.querySelectorAll(".section-block")];
  const navItems = [...document.querySelectorAll(".step-item")];
  function setActiveSection(id) {
    navItems.forEach(item => {
      const active = item.dataset.section === id;
      item.classList.toggle("active", active);
      if (active) item.setAttribute("aria-current", "location");
      else item.removeAttribute("aria-current");
    });
  }

  // Track the reading position, including gaps between sections and anchor jumps.
  let scrollQueued = false;
  function updateNavigation() {
    const readingLine = window.innerHeight * 0.3;
    let current = sections[0];
    sections.forEach(section => {
      if (section.getBoundingClientRect().top <= readingLine) current = section;
    });
    if (current) setActiveSection(current.id);
    scrollQueued = false;
  }
  window.addEventListener("scroll", () => {
    if (!scrollQueued) {
      scrollQueued = true;
      window.requestAnimationFrame(updateNavigation);
    }
  }, { passive: true });
  window.addEventListener("resize", updateNavigation);
  window.addEventListener("hashchange", updateNavigation);
  updateNavigation();

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  if ("IntersectionObserver" in window && !reducedMotion.matches) {
    const revealObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.05 });
    document.querySelectorAll(".experience, .project-archive").forEach(element => {
      element.classList.add("reveal");
      revealObserver.observe(element);
    });
  }
});
