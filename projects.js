window.archiveData = {
  meta: {
    updated: "20.06.2026",
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
    }
  ]
};
