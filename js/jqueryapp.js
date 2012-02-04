$(document).ready(function () {
	
	//Algorithm
	//on SUBMIT, VALUE of color, inputed to PROPERTIES
	
	var $property = $('#property')
	, $color = $('#color')
	, $circle = $('#circle')
	;
	
	$('form').on('submit', function (ev) {
		
		ev.preventDefault();
	
		var color = $color.val();
				
		if (color) {
			$circle.css($property.val(), color);
		}
		$('#hshow').click(function (ev) {
			ev.preventDefault();
    		$circle.toggle("slow");
  		});
	});
	
});