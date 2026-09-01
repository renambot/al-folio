---
layout: page
permalink: /links/
title: links
description: Services and documentation for the Arcade.
nav: true
nav_order: 4
---

<ul class="link-list">
  {% for link in site.data.links %}
    <li class="link-item">
      <a href="{{ link.url }}" target="_blank" rel="noopener noreferrer">
        <img
          class="link-icon"
          src="{{ link.icon | prepend: '/assets/img/links/' | relative_url }}"
          alt=""
          loading="lazy"
        >
        <span class="link-text">
          <span class="link-name">{{ link.name }}</span>
          <span class="link-description">{{ link.description }}</span>
        </span>
      </a>
    </li>
  {% endfor %}
</ul>
