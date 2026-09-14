/* ------------------------------------------------------------------ */
/*  RV University · Placements — structured content                    */
/*  Content sourced from the reconstructed website / rvu.edu.in.       */
/*  All facts, figures, names and contacts are preserved verbatim.     */
/* ------------------------------------------------------------------ */

export const BRAND = {
  wordmark: "RV University",
  tagline: "Career Development and Corporate Relations",
  recruitUrl: "https://forms.gle/4cPjVjPosbaw8b9QA",
  placementsEmail: "placements@rvu.edu.in",
  phone: "+91 89511 79896",
  address:
    "Corporate & Alumni Relations (CAR) Office, RV University, 5th Floor, D Block, RV Vidyanikethan Post, 8th Mile, Mysuru Road, Bengaluru – 560 059",
};

/* -------------------------- Latest updates ------------------------- */

export const UPDATES = {
  label: "Latest Updates",
  items: [
    {
      text: "To know the details for B.Tech. (Hons.) seat allotment schedule under JEE Main Quota, please",
      linkText: "click here",
      href: "#",
    },
    {
      text: "Ph.D. Admissions 2026 Now Open | Full-Time and Part-Time | Apply Before 10 April 2026 –",
      linkText: "Apply Now",
      href: "#",
    },
    {
      text: "Information submitted to UGC for inspection purpose",
      linkText: "UGC Public Self Disclosure",
      href: "#",
    },
    {
      text: "CET Code: E285",
      suffix: " / MBA – CET Code – B413 / M.Tech – CET Code – T615",
    },
  ],
};

/* ------------------------------- Nav -------------------------------- */

export const NAV_LINKS = [
  { label: "Recruiters", href: "#recruiters" },
  { label: "Why RVU", href: "#why-rvu" },
  { label: "Talent", href: "#talent" },
  { label: "Process", href: "#process" },
  { label: "Outcomes", href: "#outcomes" },
  { label: "Internships", href: "#internships" },
  { label: "Contact", href: "#contact-us" },
];

/* ------------------------------- Hero ------------------------------- */

export const HERO = {
  eyebrow: "Career Development and Corporate Relations",
  kicker: "RV University",
  headline: "Placements",
  body: "Access a multidisciplinary talent pool of 1,600+ industry-ready graduates trained in cutting-edge technologies, design, business, filmmaking, psychology and law.",
  primaryCta: { label: "Recruit with RVU", href: "https://forms.gle/4cPjVjPosbaw8b9QA" },
  secondaryCta: { label: "Explore outcomes", href: "#outcomes" },
  image: {
    src: "/images/hero-banner.jpg",
    alt: "RV University campus and students in the placement programme",
  },
  mobileImage: { src: "/images/mobile-banner-bg.jpg", alt: "RV University campus" },
  featuredStat: {
    value: "₹43.5L",
    label: "Highest package offered (LPA)",
    note: "Aviatrix · 2025–26",
  },
  eligible: { value: "1,600+", label: "Industry-ready graduates each year" },
};

/* ------------------------------ Stats ------------------------------- */

export const HERO_STATS = [
  { value: 425, prefix: "", suffix: "+", label: "Placement offers" },
  { value: 250, prefix: "", suffix: "+", label: "Recruiting organisations" },
  { value: 43.5, prefix: "₹", suffix: "L", label: "Highest package (LPA)" },
  { value: 8, prefix: "₹", suffix: "L", label: "Average package (LPA)" },
];

export const HIGHLIGHTS = [
  {
    icon: "/icons/international_icon1.png",
    title: "International offers",
    body: "Placement offers from firms across the US, Europe and beyond.",
  },
  {
    icon: "/icons/international_icon2.png",
    title: "Varied internship partners",
    body: "250+ organisations provide internships, live projects and industry mentoring.",
  },
  {
    icon: "/icons/international_icon3.png",
    title: "Fortune 500 recruiters",
    body: "Global capability centres and Fortune 500 companies hire from RVU.",
  },
  {
    icon: "/icons/international_icon4.png",
    title: "Robust alumni network",
    body: "A growing community of alumni across technology, business and policy.",
  },
];

/* ----------------------------- Recruiters --------------------------- */

export const RECRUITERS = {
  eyebrow: "Trusted by industry",
  headline: "250+ organisations recruit from RVU every year",
  body: "From global capability centres and Fortune 500 multinationals to national consulting firms and funded startups, the organisations that hire our graduates span every corner of the modern economy.",
};

