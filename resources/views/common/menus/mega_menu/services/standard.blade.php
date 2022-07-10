<div class="mega_menu_sub_menu">
    @foreach($items as $menu_item)
    <div class="menu_list">
        {{--@if(strlen($menu_item->title) >= '25')
        <a class="text-center menu-long-title" id="fonts" href="{{ $menu_item->url }}" style="display: block ruby">
            <i class="{{ $menu_item->icon_class }} m-auto-0 mr-5"></i>{{ $menu_item->title }}
        </a>
        @else--}}
        <a class="text-center" id="fonts" href="{{ $menu_item->url }}">
            <i class="{{ $menu_item->icon_class }} m-auto-0 mr-5"></i>{{ $menu_item->title }} 
        </a>
        {{--@endif --}}
    </div>
    @endforeach
</div>