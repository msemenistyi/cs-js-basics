$('div') //element selector

$('.class') //class selectors
$('span.class') //class selectors

$('#id') //id selectors
$('ul#id') //id selectors

$('ul > li') //child selector
$('ul span') //descendant selector
$('ul').find('span'); //the same

$("[data-main='5']"); // attr selector

$("[name*='value']"); // attribute Contains Selector 
$("[name~='value']"); // attribute Contains Word Selector 
$("[name$='value']"); // attribute Ends With Selector 
$("[name!='value']"); // attribute Not Equal Selector 
$("[name^='value']"); // attribute Starts With Selector 

document.querySelectorAll('ul'); // does the same as $()