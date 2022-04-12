import { Outlet } from "react-router-dom";

import Directory from "../../components/directory/directory.component";
import CPU from "../../assets/homepage/cpu.jpg";

const Home = () => {

  const categories = [
    {
      "id": 1,
      "title": "CPU",
      "imageUrl": `${CPU}`
    },
    {
      "id": 2,
      "title": "jackets",
      "imageUrl": "https://i.ibb.co/px2tCc3/jackets.png"
    },
    {
      "id": 3,
      "title": "sneakers",
      "imageUrl": "https://i.ibb.co/0jqHpnp/sneakers.png"
    },
    {
      "id": 4,
      "title": "womens",
      "imageUrl": "https://i.ibb.co/GCCdy8t/womens.png"
    },
    {
      "id": 5,
      "title": "mens",
      "imageUrl": "https://i.ibb.co/R70vBrQ/men.png"
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