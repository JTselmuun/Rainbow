document.addEventListener("keydown", (event) => {
  const activeTag = document.activeElement?.tagName;
  if (activeTag === "INPUT" || activeTag === "TEXTAREA") {
    return;
  }

  const prevLink = document.querySelector(".chapter-nav a:first-child");
  const nextLink = document.querySelector(".chapter-nav a:last-child");
  const body = document.body;
  const fallbackPrev = body?.dataset.prev;
  const fallbackNext = body?.dataset.next;

  if (event.key === "ArrowLeft") {
    const target = prevLink?.getAttribute("href") || fallbackPrev;
    if (target) {
      window.location.href = target;
    }
  }

  if (event.key === "ArrowRight") {
    const target = nextLink?.getAttribute("href") || fallbackNext;
    if (target) {
      window.location.href = target;
    }
  }
});
