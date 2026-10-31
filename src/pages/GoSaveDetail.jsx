import { useEffect } from 'react'

const pdfPath = '/documents/GoSave2026.pdf'

export default function GoSaveDetail() {
  useEffect(() => {
    document.title = 'GoSave | Protective Footwear | SMJ Teknik'
  }, [])

  return (
    <main className="site-container" style={{ paddingTop: '2rem', paddingBottom: '3rem' }}>
      <div style={{ marginBottom: '1.5rem' }}>
        <a href="/safety-equipment/protective-footwear">
          ? Back to Protective Footwear
        </a>
      </div>

      <header style={{ marginBottom: '1.5rem' }}>
        <p className="catalog-eyebrow">Protective Footwear</p>
        <h1>GoSave</h1>
        <p>Product details and specifications</p>
      </header>

      <div
        style={{
          width: '100%',
          height: '80vh',
          minHeight: '600px',
          border: '1px solid #e5e7eb',
          borderRadius: '12px',
          overflow: 'hidden',
          background: '#f8fafc',
        }}
      >
        <iframe
          src={pdfPath}
          title="GoSave Product Detail"
          width="100%"
          height="100%"
          style={{ border: 'none' }}
        />
      </div>

      <div
        style={{
          display: 'flex',
          gap: '1rem',
          flexWrap: 'wrap',
          marginTop: '1.5rem',
        }}
      >
        <a href={pdfPath} target="_blank" rel="noreferrer">
          Open PDF in New Tab
        </a>

        <a href={pdfPath} download>
          Download PDF
        </a>
      </div>
    </main>
  )
}
