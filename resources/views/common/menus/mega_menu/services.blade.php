<li>
    <div class="megamenu-box">
        <div class="container">
            <div class="megamenu-box__inner">
                <div id="particles-js"></div>
                <div class="row services">
                    <div class="row">
                        <div class="col-xl-5">
                            <h6>{{trans('global.menu_services_web_dev_title')}}</h6>
                            {{(menu('Web Development','partials.menus.mega_menu.services.standard'))}}
                        </div>
                        <div class="col-xl-7">
                            <div class="service-right-block-top mb-3">
                                <div class="col-xl-6 mr-30 mb-3">
                                    <h6>{{trans('global.menu_services_mobile_app_dev_title')}}</h6>
                                    {{(menu('Mobile App Development','partials.menus.mega_menu.services.standard'))}}
                                </div>
                                <div class="col-xl-6">
                                    <h6>{{trans('global.menu_services_graphic_design_title')}}</h6>
                                    {{(menu('Graphic Design','partials.menus.mega_menu.services.standard'))}}
                                </div>
                            </div>
                            <div class="service-right-block-bottom mb-3">
                                <div class="col-xl-6 mr-30 mb-3">
                                    <h6>{{trans('global.menu_services_digital_services_title')}}</h6>
                                    {{(menu('Digital Services','partials.menus.mega_menu.services.standard'))}}
                                </div>
                                <div class="col-xl-6">
                                    <h6>{{trans('global.menu_technology_devops_services_title')}}</h6>
                                    {{(menu('DevOps Services','partials.menus.mega_menu.services.standard'))}}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</li>
@section('script')

@endsection