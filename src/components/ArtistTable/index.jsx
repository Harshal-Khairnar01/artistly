"use client";
import React from "react";

export default function ArtistTable({ artists }) {
  if (!artists || artists.length === 0) {
    return (
      <p className="text-center text-gray-500">No artists submitted yet.</p>
    );
  }

  return (
    <div className="overflow-x-auto border rounded">
      <table className="min-w-full table-auto text-sm">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2 text-left">Name</th>
            <th className="px-4 py-2 text-left">Category</th>
            <th className="px-4 py-2 text-left">City</th>
            <th className="px-4 py-2 text-left">Fee</th>
            <th className="px-4 py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {artists.map((artist, index) => (
            <tr key={artist.name + index} className="border-t">
              <td className="px-4 py-2">{artist.name}</td>
              <td className="px-4 py-2">
                {Array.isArray(artist.category)
                  ? artist.category.join(", ")
                  : artist.category}
              </td>
              <td className="px-4 py-2">{artist.location}</td>
              <td className="px-4 py-2">{artist.priceRange}</td>
              <td className="px-4 py-2 text-center">
                <button className="text-blue-600 hover:underline">View</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
