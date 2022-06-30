//Create a stopwatch object that has four properties and three methods

let stopwatch = {}

stopwatch.color = 'black'
stopwatch.shape = 'round'
stopwatch.brand = 'Nike'
stopwatch.smell = 'New'

stopwatch.start = function(){
    console.log('Runnnnn')
}

stopwatch.stop = function(){
    console.log('stop running');
}

stopwatch.morph = function(){
    console.log('its morphing');
}