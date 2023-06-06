import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { PokemonEntity } from './pokemon.entity';
import { PokemonService } from './pokemon.service';
import { CreatePokemonDto } from './create-pokemon.dto';
import { inputPokemon } from './pokemon.input';

@Resolver((of) => PokemonEntity)
export class PokemonResolver {
    constructor(private readonly pokemonService: PokemonService) {}

    @Query(() => [CreatePokemonDto])
    async pokemon() {
        return this.pokemonService.getPokemons();
    }

    @Mutation(() => CreatePokemonDto)
    async createPokemon(@Args('data') data: inputPokemon) {
        return this.pokemonService.createPokemon(data);
    }
}
