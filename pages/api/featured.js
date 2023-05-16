export default function handler(req, res) {
    // fetch your data here
    const content = {
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
        },
        {
          key: "image2",
          url: "public/img/msc-mock_stack/01.png",
          hover: "right",
          h: 300,
          w: 400,
        },
      ],
    }, {
      project: "My Featured Project",
		"url": "https://github.com/atlamors/portfolio",
		"repo": "Public",
		"descriptionTitle": "An open source portfolio",
		"description": "built on Next.js and React. A fast and agile MERN stack single page application.",
		"imageOptions": [
			{ "key": "size", 		"value": "large" }
		],
		"images": [
			{ "key": "portfolio", "hover": "left", "h": "797", "w": "556",  "url": "/img/portfolio-mock_single.png" }
		],
		"stack": [
			{ "key": "nextjs", 		"name": "Next.js", 		"type": "devicon" },
			{ "key": "react", 		"name": "React", 		"type": "devicon" },
			{ "key": "nodejs", 		"name": "Node.js", 		"type": "devicon" },
			{ "key": "mongodb", 	"name": "MongoDB", 		"type": "devicon" },
			{ "key": "javascript", 	"name": "JavaScript", 	"type": "devicon" },
			{ "key": "html5",		"name": "HTML5", 		"type": "devicon" },
			{ "key": "css3",		"name": "CSS3", 		"type": "devicon" },
			{ "key": "sass",		"name": "SCSS", 		"type": "devicon" },
			{ "key": "git",			"name": "Git(Hub)", 	"type": "devicon" }
		]
	};
  
    // return the data as JSON
    res.status(200).json({ content });
  }
  
