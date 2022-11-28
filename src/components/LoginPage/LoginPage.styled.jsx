import styled from 'styled-components';
//import { Button } from '@mui/material';

export const FormContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 618px;
    margin-top: 148px;
    margin-left: auto;
    margin-right: auto;
    padding: 60px 0;
    box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
    border-radius: 40px;
    background-color: ${(p) => p.theme.colors.white};
`;

export const LoginHeader = styled.h2`
    margin-bottom: 40px;
    letter-spacing: 0.04em;
    line-height: 49px;
    font-size: 36px;
    font-family: ${(p) => p.theme.fonts.body};
    font-weight: ${(p) => p.theme.fontWeights.medium};

`;

export const FormInput = styled.input`
    display: flex;
    width: 458px;
    border: 1px solid rgba(245, 146, 86, 0.5);
    border-radius: 40px;
    padding: 14px 32px ;
    font-size: 18px;
    background-color: ${(p) => p.theme.colors.background};
        &:focus-visible{
            border: 1px solid rgba(245, 146, 86, 0.5);
}
        &::placeholder {
            font-size: 18px;
            letter-spacing: 0.04em;
            line-height: 25px;
            font-weight: ${(p) => p.theme.fontWeights.regular};
            font-family: ${(p) => p.theme.fonts.body};
}
        &:first-child{
            margin-bottom: 16px;
}
`;

export const AuthButton = styled(Button)`
    && {
        margin-top: 40px;
        margin-bottom: 40px;
        padding: 10.5px 0;
        border-radius: 40px;
        letter-spacing: 0.04em;
        line-height: 27px;
        font-size: 20px;
        border: 2px solid rgba(245, 146, 86, 0.5);
        box-shadow: none;
        background-color: ${(p) => p.theme.colors.accent};
        font-family: ${(p) => p.theme.fonts.body};
        font-weight: ${(p) => p.theme.fontWeights.medium};
    }
    &.css-1fu7jd5-MuiButtonBase-root-MuiButton-root:hover {
        color:  black;
        box-shadow: none;
        border: 2px solid rgba(245, 146, 86, 0.5);
        background-color: ${(p) => p.theme.colors.white};
    }
`;
export const FormText = styled.p`
    font-family: ${(p) => p.theme.fonts.body};
    font-weight: ${(p) => p.theme.fontWeights.regular};
    font-size: 12px;
    letter-spacing: 0.04em;
    line-height: 16px;
    color: rgba(17, 17, 17, 0.6);
`;

export const RegisterLink = styled.a`
    display: inline-block;
    margin-left: 2px;
    color: ${p => p.theme.colors.blue};
`

export const InputError = styled.p`
    padding: 5px;
    background-color: white;
    position: absolute;
    color: red;
    margin-bottom: 16px;
    top: 120px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 12px;
`;
