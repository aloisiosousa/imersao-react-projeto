import styled from "styled-components";

// const Title = styled.h1 `
//   font-size: 50px;
//   color: ${({ theme }) => theme.colors.primary};
// `

const Box = styled.div `
  background: #ffffff;
  border-radius: 8px;
  color: red;
`;
export default function Home() {
    return (
        <main>
            <Box> 
                Imagem
            </Box>
            <Box> 
                Bem Vindo
            
            </Box>
            <Box> 
                Comunidades
            </Box>
            <Box> 
                
            </Box>
        
            
        </main>
    );
}