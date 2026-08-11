# Japan QCA Conference 2026 Website

This repository contains the source files for the official website of the **Japan QCA Conference 2026**, held at Waseda University in Tokyo on 30–31 October 2026.

## Purpose

The website provides prospective participants and presenters with clear access to:

- the conference overview;
- the programme and keynote information;
- the venue and access guidance;
- the calls for the Paper Development Workshop and Expert Workshop;
- submission links and key dates;
- organizer and committee information; and
- conference contact details.

The site is also structured to support future publication of a QCA bibliography and other research resources.

## Website sections

- Home
- About
- Programme
- Venue & Access
- Call for Papers
- Organizers
- QCA Bibliography
- Contact

## Technical structure

- [Quarto Website](https://quarto.org/docs/websites/) for static-site generation
- Markdown/QMD source files for page content
- A small, organized custom stylesheet in `styles.css`
- Minimal JavaScript in `hero-rotation.js` to alternate the two approved header designs
- External Google Forms for proposal submission; no forms are embedded in the site
- No analytics, advertising, external tracking, database, Node.js dependency, or server-side application

The project can be opened in RStudio with `qca-conference-website.Rproj`. It does not require R code or R packages to render.

To preview the website locally:

```bash
quarto preview
```

To build the complete static website:

```bash
quarto render
```

## Design and workflow references

The site was implemented independently in Quarto, with the following resources used as references for academic-site workflow and conference information architecture:

- [Gary King, “Build Your Academic Website in 15 Minutes”](https://gking.harvard.edu/mysite/)
- [Mike Pierce, Conference Website Template](https://mikepierce.github.io/conference-website-template/)
- [Mike Pierce, conference-website-template repository](https://github.com/mikepierce/conference-website-template)

The Mike Pierce template is licensed under GPL-3.0. Its source code was not copied into this project; only its general information architecture was considered when creating this independent Quarto implementation.
