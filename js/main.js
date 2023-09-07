document.addEventListener("click", toggleBtn, false)

function toggleBtn(event) {
  const btn = event.target.closest(".btn")
  if (btn) {
    btn.classList.toggle("active")
  } else {
    // если клик мимо кнопок
    const listBtn = document.querySelectorAll(".btn")
    listBtn.forEach((e) => {
      e.classList.remove("active")
    })
  }
}
