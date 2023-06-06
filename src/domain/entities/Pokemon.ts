import type { Ability, Form, Index, Mfe, Species, Sprites, Stat, Type } from "./DetailPokemon"
import type { EvolutionChain, FlavorTextEntry, Genera, Name, PalParkEncounter, PokedexNumber, Variety } from "./PokemonSpecies";

import { pokemonTypes } from "../../lib/pokemonType";

export interface PokeIndex{
    count: number,
    next: string,
    previous?: string
    results: BasicResponse[]
}

export interface BasicResponse{
    name: string,
    url: string
}

export interface Pokemon {
  abilities: Ability[]
  base_experience: number
  forms: Form[]
  game_indices: Index[]
  height: number
  held_items: any[]
  id: number
  is_default: boolean
  location_area_encounters: string
  moves: Mfe[]
  name: string
  order: number
  past_types: any[]
  species: Species
  sprites: Sprites
  stats: Stat[]
  types: Type[]
  weight: number
}

export interface PokemonSpecies {
  base_happiness: number
  capture_rate: number
  color: BasicResponse
  egg_groups: BasicResponse[]
  evolution_chain: EvolutionChain
  evolves_from_species: BasicResponse
  flavor_text_entries: FlavorTextEntry[]
  form_descriptions: any[]
  forms_switchable: boolean
  gender_rate: number
  genera: Genera[]
  generation: BasicResponse
  growth_rate: BasicResponse
  habitat: BasicResponse
  has_gender_differences: boolean
  hatch_counter: number
  id: number
  is_baby: boolean
  is_legendary: boolean
  is_mythical: boolean
  name: string
  names: Name[]
  order: number
  pal_park_encounters: PalParkEncounter[]
  pokedex_numbers: PokedexNumber[]
  shape: BasicResponse
  varieties: Variety[]
}


export interface PokemonType {
  [key: string]: PokeTypeDetail
}

export interface PokeTypeDetail{
  light: string
  medium: string
  icon: string
}


export function imagePokemon(id: number): string{
  const baseImageURL = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/"
  return baseImageURL+id+".png"
} 


export function colorPokemon(type: string, opacity: string): string{
  return pokemonTypes[type].medium+opacity
}

export function iconPokemon(type: string): string{
  return pokemonTypes[type].icon
}

export function changeMeasurement(measurement: number): number{
  return measurement/10
}

export function genderPrecentage(genderRate: number): number{
  return genderRate !== -1 ? (genderRate / 8) * 100 : -1;
}

