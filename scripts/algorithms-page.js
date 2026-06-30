const readingToggle = document.querySelector("#reading-toggle");

if (readingToggle && window.readingAssist) {
  const readingEnabled = window.readingAssist.isEnabled();
  readingToggle.setAttribute("aria-pressed", String(readingEnabled));
  window.readingAssist.setEnabled(readingEnabled, document);

  readingToggle.addEventListener("click", () => {
    const enabled = readingToggle.getAttribute("aria-pressed") !== "true";
    readingToggle.setAttribute("aria-pressed", String(enabled));
    window.readingAssist.setEnabled(enabled, document);
  });
}
