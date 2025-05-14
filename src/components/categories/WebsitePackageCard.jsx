const WebsitePackageCard = ({ package: pkg }) => {
  return (
    <div className="flex flex-col h-full bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow duration-300">
      <div className="p-6 flex flex-col flex-grow">
        <div className="mb-4">
          <h3 className="text-xl font-bold text-gray-800 mb-2">{pkg.name}</h3>
          <p className="text-gray-600">{pkg.description}</p>
        </div>
        
        <div className="mb-4">
          <span className="text-3xl font-bold text-gray-900">
            {typeof pkg.price === 'number' ? `$${pkg.price}` : pkg.price}
          </span>
          {pkg.oneTime && (
            <span className="text-gray-500 ml-1">one-time</span>
          )}
        </div>
        
        <div className="mb-4">
          <h4 className="font-semibold text-gray-800 mb-2">Best for:</h4>
          <p className="text-gray-600">{pkg.bestFor}</p>
        </div>
        
        <div className="mb-6 flex-grow">
          <h4 className="font-semibold text-gray-800 mb-2">Features:</h4>
          <ul className="space-y-2">
            {pkg.features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-600">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <button className="mt-auto w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors duration-300">
          Buy
        </button>
      </div>
    </div>
  );
};

export default WebsitePackageCard;