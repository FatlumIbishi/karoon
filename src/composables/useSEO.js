// composables/useSEO.js
import { watchEffect } from 'vue'

export function useSEO({
  title = 'Karoon - Långkornigt Basmatiris',
  description = 'Karoon erbjuder högkvalitativt långkornigt basmatiris för alla dina matlagningsbehov.',
  keywords = 'basmati, basmatiris, långkornigt ris, högkvalitativt ris, Karoon',
  image = 'https://karoon.se/images/metaimg.jpg',
  url = 'https://karoon.se',
  type = 'website',
  robots = 'index, follow',
}) {
  watchEffect(() => {
    document.title = title

    const setMeta = (name, content, attr = 'name') => {
      let tag = document.querySelector(`meta[${attr}="${name}"]`)
      if (!tag) {
        tag = document.createElement('meta')
        tag.setAttribute(attr, name)
        document.head.appendChild(tag)
      }
      tag.setAttribute('content', content)
    }

    // Basic
    setMeta('description', description)
    setMeta('keywords', keywords)
    setMeta('robots', robots)

    // Open Graph (Facebook, LinkedIn)
    setMeta('og:title', title, 'property')
    setMeta('og:description', description, 'property')
    setMeta('og:image', image, 'property')
    setMeta('og:url', url, 'property')
    setMeta('og:type', type, 'property')

    // Twitter Card
    setMeta('twitter:card', 'summary_large_image')
    setMeta('twitter:title', title)
    setMeta('twitter:description', description)
    setMeta('twitter:image', image)
    setMeta('twitter:site', '@karoonrice')

    // Canonical link
    let canonical = document.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
    }
    canonical.setAttribute('href', url)

    // Structured data (schema.org)
    const existingJSON = document.querySelector('script[type="application/ld+json"]')
    if (existingJSON) existingJSON.remove()
    const jsonLd = document.createElement('script')
    jsonLd.setAttribute('type', 'application/ld+json')
    jsonLd.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Brand',
      name: 'Karoon',
      url,
      logo: image,
      description,
      sameAs: [
        'https://www.facebook.com/karoonrice',
        'https://www.instagram.com/karoonrice',
      ],
    })
    document.head.appendChild(jsonLd)
  })
}
