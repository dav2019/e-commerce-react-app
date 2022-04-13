import { Outlet } from "react-router-dom";

import Directory from "../../components/directory/directory.component";
import CPU from "../../assets/homepage/cpu.jpg";
import GPU from "../../assets/homepage/videocard.jpg";
import MOTHERBOARD from "../../assets/homepage/motherboard.jpg";
import RAM from "../../assets/homepage/ram.jpg";
import SSD from "../../assets/homepage/ssd.jpg";
import PSU from "../../assets/homepage/psu.jpg";
import PC from "../../assets/homepage/desktop-pc.jpg";
import COOLER from "../../assets/homepage/cooler.jpg";

const Home = () => {

  const categories = [
    {
      "id": 1,
      "title": "CPUs",
      "imageUrl": `${CPU}`
    },
    {
      "id": 2,
      "title": "Video Cards",
      "imageUrl": `${GPU}`
    },
    {
      "id": 3,
      "title": "Motherboards",
      "imageUrl": `${MOTHERBOARD}`
    },
    {
      "id": 4,
      "title": "RAMS",
      "imageUrl": `${RAM}`
    },
    {
      "id": 5,
      "title": "Hard Drives & SSDs",
      "imageUrl": `${SSD}`
    },
    {
      "id": 6,
      "title": "Power Supplies",
      "imageUrl": `${PSU}`
    },
    {
      "id": 7,
      "title": "PC Cases",
      "imageUrl": `${PC}`
    },
    {
      "id": 8,
      "title": "CPU Cooling",
      "imageUrl": `${COOLER}`
    }
  ]

  return (
    <div>
      <Directory categories={categories} />
      <Outlet />
    </div>
  )
  
};

export default Home