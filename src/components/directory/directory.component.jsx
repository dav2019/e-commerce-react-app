import DirectoryItem from "../directory-item/directory-item.component";

import CPU from "../../assets/homepage/cpu.jpg"
import GPU from "../../assets/homepage/videocard.jpg";
import MOTHERBOARD from "../../assets/homepage/motherboard.jpg";
import RAM from "../../assets/homepage/ram.jpg";
import SSD from "../../assets/homepage/ssd.jpg";
import PSU from "../../assets/homepage/psu.jpg";
import PC from "../../assets/homepage/desktop-pc.jpg";
import COOLER from "../../assets/homepage/cooler.jpg";

import './directory.styles.scss'

const categories = [
  {
    id: 1,
    title: "CPUs",
    imageUrl: `${CPU}`,
    route: "shop/cpus"
  },
  {
    id: 2,
    title: "Video Cards",
    imageUrl: `${GPU}`,
    route: "shop/video cards"
  },
  {
    id: 3,
    title: "Motherboards",
    imageUrl: `${MOTHERBOARD}`,
    route: "shop/motherboards"
  },
  {
    id: 4,
    title: "RAMS",
    imageUrl: `${RAM}`,
    route: "shop/rams"
  },
  {
    id: 5,
    title: "Hard Drives & SSDs",
    imageUrl: `${SSD}`,
    route: "shop/hard drives & ssds"
  },
  {
    id: 6,
    title: "Power Supplies",
    imageUrl: `${PSU}`,
    route: "shop/power supplies"
  },
  {
    id: 7,
    title: "PC Cases",
    imageUrl: `${PC}`,
    route: "shop/pc cases"
  },
  {
    id: 8,
    title: "CPU Cooling",
    imageUrl: `${COOLER}`,
    route: "shop/cpu cooling"
  }
]

const Directory = () => {

    return (
        <div className="directory-container">
          {categories.map((category) => (
            <DirectoryItem key={category.id} category={category} />
          ))}
        </div>
      )
}

export default Directory;