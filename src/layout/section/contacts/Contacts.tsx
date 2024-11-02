import { SectionTitle } from "../../../components/SectionTitle";
import { Button } from "../../../components/Button";
import { Container } from "../../../components/Container";
import {S} from "./Contact_Styles";
import emailjs from '@emailjs/browser'; /* импорт для библиотеки emailjs.com */
import { ElementRef, useRef } from "react";



export const Contact = () => {
    const form = useRef<ElementRef<'form'>>(null);

    const sendEmail = (e: any) => {
        e.preventDefault();

        if(!form.current) return

        emailjs
        .sendForm('service_51lnnjb', 'template_jp65qxt', form.current, {
            publicKey: '1rSCE8QE0htoWJYe3',
        })
        .then(
            () => {
            console.log('SUCCESS!');
            },
            (error) => {
            console.log('FAILED...', error.text);
            },
        );
        e.target.reset(); /* -обнуление формы */
    };


    return (
        <S.Contacts id={"contact"}> {/* для якорной ссылки */}
            <Container>
                <SectionTitle>Contact</SectionTitle>
                <S.Form ref={form} onSubmit={sendEmail}>
                    <S.Field required placeholder={"name"} name={"user_name"}/>
                    <S.Field required placeholder={"email"} name={"emailrequired "}/>
                    <S.Field required placeholder={"subject"} name={"subject"}/> 
                    <S.Field required placeholder={"message"} as={"textarea"} name={"message"}/>
                    <Button type ={"submit"}>Send message</Button>
                </S.Form>
            </Container>
        </S.Contacts>
    );
};

