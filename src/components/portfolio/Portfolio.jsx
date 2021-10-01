// TODO: import necessary files from React and Stylesheet file
// // TODO: import domy data
import { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";
// TODO: import Data from the domy data
import {
  featuredPortfolio,
  collaborativePortfolio,
  personnelPortfolio,
  designPortfolio,
  contentPortfolio,
} from "../../data";

export default function Portfolio() {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "personnel",
      title: "Personnel App",
    },
    {
      id: "collaborative",
      title: "Collaborative App",
    },
    {
      id: "design",
      title: "Design",
    },
    {
      id: "content",
      title: "Content",
    },
  ];
// TODO: UseEffect to switch between list titles
  useEffect(() => {
    switch (selected) {
      case "featured":
        setData(featuredPortfolio);
        break;
      case "personnel":
        setData(personnelPortfolio);
        break;
      case "collaborative":
        setData(collaborativePortfolio);
        break;
      case "design":
        setData(designPortfolio);
        break;
      case "content":
        setData(contentPortfolio);
        break;
      default:
        setData(featuredPortfolio);
    }
  }, [selected]);

  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
      
        {list.map((item) => (
          <PortfolioList key={item.id}
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((d) => (
          <div key={d.id} className="item">
            <a href={d.link}>
              <img
                src={d.img}
                alt=""
              />
            </a>
            <h3>{d.title}</h3>
          </div>
        ))}
        {/* <button type="submit">Send</button> */}

      </div>
    </div>
  );
}