export const RECRUITER_LOGOS = Array.from({ length: 16 }, (_, i) => ({
  src: `/logos/logos${i + 1}.png`,
  alt: "Prominent recruiter at RV University",
  name: `Recruiting partner ${i + 1}`,
}));

export const RECRUITER_CATEGORIES = [
  { label: "MNCs", icon: "/images/recruiter-category-1.png" },
  { label: "GCCs", icon: "/images/recruiter-category-2.png" },
  { label: "Tech", icon: "/images/recruiter-category-3.png" },
  { label: "Consulting", icon: "/images/recruiter-category-4.png" },
  { label: "Financial", icon: "/images/recruiter-category-5.png" },
  { label: "Startups", icon: "/images/recruiter-category-6.png" },
];

/* ------------------------------ Why RVU ----------------------------- */

export const WHY_RVU = {
  eyebrow: "Why RVU",
  headline: "Why the best teams recruit at RVU.",
  body: "Six reasons employers return to RVU year after year — from industry-ready graduates to a single, seamless hiring experience.",
  items: [
    {
      index: "01",
      title: "Industry-ready talent",
      description:
        "Hire students equipped with strong academic foundations and practical, industry-relevant skills.",
      image: "/images/recruit_img1.jpg",
    },
    {
      index: "02",
      title: "Diverse talent pool",
      description:
        "Recruit from multidisciplinary programs including Engineering, Business, Design, Economics, Media, and Liberal Arts.",
      image: "/images/recruit_img2.jpg",
    },
    {
      index: "03",
      title: "Industry-integrated learning",
      description:
        "Students gain hands-on experience through internships, live projects, capstones, and experiential learning.",
      image: "/images/recruit_img3.jpg",
    },
    {
      index: "04",
      title: "Future-focused curriculum",
      description:
        "Graduates are prepared with digital, analytical, entrepreneurial, and leadership capabilities for evolving workplaces.",
      image: "/images/recruit_img4.jpg",
    },
    {
      index: "05",
      title: "Seamless recruitment support",
      description:
        "Our Corporate & Alumni Relations (CAR) team ensures a smooth and efficient hiring process from start to finish.",
      image: "/images/recruit_img5.jpg",
    },
    {
      index: "06",
      title: "Strong academic excellence",
      description:
        "Backed by the legacy of the RV Group, the university nurtures high-performing, ethical, and responsible professionals.",
      image: "/images/recruit_img6.jpg",
    },
  ],
};

/* ---------------------------- Talent / Schools ---------------------- */

export const TOTAL_STUDENTS = 1608;

export const SCHOOLS = [
  {
    index: "01",
    name: "Computer Science & Engineering",
    fullName: "School of Computer Science & Engineering",
    abbr: "SoCSE",
    total: 737,
    courses: [
      { title: "B.Tech. (Hons.)", strength: 547 },
      { title: "B.Sc. (Hons.)", strength: 172 },
      { title: "M.Tech.", strength: 18 },
    ],
  },
  {
    index: "02",
    name: "Economics & Business",
    fullName: "School of Economics & Business",
    abbr: "SoEB",
    total: 529,
    courses: [
      { title: "B.Sc. (Hons.) Economics", strength: 4 },
      { title: "M.Sc. Economics", strength: 16 },
      { title: "BBA (Hons.)", strength: 162 },
      { title: "B.Com. (Hons.)", strength: 170 },
      { title: "MBA", strength: 177 },
    ],
  },
  {
    index: "03",
    name: "Design & Innovation",
    fullName: "School of Design & Innovation",
    abbr: "SDI",
    total: 157,
    courses: [
      { title: "B.Des. (Hons.)", strength: 123 },
      { title: "M.Des.", strength: 34 },
    ],
  },
  {
    index: "04",
    name: "Film, Media & Creative Arts",
    fullName: "School of Film, Media & Creative Arts",
    abbr: "SoFMCA",
    total: 4,
    courses: [{ title: "B.Sc. (Hons.) – Filmmaking", strength: 4 }],
  },
  {
    index: "05",
    name: "Liberal Arts & Sciences",
    fullName: "School of Liberal Arts & Sciences",
    abbr: "SoLAS",
    total: 59,
    courses: [
      { title: "B.Sc. (Hons.) – Psychology", strength: 30 },
      { title: "B.Sc. (Hons.) – Environmental Science", strength: 2 },
      { title: "B.A. (Hons.) – Politics and International Relations", strength: 4 },
      { title: "M.Sc. – Psychology", strength: 23 },
    ],
  },
  {
    index: "06",
    name: "Law",
    fullName: "School of Law",
    abbr: "SoL",
    total: 105,
    courses: [
      { title: "B.Sc. (Hons.) – Criminology, Cyber Law and Forensic Sciences", strength: 70 },
      { title: "LL.M.", strength: 35 },
    ],
  },
];

