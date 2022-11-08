import styled from "styled-components";

const StyledBanner = styled.div`
    img {
        height : 100%;
         width: 100%;
        border-radius: 0%;
    }

   .banner{
        margin-top: 40px;
        display: flex;
        width: 100%;
        height: 300px;
        padding: 16px 32px;
   }
`;

export function Banner(propriedade){
   return(
    <StyledBanner>
        <div className="banner">
            <img src={`${propriedade.banner}`} />
        </div> 
    </StyledBanner>
   )
}