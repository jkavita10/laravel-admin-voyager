jQuery(document).ready(function () {

    var itemSelector = '.grid-item';

    var $container = jQuery('#container').isotope({
        itemSelector: itemSelector,
        masonry: {
            columnWidth: itemSelector,
            isFitWidth: true
        }
    });

    //Ascending order
    var responsiveIsotope = [
        [
            480, 4
        ],
        [
            720, 6
        ]
    ];

    var itemsPerPageDefault = 12;
    var itemsPerPage = defineItemsPerPage();
    var currentNumberPages = 1;
    var currentPage = 1;
    var currentFilter = '*';
    var filterAtribute = 'data-filter';
    var pageAtribute = 'data-page';
    var pagerClass = 'isotope-pager';

    function changeFilter(selector) {
        $container.isotope({filter: selector});
    }

    function goToPage(n) {
        currentPage = n;

        var selector = itemSelector;
        selector += (currentFilter !== '*')
                ? '[' + filterAtribute + '="' + currentFilter + '"]'
                : '';
        selector += '[' + pageAtribute + '="' + currentPage + '"]';

        changeFilter(selector);
    }

    function defineItemsPerPage() {
        var pages = itemsPerPageDefault;

        for (var i = 0; i < responsiveIsotope.length; i++) {
            if (jQuery(window).width() <= responsiveIsotope[i][0]) {
                pages = responsiveIsotope[i][1];
                break;
            }
        }

        return pages;
    }
    //
    function setPagination() {

        var SettingsPagesOnItems = function () {
            var selector = itemSelector;
            var itemsLength = $container
                    .children(itemSelector)
                    .length;

            var pages = Math.ceil(itemsLength / itemsPerPage);
            var item = 1;
            var page = 1;

            selector += (currentFilter != '*')
                    ? '[' + filterAtribute + '="' + currentFilter + '"]'
                    : '';

            $container
                    .children(selector)
                    .each(function () {
                        if (item > itemsPerPage) {
                            page++;
                            item = 1;
                        }
                        jQuery(this).attr(pageAtribute, page);
                        item++;
                    });

            currentNumberPages = page;

        }();

        var CreatePagers = function () {

            var $isotopePager = (jQuery('.' + pagerClass).length == 0)
                    ? jQuery('<div class="' + pagerClass + '"></div>')
                    : jQuery('.' + pagerClass);

            $isotopePager.html('');

            for (var i = 0; i < currentNumberPages; i++) {
                var $pager = jQuery('<a href="javascript:void(0);" class="pager" ' + pageAtribute + '="' + (
                        i + 1) + '"></a>');
                $pager.html(i + 1);

                $pager.click(function () {
                    var page = jQuery(this)
                            .eq(0)
                            .attr(pageAtribute);
                    goToPage(page);
                });

                $pager.appendTo($isotopePager);
            }

            $container.after($isotopePager);

            // Add/Remove active class pagination

            jQuery(function () {
                jQuery('.isotope-pager a:first-child').addClass('active');
            });
            jQuery('.isotope-pager a').click(function () {
                jQuery('.isotope-pager a').removeClass("active");
                jQuery(this).addClass("active");
            });

        }();

    }

    setPagination();
    goToPage(1);

    //Adicionando Event de Click para as categorias
    jQuery('.pagination a').click(function () {
        var filter = jQuery(this).attr(filterAtribute);
        currentFilter = filter;

        setPagination();
        goToPage(1);

    });

    //Evento Responsivo
    jQuery(window).resize(function () {
        itemsPerPage = defineItemsPerPage();
        setPagination();
        goToPage(1);
    });

    /* Google Map code start */

    //                    var cenLatlng = new google.maps.LatLng(23.0114992, 72.5225788);
    var cenLatlng = new google
            .maps
            .LatLng(23.014984, 72.5336151);
    var myOptions = {
        zoom: 16,
        center: cenLatlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    }

    var map = new google
            .maps
            .Map(document.getElementById("map_canvas"), myOptions);

    //                    var myLatlng = new google.maps.LatLng(23.0114992, 72.5225788);
    var myLatlng = new google
            .maps
            .LatLng(23.0097383, 72.5229717);
    var marker = new google
            .maps
            .Marker({position: myLatlng, map: map, title: "Aavid Technologies"});

    // Start of newly added code block
    //                    var contentString = "<table style='font-size:10px;'><tr><td style='width:250px !important; text-align:center; color:#000;'><br><img border='0' src='images/theme-logo.png'> <br> F/709, Titanium City Centre,100 ft ring road, Beside IOC petrol pump, Satellite, Ahmedabad - 380015<br>09033883160</td></tr></table>";
    var contentString = "<table style='font-size:10px;'><tr><td style='width:250px !important; text-align:center; color:#000;'><br><img border='0' src='{{asset("images / theme - logo.png")}}'> <br> F-1206, Prahladnagar Trade Center (PNTC), Times Of India Press Road, Behind Titanium City Center, Ahmedabad, Gujarat 380015<br>09033883160</td></tr></table>";

    var infowindow = new google
            .maps
            .InfoWindow({content: contentString, width: 400, height: 100});

    infowindow.open(map, marker);

    //                    jQuery('#offshore').backstretch(['img/bg/4.jpg', 'img/bg/2.jpg', 'img/bg/3.jpg'], {fade: 750, duration: 4000}).css('z-index', 'inherit');
    jQuery('#offshore')
            .backstretch(['{{asset("img/federal-features-bg.jpg")}}'], {
                fade: 750,
                duration: 4000
            })
            .css('z-index', 'inherit');

});

/************************************************************************************************/

function process(apply_id, category_name) {
    //                        jQuery("#career_form_"+apply_id).show();
    jQuery("#career_form").show();
    jQuery("#category_name").text(category_name);
    jQuery("input[name=id]").val(apply_id);
    jQuery('html,body').animate({
        scrollTop: jQuery(".form-focus")
                .offset()
                .top
    }, 'slow');
}
(function () {

    var youtube = document.querySelectorAll(".youtube");

    for (var i = 0; i < youtube.length; i++) {

        var source = "https://img.youtube.com/vi/" + youtube[i].dataset.embed + "/hqdefault.jpg";

        var image = new Image();
        image.src = source;
        image.addEventListener("load", function () {
            youtube[i].appendChild(image);
        }(i));

        youtube[i].addEventListener("click", function () {

            var iframe = document.createElement("iframe");

            iframe.setAttribute("frameborder", "0");
            iframe.setAttribute("allowfullscreen", "");
            iframe.setAttribute("src", "https://www.youtube.com/embed/" + this.dataset.embed + "?rel=0&showinfo=0&autoplay=1");

            this.innerHTML = "";
            this.appendChild(iframe);
        });
    }
    ;

})();

/***********************************************************************************************************************************************/

jQuery(function (jQuery) {
    jQuery("img.lazy").Lazy({
        // effect
        effect: "fadeIn",
        //                    effectTime: 500,
        //                    threshold: 0
    });
});

/*************************************************************************************************************************************************/

