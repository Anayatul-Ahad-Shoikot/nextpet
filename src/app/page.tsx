import Image from "next/image";
import BestProduct from "../components/emam/BestProduct";
import Feedbacks from "../components/emam/Feedbacks";

export default function Home() {
    return (
        <>
            {/* // <div className="container">
            //     <h1 className="text-6xl text-red-600">HEllO WORLD</h1>
            // </div> */}
            <BestProduct />
            <Feedbacks />
        </>
    );
}