/* ------------------------------ Process ----------------------------- */

export const PROCESS = {
  eyebrow: "The process",
  headline: "From first conversation to onboarding.",
  body: "A clear, structured journey — from your first conversation to your new hire joining the team.",
  steps: [
    {
      step: "01",
      title: "Connect",
      body: "Reach out through our recruitment form or directly to the Corporate & Alumni Relations office.",
    },
    {
      step: "02",
      title: "Engage",
      body: "We map your roles to the right schools and schedule on-campus or virtual sessions.",
    },
    {
      step: "03",
      title: "Assess",
      body: "Run tests, evaluations, discussions and interviews — fully facilitated by our team.",
    },
    {
      step: "04",
      title: "Select",
      body: "Extend offers to RVU students. CAR coordinates offer letters, counselling and acceptance.",
    },
    {
      step: "05",
      title: "Onboard",
      body: "Students arrive work-ready, backed by internships, live projects and professional training.",
    },
  ],
  video: {
    src: "https://www.youtube.com/embed/oV5zD2mh40A",
    title: "RV University | Placement Office Walkthrough",
  },
};

/* ----------------------------- Governance --------------------------- */

export const GOVERNANCE = [
  {
    title: "Placement Governance",
    body: "Corporate & Alumni Relations (CAR) coordinates all placement and internship activities across Schools. CAR facilitates processes but does not adjudicate disciplinary matters. All placement-related violations are formally referred to the Student Disciplinary Committee (STDC) under the University's Student Code of Conduct.",
  },
  {
    title: "Student Eligibility",
    body: "A student may participate in placements only if every condition is met — no academic backlogs at the time of registering (unless permitted by a recruiter); minimum 80% attendance in mandatory pre-placement training; submission of the Placement Registration & Declaration Form; completion of required experiential components (internship / immersion / capstone) unless exceptionally approved by School leadership; compliance with all company-specific eligibility criteria; and no pending disciplinary case with STDC.",
  },
  {
    title: "Pre-Placement Training (Mandatory)",
    body: "Training consists of Domain / Technical Training (School-specific), Soft Skills Training, and Emotional, Behaviour & Networking Intelligence. A minimum of 80% attendance across all components is compulsory. Any restriction due to non-compliance is decided by the Dean of the School, in consultation with CAR.",
  },
  {
    title: "Student Responsibilities",
    body: "Students apply only to roles and organisations they are genuinely willing to join, maintain professional conduct at all stages, honour offers once selected in line with institutional ethics and industry expectations, and report any exceptional concerns promptly to CAR. Any action resulting in reputational, institutional, or peer-level impact may be referred to STDC.",
  },
];

/* ----------------------------- Internships --------------------------- */

export const INTERNSHIPS = {
  eyebrow: "Before graduation",
  headline: "Careers start before graduation.",
  body: "Experience is designed into every RVU program. Students leave campus with internships, live industry projects and professional mentorships already on their CVs — which is why they are ready to contribute from the moment you hire them.",
  items: [
    {
      title: "Summer internships",
      body: "Structured summer internships apply classroom learning to real-world business and technology challenges.",
    },
    {
      title: "Winter internships",
      body: "Short-term winter assignments build practical skills and strengthen professional exposure.",
    },
    {
      title: "Live projects",
      body: "Students collaborate with industry partners on real business problems throughout the academic year.",
    },
    {
      title: "Industry mentoring",
      body: "Experienced professionals provide career guidance, technical insight and workplace mentorship.",
    },
    {
      title: "Capstone projects",
      body: "Multidisciplinary, industry-relevant capstones integrate academic knowledge with practical problem-solving.",
    },
    {
      title: "International internships",
      body: "Global opportunities provide cross-cultural exposure and international work experience.",
    },
  ],
};

/* ------------------------------ Industry ----------------------------- */

