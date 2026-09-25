"""
Script to extract and optimize preview pages from PDF files for web flipbook reading.
Renders pages as crisp WebP images without exposing downloadable PDFs.
"""

import os
import io
from PIL import Image
import fitz

BOOKS = [
    {
        "pdf": "podio-kids.pdf",
        "output_dir": "public/previews/podio-kids",
    },
    {
        "pdf": "podio-adults.pdf",
        "output_dir": "public/previews/podio-adults",
    },
]

def generate():
    root = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    for book in BOOKS:
        pdf_path = os.path.join(root, book["pdf"])
        out_dir = os.path.join(root, book["output_dir"])
        if not os.path.exists(pdf_path):
            print(f"Skipping {book['pdf']} (not found at {pdf_path})")
            continue
        
        os.makedirs(out_dir, exist_ok=True)
        doc = fitz.open(pdf_path)
        print(f"Processing {book['pdf']} ({len(doc)} pages)...")
        
        zoom = 2.0  # 144 DPI high resolution
        mat = fitz.Matrix(zoom, zoom)
        
        for i, page in enumerate(doc):
            pix = page.get_pixmap(matrix=mat, alpha=False)
            img = Image.open(io.BytesIO(pix.tobytes("png")))
            out_file = os.path.join(out_dir, f"page-{i+1}.webp")
            img.save(out_file, "WEBP", quality=88, method=6)
            print(f"  -> Generated {out_file} ({img.width}x{img.height})")
            
    print("Done generating preview pages!")

if __name__ == "__main__":
    generate()
