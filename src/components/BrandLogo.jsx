export default function BrandLogo({ className = '' }) {
  return (
    <img
      src="/images/logo-smj.jpg"
      alt="SMJ Teknik — Safety Equipment & Tools"
      className={`brand-logo ${className}`}
      width="176"
      height="56"
    />
  )
}
