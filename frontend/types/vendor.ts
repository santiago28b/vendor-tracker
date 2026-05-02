export interface Vendor {
  vendorId?: string; // Optional when creating — the Lambda generates it
  name: string;
  category: string;
  contactEmail: string;
  createdAt?: string;
}