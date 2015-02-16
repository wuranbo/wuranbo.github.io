---
layout: home
title: 吴冉波
---

<div class="index-content misc clearfix">
    <div class="section">


<ul class="artical-cate">
    <li ><a href="/"><span>{{ site.uservar.blog }}</span></a></li>
    <li class="on" style="text-align:center"><a href="/misc"><span>{{ site.uservar.misc  }}</span></a></li>
    <li  style="text-align:right"><a href="/profile"><span>吴冉波</span></a></li>
</ul>


<div class="cate-bar"><span id="cateBar"></span></div>

        <ul class="artical-list">
<div>
<p>越简单越清晰的往往越是事后诸葛。史以明智，胡言乱语都记下，相当要紧。</p>
</div>
        {% for post in site.categories.misc %}
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
