@foreach($items as $menu_item)
<div class="display-flex">
    <i class="{{ $menu_item->icon_class }} m-auto-0 mr-5"></i><a class="text-center" id="fonts" href="{{ $menu_item->url }}">{{ $menu_item->title }}
    </a>
</div>
@endforeach

