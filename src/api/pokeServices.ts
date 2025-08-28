import axios from "axios";
import type {PokeResponse} from "../interfaces/pokeresponse";

export interface httpadapter{
    getPokemosn1 :<T>() => Promise<T>;


}
export class PokeServices implements httpadapter{
    url: string = "https://pokeresponse.com/api/v2/pokemon/";

    async getPokemosn (pokeId: number): Promise<PokeResponse[]>{
        const {data} = await axios.get<PokeResponse[]> (`${this.url}${pokeId}`);
        return data

    }

    async getPokemosn1<T>(pokeId: number): Promise<T>{
        const response = await fetch(`${this.url}${pokeId}`);
        const {data} =await response.json();
        return data;
    }
}