const button = document.getElementById("hello-button");
const output = document.getElementById("hello-output");

if (button && output) {
  button.addEventListener("click", () => {
    output.textContent = "JavaScript is wired up.";
  });
}
