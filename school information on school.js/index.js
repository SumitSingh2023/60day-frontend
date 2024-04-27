const school = {
    name: "XYZ School",
    establishYear: 1990,
    departments: {
        math: { teachers: 5, students: 150 },
        science: { teachers: 4, students: 120 },
        history: { teachers: 3, students: 100 },
        english: { teachers: 4, students: 130 },
    },
    courses: ["math", "science", "history", "english"],
    students: [
        {
            name: "Alice",
            className: "Grade 5",
            scores: { math: 95, science: 88, history: 85, english: 92 },
        },
        {
            name: "Bob",
            className: "Grade 4",
            scores: { math: 80, science: 78, history: 92, english: 85 },
        },
        {
            name: "Charlie",
            className: "Grade 5",
            scores: { math: 88, science: 90, history: 78, english: 88 },
        },
        {
            name: "Diana",
            className: "Grade 4",
            scores: { math: 92, science: 85, history: 88, english: 90 },
        },
    ],
};
//problem 10

function countCalculation(school) {
    let { departments: { math: { teachers: mathTeacherCount, students: mathStudentCount }, history: { teachers: historyTeacherCount, students: historyStudentCount } } } = school
    return {
        mathTeacherCount,
        historyTeacherCount,
        mathStudentCount,
        historyStudentCount

    }
}
let output = countCalculation(school)
//console.log(output)

// problem 11

function findTopStudent(school, courseName) {
    // const { courses } = school;
    // if (courses) {
    //   for (const { students } of Object.values(courses)) {
    //     if (students) {
    //       for (const student of students) {
    //         const { name, className, scores } = student;
    //         if (scores[courseName] > Math.max(...Object.values(scores))) {
    //           return { name, className, scores };
    //         }
    //       }
    //     }
    //   }
    // }
    // return "No top student found for the course.";
    let { courses, students } = school
    console.log(courses, students[0].name)
}

//console.log(findTopStudent(school, 'math'));


//problem 12

const newDepartment = {
    art: { teachers: 2, students: 50 }
};

const addNewDept = (school, newDepartment) => {
    return {
        ...school,
        departments: {
            ...school.departments,
            ...newDepartment
        },
    };
};

//console.log(addNewDept(school, newDepartment));


//problem 13







