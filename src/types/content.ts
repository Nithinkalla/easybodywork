export interface Service {
  title: string;
  desc: string;
  image: string;
}

export interface Contact {
  phone: string;
  email: string;
  address: string;
  whatsapp: string;
  map: string;
}

export interface SiteContent {
  siteName: string;
  heroImage: string;
  heroTitle: string;
  heroSubtitle: string;
  services: Service[];
  gallery: string[];
  contact: Contact;
}
