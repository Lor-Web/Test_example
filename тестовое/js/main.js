const select = document.querySelector("select");
const option = document.querySelectorAll("option");

select.addEventListener("click", () => {
  if (select.getAttribute("size") === "5") {
    select.removeAttribute("size");
  } else {
    select.setAttribute("size", 5);
  }
});
