/* ===================================================================
   E-Helper Showcase & Portal — Interactive Core Script
   Features: Hardware Simulator, Dynamic 3-Zone RGB Engine, Complete TR/EN i18n, Theme Switcher
   Version: v1.2.0 (Synchronized Spectrum Cycle, 3-Tier Speed Slider, NVML Telemetry)
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
      downloadBtn: "İndir (v1.2.0)",

      // Hero Section
      heroPill: "Casper Excalibur Dizüstü Bilgisayarlar İçin Özel",
      heroTitle1: "Casper Excalibur Dizüstü Bilgisayarınız İçin",
      heroTitleGrad: "Ultra Hafif Kontrol Merkezi",
      heroSubtitle: "Üreticinin yüzlerce MB RAM harcayan ağır yazılımına elveda deyin. Arka planda 5-10 MB, aktif ekranda 30-50 MB bellek kullanımı, sıfır arka plan servisi ve doğrudan donanım yönetimi.",
      downloadCta: "E-Helper-win-x64.zip İndir (v1.2.0)",
      githubCta: "GitHub'da İncele",
      metaReq: "Windows 10/11 • Taşınabilir ZIP (~64 MB) / Bağımsız EXE • Kurulumsuz",

      // Hero Key Metrics Strip
      statRamVal: "5-10 MB",
      statRamLbl: "Arka Plan RAM",
      statRamDesc: "Aktif ekranda 30-50 MB",
      statSvcVal: "0 Servis",
      statSvcLbl: "Arka Plan Yükü",
      statSvcDesc: "Sıfır CPU sömürüsü ve telemetri",
      statEcVal: "ACPI & NVML",
      statEcLbl: "Donanım Köprüsü",
      statEcDesc: "Doğrudan SMI ve GPU sürücü köprüsü",
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
      simSpeedLbl: "Hız",
      simColorBtn: "Renk",
      simZoneLeft: "Sol (WASD)",
      simZoneMid: "Orta",
      simZoneRight: "Sağ (Num)",
      simStartupLbl: "Başlangıçta Çalıştır",

      // Speed Slider Notches
      speedSlow: "Yavaş",
      speedMedium: "Orta",
      speedFast: "Hızlı",

      // RGB Dropdown Options (Clean vector text - matching v1.2.0)
      optTripleZone: "3-Bölge",
      optStatic: "Sabit",
      optBreathing: "Nefes",
      optColorfulCycle: "Dinamik",
      optCycle: "Döngü",
      optRainbow: "Gökkuşağı",

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
      compEhRam: "~5 - 10 MB (Tepside / Boşta) / ~30 - 50 MB (Aktif Ekranda)",
      compOffRam: "~150 - 350+ MB (Bellek sızıntılarıyla 450 MB+)",
      compRowSvc: "Arka Plan Windows Servisleri",
      compEhSvc: "0 Servis (Sıfır sistem yükü)",
      compOffSvc: "4 - 6 Adet Sürekli Çalışan Servis",
      compRowStart: "Açılış Hızı & UAC Onayı",
      compEhStart: "Anında (<100 ms), Görev Zamanlayıcısı ile UAC'siz",
      compOffStart: "3 - 6+ sn gecikmeli hantal başlangıç",
      compRowPersist: "Yeniden Başlatmada Ayar Kalıcılığı",
      compEhPersist: "Tam Kalıcı (EC Firmware Senkronizasyonu)",
      compOffPersist: "Kararsız (Yeniden başlatmada sıfırlanma)",
      compRowSize: "Gerçek Dosya Boyutu",
      compEhSize: "~64 MB Taşınabilir ZIP (~156 MB Bağımsız EXE)",
      compOffSize: "~200 - 350 MB Setup Yükleyici Paketi",
      compRowKbd: "Klavye Aydınlatma Denetimi",
      compEhKbd: "3-Bölge Bağımsız Renk, Senkronize Döngü (70 FPS), Soldan Sağa Dalga, 3 Kademeli Hız",
      compOffKbd: "Temel üretici modları",
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
      featCard2Title: "Canlı Sıcaklık & NVML GPU İzleme",
      featCard2Desc: "İşlemci ve harici ekran kartı sıcaklıklarını doğrudan NVIDIA NVML sürücüsü üzerinden hatasız ve anlık takip edin.",
      featCard3Title: "6 RGB Modu & 3 Kademeli Hız",
      featCard3Desc: "Sabit, nefes, dinamik, yeni senkronize döngü (70 FPS), soldan sağa gökkuşağı dalgası ve 3-bölge özel modlar arasında tek tıkla geçiş yapın.",
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
      step1Title: "E-Helper-win-x64.zip Edinin",
      step1Desc: "Releases sayfasından son sürüm ZIP paketini (~64 MB) indirin. Herhangi bir kurulum sihirbazı veya ekstra paket gerekmez.",
      step1Tip: "Sıkıştırılmış hafif taşınabilir arşiv olarak çalışır.",
      step2Badge: "2. Çalıştır",
      step2Title: "Yönetici Olarak Açın",
      step2Desc: "Dosyaya sağ tıklayıp \"Yönetici Olarak Çalıştır\" deyin. Excalibur ACPI anakart denetleyicisine erişim için bu izin zorunludur.",
      step2Tip: "Güvenli ve şeffaf ACPI WMI/SMI ve NVML erişimi.",
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

      // v1.2.0 Changelog
      clDate120: "10 Kasım 2026",
      cl120_1: "Senkronize Spektrum Döngüsü (Cycle Modu): Tüm tuşların aynı anda aynı rengi alarak 360° renk spektrumunda ~70 FPS akıcılıkla dolaştığı yeni aydınlatma modu.",
      cl120_2: "Dinamik 3 Kademeli Hız Barı: Döngü ve Gökkuşağı modlarında Yavaş (~10s), Orta (~2.4s) ve Hızlı (~0.72s) kademeleri ile animasyon hızını anlık ayarlayabilme.",
      cl120_3: "%100 Vektörel İkon & Arayüz Revizyonu: Emojilerden arındırılmış, modern SVG vektörel ikonlar ve akıcı pencere açılış animasyonları (fade & slide-in).",
      cl120_4: "Doğrudan NVIDIA NVML Sürücü Entegrasyonu: Harici GPU sıcaklık ve fan devirlerinin doğrudan nvml.dll üzerinden güvenilir şekilde okunması.",
      cl120_5: "Sıkıştırılmış Dağıtım Paketi: Gömülü .NET 8 çalışma zamanı barındıran ~64 MB hafif ZIP arşivi indirme seçeneği.",
      clDetailsBtn120: "v1.2.0 Sürüm Detayları →",

      // v1.1.1 Changelog
      clDate111: "12 Ekim 2026",
      cl111_1: "Otomatik Güncelleme: GitHub API üzerinden yeni sürümleri denetleme ve tek tıkla kesintisiz yeniden başlatarak güncelleme.",
      cl111_2: "Yenilenen Alt Çubuk: Daha sade footer arayüzü ve sürüm etiketleri.",
      cl111_3: "Bellek İyileştirmesi: Boşta bellek tüketimi 1-10 MB bandında optimize edildi.",
      clDetailsBtn111: "v1.1.1 Sürüm Detayları →",

      // v1.1.0 Changelog
      clDate110: "12 Ekim 2026",
      cl110_1: "3-Bölge RGB Aydınlatma: Sol (WASD), Orta ve Sağ bölgeler için bağımsız renk ve mod tanımlama.",
      cl110_2: "2D Renk Paleti: Windows 11 tarzı gelişmiş renk seçici ve Hex/RGB desteği.",
      cl110_3: "Dolgulu Parlaklık: 3 kademeli (0, 1, 2) donanımsal parlaklık çubuğu.",
      cl110_4: "SSD & RAM Telemetrisi: Bellek ve disk kullanımını gösteren canlı paneller.",
      clDetailsBtn110: "v1.1.0 Sürüm Detayları →",

      // v1.0.1 Changelog
      clDate101: "9 Ekim 2026",
      cl101_1: "Başlangıç Yaması: Görev Zamanlayıcısı ile otomatik açılış uyumluluğu artırıldı.",
      cl101_2: "UI Sürüm Etiketi: Sürüm numarası gösterimindeki uyumsuzluk düzeltildi.",
      clDetailsBtn101: "v1.0.1 Sürüm Detayları →",

      // v1.0.0 Changelog
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
      footerLatestRelease: "Son Sürüm (v1.2.0)",
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
      downloadBtn: "Download (v1.2.0)",

      // Hero Section
      heroPill: "Tailored for Casper Excalibur Gaming Laptops",
      heroTitle1: "Ultra-Lightweight Control Center for",
      heroTitleGrad: "Casper Excalibur Laptops",
      heroSubtitle: "Say goodbye to manufacturer bloatware taking hundreds of MBs of RAM. Enjoy 5-10 MB in background, 30-50 MB on active screen, zero background services, and direct hardware communication.",
      downloadCta: "Download E-Helper-win-x64.zip (v1.2.0)",
      githubCta: "View on GitHub",
      metaReq: "Windows 10/11 • Portable ZIP (~64 MB) / Standalone EXE • Zero Install",

      // Hero Key Metrics Strip
      statRamVal: "5-10 MB",
      statRamLbl: "Background RAM",
      statRamDesc: "30-50 MB on active screen",
      statSvcVal: "0 Services",
      statSvcLbl: "Background Overhead",
      statSvcDesc: "Zero CPU drain & telemetry",
      statEcVal: "ACPI & NVML",
      statEcLbl: "Hardware Bridge",
      statEcDesc: "Direct SMI & native GPU driver bridge",
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
      simSpeedLbl: "Speed",
      simColorBtn: "Color",
      simZoneLeft: "Left (WASD)",
      simZoneMid: "Center",
      simZoneRight: "Right (Num)",
      simStartupLbl: "Run on Startup",

      // Speed Slider Notches
      speedSlow: "Slow",
      speedMedium: "Medium",
      speedFast: "Fast",

      // RGB Dropdown Options (Clean vector text - matching v1.2.0)
      optTripleZone: "3-Zone",
      optStatic: "Static",
      optBreathing: "Breathing",
      optColorfulCycle: "Dynamic",
      optCycle: "Cycle",
      optRainbow: "Rainbow",

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
      compEhRam: "~5 - 10 MB (Idle Tray) / ~30 - 50 MB (Active Window)",
      compOffRam: "~150 - 350+ MB (Often leaks up to 450 MB+)",
      compRowSvc: "Background Windows Services",
      compEhSvc: "0 Services (Zero background load)",
      compOffSvc: "4 - 6 Persistent Background Services",
      compRowStart: "Startup Speed & UAC Prompt",
      compEhStart: "Instant (<100 ms), via Task Scheduler without UAC",
      compOffStart: "3 - 6+ seconds sluggish launch latency",
      compRowPersist: "Settings Persistence on Reboot",
      compEhPersist: "Fully Persistent (EC Firmware Sync)",
      compOffPersist: "Unstable (Frequent resets on reboot)",
      compRowSize: "Actual Binary File Size",
      compEhSize: "~64 MB Portable ZIP (~156 MB Standalone EXE)",
      compOffSize: "~200 - 350 MB Setup Installer Package",
      compRowKbd: "Keyboard Lighting Control",
      compEhKbd: "3-Zone Independent Color, Synchronized Cycle (70 FPS), Left-to-Right Wave, 3-Tier Speed",
      compOffKbd: "Basic OEM lighting presets",
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
      featCard2Title: "Live Temp & NVML GPU Telemetry",
      featCard2Desc: "Accurately monitor CPU and GPU core temperatures and independent fan speeds directly via native NVIDIA NVML driver interface.",
      featCard3Title: "6 RGB Modes & 3-Tier Speed Slider",
      featCard3Desc: "Seamlessly switch between Static, Breathing, Dynamic, Synchronized Cycle (70 FPS), Rainbow wave, and 3-Zone Custom RGB with dynamic speed tuning.",
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
      step1Title: "Get E-Helper-win-x64.zip",
      step1Desc: "Download the latest release ZIP package (~64 MB). No installer wizard or additional dependencies required.",
      step1Tip: "Runs as a compact standalone portable archive.",
      step2Badge: "2. Run",
      step2Title: "Run as Administrator",
      step2Desc: "Right-click and select \"Run as Administrator\". Required for direct ACPI motherboard and NVML sensor communication.",
      step2Tip: "Safe and transparent ACPI WMI/SMI and NVML interface.",
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

      // v1.2.0 Changelog
      clDate120: "November 10, 2026",
      cl120_1: "Synchronized Spectrum Flow (Cycle Mode): Brand-new synchronized 70 FPS lighting mode where all keys seamlessly transition in unison across the 360° color wheel.",
      cl120_2: "Dynamic 3-Tier Speed Slider: Real-time speed tuning (Slow ~10s, Medium ~2.4s, Fast ~0.72s) for Cycle and Rainbow wave presets.",
      cl120_3: "100% Vector Icon Overhaul: Zero emojis, crisp SVG system geometries, and fluid window fade & slide-in micro-interactions.",
      cl120_4: "NVIDIA NVML Driver Integration: Direct, reliable discrete GPU core telemetry and fan RPM readings via nvml.dll.",
      cl120_5: "Lightweight Distribution Package: Compact ~64 MB portable ZIP package with embedded self-contained .NET 8 runtime.",
      clDetailsBtn120: "v1.2.0 Release Notes →",

      // v1.1.1 Changelog
      clDate111: "October 12, 2026",
      cl111_1: "Auto-Updater: Checks new GitHub releases and seamlessly self-updates with one click.",
      cl111_2: "Refined Status Bar: Cleaner footer interface and streamlined version tags.",
      cl111_3: "Memory Optimization: Idle RAM footprint optimized to a lean 1-10 MB range.",
      clDetailsBtn111: "v1.1.1 Release Notes →",

      // v1.1.0 Changelog
      clDate110: "October 12, 2026",
      cl110_1: "3-Zone RGB Lighting: Independent color assignment for Left (WASD), Center, and Right zones.",
      cl110_2: "2D Color Canvas: Fluent-style color picker with hex/RGB support.",
      cl110_3: "Stepped Brightness: 3-level (0, 1, 2) hardware brightness control slider.",
      cl110_4: "SSD & RAM Telemetry: Real-time hardware utilization readout panels.",
      clDetailsBtn110: "v1.1.0 Release Notes →",

      // v1.0.1 Changelog
      clDate101: "October 9, 2026",
      cl101_1: "Startup Patch: Improved Task Scheduler auto-start reliability.",
      cl101_2: "UI Version Label: Fixed version numbering display inconsistency.",
      clDetailsBtn101: "v1.0.1 Release Notes →",

      // v1.0.0 Changelog
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
      footerLatestRelease: "Latest Release (v1.2.0)",
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
  // 2. Hardware & RGB Simulator State & Animation Engine (v1.2.0)
  // -----------------------------------------------------------------
  const simState = {
    mode: 'gaming', // office | gaming | highperf
    rgbMode: 'TripleZone', // Static, Breathing, ColorfulCycle, Cycle, Rainbow, TripleZone
    brightness: 2, // 0: Off (%0), 1: Mid (%50), 2: Full (%100)
    cycleSpeed: 0, // 0: Yavaş/Slow, 1: Orta/Medium, 2: Hızlı/Fast
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
  const sliderCycleSpeed = document.getElementById('sliderCycleSpeed');
  const pnlCycleSpeed = document.getElementById('pnlCycleSpeed');
  const txtBrightnessIcon = document.getElementById('txtBrightnessIcon');
  const txtBrightnessLabel = document.getElementById('txtBrightnessLabel');

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
  // 4. Dynamic RGB Keyboard Engine (v1.2.0: Cycle, Rainbow, Breathing, Dynamic)
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

  // Update Brightness & Speed Telemetry Header UI
  function updateBrightnessSpeedUI() {
    const b = simState.brightness;
    const bText = b === 0 ? '%0' : (b === 1 ? '%50' : '%100');

    const hasSpeed = simState.rgbMode === 'Cycle' || simState.rgbMode === 'Rainbow';
    if (hasSpeed) {
      const speedNames = currentLang === 'tr'
        ? [i18n.tr.speedSlow, i18n.tr.speedMedium, i18n.tr.speedFast]
        : [i18n.en.speedSlow, i18n.en.speedMedium, i18n.en.speedFast];
      const speedName = speedNames[simState.cycleSpeed] || speedNames[0];
      txtBrightnessIcon.textContent = `${bText} - ${speedName}`;
    } else {
      txtBrightnessIcon.textContent = bText;
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

    // Speed slider panel visibility (visible in Cycle & Rainbow only - matching WPF v1.2.0)
    const hasSpeed = mode === 'Cycle' || mode === 'Rainbow';
    if (pnlCycleSpeed) {
      pnlCycleSpeed.style.display = hasSpeed ? 'flex' : 'none';
    }

    // Color trigger action button interactivity (active in Static & Breathing)
    if (btnModeColorAction) {
      const canPickColor = mode === 'Static' || mode === 'Breathing' || mode === 'TripleZone';
      btnModeColorAction.style.opacity = canPickColor ? '1' : '0.6';
      btnModeColorAction.style.pointerEvents = canPickColor ? 'auto' : 'none';
    }

    updateBrightnessSpeedUI();

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
    } else if (mode === 'Cycle') {
      // v1.2.0: Synchronized Spectrum Flow across all keys at ~70 FPS
      // All 3 zones take the exact same color progressing through the 360° spectrum in unison
      const startTime = performance.now();

      // Speeds: 0 -> Yavaş (~10s loop), 1 -> Orta (~2.4s loop), 2 -> Hızlı (~0.72s loop)
      const speedDivisors = [28, 6.7, 2.0];

      function cycleStep(now) {
        const div = speedDivisors[simState.cycleSpeed] || 28;
        const hue = Math.floor((now - startTime) / div) % 360;
        const color = `hsl(${hue}, 100%, 55%)`;

        brdModeColorIndicator.style.backgroundColor = color;
        brdModeColorIndicator.style.opacity = '1';

        // All 3 zones synchronized simultaneously
        renderDeckZone(deckZoneLeft, color, b);
        renderDeckZone(deckZoneMid, color, b);
        renderDeckZone(deckZoneRight, color, b);

        rgbAnimationId = requestAnimationFrame(cycleStep);
      }

      rgbAnimationId = requestAnimationFrame(cycleStep);
    } else if (mode === 'Rainbow') {
      // v1.2.0: Flowing Rainbow wave from Left to Right (WASD leads, Center, Right follows)
      const startTime = performance.now();
      const speedDivisors = [28, 6.7, 2.0];

      function rainbowStep(now) {
        const div = speedDivisors[simState.cycleSpeed] || 28;
        const baseHue = Math.floor((now - startTime) / div) % 360;

        // Wave flows Left to Right: Left leads (+100°), Mid (+50°), Right (0°)
        const leftHue = (baseHue + 100) % 360;
        const midHue = (baseHue + 50) % 360;
        const rightHue = baseHue % 360;

        const leftColor = `hsl(${leftHue}, 100%, 55%)`;
        const midColor = `hsl(${midHue}, 100%, 55%)`;
        const rightColor = `hsl(${rightHue}, 100%, 55%)`;

        brdModeColorIndicator.style.backgroundColor = leftColor;
        brdModeColorIndicator.style.opacity = '1';

        renderDeckZone(deckZoneLeft, leftColor, b);
        renderDeckZone(deckZoneMid, midColor, b);
        renderDeckZone(deckZoneRight, rightColor, b);

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
    startRgbMode();
  });

  // Speed slider change (0, 1, 2)
  if (sliderCycleSpeed) {
    sliderCycleSpeed.addEventListener('input', (e) => {
      const val = parseInt(e.target.value);
      simState.cycleSpeed = val;
      startRgbMode();
    });
  }

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
        if (el.tagName === 'OPTION') {
          el.textContent = i18n[lang][key];
        } else {
          el.textContent = i18n[lang][key];
        }
      }
    });

    // Update dynamic state labels
    setPowerMode(simState.mode);
    updateBrightnessSpeedUI();

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
