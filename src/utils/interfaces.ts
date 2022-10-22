export interface IPokemon {
  base_happiness: number;
  capture_rate: number;
  color: {
    name: string;
    url: string;
  };
  egg_groups: unknown[];
  evolution_chain: {
    url: string;
  };
  evolves_from_species: unknown;
  flavor_text_entries: unknown[];
  form_descriptions: unknown[];
  forms_switchable: boolean;
  gender_rate: number;
  genera: unknown[];
  generation: {
    name: string;
    url: string;
  };
  growth_rate: {
    name: string;
    url: string;
  };
  habitat: {
    name: string;
    url: string;
  };
  has_gender_differences: boolean;
  hatch_counter: number;
  height?: number;
  id: number;
  is_baby: boolean;
  is_legendary: boolean;
  is_mythical: boolean;
  name: string;
  names: unknown[];
  order: number;
  pal_park_encounters: unknown[];
  pokedex_numbers: unknown[];
  shape: {
    name: string;
    url: string;
  };
  stats?: unknown;
  sprites?: unknown;
  types?: unknown;
  varieties: unknown[];
  weight?: number;
}

export interface IEvolutionChain {
  evolution_details: unknown[];
  evolves_to: IEvolutionChain[];
  is_baby: boolean;
  species: {
    name: string;
    url: string;
  };
}
