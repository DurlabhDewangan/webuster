const AppCard = ({ app }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow border border-gray-100">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={app.image} 
          alt={app.name} 
          className="w-full h-full object-cover"
        />
        {app.monthly && (
          <div className="absolute top-2 right-2 bg-blue-600 text-white text-xs px-2 py-1 rounded">
            Subscription
          </div>
        )}
      </div>
      
      <div className="p-5">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-lg font-semibold text-gray-900">{app.name}</h3>
          <div className="flex items-center bg-blue-50 text-blue-800 px-2 py-1 rounded text-xs font-semibold">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" viewBox="0 0 20 20" fill="currentColor">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            {app.rating} ({app.reviews})
          </div>
        </div>
        
        <p className="text-gray-600 text-sm mb-4">{app.description}</p>
        
        <div className="mb-4">
          <h4 className="text-xs font-semibold text-gray-500 mb-2">KEY FEATURES</h4>
          <div className="flex flex-wrap gap-2">
            {app.features.slice(0, 3).map((feature, index) => (
              <span key={index} className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">
                {feature}
              </span>
            ))}
            {app.features.length > 3 && (
              <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">
                +{app.features.length - 3} more
              </span>
            )}
          </div>
        </div>
        
        <div className="flex justify-between items-center border-t border-gray-100 pt-4">
          <div>
            <p className="text-sm text-gray-500">Starting at</p>
            <p className="text-xl font-bold text-gray-900">
              ${app.price}
              {app.monthly && <span className="text-sm font-normal text-gray-500">/mo</span>}
            </p>
          </div>
          <div className="flex gap-2">
            <button className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium hover:bg-gray-50">
              Details
            </button>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-700">
              Get Quote
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppCard;