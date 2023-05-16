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
        
      ],
    };
  
    // return the data as JSON
    res.status(200).json({ content });
  }
  
