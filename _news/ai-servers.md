---
layout: post
title: Two new AI servers in production
date: 2026-11-16
related_posts: true
tags: [ai, hardware, research]
image: "assets/img/xe7745-800.webp"
---

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/xe7745-800.webp" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Dell PowerEdge XE7745 (image: Dell)
</div>

The EVL/CS server room at UIC went through a long renovation to bring in more cooling and more power.
Now that it is done, we have put two new Dell PowerEdge XE7745 AI servers into production: **ARCADE AI 01** and **ARCADE AI 02**.
They join the first [GPU SuperServer]({{ '/news/gpu1/' | relative_url }}) in the rack.

The servers will run machine learning models and deliver powerful LLMs locally, on our own hardware,
for the users of the Arcade and the DOCC project.

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/ai-servers-800.webp" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    The two new Dell AI servers (bottom) in the renovated EVL/CS server room.
</div>

Both servers have the same hardware. Together they provide eight NVIDIA H200 NVL GPUs and over 1.1 TB of GPU memory.
The specifications of each server are as follows:

- Dell PowerEdge XE7745
- 2 x AMD EPYC 9555 64-core processors: 128 cores, 256 threads
- 1.1 TiB RAM
- 4 x NVIDIA H200 NVL GPUs, 141 GB HBM3e each (600 W)
- 3.84 TB Dell DC NVMe SSD (E3.S)
- Dell BOSS-N1 boot card, 480 GB
- Nvidia ConnectX-7 InfiniBand adapter
- Nvidia ConnectX-6 Dx dual-port Ethernet adapter
- Broadcom BCM57608 quad-port Ethernet adapter, up to 400 Gb
- Ubuntu 26.04.1 LTS, NVIDIA driver 615.71, CUDA 13.4

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="lazy" path="assets/img/ai-servers-monitor-800.webp" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Monitoring the servers: one week of CPU, memory, GPU, network and disk activity on ARCADE AI 02.
</div>
