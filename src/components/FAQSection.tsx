import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'Why use this service over traditional methods?',
    answer:
      "Traditional breakdown coordination is broken for everyone. Drivers waste hours calling shops that don't answer or are too far away. Independent techs can't find customers without existing relationships. Fleet managers play phone tag between drivers and vendors with no visibility. RigRescue solves this with real-time matching, instant notifications, and live tracking—getting drivers back on the road faster while helping techs build their business.",
  },
  {
    question: 'When exactly does this launch?',
    answer:
      "We're targeting March 2026 for the driver + independent tech MVP. Fleet and shop management features roll out in Q2 2026. Beta users get early access to everything.",
  },
  {
    question: "What if I'm a company driver - can I use this?",
    answer:
      'Yes! In the MVP, you use it just like an owner-operator (find and request techs directly). Later, your fleet manager can integrate it into their dispatch workflow if they want.',
  },
  {
    question:
      "I'm a company driver - how does this work for me in the full version?",
    answer:
      "You'll use RigRescue to report breakdowns to your fleet manager/dispatcher. You submit the issue and location, and your manager routes the job to an approved vendor. You'll see who's coming and track their arrival, but your company handles vendor selection.",
  },
  {
    question: 'What if my company driver uses this without approval?',
    answer:
      "Company drivers won't be able to request techs directly unless their fleet manager enables that setting. By default, company driver accounts require fleet manager approval for all vendor selection. Owner-operators have full control.",
  },
  {
    question: 'How do you verify techs?',
    answer:
      'Every tech goes through verification before joining: valid CDL/mechanic certifications and insurance liability. Drivers see verified badges on tech profiles.',
  },
  {
    question: 'What areas will be covered?',
    answer:
      "We're starting in the Midwest and expanding based on where our waitlist users are. If you join, we prioritize your region.",
  },
  {
    question: 'Can I still call my regular tech?',
    answer:
      "Of course! Many drivers will use RigRescue for emergencies or when their regular tech isn't available. Many techs will use it to fill gaps between their existing customers.",
  },
  {
    question: 'What about payments?',
    answer:
      'For MVP, you pay the tech directly (cash, Venmo, Zelle, whatever works). Digital invoicing and in-app payments will be integrated in future releases.',
  },
  {
    question: "I'm an independent tech - how do I get more visibility?",
    answer:
      'The more jobs you complete successfully, the higher your rating. Drivers can also save you as a "favorite," which means they\'ll request you specifically next time. Over time, you build a customer base through the platform.',
  },
  {
    question: "I'm a shop owner - how do I get fleet contracts through this?",
    answer:
      "Fleet managers can discover and add shops to their approved vendor list through the platform. You'll build your reputation through completed jobs, response times, and ratings. Over time, more fleets will add you to their approved lists.",
  },
  {
    question: 'Can independent techs get work from fleets?',
    answer:
      "Yes! Fleet managers can add independent techs to their approved vendor list, not just shops. If you're a reliable independent tech, fleets can build a relationship with you through the platform.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-20 lg:py-32 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card rounded-xl px-6 border border-border card-shadow"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
