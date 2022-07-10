<!doctype html>
<html lang="{{ app()->getLocale() }}">

    <head lang="en-US">
        <meta charset="UTF-8"/>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
        <meta content="{{url(" ")}}" name="url"/>
        <meta content="{{csrf_token()}}" name="csrf-token"/>

        <meta name="google-site-verification" content="iv5v-6E284K3cRDqjFEbhrdrH6B4LxZo6EzAtoWgzeM"/>
        <meta name="p:domain_verify" content="12c6e6c0b5896eb7981c5e96fe0b79f2"/>
        <meta name="author" content="AavidTechnologies"/>
        <meta name="title" content="@yield('meta_title')"/>
        <meta name="description" content="@yield('meta_description')"/>
        <meta name="keywords" content="@yield('meta_keywords')"/>
        <meta name="language" content="english"/>
        <meta name="language" content="EN"/>
        <meta name="copyright" content="AavidTechnologies"/>
        <meta name="robots" content="NOODP"/>
        <meta name="ROBOTS" content="INDEX, FOLLOW"/>
        <meta name="GOOGLEBOT" content="INDEX, FOLLOW"/>
        <meta name="document-classification" content="Internet"/>
        <meta name="document-type" content="Public"/>
        <meta name="document-rating" content="Safe for Kids"/>
        <meta name="document-distribution" content="Global"/>
        <script async="async" src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5896942422563933" crossorigin="anonymous"></script>

        <title>Aavid Technologies - @yield('title')</title>

        <!-- fonts -->
        <link rel="preconnect" href="https://fonts.googleapis.com/">
        <link rel="preconnect" href="https://fonts.gstatic.com/" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@100;200;300;400;500;600;700;800;900&amp;display=swap" rel="stylesheet">

<!--<title>AavidTechnologies | @yield('title')</title>-->
        {{Html::style("assets/vendors/bootstrap/css/bootstrap.min.css")}}
        {{Html::style("assets/vendors/animate/animate.min.css")}}
        {{Html::style("assets/vendors/animate/custom-animate.css")}}
        {{Html::style("assets/vendors/fontawesome/css/all.min.css")}}
        {{Html::style("assets/vendors/jarallax/jarallax.css")}}
        {{Html::style("assets/vendors/jquery-magnific-popup/jquery.magnific-popup.css")}}
        {{Html::style("assets/vendors/nouislider/nouislider.min.css")}}
        {{Html::style("assets/vendors/nouislider/nouislider.pips.css")}}
        {{Html::style("assets/vendors/odometer/odometer.min.css")}}
        {{Html::style("assets/vendors/swiper/swiper.min.css")}}
        {{Html::style("assets/vendors/aavid-icons/style.css")}}
        {{Html::style("assets/vendors/tiny-slider/tiny-slider.min.css")}}
        {{Html::style("assets/vendors/reey-font/stylesheet.css")}}
        {{Html::style("demo/css/demo.css")}}
        {{Html::style("assets/vendors/owl-carousel/owl.carousel.min.css")}}
        {{Html::style("assets/vendors/owl-carousel/owl.theme.default.min.css")}}
        {{Html::style("assets/vendors/bxslider/jquery.bxslider.css")}}
        {{Html::style("assets/vendors/bootstrap-select/css/bootstrap-select.min.css")}}
        {{Html::style("assets/vendors/vegas/vegas.min.css")}}
        {{Html::style("assets/vendors/jquery-ui/jquery-ui.css")}}
        {{Html::style("assets/vendors/timepicker/timePicker.css")}}

        <!-- template styles -->
        {{Html::style("assets/css/aavid.css")}}
        {{Html::style("assets/css/aavid-responsive.css")}}

        <!-- modes css -->
        {{Html::style("assets/css/aavid-light.css")}}

        {{Html::style("assets/css/custom.css")}}

        <link rel="icon" href="{{asset("favicon.ico")}}" type="image/x-icon"/>

        <!-- Global site tag (gtag.js) - Google Analytics -->
        <script async="async" src="https://www.googletagmanager.com/gtag/js?id=UA-6466270-2"></script>
        <script>
window.dataLayer = window.dataLayer || [];

function gtag() {
    dataLayer.push(arguments);
}
gtag('js', new Date());

