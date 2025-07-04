"use client"

import { Moon, Search, Sun } from "lucide-react"
import { Switch } from "@/components/ui/switch"
import Image from "next/image"
import styled from "styled-components"

const pokemons = [
    "#001 - Bulbasaur",
    "#002 - Ivysaur",
    "#003 - Venusaur",
    "#004 - Charmander",
    "#005 - Charmeleon",
    "#006 - Charizard",
    "#007 - Squirtle",
    "#008 - Wartortle",
    "#009 - Blastoise",
    "#010 - Caterpie",
    "#011 - Metapod",
    "#012 - Butterfree",
    "#013 - Weedle",
    "#014 - Kakuna",
    "#015 - Beedrill",
    "#016 - Pidgey",
    "#017 - Pidgeotto",
    "#018 - Pidgeot",
    "#019 - Rattata",
    "#020 - Raticate",
    "#021 - Spearow",
    "#022 - Fearow",
    "#023 - Ekans",
    "#024 - Arbok",
    "#025 - Pikachu",
    "#026 - Raichu",
    "#027 - Sandshrew",
    "#028 - Sandslash",
    "#029 - Nidoran♀",
    "#030 - Nidorina"
]

const Section = styled.section`
    width: 100%;
    height: 100%;
    min-height: 100vh;
    display: flex;
`

const AsideBar = styled.aside`
    width: 300px;
    height: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 25px;
    padding: 40px 20px;
    box-sizing: border-box;
    background-color: #DD4B4A;
`

const H2 = styled.h2`
    color: #FFFFFF;
    font-size: 0.875rem;
    font-weight: 400;
    text-align: center;
    margin: 0;
`

const SearchBox = styled.div`
    width: 100%;
    max-width: 250px;
    display: flex;
    align-items: center;
    gap: 5px;
    background-color: #FFFFFF;
    border-radius: 20px;
    padding: 7px 15px;
    box-sizing: border-box;
`

const SearchInput = styled.input`
    width: 100%;
    border: none;
    outline: none;
`

const Divider = styled.div`
    width: 100%;
    height: 1px;
    background-color: #FFFFFF;
`

const PokemonsList = styled.ul`
    width: 100%;
    height: 100%;
    max-height: calc(100vh - 350px);
    margin: 0;
    padding: 0;
    list-style-type: none;
    display: flex;
    flex-direction: column;
    gap: 20px;
    overflow: auto;

    &::-webkit-scrollbar {
        width: 10px;
        height: 10px;
    }

    &::-webkit-scrollbar-track {
        background: #FFFFFF;
        border-radius: 10px;
    }

    &::-webkit-scrollbar-thumb {
        background: #000000;
        border-radius: 10px;

        &:hover {
            background-color: #a1a1a1;
        }
    }
`

const PokemonListItem = styled.li`
    color: #FFFFFF;
    font-size: 1.25rem;
`

const Content = styled.section`
    width: 100%;
    height: 100%;
    min-height: 100vh;
    background-color: #00B4EC;
    padding: 50px;
    box-sizing: border-box;
`
const Header = styled.header`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #FFFFFF;
    margin-bottom: 50px;

    svg {
        width: 30px;
        height: 30px;
    }
`

const H1 = styled.h1`
    margin: 0;
    font-weight: 500;
`

const DarkModeBox = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
`
const InfoBox = styled.div`
    display: flex;
    width: 100%;
    min-height: 100%;
    height: calc(100vh - 190px);
`

const PokemonOverView = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 500px;
    height: 100%;
    overflow: auto;
    padding-right: 10px;

    &::-webkit-scrollbar {
        width: 10px;
        height: 10px;
    }

    &::-webkit-scrollbar-track {
        background: #FFFFFF;
        border-radius: 10px;
    }

    &::-webkit-scrollbar-thumb {
        background: #000000;
        border-radius: 10px;

        &:hover {
            background-color: #a1a1a1;
        }
    }
`

