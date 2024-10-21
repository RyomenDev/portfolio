import React from "react";
import { Helmet } from "react-helmet";

const SEO = ({ seoData }) => {
  return (
    <Helmet>
      {/* Primary SEO Tags */}
      <title>{seoData.title}</title>
      <meta name="title" content={seoData.title} />
      <meta name="author" content={seoData.author} />
      <meta name="description" content={seoData.description} />
      <meta name="keywords" content={seoData.keywords.join(", ")} />
      <link rel="canonical" href={seoData.url} />
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="language" content="English" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="application-name" content={seoData.title} />
      <meta name="robots" content="index,follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="mobile-web-app-capable" content="yes" />{" "}

      {/* Mobile friendly */}
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={seoData.url} />
      <meta property="og:title" content={seoData.title} />
      <meta property="og:description" content={seoData.description} />
      <meta property="og:image" content={seoData.image} />
      <meta property="og:site_name" content={seoData.title} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={seoData.url} />
      <meta property="twitter:title" content={seoData.title} />
      <meta property="twitter:description" content={seoData.description} />
      <meta property="twitter:image" content={seoData.image} />

      {/* Structured Data for Google (Schema Markup) */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: seoData.author,
          jobTitle: "Full Stack Developer",
          url: seoData.url,
          sameAs: [
            "https://github.com/RyomenDev",
            "https://www.linkedin.com/in/akash-mishra-iiit/",
          ],
          description: seoData.description,
          image: seoData.image,
        })}
      </script>

      {/* Prefetch & Preload Critical Resources */}
      <link rel="prefetch" href="/path-to-critical-resource" />
      <link
        rel="preload"
        href="/path-to-font.woff2"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      />
      <link rel="preload" href={seoData.image} as="image" />

      {/* Lazy Loading for Images */}
      <link rel="lazyload" href={seoData.image} />

      {/* Favicon and App Icons */}
      <link rel="manifest" href="/manifest.json" />
      <link rel="apple-touch-icon" sizes="120x120" href="./favicon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="./favicon.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="./favicon.png" />
      
      {/* Async or Defer Scripts for Performance */}
      <script src="/SEO/script_1.js" async></script>
      <script src="/SEO/script_2.js" defer></script>
      {/* Minified CSS/JS (if applicable) */}
      {/* <link rel="stylesheet" href="/path/to/minified-styles.css" /> */}
      {/* <script src="/path/to/minified-scripts.js" defer></script> */}
      {/* Optimize Images with Lazy Loading */}
      <link rel="preload" href={seoData.image} as="image" loading="lazy" />
    </Helmet>
  );
};

export default SEO;
