//Pago Tienda Images
import projects_pago_tienda from "../assets/images/projects_pago_tienda.png";
import mockupBigPago from "../assets/images/mockupBigPago.png";
import mockupMidPago from "../assets/images/mockupMidPago.png";
import mockupSmPago from "../assets/images/mockupSmPago.png";
import studyMainPago from "../assets/images/study-main-pago.png";
import development1Pago from "../assets/images/development1-pago.png";
import development2Pago from "../assets/images/development2-pago.png";
import development3Pago from "../assets/images/development3-pago.png";
import figmaDesktopPago from "../assets/images/figmaDesktopPago.png";
import figmaMobilePago from "../assets/images/figmaMobilePago.png";

//Amazing Pet Grooming Images
import projects_grooming from "../assets/images/projects_grooming.png";
import mockupBigGrooming from "../assets/images/mockupBigGrooming.png";
import mockupMidGrooming from "../assets/images/mockupMidGrooming.png";
import mockupSmGrooming from "../assets/images/mockupSmGrooming.png";
import studyMainGrooming from "../assets/images/study-main-grooming.png";
import changes_grooming from "../assets/images/changes_grooming.png";
import booking_process from "../assets/images/booking_process.gif";
import figmaDesktopGrooming from "../assets/images/figmaDesktopGrooming.png";

//Copytrading
import projects_copy from "../assets/images/projects_copy.png";
import mockupBigUnitrade from "../assets/images/mockupBigUnitrade.png";
import mockupMidUnitrade from "../assets/images/mockupMidUnitrade.png";
import mockupSmUnitrade from "../assets/images/mockupSmUnitrade.png";

//Services
import website from "../assets/images/webDesign.png";
import sound_waves from "../assets/images/sound_waves.mp4";
import branding from "../assets/images/branding.jpeg";

const colors = {
  black: "#282828",
  white: "#FFFFFF",
  main: "#EF4E26",
  lightGray: "#F6F6F6",
  gray: "#808080",
  beige: "#FAF0E6",
};

const services = [
  {
    id: 1,
    title: "Web Design & Development",
    subtitle: "UX/UI Design Services",
    shortDescription:
      "Your website is the face of your business in the digital world. Our talented team of designers and developers create visually stunning, user-friendly websites that leave a lasting impression on your audience. <i class='orangeText'>With a focus on responsive design and seamless functionality, we ensure your online presence stands out.</i>",
    description:
      "We specialize in bringing your brand's online presence to life through innovative web design and development. Our team of creative minds and technical experts collaborates closely with you to create websites that not only captivate users but also drive tangible results. With a keen eye for aesthetics and user experience, we design websites that are visually stunning and highly intuitive. Whether it's a captivating landing page or a comprehensive e-commerce platform, our designs are tailored to resonate with your target audience, ensuring an engaging and memorable online journey. <br/> Behind every exceptional design is a robust development process. <br/> Our skilled developers employ cutting-edge technologies to build websites that are not only visually appealing but also function flawlessly across devices and platforms. We prioritize seamless navigation, fast loading times, and responsive layouts, guaranteeing an exceptional user experience for all visitors",
    image: website,
  },
  {
    id: 2,
    title: "Marketing & SEO",
    subtitle: "",
    shortDescription:
      "Unlock the true potential of organic search traffic with our data-driven SEO strategies. <i class='orangeText'>We utilize the latest tools and industry insights to optimize your website's ranking on search engines, driving a steady stream of targeted traffic to your site.</i>",
    description:
      "We specialize in bringing your brand's online presence to life through innovative web design and development. Our team of creative minds and technical experts collaborates closely with you to create websites that not only captivate users but also drive tangible results. With a keen eye for aesthetics and user experience, we design websites that are visually stunning and highly intuitive. Whether it's a captivating landing page or a comprehensive e-commerce platform, our designs are tailored to resonate with your target audience, ensuring an engaging and memorable online journey. <br/> Behind every exceptional design is a robust development process. <br/> Our skilled developers employ cutting-edge technologies to build websites that are not only visually appealing but also function flawlessly across devices and platforms. We prioritize seamless navigation, fast loading times, and responsive layouts, guaranteeing an exceptional user experience for all visitors",

    image: sound_waves,
  },
  {
    id: 3,
    title: "Branding",
    subtitle: "",
    shortDescription:
      "Leverage the power of email campaigns to nurture leads and maintain customer relationships. <i class='orangeText'>Our team of experts will help you create and execute email marketing strategies that drive conversions and increase revenue.</i>",
    description:
      "We specialize in bringing your brand's online presence to life through innovative web design and development. Our team of creative minds and technical experts collaborates closely with you to create websites that not only captivate users but also drive tangible results. With a keen eye for aesthetics and user experience, we design websites that are visually stunning and highly intuitive. Whether it's a captivating landing page or a comprehensive e-commerce platform, our designs are tailored to resonate with your target audience, ensuring an engaging and memorable online journey. <br/> Behind every exceptional design is a robust development process. <br/> Our skilled developers employ cutting-edge technologies to build websites that are not only visually appealing but also function flawlessly across devices and platforms. We prioritize seamless navigation, fast loading times, and responsive layouts, guaranteeing an exceptional user experience for all visitors",
    image: branding,
  },
];

