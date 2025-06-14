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