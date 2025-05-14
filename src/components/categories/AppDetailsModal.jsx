import { useState } from 'react';

const AppDetailsModal = ({ app, onClose }) => {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-start mb-4">
            <h2 className="text-2xl font-bold text-gray-900">{app.name}</h2>
            <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <img src={app.image} alt={app.name} className="w-full rounded-lg" />
            </div>
            <div>
              <div className="flex items-center mb-4">
                <div className="flex items-center bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  {app.rating}
                </div>
                <span className="text-gray-600">50+ purchases</span>
              </div>
              
              <p className="text-gray-700 mb-6">{app.description}</p>
              
              <div className="mb-6">
                <h3 className="font-semibold text-gray-900 mb-2">Features:</h3>
                <ul className="list-disc pl-5 text-gray-700 space-y-1">
                  <li>Easy setup and configuration</li>
                  <li>24/7 customer support</li>
                  <li>Regular updates</li>
                  <li>Mobile responsive</li>
                </ul>
              </div>
              
              <div className="flex items-center justify-between mb-6">
                <div>
                  <span className="text-gray-500 text-sm">Price</span>
                  <p className="text-2xl font-bold text-gray-900">${app.price}</p>
                </div>
                <div>
                  <span className="text-gray-500 text-sm">Quantity</span>
                  <div className="flex items-center border rounded-md">
                    <button 
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                    >
                      -
                    </button>
                    <span className="px-3 py-1">{quantity}</span>
                    <button 
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
              
              <button className="w-full py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-300 font-semibold">
                Add to Cart - ${(app.price * quantity).toFixed(2)}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppDetailsModal;