const courseCategories = [
    {
        id: 1,
        title: "Dasturlash",
        courses: [1, 2, 3, 4, 5],
    },
    {
        id: 2,
        title: "Dizayn",
        courses: [6, 7, 8, 9, 10],
    },
    {
        id: 3,
        title: "Marketing",
        courses: [11, 12],
    },
];

const courses = [
    {
        id: 1,
        title: "Forntend Foundation kursi",
        description: "Forntend Foundation kursi (HTML, CSS, JS) - boshlang'ich",
        price: 800000,
        dicount: 800000,
        img: "/assets/courses/frontend/web.jpg",
        intro: "/assets/courses/frontend/videos/intro.mp4",
        sources: [
            {
                id: 1,
                title: "Barcha Darslar",
                video: "/assets/courses/frontend/videos/1.mp4",
            },
        ],
        category: courseCategories[0].title,
    },
    {
        id: 2,
        title: "Backend NodeJS dasturlash kursi",
        description:
            "NodeJSda Backend dasturlash kursi (NodeJS, ExpressJS ...) - Yuqori",
        price: 1200000,
        dicount: 800000,
        img: "/assets/courses/backend/backend.png",
        intro: "/assets/courses/frontend/videos/intro.mp4",
        sources: [
            {
                id: 1,
                title: "Barcha Darslar",
                video: "/assets/courses/frontend/videos/1.mp4",
            },
        ],
        category: courseCategories[0].title,
    },
    {
        id: 3,
        title: "Telegram bot dasturlash kursi",
        description:
            "Telegram bot dasturlash kursi (PHP, MySQL, Telegram Bot API) - O'rta",
        price: 800000,
        dicount: 800000,
        img: "/assets/courses/frontend/web.jpg",
        intro: "/assets/courses/frontend/videos/intro.mp4",
        sources: [
            {
                id: 1,
                title: "Barcha Darslar",
                video: "/assets/courses/frontend/videos/1.mp4",
            },
        ],
        category: courseCategories[0].title,
    },
    {
        id: 4,
        title: "Forntend Foundation kursi",
        description: "Forntend Foundation kursi (HTML, CSS, JS) - boshlang'ich",
        price: 800000,
        dicount: 800000,
        img: "/assets/courses/frontend/web.jpg",
        intro: "/assets/courses/frontend/videos/intro.mp4",
        sources: [
            {
                id: 1,
                title: "Barcha Darslar",
                video: "/assets/courses/frontend/videos/1.mp4",
            },
        ],
        category: courseCategories[0].title,
    },
    {
        id: 5,
        title: "Forntend Foundation kursi",
        description: "Forntend Foundation kursi (HTML, CSS, JS) - boshlang'ich",
        price: 800000,
        dicount: 800000,
        img: "/assets/courses/frontend/web.jpg",
        intro: "/assets/courses/frontend/videos/intro.mp4",
        sources: [
            {
                id: 1,
                title: "Barcha Darslar",
                video: "/assets/courses/frontend/videos/1.mp4",
            },
        ],
        category: courseCategories[0].title,
    },
    {
        id: 6,
        title: "Grafik Dizayn kursi",
        description:
            "Grafik Dizayn kursi (Adobe Photoshop, Adobe Illustrator, Adobe XD, Figma) - boshlang'ich",
        price: 800000,
        dicount: 800000,
        img: "/assets/courses/design/design.png",
        intro: "/assets/courses/frontend/videos/intro.mp4",
        sources: [
            {
                id: 1,
                title: "Barcha Darslar",
                video: "/assets/courses/frontend/videos/1.mp4",
            },
        ],
        category: courseCategories[1].title,
    },
    {
        id: 7,
        title: "Forntend Foundation kursi",
        description: "Forntend Foundation kursi (HTML, CSS, JS) - boshlang'ich",
        price: 800000,
        dicount: 800000,
        img: "/assets/courses/frontend/web.jpg",
        intro: "/assets/courses/frontend/videos/intro.mp4",
        sources: [
            {
                id: 1,
                title: "Barcha Darslar",
                video: "/assets/courses/frontend/videos/1.mp4",
            },
        ],
        category: courseCategories[1].title,
    },
    {
        id: 8,
        title: "Forntend Foundation kursi",
        description: "Forntend Foundation kursi (HTML, CSS, JS) - boshlang'ich",
        price: 800000,
        dicount: 800000,
        img: "/assets/courses/frontend/web.jpg",
        intro: "/assets/courses/frontend/videos/intro.mp4",
        sources: [
            {
                id: 1,
                title: "Barcha Darslar",
                video: "/assets/courses/frontend/videos/1.mp4",
            },
        ],
        category: courseCategories[1].title,
    },
    {
        id: 9,
        title: "Forntend Foundation kursi",
        description: "Forntend Foundation kursi (HTML, CSS, JS) - boshlang'ich",
        price: 800000,
        dicount: 800000,
        img: "/assets/courses/frontend/web.jpg",
        intro: "/assets/courses/frontend/videos/intro.mp4",
        sources: [
            {
                id: 1,
                title: "Barcha Darslar",
                video: "/assets/courses/frontend/videos/1.mp4",
            },
        ],
        category: courseCategories[1].title,
    },
    {
        id: 10,
        title: "Forntend Foundation kursi",
        description: "Forntend Foundation kursi (HTML, CSS, JS) - boshlang'ich",
        price: 800000,
        dicount: 800000,
        img: "/assets/courses/frontend/web.jpg",
        intro: "/assets/courses/frontend/videos/intro.mp4",
        sources: [
            {
                id: 1,
                title: "Barcha Darslar",
                video: "/assets/courses/frontend/videos/1.mp4",
            },
        ],
        category: courseCategories[1].title,
    },
    {
        id: 11,
        title: "Forntend Foundation kursi",
        description: "Forntend Foundation kursi (HTML, CSS, JS) - boshlang'ich",
        price: 800000,
        dicount: 800000,
        img: "/assets/courses/frontend/web.jpg",
        intro: "/assets/courses/frontend/videos/intro.mp4",
        sources: [
            {
                id: 1,
                title: "Barcha Darslar",
                video: "/assets/courses/frontend/videos/1.mp4",
            },
        ],
        category: courseCategories[2].title,
    },
    {
        id: 12,
        title: "Forntend Foundation kursi",
        description: "Forntend Foundation kursi (HTML, CSS, JS) - boshlang'ich",
        price: 800000,
        dicount: 800000,
        img: "/assets/courses/frontend/web.jpg",
        intro: "/assets/courses/frontend/videos/intro.mp4",
        sources: [
            {
                id: 1,
                title: "Barcha Darslar",
                video: "/assets/courses/frontend/videos/1.mp4",
            },
        ],
        category: courseCategories[2].title,
    },
];

export { courseCategories, courses };
