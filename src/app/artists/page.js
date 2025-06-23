"use client";
import React, { useEffect, useMemo, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";

import ArtistCard from "@/components/ArtistCard/page";
import FilterBlock from "@/components/FilterBlock/page";
import { useArtist } from "@/context/ArtistContext";

export default function ArtistsPage() {
  const { artistList } = useArtist();
  const searchParams = useSearchParams();
  const router = useRouter();

  const initialCategory = searchParams.get("category");

  const [filteredArtists, setFilteredArtists] = useState([]);
  const [filters, setFilters] = useState({
    category: initialCategory || "",
    location: "",
    price: "",
  });

  const allArtists = artistList;

  const categoryOptions = useMemo(() => {
    if (!Array.isArray(allArtists)) return [];
    const categories = allArtists.flatMap((artist) =>
      Array.isArray(artist.category) ? artist.category : [artist.category]
    );
    return [...new Set(categories)].sort();
  }, [allArtists]);

  const locationOptions = useMemo(() => {
    if (!Array.isArray(allArtists)) return [];
    const locations = [...new Set(allArtists.map((artist) => artist.location))];
    return locations.sort();
  }, [allArtists]);

  const priceOptions = useMemo(() => {
    if (!Array.isArray(allArtists)) return [];
    const priceRangesOrder = [
      "Rs.5K - Rs.15K",
      "Rs.10K - Rs.20K",
      "Rs.15K - Rs.25K",
      "Rs.30K - Rs.50K",
    ];
    const uniquePrices = [
      ...new Set(allArtists.map((artist) => artist.priceRange)),
    ];

    return uniquePrices.sort((a, b) => {
      const indexA = priceRangesOrder.indexOf(a);
      const indexB = priceRangesOrder.indexOf(b);
      if (indexA !== -1 && indexB !== -1) return indexA - indexB;
      if (indexA !== -1) return -1;
      if (indexB !== -1) return 1;
      return a.localeCompare(b);
    });
  }, [allArtists]);

  useEffect(() => {
    if (!Array.isArray(allArtists)) {
      setFilteredArtists([]);
      return;
    }

    let temp = [...allArtists];

    if (filters.category) {
      temp = temp.filter((artist) =>
        Array.isArray(artist.category)
          ? artist.category.includes(filters.category)
          : artist.category === filters.category
      );
    }

    if (filters.location)
      temp = temp.filter((artist) => artist.location === filters.location);
    if (filters.price)
      temp = temp.filter((artist) => artist.priceRange === filters.price);

    setFilteredArtists(temp);

    const params = new URLSearchParams();
    Object.entries(filters).forEach(([key, val]) => {
      if (val) params.set(key, val);
    });

    router.replace(`?${params.toString()}`, undefined);
  }, [filters, allArtists, router]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">Browse Artists</h1>
      <FilterBlock
        filters={filters}
        setFilters={setFilters}
        categoryOptions={categoryOptions}
        locationOptions={locationOptions}
        priceOptions={priceOptions}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
        {filteredArtists.length > 0 ? (
          filteredArtists.map((artist, index) => (
            <ArtistCard key={artist.name + index} artist={artist} />
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">
            No artists found.
          </p>
        )}
      </div>
    </div>
  );
}
