const backdrop = document.querySelector('.backdrop');
const modal = document.querySelector('.modal');
const modalCancelButton = document.querySelector('.modal__actions button');
const modalAcceptButton = document.querySelector('.modal__actions a');
const selectPlanButtons = document.querySelectorAll('.plan button');
const toggleNavigationButton = document.querySelector('.toggle-button');
const mobileNavigation = document.querySelector('.mobile-nav');
const desktopNavigation = document.querySelector('.main-nav');
let menuOpen = false;

for (let i = 0; i < selectPlanButtons.length; i++) {
	selectPlanButtons[i].addEventListener('click', addOpenClass);
}

function addOpenClass() {
	backdrop.style.display = 'block';
	setTimeout(() => {
		backdrop.classList.add('open');
	}, 200);
	if (modal) {
		modal.classList.add('open');
	}
}

function removeOpenClass() {
	backdrop.classList.remove('open');
	setTimeout(() => {
		backdrop.style.display = 'none';
	}, 200); // <- should match time in transition
	if (modal) {
		modal.classList.remove('open');
	}
}

if (modalCancelButton) {
	modalCancelButton.addEventListener('click', removeOpenClass);
}
if (modalAcceptButton) {
	modalAcceptButton.addEventListener('click', removeOpenClass);
}
backdrop.addEventListener('click', () => {
	mobileNavigation.classList.remove('open');
	removeOpenClass();
});

toggleNavigationButton.addEventListener('click', () => {
	mobileNavigation.classList.add('open');
	backdrop.style.display = 'block';
	setTimeout(() => {
		backdrop.classList.add('open');
	}, 200);
});
