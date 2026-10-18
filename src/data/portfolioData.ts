/**
 * Central Bilingual Data Configuration for Md Mahdi Hasan Portfolio
 * Supports English ('en') and Bengali ('bn') with Hind Siliguri typography.
 */

import brandIdentityImg from '../assets/images/brand_identity_mockup_1791728975231.jpg';
import videoShowreelImg from '../assets/images/video_editing_colorgrade_1791728988677.jpg';
import posterDesignImg from '../assets/images/poster_editorial_design_1791729003280.jpg';
import thumbnailImg from '../assets/images/thumbnail_creative_composition_1791729015441.jpg';
import socialCampaignImg from '../assets/images/social_campaign_graphics_1791729027731.jpg';

export type Language = 'en' | 'bn';

export interface LocalizedString {
  en: string;
  bn: string;
}

export interface ProjectCaseStudy {
  overview: LocalizedString;
  objective: LocalizedString;
  creativeDirection: LocalizedString;
  designProcess: { en: string; bn: string }[];
  colors: { name: LocalizedString; hex: string }[];
  typography: LocalizedString;
  deliverables: { en: string; bn: string }[];
  artworkGallery: {
    title: LocalizedString;
    caption: LocalizedString;
    image: string;
    aspectRatio?: '16:9' | '4:3' | '3:4' | '1:1';
  }[];
}

export interface PortfolioProject {
  id: string;
  categoryKey: 'brand' | 'logo' | 'social' | 'poster' | 'thumbnail' | 'video';
  title: LocalizedString;
  categoryName: LocalizedString;
  year: string;
  shortDescription: LocalizedString;
  coverImage: string;
  aspectRatio: '16:9' | '4:3' | '3:4' | '1:1';
  tags: { en: string; bn: string }[];
  caseStudy: ProjectCaseStudy;
}

export interface ServiceItem {
  number: string;
  title: LocalizedString;
  description: LocalizedString;
  deliverables: { en: string; bn: string }[];
}

export interface ProcessStep {
  number: string;
  name: LocalizedString;
  description: LocalizedString;
}

export interface SoftwareTool {
  name: string;
  category: LocalizedString;
  description: LocalizedString;
}

