const translations = {
  en: {
    // Nav
    navHome: "Home", navAbout: "About", navServices: "Services", navPortfolio: "Portfolio", navCertifications: "Certifications", navContact: "Contact", btnQuote: "Free Quote",
    
    // Hero
    heroTitle1: "Building Nepal's", heroTitle2: "Dreams",
    heroSubtitle: "Premium real estate and construction services blending traditional Nepali architecture with modern engineering.",
    heroExplore: "Explore Projects",
    
    // Stats
    stat1: "Projects Delivered", stat2: "On-Time Delivery", stat3a: "Nepal-wide", stat3b: "Service Coverage", stat4a: "Licensed", stat4b: "Engineers & Architects",
    
    // Services
    servLabel: "What We Do", servTitle: "Our Premium Services", servSub: "From blueprint to handover — complete construction solutions tailored for your dream",
    s1Title: "House Blueprint / Naksaa Design", s1Desc: "Precision architectural blueprints crafted by licensed engineers, fully compliant with Nepal's building codes and municipality standards.", s1F1: "Municipality-approved designs", s1F2: "Structural drawings included", s1F3: "Fast turnaround time",
    s2Title: "3D Architectural Design", s2Desc: "Photorealistic 3D visualizations that let you experience your dream home before a single brick is laid — inside and outside views.", s2F1: "Interior & exterior renders", s2F2: "Virtual walkthrough options", s2F3: "Design revisions included",
    s3Title: "Engineering Consultancy", s3Desc: "Expert civil and structural engineering consultation ensuring your project meets the highest safety standards and earthquake-resistant design.", s3F1: "Earthquake-resistant design", s3F2: "Soil analysis & site study", s3F3: "Detailed cost estimation",
    s4Title: "Construction Management", s4Desc: "End-to-end construction management from procurement and scheduling to quality control — delivering projects on time and within budget.", s4F1: "Full project oversight", s4F2: "Vendor & material sourcing", s4F3: "Progress reporting",
    s5Title: "Project Supervision", s5Desc: "On-site professional supervision ensuring quality workmanship, compliance with designs, and adherence to safety protocols throughout construction.", s5F1: "Daily site inspections", s5F2: "Quality compliance checks", s5F3: "Client progress updates",
    s6Title: "Land Buying & Selling", s6Desc: "Trusted real estate advisory for buying and selling land across Nepal — transparent transactions with legal verification and market valuation.", s6F1: "Market price evaluation", s6F2: "Legal documentation support", s6F3: "Nepal-wide network",
    sBtn: "Enquire Now →",
    
    // Why Us
    whyLabel: "Our Promise", whyTitle: "Why Choose Pasa Real Estate?", whySub: "Six pillars that make us Nepal's most trusted construction partner",
    w1Title: "Experienced Engineers", w1Desc: "Our team of licensed civil and structural engineers brings decades of combined experience in Nepal's unique terrain and building regulations.",
    w2Title: "Quality Materials", w2Desc: "We source only certified, high-grade construction materials — ensuring your home stands strong for generations to come.",
    w3Title: "Transparent Pricing", w3Desc: "No hidden costs, no surprises. We provide detailed cost breakdowns upfront and keep you informed throughout every phase.",
    w4Title: "On-Time Delivery", w4Desc: "We have a proven track record of delivering projects on schedule. Your timeline is our personal commitment to you.",
    w5Title: "Nepal-wide Service", w5Desc: "From Kathmandu Valley to Terai plains — we serve clients across all provinces of Nepal with the same dedication.",
    w6Title: "Customer First", w6Desc: "Your satisfaction drives everything we do. We listen, we advise, and we build exactly what you envision.",
    
    // About
    aboutLabel: "Our Story", aboutTitle: "Building Nepal's Dreams,\nOne Home at a Time",
    aGov1: "Govt. Registered", aGov2: "Reg. No: 393726/82/83", aEst1: "2026", aEst2: "Est.",
    aText1: "Pasa Real Estate Pvt. Ltd. was founded with a singular vision: to make quality construction accessible, transparent, and trustworthy for every Nepali family. Incorporated on June 2, 2026, and registered with the Government of Nepal's Ministry of Industry, Commerce and Supplies, we are a fully licensed construction and real estate firm based in Budhanilkantha, Kathmandu.",
    aText2: "Under the leadership of our founder, Mr. Om Bahadur Nagarkoti, we have assembled a team of passionate engineers, architects, and consultants who share a common goal — to bring your dream to life with integrity, precision, and genuine care.",
    aVisT: "Our Vision", aVisD: "To be Nepal's most trusted name in construction — where every client's dream becomes a lasting reality.",
    aMisT: "Our Mission", aMisD: "Delivering trusted, quality-first construction services with transparency, innovation, and genuine care.",
    aFoundT: "Founder & Chairman",
    
    // Process
    procLabel: "How It Works", procTitle: "Our Construction Process", procSub: "A seamless journey from your first call to the moment you step into your new home",
    p1T: "Free Consultation", p1D: "We begin with a detailed consultation to understand your vision, requirements, location, and budget — completely free of charge.",
    p2T: "Blueprint Design", p2D: "Our architects craft precise naksaa designs per your requirements, municipality codes, and structural safety standards.",
    p3T: "3D Visualization", p3D: "Experience your dream home in full 3D before construction begins — interior spaces, exterior finishes, and landscaping.",
    p4T: "Construction", p4D: "Our expert team executes the build with quality materials, regular supervision, and complete transparency — on schedule and on budget.",
    p5T: "Handover & Support", p5D: "We hand over your completed dream home with full documentation, post-construction support, and a satisfaction guarantee.",
    
    // Portfolio
    portLabel: "Our Work", portTitle: "Featured Projects", portSub: "A showcase of our finest construction achievements across Nepal",
    pfAll: "All Projects", pfRes: "Residential", pfCom: "Commercial", pfApt: "Apartment",
    pcBtn: "View Details",
    pc1B: "Residential", pc1T: "Luxury Residential Villa", pc1D: "Budhanilkantha, Kathmandu — 4-storey modern villa with contemporary design and premium finishes", pc1Tg1: "📍 Kathmandu", pc1Tg2: "🏠 Residential",
    pc2B: "Apartment", pc2T: "Modern Apartment Complex", pc2D: "Tokha, Kathmandu — 6-unit premium apartment block with parking and rooftop terrace", pc2Tg1: "📍 Tokha", pc2Tg2: "🏢 Apartment",
    pc3B: "Commercial", pc3T: "Commercial Office Building", pc3D: "Durbarmarg, Kathmandu — 5-storey commercial building with glass facade and modern interior", pc3Tg1: "📍 Durbarmarg", pc3Tg2: "🏙️ Commercial",
    pc4B: "Residential", pc4T: "Dream Family Home", pc4D: "Lalitpur — 3-storey family residence with garden, traditional Newari accents, and modern amenities", pc4Tg1: "📍 Lalitpur", pc4Tg2: "🏠 Residential",
    pc5B: "Penthouse", pc5T: "Executive Penthouse Suite", pc5D: "Baluwatar, Kathmandu — High-end penthouse with panoramic Himalayan views and smart-home systems", pc5Tg1: "📍 Baluwatar", pc5Tg2: "⛰️ Penthouse",
    pc6B: "Mixed Use", pc6T: "Mixed-Use Commercial Complex", pc6D: "Baneshwor, Kathmandu — Retail on ground floor with premium office spaces above", pc6Tg1: "📍 Baneshwor", pc6Tg2: "🛍️ Mixed Use",

    // Testimonials
    testLabel: "Client Stories", testTitle: "What Our Clients Say", testSub: "Real experiences from families who trusted us with their dream homes",
    t1T: "\"Pasa Real Estate turned our dream into reality. From the initial blueprint to the final handover, everything was handled professionally. The 3D design helped us visualize every corner of our home before construction even started. Truly a company that delivers on their promise — Sapana Tapainko, Jimmedari Hamro!\"", t1N: "Ramesh Sharma", t1L: "Budhanilkantha, Kathmandu",
    t2T: "\"We were hesitant about construction costs, but Mr. Om Bahadur's team was completely transparent. They gave us a detailed cost breakdown, stuck to the budget, and finished two weeks ahead of schedule! The quality of work is outstanding — our neighbours keep asking who built our house.\"", t2N: "Sita Gurung & Family", t2L: "Lalitpur, Nepal",
    t3T: "\"I was living abroad and couldn't be present during construction. Pasa Real Estate managed everything — from land purchase to supervision — with regular updates and photos. Their professionalism and honesty gave me complete peace of mind. My family now lives in a beautiful home I'm proud of.\"", t3N: "Bishnu Prasad Khanal", t3L: "Bhaktapur (NRN — UK)",
    
    // Quote
    qLabel: "Start Your Journey", qTitle: "Request a Free Quote", qSub: "Tell us about your project and we'll get back to you within 24 hours with a detailed, no-obligation quote.",
    qB1: "100% Free & No Obligation", qB2: "Response within 24 hours", qB3: "Expert advice included", qB4: "Detailed cost breakdown",
    qCall: "Or call us directly:",
    qFName: "Full Name *", qFPhone: "Phone Number *", qFEmail: "Email Address", qFType: "Project Type *", qFBgt: "Budget Range",
    
    // FAQ
    faqLabel: "Got Questions?", faqTitle: "Frequently Asked Questions", faqSub: "Everything you need to know about building your dream home with us",
    f1Q: "How long does it take to design a house naksaa in Nepal?", f1A: "A standard residential naksaa (blueprint) typically takes <strong>7–15 working days</strong> depending on complexity. This includes initial consultation, preliminary sketches, revisions, and the final municipality-ready drawings. Urgent designs can be expedited upon request.",
    f2Q: "What is the typical cost per square foot for house construction in Kathmandu?", f2A: "Construction costs in Kathmandu typically range from <strong>NPR 2,500 – 4,500 per square foot</strong> depending on finish quality, materials, and design complexity. We provide a detailed, transparent cost breakdown before any work begins.",
    f3Q: "Do you provide services outside of Kathmandu Valley?", f3A: "Yes! Pasa Real Estate provides services <strong>across all of Nepal</strong> — from Kathmandu Valley to Pokhara, Chitwan, Biratnagar, Butwal, and beyond. Our team travels to client sites for consultations and supervision.",
    f4Q: "How long does it take to build a standard 2–3 storey house?", f4A: "A typical 2–3 storey residential house takes <strong>12–24 months</strong> from foundation to handover, depending on size and design complexity. We provide a detailed project timeline before construction and have a strong track record of on-time delivery.",
    f5Q: "Is Pasa Real Estate a government-registered company?", f5A: "Yes, absolutely. Pasa Real Estate Pvt. Ltd. is <strong>officially registered with the Government of Nepal</strong>'s Ministry of Industry, Commerce and Supplies (Reg. No: 393726/82/83, incorporated June 2, 2026) and holds a valid PAN (623630819).",
    f6Q: "Can I get a 3D design before committing to full construction?", f6A: "Absolutely! We offer standalone <strong>3D architectural design services</strong> without requiring a full construction contract. You can commission the 3D renders to visualize and approve your home design, then decide on construction.",
    f7Q: "Do you help with municipality approval and building permits?", f7A: "Yes! Our team handles <strong>complete municipality documentation and approval assistance</strong>. We prepare all required drawings, structural reports, and documents as per municipality standards. We have experience with approvals across Kathmandu, Lalitpur, Bhaktapur, and municipalities across Nepal.",
    
    // Contact
    cLabel: "Get in Touch", cTitle: "Contact Us", cSub: "We're ready to turn your dream into reality — reach out today",
    cPhone: "Phone Numbers", cEmail: "Email Address", cAddrT: "Office Address", cAddrD: "Budhanilkantha-08, Kathmandu, Nepal",
    fName: "Your Name", fPhone: "Phone Number", fSelect: "Select Service", fMesg: "Project Details / Message", fBtn: "Send Message",
    
    // CTA Section
    ctaTitle: "Ready to Build Your Dream Home?", ctaSub: "Schedule a free consultation with our expert engineers today.", ctaBtn: "Contact Us Now",
    
    // Footer
    fAbout: "Building Nepal's future with premium real estate and construction services that blend tradition and innovation.",
    fQ: "Quick Links", fS: "Our Services", fC: "Contact Info", fR: "© 2026 Pasa Real Estate Pvt. Ltd. All rights reserved."
  },
  ne: {
    navHome: "गृहपृष्ठ", navAbout: "हाम्रो बारेमा", navServices: "सेवाहरु", navPortfolio: "परियोजनाहरु", navCertifications: "प्रमाणपत्रहरु", navContact: "सम्पर्क", btnQuote: "नि:शुल्क सोधपुछ",
    heroTitle1: "नेपालको सपना", heroTitle2: "निर्माण गर्दै",
    heroSubtitle: "परम्परागत नेपाली वास्तुकला र आधुनिक इन्जिनियरिङको मिश्रण भएको प्रिमियम रियल इस्टेट तथा निर्माण सेवाहरू।",
    heroExplore: "परियोजनाहरू हेर्नुहोस्",
    
    stat1: "सम्पन्न परियोजनाहरू", stat2: "समयमै हस्तान्तरण", stat3a: "नेपालभर", stat3b: "सेवा कभरेज", stat4a: "लाइसेन्स प्राप्त", stat4b: "इन्जिनियर तथा आर्किटेक्ट",
    
    servLabel: "हामी के गर्छौं", servTitle: "हाम्रा प्रिमियम सेवाहरू", servSub: "नक्सादेखि हस्तान्तरणसम्म — तपाईंको सपनाको लागि तयार पारिएको सम्पूर्ण निर्माण समाधान",
    s1Title: "घरको नक्सा डिजाइन", s1Desc: "नेपालको भवन निर्माण संहिता र नगरपालिकाको मापदण्ड पूर्ण रूपमा पालना गर्दै लाइसेन्स प्राप्त इन्जिनियरहरू द्वारा तयार पारिएको सटीक वास्तु ब्लूप्रिन्टहरू।", s1F1: "नगरपालिकाबाट स्वीकृत डिजाइन", s1F2: "स्ट्रक्चरल रेखाचित्र समावेश", s1F3: "छिटो सेवा",
    s2Title: "थ्रीडी आर्किटेक्चरल डिजाइन", s2Desc: "तपाईंको सपनाको घर निर्माण हुनु अघि नै बाहिरी र भित्री डिजाइनको यथार्थपरक थ्रीडी अनुभव।", s2F1: "इन्टेरियर र एक्सटेरियर रेन्डर", s2F2: "भर्चुअल वाकथ्रु विकल्पहरू", s2F3: "डिजाइन संशोधन समावेश",
    s3Title: "इन्जिनियरिङ कन्सल्टेन्सी", s3Desc: "तपाईंको परियोजनाले उच्च सुरक्षा मापदण्ड र भूकम्प-प्रतिरोधी डिजाइन पूरा गरेको सुनिश्चित गर्न विशेषज्ञ सिभिल र स्ट्रक्चरल इन्जिनियरिङ परामर्श।", s3F1: "भूकम्प-प्रतिरोधी डिजाइन", s3F2: "माटो परीक्षण र साइट अध्ययन", s3F3: "विस्तृत लागत अनुमान",
    s4Title: "निर्माण व्यवस्थापन", s4Desc: "सामग्री खरिददेखि गुणस्तर नियन्त्रणसम्मको सम्पूर्ण निर्माण व्यवस्थापन — समयमै र बजेटभित्र परियोजना सम्पन्न।", s4F1: "पूर्ण परियोजना सुपरिवेक्षण", s4F2: "सामग्री व्यवस्थापन", s4F3: "प्रगति रिपोर्टिङ",
    s5Title: "परियोजना सुपरिवेक्षण", s5Desc: "निर्माण अवधिभर गुणस्तर, डिजाइनको पालना र सुरक्षा प्रोटोकल सुनिश्चित गर्न साइटमा व्यावसायिक सुपरिवेक्षण।", s5F1: "दैनिक साइट निरीक्षण", s5F2: "गुणस्तर जाँच", s5F3: "ग्राहकलाई नियमित अपडेट",
    s6Title: "जग्गा खरिद तथा बिक्री", s6Desc: "नेपालभर जग्गा खरिद तथा बिक्रीको लागि भरपर्दो सल्लाहकार — कानुनी प्रमाणीकरण र बजार मूल्याङ्कनको साथ पारदर्शी कारोबार।", s6F1: "बजार मूल्य मूल्याङ्कन", s6F2: "कानुनी कागजातमा सहयोग", s6F3: "नेपालभर नेटवर्क",
    sBtn: "सोधपुछ गर्नुहोस् →",
    
    whyLabel: "हाम्रो प्रतिबद्धता", whyTitle: "पासा रियल इस्टेटलाई किन रोज्ने?", whySub: "६ आधारस्तम्भ जसले हामीलाई नेपालको सबैभन्दा भरपर्दो निर्माण साझेदार बनाउँछ",
    w1Title: "अनुभवी इन्जिनियरहरू", w1Desc: "हाम्रो लाइसेन्स प्राप्त सिभिल र स्ट्रक्चरल इन्जिनियरहरूको टोलीसँग नेपालको भौगोलिक अवस्था र भवन निर्माण नियमहरूको दशकौंको अनुभव छ।",
    w2Title: "गुणस्तरीय सामग्री", w2Desc: "हामी केवल प्रमाणित र उच्च गुणस्तरको निर्माण सामग्री प्रयोग गर्छौं — जसले तपाईंको घर पुस्तौंसम्म बलियो रहन सुनिश्चित गर्दछ।",
    w3Title: "पारदर्शी मूल्य", w3Desc: "कुनै लुकेको खर्च छैन। हामी सुरुमै विस्तृत लागत विवरण दिन्छौं र हरेक चरणमा तपाईंलाई जानकारी गराउँछौं।",
    w4Title: "समयमै हस्तान्तरण", w4Desc: "हामीसँग समयमै परियोजनाहरू हस्तान्तरण गरेको प्रमाणित रेकर्ड छ। तपाईंको समयरेखा हाम्रो प्रतिबद्धता हो।",
    w5Title: "नेपालभर सेवा", w5Desc: "काठमाडौं उपत्यकादेखि तराईसम्म — हामी नेपालका सबै प्रदेशहरूमा समान समर्पणका साथ सेवा गर्छौं।",
    w6Title: "ग्राहक पहिलो प्राथमिकता", w6Desc: "तपाईंको सन्तुष्टि हाम्रो प्रमुख लक्ष्य हो। हामी सुन्छौं, सल्लाह दिन्छौं र तपाईंको परिकल्पना अनुसार निर्माण गर्छौं।",
    
    aboutLabel: "हाम्रो कथा", aboutTitle: "नेपालको सपना निर्माण गर्दै,\nएक पटकमा एउटा घर",
    aGov1: "नेपाल सरकार दर्ता", aGov2: "दर्ता नं: ३९३७२६/८२/८३", aEst1: "२०८३", aEst2: "स्थापना",
    aText1: "पासा रियल इस्टेट प्रा. लि. एउटा स्पष्ट दृष्टिकोणका साथ स्थापना भएको हो: हरेक नेपाली परिवारको लागि गुणस्तरीय निर्माणलाई सुलभ, पारदर्शी र भरपर्दो बनाउने। २ जुन २०२६ मा नेपाल सरकारको उद्योग, वाणिज्य तथा आपूर्ति मन्त्रालयमा दर्ता भएको, हामी बुढानीलकण्ठ, काठमाडौंमा आधारित पूर्ण लाइसेन्स प्राप्त निर्माण र रियल इस्टेट कम्पनी हौं।",
    aText2: "हाम्रा संस्थापक श्री ओम बहादुर नगरकोटीको नेतृत्वमा, हामीले इमानदारी, सटीकता र वास्तविक हेरचाहका साथ तपाईंको सपनालाई साकार पार्न एक साझा लक्ष्य साझा गर्ने अनुभवी इन्जिनियर, आर्किटेक्ट र परामर्शदाताहरूको टोली भेला गरेका छौं।",
    aVisT: "हाम्रो दृष्टिकोण", aVisD: "निर्माण क्षेत्रमा नेपालको सबैभन्दा भरपर्दो नाम बन्ने — जहाँ हरेक ग्राहकको सपना एक दिगो वास्तविकता बन्छ।",
    aMisT: "हाम्रो लक्ष्य", aMisD: "पारदर्शिता, नवीनता र इमानदारिताको साथ गुणस्तर-प्रथम निर्माण सेवाहरू प्रदान गर्ने।",
    aFoundT: "संस्थापक तथा अध्यक्ष",
    
    procLabel: "हामी कसरी काम गर्छौं", procTitle: "हाम्रो निर्माण प्रक्रिया", procSub: "तपाईंको पहिलो परिकल्पनादेखि नयाँ घरमा सर्नुसम्मको पारदर्शी र झन्झटमुक्त यात्रा",
    p1T: "नि:शुल्क परामर्श", p1D: "हामी तपाईंको दृष्टिकोण, आवश्यकता, स्थान र बजेट बुझ्नको लागि विस्तृत परामर्शबाट सुरु गर्छौं — पूर्ण रूपमा नि:शुल्क।",
    p2T: "नक्सा डिजाइन", p2D: "हाम्रा आर्किटेक्टहरूले तपाईंको आवश्यकता, नगरपालिकाको मापदण्ड र सुरक्षा अनुसार सटीक नक्सा डिजाइन तयार गर्छन्।",
    p3T: "थ्रीडी भिजुअलाइजेशन", p3D: "निर्माण सुरु हुनु अघि नै तपाईंको सपनाको घरको पूर्ण थ्रीडी अनुभव — भित्री र बाहिरी डिजाइनसहित।",
    p4T: "निर्माण कार्य", p4D: "हाम्रो विशेषज्ञ टोलीले गुणस्तरीय सामग्री, नियमित सुपरिवेक्षण र पूर्ण पारदर्शिताको साथ निर्धारित समय र बजेटमा निर्माण सम्पन्न गर्छ।",
    p5T: "हस्तान्तरण र समर्थन", p5D: "हामी तपाईंको सपनाको घर सम्पूर्ण कागजात, निर्माण पछिको समर्थन र सन्तुष्टिको ग्यारेन्टीसहित हस्तान्तरण गर्छौं।",
    
    portLabel: "हाम्रो काम", portTitle: "विशेष परियोजनाहरू", portSub: "नेपालभरिका हाम्रा उत्कृष्ट निर्माण उपलब्धिहरूको एक झलक",
    pfAll: "सबै परियोजनाहरू", pfRes: "आवासीय घर", pfCom: "व्यावसायिक भवन", pfApt: "अपार्टमेन्ट",
    pcBtn: "विवरण हेर्नुहोस्",
    pc1B: "आवासीय घर", pc1T: "लक्जरी आवासीय भिल्ला", pc1D: "बुढानीलकण्ठ, काठमाडौं — समकालीन डिजाइन र प्रिमियम फिनिस सहितको ४-तल्ले आधुनिक भिल्ला", pc1Tg1: "📍 काठमाडौं", pc1Tg2: "🏠 आवासीय घर",
    pc2B: "अपार्टमेन्ट", pc2T: "आधुनिक अपार्टमेन्ट कम्प्लेक्स", pc2D: "टोखा, काठमाडौं — पार्किङ र रुफटप टेरेस सहितको ६-युनिट प्रिमियम अपार्टमेन्ट ब्लक", pc2Tg1: "📍 टोखा", pc2Tg2: "🏢 अपार्टमेन्ट",
    pc3B: "व्यावसायिक भवन", pc3T: "व्यावसायिक अफिस भवन", pc3D: "दरबारमार्ग, काठमाडौं — ग्लास अगाडिको भाग र आधुनिक इन्टेरियर सहितको ५-तल्ले व्यावसायिक भवन", pc3Tg1: "📍 दरबारमार्ग", pc3Tg2: "🏙️ व्यावसायिक भवन",
    pc4B: "आवासीय घर", pc4T: "सपनाको घर", pc4D: "ललितपुर — बगैंचा, परम्परागत नेवारी झलक र आधुनिक सुविधाहरू भएको ३-तल्ले पारिवारिक निवास", pc4Tg1: "📍 ललितपुर", pc4Tg2: "🏠 आवासीय घर",
    pc5B: "पेन्टहाउस", pc5T: "एक्जिक्युटिभ पेन्टहाउस सुइट", pc5D: "बालुवाटार, काठमाडौं — हिमालयको दृश्य देखिने र स्मार्ट-होम प्रणाली सहितको उच्च स्तरको पेन्टहाउस", pc5Tg1: "📍 बालुवाटार", pc5Tg2: "⛰️ पेन्टहाउस",
    pc6B: "मिश्रित उपयोग", pc6T: "व्यावसायिक तथा आवासीय कम्प्लेक्स", pc6D: "बानेश्वर, काठमाडौं — भुइँतल्लामा पसलहरू र माथि प्रिमियम अफिसहरू", pc6Tg1: "📍 बानेश्वर", pc6Tg2: "🛍️ मिश्रित उपयोग",

    testLabel: "ग्राहकका कथाहरू", testTitle: "हाम्रा ग्राहकहरू के भन्छन्", testSub: "आफ्नो सपनाको घर निर्माण गर्न हामीलाई विश्वास गर्ने परिवारहरूका वास्तविक अनुभवहरू",
    t1T: "\"पासा रियल इस्टेटले हाम्रो सपनालाई साकार पार्‍यो। सुरुको नक्सादेखि अन्तिम हस्तान्तरणसम्म, सबै कुरा व्यावसायिक रूपमा सम्हालिएको थियो। थ्रीडी डिजाइनले निर्माण सुरु हुनुभन्दा अघि नै हाम्रो घरको प्रत्येक कुनाको कल्पना गर्न मद्दत गर्‍यो। वास्तवमै आफ्नो वाचा पूरा गर्ने कम्पनी — सपना तपाईंको, जिम्मेवारी हाम्रो!\"", t1N: "रमेश शर्मा", t1L: "बुढानीलकण्ठ, काठमाडौं",
    t2T: "\"हामी निर्माण लागतको बारेमा हिचकिचाएका थियौं, तर ओम बहादुर सरको टोली पूर्ण रूपमा पारदर्शी थियो। उहाँहरूले विस्तृत लागत विवरण दिनुभयो, बजेटमै काम गर्नुभयो, र निर्धारित समयभन्दा दुई हप्ता अगाडि नै काम सम्पन्न गर्नुभयो! कामको गुणस्तर उत्कृष्ट छ — हाम्रा छिमेकीहरूले पनि कसले घर बनायो भनेर सोधिरहन्छन्।\"", t2N: "सीता गुरुङ र परिवार", t2L: "ललितपुर, नेपाल",
    t3T: "\"म विदेशमा बस्दै आएको थिएँ र निर्माणको क्रममा उपस्थित हुन सकिनँ। पासा रियल इस्टेटले जग्गा खरिददेखि सुपरिवेक्षणसम्म सबै कुरा सम्हाल्यो — नियमित अपडेट र तस्बिरहरू सहित। उहाँहरूको इमानदारीले मलाई पूर्ण शान्ति दियो। मेरो परिवार अहिले एउटा सुन्दर घरमा बस्छ जसमा मलाई गर्व छ।\"", t3N: "बिष्णु प्रसाद खनाल", t3L: "भक्तपुर (NRN — बेलायत)",
    
    qLabel: "आफ्नो यात्रा सुरु गर्नुहोस्", qTitle: "नि:शुल्क सोधपुछ गर्नुहोस्", qSub: "हामीलाई तपाईंको परियोजनाको बारेमा बताउनुहोस् र हामी २४ घण्टाभित्र विस्तृत लागत अनुमानसहित सम्पर्क गर्नेछौं।",
    qB1: "१००% नि:शुल्क", qB2: "२४ घण्टाभित्र प्रतिक्रिया", qB3: "विशेषज्ञको सल्लाह समावेश", qB4: "विस्तृत लागत विवरण",
    qCall: "वा हामीलाई सिधै कल गर्नुहोस्:",
    qFName: "तपाईंको पूरा नाम *", qFPhone: "फोन नम्बर *", qFEmail: "इमेल ठेगाना", qFType: "परियोजनाको प्रकार *", qFBgt: "बजेट दायरा",
    
    faqLabel: "केही प्रश्नहरू छन्?", faqTitle: "प्रायः सोधिने प्रश्नहरू", faqSub: "हामीसँग तपाईंको सपनाको घर निर्माण गर्ने बारे तपाईंले जान्नुपर्ने सबै कुरा",
    f1Q: "नेपालमा घरको नक्सा डिजाइन गर्न कति समय लाग्छ?", f1A: "एक साधारण आवासीय नक्सा तयार गर्न सामान्यतया <strong>७–१५ काम गर्ने दिनहरू</strong> लाग्छ। यसमा प्रारम्भिक परामर्श, स्केचहरू, संशोधनहरू र नगरपालिकाबाट पास हुने अन्तिम नक्सा समावेश छ।",
    f2Q: "काठमाडौंमा घर निर्माणको प्रति वर्ग फुट लागत कति हुन्छ?", f2A: "काठमाडौंमा निर्माण लागत सामान्यतया <strong>प्रति वर्ग फुट रु. २,५०० – ४,५००</strong> सम्म हुन्छ, जुन फिनिसिङको गुणस्तर, सामग्री र डिजाइनमा निर्भर गर्दछ। हामी काम सुरु हुनु अघि विस्तृत र पारदर्शी लागत विवरण प्रदान गर्छौं।",
    f3Q: "के तपाईं काठमाडौं उपत्यका बाहिर सेवा प्रदान गर्नुहुन्छ?", f3A: "हो! पासा रियल इस्टेटले <strong>नेपालभर</strong> सेवा प्रदान गर्दछ — काठमाडौं उपत्यकादेखि पोखरा, चितवन, विराटनगर, बुटवल र अन्य स्थानहरूमा। हाम्रो टोली परामर्श र सुपरिवेक्षणको लागि तपाईंको साइटमा पुग्छ।",
    f4Q: "साधारण २-३ तल्ले घर बनाउन कति समय लाग्छ?", f4A: "एक सामान्य २-३ तल्ले आवासीय घरको जगदेखि हस्तान्तरणसम्म <strong>१२-२४ महिना</strong> लाग्छ। हामी निर्माण अघि विस्तृत परियोजना समयतालिका दिन्छौं र समयमै डेलिभरी गर्ने हाम्रो राम्रो रेकर्ड छ।",
    f5Q: "के पासा रियल इस्टेट सरकारमा दर्ता भएको कम्पनी हो?", f5A: "हो, बिल्कुल। पासा रियल इस्टेट प्रा. लि. <strong>नेपाल सरकारको</strong> उद्योग, वाणिज्य तथा आपूर्ति मन्त्रालयमा आधिकारिक रूपमा दर्ता भएको छ (दर्ता नं: ३९३७२६/८२/८३) र यसको मान्य प्यान (६२३६३०८१९) छ।",
    f6Q: "के म पूर्ण निर्माण सुरु गर्नुअघि थ्रीडी डिजाइन मात्र प्राप्त गर्न सक्छु?", f6A: "बिल्कुल! हामी पूर्ण निर्माण सम्झौता बिना नै <strong>थ्रीडी आर्किटेक्चरल डिजाइन सेवाहरू</strong> मात्र पनि प्रदान गर्छौं। तपाईंले घरको डिजाइन हेरेर त्यसपछि निर्माण गर्ने निर्णय गर्न सक्नुहुन्छ।",
    f7Q: "के तपाईं नगरपालिकाको स्वीकृति र नक्सा पास गर्न मद्दत गर्नुहुन्छ?", f7A: "हो! हाम्रो टोलीले <strong>नगरपालिकाका सम्पूर्ण कागजातहरू र नक्सा पास गर्ने प्रक्रिया</strong> सम्हाल्छ। हामी नगरपालिकाको मापदण्ड अनुसार सबै आवश्यक रेखाचित्र र स्ट्रक्चरल रिपोर्टहरू तयार गर्छौं।",
    
    cLabel: "सम्पर्क गर्नुहोस्", cTitle: "हामीलाई सम्पर्क गर्नुहोस्", cSub: "तपाईंसँग जग्गा तयार छ वा एउटा परिकल्पना मात्र छ, हामी तपाईंलाई नेपालमा निर्माण प्रक्रिया अगाडि बढाउन मद्दत गर्न यहाँ छौं।",
    cPhone: "फोन नम्बरहरू", cEmail: "इमेल ठेगाना", cAddrT: "कार्यालय ठेगाना", cAddrD: "बुढानीलकण्ठ-०८, काठमाडौं, नेपाल",
    fName: "तपाईंको नाम", fPhone: "फोन नम्बर", fSelect: "सेवा छान्नुहोस्", fMesg: "परियोजना विवरण / सन्देश", fBtn: "सन्देश पठाउनुहोस्",
    
    ctaTitle: "आफ्नो सपनाको घर बनाउन तयार हुनुहुन्छ?", ctaSub: "आजै हाम्रा विशेषज्ञ इन्जिनियरहरूसँग नि:शुल्क परामर्श लिनुहोस्।", ctaBtn: "अहिले सम्पर्क गर्नुहोस्",
    
    fAbout: "परम्परा र नवीनताको मिश्रण गर्ने प्रिमियम रियल इस्टेट र निर्माण सेवाहरूको साथ नेपालको भविष्य निर्माण गर्दै।",
    fQ: "द्रुत लिङ्कहरू", fS: "हाम्रा सेवाहरू", fC: "सम्पर्क जानकारी", fR: "© २०२६ पासा रियल इस्टेट प्रा. लि. सबै अधिकार सुरक्षित।"
  }
};

