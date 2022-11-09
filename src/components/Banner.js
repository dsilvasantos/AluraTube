import styled from "styled-components";

const StyledBanner = styled.div`
    .banner-img {
        height : 100%;
         width: 100%;
        border-radius: 0%;
    }

   .banner{
        display: flex;
        width: 100%;
        height: 230px;
        padding: 16px 32px;
   }
`;

export function Banner(propriedade){
   return(
    <StyledBanner>
        <div className="banner">
            <img className="banner-img"src={`${propriedade.banner}`} />
        </div> 
    </StyledBanner>
   )
}