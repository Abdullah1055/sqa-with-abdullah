import Link from "next/link";
import { MessageSquare } from "lucide-react";

import { Section, SectionEyebrow } from "@/components/common/section";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/lib/site-data";

export function FaqSection() {
  return (
    <Section
      id="faq"
      ariaLabelledby="faq-title"
      className="bg-surface-2/50"
    >
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <SectionEyebrow>FAQ</SectionEyebrow>

          <h2
            id="faq-title"
            className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
          >
            Answers to the most common questions
          </h2>
        </div>

        <Accordion
          type="single"
          collapsible
          className="mt-10 rounded-2xl border border-border bg-card"
        >
          {faqs.map((faq, index) => (
            <AccordionItem
              key={faq.q}
              value={`item-${index}`}
              className="px-5"
            >
              <AccordionTrigger className="text-left text-base font-medium">
                {faq.q}
              </AccordionTrigger>

              <AccordionContent className="text-sm text-muted-foreground">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-8 flex items-center justify-center gap-2 text-sm text-muted-foreground">
          <MessageSquare
            className="h-4 w-4"
            aria-hidden="true"
          />

          <span>Still have questions?</span>

          <Link
            href="/contact"
            className="font-medium text-primary hover:underline"
          >
            Get in touch
          </Link>
        </div>
      </div>
    </Section>
  );
}