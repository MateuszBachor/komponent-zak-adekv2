// Wymagania biznesowe:
// komponent może przyjąć dowolną ilość zakładek
// nazwy zakładek powinny zawijać się do kolejnego wiersza jeżeli nie mieszczą się na ekranie
// po kliknięciu w komponent zakładkę pojawia się przypisany do niej kontent
// aktywna zakładka ma inny styl sugerujący, że wyświetla się jej kontent

// Wymagania techniczne:
// komponent będzie można stworzyć za pomocą klasy lub funkcji np. new Tabs(container, config) lub createTabsComponent(container, config)
// container to element html, do którego należy “wstrzyknąć” komponent zakładek
// config to dowolny obiekt lub tablica na podstawie, której należy wygenerować komponent. Przykładowy schemat:
// const tabs = [ {label: string, content: string} ]
// domyślnie aktywna jest pierwsza zakładka
// komponent wyświetla się poprawnie na mobile oraz desktop
const tabs = [
  { label: "Zakładka1", content: "content1" },
  { label: "Zakładka2", content: "content2" },
  { label: "Zakładka3", content: "content3" },
  { label: "Zakładka4", content: "content4" },
  { label: "Zakładka5", content: "content5" },
  { label: "Zakładka6", content: "content6" },
  { label: "Zakładka7", content: "content7" },
  { label: "Zakładka8", content: "content8" },
  { label: "Zakładka9", content: "content9" },
  { label: "Zakładka10", content: "content10" },
];

class Tabs {
  constructor(container, config) {
    this.container = container;
    this.config = config;
    this.tabsContainer = document.createElement("div");
    this.tabsContainer.classList.add("tabsContainer");
    this.container.appendChild(this.tabsContainer);
    this.contentContainer = document.createElement("div");
    this.contentContainer.classList.add("contentContainer");
    this.container.appendChild(this.contentContainer);
    this.createTabs();
    this.showContent();
  }
  createTabs() {
    this.config.map((tab, index) => {
      const newTab = document.createElement("div");
      newTab.innerHTML = tab.label;
      newTab.classList.add("tabElement");
      this.tabsContainer.appendChild(newTab);
      if (index === 0) {
        newTab.classList.add("active");
      }
      newTab.addEventListener("click", () => {
        const activeTab = document.querySelector(".active");
        if (activeTab) {
          activeTab.classList.remove("active");
        }
        newTab.classList.add("active");
        this.showContent();
      });
    });
  }
  showContent() {
    this.config.map((tab) => {
      const activeTab = document.querySelector(".active");
      if (activeTab.innerHTML === tab.label) {
        this.contentContainer.innerHTML = tab.content;
        this.contentContainer.classList.add("showContent");
      }
    });
  }
}
document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("mainContainer");
  new Tabs(container, tabs);
});
