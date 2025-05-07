import {
    jupyter,
    jbp,
    qr,
    ubuntu,
    opencv,
    redhat,
    mysql,
    mit,
    nhps,
    dav,
    core,
    cpp,
    bootstrap,
    oracle,
    vs,
    netbeans,
    intellije,
    eclipse,
    dsa, aws, devcpp, linux, windows,
    oraclefa, cicd, devops, gate, suvidha, erp, surya, comp, tag, nptel, ieee, imagepara, exam
} from "../assets"

import {FiLinkedin, FiInstagram, FiGithub} from 'react-icons/fi';
import { BsTwitterX } from "react-icons/bs";
import {CgSketch} from "react-icons/cg";
import {HiOutlinePaintBrush} from "react-icons/hi2";
import {GiTennisRacket} from "react-icons/gi";
import {PiCake, PiCookingPot, PiFlowerTulip, PiStudent} from "react-icons/pi";

export const AppText = {
    hello: 'Hello,',
    Iam: 'I\'m',
    SamriddhiDatir: 'Samriddhi Datir',
    homeDescription:'Cloud & DevOps enthusiast, programmer in C and C++, moderate knowledge in Red Hat Linux and Ubuntu, core knowledge of computer science subjects. Creative thinker, interest in SQL queries, HTML, CSS. Eagers to finish the tasks as soon as possible and a fast learner.',
    aboutMeDescripion: 'Enthusiastic Computer Engineering student with a stellar 9.46 CGPA, specializing in full-stack development. Expert in Front-end and Back-end Development, proficient in React.js, Node.js, MySQL, and Java, with a knack for innovative problem-solving in C++. Noteworthy projects include automating PUC certificate processing and creating a campus access system. Skilled in Python, project management, and disaster management tools like Rakshak for crisis response. ',
    aboutMeDescripion1: 'Eager to embrace challenges, I thrive on learning and seek to contribute impactful solutions to tech. Open to collaborations and networking opportunities to further explore the ever-evolving realms of technology. Let\'s connect and delve into the dynamic world of innovation and growth! ',
    Skills: 'Skills & ',
    Experties: 'Internships',
    TechSkills: 'Technical Skills: ',
    OtherSkills: 'Other Skills: ',
    CloudEnthusiast: 'Cloud Enthusiast',
    CompetitiveProgrammer: 'Competitive Programmer',
    DevOps: 'DevOps Enthusiast',
    Portfolio: 'Works',
    Creative: 'My Project ',
    CompaniesI: 'Internships, Badges ',
    WorkedFor: '& Achievements',
    Contact: 'Contact ',
    Us: 'Me',
    copywriteText: 'Copyright by Samriddhi Datir @',
    Hobby1: 'Hob',
    Hobby2: 'bies'
}

export const aboutSection = [
    {
        id: 1,
        image: cicd,
        title: 'Cloud Enthusiast',
        desc: 'Expert in implementation of cloud services'
    },
    {
        id: 2,
        image: devops,
        title: 'DevOps Enthusiast',
        desc: 'Development and Deployment experienced through cloud'
    },
    {
        id: 3,
        image: dsa,
        title: 'Competitive Programmer',
        desc: 'DSA programming enthusiast, in C++ language'
    },

]

export const skillsList = [
    {
        id: 1,
        icon: opencv,
        text: 'OpenCV'
    },
    {
        id: 1,
        icon: redhat,
        text: 'Red Hat Linux'
    },
    {
        id: 1,
        icon: oracle,
        text: 'Oracle SQL'
    },
    {
        id: 1,
        icon: cpp,
        text: 'C++ and C'
    },
    {
        id: 1,
        icon: mysql,
        text: 'MySQL'
    },
    {
        id: 1,
        icon: aws,
        text: 'AWS Cloud'
    },
    {
        id: 1,
        icon: bootstrap,
        text: 'Bootstrap CSS'
    },

]

export const portfolio = [
    {
        id: 1,
        title: 'MITAOE ERP',
        type: 'website',
        desc: "More corrected version of MITAOE's ERP.",
        imageUrl: erp,
        link: "https://github.com/mrinal4703/MITAOE-ERP"
    },
    {
        id: 1,
        title: 'Image Paragraph Captioning',
        type: 'website',
        desc: "Image paragraph captioning generates descriptive text for images using computer vision and NLP.",
        imageUrl: imagepara,
        link: ""
    },
    {
        id: 3,
        title: 'Surya',
        type: 'website',
        desc: "A visually assistive app that perfects your Surya Namaskar poses using angles and other metrics.",
        imageUrl: surya,
        link: "https://github.com/mrinal4703/Surya"
    },
    {
        id: 2,
        title: 'Suvidhaa',
        type: 'website',
        desc: "A health care management portal for seamless medical related procedures with AI help.",
        imageUrl: suvidha,
        link: "https://github.com/mrinal4703/Suvidhaa"
    },
    {
        id: 3,
        title: 'EXAM MANAGEMENT SYSTEM',
        type: 'website',
        desc: "An exam management system automates scheduling, grading, and report generation to improve efficiency.",
        imageUrl: exam,
        link: ""
    },
]

