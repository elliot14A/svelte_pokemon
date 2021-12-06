export class Pokemon {
    name: string
    url: string
    id: number

    fromJson(json: unknown): Pokemon {
        this.id = json["id"]
        this.name = json["name"]
        this.url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${json["id"]+1}.png`
        return this;
    }
}