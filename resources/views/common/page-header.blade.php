<section class="page-header">
    <div class="page-header-bg" style="background-image: url({{asset('assets/images/backgrounds/1.jpg')}})">
        <!--<div id="particles-js-blogs"></div>-->
    </div>
    <div class="container">
        <div class="page-header__inner text-left">
            {{ $segments = '' }}
            {{--<ul class="thm-breadcrumb list-unstyled">
                <li>
                    <a href="{{url('/')}}">{{ __("Home") }}</a>
                </li>
                <li><span>/</span></li>
                @foreach(Request::segments() as $key=>$segment)                 
                @if($segment == 'details')
                <li class="display-none"></li>
                @else
                <li>{{ ucwords(str_replace('-',' ',$segment)) }}</li>
                @if(!$loop->last)
                <li><span>/</span></li>
                @endif
                @endif
                @endforeach
            </ul> --}}
            <h2>@yield('title')</h2>
            <p>@yield('page_header_sub_title')</p>
        </div>
    </div>
</section>