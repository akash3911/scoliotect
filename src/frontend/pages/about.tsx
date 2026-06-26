import type { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import Head from "components/Head";
import { motion } from "framer-motion";
import Nav from "components/Nav";
import enterAnim from "@/utils/enterAnim";
import AnimatedBackground from "components/AnimatedBackground";

// Images
import architecture from "../public/architecture.png";

const About: NextPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Head />
      <nav className="relative z-50">
        <div className="fluid-container py-7 px-9 w-full overflow-hidden">
          <div className="flex justify-between gap-x-8">
            <Link href="/" className="cursor-pointer">

              <h1 className="text-2xl text-primary">
                <span className="font-black">Scolio</span>tect
              </h1>

            </Link>
            <ul className="flex gap-x-8 overflow-hidden">
              <li>
                <Link
                  href="/about"
                  className="text-primary text-sm transition hover:text-primary">
                  
                    About
                  
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <main className="flex-grow">
        <div className="w-full max-w-xl mx-auto px-9">
          <motion.h1
            {...enterAnim(0.15)}
            className="text-6xl font-extrabold mb-6"
          >
            About
          </motion.h1>
          <motion.h2
            {...enterAnim(0.3)}
            className="text-2xl font-bold text-primary mb-3"
          >
            Scoliosis Curve detection
          </motion.h2>
          <motion.p {...enterAnim(0.35)}>
            <b>Scoliotect</b> is an automatic cobb angle measurement tool.
          </motion.p>
          <motion.p className="mt-1.5" {...enterAnim(0.35)}>
            This web application follows a two-stage pipeline built around YOLOv8
            pose. The model detects vertebrae as one class with five keypoints per
            object and uses the four edge keypoints for downstream processing.
          </motion.p>
          <motion.p className="mt-3 text-gray-700" {...enterAnim(0.35)}>
            During inference, a trained .pt file returns vertebra bounding boxes
            and keypoints, then the Cobb-angle stage converts keypoints into a
            landmark vector and computes curve classification and angle
            measurements. Reusable training and inference utilities are shared in
            the core pipeline, while the notebooks act as orchestration layers.
          </motion.p>
          <motion.h2
            {...enterAnim(0.4)}
            className="mt-10 mb-4 text-2xl font-bold text-gray-800"
          >
            Architecture
          </motion.h2>
          <motion.div
            {...enterAnim(0.45)}
            className="relative w-full min-h-[260px] rounded-xl overflow-hidden shadow-lg bg-white"
          >
            <Image
              src={architecture}
              alt="Scoliotect architecture diagram"
              layout="fill"
              objectFit="contain"
              priority={false}
            />
          </motion.div>

          <h2 className="mt-16 mb-6 text-2xl text-center text-gray-700 font-semibold">
            Team Members
          </h2>

          <div className="text-gray-700 space-y-2">
            <p>22BCE8850 - RASABATTULA MUKESH VENKAT SAI</p>
            <p>22BCE20488 - AKASH JONNALAGADDA</p>
            <p>22BCE9740 - CHAGARLAMUDI HARSHITH</p>
            <p className="pt-2 font-medium">Guide: PUTTA DURGA</p>
            <p className="font-medium">SDP ID: 20250858</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;
