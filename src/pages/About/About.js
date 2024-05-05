import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";

const About = () => {
  const location = useLocation();
  const [prevLocation, setPrevLocation] = useState("");
  useEffect(() => {
    setPrevLocation(location.state.data);
  }, [location]);
  return (
    <div className="max-w-container mx-auto px-4">
      <Breadcrumbs title="About" prevLocation={prevLocation} />
      <div className="pb-10">
        <h1 className="max-w-[600px] text-base text-lightText mb-2">
          <span className="text-primeColor font-semibold text-lg">UdaDevs</span>{" "}
          is an innovative e-learning platform designed to empower learners of all levels with the skills and knowledge they need to succeed in today's rapidly evolving tech landscape. With a diverse range of courses spanning programming languages, software development methodologies, data science, and more, UdaDevs offers a comprehensive learning experience tailored to individual needs.

At UdaDevs, learners can engage with high-quality content created by industry experts, participate in hands-on projects and coding challenges, and collaborate with peers through interactive forums and communities. The platform's intuitive interface and personalized learning paths ensure that users can progress at their own pace, whether they're beginners taking their first steps into coding or seasoned professionals looking to expand their expertise.

With a commitment to accessibility and affordability, UdaDevs provides flexible subscription options and financial assistance programs to make learning accessible to all. Whether you're looking to launch a career in tech, upskill for a promotion, or simply explore your interests, UdaDevs is your partner in lifelong learning and professional development.
        </h1>
        <Link to="/shop">
          <button className="w-52 h-10 bg-primeColor text-white hover:bg-black duration-300">
            Continue Learning
          </button>
        </Link>
      </div>
    </div>
  );
};

export default About;
