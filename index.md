---
layout: home
title: 吴冉波
---

<div class="index-content blog clearfix">
    <div class="section">


<ul class="artical-cate">
    <li class="on"><a href="/"><span>{{ site.uservar.blog }}</span></a></li>
    <li style="text-align:center"><a href="/misc"><span>{{ site.uservar.misc  }}</span></a></li>
    <li style="text-align:right"><a href="/profile"><span>吴冉波</span></a></li>
</ul>

<div class="cate-bar"><span id="cateBar"></span></div>
        <ul class="artical-list">
        {% for post in site.categories.blog %}
            <li>
                <h2><a href="{{ post.url }}">{{ post.title }}</a></h2>
                <div class="title-desc">{{ post.description }}</div>
            </li>
        {% endfor %}
        </ul>
      </div>
    {% include home_rightside.html %}
    </div>
</div>
