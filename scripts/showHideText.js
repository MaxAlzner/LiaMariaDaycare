$(document).ready(function()
{
	$('.hideText').css('display', 'none');
	$('.expander').css('display', 'inherit');
	$('.collapser').css('display', 'none');
	$('.hideTextWrapper .expander').click(function()
	{
		$('#maria .text .expander').css('display', 'none');
		$('#maria .text .collapser').css('display', 'inherit');
		$('#maria .text .hideText').css('display', 'inherit');
	});
	$('.hideTextWrapper .collapser').click(function()
	{
		$('#maria .text .expander').css('display', 'inherit');
		$('#maria .text .collapser').css('display', 'none');
		$('#maria .text .hideText').css('display', 'none');
	});
	/*$('#maria .text .expander').click(function()
	{
		$('#maria .text .expander').css('display', 'none');
		$('#maria .text .collapser').css('display', 'inherit');
		$('#maria .text .hideText').css('display', 'inherit');
	});
	$('#lilia .text .expander').click(function()
	{
		$('#lilia .text .expander').css('display', 'none');
		$('#lilia .text .collapser').css('display', 'inherit');
		$('#lilia .text .hideText').css('display', 'inherit');
	});
	$('#maria .text .collapser').click(function()
	{
		$('#maria .text .expander').css('display', 'inherit');
		$('#maria .text .collapser').css('display', 'none');
		$('#maria .text .hideText').css('display', 'none');
	});
	$('#lilia .text .collapser').click(function()
	{
		$('#lilia .text .expander').css('display', 'inherit');
		$('#lilia .text .collapser').css('display', 'none');
		$('#lilia .text .hideText').css('display', 'none');
	});*/
});