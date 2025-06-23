import React from "react";

const FilterBlock = ({
  filters,
  setFilters,
  categoryOptions,
  locationOptions,
  priceOptions,
}) => {
  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  return (
    <div className=" md:w-3/5 w-full grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4 mb-6">
      <select
        name="category"
        value={filters.category}
        onChange={handleChange}
        className="border p-2 rounded shadow-sm focus:ring-cyan-500 focus:border-cyan-500 block w-full sm:text-sm border-gray-300"
      >
        <option value="">All Categories</option>
        {categoryOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>

      <select
        name="location"
        value={filters.location}
        onChange={handleChange}
        className="border p-2 rounded-lg shadow-sm focus:ring-cyan-500 focus:border-cyan-500 block w-full sm:text-sm border-gray-300"
      >
        <option value="">All Locations</option>
        {locationOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>

      <select
        name="price"
        value={filters.price}
        onChange={handleChange}
        className="border p-2 rounded-lg shadow-sm focus:ring-cyan-500 focus:border-cyan-500 block w-full sm:text-sm border-gray-300"
      >
        <option value="">All Price Ranges</option>
        {priceOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterBlock;
