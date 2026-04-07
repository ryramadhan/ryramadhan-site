import type { Project } from '../content/portfolio'

export type Locale = 'en' | 'id'

export type PortfolioI18n = {
  name: string
  role: string
  tagline1: string
  tagline2: string
  location: string
  availability: string
  about: string
  email: string
  socials: { label: string; href: string; disabled?: boolean }[]
  skills: string[]
  projects: Project[]
}

export type Translations = {
  nav: {
    home: string
    about: string
    skills: string
    projects: string
    contact: string
    cta: string
    langLabel: string
    langEn: string
    langId: string
  }
  hero: {
    ctaPrimary: string
    ctaSecondary: string
    focusTitle: string
    focusItems: { left: string; right: string }[]
  }
  about: {
    eyebrow: string
    title: string
    cards: { title: string; body: string }[]
  }
  skills: {
    eyebrow: string
    title: string
    description: string
  }
  projects: {
    eyebrow: string
    title: string
    description: string
  }
  contact: {
    eyebrow: string
    title: string
    description: string
    emailTitle: string
    messageLabel: string
    messagePlaceholder: string
    helperIdle: string
    helperSent: string
    sendIdle: string
    sendSent: string
  }
  footer: {
    builtWith: string
  }
  portfolio: PortfolioI18n
}

const baseProjects: Project[] = [
  {
    title: 'QuickPOS',
    description:
      'Developed a web-based Point of Sale (POS) system to support business operations, including product management, sales transactions, purchases, and customer and supplier management. Features include dashboard analytics, sales reports, inventory tracking, and role-based authentication. Built using Node.js, Express, PostgreSQL, and EJS.',
    stack: ['Node.js', 'Express', 'PostgreSQL', 'EJS', 'Dashboard', 'RBAC'],
    period: 'Apr 2025 – Jul 2025',
    organization: 'RUBICAMP Bootcamp',
    links: [{ label: 'GitHub', href: 'https://github.com/ikiyyz/quickpos' }],
  },
  {
    title: 'SQLite BREAD Pagination',
    description:
      'Developed a data management web application with CRUD (Create, Read, Update, Delete) features, including pagination and multi-criteria filtering with AND/OR logic. Built using Node.js, Express, SQLite3, and EJS.',
    stack: ['Node.js', 'Express', 'SQLite3', 'EJS', 'Pagination', 'Filtering'],
    period: 'Apr 2025 – Jul 2025',
    organization: 'RUBICAMP Bootcamp',
    links: [
      { label: 'GitHub', href: 'https://github.com/ikiyyz/sqlite-bread-pagination' },
    ],
  },
  {
    title: 'PostgreSQL Auth Pagination',
    description:
      'Developed a web-based Todo application with user authentication, data management, and profile management features. Includes pagination, advanced filtering and sorting (with AND/OR conditions), and avatar upload for user profiles. Built using Express, PostgreSQL, and session-based authentication with a well-structured architecture.',
    stack: ['Express', 'PostgreSQL', 'Session Auth', 'Pagination', 'Sorting', 'Upload'],
    period: 'Apr 2025 – Jul 2025',
    organization: 'RUBICAMP Bootcamp',
    links: [
      { label: 'GitHub', href: 'https://github.com/ikiyyz/postgres-auth-pagination' },
    ],
  },
  {
    title: 'MongoDB BREAD API',
    description:
      'Developed a MongoDB-based web application for managing user and todo data, featuring CRUD operations, search, sorting, and pagination. Built with Node.js and Express on the backend, and JavaScript for an interactive user interface.',
    stack: ['Node.js', 'Express', 'MongoDB', 'JavaScript', 'Search', 'Pagination'],
    period: 'Apr 2025 – Jul 2025',
    organization: 'RUBICAMP Bootcamp',
    links: [
      { label: 'GitHub', href: 'https://github.com/ikiyyz/mongodb-async-breads-api' },
    ],
  },
  {
    title: 'Connect Link',
    description:
      'Developed a web-based contact management application with CRUD (Create, Read, Update, Delete) features and search functionality by name, phone number, and email. Built using HTML, CSS, and JavaScript.',
    stack: ['HTML', 'CSS', 'JavaScript', 'CRUD', 'Search'],
    period: 'Feb 2024 – Jun 2024',
    organization: 'Bear Mentor Bootcamp',
    links: [{ label: 'GitHub', href: 'https://github.com/ramadhanrizki/connect-link.com' }],
  },
  {
    title: 'Learnify Study',
    description:
      'Developed a task management app (Learnify Study) to boost productivity, similar to Trello and Todoist, with task management, agenda, and habit tracking features. Used Vite, Node.js, TypeScript, React, React Router, and Vercel.',
    stack: ['Vite', 'Node.js', 'TypeScript', 'React', 'React Router', 'Vercel'],
    period: 'Feb 2024 – Jun 2024',
    organization: 'Bear Mentor Bootcamp',
    links: [{ label: 'GitHub', href: 'https://github.com/ramadhanrizki/learnify-study' }],
  },
  {
    title: 'SportStat API',
    description:
      'Developed a REST API for sports data management with full CRUD (Create, Read, Update, Delete) endpoints and a well-structured API design. Built using TypeScript with Node.js, PostgreSQL as the database, and deployed on Render.',
    stack: ['TypeScript', 'Node.js', 'PostgreSQL', 'REST API', 'Render'],
    period: 'Feb 2024 – Jun 2024',
    organization: 'Bear Mentor Bootcamp',
    links: [{ label: 'GitHub', href: 'https://github.com/ramadhanrizki/sportstat-api' }],
  },
  {
    title: 'Backend Internship',
    description:
      "Contributed to the development of the company's backend system by implementing JWT-based authentication using Golang as part of the internship final project, supporting access control and application security.",
    stack: ['Golang', 'JWT', 'Authentication', 'Access Control'],
    period: 'May 2022 – Aug 2022',
    organization: 'PT Topindoku Jatinangor',
    highlights: ['JWT auth implementation', 'Access control & application security'],
  },
]

