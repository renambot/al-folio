---
layout: post
title: First GPU SuperServer for DOCC
date: 2024-02-01
related_posts: true
---

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/server-800.webp" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Dell HGX GPU SuperServer
</div>

Early 2024, we ordered our first GPU SuperServer for the Data Observation and Computation Collaboratory (DOCC) project. This server will be used to run AI/ML applications, data analytics, simulations, and visualization tasks. It contains 4 Nvidia H100 in SXM form-factor. It was delivered this Frebruary. The specifications of the server are as follows:

- PowerEdge XE8640
- Intel Xeon Platinum 8468 2.1G, 48C/96T, 16GT/s, 105M Cache, Turbo,
    - HT (350W) DDR5-4800
- 64GB RDIMM * 16: 1TB RAM
- 3.84TB Enterprise NVMe SSD
- BOSS-N1 controller card +with 2M2. 480GB (RAID 1)
- Fully Redundant 3+1 (or 2+2 FTR), Hot-Plug PSU, 2800W
    - M HLAC (200-240Vac) Titanium, C2 Connector
- NVIDIA HGX H100 4-GPU SXM 80GB HBM3 700W GPU Assembly
- Broadcom 57414 Dual Port 10/25GbE SFP28 Adapter, PCle Ful Height, V2
- Broadcom 5720 Dual Port 1GbE Optional LOM
- Nvidia ConnectX-6 Dual Port 10 GbE QSFP56 Adapter, OCP 3.0