export const SITE_DATA = {
  personal: {
    name: {
      en: "Md Mahdi Hasan",
      bn: "মো মাহদি হাসান"
    },
    title: {
      en: "Graphic Designer & Video Editor",
      bn: "গ্রাফিক ডিজাইনার ও ভিডিও এডিটর"
    },
    experience: {
      en: "3 years experience",
      bn: "৩ বছরের অভিজ্ঞতা"
    },
    location: {
      en: "Bangladesh",
      bn: "বাংলাদেশ"
    },
    email: "mdmahdiofficials@gmail.com",
    phone: "+8801718014437",
    whatsappUrl: "https://wa.me/8801718014437",
    facebookUrl: "https://www.facebook.com/MdMahdiHasan.Official",
    availability: {
      en: "Available for freelance projects",
      bn: "ফ্রিল্যান্স কাজের জন্য প্রস্তুত"
    },
    // Official authentic photograph provided by Md Mahdi Hasan
    profilePhoto: "https://res.cloudinary.com/flqltzdw/image/upload/v1791728834/WhatsApp_Image_2026-09-06_at_9.04.41_PM.jpg",
    bio: {
      en: [
        "I’m Md Mahdi Hasan, a graphic designer and video editor with 3 years of experience in visual communication and digital content creation.",
        "I enjoy combining thoughtful design, strong typography, and purposeful composition to create visuals that communicate ideas clearly. My work spans brand identity, logo design, social media graphics, advertising materials, YouTube thumbnails, and video editing.",
        "I approach every project with attention to detail, an open mind, and a focus on creating work that feels considered, relevant, and visually distinctive.",
        "I’m always interested in connecting with people and businesses who value creative thinking and thoughtful execution."
      ],
      bn: [
        "আমি মো মাহদি হাসান, ভিজ্যুয়াল কমিউনিকেশন ও ডিজিটাল কনটেন্ট তৈরিতে ৩ বছরের অভিজ্ঞতাসম্পন্ন একজন গ্রাফিক ডিজাইনার ও ভিডিও এডিটর।",
        "আমি সুচিন্তিত ডিজাইন, বলিষ্ঠ টাইপোগ্রাফি এবং উদ্দেশ্যপূর্ণ কম্পোজিশন মিলিয়ে এমন ভিজ্যুয়াল তৈরি করতে পছন্দ করি যা ভাবনাকে সুস্পষ্টভাবে তুলে ধরে। আমার কাজের পরিধি ব্র্যান্ড আইডেন্টিটি, লোগো ডিজাইন, সোশ্যাল মিডিয়া গ্রাফিক্স, বিজ্ঞাপনী উপকরণ, ইউটিউব থাম্বনেইল এবং ভিডিও এডিটিং পর্যন্ত বিস্তৃত।",
        "প্রতিটি প্রজেক্টে আমি খুঁটিনাটি বিষয়ের প্রতি যত্নশীলতা, উন্মুক্ত দৃষ্টিভঙ্গি এবং স্বতন্ত্র ও অর্থপূর্ণ কাজ সৃষ্টির মানসিকতা নিয়ে কাজ করি।",
        "সৃজনশীল ভাবনা ও যত্নশীল বাস্তবায়নকে যারা গুরুত্ব দেন, এমন ব্যক্তি ও প্রতিষ্ঠানের সাথে যুক্ত হতে আমি সদা আগ্রহী।"
      ]
    },
    philosophy: {
      en: "Good design is not just about looking good. It is about communicating the right idea in the right way.",
      bn: "ভালো ডিজাইন মানে কেবল সুন্দর দেখানো নয়। সঠিক ভাবনাকে সঠিক উপায়ে পৌঁছে দেওয়াই ডিজাইনের মূল কথা।"
    }
  },

  hero: {
    headlineLine1: {
      en: "Designing Visual Identities.",
      bn: "ভিজ্যুয়াল আইডেন্টিটি তৈরি।"
    },
    headlineLine2: {
      en: "Editing Stories That Connect.",
      bn: "সংযোগ স্থাপনকারী গল্পের সম্পাদনা।"
    },
    subheadline: {
      en: "Graphic designer and video editor creating clear identities, sharp graphics and engaging video for brands and creators.",
      bn: "ব্র্যান্ড ও ক্রিয়েটরদের জন্য সুস্পষ্ট ভিজ্যুয়াল আইডেন্টিটি, শার্প গ্রাফিক্স এবং আকর্ষণীয় ভিডিও প্রস্তুতকারী গ্রাফিক ডিজাইনার ও ভিডিও এডিটর।"
    },
    stats: [
      {
        value: { en: "3+ Years", bn: "৩+ বছর" },
        label: { en: "Experience", bn: "অভিজ্ঞতা" },
        full: { en: "3+ Years Experience", bn: "৩+ বছরের অভিজ্ঞতা" }
      },
      {
        value: { en: "5", bn: "৫টি" },
        label: { en: "Creative Services", bn: "ক্রিয়েটিভ সেবা" },
        full: { en: "5 Creative Services", bn: "৫টি ক্রিয়েটিভ সেবা" }
      },
      {
        value: { en: "24h", bn: "২৪ ঘণ্টা" },
        label: { en: "Response Time", bn: "রেসপন্স টাইম" },
        full: { en: "24h Response Time", bn: "২৪ ঘণ্টার মধ্যে রেসপন্স" }
      }
    ],
    primaryCtaText: {
      en: "Explore Services",
      bn: "সেবাসমূহ দেখুন"
    },
    secondaryCtaText: {
      en: "Let’s Work Together",
      bn: "একসাথে কাজ শুরু করুন"
    }
  },

  showreel: {
    title: {
      en: "Motion & Editing Showreel",
      bn: "মোশন ও এডিটিং শোরিল"
    },
    subtitle: {
      en: "A showcase of narrative pacing, visual rhythm, sound synchronization, and digital color grading.",
      bn: "ভিডিওর ছন্দ, অডিওর নিখুঁত সিনক্রোনাইজেশন এবং সিনেম্যাটিক কালার গ্রেডিংয়ের একটি প্রদর্শনী।"
    },
    posterImage: videoShowreelImg,
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    duration: "01:24",
    aspectRatio: "16:9",
    badge: {
      en: "4K Master · 24 FPS · Stereo Mix",
      bn: "ফোরকে মাস্টার · ২৪ এফপিএস · স্টেরিও মিক্স"
    }
  },

  services: [
    {
      number: "01",
      title: {
        en: "Brand Identity & Logo Design",
        bn: "ব্র্যান্ড আইডেন্টিটি ও লোগো ডিজাইন"
      },
      description: {
        en: "Visual identities designed to communicate a brand’s personality through thoughtful logo design, typography, colour, and consistent visual systems.",
        bn: "চিন্তাশীল লোগো ডিজাইন, টাইপোগ্রাফি, রঙ এবং সমন্বিত ভিজ্যুয়াল সিস্টেমের মাধ্যমে ব্র্যান্ডের নিজস্ব ব্যক্তিত্ব ফুটিয়ে তোলার জন্য তৈরি আইডেন্টিটি।"
      },
      deliverables: [
        { en: "Primary & Secondary Logo Marks", bn: "প্রাইমারি ও সেকেন্ডারি লোগো মার্ক" },
        { en: "Color & Typography Guidelines", bn: "কালার ও টাইপোগ্রাফি গাইডলাইন" },
        { en: "Brand Style Guide & Stationery", bn: "ব্র্যান্ড স্টাইল গাইড ও স্টেশনারি" },
        { en: "Vector Master Assets", bn: "ভেক্টর মাস্টার অ্যাসেটস" }
      ]
    },
    {
      number: "02",
      title: {
        en: "Social Media Design",
        bn: "সোশ্যাল মিডিয়া ডিজাইন"
      },
      description: {
        en: "Purposeful social media graphics that help brands and creators communicate clearly and maintain a consistent visual presence.",
        bn: "উদ্দেশ্যপূর্ণ সোশ্যাল মিডিয়া গ্রাফিক্স, যা ব্র্যান্ড ও ক্রিয়েটরদের সুস্পষ্ট বার্তা পৌঁছাতে এবং ধারাবাহিক উপস্থিতি বজায় রাখতে সাহায্য করে।"
      },
      deliverables: [
        { en: "Carousels & Grid Systems", bn: "ক্যারোসেল ও গ্রিড সিস্টেম" },
        { en: "Stories & Announcement Posts", bn: "স্টোরিজ ও অ্যানাউন্সমেন্ট পোস্ট" },
        { en: "Campaign Post Templates", bn: "ক্যাম্পেইন পোস্ট টেমপ্লেটস" },
        { en: "Brand Visual Consistency", bn: "ধারাবাহিক ব্র্যান্ড স্টাইল" }
      ]
    },
    {
      number: "03",
      title: {
        en: "Advertising & Poster Design",
        bn: "বিজ্ঞাপন ও পোস্টার ডিজাইন"
      },
      description: {
        en: "Attention-grabbing promotional designs built around strong hierarchy, clear messaging, and effective composition.",
        bn: "সুদৃঢ় ভিজ্যুয়াল হায়ারার্কি, স্পষ্ট বার্তা এবং চমৎকার কম্পোজিশন সমৃদ্ধ দৃষ্টি-আকর্ষক প্রচারণামূলক ডিজাইন।"
      },
      deliverables: [
        { en: "Event & Exhibition Posters", bn: "ইভেন্ট ও এক্সিবিশন পোস্টার" },
        { en: "Digital Ad Banners", bn: "ডিজিটাল অ্যাড ব্যানার" },
        { en: "Editorial Print Layouts", bn: "এডিটোরিয়াল প্রিন্ট লেআউট" },
        { en: "Commercial Key Visuals", bn: "কমার্শিয়াল কি ভিজ্যুয়াল" }
      ]
    },
    {
      number: "04",
      title: {
        en: "YouTube Thumbnail Design",
        bn: "ইউটিউব থাম্বনেইল ডিজাইন"
      },
      description: {
        en: "Expressive, readable thumbnails designed to communicate a video’s subject quickly and encourage viewers to take notice.",
        bn: "ভিডিওর বিষয়বস্তু দ্রুত দর্শকের কাছে তুলে ধরতে এবং তাদের মনোযোগ আকর্ষণ করার জন্য সুস্পষ্ট ও পঠনযোগ্য থাম্বনেইল।"
      },
      deliverables: [
        { en: "High-CTR Framing & Balance", bn: "উচ্চ সিটিআর ফ্রেমিং ও ব্যালান্স" },
        { en: "Subject Cutout & Lighting", bn: "সাবজেক্ট আইসোলেশন ও লাইটিং" },
        { en: "Bold Readable Typography", bn: "স্পষ্ট ও পঠনযোগ্য টাইপোগ্রাফি" },
        { en: "Mobile Feed Optimization", bn: "মোবাইল ফিড অপটিমাইজেশন" }
      ]
    },
    {
      number: "05",
      title: {
        en: "Video Editing & Reels",
        bn: "ভিডিও এডিটিং ও রিলস"
      },
      description: {
        en: "Engaging video edits, short-form content, pacing, transitions, and visual storytelling tailored to the intended platform.",
        bn: "প্ল্যাটফর্ম উপযোগী আকর্ষণীয় ভিডিও এডিটিং, শর্ট-ফর্ম কনটেন্ট, নিখুঁত পেসিং, ট্রানজিশন এবং ভিজ্যুয়াল গল্পগাঁথা।"
      },
      deliverables: [
        { en: "Reels, Shorts & TikTok Edits", bn: "রিলস, শর্টস ও টিকটক এডিটস" },
        { en: "Long-Form Narrative Video", bn: "লং-ফর্ম ভিডিও সম্পাদনা" },
        { en: "Pacing & Sound Synchronization", bn: "পেসিং ও অডিও সিনক্রোনাইজেশন" },
        { en: "Color Grading & Clean Titles", bn: "কালার গ্রেডিং ও টাইটেলস" }
      ]
    }
  ] as ServiceItem[],

  process: [
    {
      number: "01",
      name: {
        en: "Discover",
        bn: "আবিষ্কার"
      },
      description: {
        en: "Understand the project, audience, objectives, and creative direction.",
        bn: "প্রজেক্টের লক্ষ্য, কাঙ্ক্ষিত দর্শক ও ক্রিয়েটিভ দিকনির্দেশনা সঠিকভাবে বোঝা।"
      }
    },
    {
      number: "02",
      name: {
        en: "Define",
        bn: "পরিকল্পনা"
      },
      description: {
        en: "Establish the concept, visual approach, and design priorities.",
        bn: "মূল কনসেপ্ট, ভিজ্যুয়াল ধারা এবং কাজের অগ্রাধিকার চূড়ান্ত করা।"
      }
    },
    {
      number: "03",
      name: {
        en: "Create",
        bn: "সৃষ্টি"
      },
      description: {
        en: "Develop, refine, and prepare the creative work.",
        bn: "সৃজনশীল কাজ তৈরি, পরিমার্জন এবং কাঙ্ক্ষিত মানে পৌঁছে দেওয়া।"
      }
    },
    {
      number: "04",
      name: {
        en: "Deliver",
        bn: "হস্তান্তর"
      },
      description: {
        en: "Present the final work and prepare agreed deliverables.",
        bn: "কাজ উপস্থাপন এবং সমস্ত ফাইল ও ফরম্যাট চূড়ান্তভাবে হস্তান্তর করা।"
      }
    }
  ] as ProcessStep[],

  tools: [
    {
      name: "Adobe Illustrator",
      category: { en: "Vector & Identity", bn: "ভেক্টর ও আইডেন্টিটি" },
      description: {
        en: "Precision vector logo marks, typography systems, and scalable graphic assets.",
        bn: "নিখুঁত ভেক্টর লোগো মার্ক, টাইপোগ্রাফি সিস্টেম এবং যেকোনো স্কেলের গ্রাফিক অ্যাসেট।"
      }
    },
    {
      name: "Adobe Photoshop",
      category: { en: "Compositing & Post", bn: "কম্পোজিটিং ও পোস্ট-প্রসেসিং" },
      description: {
        en: "High-end photo manipulation, raster graphics, color balancing, and thumbnail art.",
        bn: "উন্নত ফটো ম্যানিপুলেশন, কালার ব্যালান্সিং ও থাম্বনেইল কম্পোজিশন।"
      }
    },
    {
      name: "Adobe Premiere Pro",
      category: { en: "Timeline & Narrative", bn: "ভিডিও এডিটিং ও ন্যারেটিভ" },
      description: {
        en: "Long-form narrative flow, sound design alignment, and pacing for digital video.",
        bn: "ভিডিওর ধারাবাহিকতা, অডিও মিক্সিং এবং প্ল্যাটফর্ম-ভিত্তিক সুসংগত পেসিং।"
      }
    },
    {
      name: "Adobe After Effects",
      category: { en: "Motion & Animation", bn: "মোশন ও অ্যানিমেশন" },
      description: {
        en: "Dynamic motion graphics, text animations, visual effects, and custom transitions.",
        bn: "গতিময় মোশন গ্রাফিক্স, টাইটেল অ্যানিমেশন এবং সূক্ষ্ম ট্রানজিশন।"
      }
    }
  ] as SoftwareTool[],

  // Central bilingual project gallery
  projects: [
    {
      id: "element-brand-system",
      categoryKey: "brand",
      title: {
        en: "Element Studio Identity",
        bn: "এলিমেন্ট স্টুডিও আইডেন্টিটি"
      },
      categoryName: {
        en: "Brand Identity",
        bn: "ব্র্যান্ড আইডেন্টিটি"
      },
      year: "2025",
      shortDescription: {
        en: "A minimalist stationery and visual identity system built with architectural typography and tactile paper contrast.",
        bn: "স্থপতি-সুলভ টাইপোগ্রাফি এবং মানসম্মত কাগজের টেক্সচারের সমন্বয়ে তৈরি মিনিমালিস্ট স্টেশনারি ও ভিজ্যুয়াল আইডেন্টিটি সিস্টেম।"
      },
      coverImage: brandIdentityImg,
      aspectRatio: "4:3",
      tags: [
        { en: "Brand Identity", bn: "ব্র্যান্ড আইডেন্টিটি" },
        { en: "Stationery", bn: "স্টেশনারি" },
        { en: "Typography", bn: "টাইপোগ্রাফি" },
        { en: "Print Design", bn: "প্রিন্ট ডিজাইন" }
      ],
      caseStudy: {
        overview: {
          en: "Element Studio is a contemporary design practice seeking a disciplined, timeless brand identity system communicating precision craftsmanship without visual excess.",
          bn: "এলিমেন্ট স্টুডিও একটি আধুনিক ডিজাইন অনুশীলন যেখানে অপ্রয়োজনীয় উপাদান ছাড়াই নিখুঁত নির্মাণশৈলী ফুটিয়ে তোলার জন্য একটি সুশৃঙ্খল ব্র্যান্ড সিস্টেম তৈরি করা হয়েছে।"
        },
        objective: {
          en: "Establish an enduring visual language for physical letterheads, business cards, and digital touchpoints.",
          bn: "ফিজিক্যাল লেটারহেড, বিজনেস কার্ড এবং ডিজিটাল মাধ্যমের জন্য একটি দীর্ঘস্থায়ী ভিজ্যুয়াল ধারা প্রতিষ্ঠা করা।"
        },
        creativeDirection: {
          en: "High-contrast charcoal typography grounded on warm cotton paper with a subtle lime chartreuse accent on interior folds.",
          bn: "ওয়ার্ম কটন পেপারের ওপর গভীর চারকোল টাইপোগ্রাফি এবং অভ্যন্তরীণ ভাঁজে শান্ত লাইম গ্রিন রঙের মার্জিত ছোঁয়া।"
        },
        designProcess: [
          { en: "Researched minimalist architectural monographs and international typography standards.", bn: "আন্তর্জাতিক টাইপোগ্রাফি মানদণ্ড ও মিনিমালিস্ট স্থাপত্য ধারা পর্যালোচনা।" },
          { en: "Explored custom logotype kerning and blind deboss tactile specifications.", bn: "কাস্টম লোগোটাইপ কার্নিং ও ব্লাইন্ড ডিবস টেকটাইল স্পেসিফিকেশন নির্ধারণ।" },
          { en: "Standardized an 8-point layout grid across print collateral and digital assets.", bn: "প্রিন্ট ও ডিজিটাল অ্যাসেটের জন্য ৮-পয়েন্ট লেআউট গ্রিড সুসংগঠিত করা।" },
          { en: "Created production-ready vector assets and physical print guidelines.", bn: "প্রিন্ট-রেডি ভেক্টর ফাইল এবং ছাপাখানার জন্য সুনির্দিষ্ট গাইডলাইন প্রস্তুত করা।" }
        ],
        colors: [
          { name: { en: "Cotton White", bn: "কটন হোয়াইট" }, hex: "#F7F7F2" },
          { name: { en: "Deep Charcoal", bn: "ডিপ চারকোল" }, hex: "#20211F" },
          { name: { en: "Accent Lime", bn: "অ্যাকসেন্ট লাইম" }, hex: "#B7F34A" },
          { name: { en: "Warm Grey", bn: "ওয়ার্ম গ্রে" }, hex: "#E5E5DF" }
        ],
        typography: {
          en: "Manrope SemiBold for headers paired with disciplined tabular spacing for contact lines.",
          bn: "শিরোনামের জন্য ম্যানরোপ সেমিবোল্ড এবং যোগাযোগের তথ্যে সুশৃঙ্খল স্পেসিং।"
        },
        deliverables: [
          { en: "Primary logomark and blind deboss vector files", bn: "প্রাইমারি লোগোমার্ক ও ডিবস ভেক্টর ফাইলস" },
          { en: "Full stationery suite (Letterhead, envelope, cards)", bn: "সম্পূর্ণ স্টেশনারি স্যুট (লেটারহেড, খাম, কার্ড)" },
          { en: "Brand typography and color hierarchy manual", bn: "টাইপোগ্রাফি ও কালার হায়ারার্কি ম্যানুয়াল" },
          { en: "Digital presentation templates", bn: "ডিজিটাল প্রেজেন্টেশন টেমপ্লেট" }
        ],
        artworkGallery: [
          {
            title: { en: "Stationery Suite & Tactile Texture", bn: "স্টেশনারি স্যুট ও পেপার টেক্সচার" },
            caption: { en: "Cotton card stock with blind debossed lettermark.", bn: "ব্লাইন্ড ডিবসড লেটারমার্কসহ প্রিমিয়াম কটন কার্ড।" },
            image: brandIdentityImg,
            aspectRatio: "4:3"
          }
        ]
      }
    },
    {
      id: "handmade-documentary-edit",
      categoryKey: "video",
      title: {
        en: "Handmade: Craftsmen of Fire",
        bn: "হ্যান্ডমেড: ক্রাফটসম্যান অব ফায়ার"
      },
      categoryName: {
        en: "Video Editing & Reels",
        bn: "ভিডিও এডিটিং ও রিলস"
      },
      year: "2025",
      shortDescription: {
        en: "Documentary short film editing and cinematic color grade capturing traditional blacksmithing craftsmanship.",
        bn: "ঐতিহ্যবাহী কর্মকার শিল্পের ওপর নির্মিত তথ্যচিত্রের নিখুঁত ভিডিও সম্পাদনা ও সিনেম্যাটিক কালার গ্রেডিং।"
      },
      coverImage: videoShowreelImg,
      aspectRatio: "16:9",
      tags: [
        { en: "Video Editing", bn: "ভিডিও এডিটিং" },
        { en: "Color Grading", bn: "কালার গ্রেডিং" },
        { en: "Sound Design", bn: "সাউন্ড ডিজাইন" },
        { en: "Documentary", bn: "ডকুমেন্টারি" }
      ],
      caseStudy: {
        overview: {
          en: "A character-driven visual documentary balancing silent moments of craftsmanship with the explosive acoustic sound of metalwork.",
          bn: "একটি চরিত্রকেন্দ্রিক ভিজ্যুয়াল তথ্যচিত্র যেখানে নিখুঁত হাতের কাজের নীরবতা ও ধাতব শব্দের মেলবন্ধন ঘটানো হয়েছে।"
        },
        objective: {
          en: "Create an emotionally engaging edit with documentary authenticity, cinematic pacing, and deep atmospheric color grading.",
          bn: "স্বাভাবিক সত্যতা বজায় রেখে সিনেম্যাটিক পেসিং ও গভীর কালার গ্রেডের মাধ্যমে একটি চিত্তাকর্ষক সম্পাদনা প্রদান।"
        },
        creativeDirection: {
          en: "Filmic shadow retention, subtle grain, and acoustic sound design emphasizing rhythmic hammer strikes.",
          bn: "ফিল্মিক শ্যাডো রিটেনশন, হালকা গ্রেইন এবং হাতুড়ির ছন্দময় আঘাতকে কেন্দ্র করে বাস্তবসম্মত অডিও ডিজাইন।"
        },
        designProcess: [
          { en: "Logged raw 4K footage and established a timeline paper edit focusing on narrative pacing.", bn: "ফোরকে র ফুটেজ বাছাই ও গল্পভিত্তিক টাইমলাইন পেসিং নির্ধারণ।" },
          { en: "Layered multi-track ambient audio and synchronized mechanical sound effects.", bn: "মাল্টি-ট্র্যাক অ্যাম্বিয়েন্ট অডিও এবং মেকানিক্যাল সাউন্ড ইফেক্ট সিনক্রোনাইজেশন।" },
          { en: "Applied custom node color grading curve for balanced skin tones against fire highlights.", bn: "আগুনের তীব্র আলোর বিপরীতে স্বাভাবিক স্কিন টোন ধরে রাখতে কাস্টম কালার গ্রেডিং।" },
          { en: "Exported widescreen master deliverables and vertical social cutdowns.", bn: "ওয়াইডস্ক্রিন মাস্টার ফাইল এবং সোশ্যাল মিডিয়ার জন্য ভার্টিক্যাল কাট এক্সপোর্ট।" }
        ],
        colors: [
          { name: { en: "Steel Shadow", bn: "স্টিল শ্যাডো" }, hex: "#181917" },
          { name: { en: "Furnace Amber", bn: "ফার্নেস অ্যাম্বার" }, hex: "#E07A2B" },
          { name: { en: "Cold Ambient", bn: "কোল্ড অ্যাম্বিয়েন্ট" }, hex: "#566472" }
        ],
        typography: {
          en: "Cinematic letterspaced display sans for titles and credits.",
          bn: "টাইটেল ও ক্রেডিটের জন্য প্রশস্ত সিনেম্যাটিক ডিসপ্লে ফন্ট।"
        },
        deliverables: [
          { en: "12-minute documentary master cut", bn: "১২ মিনিটের ডকুমেন্টারি মাস্টার কাট" },
          { en: "60-second festival teaser trailer", bn: "৬০ সেকেন্ডের ফেস্টিভ্যাল টিজার" },
          { en: "3 vertical 9:16 reels for social promotion", bn: "সোশ্যাল মিডিয়ার জন্য ৩টি ৯:১৬ ভার্টিক্যাল রিলস" }
        ],
        artworkGallery: [
          {
            title: { en: "Color Grading Timeline Frame", bn: "কালার গ্রেডিং টাইমলাইন ফ্রেম" },
            caption: { en: "Scene 42B color balanced for industrial texture.", bn: "শিল্প কারখানার টেক্সচার ও আলোর সামঞ্জস্য।" },
            image: videoShowreelImg,
            aspectRatio: "16:9"
          }
        ]
      }
    },
    {
      id: "swiss-architectural-poster",
      categoryKey: "poster",
      title: {
        en: "Architectural Typography Exhibition",
        bn: "আর্কিটেকচারাল টাইপোগ্রাফি প্রদর্শনী"
      },
      categoryName: {
        en: "Advertising & Posters",
        bn: "বিজ্ঞাপন ও পোস্টার ডিজাইন"
      },
      year: "2024",
      shortDescription: {
        en: "Editorial exhibition poster exploring Swiss grid architecture, typographic structure, and geometric hierarchy.",
        bn: "সুইস গ্রিড আর্কিটেকচার, টাইপোগ্রাফিক কাঠামো ও জ্যামিতিক হায়ারার্কি সমন্বিত এডিটোরিয়াল এক্সিবিশন পোস্টার।"
      },
      coverImage: posterDesignImg,
      aspectRatio: "3:4",
      tags: [
        { en: "Poster Design", bn: "পোস্টার ডিজাইন" },
        { en: "Swiss Grid", bn: "সুইস গ্রিড" },
        { en: "Typography", bn: "টাইপোগ্রাফি" },
        { en: "Exhibition", bn: "প্রদর্শনী" }
      ],
      caseStudy: {
        overview: {
          en: "An experimental typographic poster designed for an architectural symposium translating physical structures into 2D layout planes.",
          bn: "একটি স্থাপত্য সিম্পোজিয়ামের জন্য প্রস্তুতকৃত পোস্টার যেখানে ত্রিমাত্রিক কাঠামোগত ভারসাম্য দ্বিমাত্রিক তলে রূপায়িত করা হয়েছে।"
        },
        objective: {
          en: "Communicate complex event schedules while establishing a museum-grade visual statement.",
          bn: "জটিল সময়সূচি ও আলোচকদের তথ্য সহজে পৌঁছে দেওয়ার পাশাপাশি মিউজিয়াম-মানের ভিজ্যুয়াল প্রভাব তৈরি।"
        },
        creativeDirection: {
          en: "Disciplined Swiss International Style grid combined with architectural letterforms and lime highlights.",
          bn: "সুইস ইন্টারন্যাশনাল স্টাইল গ্রিড, আর্কিটেকচারাল লেটারফর্ম এবং লাইম গ্রিন হাইলাইট ব্লকের সংমিশ্রণ।"
        },
        designProcess: [
          { en: "Drafted geometric grid structures dividing the poster plane into structural quadrants.", bn: "পোস্টারের তলকে বিভিন্ন কোয়াড্রেন্টে বিভক্ত করে জ্যামিতিক গ্রিড তৈরি।" },
          { en: "Composed architectural letterforms interacting with underlying spatial lines.", bn: "রেখার সাথে মিল রেখে অক্ষরের স্থাপত্যিক রূপ বিন্যাস।" },
          { en: "Integrated multi-column tabular schedule typography.", bn: "মাল্টি-কলাম টেবুলার সূচি বিন্যাস।" },
          { en: "Prepared CMYK offset print separations.", bn: "সিএমওয়াইকে অফসেট প্রিন্ট সেপারেশন ফাইল প্রস্তুত।" }
        ],
        colors: [
          { name: { en: "Exhibition White", bn: "এক্সিবিশন হোয়াইট" }, hex: "#F7F7F2" },
          { name: { en: "Carbon Ink", bn: "কার্বন ইঙ্ক" }, hex: "#20211F" },
          { name: { en: "Curator Lime", bn: "কিউরেটর লাইম" }, hex: "#B7F34A" }
        ],
        typography: {
          en: "Structured Grotesque display face with strict grid alignment.",
          bn: "কঠোর গ্রিড সারিবদ্ধতাসহ স্ট্রাকচার্ড গ্রোটেস্ক ফন্ট।"
        },
        deliverables: [
          { en: "A1 & A2 screen-print production masters", bn: "এ১ ও এ২ সাইজের প্রিন্ট মাস্টার ফাইল" },
          { en: "Digital display signage formats", bn: "ডিজিটাল ডিসপ্লে সাইনেজ ফরম্যাট" },
          { en: "Promotional flyers and digital badge kit", bn: "প্রচারমূলক ফ্লায়ার ও ডিজিটাল ব্যাজ কিট" }
        ],
        artworkGallery: [
          {
            title: { en: "Archival Exhibition Print View", bn: "আর্কাইভাল এক্সিবিশন প্রিন্ট ভিউ" },
            caption: { en: "Full composition demonstrating spatial balance and typographic rhythm.", bn: "স্থানিক ভারসাম্য ও টাইপোগ্রাফিক ছন্দের সম্পূর্ণ বিন্যাস।" },
            image: posterDesignImg,
            aspectRatio: "3:4"
          }
        ]
      }
    },
    {
      id: "wild-adventure-thumbnail",
      categoryKey: "thumbnail",
      title: {
        en: "Mountain Expedition Series",
        bn: "মাউন্টেন এক্সপেডিশন সিরিজ"
      },
      categoryName: {
        en: "YouTube Thumbnails",
        bn: "ইউটিউব থাম্বনেইল ডিজাইন"
      },
      year: "2025",
      shortDescription: {
        en: "High-retention visual thumbnail engineered for maximum click-through rate, contrast clarity, and subject depth.",
        bn: "সর্বোচ্চ ক্লিক-থ্রু রেট (সিটিআর), কনট্রাস্টের স্পষ্টতা ও সাবজেক্ট ডেপথ নিশ্চিত করতে প্রস্তুতকৃত আকর্ষণীয় থাম্বনেইল।"
      },
      coverImage: thumbnailImg,
      aspectRatio: "16:9",
      tags: [
        { en: "YouTube Thumbnail", bn: "ইউটিউব থাম্বনেইল" },
        { en: "Subject Isolation", bn: "সাবজেক্ট আইসোলেশন" },
        { en: "High CTR", bn: "হাই সিটিআর" },
        { en: "Color Balance", bn: "কালার ব্যালান্স" }
      ],
      caseStudy: {
        overview: {
          en: "Designed for a travel creator's flagship outdoor series to cut through dense mobile video feeds with unmistakable emotional clarity.",
          bn: "একটি জনপ্রিয় ভ্রমণ সিরিজের জন্য তৈরি, যাতে মোবাইল স্ক্রিনে স্ক্রোল করার মুহূর্তে চোখের পলকে দর্শকের দৃষ্টি কাড়ে।"
        },
        objective: {
          en: "Deliver a thumbnail that communicates high stakes and raw exploration within 0.2 seconds of scrolling.",
          bn: "মাত্র ০.২ সেকেন্ডের স্ক্রোলিংয়েই রোমাঞ্চ ও অ্যাডভেঞ্চারের অনুভূতি ফুটিয়ে তোলা।"
        },
        creativeDirection: {
          en: "Golden-hour backlight, subject extraction with rim-light enhancement, and bold readable title typography.",
          bn: "গোধূলির ব্যাকলাইট, রিম-লাইটিং যুক্ত সুনির্দিষ্ট সাবজেক্ট এক্সট্রাকশন এবং স্পষ্ট শিরোনাম অক্ষর।"
        },
        designProcess: [
          { en: "Selected optimal high-emotion expression frame and performed subject extraction.", bn: "আবেগঘন পারফেক্ট ফ্রেম নির্বাচন ও সূক্ষ্ম সাবজেক্ট এক্সট্রাকশন।" },
          { en: "Composited dynamic ridge-line background with enhanced horizon color grading.", bn: "হরাইজন কালার গ্রেডিং সমন্বিত পাহাড়ের ব্যাকগ্রাউন্ড কম্পোজিশন।" },
          { en: "Engineered readable stroke typography optimized for small mobile previews.", bn: "মোবাইল প্রিভিউয়ের জন্য অপটিমাইজড বোল্ড স্ট্রোক টাইপোগ্রাফি।" },
          { en: "Balanced dynamic range for maximum vibrance without clipping skin textures.", bn: "স্কিন টেক্সচার অক্ষুণ্ণ রেখে ভাইব্রেন্স বৃদ্ধি।" }
        ],
        colors: [
          { name: { en: "Sunset Amber", bn: "সানসেট অ্যাম্বার" }, hex: "#F37335" },
          { name: { en: "Alpine Sky", bn: "আলপাইন স্কাই" }, hex: "#2C3E50" },
          { name: { en: "Punch White", bn: "পাঞ্চ হোয়াইট" }, hex: "#FFFFFF" }
        ],
        typography: {
          en: "Impact condensed bold headline lettering with custom drop-shadow and stroke.",
          bn: "কাস্টম ড্রপ-শ্যাডো ও স্ট্রোকযুক্ত বোল্ড হেডলাইন টাইপোগ্রাফি।"
        },
        deliverables: [
          { en: "Primary 1280x720 master thumbnail", bn: "১২৮০x৭২০ মাস্টার থাম্বনেইল" },
          { en: "A/B test variant with alternative angle", bn: "বিকল্প এঙ্গেলসহ এ/বি টেস্ট ভ্যারিয়েন্ট" },
          { en: "Layered PSD master with smart object masks", bn: "স্মার্ট অবজেক্ট সমন্বিত লেয়ারড পিএসডি ফাইল" }
        ],
        artworkGallery: [
          {
            title: { en: "High-CTR Frame Composition", bn: "হাই-সিটিআর ফ্রেম কম্পোজিশন" },
            caption: { en: "Focal balance designed to draw the eye directly from creator to title.", bn: "মুখের অভিব্যক্তি থেকে সরাসরি টাইটেলে দৃষ্টি আকর্ষণকারী ফোকাল ব্যালান্স।" },
            image: thumbnailImg,
            aspectRatio: "16:9"
          }
        ]
      }
    },
    {
      id: "new-collective-social-suite",
      categoryKey: "social",
      title: {
        en: "The New Collective Campaign",
        bn: "দ্য নিউ কালেক্টিভ ক্যাম্পেইন"
      },
      categoryName: {
        en: "Social Media Design",
        bn: "সোশ্যাল মিডিয়া ডিজাইন"
      },
      year: "2024",
      shortDescription: {
        en: "A cohesive multi-tile editorial Instagram campaign for an urban design and culture publication.",
        bn: "নগর ডিজাইন ও সংস্কৃতি প্রকাশনার জন্য বহু-টাইল সমন্বিত এডিটোরিয়াল ইনস্টাগ্রাম ক্যাম্পেইন।"
      },
      coverImage: socialCampaignImg,
      aspectRatio: "4:3",
      tags: [
        { en: "Social Media", bn: "সোশ্যাল মিডিয়া" },
        { en: "Instagram Grid", bn: "ইনস্টাগ্রাম গ্রিড" },
        { en: "Layout Design", bn: "লেআউট ডিজাইন" },
        { en: "Editorial", bn: "এডিটোরিয়াল" }
      ],
      caseStudy: {
        overview: {
          en: "A structured 9-post social media campaign designed to read both as standalone posts and as a unified mosaic on the profile grid.",
          bn: "একটি ৯-পোস্টের সোশ্যাল ক্যাম্পেইন যা প্রতিটি পোস্ট আলাদাভাবে অর্থপূর্ণ এবং প্রোফাইল গ্রিডে একটি অখণ্ড মোজাইক আর্টের মতো দৃশ্যমান।"
        },
        objective: {
          en: "Elevate social presence with disciplined editorial whitespace and candid documentary photography.",
          bn: "সুপরিকল্পিত এডিটোরিয়াল ফাঁকা জায়গা ও নান্দনিক ছবির মাধ্যমে ফিডের মান উন্নত করা।"
        },
        creativeDirection: {
          en: "Generous margins, stark black-and-white typography pairings, and modular quote blocks.",
          bn: "উদার মার্জিন, ক্লাসিক ব্ল্যাক-অ্যান্ড-হোয়াইট টাইপোগ্রাফি এবং মডুলার কোট ব্লক।"
        },
        designProcess: [
          { en: "Mapped out a 3x3 grid matrix ensuring alternating visual weights.", bn: "ভিজ্যুয়াল ব্যালান্স বজায় রেখে ৩x৩ গ্রিড ম্যাট্রিক্স ম্যাপিং।" },
          { en: "Built reusable Figma and Photoshop templates for fast headline swaps.", bn: "দ্রুত হেডলাইন পরিবর্তনের উপযোগী ফিগমা ও ফটোশপ টেমপ্লেট তৈরি।" },
          { en: "Established clear hierarchy between quote callouts and photography.", bn: "উদ্ধৃতি ও ছবির মাঝে সুস্পষ্ট হায়ারার্কি প্রতিষ্ঠা।" },
          { en: "Tested mobile feed crop boundaries to ensure zero typographic truncation.", bn: "মোবাইল ফিডে লেখা যেন কেটে না যায় তা নিশ্চিত করতে ক্রপ বাউন্ডারি টেস্ট।" }
        ],
        colors: [
          { name: { en: "Gallery Off-White", bn: "গ্যালারি অফ-হোয়াইট" }, hex: "#F7F7F2" },
          { name: { en: "Pitch Black", bn: "পিচ ব্ল্যাক" }, hex: "#111111" }
        ],
        typography: {
          en: "Neo-grotesque sans-serif with high contrast headline weights.",
          bn: "উচ্চ কনট্রাস্ট হেডলাইনসহ নিও-গ্রোটেস্ক সান-সেরিফ।"
        },
        deliverables: [
          { en: "9 cohesive high-resolution feed assets", bn: "৯টি হাই-রেজ্যুলেশন ফিড পোস্ট" },
          { en: "15 animated story announcement templates", bn: "১৫টি অ্যানিমেটেড স্টোরি টেমপ্লেট" },
          { en: "Organized layered PSD master system", bn: "লেয়ারড মাস্টার পিএসডি ফাইল" }
        ],
        artworkGallery: [
          {
            title: { en: "Nine-Grid Cohesive Visual Suite", bn: "নয়টি গ্রিডের সামগ্রিক ভিজ্যুয়াল রূপ" },
            caption: { en: "Overview of grid harmony across photography and typography.", bn: "ছবি ও টাইপোগ্রাফির মাঝে সামগ্রিক সামঞ্জস্য।" },
            image: socialCampaignImg,
            aspectRatio: "4:3"
          }
        ]
      }
    },
    {
      id: "lumina-minimal-logomark",
      categoryKey: "logo",
      title: {
        en: "Lumina Studio Identity",
        bn: "লুমিনা স্টুডিও আইডেন্টিটি"
      },
      categoryName: {
        en: "Logo Design",
        bn: "লোগো ডিজাইন"
      },
      year: "2025",
      shortDescription: {
        en: "Geometric monogram and modular mark designed for an architectural lighting consultancy.",
        bn: "স্থাপত্য আলো নকশাকরণ কনসালটেন্সির জন্য তৈরি জ্যামিতিক মনোগ্রাম ও মডুলার লোগোমার্ক।"
      },
      coverImage: brandIdentityImg,
      aspectRatio: "4:3",
      tags: [
        { en: "Logo Design", bn: "লোগো ডিজাইন" },
        { en: "Monogram", bn: "মনোগ্রাম" },
        { en: "Vector", bn: "ভেক্টর" },
        { en: "Minimalism", bn: "মিনিমালিজম" }
      ],
      caseStudy: {
        overview: {
          en: "A clean, geometric logo exploration focusing on light angles and negative space, scaling down seamlessly to small sizes.",
          bn: "আলোর কোণ ও নেগেটিভ স্পেসের মেলবন্ধনে তৈরি একটি পরিচ্ছন্ন জ্যামিতিক লোগো যা যেকোনো আকারে সুন্দরভাবে ফুটে ওঠে।"
        },
        objective: {
          en: "Design a memorable, timeless mark rooted in geometry and architectural precision.",
          bn: "জ্যামিতি ও স্থাপত্যিক নির্ভুলতার ভিত্তিতে একটি স্মরণীয় ও চিরন্তন লোগো সৃষ্টি।"
        },
        creativeDirection: {
          en: "Golden ratio circle constructions, optical weight balance, and minimal stroke counts.",
          bn: "গোল্ডেন রেশিও বৃত্তাকার কাঠামো, অপটিক্যাল ব্যালান্স এবং সংক্ষিপ্ত রেখার কারুকাজ।"
        },
        designProcess: [
          { en: "Hand-sketched 40+ monogram concepts exploring light reflections.", bn: "আলোর প্রতিফলন নিয়ে ৪০টিরও বেশি প্রাথমিক স্কেচ অঙ্কন।" },
          { en: "Vectorized top directions in Adobe Illustrator using precision grid geometry.", bn: "অ্যাডোবি ইলাস্ট্রেটরে নির্ভুল গ্রিড জ্যামিতি অনুসারে ভেক্টরাইজেশন।" },
          { en: "Stress-tested optical balance at 16px, 64px, and 1200px sizes.", bn: "১৬, ৬৪ এবং ১২০০ পিক্সেল সাইজে অপটিক্যাল ব্যালান্স যাচাই।" },
          { en: "Delivered comprehensive vector format package (SVG, EPS, PDF, PNG).", bn: "এসভিজি, ইপিএস, পিডিএফ ও পিএনজি ভেক্টর প্যাকেজ প্রস্তুত।" }
        ],
        colors: [
          { name: { en: "Deep Obsidian", bn: "ডিপ অবসিডিয়ান" }, hex: "#20211F" },
          { name: { en: "Parchment", bn: "পার্চমেন্ট" }, hex: "#F7F7F2" },
          { name: { en: "Signal Lime", bn: "সিগন্যাল লাইম" }, hex: "#B7F34A" }
        ],
        typography: {
          en: "Custom geometric letterforms.",
          bn: "কাস্টম জ্যামিতিক অক্ষরবিন্যাস।"
        },
        deliverables: [
          { en: "Primary logomark and horizontal lockup", bn: "প্রাইমারি লোগোমার্ক ও অনুভূমিক রূপ" },
          { en: "Icon mark and social avatar formats", bn: "আইকন মার্ক ও সোশ্যাল প্রোফাইল ফরম্যাট" },
          { en: "Clear-space rules and vector masters", bn: "ক্লিয়ার-স্পেস নিয়ম ও ভেক্টর মাস্টার ফাইল" }
        ],
        artworkGallery: [
          {
            title: { en: "Geometric Precision Lockup", bn: "জ্যামিতিক নির্ভুল লকআপ" },
            caption: { en: "Vector logo mark constructed on a mathematical grid system.", bn: "গাণিতিক গ্রিড সিস্টেমে নির্মিত ভেক্টর লোগো মার্ক।" },
            image: brandIdentityImg,
            aspectRatio: "4:3"
          }
        ]
      }
    }
  ] as PortfolioProject[]
};

