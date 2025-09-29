import { Helmet } from "react-helmet-async";

interface StructuredDataProps {
  type: 'LocalBusiness' | 'Service' | 'Organization';
  data: any;
}

const StructuredData = ({ type, data }: StructuredDataProps) => {
  const getStructuredData = () => {
    const baseData = {
      "@context": "https://schema.org",
      "@type": type,
      ...data
    };

    if (type === 'LocalBusiness') {
      return {
        ...baseData,
        "name": "Elinkcat - Consultoria IA Barcelona",
        "description": "Consultoria d'intel·ligència artificial per empreses de Barcelona i Catalunya",
        "url": "https://elinkcat.com",
        "areaServed": ["Barcelona", "Catalunya", "Spain"],
        "serviceType": ["Consultoria IA", "Automatització", "Solucions digitals"],
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Barcelona",
          "addressRegion": "Catalunya",
          "addressCountry": "ES"
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "customer service",
          "areaServed": "ES",
          "availableLanguage": ["ca", "es", "en"]
        }
      };
    }

    if (type === 'Service') {
      return {
        ...baseData,
        "name": "Consultoria IA Barcelona",
        "description": "Consultoria d'intel·ligència artificial especialitzada per pimes de Barcelona i Catalunya",
        "provider": {
          "@type": "Organization",
          "name": "Elinkcat"
        },
        "areaServed": ["Barcelona", "Catalunya"],
        "serviceType": "Consultoria tecnològica IA"
      };
    }

    return baseData;
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(getStructuredData())}
      </script>
    </Helmet>
  );
};

export default StructuredData;