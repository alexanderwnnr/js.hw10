const names = ['name1', 'name2', 'name3']
const lastnames = ['lastname1', 'lastname2', 'lastname3']
const arr = []

names.forEach((name, nameIndex) => {
    surnames.forEach((lastname, lastnameIndex) => {
       if(nameIndex === lastnameIndex) {
            arr.push(name.concat(' ', lastname))
       }
    })
})