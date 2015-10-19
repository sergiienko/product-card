;(function($) {

	$(function() {
		var $slider = $(".ba-slider");

		$slider.slick({
			dots: true
		});

		// Increase and decrease quantity.
		var $qtyField = $(".ba-product__qty-field"),
			$qtyUp = $(".ba-product__qty-up"),
			$qtyDown = $(".ba-product__qty-down");

		$qtyUp.on("click", function(e) {
			e.preventDefault();
			var oldVal = $qtyField.val();
			$qtyField.val(++oldVal);
		});

		$qtyDown.on("click", function(e) {
			e.preventDefault();
			var oldVal = $qtyField.val();
			$qtyField.val(--oldVal || 1);
		});

	});

})(jQuery);
