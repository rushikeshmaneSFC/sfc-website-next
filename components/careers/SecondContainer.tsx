"use client";

import Wrapper from "@/components/atoms/Wrapper";
import ReusableBtn from "@/components/atoms/ReusableBtn";

export default function SecondContainer() {
  return (
    <>
      <Wrapper className="flex justify-center items-center my-8">
        <div>
          <p className="text-base font-bold">
            St. Fox isn&apos;t just a company; it&apos;s a community. A vibrant tapestry
            woven from passionate individuals, united by a shared belief in the
            power of good culture, unwavering integrity, and the boundless
            potential of diversity.
          </p>
          <div className="my-8">
            <p className=" my-6">
              <span className="text-[#223780] font-bold">Burning Bright: </span>
              A Culture Fueled by Passion
            </p>
            <p>
              At St. Fox, passion isn&apos;t just a buzzword; it&apos;s the lifeblood that
              pumps through the veins of every project, every interaction, every
              endeavor. We believe that when people ignite their passions, they
              illuminate the world around them. That&apos;s why we foster an
              environment where curiosity is celebrated, creativity is
              encouraged, and innovation thrives. We empower our people to take
              ownership, push boundaries, and chase ambitious dreams. Because
              when passion meets purpose, anything is possible.
            </p>
          </div>
          <div className="my-8">
            <p className="text-[#223780] font-bold my-6">
              Building a Better Tomorrow, Together A Culture Fueled by Passion
            </p>
            <p>
              At St. Fox, we understand that true success is built on a
              foundation of strong values. We believe in creating a culture
              where everyone feels valued, respected, and heard. We champion
              diversity and inclusion, knowing that different perspectives make
              us stronger, more innovative, and more attuned to the needs of the
              world around us.
            </p>
          </div>
          <div className="my-8">
            <p className="text-[#223780] font-bold my-6">
              Integrity: Our Guiding Light
            </p>
            <p>
              In everything we do, integrity is our guiding light. We operate
              with transparency, honesty, and fairness, both within our walls
              and in our dealings with the outside world. We believe that trust
              is the cornerstone of lasting relationships, and we strive to earn
              that trust every single day.
            </p>
          </div>
          <div className="my-8">
            <p className="text-[#223780] font-bold my-6">
              Diversity: Our Superpower
            </p>
            <p>
              At St. Fox, we embrace the richness of diversity. We believe that
              our differences are not just strengths; they are superpowers. We
              bring together people from all walks of life, with different
              experiences, viewpoints, and talents. This tapestry of diversity
              fuels our creativity, fosters innovation, and allows us to connect
              with the world in a meaningful way.
            </p>
          </div>
          <div className="my-8">
            <p className="text-[#223780] font-bold my-6">
              Join the St. Fox Tribe
            </p>
            <p>
              If you&apos;re passionate about making a difference, if you believe in
              the power of good culture and unwavering integrity, and if you
              thrive in an environment that celebrates diversity, then St. Fox
              is the place for you. We invite you to join our tribe, to bring
              your unique voice to the table, and to help us build a brighter
              future, together.
            </p>
          </div>
        </div>
        <div className="flex">
          <p>
            Because at St. Fox, we believe that passion ignites purpose, and
            together, we can illuminate the world.
          </p>
        </div>
        <div className="flex justify-center items-center my-8">
          <a
            href="https://careers.stfox.com/jobs/Careers"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ReusableBtn
              type="button"
              name="Check openings at St. Fox"
              className="bg-gradient-to-r from-[#3B73CC] to-[#1A3F7E] text-base font-medium py-3 px-6 rounded-lg text-[#fff]"
            />
          </a>
        </div>
      </Wrapper>
    </>
  );
}
