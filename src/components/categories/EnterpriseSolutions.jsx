const EnterpriseSolutions = () => {
  return (
    <section className="my-16 bg-blue-50 rounded-xl p-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Enterprise-Grade Solutions</h2>
        <p className="text-lg text-gray-700 mb-6">
          Customizable platforms for large organizations with complex requirements and multi-location operations.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-5 rounded-lg shadow-sm">
            <h3 className="font-semibold mb-2 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
              </svg>
              Scalability
            </h3>
            <p className="text-gray-600 text-sm">Grow from single location to nationwide deployment</p>
          </div>
          
          <div className="bg-white p-5 rounded-lg shadow-sm">
            <h3 className="font-semibold mb-2 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
              API Access
            </h3>
            <p className="text-gray-600 text-sm">Full API documentation and developer support</p>
          </div>
          
          <div className="bg-white p-5 rounded-lg shadow-sm">
            <h3 className="font-semibold mb-2 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
              </svg>
              Security
            </h3>
            <p className="text-gray-600 text-sm">Enterprise-grade security and compliance</p>
          </div>
        </div>
        
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <button className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors font-medium">
            Request Enterprise Demo
          </button>
          <button className="px-6 py-3 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors font-medium">
            Download Solutions Catalog
          </button>
        </div>
      </div>
    </section>
  );
};

export default EnterpriseSolutions;