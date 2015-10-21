;(function($) {

	var pad = function(num) {
		return num / 10 < 1 ? "0" + num : num;
	};

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
			$qtyField.val(pad(++oldVal));
		});

		$qtyDown.on("click", function(e) {
			e.preventDefault();
			var oldVal = $qtyField.val();
			$qtyField.val(pad(--oldVal || 1));
		});

	});

})(jQuery);
