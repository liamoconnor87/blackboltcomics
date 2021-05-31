$(document).ready(function() {

    // Navigation Animations. 
    $(".msg-cont-bg-msg").hide();

    $(".srch-btn").click(function() {

        $(this).toggleClass("srch-btn-click");

        $(".search-tool").toggle();

        $(".account-menu").hide();
        $(".all-prod-menu").hide();
        $(".comic-menu").hide();
        $(".access-menu").hide();
        $(".spec-off-menu").hide();

        if ($(".acc-btn").hasClass("acc-btn-click")) {
            $(".acc-btn").removeClass("acc-btn-click");
        }

    });

    $(".acc-btn").click(function() {

        $(this).toggleClass("acc-btn-click");

        $(".account-menu").toggle();

        $(".search-tool").hide();
        $(".all-prod-menu").hide();
        $(".comic-menu").hide();
        $(".access-menu").hide();
        $(".spec-off-menu").hide();

        if ($(".srch-btn").hasClass("srch-btn-click")) {
            $(".srch-btn").removeClass("srch-btn-click");
        }

    });

    $(".all-prod-click").click(function() {

        if ($(".acc-btn").hasClass("acc-btn-click")) {
            $(".acc-btn").removeClass("acc-btn-click");
        }

        if ($(".srch-btn").hasClass("srch-btn-click")) {
            $(".srch-btn").removeClass("srch-btn-click");
        }

        $(".all-prod-menu").toggle();

        $(".comic-menu").hide();
        $(".access-menu").hide();
        $(".spec-off-menu").hide();
        $(".search-tool").hide();
        $(".account-menu").hide();

    });

    $(".comic-book-click").click(function() {

        if ($(".acc-btn").hasClass("acc-btn-click")) {
            $(".acc-btn").removeClass("acc-btn-click");
        }

        if ($(".srch-btn").hasClass("srch-btn-click")) {
            $(".srch-btn").removeClass("srch-btn-click");
        }

        $(".comic-menu").toggle();

        $(".all-prod-menu").hide();
        $(".access-menu").hide();
        $(".spec-off-menu").hide();
        $(".search-tool").hide();
        $(".account-menu").hide();

    });

    $(".access-click").click(function() {

        if ($(".acc-btn").hasClass("acc-btn-click")) {
            $(".acc-btn").removeClass("acc-btn-click");
        }

        if ($(".srch-btn").hasClass("srch-btn-click")) {
            $(".srch-btn").removeClass("srch-btn-click");
        }

        $(".access-menu").toggle();

        $(".all-prod-menu").hide();
        $(".comic-menu").hide();
        $(".spec-off-menu").hide();
        $(".search-tool").hide();
        $(".account-menu").hide();

    });

    $(".offer-click").click(function() {

        if ($(".acc-btn").hasClass("acc-btn-click")) {
            $(".acc-btn").toggleClass("acc-btn-click");
        }

        if ($(".srch-btn").hasClass("srch-btn-click")) {
            $(".srch-btn").toggleClass("srch-btn-click");
        }

        $(".spec-off-menu").toggle();

        $(".all-prod-menu").hide();
        $(".access-menu").hide();
        $(".comic-menu").hide();
        $(".search-tool").hide();
        $(".account-menu").hide();

    });

    // Sort Selector.
    $('#sort-selector').change(function() {
        var selector = $(this);
        var currentUrl = new URL(window.location);

        var selectedVal = selector.val();
        if (selectedVal != "reset") {
            var sort = selectedVal.split("_")[0];
            var direction = selectedVal.split("_")[1];

            currentUrl.searchParams.set("sort", sort);
            currentUrl.searchParams.set("direction", direction);

            window.location.replace(currentUrl);
        } else {
            currentUrl.searchParams.delete("sort");
            currentUrl.searchParams.delete("direction");

            window.location.replace(currentUrl);
        }
    });

    // Product Quantity Tool.
    // Ensure proper Enabling/Disabling of all inputs on page load.
    var allQtyInputs = $('.qty_input');
    for(var i = 0; i < allQtyInputs.length; i++){
        var itemId = $(allQtyInputs[i]).data('item_id');
        handleEnableDisable(itemId);
    }

    // Check Enable/Disable every time its changed,
    $('.qty_input').change(function() {
        var itemId = $(this).data('item_id');
        handleEnableDisable(itemId);
    });

    // Increment Quantity.
    $('.increment-qty').click(function(e) {
       e.preventDefault();
       var closestInput = $(this).closest('.qunt-tool-cont').find('.qty_input')[0];
       var currentValue = parseInt($(closestInput).val());
       $(closestInput).val(currentValue + 1);
       var itemId = $(this).data('item_id');
       handleEnableDisable(itemId);
    });

    // Decrement Quantity.
    $('.decrement-qty').click(function(e) {
       e.preventDefault();
       var closestInput = $(this).closest('.qunt-tool-cont').find('.qty_input')[0];
       var currentValue = parseInt($(closestInput).val());
       $(closestInput).val(currentValue - 1);
       var itemId = $(this).data('item_id');
       handleEnableDisable(itemId);
    });

    // Disables +/- Buttons - 1-99 range.
    function handleEnableDisable(itemId) {
        var currentValue = parseInt($(`#id_qty_${itemId}`).val());
        var minusDisabled = currentValue < 2;
        var plusDisabled = currentValue > 98;
        $(`#decrement-qty_${itemId}`).prop('disabled', minusDisabled);
        $(`#increment-qty_${itemId}`).prop('disabled', plusDisabled);
    }

    // Update Quantity Button.
    $('.update-link').click(function(e) {
        var form = $(this).prev('.update-form');
        form.submit();
    });

    // Messages & Shopping Bag.
    $('.shop-btn').click(function(){
        $('.message').toggle();
        $('.msg-title-msg').remove();
        $('.message-success').remove();
        $('.message-error').remove();
    });

    $('.exit-x').click(function() {
        $('.message').hide();
    });

});