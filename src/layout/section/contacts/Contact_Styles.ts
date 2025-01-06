import styled from "styled-components"
import { theme } from "../../../styles/Theme"

const Contacts = styled.section`
    position: relative; //скрытие текстуры от библиотеки
`
const Form = styled.form`
    max-width: 500px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    margin: 0 auto;

    textarea {
        resize: none;
        height: 155px;
    }
`
const Field = styled.input`
    width: 100%;
    background-color: ${theme.colors.secondaryBg};
    border: 1px solid ${theme.colors.borderColor};
    padding: 7px 15px;

    font-family: "Poppins", sans-serif; //указываем шрифт так как введенонному тексту браузер перезатирает шрифт
    font-weight: 400;
    font-size: 12px;
    letter-spacing: 0.05em;

    color: ${theme.colors.font};

    &::placeholder {
        color: ${theme.colors.placeholder};
        text-transform: capitalize;
    }

    //изменеие оутлайна браузеровского
    &:focus-visible {
        outline: 1px solid ${theme.colors.borderColor};
    }
`
export const S = {
    Contacts,
    Form,
    Field
}