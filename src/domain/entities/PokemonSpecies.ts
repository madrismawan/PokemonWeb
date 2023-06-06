export interface BasicResponse{
    name: string,
    url: string
}

export interface EvolutionChain {
    url: string
}

export interface FlavorTextEntry {
    flavor_text: string
    language: BasicResponse
    version: BasicResponse
}

export interface Genera {
    genus: string
    language: BasicResponse
}

export interface Name {
    language: BasicResponse
    name: string
}

export interface PalParkEncounter {
    area: BasicResponse
    base_score: number
    rate: number
}

export interface PokedexNumber {
    entry_number: number
    pokedex: BasicResponse
}

export interface Variety {
    is_default: boolean
    pokemon: BasicResponse
}