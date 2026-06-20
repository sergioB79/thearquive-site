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
    }
  ]
};
