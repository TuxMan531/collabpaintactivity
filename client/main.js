// Import the SDK and game script
import { DiscordSDK } from "@discord/embedded-app-sdk";

import "./style.css";
import rocketLogo from '/rocket.png';
import { initializeGame } from './game.js';  // Assuming there's an initialize function you can call

// Instantiate the SDK
const discordSdk = new DiscordSDK(import.meta.env.VITE_DISCORD_CLIENT_ID);

setupDiscordSdk().then(() => {
  console.log("Discord SDK is ready");
  initializeGame(); // Initialize your game after the SDK is ready
});

async function setupDiscordSdk() {
  await discordSdk.ready();
}

document.querySelector('#app').innerHTML = `
  <div>
    <img src="${rocketLogo}" class="logo" alt="Discord" />
    <link rel="stylesheet" href="style.css">
    <h1>Hello, World!</h1>
  </div>
`;