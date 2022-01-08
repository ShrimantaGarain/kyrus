import React, {useContext} from "react";
import "./Discord.scss";
import {discordSection} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function Discord() {
  const {isDark} = useContext(StyleContext);

  if (!discordSection)
    console.error("discordSection object for Discord section is missing");

  if (!discordSection.display) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main">
        <div className="discord-header">
          <h1 className="discord-header-title">{discordSection.title}</h1>
          <p
            className={
              isDark
                ? "dark-mode discord-header-subtitle"
                : "subTitle discord-header-subtitle"
            }
          >
            {discordSection.subtitle}
          </p>
        </div>
        <div className="discord-main-div">
          {discordSection.discord.map((discordLink, i) => {
            if (!discordLink) {
              console.log(
                `Discord link for ${discordSection.title} is missing`
              );
            }
            return (
              <div key={i}>
                <iframe
                  className="discord"
                  src={discordLink}
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  title="Discord"
                ></iframe>
              </div>
            );
          })}
        </div>
      </div>
    </Fade>
  );
}
