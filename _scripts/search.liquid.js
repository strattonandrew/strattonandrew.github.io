---
permalink: /assets/js/search-data.js
---
// get the ninja-keys element
const ninja = document.querySelector("ninja-keys");

// Keep global search limited to public top-level sections. Publication-level
// search stays on the Publications page through bib_search.
ninja.data = [
  {%- assign sorted_pages = site.pages | sort: "nav_order" -%}
  {%- for p in sorted_pages -%}
    {%- if p.permalink == "/" or p.permalink == "/publications/" -%}
      {
        {%- assign title = p.title | escape | strip -%}
        {%- if p.permalink == "/" -%}
          {%- assign url = "/" -%}
        {%- else -%}
          {%- assign url = p.url -%}
        {%- endif -%}
        id: "nav-{{ title | slugify }}",
        title: "{{ title | truncatewords: 13 }}",
        description: "{{ p.description | strip_html | strip_newlines | escape | strip }}",
        section: "Navigation",
        handler: () => {
          window.location.href = "{{ url | relative_url }}";
        },
      },
    {%- endif -%}
  {%- endfor -%}
];
