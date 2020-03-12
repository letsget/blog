const sub = document.querySelector('.sub');
const dropDown = document.querySelector('.dropdown');


function displaySub () {
  dropDown.classList.toggle('dropdown_active');
  sub.classList.toggle('sub_active');
}


sub.onclick = displaySub;

document.addEventListener("click", function(e) {
	// If user clicks inside the element, do nothing
	if (e.target.closest(".sub")) return;

	// If user clicks outside the element, hide it!
    dropDown.classList.remove("dropdown_active");
    sub.classList.remove("sub_active");
});

