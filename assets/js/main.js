/* ===================================================================
   E-Helper Showcase & Portal — Interactive Core Script
   Features: Hardware Simulator, 3-Zone RGB Live Deck, TR/EN i18n, Theme Switcher
   =================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // -----------------------------------------------------------------
  // 1. Language Dictionary (TR & EN)
  // -----------------------------------------------------------------
  const i18n = {
    tr: {
      navFeatures: "Özellikler",
      navSimulator: "Canlı Simülatör",
      navComparison: "Karşılaştırma",
      navGuide: "Kullanım",
      navHardware: "Donanım",
      navChangelog: "Sürümler",
      downloadBtn: "İndir (v1.1.1)",
      heroPill: "Casper Excalibur Dizüstü Bilgisayarlar İçin Özel",
      heroTitle1: "Casper Excalibur Dizüstü Bilgisayarınız İçin",
      heroTitleGrad: "Ultra Hafif Kontrol Merkezi",
      heroSubtitle: "Üreticinin yüzlerce MB RAM harcayan şişkin yazılımına elveda deyin. Sadece 1-5 MB bellek kullanımı, sıfır arka plan servisi ve doğrudan donanım yönetimi.",
      downloadCta: "E-Helper.exe İndir (v1.1.1)",
      githubCta: "GitHub'da İncele",
      metaReq: "Windows 10/11 • Kurulumsuz Tek Dosya • Taşınabilir",
      statRamVal: "1-5 MB",
      statRamLbl: "RAM Bellek Tüketimi",
      statRamDesc: "Resmi merkeze göre %98 daha hafif",
      statSvcVal: "0 Servis",
      statSvcLbl: "Arka Plan Yükü",
      statSvcDesc: "Sıfır CPU sömürüsü ve telemetri",
      statEcVal: "ACPI SMI",
      statEcLbl: "Doğrudan Denetleyici",
      statEcDesc: "G-Helper felsefesiyle yerel haberleşme",
      statLicVal: "GPL-3.0",
      statLicLbl: "Açık Kaynak Kod",
      statLicDesc: "Topluluk destekli, tam şeffaf",
      simBadge: "İnteraktif Deneyim",
      simTitle: "E-Helper'ı Tarayıcınızda Canlı Test Edin",
      simSubtitle: "Aşağıdaki sanal kontrol panelindeki modlara, RGB ayarlarına ve parlaklık sürgüsüne tıklayın; sağdaki laptop kasasının anında nasıl tepki verdiğini izleyin.",
      simExplainer: "Bu simülatör, gerçek E-Helper WPF uygulamasının ve Casper Excalibur anakart donanım tepkilerinin birebir görselleştirilmiş halidir.",
      simTitleBar: "E-Helper — Casper Excalibur",
      simPowerTitle: "Performans Modu",
      modeOffice: "Tasarruf",
      modeGaming: "Dengeli",
      modeHighPerf: "Performans",
      simGpuTitle: "GPU Modu: Ayrık / Hibrit",
      simSysTitle: "Sistem Kaynakları",
      simRamTitle: "RAM Bellek",
      simSsdTitle: "SSD Disk (C:)",
      simKbdTitle: "Laptop Klavyesi",
      simBrightnessLbl: "Parlaklık",
      simColorBtn: "Renk",
      simZoneLeft: "Sol (WASD)",
      simZoneMid: "Orta",
      simZoneRight: "Sağ (Num)",
      simStartupLbl: "Başlangıçta Çalıştır",
      chassisHeader: "Casper Excalibur Klavye & Fan Tepkisi",
      gaugeCpuFan: "CPU Fanı",
      gaugeGpuFan: "GPU Fanı",
      gaugeAcoustic: "Akustik / Gürültü",
      // Comparison
      compBadge: "Neden E-Helper?",
      compTitle: "Resmi Control Center ile Karşılaştırma",
      compSubtitle: "E-Helper, bilgisayarınızı ağırlaştıran her şeyden arındırılmış saf bir donanım deneyimi sunar.",
      colFeature: "Kriter & Özellik",
      colEHelper: "E-Helper (Önerilen)",
      colOfficial: "Resmi Excalibur Control Center",
      // Features
      featBadge: "Yetkinlikler",
      featTitle: "İhtiyacınız Olan Her Şey, Tek Parçada",
      featSubtitle: "Sadece oyuncuların gerçekten kullandığı ve ihtiyaç duyduğu özellikleri en hızlı şekilde yönetin.",
      // Guide
      guideBadge: "Kolay Başlangıç",
      guideTitle: "3 Adımda Kullanmaya Başlayın",
      guideSubtitle: "Karmaşık kurulum sihirbazları yok. Tıklayın ve anında çalıştırın.",
      // Hardware
      hwBadge: "Uyumluluk",
      hwTitle: "Desteklenen Casper Excalibur Cihazlar",
      hwSubtitle: "Casper Excalibur anakart denetleyicisi ile doğrudan test edilmiş modeller.",
      // Changelog
      clBadge: "Sürüm Geçmişi",
      clTitle: "Güncellemeler ve Sürüm Notları",
      clSubtitle: "E-Helper sürekli gelişiyor. Yapılan tüm iyileştirmeleri ve eklenen yenilikleri buradan takip edebilirsiniz.",
      tabAll: "Tüm Sürümler",
      tabMajor: "Büyük Sürümler",
      tabPatches: "Hata Düzeltmeleri"
    },
    en: {
      navFeatures: "Features",
      navSimulator: "Live Demo",
      navComparison: "Comparison",
      navGuide: "Guide",
      navHardware: "Hardware",
      navChangelog: "Changelog",
      downloadBtn: "Download (v1.1.1)",
      heroPill: "Tailored for Casper Excalibur Gaming Laptops",
      heroTitle1: "Ultra-Lightweight Control Center for",
      heroTitleGrad: "Casper Excalibur Laptops",
      heroSubtitle: "Say goodbye to manufacturer bloatware taking hundreds of MBs of RAM. Enjoy only 1-5 MB memory usage, zero background services, and direct hardware communication.",
      downloadCta: "Download E-Helper.exe (v1.1.1)",
      githubCta: "View on GitHub",
      metaReq: "Windows 10/11 • Portable Single Binary • No Install",
      statRamVal: "1-5 MB",
      statRamLbl: "RAM Footprint",
      statRamDesc: "98% lighter than official Control Center",
      statSvcVal: "0 Services",
      statSvcLbl: "Background Overhead",
      statSvcDesc: "Zero CPU drain and zero telemetry",
      statEcVal: "ACPI SMI",
      statEcLbl: "Direct EC Bridge",
      statEcDesc: "G-Helper philosophy native hardware link",
      statLicVal: "GPL-3.0",
      statLicLbl: "Open Source",
      statLicDesc: "Community-driven, completely transparent",
      simBadge: "Interactive Demo",
      simTitle: "Experience E-Helper Live in Browser",
      simSubtitle: "Click performance modes, RGB lighting presets, and the brightness slider below to see the virtual laptop chassis react in real time.",
      simExplainer: "This simulator mirrors the exact WPF interface of E-Helper and simulates physical motherboard EC fan/RGB responses.",
      simTitleBar: "E-Helper — Casper Excalibur",
      simPowerTitle: "Performance Mode",
      modeOffice: "Eco",
      modeGaming: "Balanced",
      modeHighPerf: "Turbo",
      simGpuTitle: "GPU Mode: Discrete / Hybrid",
      simSysTitle: "System Resources",
      simRamTitle: "RAM Memory",
      simSsdTitle: "SSD Disk (C:)",
      simKbdTitle: "Laptop Keyboard",
      simBrightnessLbl: "Brightness",
      simColorBtn: "Color",
      simZoneLeft: "Left (WASD)",
      simZoneMid: "Center",
      simZoneRight: "Right (Num)",
      simStartupLbl: "Run on Startup",
      chassisHeader: "Casper Excalibur Keyboard & Fan Response",
      gaugeCpuFan: "CPU Fan",
      gaugeGpuFan: "GPU Fan",
      gaugeAcoustic: "Acoustics / Noise",
      // Comparison
      compBadge: "Why E-Helper?",
      compTitle: "Comparison with Official Control Center",
      compSubtitle: "E-Helper eliminates all unnecessary background tasks, giving you pure performance.",
      colFeature: "Criteria & Specs",
      colEHelper: "E-Helper (Recommended)",
      colOfficial: "Official Excalibur Control Center",
      // Features
      featBadge: "Capabilities",
      featTitle: "Everything You Need, In One Compact Tray",
      featSubtitle: "Manage the exact hardware parameters you care about at blazing speeds.",
      // Guide
      guideBadge: "Quick Start",
      guideTitle: "Get Started in 3 Simple Steps",
      guideSubtitle: "No bulky install wizards. Download, run, and enjoy.",
      // Hardware
      hwBadge: "Compatibility",
      hwTitle: "Supported Casper Excalibur Models",
      hwSubtitle: "Tested and verified directly on Casper Excalibur motherboard controllers.",
      // Changelog
      clBadge: "Release History",
      clTitle: "Changelog & Release Notes",
      clSubtitle: "E-Helper is constantly refined. Track all recent updates and improvements here.",
      tabAll: "All Releases",
      tabMajor: "Major Versions",
      tabPatches: "Bug Fixes"
    }
  };

  let currentLang = 'tr';

  // -----------------------------------------------------------------
  // 2. Hardware Simulator State & Engine
  // -----------------------------------------------------------------
  const simState = {
    mode: 'gaming', // office | gaming | highperf
    rgbMode: 'TripleZone', // Static, Breathing, ColorfulCycle, Rainbow, TripleZone
    brightness: 2, // 0: 0%, 1: 50%, 2: 100%
    activeZone: 0, // 0: Left, 1: Mid, 2: Right
    zoneColors: ['#00f0ff', '#10b981', '#ef4444'],
    colorPalette: ['#00f0ff', '#10b981', '#ef4444', '#f59e0b', '#8b5cf6', '#ec4899', '#ffffff', '#3b82f6'],
    cpuTemp: 58,
    cpuRpm: 2800,
    gpuTemp: 54,
    gpuRpm: 2600,
    ramPct: 44,
    ramText: '14.1 / 32.0 GB',
    ssdPct: 61,
    ssdText: '298 / 476 GB'
  };

  // DOM Elements - Simulator
  const btnOffice = document.getElementById('btnOffice');
  const btnGaming = document.getElementById('btnGaming');
  const btnHighPerf = document.getElementById('btnHighPerf');
  const txtPowerModeTitle = document.getElementById('txtPowerModeTitle');

  const txtCpuTemp = document.getElementById('txtCpuTemp');
  const txtCpuRpm = document.getElementById('txtCpuRpm');
  const txtGpuTemp = document.getElementById('txtGpuTemp');
  const txtGpuRpm = document.getElementById('txtGpuRpm');

  const txtRamPercent = document.getElementById('txtRamPercent');
  const txtRamUsage = document.getElementById('txtRamUsage');
  const pbRamUsage = document.getElementById('pbRamUsage');

  const txtSsdPercent = document.getElementById('txtSsdPercent');
  const txtSsdUsage = document.getElementById('txtSsdUsage');
  const pbSsdUsage = document.getElementById('pbSsdUsage');

  const cmbLedMode = document.getElementById('cmbLedMode');
  const btnModeColorAction = document.getElementById('btnModeColorAction');
  const brdModeColorIndicator = document.getElementById('brdModeColorIndicator');
  const sliderBrightness = document.getElementById('sliderBrightness');
  const txtBrightnessIcon = document.getElementById('txtBrightnessIcon');

  const pnlTripleZoneDiagram = document.getElementById('pnlTripleZoneDiagram');
  const btnZoneLeft = document.getElementById('btnZoneLeft');
  const btnZoneMid = document.getElementById('btnZoneMid');
  const btnZoneRight = document.getElementById('btnZoneRight');

  // External Laptop Visualizer DOM
  const gaugeCpuReading = document.getElementById('gaugeCpuReading');
  const gaugeGpuReading = document.getElementById('gaugeGpuReading');
  const gaugeAcousticReading = document.getElementById('gaugeAcousticReading');
  const fanIconCpu = document.getElementById('fanIconCpu');
  const fanIconGpu = document.getElementById('fanIconGpu');

  const deckZoneLeft = document.getElementById('deckZoneLeft');
  const deckZoneMid = document.getElementById('deckZoneMid');
  const deckZoneRight = document.getElementById('deckZoneRight');
  const readoutMode = document.getElementById('readoutMode');
  const readoutWatts = document.getElementById('readoutWatts');

  // Mode click listeners
  function setPowerMode(mode) {
    simState.mode = mode;
    [btnOffice, btnGaming, btnHighPerf].forEach(b => b.classList.remove('active'));

    if (mode === 'office') {
      btnOffice.classList.add('active');
      txtPowerModeTitle.textContent = currentLang === 'tr' ? "Performans Modu: Tasarruf" : "Power Mode: Eco";
      readoutMode.textContent = currentLang === 'tr' ? "Tasarruf (Eco)" : "Eco (Silent)";
      readoutWatts.textContent = "35W TDP";
      fanIconCpu.classList.remove('spinning');
      fanIconGpu.classList.remove('spinning');
      gaugeAcousticReading.textContent = "18 dB (Fısıltı)";
    } else if (mode === 'gaming') {
      btnGaming.classList.add('active');
      txtPowerModeTitle.textContent = currentLang === 'tr' ? "Performans Modu: Dengeli" : "Power Mode: Balanced";
      readoutMode.textContent = currentLang === 'tr' ? "Dengeli (Gaming)" : "Balanced";
      readoutWatts.textContent = "75W TDP";
      fanIconCpu.classList.add('spinning');
      fanIconGpu.classList.add('spinning');
      fanIconCpu.style.animationDuration = '1.2s';
      fanIconGpu.style.animationDuration = '1.2s';
      gaugeAcousticReading.textContent = "34 dB (Standart)";
    } else if (mode === 'highperf') {
      btnHighPerf.classList.add('active');
      txtPowerModeTitle.textContent = currentLang === 'tr' ? "Performans Modu: Performans" : "Power Mode: Turbo";
      readoutMode.textContent = currentLang === 'tr' ? "Performans (Turbo)" : "Turbo / Max";
      readoutWatts.textContent = "115W TDP";
      fanIconCpu.classList.add('spinning');
      fanIconGpu.classList.add('spinning');
      fanIconCpu.style.animationDuration = '0.5s';
      fanIconGpu.style.animationDuration = '0.5s';
      gaugeAcousticReading.textContent = "48 dB (Yüksek Hız)";
    }

    updateTelemetryStats(true);
  }

  btnOffice.addEventListener('click', () => setPowerMode('office'));
  btnGaming.addEventListener('click', () => setPowerMode('gaming'));
  btnHighPerf.addEventListener('click', () => setPowerMode('highperf'));

  // Telemetry fluctuation simulator
  function updateTelemetryStats(immediate = false) {
    let targetCpuTemp, targetCpuRpm, targetGpuTemp, targetGpuRpm;

    if (simState.mode === 'office') {
      targetCpuTemp = 42 + Math.floor(Math.random() * 4);
      targetCpuRpm = 1800 + Math.floor(Math.random() * 200);
      targetGpuTemp = 38 + Math.floor(Math.random() * 3);
      targetGpuRpm = 1700 + Math.floor(Math.random() * 150);
    } else if (simState.mode === 'gaming') {
      targetCpuTemp = 62 + Math.floor(Math.random() * 5);
      targetCpuRpm = 3100 + Math.floor(Math.random() * 250);
      targetGpuTemp = 58 + Math.floor(Math.random() * 4);
      targetGpuRpm = 2950 + Math.floor(Math.random() * 200);
    } else {
      targetCpuTemp = 79 + Math.floor(Math.random() * 5);
      targetCpuRpm = 4900 + Math.floor(Math.random() * 300);
      targetGpuTemp = 75 + Math.floor(Math.random() * 4);
      targetGpuRpm = 4800 + Math.floor(Math.random() * 250);
    }

    simState.cpuTemp = targetCpuTemp;
    simState.cpuRpm = targetCpuRpm;
    simState.gpuTemp = targetGpuTemp;
    simState.gpuRpm = targetGpuRpm;

    txtCpuTemp.textContent = `${simState.cpuTemp}°C`;
    txtCpuRpm.textContent = `${simState.cpuRpm} RPM`;
    txtGpuTemp.textContent = `${simState.gpuTemp}°C`;
    txtGpuRpm.textContent = `${simState.gpuRpm} RPM`;

    gaugeCpuReading.textContent = `${simState.cpuRpm} RPM • ${simState.cpuTemp}°C`;
    gaugeGpuReading.textContent = `${simState.gpuRpm} RPM • ${simState.gpuTemp}°C`;
  }

  // Periodic subtle fluctuation
  setInterval(() => {
    updateTelemetryStats(false);
  }, 2500);

  // RGB Mode handler
  function applyRgbVisuals() {
    const mode = simState.rgbMode;
    const brightnessAlpha = simState.brightness === 2 ? 1 : (simState.brightness === 1 ? 0.45 : 0);

    if (mode === 'TripleZone') {
      pnlTripleZoneDiagram.style.display = 'grid';
      applyZoneColorsToDeck(brightnessAlpha);
    } else if (mode === 'Static') {
      pnlTripleZoneDiagram.style.display = 'none';
      const singleColor = simState.zoneColors[0];
      setDeckAllColor(singleColor, brightnessAlpha);
      brdModeColorIndicator.style.backgroundColor = singleColor;
    } else if (mode === 'Breathing') {
      pnlTripleZoneDiagram.style.display = 'none';
      const singleColor = simState.zoneColors[1] || '#10b981';
      setDeckAllColor(singleColor, brightnessAlpha);
      brdModeColorIndicator.style.backgroundColor = singleColor;
    } else if (mode === 'ColorfulCycle' || mode === 'Rainbow') {
      pnlTripleZoneDiagram.style.display = 'none';
      deckZoneLeft.style.color = '#ef4444';
      deckZoneMid.style.color = '#10b981';
      deckZoneRight.style.color = '#3b82f6';
      applyDeckKeyGlow(deckZoneLeft, '#ef4444', brightnessAlpha);
      applyDeckKeyGlow(deckZoneMid, '#10b981', brightnessAlpha);
      applyDeckKeyGlow(deckZoneRight, '#3b82f6', brightnessAlpha);
    }
  }

  function applyZoneColorsToDeck(alpha) {
    const c0 = simState.zoneColors[0];
    const c1 = simState.zoneColors[1];
    const c2 = simState.zoneColors[2];

    btnZoneLeft.style.backgroundColor = c0 + '33';
    btnZoneLeft.style.borderColor = c0;
    btnZoneMid.style.backgroundColor = c1 + '33';
    btnZoneMid.style.borderColor = c1;
    btnZoneRight.style.backgroundColor = c2 + '33';
    btnZoneRight.style.borderColor = c2;

    deckZoneLeft.style.color = c0;
    deckZoneMid.style.color = c1;
    deckZoneRight.style.color = c2;

    applyDeckKeyGlow(deckZoneLeft, c0, alpha);
    applyDeckKeyGlow(deckZoneMid, c1, alpha);
    applyDeckKeyGlow(deckZoneRight, c2, alpha);

    // Update active swatch indicator
    brdModeColorIndicator.style.backgroundColor = simState.zoneColors[simState.activeZone];
  }

  function setDeckAllColor(color, alpha) {
    [deckZoneLeft, deckZoneMid, deckZoneRight].forEach(zone => {
      zone.style.color = color;
      applyDeckKeyGlow(zone, color, alpha);
    });
  }

  function applyDeckKeyGlow(deckZone, color, alpha) {
    const keys = deckZone.querySelectorAll('.matrix-key');
    const label = deckZone.querySelector('.deck-zone-color-label');
    if (label) label.textContent = color.toUpperCase();

    keys.forEach(k => {
      if (alpha === 0) {
        k.style.boxShadow = 'none';
        k.style.borderColor = 'rgba(255,255,255,0.06)';
        k.style.backgroundColor = '#151a24';
      } else {
        k.style.boxShadow = `0 0 10px ${color}`;
        k.style.borderColor = color;
        k.style.backgroundColor = color + '22';
      }
    });
  }

  cmbLedMode.addEventListener('change', (e) => {
    simState.rgbMode = e.target.value;
    applyRgbVisuals();
  });

  // Cycle color on Color button click
  btnModeColorAction.addEventListener('click', () => {
    const nextIdx = (simState.colorPalette.indexOf(simState.zoneColors[simState.activeZone]) + 1) % simState.colorPalette.length;
    const nextColor = simState.colorPalette[nextIdx];
    simState.zoneColors[simState.activeZone] = nextColor;
    applyRgbVisuals();
  });

  // Zone buttons inside Virtual App
  [btnZoneLeft, btnZoneMid, btnZoneRight].forEach((b, idx) => {
    b.addEventListener('click', () => {
      [btnZoneLeft, btnZoneMid, btnZoneRight].forEach(btn => btn.classList.remove('active'));
      b.classList.add('active');
      simState.activeZone = idx;
      brdModeColorIndicator.style.backgroundColor = simState.zoneColors[idx];
      // Switch color smoothly
      const nextIdx = (simState.colorPalette.indexOf(simState.zoneColors[idx]) + 1) % simState.colorPalette.length;
      simState.zoneColors[idx] = simState.colorPalette[nextIdx];
      applyRgbVisuals();
    });
  });

  // Brightness slider
  sliderBrightness.addEventListener('input', (e) => {
    const val = parseInt(e.target.value);
    simState.brightness = val;
    txtBrightnessIcon.textContent = val === 0 ? '%0' : (val === 1 ? '%50' : '%100');
    applyRgbVisuals();
  });

  // Initial Simulator setup
  setPowerMode('gaming');
  applyRgbVisuals();

  // -----------------------------------------------------------------
  // 3. Theme Toggle (Dark / Light)
  // -----------------------------------------------------------------
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  const themeIcon = document.getElementById('themeIcon');

  function initTheme() {
    const savedTheme = localStorage.getItem('ehelper_theme') || 'dark';
    setTheme(savedTheme);
  }

  function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('ehelper_theme', theme);

    if (theme === 'light') {
      themeIcon.innerHTML = `
        <circle cx="12" cy="12" r="5"></circle>
        <line x1="12" y1="1" x2="12" y2="3"></line>
        <line x1="12" y1="21" x2="12" y2="23"></line>
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
        <line x1="1" y1="12" x2="3" y2="12"></line>
        <line x1="21" y1="12" x2="23" y2="12"></line>
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
      `;
      themeToggleBtn.setAttribute('title', 'Koyu Temaya Geç');
    } else {
      themeIcon.innerHTML = `
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
      `;
      themeToggleBtn.setAttribute('title', 'Açık Temaya Geç');
    }
  }

  themeToggleBtn.addEventListener('click', () => {
    const cur = document.documentElement.getAttribute('data-theme') || 'dark';
    setTheme(cur === 'dark' ? 'light' : 'dark');
  });

  initTheme();

  // -----------------------------------------------------------------
  // 4. Multi-Language Switcher (TR / EN)
  // -----------------------------------------------------------------
  const langToggleBtn = document.getElementById('langToggleBtn');
  const langLabel = document.getElementById('langLabel');

  function updatePageLanguage(lang) {
    currentLang = lang;
    langLabel.textContent = lang.toUpperCase();

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (i18n[lang] && i18n[lang][key]) {
        el.textContent = i18n[lang][key];
      }
    });

    // Refresh mode labels inside simulator
    setPowerMode(simState.mode);
  }

  langToggleBtn.addEventListener('click', () => {
    const nextLang = currentLang === 'tr' ? 'en' : 'tr';
    updatePageLanguage(nextLang);
  });

  // -----------------------------------------------------------------
  // 5. Changelog Tabs Filter
  // -----------------------------------------------------------------
  const changelogTabs = document.querySelectorAll('.tab-btn');
  const timelineEntries = document.querySelectorAll('.timeline-entry');

  changelogTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      changelogTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const filter = tab.getAttribute('data-filter');

      timelineEntries.forEach(entry => {
        if (filter === 'all') {
          entry.style.display = 'block';
        } else if (filter === 'major') {
          entry.style.display = entry.classList.contains('major-ver') ? 'block' : 'none';
        } else if (filter === 'patches') {
          entry.style.display = entry.classList.contains('patch-ver') ? 'block' : 'none';
        }
      });
    });
  });

  // -----------------------------------------------------------------
  // 6. Mobile Menu Drawer Toggle
  // -----------------------------------------------------------------
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const siteNav = document.getElementById('siteNav');

  if (mobileMenuBtn && siteNav) {
    mobileMenuBtn.addEventListener('click', () => {
      siteNav.classList.toggle('mobile-active');
    });

    siteNav.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        siteNav.classList.remove('mobile-active');
      });
    });
  }

  // -----------------------------------------------------------------
  // 7. Active Nav Spy on Scroll
  // -----------------------------------------------------------------
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;
    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  });
});
