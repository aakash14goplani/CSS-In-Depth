let accordionButton = document.querySelectorAll('.accordion-container__accordion');

for (let i = 0; i < accordionButton.length; i++) {
	accordionButton[i].addEventListener('click', function () {
		this.classList.toggle('active');

		const panel = this.nextElementSibling;
		panel.style.display = panel.style.display === 'block' ? 'none' : 'block';
		panel.style.maxHeight = panel.style.maxHeight ? null : panel.scrollHeight + 'px';
	});
}
