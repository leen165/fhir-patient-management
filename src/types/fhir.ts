export interface HumanName {
  family?: string;
  given?: string[];
}

export interface Patient {
  id: string;
  name?: HumanName[];
  gender?: string;
  birthDate?: string;
  address?: {
    city?: string;
    country?: string;
  }[];
}
