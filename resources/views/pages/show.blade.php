@include('common.headermenu')



<div class="page-wrapper">
        <header class="main-header clearfix">
        @include('common.mainmenu')            
        </header>

        <div class="stricky-header stricked-menu main-menu">
            <div class="sticky-header__content"></div><!-- /.sticky-header__content -->
        </div><!-- /.stricky-header -->

<!--Page Header Start-->
<section class="page-header">
            <div class="page-header-bg" style="background-image: url(assets/images/backgrounds/page-header-bg.jpg)">
            </div>
            <div class="container">
                <div class="page-header__inner">
                    <ul class="thm-breadcrumb list-unstyled">
                        <li><a href="index.html">Home</a></li>
                        <li><span>/</span></li>
                        <li class="active">{{$page->title}}</li>
                    </ul>
                    <h2>{{$page->title}}</h2>
                </div>
            </div>
        </section>
        <!--Page Header End-->
        @section('css')
<style type="text/css">
    #page-image h2 {
        color: #00b5e7;
    }

    #page-image .description {
        color: #fff;
    }

    .heading::after {
        border: none;
    }
</style>
@endsection 
        {{$page->body}}

        @include('common.footer')
       
        </div>
@include('common.navfootmenu')

