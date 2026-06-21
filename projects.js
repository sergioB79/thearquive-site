window.archiveData = {
  meta: {
    updated: "21.06.2026",
    identity: "Not a portfolio. An archive of direction."
  },
  categories: [
    "All",
    "Editorial",
    "Software",
    "Research",
    "Trading Systems",
    "Creative Tools",
    "Experiments",
    "Unreleased"
  ],
  statuses: [
    "All",
    "Active",
    "In Development",
    "Prototype",
    "Paused",
    "Archived",
    "Public",
    "Private"
  ],
  projects: [
    {
      number: "01",
      title: "AUTOTRADE-BASE",
      category: "Trading Systems",
      status: "In Development",
      visibility: "Private",
      year: "2026",
      fileCode: "TS-001",
      description:
        "A local TradingView signal router that receives webhook payloads, exposes a built-in dashboard, and forwards signals into MT4/MT5 execution environments over TCP.",
      editorial:
        "Documented as a working infrastructure base: one Node process, one embedded dashboard, one EA bridge, and local state on disk.",
      links: [
        { label: "Open dossier", url: "./dossiers/1-autotrade-base.html" },
        { label: "Read notes", url: "./dossiers/1-autotrade-base.html#notes" }
      ]
    },
    {
      number: "02",
      title: "Neat MA Panel",
      category: "Trading Systems",
      status: "In Development",
      visibility: "Private",
      year: "2026",
      fileCode: "TS-002",
      description:
        "A TradingView Pine Script overlay indicator organized around regime analysis, EMA channel relationships, Fair Value Gaps, alerts, and a compact on-chart state panel.",
      editorial:
        "Documented as a signal-reading instrument with two preserved states: the original v5.0 release and a codex-tracked v5.1 branch with macro, session, stop, and volatility extensions.",
      links: [
        { label: "Open dossier", url: "./dossiers/2-neat-ma-panel.html" },
        { label: "Read notes", url: "./dossiers/2-neat-ma-panel.html#notes" }
      ]
    },
    {
      number: "03",
      title: "AI-CONVO-NET",
      category: "Research",
      status: "In Development",
      visibility: "Private",
      year: "2026",
      fileCode: "RS-003",
      description:
        "A multi-source conversation corpus project that aggregates exports from OpenAI, Claude, and Gemini, then parses, classifies, and indexes them into a local analysis pipeline.",
      editorial:
        "Documented as a research dataset and processing system rather than a product surface: raw input archives, intermediate JSON layers, classification batches, and a local Chroma vector store.",
      links: [
        { label: "Open dossier", url: "./dossiers/3-ai-convo-net.html" },
        { label: "Read notes", url: "./dossiers/3-ai-convo-net.html#notes" }
      ]
    },
    {
      number: "04",
      title: "cliTesStableDiffusion",
      category: "Creative Tools",
      status: "In Development",
      visibility: "Private",
      year: "2026",
      fileCode: "CT-004",
      description:
        "A local Python bridge that turns Stable Diffusion generation into a command-line and trigger-based workflow, then publishes results into Reflect notes and optionally Google Drive.",
      editorial:
        "Documented as an orchestration tool rather than a model repository: local SD API client, watcher and trigger flows, a tiny image server, and service credentials around the edges.",
      links: [
        { label: "Open dossier", url: "./dossiers/4-clites-stable-diffusion.html" },
        { label: "Read notes", url: "./dossiers/4-clites-stable-diffusion.html#notes" }
      ]
    },
    {
      number: "05",
      title: "DeepSeek Daily FX ReportAnalizer",
      category: "Research",
      status: "In Development",
      visibility: "Private",
      year: "2026",
      fileCode: "RS-005",
      description:
        "A compact local toolset for testing DeepSeek API access and generating structured daily FX and macro reports from a fixed strategist-grade prompt.",
      editorial:
        "Documented as a report-generation microstack: a small localhost key tester, a direct Python report writer, stored output reports, and a sensitive environment layer around the API key.",
      links: [
        { label: "Open dossier", url: "./dossiers/5-deepseek-daily-fx-reportanalizer.html" },
        { label: "Read notes", url: "./dossiers/5-deepseek-daily-fx-reportanalizer.html#notes" }
      ]
    },
    {
      number: "06",
      title: "forexStudySystem",
      category: "Trading Systems",
      status: "In Development",
      visibility: "Private",
      year: "2026",
      fileCode: "TS-006",
      description:
        "A modular forex research workspace built as a Next.js application with dashboard, per-asset study dossiers, cached market/news routes, and local-first note persistence.",
      editorial:
        "Documented as a serious prototype with a real application surface already in place, but still carrying scaffold residue, local persistence, and heavy build/install artifacts inside the copied folder.",
      links: [
        { label: "Open dossier", url: "./dossiers/6-forex-study-system.html" },
        { label: "Read notes", url: "./dossiers/6-forex-study-system.html#notes" }
      ]
    },
    {
      number: "07",
      title: "GeoStats",
      category: "Research",
      status: "In Development",
      visibility: "Private",
      year: "2026",
      fileCode: "RS-007",
      description:
        "A local OSINT and macro-intelligence dashboard forked from Crucix, redesigned as a full-screen Wallpaper Engine terminal with live sweeps, SSE updates, and a locked viewport HUD.",
      editorial:
        "Documented as a frontend-heavy fork over an existing intelligence engine: the source pipeline stays Crucix, while the visible work focuses on dashboard redesign, ambient display behavior, and local operational packaging.",
      links: [
        { label: "Open dossier", url: "./dossiers/7-geostats.html" },
        { label: "Read notes", url: "./dossiers/7-geostats.html#notes" }
      ]
    },
    {
      number: "08",
      title: "Graffkit",
      category: "Creative Tools",
      status: "In Development",
      visibility: "Private",
      year: "2026",
      fileCode: "CT-008",
      description:
        "A Next.js graffiti image generator that converts structured UI choices into a branded OpenAI image prompt, then renders a generated mural preview without asking the user to write prompts.",
      editorial:
        "Documented as a narrow but coherent image-generation product: one polished landing surface, one prompt builder, one generation route, and a strong product voice around fast visual creation.",
      links: [
        { label: "Open dossier", url: "./dossiers/8-graffkit.html" },
        { label: "Read notes", url: "./dossiers/8-graffkit.html#notes" }
      ]
    },
    {
      number: "09",
      title: "MAs-MachineLearning",
      category: "Trading Systems",
      status: "Prototype",
      visibility: "Private",
      year: "2026",
      fileCode: "TS-009",
      description:
        "A lightweight quant-validation scaffold for streaming TradingView webhook data into a VPS, securing the ingress layer, and preparing a future model-driven moving-average evaluation pipeline.",
      editorial:
        "Documented as an early infrastructure sketch with one real implementation surface already present: the webhook listener exists, but the optimization, storage, reporting, and GitHub Pages publishing layers are still mostly described rather than built.",
      links: [
        { label: "Open dossier", url: "./dossiers/9-mas-machinelearning.html" },
        { label: "Read notes", url: "./dossiers/9-mas-machinelearning.html#notes" }
      ]
    },
    {
      number: "10",
      title: "networkScanner",
      category: "Software",
      status: "Prototype",
      visibility: "Private",
      year: "2025",
      fileCode: "SW-010",
      description:
        "A compact PowerShell network-scanning utility for local subnets, built through several script iterations to find live hosts quickly, resolve hostnames, and export timestamped CSV results.",
      editorial:
        "Documented as a practical systems utility rather than a broad platform: multiple versions of the same scanner logic exist, successful output files are present, and the folder shows hands-on iteration more than formal productization.",
      links: [
        { label: "Open dossier", url: "./dossiers/10-network-scanner.html" },
        { label: "Read notes", url: "./dossiers/10-network-scanner.html#notes" }
      ]
    },
    {
      number: "11",
      title: "Café Custos",
      category: "Editorial",
      status: "In Development",
      visibility: "Public",
      year: "2026",
      fileCode: "ED-011",
      description:
        "A two-page Portuguese editorial microsite about habitual coffee spending, combining a magazine-style longform landing page with an interactive cost calculator.",
      editorial:
        "Documented as a hybrid publication object: not just an article and not just a calculator, but an argument staged first through editorial persuasion and then through a numerical self-audit.",
      links: [
        { label: "Open dossier", url: "./dossiers/11-cafe-custos.html" },
        { label: "Read notes", url: "./dossiers/11-cafe-custos.html#notes" }
      ]
    },
    {
      number: "12",
      title: "colorcombo",
      category: "Creative Tools",
      status: "Prototype",
      visibility: "Private",
      year: "2026",
      fileCode: "CT-012",
      description:
        "A single-file browser utility that generates five-color random palettes and exports them as HEX, TXT, JSON, or HTML snippets.",
      editorial:
        "Documented as a minimal utility prototype: one HTML file, no dependencies, immediate usefulness, and no surrounding product layer.",
      links: [
        { label: "Open dossier", url: "./dossiers/12-colorcombo.html" },
        { label: "Read notes", url: "./dossiers/12-colorcombo.html#notes" }
      ]
    },
    {
      number: "13",
      title: "(Im)Probable",
      category: "Editorial",
      status: "In Development",
      visibility: "Public",
      year: "2026",
      fileCode: "ED-013",
      description:
        "A future-facing publication archive signed by Ash Orrn, combining a client-rendered editorial front end with generated static share pages for every dispatch and About route.",
      editorial:
        "Documented as the largest and most structurally complete publication object in the archive so far: editorial worldbuilding, content parsing, route handling, metadata generation, analytics, and deployment conventions are all already in place.",
      links: [
        { label: "Open dossier", url: "./dossiers/13-improbable.html" },
        { label: "Read notes", url: "./dossiers/13-improbable.html#notes" }
      ]
    },
    {
      number: "14",
      title: "(IN)CONTINUIDADE",
      category: "Research",
      status: "Archived",
      visibility: "Public",
      year: "2025",
      fileCode: "RS-014",
      description:
        "A documentary microsite about a prolonged Vodafone service interruption in Portugal, built as a factual timeline with legal framing, service-state comparisons, and supporting document slots.",
      editorial:
        "Documented as a case-record publication rather than a generic complaint page: the rhetoric is controlled, the chronology is explicit, and the project is designed to preserve facts after the case is effectively closed.",
      links: [
        { label: "Open dossier", url: "./dossiers/14-incontinuidade.html" },
        { label: "Read notes", url: "./dossiers/14-incontinuidade.html#notes" }
      ]
    },
    {
      number: "15",
      title: "openinterpreter",
      category: "Experiments",
      status: "Prototype",
      visibility: "Private",
      year: "2026",
      fileCode: "EX-015",
      description:
        "A copied Python virtual environment built around Open Interpreter, preserving a local agent runtime with CLI entry points and a dense stack of AI, notebook, and utility dependencies.",
      editorial:
        "Documented as an environment snapshot rather than a product codebase: the authored work here is the assembled toolchain itself, not an application surface or deployable interface.",
      links: [
        { label: "Open dossier", url: "./dossiers/15-openinterpreter.html" },
        { label: "Read notes", url: "./dossiers/15-openinterpreter.html#notes" }
      ]
    },
    {
      number: "16",
      title: "poisson_V2",
      category: "Trading Systems",
      status: "In Development",
      visibility: "Private",
      year: "2026",
      fileCode: "TS-016",
      description:
        "A local multi-asset MT5 research pipeline that backtests intraday range breaks, computes Poisson confirmation metrics, ranks setups by direction, and generates Portuguese daily reports for email distribution.",
      editorial:
        "Documented as a working decision engine rather than a public product: data ingestion, statistical processing, output ranking, and AI-assisted delivery are already connected into one private daily workflow.",
      links: [
        { label: "Open dossier", url: "./dossiers/16-poisson-v2.html" },
        { label: "Read notes", url: "./dossiers/16-poisson-v2.html#notes" }
      ]
    }
  ]
};
