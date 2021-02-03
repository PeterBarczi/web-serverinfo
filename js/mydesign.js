setTimeout(
function() 
{
$(document).delay(500).ready(function () {
$('tbody td:last-child').each(function () {
if ($(this).text() == 'Healthy') {
$(this).css({"color": "green"});
}
if ($(this).text() == 'Critical') {
$(this).css({"color": "red"});
}
});
});
}, 500);
