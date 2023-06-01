// const x = document.createElement('div');
// x.id='hed';
// const h1 = document.createElement('h1');
// x.appendChild(h1);
// h1.textContent='Reviews'
// document.body.appendChild(h1);

const reviewsConatainer = document.createElement('div');
reviewsConatainer.id = 'reviews-container';
document.body.append(reviewsConatainer)


const reviews = [
  { image: 'https://www.w3schools.com/w3css/img_avatar3.png',
      alt: 'a picture of Charly Schmidt', 
      text: ' Incidunt optio suscipit, exercitationem est debitis cum nobis placeat.',
      name: 'Charly Schmidt'
  },
  { image: 'https://www.w3schools.com/w3css/img_avatar4.png',
      alt: 'a picture of Kimberley Nicholls', 
      text: ' Illum veritatis quasi, similique dolore odit officia, aliquam eum ut labore quisquam.',
      name: 'Kimberley Nicholls'
  },
  { image: 'https://www.w3schools.com/w3css/img_avatar3.png',
      alt: 'a picture of Elwood Hook', 
      text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
      name: 'Elwood Hook'
  },
  { image: 'https://www.w3schools.com/w3css/img_avatar5.png',
      alt: 'a picture of Fleur Hurst', 
      text: ' dicta molestiae facilis obcaecati minus! Dolores expedita.',
      name: 'Fleur Hurst'
  },
  { image: 'https://www.w3schools.com/w3css/img_avatar3.png',
    alt: 'a picture of Elwood Hook', 
    text: 'consequatur voluptates nobis maxime nihil eos neque ea corporis vero ullam.',
    name: 'Geoffrey Carter'
  }
]

function populatReviews(){
    reviews.forEach(review => {
        const card= document.createElement('div')
        card.classList.add('card');

        card.addEventListener('mouseover', showCard)
        card.addEventListener('mouseleave', blurCard)

        const imgContainer = document.createElement('div');
        imgContainer.classList.add('img-container');

        const img= document.createElement('img');
        img.setAttribute('src', review.image);
        img.setAttribute('alt', review.alt);
        imgContainer.append(img);

        const revText = document.createElement('p');
        revText.innerText = review.text;

        const nameContainer = document.createElement('div');
        nameContainer.classList.add('name-container');
        nameContainer.textContent = review.name;

        card.append(imgContainer, revText, nameContainer);
        reviewsConatainer.append(card);

    });
}
populatReviews();

function showCard(){
    this.classList.add('active')
}

function blurCard(){
    this.classList.remove('active')
}