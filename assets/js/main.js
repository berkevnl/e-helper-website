/* ===================================================================
   E-Helper Showcase & Portal — Interactive Core Script
   Features: Hardware Simulator, Dynamic 3-Zone RGB Engine, TR/EN i18n, Theme Switcher
   =================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // -----------------------------------------------------------------
  // 1. Language Dictionary (TR & EN) - Clean & User Friendly
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
      heroSubtitle: "Üreticinin yüzlerce MB RAM harcayan ağır yazılımına elveda deyin. Arka planda 1-10 MB, aktif ekranda ~40-50 MB bellek kullanımı, sıfır arka plan servisi ve doğrudan donanım yönetimi.",
      downloadCta: "E-Helper.exe İndir (v1.1.1)",
      githubCta: "GitHub'da İncele",
      metaReq: "Windows 10/11 • Kurulumsuz Tek Dosya (~65 MB) • Taşınabilir",
      statRamVal: "1-10 MB",
      statRamLbl: "Arka Plan RAM",
      statRamDesc: "Aktif ekranda ~40-50 MB",
      statSvcVal: "0 Servis",
      statSvcLbl: "Arka Plan Yükü",
      statSvcDesc: "Sıfır CPU sömürüsü ve telemetri",
      statEcVal: "ACPI SMI",
      statEcLbl: "Donanım Köprüsü",
      statEcDesc: "G-Helper felsefesiyle yerel haberleşme",
      statLicVal: "GPL-3.0",
      statLicLbl: "Açık Kaynak",
      statLicDesc: "Topluluk destekli, tam şeffaf",
      simBadge: "İnteraktif Deneyim",
      simTitle: "E-Helper'ı Tarayıcınızda Canlı Deneyin",
      simSubtitle: "Aşağıdaki sanal kontrol panelinde modları değiştirin, RGB modlarını ve parlaklık sürgüsünü test edin; sanal klavyenin anında nasıl tepki verdiğini izleyin.",
      simExplainer: "Bu simülatör, gerçek E-Helper WPF arayüzünün ve Excalibur klavye/fan tepkilerinin birebir görselleştirilmiş halidir.",
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
      gaugeAcoustic: "Gürültü Seviyesi",
      compBadge: "Neden E-Helper?",
      compTitle: "Resmi Control Center ile Karşılaştırma",
      compSubtitle: "Gerçek kullanıcı ve donanım verilerine dayalı teknik kıyaslama.",
      colFeature: "Kriter & Özellik",
      colEHelper: "E-Helper (Önerilen)",
      colOfficial: "Resmi Excalibur Control Center",
      featBadge: "Yetkinlikler",
      featTitle: "İhtiyacınız Olan Kontroller, Tek Parçada",
      featSubtitle: "Gereksiz karmaşadan arındırılmış, sadece oyuncuların kullandığı pratik donanım ayarları.",
      guideBadge: "Kolay Başlangıç",
      guideTitle: "3 Adımda Kullanmaya Başlayın",
      guideSubtitle: "Kurulum gerekmez. İndirin, çalıştırın ve keyfini çıkarın.",
      hwBadge: "Uyumluluk",
      hwTitle: "Desteklenen Casper Excalibur Cihazlar",
      hwSubtitle: "Casper Excalibur anakart denetleyicisi ile doğrudan test edilmiş modeller.",
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
      heroSubtitle: "Say goodbye to manufacturer bloatware taking hundreds of MBs of RAM. Enjoy 1-10 MB in tray, ~40-50 MB on screen, zero background services, and direct hardware communication.",
      downloadCta: "Download E-Helper.exe (v1.1.1)",
      githubCta: "View on GitHub",
      metaReq: "Windows 10/11 • Single Binary (~65 MB) • No Install",
      statRamVal: "1-10 MB",
      statRamLbl: "Background RAM",
      statRamDesc: "~40-50 MB on active screen",
      statSvcVal: "0 Services",
      statSvcLbl: "Background Overhead",
      statSvcDesc: "Zero CPU drain and zero telemetry",
      statEcVal: "ACPI SMI",
      statEcLbl: "Hardware Bridge",
      statEcDesc: "G-Helper philosophy native hardware link",
      statLicVal: "GPL-3.0",
      statLicLbl: "Open Source",
      statLicDesc: "Community-driven, completely transparent",
      simBadge: "Interactive Demo",
      simTitle: "Experience E-Helper Live in Browser",
      simSubtitle: "Switch performance modes, RGB lighting presets, and adjust the brightness slider to see the simulated keyboard react instantly.",
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
      gaugeAcoustic: "Noise Level",
      compBadge: "Why E-Helper?",
      compTitle: "Comparison with Official Control Center",
      compSubtitle: "Technical benchmarks based on actual hardware and community data.",
      colFeature: "Criteria & Specs",
      colEHelper: "E-Helper (Recommended)",
      colOfficial: "Official Excalibur Control Center",
      featBadge: "Capabilities",
      featTitle: "Everything You Need, In One Compact Tray",
      featSubtitle: "Manage the exact hardware parameters you care about at blazing speeds.",
      guideBadge: "Quick Start",
      guideTitle: "Get Started in 3 Simple Steps",
      guideSubtitle: "No bulky install wizards. Download, run, and enjoy.",
      hwBadge: "Compatibility",
      hwTitle: "Supported Casper Excalibur Models",
      hwSubtitle: "Tested and verified directly on Casper Excalibur motherboard controllers.",
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
  // 2. Hardware & RGB Simulator State & Animation Engine
  // -----------------------------------------------------------------
  const simState = {
    mode: 'gaming', // office | gaming | highperf
    rgbMode: 'TripleZone', // Static, Breathing, ColorfulCycle, Rainbow, TripleZone
    brightness: 2, // 0: Off (%0), 1: Mid (%50), 2: Full (%100)
    activeZone: 0, // 0: Left (WASD), 1: Center, 2: Right (Numpad)
    zoneColors: ['#00f0ff', '#10b981', '#ef4444'],
    colorPalette: ['#00f0ff', '#10b981', '#ef4444', '#f59e0b', '#8b5cf6', '#ec4899', '#ffffff', '#3b82f6'],
    cpuTemp: 62,
    cpuRpm: 3150,
    gpuTemp: 58,
    gpuRpm: 2950
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

  // -----------------------------------------------------------------
  // 3. Power Mode Handler
  // -----------------------------------------------------------------
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
      gaugeAcousticReading.textContent = currentLang === 'tr' ? "18 dB (Sessiz)" : "18 dB (Silent)";
    } else if (mode === 'gaming') {
      btnGaming.classList.add('active');
      txtPowerModeTitle.textContent = currentLang === 'tr' ? "Performans Modu: Dengeli" : "Power Mode: Balanced";
      readoutMode.textContent = currentLang === 'tr' ? "Dengeli (Gaming)" : "Balanced";
      readoutWatts.textContent = "75W TDP";
      fanIconCpu.classList.add('spinning');
      fanIconGpu.classList.add('spinning');
      fanIconCpu.style.animationDuration = '1.2s';
      fanIconGpu.style.animationDuration = '1.2s';
      gaugeAcousticReading.textContent = currentLang === 'tr' ? "34 dB (Standart)" : "34 dB (Normal)";
    } else if (mode === 'highperf') {
      btnHighPerf.classList.add('active');
      txtPowerModeTitle.textContent = currentLang === 'tr' ? "Performans Modu: Performans" : "Power Mode: Turbo";
      readoutMode.textContent = currentLang === 'tr' ? "Performans (Turbo)" : "Turbo / Max";
      readoutWatts.textContent = "115W TDP";
      fanIconCpu.classList.add('spinning');
      fanIconGpu.classList.add('spinning');
      fanIconCpu.style.animationDuration = '0.5s';
      fanIconGpu.style.animationDuration = '0.5s';
      gaugeAcousticReading.textContent = currentLang === 'tr' ? "48 dB (Yüksek Devir)" : "48 dB (High Speed)";
    }

    updateTelemetryStats(true);
  }

  btnOffice.addEventListener('click', () => setPowerMode('office'));
  btnGaming.addEventListener('click', () => setPowerMode('gaming'));
  btnHighPerf.addEventListener('click', () => setPowerMode('highperf'));

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

  setInterval(() => {
    updateTelemetryStats(false);
  }, 2500);

  // -----------------------------------------------------------------
  // 4. Dynamic RGB Keyboard Engine (Breathing, Rainbow, Dynamic Cycle)
  // -----------------------------------------------------------------
  let rgbAnimationId = null;
  let dynamicCycleTimer = null;
  let animationTime = 0;

  // Render individual zone styling & glow based on brightness
  // (Hex color code text labels are intentionally omitted as requested)
  function renderDeckZone(deckZone, color, brightnessLevel, pulseFactor = 1) {
    const keys = deckZone.querySelectorAll('.matrix-key');

    // Brightness levels:
    // 0: Kapalı (%0) -> Dark keycaps, zero glow, opacity 0.2
    // 1: Orta (%50)  -> Soft gentle glow, opacity ~0.55 * pulseFactor
    // 2: Tam (%100)  -> Full neon glow, opacity ~1.0 * pulseFactor
    if (brightnessLevel === 0 || pulseFactor <= 0.02) {
      keys.forEach(k => {
        k.style.boxShadow = 'none';
        k.style.borderColor = 'rgba(255, 255, 255, 0.08)';
        k.style.backgroundColor = '#161d2b';
        k.style.opacity = '0.2';
      });
    } else if (brightnessLevel === 1) {
      const glowAlpha = (0.55 * pulseFactor).toFixed(2);
      keys.forEach(k => {
        k.style.boxShadow = `0 0 6px ${color}`;
        k.style.borderColor = color;
        k.style.backgroundColor = color + '2e';
        k.style.opacity = glowAlpha;
      });
    } else {
      const glowAlpha = (1.0 * pulseFactor).toFixed(2);
      keys.forEach(k => {
        k.style.boxShadow = `0 0 14px ${color}, 0 0 4px ${color}`;
        k.style.borderColor = color;
        k.style.backgroundColor = color + '52';
        k.style.opacity = glowAlpha;
      });
    }
  }

  // Stop running animations
  function stopRgbAnimations() {
    if (rgbAnimationId) {
      cancelAnimationFrame(rgbAnimationId);
      rgbAnimationId = null;
    }
    if (dynamicCycleTimer) {
      clearInterval(dynamicCycleTimer);
      dynamicCycleTimer = null;
    }
  }

  // Start chosen RGB Mode
  function startRgbMode() {
    stopRgbAnimations();
    const mode = simState.rgbMode;
    const b = simState.brightness;

    // TripleZone map visibility & indicators
    if (mode === 'TripleZone') {
      pnlTripleZoneDiagram.style.display = 'grid';
      btnZoneLeft.style.borderColor = simState.zoneColors[0];
      btnZoneMid.style.borderColor = simState.zoneColors[1];
      btnZoneRight.style.borderColor = simState.zoneColors[2];
      brdModeColorIndicator.style.backgroundColor = simState.zoneColors[simState.activeZone];

      renderDeckZone(deckZoneLeft, simState.zoneColors[0], b);
      renderDeckZone(deckZoneMid, simState.zoneColors[1], b);
      renderDeckZone(deckZoneRight, simState.zoneColors[2], b);
    } else {
      pnlTripleZoneDiagram.style.display = 'none';
    }

    if (mode === 'Static') {
      const color = simState.zoneColors[0];
      brdModeColorIndicator.style.backgroundColor = color;
      brdModeColorIndicator.style.opacity = '1';
      renderDeckZone(deckZoneLeft, color, b);
      renderDeckZone(deckZoneMid, color, b);
      renderDeckZone(deckZoneRight, color, b);
    } else if (mode === 'Breathing') {
      // User requested: "hızını azalt ve renk tamamen gitsin, öyle geri gelsin"
      const color = simState.zoneColors[0];
      brdModeColorIndicator.style.backgroundColor = color;

      function breatheStep() {
        animationTime += 0.016; // Relaxed, slow breath pace (~5.5s cycle)
        const rawSin = Math.sin(animationTime);
        // Remap so that at the bottom of the sine wave it drops cleanly to 0.0 (completely off)
        let pulse = (rawSin + 0.75) / 1.75;
        if (pulse < 0) pulse = 0;
        if (pulse > 1) pulse = 1;
        // Smoothstep easing for natural inhalation/exhalation
        const smoothPulse = pulse * pulse * (3 - 2 * pulse);

        renderDeckZone(deckZoneLeft, color, b, smoothPulse);
        renderDeckZone(deckZoneMid, color, b, smoothPulse);
        renderDeckZone(deckZoneRight, color, b, smoothPulse);
        brdModeColorIndicator.style.opacity = (0.05 + 0.95 * smoothPulse).toFixed(2);
        rgbAnimationId = requestAnimationFrame(breatheStep);
      }
      breatheStep();
    } else if (mode === 'Rainbow') {
      // User requested: "sağdan ve soldan ortaya doğru kayarak renk geçişi sağlansın tüm renkler için"
      function rainbowStep() {
        animationTime += 1.2;
        const outerHue = Math.floor(animationTime) % 360;
        // Center zone lags, so waves slide from outer Left & Right into Center
        const centerHue = Math.floor(animationTime - 70 + 360) % 360;

        const outerColor = `hsl(${outerHue}, 100%, 55%)`;
        const centerColor = `hsl(${centerHue}, 100%, 55%)`;
        brdModeColorIndicator.style.backgroundColor = outerColor;
        brdModeColorIndicator.style.opacity = '1';

        renderDeckZone(deckZoneLeft, outerColor, b);
        renderDeckZone(deckZoneRight, outerColor, b);
        renderDeckZone(deckZoneMid, centerColor, b);

        rgbAnimationId = requestAnimationFrame(rainbowStep);
      }
      rainbowStep();
    } else if (mode === 'ColorfulCycle') {
      // User requested: "dinamik modda 3 bölgeli şekilde renkler dinamik olarak rastgele değişmeli"
      function pickRandomVibrantColor(exclude) {
        const pool = simState.colorPalette.filter(c => c !== exclude && c !== '#ffffff');
        return pool[Math.floor(Math.random() * pool.length)];
      }

      function cycleZones() {
        const c0 = pickRandomVibrantColor(deckZoneLeft.dataset.lastColor);
        const c1 = pickRandomVibrantColor(c0);
        const c2 = pickRandomVibrantColor(c1);

        deckZoneLeft.dataset.lastColor = c0;
        deckZoneMid.dataset.lastColor = c1;
        deckZoneRight.dataset.lastColor = c2;

        renderDeckZone(deckZoneLeft, c0, b);
        renderDeckZone(deckZoneMid, c1, b);
        renderDeckZone(deckZoneRight, c2, b);
        brdModeColorIndicator.style.backgroundColor = c0;
        brdModeColorIndicator.style.opacity = '1';
      }

      cycleZones();
      dynamicCycleTimer = setInterval(cycleZones, 1400);
    }
  }

  // Brightness slider change (0, 1, 2)
  sliderBrightness.addEventListener('input', (e) => {
    const val = parseInt(e.target.value);
    simState.brightness = val;
    txtBrightnessIcon.textContent = val === 0 ? '%0' : (val === 1 ? '%50' : '%100');
    startRgbMode();
  });

  // RGB mode selector
  cmbLedMode.addEventListener('change', (e) => {
    simState.rgbMode = e.target.value;
    startRgbMode();
  });

  // Color button click: cycle colors in active zone
  btnModeColorAction.addEventListener('click', () => {
    const curColor = simState.zoneColors[simState.activeZone];
    const nextIdx = (simState.colorPalette.indexOf(curColor) + 1) % simState.colorPalette.length;
    const nextColor = simState.colorPalette[nextIdx];

    simState.zoneColors[simState.activeZone] = nextColor;
    if (simState.rgbMode === 'Static' || simState.rgbMode === 'Breathing') {
      simState.zoneColors[0] = nextColor;
    }
    brdModeColorIndicator.style.backgroundColor = nextColor;
    startRgbMode();
  });

  // Zone tabs inside 3-Zone map
  [btnZoneLeft, btnZoneMid, btnZoneRight].forEach((b, idx) => {
    b.addEventListener('click', () => {
      [btnZoneLeft, btnZoneMid, btnZoneRight].forEach(btn => btn.classList.remove('active'));
      b.classList.add('active');
      simState.activeZone = idx;

      // Cycle zone color
      const curColor = simState.zoneColors[idx];
      const nextIdx = (simState.colorPalette.indexOf(curColor) + 1) % simState.colorPalette.length;
      simState.zoneColors[idx] = simState.colorPalette[nextIdx];
      startRgbMode();
    });
  });

  // Initialize Simulator
  setPowerMode('gaming');
  startRgbMode();

  // -----------------------------------------------------------------
  // 5. Theme Toggle (Ensuring All Sections Clearly Adapt)
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

    startRgbMode();
  }

  themeToggleBtn.addEventListener('click', () => {
    const cur = document.documentElement.getAttribute('data-theme') || 'dark';
    setTheme(cur === 'dark' ? 'light' : 'dark');
  });

  initTheme();

  // -----------------------------------------------------------------
  // 6. Multi-Language Switcher (TR / EN)
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

    setPowerMode(simState.mode);
  }

  langToggleBtn.addEventListener('click', () => {
    const nextLang = currentLang === 'tr' ? 'en' : 'tr';
    updatePageLanguage(nextLang);
  });

  // -----------------------------------------------------------------
  // 7. Changelog Filter Tabs
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
  // 8. Mobile Menu Toggle
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
  // 9. Active Nav Indicator on Scroll
  // -----------------------------------------------------------------
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;
    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 100;
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
