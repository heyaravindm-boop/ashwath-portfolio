import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const skills = [
  { name: 'Content Creation & Copywriting', level: 90 },
  { name: 'Social Media Management', level: 88 },
  { name: 'Digital Marketing Strategy', level: 85 },
  { name: 'SEO & Audience Analysis', level: 78 },
  { name: 'Brand Development', level: 82 },
  { name: 'Data Driven Marketing', level: 75 },
  { name: 'Community Engagement', level: 80 },
]

const technicalSkills = [
  'Microsoft PowerPoint',
  'Microsoft Word',
  'Microsoft Excel',
  'Ads Manager',
  'WordPress',
  'Procreate',
  'Canva',
]

const languages = [
  { lang: 'Tamil', level: 'Native' },
  { lang: 'English', level: 'Proficiency' },
  { lang: 'Hindi', level: 'Limited Proficiency' },
]

const education = [
  {
    degree: 'Bachelor of Laws - LLB (Hons)',
    school: 'School of Law, Christ University, Bengaluru, India',
    date: '2015 – 2020',
  },
]

const experiences = [
  {
    role: 'Marketing Executive',
    company: 'Spicecraft., Australia (Freelance)',
    period: 'April, 2024 – Present',
    logo: 'S',
    logoBg: '#E85D3A',
    logoImage: 'https://wbfa6dvbvda3vgwp.public.blob.vercel-storage.com/website-images/company-logos-resume/4.jpg',
    bullets: [
      'Spearheaded a targeted advertising campaign for the Sydney Easter Show market, resulting in a 20% increase in customer foot traffic to the Spicecraft stall.',
    ],
  },
  {
    role: 'Co-founder, Brand Strategy and Marketing',
    company: 'Shree Jai Arts',
    period: 'Feb, 2021 – Present',
    logo: 'SJ',
    logoBg: '#9A463D',
    logoImage: 'https://wbfa6dvbvda3vgwp.public.blob.vercel-storage.com/website-images/company-logos-resume/2.jpg',
    bullets: [
      'Managed end-to-end client communication, ensuring prompt and professional response to maintain positive relationships and a seamless customer experience.',
      'Developed and maintained organised records of customer inquiries, interactions and order processes thus improving service efficiency.',
      'Developed engaging and creative weekly content, including writing, filming, and editing video clips for various social media channels in alignment with brand guidelines.',
      'Launched targeted social media initiatives across multiple platforms, boosting brand recognition by 50% and increasing international orders by 40% within six months.',
      'Implemented structured workflow strategies to manage client requests, prioritise tasks and maintain operational efficiency.',
      'Conducted ongoing industry research to adapt customer engagement strategies in alignment with evolving market trends.',
    ],
  },
  {
    role: 'Social Media Marketing Assistant',
    company: 'Showcase It Inc., Australia',
    period: 'May, 2024 – April, 2025',
    logo: 'SI',
    logoBg: '#2563EB',
    bullets: [
      'Developed a social media strategy using audience insights and analytics, ensuring alignment with brand guidelines, which improved engagement by 70%.',
      'Created visually engaging event presentations, maintaining brand aesthetic, to enhance communication and audience interaction.',
      'Developed and executed targeted campaigns, ensuring brand consistency across all materials, driving a 75% increase in social media reach.',
    ],
  },
  {
    role: 'Associate',
    company: 'Bisani Legal, India',
    period: 'Apr 2023 – Nov 2023',
    logo: 'BL',
    logoBg: '#374151',
    logoImage: 'https://wbfa6dvbvda3vgwp.public.blob.vercel-storage.com/website-images/company-logos-resume/3.jpg',
    bullets: [
      'Drafted detailed court documents and persuasive client presentations, resulting in consistently high ratings for clarity and accuracy from senior counsel review.',
      'Utilised strong analytical skills to interpret legal information for accurate document preparation, significantly reducing the need for revisions by supervising attorneys.',
      'Managed complex calendars and schedules for multiple cases, ensuring seamless workflow and consistently meeting all court-imposed deadlines.',
    ],
  },
  {
    role: 'Creative / Strategy Head',
    company: 'Vaazhvi, India',
    period: 'Jul, 2021 – Aug, 2023',
    logo: 'V',
    logoBg: '#7C3AED',
    logoImage: 'https://wbfa6dvbvda3vgwp.public.blob.vercel-storage.com/website-images/company-logos-resume/1.jpg',
    bullets: [
      'Led the creative direction and execution of social media content, aligning with brand guidelines, resulting in a 70% increase in engagement.',
      'Managed content scheduling and workflow coordination, ensuring 100% consistency in online communication and outreach.',
      'Collaborated with cross-functional teams to ensure smooth execution of marketing initiatives and timely communication of key messages.',
    ],
  },
  {
    role: 'Advocate',
    company: 'Chamber of Mr. RK Karthik, India',
    period: 'Oct 2021 – Feb 2023',
    logo: 'RK',
    logoBg: '#374151',
    bullets: [
      'Facilitated negotiations, dispute resolution and communication with clients, senior advocates, and court officers, ensuring timely progress and resolution of cases.',
      'Prioritised tasks effectively under pressure, delivering accurate results consistently.',
    ],
  },
]

