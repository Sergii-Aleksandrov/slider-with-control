let arr = ['1.png', '2.png', '3.png', '4.png', '5.png', '6.png', '7.png', '8.png', '9.png', '10.png'];

let div = document.querySelector('#content');
let butLeft = div.querySelector('.butLeft');
let butRight = div.querySelector('.butRight');
let ul = div.querySelector('ul');
let images = div.querySelectorAll('li img');
	
let i = 0;
	
butRight.addEventListener('click', function() {
	i += 1;
	let j = i;
	for (let img of images) {
		let src = img.getAttribute('src');
		let res = src.match(/^(.*\/).*$/);
		let patch = res[1];

		j += 1;
		img.setAttribute('src', patch + arr[j]);
		// j += 1;
	};
		
	if (arr.length - images.length - 1 == i) {
		this.disabled = true;
		this.style.cursor = 'not-allowed';
	};
	butLeft.disabled = false;
	butLeft.style.cursor = 'pointer';
});

butLeft.addEventListener('click', function() {
	let j = i;
	for (let img of images) {
		let src = img.getAttribute('src');
		let res = src.match(/^(.*\/).*$/);
		let patch = res[1];

		img.setAttribute('src', patch + arr[j]);
		j += 1;
	};
	i -= 1;
		
	if (i < 0) {
		this.disabled = true;
		this.style.cursor = 'not-allowed';
	};
	butRight.disabled = false;
	butRight.style.cursor = 'pointer';
});