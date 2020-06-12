const dropdown = document.querySelector(".dropdown");
const list_items = document.querySelector(".list-items");

dropdown.addEventListener("click", function (e) {
	list_items.classList.toggle("show");
});
