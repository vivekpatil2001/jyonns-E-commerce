import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Banner01 from "../../Images/banner01.jpg";
import Banner02 from "../../Images/banner02.jpg";
import Banner03 from "../../Images/banner03.jpg";
import HomeCarousel from '../../components/HomeCarousel/HomeCarousel';
import { womenTops} from "../../Data/Women/top"
import { womenDress} from "../../Data/Women/dress"
import { womenJeans } from '../../Data/Women/jeans';
import { womenSaree } from '../../Data/Women/saree';
import Footer from '../../components/Footer/Footer';


function Home() {
  return (
    <div>
        <Navbar/>
        <div id="carouselExampleAutoplaying" class="carousel slide " data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={Banner02} class="d-block w-100 h-[520px]" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={Banner01} class="d-block w-100 h-[520px]" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={Banner03} class="d-block w-100 h-[520px]" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

<HomeCarousel data={ womenDress} sectionName={"Women's Dress"}/>

<HomeCarousel data={ womenSaree} sectionName={"Women's Saree"}/>

<HomeCarousel data={ womenTops} sectionName={"Women's Tops"}/>

<HomeCarousel data={ womenJeans} sectionName={"Women's Jeans"}/>

<hr/>
<Footer/>
    </div>
  )
}

export default Home