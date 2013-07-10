$('li:eq(3)'); // select el with index 3 within matched array

$('li:even'); // returns els with even indexes
$('li:odd'); // returns els with even indexes

$('li:first'); // returns first el which satisfies the query
$('li:last'); // returns last el which satisfies the query


$('li:first-child'); // returns els which are first within container
$('li:last-child'); // returns els which are last within container

$('li:first-of-type'); // returns first els within container which satisfies the query
$('li:last-of-type'); // returns last els within container which satisfies the query

$('li:gt(3)'); // returns els which indexes are greater than given index 
$('li:lt(3)'); // returns els which indexes are lower than given index