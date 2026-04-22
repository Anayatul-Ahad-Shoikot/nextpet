import HeroSection from "../components/ahad/HeroSection";
import StatisticsSection from "../components/ahad/StatisticsSection";
import BestProduct from "../components/emam/BestProduct";

export default function Home() {
    return (
        <>
            {/* // <div className="container">
            //     <h1 className="text-6xl text-red-600">HEllO WORLD</h1>
            // </div> */}
            <HeroSection />
            <StatisticsSection />
            <BestProduct />
        </>
    );
}