const certifications = [
  'Design, Manage and Launch Campaigns by Ana Marin',
  'Instagram Strategy for Business Growth by Dot Lung',
  'Full Funnel Advertising for Facebook and Instagram by Patrick Wind',
  'Copywriting for Advertising by Jayshree Viswanathan',
  'Strategic Foresight for Brands: Plan for Future Success by Rich Radka',
]

const references = [
  { name: 'Name Surname', company: 'Company Name/Position' },
  { name: 'Name Surname', company: 'Company Name/Position' },
]

export default function ResumePage() {
  return (
    <main className="min-h-screen pt-20" style={{ background: '#FFFAF3' }}>
      <div className="max-w-6xl mx-auto px-6 py-10">
        {/* Page title */}
        <div className="flex items-center justify-between mb-8 border-b border-gray-200 pb-5">
          <h1
            className="text-4xl font-bold text-gray-900"
            style={{ fontFamily: 'var(--font-league-spartan)' }}
          >
            Resume &amp; Portfolio
          </h1>
          <div className="flex flex-col gap-1">
            <span className="block w-5 h-[2px] bg-gray-400" />
            <span className="block w-5 h-[2px] bg-gray-400" />
          </div>
        </div>

        {/* 3-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr_230px] gap-8">

          {/* ── Left column ── */}
          <aside className="flex flex-col gap-6">
            {/* Profile image */}
            <div className="relative w-full aspect-square max-w-[260px] overflow-hidden rounded-2xl bg-[#c8bfe7]">
              <Image
                src="/profile.png"
                alt="Ashwath"
                fill
                className="object-cover"
              />
            </div>

            {/* Name + role */}
            <div>
              <h2
                className="text-xl font-bold text-gray-900"
                style={{ fontFamily: 'var(--font-league-spartan)' }}
              >
                Ashwath Abinaya CJ (Ash)
              </h2>
              <p className="text-sm text-gray-500 mt-0.5">Multidisciplinary Marketer · Creativity &amp; Connection · Entrepreneur</p>
            </div>

            {/* Contact */}
            <ul className="flex flex-col gap-1.5 text-sm text-gray-700">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-400 flex-shrink-0" />
                <a href="tel:+61468335609" className="hover:underline">+61 468 335 609</a>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-400 flex-shrink-0" />
                <a href="mailto:ashwathcj8@gmail.com" className="hover:underline">ashwathcj8@gmail.com</a>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-400 flex-shrink-0" />
                <span>Randwick, NSW 2031</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-400 flex-shrink-0" />
                <a href="https://au.linkedin.com/in/ashwathabinaya" target="_blank" rel="noreferrer" className="hover:underline text-[#B8574D]">
                  LinkedIn
                </a>
              </li>
            </ul>

            {/* Education */}
            <div>
              <SectionLabel>Education</SectionLabel>
              <div className="flex flex-col gap-4 mt-3">
                {education.map((ed) => (
                  <div key={ed.degree}>
                    <p className="text-sm font-bold text-gray-800 leading-snug">{ed.degree}</p>
                    <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">{ed.school}</p>
                    <p className="text-xs text-gray-400 mt-0.5">{ed.date}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Skills */}
            <div>
              <SectionLabel>Technical Skills</SectionLabel>
              <ul className="flex flex-col gap-1.5 mt-3">
                {technicalSkills.map((s) => (
                  <li key={s} className="flex items-center gap-2 text-xs text-gray-700">
                    <span className="w-1 h-1 rounded-full bg-gray-400 flex-shrink-0" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>

            {/* Languages */}
            <div>
              <SectionLabel>Language</SectionLabel>
              <ul className="flex flex-col gap-1.5 mt-3">
                {languages.map((l) => (
                  <li key={l.lang} className="text-xs text-gray-700">
                    <span className="font-medium">{l.lang}</span>
                    <span className="text-gray-400"> – {l.level}</span>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* ── Center column ── */}
          <div className="flex flex-col gap-8">
            {/* About me */}
            <div className="rounded-xl border border-gray-200 p-6">
              <p className="text-xs font-semibold tracking-widest uppercase text-gray-500 mb-3">About Me</p>
              <p className="text-sm text-gray-700 leading-relaxed">
                With a distinctive blend of law and economic background and 2 years of experience in
                brand communications and digital engagement, I am passionate about building powerful
                brand experiences. My expertise spans across creating engaging content, strategically
                managing social media, and building lasting client relationships to support core brand
                initiatives. Backed by strong communication, analytical, and organisational skills, I
                am driven to contribute to brand governance and elevate brand reputation.
              </p>
            </div>

            {/* Portfolio */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3
                  className="text-lg font-bold text-gray-900"
                  style={{ fontFamily: 'var(--font-league-spartan)' }}
                >
                  Portfolio
                </h3>
                <Link
                  href="/portfolio"
                  className="text-xs font-bold uppercase tracking-widest text-[#B8574D] border border-[#B8574D] rounded-full px-3 py-1 hover:bg-[#B8574D] hover:text-white transition-colors"
                >
                  View All
                </Link>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { title: 'Brand Identity', tags: ['Branding'], image: '/books/cover1.png' },
                  { title: 'Marketing Campaign', tags: ['Marketing'], image: '/books/cover2.png' },
                  { title: 'Web Design', tags: ['Design'], image: '/books/cover3.jpg' },
                  { title: 'Social Strategy', tags: ['Social Media'], image: '/books/cover4.jpg' },
                ].map((p) => (
                  <div key={p.title} className="rounded-xl border border-gray-200 overflow-hidden">
                    <div className="relative w-full h-36 bg-gray-100">
                      <Image src={p.image} alt={p.title} fill className="object-cover" />
                    </div>
                    <div className="p-3">
                      <p className="text-sm font-bold text-gray-800">{p.title}</p>
                      <div className="flex flex-wrap gap-1 mt-2">
                        {p.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-[10px] font-semibold px-2 py-0.5 rounded bg-[#f0f0f0] text-gray-600"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Experience */}
            <div>
              <SectionLabel>Professional Experience</SectionLabel>
              <div className="flex flex-col gap-5 mt-4">
                {experiences.map((exp, i) => (
                  <div key={i} className="rounded-xl border border-gray-200 p-4">
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <div className="flex items-center gap-3">
                        {exp.logoImage ? (
                          <div className="w-7 h-7 rounded-full overflow-hidden flex-shrink-0 border border-gray-100">
                            <Image src={exp.logoImage} alt={exp.company} width={28} height={28} className="object-cover w-full h-full" />
                          </div>
                        ) : (
                          <div
                            className="w-7 h-7 rounded-full flex items-center justify-center text-white text-[10px] font-bold flex-shrink-0"
                            style={{ background: exp.logoBg }}
                          >
                            {exp.logo}
                          </div>
                        )}
                        <div>
                          <p className="text-sm font-bold text-gray-900">{exp.role}</p>
                          <p className="text-xs text-gray-500">{exp.company}</p>
                        </div>
                      </div>
                      <span className="text-xs text-gray-400 whitespace-nowrap flex-shrink-0">{exp.period}</span>
                    </div>
                    <ul className="list-disc list-outside ml-5 flex flex-col gap-1 mt-2">
                      {exp.bullets.map((b, j) => (
                        <li key={j} className="text-xs text-gray-600 leading-relaxed">{b}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── Right column ── */}
          <aside className="flex flex-col gap-6">
            {/* Skills */}
            <div className="rounded-xl border border-gray-200 p-5">
              <SectionLabel>Skills</SectionLabel>
              <div className="flex flex-col gap-4 mt-4">
                {skills.map((skill) => (
                  <div key={skill.name}>
                    <p className="text-xs font-medium text-gray-700 mb-1">{skill.name}</p>
                    <div className="h-[3px] w-full bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full"
                        style={{
                          width: `${skill.level}%`,
                          background: 'linear-gradient(90deg, #7C6FCD 0%, #9B8FE8 100%)',
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div className="rounded-xl border border-gray-200 p-5">
              <SectionLabel>Certification</SectionLabel>
              <ul className="flex flex-col gap-2.5 mt-3">
                {certifications.map((cert, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-gray-600 leading-relaxed">
                    <span className="w-1 h-1 rounded-full bg-gray-400 flex-shrink-0 mt-1.5" />
                    {cert}
                  </li>
                ))}
              </ul>
            </div>

            {/* References */}
            <div className="rounded-xl border border-gray-200 p-5">
              <SectionLabel>References</SectionLabel>
              <div className="flex flex-col gap-4 mt-3">
                {references.map((ref, i) => (
                  <div key={i}>
                    <p className="text-sm font-bold text-gray-800">{ref.name}</p>
                    <p className="text-xs text-gray-500">{ref.company}</p>
                    <p className="text-xs text-gray-500 mt-0.5">Contact info: Available on Request</p>
                  </div>
                ))}
              </div>
            </div>
          </aside>

        </div>
      </div>
    </main>
  )
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2">
      <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-400 whitespace-nowrap">{children}</p>
      <div className="flex-1 h-px bg-gray-200" />
    </div>
  )
}
