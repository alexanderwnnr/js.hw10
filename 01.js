let group = [
    {
        name: "Name1",
        lastName: "lastName",
        age: 18,
        notebook: false

    },
    {
        name: "Name2",
        lastName: "lastName2",
        age: 19,
        notebook: true

    },
    {
        name: "Name3",
        lastName: "lastName3",
        age: 20,
        notebook: false

    }
]

function getStudList(arrayOfStud) {
    group.forEach((elem) => {
        let arr = Object.entries(elem)
        let newArr = []
        for (let i of arr) {
            newArr = newArr.concat(i.join(': '))
        }
        console.log(newArr.join('; '))
    })    
}

function addStudent(name, lastName, age, notebook) {
    group.push({name: name, lastName: lastName, age: age, notebook: notebook})
}