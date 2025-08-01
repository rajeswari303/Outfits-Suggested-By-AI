export interface Outfit {
  name: string;
  description: string;
  accessories: string[];
  maleImage: string;
  femaleImage: string;
  tips: string[];
}

export interface OccasionData {
  name: string;
  description: string;
  maleOutfits: Outfit[];
  femaleOutfits: Outfit[];
}

export type OccasionType = 
  | 'festivals'
  | 'graduation'
  | 'family-gatherings'
  | 'casual-outing'
  | 'job-interview'
  | 'wedding'
  | 'parties';