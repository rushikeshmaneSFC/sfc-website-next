function SecondComponent() {
  return (
    <div className="flex justify-center items-center mx-4 sm:px-6 md:px-12 lg:px-20 py-10 sm:py-16 lg:py-20 lg:h-[480px] md:h-auto h-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-7xl w-full">
        <div className="flex items-center justify-center">
          <img
            src="/images/Aboutus/Officeaboutus.webp"
            width={1220}
            height={688}
            alt="About us"
            className="w-full max-w-full h-auto object-cover rounded-lg"
          />
        </div>

        <div className="flex flex-col justify-center">
          <div className="space-y-4 sm:space-y-6">
            <p className="text-base leading-relaxed text-gray-800">
              We call ourselves a Tribe because we believe in something deeper
              than just being a team — we believe in belonging, trust, and
              shared purpose. Our Tribe is a collective of seasoned
              cybersecurity professionals, cloud engineers, architects, data
              scientists, and innovators who bring global expertise and local
              insight to every engagement.
            </p>
            <p className="text-base leading-relaxed text-gray-800">
              Founded by industry leaders previously who worked in global giants
              like Cisco, Microsoft, Wipro, and IBM; our journey began with a
              simple mission: to make security a catalyst, not a constraint for
              businesses. Over time, we&apos;ve grown into a vibrant,
              multi-disciplinary Tribe that combines traditional security wisdom
              with next-generation digital innovation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SecondComponent;
