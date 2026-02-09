import Wrapper from "@/components/atoms/Wrapper";

function SixthContainer() {
  return (
    <Wrapper className="bg-[url('/images/ISO/ISOAuditbg.webp')] bg-cover bg-center flex justify-center items-center h-auto lg:h-[412px]">
      <div className="flex flex-col justify-center items-center text-center gap-5 mt-8">
        <p className="lg:text-2xl text-xl font-bold">
          Environmental Sustainability
        </p>
        <div className="text-base">
          <p className="font-normal">
            Recognizing the critical global issue of climate change and
            implementing diverse programs to contribute to a positive
            environmental impact actively.
          </p>
          <p className="font-normal mt-6">
            Our commitment to resource conservation, recycling, and waste
            reduction at the source underscores our dedication to minimizing the
            environmental footprint of our operations. Notable practices include
            using energy-efficient infrastructure and equipment, such as
            printers, light sensors, bright office space and the establishment
            of LEED-certified locations. Furthermore, we adhere to responsible
            e-waste disposal, engaging only with authorized vendors approved by
            Pollution Control Boards.
          </p>
          <p className="font-normal">
            To foster environmental awareness among our employees, we initiate
            various CSR initiatives led by our staff. These initiatives aim to
            cultivate a shared understanding of the importance of environmental
            protection and resource conservation.
          </p>
        </div>
      </div>
    </Wrapper>
  );
}

export default SixthContainer;
