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
    },
    {
      number: "17",
      title: "Chemtrails — The Complete Picture",
      category: "Research",
      status: "Archived",
      visibility: "Public",
      year: "2026",
      fileCode: "RS-017",
      description:
        "A single-file research microsite that rebuts the chemtrail conspiracy through atmospheric science, equation-backed explanation, image analysis, and explicit source framing.",
      editorial:
        "Documented as a finished argument surface: one HTML page, one rhetorical sequence, one clear verdict, and enough design structure to feel like a publication rather than a note.",
      links: [
        { label: "Open dossier", url: "./dossiers/17-chemtrails-complete-picture.html" },
        { label: "Read notes", url: "./dossiers/17-chemtrails-complete-picture.html#notes" }
      ]
    },
    {
      number: "18",
      title: "Structured AI Workflows",
      category: "Editorial",
      status: "In Development",
      visibility: "Public",
      year: "2026",
      fileCode: "ED-018",
      description:
        "A versioned technical playbook that turns Claude Code usage into a formal operating system for setup, permissions, MCP, automation, team practice, and verification.",
      editorial:
        "Documented as an editorial infrastructure guide: more doctrine than tutorial, with the page itself acting as a durable operating manual for AI-assisted development.",
      links: [
        { label: "Open dossier", url: "./dossiers/18-structured-ai-workflows.html" },
        { label: "Read notes", url: "./dossiers/18-structured-ai-workflows.html#notes" }
      ]
    },
    {
      number: "19",
      title: "5dotLineGame",
      category: "Experiments",
      status: "Paused",
      visibility: "Private",
      year: "2026",
      fileCode: "EX-019",
      description:
        "A Create React App game scaffold for a five-dot line concept, preserving package tooling and dependency installation but not the authored gameplay source itself.",
      editorial:
        "Documented as an interrupted setup rather than a playable build: the archive keeps the scaffolding, the intent, and the dependency footprint, but not the actual game logic.",
      links: [
        { label: "Open dossier", url: "./dossiers/19-5dotlinegame.html" },
        { label: "Read notes", url: "./dossiers/19-5dotlinegame.html#notes" }
      ]
    },
    {
      number: "20",
      title: "TheMATRIXfx / Daily Setup Finder Site",
      category: "Trading Systems",
      status: "In Development",
      visibility: "Private",
      year: "2026",
      fileCode: "TS-020",
      description:
        "A Next.js market-brief publication system that ingests daily markdown reports from Google Drive, stores historical snapshots, caches the latest output, and exposes free and premium trading surfaces.",
      editorial:
        "Documented as a serious pipeline product rather than a static site: ingestion, validation, persistence, caching, and premium presentation are already wired together into one trading publication system.",
      links: [
        { label: "Open dossier", url: "./dossiers/20-thematrixfx-daily-setup-finder.html" },
        { label: "Read notes", url: "./dossiers/20-thematrixfx-daily-setup-finder.html#notes" }
      ]
    },
    {
      number: "21",
      title: "AI Comparison Study",
      category: "Research",
      status: "Archived",
      visibility: "Public",
      year: "2026",
      fileCode: "RS-021",
      description:
        "A static comparative AI model study presented as a designed publication page, with a minimal Vercel counter API and supporting research assets around it.",
      editorial:
        "Documented as a finished publication object: one designed essay surface, one tiny serverless accessory, and a preserved source document behind the web-facing analysis.",
      links: [
        { label: "Open dossier", url: "./dossiers/21-ai-models-comparison-study.html" },
        { label: "Read notes", url: "./dossiers/21-ai-models-comparison-study.html#notes" }
      ]
    },
    {
      number: "22",
      title: "AI-ChatHub",
      category: "Software",
      status: "In Development",
      visibility: "Private",
      year: "2026",
      fileCode: "SW-022",
      description:
        "A multi-provider AI chat client built with Vite, React, TypeScript, and Tauri, designed to manage model choice, attachments, history, pricing, and side-by-side comparison from one interface.",
      editorial:
        "Documented as an operator tool with real application depth already present: runtime abstraction, provider routing, conversation state, cost visibility, and compare workflows all point to a practical local control surface.",
      links: [
        { label: "Open dossier", url: "./dossiers/22-ai-chathub.html" },
        { label: "Read notes", url: "./dossiers/22-ai-chathub.html#notes" }
      ]
    },
    {
      number: "23",
      title: "Homepage Graph",
      category: "Software",
      status: "In Development",
      visibility: "Public",
      year: "2026",
      fileCode: "SW-023",
      description:
        "A static personal homepage rendered as an interactive 3D knowledge graph, linking categories, documents, and tags through a generated graph data model.",
      editorial:
        "Documented as a navigable archive system rather than a conventional homepage: the interface exists to map and traverse a document universe, not simply present it linearly.",
      links: [
        { label: "Open dossier", url: "./dossiers/23-homepage-graph.html" },
        { label: "Read notes", url: "./dossiers/23-homepage-graph.html#notes" }
      ]
    },
    {
      number: "24",
      title: "FaceFusion.AI",
      category: "Creative Tools",
      status: "Prototype",
      visibility: "Private",
      year: "2026",
      fileCode: "CT-024",
      description:
        "A split-mask AI image editing prototype where users cut part of a portrait away, then use OpenAI image editing to fuse the missing region into a stylized recomposition.",
      editorial:
        "Documented as a conceptually strong but still local-first prototype: the interaction idea is clear, yet the runtime remains split between a Next frontend and a hand-rolled Express backend.",
      links: [
        { label: "Open dossier", url: "./dossiers/24-facefusion-ai.html" },
        { label: "Read notes", url: "./dossiers/24-facefusion-ai.html#notes" }
      ]
    },
    {
      number: "25",
      title: "Camera Detection",
      category: "Experiments",
      status: "Prototype",
      visibility: "Private",
      year: "2025",
      fileCode: "EX-025",
      description:
        "A webcam-based computer vision experiment that detects people locally, tracks them across frames, speaks greetings aloud, and asks OpenAI vision for a short descriptive commentary.",
      editorial:
        "Documented as an interactive CV prototype with theatrical intent: one machine watches, greets, comments, and logs, without any attempt yet to formalize the system into a product.",
      links: [
        { label: "Open dossier", url: "./dossiers/25-camera-detection.html" },
        { label: "Read notes", url: "./dossiers/25-camera-detection.html#notes" }
      ]
    },
    {
      number: "26",
      title: "GER40 Data Pipeline",
      category: "Trading Systems",
      status: "Prototype",
      visibility: "Private",
      year: "2025",
      fileCode: "TS-026",
      description:
        "A single-instrument GER40 research pipeline that fetches MT5 data, computes range-break and Poisson-style statistics, writes CSV outputs, and prepares operational summaries.",
      editorial:
        "Documented as the narrower precursor to a larger trading stack: one market, one pipeline, one operator script, and a visible path toward the later multi-asset system.",
      links: [
        { label: "Open dossier", url: "./dossiers/26-ger40-data-pipeline.html" },
        { label: "Read notes", url: "./dossiers/26-ger40-data-pipeline.html#notes" }
      ]
    },
    {
      number: "27",
      title: "Idea Debugger",
      category: "Software",
      status: "Prototype",
      visibility: "Private",
      year: "2026",
      fileCode: "SW-027",
      description:
        "A small Python concept-analysis utility that reads an idea from file and runs it through an OpenAI-powered critique prompt to surface assumptions, contradictions, and feasibility issues.",
      editorial:
        "Documented as an unfinished but coherent seed tool: the ambition points toward a richer app, but the current implementation remains a minimal private debugger for ideas in text form.",
      links: [
        { label: "Open dossier", url: "./dossiers/27-idea-debugger.html" },
        { label: "Read notes", url: "./dossiers/27-idea-debugger.html#notes" }
      ]
    },
    {
      number: "28",
      title: "Artful Split",
      category: "Creative Tools",
      status: "In Development",
      visibility: "Private",
      year: "2026",
      fileCode: "CT-028",
      description:
        "A Vite-based AI image transformation app that lets users split a portrait, pick a style preset, and send the composition through a Supabase-hosted generation path.",
      editorial:
        "Documented as the hosted, UX-heavier branch of the face-splitting concept: more product shell, more interface polish, and more cloud integration than the earlier local prototype.",
      links: [
        { label: "Open dossier", url: "./dossiers/28-artful-split.html" },
        { label: "Read notes", url: "./dossiers/28-artful-split.html#notes" }
      ]
    },
    {
      number: "29",
      title: "KaleidoLab",
      category: "Creative Tools",
      status: "Prototype",
      visibility: "Public",
      year: "2026",
      fileCode: "CT-029",
      description:
        "A one-file WebGL kaleidoscope and fractal generator with real-time controls, presets, and still/video export from the browser.",
      editorial:
        "Documented as a complete miniature instrument: compact, self-contained, and more useful than its single-file surface initially suggests.",
      links: [
        { label: "Open dossier", url: "./dossiers/29-kaleidolab.html" },
        { label: "Read notes", url: "./dossiers/29-kaleidolab.html#notes" }
      ]
    },
    {
      number: "30",
      title: "PolyIntona",
      category: "Creative Tools",
      status: "Prototype",
      visibility: "Private",
      year: "2026",
      fileCode: "CT-030",
      description:
        "A mouse-driven desktop software instrument inspired by Music Mouse, built with JUCE around an XY pad, harmonic controls, and arpeggiation logic.",
      editorial:
        "Documented as a playable software-instrument prototype: the core interaction model is already clear even if the build remains local and development-oriented.",
      links: [
        { label: "Open dossier", url: "./dossiers/30-polyintona.html" },
        { label: "Read notes", url: "./dossiers/30-polyintona.html#notes" }
      ]
    },
    {
      number: "31",
      title: "NBA CGM",
      category: "Research",
      status: "In Development",
      visibility: "Private",
      year: "2026",
      fileCode: "RS-031",
      description:
        "A large NBA data and dashboard workspace that preserves Python collection tools, scoreboard utilities, multiple web dashboard attempts, and archived releases in one folder.",
      editorial:
        "Documented as a version archive rather than a single app: the interesting object here is the accumulation of NBA tooling attempts and dashboard generations over time.",
      links: [
        { label: "Open dossier", url: "./dossiers/31-nba-cgm.html" },
        { label: "Read notes", url: "./dossiers/31-nba-cgm.html#notes" }
      ]
    },
    {
      number: "32",
      title: "Noctarion",
      category: "Editorial",
      status: "Archived",
      visibility: "Public",
      year: "2025",
      fileCode: "ED-032",
      description:
        "A dark, meditative static presence page for the Noctarion identity, built around particles, serif branding, field statements, and support links.",
      editorial:
        "Documented as a finished presence surface: concise, atmospheric, and fully organized around tone rather than feature depth.",
      links: [
        { label: "Open dossier", url: "./dossiers/32-noctarion.html" },
        { label: "Read notes", url: "./dossiers/32-noctarion.html#notes" }
      ]
    },
    {
      number: "33",
      title: "PROBABLE",
      category: "Research",
      status: "In Development",
      visibility: "Private",
      year: "2026",
      fileCode: "RS-033",
      description:
        "A file-first daily intelligence brief pipeline that ingests sources, runs specialist prompts, renders outputs, and feeds a nested Next.js reading site.",
      editorial:
        "Documented as the machine behind a publication voice: pipeline first, site second, with outputs treated as the central durable artifact.",
      links: [
        { label: "Open dossier", url: "./dossiers/33-probable.html" },
        { label: "Read notes", url: "./dossiers/33-probable.html#notes" }
      ]
    },
    {
      number: "34",
      title: "ReflectBridge",
      category: "Software",
      status: "Prototype",
      visibility: "Private",
      year: "2026",
      fileCode: "SW-034",
      description:
        "A tiny Flask bridge that receives note payloads from an external AI workflow and forwards them into Reflect through its API.",
      editorial:
        "Documented as infrastructure glue: narrow in scope, operationally useful, and clearly part of a larger private toolchain.",
      links: [
        { label: "Open dossier", url: "./dossiers/34-reflectbridge.html" },
        { label: "Read notes", url: "./dossiers/34-reflectbridge.html#notes" }
      ]
    },
    {
      number: "35",
      title: "Echo",
      category: "Software",
      status: "In Development",
      visibility: "Private",
      year: "2026",
      fileCode: "SW-035",
      description:
        "A large SvelteKit and Tauri desktop workspace for channels, tagged messages, calendars, vaults, and local LLM-assisted knowledge work.",
      editorial:
        "Documented as a private operating environment rather than a simple messaging app: its true scale lives in the local models, runtime assets, and knowledge tooling surrounding the UI.",
      links: [
        { label: "Open dossier", url: "./dossiers/35-echo.html" },
        { label: "Read notes", url: "./dossiers/35-echo.html#notes" }
      ]
    },
    {
      number: "36",
      title: "The Mirror Test",
      category: "Experiments",
      status: "Prototype",
      visibility: "Public",
      year: "2026",
      fileCode: "EX-036",
      description:
        "A React self-test app about narcissistic patterns, built as a single-flow questionnaire with archetype scoring and a deliberately confrontational tone.",
      editorial:
        "Documented as a psychological interaction experiment more than a clinical tool: the value is in the staged emotional mirror the app tries to hold up to the user.",
      links: [
        { label: "Open dossier", url: "./dossiers/36-the-mirror-test.html" },
        { label: "Read notes", url: "./dossiers/36-the-mirror-test.html#notes" }
      ]
    },
    {
      number: "37",
      title: "Consciências",
      category: "Editorial",
      status: "Prototype",
      visibility: "Private",
      year: "2026",
      fileCode: "ED-037",
      description:
        "An Astro editorial archive paired with a Modal Python backend that stages AI debates between curated personas and publishes them as artist-linked posts.",
      editorial:
        "Documented as a split-surface project: one half is a dark literary publishing shell, the other half is a cloud debate engine that manufactures the voices feeding that shell.",
      links: [
        { label: "Open dossier", url: "./dossiers/37-consciencias.html" },
        { label: "Read notes", url: "./dossiers/37-consciencias.html#notes" }
      ]
    },
    {
      number: "38",
      title: "WhispererAI",
      category: "Software",
      status: "Prototype",
      visibility: "Private",
      year: "2026",
      fileCode: "SW-038",
      description:
        "A local audio-note automation pipeline that sends files to a Modal-hosted Whisper worker, writes transcripts into Logseq, and archives the processed recordings.",
      editorial:
        "Documented as private operational glue rather than an app: the authored value sits in the workflow choreography between folders, remote GPU transcription, and structured note storage.",
      links: [
        { label: "Open dossier", url: "./dossiers/38-whispererai.html" },
        { label: "Read notes", url: "./dossiers/38-whispererai.html#notes" }
      ]
    },
    {
      number: "39",
      title: "Trade Caption Lab",
      category: "Trading Systems",
      status: "Prototype",
      visibility: "Private",
      year: "2025",
      fileCode: "TS-039",
      description:
        "A Python caption-generation lab that turns trade metadata and TradingView screenshots into PT-PT post copy through OpenAI and LangChain-assisted workflows.",
      editorial:
        "Documented as language tooling around trading rather than trading itself: the point is not execution, but packaging market action into a publishable voice.",
      links: [
        { label: "Open dossier", url: "./dossiers/39-trade-caption-lab.html" },
        { label: "Read notes", url: "./dossiers/39-trade-caption-lab.html#notes" }
      ]
    },
    {
      number: "40",
      title: "Trade Analyser Py",
      category: "Trading Systems",
      status: "Prototype",
      visibility: "Private",
      year: "2025",
      fileCode: "TS-040",
      description:
        "A Python report pipeline that batch-reads chart images, asks OpenAI vision for technical context, synthesizes setups, and delivers the result through Drive and email.",
      editorial:
        "Documented as an operator script with real workflow ambition: visual inputs come in, a dated report is produced, and the system pushes its output outward without needing a UI.",
      links: [
        { label: "Open dossier", url: "./dossiers/40-trade-analyser-py.html" },
        { label: "Read notes", url: "./dossiers/40-trade-analyser-py.html#notes" }
      ]
    },
    {
      number: "41",
      title: "GALL",
      category: "Editorial",
      status: "Prototype",
      visibility: "Public",
      year: "2026",
      fileCode: "ED-041",
      description:
        "A multi-page static site for Guerra de Atrito Legal Leve, organized as an operational archive of civic-pressure methods, templates, references, and reusable actions.",
      editorial:
        "Documented as a serious information surface, not a brochure: the authored object is a method archive whose static architecture stays simple while the rhetoric stays sharp.",
      links: [
        { label: "Open dossier", url: "./dossiers/41-gall.html" },
        { label: "Read notes", url: "./dossiers/41-gall.html#notes" }
      ]
    },
    {
      number: "42",
      title: "Visual Game Test Cam",
      category: "Experiments",
      status: "Prototype",
      visibility: "Private",
      year: "2025",
      fileCode: "EX-042",
      description:
        "A webcam reaction game in Python and OpenCV that captures a clean background, detects player motion, and measures timed hits across repeated rounds.",
      editorial:
        "Documented as a compact but complete interaction prototype: one script, one camera, one mechanic, and enough structure to count as more than a throwaway test.",
      links: [
        { label: "Open dossier", url: "./dossiers/42-visual-game-test-cam.html" },
        { label: "Read notes", url: "./dossiers/42-visual-game-test-cam.html#notes" }
      ]
    },
    {
      number: "43",
      title: "Webhook Demo",
      category: "Software",
      status: "Prototype",
      visibility: "Private",
      year: "2025",
      fileCode: "SW-043",
      description:
        "A bare Flask webhook receiver for local TradingView-style payload testing, paired with ngrok and a bundled virtual environment.",
      editorial:
        "Documented as ingress plumbing in isolation: the point here is proving that external signals arrive, not yet deciding what a full downstream system should do with them.",
      links: [
        { label: "Open dossier", url: "./dossiers/43-webhook-demo.html" },
        { label: "Read notes", url: "./dossiers/43-webhook-demo.html#notes" }
      ]
    },
    {
      number: "44",
      title: "Antes & Depois",
      category: "Editorial",
      status: "Prototype",
      visibility: "Private",
      year: "2026",
      fileCode: "ED-044",
      description:
        "A Next.js service site built around the proposition of redesigning a client’s website before the first sales conversation, using before/after framing and a calm editorial UI.",
      editorial:
        "Documented as a sales narrative with real structure behind it: less generic landing page, more carefully staged argument for a specific working method.",
      links: [
        { label: "Open dossier", url: "./dossiers/44-antes-depois.html" },
        { label: "Read notes", url: "./dossiers/44-antes-depois.html#notes" }
      ]
    },
    {
      number: "45",
      title: "Oráculo Digital V2",
      category: "Software",
      status: "Prototype",
      visibility: "Private",
      year: "2025",
      fileCode: "SW-045",
      description:
        "A React and Vite rebuild of Oráculo Digital with Firebase authentication, protected routing, and a small dashboard shell preserved inside a broader recovery workspace.",
      editorial:
        "Documented as the rebuilt skeleton of a larger idea: auth, routing, and access control are stable, while the richer application layer still sits ahead.",
      links: [
        { label: "Open dossier", url: "./dossiers/45-oraculo-digital-v2.html" },
        { label: "Read notes", url: "./dossiers/45-oraculo-digital-v2.html#notes" }
      ]
    },
    {
      number: "46",
      title: "Confluência",
      category: "Editorial",
      status: "Prototype",
      visibility: "Public",
      year: "2026",
      fileCode: "ED-046",
      description:
        "A static publishing index for market analysis, essays, manuals, and reference texts, generated by a Python script and prepared for Vercel static hosting.",
      editorial:
        "Documented as a real archive rather than a blog skin: the important object is the corpus and its index logic, not a generic homepage treatment.",
      links: [
        { label: "Open dossier", url: "./dossiers/46-confluencia.html" },
        { label: "Read notes", url: "./dossiers/46-confluencia.html#notes" }
      ]
    },
    {
      number: "47",
      title: "FOREXDASHBOARD",
      category: "Trading Systems",
      status: "In Development",
      visibility: "Private",
      year: "2026",
      fileCode: "TS-047",
      description:
        "A local MT5 workspace that combines a FastAPI execution bridge with a SvelteKit dashboard for account monitoring, trade management, and grid deployment workflows.",
      editorial:
        "Documented as a cockpit in progress: the bridge stays narrow, while the dashboard grows into a serious operator surface for structured execution control.",
      links: [
        { label: "Open dossier", url: "./dossiers/47-forex-dashboard.html" },
        { label: "Read notes", url: "./dossiers/47-forex-dashboard.html#notes" }
      ]
    },
    {
      number: "48",
      title: "Home Security Agent",
      category: "Software",
      status: "In Development",
      visibility: "Public",
      year: "2026",
      fileCode: "SW-048",
      description:
        "A Windows 11 host-visibility system built on Sysmon, SQLite, and Streamlit, with alerting, allowlisting, exports, and a companion static documentation site.",
      editorial:
        "Documented as a pragmatic security tool with unusually honest scope boundaries: it does not pretend to be a full antivirus, and that honesty strengthens the whole project.",
      links: [
        { label: "Open dossier", url: "./dossiers/48-home-security-agent.html" },
        { label: "Read notes", url: "./dossiers/48-home-security-agent.html#notes" }
      ]
    },
    {
      number: "49",
      title: "Moltbook Paper",
      category: "Research",
      status: "Prototype",
      visibility: "Public",
      year: "2026",
      fileCode: "RS-049",
      description:
        "A bilingual paper microsite about emergent social behavior in an A2A bot network, with long-form HTML pages, figures, metadata, and a reading-first editorial layout.",
      editorial:
        "Documented as a publication artifact rather than a marketing page: the central design problem is how to hold a serious text online with enough structure and weight.",
      links: [
        { label: "Open dossier", url: "./dossiers/49-moltbook-paper.html" },
        { label: "Read notes", url: "./dossiers/49-moltbook-paper.html#notes" }
      ]
    },
    {
      number: "50",
      title: "Text Generation Web UI",
      category: "Software",
      status: "Archived",
      visibility: "Public",
      year: "2026",
      fileCode: "SW-050",
      description:
        "A preserved local checkout of oobabooga’s Text Generation Web UI, used as an offline Gradio workstation for local language models and related extensions.",
      editorial:
        "Documented as an operating environment inside the archive, not as a bespoke authored app: what matters is the role it plays in the toolchain and the scale of the local runtime it preserves.",
      links: [
        { label: "Open dossier", url: "./dossiers/50-text-generation-webui.html" },
        { label: "Read notes", url: "./dossiers/50-text-generation-webui.html#notes" }
      ]
    },
    {
      number: "51",
      title: "Ultimate Prompt Maker",
      category: "Creative Tools",
      status: "Prototype",
      visibility: "Private",
      year: "2026",
      fileCode: "CT-051",
      description:
        "A Next.js prompt studio that transforms a rough brief into a structured, copy-ready prompt with derived breakdowns, risks, improvements, and clarifying questions.",
      editorial:
        "Documented as prompt normalization made into interface: the interesting move is the deterministic shaping of a request, not a flashy AI wrapper.",
      links: [
        { label: "Open dossier", url: "./dossiers/51-ultimate-prompt-maker.html" },
        { label: "Read notes", url: "./dossiers/51-ultimate-prompt-maker.html#notes" }
      ]
    },
    {
      number: "52",
      title: "Almanaque Diário",
      category: "Editorial",
      status: "Active",
      visibility: "Public",
      year: "2026",
      fileCode: "ED-052",
      description:
        "A one-page daily almanac for Nazaré that gathers calendars, history, astronomy, reflection, and vocabulary into a refined print-like editorial issue.",
      editorial:
        "Documented as a daily publication object rather than an app: tiny in code volume, but strong in format, voice, and compositional control.",
      links: [
        { label: "Open dossier", url: "./dossiers/52-almanaque.html" },
        { label: "Read notes", url: "./dossiers/52-almanaque.html#notes" }
      ]
    },
    {
      number: "53",
      title: "Mundial 2026",
      category: "Editorial",
      status: "Active",
      visibility: "Public",
      year: "2026",
      fileCode: "ED-053",
      description:
        "A static 2026 World Cup editorial microsite that combines tactical guide pages, a running tournament diary, and Portugal-specific preview and chronicle writing.",
      editorial:
        "Documented as a sports publication with issue logic rather than a scores site: the value lives in the voice, structure, and layered narrative around the tournament.",
      links: [
        { label: "Open dossier", url: "./dossiers/53-mundial-2026.html" },
        { label: "Read notes", url: "./dossiers/53-mundial-2026.html#notes" }
      ]
    },
    {
      number: "54",
      title: "Home Command Center Wallpaper Dashboard",
      category: "Software",
      status: "Prototype",
      visibility: "Public",
      year: "2026",
      fileCode: "SW-054",
      description:
        "A LAN-hosted live wallpaper dashboard built as a small monorepo, combining a Fastify and SQLite backend with a React and Vite ambient command surface.",
      editorial:
        "Documented as an operational screen system rather than a generic dashboard: the whole repo is tuned around always-on spatial use inside a room, not a browser tab workflow.",
      links: [
        { label: "Open dossier", url: "./dossiers/54-home-command-center-wallpaper-dashboard.html" },
        { label: "Read notes", url: "./dossiers/54-home-command-center-wallpaper-dashboard.html#notes" }
      ]
    },
    {
      number: "55",
      title: "Atrahasis",
      category: "Editorial",
      status: "Archived",
      visibility: "Public",
      year: "2026",
      fileCode: "ED-055",
      description:
        "A cinematic single-page essay about Atrahasis, flood mythology, and Mesopotamian memory, built as a highly styled long-form static reading experience.",
      editorial:
        "Documented as rhetorical staging through web form: a simple technical base used to carry a much more ambitious narrative and visual cadence.",
      links: [
        { label: "Open dossier", url: "./dossiers/55-atrahasis.html" },
        { label: "Read notes", url: "./dossiers/55-atrahasis.html#notes" }
      ]
    },
    {
      number: "56",
      title: "NBA Edge Finder",
      category: "Software",
      status: "In Development",
      visibility: "Public",
      year: "2026",
      fileCode: "SW-056",
      description:
        "A Next.js NBA analysis site with multiple routed views, file-backed API handlers, standings pages, game breakdowns, and a dark Bootstrap interface.",
      editorial:
        "Documented as a sports-analysis software surface rather than a prediction myth: the repo’s real strength is in how it organizes basketball data into usable routes and views.",
      links: [
        { label: "Open dossier", url: "./dossiers/56-nba-edge-finder.html" },
        { label: "Read notes", url: "./dossiers/56-nba-edge-finder.html#notes" },
        { label: "Live build", url: "https://nba-edge-finder.vercel.app" },
        { label: "Source / Repo", url: "https://github.com/sergioB79/NBA-EdgeFinder" }
      ]
    },
    {
      number: "57",
      title: "FX Diário",
      category: "Trading Systems",
      status: "Prototype",
      visibility: "Public",
      year: "2026",
      fileCode: "TS-057",
      description:
        "A single-file forex publication surface that packages tickers, setups, market commentary, and branded UI into one static HTML issue.",
      editorial:
        "Documented as a trading-media front end more than a platform: the code is light, but the visual packaging and market voice are already sharply defined.",
      links: [
        { label: "Open dossier", url: "./dossiers/57-fx-diario.html" },
        { label: "Read notes", url: "./dossiers/57-fx-diario.html#notes" },
        { label: "Source / Repo", url: "https://github.com/sergioB79/FXdiario" }
      ]
    },
    {
      number: "58",
      title: "Poster Maker",
      category: "Creative Tools",
      status: "In Development",
      visibility: "Public",
      year: "2026",
      fileCode: "CT-058",
      description:
        "A Next.js poster-generation product with creative controls, auth, credits, Stripe billing, Prisma data models, OpenAI generation, and Vercel-oriented storage.",
      editorial:
        "Documented as a real product skeleton, not just an AI landing page: what matters here is the combination of creative interface and operational backbone.",
      links: [
        { label: "Open dossier", url: "./dossiers/58-poster-maker.html" },
        { label: "Read notes", url: "./dossiers/58-poster-maker.html#notes" },
        { label: "Live build", url: "https://poster-maker-kohl.vercel.app" },
        { label: "Source / Repo", url: "https://github.com/sergioB79/posterMaker" }
      ]
    },
    {
      number: "59",
      title: "Poker Ratinho",
      category: "Experiments",
      status: "Prototype",
      visibility: "Public",
      year: "2026",
      fileCode: "EX-059",
      description:
        "An early poker-room platform concept split into a Vite and React frontend and a still-empty backend placeholder.",
      editorial:
        "Documented as a recorded direction rather than a finished system: most of the value here is in the intent the repo announces, not in the implementation volume yet.",
      links: [
        { label: "Open dossier", url: "./dossiers/59-poker-ratinho.html" },
        { label: "Read notes", url: "./dossiers/59-poker-ratinho.html#notes" },
        { label: "Source / Repo", url: "https://github.com/sergioB79/poker-ratinho" }
      ]
    },
    {
      number: "60",
      title: "The Forge",
      category: "Research",
      status: "Active",
      visibility: "Public",
      year: "2026",
      fileCode: "RS-060",
      description:
        "A research and editorial judgment system that combines a Python content pipeline with a Next.js publication layer for dossiers, archives, and pass-fail cultural classification.",
      editorial:
        "Documented as a methodology engine made visible: the site matters, but the real project is the pipeline that turns judgment into structured publication.",
      links: [
        { label: "Open dossier", url: "./dossiers/60-the-forge.html" },
        { label: "Read notes", url: "./dossiers/60-the-forge.html#notes" },
        { label: "Live build", url: "https://the-forge-lime.vercel.app" },
        { label: "Source / Repo", url: "https://github.com/sergioB79/theForge" }
      ]
    },
    {
      number: "61",
      title: "Palm Reader App",
      category: "Experiments",
      status: "Prototype",
      visibility: "Public",
      year: "2026",
      fileCode: "EX-061",
      description:
        "A static-and-Express AI palm reading app that uploads two hand images, sends them to Gemini vision, and stages the result as a brief-to-detailed mystical funnel.",
      editorial:
        "Documented as a compact consumer experiment: the core move is the theatrical product framing around a very small technical surface.",
      links: [
        { label: "Open dossier", url: "./dossiers/61-palm-reader-app.html" },
        { label: "Read notes", url: "./dossiers/61-palm-reader-app.html#notes" },
        { label: "Live build", url: "https://palm-reader-app.vercel.app" },
        { label: "Source / Repo", url: "https://github.com/sergioB79/palm-reader-app" }
      ]
    },
    {
      number: "62",
      title: "Foguetão do GOAT",
      category: "Trading Systems",
      status: "Prototype",
      visibility: "Public",
      year: "2026",
      fileCode: "TS-062",
      description:
        "A gated Next.js trading portal for notes, reports, accounts, and contact flows, using GitHub-backed JSON persistence instead of a conventional database.",
      editorial:
        "Documented as a personal operating surface rather than a public product: improvised persistence and light auth are part of the project’s real character.",
      links: [
        { label: "Open dossier", url: "./dossiers/62-foguetao-do-goat.html" },
        { label: "Read notes", url: "./dossiers/62-foguetao-do-goat.html#notes" },
        { label: "Live build", url: "https://foguetao-do-goat.vercel.app" },
        { label: "Source / Repo", url: "https://github.com/sergioB79/foguetao-do-goat" }
      ]
    },
    {
      number: "63",
      title: "UCL 2026",
      category: "Research",
      status: "Archived",
      visibility: "Public",
      year: "2026",
      fileCode: "RS-063",
      description:
        "A single-page Champions League round-of-16 intelligence study with matchup analysis, bracket logic, probabilities, and editorial forecasting.",
      editorial:
        "Documented as a dated analytical artifact: technically tiny, but tightly composed as a browser-native scouting report.",
      links: [
        { label: "Open dossier", url: "./dossiers/63-ucl-2026.html" },
        { label: "Read notes", url: "./dossiers/63-ucl-2026.html#notes" },
        { label: "Source / Repo", url: "https://github.com/sergioB79/ucl2026" }
      ]
    },
    {
      number: "64",
      title: "Dashboard Page",
      category: "Software",
      status: "Prototype",
      visibility: "Public",
      year: "2026",
      fileCode: "SW-064",
      description:
        "A Vite and React personal operations dashboard with modular widgets, draggable layouts, mock-to-live data services, and a broad shadcn-style UI surface.",
      editorial:
        "Documented as a control-room frame rather than a finished workstation: most of the intelligence is in the widget architecture and layout system, not in current live integrations.",
      links: [
        { label: "Open dossier", url: "./dossiers/64-dashboard-page.html" },
        { label: "Read notes", url: "./dossiers/64-dashboard-page.html#notes" },
        { label: "Live build", url: "https://dashboard-page-six.vercel.app" },
        { label: "Source / Repo", url: "https://github.com/sergioB79/dashboardPage" }
      ]
    },
    {
      number: "65",
      title: "NeuralPip",
      category: "Editorial",
      status: "Active",
      visibility: "Public",
      year: "2026",
      fileCode: "ED-065",
      description:
        "A Hugo publication about AI, code, markets, and ethics, using PaperMod with custom partials to publish trading guides and reflective essays.",
      editorial:
        "Documented as lightweight editorial infrastructure: static on purpose, with just enough customization to hold a hybrid identity between trading notebook and AI-era essay site.",
      links: [
        { label: "Open dossier", url: "./dossiers/65-neural-pip.html" },
        { label: "Read notes", url: "./dossiers/65-neural-pip.html#notes" },
        { label: "Live build", url: "https://neural-pip.vercel.app" },
        { label: "Source / Repo", url: "https://github.com/sergioB79/NeuralPip" }
      ]
    },
    {
      number: "66",
      title: "O Grande Tabuleiro 2026",
      category: "Research",
      status: "Archived",
      visibility: "Public",
      year: "2026",
      fileCode: "RS-066",
      description:
        "A static geopolitical analysis issue for May 2026, combining essay structure, strategic cards, timelines, and Chart.js graphics in one dense web report.",
      editorial:
        "Documented as a web-native dossier rather than a site: technically spare, compositionally deliberate, and tied to a specific analytical moment.",
      links: [
        { label: "Open dossier", url: "./dossiers/66-o-grande-tabuleiro-2026.html" },
        { label: "Read notes", url: "./dossiers/66-o-grande-tabuleiro-2026.html#notes" },
        { label: "Source / Repo", url: "https://github.com/sergioB79/O-GRANDE-TABULEIRO---MAIO-2026" }
      ]
    },
    {
      number: "67",
      title: "Anuncio Page",
      category: "Trading Systems",
      status: "Archived",
      visibility: "Public",
      year: "2026",
      fileCode: "TS-067",
      description:
        "A one-page static conversion surface for private trading tutoring, built around scarcity, positioning, and a single external application CTA.",
      editorial:
        "Documented as a commercial artifact inside the trading orbit: technically tiny, but very clear about what it wants the visitor to do.",
      links: [
        { label: "Open dossier", url: "./dossiers/67-anuncio-page.html" },
        { label: "Read notes", url: "./dossiers/67-anuncio-page.html#notes" },
        { label: "Source / Repo", url: "https://github.com/sergioB79/anuncio-page" }
      ]
    },
    {
      number: "68",
      title: "SteveSite",
      category: "Creative Tools",
      status: "Prototype",
      visibility: "Public",
      year: "2026",
      fileCode: "CT-068",
      description:
        "A static digital-artist portfolio template with custom CSS, a small JavaScript project data layer, modal detail views, and no build-step overhead.",
      editorial:
        "Documented as a reusable presentation tool rather than a finished authored portfolio: the value is in the structure it offers to someone else’s work.",
      links: [
        { label: "Open dossier", url: "./dossiers/68-steve-site.html" },
        { label: "Read notes", url: "./dossiers/68-steve-site.html#notes" },
        { label: "Source / Repo", url: "https://github.com/sergioB79/steveSite" }
      ]
    },
    {
      number: "69",
      title: "Synthesis",
      category: "Trading Systems",
      status: "Active",
      visibility: "Public",
      year: "2026",
      fileCode: "TS-069",
      description:
        "A synthesis pipeline that merges technical analysis, macro sentiment, calendar risk, and per-asset LLM interpretation into dated HTML market briefings.",
      editorial:
        "Documented as a pipeline publication surface: the public HTML is only the visible tip of a larger integration system.",
      links: [
        { label: "Open dossier", url: "./dossiers/69-synthesis.html" },
        { label: "Read notes", url: "./dossiers/69-synthesis.html#notes" },
        { label: "Source / Repo", url: "https://github.com/sergioB79/synthesis" }
      ]
    },
    {
      number: "70",
      title: "Prognóstico",
      category: "Editorial",
      status: "Archived",
      visibility: "Public",
      year: "2026",
      fileCode: "ED-070",
      description:
        "A one-page sports-betting publication surface that uses a newspaper-like visual system to package tips, analysis, and betting commentary.",
      editorial:
        "Documented as betting media rather than betting software: the page is about framing and voice, not automation.",
      links: [
        { label: "Open dossier", url: "./dossiers/70-prognostico.html" },
        { label: "Read notes", url: "./dossiers/70-prognostico.html#notes" },
        { label: "Source / Repo", url: "https://github.com/sergioB79/prognostico" }
      ]
    },
    {
      number: "71",
      title: "Wave2Manual",
      category: "Trading Systems",
      status: "Archived",
      visibility: "Public",
      year: "2026",
      fileCode: "TS-071",
      description:
        "A static manual for an Elliott-wave indicator, explaining Wave 2 structure, Markov confidence, setup interpretation, and usage through screenshots and anchored documentation.",
      editorial:
        "Documented as documentation infrastructure for a trading tool: the repo teaches interpretation rather than executing the system itself.",
      links: [
        { label: "Open dossier", url: "./dossiers/71-wave2manual.html" },
        { label: "Read notes", url: "./dossiers/71-wave2manual.html#notes" },
        { label: "Source / Repo", url: "https://github.com/sergioB79/Wave2Manual" }
      ]
    }
  ]
};
