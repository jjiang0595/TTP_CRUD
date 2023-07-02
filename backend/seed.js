const {Campus, Student} = require('./db/models');
const db = require('./db/db');

const seedStudent = [
    {
        firstName: 'John',
        lastName: 'Doe',
        email: 'johndoe123@gmail.com',
        imageUrl: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
        gpa: 3.9,
        campusId: 1
    },
    {
        firstName: 'Mary',
        lastName: 'Lee',
        email: 'maryjane123@gmail.com',
        imageUrl: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
        gpa: 3.5
    },
    {
        firstName: 'Jane',
        lastName: 'Doe',
        email: 'janedoe123@gmail.com',
        imageUrl: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
        gpa: 3.8
    },
    {
        firstName: 'Jerry',
        lastName: 'Jiang',
        email: 'jerryj49@gmail.com',
        imageUrl: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
        gpa: 4
    }
]

const seedCampus = [
    {
        name: 'Brooklyn College',
        imageUrl: 'https://www.brooklyn.edu/wp-content/uploads/NEWS-Default-1-Featured.jpg',
        address: '2900 Bedford Ave, Brooklyn, NY 11210',
        description: 'Brooklyn College provides a transformative, distinctive, and affordable education to students from all backgrounds.'
    },
    {
        name: 'Hunter College',
        imageUrl: 'https://www.hunter.cuny.edu/research/repository/images/hunter_campus1.jpg/image_preview',
        address: '695 Park Ave, New York, NY 10065',
        description: 'Hunter College!'
    },
    {
        name: 'Baruch College',
        imageUrl: 'https://www.brooklyn.edu/wp-content/uploads/NEWS-Default-1-Featured.jpg',
        address: '55 Lexington Ave, New York, NY 10010',
        description: 'Baruch College!'
    }
];

const seed = async () => {
    await Student.bulkCreate(seedStudent);
    await Campus.bulkCreate(seedCampus);
};

seed().then(() => process.exit());