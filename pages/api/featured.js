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
          url: "https://res.cloudinary.com/unlimitednow/image/upload/v1679988222/samples/c6ac1dc1-1a49-4fc0-b6ec-ffe8f4d775f2.png",
          hover: "left",
          h: 300,
          w: 400,
        },
        {
          key: "image2",
          url: "/image2.jpg",
          hover: "right",
          h: 300,
          w: 400,
        },
      ],
    };
  
    // return the data as JSON
    res.status(200).json({ content });
  }
  
