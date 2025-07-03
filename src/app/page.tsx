"use client"

import { useRouter } from "next/navigation"
import Image from "next/image"
import styled from "styled-components"

const Header = styled.header`
    width: 100%;
    height: 100%;
    min-height: 80px;
    background-color: #DD4B4A;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 10px 30px;
    box-sizing: border-box;
`

const SettingsButton = styled.button`
    display: flex;
    background-color: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
`

const LoginSection = styled.section`
    width: 100%;
    height: calc(100vh - 80px);
    background-color: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    box-sizing: border-box;
`

const LoginForm = styled.form`
    width: 100%;
    max-width: 300px;
    height: max-content;
    display: flex;
    flex-direction: column;
    gap: 10px;
`

const EmailInput = styled.input`
    padding: 10px;
    outline: none;
    border: 1px solid #cfcfcf;
`

const LoginButton = styled.button`
    width: 120px;
    height: 35px;
    background-color: #0054D0;
    border: none;
    border-radius: 3px;
    color: #FFFFFF;
    font-weight: 600;
    cursor: pointer;
`
export default function Login() {

    const router = useRouter()

    function handleSubmit(event: React.FormEvent) {
        event.preventDefault()
        router.push("/dashboard")
    }

    return (
        <>
            {/* Cabeçalho */}
            <Header>
                <Image
                    style={{ width: "238px", height: "49px" }}
                    src="https://cdn.riderize.com/miscellaneous/logo-pokedex.png"
                    width={297}
                    height={61}
                    alt="Logo Pokedex" />

                <SettingsButton>
                    <Image
                        style={{ width: "30px", height: "30px" }}
                        src="/images/settings.svg"
                        width={135}
                        height={135}
                        alt="Ícone Configuração"
                    />
                </SettingsButton>
            </Header>

            {/* Formulário de acesso */}
            <LoginSection>
                <LoginForm onSubmit={handleSubmit}>
                    <Image
                        style={{ alignSelf: "center" }} 
                        src="/images/pokeball.svg"
                        width={135}
                        height={135}
                        alt="Pokebola"
                    />
                    <EmailInput placeholder="Seu melhor e-mail" type="email" required/>
                    <LoginButton type="submit">Acessar</LoginButton>
                </LoginForm>
            </LoginSection>
        </>
    )
}