export const INDUSTRY = {
  eyebrow: "Industry collaboration",
  headline: "Learning doesn't stop at the classroom.",
  body: "Industry is woven through campus life at RVU — not bolted on. Companies co-create projects, run live labs, mentor students and return every cycle to recruit the talent they have already shaped.",
  journey: [
    {
      title: "Education",
      body: "Curriculum co-created with industry through co-designed learning.",
    },
    {
      title: "Industry exposure",
      body: "Campus placements, company visits and practitioner-led sessions.",
    },
    {
      title: "Live projects",
      body: "Students solve real problems for real organisations.",
    },
    {
      title: "Internships",
      body: "Hands-on experience with 250+ industry partners.",
    },
    {
      title: "Recruitment",
      body: "Graduates join teams through a single, coordinated process.",
    },
  ],
  image: {
    src: "/images/eco-system.png",
    alt: "RV University industry engagement ecosystem",
  },
  cta: { label: "Recruit Now", href: "https://forms.gle/4cPjVjPosbaw8b9QA" },
};

/* ------------------------------ Outcomes ----------------------------- */

export const OUTCOMES = {
  eyebrow: "Placement outcomes",
  headline: "The numbers that matter.",
  narrative: [
    "Over 400 placement offers — During the reporting period, CAR facilitated over 400 placement offers (approximately 425 offers) across the University through participation of 250+ recruiting organizations spanning multinational corporations, GCCs, technology companies, consulting firms, financial institutions, startups and emerging enterprises.",
    "Highest LPA of ₹43.5 — The highest annual compensation offered during the year was ₹43.5 LPA by Aviatrix, with an additional offer of ₹33 LPA from the same organization.",
    "Multiple job offers — Approximately 25% of placed students secured multiple employment offers, reflecting strong performance in aptitude assessments, technical evaluations, coding rounds, case studies, interviews and selection processes.",
  ],
  highlight: {
    value: "43.5L",
    unit: "₹",
    label: "Highest annual package",
    note: "Aviatrix · ₹33 LPA offered by the same organisation",
  },
  bands: [
    { range: "₹40L – ₹43.5L", offers: "1–2 offers", count: 1.5, width: 2 },
    { range: "₹20L – ₹33L", offers: "~20 offers", count: 20, width: 24 },
    { range: "₹10L – ₹20L", offers: "40–50 offers", count: 45, width: 53 },
    { range: "₹4L – ₹10L", offers: "80–90 offers", count: 85, width: 100 },
  ],
  salaryImage: {
    src: "/images/salary-distribution.jpg",
    alt: "Salary distribution of placement offers across compensation bands",
  },
  counters: [
    { value: 25, suffix: "%", prefix: "", label: "of placed students received multiple offers" },
    { value: 20, suffix: "+", prefix: "", label: "offers secured above ₹20 LPA" },
    { value: 4, suffix: "", prefix: "₹", label: "minimum campus compensation (LPA)" },
  ],
};

/* -------------------------------- CTA -------------------------------- */

export const CTA = {
  eyebrow: "Recruit with RVU",
  headline: "Ready to build your next team?",
  body: "Connect with a multidisciplinary talent pool of 1,600+ industry-ready graduates. Tell us what you're hiring for — we'll do the rest.",
  button: "Recruit with RVU",
  recruitUrl: "https://forms.gle/4cPjVjPosbaw8b9QA",
  office:
    "Corporate & Alumni Relations Office, RV University, 5th Floor, D Block, RV Vidyanikethan Post, 8th Mile, Mysuru Road, Bengaluru – 560 059",
};

/* ------------------------------- Footer ------------------------------ */

