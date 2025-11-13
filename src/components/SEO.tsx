interface SEOProps {
  title?: string
  description?: string
}

export function SEO({ title, description }: SEOProps) {
  const fullTitle = title ? `${title} | Restaurante` : 'Restaurante | Sabores Únicos'
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
