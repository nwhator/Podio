import fs from "fs";
import path from "path";

export interface GalleryItem {
  src: string;
  alt: string;
}

export interface GalleryFolder {
  id: string;
  name: string;
  description?: string;
  coverImage: string;
  images: GalleryItem[];
}

const formatFolderName = (folderName: string): string => {
  if (
    folderName.toLowerCase().includes("workshop") ||
    folderName.toLowerCase().includes("launch")
  ) {
    return "Podio Workshop and Book Launch";
  }
  return folderName
    .replace(/[-_]/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
};

const folderDescriptions: Record<string, string> = {
  "podio-workshop-and-book-launch":
    "Memorable moments, speeches, engaging activities, and celebrations from our youth public speaking workshop and book launch event.",
};

export function getGalleryFolders(): GalleryFolder[] {
  const galleryDir = path.join(process.cwd(), "public", "gallery");
  const validExtensions = new Set([
    ".jpg",
    ".jpeg",
    ".png",
    ".webp",
    ".avif",
    ".gif",
  ]);

  if (!fs.existsSync(galleryDir)) {
    return [];
  }

  const entries = fs.readdirSync(galleryDir, { withFileTypes: true });
  const folders: GalleryFolder[] = [];

  // 1. Scan subdirectories (albums)
  for (const entry of entries) {
    if (entry.isDirectory()) {
      const subDirPath = path.join(galleryDir, entry.name);
      const subFiles = fs.readdirSync(subDirPath);
      const images: GalleryItem[] = [];

      for (const file of subFiles) {
        const ext = path.extname(file).toLowerCase();
        if (validExtensions.has(ext)) {
          images.push({
            src: `/gallery/${entry.name}/${encodeURIComponent(file)}`,
            alt: `${formatFolderName(entry.name)} photo`,
          });
        }
      }

      if (images.length > 0) {
        folders.push({
          id: entry.name,
          name: formatFolderName(entry.name),
          description:
            folderDescriptions[entry.name] ||
            `Collection of photos from ${formatFolderName(entry.name)}.`,
          coverImage: images[0].src,
          images,
        });
      }
    }
  }

  // 2. Scan any root gallery images as fallback or dedicated folder
  const rootImages: GalleryItem[] = [];
  for (const entry of entries) {
    if (entry.isFile()) {
      const ext = path.extname(entry.name).toLowerCase();
      if (validExtensions.has(ext)) {
        rootImages.push({
          src: `/gallery/${encodeURIComponent(entry.name)}`,
          alt: "Podio Workshop and Book Launch photo",
        });
      }
    }
  }

  // If no subfolder exists yet, group root images under "Podio Workshop and Book Launch"
  if (folders.length === 0 && rootImages.length > 0) {
    folders.push({
      id: "podio-workshop-and-book-launch",
      name: "Podio Workshop and Book Launch",
      description: folderDescriptions["podio-workshop-and-book-launch"],
      coverImage: rootImages[0].src,
      images: rootImages,
    });
  }

  return folders;
}
