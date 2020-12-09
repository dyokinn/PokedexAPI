# O que é?
PokedexAPI é um projeto de implementação de uma API REST que simula uma Pokedex, responsável por informar diferentes dados sobre um Pokémon

# Funcionamento (Rotas):
- Retornar toda a Pokedex ( _/ search_ )
- Retornar Pokémon por Id ( _/ search_ )
- Retornar Pokémon por nome ( _/ search_ )
- Retornar Pokémons que contenham tipo ( _/ types_ )
- Retornar Pokedex Regional ( _/ regions_ )

# Exemplo de Funcionamento

## Rotas "/search"
> **_[domínio]/search_**

![Insomnia_r8Xr3oTs9G](https://user-images.githubusercontent.com/68029637/101536031-3734d480-3978-11eb-9a74-198039e6781b.png)

> **_[domínio]/search/id/185_**

![Insomnia_O1qdMSg79K](https://user-images.githubusercontent.com/68029637/101536110-516eb280-3978-11eb-8317-dcde663ba26a.png)

>**_[domínio]/search/name/Pikachu_**

![Insomnia_F1BKI2cU1S](https://user-images.githubusercontent.com/68029637/101536163-66e3dc80-3978-11eb-9725-03d2b0feb17d.png)

### Rota "/types"
>**_[domínio]/search/Dragon_**

![Insomnia_qzgKfFR9B0](https://user-images.githubusercontent.com/68029637/101536240-7fec8d80-3978-11eb-9066-4950677f3a24.png)

### Rota "/regions"
>**_[domínio]/regions/{regionName}        letra minúscula!_**

![Insomnia_ZtGrJTf8DH](https://user-images.githubusercontent.com/68029637/101536306-9692e480-3978-11eb-9d11-6fa3b1083076.png)

## Aprendizado
Neste projeto pessoal pude botar em prática alguns conhecimentos em Express e Backend no geral, além de tornar um pouco mais palpável meu conceitos sobre os padrões REST e API's.
