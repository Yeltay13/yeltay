export function toggleContent(id) {
  const content = document.getElementById(id + "-content");
  const arrow = document.getElementById(id + "-arrow");
  if (content.classList.contains("hidden")) {
    content.classList.remove("hidden");
    arrow.style.transform = "rotate(180deg)";
  } else {
    content.classList.add("hidden");
    arrow.style.transform = "rotate(0deg)";
  }
}
