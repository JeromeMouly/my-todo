$(document).ready(function() {
	$('form').on("submit", function(event){
		event.preventDefault();
		var toAdd = $("#zone").val();

		var listeDefaut = '<div class="list"><input type="checkbox" class="selected">'+ toAdd+ '</div>';
			if (toAdd !==''){
		$('.checkbox').append(listeDefaut);}
		toAdd = $('#zone').val('');
		compte()
	});

	$('.checkbox').on('click', '.selected', function() {
		$(this).parent().toggleClass('barretext');
		compte()
	});

	$("#all").click(function(){
    	$('.list').show();
    	compte()
	});

	$("#active").click(function(){
	    $('.list').show();
	    $('.barretext').hide();
	    compte()
	});

	$("#completed").click(function(){
	    $('.list').hide();
	    $('.barretext').show();
	    compte()
	});

	$("#allcompleted").click(function(){
	    $('.barretext').remove();
	    $('.list').show();
	    compte()
	});
});

function compte () {
	var compte = $('.checkbox .list:not(.barretext)').length;
	if (compte <= 1) {
		$('h2').html("Il me reste " + compte + " " + "tâche.");
	}
	else {
		$('h2').html( "Il me reste " + compte + " " + "tâches.");
	}
};
