let age = 30;
age = 32;
console.log('marcus age = ' + age);

const courses = ['CSCI', 'PHILO', 'THEO'];
console.log(courses);

const marcus = {
    firstName: 'Bob',
    lastName: 'Alice',
    age: 27,
    hobbies: ['bitcoin', 'blockchain']

};

console.log(marcus.hobbies[1]);
console.log(marcus.firstName, marcus.lastName);

marcus.email = "dayum@gmail.com";

console.log(marcus.email);

const grades = [
    {
        id: 1,
        subject: "CSCI",
        letterMark: 'A'
    },
    {
        id: 2,
        subject: "PHILO",
        letterMark: 'A'
    },
    {
        id: 3,
        subject: "THEO",
        letterMark: 'B'
    }
]

for(let grade of grades) {
    console.log(grade.letterMark);
}

const subjectsWithA = grades.filter(function(grade) {
    return grade.letterMark == 'A';
}).map(function(grade) {
    return grade.subject;
});

console.log(subjectsWithA);

const containerTest = document.querySelector('.container-test');

containerTest.lastElementChild.remove();
containerTest.firstElementChild.textContent = 'hallo';
containerTest.children[1].textContent = 'omg';
containerTest.children[2].innerHTML = '<h3>me beeg<h3>'

const butones = document.querySelector('.butones-container');

const button = butones.firstElementChild
button.addEventListener('click', (e) => {
    e.preventDefault();
    if(button.style.background != 'red') {
        button.style.background = 'red';
        button.textContent = 'Ich bin red';
    }
    else {
        button.style.background = 'var(--yellow-main-button)';
        button.textContent = 'Ich bin yellow';
    }
})
