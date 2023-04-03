import type { Ability, Form, Index, Mfe, Species, Sprites, Stat, Type } from "./DetailPokemon"
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


export function colorPokemon(type: string): string{
  return pokemonTypes[type].medium+"d4"
}

export function iconPokemon(type: string): string{
  return pokemonTypes[type].icon
}

export function changeMeasurement(measurement: number): number{
  return measurement/10
}
