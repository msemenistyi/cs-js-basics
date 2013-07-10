var container = $('<div />');
container.attr({
	id: 'test'
});

$('body').append(container); // appends container to body. container is the last child
container.appendTo($('body')); // the same

$('body').prepend(container); // prepends container to body. container is the first child
container.prependTo($('body')); // the same

container.insertAfter('div'); // inserts div after first matching el 
container.insertBefore('div'); // inserts div before first matching el

$('div').before(container); // inserts container before each matchin el
$('div').after(container); // inserts container after each matchin el