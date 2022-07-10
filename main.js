(function ($) {
    "use strict";
    $('#top_section').height($(window).height());
//    $.Isotope.prototype._getMasonryGutterColumns = function() {
//        var gutter = this.options.masonry && this.options.masonry.gutterWidth || 0;
//        var containerWidth = this.element.width();
//        this.masonry.columnWidth = this.options.masonry && this.options.masonry.columnWidth || this.$filteredAtoms.outerWidth(true) || containerWidth;
//        this.masonry.columnWidth += gutter;
//        this.masonry.cols = Math.floor((containerWidth + gutter) / this.masonry.columnWidth);
//        this.masonry.cols = Math.max(this.masonry.cols, 1);
//    };
//    $.Isotope.prototype._masonryReset = function() {
//        this.masonry = {};
//        this._getMasonryGutterColumns();
//        var i = this.masonry.cols;
//        this.masonry.colYs = [];
//        while (i--) {
//            this.masonry.colYs.push(0);
//        }
//    };
//    $.Isotope.prototype._masonryResizeChanged = function() {
//        var prevSegments = this.masonry.cols;
//        this._getMasonryGutterColumns();
//        return (this.masonry.cols !== prevSegments);
//    };
//    Number.prototype.roundTo = function(num) {
//        var resto = this % num;
//        if (resto <= (num / 2)) {
//            return this - resto;
//        } else {
//            return this + num - resto;
//        }
//    }
//    $.Isotope.prototype._fitRowsLayout = function($elems) {
//        var instance = this,
//            containerWidth = this.element.width(),
//            props = this.fitRows;
//        var gutter = this.options.fitRows && this.options.fitRows.gutterWidth || 0;
//        var columnWidth = this.options.fitRows && this.options.fitRows.columnWidth || this.$filteredAtoms.outerWidth(true) || containerWidth;
//        $elems.each(function() {
//            var $this = $(this),
//                atomW = $this.outerWidth(true),
//                atomH = $this.outerHeight(true);
//            if (props.x !== 0 && props.x + atomW + gutter <= containerWidth) {
//                props.x = props.x.roundTo(columnWidth + gutter);
//            }
//            if (props.x !== 0 && atomW + props.x > containerWidth) {
//                props.x = 0;
//                props.y = props.height;
//            }
//            instance._pushPosition($this, props.x, props.y);
//            props.height = Math.max(props.y + atomH, props.height);
//            props.x += atomW;
//        });
//    };

    function setFixedNavigation() {
        if ($(document).width() > 768) {
            if ($(document).scrollTop() > $('.top-navigation').position().top) {
                $(".top-navigation-inner").css({
                    position: 'fixed',
                    width: '100%'
                });
                $(".top-navigation").css({
                    position: 'static'
                });
            } else if ($(document).scrollTop() < $('.top-navigation').position().top) {
                $(".top-navigation-inner").css({
                    position: 'static',
                    width: 'auto'
                });
                $(".top-navigation").css({
                    position: 'relative'
                });
            }
        } else {
            $(".top-navigation-inner").css({
                position: 'static',
                width: 'auto'
            });
            $(".top-navigation").css({
                position: 'relative'
            });
        }
    }
    $('.colorbg').each(function () {
        if ($(this).data('bgcolor')) {
            $(this).css('background-color', $(this).data('bgcolor'));
        }
    });
    $('.vspace').each(function () {
        if ($(this).data('vspace'))
            $(this).css('height', $(this).data('vspace'));
    });
    $('article.post table').addClass('table');
    $(window).load(function () {
        $('.rainy-background').each(function () {
            var $this = $(this);
            var image = $this.get(0);
            image.onload = function () {
                var engine = new RainyDay({
                    image: image,
                    parentElement: $this.parent().get(0),
                    blur: 20,
                    opacity: 1,
                    fps: 24
                });
                engine.gravity = engine.GRAVITY_NON_LINEAR;
                engine.trail = engine.TRAIL_SMUDGE;
                engine.rain([
                    [6, 6, 0.1],
                    [2, 2, 0.1]
                ], 50);
            };
            image.crossOrigin = 'anonymous';
            image.src = $this.data('src');
        });
        $(window).resize(function () {
            $('.rainy-background').each(function () {
                $(this).parent().find('canvas').css({
                    width: $(this).width(),
                    height: $(this).height()
                });
            });
        });
        $('.parallax-background, .normal-background').each(function () {
            if ($(this).data('background')) {
                $(this).css('background-image', 'url(' + $(this).data('background') + ')');
                if ($(this).hasClass('parallax-background')) {
                    var parallaxspeed = 0.4
                    if ($(this).data('parallaxspeed'))
                        parallaxspeed = $(this).data('parallaxspeed');
                    if (!(navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i))) {
                        $(this).parallax('50%', parallaxspeed, null, true);
                    } else {
                        $(this).css('background-attachment', 'scroll');
                        $(this).css('background-size', 'cover');
                        $(this).css('background-position', 'center');
                    }
                }
            }
        });
    });
    setFixedNavigation();
    $('.top-navigation .menu-top li').hover(function () {
        var topval = 10;
        if ($(this).parent().hasClass('menu-top'))
            topval = 50;
        $(this).find('> ul').css({
            display: 'block'
        }).stop().animate({
            opacity: 1,
            top: topval
        }, {
            duration: 600,
            queue: false,
            easing: 'easeOutQuart',
            complete: function () {}
        });
    }, function () {
        var topval = 20;
        if ($(this).parent().hasClass('menu-top'))
            topval = 60;
        $(this).find('> ul').stop(0).animate({
            opacity: 0,
            top: topval
        }, {
            duration: 600,
            queue: false,
            easing: 'easeOutQuart',
            complete: function () {
                $(this).css({
                    display: 'none'
                });
            }
        });
    });
//    $(".isotope-container .thumbnail-portfolio").css('opacity', '0');
//
//    function setportfolio() {
//        if ($(".isotope-container").hasClass('isotope')) {
//            $(".isotope-container").isotope('reLayout');
//        }
//    }

    function setFlexSlider(target) {
        $(target + " .slider_flexslider").map(function () {
            var $this = $(this);
            $(this).flexslider({
                animation: "fade",
                controlNav: false,
                animationLoop: false,
                slideshow: false,
                smoothHeight: true,
                directionNav: false,
                sync: ".carousel_flexslider"
            });
            $(this).parent().find('.carousel_flexslider').flexslider({
                animation: "slide",
                controlNav: false,
                animationLoop: false,
                slideshow: false,
                itemWidth: 85,
                itemMargin: 5,
                directionNav: false,
                asNavFor: '.slider_flexslider'
            });
            setTimeout(function () {
                $this.parent().find('.carousel_flexslider').animate({
                    opacity: 1
                }, 1000);
            }, 1000);
        });
    }
    $(window).load(function () {
        setFlexSlider('body');
        $('body').fitVids();
        $('.body-loading').delay(1000).animate({
            opacity: 0
        }, {
            duration: 1000,
            easing: 'easeOutQuart',
            complete: function () {
                $(this).remove();
            }
        });
        setTimeout(function () {
            if ($(location.href.split("#")[1])) {
                var anchor = $('#' + location.href.split("#")[1]);
                if (anchor.length > 0)
                    $('html,body').animate({
                        scrollTop: anchor.offset().top - 80
                    }, 500);
            }
        }, 500);
//        $(".isotope-container").imagesLoaded(function() {
//            $(".isotope-container").isotope({
//                layoutMode: "perfectMasonry",
//                perfectMasonry: {
//                    liquid: true
//                },
//                itemSelector: '.thumbnail-portfolio',
//            }, function() {
//                setTimeout(function() {
//                    setportfolio();
//                    $(".isotope-container .thumbnail-portfolio").animate({
//                        opacity: 1
//                    }, 300);
//                }, 500);
//            });
//        });
    });
    if (!(navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i)))
        new WOW().init();
    $(document).ready(function () {
        $(".Owl-Slider").owlCarousel({
            navigation: false,
            slideSpeed: 600,
            paginationSpeed: 600,
            singleItem: true,
            autoPlay: 6000,
            pagination: true
        });
        $(".Owl-Slider-about").owlCarousel({
            navigation: false,
            slideSpeed: 600,
            paginationSpeed: 600,
            singleItem: true,
            pagination: true
        });
        $(".Owl-Slider-Sub-None").map(function () {
            $(this).owlCarousel({
                navigation: false,
                slideSpeed: 600,
                paginationSpeed: 600,
                singleItem: true,
                pagination: false,
                autoHeight: true,
                autoPlay: 4000,
                stopOnHover: true,
                afterInit: function (slide) {}
            });
            $(this).delegate(".fa-angle-right", "click", function () {
                owl.next();
            });
            $(this).delegate(".fa-angle-left", "click", function () {
                owl.prev();
            });
            var owl = $(this).data('owlCarousel');
        });
        $(".Owl-Slider-Sub").owlCarousel({
            navigation: false,
            slideSpeed: 600,
            paginationSpeed: 600,
            singleItem: true,
            pagination: true,
            autoHeight: true,
            autoPlay: 4000,
            stopOnHover: true
        });
        $(".Owl-Slider-Blog").owlCarousel({
            navigation: false,
            slideSpeed: 600,
            paginationSpeed: 600,
            singleItem: true,
            pagination: true,
            autoHeight: true,
            autoPlay: 4000,
            stopOnHover: true
        });
        $('.lightbox').magnificPopup({
            delegate: 'a',
            type: 'image',
            tLoading: 'Loading image #%curr%...',
            mainClass: 'mfp-img-mobile',
            gallery: {
                enabled: true,
                navigateByImgClick: true,
                preload: [0, 1]
            },
            image: {
                tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
                titleSrc: function (item) {
                    return item.el.attr('title');
                }
            }
        });
        $('a img[class*="wp-image"]').not('.nomodal').each(function () {
            if (!$(this).parent().parent().hasClass('lightbox')) {
                $(this).parent().magnificPopup({
                    type: 'image',
                    closeOnContentClick: true,
                    image: {
                        verticalFit: false
                    }
                });
            }
        });
        $(".close-contact").delegate(".fa-angle-double-up", "click", function () {
            $("html,body").animate({
                scrollTop: 0
            }, 1000);
        });
        $('.gmap').each(function () {
            if ($(this).data('width') != '')
                $(this).css('width', $(this).data('width'));
            if ($(this).data('height') != '')
                $(this).css('height', $(this).data('height'));
            var infoBoxMessage = '';
            if ($(this).find('> span').length == 1) {
                infoBoxMessage = $(this).find('> span').html();
            }
            var latlng = new google.maps.LatLng($(this).data('lat'), $(this).data('lng'));
            var controls = ($.trim($(this).data('controls')) == 'true') ? false : true;
            var myOptions = {
                "zoom": $(this).data('zoom'),
                "disableDefaultUI": controls,
                "mapTypeId": $(this).data('maptype')
            };
            myOptions.center = latlng;
            var mapObjName = new google.maps.Map($(this)[0], myOptions);
            var markerName = new google.maps.Marker({
                map: mapObjName,
                position: mapObjName.getCenter()
            });
            if (infoBoxMessage != '') {
                var infowindowName = new google.maps.InfoWindow();
                infowindowName.setContent(infoBoxMessage);
                google.maps.event.addListener(markerName, 'click', function () {
                    infowindowName.open(mapObjName, markerName);
                });
            }
        });
        $('a[data-toggle="tooltip"]').tooltip();
        $('a[data-toggle="popover"]').popover();
        $('a[data-toggle="tooltipfooter"]').tooltip();
        $('a[data-toggle="tooltipfooter"]').on('hover', function () {
            $('.tooltip').css({
                marginTop: '-10px'
            });
        })
        $('#contentBox a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
            e.target
            e.relatedTarget
        });
        $('.accordition-toggle').on('shown.bs.collapse', function (e) {
//            $(this).find('.panel-collapse.in').parents('.panel').addClass('active');
            var panel = $(this).find('.panel-collapse.in').parents('.panel').addClass('active');
            $('html, body').animate({
                scrollTop: panel.offset().top - 90
            }, 500);
        }).on('hidden.bs.collapse', function (e) {
            $(this).find('.panel-collapse').not('.in').parents('.panel').removeClass('active');
        })
        $('.accordition-toggle .tab-toggle').click(function () {
            $(this).parents('.panel').find('a[data-toggle="collapse"]').trigger('click');
        });
        $(".top-navigation-inner").onePageNav({
            currentClass: 'current',
            scrollOffset: 80
        });
        $('a[href*=#]:not([href=#])').not('.jsaction').click(function () {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top - 80
                    }, {
                        duration: 1200,
                        queue: false,
                        easing: 'easeOutCirc'
                    });
                    return false;
                }
            }
        });
        $('.chart').waypoint(function (direction) {
            var bgcolor = '#ffffff';
            if ($(this).data('bgcolor'))
                bgcolor = $(this).data('bgcolor');
            $(this).easyPieChart({
                size: '200',
                scaleColor: false,
                lineWidth: 20,
                animate: 2000,
                trackColor: bgcolor,
                barColor: $(this).data('color'),
                easing: 'easeOut',
                onStep: function (from, to, percent) {
                    $(this.el).find('.percent').text(Math.round(percent));
                }
            });
        }, {
            offset: 1000
        });
        $(".Logo-home, .control-sound, .control-down").hide();
        setTimeout(function () {
            if ($('.tp-banner').hasClass('tp-banner')) {
                $(".Logo-home").css({
                    'top': $('.tp-banner li').find("div.start.tp-caption").offset().top - $(".Logo-home").height() - 50
                }).fadeIn();
                $(".control-down").css({
                    'top': $(".tp-bullets").offset().top - $(".control-down").height() - 50
                }).fadeIn();
            }
            $(".control-sound").css({
                'top': $(".control-sound").parents('section').height() - $(".control-sound").height() - 150
            }).fadeIn();
        }, 3000);
        $('.paralax-revslider .tp-bgimg').each(function (key, data) {
            if (!(navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i))) {
                $(data).parallax("50%", 0.2);
                setTimeout(function () {
                    $(data).css({
                        'background-attachment': 'fixed',
                        'background-size': 'cover'
                    });
                }, 1000);
            }
        });
        $(".Owl-Slider .item").height($(window).height() + 50);
        $(".Owl-Slider .item").each(function (key, data) {
            $(".content-video").css({
                'z-index': 3,
                'top': '50%',
                'left': '50%',
                'margin-top': -$(data).find(".content-video").height() / 2 - 15,
                'margin-left': -$(data).find(".content-video").width() / 2 - 15
            });
        });
        if ($(document).find(".video-parallax").hasClass('video-parallax')) {
            $(".Owl-Slider .item").height($(window).height() + 50);
            $(".Owl-Slider .item").each(function (key, data) {
                $(".content-video").css({
                    'z-index': 3,
                    'top': '50%',
                    'left': '50%',
                    'margin-top': -$(data).find(".content-video").height() / 2 - 15,
                    'margin-left': -$(data).find(".content-video").width() / 2 - 15
                });
            });
        }
        setFixedNavigation();
        $(document).scroll(function () {
            setFixedNavigation();
        });
        $('.widget-flickr-images').each(function () {
            var flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
            var $this = $(this);
            $.getJSON(flickerAPI, {
                id: $this.data('userid'),
                format: "json"
            }).done(function (data) {
                $.each(data.items, function (i, item) {
                    $("<img>").attr({
                        src: item.media.m,
                        alt: item.title,
                    }).appendTo($this.find('.row')).wrap('<a href="' + item.link + '" target="_blank"></a>');
                    if (i === parseInt($this.data('limit')) - 1) {
                        return false;
                    }
                });
            });
        });
