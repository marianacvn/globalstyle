import styled from 'styled-components';
import ButtonStyled from './Button';
import { Theme } from '../Theme';


//  Criando o botão, e dentro colocar os estilos do botão
export const StyledButton = styled.button`
    background-color: ${(prop) => prop.backgroundColor};
    width: 120px;
    height: ${({ theme }) => Theme.sizes.xxl};

    &: hover {
        background-color: white;
    }
`

// estilizando algo que já existe
export const Button2 = styled(ButtonStyled)`
    background-color: ${({theme}) => Theme.colors.secondary};
    width: 120px;
    height: 60px;
`






