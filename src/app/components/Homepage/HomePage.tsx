import HomePageHeader from "@/app/components/Homepage/HomePageComponents/HomePageHeader";
import FooterComponent from "@/app/components/Homepage/FooterComponent";
import MadeByRollinBoat from "@/app/components/DeveloperCredit/MadeByRollinBoat";


export default function HomePage() {
    return (<>
            <HomePageHeader/>
            <FooterComponent/>
            <MadeByRollinBoat/>
        </>
    )
}