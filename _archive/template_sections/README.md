# Archived Template Sections

This folder stores al-folio template sections that are not part of the current
public site. Keeping them here makes the live site only expose About and
Publications while preserving the examples for later reuse.

To restore a section:

1. Move the relevant page, collection, data, and asset files back to their
   original paths.
2. Re-enable any needed collection output or feature flags in `_config.yml`.
3. Re-enable search entries only for sections that should be public.
4. Build the site and confirm the intended routes appear in `_site/`.

The current public site intentionally keeps only `_pages/about.md`,
`_pages/publications.md`, `_pages/404.md`, `_bibliography/papers.bib`, `_news/`,
and the assets those pages use.
