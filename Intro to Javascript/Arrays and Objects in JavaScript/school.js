

const students = [
    { id: 1, name: 'John', age: 16, image: 'john.jpg', gender: 'male', description: 'A bright student with a passion for science.', hobbies: ['Reading', 'Coding'] },
    { id: 2, name: 'Philip', age: 20, image: 'philip.jpg', gender: 'male', description: 'A bright student with a passion for maths.', hobbies: ['Chess', 'Puzzle'] },
    { id: 3, name: 'Sam', age: 18, image: 'sam.jpg',  gender: 'male', description: 'A bright student with a passion for chemistry.', hobbies: ['Music'] },
    { id: 4, name: 'James', age: 19, image: 'james.jpg',  gender: 'male', description: 'A bright student with a passion for biology.', hobbies: ['Reading', 'Dancing'] },
    { id: 5, name: 'Joy', age: 21, image: 'joy.jpg',  gender: 'female', description: 'A bright student with a passion for home economics.', hobbies: ['Cooking'] },
    { id: 6, name: 'Pam', age: 25, image: 'pam.jpg',  gender: 'male', description: 'A bright student with a passion for economics.', hobbies: ['Singing', 'Baseball'] },
    { id: 7, name: 'Panny', age: 12, image: 'panny.jpg', gender: 'female',description: 'A bright student with a passion for accounting.', hobbies: ['Music', 'Coding'] },
    { id: 8, name: 'Maff', age: 14, image: 'maff.jpg',  gender: 'male', description: 'A bright student with a passion for physics.', hobbies: ['Puzzle', 'Coding'] },
    { id: 9, name: 'Collins', age: 10, image: 'collins.jpg',  gender: 'male', description: 'A bright student with a passion for Art.', hobbies: ['Basketball', 'Coding'] },
    { id: 10, name: 'Boyo', age: 18, image: 'boyo.jpg',  gender: 'male', description: 'A bright student with a passion for Engineering.', hobbies: ['Reading', 'Tennis'] },
]

const studentList = document.getElementById('studentList');
const genderFilter = document.getElementById('genderFilter');
const searchInput = document.getElementById('searchInput');

//Function to display students

function displayStudents(students) {
    studentList.innerHTML = '';
    students.forEach(student => {
        const studentCard = document.createElement('div');
        studentCard.className = 'student'
        studentCard.innerHTML = `
        <img src= "${student.image}" alt="${student.name}">
        <h3> ${student.name} </h3>
        <p> Age: ${student.age} </p>
        <p> Gender: ${student.gender}</p>
        <p> Description: ${student.description}</p>
        <p> Hobbies: ${student.hobbies.join(',')}</p>

        `;
        studentList.appendChild(studentCard)

    });
}

//Create Function to filter products based on search input
function filterStudents() {
    const selectedGender = genderFilter.value;
    const searchTerm = searchInput.value.toLowerCase();

    const filteredStudents = students.filter(student => (
        selectedGender === 'all' || student.gender === selectedGender) && student.name.toLowerCase().includes(searchTerm)
    );
    displayStudents(filteredStudents);
}

//event listeners 
searchInput.addEventListener('input', filterStudents);
genderFilter.addEventListener('change', filterStudents)

//initially display all student
displayStudents(students);
