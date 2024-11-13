import { motion } from "framer-motion";
import React, { FC, useEffect, useState } from "react";

import { mainUseCases } from "@/shared/lib/constants";
import { CaseCard, Title } from "@/shared/ui/atoms";

import * as S from "./styles";

export const MainUseCases: FC = () => {
  const [scrollDirection, setScrollDirection] = useState<"down" | "up">("down");

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        setScrollDirection("down");
      } else if (currentScrollY < lastScrollY) {
        setScrollDirection("up");
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <S.Wrapper>
      <S.DecorImageCasesText src="/images/mainUseCases/cases.png" alt="decor image" fill />
      <Title id="mainUseCases">MAIN USE CASES</Title>
      <S.CasesList>
        {mainUseCases.map((useCase) => (
          <motion.div
            key={useCase.title}
            variants={itemVariants}
            initial="hidden"
            animate={scrollDirection !== "down" ? "visible" : "hidden"}
            whileInView="visible"
            viewport={{ once: false }}
          >
            <CaseCard
              key={useCase.title}
              title={useCase.title}
              image={useCase.image}
              description={useCase.description}
              cssImage={useCase.cssImage}
            />
          </motion.div>
        ))}
      </S.CasesList>
      <S.DecorImageRubinGlow src="/images/decor/rubinGlow.png" alt="decor image" fill />
    </S.Wrapper>
  );
};
