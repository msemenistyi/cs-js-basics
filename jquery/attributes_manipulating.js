var container = $('ul');

container.attr('id'); // get attr 'id' for container
container.attr('id', 'superId'); // set attr 'id' for container
container.attr({  // set several attrs
	'id': 'hashId',
	'class': 'hashClass'
});

container.removeAttr('id'); // remove attr

container.addClass('some-class'); // add class to el even if it already exists
container.removeClass('some-class'); // remove class from el
container.toggleClass('some-class', true); // sets or unsets class to el

var input = $('input#text');

var val = input.val(); // gets the value of el