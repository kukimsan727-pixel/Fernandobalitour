import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "What tour packages does Fernando Bali Tours offer?",
    answer: "We offer One Day Trips, Multi Day Trips, and Car Rental Services — all customizable and led by experienced local guides.",
  },
  {
    question: "Are your Bali tour packages private or shared?",
    answer: "All of our tours are 100% private, giving you a personalized experience with your own driver and guide.",
  },
  {
    question: "Can I customize my Bali tour itinerary?",
    answer: "Yes! We offer fully flexible itineraries to match your interests, schedule, and preferred destinations.",
  },
  {
    question: "Do you offer car rental with a driver in Bali?",
    answer: "Yes, our car rental service includes a friendly, English-speaking driver who knows Bali's top spots and hidden gems.",
  },
  {
    question: "Is Fernando Bali Tours a licensed tour operator?",
    answer: "Absolutely. We are a registered and trusted local tour operator with years of experience and hundreds of happy travelers.",
  },
]

export function FAQSection() {
  return (
    <section id="faq" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-primary font-medium mb-2">Your Questions, Answered</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Everything You Need to Know Before Booking
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card rounded-xl border border-border px-6 shadow-sm"
              >
                <AccordionTrigger className="text-left text-foreground hover:text-primary hover:no-underline py-5 font-medium">
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
  )
}