// UI Translations dictionary for common controls, buttons, forms, and headings
export const UI_STRINGS = {
  nav: {
    home: { en: "Home", bn: "হোম" },
    work: { en: "My Work", bn: "আমার কাজ" },
    services: { en: "Services", bn: "সেবাসমূহ" },
    about: { en: "About", bn: "পরিচিতি" },
    process: { en: "Process", bn: "প্রক্রিয়া" },
    contact: { en: "Contact", bn: "যোগাযোগ" },
    letsTalk: { en: "Let's Talk", bn: "কথা বলা যাক" }
  },
  marquee: {
    text: {
      en: "Brand Identity • Logo Design • Social Media • Posters • Thumbnails • Reels •",
      bn: "ব্র্যান্ড আইডেন্টিটি • লোগো ডিজাইন • সোশ্যাল মিডিয়া • পোস্টার • থাম্বনেইল • রিলস •"
    }
  },
  hero: {
    badgeRole: {
      en: "Graphic Designer & Video Editor",
      bn: "গ্রাফিক ডিজাইনার ও ভিডিও এডিটর"
    },
    nameLine1: {
      en: "Md Mahdi",
      bn: "মো মাহদি"
    },
    nameLine2: {
      en: "Hasan",
      bn: "হাসান"
    },
    headlineLine1: {
      en: "Designing Visual Identities.",
      bn: "ভিজ্যুয়াল আইডেন্টিটি তৈরি।"
    },
    headlineLine2: {
      en: "Editing Stories That Connect.",
      bn: "সংযোগ স্থাপনকারী গল্পের সম্পাদনা।"
    },
    valuePropPrefix: {
      en: "Crafting impactful",
      bn: "তৈরি করছি প্রভাবশালী"
    },
    valuePropMiddle: {
      en: "and engaging",
      bn: "এবং মনোমুগ্ধকর"
    },
    valuePropSuffix: {
      en: "that communicate ideas clearly.",
      bn: "যা ধারণাকে স্পষ্ট করে তোলে।"
    },
    available: { en: "Available for freelance projects", bn: "ফ্রিল্যান্স কাজের জন্য উন্মুক্ত" },
    basedIn: { en: "Based in", bn: "অবস্থান:" },
    experience: { en: "3 Years Experience", bn: "৩ বছরের অভিজ্ঞতা" },
    exploreWork: { en: "Explore My Work", bn: "আমার কাজ দেখুন" },
    letsWork: { en: "Let's Work Together", bn: "একসাথে কাজ শুরু করুন" },
    chatWhatsapp: { en: "WhatsApp", bn: "হোয়াটসঅ্যাপ" },
    craftLabel: { en: "Disciplines", bn: "দক্ষতার ক্ষেত্রসমূহ" },
    craftItems: {
      en: "Identity Design · Editorial Typography · Video Pacing · Social Creatives",
      bn: "আইডেন্টিটি ডিজাইন · এডিটোরিয়াল টাইপোগ্রাফি · ভিডিও পেসিং · সোশ্যাল ক্রিয়েটিভস"
    },
    disciplineTags: [
      { en: "Brand Identity", bn: "ব্র্যান্ড আইডেন্টিটি" },
      { en: "Logo Design", bn: "লোগো ডিজাইন" },
      { en: "Social Media", bn: "সোশ্যাল মিডিয়া" },
      { en: "Advertising & Posters", bn: "বিজ্ঞাপন ও পোস্টার" },
      { en: "YouTube Thumbnails", bn: "ইউটিউব থাম্বনেইল" },
      { en: "Video Editing & Reels", bn: "ভিডিও এডিটিং ও রিলস" }
    ]
  },
  works: {
    badge: { en: "PORTFOLIO", bn: "পোর্টফোলিও" },
    heading: { en: "Selected Work", bn: "নির্বাচিত কাজসমূহ" },
    subheading: {
      en: "Featured visual identity, graphic design, and video editing projects.",
      bn: "আইডেন্টিটি, কম্পোজিশন ও ভিজ্যুয়াল স্টোরিটেলিং নিয়ে নির্বাচিত কিছু কাজের সমাহার।"
    },
    allFilter: { en: "All Projects", bn: "সকল কাজ" },
    categories: {
      brand: { en: "Brand Identity", bn: "ব্র্যান্ড আইডেন্টিটি" },
      logo: { en: "Logo Design", bn: "লোগো ডিজাইন" },
      social: { en: "Social Media Design", bn: "সোশ্যাল মিডিয়া" },
      poster: { en: "Advertising & Posters", bn: "বিজ্ঞাপন ও পোস্টার" },
      thumbnail: { en: "YouTube Thumbnails", bn: "ইউটিউব থাম্বনেইল" },
      video: { en: "Video Editing & Reels", bn: "ভিডিও এডিটিং ও রিলস" }
    },
    viewBreakdown: { en: "View Case Study", bn: "কেস স্টাডি দেখুন" },
    caseStudy: { en: "Case Study", bn: "কেস স্টাডি" }
  },
  caseModal: {
    objective: { en: "01. Project Objective", bn: "০১. প্রজেক্টের উদ্দেশ্য" },
    direction: { en: "02. Creative Direction", bn: "০২. ক্রিয়েটিভ দিকনির্দেশনা" },
    process: { en: "03. Design & Execution Process", bn: "০৩. ডিজাইন ও সম্পাদনা প্রক্রিয়া" },
    colors: { en: "04. Color System", bn: "০৪. কালার প্যালেট" },
    typography: { en: "05. Typography Specification", bn: "০৫. টাইপোগ্রাফি বিবরণ" },
    deliverables: { en: "06. Final Deliverables", bn: "০৬. চূড়ান্ত আউটপুট" },
    gallery: { en: "07. Artwork Gallery", bn: "০৭. আর্টওয়ার্ক গ্যালারি" },
    prev: { en: "Prev", bn: "পূর্ববর্তী" },
    next: { en: "Next", bn: "পরবর্তী" },
    discuss: { en: "Discuss a Similar Project", bn: "এই ধরনের কাজ নিয়ে কথা বলুন" },
    close: { en: "Close", bn: "বন্ধ করুন" }
  },
  services: {
    badge: { en: "Capabilities", bn: "সেবাসমূহ" },
    heading: { en: "How I Can Help", bn: "আমি যেভাবে সহায়তা করতে পারি" },
    subheading: {
      en: "From building a visual identity to producing engaging digital content, I help turn creative ideas into clear, purposeful visuals.",
      bn: "একটি পরিপূর্ণ ব্র্যান্ড আইডেন্টিটি তৈরি থেকে শুরু করে ডিজিটাল কনটেন্ট নির্মাণ পর্যন্ত—আপনার ক্রিয়েটিভ ভাবনাকে অর্থপূর্ণ ভিজ্যুয়ালে রূপ দিতে সহায়তা করি।"
    },
    inquire: { en: "Inquire", bn: "যোগাযোগ" }
  },
  about: {
    badge: { en: "Profile & Background", bn: "পরিচিতি ও পটভূমি" },
    heading: { en: "A Little About Me", bn: "আমার সম্পর্কে কিছু কথা" },
    philosophyBadge: { en: "Personal Philosophy", bn: "ব্যক্তিগত দর্শন" },
    toolsBadge: { en: "Software & Core Tools", bn: "ব্যবহৃত সফটওয়্যার" },
    processBadge: { en: "Methodology", bn: "কার্যপ্রণালী" },
    processHeading: { en: "Creative Process", bn: "সৃজনশীল প্রক্রিয়া" },
    processSub: {
      en: "A structured four-phase workflow designed to provide clarity, predictable progress, and refined results.",
      bn: "একটি সুশৃঙ্খল চার-ধাপের প্রক্রিয়া যা কাজের স্বচ্ছতা, ধারাবাহিক অগ্রগতি এবং চমৎকার ফলাফল নিশ্চিত করে।"
    },
    verifiedBadge: { en: "Verified Profile", bn: "যাচাইকৃত পরিচিতি" }
  },
  showreel: {
    badge: { en: "Motion & Video", bn: "মোশন ও ভিডিও" },
    editNote: {
      en: "Replaceable showreel asset. Update videoUrl in src/data/portfolioData.ts with your hosted video.",
      bn: "পরিবর্তনযোগ্য শোরিল। src/data/portfolioData.ts ফাইলে আপনার নিজস্ব ভিডিওর লিঙ্ক যুক্ত করুন।"
    }
  },
  contact: {
    badge: { en: "Get in Touch", bn: "যোগাযোগ করুন" },
    heading: { en: "Have a Project in Mind?", bn: "কোনো প্রজেক্ট নিয়ে ভাবছেন?" },
    subheading: {
      en: "Whether you need a visual identity, compelling graphics, or engaging video content, let’s talk about what we can create together.",
      bn: "ব্র্যান্ড আইডেন্টিটি, দৃষ্টিনন্দন গ্রাফিক্স কিংবা ভিডিও কনটেন্ট—আপনার প্রত্যাশা অনুযায়ী কী তৈরি করা যায়, চলুন আলোচনা করা যাক।"
    },
    directEmail: { en: "Direct Email", bn: "সরাসরি ইমেইল" },
    copied: { en: "Copied", bn: "কপি হয়েছে" },
    copy: { en: "Copy", bn: "কপি করুন" },
    responseNotice: { en: "Responds promptly within 24 hours.", bn: "২৪ ঘণ্টার মধ্যে দ্রুত উত্তর প্রদান করা হয়।" },
    whatsappTitle: { en: "WhatsApp / Direct Call", bn: "হোয়াটসঅ্যাপ / কল" },
    whatsappNotice: { en: "Ideal for quick chats and project scoping.", bn: "দ্রুত আলোচনা ও প্রাথমিক আলোচনার জন্য সেরা।" },
    facebookTitle: { en: "Official Facebook Profile", bn: "অফিসিয়াল ফেসবুক প্রোফাইল" },
    facebookNotice: { en: "Connect and follow creative updates.", bn: "যুক্ত হোন এবং নিয়মিত আপডেট দেখুন।" },
    acceptingFreelance: {
      en: "Currently accepting select freelance design and video editing projects.",
      bn: "বর্তমানে নির্বাচিত ফ্রিল্যান্স ডিজাইন ও ভিডিও এডিটিং কাজের প্রস্তাব গ্রহণ করছি।"
    },
    formTitle: { en: "Send a Project Brief", bn: "প্রজেক্টের বিবরণ পাঠান" },
    formSubtitle: {
      en: "Fill out the fields below to start a structured conversation.",
      bn: "আলোচনা শুরু করতে নিচের তথ্যগুলো পূরণ করুন।"
    },
    nameLabel: { en: "Your Name *", bn: "আপনার নাম *" },
    namePlaceholder: { en: "e.g. Tanvir Ahmed", bn: "যেমন: তানভীর আহমেদ" },
    emailLabel: { en: "Email Address *", bn: "ইমেইল ঠিকানা *" },
    emailPlaceholder: { en: "e.g. tanvir@example.com", bn: "যেমন: tanvir@example.com" },
    projectTypeLabel: { en: "Project Type *", bn: "প্রজেক্টের ধরন *" },
    detailsLabel: { en: "Project Details & Scope *", bn: "কাজের বিবরণ ও বিস্তারিত *" },
    detailsPlaceholder: {
      en: "Tell me about your goals, deliverables, timeline, or reference links...",
      bn: "আপনার লক্ষ্য, কাঙ্ক্ষিত কাজের পরিধি, সময়সীমা বা কোনো রেফারেন্স সম্পর্কে জানান..."
    },
    submitBtn: { en: "Start a Conversation", bn: "আলোচনা শুরু করুন" },
    successHeading: { en: "Ready to Send Your Inquiry!", bn: "আপনার বার্তা পাঠানোর জন্য প্রস্তুত!" },
    successText: {
      en: "Click below to dispatch your message directly via email or WhatsApp:",
      bn: "নিচের বোতামে ক্লিক করে ইমেইল বা হোয়াটসঅ্যাপের মাধ্যমে সরাসরি আপনার বার্তা পাঠান:"
    },
    sendEmailBtn: { en: "Send via Email Client", bn: "ইমেইল অ্যাপের মাধ্যমে পাঠান" },
    sendWhatsappBtn: { en: "Send via WhatsApp (+8801718014437)", bn: "হোয়াটসঅ্যাপে পাঠান (+৮৮০১৭১৮০১৪৪৩৭)" },
    editInfo: { en: "Edit Information", bn: "তথ্য পরিবর্তন করুন" }
  },
  footer: {
    quickNav: { en: "Navigation", bn: "নেভিগেশন" },
    directChannels: { en: "Direct Channels", bn: "যোগাযোগ মাধ্যম" },
    siteGuide: { en: "Site Guide & Asset Checklist", bn: "সাইট গাইড ও চেকজিস্ট" },
    allRights: { en: "All rights reserved.", bn: "সর্বস্বত্ব সংরক্ষিত।" },
    backToTop: { en: "Back to top", bn: "শীর্ষে ফিরে যান" }
  }
};
