export default function handler(req, res) {
    // fetch your data here
    const content = {
		"project": "My Supply Co.",
		"url": "https://mysupplyco.com",
		"repo": "Private",
		"descriptionTitle": "D2C & B2B ecommerce site and blog",
		"description": "with elegant solutions for a complex codebase and customer journey.",
		"imageOptions": [
		],
		"images": [
			{ "key": "mock-stack",	"hover": "right", 	"h": "1200", "w": "556", "url": "/img/msc-mock_stack/03.png" },
			{ "key": "mock-stack",	"hover": "right",	"h": "1200", "w": "556", "url": "/img/msc-mock_stack/02.png" },
			{ "key": "mock-stack",	"hover": "left",	"h": "1200", "w": "556", "url": "/img/msc-mock_stack/01.png" }
		],
		"stack": [
			{ "key": "php", 		"name": "PHP", 			"type": "devicon" },
			{ "key": "mysql", 		"name": "mySQL", 		"type": "devicon" },
			{ "key": "javascript", 	"name": "JavaScript", 	"type": "devicon" },
			{ "key": "jquery", 		"name": "jQuery", 		"type": "devicon" },
			{ "key": "woocommerce", "name": "WooCommerce", 	"type": "devicon" },
			{ "key": "wordpress",	"name": "Wordpress", 	"type": "devicon" },
			{ "key": "html5",		"name": "HTML5", 		"type": "devicon" },
			{ "key": "css3",		"name": "CSS3", 		"type": "devicon" },
			{ "key": "sass",		"name": "SCSS", 		"type": "devicon" },
			{ "key": "git",			"name": "Git(Hub)", 	"type": "devicon" },
			{ "key": "google",		"name": "GA4/GTM/EEC", 	"type": "devicon" }
		]
	};
  
    // return the data as JSON
    res.status(200).json({ content });
  }
  
