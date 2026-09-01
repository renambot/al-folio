---
layout: page
permalink: /applications/
title: applications
description: Data science applications running in the Arcade.
nav: true
nav_order: 3
---

<ul class="app-grid">
  {% for app in site.data.applications %}
    <li class="app-card">
      <a
        class="app-thumb-link"
        href="{{ app.url }}"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="{{ app.name }}"
      >
        <img
          class="app-thumb"
          src="{{ app.thumb | prepend: '/assets/img/apps/' | relative_url }}"
          alt="{{ app.name }} thumbnail"
          loading="lazy"
        >
      </a>
      <div class="app-body">
        <h3 class="app-name">
          <a href="{{ app.url }}" target="_blank" rel="noopener noreferrer">{{ app.name }}</a>
        </h3>
        <p class="app-description">{{ app.description }}</p>
        <p class="app-link">
          Link:
          <a href="{{ app.url }}" target="_blank" rel="noopener noreferrer">
            {{ app.link_text | default: app.url }}
          </a>
        </p>
        {% if app.cite %}
          <p class="app-cite">
            {% if app.cite_url %}
              <a href="{{ app.cite_url }}" target="_blank" rel="noopener noreferrer">{{ app.cite }}</a>
            {% else %}
              {{ app.cite }}
            {% endif %}
          </p>
        {% endif %}
      </div>
    </li>
  {% endfor %}
</ul>
