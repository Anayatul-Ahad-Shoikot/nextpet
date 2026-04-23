import NewArrivals from "../components/shourov/NewArrivals";
import TrendingProducts from "../components/shourov/TrendingProducts";
import HeroSection from "../components/ahad/HeroSection";
import StatisticsSection from "../components/ahad/StatisticsSection";
import BestProduct from "../components/emam/BestProduct";
import Feedbacks from "../components/emam/Feedbacks";
import Features from "../components/munna/Features";
import DiscountSection from "../components/ahad/DiscountSection";

export default function Home() {
	return (
		<>
			<HeroSection />
			<StatisticsSection />
			<DiscountSection />
			<TrendingProducts />
			<NewArrivals />
			<BestProduct />
			<Feedbacks />
			<Features />
		</>
	);
}
