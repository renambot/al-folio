---
layout: post
title: A first month of intensive LLM use
date: 2026-11-23
related_posts: true
tags: [ai, research]
image: "assets/img/llm-usage-800.webp"
---

Over its first month, the LLM infrastructure of the Arcade has seen intensive use. Most of the traffic comes from Prof. Miranda's urban analytics group,
followed by CS students who study and experiment with large language models.

All requests go through a single gateway. It serves open-weight models running locally on our own GPU servers,
and it also routes requests to commercial models, so users get one endpoint and one API key for both.

Between October 24 and November 23, the gateway handled:

- **613,501 requests**, with a 96.4% success rate
- **4.4 billion tokens**
- an average latency of 21.8 seconds per request, typical of long, batch-style jobs

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/llm-usage-800.webp" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    One month of usage: daily tokens by model, and the top models.
</div>

### Local models carry most of the load

About 78% of all tokens (3.4 billion) were processed by models running on our own servers:

- Qwen3.8-27B: 1 billion tokens (22.7%)
- Gemma 4: 992 million tokens (22.5%)
- Muse Glimmer: 978 million tokens (22.2%)
- DeepSeek-V4.1-Flash: 480 million tokens (10.9%)
- Llama 4 (NVIDIA NIM): 3.5 million tokens

Running these models locally means no per-token cost, and the data stays on campus.

### Commercial models, routed through our infrastructure

The remaining 22% went to commercial models from Anthropic, routed through the same gateway:

- Claude Haiku 5.5: 804 million tokens (18.3%)
- Claude Opus 5.5: 142 million tokens (3.2%)
- Claude Fable 5.1 and Claude Haiku 4.5: a few test requests

Usage comes in bursts, with peaks of over a billion tokens a day around November 5-6 and November 17.

### How people use it

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="lazy" path="assets/img/llm-agents-800.webp" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Daily requests by client, from each request's User-Agent.
</div>

Most of the traffic is programmatic: scripts using the OpenAI SDK account for 3.5 billion tokens (79%),
and plain Python clients for another 879 million (20%). Coding agents also connect to the gateway:
OpenCode (51 million tokens), Claude Code, GitHub Copilot Chat and pi, along with LangChain applications.
