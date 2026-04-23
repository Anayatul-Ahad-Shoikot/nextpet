import visitors from "@/src/assets/icons/monthly_visitors.svg";
import post from "@/src/assets/icons/pet_care_post.svg";
import tips from "@/src/assets/icons/help_tips.svg";
import awards from "@/src/assets/icons/pet_awards.svg";
import all_visitors from "@/src/assets/icons/all_visitors.svg";
import StatCard from "../StatCard";

const StatisticsSection = () => {
    return (
        <section>
            <div className="py-[150px] px-10 bg-secondary-peach">
                <div className="container">
                  <div className="flex justify-between gap-[50px] wrap">
                    <StatCard img={visitors} title="220K+" info="Monthly Visitors"/>
                    <StatCard img={post} title="140+" info="Pet Care Posts"/>
                    <StatCard img={tips} title="220K+" info="Helpful Tips"/>
                    <StatCard img={awards} title="50m+" info="Pet Awards"/>
                    <StatCard img={all_visitors} title="150+" info="All Time Visitors"/>
                  </div>
                </div>
            </div>
        </section>
    );
};

export default StatisticsSection;