export const ide = [
    {
        id: 1,
        icon: vs,
        text: 'VS Code'
    },
    {
        id: 1,
        icon: netbeans,
        text: 'Apache Netbeans'
    },
    {
        id: 1,
        icon: intellije,
        text: 'Intellije'
    },
    {
        id: 1,
        icon: eclipse,
        text: 'Eclipse'
    },
    {
        id: 1,
        icon: devcpp,
        text: 'Dev C++'
    },
    {
        id: 1,
        icon: windows,
        text: 'Windows'
    },
    {
        id: 1,
        icon: linux,
        text: 'Unix OS'
    },
    {
        id: 1,
        icon: ubuntu,
        text: 'Ubuntu OS'
    }
]

export const Education = [
    {
        id: 1,
        // pic: jbp,
        date: '2021-25',
        imageUrl: mit,
        // icon: comp,
        icon: <PiStudent />,
        text: [
            "Pursuing Bachelor of Technology from this autonomous and affiliated college",
            "Under SPPU (Savitribai Phule Pune University)",
            "To be completing Engineering by May, 2025"
        ],
        educationName: 'BTech CSE',
        schoolName: 'MIT Academy of Engineering',
        performance: 'CGPA 8.40',
    },
    {
        id: 2,
        pic: qr,
        date: '2021',
        imageUrl: dav,
        // icon: tag,
        icon: <PiStudent />,
        text: [
            "Completed the HSC from Bharat English School & J. College",
            "Stream chosen was PCMB with IT",
        ],
        educationName: 'XII State Board',
        schoolName: 'Bharat English School & J. College, Pune',
        performance: 'Scored 75.67%',
    },
    {
        id: 3,
        pic: core,
        date: '2019',
        imageUrl: nhps,
        // icon: tag,
        icon: <PiStudent />,
        text: [
            "Completed the SSC from Priyadarshini English Medium School & Jr. College",
            "Been from first grade till tenth grade",
            "Participated in various activities that my school organized such as sports, camping, social wellness " +
            "and awareness rallies, etc; and won various medals and certificates in sports."
        ],
        educationName: 'X State Board',
        schoolName: 'Priyadarshini English Medium School & Jr. College, Pune',
        performance: 'Scored 74.60%',
    }
]

export const Internship = [
    {
        id: 1,
        // imageUrl: oraclefa,
        companydesc: 'Internship in CLoud Computing',
        company: 'Uniconverge Technologies Pvt. Ltd.',
        duration: 'May 2024 - June 2024',
        link: 'https://drive.google.com/file/d/13yQCwj9TpEigopMLBdZ6bLQ6M3PYtNY4/view'
    },
    {
        id: 1,
        // imageUrl: oraclefa,
        companydesc: 'Machine Learning Training',
        company: 'Internshala Trainings',
        duration: '8th May 2023',
        link: 'https://drive.google.com/file/d/1UDOd7hMAA2AkAQqIMJiJ1zes9rnogWlW/view'
    },
    {
        id: 1,
        // imageUrl: oraclefa,
        companydesc: 'Paper Publication Presentation',
        company: 'Image paragraph Captioning',
        duration: '8th February 2025',
        link: 'https://drive.google.com/file/d/1762M9NWPY4uMMwPKJybao9OBkkdq2EWz/view`'
    },
]

export const CompanyImage = [
    {
        id: 5,
        imageUrl: ieee,
        companydesc: 'Integrating Region Proposals with Recurrent Neural Networks for Image Paragraph Captioning',
        company: 'IEEE',
        duration: 'April 22, 2025',
        description: 'Integrating Region Proposals with Recurrent Neural Networks for Image Paragraph Captioning, Paper Published in IEEE',
        link: 'https://ieeexplore.ieee.org/document/10969358'
    },
    {
        id: 5,
        imageUrl: nptel,
        companydesc: 'Introduction to Industry 4.0 and Industrial Internet of Things',
        company: 'NPTEL',
        duration: 'October 26, 2024',
        description: 'Introduction to Industry 4.0 and Industrial Internet of Things, Silver Medalist',
        link: 'https://drive.google.com/file/d/12OGQspUV--x358DaHU82DQruH-OulYA3/view'
    },
]

export const socialNetwork = [
    {
        id: 1,
        logo: <FiLinkedin className="text-slate-700"/>,
        url: 'https://www.linkedin.com/in/datirsamriddhi/'
    },
    {
        id: 2,
        logo: <FiInstagram className="text-slate-700"/>,
        url: 'https://www.instagram.com/datirsamriddhi'
    },
    {
        id: 3,
        logo: <BsTwitterX className="text-slate-700"/>,
        url: 'https://x.com/datirsamriddhi'
    },
    {
        id: 4,
        logo: <FiGithub className="text-slate-700"/>,
        url: 'https://github.com/datirsamriddhi'
    }
]

export const hobby = [
    {
        id: 1,
        logo: <CgSketch />,
        text: 'Sketching'
    },
    {
        id: 1,
        logo: <HiOutlinePaintBrush />,
        text: 'Painting'
    },
    {
        id: 1,
        logo: <GiTennisRacket />,
        text: 'Badminton'
    },
    {
        id: 1,
        logo: <PiFlowerTulip />,
        text: 'Floral arrangements'
    },
    {
        id: 1,
        logo: <PiCookingPot />,
        text: 'Cooking'
    },
    {
        id: 1,
        logo: <PiCake />,
        text: 'Baking'
    },
]