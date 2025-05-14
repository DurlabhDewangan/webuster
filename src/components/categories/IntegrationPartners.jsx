const IntegrationPartners = () => {
  const partners = [
    { name: "QuickBooks", logo: "/quickbooks-logo.svg" },
    { name: "Shopify", logo: "/shopify-logo.svg" },
    { name: "Square", logo: "/square-logo.svg" },
    { name: "Xero", logo: "/xero-logo.svg" },
    { name: "Salesforce", logo: "/salesforce-logo.svg" },
    { name: "Zapier", logo: "/zapier-logo.svg" }
  ];

  return (
    <section className="my-16">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Seamless Integrations</h2>
      <p className="text-gray-600 mb-8 max-w-3xl">
        Our solutions integrate with the business tools you already use to create a unified technology ecosystem.
      </p>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {partners.map((partner, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex items-center justify-center">
            <img 
              src={partner.logo} 
              alt={partner.name} 
              className="h-8 object-contain filter grayscale hover:grayscale-0 transition-all"
            />
          </div>
        ))}
      </div>
      
      <div className="mt-8 text-center">
        <button className="text-blue-600 hover:text-blue-800 font-medium flex items-center justify-center mx-auto">
          View all integration partners
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default IntegrationPartners;