# AGENTS.md

## Project purpose

This public repository contains the Quarto website for the Japan QCA Conference 2026 and is intended to support future public QCA research resources.

The source repository is public. Changes to GitHub Pages, repository visibility, organization settings, remotes, branches, or other publication settings still require explicit user authorization.

## Read first

Before making changes:

1. Read `README.md`.
2. Check the repository structure and current Git status.
3. Preserve unrelated user changes.
4. State a short implementation plan when a task affects multiple files.

Do not invent missing conference information. Use `TBA` or “In preparation” unless an approved source provides the fact.

## Technology

- Use Quarto Website as the primary framework.
- Prefer Markdown/QMD, YAML, and small amounts of organized CSS.
- Keep the project compatible with RStudio and the Quarto CLI.
- Avoid adding R, Python, Node.js, database, JavaScript-framework, or server-side dependencies unless explicitly approved.
- Keep JavaScript minimal and limited to approved static-site behavior.
- Do not add analytics, advertising, external tracking, cookies, or custom form processing.

## Build and verification

After changing site files, use:

```bash
quarto check
quarto render
```

For interactive local review:

```bash
quarto preview
```

Report whether rendering succeeded. Check navigation, local links, form URLs, mobile readability, and unintended placeholders. Do not claim browser or visual testing that was not actually performed.

## Content and design

The public website is in English. Expected sections are:

- Home
- About
- Programme
- Venue & Access
- Call for Papers
- Organizers
- QCA Bibliography
- Contact

Use a restrained academic-conference design with accessible contrast, readable typography, clear navigation, mobile support, and fast static pages. Do not describe AI-generated illustrations as documentary photographs or exact depictions of a place.

## Privacy and public-repository safety

The approved public conference contact address is `jqca2026@gmail.com`.

Never commit or expose:

- participant or mailing lists;
- private or billing email addresses;
- phone numbers or private contact details;
- unpublished submissions, abstracts, or papers;
- internal budgets, grant-administration documents, or meeting notes;
- credentials, tokens, passwords, secrets, private keys, or environment files;
- unapproved photos, logos, maps, or documents;
- local review attachments or machine-specific paths.

The `.codex-remote-attachments/` directory and locally retained internal workflow documents are not public source files and must remain untracked.

Proposal submission must continue to use the approved external Google Forms. Do not embed the forms or create local storage for personal data.

## Assets

Only assets approved for public use belong in tracked source. Preserve provenance and attribution where relevant, optimize images for the web, and provide meaningful alternative text.

## Git behavior

- Review `git diff` before committing.
- Do not commit generated output, caches, local attachments, or secrets.
- Do not force-push, rewrite history, delete branches, or change remotes unless explicitly authorized.
- Do not commit or push unless explicitly requested or approved through the action-confirmation flow.
- Obtain separate explicit approval before enabling or changing GitHub Pages or other publication settings.
- Keep the Private archive repository separate from the public website repository.

## Definition of done

A task is complete only when:

- the requested content or functionality is implemented;
- `quarto render` succeeds, or a blocking error is clearly reported;
- no conference facts were invented;
- no private information or internal review material was added;
- changed files and remaining placeholders are summarized; and
- external GitHub changes occurred only with the required authorization.
