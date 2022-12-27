import portfolio from "../Images/portfolio/portfolio.png";
import pungent from "../Images/portfolio/pungent.png";
import minimog from "../Images/portfolio/baby-store.png";
import okiro from "../Images/portfolio/okiro.png";
import grover from "../Images/portfolio/grover.png";
import login from "../Images/portfolio/login.png";

const DATA = {
  portfolioLink: [
    {
      id: "1",
      to: "#",
      text: "All",
    },
    {
      id: "2",
      to: "#",
      text: "E-Commerce",
    },
    {
      id: "3",
      to: "#",
      text: "Landing",
    },
    {
      id: "4",
      to: "#",
      text: "Portfolio",
    },
    {
      id: "5",
      to: "#",
      text: "Dashboard",
    },
    {
      id: "6",
      to: "#",
      text: "Blog",
    },
  ],
  card: [
    {
      to: "https://mahade-vai-test.vercel.app/",
      img: minimog,
      title: "Minimog",
      description: "Live Preview",
      category: "E-Commerce",
    },
    {
      to: "https://portfolio-mu-nine-36.vercel.app/",
      img: portfolio,
      title: "Portfolio",
      description: "Live Preview",
      category: "Portfolio",
    },
    {
      to: "https://pungent-rho.vercel.app/",
      img: pungent,
      title: "Landing",
      description: "Live Preview",
      category: "Landing",
    },
    {
      to: "https://facit-six.vercel.app/",
      img: login,
      title: "Dashboard",
      description: "Live Preview",
      category: "Dashboard",
    },
    {
      to: "https://okiro-eight.vercel.app/",
      img: okiro,
      title: "Blog",
      description: "Live Preview",
      category: "Blog",
    },
    {
      to: "https://grover.vercel.app/",
      img: grover,
      title: "E-Commerce",
      description: "Live Preview",
      category: "E-Commerce",
    },
  ],
};

export default DATA;
