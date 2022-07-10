@php
$current = 'current';
@endphp
<div class="main-menu__main-menu-box main-menu__main-menu-box--two">
    <a href="#" class="mobile-nav__toggler"><i class="fa fa-bars"></i></a>
    <ul class="main-menu__list">
        <li class="{{request()->segment(1) == '' ? $current : ''}}"><a href="{{url('/')}}">{{trans("global.menu_home_title")}}</a></li>
        <li class="dropdown 
            {{ 
                (request()->segment(1) == 'about-us' ||
                request()->segment(1) == 'blogs' || request()->segment(1) == 'blogs/*' ||
                request()->segment(1) == 'portfolio' || request()->segment(1) == 'portfolio/*')
                ? $current : '' 
            }}
            ">
            <a href="javascript:void(0)">{{trans("global.menu_company_title")}}</a>
            <ul class="company-menu">
                <div id="particles-js-company"></div>
                {{(menu('Company','partials.menus.mega_menu.company'))}}
            </ul>
        </li>        
        <li class="dropdown megamenu">
            <a href="javascript:void(0)">{{trans("global.menu_services_title")}}</a>
            <ul>
                @include('partials.menus.mega_menu.services')
            </ul>
        </li>        
        <li class="dropdown megamenu">
            <a href="javascript:void(0)">{{trans("global.menu_technology_title")}}</a>
            <ul>
                @include('partials.menus.mega_menu.technology')
            </ul>
        </li>    
        <li><a href="{{url('#')}}">{{trans("global.menu_careers_title")}}</a></li>
        <li><a href="{{url('/contact-us')}}">{{trans("global.menu_contact_title")}}</a></li>
    </ul>
</div>
