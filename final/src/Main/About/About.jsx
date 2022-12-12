import SloganPage from "./SloganPage";
import Features from "./Features";
import Bonus from "./Bonus";
import Interview from "./Interview";
import Introduction from "./Introduction";

function About() {
    return (
        <div className="main__about">
            <SloganPage/>
            <Introduction/>
            <Features/>
            <Interview/>
            <Bonus/>
        </div>
    );
}

export default About;