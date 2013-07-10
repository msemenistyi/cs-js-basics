var container = $('div');

container.remove(); // removes all the matched items 

container.detach(); // the same, but keeps jQuery-related data

container.empty(); // removes html structure inside container 

container.html(); // returns current html structure
container.html('<div></div>'); //changes container's html to passed one

container.text('new text'); // changes text of container to passed 