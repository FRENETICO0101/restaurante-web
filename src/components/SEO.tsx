interface SEOProps {
  title?: string
  description?: string
}

export function SEO({ title, description }: SEOProps) {
  const brand = "L'MIELE BAKERY & BISTRO"
  const fullTitle = title ? `${title} | ${brand}` : brand
  return (
    <>
      <title>{fullTitle}</title>
      {description && <meta name="description" content={description} />}
      {title && <meta property="og:title" content={fullTitle} />}
      {description && <meta property="og:description" content={description} />}
    </>
  )
}

export default SEO
