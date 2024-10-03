import { InlineCode } from "@/once-ui/components";

const person = {
    firstName: 'Dany',
    lastName:  'Akmallun Ni\'am',
    get name() {
        return `${this.firstName} ${this.lastName}`;
    },
    role:      'Web Developer',
    avatar:    '/images/avatar.jpg',
    location:  'Asia/Jakarta',        // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
    languages: ['English', 'Bahasa']  // optional: Leave the array empty if you don't want to display languages
}

const newsletter = {
    display: true,
    title: <>Berlangganan Newsletter {person.firstName}</>,
    description: <>Saya sesekali menulis tentang cryptocurrency, teknologi, dan membagikan pemikiran tentang dunia teknologi yang sedang tren.</>
}

const social = [
    // Links are automatically displayed.
    // Import new icons in /once-ui/icons.ts
    {
        name: 'GitHub',
        icon: 'github',
        link: 'https://github.com/danyakmallun9999/',
    },
    {
        name: 'LinkedIn',
        icon: 'linkedin',
        link: 'https://www.linkedin.com/in/dany-akmallun-ni-am-786580230/?originalSubdomain=id',
    },
    {
        name: 'X',
        icon: 'x',
        link: '',
    },
    {
        name: 'Email',
        icon: 'email',
        link: 'mailto:danyclasher9999@gmail.com',
    },
]

const home = {
    label: 'Home',
    title: `${person.name}'s Portfolio`,
    description: `Portfolio website showcasing my work as a ${person.role}`,
    headline: <>Web Developer & Linux Enthusiast</>,
    subline: <>Saya Dany, seorang <InlineCode>pengembang web</InlineCode> yang bersemangat <br/> serta memiliki minat mendalam terhadap sistem operasi Linux.</>
    
}

const about = {
    label: 'About',
    title: 'About me',
    description: `Meet ${person.name}, ${person.role} from ${person.location}`,
    tableOfContent: {
        display: true,
        subItems: true
    },
    avatar: {
        display: true
    },
    calendar: {
        display: true,
        link: 'https://cal.com'
    },
    intro: {
        display: true,
        title: 'Introduction',
        description: <>Seorang pengembang web yang antusias, selalu berkomitmen untuk terus belajar dan mengembangkan diri di bidang teknologi, terutama dalam pengembangan web. Pengguna sistem operasi Linux yang aktif, dengan semangat untuk mencari pengalaman baru dan memperluas wawasan secara berkelanjutan.</>
    },
    work: {
        display: true, // set to false to hide this section
        title: 'Pengalaman Kerja',
        experiences: [
            {
                company: 'Klinik Kesehatan',
                timeframe: '2022 - 2023',
                role: 'IT Support',
                achievements: [
                    <>Bertanggung jawab dalam pengelolaan dan pemeliharaan infrastruktur jaringan komputer, serta menangani berbagai aspek teknologi lainnya, termasuk komputer, laptop, printer, dan perangkat lunak.</>,
                    <>Selalu berupaya menemukan solusi terbaik dengan tepat, cepat, dan presisi dalam setiap penanganan masalah.</>
                ],
                images: [ // optional: leave the array empty if you don't want to display images
                    {
                        src: '/images/projects/project-01/cover-01.jpg',
                        alt: 'Once UI Project',
                        width: 16,
                        height: 9
                    }
                ]
            },
            // {
            //     company: 'Creativ3',
            //     timeframe: '2018 - 2022',
            //     role: 'Lead Designer',
            //     achievements: [
            //         <>Developed a design system that unified the brand across multiple platforms, improving design consistency by 40%.</>,
            //         <>Led a cross-functional team to launch a new product line, contributing to a 15% increase in overall company revenue.</>
            //     ],
            //     images: [ ]
            // }
        ]
    },
    studies: {
        display: true, // set to false to hide this section
        title: 'Pendidikan',
        institutions: [
            {
                name: 'UNISNU Jepara',
                description: <>Pelajar Teknik Informatika.</>,
            },
            {
                name: 'Dicoding Academy',
                description: <>Belajar Front-End Web Developer dan Back-End Developer.</>,
            }
        ]
    },
    technical: {
        display: true, // set to false to hide this section
        title: 'Technical skills',
        skills: [
            {
                title: 'Figma',
                description: <>Mampu membuat prototipe di Figma dengan Once UI secara cepat dan efisien.</>,
                images: [
                    {
                        src: '/images/projects/project-01/cover-02.jpg',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                    {
                        src: '/images/projects/project-01/cover-03.jpg',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                ]
            },
            {
                title: 'Next.js',
                description: <>Mengembangkan aplikasi generasi terbaru menggunakan Next.js, Once UI, dan Supabase.</>,
                images: [
                    {
                        src: '/images/projects/project-01/cover-04.jpg',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                ]
            }
        ]
    }
}

const blog = {
    label: 'Blog',
    title: 'Tulisan tentang teknologi dan crypto',
    description: `Read what ${person.name} has been up to recently`
    // Create new blog posts by adding a new .mdx file to app/blog/posts
    // All posts will be listed on the /blog route
}

const work = {
    label: 'Work',
    title: 'My projects',
    description: `Design and dev projects by ${person.name}`
    // Create new project pages by adding a new .mdx file to app/blog/posts
    // All projects will be listed on the /home and /work routes
}

const gallery = {
    label: 'Gallery',
    title: 'My photo gallery',
    description: `A photo collection by ${person.name}`,
    // Images from https://pexels.com
    images: [
        { 
            src: '/images/gallery/img-01.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-02.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-03.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-04.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-05.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-06.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-07.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-08.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-09.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-10.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-11.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-12.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-13.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-14.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
    ]
}

export { person, social, newsletter, home, about, blog, work, gallery };