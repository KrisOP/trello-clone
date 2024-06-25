
interface Info {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  }
  
  // Define la interfaz para el origen y la localización del personaje
  interface OriginLocation {
    name: string;
    url: string;
  }
  
  // Define la interfaz para los personajes
 export interface Character {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    origin: OriginLocation;
    location: OriginLocation;
    image: string;
    episode: string[];
    url: string;
    created: string;
  }
  
  // Define la interfaz para el JSON completo
  export interface RickMorty {
    info: Info;
    results: Character[];
  }