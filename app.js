//images here
const Images = [
	{
		img: 'Images/img1.jpg'
	},
	{
		img: 'Images/img2.jpg'
	},
	{
		img: 'Images/img3.jpg'
	},
	{
		img: 'Images/img4.jpg'
	},

{
  img:'Images/img5.jpeg'
}
];

// get
let get = (select) => {
	const element = document.querySelector(select);
	if (element) return element;
	throw new Error(`Please check the ${select}`);
};

const container = get('.slider-container');
const prevBtn = get('.prev-btn');
const nextBtn = get('.next-btn');

container.innerHTML = Images.map((image, slideIndex) => {
	let position = 'next';
	if (slideIndex === 0) {
		position = 'active';
	}
	if (slideIndex === Images.length - 1) {
		position = 'prev';
	}
	const { img } = image;
	return ` <article class="slide ${position}">
                <img src="${img}"  class="img" alt="img1">
            </article>`;
}).join('');

function startSlide(type) {
	let active = get('.active');
	let last = get('.prev');
	let next = active.nextElementSibling;
	if (!next) {
		next = container.firstElementChild;
	}

	active.classList.remove([ 'active' ]);
	next.classList.remove([ 'next' ]);
	last.classList.remove([ 'prev' ]);

	if (type === 'prev') {
		active.classList.add('next');
		last.classList.add('active');
		next = last.previousElementSibling;
		if (!next) {
			next = container.lastElementChild;
		}
		next.classList.remove([ 'next' ]);
		next.classList.add('prev');
		return;
	}

	active.classList.add('prev');
	last.classList.add('next');
	next.classList.add('active');
}
prevBtn.addEventListener('click', () => {
	startSlide('prev');
});

nextBtn.addEventListener('click', () => {
	startSlide();
});
