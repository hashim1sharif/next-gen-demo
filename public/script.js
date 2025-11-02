// ✅ This is frontend code — runs in the browser
const nextButton = document.getElementById("next");
if (nextButton) {
  nextButton.addEventListener("click", () => {
    alert("Next clicked!");
  });
}
