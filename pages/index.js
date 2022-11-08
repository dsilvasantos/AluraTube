import config from "../config.json";
import styled from "styled-components";
import { CSSReset } from "../src/components/CSSReset";
import Menu from "../src/components/Menu";
import {StyledTimeline} from "../src/components/TimeLine";
import {Banner} from "../src/components/Banner"

function HomePage() {
    return (
        <>
        <CSSReset></CSSReset>
        <div>
            <Menu></Menu>
            <Header banner={config.banner}></Header>
            <TimeLine playlists={config.playlists}></TimeLine>
            
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
        margin-top: 50px;
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
                    <section>
                        <h2>{playListName}</h2>
                        <div>
                            {
                                videos.map(function (video) {
                                    return (
                                        <a href={video.url}>
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