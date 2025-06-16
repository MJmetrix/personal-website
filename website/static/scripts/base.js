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
    `System.out.println <br><span>("Hello, World!");</span>`,
    `print<span>("Hello, World!")</span>`,
    `&lt;h1&gt;<span>Hello, World!</span>&lt;/h1&gt;`
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

const numStars = 150; 
const maxX = window.innerWidth;
const maxY = 2000; 

function getRandomColor() {
  const colors = ['var(--white-star)', 'var(--blue-star)']; 
  return colors[Math.floor(Math.random() * colors.length)];
}

function getRandomStar() {
  const x = Math.floor(Math.random() * window.innerWidth);
  const y = Math.floor(Math.random() * 2000);
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