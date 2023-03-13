export interface PokemonList{
    count: number,
    next: string,
    previous: string
    results: []
}

export interface Pokemon{
    name: string,
    url: string
}

export interface DetailPokemon {
    id: number;
    name: string;
    base_experience: number;
    height: number;
    weight: number;
    types: Array<{
      slot: number;
      type: {
        name: string;
        url: string;
      };
    }>;
    sprites: {
      front_default: string;
      front_shiny: string;
    };
    abilities: Array<{
      ability: {
        name: string;
        url: string;
      };
      is_hidden: boolean;
      slot: number;
    }>;
  }
