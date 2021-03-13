let input = prompt('Enter a city (to stop, enter "Stop"):')

let cities = []

while (input != 'Stop') {
    cities.push(input)
    input = prompt('Enter a city (to stop, enter "Stop"):')
}

let x = 0

while (x != cities.length) {
    console.log(cities[x].toLowerCase())
    x++
}