document.addEventListener('DOMContentLoaded', () => {
  const langCheckbox = document.getElementById('lang-switch');
  if (!langCheckbox) return;

  const updateLanguage = (lang) => {
    const t = translations[lang];
    
    const map = [
      // Nav
      { s: 'a[href="#home"].nav-link, a[href="#home"].mobile-nav-link', k: 'navHome' },
      { s: 'a[href="#about"].nav-link, a[href="#about"].mobile-nav-link', k: 'navAbout' },
      { s: 'a[href="#services"].nav-link, a[href="#services"].mobile-nav-link', k: 'navServices' },
      { s: 'a[href="#portfolio"].nav-link, a[href="#portfolio"].mobile-nav-link', k: 'navPortfolio' },
      { s: 'a[href="#certifications"].nav-link, a[href="#certifications"].mobile-nav-link', k: 'navCertifications' },
      { s: 'a[href="#contact"].nav-link, a[href="#contact"].mobile-nav-link', k: 'navContact' },
      { s: 'a[href="#quote"].btn', k: 'btnQuote' },
      
      // Hero
      { s: '.hero-subtitle', k: 'heroSubtitle' },
      { s: '.hero-content .btn-outline', k: 'heroExplore' },
      
      // Stats
      { s: '.stats-section .stat-card:nth-child(1) .stat-label', k: 'stat1' },
      { s: '.stats-section .stat-card:nth-child(2) .stat-label', k: 'stat2' },
      { s: '.stats-section .stat-card:nth-child(3) .stat-label-big', k: 'stat3a' },
      { s: '.stats-section .stat-card:nth-child(3) .stat-label', k: 'stat3b' },
      { s: '.stats-section .stat-card:nth-child(4) .stat-label-big', k: 'stat4a' },
      { s: '.stats-section .stat-card:nth-child(4) .stat-label', k: 'stat4b' },
      
      // Services
      { s: '#services .section-label', k: 'servLabel' }, { s: '#services .section-title', k: 'servTitle' }, { s: '#services .section-subtitle', k: 'servSub' },
      { s: '.services-grid .service-card:nth-child(1) h3', k: 's1Title' }, { s: '.services-grid .service-card:nth-child(1) p', k: 's1Desc' }, { s: '.services-grid .service-card:nth-child(1) li:nth-child(1)', k: 's1F1' }, { s: '.services-grid .service-card:nth-child(1) li:nth-child(2)', k: 's1F2' }, { s: '.services-grid .service-card:nth-child(1) li:nth-child(3)', k: 's1F3' },
      { s: '.services-grid .service-card:nth-child(2) h3', k: 's2Title' }, { s: '.services-grid .service-card:nth-child(2) p', k: 's2Desc' }, { s: '.services-grid .service-card:nth-child(2) li:nth-child(1)', k: 's2F1' }, { s: '.services-grid .service-card:nth-child(2) li:nth-child(2)', k: 's2F2' }, { s: '.services-grid .service-card:nth-child(2) li:nth-child(3)', k: 's2F3' },
      { s: '.services-grid .service-card:nth-child(3) h3', k: 's3Title' }, { s: '.services-grid .service-card:nth-child(3) p', k: 's3Desc' }, { s: '.services-grid .service-card:nth-child(3) li:nth-child(1)', k: 's3F1' }, { s: '.services-grid .service-card:nth-child(3) li:nth-child(2)', k: 's3F2' }, { s: '.services-grid .service-card:nth-child(3) li:nth-child(3)', k: 's3F3' },
      { s: '.services-grid .service-card:nth-child(4) h3', k: 's4Title' }, { s: '.services-grid .service-card:nth-child(4) p', k: 's4Desc' }, { s: '.services-grid .service-card:nth-child(4) li:nth-child(1)', k: 's4F1' }, { s: '.services-grid .service-card:nth-child(4) li:nth-child(2)', k: 's4F2' }, { s: '.services-grid .service-card:nth-child(4) li:nth-child(3)', k: 's4F3' },
      { s: '.services-grid .service-card:nth-child(5) h3', k: 's5Title' }, { s: '.services-grid .service-card:nth-child(5) p', k: 's5Desc' }, { s: '.services-grid .service-card:nth-child(5) li:nth-child(1)', k: 's5F1' }, { s: '.services-grid .service-card:nth-child(5) li:nth-child(2)', k: 's5F2' }, { s: '.services-grid .service-card:nth-child(5) li:nth-child(3)', k: 's5F3' },
      { s: '.services-grid .service-card:nth-child(6) h3', k: 's6Title' }, { s: '.services-grid .service-card:nth-child(6) p', k: 's6Desc' }, { s: '.services-grid .service-card:nth-child(6) li:nth-child(1)', k: 's6F1' }, { s: '.services-grid .service-card:nth-child(6) li:nth-child(2)', k: 's6F2' }, { s: '.services-grid .service-card:nth-child(6) li:nth-child(3)', k: 's6F3' },
      { s: '.services-grid .service-card:nth-child(1) .service-link', k: 'sBtn' }, { s: '.services-grid .service-card:nth-child(2) .service-link', k: 'sBtn' }, { s: '.services-grid .service-card:nth-child(3) .service-link', k: 'sBtn' }, { s: '.services-grid .service-card:nth-child(4) .service-link', k: 'sBtn' }, { s: '.services-grid .service-card:nth-child(5) .service-link', k: 'sBtn' }, { s: '.services-grid .service-card:nth-child(6) .service-link', k: 'sBtn' },
      
      // Why Us
      { s: '#why-us .section-label', k: 'whyLabel' }, { s: '#why-us .section-title', k: 'whyTitle' }, { s: '#why-us .section-subtitle', k: 'whySub' },
      { s: '.why-grid .why-card:nth-child(1) h3', k: 'w1Title' }, { s: '.why-grid .why-card:nth-child(1) p', k: 'w1Desc' },
      { s: '.why-grid .why-card:nth-child(2) h3', k: 'w2Title' }, { s: '.why-grid .why-card:nth-child(2) p', k: 'w2Desc' },
      { s: '.why-grid .why-card:nth-child(3) h3', k: 'w3Title' }, { s: '.why-grid .why-card:nth-child(3) p', k: 'w3Desc' },
      { s: '.why-grid .why-card:nth-child(4) h3', k: 'w4Title' }, { s: '.why-grid .why-card:nth-child(4) p', k: 'w4Desc' },
      { s: '.why-grid .why-card:nth-child(5) h3', k: 'w5Title' }, { s: '.why-grid .why-card:nth-child(5) p', k: 'w5Desc' },
      { s: '.why-grid .why-card:nth-child(6) h3', k: 'w6Title' }, { s: '.why-grid .why-card:nth-child(6) p', k: 'w6Desc' },
      
      // About Us
      { s: '#about .section-label', k: 'aboutLabel' }, { s: '#about .about-badge-float strong', k: 'aGov1' }, { s: '#about .about-badge-float small', k: 'aGov2' }, { s: '#about .years-num', k: 'aEst1' }, { s: '#about .years-label', k: 'aEst2' }, { s: '#about .about-text:nth-of-type(1)', k: 'aText1' }, { s: '#about .about-text:nth-of-type(2)', k: 'aText2' },
      { s: '#about .vm-card:nth-child(1) strong', k: 'aVisT' }, { s: '#about .vm-card:nth-child(1) p', k: 'aVisD' }, { s: '#about .vm-card:nth-child(2) strong', k: 'aMisT' }, { s: '#about .vm-card:nth-child(2) p', k: 'aMisD' }, { s: '.founder-role', k: 'aFoundT' },
      
      // Process
      { s: '#process .section-label', k: 'procLabel' }, { s: '#process .section-title', k: 'procTitle' }, { s: '#process .section-subtitle', k: 'procSub' },
      { s: '#process .timeline-item:nth-child(1) h3', k: 'p1T' }, { s: '#process .timeline-item:nth-child(1) p', k: 'p1D' },
      { s: '#process .timeline-item:nth-child(2) h3', k: 'p2T' }, { s: '#process .timeline-item:nth-child(2) p', k: 'p2D' },
      { s: '#process .timeline-item:nth-child(3) h3', k: 'p3T' }, { s: '#process .timeline-item:nth-child(3) p', k: 'p3D' },
      { s: '#process .timeline-item:nth-child(4) h3', k: 'p4T' }, { s: '#process .timeline-item:nth-child(4) p', k: 'p4D' },
      { s: '#process .timeline-item:nth-child(5) h3', k: 'p5T' }, { s: '#process .timeline-item:nth-child(5) p', k: 'p5D' },
      
      // Portfolio
      { s: '#portfolio .section-label', k: 'portLabel' }, { s: '#portfolio .section-title', k: 'portTitle' }, { s: '#portfolio .section-subtitle', k: 'portSub' },
      { s: '.filter-btn[data-filter="all"]', k: 'pfAll' }, { s: '.filter-btn[data-filter="residential"]', k: 'pfRes' }, { s: '.filter-btn[data-filter="commercial"]', k: 'pfCom' }, { s: '.filter-btn[data-filter="apartment"]', k: 'pfApt' },
      // Portfolio Cards
      { s: '.portfolio-card:nth-child(1) .portfolio-cat-badge', k: 'pc1B' }, { s: '.portfolio-card:nth-child(1) h3', k: 'pc1T' }, { s: '.portfolio-card:nth-child(1) p', k: 'pc1D' }, { s: '.portfolio-card:nth-child(1) .portfolio-tags span:nth-child(1)', k: 'pc1Tg1' }, { s: '.portfolio-card:nth-child(1) .portfolio-tags span:nth-child(2)', k: 'pc1Tg2' }, { s: '.portfolio-card:nth-child(1) .portfolio-btn', k: 'pcBtn' },
      { s: '.portfolio-card:nth-child(2) .portfolio-cat-badge', k: 'pc2B' }, { s: '.portfolio-card:nth-child(2) h3', k: 'pc2T' }, { s: '.portfolio-card:nth-child(2) p', k: 'pc2D' }, { s: '.portfolio-card:nth-child(2) .portfolio-tags span:nth-child(1)', k: 'pc2Tg1' }, { s: '.portfolio-card:nth-child(2) .portfolio-tags span:nth-child(2)', k: 'pc2Tg2' }, { s: '.portfolio-card:nth-child(2) .portfolio-btn', k: 'pcBtn' },
      { s: '.portfolio-card:nth-child(3) .portfolio-cat-badge', k: 'pc3B' }, { s: '.portfolio-card:nth-child(3) h3', k: 'pc3T' }, { s: '.portfolio-card:nth-child(3) p', k: 'pc3D' }, { s: '.portfolio-card:nth-child(3) .portfolio-tags span:nth-child(1)', k: 'pc3Tg1' }, { s: '.portfolio-card:nth-child(3) .portfolio-tags span:nth-child(2)', k: 'pc3Tg2' }, { s: '.portfolio-card:nth-child(3) .portfolio-btn', k: 'pcBtn' },
      { s: '.portfolio-card:nth-child(4) .portfolio-cat-badge', k: 'pc4B' }, { s: '.portfolio-card:nth-child(4) h3', k: 'pc4T' }, { s: '.portfolio-card:nth-child(4) p', k: 'pc4D' }, { s: '.portfolio-card:nth-child(4) .portfolio-tags span:nth-child(1)', k: 'pc4Tg1' }, { s: '.portfolio-card:nth-child(4) .portfolio-tags span:nth-child(2)', k: 'pc4Tg2' }, { s: '.portfolio-card:nth-child(4) .portfolio-btn', k: 'pcBtn' },
      { s: '.portfolio-card:nth-child(5) .portfolio-cat-badge', k: 'pc5B' }, { s: '.portfolio-card:nth-child(5) h3', k: 'pc5T' }, { s: '.portfolio-card:nth-child(5) p', k: 'pc5D' }, { s: '.portfolio-card:nth-child(5) .portfolio-tags span:nth-child(1)', k: 'pc5Tg1' }, { s: '.portfolio-card:nth-child(5) .portfolio-tags span:nth-child(2)', k: 'pc5Tg2' }, { s: '.portfolio-card:nth-child(5) .portfolio-btn', k: 'pcBtn' },
      { s: '.portfolio-card:nth-child(6) .portfolio-cat-badge', k: 'pc6B' }, { s: '.portfolio-card:nth-child(6) h3', k: 'pc6T' }, { s: '.portfolio-card:nth-child(6) p', k: 'pc6D' }, { s: '.portfolio-card:nth-child(6) .portfolio-tags span:nth-child(1)', k: 'pc6Tg1' }, { s: '.portfolio-card:nth-child(6) .portfolio-tags span:nth-child(2)', k: 'pc6Tg2' }, { s: '.portfolio-card:nth-child(6) .portfolio-btn', k: 'pcBtn' },
      
      // Testimonials
      { s: '.testimonials-section .section-label', k: 'testLabel' }, { s: '#testimonials-heading', k: 'testTitle' }, { s: '.testimonials-section .section-subtitle', k: 'testSub' },
      { s: '.testimonial-card:nth-child(1) p', k: 't1T' }, { s: '.testimonial-card:nth-child(1) .testi-name', k: 't1N' }, { s: '.testimonial-card:nth-child(1) .testi-loc', k: 't1L' },
      { s: '.testimonial-card:nth-child(2) p', k: 't2T' }, { s: '.testimonial-card:nth-child(2) .testi-name', k: 't2N' }, { s: '.testimonial-card:nth-child(2) .testi-loc', k: 't2L' },
      { s: '.testimonial-card:nth-child(3) p', k: 't3T' }, { s: '.testimonial-card:nth-child(3) .testi-name', k: 't3N' }, { s: '.testimonial-card:nth-child(3) .testi-loc', k: 't3L' },
      
      // Quote Request
      { s: '.quote-section .section-label', k: 'qLabel' }, { s: '#quote-heading', k: 'qTitle' }, { s: '.quote-left > p', k: 'qSub' },
      { s: '.quote-benefits li:nth-child(1)', k: 'qB1' }, { s: '.quote-benefits li:nth-child(2)', k: 'qB2' }, { s: '.quote-benefits li:nth-child(3)', k: 'qB3' }, { s: '.quote-benefits li:nth-child(4)', k: 'qB4' },
      { s: '.quote-contact-cta p', k: 'qCall' },
      { s: '#quoteForm label[for="q-name"]', k: 'qFName' }, { s: '#quoteForm input[id="q-name"]', k: 'fName' },
      { s: '#quoteForm label[for="q-phone"]', k: 'qFPhone' }, { s: '#quoteForm input[id="q-phone"]', k: 'fPhone' },
      { s: '#quoteForm label[for="q-email"]', k: 'qFEmail' }, { s: '#quoteForm input[id="q-email"]', k: 'cEmail' },
      { s: '#quoteForm label[for="q-type"]', k: 'qFType' },
      { s: '#quoteForm label[for="q-budget"]', k: 'qFBgt' },
      
      // FAQ
      { s: '.faq-section .section-label', k: 'faqLabel' }, { s: '#faq-heading', k: 'faqTitle' }, { s: '.faq-section .section-subtitle', k: 'faqSub' },
      { s: '.faq-item:nth-child(1) .faq-q', k: 'f1Q' }, { s: '.faq-item:nth-child(1) .faq-a', k: 'f1A' },
      { s: '.faq-item:nth-child(2) .faq-q', k: 'f2Q' }, { s: '.faq-item:nth-child(2) .faq-a', k: 'f2A' },
      { s: '.faq-item:nth-child(3) .faq-q', k: 'f3Q' }, { s: '.faq-item:nth-child(3) .faq-a', k: 'f3A' },
      { s: '.faq-item:nth-child(4) .faq-q', k: 'f4Q' }, { s: '.faq-item:nth-child(4) .faq-a', k: 'f4A' },
      { s: '.faq-item:nth-child(5) .faq-q', k: 'f5Q' }, { s: '.faq-item:nth-child(5) .faq-a', k: 'f5A' },
      { s: '.faq-item:nth-child(6) .faq-q', k: 'f6Q' }, { s: '.faq-item:nth-child(6) .faq-a', k: 'f6A' },
      { s: '.faq-item:nth-child(7) .faq-q', k: 'f7Q' }, { s: '.faq-item:nth-child(7) .faq-a', k: 'f7A' },

      // Contact
      { s: '#contact .section-label', k: 'cLabel' }, { s: '#contact .section-title', k: 'cTitle' }, { s: '#contact .section-subtitle', k: 'cSub' },
      { s: '.contact-info-card:nth-child(1) strong', k: 'cPhone' }, { s: '.contact-info-card:nth-child(2) strong', k: 'cEmail' },
      { s: '.contact-info-card:nth-child(3) strong', k: 'cAddrT' }, { s: '.contact-info-card:nth-child(3) p', k: 'cAddrD' },
      
      // Contact Form
      { s: '#contact-form input[type="text"]', k: 'fName' }, { s: '#contact-form input[type="tel"]', k: 'fPhone' },
      { s: '#contact-form select option:first-child', k: 'fSelect' }, { s: '#contact-form textarea', k: 'fMesg' },
      { s: '#contact-form .btn-gold', k: 'fBtn' },
      
      // CTA
      { s: '.cta-section h2', k: 'ctaTitle' }, { s: '.cta-section p', k: 'ctaSub' }, { s: '.cta-section .btn', k: 'ctaBtn' },
      
      // Footer
      { s: '.footer-about', k: 'fAbout' }, { s: '.footer-col:nth-child(2) h4', k: 'fQ' },
      { s: '.footer-col:nth-child(3) h4', k: 'fS' }, { s: '.footer-col:nth-child(4) h4', k: 'fC' },
      { s: '.footer-bottom p', k: 'fR' }
    ];

    map.forEach(({ s, k }) => {
      document.querySelectorAll(s).forEach(el => {
        if (el) {
          if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
            el.placeholder = t[k];
          } else if (el.classList.contains('benefit-check')) {
            // Do not override icon span
          } else if (el.closest('.quote-benefits') && el.tagName === 'LI') {
            el.innerHTML = '<span class="benefit-check">&#10003;</span> ' + t[k];
          } else {
            el.innerHTML = t[k];
          }
        }
      });
    });

    // Special cases
    const aboutTitle = document.querySelector('#about .section-title');
    if (aboutTitle) {
      aboutTitle.innerHTML = t['aboutTitle'].replace('\n', '<br/>');
    }
  };

  langCheckbox.addEventListener('change', (e) => {
    if(e.target.checked) {
      updateLanguage('ne');
    } else {
      updateLanguage('en');
    }
  });
});
