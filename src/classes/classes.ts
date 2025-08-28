import axios from "axios";
import { PokeServices} from "../api/pokeServices"
export class Student {
    //global
    //id: number;
    //name: string;
    constructor(public id: number, private name: string,public pokeServices: PokeServices) {
        this.id = id;
        this.name = name;
        this.pokeServices;
    }
    get Getname() : string {
        return this.name;
    }

    set SetName(name: string) {
        this.name = name;
    }

    joinClass(){
        console.log(`the student ${this.name} now in class`);

    }

     async  getScore(): Promise<number>{
        return 10
    }

    async getStarWarsCharacters(){
        const characters = axios.get(`https://pokeapi.co/api/v2/pokemon/1`)
        return characters
    }

    async getPokemonData(id:number){
        return this.pokeServices.getPokemosn(id);
    }



}

//export const johan1 = new Student(5,"johan",);
//console.log("cositas futuras", johan1.getScore());
//johan1.joinClass()
// export const score: number = await johan1.getScore();
//const starwarscharacters =await johan1.getStarWarsCharacters();
//console.log(starwarscharacters.data);
const pokeserviceinstance = new PokeServices;
const j = new Student(5,"j",pokeserviceinstance);
const pokeomn= await j.getPokemonData
console.log(pokeomn.name);
