/* ===================================================================
   E-Helper Showcase & Portal — Interactive Core Script
   Features: Hardware Simulator, Dynamic 3-Zone RGB Engine, Complete TR/EN i18n, Theme Switcher
   =================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // -----------------------------------------------------------------
  // 1. Comprehensive Language Dictionary (TR & EN) - Full Page Coverage
  // -----------------------------------------------------------------
  const i18n = {
    tr: {
      // Header & Navigation
      navFeatures: "Özellikler",
      navSimulator: "Canlı Simülatör",
      navComparison: "Karşılaştırma",
      navGuide: "Kullanım",
      navHardware: "Donanım",
      navChangelog: "Sürümler",
      downloadBtn: "İndir (v1.1.1)",

      // Hero Section
      heroPill: "Casper Excalibur Dizüstü Bilgisayarlar İçin Özel",
      heroTitle1: "Casper Excalibur Dizüstü Bilgisayarınız İçin",
      heroTitleGrad: "Ultra Hafif Kontrol Merkezi",
      heroSubtitle: "Üreticinin yüzlerce MB RAM harcayan ağır yazılımına elveda deyin. Arka planda 1-10 MB, aktif ekranda ~40-50 MB bellek kullanımı, sıfır arka plan servisi ve doğrudan donanım yönetimi.",
      downloadCta: "E-Helper.exe İndir (v1.1.1)",
      githubCta: "GitHub'da İncele",
      metaReq: "Windows 10/11 • Kurulumsuz Tek Dosya (~65 MB) • Taşınabilir",

      // Hero Key Metrics Strip
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

      // Interactive Simulator Header & Explainer
      simBadge: "İnteraktif Deneyim",
      simTitle: "E-Helper'ı Tarayıcınızda Canlı Deneyin",
      simSubtitle: "Aşağıdaki sanal kontrol panelinde modları değiştirin, RGB modlarını ve parlaklık sürgüsünü test edin; sanal klavyenin anında nasıl tepki verdiğini izleyin.",
      simExplainer: "Bu simülatör, gerçek E-Helper WPF uygulamasının ve Excalibur klavye/fan tepkilerinin birebir görselleştirilmiş halidir.",

      // Simulator Controls & Labels
      simPowerTitle: "Performans Modu",
      modeOffice: "Tasarruf",
      modeGaming: "Dengeli",
      modeHighPerf: "Performans",
      simGpuTitle: "GPU Modu: Ayrık / Hibrit",
      simRamTitle: "RAM Bellek",
      simSsdTitle: "SSD Disk (C:)",
      simKbdTitle: "Laptop Klavyesi",
      simBrightnessLbl: "Parlaklık",
      simColorBtn: "Renk",
      simZoneLeft: "Sol (WASD)",
      simZoneMid: "Orta",
      simZoneRight: "Sağ (Num)",
      simStartupLbl: "Başlangıçta Çalıştır",

      // RGB Dropdown Options
      optTripleZone: "🎨 3-Bölge Özel",
      optStatic: "✨ Sabit Renk",
      optBreathing: "💨 Nefes Alma",
      optColorfulCycle: "💫 Dinamik Döngü",
      optRainbow: "🌈 Gökkuşağı",

      // Chassis & Deck Readouts
      chassisHeader: "Casper Excalibur Klavye & Fan Tepkisi",
      lblMode: "Mod:",
      lblPower: "Güç:",
      deckZone1Title: "Bölge 1: WASD",
      deckZone1Sub: "WASD & Sayılar",
      deckZone2Title: "Bölge 2: Orta",
      deckZone2Sub: "Yazı & Boşluk",
      deckZone3Title: "Bölge 3: Numpad",
      deckZone3Sub: "Numpad",

      // Telemetry Gauges
      gaugeCpuFan: "CPU Fanı",
      gaugeGpuFan: "GPU Fanı",
      gaugeAcoustic: "Gürültü Seviyesi",

      // Dynamic Acoustic Statuses
      acousticEco: "18 dB (Sessiz)",
      acousticBalanced: "34 dB (Standart)",
      acousticTurbo: "48 dB (Yüksek Devir)",

      // Comparison Section Header & Table Headers
      compBadge: "Neden E-Helper?",
      compTitle: "Resmi Control Center ile Karşılaştırma",
      compSubtitle: "Gerçek kullanıcı ve donanım verilerine dayalı teknik kıyaslama.",
      colFeature: "Kriter & Özellik",
      colEHelper: "E-Helper (Önerilen)",
      colOfficial: "Resmi Excalibur Control Center",

      // Comparison Rows
      compRowRam: "RAM Bellek Tüketimi",
      compEhRam: "~1 - 10 MB (Arka Planda) / ~40 - 50 MB (Aktif Ekranda)",
      compOffRam: "~180 - 350+ MB (Sürekli Arka Plan)",
      compRowSvc: "Arka Plan Windows Servisleri",
      compEhSvc: "0 Servis (Sıfır sistem yükü)",
      compOffSvc: "2 - 4 Adet Sürekli Çalışan Servis",
      compRowStart: "Açılış Hızı & UAC Onayı",
      compEhStart: "Anında (<0.2 sn), Görev Zamanlayıcısı ile UAC'siz",
      compOffStart: "10 - 25 sn gecikmeli Windows başlangıcı",
      compRowPersist: "Yeniden Başlatmada Ayar Kalıcılığı",
      compEhPersist: "Tam Kalıcı (EC Firmware Senkronizasyonu)",
      compOffPersist: "Kararsız (Yeniden başlatmada sıfırlanma)",
      compRowSize: "Gerçek Dosya Boyutu",
      compEhSize: "~65 MB Tek Dosya (.exe, Kurulumsuz)",
      compOffSize: "~200 - 350 MB Setup Yükleyici Paketi",
      compRowPrivacy: "Veri Gizliliği & Telemetri",
      compEhPrivacy: "Sıfır Telemetri (Tamamen yerel & çevrimdışı)",
      compOffPrivacy: "Sürekli Arka Plan Tanılama ve Loglama",
      compRowLicense: "Lisans & Topluluk Desteği",
      compEhLicense: "GPL-3.0 (Açık Kaynak, Şeffaf)",
      compOffLicense: "Kapalı Kaynak, Kısıtlı Güncelleme Döngüsü",

      // Features Section
      featBadge: "Yetkinlikler",
      featTitle: "İhtiyacınız Olan Kontroller, Tek Parçada",
      featSubtitle: "Gereksiz karmaşadan arındırılmış, sadece oyuncuların kullandığı pratik donanım ayarları.",
      featCard1Title: "3 Performans Modu",
      featCard1Desc: "Tasarruf, Dengeli ve Performans profilleri arasında tek tıkla geçiş yapın. Windows yerel güç planlarıyla otomatik senkronize çalışır.",
      featCard2Title: "Canlı Sıcaklık & Fan İzleme",
      featCard2Desc: "İşlemci ve ekran kartı sıcaklıklarını ve bağımsız fan devirlerini (RPM) sistem tepsisi üzerinden anlık olarak takip edin.",
      featCard3Title: "3-Bölge RGB Klavye",
      featCard3Desc: "WASD, Orta ve Numpad bölgelerine bağımsız renkler atayın. Sabit, nefes alma, gökkuşağı veya dinamik modları tek tıkla seçin.",
      featCard4Title: "Kalıcı Ayar Korunumu",
      featCard4Desc: "Bilgisayar yeniden başlatıldığında klavye renkleri ve fan modunuz kaybolmaz; anakart EC denetleyicisi ile otomatik eşitlenir.",
      featCard5Title: "UAC'siz Otomatik Başlangıç",
      featCard5Desc: "Windows Görev Zamanlayıcısı entegrasyonu sayesinde açılışta onay uyarısı vermeden sistem tepsisine sessizce yerleşir.",
      featCard6Title: "Dahili Güncelleyici",
      featCard6Desc: "v1.1.1 ile gelen entegre güncelleme motoru yeni sürümleri GitHub API üzerinden denetler ve tek tıkla kendini günceller.",

      // Guide Section
      guideBadge: "Kolay Başlangıç",
      guideTitle: "3 Adımda Kullanmaya Başlayın",
      guideSubtitle: "Kurulum gerekmez. İndirin, çalıştırın ve keyfini çıkarın.",
      step1Badge: "1. İndir",
      step1Title: "E-Helper.exe'yi Edinin",
      step1Desc: "Releases sayfasından son sürümü bilgisayarınıza indirin. Herhangi bir kurulum sihirbazı veya ekstra paket gerekmez.",
      step1Tip: "Sadece ~65 MB tek dosya halinde çalışır.",
      step2Badge: "2. Çalıştır",
      step2Title: "Yönetici Olarak Açın",
      step2Desc: "Dosyaya sağ tıklayıp \"Yönetici Olarak Çalıştır\" deyin. Excalibur ACPI anakart denetleyicisine erişim için bu izin zorunludur.",
      step2Tip: "Güvenli ve şeffaf ACPI WMI/SMI erişimi.",
      step3Badge: "3. Yönet",
      step3Title: "Sistem Tepsisinden Kontrol Edin",
      step3Desc: "Saatin yanındaki simgeye tıklayarak paneli açın, fan ve RGB ayarlarınızı anında yapın. İsterseniz başlangıca ekleyin.",
      step3Tip: "\"Başlangıçta Çalıştır\" kutucuğunu işaretleyin.",

      // Hardware Section
      hwBadge: "Uyumluluk",
      hwTitle: "Desteklenen Casper Excalibur Cihazlar",
      hwSubtitle: "Casper Excalibur anakart denetleyicisi ile doğrudan test edilmiş modeller.",
      hwVerified: "Doğrulandı",
      hwCompatible: "Uyumlu",

      // Changelog Section
      clBadge: "Sürüm Geçmişi",
      clTitle: "Güncellemeler ve Sürüm Notları",
      clSubtitle: "E-Helper sürekli gelişiyor. Yapılan tüm iyileştirmeleri ve eklenen yenilikleri buradan takip edebilirsiniz.",
      tabAll: "Tüm Sürümler",
      tabMajor: "Büyük Sürümler",
      tabPatches: "Hata Düzeltmeleri",
      clLatestPill: "En Güncel",
      clDate111: "12 Ekim 2026",
      cl111_1: "Otomatik Güncelleme: GitHub API üzerinden yeni sürümleri denetleme ve tek tıkla kesintisiz yeniden başlatarak güncelleme.",
      cl111_2: "Yenilenen Alt Çubuk: Daha sade footer arayüzü ve sürüm etiketleri.",
      cl111_3: "Bellek İyileştirmesi: Boşta bellek tüketimi 1-10 MB bandında optimize edildi.",
      clDetailsBtn111: "v1.1.1 Sürüm Detayları →",

      clDate110: "12 Ekim 2026",
      cl110_1: "3-Bölge RGB Aydınlatma: Sol (WASD), Orta ve Sağ bölgeler için bağımsız renk ve mod tanımlama.",
      cl110_2: "2D Renk Paleti: Windows 11 tarzı gelişmiş renk seçici ve Hex/RGB desteği.",
      cl110_3: "Dolgulu Parlaklık: 3 kademeli (0, 1, 2) donanımsal parlaklık çubuğu.",
      cl110_4: "SSD & RAM Telemetrisi: Bellek ve disk kullanımını gösteren canlı paneller.",
      clDetailsBtn110: "v1.1.0 Sürüm Detayları →",

      clDate101: "9 Ekim 2026",
      cl101_1: "Başlangıç Yaması: Görev Zamanlayıcısı ile otomatik açılış uyumluluğu artırıldı.",
      cl101_2: "UI Sürüm Etiketi: Sürüm numarası gösterimindeki uyumsuzluk düzeltildi.",
      clDetailsBtn101: "v1.0.1 Sürüm Detayları →",

      clDate100: "9 Ekim 2026",
      cl100_1: "İlk Kararlı Sürüm: Casper Excalibur oyuncu bilgisayarları için bağımsız donanım yönetim aracı yayınlandı.",
      cl100_2: "ACPI SMI Köprüsü: Üretici servislerine gerek kalmadan doğrudan anakartla iletişim.",
      cl100_3: "Güç Modları: Tasarruf, Dengeli ve Performans profilleri.",
      clDetailsBtn100: "v1.0.0 Sürüm Detayları →",

      // FAQ Section
      faqBadge: "SSS",
      faqTitle: "Sıkça Sorulan Sorular",
      faqSubtitle: "E-Helper hakkında en çok merak edilen sorular.",
      faqQ1: "Resmi Excalibur Control Center'ı silmeli miyim?",
      faqA1: "Zorunlu değildir; ancak arka planda gereksiz servis çalışmasını önlemek ve maksimum RAM tasarrufu sağlamak için resmi yazılımın servislerini kapatmanız önerilir.",
      faqQ2: "Neden Yönetici Olarak Çalıştırılıyor?",
      faqA2: "Windows'ta anakartın gömülü ACPI WMI/SMI denetleyicisine ve ekran kartı NVML donanım sensörlerine erişebilmek için standart olarak yönetici izni gereklidir.",
      faqQ3: "Bilgisayarımı garanti dışı bırakır mı?",
      faqA3: "Hayır. E-Helper tehlikeli bir hız aşırtma (overclock) veya BIOS yazma işlemi yapmaz; sadece anakartın standart fan ve ışık komutlarını tetikler.",
      faqQ4: "Diğer markalarda (Asus, Lenovo vb.) çalışır mı?",
      faqA4: "Hayır. E-Helper yalnızca Casper Excalibur donanımına özeldir. Asus bilgisayarlar için G-Helper'ı tercih edebilirsiniz.",

      // Footer Section
      footerDesc: "Casper Excalibur dizüstü bilgisayarlar için açık kaynaklı, bağımsız ve ultra hafif kontrol merkezi.",
      footerGhRepo: "GitHub Deposu",
      footerLatestRelease: "Son Sürüm (v1.1.1)",
      footerColLinks: "Bağlantılar",
      footerColCommunity: "Topluluk & Lisans",
      footerLicense: "GPL-3.0 Lisansı",
      footerReport: "Hata Bildir",
      footerInspiration: "G-Helper (İlham)",
      footerDev: "Geliştirici Profili",
      footerDisclaimer: "Yasal Bildirim: Casper, Excalibur, Windows ve NVIDIA ilgili hak sahiplerinin ticari markalarıdır. E-Helper bağımsız ve açık kaynaklı bir topluluk projesidir.",
      footerCopy: "© 2026 E-Helper • GNU Genel Kamu Lisansı v3.0 (GPL-3.0)",
      footerDesign: "Tasarım: Precision Stealth & Hardware Telemetry"
    },
    en: {
      // Header & Navigation
      navFeatures: "Features",
      navSimulator: "Live Demo",
      navComparison: "Comparison",
      navGuide: "Guide",
      navHardware: "Hardware",
      navChangelog: "Changelog",
      downloadBtn: "Download (v1.1.1)",

      // Hero Section
      heroPill: "Tailored for Casper Excalibur Gaming Laptops",
      heroTitle1: "Ultra-Lightweight Control Center for",
      heroTitleGrad: "Casper Excalibur Laptops",
      heroSubtitle: "Say goodbye to manufacturer bloatware taking hundreds of MBs of RAM. Enjoy 1-10 MB in background, ~40-50 MB on active screen, zero background services, and direct hardware communication.",
      downloadCta: "Download E-Helper.exe (v1.1.1)",
      githubCta: "View on GitHub",
      metaReq: "Windows 10/11 • Single File (~65 MB) • Portable",

      // Hero Key Metrics Strip
      statRamVal: "1-10 MB",
      statRamLbl: "Background RAM",
      statRamDesc: "~40-50 MB on active screen",
      statSvcVal: "0 Services",
      statSvcLbl: "Background Overhead",
      statSvcDesc: "Zero CPU drain & telemetry",
      statEcVal: "ACPI SMI",
      statEcLbl: "Hardware Bridge",
      statEcDesc: "Native hardware link (G-Helper philosophy)",
      statLicVal: "GPL-3.0",
      statLicLbl: "Open Source",
      statLicDesc: "Community-driven, transparent",

      // Interactive Simulator Header & Explainer
      simBadge: "Interactive Demo",
      simTitle: "Experience E-Helper Live in Browser",
      simSubtitle: "Switch performance modes, RGB lighting presets, and adjust the brightness slider to see the simulated keyboard react instantly.",
      simExplainer: "This simulator mirrors the exact WPF interface of E-Helper and simulates physical motherboard EC fan/RGB responses.",

      // Simulator Controls & Labels
      simPowerTitle: "Performance Mode",
      modeOffice: "Eco",
      modeGaming: "Balanced",
      modeHighPerf: "Turbo",
      simGpuTitle: "GPU Mode: Discrete / Hybrid",
      simRamTitle: "RAM Memory",
      simSsdTitle: "SSD Storage (C:)",
      simKbdTitle: "Laptop Keyboard",
      simBrightnessLbl: "Brightness",
      simColorBtn: "Color",
      simZoneLeft: "Left (WASD)",
      simZoneMid: "Center",
      simZoneRight: "Right (Num)",
      simStartupLbl: "Run on Startup",

      // RGB Dropdown Options
      optTripleZone: "🎨 3-Zone Custom",
      optStatic: "✨ Static Color",
      optBreathing: "💨 Breathing",
      optColorfulCycle: "💫 Dynamic Cycle",
      optRainbow: "🌈 Rainbow Wave",

      // Chassis & Deck Readouts
      chassisHeader: "Casper Excalibur Keyboard & Fan Response",
      lblMode: "Mode:",
      lblPower: "Power:",
      deckZone1Title: "Zone 1: WASD",
      deckZone1Sub: "WASD & Digits",
      deckZone2Title: "Zone 2: Center",
      deckZone2Sub: "Typing & Space",
      deckZone3Title: "Zone 3: Numpad",
      deckZone3Sub: "Numpad",

      // Telemetry Gauges
      gaugeCpuFan: "CPU Fan",
      gaugeGpuFan: "GPU Fan",
      gaugeAcoustic: "Noise Level",

      // Dynamic Acoustic Statuses
      acousticEco: "18 dB (Silent)",
      acousticBalanced: "34 dB (Normal)",
      acousticTurbo: "48 dB (Turbo Fan)",

      // Comparison Section Header & Table Headers
      compBadge: "Why E-Helper?",
      compTitle: "Comparison with Official Control Center",
      compSubtitle: "Technical benchmarks based on actual hardware measurements and community data.",
      colFeature: "Criteria & Specs",
      colEHelper: "E-Helper (Recommended)",
      colOfficial: "Official Excalibur Control Center",

      // Comparison Rows
      compRowRam: "RAM Memory Footprint",
      compEhRam: "~1 - 10 MB (Background) / ~40 - 50 MB (Active Screen)",
      compOffRam: "~180 - 350+ MB (Continuous Background)",
      compRowSvc: "Background Windows Services",
      compEhSvc: "0 Services (Zero background load)",
      compOffSvc: "2 - 4 Persistent Background Services",
      compRowStart: "Startup Speed & UAC Prompt",
      compEhStart: "Instant (<0.2s), via Task Scheduler without UAC",
      compOffStart: "10 - 25s delayed Windows startup",
      compRowPersist: "Settings Persistence on Reboot",
      compEhPersist: "Fully Persistent (EC Firmware Sync)",
      compOffPersist: "Unstable (Frequent resets on reboot)",
      compRowSize: "Actual Binary File Size",
      compEhSize: "~65 MB Single File (.exe, Standalone)",
      compOffSize: "~200 - 350 MB Setup Installer Package",
      compRowPrivacy: "Data Privacy & Telemetry",
      compEhPrivacy: "Zero Telemetry (100% offline & local)",
      compOffPrivacy: "Continuous Background Diagnostics & Logging",
      compRowLicense: "License & Community Support",
      compEhLicense: "GPL-3.0 (Open Source, Transparent)",
      compOffLicense: "Proprietary, Slow Update Cycles",

      // Features Section
      featBadge: "Capabilities",
      featTitle: "Everything You Need, In One Compact Tray",
      featSubtitle: "Free of clutter, focusing strictly on essential hardware tuning gamers need.",
      featCard1Title: "3 Performance Modes",
      featCard1Desc: "Switch between Eco, Balanced, and Turbo profiles with a single click. Syncs automatically with native Windows power plans.",
      featCard2Title: "Live Temp & Fan Telemetry",
      featCard2Desc: "Monitor CPU and GPU temperatures and independent fan speeds (RPM) in real time right from your system tray.",
      featCard3Title: "3-Zone RGB Keyboard",
      featCard3Desc: "Assign individual colors to WASD, Center, and Numpad zones. Select static, breathing, rainbow, or dynamic modes in one click.",
      featCard4Title: "Persistent Settings Memory",
      featCard4Desc: "Keyboard colors and fan modes persist after system reboots, synchronized directly with motherboard EC controllers.",
      featCard5Title: "UAC-Free Auto Startup",
      featCard5Desc: "Silently launches into system tray upon Windows boot without UAC prompt popups via Task Scheduler.",
      featCard6Title: "Built-in Auto Updater",
      featCard6Desc: "The integrated update engine introduced in v1.1.1 checks for new GitHub releases and self-updates seamlessly in one click.",

      // Guide Section
      guideBadge: "Quick Start",
      guideTitle: "Get Started in 3 Simple Steps",
      guideSubtitle: "No installation wizard required. Download, run, and enjoy.",
      step1Badge: "1. Download",
      step1Title: "Get E-Helper.exe",
      step1Desc: "Download the latest release binary. No installer wizard or additional dependencies required.",
      step1Tip: "Runs as a single standalone ~65 MB executable.",
      step2Badge: "2. Run",
      step2Title: "Run as Administrator",
      step2Desc: "Right-click and select \"Run as Administrator\". Required for direct ACPI motherboard and hardware sensor communication.",
      step2Tip: "Safe and transparent ACPI WMI/SMI interface.",
      step3Badge: "3. Manage",
      step3Title: "Control from System Tray",
      step3Desc: "Click the tray icon near the clock to access performance profiles, fan speeds, and RGB modes on the fly.",
      step3Tip: "Enable \"Run on Startup\" for seamless boot.",

      // Hardware Section
      hwBadge: "Compatibility",
      hwTitle: "Supported Casper Excalibur Models",
      hwSubtitle: "Hardware models verified with Casper Excalibur embedded motherboard controllers.",
      hwVerified: "Verified",
      hwCompatible: "Compatible",

      // Changelog Section
      clBadge: "Release History",
      clTitle: "Changelog & Release Notes",
      clSubtitle: "E-Helper is continuously evolving. Follow all new features, enhancements, and patches here.",
      tabAll: "All Releases",
      tabMajor: "Major Versions",
      tabPatches: "Bug Fixes",
      clLatestPill: "Latest",
      clDate111: "October 12, 2026",
      cl111_1: "Auto-Updater: Checks new GitHub releases and seamlessly self-updates with one click.",
      cl111_2: "Refined Status Bar: Cleaner footer interface and streamlined version tags.",
      cl111_3: "Memory Optimization: Idle RAM footprint optimized to a lean 1-10 MB range.",
      clDetailsBtn111: "v1.1.1 Release Notes →",

      clDate110: "October 12, 2026",
      cl110_1: "3-Zone RGB Lighting: Independent color assignment for Left (WASD), Center, and Right zones.",
      cl110_2: "2D Color Canvas: Fluent-style color picker with hex/RGB support.",
      cl110_3: "Stepped Brightness: 3-level (0, 1, 2) hardware brightness control slider.",
      cl110_4: "SSD & RAM Telemetry: Real-time hardware utilization readout panels.",
      clDetailsBtn110: "v1.1.0 Release Notes →",

      clDate101: "October 9, 2026",
      cl101_1: "Startup Patch: Improved Task Scheduler auto-start reliability.",
      cl101_2: "UI Version Label: Fixed version numbering display inconsistency.",
      clDetailsBtn101: "v1.0.1 Release Notes →",

      clDate100: "October 9, 2026",
      cl100_1: "Initial Release: Lightweight standalone hardware manager for Casper Excalibur laptops launched.",
      cl100_2: "ACPI SMI Bridge: Direct motherboard communication without OEM services.",
      cl100_3: "Power Profiles: Eco, Balanced, and Turbo performance profiles.",
      clDetailsBtn100: "v1.0.0 Release Notes →",

      // FAQ Section
      faqBadge: "FAQ",
      faqTitle: "Frequently Asked Questions",
      faqSubtitle: "Commonly asked questions and answers about E-Helper.",
      faqQ1: "Should I uninstall official Excalibur Control Center?",
      faqA1: "Not strictly mandatory; however, stopping official background services is recommended to prevent resource conflicts and maximize RAM savings.",
      faqQ2: "Why does it require Administrator privileges?",
      faqA2: "Windows strictly requires administrative permissions to interact directly with motherboard ACPI WMI/SMI and GPU sensor interfaces.",
      faqQ3: "Does using E-Helper void my warranty?",
      faqA3: "No. E-Helper does not perform dangerous overclocking or BIOS flashing; it only triggers safe factory-defined ACPI commands.",
      faqQ4: "Does it support other laptop brands (Asus, Lenovo, etc.)?",
      faqA4: "No. E-Helper is built exclusively for Casper Excalibur models. For Asus laptops, please use G-Helper.",

      // Footer Section
      footerDesc: "Open-source, independent, ultra-lightweight control center for Casper Excalibur laptops.",
      footerGhRepo: "GitHub Repository",
      footerLatestRelease: "Latest Release (v1.1.1)",
      footerColLinks: "Quick Links",
      footerColCommunity: "Community & License",
      footerLicense: "GPL-3.0 License",
      footerReport: "Report Issue",
      footerInspiration: "G-Helper (Inspiration)",
      footerDev: "Developer Profile",
      footerDisclaimer: "Legal Notice: Casper, Excalibur, Windows, and NVIDIA are trademarks of their respective owners. E-Helper is an independent open-source community project.",
      footerCopy: "© 2026 E-Helper • GNU General Public License v3.0 (GPL-3.0)",
      footerDesign: "Design: Precision Stealth & Hardware Telemetry"
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
      txtPowerModeTitle.textContent = currentLang === 'tr' ? "Performans Modu: Tasarruf" : "Performance Mode: Eco";
      readoutMode.textContent = currentLang === 'tr' ? "Tasarruf (Eco)" : "Eco (Silent)";
      readoutWatts.textContent = "35W TDP";
      fanIconCpu.classList.remove('spinning');
      fanIconGpu.classList.remove('spinning');
      gaugeAcousticReading.textContent = i18n[currentLang].acousticEco;
    } else if (mode === 'gaming') {
      btnGaming.classList.add('active');
      txtPowerModeTitle.textContent = currentLang === 'tr' ? "Performans Modu: Dengeli" : "Performance Mode: Balanced";
      readoutMode.textContent = currentLang === 'tr' ? "Dengeli (Gaming)" : "Balanced";
      readoutWatts.textContent = "75W TDP";
      fanIconCpu.classList.add('spinning');
      fanIconGpu.classList.add('spinning');
      fanIconCpu.style.animationDuration = '1.2s';
      fanIconGpu.style.animationDuration = '1.2s';
      gaugeAcousticReading.textContent = i18n[currentLang].acousticBalanced;
    } else if (mode === 'highperf') {
      btnHighPerf.classList.add('active');
      txtPowerModeTitle.textContent = currentLang === 'tr' ? "Performans Modu: Performans" : "Performance Mode: Turbo";
      readoutMode.textContent = currentLang === 'tr' ? "Performans (Turbo)" : "Turbo / Max";
      readoutWatts.textContent = "115W TDP";
      fanIconCpu.classList.add('spinning');
      fanIconGpu.classList.add('spinning');
      fanIconCpu.style.animationDuration = '0.5s';
      fanIconGpu.style.animationDuration = '0.5s';
      gaugeAcousticReading.textContent = i18n[currentLang].acousticTurbo;
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

  // Render individual zone styling & glow based on brightness & pulseFactor
  function renderDeckZone(deckZone, color, brightnessLevel, pulseFactor = 1) {
    const keys = deckZone.querySelectorAll('.matrix-key');

    // Brightness levels:
    // 0: Off (%0)
    // 1: Mid Soft (%50)
    // 2: Full Neon (%100)
    if (brightnessLevel === 0 || pulseFactor <= 0.02) {
      keys.forEach(k => {
        k.style.boxShadow = 'none';
        k.style.borderColor = 'rgba(255, 255, 255, 0.05)';
        k.style.backgroundColor = '#10141f';
        k.style.opacity = '0.12';
      });
    } else if (brightnessLevel === 1) {
      const glowAlpha = Math.max(0.12, (0.55 * pulseFactor)).toFixed(3);
      const blur = Math.max(0, Math.round(7 * pulseFactor));
      keys.forEach(k => {
        k.style.boxShadow = blur > 1 ? `0 0 ${blur}px ${color}` : 'none';
        k.style.borderColor = color;
        k.style.backgroundColor = color + '2b';
        k.style.opacity = glowAlpha;
      });
    } else {
      const glowAlpha = Math.max(0.12, (1.0 * pulseFactor)).toFixed(3);
      const blurOuter = Math.max(0, Math.round(14 * pulseFactor));
      const blurInner = Math.max(0, Math.round(4 * pulseFactor));
      keys.forEach(k => {
        k.style.boxShadow = blurOuter > 1 ? `0 0 ${blurOuter}px ${color}, 0 0 ${blurInner}px ${color}` : 'none';
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
      // Gentle, calm 6.0s breathing cycle using performance.now() delta-time
      // Immune to monitor refresh rate (60Hz, 144Hz, 240Hz)
      const color = simState.zoneColors[0];
      brdModeColorIndicator.style.backgroundColor = color;

      const BREATH_CYCLE_MS = 6000; // 6.0 seconds calm meditative period
      const startTime = performance.now();

      function breatheStep(now) {
        const elapsed = (now - startTime) % BREATH_CYCLE_MS;
        const phase = (elapsed / BREATH_CYCLE_MS) * 2 * Math.PI;

        // Cosine wave: 1.0 (peak breath) -> 0.0 (fully extinguished bottom) -> 1.0
        const wave = 0.5 * (1 + Math.cos(phase));

        // Power curve for natural, calm pause in complete darkness
        // Drops down to complete blackout at the bottom, then slowly rekindles
        let pulse = Math.pow(wave, 2.0);
        if (pulse < 0.02) pulse = 0.0;

        renderDeckZone(deckZoneLeft, color, b, pulse);
        renderDeckZone(deckZoneMid, color, b, pulse);
        renderDeckZone(deckZoneRight, color, b, pulse);

        brdModeColorIndicator.style.opacity = (0.05 + 0.95 * pulse).toFixed(2);
        rgbAnimationId = requestAnimationFrame(breatheStep);
      }

      rgbAnimationId = requestAnimationFrame(breatheStep);
    } else if (mode === 'Rainbow') {
      // Wall-clock delta-time rainbow sliding from outer edges into center
      const startTime = performance.now();

      function rainbowStep(now) {
        // Steady ~9.0s complete rainbow rotation
        const outerHue = Math.floor(((now - startTime) / 25) % 360);
        // Center zone lags by 60deg so colors slide inward from left and right into center
        const centerHue = (outerHue - 60 + 360) % 360;

        const outerColor = `hsl(${outerHue}, 100%, 55%)`;
        const centerColor = `hsl(${centerHue}, 100%, 55%)`;
        brdModeColorIndicator.style.backgroundColor = outerColor;
        brdModeColorIndicator.style.opacity = '1';

        renderDeckZone(deckZoneLeft, outerColor, b);
        renderDeckZone(deckZoneRight, outerColor, b);
        renderDeckZone(deckZoneMid, centerColor, b);

        rgbAnimationId = requestAnimationFrame(rainbowStep);
      }

      rgbAnimationId = requestAnimationFrame(rainbowStep);
    } else if (mode === 'ColorfulCycle') {
      // 3 independent zones dynamically picking random vibrant colors
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
      dynamicCycleTimer = setInterval(cycleZones, 1600);
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
  // 5. Theme Toggle (Seamless Single-Tick Global Transition)
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
      themeToggleBtn.setAttribute('title', currentLang === 'tr' ? 'Koyu Temaya Geç' : 'Switch to Dark Theme');
    } else {
      themeIcon.innerHTML = `
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
      `;
      themeToggleBtn.setAttribute('title', currentLang === 'tr' ? 'Açık Temaya Geç' : 'Switch to Light Theme');
    }

    startRgbMode();
  }

  themeToggleBtn.addEventListener('click', () => {
    const cur = document.documentElement.getAttribute('data-theme') || 'dark';
    setTheme(cur === 'dark' ? 'light' : 'dark');
  });

  initTheme();

  // -----------------------------------------------------------------
  // 6. Multi-Language Switcher (TR / EN) - Full Page Translation
  // -----------------------------------------------------------------
  const langToggleBtn = document.getElementById('langToggleBtn');
  const langLabel = document.getElementById('langLabel');

  function updatePageLanguage(lang) {
    currentLang = lang;
    document.documentElement.lang = lang;
    langLabel.textContent = lang.toUpperCase();

    // Translate all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (i18n[lang] && i18n[lang][key] !== undefined) {
        // If element is a form option or select
        if (el.tagName === 'OPTION') {
          el.textContent = i18n[lang][key];
        } else {
          el.textContent = i18n[lang][key];
        }
      }
    });

    // Update dynamic state labels
    setPowerMode(simState.mode);

    // Update theme button tooltip
    const curTheme = document.documentElement.getAttribute('data-theme') || 'dark';
    themeToggleBtn.setAttribute('title', curTheme === 'light' ?
      (lang === 'tr' ? 'Koyu Temaya Geç' : 'Switch to Dark Theme') :
      (lang === 'tr' ? 'Açık Temaya Geç' : 'Switch to Light Theme')
    );
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
