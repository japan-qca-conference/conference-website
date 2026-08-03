# AGENTS.md

## Project purpose

This repository contains a Quarto website for a small academic conference and a future QCA research-resource hub.

The site is currently in a private draft phase. Do not publish it, enable GitHub Pages, change repository visibility, push to a remote, open a pull request, or alter organization settings unless the user explicitly asks.

## Read first

Before making changes:

1. Read `README.md`.
2. Read `PROJECT_BRIEF.md`.
3. Check the existing repository structure and current Git status.
4. State a short implementation plan before editing when the task affects multiple files.

Do not invent missing conference information. Use `TBA`, `準備中`, or an existing explicit placeholder.

## Technology

- Use Quarto Website as the primary framework.
- Prefer Markdown/QMD, YAML, and small amounts of CSS.
- Keep the project compatible with RStudio and the Quarto CLI.
- Avoid Hugo, Jekyll, Node.js, npm packages, JavaScript frameworks, databases, or server-side code unless the user explicitly approves them.
- Do not add R or Python dependencies unless they are required by an approved feature.
- If R dependencies become necessary, propose `renv` before adding packages.

## Build and verification

Use these commands where available:

```bash
quarto check
quarto render
```

For interactive local review:

```bash
quarto preview
```

After modifying site files:

1. Run `quarto render`.
2. Report whether it succeeded.
3. Check navigation and obvious broken local links.
4. Summarize changed files.
5. Report unresolved placeholders or assumptions.
6. Do not claim visual or browser testing that was not actually performed.

## Content and information architecture

Expected sections may include:

- Home
- About
- Program
- Venue & Access
- Registration
- Organizers
- QCA Bibliography
- Contact

The initial site may contain placeholders. Do not fabricate dates, venues, names, affiliations, email addresses, funders, registration links, or program details.

Japanese is the primary language unless instructed otherwise. Structure content so that an English version can be added later without a complete redesign.

## Design standards

Create a professional, restrained academic-conference design.

Priorities:

1. Clear event date, location, and registration status
2. Easy navigation
3. Mobile readability
4. Accessible typography and contrast
5. Fast static pages
6. Consistent headings, spacing, buttons, tables, and callouts

Avoid:

- excessive animation
- decorative effects that reduce readability
- autoplay media
- unnecessary external fonts or scripts
- tracking scripts or analytics
- cookie banners unless an approved feature actually requires them
- large unoptimized images
- generic corporate or commercial styling

Use the following sites as functional and visual references, not as code to copy:

- https://gking.harvard.edu/mysite/
- https://mikepierce.github.io/conference-website-template/
- https://github.com/mikepierce/conference-website-template

The Mike Pierce repository is GPL-3.0 and uses plain HTML/CSS. Do not copy its source code into this project. Reimplement any useful information architecture or layout independently in Quarto.

## Privacy and security

Never commit or expose:

- participant lists
- personal email lists
- phone numbers
- internal budgets
- grant administration documents
- private meeting notes
- unpublished submissions or abstracts
- credentials, tokens, passwords, or secrets
- unapproved photos, logos, or documents

Registration should normally link to an approved Google Form or university form. Do not create custom collection or storage of personal data.

Do not expose a personal email address on the public site unless its publication has been explicitly approved.

## Dropbox and GitHub boundaries

GitHub is the source of truth for website source files.

Dropbox may contain source materials and approved content, but do not move the `.git` directory into Dropbox and do not configure automated two-way synchronization between the repository and Dropbox without explicit approval.

When importing Dropbox materials:

1. Treat `01_Content_Input` as unapproved.
2. Use only content clearly marked as approved or confirmed by the user.
3. Copy only required public assets into the repository.
4. Preserve source attribution and file provenance when relevant.
5. Do not commit hidden metadata or unrelated documents.

## Git behavior

- Make focused changes.
- Preserve unrelated user edits.
- Review `git diff` before proposing a commit.
- Do not force-push, rewrite history, delete branches, or change remotes.
- Do not commit generated, temporary, cache, or secret files.
- Do not commit or push unless explicitly requested.
- When asked to commit, use a clear, descriptive commit message.
- When asked to publish, pause and verify the publication checklist in `README.md`.

## Definition of done

A task is complete only when:

- requested content or functionality is implemented
- `quarto render` succeeds, or the blocking error is clearly reported
- no conference facts were invented
- no private information was added
- changed files are summarized
- any remaining decisions or placeholders are listed
- publication did not occur without explicit authorization
