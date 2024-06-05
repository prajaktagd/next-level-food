"use client";
import { useRef, useState } from "react";

import styles from "./image-picker.module.css";
import Image from "next/image";

const ImagePicker = ({
  label,
  name,
}: Readonly<{ label: string; name: string }>) => {
  const [pickedImage, setPickedImage] = useState("");
  const imageInputRef = useRef<HTMLInputElement>(null);

  const handleButtonClick = () => {
    imageInputRef.current?.click();
  };

  const handleFileInputChange = (event: {
    target: { files: FileList | null };
  }) => {
    const file = event.target.files?.[0];

    if (!file) {
      setPickedImage("");
      return;
    }

    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPickedImage(fileReader.result?.toString() || "");
    };
    fileReader.readAsDataURL(file);
  };

  const imagePreview = pickedImage ? (
    <Image src={pickedImage} alt="The image selected by the user" fill />
  ) : (
    <p>No image picked yet!</p>
  );

  return (
    <div className={styles.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={styles.controls}>
        <div className={styles.preview}>{imagePreview}</div>
        <input
          className={styles.input}
          type="file"
          id={name}
          accept="image/png,  image/jpeg"
          name={name}
          ref={imageInputRef}
          onChange={handleFileInputChange}
          required
        />
        <button
          className={styles.button}
          type="button"
          onClick={handleButtonClick}
        >
          Pick an Image
        </button>
      </div>
    </div>
  );
};

export default ImagePicker;
