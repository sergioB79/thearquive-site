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
    }
  ]
};
