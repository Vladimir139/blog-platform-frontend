import React, { FC } from "react";

import { Accordion, AccordionItem, Title } from "@/shared/ui/atoms";

import * as S from "./styles";

export const Faq: FC = () => (
  <S.Wrapper>
    <S.DecorImageRubinGlow src="/images/decor/rubinGlow.png" alt="decor image" fill />
    <S.DecorImageBlueLongGlow src="/images/roadmap/blueLongGlow.png" alt="decor image" fill />
    <Title
      subTitle={`Got questions about Cryptory? We've got answers. Dive into our FAQ section\nto learn more.`}
    >
      Frequently Asked Questions
    </Title>
    <S.WrapperAccordion>
      <Accordion type="multiple" defaultValue={["1"]}>
        <AccordionItem value="1" header="What can Website AI do?">
          Website AI is a cutting-edge tool that assists in generating website content, designs, and
          layouts using artificial intelligence. It streamlines the website creation process, making
          it efficient and user-friendly.
        </AccordionItem>
        <AccordionItem value="2" header="How do I access Cryptory?">
          Website AI is a cutting-edge tool that assists in generating website content, designs, and
          layouts using artificial intelligence. It streamlines the website creation process, making
          it efficient and user-friendly.
        </AccordionItem>
        <AccordionItem value="3" header="Is Cryptoryfree to use?">
          Website AI is a cutting-edge tool that assists in generating website content, designs, and
          layouts using artificial intelligence. It streamlines the website creation process, making
          it efficient and user-friendly.
        </AccordionItem>
        <AccordionItem value="4" header="How does the AI generate content?">
          Website AI is a cutting-edge tool that assists in generating website content, designs, and
          layouts using artificial intelligence. It streamlines the website creation process, making
          it efficient and user-friendly.
        </AccordionItem>
        <AccordionItem value="5" header="Can I customize the AI-generated content?">
          Website AI is a cutting-edge tool that assists in generating website content, designs, and
          layouts using artificial intelligence. It streamlines the website creation process, making
          it efficient and user-friendly.
        </AccordionItem>
        <AccordionItem value="6" header="Is my data safe with Cryptory?">
          Website AI is a cutting-edge tool that assists in generating website content, designs, and
          layouts using artificial intelligence. It streamlines the website creation process, making
          it efficient and user-friendly.
        </AccordionItem>
      </Accordion>
    </S.WrapperAccordion>
  </S.Wrapper>
);
