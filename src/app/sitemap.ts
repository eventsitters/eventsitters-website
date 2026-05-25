import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://www.eventsitters.nz",             lastModified: new Date(), changeFrequency: "monthly", priority: 1   },
    { url: "https://www.eventsitters.nz/about-us",    lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: "https://www.eventsitters.nz/packages",    lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: "https://www.eventsitters.nz/contact-us",  lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
  ];
}
