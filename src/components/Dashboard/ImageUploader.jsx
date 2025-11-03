import { useState } from 'react';

export default function ImageUploader() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const handleClear = () => {
    setSelectedImage(null);
    setPreviewUrl(null);
  };

  return (
    <div
      style={{
        maxWidth: '500px',
        margin: '2rem auto',
        padding: '1.5rem',
        border: '1px solid #ddd',
        borderRadius: '10px',
        backgroundColor: '#fff',
        textAlign: 'center',
        fontFamily: 'sans-serif',
      }}
    >
      <h2 style={{ marginBottom: '1rem', color: '#111', fontSize: '1.5rem' }}>
        Upload Image
      </h2>

      {/* Upload Input */}
      <label
        style={{
          display: 'block',
          padding: '1rem',
          border: '2px dashed #cb5815ff',
          borderRadius: '10px',
          cursor: 'pointer',
          marginBottom: '1rem',
          
        }}
      >
        {selectedImage ? selectedImage.name : 'Click to select image'}
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          style={{ display: 'none' }}
        />
      </label>

      {/* Buttons */}
      {selectedImage && (
        <div style={{ marginBottom: '1rem', display: 'flex', justifyContent: 'center', gap: '10px' }}>
          <button
            onClick={handleClear}
            style={{
              padding: '0.5rem 1rem',
              border: '1px solid #f00',
              borderRadius: '5px',
              backgroundColor: 'white',
              color: '#f00',
              cursor: 'pointer',
            }}
          >
            Clear
          </button>
          <button
            style={{
              padding: '0.5rem 1rem',
              border: '1px solid #0a0',
              borderRadius: '5px',
              backgroundColor: 'white',
              color: '#0a0',
              cursor: 'pointer',
            }}
          >
            Upload
          </button>
        </div>
      )}

      {/* Preview */}
      {previewUrl && (
        <div>
          <p style={{ marginBottom: '0.5rem', color: '#555' }}>Preview:</p>
          <img
            src={previewUrl}
            alt="Preview"
            style={{ width: '100%', maxHeight: '300px', objectFit: 'contain', borderRadius: '5px' }}
          />
        </div>
      )}
    </div>
  );
}
