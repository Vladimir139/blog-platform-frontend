import React, { FC, useEffect, useRef, useState } from "react";

import { RightArrowIcon } from "@/shared/lib/icons";
import { Title } from "@/shared/ui/atoms";

import * as S from "./styles";

export const RoadMap: FC = () => {
  const roadmapRef = useRef<HTMLDivElement>(null);
  const [showScrollHelper, setShowScrollHelper] = useState(true);

  useEffect(() => {
    const roadmapElement = roadmapRef.current;

    const handleScroll = () => {
      if (roadmapElement) {
        console.log("roadmapElement.scrollLeft", roadmapElement.scrollLeft);
        if (roadmapElement.scrollLeft > 200) {
          setShowScrollHelper(false);
        } else {
          setShowScrollHelper(true);
        }
      }
    };

    if (roadmapElement) {
      roadmapElement.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (roadmapElement) {
        roadmapElement.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <S.Wrapper>
      <Title subTitle="Our plans and key milestones for the next 5 phases of Cryptory" id="roadMap">
        ROADMAP
      </Title>
      <S.DecorImageBlueLongGlow src="/images/roadmap/blueLongGlow.png" alt="decor image" fill />
      <S.DecorImageRubinGlowLeft src="/images/decor/rubinGlow.png" alt="decor image" fill />
      <S.DecorImageRubinGlowBottom src="/images/decor/rubinGlow.png" alt="decor image" fill />
      <S.WrapperRoadmap ref={roadmapRef}>
        <S.ScrollHelper hidden={!showScrollHelper}>
          <RightArrowIcon />
        </S.ScrollHelper>
        <S.RoadmapLine src="/images/roadmap/roadmapLine2.png" alt="roadmap line" fill />
        <S.RoadmapLineMobile src="/images/roadmap/roadmapLine2.png" alt="roadmap line" fill />
        <S.PhaseBlock blockNumber={1}>
          <S.PhaseBlueTitle>PHASE 1</S.PhaseBlueTitle>
          <S.PhaseTitle>Laying the Groundwork</S.PhaseTitle>
          <S.Description>
            This foundational phase marks the genesis of Cryptory, focusing on development, team
            building, and early community formation. Key Objectives: Solidify the core architecture
            and design of the utility marketplace, Build a skilled development team with expertise
            in blockchain and web3 utilities. Initiate social media presence and begin cultivating
            an early adopter community.
          </S.Description>
        </S.PhaseBlock>
        <S.PhaseBlock blockNumber={2}>
          <S.PhaseBlueTitle>PHASE 2</S.PhaseBlueTitle>
          <S.PhaseTitle>Building Core Functionality and Securing Funding</S.PhaseTitle>
          <S.Description>
            Building Core Functionality and Securing Funding. The focus shifts to developing
            essential platform features and successfully raising capital to fuel project growth. Key
            Objectives: Complete Platform interface and secure partnerships with utility projects.
            Design and finalize the tokenomics model for the project&apos;s native token.
          </S.Description>
        </S.PhaseBlock>
        <S.PhaseBlock blockNumber={3}>
          <S.PhaseBlueTitle>PHASE 3</S.PhaseBlueTitle>
          <S.PhaseTitle>Launch and Rapid Expansion</S.PhaseTitle>
          <S.Description>
            This pivotal quarter sees the official launch of Cryptory and a period of accelerated
            feature development. <br />
            Key Objectives: Public launch of the Cryptory platform with initial onboarding of the
            first 100 utilities. Integrate the cross chain swapping feature. Begin the process of
            securing listings on prominent centralized exchanges (CEXs).
          </S.Description>
        </S.PhaseBlock>
        <S.PhaseBlock blockNumber={4}>
          <S.PhaseBlueTitle>PHASE 4</S.PhaseBlueTitle>
          <S.PhaseTitle>Refinement and Strategic Growth</S.PhaseTitle>
          <S.Description>
            With a live platform, emphasis shifts towards polishing user experience, establishing
            partnerships, and planning further expansion. <br />
            Key Objectives: Enhance UI/UX based on early user feedback, ensuring seamless
            interaction. Initiate partnerships with data providers and analytics tools to enrich the
            platform. Research and develop additional complementary products and services for future
            rollout.
          </S.Description>
        </S.PhaseBlock>
        <S.PhaseBlock blockNumber={5}>
          <S.PhaseBlueTitle>PHASE 5</S.PhaseBlueTitle>
          <S.PhaseTitle>Refinement and Strategic Growth</S.PhaseTitle>
          <S.Description>
            With a live platform, emphasis shifts towards polishing user experience, establishing
            partnerships, and planning further expansion. <br />
            Key Objectives: Enhance UI/UX based on early user feedback, ensuring seamless
            interaction. Initiate partnerships with data providers and analytics tools to enrich the
            platform. Research and develop additional complementary products and services for future
            rollout.
          </S.Description>
        </S.PhaseBlock>
        <S.PhaseBlock blockNumber={6}>
          <S.PhaseBlueTitle>PHASE 6</S.PhaseBlueTitle>
          <S.PhaseTitle>Refinement and Strategic Growth</S.PhaseTitle>
          <S.Description>
            With a live platform, emphasis shifts towards polishing user experience, establishing
            partnerships, and planning further expansion. <br />
            Key Objectives: Enhance UI/UX based on early user feedback, ensuring seamless
            interaction. Initiate partnerships with data providers and analytics tools to enrich the
            platform. Research and develop additional complementary products and services for future
            rollout.
          </S.Description>
        </S.PhaseBlock>
        <S.PhaseBlock blockNumber={7}>
          <S.PhaseBlueTitle>PHASE 7</S.PhaseBlueTitle>
          <S.PhaseTitle>Refinement and Strategic Growth</S.PhaseTitle>
          <S.Description>
            With a live platform, emphasis shifts towards polishing user experience, establishing
            partnerships, and planning further expansion. <br />
            Key Objectives: Enhance UI/UX based on early user feedback, ensuring seamless
            interaction. Initiate partnerships with data providers and analytics tools to enrich the
            platform. Research and develop additional complementary products and services for future
            rollout.
          </S.Description>
        </S.PhaseBlock>
        <S.PhaseBlock blockNumber={8}>
          <S.PhaseBlueTitle>PHASE 8</S.PhaseBlueTitle>
          <S.PhaseTitle>Refinement and Strategic Growth</S.PhaseTitle>
          <S.Description>
            With a live platform, emphasis shifts towards polishing user experience, establishing
            partnerships, and planning further expansion. <br />
            Key Objectives: Enhance UI/UX based on early user feedback, ensuring seamless
            interaction. Initiate partnerships with data providers and analytics tools to enrich the
            platform. Research and develop additional complementary products and services for future
            rollout.
          </S.Description>
        </S.PhaseBlock>
      </S.WrapperRoadmap>
    </S.Wrapper>
  );
};
