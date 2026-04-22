import HeroSection from "../components/ahad/HeroSection";
import StatisticsSection from "../components/ahad/StatisticsSection";
import BestProduct from "../components/emam/BestProduct";
import Features from "../components/munna/Features";
import Feedbacks from "../components/emam/Feedbacks";
import TrendingProducts from "../components/shourov/TrendingProducts";
import NewArrivals from "../components/shourov/NewArrivals";

export default function Home() {
    return (
        <>
            <HeroSection />
            <StatisticsSection />
            <BestProduct />
            <Feedbacks />
            <Features />
            <TrendingProducts />
            <NewArrivals />
        </>
    );
}
