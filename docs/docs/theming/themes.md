---
title: Explore Themes
description: Themes are collections of design tokens that thread through every Web Awesome component and pattern.
layout: page
wide: true
---

<style>
  .title {
    display: none;
  }
  iframe {
    width: 100%;
    min-height: 16lh;
    height: 70vh;
    max-height: 40lh;
  }
</style>

<div class="wa-stack">
  <div class="wa-split">
    <h1>{{ title }}</h1>
    <wa-button>
      Create Your Own
      <wa-icon slot="suffix" name="arrow-right"></wa-icon>
    </wa-button>
  </div>
  {{ description }}
  <iframe ref="preview" src='/docs/theming/showcase' id="showcase"></iframe>
</div>