import Bar from "../../Components/ReusableBarCompo/bar";
import "./Podcastes.css";
import CardsProductsVid from "./ProductsComponents/CardsProductsVid/cardsProductsVid";
import HeaderProducts from "./ProductsComponents/HeaderProducts/headerProducts";
import MainProducts from "./ProductsComponents/MainProducts/mainProducts";

export default function Podcastes() {
  return (
    <div>
      <HeaderProducts />
      <MainProducts />
      <Bar
        pBar={"Stay Informed with Fresh Content"}
        hBar={"Latest Podcast Episodes"}
        rBAR={undefined}
        btnBar={undefined}
        barClass={undefined} rightBarss={undefined}      />
      <CardsProductsVid/>
    </div>
  );
}
