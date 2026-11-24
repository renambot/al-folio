---
layout: about
title: about
permalink: /
social: false

hero:
  image: assets/img/arcade3-1400.webp
  alt: A presenter at the Arcade's LED wall, with students at the tables in front of it
  title: The Arcade at UIC
  subtitle: A visual data science space for AI, VR and large-scale visualization
  intro: The Arcade is a visual data science space in UIC's new Computer Design Research and Learning Center (CDRLC), 850 W Taylor St, Building 649, Room 1219. It opened in Summer 2025.
  stats:
    - value: 3 AI servers
      label: 12 NVIDIA GPUs
      text: H100 and H200 GPUs to train machine learning code and run large LLMs locally.
    - value: 4.4B
      label: LLM tokens a month
      text: Served to engineering researchers and CS students.
    - value: 100G
      label: Network
      text: Core and research network linking the wall, the rendering servers and the AI servers.
    - value: 6720 × 1890
      label: LED wall
      text: A 26 ft × 6 ft direct-view LED wall for collaborative work, visualization and VR.
  credit: An Electronic Visualization Laboratory (EVL) space, part of the Data Observation and Computation Collaboratory (DOCC), funded by an NSF MRI award.

announcements:
  enabled: true # includes a list of news items
  scrollable: true # adds a vertical scroll bar if there are more than 3 news items
  limit: 5 # leave blank to include all the news in the `_news` folder

latest_posts:
  enabled: false
  scrollable: true # adds a vertical scroll bar if there are more than 3 new posts items
  limit: 3 # leave blank to include all the blog posts
---


<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/cdrlc-800.webp" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/floorplan-800.webp" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    CDRLC outside view (June 2025) and Main floor
</div>
