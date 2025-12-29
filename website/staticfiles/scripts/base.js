const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          return;
        }
        entry.target.classList.remove('in-view');
      });
    });

    const allAnimatedElements = document.querySelectorAll('.animate');

    allAnimatedElements.forEach((element) => observer.observe(element));


document.addEventListener("DOMContentLoaded", () => {
  const heroTextBlock = document.getElementById("text-block");
  const heroText = document.getElementById("change-text");

  const messages = [
    `print<span>("Hello, World. I am")</span>`,
    'console.log<span>("Hello, World. I am")</span>',
    `&lt;h1&gt;<span>Hello, World. I am</span>&lt;/h1&gt;`
  ];

  let index = 0;

  setInterval(() => {
    heroTextBlock.classList.add("fade-out");

    setTimeout(() => {
      index = (index + 1) % messages.length;
      heroText.innerHTML = messages[index];

      heroTextBlock.classList.remove("fade-out");

      void heroTextBlock.offsetWidth;
      heroTextBlock.classList.add("fade-in");

      setTimeout(() => {
        heroTextBlock.classList.remove("fade-in");
      }, 500);
    }, 500);
  }, 3000);
});

const numStars = 500; 
const maxX = window.innerWidth * 2;
const maxY = window.innerHeight * 3;; 

function getRandomColor() {
  const colors = ['var(--white-star)', 'var(--blue-star)']; 
  return colors[Math.floor(Math.random() * colors.length)];
}

function getRandomStar() {
  const x = Math.floor(Math.random() * window.innerWidth * 2);
  const y = Math.floor(Math.random() * window.innerHeight * 3);
  const color = getRandomColor();
  return `${x}px ${y}px ${color}`;
}

const starShadows = Array.from({ length: numStars }, getRandomStar).join(', ');

const starsEl = document.getElementById('stars');
starsEl.style.boxShadow = starShadows;

const afterEl = document.createElement('style');
afterEl.innerHTML = `
  #stars::after {
    content: '';
    position: absolute;
    top: ${maxY}px;
    width: 1px;
    height: 1px;
    box-shadow: ${starShadows};
  }
`;
document.head.appendChild(afterEl);


// const cursorTag = document.querySelector('div.cursors')
// const ball = cursorTag.querySelector('div')
// let ballYlocation = 0;

// document.addEventListener("mouseleave", (e) => {
//   ball.style.visibility = 'hidden'
// })

// document.addEventListener("mouseenter", (e) => {
//   ball.style.visibility = 'visible'
// })

// document.addEventListener("mousemove", function(event) {
//   ball.style.left = event.pageX + 20 + "px"
//   ball.style.top = event.pageY - 20 + "px"
//   ballYlocation = event.clientY - 20
// })

// document.addEventListener("scroll" , () => {
//   ball.style.top = (ballYlocation + window.scrollY) + "px"
// })

function ImageIterator(imageName) {
  const img = document.getElementById(imageName);

  const images = JSON.parse(img.dataset.images);
  
  let currentIndex = 0;
  
  img.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    img.src = images[currentIndex];
  });
}

ImageIterator("click-image-1");
ImageIterator("click-image-2");
