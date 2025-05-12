const ServiceModal = ({ isOpen, onClose, service }) => {
  if (!isOpen || !service) return null;

  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose}></div>
      <div className="relative min-h-screen flex items-center justify-center p-4">
        <div className="bg-white rounded-lg shadow-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto" role="dialog" aria-modal="true" aria-labelledby="modal-title">
          <div className="p-6 border-b border-neutral-200 flex justify-between items-center">
            <h3 id="modal-title" className="text-2xl font-bold">{service.title}</h3>
            <button onClick={onClose} className="text-neutral-500 hover:text-neutral-700 focus:outline-none">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <div className="p-6" dangerouslySetInnerHTML={{ __html: service.content }}></div>
          
          <div className="p-6 border-t border-neutral-200 flex justify-end">
            <button onClick={onClose} className="px-4 py-2 bg-neutral-200 text-neutral-800 rounded-md hover:bg-neutral-300 transition-colors duration-300 mr-2">
              Close
            </button>
            <a href="#contact" className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-300">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceModal;