var container = $('<div />');
container.attr({
	id: 'test'
});

// $('body').append(container); 
// container.appendTo($('body')); 

// $('body').prepend(container); 
// container.prependTo($('body')); 

// container.insertAfter('div'); 
// container.insertBefore('div'); 

$('div').before(container);
$('div').after(container);