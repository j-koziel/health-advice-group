import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { loremIpsum } from "lorem-ipsum";

import { StaffProfileItem } from "../components/StaffProfileItem";
import { config } from "../settings/config";
import { useEffect } from "react";
import { Cursor } from "../components/Cursor";

export function AboutUs() {
  const staffData = [
    {
      name: "John",
      title: "Co-founder",
      profileImageUrl: `${config.backendUrl}/static/staff-profile-pictures/profile_pic_1.png`,
    },
    {
      name: "Amy",
      title: "Founder",
      profileImageUrl: `${config.backendUrl}/static/staff-profile-pictures/profile_pic_2.png`,
    },
    {
      name: "Esteban",
      title: "Co-founder",
      profileImageUrl: `${config.backendUrl}/static/staff-profile-pictures/profile_pic_3.png`,
    },
  ];

  const aboutUsText = loremIpsum({
    count: 311,
    units: "words",
    format: "plain",
  });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) =>
    aboutUsText.slice(0, latest)
  );

  useEffect(() => {
    const controls = animate(count, aboutUsText.length, {
      type: "tween",
      duration: 1,
      ease: "easeInOut",
    });

    return controls.stop;
  }, []);

  return (
    <div className="w-full bg-background text-foreground flex flex-col text-center">
      <article className="flex flex-col mx-5">
        <header className="mb-4">
          <h1 className="text-7xl mb-2">About Us</h1>
          <p className="text-2xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in sem
            eu nunc pharetra lobortis at non neque. Vestibulum vitae erat ut
            sapien posuere suscipit. Sed et sapien odio.
          </p>
        </header>
        <main className="mb-4">
          <h2 className="font-bold text-3xl text-left">Our Mission:</h2>
          <motion.span className="text-left text-2xl">
            {displayText}
          </motion.span>
          <Cursor />
        </main>
        <footer className="flex flex-col gap-y-8 md:flex-row md:justify-evenly">
          {staffData.map((staffMember, i) => (
            <StaffProfileItem
              key={i}
              name={staffMember.name}
              title={staffMember.title}
              profileImageUrl={staffMember.profileImageUrl}
              delay={i}
            />
          ))}
        </footer>
      </article>
    </div>
  );
}
