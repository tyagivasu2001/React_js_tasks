import React,{useState} from "react";
import "./Home.scss";
import Navbar from "../components/Navbar";
import Product from "../components/product";
import { useNavigate } from "react-router-dom";
import Productfilter from "../components/Productfilter";
import { GiHamburgerMenu } from "react-icons/gi";

let dummy = [
  { id:1,
    rating:4.5,
    review:400,
    price:500,
    category:"Nutrients",
    name: "Enzyme Miracle",
    src: "https://cdn.shopify.com/s/files/1/0058/2647/8126/products/enzyme-miracle-main_1512x.jpg?v=1649202776",
    alt: "product image",
    disc: "Enzymes completely digest to your pet's food, helping break up proteins, fats, and starches into usable nutrients. Complete digestion is known to reduce toxins, yeast, fungi, and bacteria that tend to build up over time. Improve digestion is linked with  Improved elimination and digestive regularity.",
  },
  { id:2,
    rating:4.0,
    review:800,
    price:1500,
    category:"Medicine",
    name: "petVit",
    src: "https://cdn.shopify.com/s/files/1/0565/8021/0861/products/Frame1_0e02ac88-1b01-4373-a909-8ea38f50ab5f.png?v=1655878940",
    alt: "product image",
    disc: "Petvit Calming tablets helps in Travelling stress, Motion sickness, Stress induced behavioural problems (during fireworks, excessive barking and aggression) Grooming stress. Petvit Calming tablets contain Chamomile proven stress reliever that promotes general relaxation.",
  },
  { id:3,
    rating:3.5,
    review:700,
    price:750,
    category:"Nutrients",
    name: "canniVin",
    src: "https://www.furballstory.com/wp-content/uploads/2023/01/4-2.jpg",
    alt: "product image",
    disc: " This oral supplement helps you provide multi-vitamins to your dog and Cats using spray shots with utmost ease. Packed with vitamins like Vit. A, B1, B3, B7, D3, B12, E, and C, these tablets prevent fatigue, mental dullness, weakness, hair shedding, hair loss, dry & flaky skin",
  }
];

const Home = () => {
  const nav = useNavigate();
  const [toggleMenu, setToggleMenu] = useState(false);
 
  function handleproduct(id)
  {
    nav(`/${id}`,{ state:{dummy}})
  }
  
  return (
    <div>
      <Navbar name="Home" className="navbar"/>
      <div className="hamburger-menu">
        <div onClick={() => setToggleMenu(!toggleMenu)}>
          <GiHamburgerMenu/>
        </div>
        <h4>Filter</h4>
        </div>
      <div id="flex">
      <div id="filter" >
      <div className={`${toggleMenu ? "active" : "menu"}`}>
          <Productfilter/>
        </div>
        </div>
      <div className="product">
        {dummy.map((pro) => (
            <Product key={pro.id}
              name={pro.name}
              src={pro.src}
              alt={pro.alt}
              disc={pro.disc}
              id={pro.id}
              handleproduct={handleproduct}
            />
        ))}
      </div>
    </div>
    </div>
  );
};
export default Home;

