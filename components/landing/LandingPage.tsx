import LandingFearlessly from "./LandingFearlessly/LandingFearlessly";
import LandingHerosection from "./LandingHerosection/LandingHerosection";
import LandingInsights from "./LandingInsights/LandingInsights";
import LandingManagedService from "./LandingManagedService/LandingManagedService";
import LandingPageSecuringSector from "./LandingPageSecuringSector/LandingPageSecuringSector";
import LandingThreats from "./LandingThreats/LandingThreats";
import LandingVigileChoose from "./LandingVigileChoose/LandingVigileChoose";
import LandingVigileframework from "./LandingVigileframework/LandingVigileframework";
import OurPartners from "./OurPartners/OurPartners";
import Whatwedo from "./Whatwedo/Whatwedo";

export default function LandingPage() {
  const customCss = window.innerWidth < 768 ? "bg-cover" : "bg-top";

  return (
    <>
      {/* <LandingHerosection /> */}

      {/* <div
        className={`bg-no-repeat pb-9 w-full overflow-hidden 2xl:bg-cover 2xl:bg-right   ${customCss}`}
        style={{
          backgroundImage: `url("${
            window.innerWidth < 768
              ? "/images/Landingpage/mobile-bg-top-img.webp"
              : "/images/Landingpage/horizontal-scroll-bg.webp"
          }")`,
        }}
      >
        <LandingVigileframework />
        <LandingVigileChoose />
      </div>
      <Whatwedo /> */}
      {/* <LandingPageCard customCss={customCss} /> */}

      {/* <OurPartners /> */}
      <div className=" bg-no-repeat bg-cover bg-center object-contain bg-[url('/images/Landingpage/SecuringSector_Bg.jpg')]">
        <LandingManagedService />
        <LandingPageSecuringSector />
      </div>
      <div className="bg-no-repeat bg-cover bg-center object-contain bg-[url('/images/Landingpage/Innovate_Fearlessly_Bg.jpg')]">
        <LandingThreats />
        <LandingFearlessly />
        <LandingInsights />
      </div>
    </>
  );
}