const PokemonImage = styled.div`
    width: 100%;
    height: 100%;
    min-height: 180px;
    background-color: #FFFFFF;
    border-radius: 10px;
    padding: 40px;
    box-sizing: border-box;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`

const Type = styled.div`
    width: 100%;
    height: 40px;
    border-radius: 10px;
    background-color: #FFFFFF;
    display: flex;
    gap: 20px;
    align-items: center;
    padding: 5px 20px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

    h3 {
        font-weight: 500;
    }

    h4 {
        color: #FFFFFF;
        padding: 3px;
        border-radius: 10px;
        width: 100px;
        text-align: center;
    }

    .green {
        background-color: green;
    }

    .purple {
        background-color: purple;
    }
`

const Status = styled.div`
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: space-between;
`

const Height = styled.div`
    width: 45%;
    height: 100%;
    background-color: #FFFFFF;
    border-radius: 10px;
    padding: 5px 20px;
    display: flex;
    align-items: center;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

    span {
        font-weight: 500;
    }
`

const Weight = styled.div`
    width: 45%;
    height: 100%;
    background-color: #FFFFFF;
    border-radius: 10px;
    padding: 5px 20px;
    display: flex;
    align-items: center;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

    span {
        font-weight: 500;
    }
`

const Attributes = styled.div`
    width: 100%;
    height: 130px;
    background-color: #FFFFFF;
    border-radius: 10px;
    padding: 20px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

    h3 {
        font-weight: 500;
        margin-bottom: 10px;
    }

    div {
        width: 100%;
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        gap: 12px;

        h4 {
            background-color: red;
            color: #FFFFFF;
            width: 30%;
            text-align: center;
            border-radius: 10px;
            padding: 3px;
        }
    }
`
export default function Dashboard() {
    return (
        <Section>
            <AsideBar>
                <Image
                    style={{ width: "238px", height: "49px" }}
                    src="https://cdn.riderize.com/miscellaneous/logo-pokedex.png"
                    width={297}
                    height={61}
                    alt="Logo Pokedex" />

                <H2>Everything you wanted to know about your favorite pocket monsters!</H2>

                <SearchBox>
                    <SearchInput type="text" placeholder="Search by name or number" />
                    <Search style={{ cursor: "pointer" }} />
                </SearchBox>

                <Divider />

                <PokemonsList>
                    {pokemons.map((pokemon, index) => <PokemonListItem key={index}>{pokemon}</PokemonListItem>)}
                </PokemonsList>
            </AsideBar>

            <Content>
                <Header>
                    <H1>{pokemons[0]}</H1>
                    <DarkModeBox>
                        <Sun />
                        <Switch className="cursor-pointer" />
                        <Moon />
                    </DarkModeBox>
                </Header>

                <InfoBox>
                    <PokemonOverView>
                        <PokemonImage>
                            <Image src="/images/bulbasaur.png" width={475} height={475} alt="Imagem do Pokemón" />
                        </PokemonImage>

                        <Type>
                            <h3>Type</h3>
                            <h4 className="green">GRASS</h4>
                            <h4 className="purple">POISON</h4>
                        </Type>

                        <Status>
                            <Height>
                                <h3><span>Height</span>: 2&apos;04&quot; / 0.7</h3>
                            </Height>
                            <Weight>
                                <h3><span>Weight</span>: 15.2lbs. / 6.9kg</h3>
                            </Weight>
                        </Status>

                        <Attributes>
                            <h3>Attributes</h3>
                            <div>
                                <h4>45 HP</h4>
                                <h4>45 SPEED</h4>
                                <h4>45 ATK</h4>
                                <h4>45 DEF</h4>
                                <h4>45 SP. ATK.</h4>
                                <h4>45 SP. DEF.</h4>
                            </div>
                        </Attributes>
                    </PokemonOverView>
                </InfoBox>
            </Content>
        </Section>
    )
}