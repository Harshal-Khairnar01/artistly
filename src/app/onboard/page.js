"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useArtist } from "@/context/ArtistContext";
import FormInput from "@/components/FormInput/page";
import { toast } from "sonner";

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  bio: yup.string().required("Bio is required"),
  category: yup
    .array()
    .min(1, "Select at least one category")
    .required("Category is required"),
  languages: yup
    .array()
    .min(1, "Select at least one language")
    .required("Language is required"),
  fee: yup.string().required("Fee range is required"),
  location: yup.string().required("Location is required"),
});

const categories = ["Speaker","Singer","Magician", "Dancer", "DJ"];
const languages = ["English", "Hindi", "Tamil", "Punjabi"];
const fees = [
  "Rs.5K - Rs.15K",
  "Rs.10K - Rs.20K",
  "Rs.15K - Rs.25K",
  "Rs.30K - Rs.50K",
];

export default function OnboardPage() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      category: [],
      languages: [],
    },
  });

  const { addArtist } = useArtist();

  const onSubmit = (data) => {
    const formData = { ...data };
    if (formData.image && formData.image.length > 0) {
      formData.image = formData.image[0].name;
    } else {
      delete formData.image;
    }
    addArtist(formData);
    toast.success("Artist successfully submitted!");
    reset();
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">Join as an Artist</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <FormInput
          label="Name"
          name="name"
          register={register}
          errors={errors}
        />

        <FormInput
          label="Bio"
          name="bio"
          register={register}
          errors={errors}
          type="textarea"
          rows={4}
        />

        <div>
          <label className="block font-medium mb-2">Category</label>
          <div className="flex flex-wrap gap-4">
            {categories.map((cat) => (
              <label key={cat} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  value={cat}
                  {...register("category")}
                  className="accent-cyan-600"
                />
                <span>{cat}</span>
              </label>
            ))}
          </div>
          {errors.category && (
            <p className="text-red-500 text-sm mt-1">
              {errors.category.message}
            </p>
          )}
        </div>

        <div>
          <label className="block font-medium mb-2">Languages Spoken</label>
          <div className="flex flex-wrap gap-4">
            {languages.map((lang) => (
              <label key={lang} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  value={lang}
                  {...register("languages")}
                  className="accent-cyan-600"
                />
                <span>{lang}</span>
              </label>
            ))}
          </div>
          {errors.languages && (
            <p className="text-red-500 text-sm mt-1">
              {errors.languages.message}
            </p>
          )}
        </div>

        <div>
          <label className="block font-medium mb-1">Fee Range</label>
          <select
            {...register("fee", { required: true })}
            className="w-full border p-2 rounded"
          >
            <option value="">Select Fee</option>
            {fees.map((f) => (
              <option key={f} value={f}>
                {f}
              </option>
            ))}
          </select>
          {errors.fee && (
            <p className="text-red-500 text-sm mt-1">{errors.fee.message}</p>
          )}
        </div>

        <FormInput
          label="Location"
          name="location"
          register={register}
          errors={errors}
        />

        <div>
          <label className="block font-medium">Profile Image (optional)</label>
          <input type="file" {...register("image")} className="w-full mt-1" />
        </div>

        <button
          type="submit"
          className="bg-cyan-600 text-white px-6 py-2 rounded hover:bg-cyan-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
