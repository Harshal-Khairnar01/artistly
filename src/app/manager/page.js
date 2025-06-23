"use client"
import React from 'react';
import ArtistTable from '@/components/ArtistTable';
import { useArtist } from '@/context/ArtistContext';

export default function ManagerDashboardPage() {
  const { artistList } = useArtist();

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">Manager Dashboard</h1>
      <ArtistTable artists={artistList} />
    </div>
  );
}