//        $('.thumbnail-portfolio .fa-heart').click(function(event) {
//            event.preventDefault();
//            event.stopImmediatePropagation();
//            var $this = $(this);
//            var post_id = $this.data("post-id");
//            return false;
//        });


        function calculateWPGalleryColWidth($container) {
            var colcount = $container.data('col-count');
            if ($container.width() <= 720) {
                colcount = (colcount >= 4) ? 3 : colcount;
            }
            if ($container.width() <= 650) {
                colcount = (colcount >= 3) ? 2 : colcount;
            }
            if ($container.width() <= 360) {
                colcount = (colcount >= 2) ? 1 : colcount;
            }
            var colWidth = Math.floor(($container.width() - ((colcount - 1) * 15)) / colcount);
            $container.find('.rb-wp-gallery-item-container').width(colWidth);
            return colWidth;
        }
//        $(".rb-wp-gallery").each(function() {
//            var $container = $(this);
//            $container.imagesLoaded(function() {
//                $container.isotope({
//                    masonry: {
//                        columnWidth: calculateWPGalleryColWidth($container),
//                        gutterWidth: 15,
//                    },
//                    itemSelector: '.rb-wp-gallery-item-container',
//                }, function() {
//                    $container.find('.rb-wp-gallery-item-container').magnificPopup({
//                        delegate: 'a',
//                        type: 'image',
//                        tLoading: 'Loading image #%curr%...',
//                        mainClass: 'mfp-img-mobile',
//                        gallery: {
//                            enabled: true,
//                            navigateByImgClick: true,
//                            preload: [0, 1]
//                        },
//                        image: {
//                            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
//                            titleSrc: function(item) {
//                                return item.el.data('title');
//                            }
//                        }
//                    });
//                });
//            });
//        });
        $('.isotope-navigation .pagination a').click(function () {
            var selector = $(this).attr('data-filter');
            $(".isotope-container").isotope({
                filter: selector
            });
            $('.isotope-navigation .pagination a').removeClass("active");
            $(this).addClass("active");
            return false;
        });
