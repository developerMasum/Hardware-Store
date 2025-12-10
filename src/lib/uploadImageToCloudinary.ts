/* eslint-disable @typescript-eslint/no-explicit-any */

import { config } from "../config/config";

const cloud_name = "dyhioyowb";
const upload_preset = "cycle_wave";

export const uploadImageToCloudinary = async (
  imageFile: File | null | undefined
): Promise<string> => {
  if (!imageFile) {
    // toast.error("No image file provided");
    alert("No image file provided");
    return "";
  }

  const formData = new FormData();
  formData.append("file", imageFile);
  formData.append("upload_preset", upload_preset);
  formData.append("cloud_name", cloud_name);

  try {
    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`,
      {
        method: "POST",
        body: formData,
      }
    );

    const data = await response.json();
    console.log(data);

    if (data.secure_url) {
      return data.secure_url as string;
    } else {
      //   toast.error("Image upload failed.");
      alert("Image upload failed.");
      return "";
    }
  } catch (error: any) {
    // // toast.error(`Upload error: ${error.message || "Something went wrong."}`, {
    //   duration: 2000,
    // });
    alert(`Upload error: ${error.message || "Something went wrong."}`);
    return "";
  }
};
