import { MessageCircle } from 'lucide-react'
import { siteConfig } from '../config/site.js'

export default function WhatsAppButton() {
  return (
    <a
      href={siteConfig.whatsappUrl}
      className="whatsapp-float"
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with us on WhatsApp"
    >
      <span className="whatsapp-tooltip">Chat with us</span>
      <MessageCircle size={25} strokeWidth={2.2} aria-hidden="true" />
    </a>
  )
}
