type Project = {
  id: number;
  completed: boolean;
  info: {
    link: string;
    title: string;
    place: string;
    date: string;
    tags: string[];
    technologies: string[];
  };
  image: string;
  mockupImages: {
    big: string;
    mid: string;
    sm: string;
  };
  studyCase: {
    image: string;
    meet: string;
    background: string;
    development: {
      image: string;
      title: string;
      description: string;
    }[];
    challenges: string;
    figmaDesigns: string[];
    designSystem: {
      typography: {
        heading: string;
        desktop: string;
        mobile: string;
      }[];
      colors: {
        name: string;
        hex: string;
      }[];
    };
  };
};
