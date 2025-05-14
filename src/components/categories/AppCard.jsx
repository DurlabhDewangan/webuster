const AppCard = ({ app, type }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow border border-gray-100 h-full flex flex-col">
      <div className="p-5 flex flex-col flex-grow">
        {/* Image (only for solution type) */}
        {type === 'solution' && app.image && (
          <div className="relative aspect-video h-40 overflow-hidden bg-gray-100 mb-4 rounded">
            <img 
              src={app.image} 
              alt={app.name} 
              className="absolute inset-0 w-full h-full object-cover object-center"
              loading="lazy"
            />
          </div>
        )}

        {/* Title and Rating */}
        <div className="flex justify-between items-start mb-3 gap-2">
          <h3 className="text-lg font-semibold text-gray-900 line-clamp-1">{app.name}</h3>
          {type === 'solution' && (
            <div className="flex items-center bg-blue-50 text-blue-800 px-2 py-1 rounded text-xs font-semibold whitespace-nowrap">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              {app.rating} ({app.reviews})
            </div>
          )}
        </div>

        {/* Description */}
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{app.description}</p>

        {/* Features */}
        <div className="mb-4">
          <h4 className="text-xs font-semibold text-gray-500 mb-2">KEY FEATURES</h4>
          <div className="flex flex-wrap gap-2">
            {(app?.features || []).slice(0, 3).map((feature, index) => (
              <span key={index} className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded line-clamp-1">
                {feature}
              </span>
            ))}
          </div>
        </div>

        {/* Push pricing and button to bottom */}
        <div className="mt-auto pt-4 border-t border-gray-100 flex justify-between items-center">
          <div>
            <p className="text-sm text-gray-500">Starting at</p>
            <p className="text-xl font-bold text-gray-900">
              ${app.price}
              {type === 'solution' && <span className="text-sm font-normal text-gray-500">/mo</span>}
            </p>
          </div>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-700">
            {type === 'website' ? 'Get Website' : 'Get Solution'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AppCard;
