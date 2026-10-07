function formatName(firstName, lastName) {
    return `${firstName} ${lastName}`
}

function getGreeting(timeOfDay) {
    if(timeOfDay == 'morning'){
        return 'good morning'
    }
    else if(timeOfDay == 'afternoon'){
        return 'good afternoon'
    }
    else{
        return 'good evening'
    }
}

function createGreeting(firstName, lastName, timeOfDay) {
    let Name = formatName(firstName, lastName);
    let greeting = getGreeting(timeOfDay)
    return `${Name} ${greeting}`
}

console.log(createGreeting('Ava', 'Stone', 'morning'));
console.log(createGreeting('Noah', 'Kim', 'evening'));
console.log(createGreeting('Mina', 'Patel', 'afternoon'));