export const FOOTER = {
  tagline: "Go, change the world",
  address: "RV Vidyanikethan Post, 8th Mile, Mysuru Road, Bengaluru – 560 059",
  phone: { label: "+91 63669 85882", href: "tel:+916366985882" },
  email: { label: "admissions@rvu.edu.in", href: "mailto:admissions@rvu.edu.in" },
  columns: [
    {
      title: "Main Navigation",
      links: [
        { label: "About", href: "https://rvu.edu.in/rvu-at-a-glance/" },
        { label: "Schools & Programmes", href: "https://rvu.edu.in/schools-programmes/" },
        { label: "Library", href: "https://rvu.edu.in/library/" },
        { label: "Research", href: "https://rvu.edu.in/research/" },
        { label: "Media & Events", href: "https://rvu.edu.in/events/" },
        { label: "Careers", href: "https://rvu.edu.in/careers/" },
        { label: "Faculty", href: "https://rvu.edu.in/faculty/" },
        { label: "Mysuru Campus", href: "https://mysuru.rvu.edu.in/" },
      ],
    },
    {
      title: "Admissions",
      links: [
        { label: "How to Apply", href: "https://rvu.edu.in/admissions/#admissionsprocess" },
        { label: "Dates & Deadlines", href: "https://rvu.edu.in/admissions/#deadlines" },
        { label: "Student Activities", href: "https://rvu.edu.in/events/" },
        { label: "Financial Aid & Support", href: "https://rvu.edu.in/admissions/#financialaid" },
        { label: "Cancellation & Refund Policy", href: "https://rvu.edu.in/admissions/#cancellation" },
      ],
    },
    {
      title: "Helpful Links",
      links: [
        { label: "Annual Reports", href: "https://rvu.edu.in/annual-reports/" },
        { label: "Approvals", href: "https://rvu.edu.in/approvals/" },
        { label: "Blog", href: "https://rvu.edu.in/blog/" },
        { label: "Contact", href: "https://rvu.edu.in/contact/" },
        { label: "Disclosures", href: "https://rvu.edu.in/disclosures/" },
        { label: "Statutory Committees", href: "https://rvu.edu.in/statutory-committees/" },
        { label: "IQAC", href: "https://rvu.edu.in/internal-quality-assurance-cell-iqac/" },
        { label: "University Grievance Committees", href: "https://rvu.edu.in/university-grievance-committees/" },
        { label: "Student Handbook", href: "https://drive.google.com/drive/folders/1tdCGyGTFOOnjW7Vmo8FSJeFpZNCv4iy6?usp=sharing" },
        { label: "Anti-Ragging Helpline", href: "https://rvu.edu.in/anti-ragging-helpline/" },
      ],
    },
  ],
  schoolsGroups: [
    [
      { label: "School of Liberal Arts and Sciences", href: "https://solas.rvu.edu.in/" },
      { label: "School of Design and Innovation", href: "https://sdi.rvu.edu.in/" },
      { label: "School of Economics and Business", href: "https://soeb.rvu.edu.in/" },
      { label: "School of Computer Science and Engineering", href: "https://socse.rvu.edu.in/" },
    ],
    [
      { label: "School of Law", href: "https://sol.rvu.edu.in/" },
      { label: "School of Film, Media and Creative Arts", href: "https://sofmca.rvu.edu.in/" },
      { label: "School of Allied and Healthcare Professions", href: "https://soahp.rvu.edu.in/" },
    ],
  ],
  approvals: [
    {
      label: "Karnataka State Govt",
      href: "https://d2b6aloc836m7p.cloudfront.net/wp-content/uploads/2026/01/Karnataka-State-Govt.pdf",
    },
    {
      label: "UGC",
      href: "https://d2b6aloc836m7p.cloudfront.net/wp-content/uploads/2026/01/UGC-2f.pdf",
    },
    {
      label: "BCI Approval",
      href: "https://d2b6aloc836m7p.cloudfront.net/wp-content/uploads/2026/01/BCI-Approval.pdf",
    },
  ],
  legal: [
    { label: "Privacy Policy", href: "https://rvu.edu.in/privacy-policy/" },
    { label: "Terms & Conditions", href: "https://rvu.edu.in/terms-conditions/" },
  ],
  copyright: `© ${new Date().getFullYear()}, rvu.edu.in . All rights reserved.`,
};

/* ------------------------------- Contact ----------------------------- */

export const CONTACT = {
  eyebrow: "Get in touch",
  headline: "Contact the CAR Office",
  body: "Whether you are planning a campus drive, pitching an internship or just exploring the RVU talent pool — start the conversation here.",
  email: "placements@rvu.edu.in",
  phone: "+91 89511 79896",
  address: [
    "Corporate & Alumni Relations (CAR) Office,",
    "RV University, 5th Floor, D Block,",
    "RV Vidyanikethan Post, 8th Mile, Mysuru Road,",
    "Bengaluru – 560 059",
  ],
  cta: { label: "Recruit with RVU", href: "https://forms.gle/4cPjVjPosbaw8b9QA" },
};

export const SOCIAL_LINKS = [
  { icon: "linkedin", href: "https://www.linkedin.com/school/rv-university/", label: "LinkedIn" },
  { icon: "instagram", href: "https://www.instagram.com/rvuniversity_bengaluru/", label: "Instagram" },
  { icon: "facebook", href: "https://www.facebook.com/RVUniversityBengaluru", label: "Facebook" },
  { icon: "youtube", href: "https://www.youtube.com/@RVUniversityBengaluru", label: "YouTube" },
  { icon: "twitter", href: "https://x.com/rvaboriculture", label: "X" },
];