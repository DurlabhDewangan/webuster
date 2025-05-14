const FilterBar = ({ activeCategory, setActiveCategory }) => {
  return (
    <div className="flex justify-center mb-6">
      <div className="inline-flex rounded-md shadow-sm" role="group">
        <button
          onClick={() => setActiveCategory('restaurants')}
          className={`px-4 py-2 text-sm font-medium rounded-l-lg ${
            activeCategory === 'restaurants'
              ? 'bg-blue-600 text-white'
              : 'bg-white text-gray-700 hover:bg-gray-100'
          }`}
        >
          Restaurants
        </button>
        <button
          onClick={() => setActiveCategory('shops')}
          className={`px-4 py-2 text-sm font-medium rounded-r-lg ${
            activeCategory === 'shops'
              ? 'bg-blue-600 text-white'
              : 'bg-white text-gray-700 hover:bg-gray-100'
          }`}
        >
          Shops
        </button>
      </div>
    </div>
  );
};

export default FilterBar;