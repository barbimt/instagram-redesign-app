//consimo de la API instagram
const BASE_API = "https://graph.instagram.com/me";
const ACCESS_TOKEN =
  "IGQVJXaUptZAHVDWmF0OElNV3lmdUh2bzNqWnl6UTFKVmtmZAlc2VFFEYmhlQzdDemkxSldSdmJBalRQTWh0T1MwYnBBR21PV0RyOFlXTm5Ua2NvN1gtU3lYN3JNYzV5VURBbGh0RDFfakZAwdzRadWJCa1h2OG43M3dqV3Nn";
// accedemos al DOM
const username = document.getElementById("username");
const posts = document.getElementById("posts");
const photos = document.getElementById("photos");
//Luego crearemos dos funciones: una para hacer la petición a la API que nos entrega la información del usuario (username y media_count); y otra para hacer la petición a la API que nos entrega la información multimedia del usuario (id y media_url).
async function getUserInfo() {
  const response = await fetch(
    `${BASE_API}?fields=username,media_count&access_token=${ACCESS_TOKEN}`
  );
  const userInfo = await response.json();
  console.log(userInfo);
  username.innerHTML = userInfo.username;
  posts.innerHTML = userInfo.media_count;
  return userInfo;
}

getUserInfo();
//La función que nos provee la información multimedia del usuario quedaría de la siguiente forma

async function getUserMediaInfo() {
  const response = await fetch(
    `${BASE_API}/media?fields=id,media_url&access_token=${ACCESS_TOKEN}`
  );
  const userMediaInfo = await response.json();
  console.log(userMediaInfo);
  return userMediaInfo;
}

getUserMediaInfo().then((media) => {
  media.data.map((mediaInfo) => {
    const img = document.createElement("img");
    img.style.width = "100px";
    img.src = mediaInfo.media_url;
    photos.appendChild(img);
  });
});
