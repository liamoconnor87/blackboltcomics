$(document).ready(function() {

    // Navigation Animations. 
    $(".srch-btn").click(function(){

                $(this).toggleClass("srch-btn-click");

                $(".search-tool").toggle();

                $(".account-menu").hide();
                $(".all-prod-menu").hide();
                $(".comic-menu").hide();
                $(".access-menu").hide();
                $(".spec-off-menu").hide();

                if ($(".acc-btn").hasClass("acc-btn-click")){
                    $(".acc-btn").removeClass("acc-btn-click");
                }

            })

            $(".acc-btn").click(function(){

                $(this).toggleClass("acc-btn-click");

                $(".account-menu").toggle();

                $(".search-tool").hide();
                $(".all-prod-menu").hide();
                $(".comic-menu").hide();
                $(".access-menu").hide();
                $(".spec-off-menu").hide();

                if ($(".srch-btn").hasClass("srch-btn-click")){
                    $(".srch-btn").removeClass("srch-btn-click");
                }

            })

            $(".all-prod-click").click(function(){
                
                if ($(".acc-btn").hasClass("acc-btn-click")){
                    $(".acc-btn").removeClass("acc-btn-click");
                }

                if ($(".srch-btn").hasClass("srch-btn-click")){
                    $(".srch-btn").removeClass("srch-btn-click");
                }

                $(".all-prod-menu").toggle();

                $(".comic-menu").hide();
                $(".access-menu").hide();
                $(".spec-off-menu").hide();
                $(".search-tool").hide();
                $(".account-menu").hide();

            })

            $(".comic-book-click").click(function(){

                if ($(".acc-btn").hasClass("acc-btn-click")){
                    $(".acc-btn").removeClass("acc-btn-click");
                }

                if ($(".srch-btn").hasClass("srch-btn-click")){
                    $(".srch-btn").removeClass("srch-btn-click");
                }

                $(".comic-menu").toggle();

                $(".all-prod-menu").hide();
                $(".access-menu").hide();
                $(".spec-off-menu").hide();
                $(".search-tool").hide();
                $(".account-menu").hide();

            })

            $(".access-click").click(function(){

                if ($(".acc-btn").hasClass("acc-btn-click")){
                    $(".acc-btn").removeClass("acc-btn-click");
                }

                if ($(".srch-btn").hasClass("srch-btn-click")){
                    $(".srch-btn").removeClass("srch-btn-click");
                }

                $(".access-menu").toggle();

                $(".all-prod-menu").hide();
                $(".comic-menu").hide();
                $(".spec-off-menu").hide();
                $(".search-tool").hide();
                $(".account-menu").hide();

            })

            $(".offer-click").click(function(){

                if ($(".acc-btn").hasClass("acc-btn-click")){
                    $(".acc-btn").toggleClass("acc-btn-click");
                }

                if ($(".srch-btn").hasClass("srch-btn-click")){
                    $(".srch-btn").toggleClass("srch-btn-click");
                }

                $(".spec-off-menu").toggle();

                $(".all-prod-menu").hide();
                $(".access-menu").hide();
                $(".comic-menu").hide();
                $(".search-tool").hide();
                $(".account-menu").hide();

            })

});