import React, { FC } from "react";

import { Accordion, AccordionItem } from "@/shared/ui/atoms";

import * as S from "./styles";

export const Faq: FC = () => (
  <S.Wrapper>
    <S.Title>FAQ'S</S.Title>
    <Accordion type="multiple" defaultValue={["1"]}>
      <AccordionItem value="1" header="What is the purpose of the AlphaMind Unicorn NFT?">
        <S.AccordionContentBlock>
          The AlphaMind Unicorn NFT Collection is a unique series of digital collectibles designed
          to represent the journey and empowerment of our community members in the Web3 space. It
          features the iconic AlphaMind Unicorn, a symbol of hope and transformation, along with
          customizable elements like headgear, body armor, and horse shoes.
        </S.AccordionContentBlock>
      </AccordionItem>
      <AccordionItem
        value="2"
        header="What are the basic onboarding tasks required to mint the Unicorn?"
      >
        <S.AccordionContentBlock>
          The AlphaMind Unicorn NFT Collection is a unique series of digital collectibles designed
          to represent the journey and empowerment of our community members in the Web3 space. It
          features the iconic AlphaMind Unicorn, a symbol of hope and transformation, along with
          customizable elements like headgear, body armor, and horse shoes.
        </S.AccordionContentBlock>
      </AccordionItem>
      <AccordionItem value="3" header="Can I customize my AlphaMind Unicorn?">
        <S.AccordionContentBlock>
          The AlphaMind Unicorn NFT Collection is a unique series of digital collectibles designed
          to represent the journey and empowerment of our community members in the Web3 space. It
          features the iconic AlphaMind Unicorn, a symbol of hope and transformation, along with
          customizable elements like headgear, body armor, and horse shoes.
        </S.AccordionContentBlock>
      </AccordionItem>
      <AccordionItem value="4" header="How does the Karma System work?">
        <S.AccordionContentBlock>
          The AlphaMind Unicorn NFT Collection is a unique series of digital collectibles designed
          to represent the journey and empowerment of our community members in the Web3 space. It
          features the iconic AlphaMind Unicorn, a symbol of hope and transformation, along with
          customizable elements like headgear, body armor, and horse shoes.
        </S.AccordionContentBlock>
      </AccordionItem>
      <AccordionItem value="5" header="How do I bridge assets to mint the Unicorn NFT?">
        <S.AccordionContentBlock>
          The AlphaMind Unicorn NFT Collection is a unique series of digital collectibles designed
          to represent the journey and empowerment of our community members in the Web3 space. It
          features the iconic AlphaMind Unicorn, a symbol of hope and transformation, along with
          customizable elements like headgear, body armor, and horse shoes.
        </S.AccordionContentBlock>
      </AccordionItem>
      <AccordionItem
        value="6"
        header="What are the basic onboarding tasks required to mint the Unicorn?"
      >
        <S.AccordionContentBlock>
          The AlphaMind Unicorn NFT Collection is a unique series of digital collectibles designed
          to represent the journey and empowerment of our community members in the Web3 space. It
          features the iconic AlphaMind Unicorn, a symbol of hope and transformation, along with
          customizable elements like headgear, body armor, and horse shoes.
        </S.AccordionContentBlock>
      </AccordionItem>
      <AccordionItem value="7" header="Can I trade or sell my AlphaMind Unicorn NFT?">
        <S.AccordionContentBlock>
          The AlphaMind Unicorn NFT Collection is a unique series of digital collectibles designed
          to represent the journey and empowerment of our community members in the Web3 space. It
          features the iconic AlphaMind Unicorn, a symbol of hope and transformation, along with
          customizable elements like headgear, body armor, and horse shoes.
        </S.AccordionContentBlock>
      </AccordionItem>
    </Accordion>
  </S.Wrapper>
);
