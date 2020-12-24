# PokedexAPI

# O que é?
PokedexAPI é um projeto de implementação de uma API REST que simula uma Pokedex, responsável por informar diferentes dados sobre um Pokémon.

# Funcionamento (Rotas):
- Retornar toda a Pokedex ( _/ search_ )
- Retornar Pokémon por Id ( _/ search_ )
- Retornar Pokémon por nome ( _/ search_ )
- Retornar Pokémons que contenham tipo ( _/ types_ )
- Retornar Pokedex Regional ( _/ regions_ )

# Exemplo de Funcionamento

## Rotas "/search"
```sh
[domínio]/search
```
![Insomnia_r8Xr3oTs9G](https://user-images.githubusercontent.com/68029637/101536031-3734d480-3978-11eb-9a74-198039e6781b.png)

```sh
[domínio]/search/id/185
```

![Insomnia_O1qdMSg79K](https://user-images.githubusercontent.com/68029637/101536110-516eb280-3978-11eb-8317-dcde663ba26a.png)

```sh
[domínio]/search/name/Pikachu
```

![Insomnia_F1BKI2cU1S](https://user-images.githubusercontent.com/68029637/101536163-66e3dc80-3978-11eb-9725-03d2b0feb17d.png)

## Rota "/types"

```sh
[domínio]/types/Dragon
```

![Insomnia_qzgKfFR9B0](https://user-images.githubusercontent.com/68029637/101536240-7fec8d80-3978-11eb-9066-4950677f3a24.png)

## Rota "/regions"

```sh
[domínio]/regions/kanto
```

![Insomnia_ZtGrJTf8DH](https://user-images.githubusercontent.com/68029637/102628014-d2bc0700-4127-11eb-9267-e7f7cc884771.png)

## Aprendizado
Neste projeto pessoal pude botar em prática alguns conhecimentos em Express e Backend no geral, além de tornar um pouco mais palpável meus conceitos sobre os padrões REST e API's.
