"use client";

import { motion } from "framer-motion";
import { slideIn, textVariant } from "@util/variants";
import StaggerWrapper from "@components/Animation/StaggerWrapper";

import Image from "next/image";
import cover from "/public/images/home/cover.jpg";
import stamp from "/public/images/home/stamp.jpg";

export default function Intro() {
  return (
    <section className={` sm:pl-16 pl-6`}>
      <StaggerWrapper>
        <div className="relative z-10 gap-3 col-center">
          <motion.h1
            variants={textVariant(1.1)}
            className="text-3xl font-extrabold"
          >
            안녕하세요!
          </motion.h1>
          <motion.h1
            variants={textVariant(1.2)}
            className="text-3xl font-extrabold"
          >
            건축을 좋아하는 개발자 김유 입니다.
          </motion.h1>

          <motion.div variants={textVariant(1.3)}>
            <h1 className="text-2xl font-extrabold">
              이곳에서 건축학도의 코딩 역사를 보실 수 있습니다.
            </h1>
          </motion.div>
        </div>

        <motion.div variants={slideIn("right", "tween", 0.2, 1)}>
          <Image src={cover} alt="hero_cover" />

          <a href="#explore">
            <div className="w-full flex justify-end sm:-mt-[70px] -mt-[50px] pr-[40px] relative z-10 overflow-hidden">
              <Image
                src={stamp}
                alt="stamp"
                className="sm:w-[155px] w-[100px] sm:h-[155px] h-[100px] object-contain rounded-full"
              />
            </div>
          </a>
        </motion.div>
      </StaggerWrapper>
    </section>
  );
}
