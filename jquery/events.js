$('div').click(function(ev){});
$('div').mouseover(function(ev){});

$('div').on('mouseover', function(ev){});

$(document).on('mouseover', 'div', function(ev){}); //works even for newly added els