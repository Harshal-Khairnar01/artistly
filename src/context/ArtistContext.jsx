"use client";
import { createContext, useContext, useState } from "react";
import defaultArtists from "@/data/artists.json";

const ArtistContext = createContext();

export const ArtistProvider = ({ children }) => {
  const [artistList, setArtistList] = useState(defaultArtists);

  const addArtist = (artist) => {
    const normalizedArtist = {
      ...artist,
      priceRange: artist.fee || artist.priceRange || "N/A", // unified key
    };
    setArtistList((prev) => [...prev, normalizedArtist]);
  };

  return (
    <ArtistContext.Provider value={{ artistList, addArtist }}>
      {children}
    </ArtistContext.Provider>
  );
};

export const useArtist = () => useContext(ArtistContext);
