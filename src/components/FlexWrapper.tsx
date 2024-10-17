import styled from "styled-components";

type FlexWrapperPropsType = {
    direction?: string
    justify?: string
    align?: string
    wrap?: string
}

/* универсальный компонент в который будут передавать свойства для флексов (исп. как обертка)
и применял для тех элементов которые будут выравниваться */

export const FlexWrapper = styled.div<FlexWrapperPropsType>`
    display: flex;
    flex-direction: ${props => props.direction || "row"}; /* пропс или значение по умолчанию   */
    justify-content: ${props => props.justify || "flex-start"};
    align-items: ${props => props.align || "stretch"};
    flex-wrap: ${props => props.wrap || "nowrap"};
    height: 100%; //высота 100% от родителя
`