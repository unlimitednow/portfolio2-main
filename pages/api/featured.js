export default function handler(req, res) {
    // fetch your data here
    const content = {
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
  
