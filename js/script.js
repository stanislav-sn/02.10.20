$('body').on('click', '[data-editable]', function(event) {
	event.preventDefault();
	const type = $(this).attr('data-editable');
	console.log(type);
const $element = $(this);

	$('<input>')
		.attr('type', type)
		.insertAfter($element)
		.val( $element.text() )
		// .focus()
		.select()
		.on('keyup', function(event) {
			switch (event.which) {
				case 13:
					$element
						.insertAfter( this )
						.text( $(this) .val() );
						$(this) .remove();
					break;
				case 27: 
					$element.insertAfter( this );
					$(this).remove();
				break;

			}
		})
		$element.remove();
});