export const translations: Record<Locale, Translations> = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      skills: 'Skills',
      projects: 'Projects',
      contact: 'Contact',
      cta: 'Let’s talk',
      langLabel: 'Language',
      langEn: 'EN',
      langId: 'ID',
    },
    hero: {
      ctaPrimary: 'View projects',
      ctaSecondary: 'Contact',
      focusTitle: 'Currently focused on',
      focusItems: [
        { left: 'System thinking', right: 'backend' },
        { left: 'API quality', right: 'DX + reliability' },
        { left: 'Clean delivery', right: 'calm UI' },
      ],
    },
    about: {
      eyebrow: 'About',
      title: 'Structured, pragmatic, and dependable.',
      cards: [
        {
          title: 'Strength',
          body: 'Backend fundamentals, clear API design, and consistent delivery with maintainable code.',
        },
        {
          title: 'Approach',
          body: 'Build small, verify fast, and keep systems understandable—minimal, but not empty.',
        },
      ],
    },
    skills: {
      eyebrow: 'Skills',
      title: 'Tools I use to build.',
      description: 'A practical stack for web systems and clean interfaces.',
    },
    projects: {
      eyebrow: 'Projects',
      title: 'Selected work',
      description: 'Clear summaries, calm layout, and minimal cards.',
    },
    contact: {
      eyebrow: 'Contact',
      title: 'Let’s talk about your project.',
      description: 'A minimal form—enough to start a conversation.',
      emailTitle: 'Email',
      messageLabel: 'Your message',
      messagePlaceholder: 'Share your goals, timeline, and requirements.',
      helperIdle: 'No spam. No noise.',
      helperSent: 'Message saved (demo).',
      sendIdle: 'Send',
      sendSent: 'Sent',
    },
    footer: {
      builtWith: 'Built with React + Vite.',
    },
    portfolio: {
      name: 'Riski Yana Ramadhan',
      role: 'Backend Developer',
      tagline1:
        'A vocational school graduate with internship experience as a backend developer. Experienced in building web-based systems using Node.js, Express, and PostgreSQL.',
      tagline2:
        'Completed a fullstack web development bootcamp and currently focused on backend development, while continuously growing as a fullstack developer.',
      location: 'Indonesia',
      availability: 'Open for freelance & full-time roles',
      about:
        'I am interested in backend development driven by curiosity about how systems work behind the scenes in web development. Over time, it has grown into a habit of understanding and building systems in a more structured and efficient way.',
      email: 'ryr.ramadhan@email.com',
      socials: [
        { label: 'GitHub', href: 'https://github.com/ryramadhan' },
        { label: 'LinkedIn', href: 'https://linkedin.com/in/ryramadhan' },
        { label: 'Resume', href: '#', disabled: true },
      ],
      skills: [
        'HTML',
        'CSS',
        'JavaScript',
        'TypeScript',
        'React',
        'Next.js',
        'Node.js',
        'Express.js',
        'PostgreSQL',
        'MongoDB',
        'MySQL',
        'SQLite',
        'Sequelize',
        'EJS',
        'Bootstrap',
        'REST APIs',
        'Git',
        'JWT Auth',
      ],
      projects: baseProjects,
    },
  },
  id: {
    nav: {
      home: 'Beranda',
      about: 'Tentang',
      skills: 'Keahlian',
      projects: 'Proyek',
      contact: 'Kontak',
      cta: 'Diskusi',
      langLabel: 'Bahasa',
      langEn: 'EN',
      langId: 'ID',
    },
    hero: {
      ctaPrimary: 'Lihat proyek',
      ctaSecondary: 'Kontak',
      focusTitle: 'Sedang fokus pada',
      focusItems: [
        { left: 'Pola pikir sistem', right: 'backend' },
        { left: 'Kualitas API', right: 'DX + reliabilitas' },
        { left: 'Delivery rapi', right: 'UI tenang' },
      ],
    },
    about: {
      eyebrow: 'Tentang',
      title: 'Terstruktur, pragmatis, dan dapat diandalkan.',
      cards: [
        {
          title: 'Kekuatan',
          body: 'Fondasi backend, desain API yang jelas, serta delivery konsisten dengan kode yang mudah dirawat.',
        },
        {
          title: 'Pendekatan',
          body: 'Bangun kecil, validasi cepat, dan jaga sistem tetap mudah dipahami—minimal tapi tidak kosong.',
        },
      ],
    },
    skills: {
      eyebrow: 'Keahlian',
      title: 'Tools yang saya gunakan.',
      description: 'Stack praktis untuk sistem web dan tampilan yang bersih.',
    },
    projects: {
      eyebrow: 'Proyek',
      title: 'Pilihan karya',
      description: 'Ringkas, rapi, dan tetap mudah dibaca dalam kartu minimal.',
    },
    contact: {
      eyebrow: 'Kontak',
      title: 'Mari bahas proyek Anda.',
      description: 'Form minimal—cukup untuk memulai diskusi.',
      emailTitle: 'Email',
      messageLabel: 'Pesan Anda',
      messagePlaceholder: 'Ceritakan tujuan, timeline, dan kebutuhan proyek Anda.',
      helperIdle: 'Tanpa spam. Tanpa noise.',
      helperSent: 'Pesan tersimpan (demo).',
      sendIdle: 'Kirim',
      sendSent: 'Terkirim',
    },
    footer: {
      builtWith: 'Dibuat dengan React + Vite.',
    },
    portfolio: {
      name: 'Riski Yana Ramadhan',
      role: 'Backend Developer',
      tagline1:
        'Lulusan SMK dengan pengalaman magang sebagai backend developer. Terbiasa membangun sistem berbasis web menggunakan Node.js, Express, dan PostgreSQL.',
      tagline2:
        'Telah menyelesaikan bootcamp fullstack web development dan saat ini berfokus pada pengembangan backend, sambil terus mengembangkan kemampuan sebagai fullstack developer.',
      location: 'Indonesia',
      availability: 'Terbuka untuk freelance & full-time',
      about:
        'Saya tertarik pada pengembangan backend karena ketertarikan terhadap bagaimana sebuah sistem bekerja di balik layar dalam pengembangan web. Seiring waktu, hal tersebut berkembang menjadi kebiasaan untuk memahami dan membangun sistem secara lebih terstruktur dan efisien.',
      email: 'ryr.ramadhan@email.com',
      socials: [
        { label: 'GitHub', href: 'https://github.com/ryramadhan' },
        { label: 'LinkedIn', href: 'https://linkedin.com/in/ryramadhan' },
        { label: 'Resume', href: '#', disabled: true },
      ],
      skills: [
        'HTML',
        'CSS',
        'JavaScript',
        'TypeScript',
        'React',
        'Next.js',
        'Node.js',
        'Express.js',
        'PostgreSQL',
        'MongoDB',
        'MySQL',
        'SQLite',
        'Sequelize',
        'EJS',
        'Bootstrap',
        'REST APIs',
        'Git',
        'JWT Auth',
      ],
      projects: baseProjects.map((p) => {
        const map: Record<string, Project> = {
          QuickPOS: {
            ...p,
            description:
              'Mengembangkan sistem Point of Sale (POS) berbasis web untuk mendukung operasional bisnis, mencakup manajemen produk, transaksi penjualan, pembelian, serta pengelolaan pelanggan dan supplier. Dilengkapi dengan fitur dashboard analytics, laporan penjualan, inventory tracking, serta sistem autentikasi dengan role-based access. Dibangun menggunakan Node.js, Express, PostgreSQL, dan EJS.',
          },
          'SQLite BREAD Pagination': {
            ...p,
            description:
              'Mengembangkan aplikasi web untuk pengelolaan data dengan fitur CRUD (Create, Read, Update, Delete), dilengkapi dengan pagination serta filtering multi-kriteria yang dapat dikombinasikan menggunakan operator AND/OR. Dibangun menggunakan Node.js, Express, SQLite3, dan EJS.',
          },
          'PostgreSQL Auth Pagination': {
            ...p,
            description:
              'Mengembangkan aplikasi Todo berbasis web dengan sistem autentikasi pengguna, manajemen data, dan pengelolaan profil. Dilengkapi dengan fitur pagination, filtering dan sorting (dengan kombinasi AND/OR), serta upload avatar untuk profil pengguna. Dibangun menggunakan Express, PostgreSQL, dan session-based authentication dengan struktur aplikasi yang terorganisir.',
          },
          'MongoDB BREAD API': {
            ...p,
            description:
              'Mengembangkan aplikasi web berbasis MongoDB untuk pengelolaan data pengguna dan todo, dilengkapi dengan fitur CRUD, pencarian, sorting, dan pagination. Menggunakan Node.js dan Express pada sisi backend serta JavaScript untuk membangun antarmuka yang interaktif.',
          },
          'Connect Link': {
            ...p,
            description:
              'Mengembangkan aplikasi manajemen kontak berbasis web dengan fitur CRUD (Create, Read, Update, Delete) serta pencarian data berdasarkan nama, nomor telepon, dan email. Dibangun menggunakan HTML, CSS, dan JavaScript.',
          },
          'Learnify Study': {
            ...p,
            description:
              'Mengembangkan aplikasi manajemen tugas Learnify Study untuk mendukung produktivitas, mirip dengan Trello dan Todoist, dengan fitur kelola tugas, agenda, dan pelacakan kebiasaan. Menggunakan Vite, Node.js, TypeScript, React, React Router, dan Vercel.',
          },
          'SportStat API': {
            ...p,
            description:
              'Mengembangkan REST API untuk pengelolaan data olahraga dengan implementasi endpoint CRUD (Create, Read, Update, Delete) serta struktur API yang terorganisir. Dibangun menggunakan TypeScript dengan Node.js, PostgreSQL sebagai basis data, dan dideploy menggunakan Render.',
          },
          'Backend Internship': {
            ...p,
            description:
              'Berkontribusi dalam pengembangan sistem backend perusahaan dengan mengimplementasikan autentikasi berbasis JWT menggunakan Golang sebagai bagian dari proyek akhir magang, serta mendukung pengelolaan akses dan keamanan aplikasi.',
            highlights: ['Implementasi autentikasi JWT', 'Pengelolaan akses & keamanan aplikasi'],
          },
        }
        return map[p.title] ?? p
      }),
    },
  },
}

