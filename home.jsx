import Herosection from "../components/herosection";
import OurMenu from "../components/OurMenu";
import WeProvide from "../components/WeProvide";
import Event from "../components/Event";
import CustomerSay from "../components/CustomerSay";
import VideoSection from "../components/VideoSection";

function Home() {
    return (
        <>
        <div style={{marginTop:"120px"}}>
            <Herosection />
            <OurMenu/>
            <WeProvide/>
            <Event/>
            <CustomerSay/>
            
        </div>
        </>
    )
}
export default Home;