//        $(".thumbnail-portfolio").delegate('.opento', 'click', function(event) {
//            event.stopImmediatePropagation();
//            event.preventDefault();
//            var $this = $(this);
//            $("html,body").animate({
//                scrollTop: $(".window-portfolio").offset().top - 270
//            }, 500);
//            $(".window-portfolio").stop().slideUp('slow', function() {
//                $.ajax({
//                    type: "get",
//                    url: $this.attr('href'),
//                    success: function(data) {
//                        var $htmlContent = $("<div/>").html(data);
//                        $(".window-portfolio").html($htmlContent.find('.portfolio-item').html());
//                        $(".window-portfolio").imagesLoaded(function() {
//                            $('.window-portfolio').fitVids();
//                            if ($('.window-portfolio .slider_flexslider').length > 0) {
//                                setTimeout(function() {
//                                    setFlexSlider('.window-portfolio');
//                                }, 500);
//                            }
//                            $(".window-portfolio").stop().slideDown('slow');
//                        });
//                        $(".window-portfolio .detail-portfolio").delegate('i.close', 'click', function() {
//                            $(".window-portfolio").slideUp('slow');
//                        });
//                    }
//                });
//            });
//        });
        $(".grid-item").delegate('.opento', 'click', function (event) {
            event.stopImmediatePropagation();
            event.preventDefault();
            var $this = $(this);
            $("html,body").animate({
                scrollTop: $(".window-portfolio").offset().top - 270
            }, 500);
            $(".window-portfolio").stop().slideUp('slow', function () {
                $.ajax({
                    type: "get",
                    url: $this.attr('href'),
                    success: function (data) {
                        var $htmlContent = $("<div/>").html(data);
                        $(".window-portfolio").html($htmlContent.find('.portfolio-item').html());
                        $(".window-portfolio").imagesLoaded(function () {
                            $('.window-portfolio').fitVids();
                            if ($('.window-portfolio .slider_flexslider').length > 0) {
                                setTimeout(function () {
                                    setFlexSlider('.window-portfolio');
                                }, 500);
                            }
                            $(".window-portfolio").stop().slideDown('slow');
                        });
                        $(".window-portfolio .detail-portfolio").delegate('i.close', 'click', function () {
                            $(".window-portfolio").slideUp('slow');
                        });
                    }
                });
            });
        });
        $(".box-contact").map(function () {
            $(this).css({
                'min-height': $(".img-background img").height()
            });
        });
        $(window).bind('resize', function () {
//            setportfolio();
            $(".box-contact").css({
                'min-height': $(".img-background img").height()
            });
        });
        $(".player").mb_YTPlayer();
        $('.form-search form').submit(function (event) {
            if ($.trim($(this).find('.searchbox').val()).length < 1) {
                event.preventDefault();
                return false;
            }
        });
        $('.form-search button').click(function (event) {
            event.preventDefault();
            $(this).parents('form').submit();
        });
        $(".control-sound").find("img").click(function () {
            if ($(".control-sound").find("img").hasClass("mute")) {
                $('#bgndVideo').unmuteYTPVolume();
                $(".control-sound").find("img").attr("src", 'images/playing.png');
                $(".control-sound").find("img").removeClass('mute');
                $(".control-sound").find("img").addClass('unmute');
            } else {
                $('#bgndVideo').muteYTPVolume();
                $(".control-sound").find("img").attr("src", 'images/mute.png');
                $(".control-sound").find("img").removeClass('unmute');
                $(".control-sound").find("img").addClass('mute');
            }
        });
        if ($(".landinghome").hasClass("landinghome")) {
            $(".landinghome").height($(document).height());
        }
        $("#jquery_jplayer_1").jPlayer({
            ready: function () {
                $(this).jPlayer("setMedia", {
                    mp3: $("#jquery_jplayer_1").data('mp3')
                }).jPlayer("play");
            },
            swfPath: "/js",
            supplied: "mp3"
        });
        $('.rb-twitter-feed').each(function () {
            var params = '';
            var $this = $(this);
            params = 'limit=' + $(this).data('limit');
            $.post('twitter-widget/twitter.php', params, function (data) {
                $this.html(data);
                $this.owlCarousel({
                    navigation: false,
                    slideSpeed: 600,
                    paginationSpeed: 600,
                    singleItem: true,
                    pagination: true,
                    autoHeight: true,
                    autoPlay: 4000,
                    stopOnHover: true
                });
            });
        });
        $('.twitter-box').each(function () {
            var params = '';
            var $this = $(this);
            params = '&limit=' + $(this).data('limit');
            $.post('twitter-widget/twitter2.php', params, function (data) {
                $this.find('ul').html(data);
            });
        });
