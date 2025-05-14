const FAQ = () => {
  const faqs = [
    {
      question: "What deployment options are available?",
      answer: "We offer cloud-based SaaS solutions with optional on-premise deployment for enterprise customers. All solutions are accessible via web browser with dedicated mobile apps available."
    },
    {
      question: "Do you provide implementation support?",
      answer: "Yes, all our solutions come with onboarding support. We offer three tiers of implementation packages from basic self-service to full white-glove deployment with dedicated project managers."
    },
    {
      question: "What is your service level agreement?",
      answer: "We guarantee 99.9% uptime for all cloud solutions with 24/7 monitoring. Enterprise plans include SLA-backed response times and dedicated account managers."
    },
    {
      question: "Can I integrate with my existing systems?",
      answer: "Absolutely. Our open API architecture allows integration with hundreds of business applications. We also provide custom integration services for unique requirements."
    }
  ];

  return (
    <section className="my-16">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
      
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
            <button className="w-full flex justify-between items-center p-4 text-left hover:bg-gray-50">
              <h3 className="font-medium text-gray-900">{faq.question}</h3>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
              </svg>
            </button>
            <div className="p-4 bg-gray-50 text-gray-700 border-t border-gray-200">
              {faq.answer}
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-8 text-center">
        <button className="text-blue-600 hover:text-blue-800 font-medium">
          View all FAQs
        </button>
      </div>
    </section>
  );
};

export default FAQ;