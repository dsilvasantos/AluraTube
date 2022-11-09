import config from "../config.json";
import styled from "styled-components";
import { CSSReset } from "../src/components/CSSReset";
import Menu from "../src/components/Menu/Menu";
import {StyledTimeline} from "../src/components/TimeLine";
import {Banner} from "../src/components/Banner"
import React from "react";

function HomePage() {

    const [valorDoFiltro,setValorDoFiltro] = React.useState("");

    return (
        <>
        <CSSReset></CSSReset>
        <div>
            <Menu valorDoFiltro={valorDoFiltro} setValorDoFiltro={setValorDoFiltro}></Menu>
            <Header banner={config.banner}></Header>
            <TimeLine pesquisa={valorDoFiltro} playlists={config.playlists}></TimeLine>
            
        </div>
        </>
    )

}

export default HomePage


const StyledHeader = styled.div`
    img {
        width: 80px;
        height: 80px;
        border-radius: 50%;
    }

   .user-info{
        display: flex;
        align-items: center;
        width: 100%;
        padding: 16px 32px;
        gap: 16px;
   }
`;

function Header(propriedade) {
    return (
        <StyledHeader>
        <Banner banner={propriedade.banner}></Banner>
            <section className="user-info">
                <img src={`https://github.com/${config.github}.png`} />
                <div>
                    <h2>{config.nome}</h2>
                    <p>{config.cargo}</p>
                </div>
            </section>

        </StyledHeader>
    )
}

function TimeLine(propriedade) {
    const playListNames = Object.keys(propriedade.playlists);
    return (
        <StyledTimeline>
            {playListNames.map(function (playListName) {
                const videos = propriedade.playlists[playListName];
                return (
                    <section key={playListName}>
                        <h2>{playListName}</h2>
                        <div>
                            {videos.filter((video) => {
                                return video.title.toLowerCase().includes(propriedade.pesquisa.toLowerCase())
                            }).map(function (video) {
                                    return (
                                        <a key={video.url} href={video.url}>
                                            <img src={video.thumb} />
                                            <span>
                                                {video.title}
                                            </span>
                                        </a>
                                    )
                                })
                            }
                        </div>
                    </section>
                )
            })}
        </StyledTimeline>
    )
}