<div class="mega_menu_sub_menu">
    @foreach($items as $menu_item)
    <div class="menu_list">
        <a class="text-center" id="fonts" href="{{ $menu_item->url }}">
            <i class="{{ $menu_item->icon_class }} m-auto-0 mr-5"></i>{{ $menu_item->title }}
        </a>
    </div>
    @endforeach
</div>