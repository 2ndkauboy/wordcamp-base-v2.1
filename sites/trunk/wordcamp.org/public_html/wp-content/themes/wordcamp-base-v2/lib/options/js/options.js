(function(c){function b(){c('#visibility-row input[type="checkbox"]').change(function(){var d=c(this),e=d.siblings(".grid-row-id").val();c("#"+e).toggle(d.is(":checked"))});c(".grid-row-layout .edit").click(function(){var d=c(this).siblings(".picker");if(!d.is(":visible")){d.slideDown("fast")}return false});c(".grid-row-layout .cancel").click(function(){var d=c(this).parents(".picker");d.slideUp("fast");return false});c(".grid-row-selector").click(function(){var d=c(this);picker=d.parents(".picker"),layout=d.parents(".grid-row-layout"),selected=layout.children(".grid-row"),signature=layout.children(".signature"),active=picker.find(".active");selected.html(d.children(".grid-row").html());signature.val(d.children(".grid-row-signature").val());active.removeClass("active");d.addClass("active");picker.slideUp("fast");return false})}function a(){c("#featured-button-visible").change(function(){var d=c(this);d.parents(".featured-button").toggleClass("visible",d.is(":checked"))})}c(document).ready(function(){b();a()})})(jQuery);