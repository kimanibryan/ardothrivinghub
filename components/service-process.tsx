"use client"

import { useState } from "react";

const steps = [
  {
    title: "Initial Consultation",
    description:
      "We begin with a thorough consultation to understand your needs, goals, and challenges. This helps us tailor our services to your specific situation.",
  },
  {
    title: "Customized Proposal",
    description:
      "Based on our consultation, we develop a customized proposal outlining our recommended services, timeline, and investment. We work with you to refine this until it perfectly meets your needs.",
  },
  {
    title: "Implementation",
    description:
      "Our team of experts implements the agreed-upon services with precision and care. We maintain open communication throughout this phase to ensure everything is on track.",
  },
  {
    title: "Evaluation & Follow-up",
    description:
      "We evaluate the results of our services and provide a comprehensive report. We also offer follow-up support to ensure long-term success and address any additional needs that may arise.",
  },
];

export function ServiceProcess() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
            Our Service Process
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground md:text-xl">
            How we work with you to deliver exceptional results.
          </p>
        </div>

        {/* Mobile view – collapsible */}
        <div className="block md:hidden mt-10 space-y-4">
          {steps.map((step, index) => (
            <div
              key={index}
              className="border rounded-lg p-4 transition-all duration-300"
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="flex justify-between items-center w-full text-left"
              >
                <span className="font-semibold">
                  {index + 1}. {step.title}
                </span>
                <span className="text-xl">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>
              {openIndex === index && (
                <p className="mt-3 text-sm text-muted-foreground">
                  {step.description}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Desktop view – alternating timeline */}
        <div className="hidden md:block max-w-5xl mx-auto mt-20 relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-border"></div>
          <div className="space-y-24">
            {steps.map((step, index) => {
              const isLeft = index % 2 === 0;
              return (
                <div
                  key={index}
                  className={`grid md:grid-cols-2 gap-6 md:gap-12 relative`}
                >
                  {isLeft ? (
                    <>
                      <div className="flex flex-col items-end text-right">
                        <div className="flex items-center gap-2">
                          <div className="h-8 w-8 flex items-center justify-center rounded-full bg-primary text-white">
                            {index + 1}
                          </div>
                          <h3 className="text-xl font-bold">{step.title}</h3>
                        </div>
                        <p className="mt-2 text-muted-foreground">
                          {step.description}
                        </p>
                      </div>
                      <div className="md:pl-12">
                        <div className="absolute left-1/2 top-8 h-4 w-4 rounded-full bg-primary -translate-x-1/2 -translate-y-1/2"></div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="md:pr-12">
                        <div className="absolute left-1/2 top-8 h-4 w-4 rounded-full bg-primary -translate-x-1/2 -translate-y-1/2"></div>
                      </div>
                      <div className="flex flex-col items-start text-left">
                        <div className="flex items-center gap-2">
                          <div className="h-8 w-8 flex items-center justify-center rounded-full bg-primary text-white">
                            {index + 1}
                          </div>
                          <h3 className="text-xl font-bold">{step.title}</h3>
                        </div>
                        <p className="mt-2 text-muted-foreground">
                          {step.description}
                        </p>
                      </div>
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
