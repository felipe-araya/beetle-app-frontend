export interface Finding {
    id?: string;
    scientific_type: string;
    author: string;
    characteristic: string;
    location_name: string;
    coordinate_x: number;
    coordinate_y: number;
    altitude: number;
    tolerance: string;
    region: string;
    date_of_creation: string;
    observer: string;
    quantity: number
    source_of_origin: string;
    genus: string;
    species: string;

  }
  