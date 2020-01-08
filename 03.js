let str = 'Вчbvnера 789 был home work наiuyстоtящий + празrorднgfdик'

function checkThisString(string) {
    for (let elem of string) {
        if ((elem.charCodeAt() > 1103) || (elem.charCodeAt() < 1040)) {
            string = string.replace(elem, '')
        } 
    }
    return string
}

checkThisString(str)