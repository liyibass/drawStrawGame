export class EventHandler {
  constructor() {
    // 取得html物件
    this.WinnerSecion = document.querySelector(".Winner");
    // 執行eventHandler
    this.WinnerSectionToggle();
  }

  WinnerSectionToggle() {
    if (this.WinnerSecion !== null) {
      this.WinnerSecion.addEventListener("click", () => {
        this.WinnerSecion.classList.toggle("Winner-show");
      });
    }
  }
}
