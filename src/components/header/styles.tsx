import {styled} from 'styled-components';

export const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    img{
                width: 3rem;
             height: 3rem;
            }


    nav{
        display: flex;
        gap: 0.5rem;

        a{
            width: 3rem;
            height: 3rem;
            display: flex;
            justify-content: center;
            align-items: center;
            border-top: 3px solid transparent;
            border-bottom: 3px solid transparent;

            &:hover{ 
                border-bottom: ${props => props.theme['gree-500']}
            }
            
            img{
                width: 3rem;
             height: 3rem;
            }
        }
    }

   
`