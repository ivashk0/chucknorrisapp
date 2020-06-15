// получаем шутку Random
const mainJoke = document.querySelector('.main-joke');
const buttonGetJoke = document.querySelector('.button__get-joke');

// показать блок "избранное"
const favBtn = document.querySelector('.fav_btn');

favBtn.addEventListener('click', function () {
	const activeClasses = document.querySelectorAll(
	'.favburger, .favourite, .generator, .fav_btn, .menu_favourite, .favourite__header_text, .favourite__main_joke, .main__header, .main__header_icon'
	)
	for(let i = 0; i < activeClasses.length; i++) {
		activeClasses[i].classList.toggle('active');
	}
	const lockClasses = document.querySelector('body');
	lockClasses.classList.toggle('lock');
})

// показать/скрыть блоки радиокнопок
let radioInputs = document.querySelectorAll('.radio__input');
let innerBlocks = document.querySelectorAll('.inner-block');

const setActiveItem = (index, items) => {
	items.forEach((item, itemIndex) => {
		index === itemIndex
			? item.classList.add('active')
			: item.classList.remove('active')
	})
}

radioInputs.forEach((item, index) => {
	item.addEventListener('click', () => {
		setActiveItem(index, innerBlocks);

		if(item.id === 'random') {
			buttonGetJoke.addEventListener('click', function () {
				fetch('https://api.chucknorris.io/jokes/random')
					.then(response => response.json())
					.then(data => {
						const mainJokeBox = document.createElement('div');
						mainJokeBox.classList.add('main-joke_box');
						const jokeBox = document.createElement('div');
						jokeBox.classList.add('joke__box');
						mainJokeBox.appendChild(jokeBox);
						mainJoke.append(mainJokeBox);
						// block heart
						const mainBoxHeart = document.createElement('div');
						mainBoxHeart.classList.add('main__box_heart');
						const heartButton = document.createElement('button');
						heartButton.classList.add('heart_btn1');
						const heartButtonIcon = document.createElement('img');
						heartButtonIcon.src = 'img/heart1.svg';
						heartButton.appendChild(heartButtonIcon);
						mainBoxHeart.appendChild(heartButton);
						// block item
						const mainBoxItem = document.createElement('div');
						mainBoxItem.classList.add('main__box_item');
						const mainBoxItemCol = document.createElement('div');
						mainBoxItemCol.classList.add('main__box_col');
						const mainBoxItemColIcon = document.createElement('div');
						mainBoxItemColIcon.classList.add('main__box_col_icon');
						mainBoxItemCol.appendChild(mainBoxItemColIcon);
						const mainBoxIcon = document.createElement('div');
						mainBoxIcon.classList.add('main__box_icon');
						mainBoxItemColIcon.appendChild(mainBoxIcon);
						const mainBoxItemColIconImg = document.createElement('img');
						mainBoxItemColIconImg.src = 'img/msg.svg';
						mainBoxIcon.appendChild(mainBoxItemColIconImg);
						const mainBoxColContent = document.createElement('div');
						mainBoxColContent.classList.add('main__box_col_content');
						// block ID
						const mainBoxId = document.createElement('div');
						mainBoxId.classList.add('main__box_id');
						const idLink = document.createElement('span');
						idLink.classList.add('box__id_link');
						mainBoxId.appendChild(idLink);
						const idText = document.createElement('a');
						idText.classList.add('box__id_text');
						mainBoxId.appendChild(idText);
						const idJoke = document.createElement('span');
						idJoke.classList.add('box__idjoke');
						idText.appendChild(idJoke);
						const svgLink = document.createElement('img');
						svgLink.src = 'img/link.svg';
						mainBoxId.appendChild(svgLink);
			
						const mainBoxText = document.createElement('div');
						mainBoxText.classList.add('main__box_text');
						mainBoxColContent.append(mainBoxId, mainBoxText);
						mainBoxItem.append(mainBoxItemColIcon, mainBoxColContent);
						// block footer
						const mainBoxFooter = document.createElement('div');
						mainBoxFooter.classList.add('main__box_footer');
						const boxUpd = document.createElement('div');
						boxUpd.classList.add('main__box_upd');
						const boxUpdJoke = document.createElement('p');
						boxUpdJoke.classList.add('box__upd_joke');
						const boxCategorie = document.createElement('div');
						boxCategorie.classList.add('box__categorie');
						const boxCategorieText = document.createElement('p');
						boxCategorieText.classList.add('box__categorie_text');
						boxCategorie.appendChild(boxCategorieText);
			
						mainBoxFooter.append(boxUpd, boxCategorie);
			
						boxUpd.appendChild(boxUpdJoke);
			
						const timeJoke = document.createElement('p');
						timeJoke.innerHTML = `
							Last update: ${
								Math.ceil((Date.now() - new Date(data.updated_at.split(".")[0].replace(" ", "T"))) / 36e5)
							} hours ago`;
						boxUpdJoke.appendChild(timeJoke);
			
						jokeBox.append(mainBoxHeart, mainBoxItem, mainBoxFooter);
			
						console.log(data);
						idText.href = data.url;
						idText.target = '_blank';
						idText.innerHTML = data.id;
						idLink.innerHTML = 'ID: ';
						mainBoxText.innerHTML = data.value;
						boxCategorieText.innerHTML = data.categories;
					});
			});
		}
		if(item.id === 'categories') {
			let categories = document.querySelectorAll('.btn__categories');
			for(let i = 0; i < categories.length; i++) {
				categories[i].addEventListener('click', function () {
					categories[i].classList.toggle('active');
					if(categories[i].innerText === 'ANIMAL') {
						buttonGetJoke.addEventListener('click', function () {
							fetch('https://api.chucknorris.io/jokes/random?category=animal')
								.then(response => response.json())
								.then(data => {
									const mainJokeBox = document.createElement('div');
									mainJokeBox.classList.add('main-joke_box');
									const jokeBox = document.createElement('div');
									jokeBox.classList.add('joke__box');
									mainJokeBox.appendChild(jokeBox);
									mainJoke.append(mainJokeBox);
									// block heart
									const mainBoxHeart = document.createElement('div');
									mainBoxHeart.classList.add('main__box_heart');
									const heartButton = document.createElement('button');
									heartButton.classList.add('heart_btn1');
									const heartButtonIcon = document.createElement('img');
									heartButtonIcon.src = 'img/heart1.svg';
									heartButton.appendChild(heartButtonIcon);
									mainBoxHeart.appendChild(heartButton);
									// block item
									const mainBoxItem = document.createElement('div');
									mainBoxItem.classList.add('main__box_item');
									const mainBoxItemCol = document.createElement('div');
									mainBoxItemCol.classList.add('main__box_col');
									const mainBoxItemColIcon = document.createElement('div');
									mainBoxItemColIcon.classList.add('main__box_col_icon');
									mainBoxItemCol.appendChild(mainBoxItemColIcon);
									const mainBoxIcon = document.createElement('div');
									mainBoxIcon.classList.add('main__box_icon');
									mainBoxItemColIcon.appendChild(mainBoxIcon);
									const mainBoxItemColIconImg = document.createElement('img');
									mainBoxItemColIconImg.src = 'img/msg.svg';
									mainBoxIcon.appendChild(mainBoxItemColIconImg);
									const mainBoxColContent = document.createElement('div');
									mainBoxColContent.classList.add('main__box_col_content');
									// block ID
									const mainBoxId = document.createElement('div');
									mainBoxId.classList.add('main__box_id');
									const idLink = document.createElement('span');
									idLink.classList.add('box__id_link');
									mainBoxId.appendChild(idLink);
									const idText = document.createElement('a');
									idText.classList.add('box__id_text');
									mainBoxId.appendChild(idText);
									const idJoke = document.createElement('span');
									idJoke.classList.add('box__idjoke');
									idText.appendChild(idJoke);
									const svgLink = document.createElement('img');
									svgLink.src = 'img/link.svg';
									mainBoxId.appendChild(svgLink);
									
									const mainBoxText = document.createElement('div');
									mainBoxText.classList.add('main__box_text');
									mainBoxColContent.append(mainBoxId, mainBoxText);
									mainBoxItem.append(mainBoxItemColIcon, mainBoxColContent);
									// block footer
									const mainBoxFooter = document.createElement('div');
									mainBoxFooter.classList.add('main__box_footer');
									const boxUpd = document.createElement('div');
									boxUpd.classList.add('main__box_upd');
									const boxUpdJoke = document.createElement('p');
									boxUpdJoke.classList.add('box__upd_joke');
									const boxCategorie = document.createElement('div');
									boxCategorie.classList.add('box__categorie');
									const boxCategorieText = document.createElement('p');
									boxCategorieText.classList.add('box__categorie_text');
									boxCategorie.appendChild(boxCategorieText);
									
									mainBoxFooter.append(boxUpd, boxCategorie);
									
									boxUpd.appendChild(boxUpdJoke);
									
									const timeJoke = document.createElement('p');
									timeJoke.innerHTML = `
									Last update: ${
										Math.ceil((Date.now() - new Date(data.updated_at.split(".")[0].replace(" ", "T"))) / 36e5)
									} hours ago`;
									boxUpdJoke.appendChild(timeJoke);
									
									jokeBox.append(mainBoxHeart, mainBoxItem, mainBoxFooter);
									
									console.log(data);
									idText.href = data.url;
									idText.target = '_blank';
									idText.innerHTML = data.id;
									idLink.innerHTML = 'ID: ';
									mainBoxText.innerHTML = data.value;
									boxCategorieText.innerHTML = data.categories;
								});
						});
					}
					if(categories[i].innerText === 'CAREER') {
						buttonGetJoke.addEventListener('click', function () {
							fetch('https://api.chucknorris.io/jokes/random?category=career')
								
								.then(response => response.json())
								.then(data => {
									const mainJokeBox = document.createElement('div');
									mainJokeBox.classList.add('main-joke_box');
									const jokeBox = document.createElement('div');
									jokeBox.classList.add('joke__box');
									mainJokeBox.appendChild(jokeBox);
									mainJoke.append(mainJokeBox);
									// block heart
									const mainBoxHeart = document.createElement('div');
									mainBoxHeart.classList.add('main__box_heart');
									const heartButton = document.createElement('button');
									heartButton.classList.add('heart_btn1');
									const heartButtonIcon = document.createElement('img');
									heartButtonIcon.src = 'img/heart1.svg';
									heartButton.appendChild(heartButtonIcon);
									mainBoxHeart.appendChild(heartButton);
									// block item
									const mainBoxItem = document.createElement('div');
									mainBoxItem.classList.add('main__box_item');
									const mainBoxItemCol = document.createElement('div');
									mainBoxItemCol.classList.add('main__box_col');
									const mainBoxItemColIcon = document.createElement('div');
									mainBoxItemColIcon.classList.add('main__box_col_icon');
									mainBoxItemCol.appendChild(mainBoxItemColIcon);
									const mainBoxIcon = document.createElement('div');
									mainBoxIcon.classList.add('main__box_icon');
									mainBoxItemColIcon.appendChild(mainBoxIcon);
									const mainBoxItemColIconImg = document.createElement('img');
									mainBoxItemColIconImg.src = 'img/msg.svg';
									mainBoxIcon.appendChild(mainBoxItemColIconImg);
									const mainBoxColContent = document.createElement('div');
									mainBoxColContent.classList.add('main__box_col_content');
									// block ID
									const mainBoxId = document.createElement('div');
									mainBoxId.classList.add('main__box_id');
									const idLink = document.createElement('span');
									idLink.classList.add('box__id_link');
									mainBoxId.appendChild(idLink);
									const idText = document.createElement('a');
									idText.classList.add('box__id_text');
									mainBoxId.appendChild(idText);
									const idJoke = document.createElement('span');
									idJoke.classList.add('box__idjoke');
									idText.appendChild(idJoke);
									const svgLink = document.createElement('img');
									svgLink.src = 'img/link.svg';
									mainBoxId.appendChild(svgLink);
									
									const mainBoxText = document.createElement('div');
									mainBoxText.classList.add('main__box_text');
									mainBoxColContent.append(mainBoxId, mainBoxText);
									mainBoxItem.append(mainBoxItemColIcon, mainBoxColContent);
									// block footer
									const mainBoxFooter = document.createElement('div');
									mainBoxFooter.classList.add('main__box_footer');
									const boxUpd = document.createElement('div');
									boxUpd.classList.add('main__box_upd');
									const boxUpdJoke = document.createElement('p');
									boxUpdJoke.classList.add('box__upd_joke');
									const boxCategorie = document.createElement('div');
									boxCategorie.classList.add('box__categorie');
									const boxCategorieText = document.createElement('p');
									boxCategorieText.classList.add('box__categorie_text');
									boxCategorie.appendChild(boxCategorieText);
									
									mainBoxFooter.append(boxUpd, boxCategorie);
									
									boxUpd.appendChild(boxUpdJoke);
									
									const timeJoke = document.createElement('p');
									timeJoke.innerHTML = `
									Last update: ${
										Math.ceil((Date.now() - new Date(data.updated_at.split(".")[0].replace(" ", "T"))) / 36e5)
									} hours ago`;
									boxUpdJoke.appendChild(timeJoke);
									
									jokeBox.append(mainBoxHeart, mainBoxItem, mainBoxFooter);
									
									console.log(data);
									idText.href = data.url;
									idText.target = '_blank';
									idText.innerHTML = data.id;
									idLink.innerHTML = 'ID: ';
									mainBoxText.innerHTML = data.value;
									boxCategorieText.innerHTML = data.categories;
								});
						});
					}
					if(categories[i].innerText === 'CELEBRITY') {
						buttonGetJoke.addEventListener('click', function () {
							fetch('https://api.chucknorris.io/jokes/random?category=celebrity')
								
								.then(response => response.json())
								.then(data => {
									const mainJokeBox = document.createElement('div');
									mainJokeBox.classList.add('main-joke_box');
									const jokeBox = document.createElement('div');
									jokeBox.classList.add('joke__box');
									mainJokeBox.appendChild(jokeBox);
									mainJoke.append(mainJokeBox);
									// block heart
									const mainBoxHeart = document.createElement('div');
									mainBoxHeart.classList.add('main__box_heart');
									const heartButton = document.createElement('button');
									heartButton.classList.add('heart_btn1');
									const heartButtonIcon = document.createElement('img');
									heartButtonIcon.src = 'img/heart1.svg';
									heartButton.appendChild(heartButtonIcon);
									mainBoxHeart.appendChild(heartButton);
									// block item
									const mainBoxItem = document.createElement('div');
									mainBoxItem.classList.add('main__box_item');
									const mainBoxItemCol = document.createElement('div');
									mainBoxItemCol.classList.add('main__box_col');
									const mainBoxItemColIcon = document.createElement('div');
									mainBoxItemColIcon.classList.add('main__box_col_icon');
									mainBoxItemCol.appendChild(mainBoxItemColIcon);
									const mainBoxIcon = document.createElement('div');
									mainBoxIcon.classList.add('main__box_icon');
									mainBoxItemColIcon.appendChild(mainBoxIcon);
									const mainBoxItemColIconImg = document.createElement('img');
									mainBoxItemColIconImg.src = 'img/msg.svg';
									mainBoxIcon.appendChild(mainBoxItemColIconImg);
									const mainBoxColContent = document.createElement('div');
									mainBoxColContent.classList.add('main__box_col_content');
									// block ID
									const mainBoxId = document.createElement('div');
									mainBoxId.classList.add('main__box_id');
									const idLink = document.createElement('span');
									idLink.classList.add('box__id_link');
									mainBoxId.appendChild(idLink);
									const idText = document.createElement('a');
									idText.classList.add('box__id_text');
									mainBoxId.appendChild(idText);
									const idJoke = document.createElement('span');
									idJoke.classList.add('box__idjoke');
									idText.appendChild(idJoke);
									const svgLink = document.createElement('img');
									svgLink.src = 'img/link.svg';
									mainBoxId.appendChild(svgLink);
									
									const mainBoxText = document.createElement('div');
									mainBoxText.classList.add('main__box_text');
									mainBoxColContent.append(mainBoxId, mainBoxText);
									mainBoxItem.append(mainBoxItemColIcon, mainBoxColContent);
									// block footer
									const mainBoxFooter = document.createElement('div');
									mainBoxFooter.classList.add('main__box_footer');
									const boxUpd = document.createElement('div');
									boxUpd.classList.add('main__box_upd');
									const boxUpdJoke = document.createElement('p');
									boxUpdJoke.classList.add('box__upd_joke');
									const boxCategorie = document.createElement('div');
									boxCategorie.classList.add('box__categorie');
									const boxCategorieText = document.createElement('p');
									boxCategorieText.classList.add('box__categorie_text');
									boxCategorie.appendChild(boxCategorieText);
									
									mainBoxFooter.append(boxUpd, boxCategorie);
									
									boxUpd.appendChild(boxUpdJoke);
									
									const timeJoke = document.createElement('p');
									timeJoke.innerHTML = `
									Last update: ${
										Math.ceil((Date.now() - new Date(data.updated_at.split(".")[0].replace(" ", "T"))) / 36e5)
									} hours ago`;
									boxUpdJoke.appendChild(timeJoke);
									
									jokeBox.append(mainBoxHeart, mainBoxItem, mainBoxFooter);
									
									console.log(data);
									idText.href = data.url;
									idText.target = '_blank';
									idText.innerHTML = data.id;
									idLink.innerHTML = 'ID: ';
									mainBoxText.innerHTML = data.value;
									boxCategorieText.innerHTML = data.categories;
								});
						});
					}
					if(categories[i].innerText === 'DEV') {
						buttonGetJoke.addEventListener('click', function () {
							fetch('https://api.chucknorris.io/jokes/random?category=dev')
								
								.then(response => response.json())
								.then(data => {
									const mainJokeBox = document.createElement('div');
									mainJokeBox.classList.add('main-joke_box');
									const jokeBox = document.createElement('div');
									jokeBox.classList.add('joke__box');
									mainJokeBox.appendChild(jokeBox);
									mainJoke.append(mainJokeBox);
									// block heart
									const mainBoxHeart = document.createElement('div');
									mainBoxHeart.classList.add('main__box_heart');
									const heartButton = document.createElement('button');
									heartButton.classList.add('heart_btn1');
									const heartButtonIcon = document.createElement('img');
									heartButtonIcon.src = 'img/heart1.svg';
									heartButton.appendChild(heartButtonIcon);
									mainBoxHeart.appendChild(heartButton);
									// block item
									const mainBoxItem = document.createElement('div');
									mainBoxItem.classList.add('main__box_item');
									const mainBoxItemCol = document.createElement('div');
									mainBoxItemCol.classList.add('main__box_col');
									const mainBoxItemColIcon = document.createElement('div');
									mainBoxItemColIcon.classList.add('main__box_col_icon');
									mainBoxItemCol.appendChild(mainBoxItemColIcon);
									const mainBoxIcon = document.createElement('div');
									mainBoxIcon.classList.add('main__box_icon');
									mainBoxItemColIcon.appendChild(mainBoxIcon);
									const mainBoxItemColIconImg = document.createElement('img');
									mainBoxItemColIconImg.src = 'img/msg.svg';
									mainBoxIcon.appendChild(mainBoxItemColIconImg);
									const mainBoxColContent = document.createElement('div');
									mainBoxColContent.classList.add('main__box_col_content');
									// block ID
									const mainBoxId = document.createElement('div');
									mainBoxId.classList.add('main__box_id');
									const idLink = document.createElement('span');
									idLink.classList.add('box__id_link');
									mainBoxId.appendChild(idLink);
									const idText = document.createElement('a');
									idText.classList.add('box__id_text');
									mainBoxId.appendChild(idText);
									const idJoke = document.createElement('span');
									idJoke.classList.add('box__idjoke');
									idText.appendChild(idJoke);
									const svgLink = document.createElement('img');
									svgLink.src = 'img/link.svg';
									mainBoxId.appendChild(svgLink);
									
									const mainBoxText = document.createElement('div');
									mainBoxText.classList.add('main__box_text');
									mainBoxColContent.append(mainBoxId, mainBoxText);
									mainBoxItem.append(mainBoxItemColIcon, mainBoxColContent);
									// block footer
									const mainBoxFooter = document.createElement('div');
									mainBoxFooter.classList.add('main__box_footer');
									const boxUpd = document.createElement('div');
									boxUpd.classList.add('main__box_upd');
									const boxUpdJoke = document.createElement('p');
									boxUpdJoke.classList.add('box__upd_joke');
									const boxCategorie = document.createElement('div');
									boxCategorie.classList.add('box__categorie');
									const boxCategorieText = document.createElement('p');
									boxCategorieText.classList.add('box__categorie_text');
									boxCategorie.appendChild(boxCategorieText);
									
									mainBoxFooter.append(boxUpd, boxCategorie);
									
									boxUpd.appendChild(boxUpdJoke);
									
									const timeJoke = document.createElement('p');
									timeJoke.innerHTML = `
									Last update: ${
										Math.ceil((Date.now() - new Date(data.updated_at.split(".")[0].replace(" ", "T"))) / 36e5)
									} hours ago`;
									boxUpdJoke.appendChild(timeJoke);
									
									jokeBox.append(mainBoxHeart, mainBoxItem, mainBoxFooter);
									
									console.log(data);
									idText.href = data.url;
									idText.target = '_blank';
									idText.innerHTML = data.id;
									idLink.innerHTML = 'ID: ';
									mainBoxText.innerHTML = data.value;
									boxCategorieText.innerHTML = data.categories;
								});
						});
					}
				})
			}
		}
		// if(item.id === 'search') {
		// 	fetch('https://api.chucknorris.io/jokes/search?query=')
		// }
	});
});


