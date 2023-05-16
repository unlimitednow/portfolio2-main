export default function handler(req, res) {
  // fetch your data here
  const content = {
    projects: [
      {
        project: "My Featured Project",
        url: "https://example.com",
        repo: "my-repo",
        descriptionTitle: "My Project Description",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        stack: ["React", "Next.js", "Framer Motion"],
        imageOptions: {},
        images: [
          {
            key: "image1",
            url: "https://res.cloudinary.com/unlimitednow/image/upload/v1674960871/samples/417f24e5-9e72-41ce-a4dd-f5d004b3c996.png",
            hover: "left",
            h: 300,
            w: 400,
          }
        ]
      },
      {
        project: "My Supply Co.",
        url: "https://mysupplyco.com",
        repo: "Private",
        descriptionTitle: "D2C & B2B ecommerce site and blog",
        description: "with elegant solutions for a complex codebase and customer journey.",
        imageOptions: [
        ],
        images: [
          { "key": "mock-stack",	"hover": "right", 	"h": "1200", "w": "556", "url": "/img/msc-mock_stack/03.png" },
          { "key": "mock-stack",	"hover": "right",	"h": "1200", "w": "556", "url": "/img/msc-mock_stack/02.png" },
          { "key": "mock-stack",	"hover": "left",	"h": "1200", "w": "556", "url": "/img/msc-mock_stack/01.png" }
        ],
        stack: [
          { "key": "php", 		"name": "PHP", 			"type": "devicon" },
          { "key": "google",		"name": "GA4/GTM/EEC", 	"type": "devicon" }
        ]
      },
      {
        project: "andrewnelson.net",
        url: "https://github.com/atlamors/portfolio",
        repo: "Public",
        descriptionTitle: "An open source portfolio",
        description: "built on Next.js and React. A fast and agile MERN stack single page application.",
        imageOptions: [
          { "key": "size", 		"value": "large" }
        ],
        images: [
          { "key": "portfolio", "hover": "left", "h": "797", "w": "556",  "url": "/img/portfolio-mock_single.png" }
        ],
        stack: [
          { "key": "nextjs", 		"name": "Next.js", 		"type": "devicon" },
          { "key": "git",			"name": "Git(Hub)", 	"type": "devicon" }
        ]
      }
    ]
  };
  
  // return the data as JSON
  res.status(200).json({ content });
}