//        $(".form-contact").submit(function (e) {
//            e.preventDefault();
//            var thisForm = $(".form-contact");
//            var check = false;
//            if (thisForm.find('.name').val() === "") {
//                thisForm.find('.name').addClass("error");
//                thisForm.find('.name').focus();
//                thisForm.find('.name').attr("placeholder", "Empty Name.");
//                check = true;
//            } else {
//                if (thisForm.find('.name').hasClass('error')) {
//                    thisForm.find('.name').removeClass("error");
//                    thisForm.find('.name').attr("placeholder", "Name");
//                }
//            }
//            if (thisForm.find('.email').val() === "") {
//                thisForm.find('.email').addClass("error");
//                thisForm.find('.email').focus();
//                thisForm.find('.email').attr("placeholder", "Empty Email.");
//                check = true;
//            } else {
//                if (isValidEmailAddress(thisForm.find('.email').val()) === false) {
//                    thisForm.find('.email').addClass("error");
//                    thisForm.find('.email').focus();
//                    thisForm.find('.email').val("");
//                    thisForm.find('.email').attr("placeholder", "Correct Email.");
//                    check = true;
//                } else {
//                    if (thisForm.find('.email').hasClass('error')) {
//                        thisForm.find('.email').removeClass("error");
//                        thisForm.find('.email').attr("placeholder", "Email");
//                    }
//                }
//            }
//            if (thisForm.find('.phone').val() === "") {
//                thisForm.find('.phone').addClass("error");
//                thisForm.find('.phone').focus();
//                thisForm.find('.phone').attr("placeholder", "Empty Phone.");
//                check = true;
//            } else {
//                if (thisForm.find('.phone').hasClass('error')) {
//                    thisForm.find('.phone').removeClass("error");
//                    thisForm.find('.phone').attr("placeholder", "Phone");
//                }
//            }
//            if (thisForm.find('.website').val() === "") {
//                thisForm.find('.website').addClass("error");
//                thisForm.find('.website').focus();
//                thisForm.find('.website').attr("placeholder", "Empty Website.");
//                check = true;
//            } else {
//                if (thisForm.find('.website').hasClass('error')) {
//                    thisForm.find('.website').removeClass("error");
//                    thisForm.find('.website').attr("placeholder", "Website");
//                }
//            }
//            if (thisForm.find('.message-contact').val() === "") {
//                thisForm.find('.message-contact').addClass("error");
//                thisForm.find('.message-contact').focus();
//                thisForm.find('.message-contact').attr("placeholder", "Empty Message.");
//                check = true;
//            } else {
//                if (thisForm.find('.message').hasClass('error')) {
//                    thisForm.find('.message').removeClass("error");
//                    thisForm.find('.message').attr("placeholder", "Message");
//                }
//            }
//            if (check === true) {
//                return false;
//            } else {
//                thisForm.fadeOut(function () {
//                    thisForm.parent().find('.loading').fadeIn(function () {
//                        $.ajax({
//                            type: 'POST',
//                            url: 'contact.php',
//                            data: thisForm.serialize(),
//                            success: function (data) {
////                                data = $.parseJSON(data);
////                                console.log(data);
//                                if (data == 'Message has been sent') {
//                                    thisForm.parent().find(".loading").fadeOut(function () {
//                                        thisForm.parent().find(".success").text(data.message).fadeIn();
//                                    });
//                                } else {
//                                    thisForm.parent().find(".loading").fadeOut(function () {
//                                        thisForm.parent().find(".success").text(data.error).fadeIn();
//                                    });
//                                }
//                                setTimeout(function () {
//                                    thisForm.parent().find('.success').fadeOut(function () {
//                                        thisForm.fadeIn();
//                                    });
//                                }, 5000);
//                            }
//                        });
//                    });
//                });
//            }
//            return false;
//        });

        $(".form-contact").submit(function (e) {
            e.preventDefault();
//            var thisForm = $(".form-contact");
            var thisForm = new FormData(this);
            var check = false;
            if ($(".form-contact").find('.name').val() === "") {
                $(".form-contact").find('.name').addClass("error");
                $(".form-contact").find('.name').focus();
                $(".form-contact").find('.name').attr("placeholder", "Empty Name.");
                check = true;
            } else {
                if ($(".form-contact").find('.name').hasClass('error')) {
                    $(".form-contact").find('.name').removeClass("error");
                    $(".form-contact").find('.name').attr("placeholder", "Name");
                }
            }
            if ($(".form-contact").find('.email').val() === "") {
                $(".form-contact").find('.email').addClass("error");
                $(".form-contact").find('.email').focus();
                $(".form-contact").find('.email').attr("placeholder", "Empty Email.");
                check = true;
            } else {
                if (isValidEmailAddress($(".form-contact").find('.email').val()) === false) {
                    $(".form-contact").find('.email').addClass("error");
                    $(".form-contact").find('.email').focus();
                    $(".form-contact").find('.email').val("");
                    $(".form-contact").find('.email').attr("placeholder", "Correct Email.");
                    check = true;
                } else {
                    if ($(".form-contact").find('.email').hasClass('error')) {
                        $(".form-contact").find('.email').removeClass("error");
                        $(".form-contact").find('.email').attr("placeholder", "Email");
                    }
                }
            }
            if ($(".form-contact").find('.phone').val() === "") {
                $(".form-contact").find('.phone').addClass("error");
                $(".form-contact").find('.phone').focus();
                $(".form-contact").find('.phone').attr("placeholder", "Empty Phone.");
                check = true;
            } else {
                if (isValidPhoneNumber($(".form-contact").find('.phone').val()) === false) {
                    $(".form-contact").find('.phone').addClass("error");
                    $(".form-contact").find('.phone').focus();
                    $(".form-contact").find('.phone').val("");
                    $(".form-contact").find('.phone').attr("placeholder", "Correct Phone Number.");
                    check = true;
                } else {
                    if ($(".form-contact").find('.phone').hasClass('error')) {
                        $(".form-contact").find('.phone').removeClass("error");
                        $(".form-contact").find('.phone').attr("placeholder", "Phone");
                    }
                }
            }
            if ($(".form-contact").find('.website').val() === "") {
                $(".form-contact").find('.website').addClass("error");
                $(".form-contact").find('.website').focus();
                $(".form-contact").find('.website').attr("placeholder", "Empty Website.");
                check = true;
            } else {
                if (isValidWebsite($(".form-contact").find('.website').val()) === false) {
                    $(".form-contact").find('.website').addClass("error");
                    $(".form-contact").find('.website').focus();
                    $(".form-contact").find('.website').val("");
                    $(".form-contact").find('.website').attr("placeholder", "Correct Website.");
                    check = true;
                } else {
                    if ($(".form-contact").find('.website').hasClass('error')) {
                        $(".form-contact").find('.website').removeClass("error");
                        $(".form-contact").find('.website').attr("placeholder", "Website");
                    }
                }
            }
            if ($(".form-contact").find('.message-contact').val() === "") {
                $(".form-contact").find('.message-contact').addClass("error");
                $(".form-contact").find('.message-contact').focus();
                $(".form-contact").find('.message-contact').attr("placeholder", "Empty Message.");
                check = true;
            } else {
                if ($(".form-contact").find('.message-contact').hasClass('error')) {
                    $(".form-contact").find('.message-contact').removeClass("error");
                    $(".form-contact").find('.message-contact').attr("placeholder", "Message");
                }
            }
            if (check === true) {
                return false;
            } else {
//                thisForm.fadeOut(function () {
                $(this).fadeOut(function () {
                    $("#page-footer").find('.loading').fadeIn(function () {
                        $.ajax({
                            type: 'POST',
                            url: 'contact_form',
                            headers: {'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')},
                            enctype: 'multipart/form-data',
                            processData: false,
                            contentType: false,
                            cache: false,
                            data: thisForm,
                            success: function (data) {
//                                alert("Test");
//                                data = $.parseJSON(data);
//                                console.log(data);
                                if (data == 'Message has been sent') {
                                    $("#page-footer").find(".loading").fadeOut(function () {
                                        $("#page-footer").find(".success").text(data.message).fadeIn();
                                    });
                                } else {
                                    $("#page-footer").find(".loading").fadeOut(function () {
                                        $("#page-footer").find(".success").text(data.error).fadeIn();
                                    });
                                }
                                setTimeout(function () {
                                    $("#page-footer").find('.success').fadeOut(function () {
                                        $(".form-contact").fadeIn();
                                    });
                                }, 5000);
                            }
                        });
                    });
                });
            }
            return false;
        });

        $("#career_form").submit(function (e) {

            e.preventDefault();
//            var thisForm = $("#career_form");
            var thisForm = new FormData(this);
            var check = false;
            if ($("#career_form").find('.name').val() === "") {
                $("#career_form").find('.name').addClass("error");
                $("#career_form").find('.name').focus();
                $("#career_form").find('.name').attr("placeholder", "Empty Name.");
                check = true;
            } else {
                if ($("#career_form").find('.name').hasClass('error')) {
                    $("#career_form").find('.name').removeClass("error");
                    $("#career_form").find('.name').attr("placeholder", "Name");
                }
            }
            if ($("#career_form").find('.experience').val() === "") {
                $("#career_form").find('.experience').addClass("error");
                $("#career_form").find('.experience').focus();
                $("#career_form").find('.experience').attr("placeholder", "Empty Experience.");
                check = true;
            } else {

                if ($("#career_form").find('.experience').hasClass('error')) {
                    $("#career_form").find('.experience').removeClass("error");
                    $("#career_form").find('.experience').attr("placeholder", "Experience");
                }

            }
            if ($("#career_form").find('.description').val() === "") {
                $("#career_form").find('.description').addClass("error");
                $("#career_form").find('.description').focus();
                $("#career_form").find('.description').attr("placeholder", "Empty Description.");
                check = true;
            } else {
                if ($("#career_form").find('.description').hasClass('error')) {
                    $("#career_form").find('.description').removeClass("error");
                    $("#career_form").find('.description').attr("placeholder", "Description");
                }
            }
            if ($(this).find('.resume').val() === "") {
                $(this).find('.resume').addClass("error");
                $(this).find('.resume').focus();
                $(this).find('.resume').attr("placeholder", "Empty Resume.");
                check = true;
            } else {
                if ($("#career_form").find('.resume').hasClass('error')) {
                    $("#career_form").find('.resume').removeClass("error");
                    $("#career_form").find('.resume').attr("placeholder", "Resume");
                }
            }
            if (check === true) {
                return false;
            } else {
//console.log(thisForm[0]);
                $(this).fadeOut(function () {
//                alert($('body').find('.loading'));


                    $('.career-form').find('.loading').fadeIn(function () {
                        $.ajax({
                            type: 'POST',
//                            url: 'contact.php',
                            url: 'career_form',
                            headers: {'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')},
                            enctype: 'multipart/form-data',
                            processData: false,
                            contentType: false,
                            cache: false,
                            data: thisForm,
                            success: function (data) {
//                                data = $.parseJSON(data);
//
//                        alert(data);
//                    console.log(data);
                                if (data == 'Message has been sent') {
//                                    alert(data);
                                    $('.career-form').find(".loading").fadeOut(function () {
                                        $('.career-form').find(".success").text(data.message).fadeIn();
                                    });
                                } else {
                                    $('.career-form').find(".loading").fadeOut(function () {
                                        $('.career-form').find(".success").text(data.error).fadeIn();
                                    });
                                }
                                setTimeout(function () {
                                    $('.career-form').find('.success').fadeOut(function () {
                                        $('#career_form').fadeIn();
                                    });
                                }, 5000);
                            }
                        });

                    });
                });

            }
            return false;
        });

        function isValidEmailAddress(emailAddress) {
            var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
            return pattern.test(emailAddress);
        }
        function isValidPhoneNumber(phoneNumber) {
            var pattern = /^((\+[1-9]{1,4}[ \-]*)|(\([0-9]{2,3}\)[ \-]*)|([0-9]{2,4})[ \-]*)*?[0-9]{3,4}?[ \-]*[0-9]{3,4}?$/;
            return pattern.test(phoneNumber);
        }
        function isValidWebsite(website) {
            var pattern = /^(http|https|ftp):\/\/[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/i;
            return pattern.test(website);
        }
    });
})(jQuery);