const projects = [
  // Amazing pet grooming
  {
    id: 1,
    completed: true,
    info: {
      link: "amazing-pet-grooming",
      title: "Amazing Pet Grooming",
      place: "Canada",
      date: "2023",
      tags: ["UI Design", "Web Development"],
      technologies: ["React JS", "GSAP", "Tailwind CSS"],
    },
    image: projects_grooming,
    mockupImages: {
      big: mockupBigGrooming,
      mid: mockupMidGrooming,
      sm: mockupSmGrooming,
    },
    studyCase: {
      image: studyMainGrooming,
      meet: "AmazingPetGrooming, a family-owned business devoted to animal welfare. With branches in Hamilton and Cambridge, Ontario, they offer top-tier care for cats and dogs of all breeds and sizes. The experienced team provides tailored grooming services, ensuring your pet comfort and happiness. From soothing baths to precise trims, the team prioritize your pet well-being, aiming to enhance their health and appearance. Experience their dedicated approach to pet grooming by scheduling an appointment at either location and witnessing the positive impact on your furry companions lives.",
      background:
        "In Canada, a country known for its extreme temperature changes and variations in sunlight exposure, people often experience mood swings that can make mental health somewhat fragile. As a result, individuals turn to different methods to address this issue, with the companionship of a pet proving to be one of the most effective ways to tackle this problem. Just as they care for our mental well-being with loyalty and love, we must provide them with the appropriate care to keep them clean and happy. This feeling of owing is where the concept of AmazingPetGrooming for pet care was born, offering personalized and top-quality services in response to this need.",
      development: [
        {
          image: changes_grooming,
          title: "Organization and Changes.",
          description:
            "The development of Amazing Pet Grooming was built upon an existing webpage, which could be referred to as version 1.0. However, it needed more dynamism and contained many repetitive and unappealing designs for both leads and customers. This previous situation led to a complete page redesign, focusing on animations, organization, selection menus, and overall visual content.",
        },
        {
          image: booking_process,
          title: "Booking Process",
          description:
            "For the booking process, whether it's for a cat or a dog, you will be presented with various services for your pet, ranging from care like hair cutting to a spa day. Once you choose the desired service, you will be asked for additional information, such as your preferred location and the type of package you'd like. In the case of a dog, you will be prompted to indicate its size based on the provided 3D models, ranging from S to XL. After completing these steps, you will have the option to choose a specific member of Amazing Pet Grooming. Next, a confirmation screen will appear, and a calendar will be displayed to finalize the booking. At that point, your appointment will be set, ensuring that your pet receives the best possible care.",
        },
      ],
      challenges:
        "Developing this project not only allowed us to connect with our pets and appreciate the excellent care provided to them, but also incorporates innovative design techniques. These techniques include the use of 3D elements to offer users a more comprehensive and interactive guide. Furthermore, multiple features have been integrated, such as maps.",
      figmaDesigns: [figmaDesktopGrooming],
      designSystem: {
        typography: [
          { heading: "H1 heavy", desktop: "171px", mobile: "80px" },
          { heading: "H2 heavy", desktop: "80px", mobile: "60px" },
          { heading: "H3 heavy", desktop: "50px", mobile: "40px" },
          { heading: "H4 medium", desktop: "45px", mobile: "30px" },
          { heading: "H5 regular", desktop: "36px", mobile: "24px" },
          { heading: "p regular", desktop: "16px", mobile: "16px" },
        ],
        colors: [
          { name: "Primary", hex: "#65BFF8" },
          { name: "Secondary", hex: "#DDF2FF" },
          { name: "White", hex: "#FFFFFF" },
          { name: "Black", hex: "#2A2A2A" },
          { name: "Gray", hex: "#949494" },
          { name: "Purple", hex: "#7B1DF4" },
          { name: "Pink", hex: "#DF2C7C" },
          { name: "Blue", hex: "#3977EC" },
        ],
      },
    },
  },

  // Pago Tienda
  {
    id: 2,
    completed: true,
    info: {
      link: "pago-tienda",
      title: "Pago Tienda",
      place: "Argentina",
      date: "2023",
      tags: ["UI Design", "Web Development"],
      technologies: ["React JS", "GSAP", "Tailwind CSS"],
    },
    image: projects_pago_tienda,
    mockupImages: {
      big: mockupBigPago,
      mid: mockupMidPago,
      sm: mockupSmPago,
    },
    studyCase: {
      image: studyMainPago,
      meet: "Pago Tienda is a web page where business partners exhibit and market their products or services so customers can purchase them. Pago Tienda Integrates the cryptocurrency payment method that is currently relatively recent and innovative in Argentina.",
      background:
        "In a market that is expanding in large proportions, not only in the Argentine region, it is vital to access the most significant number of products or services quickly and easily. In the case of Argentina, due to its current economic situation, which is not favorable at all, the local currency has been devalued abysmally. This event has caused the inhabitants of this country to be forced to resort to different ways of preserving liquidity, such as dollars or cryptocurrencies. This situation has motivated the Pago Tienda team to design an online store with payment options like cryptocurrencies.",
      development: [
        {
          image: development1Pago,
          title: "Registration processes.",
          description:
            "During the registration process, new users will be asked for information such as their email address, name, and preferred addresses for frequent locations, and finally, the user will be asked to use the pre-designed cryptocurrency wallet to facilitate future payments.",
        },
        {
          image: development2Pago,
          title: "Organization and features.",
          description:
            "Pago Tienda was developed in different phases. The first was to study the popularity of cryptocurrencies in the region. During the second phase, establishments and businesses willing to accept cryptocurrency payments were sought. The third phase was to design the web page and the fourth phase was to develop the web page.",
        },
        {
          image: development3Pago,
          title: "Purchase processes.",
          description:
            "Once you have selected all the products you want, there will be a section called the cart, the section to make payment for your purchase. You will be asked for certain information such as delivery address and customer name. For payment, in this case, with the integrated method of payment with cryptocurrencies that are linked to the wallet developed to make the purchase process more accessible, a deposit of the crypto with which you decide to pay will be made, and now you just have to wait and enjoy your order.",
        },
      ],
      challenges:
        "During the development, we gained experience in designing and creating e-commerce type online stores, including their respective sections, shopping carts, and product categorization. An additional challenge for this case was integrating PagoLinea with PagoTienda, a solution designed to streamline the purchasing process.",
      figmaDesigns: [figmaDesktopPago, figmaMobilePago],
      designSystem: {
        typography: [
          { heading: "H1 bold", desktop: "64px", mobile: "32px" },
          { heading: "H2 bold", desktop: "48px", mobile: "24px" },
          { heading: "H3 bold", desktop: "32px", mobile: "22px" },
          { heading: "H5 medium", desktop: "22px", mobile: "20px" },
          { heading: "P regular", desktop: "16px", mobile: "14px" },
        ],
        colors: [
          { name: "Primary", hex: "#960FCC" },
          { name: "Secondary", hex: "#F7EEFB" },
          { name: "White", hex: "#FFFFFF" },
          { name: "Black", hex: "#3E3E3E" },
          { name: "Dark blue", hex: "#28292C" },
          { name: "Gray", hex: "#828385" },
          { name: "Light gray", hex: "#B0B0B0" },
          { name: "Main gradient", hex: "#640A88" },
        ],
      },
    },
  },

  //Soon
  {
    id: 3,
    completed: false,
    info: {
      link: "pago-tienda",
      title: "UnitradeFX",
      place: "Argentina",
      date: "2023",
      tags: ["UI Design", "Web Development"],
      technologies: ["React JS", "GSAP", "Tailwind CSS"],
    },
    image: projects_copy,
    mockupImages: {
      big: mockupBigUnitrade,
      mid: mockupMidUnitrade,
      sm: mockupSmUnitrade,
    },
    studyCase: {
      image: "/images/study-main-pago.png",
      meet: "Pago Tienda is a web page where business partners exhibit and market their products or services so customers can purchase them. Pago Tienda Integrates the cryptocurrency payment method that is currently relatively recent and innovative in Argentina.",
      background:
        "In a market that is expanding in large proportions, not only in the Argentine region, it is vital to access the most significant number of products or services quickly and easily. In the case of Argentina, due to its current economic situation, which is not favorable at all, the local currency has been devalued abysmally. This event has caused the inhabitants of this country to be forced to resort to different ways of preserving liquidity, such as dollars or cryptocurrencies. This situation has motivated the Pago Tienda team to design an online store with payment options like cryptocurrencies.",
      development: [
        {
          image: "/images/development1-pago.png",
          title: "Registration processes.",
          description:
            "To create a groundbreaking operating experience, the NODO Film Systems allowed camera operators to adjust the weight of the wheels, control mass and drag, and create different camera simulations.",
        },
        {
          image: "/images/development1-pago.png",
          title: "Organization and features.",
          description:
            "To create a groundbreaking operating experience, the NODO Film Systems allowed camera operators to adjust the weight of the wheels, control mass and drag, and create different camera simulations.",
        },
        {
          image: "/images/development3-pago.png",
          title: "Purchase processes.",
          description:
            "To create a groundbreaking operating experience, the NODO Film Systems allowed camera operators to adjust the weight of the wheels, control mass and drag, and create different camera simulations.",
        },
      ],
      challenges:
        "To create a groundbreaking operating experience, the NODO Film Systems allowed camera operators to adjust the weight of the wheels, control mass and drag, and create different camera simulations.",
      figmaDesigns: [
        "/images/figmaDesktopPago.png",
        "/images/figmaMobilePago.png",
      ],
      designSystem: {
        typography: [
          { heading: "H1 bold", desktop: "64px", mobile: "32px" },
          { heading: "H2 bold", desktop: "48px", mobile: "24px" },
          { heading: "H3 bold", desktop: "32px", mobile: "22px" },
          { heading: "H5 medium", desktop: "22px", mobile: "20px" },
          { heading: "P regular", desktop: "16px", mobile: "14px" },
        ],
        colors: [
          { name: "Primary", hex: "#960FCC" },
          { name: "Secondary", hex: "#F7EEFB" },
          { name: "White", hex: "#FFFFFF" },
          { name: "Black", hex: "#3E3E3E" },
          { name: "Dark blue", hex: "#28292C" },
          { name: "Gray", hex: "#828385" },
          { name: "Light gray", hex: "#B0B0B0" },
          { name: "Main gradient", hex: "#640A88" },
        ],
      },
    },
  },
];

const processes = [
  {
    title: "Strategy",
    description:
      "We kickstart every project with a data-driven strategy that sets the foundation for your success. Our team dives deep into market insights, customer behavior, and industry trends to craft a tailored plan that aligns with your goals.",
  },
  {
    title: "Design",
    description:
      "Our design wizards bring imagination to life, conjuring captivating visuals that leave a lasting impression. From sleek interfaces to stunning graphics, we create an enchanting user experience that keeps visitors spellbound.",
  },
  {
    title: "Development",
    description:
      "Our development sorcerers work their magic, transforming design into functional reality. With cutting-edge technology and meticulous attention to detail, we weave a seamless web of code that powers your website's performance.",
  },
];
export { colors, services, projects, processes };
