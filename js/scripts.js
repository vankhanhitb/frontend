(function($) {
    "use strict";

    /*
     * [ Scripts ] - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
     */
     function hidden_subscriter_popup(){
     	$("#modal-close").on('click', function(){
     		$("#subscriber-popup").addClass("hide-subscriber-popup");
            $("#sales-popup").addClass("hide-subscriber-popup");
     	})
     }

    $( document ).ready( function() {
        hidden_subscriter_popup();
    });

})(jQuery);
