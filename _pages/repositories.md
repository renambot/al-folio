---
layout: page
permalink: /repositories/
title: repositories
description: Github repositories.
nav: true
nav_order: 5
---

{% if site.data.repositories.github_repos %}

## GitHub Repositories

<div class="repositories d-flex flex-wrap flex-md-row flex-column justify-content-between align-items-center">
  {% for repo in site.data.repositories.github_repos %}
    {% include repository/repo.liquid repository=repo %}
  {% endfor %}
  {% for repo in site.data.repositories.private_repos %}
    {% include repository/repo.liquid repository=repo private=true %}
  {% endfor %}
</div>
{% endif %}

<!-- Fills the cards above with live GitHub metadata; they render fine without it. -->
<script defer src="{{ '/assets/js/repo_cards.js' | relative_url | bust_file_cache }}"></script>
