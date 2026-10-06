# Greeting Builder

## Description

Greeting Builder is a small JavaScript exercise that creates personalized greetings based on a person's first name, last name, and time of day.

The project focuses on practicing JavaScript functions, parameters, return values, and calling one function from another.

## How It Works

The project contains three functions:

`formatName(firstName, lastName)` combines the first name and last name into one string.

`getGreeting(timeOfDay)` returns the appropriate greeting depending on the time of day:

* Morning → Good morning
* Afternoon → Good afternoon
* Evening → Good evening

`createGreeting(firstName, lastName, timeOfDay)` uses the two previous functions and combines their results into the final greeting.

## Example

```js
console.log(createGreeting('Ava', 'Stone', 'morning'));
```

Output:

```text
Good morning, Ava Stone
```

## Concepts Practiced

* JavaScript functions
* Function parameters
* `return`
* Template literals
* `if / else if / else`
* Calling functions inside other functions
* Combining returned values
* `console.log()` for testing

## Technologies

* JavaScript
* Node.js or Browser Console
https://roadmap.sh/projects/js-greeting-builder
https://roadmap.sh/projects/js-temperature-converter
