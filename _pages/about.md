---
layout: about
permalink: /
title: "SMILE Robotics Lab"
subtitle: "Soft Modular Intelligent Learning Embodied Robotics"
description: "We design soft and modular robots powered by embodied intelligence and learning."

profile:
  align: right
  image: hero/smile.gif          # put the file at assets/img/hero/smile.gif
  image_circular: false
  more_info:
news: false
social: false
---

<section class="hero-smile">
  <div class="hero-left">
    <h1 class="hero-title">SMILE Robotics Lab</h1>
    <p class="hero-sub"><em>Soft Modular Intelligent Learning Embodied Robotics</em></p>
    <p class="hero-desc">
      We develop <strong>soft modular robots</strong> and <strong>embodied AI methods</strong>
      that enable adaptive, cooperative, and reconfigurable robotic systems.
    </p>

    <p class="hero-links">
      <a class="btn btn-sm btn-primary" style="background:#F66733;border-color:#F66733"
         href="/projects/">Research</a>
      <a class="btn btn-sm btn-outline-secondary" href="/people/">People</a>
      <a class="btn btn-sm btn-outline-secondary" href="/publications/">Publications</a>
      <a class="btn btn-sm btn-outline-secondary" href="/join/">Join Us</a>
      <a class="btn btn-sm btn-outline-secondary" href="https://github.com/smile-robotics-lab" target="_blank">GitHub</a>
      <a class="btn btn-sm btn-outline-secondary" href="https://youtube.com" target="_blank">YouTube</a>
    </p>
  </div>

  <div class="hero-right">
    <img src="{{ site.baseurl }}/assets/img/hero/smile.gif" alt="SMILE modules forming letters" loading="lazy"/>
  </div>
</section>

<style>
  :root {
    --accent:#F66733;
    --text:#111;
    --muted:#666;
  }

  .hero-smile {
    display:grid;
    grid-template-columns: 1fr minmax(320px,520px);
    gap:2.5rem;
    align-items:center;
    margin-top:1.4rem;
  }
  .hero-left { max-width:44rem; }
  .hero-title {
    font-weight:800;
    font-size:2.4rem;
    line-height:1.1;
    margin-bottom:0.3rem;
  }
  .hero-sub {
    color:var(--accent);
    font-size:1.1rem;
    margin:0 0 1rem 0;
  }
  .hero-desc {
    color:var(--muted);
    font-size:1.05rem;
    margin-bottom:1.6rem;
    max-width:36rem;
  }
  .hero-links .btn { margin-right:.4rem; }
  .hero-right img {
    width:100%;
    border-radius:12px;
    box-shadow:0 8px 28px rgba(0,0,0,.18);
  }
  @media (max-width:860px){
    .hero-smile { grid-template-columns:1fr; }
    .hero-right { order:-1; margin-bottom:1rem; }
  }
</style>
