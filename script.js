let arr_students = [
    {
        id: 1,
        name: "Timur",
        age: 16,
        children: ["Amin","Davlat"],   
        gender: "male"
    },
    {
        id: 2,
        name: "Amin",
        age: 15,
        children: ["Aziz","Zafar","Asad"],
        gender: "female"
    },
    {
        id: 3,
        name: "Naim",
        age: 21,
        children: ["Timur","Orif"],
        gender: "male"
    },
    {
        id: 4,
        name: "Laziz",
        age: 17,
        children: ["Munis"],   
        gender: "female"
    },
    {
        id: 5,
        name: "Jamshed",
        age: 28,
        children: ["Munis"],   
        gender: undefined
    }
]

// Найти средний возраст студентов

let age = arr_students.reduce((r,i) => r + i.age, 0) / (arr_students.length || 1);

console.log(age);

// Найти самого старшего студента и сохранить в переменную

let old = arr_students.sort((a, b) => b.age - a.age ).filter(el => el.age === arr_students[0].age);
console.log(old);

// Найти самого младшего студента и сохранить в переменную



// посчитать сколько малчиков и сколько девочек и бинарных

let boys = 0
let girls = 0
let binary = 0