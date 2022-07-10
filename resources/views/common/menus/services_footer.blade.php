@foreach($items as $menu_item)
<li>
    <a class="text-center" id="fonts" href="{{ $menu_item->url }}">
        <i class="{{ $menu_item->icon_class }} m-auto-0 mr-5"></i>{{ $menu_item->title }} 
    </a>
</li>
@endforeach