gtag('config', 'UA-6466270-2');
        </script>

        <!-- Custom icon -->
        <style type="text/css">
            div.image {
                max-width: 256px;
                max-height: 256px;
                background-image: url("data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjY0cHgiIGhlaWdodD0iNjRweCIgdmlld0JveD0iMCAwIDM5Ni40OTQgMzk2LjQ5NCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMzk2LjQ5NCAzOTYuNDk0OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxnPgoJPHBhdGggZD0iTTMwNC40MiwzMzAuOTAxaC00My4yMTljLTEuNTYsMC0yLjgzNC0xLjI3My0yLjgzNC0yLjgzNHYtMTAuNTJjMC0xLjU1OS0xLjI3NS0yLjgzNC0yLjgzNC0yLjgzNGgtNjAuNDc1ICAgYy0xLjU2LDAtMi44MzUsMS4yNzUtMi44MzUsMi44MzR2MTAuNTJjMCwxLjU2MS0xLjI3NSwyLjgzNC0yLjgzNSwyLjgzNGgtMzIuNDkxYy0xLjU2LDAtMi44MzUsMS4yNzUtMi44MzUsMi44MzR2MTIuMTcgICBjMCwxLjU1OSwxLjI3NSwyLjgzNCwyLjgzNSwyLjgzNGgxNDcuNTIxYzEuNTU5LDAsMi44MzQtMS4yNzUsMi44MzQtMi44MzR2LTEyLjE3QzMwNy4yNTQsMzMyLjE3OSwzMDUuOTc5LDMzMC45MDEsMzA0LjQyLDMzMC45MDEgICB6IiBmaWxsPSIjMDAwMDAwIi8+Cgk8Zz4KCQk8cGF0aCBkPSJNMzc3LjAzMiw0Ni4zNjhoLTMwOC40Yy0xMC43MywwLTE5LjQ1OSw4LjczLTE5LjQ1OSwxOS40NjJjMCwwLDAsMzcuMTA5LDAsNTAuNzYxYzAsNi43MTEtMC40OTgsNy42Niw0LjAwNCw3LjY2ICAgIGMyLjM5MSwwLDUuMDM5LDAsNy43MiwwYzMuNzc4LDAsMy4wMDMtMC45NDksMy4wMDMtNy43ODVjMC0xMy42MjEsMC01MC42MzYsMC01MC42MzZjMC0yLjU2NSwyLjE2OC00LjczMyw0LjczMi00LjczM2gzMDguNCAgICBjMi41NjMsMCw0LjczMSwyLjE2OCw0LjczMSw0LjczM3YxODkuOTk5aC0yMTkuODdjMCwwLTcuNzQ5LTAuMDE0LTcuNzQ5LDEwLjAwNmMwLDUuOTQxLDAsMTcuODIzLDAsMjMuNzY2ICAgIGMwLDEwLjAwNiw4LDEwLjAwNiw4LDEwLjAwNmgyMTQuODg4YzEwLjcyOSwwLDE5LjQ2MS04LjcyOSwxOS40NjEtMTkuNDU5VjY1LjgzQzM5Ni40OTMsNTUuMDk5LDM4Ny43NjMsNDYuMzY4LDM3Ny4wMzIsNDYuMzY4eiAgICAgTTIyMi44MzMsMjgyLjgwNGMtNC44NDUsMC04Ljc3MS0zLjkyNi04Ljc3MS04Ljc2OHMzLjkyNi04Ljc3LDguNzcxLTguNzdjNC44NCwwLDguNzY3LDMuOTI4LDguNzY3LDguNzcgICAgUzIyNy42NzMsMjgyLjgwNCwyMjIuODMzLDI4Mi44MDR6IiBmaWxsPSIjMDAwMDAwIi8+CgkJPHBhdGggZD0iTTEyNC4xMjUsMTQxLjYzM0gxMi41NTlDNS42MzIsMTQxLjYzMywwLDE0Ny4yNjYsMCwxNTQuMTkzdjE4My4zNzJjMCw2LjkyNiw1LjYzMiwxMi41NjEsMTIuNTU5LDEyLjU2MWgxMTEuNTY2ICAgIGM2LjkyMywwLDEyLjU1OS01LjYzNSwxMi41NTktMTIuNTYxVjE1NC4xOTNDMTM2LjY4NCwxNDcuMjY2LDEzMS4wNDgsMTQxLjYzMywxMjQuMTI1LDE0MS42MzN6IE01NC41OCwxNTQuNDQzaDI3LjUyMyAgICBjMS4zMTMsMCwyLjM4LDEuMDY0LDIuMzgsMi4zODFjMCwxLjMxNC0xLjA2NiwyLjM3OS0yLjM4LDIuMzc5SDU0LjU4Yy0xLjMxNSwwLTIuMzc5LTEuMDY1LTIuMzc5LTIuMzc5ICAgIEM1Mi4yMDEsMTU1LjUwNyw1My4yNjUsMTU0LjQ0Myw1NC41OCwxNTQuNDQzeiBNNjguMTc1LDM0MS4zMDRjLTMuNTksMC02LjUtMi45MS02LjUtNi41czIuOTEtNi41LDYuNS02LjVzNi41LDIuOTEsNi41LDYuNSAgICBTNzEuNzY1LDM0MS4zMDQsNjguMTc1LDM0MS4zMDR6IE0xMjUuODkzLDMyMi4yYzAsMS42NzYtMS4zNDIsMy4wNDctMi45OCwzLjA0N0gxMy43NzRjLTEuNjM5LDAtMi45OC0xLjM3MS0yLjk4LTMuMDQ3VjE2OS44MjUgICAgYzAtMS42NzYsMS4zNDItMy4wNDYsMi45OC0zLjA0NmgxMDkuMTM5YzEuNjM5LDAsMi45OCwxLjM3MSwyLjk4LDMuMDQ2VjMyMi4yeiIgZmlsbD0iIzAwMDAwMCIvPgoJPC9nPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo=");
            }
        </style>
        @yield('css')
    </head>

    <body>
        <div class="preloader">
            <img class="preloader__image" src="{{asset("assets/images/loader.png")}}" alt="Loader" />
        </div>
        <!-- /.preloader -->
        <div class="page-wrapper">
            @include('common.header')
            @yield('content') 
            @include('request_demo.request_demo')
            @include('common.footer')
        </div><!-- /.page-wrapper -->

        @include('common.menus.mobile_menu')
        @include('common.menus.search')

        <a href="#" data-target="html" class="scroll-to-target scroll-to-top"><i class="fa fa-angle-up"></i></a>        

        {{Html::script("demo/js/jquery.cookie.js")}}
        {{Html::script("assets/vendors/jquery/jquery-3.6.0.min.js")}}
        {{Html::script("assets/vendors/bootstrap/js/bootstrap.bundle.min.js")}}
        {{Html::script("assets/vendors/jarallax/jarallax.min.js")}}
        {{Html::script("assets/vendors/jquery-ajaxchimp/jquery.ajaxchimp.min.js")}}
        {{Html::script("assets/vendors/jquery-appear/jquery.appear.min.js")}}
        {{Html::script("assets/vendors/jquery-circle-progress/jquery.circle-progress.min.js")}}
        {{Html::script("assets/vendors/jquery-magnific-popup/jquery.magnific-popup.min.js")}}
        {{Html::script("assets/vendors/jquery-validate/jquery.validate.min.js")}}
        {{Html::script("assets/vendors/nouislider/nouislider.min.js")}}
        {{Html::script("assets/vendors/odometer/odometer.min.js")}}
        {{Html::script("assets/vendors/swiper/swiper.min.js")}}
        {{Html::script("assets/vendors/tiny-slider/tiny-slider.min.js")}}
        {{Html::script("assets/vendors/wnumb/wNumb.min.js")}}
        {{Html::script("main.js")}}
        {{Html::script("assets/vendors/wow/wow.js")}}
        {{Html::script("assets/vendors/isotope/isotope.js")}}
        {{Html::script("assets/vendors/countdown/countdown.min.js")}}
        {{Html::script("assets/vendors/owl-carousel/owl.carousel.min.js")}}
        {{Html::script("assets/vendors/bxslider/jquery.bxslider.min.js")}}
        {{Html::script("assets/vendors/bootstrap-select/js/bootstrap-select.min.js")}}
        {{Html::script("assets/vendors/vegas/vegas.min.js")}}
        {{Html::script("assets/vendors/jquery-ui/jquery-ui.js")}}
        {{Html::script("assets/vendors/timepicker/timePicker.js")}}    

        <!-- template js -->    
        {{Html::script("assets/js/aavid.js")}}
        {{Html::script("assets/js/custom.js")}}
        {{Html::script("assets/js/particles.min.js")}}
        {{Html::script("assets/js/particles.js")}}
        {{Html::script("js/career.js")}}
        {{HTML::script('js/view.requestdemo.js')}}
        <script type="text/javascript">            
        </script>
        @yield('script')

        <!-- Start of HubSpot Embed Code -->
        <!--<script type="text/javascript" id="hs-script-loader" async defer src="//js-na1.hs-scripts.com/21898548.js"></script>-->
        <!-- End of HubSpot Embed Code -->

    </body>

</html>