"use client";
import React, { useState } from "react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import OnboardPage from "@/app/onboard/page";

const ArtistCard = ({ artist }) => {
  const [open, setOpen] = useState(false);
  OnboardPage;
  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-md transition bg-white">
      <div className=" p-5 text-center">
        <h3 className="text-xl font-semibold mb-1">{artist.name}</h3>
        <p className="text-sm text-gray-500 mb-1">
          Category:{" "}
          {Array.isArray(artist.category)
            ? artist.category.join(", ")
            : artist.category}
        </p>
        <p className="text-sm text-gray-500 mb-1">
          Location: {artist.location}
        </p>
        <p className="text-sm text-gray-500">Fee: {artist.priceRange}</p>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button className="w-full bg-cyan-600 text-white hover:bg-cyan-700">
            Ask for Quote
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Send Quote Request</DialogTitle>
            <DialogDescription>
              You're requesting a quote for <strong>{artist.name}</strong>.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-2">
            <input
              type="email"
              placeholder="Your email"
              className="w-full border p-2 rounded"
            />
            <textarea
              placeholder="Message"
              className="w-full border p-2 rounded"
              rows={3}
            />
          </div>
          <DialogFooter>
            <Button
              onClick={() => {
                setOpen(false);
                toast.success("Quote Request Submitted!");
              }}
            >
              Submit Request
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ArtistCard;
