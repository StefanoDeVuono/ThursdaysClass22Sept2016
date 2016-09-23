var bestColour = 'black';

var colourObject = {
  colour: 'green'
}

var person = {
  shirtColour: function(){
    return colourObject.colour;
  },
  glasses: true,
  name: 'Wendy',
  gender: 'male',
  hat: 'floppy'
};

bestColour = 'yellow';
colourObject.colour = 'blue';

// declaring an object
var obj = {};
var object = new Object();

console.log('sanity check: awesome stuff about a person!');

for (var key in person) {
  if (person.hasOwnProperty(key)) {
    // magick!
    if (typeof)
    console.log(key, person[key]);
  }
}

// constructor
var Person = function(data){
  this.shirtColour = data.shirtColour
}

var newPerson = new Person({shirtColour: 'polka dot'});

console.log(newPerson.shirtColour);

// special stuff
var advancedExample = {};
Object.defineProperty(advancedExample, 'hiddenShirt', {
  enumerable: false,
   writable: false,
   configurable: false,
   value: 'black, but with stripes'
});

Object.defineProperty(advancedExample, 'shirtColour', {
  enumerable: true,
  writable: false,
  configurable: true,
  value: 'solid black'
});

advancedExample.shirtColour = 'blue'; // won't work, not writable

Object.defineProperty(advancedExample, 'shirtColour', {value: 'mars black'});

advancedExample.hiddenShirt; // gets us 'black, but with stripes'

// WILL THROW ERROR!
Object.defineProperty(advancedExample, 'hiddenShirt', {value: 'blue black'});
