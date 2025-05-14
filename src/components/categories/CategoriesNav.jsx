const CategoriesNav = () => {
  const categories = [
    { id: 'restaurants', name: 'Restaurants' },
    { id: 'shops', name: 'Shops' },
    { id: 'healthcare', name: 'Healthcare' },
    { id: 'education', name: 'Education' },
    { id: 'real-estate', name: 'Real Estate' },
  ];

  return (
    <div className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex overflow-x-auto py-4 space-x-6">
          {categories.map((category) => (
            <button
              key={category.id}
              className="whitespace-nowrap px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 hover:border-b-2 hover:border-blue-600 transition-colors duration-300"
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoriesNav;