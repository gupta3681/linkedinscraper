// src/components/UrlInputForm.tsx
import { useState, FormEvent } from 'react';

interface UrlInputFormProps {
  onSubmit: (url: string) => void;
}

const UrlInputForm: React.FC<UrlInputFormProps> = ({ onSubmit }) => {
  const [url, setUrl] = useState<string>('');

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    onSubmit(url);
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <input
        type="text"
        placeholder="Enter the LinkedIn URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        style={{ padding: '8px', margin: '0 0 10px', fontSize: '16px' }}
      />
      <button type="submit" style={{ padding: '10px', fontSize: '16px' }}>
        Scrape
      </button>
    </form>
  );
};

export default UrlInputForm;
