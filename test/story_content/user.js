window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var once = player.once;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
var update = player.update;
var pointerX = player.pointerX;
var pointerY = player.pointerY;
var showPointer = player.showPointer;
var hidePointer = player.hidePointer;
var slideWidth = player.slideWidth;
var slideHeight = player.slideHeight;
var getKeyDown = player.getKeyDown;
var keydown = player.keydown;
var keyup = player.keyup;
window.Script14 = function()
{
  // 1. On connecte le code à ton module Storyline
var player = GetPlayer();

// 2. On récupère les valeurs de tes variables numériques
var currentAura = player.GetVar("aura");
var currentRizz = player.GetVar("rizz");

// 3. On calcule l'échelle et on SÉCURISE pour ne pas déborder (Maximum = 1)
// Pour l'Aura, le max reste 100
var scaleAura = Math.min(currentAura / 100, 1);

// Pour le Rizz, le max est maintenant de 300 !
var scaleRizz = Math.min(currentRizz / 300, 1);

// 4. On anime la barre d'Aura (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_aura']")) {
    gsap.to("[data-acc-text='barre_aura']", {
        scaleX: scaleAura, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}

// 5. On anime la barre de Rizz (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_rizz']")) {
    gsap.to("[data-acc-text='barre_rizz']", {
        scaleX: scaleRizz, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}
}

window.Script15 = function()
{
  // 1. On connecte le code à ton module Storyline
var player = GetPlayer();

// 2. On récupère les valeurs de tes variables numériques
var currentAura = player.GetVar("aura");
var currentRizz = player.GetVar("rizz");

// 3. On calcule l'échelle et on SÉCURISE pour ne pas déborder (Maximum = 1)
// Pour l'Aura, le max reste 100
var scaleAura = Math.min(currentAura / 100, 1);

// Pour le Rizz, le max est maintenant de 300 !
var scaleRizz = Math.min(currentRizz / 300, 1);

// 4. On anime la barre d'Aura (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_aura']")) {
    gsap.to("[data-acc-text='barre_aura']", {
        scaleX: scaleAura, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}

// 5. On anime la barre de Rizz (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_rizz']")) {
    gsap.to("[data-acc-text='barre_rizz']", {
        scaleX: scaleRizz, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}
}

window.Script16 = function()
{
  // 1. On connecte le code à ton module Storyline
var player = GetPlayer();

// 2. On récupère les valeurs de tes variables numériques
var currentAura = player.GetVar("aura");
var currentRizz = player.GetVar("rizz");

// 3. On calcule l'échelle et on SÉCURISE pour ne pas déborder (Maximum = 1)
// Pour l'Aura, le max reste 100
var scaleAura = Math.min(currentAura / 100, 1);

// Pour le Rizz, le max est maintenant de 300 !
var scaleRizz = Math.min(currentRizz / 300, 1);

// 4. On anime la barre d'Aura (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_aura']")) {
    gsap.to("[data-acc-text='barre_aura']", {
        scaleX: scaleAura, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}

// 5. On anime la barre de Rizz (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_rizz']")) {
    gsap.to("[data-acc-text='barre_rizz']", {
        scaleX: scaleRizz, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}
}

window.Script17 = function()
{
  // 1. On connecte le code à ton module Storyline
var player = GetPlayer();

// 2. On récupère les valeurs de tes variables numériques
var currentAura = player.GetVar("aura");
var currentRizz = player.GetVar("rizz");

// 3. On calcule l'échelle et on SÉCURISE pour ne pas déborder (Maximum = 1)
// Pour l'Aura, le max reste 100
var scaleAura = Math.min(currentAura / 100, 1);

// Pour le Rizz, le max est maintenant de 300 !
var scaleRizz = Math.min(currentRizz / 300, 1);

// 4. On anime la barre d'Aura (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_aura']")) {
    gsap.to("[data-acc-text='barre_aura']", {
        scaleX: scaleAura, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}

// 5. On anime la barre de Rizz (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_rizz']")) {
    gsap.to("[data-acc-text='barre_rizz']", {
        scaleX: scaleRizz, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}
}

window.Script18 = function()
{
  // 1. On connecte le code à ton module Storyline
var player = GetPlayer();

// 2. On récupère les valeurs de tes variables numériques
var currentAura = player.GetVar("aura");
var currentRizz = player.GetVar("rizz");

// 3. On calcule l'échelle et on SÉCURISE pour ne pas déborder (Maximum = 1)
// Pour l'Aura, le max reste 100
var scaleAura = Math.min(currentAura / 100, 1);

// Pour le Rizz, le max est maintenant de 300 !
var scaleRizz = Math.min(currentRizz / 300, 1);

// 4. On anime la barre d'Aura (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_aura']")) {
    gsap.to("[data-acc-text='barre_aura']", {
        scaleX: scaleAura, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}

// 5. On anime la barre de Rizz (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_rizz']")) {
    gsap.to("[data-acc-text='barre_rizz']", {
        scaleX: scaleRizz, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}
}

window.Script19 = function()
{
  // 1. On connecte le code à ton module Storyline
var player = GetPlayer();

// 2. On récupère les valeurs de tes variables numériques
var currentAura = player.GetVar("aura");
var currentRizz = player.GetVar("rizz");

// 3. On calcule l'échelle et on SÉCURISE pour ne pas déborder (Maximum = 1)
// Pour l'Aura, le max reste 100
var scaleAura = Math.min(currentAura / 100, 1);

// Pour le Rizz, le max est maintenant de 300 !
var scaleRizz = Math.min(currentRizz / 300, 1);

// 4. On anime la barre d'Aura (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_aura']")) {
    gsap.to("[data-acc-text='barre_aura']", {
        scaleX: scaleAura, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}

// 5. On anime la barre de Rizz (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_rizz']")) {
    gsap.to("[data-acc-text='barre_rizz']", {
        scaleX: scaleRizz, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}
}

window.Script20 = function()
{
  // 1. On connecte le code à ton module Storyline
var player = GetPlayer();

// 2. On récupère les valeurs de tes variables numériques
var currentAura = player.GetVar("aura");
var currentRizz = player.GetVar("rizz");

// 3. On calcule l'échelle et on SÉCURISE pour ne pas déborder (Maximum = 1)
// Pour l'Aura, le max reste 100
var scaleAura = Math.min(currentAura / 100, 1);

// Pour le Rizz, le max est maintenant de 300 !
var scaleRizz = Math.min(currentRizz / 300, 1);

// 4. On anime la barre d'Aura (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_aura']")) {
    gsap.to("[data-acc-text='barre_aura']", {
        scaleX: scaleAura, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}

// 5. On anime la barre de Rizz (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_rizz']")) {
    gsap.to("[data-acc-text='barre_rizz']", {
        scaleX: scaleRizz, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}
}

window.Script21 = function()
{
  // 1. On connecte le code à ton module Storyline
var player = GetPlayer();

// 2. On récupère les valeurs de tes variables numériques
var currentAura = player.GetVar("aura");
var currentRizz = player.GetVar("rizz");

// 3. On calcule l'échelle et on SÉCURISE pour ne pas déborder (Maximum = 1)
// Pour l'Aura, le max reste 100
var scaleAura = Math.min(currentAura / 100, 1);

// Pour le Rizz, le max est maintenant de 300 !
var scaleRizz = Math.min(currentRizz / 300, 1);

// 4. On anime la barre d'Aura (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_aura']")) {
    gsap.to("[data-acc-text='barre_aura']", {
        scaleX: scaleAura, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}

// 5. On anime la barre de Rizz (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_rizz']")) {
    gsap.to("[data-acc-text='barre_rizz']", {
        scaleX: scaleRizz, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}
}

window.Script22 = function()
{
  // 1. On connecte le code à ton module Storyline
var player = GetPlayer();

// 2. On récupère les valeurs de tes variables numériques
var currentAura = player.GetVar("aura");
var currentRizz = player.GetVar("rizz");

// 3. On calcule l'échelle et on SÉCURISE pour ne pas déborder (Maximum = 1)
// Pour l'Aura, le max reste 100
var scaleAura = Math.min(currentAura / 100, 1);

// Pour le Rizz, le max est maintenant de 300 !
var scaleRizz = Math.min(currentRizz / 300, 1);

// 4. On anime la barre d'Aura (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_aura']")) {
    gsap.to("[data-acc-text='barre_aura']", {
        scaleX: scaleAura, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}

// 5. On anime la barre de Rizz (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_rizz']")) {
    gsap.to("[data-acc-text='barre_rizz']", {
        scaleX: scaleRizz, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}
}

window.Script23 = function()
{
  // 1. On connecte le code à ton module Storyline
var player = GetPlayer();

// 2. On récupère les valeurs de tes variables numériques
var currentAura = player.GetVar("aura");
var currentRizz = player.GetVar("rizz");

// 3. On calcule l'échelle et on SÉCURISE pour ne pas déborder (Maximum = 1)
// Pour l'Aura, le max reste 100
var scaleAura = Math.min(currentAura / 100, 1);

// Pour le Rizz, le max est maintenant de 300 !
var scaleRizz = Math.min(currentRizz / 300, 1);

// 4. On anime la barre d'Aura (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_aura']")) {
    gsap.to("[data-acc-text='barre_aura']", {
        scaleX: scaleAura, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}

// 5. On anime la barre de Rizz (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_rizz']")) {
    gsap.to("[data-acc-text='barre_rizz']", {
        scaleX: scaleRizz, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}
}

window.Script24 = function()
{
  // 1. On connecte le code à ton module Storyline
var player = GetPlayer();

// 2. On récupère les valeurs de tes variables numériques
var currentAura = player.GetVar("aura");
var currentRizz = player.GetVar("rizz");

// 3. On calcule l'échelle et on SÉCURISE pour ne pas déborder (Maximum = 1)
// Pour l'Aura, le max reste 100
var scaleAura = Math.min(currentAura / 100, 1);

// Pour le Rizz, le max est maintenant de 300 !
var scaleRizz = Math.min(currentRizz / 300, 1);

// 4. On anime la barre d'Aura (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_aura']")) {
    gsap.to("[data-acc-text='barre_aura']", {
        scaleX: scaleAura, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}

// 5. On anime la barre de Rizz (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_rizz']")) {
    gsap.to("[data-acc-text='barre_rizz']", {
        scaleX: scaleRizz, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}
}

window.Script25 = function()
{
  // 1. On connecte le code à ton module Storyline
var player = GetPlayer();

// 2. On récupère les valeurs de tes variables numériques
var currentAura = player.GetVar("aura");
var currentRizz = player.GetVar("rizz");

// 3. On calcule l'échelle et on SÉCURISE pour ne pas déborder (Maximum = 1)
// Pour l'Aura, le max reste 100
var scaleAura = Math.min(currentAura / 100, 1);

// Pour le Rizz, le max est maintenant de 300 !
var scaleRizz = Math.min(currentRizz / 300, 1);

// 4. On anime la barre d'Aura (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_aura']")) {
    gsap.to("[data-acc-text='barre_aura']", {
        scaleX: scaleAura, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}

// 5. On anime la barre de Rizz (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_rizz']")) {
    gsap.to("[data-acc-text='barre_rizz']", {
        scaleX: scaleRizz, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}
}

window.Script26 = function()
{
  // 1. On connecte le code à ton module Storyline
var player = GetPlayer();

// 2. On récupère les valeurs de tes variables numériques
var currentAura = player.GetVar("aura");
var currentRizz = player.GetVar("rizz");

// 3. On calcule l'échelle et on SÉCURISE pour ne pas déborder (Maximum = 1)
// Pour l'Aura, le max reste 100
var scaleAura = Math.min(currentAura / 100, 1);

// Pour le Rizz, le max est maintenant de 300 !
var scaleRizz = Math.min(currentRizz / 300, 1);

// 4. On anime la barre d'Aura (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_aura']")) {
    gsap.to("[data-acc-text='barre_aura']", {
        scaleX: scaleAura, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}

// 5. On anime la barre de Rizz (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_rizz']")) {
    gsap.to("[data-acc-text='barre_rizz']", {
        scaleX: scaleRizz, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}
}

window.Script27 = function()
{
  // 1. On connecte le code à ton module Storyline
var player = GetPlayer();

// 2. On récupère les valeurs de tes variables numériques
var currentAura = player.GetVar("aura");
var currentRizz = player.GetVar("rizz");

// 3. On calcule l'échelle et on SÉCURISE pour ne pas déborder (Maximum = 1)
// Pour l'Aura, le max reste 100
var scaleAura = Math.min(currentAura / 100, 1);

// Pour le Rizz, le max est maintenant de 300 !
var scaleRizz = Math.min(currentRizz / 300, 1);

// 4. On anime la barre d'Aura (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_aura']")) {
    gsap.to("[data-acc-text='barre_aura']", {
        scaleX: scaleAura, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}

// 5. On anime la barre de Rizz (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_rizz']")) {
    gsap.to("[data-acc-text='barre_rizz']", {
        scaleX: scaleRizz, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}
}

window.Script28 = function()
{
  // 1. On connecte le code à ton module Storyline
var player = GetPlayer();

// 2. On récupère les valeurs de tes variables numériques
var currentAura = player.GetVar("aura");
var currentRizz = player.GetVar("rizz");

// 3. On calcule l'échelle et on SÉCURISE pour ne pas déborder (Maximum = 1)
// Pour l'Aura, le max reste 100
var scaleAura = Math.min(currentAura / 100, 1);

// Pour le Rizz, le max est maintenant de 300 !
var scaleRizz = Math.min(currentRizz / 300, 1);

// 4. On anime la barre d'Aura (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_aura']")) {
    gsap.to("[data-acc-text='barre_aura']", {
        scaleX: scaleAura, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}

// 5. On anime la barre de Rizz (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_rizz']")) {
    gsap.to("[data-acc-text='barre_rizz']", {
        scaleX: scaleRizz, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}
}

window.Script29 = function()
{
  // 1. On connecte le code à ton module Storyline
var player = GetPlayer();

// 2. On récupère les valeurs de tes variables numériques
var currentAura = player.GetVar("aura");
var currentRizz = player.GetVar("rizz");

// 3. On calcule l'échelle et on SÉCURISE pour ne pas déborder (Maximum = 1)
// Pour l'Aura, le max reste 100
var scaleAura = Math.min(currentAura / 100, 1);

// Pour le Rizz, le max est maintenant de 300 !
var scaleRizz = Math.min(currentRizz / 300, 1);

// 4. On anime la barre d'Aura (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_aura']")) {
    gsap.to("[data-acc-text='barre_aura']", {
        scaleX: scaleAura, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}

// 5. On anime la barre de Rizz (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_rizz']")) {
    gsap.to("[data-acc-text='barre_rizz']", {
        scaleX: scaleRizz, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}
}

window.Script30 = function()
{
  // 1. On connecte le code à ton module Storyline
var player = GetPlayer();

// 2. On récupère les valeurs de tes variables numériques
var currentAura = player.GetVar("aura");
var currentRizz = player.GetVar("rizz");

// 3. On calcule l'échelle et on SÉCURISE pour ne pas déborder (Maximum = 1)
// Pour l'Aura, le max reste 100
var scaleAura = Math.min(currentAura / 100, 1);

// Pour le Rizz, le max est maintenant de 300 !
var scaleRizz = Math.min(currentRizz / 300, 1);

// 4. On anime la barre d'Aura (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_aura']")) {
    gsap.to("[data-acc-text='barre_aura']", {
        scaleX: scaleAura, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}

// 5. On anime la barre de Rizz (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_rizz']")) {
    gsap.to("[data-acc-text='barre_rizz']", {
        scaleX: scaleRizz, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}
}

window.Script31 = function()
{
  // 1. On connecte le code à ton module Storyline
var player = GetPlayer();

// 2. On récupère les valeurs de tes variables numériques
var currentAura = player.GetVar("aura");
var currentRizz = player.GetVar("rizz");

// 3. On calcule l'échelle et on SÉCURISE pour ne pas déborder (Maximum = 1)
// Pour l'Aura, le max reste 100
var scaleAura = Math.min(currentAura / 100, 1);

// Pour le Rizz, le max est maintenant de 300 !
var scaleRizz = Math.min(currentRizz / 300, 1);

// 4. On anime la barre d'Aura (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_aura']")) {
    gsap.to("[data-acc-text='barre_aura']", {
        scaleX: scaleAura, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}

// 5. On anime la barre de Rizz (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_rizz']")) {
    gsap.to("[data-acc-text='barre_rizz']", {
        scaleX: scaleRizz, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}
}

window.Script32 = function()
{
  // 1. On connecte le code à ton module Storyline
var player = GetPlayer();

// 2. On récupère les valeurs de tes variables numériques
var currentAura = player.GetVar("aura");
var currentRizz = player.GetVar("rizz");

// 3. On calcule l'échelle et on SÉCURISE pour ne pas déborder (Maximum = 1)
// Pour l'Aura, le max reste 100
var scaleAura = Math.min(currentAura / 100, 1);

// Pour le Rizz, le max est maintenant de 300 !
var scaleRizz = Math.min(currentRizz / 300, 1);

// 4. On anime la barre d'Aura (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_aura']")) {
    gsap.to("[data-acc-text='barre_aura']", {
        scaleX: scaleAura, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}

// 5. On anime la barre de Rizz (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_rizz']")) {
    gsap.to("[data-acc-text='barre_rizz']", {
        scaleX: scaleRizz, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}
}

window.Script33 = function()
{
  // 1. On connecte le code à ton module Storyline
var player = GetPlayer();

// 2. On récupère les valeurs de tes variables numériques
var currentAura = player.GetVar("aura");
var currentRizz = player.GetVar("rizz");

// 3. On calcule l'échelle et on SÉCURISE pour ne pas déborder (Maximum = 1)
// Pour l'Aura, le max reste 100
var scaleAura = Math.min(currentAura / 100, 1);

// Pour le Rizz, le max est maintenant de 300 !
var scaleRizz = Math.min(currentRizz / 300, 1);

// 4. On anime la barre d'Aura (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_aura']")) {
    gsap.to("[data-acc-text='barre_aura']", {
        scaleX: scaleAura, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}

// 5. On anime la barre de Rizz (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_rizz']")) {
    gsap.to("[data-acc-text='barre_rizz']", {
        scaleX: scaleRizz, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}
}

window.Script34 = function()
{
  // 1. On connecte le code à ton module Storyline
var player = GetPlayer();

// 2. On récupère les valeurs de tes variables numériques
var currentAura = player.GetVar("aura");
var currentRizz = player.GetVar("rizz");

// 3. On calcule l'échelle et on SÉCURISE pour ne pas déborder (Maximum = 1)
// Pour l'Aura, le max reste 100
var scaleAura = Math.min(currentAura / 100, 1);

// Pour le Rizz, le max est maintenant de 300 !
var scaleRizz = Math.min(currentRizz / 300, 1);

// 4. On anime la barre d'Aura (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_aura']")) {
    gsap.to("[data-acc-text='barre_aura']", {
        scaleX: scaleAura, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}

// 5. On anime la barre de Rizz (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_rizz']")) {
    gsap.to("[data-acc-text='barre_rizz']", {
        scaleX: scaleRizz, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}
}

window.Script35 = function()
{
  // 1. On connecte le code à ton module Storyline
var player = GetPlayer();

// 2. On récupère les valeurs de tes variables numériques
var currentAura = player.GetVar("aura");
var currentRizz = player.GetVar("rizz");

// 3. On calcule l'échelle et on SÉCURISE pour ne pas déborder (Maximum = 1)
// Pour l'Aura, le max reste 100
var scaleAura = Math.min(currentAura / 100, 1);

// Pour le Rizz, le max est maintenant de 300 !
var scaleRizz = Math.min(currentRizz / 300, 1);

// 4. On anime la barre d'Aura (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_aura']")) {
    gsap.to("[data-acc-text='barre_aura']", {
        scaleX: scaleAura, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}

// 5. On anime la barre de Rizz (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_rizz']")) {
    gsap.to("[data-acc-text='barre_rizz']", {
        scaleX: scaleRizz, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}
}

window.Script36 = function()
{
  // 1. On connecte le code à ton module Storyline
var player = GetPlayer();

// 2. On récupère les valeurs de tes variables numériques
var currentAura = player.GetVar("aura");
var currentRizz = player.GetVar("rizz");

// 3. On calcule l'échelle et on SÉCURISE pour ne pas déborder (Maximum = 1)
// Pour l'Aura, le max reste 100
var scaleAura = Math.min(currentAura / 100, 1);

// Pour le Rizz, le max est maintenant de 300 !
var scaleRizz = Math.min(currentRizz / 300, 1);

// 4. On anime la barre d'Aura (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_aura']")) {
    gsap.to("[data-acc-text='barre_aura']", {
        scaleX: scaleAura, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}

// 5. On anime la barre de Rizz (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_rizz']")) {
    gsap.to("[data-acc-text='barre_rizz']", {
        scaleX: scaleRizz, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}
}

window.Script37 = function()
{
  // 1. On connecte le code à ton module Storyline
var player = GetPlayer();

// 2. On récupère les valeurs de tes variables numériques
var currentAura = player.GetVar("aura");
var currentRizz = player.GetVar("rizz");

// 3. On calcule l'échelle et on SÉCURISE pour ne pas déborder (Maximum = 1)
// Pour l'Aura, le max reste 100
var scaleAura = Math.min(currentAura / 100, 1);

// Pour le Rizz, le max est maintenant de 300 !
var scaleRizz = Math.min(currentRizz / 300, 1);

// 4. On anime la barre d'Aura (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_aura']")) {
    gsap.to("[data-acc-text='barre_aura']", {
        scaleX: scaleAura, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}

// 5. On anime la barre de Rizz (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_rizz']")) {
    gsap.to("[data-acc-text='barre_rizz']", {
        scaleX: scaleRizz, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}
}

window.Script38 = function()
{
  // 1. On connecte le code à ton module Storyline
var player = GetPlayer();

// 2. On récupère les valeurs de tes variables numériques
var currentAura = player.GetVar("aura");
var currentRizz = player.GetVar("rizz");

// 3. On calcule l'échelle et on SÉCURISE pour ne pas déborder (Maximum = 1)
// Pour l'Aura, le max reste 100
var scaleAura = Math.min(currentAura / 100, 1);

// Pour le Rizz, le max est maintenant de 300 !
var scaleRizz = Math.min(currentRizz / 300, 1);

// 4. On anime la barre d'Aura (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_aura']")) {
    gsap.to("[data-acc-text='barre_aura']", {
        scaleX: scaleAura, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}

// 5. On anime la barre de Rizz (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_rizz']")) {
    gsap.to("[data-acc-text='barre_rizz']", {
        scaleX: scaleRizz, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}
}

window.Script39 = function()
{
  // 1. On connecte le code à ton module Storyline
var player = GetPlayer();

// 2. On récupère les valeurs de tes variables numériques
var currentAura = player.GetVar("aura");
var currentRizz = player.GetVar("rizz");

// 3. On calcule l'échelle et on SÉCURISE pour ne pas déborder (Maximum = 1)
// Pour l'Aura, le max reste 100
var scaleAura = Math.min(currentAura / 100, 1);

// Pour le Rizz, le max est maintenant de 300 !
var scaleRizz = Math.min(currentRizz / 300, 1);

// 4. On anime la barre d'Aura (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_aura']")) {
    gsap.to("[data-acc-text='barre_aura']", {
        scaleX: scaleAura, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}

// 5. On anime la barre de Rizz (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_rizz']")) {
    gsap.to("[data-acc-text='barre_rizz']", {
        scaleX: scaleRizz, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}
}

window.Script40 = function()
{
  // 1. On connecte le code à ton module Storyline
var player = GetPlayer();

// 2. On récupère les valeurs de tes variables numériques
var currentAura = player.GetVar("aura");
var currentRizz = player.GetVar("rizz");

// 3. On calcule l'échelle et on SÉCURISE pour ne pas déborder (Maximum = 1)
// Pour l'Aura, le max reste 100
var scaleAura = Math.min(currentAura / 100, 1);

// Pour le Rizz, le max est maintenant de 300 !
var scaleRizz = Math.min(currentRizz / 300, 1);

// 4. On anime la barre d'Aura (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_aura']")) {
    gsap.to("[data-acc-text='barre_aura']", {
        scaleX: scaleAura, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}

// 5. On anime la barre de Rizz (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_rizz']")) {
    gsap.to("[data-acc-text='barre_rizz']", {
        scaleX: scaleRizz, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}
}

window.Script41 = function()
{
  // 1. On connecte le code à ton module Storyline
var player = GetPlayer();

// 2. On récupère les valeurs de tes variables numériques
var currentAura = player.GetVar("aura");
var currentRizz = player.GetVar("rizz");

// 3. On calcule l'échelle et on SÉCURISE pour ne pas déborder (Maximum = 1)
// Pour l'Aura, le max reste 100
var scaleAura = Math.min(currentAura / 100, 1);

// Pour le Rizz, le max est maintenant de 300 !
var scaleRizz = Math.min(currentRizz / 300, 1);

// 4. On anime la barre d'Aura (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_aura']")) {
    gsap.to("[data-acc-text='barre_aura']", {
        scaleX: scaleAura, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}

// 5. On anime la barre de Rizz (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_rizz']")) {
    gsap.to("[data-acc-text='barre_rizz']", {
        scaleX: scaleRizz, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}
}

window.Script42 = function()
{
  // 1. On connecte le code à ton module Storyline
var player = GetPlayer();

// 2. On récupère les valeurs de tes variables numériques
var currentAura = player.GetVar("aura");
var currentRizz = player.GetVar("rizz");

// 3. On calcule l'échelle et on SÉCURISE pour ne pas déborder (Maximum = 1)
// Pour l'Aura, le max reste 100
var scaleAura = Math.min(currentAura / 100, 1);

// Pour le Rizz, le max est maintenant de 300 !
var scaleRizz = Math.min(currentRizz / 300, 1);

// 4. On anime la barre d'Aura (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_aura']")) {
    gsap.to("[data-acc-text='barre_aura']", {
        scaleX: scaleAura, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}

// 5. On anime la barre de Rizz (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_rizz']")) {
    gsap.to("[data-acc-text='barre_rizz']", {
        scaleX: scaleRizz, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}
}

window.Script43 = function()
{
  // 1. On connecte le code à ton module Storyline
var player = GetPlayer();

// 2. On récupère les valeurs de tes variables numériques
var currentAura = player.GetVar("aura");
var currentRizz = player.GetVar("rizz");

// 3. On calcule l'échelle et on SÉCURISE pour ne pas déborder (Maximum = 1)
// Pour l'Aura, le max reste 100
var scaleAura = Math.min(currentAura / 100, 1);

// Pour le Rizz, le max est maintenant de 300 !
var scaleRizz = Math.min(currentRizz / 300, 1);

// 4. On anime la barre d'Aura (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_aura']")) {
    gsap.to("[data-acc-text='barre_aura']", {
        scaleX: scaleAura, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}

// 5. On anime la barre de Rizz (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_rizz']")) {
    gsap.to("[data-acc-text='barre_rizz']", {
        scaleX: scaleRizz, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}
}

window.Script44 = function()
{
  // 1. On connecte le code à ton module Storyline
var player = GetPlayer();

// 2. On récupère les valeurs de tes variables numériques
var currentAura = player.GetVar("aura");
var currentRizz = player.GetVar("rizz");

// 3. On calcule l'échelle et on SÉCURISE pour ne pas déborder (Maximum = 1)
// Pour l'Aura, le max reste 100
var scaleAura = Math.min(currentAura / 100, 1);

// Pour le Rizz, le max est maintenant de 300 !
var scaleRizz = Math.min(currentRizz / 300, 1);

// 4. On anime la barre d'Aura (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_aura']")) {
    gsap.to("[data-acc-text='barre_aura']", {
        scaleX: scaleAura, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}

// 5. On anime la barre de Rizz (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_rizz']")) {
    gsap.to("[data-acc-text='barre_rizz']", {
        scaleX: scaleRizz, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}
}

window.Script45 = function()
{
  // 1. On connecte le code à ton module Storyline
var player = GetPlayer();

// 2. On récupère les valeurs de tes variables numériques
var currentAura = player.GetVar("aura");
var currentRizz = player.GetVar("rizz");

// 3. On calcule l'échelle et on SÉCURISE pour ne pas déborder (Maximum = 1)
// Pour l'Aura, le max reste 100
var scaleAura = Math.min(currentAura / 100, 1);

// Pour le Rizz, le max est maintenant de 300 !
var scaleRizz = Math.min(currentRizz / 300, 1);

// 4. On anime la barre d'Aura (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_aura']")) {
    gsap.to("[data-acc-text='barre_aura']", {
        scaleX: scaleAura, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}

// 5. On anime la barre de Rizz (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_rizz']")) {
    gsap.to("[data-acc-text='barre_rizz']", {
        scaleX: scaleRizz, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}
}

window.Script46 = function()
{
  // 1. On connecte le code à ton module Storyline
var player = GetPlayer();

// 2. On récupère les valeurs de tes variables numériques
var currentAura = player.GetVar("aura");
var currentRizz = player.GetVar("rizz");

// 3. On calcule l'échelle et on SÉCURISE pour ne pas déborder (Maximum = 1)
// Pour l'Aura, le max reste 100
var scaleAura = Math.min(currentAura / 100, 1);

// Pour le Rizz, le max est maintenant de 300 !
var scaleRizz = Math.min(currentRizz / 300, 1);

// 4. On anime la barre d'Aura (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_aura']")) {
    gsap.to("[data-acc-text='barre_aura']", {
        scaleX: scaleAura, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}

// 5. On anime la barre de Rizz (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_rizz']")) {
    gsap.to("[data-acc-text='barre_rizz']", {
        scaleX: scaleRizz, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}
}

window.Script47 = function()
{
  // 1. On connecte le code à ton module Storyline
var player = GetPlayer();

// 2. On récupère les valeurs de tes variables numériques
var currentAura = player.GetVar("aura");
var currentRizz = player.GetVar("rizz");

// 3. On calcule l'échelle et on SÉCURISE pour ne pas déborder (Maximum = 1)
// Pour l'Aura, le max reste 100
var scaleAura = Math.min(currentAura / 100, 1);

// Pour le Rizz, le max est maintenant de 300 !
var scaleRizz = Math.min(currentRizz / 300, 1);

// 4. On anime la barre d'Aura (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_aura']")) {
    gsap.to("[data-acc-text='barre_aura']", {
        scaleX: scaleAura, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}

// 5. On anime la barre de Rizz (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_rizz']")) {
    gsap.to("[data-acc-text='barre_rizz']", {
        scaleX: scaleRizz, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}
}

window.Script48 = function()
{
  // 1. On connecte le code à ton module Storyline
var player = GetPlayer();

// 2. On récupère les valeurs de tes variables numériques
var currentAura = player.GetVar("aura");
var currentRizz = player.GetVar("rizz");

// 3. On calcule l'échelle et on SÉCURISE pour ne pas déborder (Maximum = 1)
// Pour l'Aura, le max reste 100
var scaleAura = Math.min(currentAura / 100, 1);

// Pour le Rizz, le max est maintenant de 300 !
var scaleRizz = Math.min(currentRizz / 300, 1);

// 4. On anime la barre d'Aura (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_aura']")) {
    gsap.to("[data-acc-text='barre_aura']", {
        scaleX: scaleAura, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}

// 5. On anime la barre de Rizz (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_rizz']")) {
    gsap.to("[data-acc-text='barre_rizz']", {
        scaleX: scaleRizz, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}
}

window.Script49 = function()
{
  // 1. On connecte le code à ton module Storyline
var player = GetPlayer();

// 2. On récupère les valeurs de tes variables numériques
var currentAura = player.GetVar("aura");
var currentRizz = player.GetVar("rizz");

// 3. On calcule l'échelle et on SÉCURISE pour ne pas déborder (Maximum = 1)
// Pour l'Aura, le max reste 100
var scaleAura = Math.min(currentAura / 100, 1);

// Pour le Rizz, le max est maintenant de 300 !
var scaleRizz = Math.min(currentRizz / 300, 1);

// 4. On anime la barre d'Aura (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_aura']")) {
    gsap.to("[data-acc-text='barre_aura']", {
        scaleX: scaleAura, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}

// 5. On anime la barre de Rizz (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_rizz']")) {
    gsap.to("[data-acc-text='barre_rizz']", {
        scaleX: scaleRizz, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}
}

window.Script50 = function()
{
  // 1. On connecte le code à ton module Storyline
var player = GetPlayer();

// 2. On récupère les valeurs de tes variables numériques
var currentAura = player.GetVar("aura");
var currentRizz = player.GetVar("rizz");

// 3. On calcule l'échelle et on SÉCURISE pour ne pas déborder (Maximum = 1)
// Pour l'Aura, le max reste 100
var scaleAura = Math.min(currentAura / 100, 1);

// Pour le Rizz, le max est maintenant de 300 !
var scaleRizz = Math.min(currentRizz / 300, 1);

// 4. On anime la barre d'Aura (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_aura']")) {
    gsap.to("[data-acc-text='barre_aura']", {
        scaleX: scaleAura, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}

// 5. On anime la barre de Rizz (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_rizz']")) {
    gsap.to("[data-acc-text='barre_rizz']", {
        scaleX: scaleRizz, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}
}

window.Script51 = function()
{
  // 1. On connecte le code à ton module Storyline
var player = GetPlayer();

// 2. On récupère les valeurs de tes variables numériques
var currentAura = player.GetVar("aura");
var currentRizz = player.GetVar("rizz");

// 3. On calcule l'échelle et on SÉCURISE pour ne pas déborder (Maximum = 1)
// Pour l'Aura, le max reste 100
var scaleAura = Math.min(currentAura / 100, 1);

// Pour le Rizz, le max est maintenant de 300 !
var scaleRizz = Math.min(currentRizz / 300, 1);

// 4. On anime la barre d'Aura (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_aura']")) {
    gsap.to("[data-acc-text='barre_aura']", {
        scaleX: scaleAura, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}

// 5. On anime la barre de Rizz (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_rizz']")) {
    gsap.to("[data-acc-text='barre_rizz']", {
        scaleX: scaleRizz, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}
}

window.Script52 = function()
{
  // 1. On connecte le code à ton module Storyline
var player = GetPlayer();

// 2. On récupère les valeurs de tes variables numériques
var currentAura = player.GetVar("aura");
var currentRizz = player.GetVar("rizz");

// 3. On calcule l'échelle et on SÉCURISE pour ne pas déborder (Maximum = 1)
// Pour l'Aura, le max reste 100
var scaleAura = Math.min(currentAura / 100, 1);

// Pour le Rizz, le max est maintenant de 300 !
var scaleRizz = Math.min(currentRizz / 300, 1);

// 4. On anime la barre d'Aura (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_aura']")) {
    gsap.to("[data-acc-text='barre_aura']", {
        scaleX: scaleAura, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}

// 5. On anime la barre de Rizz (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_rizz']")) {
    gsap.to("[data-acc-text='barre_rizz']", {
        scaleX: scaleRizz, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}
}

window.Script53 = function()
{
  // 1. On connecte le code à ton module Storyline
var player = GetPlayer();

// 2. On récupère les valeurs de tes variables numériques
var currentAura = player.GetVar("aura");
var currentRizz = player.GetVar("rizz");

// 3. On calcule l'échelle et on SÉCURISE pour ne pas déborder (Maximum = 1)
// Pour l'Aura, le max reste 100
var scaleAura = Math.min(currentAura / 100, 1);

// Pour le Rizz, le max est maintenant de 300 !
var scaleRizz = Math.min(currentRizz / 300, 1);

// 4. On anime la barre d'Aura (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_aura']")) {
    gsap.to("[data-acc-text='barre_aura']", {
        scaleX: scaleAura, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}

// 5. On anime la barre de Rizz (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_rizz']")) {
    gsap.to("[data-acc-text='barre_rizz']", {
        scaleX: scaleRizz, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}
}

window.Script54 = function()
{
  // 1. On connecte le code à ton module Storyline
var player = GetPlayer();

// 2. On récupère les valeurs de tes variables numériques
var currentAura = player.GetVar("aura");
var currentRizz = player.GetVar("rizz");

// 3. On calcule l'échelle et on SÉCURISE pour ne pas déborder (Maximum = 1)
// Pour l'Aura, le max reste 100
var scaleAura = Math.min(currentAura / 100, 1);

// Pour le Rizz, le max est maintenant de 300 !
var scaleRizz = Math.min(currentRizz / 300, 1);

// 4. On anime la barre d'Aura (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_aura']")) {
    gsap.to("[data-acc-text='barre_aura']", {
        scaleX: scaleAura, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}

// 5. On anime la barre de Rizz (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_rizz']")) {
    gsap.to("[data-acc-text='barre_rizz']", {
        scaleX: scaleRizz, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}
}

window.Script55 = function()
{
  // 1. On connecte le code à ton module Storyline
var player = GetPlayer();

// 2. On récupère les valeurs de tes variables numériques
var currentAura = player.GetVar("aura");
var currentRizz = player.GetVar("rizz");

// 3. On calcule l'échelle et on SÉCURISE pour ne pas déborder (Maximum = 1)
// Pour l'Aura, le max reste 100
var scaleAura = Math.min(currentAura / 100, 1);

// Pour le Rizz, le max est maintenant de 300 !
var scaleRizz = Math.min(currentRizz / 300, 1);

// 4. On anime la barre d'Aura (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_aura']")) {
    gsap.to("[data-acc-text='barre_aura']", {
        scaleX: scaleAura, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}

// 5. On anime la barre de Rizz (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_rizz']")) {
    gsap.to("[data-acc-text='barre_rizz']", {
        scaleX: scaleRizz, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}
}

window.Script56 = function()
{
  // 1. On connecte le code à ton module Storyline
var player = GetPlayer();

// 2. On récupère les valeurs de tes variables numériques
var currentAura = player.GetVar("aura");
var currentRizz = player.GetVar("rizz");

// 3. On calcule l'échelle et on SÉCURISE pour ne pas déborder (Maximum = 1)
// Pour l'Aura, le max reste 100
var scaleAura = Math.min(currentAura / 100, 1);

// Pour le Rizz, le max est maintenant de 300 !
var scaleRizz = Math.min(currentRizz / 300, 1);

// 4. On anime la barre d'Aura (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_aura']")) {
    gsap.to("[data-acc-text='barre_aura']", {
        scaleX: scaleAura, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}

// 5. On anime la barre de Rizz (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_rizz']")) {
    gsap.to("[data-acc-text='barre_rizz']", {
        scaleX: scaleRizz, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}
}

window.Script57 = function()
{
  // 1. On connecte le code à ton module Storyline
var player = GetPlayer();

// 2. On récupère les valeurs de tes variables numériques
var currentAura = player.GetVar("aura");
var currentRizz = player.GetVar("rizz");

// 3. On calcule l'échelle et on SÉCURISE pour ne pas déborder (Maximum = 1)
// Pour l'Aura, le max reste 100
var scaleAura = Math.min(currentAura / 100, 1);

// Pour le Rizz, le max est maintenant de 300 !
var scaleRizz = Math.min(currentRizz / 300, 1);

// 4. On anime la barre d'Aura (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_aura']")) {
    gsap.to("[data-acc-text='barre_aura']", {
        scaleX: scaleAura, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}

// 5. On anime la barre de Rizz (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_rizz']")) {
    gsap.to("[data-acc-text='barre_rizz']", {
        scaleX: scaleRizz, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}
}

window.Script58 = function()
{
  // 1. On connecte le code à ton module Storyline
var player = GetPlayer();

// 2. On récupère les valeurs de tes variables numériques
var currentAura = player.GetVar("aura");
var currentRizz = player.GetVar("rizz");

// 3. On calcule l'échelle et on SÉCURISE pour ne pas déborder (Maximum = 1)
// Pour l'Aura, le max reste 100
var scaleAura = Math.min(currentAura / 100, 1);

// Pour le Rizz, le max est maintenant de 300 !
var scaleRizz = Math.min(currentRizz / 300, 1);

// 4. On anime la barre d'Aura (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_aura']")) {
    gsap.to("[data-acc-text='barre_aura']", {
        scaleX: scaleAura, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}

// 5. On anime la barre de Rizz (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_rizz']")) {
    gsap.to("[data-acc-text='barre_rizz']", {
        scaleX: scaleRizz, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}
}

window.Script59 = function()
{
  // 1. On connecte le code à ton module Storyline
var player = GetPlayer();

// 2. On récupère les valeurs de tes variables numériques
var currentAura = player.GetVar("aura");
var currentRizz = player.GetVar("rizz");

// 3. On calcule l'échelle et on SÉCURISE pour ne pas déborder (Maximum = 1)
// Pour l'Aura, le max reste 100
var scaleAura = Math.min(currentAura / 100, 1);

// Pour le Rizz, le max est maintenant de 300 !
var scaleRizz = Math.min(currentRizz / 300, 1);

// 4. On anime la barre d'Aura (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_aura']")) {
    gsap.to("[data-acc-text='barre_aura']", {
        scaleX: scaleAura, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}

// 5. On anime la barre de Rizz (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_rizz']")) {
    gsap.to("[data-acc-text='barre_rizz']", {
        scaleX: scaleRizz, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}
}

window.Script60 = function()
{
  // 1. On connecte le code à ton module Storyline
var player = GetPlayer();

// 2. On récupère les valeurs de tes variables numériques
var currentAura = player.GetVar("aura");
var currentRizz = player.GetVar("rizz");

// 3. On calcule l'échelle et on SÉCURISE pour ne pas déborder (Maximum = 1)
// Pour l'Aura, le max reste 100
var scaleAura = Math.min(currentAura / 100, 1);

// Pour le Rizz, le max est maintenant de 300 !
var scaleRizz = Math.min(currentRizz / 300, 1);

// 4. On anime la barre d'Aura (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_aura']")) {
    gsap.to("[data-acc-text='barre_aura']", {
        scaleX: scaleAura, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}

// 5. On anime la barre de Rizz (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_rizz']")) {
    gsap.to("[data-acc-text='barre_rizz']", {
        scaleX: scaleRizz, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}
}

window.Script61 = function()
{
  // 1. On connecte le code à ton module Storyline
var player = GetPlayer();

// 2. On récupère les valeurs de tes variables numériques
var currentAura = player.GetVar("aura");
var currentRizz = player.GetVar("rizz");

// 3. On calcule l'échelle et on SÉCURISE pour ne pas déborder (Maximum = 1)
// Pour l'Aura, le max reste 100
var scaleAura = Math.min(currentAura / 100, 1);

// Pour le Rizz, le max est maintenant de 300 !
var scaleRizz = Math.min(currentRizz / 300, 1);

// 4. On anime la barre d'Aura (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_aura']")) {
    gsap.to("[data-acc-text='barre_aura']", {
        scaleX: scaleAura, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}

// 5. On anime la barre de Rizz (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_rizz']")) {
    gsap.to("[data-acc-text='barre_rizz']", {
        scaleX: scaleRizz, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}
}

window.Script62 = function()
{
  // 1. On connecte le code à ton module Storyline
var player = GetPlayer();

// 2. On récupère les valeurs de tes variables numériques
var currentAura = player.GetVar("aura");
var currentRizz = player.GetVar("rizz");

// 3. On calcule l'échelle et on SÉCURISE pour ne pas déborder (Maximum = 1)
// Pour l'Aura, le max reste 100
var scaleAura = Math.min(currentAura / 100, 1);

// Pour le Rizz, le max est maintenant de 300 !
var scaleRizz = Math.min(currentRizz / 300, 1);

// 4. On anime la barre d'Aura (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_aura']")) {
    gsap.to("[data-acc-text='barre_aura']", {
        scaleX: scaleAura, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}

// 5. On anime la barre de Rizz (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_rizz']")) {
    gsap.to("[data-acc-text='barre_rizz']", {
        scaleX: scaleRizz, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}
}

window.Script63 = function()
{
  // 1. On connecte le code à ton module Storyline
var player = GetPlayer();

// 2. On récupère les valeurs de tes variables numériques
var currentAura = player.GetVar("aura");
var currentRizz = player.GetVar("rizz");

// 3. On calcule l'échelle et on SÉCURISE pour ne pas déborder (Maximum = 1)
// Pour l'Aura, le max reste 100
var scaleAura = Math.min(currentAura / 100, 1);

// Pour le Rizz, le max est maintenant de 300 !
var scaleRizz = Math.min(currentRizz / 300, 1);

// 4. On anime la barre d'Aura (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_aura']")) {
    gsap.to("[data-acc-text='barre_aura']", {
        scaleX: scaleAura, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}

// 5. On anime la barre de Rizz (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_rizz']")) {
    gsap.to("[data-acc-text='barre_rizz']", {
        scaleX: scaleRizz, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}
}

window.Script64 = function()
{
  // 1. On connecte le code à ton module Storyline
var player = GetPlayer();

// 2. On récupère les valeurs de tes variables numériques
var currentAura = player.GetVar("aura");
var currentRizz = player.GetVar("rizz");

// 3. On calcule l'échelle et on SÉCURISE pour ne pas déborder (Maximum = 1)
// Pour l'Aura, le max reste 100
var scaleAura = Math.min(currentAura / 100, 1);

// Pour le Rizz, le max est maintenant de 300 !
var scaleRizz = Math.min(currentRizz / 300, 1);

// 4. On anime la barre d'Aura (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_aura']")) {
    gsap.to("[data-acc-text='barre_aura']", {
        scaleX: scaleAura, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}

// 5. On anime la barre de Rizz (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_rizz']")) {
    gsap.to("[data-acc-text='barre_rizz']", {
        scaleX: scaleRizz, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}
}

window.Script65 = function()
{
  // 1. On connecte le code à ton module Storyline
var player = GetPlayer();

// 2. On récupère les valeurs de tes variables numériques
var currentAura = player.GetVar("aura");
var currentRizz = player.GetVar("rizz");

// 3. On calcule l'échelle et on SÉCURISE pour ne pas déborder (Maximum = 1)
// Pour l'Aura, le max reste 100
var scaleAura = Math.min(currentAura / 100, 1);

// Pour le Rizz, le max est maintenant de 300 !
var scaleRizz = Math.min(currentRizz / 300, 1);

// 4. On anime la barre d'Aura (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_aura']")) {
    gsap.to("[data-acc-text='barre_aura']", {
        scaleX: scaleAura, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}

// 5. On anime la barre de Rizz (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_rizz']")) {
    gsap.to("[data-acc-text='barre_rizz']", {
        scaleX: scaleRizz, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}
}

window.Script66 = function()
{
  // 1. On connecte le code à ton module Storyline
var player = GetPlayer();

// 2. On récupère les valeurs de tes variables numériques
var currentAura = player.GetVar("aura");
var currentRizz = player.GetVar("rizz");

// 3. On calcule l'échelle et on SÉCURISE pour ne pas déborder (Maximum = 1)
// Pour l'Aura, le max reste 100
var scaleAura = Math.min(currentAura / 100, 1);

// Pour le Rizz, le max est maintenant de 300 !
var scaleRizz = Math.min(currentRizz / 300, 1);

// 4. On anime la barre d'Aura (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_aura']")) {
    gsap.to("[data-acc-text='barre_aura']", {
        scaleX: scaleAura, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}

// 5. On anime la barre de Rizz (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_rizz']")) {
    gsap.to("[data-acc-text='barre_rizz']", {
        scaleX: scaleRizz, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}
}

window.Script67 = function()
{
  // 1. On connecte le code à ton module Storyline
var player = GetPlayer();

// 2. On récupère les valeurs de tes variables numériques
var currentAura = player.GetVar("aura");
var currentRizz = player.GetVar("rizz");

// 3. On calcule l'échelle et on SÉCURISE pour ne pas déborder (Maximum = 1)
// Pour l'Aura, le max reste 100
var scaleAura = Math.min(currentAura / 100, 1);

// Pour le Rizz, le max est maintenant de 300 !
var scaleRizz = Math.min(currentRizz / 300, 1);

// 4. On anime la barre d'Aura (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_aura']")) {
    gsap.to("[data-acc-text='barre_aura']", {
        scaleX: scaleAura, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}

// 5. On anime la barre de Rizz (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_rizz']")) {
    gsap.to("[data-acc-text='barre_rizz']", {
        scaleX: scaleRizz, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}
}

window.Script68 = function()
{
  // 1. On connecte le code à ton module Storyline
var player = GetPlayer();

// 2. On récupère les valeurs de tes variables numériques
var currentAura = player.GetVar("aura");
var currentRizz = player.GetVar("rizz");

// 3. On calcule l'échelle et on SÉCURISE pour ne pas déborder (Maximum = 1)
// Pour l'Aura, le max reste 100
var scaleAura = Math.min(currentAura / 100, 1);

// Pour le Rizz, le max est maintenant de 300 !
var scaleRizz = Math.min(currentRizz / 300, 1);

// 4. On anime la barre d'Aura (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_aura']")) {
    gsap.to("[data-acc-text='barre_aura']", {
        scaleX: scaleAura, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}

// 5. On anime la barre de Rizz (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_rizz']")) {
    gsap.to("[data-acc-text='barre_rizz']", {
        scaleX: scaleRizz, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}
}

window.Script69 = function()
{
  // 1. On connecte le code à ton module Storyline
var player = GetPlayer();

// 2. On récupère les valeurs de tes variables numériques
var currentAura = player.GetVar("aura");
var currentRizz = player.GetVar("rizz");

// 3. On calcule l'échelle et on SÉCURISE pour ne pas déborder (Maximum = 1)
// Pour l'Aura, le max reste 100
var scaleAura = Math.min(currentAura / 100, 1);

// Pour le Rizz, le max est maintenant de 300 !
var scaleRizz = Math.min(currentRizz / 300, 1);

// 4. On anime la barre d'Aura (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_aura']")) {
    gsap.to("[data-acc-text='barre_aura']", {
        scaleX: scaleAura, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}

// 5. On anime la barre de Rizz (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_rizz']")) {
    gsap.to("[data-acc-text='barre_rizz']", {
        scaleX: scaleRizz, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}
}

window.Script70 = function()
{
  // 1. On connecte le code à ton module Storyline
var player = GetPlayer();

// 2. On récupère les valeurs de tes variables numériques
var currentAura = player.GetVar("aura");
var currentRizz = player.GetVar("rizz");

// 3. On calcule l'échelle et on SÉCURISE pour ne pas déborder (Maximum = 1)
// Pour l'Aura, le max reste 100
var scaleAura = Math.min(currentAura / 100, 1);

// Pour le Rizz, le max est maintenant de 300 !
var scaleRizz = Math.min(currentRizz / 300, 1);

// 4. On anime la barre d'Aura (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_aura']")) {
    gsap.to("[data-acc-text='barre_aura']", {
        scaleX: scaleAura, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}

// 5. On anime la barre de Rizz (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_rizz']")) {
    gsap.to("[data-acc-text='barre_rizz']", {
        scaleX: scaleRizz, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}
}

window.Script71 = function()
{
  // 1. On connecte le code à ton module Storyline
var player = GetPlayer();

// 2. On récupère les valeurs de tes variables numériques
var currentAura = player.GetVar("aura");
var currentRizz = player.GetVar("rizz");

// 3. On calcule l'échelle et on SÉCURISE pour ne pas déborder (Maximum = 1)
// Pour l'Aura, le max reste 100
var scaleAura = Math.min(currentAura / 100, 1);

// Pour le Rizz, le max est maintenant de 300 !
var scaleRizz = Math.min(currentRizz / 300, 1);

// 4. On anime la barre d'Aura (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_aura']")) {
    gsap.to("[data-acc-text='barre_aura']", {
        scaleX: scaleAura, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}

// 5. On anime la barre de Rizz (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_rizz']")) {
    gsap.to("[data-acc-text='barre_rizz']", {
        scaleX: scaleRizz, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}
}

window.Script72 = function()
{
  // 1. On connecte le code à ton module Storyline
var player = GetPlayer();

// 2. On récupère les valeurs de tes variables numériques
var currentAura = player.GetVar("aura");
var currentRizz = player.GetVar("rizz");

// 3. On calcule l'échelle et on SÉCURISE pour ne pas déborder (Maximum = 1)
// Pour l'Aura, le max reste 100
var scaleAura = Math.min(currentAura / 100, 1);

// Pour le Rizz, le max est maintenant de 300 !
var scaleRizz = Math.min(currentRizz / 300, 1);

// 4. On anime la barre d'Aura (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_aura']")) {
    gsap.to("[data-acc-text='barre_aura']", {
        scaleX: scaleAura, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}

// 5. On anime la barre de Rizz (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_rizz']")) {
    gsap.to("[data-acc-text='barre_rizz']", {
        scaleX: scaleRizz, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}
}

window.Script73 = function()
{
  // 1. On connecte le code à ton module Storyline
var player = GetPlayer();

// 2. On récupère les valeurs de tes variables numériques
var currentAura = player.GetVar("aura");
var currentRizz = player.GetVar("rizz");

// 3. On calcule l'échelle et on SÉCURISE pour ne pas déborder (Maximum = 1)
// Pour l'Aura, le max reste 100
var scaleAura = Math.min(currentAura / 100, 1);

// Pour le Rizz, le max est maintenant de 300 !
var scaleRizz = Math.min(currentRizz / 300, 1);

// 4. On anime la barre d'Aura (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_aura']")) {
    gsap.to("[data-acc-text='barre_aura']", {
        scaleX: scaleAura, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}

// 5. On anime la barre de Rizz (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_rizz']")) {
    gsap.to("[data-acc-text='barre_rizz']", {
        scaleX: scaleRizz, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}
}

window.Script74 = function()
{
  // 1. On connecte le code à ton module Storyline
var player = GetPlayer();

// 2. On récupère les valeurs de tes variables numériques
var currentAura = player.GetVar("aura");
var currentRizz = player.GetVar("rizz");

// 3. On calcule l'échelle et on SÉCURISE pour ne pas déborder (Maximum = 1)
// Pour l'Aura, le max reste 100
var scaleAura = Math.min(currentAura / 100, 1);

// Pour le Rizz, le max est maintenant de 300 !
var scaleRizz = Math.min(currentRizz / 300, 1);

// 4. On anime la barre d'Aura (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_aura']")) {
    gsap.to("[data-acc-text='barre_aura']", {
        scaleX: scaleAura, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}

// 5. On anime la barre de Rizz (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_rizz']")) {
    gsap.to("[data-acc-text='barre_rizz']", {
        scaleX: scaleRizz, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}
}

window.Script75 = function()
{
  // 1. On connecte le code à ton module Storyline
var player = GetPlayer();

// 2. On récupère les valeurs de tes variables numériques
var currentAura = player.GetVar("aura");
var currentRizz = player.GetVar("rizz");

// 3. On calcule l'échelle et on SÉCURISE pour ne pas déborder (Maximum = 1)
// Pour l'Aura, le max reste 100
var scaleAura = Math.min(currentAura / 100, 1);

// Pour le Rizz, le max est maintenant de 300 !
var scaleRizz = Math.min(currentRizz / 300, 1);

// 4. On anime la barre d'Aura (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_aura']")) {
    gsap.to("[data-acc-text='barre_aura']", {
        scaleX: scaleAura, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}

// 5. On anime la barre de Rizz (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_rizz']")) {
    gsap.to("[data-acc-text='barre_rizz']", {
        scaleX: scaleRizz, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}
}

window.Script76 = function()
{
  // 1. On connecte le code à ton module Storyline
var player = GetPlayer();

// 2. On récupère les valeurs de tes variables numériques
var currentAura = player.GetVar("aura");
var currentRizz = player.GetVar("rizz");

// 3. On calcule l'échelle et on SÉCURISE pour ne pas déborder (Maximum = 1)
// Pour l'Aura, le max reste 100
var scaleAura = Math.min(currentAura / 100, 1);

// Pour le Rizz, le max est maintenant de 300 !
var scaleRizz = Math.min(currentRizz / 300, 1);

// 4. On anime la barre d'Aura (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_aura']")) {
    gsap.to("[data-acc-text='barre_aura']", {
        scaleX: scaleAura, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}

// 5. On anime la barre de Rizz (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_rizz']")) {
    gsap.to("[data-acc-text='barre_rizz']", {
        scaleX: scaleRizz, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}
}

window.Script77 = function()
{
  // 1. On connecte le code à ton module Storyline
var player = GetPlayer();

// 2. On récupère les valeurs de tes variables numériques
var currentAura = player.GetVar("aura");
var currentRizz = player.GetVar("rizz");

// 3. On calcule l'échelle et on SÉCURISE pour ne pas déborder (Maximum = 1)
// Pour l'Aura, le max reste 100
var scaleAura = Math.min(currentAura / 100, 1);

// Pour le Rizz, le max est maintenant de 300 !
var scaleRizz = Math.min(currentRizz / 300, 1);

// 4. On anime la barre d'Aura (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_aura']")) {
    gsap.to("[data-acc-text='barre_aura']", {
        scaleX: scaleAura, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}

// 5. On anime la barre de Rizz (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_rizz']")) {
    gsap.to("[data-acc-text='barre_rizz']", {
        scaleX: scaleRizz, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}
}

window.Script78 = function()
{
  // 1. On connecte le code à ton module Storyline
var player = GetPlayer();

// 2. On récupère les valeurs de tes variables numériques
var currentAura = player.GetVar("aura");
var currentRizz = player.GetVar("rizz");

// 3. On calcule l'échelle et on SÉCURISE pour ne pas déborder (Maximum = 1)
// Pour l'Aura, le max reste 100
var scaleAura = Math.min(currentAura / 100, 1);

// Pour le Rizz, le max est maintenant de 300 !
var scaleRizz = Math.min(currentRizz / 300, 1);

// 4. On anime la barre d'Aura (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_aura']")) {
    gsap.to("[data-acc-text='barre_aura']", {
        scaleX: scaleAura, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}

// 5. On anime la barre de Rizz (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_rizz']")) {
    gsap.to("[data-acc-text='barre_rizz']", {
        scaleX: scaleRizz, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}
}

window.Script79 = function()
{
  // 1. On connecte le code à ton module Storyline
var player = GetPlayer();

// 2. On récupère les valeurs de tes variables numériques
var currentAura = player.GetVar("aura");
var currentRizz = player.GetVar("rizz");

// 3. On calcule l'échelle et on SÉCURISE pour ne pas déborder (Maximum = 1)
// Pour l'Aura, le max reste 100
var scaleAura = Math.min(currentAura / 100, 1);

// Pour le Rizz, le max est maintenant de 300 !
var scaleRizz = Math.min(currentRizz / 300, 1);

// 4. On anime la barre d'Aura (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_aura']")) {
    gsap.to("[data-acc-text='barre_aura']", {
        scaleX: scaleAura, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}

// 5. On anime la barre de Rizz (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_rizz']")) {
    gsap.to("[data-acc-text='barre_rizz']", {
        scaleX: scaleRizz, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}
}

window.Script80 = function()
{
  // 1. On connecte le code à ton module Storyline
var player = GetPlayer();

// 2. On récupère les valeurs de tes variables numériques
var currentAura = player.GetVar("aura");
var currentRizz = player.GetVar("rizz");

// 3. On calcule l'échelle et on SÉCURISE pour ne pas déborder (Maximum = 1)
// Pour l'Aura, le max reste 100
var scaleAura = Math.min(currentAura / 100, 1);

// Pour le Rizz, le max est maintenant de 300 !
var scaleRizz = Math.min(currentRizz / 300, 1);

// 4. On anime la barre d'Aura (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_aura']")) {
    gsap.to("[data-acc-text='barre_aura']", {
        scaleX: scaleAura, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}

// 5. On anime la barre de Rizz (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_rizz']")) {
    gsap.to("[data-acc-text='barre_rizz']", {
        scaleX: scaleRizz, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}
}

window.Script81 = function()
{
  // 1. On connecte le code à ton module Storyline
var player = GetPlayer();

// 2. On récupère les valeurs de tes variables numériques
var currentAura = player.GetVar("aura");
var currentRizz = player.GetVar("rizz");

// 3. On calcule l'échelle et on SÉCURISE pour ne pas déborder (Maximum = 1)
// Pour l'Aura, le max reste 100
var scaleAura = Math.min(currentAura / 100, 1);

// Pour le Rizz, le max est maintenant de 300 !
var scaleRizz = Math.min(currentRizz / 300, 1);

// 4. On anime la barre d'Aura (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_aura']")) {
    gsap.to("[data-acc-text='barre_aura']", {
        scaleX: scaleAura, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}

// 5. On anime la barre de Rizz (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_rizz']")) {
    gsap.to("[data-acc-text='barre_rizz']", {
        scaleX: scaleRizz, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}
}

window.Script82 = function()
{
  // 1. On connecte le code à ton module Storyline
var player = GetPlayer();

// 2. On récupère les valeurs de tes variables numériques
var currentAura = player.GetVar("aura");
var currentRizz = player.GetVar("rizz");

// 3. On calcule l'échelle et on SÉCURISE pour ne pas déborder (Maximum = 1)
// Pour l'Aura, le max reste 100
var scaleAura = Math.min(currentAura / 100, 1);

// Pour le Rizz, le max est maintenant de 300 !
var scaleRizz = Math.min(currentRizz / 300, 1);

// 4. On anime la barre d'Aura (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_aura']")) {
    gsap.to("[data-acc-text='barre_aura']", {
        scaleX: scaleAura, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}

// 5. On anime la barre de Rizz (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_rizz']")) {
    gsap.to("[data-acc-text='barre_rizz']", {
        scaleX: scaleRizz, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}
}

window.Script83 = function()
{
  // 1. On connecte le code à ton module Storyline
var player = GetPlayer();

// 2. On récupère les valeurs de tes variables numériques
var currentAura = player.GetVar("aura");
var currentRizz = player.GetVar("rizz");

// 3. On calcule l'échelle et on SÉCURISE pour ne pas déborder (Maximum = 1)
// Pour l'Aura, le max reste 100
var scaleAura = Math.min(currentAura / 100, 1);

// Pour le Rizz, le max est maintenant de 300 !
var scaleRizz = Math.min(currentRizz / 300, 1);

// 4. On anime la barre d'Aura (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_aura']")) {
    gsap.to("[data-acc-text='barre_aura']", {
        scaleX: scaleAura, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}

// 5. On anime la barre de Rizz (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_rizz']")) {
    gsap.to("[data-acc-text='barre_rizz']", {
        scaleX: scaleRizz, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}
}

window.Script84 = function()
{
  // 1. On connecte le code à ton module Storyline
var player = GetPlayer();

// 2. On récupère les valeurs de tes variables numériques
var currentAura = player.GetVar("aura");
var currentRizz = player.GetVar("rizz");

// 3. On calcule l'échelle et on SÉCURISE pour ne pas déborder (Maximum = 1)
// Pour l'Aura, le max reste 100
var scaleAura = Math.min(currentAura / 100, 1);

// Pour le Rizz, le max est maintenant de 300 !
var scaleRizz = Math.min(currentRizz / 300, 1);

// 4. On anime la barre d'Aura (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_aura']")) {
    gsap.to("[data-acc-text='barre_aura']", {
        scaleX: scaleAura, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}

// 5. On anime la barre de Rizz (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_rizz']")) {
    gsap.to("[data-acc-text='barre_rizz']", {
        scaleX: scaleRizz, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}
}

window.Script85 = function()
{
  // 1. On connecte le code à ton module Storyline
var player = GetPlayer();

// 2. On récupère les valeurs de tes variables numériques
var currentAura = player.GetVar("aura");
var currentRizz = player.GetVar("rizz");

// 3. On calcule l'échelle et on SÉCURISE pour ne pas déborder (Maximum = 1)
// Pour l'Aura, le max reste 100
var scaleAura = Math.min(currentAura / 100, 1);

// Pour le Rizz, le max est maintenant de 300 !
var scaleRizz = Math.min(currentRizz / 300, 1);

// 4. On anime la barre d'Aura (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_aura']")) {
    gsap.to("[data-acc-text='barre_aura']", {
        scaleX: scaleAura, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}

// 5. On anime la barre de Rizz (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_rizz']")) {
    gsap.to("[data-acc-text='barre_rizz']", {
        scaleX: scaleRizz, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}
}

window.Script86 = function()
{
  // 1. On connecte le code à ton module Storyline
var player = GetPlayer();

// 2. On récupère les valeurs de tes variables numériques
var currentAura = player.GetVar("aura");
var currentRizz = player.GetVar("rizz");

// 3. On calcule l'échelle et on SÉCURISE pour ne pas déborder (Maximum = 1)
// Pour l'Aura, le max reste 100
var scaleAura = Math.min(currentAura / 100, 1);

// Pour le Rizz, le max est maintenant de 300 !
var scaleRizz = Math.min(currentRizz / 300, 1);

// 4. On anime la barre d'Aura (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_aura']")) {
    gsap.to("[data-acc-text='barre_aura']", {
        scaleX: scaleAura, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}

// 5. On anime la barre de Rizz (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_rizz']")) {
    gsap.to("[data-acc-text='barre_rizz']", {
        scaleX: scaleRizz, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}
}

window.Script87 = function()
{
  // 1. On connecte le code à ton module Storyline
var player = GetPlayer();

// 2. On récupère les valeurs de tes variables numériques
var currentAura = player.GetVar("aura");
var currentRizz = player.GetVar("rizz");

// 3. On calcule l'échelle et on SÉCURISE pour ne pas déborder (Maximum = 1)
// Pour l'Aura, le max reste 100
var scaleAura = Math.min(currentAura / 100, 1);

// Pour le Rizz, le max est maintenant de 300 !
var scaleRizz = Math.min(currentRizz / 300, 1);

// 4. On anime la barre d'Aura (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_aura']")) {
    gsap.to("[data-acc-text='barre_aura']", {
        scaleX: scaleAura, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}

// 5. On anime la barre de Rizz (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_rizz']")) {
    gsap.to("[data-acc-text='barre_rizz']", {
        scaleX: scaleRizz, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}
}

window.Script88 = function()
{
  // 1. On connecte le code à ton module Storyline
var player = GetPlayer();

// 2. On récupère les valeurs de tes variables numériques
var currentAura = player.GetVar("aura");
var currentRizz = player.GetVar("rizz");

// 3. On calcule l'échelle et on SÉCURISE pour ne pas déborder (Maximum = 1)
// Pour l'Aura, le max reste 100
var scaleAura = Math.min(currentAura / 100, 1);

// Pour le Rizz, le max est maintenant de 300 !
var scaleRizz = Math.min(currentRizz / 300, 1);

// 4. On anime la barre d'Aura (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_aura']")) {
    gsap.to("[data-acc-text='barre_aura']", {
        scaleX: scaleAura, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}

// 5. On anime la barre de Rizz (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_rizz']")) {
    gsap.to("[data-acc-text='barre_rizz']", {
        scaleX: scaleRizz, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}
}

window.Script89 = function()
{
  // 1. On connecte le code à ton module Storyline
var player = GetPlayer();

// 2. On récupère les valeurs de tes variables numériques
var currentAura = player.GetVar("aura");
var currentRizz = player.GetVar("rizz");

// 3. On calcule l'échelle et on SÉCURISE pour ne pas déborder (Maximum = 1)
// Pour l'Aura, le max reste 100
var scaleAura = Math.min(currentAura / 100, 1);

// Pour le Rizz, le max est maintenant de 300 !
var scaleRizz = Math.min(currentRizz / 300, 1);

// 4. On anime la barre d'Aura (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_aura']")) {
    gsap.to("[data-acc-text='barre_aura']", {
        scaleX: scaleAura, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}

// 5. On anime la barre de Rizz (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_rizz']")) {
    gsap.to("[data-acc-text='barre_rizz']", {
        scaleX: scaleRizz, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}
}

window.Script90 = function()
{
  // 1. On connecte le code à ton module Storyline
var player = GetPlayer();

// 2. On récupère les valeurs de tes variables numériques
var currentAura = player.GetVar("aura");
var currentRizz = player.GetVar("rizz");

// 3. On calcule l'échelle et on SÉCURISE pour ne pas déborder (Maximum = 1)
// Pour l'Aura, le max reste 100
var scaleAura = Math.min(currentAura / 100, 1);

// Pour le Rizz, le max est maintenant de 300 !
var scaleRizz = Math.min(currentRizz / 300, 1);

// 4. On anime la barre d'Aura (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_aura']")) {
    gsap.to("[data-acc-text='barre_aura']", {
        scaleX: scaleAura, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}

// 5. On anime la barre de Rizz (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_rizz']")) {
    gsap.to("[data-acc-text='barre_rizz']", {
        scaleX: scaleRizz, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}
}

window.Script91 = function()
{
  // 1. On connecte le code à ton module Storyline
var player = GetPlayer();

// 2. On récupère les valeurs de tes variables numériques
var currentAura = player.GetVar("aura");
var currentRizz = player.GetVar("rizz");

// 3. On calcule l'échelle et on SÉCURISE pour ne pas déborder (Maximum = 1)
// Pour l'Aura, le max reste 100
var scaleAura = Math.min(currentAura / 100, 1);

// Pour le Rizz, le max est maintenant de 300 !
var scaleRizz = Math.min(currentRizz / 300, 1);

// 4. On anime la barre d'Aura (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_aura']")) {
    gsap.to("[data-acc-text='barre_aura']", {
        scaleX: scaleAura, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}

// 5. On anime la barre de Rizz (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_rizz']")) {
    gsap.to("[data-acc-text='barre_rizz']", {
        scaleX: scaleRizz, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}
}

window.Script92 = function()
{
  // 1. On connecte le code à ton module Storyline
var player = GetPlayer();

// 2. On récupère les valeurs de tes variables numériques
var currentAura = player.GetVar("aura");
var currentRizz = player.GetVar("rizz");

// 3. On calcule l'échelle et on SÉCURISE pour ne pas déborder (Maximum = 1)
// Pour l'Aura, le max reste 100
var scaleAura = Math.min(currentAura / 100, 1);

// Pour le Rizz, le max est maintenant de 300 !
var scaleRizz = Math.min(currentRizz / 300, 1);

// 4. On anime la barre d'Aura (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_aura']")) {
    gsap.to("[data-acc-text='barre_aura']", {
        scaleX: scaleAura, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}

// 5. On anime la barre de Rizz (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_rizz']")) {
    gsap.to("[data-acc-text='barre_rizz']", {
        scaleX: scaleRizz, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}
}

window.Script93 = function()
{
  // 1. On connecte le code à ton module Storyline
var player = GetPlayer();

// 2. On récupère les valeurs de tes variables numériques
var currentAura = player.GetVar("aura");
var currentRizz = player.GetVar("rizz");

// 3. On calcule l'échelle et on SÉCURISE pour ne pas déborder (Maximum = 1)
// Pour l'Aura, le max reste 100
var scaleAura = Math.min(currentAura / 100, 1);

// Pour le Rizz, le max est maintenant de 300 !
var scaleRizz = Math.min(currentRizz / 300, 1);

// 4. On anime la barre d'Aura (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_aura']")) {
    gsap.to("[data-acc-text='barre_aura']", {
        scaleX: scaleAura, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}

// 5. On anime la barre de Rizz (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_rizz']")) {
    gsap.to("[data-acc-text='barre_rizz']", {
        scaleX: scaleRizz, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}
}

window.Script94 = function()
{
  // 1. On connecte le code à ton module Storyline
var player = GetPlayer();

// 2. On récupère les valeurs de tes variables numériques
var currentAura = player.GetVar("aura");
var currentRizz = player.GetVar("rizz");

// 3. On calcule l'échelle et on SÉCURISE pour ne pas déborder (Maximum = 1)
// Pour l'Aura, le max reste 100
var scaleAura = Math.min(currentAura / 100, 1);

// Pour le Rizz, le max est maintenant de 300 !
var scaleRizz = Math.min(currentRizz / 300, 1);

// 4. On anime la barre d'Aura (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_aura']")) {
    gsap.to("[data-acc-text='barre_aura']", {
        scaleX: scaleAura, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}

// 5. On anime la barre de Rizz (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_rizz']")) {
    gsap.to("[data-acc-text='barre_rizz']", {
        scaleX: scaleRizz, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}
}

window.Script95 = function()
{
  // 1. On connecte le code à ton module Storyline
var player = GetPlayer();

// 2. On récupère les valeurs de tes variables numériques
var currentAura = player.GetVar("aura");
var currentRizz = player.GetVar("rizz");

// 3. On calcule l'échelle et on SÉCURISE pour ne pas déborder (Maximum = 1)
// Pour l'Aura, le max reste 100
var scaleAura = Math.min(currentAura / 100, 1);

// Pour le Rizz, le max est maintenant de 300 !
var scaleRizz = Math.min(currentRizz / 300, 1);

// 4. On anime la barre d'Aura (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_aura']")) {
    gsap.to("[data-acc-text='barre_aura']", {
        scaleX: scaleAura, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}

// 5. On anime la barre de Rizz (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_rizz']")) {
    gsap.to("[data-acc-text='barre_rizz']", {
        scaleX: scaleRizz, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}
}

window.Script96 = function()
{
  // 1. On connecte le code à ton module Storyline
var player = GetPlayer();

// 2. On récupère les valeurs de tes variables numériques
var currentAura = player.GetVar("aura");
var currentRizz = player.GetVar("rizz");

// 3. On calcule l'échelle et on SÉCURISE pour ne pas déborder (Maximum = 1)
// Pour l'Aura, le max reste 100
var scaleAura = Math.min(currentAura / 100, 1);

// Pour le Rizz, le max est maintenant de 300 !
var scaleRizz = Math.min(currentRizz / 300, 1);

// 4. On anime la barre d'Aura (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_aura']")) {
    gsap.to("[data-acc-text='barre_aura']", {
        scaleX: scaleAura, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}

// 5. On anime la barre de Rizz (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_rizz']")) {
    gsap.to("[data-acc-text='barre_rizz']", {
        scaleX: scaleRizz, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}
}

window.Script97 = function()
{
  // 1. On connecte le code à ton module Storyline
var player = GetPlayer();

// 2. On récupère les valeurs de tes variables numériques
var currentAura = player.GetVar("aura");
var currentRizz = player.GetVar("rizz");

// 3. On calcule l'échelle et on SÉCURISE pour ne pas déborder (Maximum = 1)
// Pour l'Aura, le max reste 100
var scaleAura = Math.min(currentAura / 100, 1);

// Pour le Rizz, le max est maintenant de 300 !
var scaleRizz = Math.min(currentRizz / 300, 1);

// 4. On anime la barre d'Aura (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_aura']")) {
    gsap.to("[data-acc-text='barre_aura']", {
        scaleX: scaleAura, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}

// 5. On anime la barre de Rizz (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_rizz']")) {
    gsap.to("[data-acc-text='barre_rizz']", {
        scaleX: scaleRizz, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}
}

window.Script98 = function()
{
  // 1. On connecte le code à ton module Storyline
var player = GetPlayer();

// 2. On récupère les valeurs de tes variables numériques
var currentAura = player.GetVar("aura");
var currentRizz = player.GetVar("rizz");

// 3. On calcule l'échelle et on SÉCURISE pour ne pas déborder (Maximum = 1)
// Pour l'Aura, le max reste 100
var scaleAura = Math.min(currentAura / 100, 1);

// Pour le Rizz, le max est maintenant de 300 !
var scaleRizz = Math.min(currentRizz / 300, 1);

// 4. On anime la barre d'Aura (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_aura']")) {
    gsap.to("[data-acc-text='barre_aura']", {
        scaleX: scaleAura, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}

// 5. On anime la barre de Rizz (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_rizz']")) {
    gsap.to("[data-acc-text='barre_rizz']", {
        scaleX: scaleRizz, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}
}

window.Script99 = function()
{
  // 1. On connecte le code à ton module Storyline
var player = GetPlayer();

// 2. On récupère les valeurs de tes variables numériques
var currentAura = player.GetVar("aura");
var currentRizz = player.GetVar("rizz");

// 3. On calcule l'échelle et on SÉCURISE pour ne pas déborder (Maximum = 1)
// Pour l'Aura, le max reste 100
var scaleAura = Math.min(currentAura / 100, 1);

// Pour le Rizz, le max est maintenant de 300 !
var scaleRizz = Math.min(currentRizz / 300, 1);

// 4. On anime la barre d'Aura (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_aura']")) {
    gsap.to("[data-acc-text='barre_aura']", {
        scaleX: scaleAura, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}

// 5. On anime la barre de Rizz (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_rizz']")) {
    gsap.to("[data-acc-text='barre_rizz']", {
        scaleX: scaleRizz, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}
}

window.Script100 = function()
{
  // 1. On connecte le code à ton module Storyline
var player = GetPlayer();

// 2. On récupère les valeurs de tes variables numériques
var currentAura = player.GetVar("aura");
var currentRizz = player.GetVar("rizz");

// 3. On calcule l'échelle et on SÉCURISE pour ne pas déborder (Maximum = 1)
// Pour l'Aura, le max reste 100
var scaleAura = Math.min(currentAura / 100, 1);

// Pour le Rizz, le max est maintenant de 300 !
var scaleRizz = Math.min(currentRizz / 300, 1);

// 4. On anime la barre d'Aura (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_aura']")) {
    gsap.to("[data-acc-text='barre_aura']", {
        scaleX: scaleAura, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}

// 5. On anime la barre de Rizz (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_rizz']")) {
    gsap.to("[data-acc-text='barre_rizz']", {
        scaleX: scaleRizz, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}
}

window.Script101 = function()
{
  // 1. On connecte le code à ton module Storyline
var player = GetPlayer();

// 2. On récupère les valeurs de tes variables numériques
var currentAura = player.GetVar("aura");
var currentRizz = player.GetVar("rizz");

// 3. On calcule l'échelle et on SÉCURISE pour ne pas déborder (Maximum = 1)
// Pour l'Aura, le max reste 100
var scaleAura = Math.min(currentAura / 100, 1);

// Pour le Rizz, le max est maintenant de 300 !
var scaleRizz = Math.min(currentRizz / 300, 1);

// 4. On anime la barre d'Aura (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_aura']")) {
    gsap.to("[data-acc-text='barre_aura']", {
        scaleX: scaleAura, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}

// 5. On anime la barre de Rizz (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_rizz']")) {
    gsap.to("[data-acc-text='barre_rizz']", {
        scaleX: scaleRizz, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}
}

window.Script102 = function()
{
  // 1. On connecte le code à ton module Storyline
var player = GetPlayer();

// 2. On récupère les valeurs de tes variables numériques
var currentAura = player.GetVar("aura");
var currentRizz = player.GetVar("rizz");

// 3. On calcule l'échelle et on SÉCURISE pour ne pas déborder (Maximum = 1)
// Pour l'Aura, le max reste 100
var scaleAura = Math.min(currentAura / 100, 1);

// Pour le Rizz, le max est maintenant de 300 !
var scaleRizz = Math.min(currentRizz / 300, 1);

// 4. On anime la barre d'Aura (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_aura']")) {
    gsap.to("[data-acc-text='barre_aura']", {
        scaleX: scaleAura, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}

// 5. On anime la barre de Rizz (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_rizz']")) {
    gsap.to("[data-acc-text='barre_rizz']", {
        scaleX: scaleRizz, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}
}

window.Script103 = function()
{
  // 1. On connecte le code à ton module Storyline
var player = GetPlayer();

// 2. On récupère les valeurs de tes variables numériques
var currentAura = player.GetVar("aura");
var currentRizz = player.GetVar("rizz");

// 3. On calcule l'échelle et on SÉCURISE pour ne pas déborder (Maximum = 1)
// Pour l'Aura, le max reste 100
var scaleAura = Math.min(currentAura / 100, 1);

// Pour le Rizz, le max est maintenant de 300 !
var scaleRizz = Math.min(currentRizz / 300, 1);

// 4. On anime la barre d'Aura (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_aura']")) {
    gsap.to("[data-acc-text='barre_aura']", {
        scaleX: scaleAura, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}

// 5. On anime la barre de Rizz (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_rizz']")) {
    gsap.to("[data-acc-text='barre_rizz']", {
        scaleX: scaleRizz, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}
}

window.Script104 = function()
{
  // 1. On connecte le code à ton module Storyline
var player = GetPlayer();

// 2. On récupère les valeurs de tes variables numériques
var currentAura = player.GetVar("aura");
var currentRizz = player.GetVar("rizz");

// 3. On calcule l'échelle et on SÉCURISE pour ne pas déborder (Maximum = 1)
// Pour l'Aura, le max reste 100
var scaleAura = Math.min(currentAura / 100, 1);

// Pour le Rizz, le max est maintenant de 300 !
var scaleRizz = Math.min(currentRizz / 300, 1);

// 4. On anime la barre d'Aura (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_aura']")) {
    gsap.to("[data-acc-text='barre_aura']", {
        scaleX: scaleAura, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}

// 5. On anime la barre de Rizz (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_rizz']")) {
    gsap.to("[data-acc-text='barre_rizz']", {
        scaleX: scaleRizz, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}
}

window.Script105 = function()
{
  // 1. On connecte le code à ton module Storyline
var player = GetPlayer();

// 2. On récupère les valeurs de tes variables numériques
var currentAura = player.GetVar("aura");
var currentRizz = player.GetVar("rizz");

// 3. On calcule l'échelle et on SÉCURISE pour ne pas déborder (Maximum = 1)
// Pour l'Aura, le max reste 100
var scaleAura = Math.min(currentAura / 100, 1);

// Pour le Rizz, le max est maintenant de 300 !
var scaleRizz = Math.min(currentRizz / 300, 1);

// 4. On anime la barre d'Aura (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_aura']")) {
    gsap.to("[data-acc-text='barre_aura']", {
        scaleX: scaleAura, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}

// 5. On anime la barre de Rizz (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_rizz']")) {
    gsap.to("[data-acc-text='barre_rizz']", {
        scaleX: scaleRizz, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}
}

window.Script106 = function()
{
  // 1. On connecte le code à ton module Storyline
var player = GetPlayer();

// 2. On récupère les valeurs de tes variables numériques
var currentAura = player.GetVar("aura");
var currentRizz = player.GetVar("rizz");

// 3. On calcule l'échelle et on SÉCURISE pour ne pas déborder (Maximum = 1)
// Pour l'Aura, le max reste 100
var scaleAura = Math.min(currentAura / 100, 1);

// Pour le Rizz, le max est maintenant de 300 !
var scaleRizz = Math.min(currentRizz / 300, 1);

// 4. On anime la barre d'Aura (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_aura']")) {
    gsap.to("[data-acc-text='barre_aura']", {
        scaleX: scaleAura, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}

// 5. On anime la barre de Rizz (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_rizz']")) {
    gsap.to("[data-acc-text='barre_rizz']", {
        scaleX: scaleRizz, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}
}

window.Script107 = function()
{
  // 1. On connecte le code à ton module Storyline
var player = GetPlayer();

// 2. On récupère les valeurs de tes variables numériques
var currentAura = player.GetVar("aura");
var currentRizz = player.GetVar("rizz");

// 3. On calcule l'échelle et on SÉCURISE pour ne pas déborder (Maximum = 1)
// Pour l'Aura, le max reste 100
var scaleAura = Math.min(currentAura / 100, 1);

// Pour le Rizz, le max est maintenant de 300 !
var scaleRizz = Math.min(currentRizz / 300, 1);

// 4. On anime la barre d'Aura (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_aura']")) {
    gsap.to("[data-acc-text='barre_aura']", {
        scaleX: scaleAura, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}

// 5. On anime la barre de Rizz (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_rizz']")) {
    gsap.to("[data-acc-text='barre_rizz']", {
        scaleX: scaleRizz, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}
}

window.Script108 = function()
{
  // 1. On connecte le code à ton module Storyline
var player = GetPlayer();

// 2. On récupère les valeurs de tes variables numériques
var currentAura = player.GetVar("aura");
var currentRizz = player.GetVar("rizz");

// 3. On calcule l'échelle et on SÉCURISE pour ne pas déborder (Maximum = 1)
// Pour l'Aura, le max reste 100
var scaleAura = Math.min(currentAura / 100, 1);

// Pour le Rizz, le max est maintenant de 300 !
var scaleRizz = Math.min(currentRizz / 300, 1);

// 4. On anime la barre d'Aura (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_aura']")) {
    gsap.to("[data-acc-text='barre_aura']", {
        scaleX: scaleAura, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}

// 5. On anime la barre de Rizz (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_rizz']")) {
    gsap.to("[data-acc-text='barre_rizz']", {
        scaleX: scaleRizz, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}
}

window.Script109 = function()
{
  // 1. On connecte le code à ton module Storyline
var player = GetPlayer();

// 2. On récupère les valeurs de tes variables numériques
var currentAura = player.GetVar("aura");
var currentRizz = player.GetVar("rizz");

// 3. On calcule l'échelle et on SÉCURISE pour ne pas déborder (Maximum = 1)
// Pour l'Aura, le max reste 100
var scaleAura = Math.min(currentAura / 100, 1);

// Pour le Rizz, le max est maintenant de 300 !
var scaleRizz = Math.min(currentRizz / 300, 1);

// 4. On anime la barre d'Aura (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_aura']")) {
    gsap.to("[data-acc-text='barre_aura']", {
        scaleX: scaleAura, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}

// 5. On anime la barre de Rizz (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_rizz']")) {
    gsap.to("[data-acc-text='barre_rizz']", {
        scaleX: scaleRizz, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}
}

window.Script110 = function()
{
  // 1. On connecte le code à ton module Storyline
var player = GetPlayer();

// 2. On récupère les valeurs de tes variables numériques
var currentAura = player.GetVar("aura");
var currentRizz = player.GetVar("rizz");

// 3. On calcule l'échelle et on SÉCURISE pour ne pas déborder (Maximum = 1)
// Pour l'Aura, le max reste 100
var scaleAura = Math.min(currentAura / 100, 1);

// Pour le Rizz, le max est maintenant de 300 !
var scaleRizz = Math.min(currentRizz / 300, 1);

// 4. On anime la barre d'Aura (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_aura']")) {
    gsap.to("[data-acc-text='barre_aura']", {
        scaleX: scaleAura, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}

// 5. On anime la barre de Rizz (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_rizz']")) {
    gsap.to("[data-acc-text='barre_rizz']", {
        scaleX: scaleRizz, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}
}

window.Script111 = function()
{
  // 1. On connecte le code à ton module Storyline
var player = GetPlayer();

// 2. On récupère les valeurs de tes variables numériques
var currentAura = player.GetVar("aura");
var currentRizz = player.GetVar("rizz");

// 3. On calcule l'échelle et on SÉCURISE pour ne pas déborder (Maximum = 1)
// Pour l'Aura, le max reste 100
var scaleAura = Math.min(currentAura / 100, 1);

// Pour le Rizz, le max est maintenant de 300 !
var scaleRizz = Math.min(currentRizz / 300, 1);

// 4. On anime la barre d'Aura (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_aura']")) {
    gsap.to("[data-acc-text='barre_aura']", {
        scaleX: scaleAura, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}

// 5. On anime la barre de Rizz (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_rizz']")) {
    gsap.to("[data-acc-text='barre_rizz']", {
        scaleX: scaleRizz, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}
}

window.Script112 = function()
{
  // 1. On connecte le code à ton module Storyline
var player = GetPlayer();

// 2. On récupère les valeurs de tes variables numériques
var currentAura = player.GetVar("aura");
var currentRizz = player.GetVar("rizz");

// 3. On calcule l'échelle et on SÉCURISE pour ne pas déborder (Maximum = 1)
// Pour l'Aura, le max reste 100
var scaleAura = Math.min(currentAura / 100, 1);

// Pour le Rizz, le max est maintenant de 300 !
var scaleRizz = Math.min(currentRizz / 300, 1);

// 4. On anime la barre d'Aura (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_aura']")) {
    gsap.to("[data-acc-text='barre_aura']", {
        scaleX: scaleAura, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}

// 5. On anime la barre de Rizz (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_rizz']")) {
    gsap.to("[data-acc-text='barre_rizz']", {
        scaleX: scaleRizz, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}
}

window.Script113 = function()
{
  // 1. On connecte le code à ton module Storyline
var player = GetPlayer();

// 2. On récupère les valeurs de tes variables numériques
var currentAura = player.GetVar("aura");
var currentRizz = player.GetVar("rizz");

// 3. On calcule l'échelle et on SÉCURISE pour ne pas déborder (Maximum = 1)
// Pour l'Aura, le max reste 100
var scaleAura = Math.min(currentAura / 100, 1);

// Pour le Rizz, le max est maintenant de 300 !
var scaleRizz = Math.min(currentRizz / 300, 1);

// 4. On anime la barre d'Aura (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_aura']")) {
    gsap.to("[data-acc-text='barre_aura']", {
        scaleX: scaleAura, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}

// 5. On anime la barre de Rizz (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_rizz']")) {
    gsap.to("[data-acc-text='barre_rizz']", {
        scaleX: scaleRizz, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}
}

window.Script114 = function()
{
  // 1. On connecte le code à ton module Storyline
var player = GetPlayer();

// 2. On récupère les valeurs de tes variables numériques
var currentAura = player.GetVar("aura");
var currentRizz = player.GetVar("rizz");

// 3. On calcule l'échelle et on SÉCURISE pour ne pas déborder (Maximum = 1)
// Pour l'Aura, le max reste 100
var scaleAura = Math.min(currentAura / 100, 1);

// Pour le Rizz, le max est maintenant de 300 !
var scaleRizz = Math.min(currentRizz / 300, 1);

// 4. On anime la barre d'Aura (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_aura']")) {
    gsap.to("[data-acc-text='barre_aura']", {
        scaleX: scaleAura, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}

// 5. On anime la barre de Rizz (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_rizz']")) {
    gsap.to("[data-acc-text='barre_rizz']", {
        scaleX: scaleRizz, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}
}

window.Script115 = function()
{
  // 1. On connecte le code à ton module Storyline
var player = GetPlayer();

// 2. On récupère les valeurs de tes variables numériques
var currentAura = player.GetVar("aura");
var currentRizz = player.GetVar("rizz");

// 3. On calcule l'échelle et on SÉCURISE pour ne pas déborder (Maximum = 1)
// Pour l'Aura, le max reste 100
var scaleAura = Math.min(currentAura / 100, 1);

// Pour le Rizz, le max est maintenant de 300 !
var scaleRizz = Math.min(currentRizz / 300, 1);

// 4. On anime la barre d'Aura (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_aura']")) {
    gsap.to("[data-acc-text='barre_aura']", {
        scaleX: scaleAura, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}

// 5. On anime la barre de Rizz (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_rizz']")) {
    gsap.to("[data-acc-text='barre_rizz']", {
        scaleX: scaleRizz, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}
}

window.Script116 = function()
{
  // 1. On connecte le code à ton module Storyline
var player = GetPlayer();

// 2. On récupère les valeurs de tes variables numériques
var currentAura = player.GetVar("aura");
var currentRizz = player.GetVar("rizz");

// 3. On calcule l'échelle et on SÉCURISE pour ne pas déborder (Maximum = 1)
// Pour l'Aura, le max reste 100
var scaleAura = Math.min(currentAura / 100, 1);

// Pour le Rizz, le max est maintenant de 300 !
var scaleRizz = Math.min(currentRizz / 300, 1);

// 4. On anime la barre d'Aura (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_aura']")) {
    gsap.to("[data-acc-text='barre_aura']", {
        scaleX: scaleAura, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}

// 5. On anime la barre de Rizz (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_rizz']")) {
    gsap.to("[data-acc-text='barre_rizz']", {
        scaleX: scaleRizz, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}
}

window.Script117 = function()
{
  // 1. On connecte le code à ton module Storyline
var player = GetPlayer();

// 2. On récupère les valeurs de tes variables numériques
var currentAura = player.GetVar("aura");
var currentRizz = player.GetVar("rizz");

// 3. On calcule l'échelle et on SÉCURISE pour ne pas déborder (Maximum = 1)
// Pour l'Aura, le max reste 100
var scaleAura = Math.min(currentAura / 100, 1);

// Pour le Rizz, le max est maintenant de 300 !
var scaleRizz = Math.min(currentRizz / 300, 1);

// 4. On anime la barre d'Aura (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_aura']")) {
    gsap.to("[data-acc-text='barre_aura']", {
        scaleX: scaleAura, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}

// 5. On anime la barre de Rizz (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_rizz']")) {
    gsap.to("[data-acc-text='barre_rizz']", {
        scaleX: scaleRizz, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}
}

window.Script118 = function()
{
  // 1. On connecte le code à ton module Storyline
var player = GetPlayer();

// 2. On récupère les valeurs de tes variables numériques
var currentAura = player.GetVar("aura");
var currentRizz = player.GetVar("rizz");

// 3. On calcule l'échelle et on SÉCURISE pour ne pas déborder (Maximum = 1)
// Pour l'Aura, le max reste 100
var scaleAura = Math.min(currentAura / 100, 1);

// Pour le Rizz, le max est maintenant de 300 !
var scaleRizz = Math.min(currentRizz / 300, 1);

// 4. On anime la barre d'Aura (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_aura']")) {
    gsap.to("[data-acc-text='barre_aura']", {
        scaleX: scaleAura, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}

// 5. On anime la barre de Rizz (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_rizz']")) {
    gsap.to("[data-acc-text='barre_rizz']", {
        scaleX: scaleRizz, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}
}

window.Script119 = function()
{
  // 1. On connecte le code à ton module Storyline
var player = GetPlayer();

// 2. On récupère les valeurs de tes variables numériques
var currentAura = player.GetVar("aura");
var currentRizz = player.GetVar("rizz");

// 3. On calcule l'échelle et on SÉCURISE pour ne pas déborder (Maximum = 1)
// Pour l'Aura, le max reste 100
var scaleAura = Math.min(currentAura / 100, 1);

// Pour le Rizz, le max est maintenant de 300 !
var scaleRizz = Math.min(currentRizz / 300, 1);

// 4. On anime la barre d'Aura (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_aura']")) {
    gsap.to("[data-acc-text='barre_aura']", {
        scaleX: scaleAura, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}

// 5. On anime la barre de Rizz (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_rizz']")) {
    gsap.to("[data-acc-text='barre_rizz']", {
        scaleX: scaleRizz, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}
}

window.Script120 = function()
{
  // 1. On connecte le code à ton module Storyline
var player = GetPlayer();

// 2. On récupère les valeurs de tes variables numériques
var currentAura = player.GetVar("aura");
var currentRizz = player.GetVar("rizz");

// 3. On calcule l'échelle et on SÉCURISE pour ne pas déborder (Maximum = 1)
// Pour l'Aura, le max reste 100
var scaleAura = Math.min(currentAura / 100, 1);

// Pour le Rizz, le max est maintenant de 300 !
var scaleRizz = Math.min(currentRizz / 300, 1);

// 4. On anime la barre d'Aura (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_aura']")) {
    gsap.to("[data-acc-text='barre_aura']", {
        scaleX: scaleAura, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}

// 5. On anime la barre de Rizz (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_rizz']")) {
    gsap.to("[data-acc-text='barre_rizz']", {
        scaleX: scaleRizz, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}
}

window.Script121 = function()
{
  // 1. On connecte le code à ton module Storyline
var player = GetPlayer();

// 2. On récupère les valeurs de tes variables numériques
var currentAura = player.GetVar("aura");
var currentRizz = player.GetVar("rizz");

// 3. On calcule l'échelle et on SÉCURISE pour ne pas déborder (Maximum = 1)
// Pour l'Aura, le max reste 100
var scaleAura = Math.min(currentAura / 100, 1);

// Pour le Rizz, le max est maintenant de 300 !
var scaleRizz = Math.min(currentRizz / 300, 1);

// 4. On anime la barre d'Aura (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_aura']")) {
    gsap.to("[data-acc-text='barre_aura']", {
        scaleX: scaleAura, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}

// 5. On anime la barre de Rizz (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_rizz']")) {
    gsap.to("[data-acc-text='barre_rizz']", {
        scaleX: scaleRizz, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}
}

window.Script122 = function()
{
  // 1. On connecte le code à ton module Storyline
var player = GetPlayer();

// 2. On récupère les valeurs de tes variables numériques
var currentAura = player.GetVar("aura");
var currentRizz = player.GetVar("rizz");

// 3. On calcule l'échelle et on SÉCURISE pour ne pas déborder (Maximum = 1)
// Pour l'Aura, le max reste 100
var scaleAura = Math.min(currentAura / 100, 1);

// Pour le Rizz, le max est maintenant de 300 !
var scaleRizz = Math.min(currentRizz / 300, 1);

// 4. On anime la barre d'Aura (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_aura']")) {
    gsap.to("[data-acc-text='barre_aura']", {
        scaleX: scaleAura, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}

// 5. On anime la barre de Rizz (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_rizz']")) {
    gsap.to("[data-acc-text='barre_rizz']", {
        scaleX: scaleRizz, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}
}

window.Script123 = function()
{
  // 1. On connecte le code à ton module Storyline
var player = GetPlayer();

// 2. On récupère les valeurs de tes variables numériques
var currentAura = player.GetVar("aura");
var currentRizz = player.GetVar("rizz");

// 3. On calcule l'échelle et on SÉCURISE pour ne pas déborder (Maximum = 1)
// Pour l'Aura, le max reste 100
var scaleAura = Math.min(currentAura / 100, 1);

// Pour le Rizz, le max est maintenant de 300 !
var scaleRizz = Math.min(currentRizz / 300, 1);

// 4. On anime la barre d'Aura (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_aura']")) {
    gsap.to("[data-acc-text='barre_aura']", {
        scaleX: scaleAura, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}

// 5. On anime la barre de Rizz (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_rizz']")) {
    gsap.to("[data-acc-text='barre_rizz']", {
        scaleX: scaleRizz, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}
}

window.Script124 = function()
{
  // 1. On connecte le code à ton module Storyline
var player = GetPlayer();

// 2. On récupère les valeurs de tes variables numériques
var currentAura = player.GetVar("aura");
var currentRizz = player.GetVar("rizz");

// 3. On calcule l'échelle et on SÉCURISE pour ne pas déborder (Maximum = 1)
// Pour l'Aura, le max reste 100
var scaleAura = Math.min(currentAura / 100, 1);

// Pour le Rizz, le max est maintenant de 300 !
var scaleRizz = Math.min(currentRizz / 300, 1);

// 4. On anime la barre d'Aura (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_aura']")) {
    gsap.to("[data-acc-text='barre_aura']", {
        scaleX: scaleAura, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}

// 5. On anime la barre de Rizz (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_rizz']")) {
    gsap.to("[data-acc-text='barre_rizz']", {
        scaleX: scaleRizz, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}
}

window.Script125 = function()
{
  // 1. On connecte le code à ton module Storyline
var player = GetPlayer();

// 2. On récupère les valeurs de tes variables numériques
var currentAura = player.GetVar("aura");
var currentRizz = player.GetVar("rizz");

// 3. On calcule l'échelle et on SÉCURISE pour ne pas déborder (Maximum = 1)
// Pour l'Aura, le max reste 100
var scaleAura = Math.min(currentAura / 100, 1);

// Pour le Rizz, le max est maintenant de 300 !
var scaleRizz = Math.min(currentRizz / 300, 1);

// 4. On anime la barre d'Aura (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_aura']")) {
    gsap.to("[data-acc-text='barre_aura']", {
        scaleX: scaleAura, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}

// 5. On anime la barre de Rizz (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_rizz']")) {
    gsap.to("[data-acc-text='barre_rizz']", {
        scaleX: scaleRizz, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}
}

window.Script126 = function()
{
  // 1. On connecte le code à ton module Storyline
var player = GetPlayer();

// 2. On récupère les valeurs de tes variables numériques
var currentAura = player.GetVar("aura");
var currentRizz = player.GetVar("rizz");

// 3. On calcule l'échelle et on SÉCURISE pour ne pas déborder (Maximum = 1)
// Pour l'Aura, le max reste 100
var scaleAura = Math.min(currentAura / 100, 1);

// Pour le Rizz, le max est maintenant de 300 !
var scaleRizz = Math.min(currentRizz / 300, 1);

// 4. On anime la barre d'Aura (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_aura']")) {
    gsap.to("[data-acc-text='barre_aura']", {
        scaleX: scaleAura, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}

// 5. On anime la barre de Rizz (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_rizz']")) {
    gsap.to("[data-acc-text='barre_rizz']", {
        scaleX: scaleRizz, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}
}

window.Script127 = function()
{
  // 1. On connecte le code à ton module Storyline
var player = GetPlayer();

// 2. On récupère les valeurs de tes variables numériques
var currentAura = player.GetVar("aura");
var currentRizz = player.GetVar("rizz");

// 3. On calcule l'échelle et on SÉCURISE pour ne pas déborder (Maximum = 1)
// Pour l'Aura, le max reste 100
var scaleAura = Math.min(currentAura / 100, 1);

// Pour le Rizz, le max est maintenant de 300 !
var scaleRizz = Math.min(currentRizz / 300, 1);

// 4. On anime la barre d'Aura (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_aura']")) {
    gsap.to("[data-acc-text='barre_aura']", {
        scaleX: scaleAura, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}

// 5. On anime la barre de Rizz (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_rizz']")) {
    gsap.to("[data-acc-text='barre_rizz']", {
        scaleX: scaleRizz, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}
}

window.Script128 = function()
{
  (function () {
  const LIVE_MATCH = "storyline-bridge-live/";
  const player = GetPlayer();

  function getIframe() {
    return Array.from(document.querySelectorAll("iframe"))
      .find(f => (f.src || "").includes(LIVE_MATCH));
  }

  // 1) Patch iframe allow micro (ton code, gardé)
  function patchIframeAllow() {
    const iframe = getIframe();
    if (!iframe) return;
    if (iframe.allow && iframe.allow.includes("microphone")) return;

    const clone = iframe.cloneNode();
    clone.allow = "microphone; autoplay";
    iframe.parentNode.replaceChild(clone, iframe);
    console.log("LIVE iframe patched");
  }

  const obs = new MutationObserver(patchIframeAllow);
  obs.observe(document.body, { childList: true, subtree: true });
  patchIframeAllow();

  // 2) Bind keyboard PTT (une seule fois)
  if (window.__LIVE_PTT_BOUND) return;
  window.__LIVE_PTT_BOUND = true;

  let spaceDown = false;

  window.addEventListener("keydown", (e) => {
    if (e.code !== "Space") return;
    if (spaceDown) return;          // anti auto-repeat
    spaceDown = true;
    e.preventDefault();

    const iframe = getIframe();
    if (!iframe) return;
    iframe.contentWindow.postMessage({ type: "LIVE_MIC_ON" }, "*");
    console.log("MIC ON (space)");
  });

  window.addEventListener("keyup", (e) => {
    if (e.code !== "Space") return;
    if (!spaceDown) return;
    spaceDown = false;
    e.preventDefault();

    const iframe = getIframe();
    if (!iframe) return;
    iframe.contentWindow.postMessage({ type: "LIVE_MIC_OFF" }, "*");
    console.log("MIC OFF (space)");
  });

})();

(function () {

  const player = GetPlayer();

  if (window.__LIVE_MSG_BOUND) return;
  window.__LIVE_MSG_BOUND = true;

  console.log("Storyline listener READY");

  window.addEventListener("message", function(event) {

    const data = event.data;

    if (!data || !data.type) return;

    console.log("Storyline received:", data);
    console.log("Storyline received JSON:", JSON.stringify(event.data));

    const { type, payload } = data;

    // ============================
    // TEXTE AGENT
    // ============================

    if (type === "RT_ASSISTANT_TEXT") {

      const text = payload?.text || "";

      player.SetVar("sarah_agent_text", text);

      return;
    }


    // ============================
    // FIN ACTIVITE
    // ============================

    if (type === "RT_ACTIVITY_DONE") {

      console.log("RT_ACTIVITY_DONE payload:", payload);

      // rating
      player.SetVar("sarah_activity_rating", payload?.rating ?? 0);

      // success
      player.SetVar("activity_success", payload?.success ?? false);

      // feedback
      player.SetVar("activity_feedback", payload?.feedback ?? "");

      // aura
      if (payload?.auraDelta !== undefined) {

        const current = Number(player.GetVar("aura") || 0);

        player.SetVar("aura", current + Number(payload.auraDelta));

      }

      // rizz
      if (payload?.rizzDelta !== undefined) {

        const current = Number(player.GetVar("rizz") || 0);

        player.SetVar("rizz", current + Number(payload.rizzDelta));

      }

      // unlock
      player.SetVar("activite_2_disponible", payload?.unlockNext ?? true);


      // genius phone

      if (payload?.gp?.slot && payload?.gp?.text) {

        player.SetVar(`message_gp_${payload.gp.slot}`, payload.gp.text);

        const notif = Number(player.GetVar("notification_GP") || 0);

        player.SetVar("notification_GP", notif + 1);

      }


      // reset option index

      player.SetVar("option_index", 0);

      return;

    }



    // ============================
    // EMOTION
    // ============================

    if (type === "RT_EMOTION") {

      player.SetVar("agent_emotion", payload?.emotion || "neutral");

      return;

    }


  });

})();
}

window.Script129 = function()
{
  const iframe =
  Array.from(document.querySelectorAll("iframe"))
  .find(f => f.src.includes("storyline-bridge-live/"));

if (!iframe || !iframe.contentWindow) return;


// connexion UNE SEULE FOIS
if (!window.__LIVE_CONNECTED) {

  iframe.contentWindow.postMessage({
    type: "LIVE_CONNECT"
  }, "*");

  window.__LIVE_CONNECTED = true;

  console.log("LIVE_CONNECT sent (first SPACE)");
}


// ton PTT normal — ON NE CHANGE RIEN
iframe.contentWindow.postMessage({
  type: "LIVE_PTT_PING"
}, "*");

console.log("LIVE_PTT_PING");
}

window.Script130 = function()
{
  (function () {

  const iframe =
    Array.from(document.querySelectorAll("iframe"))
    .find(f => (f.src || "").includes("storyline-bridge-live/"));

  if (!iframe || !iframe.contentWindow) return;

  iframe.contentWindow.postMessage({
    type: "LIVE_DISCONNECT"
  }, "*");
  
  window.__LIVE_CONNECTED = false;
  console.log("LIVE_DISCONNECT sent");

})();
}

window.Script131 = function()
{
  // 1. On connecte le code à ton module Storyline
var player = GetPlayer();

// 2. On récupère les valeurs de tes variables numériques
var currentAura = player.GetVar("aura");
var currentRizz = player.GetVar("rizz");

// 3. On calcule l'échelle et on SÉCURISE pour ne pas déborder (Maximum = 1)
// Pour l'Aura, le max reste 100
var scaleAura = Math.min(currentAura / 100, 1);

// Pour le Rizz, le max est maintenant de 300 !
var scaleRizz = Math.min(currentRizz / 300, 1);

// 4. On anime la barre d'Aura (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_aura']")) {
    gsap.to("[data-acc-text='barre_aura']", {
        scaleX: scaleAura, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}

// 5. On anime la barre de Rizz (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_rizz']")) {
    gsap.to("[data-acc-text='barre_rizz']", {
        scaleX: scaleRizz, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}
}

window.Script132 = function()
{
  // 1. On connecte le code à ton module Storyline
var player = GetPlayer();

// 2. On récupère les valeurs de tes variables numériques
var currentAura = player.GetVar("aura");
var currentRizz = player.GetVar("rizz");

// 3. On calcule l'échelle et on SÉCURISE pour ne pas déborder (Maximum = 1)
// Pour l'Aura, le max reste 100
var scaleAura = Math.min(currentAura / 100, 1);

// Pour le Rizz, le max est maintenant de 300 !
var scaleRizz = Math.min(currentRizz / 300, 1);

// 4. On anime la barre d'Aura (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_aura']")) {
    gsap.to("[data-acc-text='barre_aura']", {
        scaleX: scaleAura, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}

// 5. On anime la barre de Rizz (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_rizz']")) {
    gsap.to("[data-acc-text='barre_rizz']", {
        scaleX: scaleRizz, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}
}

window.Script133 = function()
{
  // 1. On connecte le code à ton module Storyline
var player = GetPlayer();

// 2. On récupère les valeurs de tes variables numériques
var currentAura = player.GetVar("aura");
var currentRizz = player.GetVar("rizz");

// 3. On calcule l'échelle et on SÉCURISE pour ne pas déborder (Maximum = 1)
// Pour l'Aura, le max reste 100
var scaleAura = Math.min(currentAura / 100, 1);

// Pour le Rizz, le max est maintenant de 300 !
var scaleRizz = Math.min(currentRizz / 300, 1);

// 4. On anime la barre d'Aura (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_aura']")) {
    gsap.to("[data-acc-text='barre_aura']", {
        scaleX: scaleAura, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}

// 5. On anime la barre de Rizz (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_rizz']")) {
    gsap.to("[data-acc-text='barre_rizz']", {
        scaleX: scaleRizz, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}
}

window.Script134 = function()
{
  // 1. On connecte le code à ton module Storyline
var player = GetPlayer();

// 2. On récupère les valeurs de tes variables numériques
var currentAura = player.GetVar("aura");
var currentRizz = player.GetVar("rizz");

// 3. On calcule l'échelle et on SÉCURISE pour ne pas déborder (Maximum = 1)
// Pour l'Aura, le max reste 100
var scaleAura = Math.min(currentAura / 100, 1);

// Pour le Rizz, le max est maintenant de 300 !
var scaleRizz = Math.min(currentRizz / 300, 1);

// 4. On anime la barre d'Aura (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_aura']")) {
    gsap.to("[data-acc-text='barre_aura']", {
        scaleX: scaleAura, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}

// 5. On anime la barre de Rizz (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_rizz']")) {
    gsap.to("[data-acc-text='barre_rizz']", {
        scaleX: scaleRizz, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}
}

window.Script135 = function()
{
  // 1. On connecte le code à ton module Storyline
var player = GetPlayer();

// 2. On récupère les valeurs de tes variables numériques
var currentAura = player.GetVar("aura");
var currentRizz = player.GetVar("rizz");

// 3. On calcule l'échelle et on SÉCURISE pour ne pas déborder (Maximum = 1)
// Pour l'Aura, le max reste 100
var scaleAura = Math.min(currentAura / 100, 1);

// Pour le Rizz, le max est maintenant de 300 !
var scaleRizz = Math.min(currentRizz / 300, 1);

// 4. On anime la barre d'Aura (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_aura']")) {
    gsap.to("[data-acc-text='barre_aura']", {
        scaleX: scaleAura, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}

// 5. On anime la barre de Rizz (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_rizz']")) {
    gsap.to("[data-acc-text='barre_rizz']", {
        scaleX: scaleRizz, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}
}

window.Script136 = function()
{
  // 1. On connecte le code à ton module Storyline
var player = GetPlayer();

// 2. On récupère les valeurs de tes variables numériques
var currentAura = player.GetVar("aura");
var currentRizz = player.GetVar("rizz");

// 3. On calcule l'échelle et on SÉCURISE pour ne pas déborder (Maximum = 1)
// Pour l'Aura, le max reste 100
var scaleAura = Math.min(currentAura / 100, 1);

// Pour le Rizz, le max est maintenant de 300 !
var scaleRizz = Math.min(currentRizz / 300, 1);

// 4. On anime la barre d'Aura (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_aura']")) {
    gsap.to("[data-acc-text='barre_aura']", {
        scaleX: scaleAura, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}

// 5. On anime la barre de Rizz (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_rizz']")) {
    gsap.to("[data-acc-text='barre_rizz']", {
        scaleX: scaleRizz, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}
}

window.Script137 = function()
{
  // 1. On connecte le code à ton module Storyline
var player = GetPlayer();

// 2. On récupère les valeurs de tes variables numériques
var currentAura = player.GetVar("aura");
var currentRizz = player.GetVar("rizz");

// 3. On calcule l'échelle et on SÉCURISE pour ne pas déborder (Maximum = 1)
// Pour l'Aura, le max reste 100
var scaleAura = Math.min(currentAura / 100, 1);

// Pour le Rizz, le max est maintenant de 300 !
var scaleRizz = Math.min(currentRizz / 300, 1);

// 4. On anime la barre d'Aura (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_aura']")) {
    gsap.to("[data-acc-text='barre_aura']", {
        scaleX: scaleAura, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}

// 5. On anime la barre de Rizz (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_rizz']")) {
    gsap.to("[data-acc-text='barre_rizz']", {
        scaleX: scaleRizz, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}
}

window.Script138 = function()
{
  // 1. On connecte le code à ton module Storyline
var player = GetPlayer();

// 2. On récupère les valeurs de tes variables numériques
var currentAura = player.GetVar("aura");
var currentRizz = player.GetVar("rizz");

// 3. On calcule l'échelle et on SÉCURISE pour ne pas déborder (Maximum = 1)
// Pour l'Aura, le max reste 100
var scaleAura = Math.min(currentAura / 100, 1);

// Pour le Rizz, le max est maintenant de 300 !
var scaleRizz = Math.min(currentRizz / 300, 1);

// 4. On anime la barre d'Aura (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_aura']")) {
    gsap.to("[data-acc-text='barre_aura']", {
        scaleX: scaleAura, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}

// 5. On anime la barre de Rizz (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_rizz']")) {
    gsap.to("[data-acc-text='barre_rizz']", {
        scaleX: scaleRizz, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}
}

window.Script139 = function()
{
  // 1. On connecte le code à ton module Storyline
var player = GetPlayer();

// 2. On récupère les valeurs de tes variables numériques
var currentAura = player.GetVar("aura");
var currentRizz = player.GetVar("rizz");

// 3. On calcule l'échelle et on SÉCURISE pour ne pas déborder (Maximum = 1)
// Pour l'Aura, le max reste 100
var scaleAura = Math.min(currentAura / 100, 1);

// Pour le Rizz, le max est maintenant de 300 !
var scaleRizz = Math.min(currentRizz / 300, 1);

// 4. On anime la barre d'Aura (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_aura']")) {
    gsap.to("[data-acc-text='barre_aura']", {
        scaleX: scaleAura, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}

// 5. On anime la barre de Rizz (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_rizz']")) {
    gsap.to("[data-acc-text='barre_rizz']", {
        scaleX: scaleRizz, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}
}

window.Script140 = function()
{
  // 1. On connecte le code à ton module Storyline
var player = GetPlayer();

// 2. On récupère les valeurs de tes variables numériques
var currentAura = player.GetVar("aura");
var currentRizz = player.GetVar("rizz");

// 3. On calcule l'échelle et on SÉCURISE pour ne pas déborder (Maximum = 1)
// Pour l'Aura, le max reste 100
var scaleAura = Math.min(currentAura / 100, 1);

// Pour le Rizz, le max est maintenant de 300 !
var scaleRizz = Math.min(currentRizz / 300, 1);

// 4. On anime la barre d'Aura (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_aura']")) {
    gsap.to("[data-acc-text='barre_aura']", {
        scaleX: scaleAura, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}

// 5. On anime la barre de Rizz (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_rizz']")) {
    gsap.to("[data-acc-text='barre_rizz']", {
        scaleX: scaleRizz, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}
}

window.Script141 = function()
{
  // 1. On connecte le code à ton module Storyline
var player = GetPlayer();

// 2. On récupère les valeurs de tes variables numériques
var currentAura = player.GetVar("aura");
var currentRizz = player.GetVar("rizz");

// 3. On calcule l'échelle et on SÉCURISE pour ne pas déborder (Maximum = 1)
// Pour l'Aura, le max reste 100
var scaleAura = Math.min(currentAura / 100, 1);

// Pour le Rizz, le max est maintenant de 300 !
var scaleRizz = Math.min(currentRizz / 300, 1);

// 4. On anime la barre d'Aura (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_aura']")) {
    gsap.to("[data-acc-text='barre_aura']", {
        scaleX: scaleAura, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}

// 5. On anime la barre de Rizz (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_rizz']")) {
    gsap.to("[data-acc-text='barre_rizz']", {
        scaleX: scaleRizz, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}
}

window.Script142 = function()
{
  // 1. On connecte le code à ton module Storyline
var player = GetPlayer();

// 2. On récupère les valeurs de tes variables numériques
var currentAura = player.GetVar("aura");
var currentRizz = player.GetVar("rizz");

// 3. On calcule l'échelle et on SÉCURISE pour ne pas déborder (Maximum = 1)
// Pour l'Aura, le max reste 100
var scaleAura = Math.min(currentAura / 100, 1);

// Pour le Rizz, le max est maintenant de 300 !
var scaleRizz = Math.min(currentRizz / 300, 1);

// 4. On anime la barre d'Aura (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_aura']")) {
    gsap.to("[data-acc-text='barre_aura']", {
        scaleX: scaleAura, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}

// 5. On anime la barre de Rizz (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_rizz']")) {
    gsap.to("[data-acc-text='barre_rizz']", {
        scaleX: scaleRizz, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}
}

window.Script143 = function()
{
  // 1. On connecte le code à ton module Storyline
var player = GetPlayer();

// 2. On récupère les valeurs de tes variables numériques
var currentAura = player.GetVar("aura");
var currentRizz = player.GetVar("rizz");

// 3. On calcule l'échelle et on SÉCURISE pour ne pas déborder (Maximum = 1)
// Pour l'Aura, le max reste 100
var scaleAura = Math.min(currentAura / 100, 1);

// Pour le Rizz, le max est maintenant de 300 !
var scaleRizz = Math.min(currentRizz / 300, 1);

// 4. On anime la barre d'Aura (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_aura']")) {
    gsap.to("[data-acc-text='barre_aura']", {
        scaleX: scaleAura, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}

// 5. On anime la barre de Rizz (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_rizz']")) {
    gsap.to("[data-acc-text='barre_rizz']", {
        scaleX: scaleRizz, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}
}

window.Script144 = function()
{
  // 1. On connecte le code à ton module Storyline
var player = GetPlayer();

// 2. On récupère les valeurs de tes variables numériques
var currentAura = player.GetVar("aura");
var currentRizz = player.GetVar("rizz");

// 3. On calcule l'échelle et on SÉCURISE pour ne pas déborder (Maximum = 1)
// Pour l'Aura, le max reste 100
var scaleAura = Math.min(currentAura / 100, 1);

// Pour le Rizz, le max est maintenant de 300 !
var scaleRizz = Math.min(currentRizz / 300, 1);

// 4. On anime la barre d'Aura (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_aura']")) {
    gsap.to("[data-acc-text='barre_aura']", {
        scaleX: scaleAura, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}

// 5. On anime la barre de Rizz (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_rizz']")) {
    gsap.to("[data-acc-text='barre_rizz']", {
        scaleX: scaleRizz, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}
}

window.Script145 = function()
{
  // 1. On connecte le code à ton module Storyline
var player = GetPlayer();

// 2. On récupère les valeurs de tes variables numériques
var currentAura = player.GetVar("aura");
var currentRizz = player.GetVar("rizz");

// 3. On calcule l'échelle et on SÉCURISE pour ne pas déborder (Maximum = 1)
// Pour l'Aura, le max reste 100
var scaleAura = Math.min(currentAura / 100, 1);

// Pour le Rizz, le max est maintenant de 300 !
var scaleRizz = Math.min(currentRizz / 300, 1);

// 4. On anime la barre d'Aura (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_aura']")) {
    gsap.to("[data-acc-text='barre_aura']", {
        scaleX: scaleAura, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}

// 5. On anime la barre de Rizz (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_rizz']")) {
    gsap.to("[data-acc-text='barre_rizz']", {
        scaleX: scaleRizz, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}
}

window.Script146 = function()
{
  // 1. On connecte le code à ton module Storyline
var player = GetPlayer();

// 2. On récupère les valeurs de tes variables numériques
var currentAura = player.GetVar("aura");
var currentRizz = player.GetVar("rizz");

// 3. On calcule l'échelle et on SÉCURISE pour ne pas déborder (Maximum = 1)
// Pour l'Aura, le max reste 100
var scaleAura = Math.min(currentAura / 100, 1);

// Pour le Rizz, le max est maintenant de 300 !
var scaleRizz = Math.min(currentRizz / 300, 1);

// 4. On anime la barre d'Aura (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_aura']")) {
    gsap.to("[data-acc-text='barre_aura']", {
        scaleX: scaleAura, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}

// 5. On anime la barre de Rizz (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_rizz']")) {
    gsap.to("[data-acc-text='barre_rizz']", {
        scaleX: scaleRizz, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}
}

window.Script147 = function()
{
  // 1. On connecte le code à ton module Storyline
var player = GetPlayer();

// 2. On récupère les valeurs de tes variables numériques
var currentAura = player.GetVar("aura");
var currentRizz = player.GetVar("rizz");

// 3. On calcule l'échelle et on SÉCURISE pour ne pas déborder (Maximum = 1)
// Pour l'Aura, le max reste 100
var scaleAura = Math.min(currentAura / 100, 1);

// Pour le Rizz, le max est maintenant de 300 !
var scaleRizz = Math.min(currentRizz / 300, 1);

// 4. On anime la barre d'Aura (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_aura']")) {
    gsap.to("[data-acc-text='barre_aura']", {
        scaleX: scaleAura, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}

// 5. On anime la barre de Rizz (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_rizz']")) {
    gsap.to("[data-acc-text='barre_rizz']", {
        scaleX: scaleRizz, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}
}

window.Script148 = function()
{
  // 1. On connecte le code à ton module Storyline
var player = GetPlayer();

// 2. On récupère les valeurs de tes variables numériques
var currentAura = player.GetVar("aura");
var currentRizz = player.GetVar("rizz");

// 3. On calcule l'échelle et on SÉCURISE pour ne pas déborder (Maximum = 1)
// Pour l'Aura, le max reste 100
var scaleAura = Math.min(currentAura / 100, 1);

// Pour le Rizz, le max est maintenant de 300 !
var scaleRizz = Math.min(currentRizz / 300, 1);

// 4. On anime la barre d'Aura (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_aura']")) {
    gsap.to("[data-acc-text='barre_aura']", {
        scaleX: scaleAura, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}

// 5. On anime la barre de Rizz (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_rizz']")) {
    gsap.to("[data-acc-text='barre_rizz']", {
        scaleX: scaleRizz, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}
}

window.Script149 = function()
{
  // 1. On connecte le code à ton module Storyline
var player = GetPlayer();

// 2. On récupère les valeurs de tes variables numériques
var currentAura = player.GetVar("aura");
var currentRizz = player.GetVar("rizz");

// 3. On calcule l'échelle et on SÉCURISE pour ne pas déborder (Maximum = 1)
// Pour l'Aura, le max reste 100
var scaleAura = Math.min(currentAura / 100, 1);

// Pour le Rizz, le max est maintenant de 300 !
var scaleRizz = Math.min(currentRizz / 300, 1);

// 4. On anime la barre d'Aura (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_aura']")) {
    gsap.to("[data-acc-text='barre_aura']", {
        scaleX: scaleAura, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}

// 5. On anime la barre de Rizz (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_rizz']")) {
    gsap.to("[data-acc-text='barre_rizz']", {
        scaleX: scaleRizz, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}
}

window.Script150 = function()
{
  // 1. On connecte le code à ton module Storyline
var player = GetPlayer();

// 2. On récupère les valeurs de tes variables numériques
var currentAura = player.GetVar("aura");
var currentRizz = player.GetVar("rizz");

// 3. On calcule l'échelle et on SÉCURISE pour ne pas déborder (Maximum = 1)
// Pour l'Aura, le max reste 100
var scaleAura = Math.min(currentAura / 100, 1);

// Pour le Rizz, le max est maintenant de 300 !
var scaleRizz = Math.min(currentRizz / 300, 1);

// 4. On anime la barre d'Aura (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_aura']")) {
    gsap.to("[data-acc-text='barre_aura']", {
        scaleX: scaleAura, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}

// 5. On anime la barre de Rizz (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_rizz']")) {
    gsap.to("[data-acc-text='barre_rizz']", {
        scaleX: scaleRizz, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}
}

window.Script151 = function()
{
  // 1. On connecte le code à ton module Storyline
var player = GetPlayer();

// 2. On récupère les valeurs de tes variables numériques
var currentAura = player.GetVar("aura");
var currentRizz = player.GetVar("rizz");

// 3. On calcule l'échelle et on SÉCURISE pour ne pas déborder (Maximum = 1)
// Pour l'Aura, le max reste 100
var scaleAura = Math.min(currentAura / 100, 1);

// Pour le Rizz, le max est maintenant de 300 !
var scaleRizz = Math.min(currentRizz / 300, 1);

// 4. On anime la barre d'Aura (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_aura']")) {
    gsap.to("[data-acc-text='barre_aura']", {
        scaleX: scaleAura, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}

// 5. On anime la barre de Rizz (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_rizz']")) {
    gsap.to("[data-acc-text='barre_rizz']", {
        scaleX: scaleRizz, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}
}

window.Script152 = function()
{
  // 1. On connecte le code à ton module Storyline
var player = GetPlayer();

// 2. On récupère les valeurs de tes variables numériques
var currentAura = player.GetVar("aura");
var currentRizz = player.GetVar("rizz");

// 3. On calcule l'échelle et on SÉCURISE pour ne pas déborder (Maximum = 1)
// Pour l'Aura, le max reste 100
var scaleAura = Math.min(currentAura / 100, 1);

// Pour le Rizz, le max est maintenant de 300 !
var scaleRizz = Math.min(currentRizz / 300, 1);

// 4. On anime la barre d'Aura (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_aura']")) {
    gsap.to("[data-acc-text='barre_aura']", {
        scaleX: scaleAura, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}

// 5. On anime la barre de Rizz (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_rizz']")) {
    gsap.to("[data-acc-text='barre_rizz']", {
        scaleX: scaleRizz, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}
}

window.Script153 = function()
{
  // 1. On connecte le code à ton module Storyline
var player = GetPlayer();

// 2. On récupère les valeurs de tes variables numériques
var currentAura = player.GetVar("aura");
var currentRizz = player.GetVar("rizz");

// 3. On calcule l'échelle et on SÉCURISE pour ne pas déborder (Maximum = 1)
// Pour l'Aura, le max reste 100
var scaleAura = Math.min(currentAura / 100, 1);

// Pour le Rizz, le max est maintenant de 300 !
var scaleRizz = Math.min(currentRizz / 300, 1);

// 4. On anime la barre d'Aura (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_aura']")) {
    gsap.to("[data-acc-text='barre_aura']", {
        scaleX: scaleAura, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}

// 5. On anime la barre de Rizz (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_rizz']")) {
    gsap.to("[data-acc-text='barre_rizz']", {
        scaleX: scaleRizz, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}
}

window.Script154 = function()
{
  // 1. On connecte le code à ton module Storyline
var player = GetPlayer();

// 2. On récupère les valeurs de tes variables numériques
var currentAura = player.GetVar("aura");
var currentRizz = player.GetVar("rizz");

// 3. On calcule l'échelle et on SÉCURISE pour ne pas déborder (Maximum = 1)
// Pour l'Aura, le max reste 100
var scaleAura = Math.min(currentAura / 100, 1);

// Pour le Rizz, le max est maintenant de 300 !
var scaleRizz = Math.min(currentRizz / 300, 1);

// 4. On anime la barre d'Aura (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_aura']")) {
    gsap.to("[data-acc-text='barre_aura']", {
        scaleX: scaleAura, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}

// 5. On anime la barre de Rizz (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_rizz']")) {
    gsap.to("[data-acc-text='barre_rizz']", {
        scaleX: scaleRizz, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}
}

window.Script155 = function()
{
  // 1. On connecte le code à ton module Storyline
var player = GetPlayer();

// 2. On récupère les valeurs de tes variables numériques
var currentAura = player.GetVar("aura");
var currentRizz = player.GetVar("rizz");

// 3. On calcule l'échelle et on SÉCURISE pour ne pas déborder (Maximum = 1)
// Pour l'Aura, le max reste 100
var scaleAura = Math.min(currentAura / 100, 1);

// Pour le Rizz, le max est maintenant de 300 !
var scaleRizz = Math.min(currentRizz / 300, 1);

// 4. On anime la barre d'Aura (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_aura']")) {
    gsap.to("[data-acc-text='barre_aura']", {
        scaleX: scaleAura, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}

// 5. On anime la barre de Rizz (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_rizz']")) {
    gsap.to("[data-acc-text='barre_rizz']", {
        scaleX: scaleRizz, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}
}

window.Script156 = function()
{
  // 1. On connecte le code à ton module Storyline
var player = GetPlayer();

// 2. On récupère les valeurs de tes variables numériques
var currentAura = player.GetVar("aura");
var currentRizz = player.GetVar("rizz");

// 3. On calcule l'échelle et on SÉCURISE pour ne pas déborder (Maximum = 1)
// Pour l'Aura, le max reste 100
var scaleAura = Math.min(currentAura / 100, 1);

// Pour le Rizz, le max est maintenant de 300 !
var scaleRizz = Math.min(currentRizz / 300, 1);

// 4. On anime la barre d'Aura (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_aura']")) {
    gsap.to("[data-acc-text='barre_aura']", {
        scaleX: scaleAura, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}

// 5. On anime la barre de Rizz (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_rizz']")) {
    gsap.to("[data-acc-text='barre_rizz']", {
        scaleX: scaleRizz, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}
}

window.Script157 = function()
{
  // 1. On connecte le code à ton module Storyline
var player = GetPlayer();

// 2. On récupère les valeurs de tes variables numériques
var currentAura = player.GetVar("aura");
var currentRizz = player.GetVar("rizz");

// 3. On calcule l'échelle et on SÉCURISE pour ne pas déborder (Maximum = 1)
// Pour l'Aura, le max reste 100
var scaleAura = Math.min(currentAura / 100, 1);

// Pour le Rizz, le max est maintenant de 300 !
var scaleRizz = Math.min(currentRizz / 300, 1);

// 4. On anime la barre d'Aura (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_aura']")) {
    gsap.to("[data-acc-text='barre_aura']", {
        scaleX: scaleAura, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}

// 5. On anime la barre de Rizz (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_rizz']")) {
    gsap.to("[data-acc-text='barre_rizz']", {
        scaleX: scaleRizz, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}
}

window.Script158 = function()
{
  // 1. On connecte le code à ton module Storyline
var player = GetPlayer();

// 2. On récupère les valeurs de tes variables numériques
var currentAura = player.GetVar("aura");
var currentRizz = player.GetVar("rizz");

// 3. On calcule l'échelle et on SÉCURISE pour ne pas déborder (Maximum = 1)
// Pour l'Aura, le max reste 100
var scaleAura = Math.min(currentAura / 100, 1);

// Pour le Rizz, le max est maintenant de 300 !
var scaleRizz = Math.min(currentRizz / 300, 1);

// 4. On anime la barre d'Aura (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_aura']")) {
    gsap.to("[data-acc-text='barre_aura']", {
        scaleX: scaleAura, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}

// 5. On anime la barre de Rizz (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_rizz']")) {
    gsap.to("[data-acc-text='barre_rizz']", {
        scaleX: scaleRizz, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}
}

window.Script159 = function()
{
  // 1. On connecte le code à ton module Storyline
var player = GetPlayer();

// 2. On récupère les valeurs de tes variables numériques
var currentAura = player.GetVar("aura");
var currentRizz = player.GetVar("rizz");

// 3. On calcule l'échelle et on SÉCURISE pour ne pas déborder (Maximum = 1)
// Pour l'Aura, le max reste 100
var scaleAura = Math.min(currentAura / 100, 1);

// Pour le Rizz, le max est maintenant de 300 !
var scaleRizz = Math.min(currentRizz / 300, 1);

// 4. On anime la barre d'Aura (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_aura']")) {
    gsap.to("[data-acc-text='barre_aura']", {
        scaleX: scaleAura, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}

// 5. On anime la barre de Rizz (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_rizz']")) {
    gsap.to("[data-acc-text='barre_rizz']", {
        scaleX: scaleRizz, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}
}

window.Script160 = function()
{
  // 1. On connecte le code à ton module Storyline
var player = GetPlayer();

// 2. On récupère les valeurs de tes variables numériques
var currentAura = player.GetVar("aura");
var currentRizz = player.GetVar("rizz");

// 3. On calcule l'échelle et on SÉCURISE pour ne pas déborder (Maximum = 1)
// Pour l'Aura, le max reste 100
var scaleAura = Math.min(currentAura / 100, 1);

// Pour le Rizz, le max est maintenant de 300 !
var scaleRizz = Math.min(currentRizz / 300, 1);

// 4. On anime la barre d'Aura (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_aura']")) {
    gsap.to("[data-acc-text='barre_aura']", {
        scaleX: scaleAura, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}

// 5. On anime la barre de Rizz (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_rizz']")) {
    gsap.to("[data-acc-text='barre_rizz']", {
        scaleX: scaleRizz, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}
}

window.Script161 = function()
{
  // 1. On connecte le code à ton module Storyline
var player = GetPlayer();

// 2. On récupère les valeurs de tes variables numériques
var currentAura = player.GetVar("aura");
var currentRizz = player.GetVar("rizz");

// 3. On calcule l'échelle et on SÉCURISE pour ne pas déborder (Maximum = 1)
// Pour l'Aura, le max reste 100
var scaleAura = Math.min(currentAura / 100, 1);

// Pour le Rizz, le max est maintenant de 300 !
var scaleRizz = Math.min(currentRizz / 300, 1);

// 4. On anime la barre d'Aura (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_aura']")) {
    gsap.to("[data-acc-text='barre_aura']", {
        scaleX: scaleAura, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}

// 5. On anime la barre de Rizz (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_rizz']")) {
    gsap.to("[data-acc-text='barre_rizz']", {
        scaleX: scaleRizz, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}
}

window.Script162 = function()
{
  // 1. On connecte le code à ton module Storyline
var player = GetPlayer();

// 2. On récupère les valeurs de tes variables numériques
var currentAura = player.GetVar("aura");
var currentRizz = player.GetVar("rizz");

// 3. On calcule l'échelle et on SÉCURISE pour ne pas déborder (Maximum = 1)
// Pour l'Aura, le max reste 100
var scaleAura = Math.min(currentAura / 100, 1);

// Pour le Rizz, le max est maintenant de 300 !
var scaleRizz = Math.min(currentRizz / 300, 1);

// 4. On anime la barre d'Aura (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_aura']")) {
    gsap.to("[data-acc-text='barre_aura']", {
        scaleX: scaleAura, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}

// 5. On anime la barre de Rizz (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_rizz']")) {
    gsap.to("[data-acc-text='barre_rizz']", {
        scaleX: scaleRizz, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}
}

window.Script163 = function()
{
  // 1. On connecte le code à ton module Storyline
var player = GetPlayer();

// 2. On récupère les valeurs de tes variables numériques
var currentAura = player.GetVar("aura");
var currentRizz = player.GetVar("rizz");

// 3. On calcule l'échelle et on SÉCURISE pour ne pas déborder (Maximum = 1)
// Pour l'Aura, le max reste 100
var scaleAura = Math.min(currentAura / 100, 1);

// Pour le Rizz, le max est maintenant de 300 !
var scaleRizz = Math.min(currentRizz / 300, 1);

// 4. On anime la barre d'Aura (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_aura']")) {
    gsap.to("[data-acc-text='barre_aura']", {
        scaleX: scaleAura, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}

// 5. On anime la barre de Rizz (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_rizz']")) {
    gsap.to("[data-acc-text='barre_rizz']", {
        scaleX: scaleRizz, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}
}

window.Script164 = function()
{
  // 1. On connecte le code à ton module Storyline
var player = GetPlayer();

// 2. On récupère les valeurs de tes variables numériques
var currentAura = player.GetVar("aura");
var currentRizz = player.GetVar("rizz");

// 3. On calcule l'échelle et on SÉCURISE pour ne pas déborder (Maximum = 1)
// Pour l'Aura, le max reste 100
var scaleAura = Math.min(currentAura / 100, 1);

// Pour le Rizz, le max est maintenant de 300 !
var scaleRizz = Math.min(currentRizz / 300, 1);

// 4. On anime la barre d'Aura (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_aura']")) {
    gsap.to("[data-acc-text='barre_aura']", {
        scaleX: scaleAura, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}

// 5. On anime la barre de Rizz (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_rizz']")) {
    gsap.to("[data-acc-text='barre_rizz']", {
        scaleX: scaleRizz, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}
}

window.Script165 = function()
{
  // 1. On connecte le code à ton module Storyline
var player = GetPlayer();

// 2. On récupère les valeurs de tes variables numériques
var currentAura = player.GetVar("aura");
var currentRizz = player.GetVar("rizz");

// 3. On calcule l'échelle et on SÉCURISE pour ne pas déborder (Maximum = 1)
// Pour l'Aura, le max reste 100
var scaleAura = Math.min(currentAura / 100, 1);

// Pour le Rizz, le max est maintenant de 300 !
var scaleRizz = Math.min(currentRizz / 300, 1);

// 4. On anime la barre d'Aura (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_aura']")) {
    gsap.to("[data-acc-text='barre_aura']", {
        scaleX: scaleAura, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}

// 5. On anime la barre de Rizz (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_rizz']")) {
    gsap.to("[data-acc-text='barre_rizz']", {
        scaleX: scaleRizz, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}
}

window.Script166 = function()
{
  // 1. On connecte le code à ton module Storyline
var player = GetPlayer();

// 2. On récupère les valeurs de tes variables numériques
var currentAura = player.GetVar("aura");
var currentRizz = player.GetVar("rizz");

// 3. On calcule l'échelle et on SÉCURISE pour ne pas déborder (Maximum = 1)
// Pour l'Aura, le max reste 100
var scaleAura = Math.min(currentAura / 100, 1);

// Pour le Rizz, le max est maintenant de 300 !
var scaleRizz = Math.min(currentRizz / 300, 1);

// 4. On anime la barre d'Aura (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_aura']")) {
    gsap.to("[data-acc-text='barre_aura']", {
        scaleX: scaleAura, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}

// 5. On anime la barre de Rizz (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_rizz']")) {
    gsap.to("[data-acc-text='barre_rizz']", {
        scaleX: scaleRizz, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}
}

window.Script167 = function()
{
  // 1. On connecte le code à ton module Storyline
var player = GetPlayer();

// 2. On récupère les valeurs de tes variables numériques
var currentAura = player.GetVar("aura");
var currentRizz = player.GetVar("rizz");

// 3. On calcule l'échelle et on SÉCURISE pour ne pas déborder (Maximum = 1)
// Pour l'Aura, le max reste 100
var scaleAura = Math.min(currentAura / 100, 1);

// Pour le Rizz, le max est maintenant de 300 !
var scaleRizz = Math.min(currentRizz / 300, 1);

// 4. On anime la barre d'Aura (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_aura']")) {
    gsap.to("[data-acc-text='barre_aura']", {
        scaleX: scaleAura, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}

// 5. On anime la barre de Rizz (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_rizz']")) {
    gsap.to("[data-acc-text='barre_rizz']", {
        scaleX: scaleRizz, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}
}

window.Script168 = function()
{
  // 1. On connecte le code à ton module Storyline
var player = GetPlayer();

// 2. On récupère les valeurs de tes variables numériques
var currentAura = player.GetVar("aura");
var currentRizz = player.GetVar("rizz");

// 3. On calcule l'échelle et on SÉCURISE pour ne pas déborder (Maximum = 1)
// Pour l'Aura, le max reste 100
var scaleAura = Math.min(currentAura / 100, 1);

// Pour le Rizz, le max est maintenant de 300 !
var scaleRizz = Math.min(currentRizz / 300, 1);

// 4. On anime la barre d'Aura (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_aura']")) {
    gsap.to("[data-acc-text='barre_aura']", {
        scaleX: scaleAura, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}

// 5. On anime la barre de Rizz (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_rizz']")) {
    gsap.to("[data-acc-text='barre_rizz']", {
        scaleX: scaleRizz, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}
}

window.Script169 = function()
{
  // 1. On connecte le code à ton module Storyline
var player = GetPlayer();

// 2. On récupère les valeurs de tes variables numériques
var currentAura = player.GetVar("aura");
var currentRizz = player.GetVar("rizz");

// 3. On calcule l'échelle et on SÉCURISE pour ne pas déborder (Maximum = 1)
// Pour l'Aura, le max reste 100
var scaleAura = Math.min(currentAura / 100, 1);

// Pour le Rizz, le max est maintenant de 300 !
var scaleRizz = Math.min(currentRizz / 300, 1);

// 4. On anime la barre d'Aura (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_aura']")) {
    gsap.to("[data-acc-text='barre_aura']", {
        scaleX: scaleAura, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}

// 5. On anime la barre de Rizz (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_rizz']")) {
    gsap.to("[data-acc-text='barre_rizz']", {
        scaleX: scaleRizz, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}
}

window.Script170 = function()
{
  // 1. On connecte le code à ton module Storyline
var player = GetPlayer();

// 2. On récupère les valeurs de tes variables numériques
var currentAura = player.GetVar("aura");
var currentRizz = player.GetVar("rizz");

// 3. On calcule l'échelle et on SÉCURISE pour ne pas déborder (Maximum = 1)
// Pour l'Aura, le max reste 100
var scaleAura = Math.min(currentAura / 100, 1);

// Pour le Rizz, le max est maintenant de 300 !
var scaleRizz = Math.min(currentRizz / 300, 1);

// 4. On anime la barre d'Aura (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_aura']")) {
    gsap.to("[data-acc-text='barre_aura']", {
        scaleX: scaleAura, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}

// 5. On anime la barre de Rizz (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_rizz']")) {
    gsap.to("[data-acc-text='barre_rizz']", {
        scaleX: scaleRizz, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}
}

window.Script171 = function()
{
  // 1. On connecte le code à ton module Storyline
var player = GetPlayer();

// 2. On récupère les valeurs de tes variables numériques
var currentAura = player.GetVar("aura");
var currentRizz = player.GetVar("rizz");

// 3. On calcule l'échelle et on SÉCURISE pour ne pas déborder (Maximum = 1)
// Pour l'Aura, le max reste 100
var scaleAura = Math.min(currentAura / 100, 1);

// Pour le Rizz, le max est maintenant de 300 !
var scaleRizz = Math.min(currentRizz / 300, 1);

// 4. On anime la barre d'Aura (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_aura']")) {
    gsap.to("[data-acc-text='barre_aura']", {
        scaleX: scaleAura, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}

// 5. On anime la barre de Rizz (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_rizz']")) {
    gsap.to("[data-acc-text='barre_rizz']", {
        scaleX: scaleRizz, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}
}

window.Script172 = function()
{
  // 1. On connecte le code à ton module Storyline
var player = GetPlayer();

// 2. On récupère les valeurs de tes variables numériques
var currentAura = player.GetVar("aura");
var currentRizz = player.GetVar("rizz");

// 3. On calcule l'échelle et on SÉCURISE pour ne pas déborder (Maximum = 1)
// Pour l'Aura, le max reste 100
var scaleAura = Math.min(currentAura / 100, 1);

// Pour le Rizz, le max est maintenant de 300 !
var scaleRizz = Math.min(currentRizz / 300, 1);

// 4. On anime la barre d'Aura (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_aura']")) {
    gsap.to("[data-acc-text='barre_aura']", {
        scaleX: scaleAura, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}

// 5. On anime la barre de Rizz (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_rizz']")) {
    gsap.to("[data-acc-text='barre_rizz']", {
        scaleX: scaleRizz, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}
}

window.Script173 = function()
{
  (function () {
  const LIVE_MATCH = "storyline-bridge-live/";
  const player = GetPlayer();

  function getIframe() {
    return Array.from(document.querySelectorAll("iframe"))
      .find(f => (f.src || "").includes(LIVE_MATCH));
  }

  // 1) Patch iframe allow micro (ton code, gardé)
  function patchIframeAllow() {
    const iframe = getIframe();
    if (!iframe) return;
    if (iframe.allow && iframe.allow.includes("microphone")) return;

    const clone = iframe.cloneNode();
    clone.allow = "microphone; autoplay";
    iframe.parentNode.replaceChild(clone, iframe);
    console.log("LIVE iframe patched");
  }

  const obs = new MutationObserver(patchIframeAllow);
  obs.observe(document.body, { childList: true, subtree: true });
  patchIframeAllow();

  // 2) Bind keyboard PTT (une seule fois)
  if (window.__LIVE_PTT_BOUND) return;
  window.__LIVE_PTT_BOUND = true;

  let spaceDown = false;

  window.addEventListener("keydown", (e) => {
    if (e.code !== "Space") return;
    if (spaceDown) return;          // anti auto-repeat
    spaceDown = true;
    e.preventDefault();

    const iframe = getIframe();
    if (!iframe) return;
    iframe.contentWindow.postMessage({ type: "LIVE_MIC_ON" }, "*");
    console.log("MIC ON (space)");
  });

  window.addEventListener("keyup", (e) => {
    if (e.code !== "Space") return;
    if (!spaceDown) return;
    spaceDown = false;
    e.preventDefault();

    const iframe = getIframe();
    if (!iframe) return;
    iframe.contentWindow.postMessage({ type: "LIVE_MIC_OFF" }, "*");
    console.log("MIC OFF (space)");
  });

})();

(function () {

  const player = GetPlayer();

  if (window.__LIVE_MSG_BOUND) return;
  window.__LIVE_MSG_BOUND = true;

  console.log("Storyline listener READY");

  window.addEventListener("message", function(event) {

    const data = event.data;

    if (!data || !data.type) return;

    console.log("Storyline received:", data);
    console.log("Storyline received JSON:", JSON.stringify(event.data));

    const { type, payload } = data;

    // ============================
    // TEXTE AGENT
    // ============================

    if (type === "RT_ASSISTANT_TEXT") {

      const text = payload?.text || "";

      player.SetVar("sarah_agent_text", text);

      return;
    }


    // ============================
    // FIN ACTIVITE
    // ============================

    if (type === "RT_ACTIVITY_DONE") {

      console.log("RT_ACTIVITY_DONE payload:", payload);

      // rating
      player.SetVar("sarah_activity_rating", payload?.rating ?? 0);

      // success
      player.SetVar("activity_success", payload?.success ?? false);

      // feedback
      player.SetVar("activity_feedback", payload?.feedback ?? "");

      // aura
      if (payload?.auraDelta !== undefined) {

        const current = Number(player.GetVar("aura") || 0);

        player.SetVar("aura", current + Number(payload.auraDelta));

      }

      // rizz
      if (payload?.rizzDelta !== undefined) {

        const current = Number(player.GetVar("rizz") || 0);

        player.SetVar("rizz", current + Number(payload.rizzDelta));

      }

      // unlock
      player.SetVar("activite_2_disponible", payload?.unlockNext ?? true);


      // genius phone

      if (payload?.gp?.slot && payload?.gp?.text) {

        player.SetVar(`message_gp_${payload.gp.slot}`, payload.gp.text);

        const notif = Number(player.GetVar("notification_GP") || 0);

        player.SetVar("notification_GP", notif + 1);

      }


      // reset option index

      player.SetVar("option_index", 0);

      return;

    }



    // ============================
    // EMOTION
    // ============================

    if (type === "RT_EMOTION") {

      player.SetVar("agent_emotion", payload?.emotion || "neutral");

      return;

    }


  });

})();
}

window.Script174 = function()
{
  const iframe =
  Array.from(document.querySelectorAll("iframe"))
  .find(f => f.src.includes("storyline-bridge-live/"));

if (!iframe || !iframe.contentWindow) return;


// connexion UNE SEULE FOIS
if (!window.__LIVE_CONNECTED) {

  iframe.contentWindow.postMessage({
    type: "LIVE_CONNECT"
  }, "*");

  window.__LIVE_CONNECTED = true;

  console.log("LIVE_CONNECT sent (first SPACE)");
}


// ton PTT normal — ON NE CHANGE RIEN
iframe.contentWindow.postMessage({
  type: "LIVE_PTT_PING"
}, "*");

console.log("LIVE_PTT_PING");
}

window.Script175 = function()
{
  (function () {

  const iframe =
    Array.from(document.querySelectorAll("iframe"))
    .find(f => (f.src || "").includes("storyline-bridge-live/"));

  if (!iframe || !iframe.contentWindow) return;

  iframe.contentWindow.postMessage({
    type: "LIVE_DISCONNECT"
  }, "*");
  
  window.__LIVE_CONNECTED = false;
  console.log("LIVE_DISCONNECT sent");

})();
}

window.Script176 = function()
{
  // 1. On connecte le code à ton module Storyline
var player = GetPlayer();

// 2. On récupère les valeurs de tes variables numériques
var currentAura = player.GetVar("aura");
var currentRizz = player.GetVar("rizz");

// 3. On calcule l'échelle et on SÉCURISE pour ne pas déborder (Maximum = 1)
// Pour l'Aura, le max reste 100
var scaleAura = Math.min(currentAura / 100, 1);

// Pour le Rizz, le max est maintenant de 300 !
var scaleRizz = Math.min(currentRizz / 300, 1);

// 4. On anime la barre d'Aura (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_aura']")) {
    gsap.to("[data-acc-text='barre_aura']", {
        scaleX: scaleAura, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}

// 5. On anime la barre de Rizz (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_rizz']")) {
    gsap.to("[data-acc-text='barre_rizz']", {
        scaleX: scaleRizz, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}
}

window.Script177 = function()
{
  // 1. On connecte le code à ton module Storyline
var player = GetPlayer();

// 2. On récupère les valeurs de tes variables numériques
var currentAura = player.GetVar("aura");
var currentRizz = player.GetVar("rizz");

// 3. On calcule l'échelle et on SÉCURISE pour ne pas déborder (Maximum = 1)
// Pour l'Aura, le max reste 100
var scaleAura = Math.min(currentAura / 100, 1);

// Pour le Rizz, le max est maintenant de 300 !
var scaleRizz = Math.min(currentRizz / 300, 1);

// 4. On anime la barre d'Aura (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_aura']")) {
    gsap.to("[data-acc-text='barre_aura']", {
        scaleX: scaleAura, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}

// 5. On anime la barre de Rizz (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_rizz']")) {
    gsap.to("[data-acc-text='barre_rizz']", {
        scaleX: scaleRizz, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}
}

window.Script178 = function()
{
  // 1. On connecte le code à ton module Storyline
var player = GetPlayer();

// 2. On récupère les valeurs de tes variables numériques
var currentAura = player.GetVar("aura");
var currentRizz = player.GetVar("rizz");

// 3. On calcule l'échelle et on SÉCURISE pour ne pas déborder (Maximum = 1)
// Pour l'Aura, le max reste 100
var scaleAura = Math.min(currentAura / 100, 1);

// Pour le Rizz, le max est maintenant de 300 !
var scaleRizz = Math.min(currentRizz / 300, 1);

// 4. On anime la barre d'Aura (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_aura']")) {
    gsap.to("[data-acc-text='barre_aura']", {
        scaleX: scaleAura, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}

// 5. On anime la barre de Rizz (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_rizz']")) {
    gsap.to("[data-acc-text='barre_rizz']", {
        scaleX: scaleRizz, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}
}

window.Script179 = function()
{
  // 1. On connecte le code à ton module Storyline
var player = GetPlayer();

// 2. On récupère les valeurs de tes variables numériques
var currentAura = player.GetVar("aura");
var currentRizz = player.GetVar("rizz");

// 3. On calcule l'échelle et on SÉCURISE pour ne pas déborder (Maximum = 1)
// Pour l'Aura, le max reste 100
var scaleAura = Math.min(currentAura / 100, 1);

// Pour le Rizz, le max est maintenant de 300 !
var scaleRizz = Math.min(currentRizz / 300, 1);

// 4. On anime la barre d'Aura (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_aura']")) {
    gsap.to("[data-acc-text='barre_aura']", {
        scaleX: scaleAura, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}

// 5. On anime la barre de Rizz (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_rizz']")) {
    gsap.to("[data-acc-text='barre_rizz']", {
        scaleX: scaleRizz, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}
}

window.Script180 = function()
{
  // 1. On connecte le code à ton module Storyline
var player = GetPlayer();

// 2. On récupère les valeurs de tes variables numériques
var currentAura = player.GetVar("aura");
var currentRizz = player.GetVar("rizz");

// 3. On calcule l'échelle et on SÉCURISE pour ne pas déborder (Maximum = 1)
// Pour l'Aura, le max reste 100
var scaleAura = Math.min(currentAura / 100, 1);

// Pour le Rizz, le max est maintenant de 300 !
var scaleRizz = Math.min(currentRizz / 300, 1);

// 4. On anime la barre d'Aura (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_aura']")) {
    gsap.to("[data-acc-text='barre_aura']", {
        scaleX: scaleAura, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}

// 5. On anime la barre de Rizz (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_rizz']")) {
    gsap.to("[data-acc-text='barre_rizz']", {
        scaleX: scaleRizz, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}
}

window.Script181 = function()
{
  // 1. On connecte le code à ton module Storyline
var player = GetPlayer();

// 2. On récupère les valeurs de tes variables numériques
var currentAura = player.GetVar("aura");
var currentRizz = player.GetVar("rizz");

// 3. On calcule l'échelle et on SÉCURISE pour ne pas déborder (Maximum = 1)
// Pour l'Aura, le max reste 100
var scaleAura = Math.min(currentAura / 100, 1);

// Pour le Rizz, le max est maintenant de 300 !
var scaleRizz = Math.min(currentRizz / 300, 1);

// 4. On anime la barre d'Aura (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_aura']")) {
    gsap.to("[data-acc-text='barre_aura']", {
        scaleX: scaleAura, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}

// 5. On anime la barre de Rizz (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_rizz']")) {
    gsap.to("[data-acc-text='barre_rizz']", {
        scaleX: scaleRizz, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}
}

window.Script182 = function()
{
  // 1. On connecte le code à ton module Storyline
var player = GetPlayer();

// 2. On récupère les valeurs de tes variables numériques
var currentAura = player.GetVar("aura");
var currentRizz = player.GetVar("rizz");

// 3. On calcule l'échelle et on SÉCURISE pour ne pas déborder (Maximum = 1)
// Pour l'Aura, le max reste 100
var scaleAura = Math.min(currentAura / 100, 1);

// Pour le Rizz, le max est maintenant de 300 !
var scaleRizz = Math.min(currentRizz / 300, 1);

// 4. On anime la barre d'Aura (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_aura']")) {
    gsap.to("[data-acc-text='barre_aura']", {
        scaleX: scaleAura, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}

// 5. On anime la barre de Rizz (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_rizz']")) {
    gsap.to("[data-acc-text='barre_rizz']", {
        scaleX: scaleRizz, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}
}

window.Script183 = function()
{
  // 1. On connecte le code à ton module Storyline
var player = GetPlayer();

// 2. On récupère les valeurs de tes variables numériques
var currentAura = player.GetVar("aura");
var currentRizz = player.GetVar("rizz");

// 3. On calcule l'échelle et on SÉCURISE pour ne pas déborder (Maximum = 1)
// Pour l'Aura, le max reste 100
var scaleAura = Math.min(currentAura / 100, 1);

// Pour le Rizz, le max est maintenant de 300 !
var scaleRizz = Math.min(currentRizz / 300, 1);

// 4. On anime la barre d'Aura (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_aura']")) {
    gsap.to("[data-acc-text='barre_aura']", {
        scaleX: scaleAura, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}

// 5. On anime la barre de Rizz (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_rizz']")) {
    gsap.to("[data-acc-text='barre_rizz']", {
        scaleX: scaleRizz, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}
}

window.Script184 = function()
{
  // 1. On connecte le code à ton module Storyline
var player = GetPlayer();

// 2. On récupère les valeurs de tes variables numériques
var currentAura = player.GetVar("aura");
var currentRizz = player.GetVar("rizz");

// 3. On calcule l'échelle et on SÉCURISE pour ne pas déborder (Maximum = 1)
// Pour l'Aura, le max reste 100
var scaleAura = Math.min(currentAura / 100, 1);

// Pour le Rizz, le max est maintenant de 300 !
var scaleRizz = Math.min(currentRizz / 300, 1);

// 4. On anime la barre d'Aura (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_aura']")) {
    gsap.to("[data-acc-text='barre_aura']", {
        scaleX: scaleAura, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}

// 5. On anime la barre de Rizz (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_rizz']")) {
    gsap.to("[data-acc-text='barre_rizz']", {
        scaleX: scaleRizz, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}
}

window.Script185 = function()
{
  // 1. On connecte le code à ton module Storyline
var player = GetPlayer();

// 2. On récupère les valeurs de tes variables numériques
var currentAura = player.GetVar("aura");
var currentRizz = player.GetVar("rizz");

// 3. On calcule l'échelle et on SÉCURISE pour ne pas déborder (Maximum = 1)
// Pour l'Aura, le max reste 100
var scaleAura = Math.min(currentAura / 100, 1);

// Pour le Rizz, le max est maintenant de 300 !
var scaleRizz = Math.min(currentRizz / 300, 1);

// 4. On anime la barre d'Aura (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_aura']")) {
    gsap.to("[data-acc-text='barre_aura']", {
        scaleX: scaleAura, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}

// 5. On anime la barre de Rizz (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_rizz']")) {
    gsap.to("[data-acc-text='barre_rizz']", {
        scaleX: scaleRizz, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}
}

window.Script186 = function()
{
  // 1. On connecte le code à ton module Storyline
var player = GetPlayer();

// 2. On récupère les valeurs de tes variables numériques
var currentAura = player.GetVar("aura");
var currentRizz = player.GetVar("rizz");

// 3. On calcule l'échelle et on SÉCURISE pour ne pas déborder (Maximum = 1)
// Pour l'Aura, le max reste 100
var scaleAura = Math.min(currentAura / 100, 1);

// Pour le Rizz, le max est maintenant de 300 !
var scaleRizz = Math.min(currentRizz / 300, 1);

// 4. On anime la barre d'Aura (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_aura']")) {
    gsap.to("[data-acc-text='barre_aura']", {
        scaleX: scaleAura, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}

// 5. On anime la barre de Rizz (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_rizz']")) {
    gsap.to("[data-acc-text='barre_rizz']", {
        scaleX: scaleRizz, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}
}

window.Script187 = function()
{
  // 1. On connecte le code à ton module Storyline
var player = GetPlayer();

// 2. On récupère les valeurs de tes variables numériques
var currentAura = player.GetVar("aura");
var currentRizz = player.GetVar("rizz");

// 3. On calcule l'échelle et on SÉCURISE pour ne pas déborder (Maximum = 1)
// Pour l'Aura, le max reste 100
var scaleAura = Math.min(currentAura / 100, 1);

// Pour le Rizz, le max est maintenant de 300 !
var scaleRizz = Math.min(currentRizz / 300, 1);

// 4. On anime la barre d'Aura (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_aura']")) {
    gsap.to("[data-acc-text='barre_aura']", {
        scaleX: scaleAura, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}

// 5. On anime la barre de Rizz (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_rizz']")) {
    gsap.to("[data-acc-text='barre_rizz']", {
        scaleX: scaleRizz, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}
}

window.Script188 = function()
{
  // 1. On connecte le code à ton module Storyline
var player = GetPlayer();

// 2. On récupère les valeurs de tes variables numériques
var currentAura = player.GetVar("aura");
var currentRizz = player.GetVar("rizz");

// 3. On calcule l'échelle et on SÉCURISE pour ne pas déborder (Maximum = 1)
// Pour l'Aura, le max reste 100
var scaleAura = Math.min(currentAura / 100, 1);

// Pour le Rizz, le max est maintenant de 300 !
var scaleRizz = Math.min(currentRizz / 300, 1);

// 4. On anime la barre d'Aura (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_aura']")) {
    gsap.to("[data-acc-text='barre_aura']", {
        scaleX: scaleAura, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}

// 5. On anime la barre de Rizz (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_rizz']")) {
    gsap.to("[data-acc-text='barre_rizz']", {
        scaleX: scaleRizz, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}
}

window.Script189 = function()
{
  // 1. On connecte le code à ton module Storyline
var player = GetPlayer();

// 2. On récupère les valeurs de tes variables numériques
var currentAura = player.GetVar("aura");
var currentRizz = player.GetVar("rizz");

// 3. On calcule l'échelle et on SÉCURISE pour ne pas déborder (Maximum = 1)
// Pour l'Aura, le max reste 100
var scaleAura = Math.min(currentAura / 100, 1);

// Pour le Rizz, le max est maintenant de 300 !
var scaleRizz = Math.min(currentRizz / 300, 1);

// 4. On anime la barre d'Aura (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_aura']")) {
    gsap.to("[data-acc-text='barre_aura']", {
        scaleX: scaleAura, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}

// 5. On anime la barre de Rizz (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_rizz']")) {
    gsap.to("[data-acc-text='barre_rizz']", {
        scaleX: scaleRizz, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}
}

window.Script190 = function()
{
  // 1. On connecte le code à ton module Storyline
var player = GetPlayer();

// 2. On récupère les valeurs de tes variables numériques
var currentAura = player.GetVar("aura");
var currentRizz = player.GetVar("rizz");

// 3. On calcule l'échelle et on SÉCURISE pour ne pas déborder (Maximum = 1)
// Pour l'Aura, le max reste 100
var scaleAura = Math.min(currentAura / 100, 1);

// Pour le Rizz, le max est maintenant de 300 !
var scaleRizz = Math.min(currentRizz / 300, 1);

// 4. On anime la barre d'Aura (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_aura']")) {
    gsap.to("[data-acc-text='barre_aura']", {
        scaleX: scaleAura, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}

// 5. On anime la barre de Rizz (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_rizz']")) {
    gsap.to("[data-acc-text='barre_rizz']", {
        scaleX: scaleRizz, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}
}

window.Script191 = function()
{
  // 1. On connecte le code à ton module Storyline
var player = GetPlayer();

// 2. On récupère les valeurs de tes variables numériques
var currentAura = player.GetVar("aura");
var currentRizz = player.GetVar("rizz");

// 3. On calcule l'échelle et on SÉCURISE pour ne pas déborder (Maximum = 1)
// Pour l'Aura, le max reste 100
var scaleAura = Math.min(currentAura / 100, 1);

// Pour le Rizz, le max est maintenant de 300 !
var scaleRizz = Math.min(currentRizz / 300, 1);

// 4. On anime la barre d'Aura (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_aura']")) {
    gsap.to("[data-acc-text='barre_aura']", {
        scaleX: scaleAura, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}

// 5. On anime la barre de Rizz (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_rizz']")) {
    gsap.to("[data-acc-text='barre_rizz']", {
        scaleX: scaleRizz, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}
}

window.Script192 = function()
{
  // 1. On connecte le code à ton module Storyline
var player = GetPlayer();

// 2. On récupère les valeurs de tes variables numériques
var currentAura = player.GetVar("aura");
var currentRizz = player.GetVar("rizz");

// 3. On calcule l'échelle et on SÉCURISE pour ne pas déborder (Maximum = 1)
// Pour l'Aura, le max reste 100
var scaleAura = Math.min(currentAura / 100, 1);

// Pour le Rizz, le max est maintenant de 300 !
var scaleRizz = Math.min(currentRizz / 300, 1);

// 4. On anime la barre d'Aura (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_aura']")) {
    gsap.to("[data-acc-text='barre_aura']", {
        scaleX: scaleAura, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}

// 5. On anime la barre de Rizz (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_rizz']")) {
    gsap.to("[data-acc-text='barre_rizz']", {
        scaleX: scaleRizz, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}
}

window.Script193 = function()
{
  // 1. On connecte le code à ton module Storyline
var player = GetPlayer();

// 2. On récupère les valeurs de tes variables numériques
var currentAura = player.GetVar("aura");
var currentRizz = player.GetVar("rizz");

// 3. On calcule l'échelle et on SÉCURISE pour ne pas déborder (Maximum = 1)
// Pour l'Aura, le max reste 100
var scaleAura = Math.min(currentAura / 100, 1);

// Pour le Rizz, le max est maintenant de 300 !
var scaleRizz = Math.min(currentRizz / 300, 1);

// 4. On anime la barre d'Aura (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_aura']")) {
    gsap.to("[data-acc-text='barre_aura']", {
        scaleX: scaleAura, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}

// 5. On anime la barre de Rizz (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_rizz']")) {
    gsap.to("[data-acc-text='barre_rizz']", {
        scaleX: scaleRizz, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}
}

window.Script194 = function()
{
  // 1. On connecte le code à ton module Storyline
var player = GetPlayer();

// 2. On récupère les valeurs de tes variables numériques
var currentAura = player.GetVar("aura");
var currentRizz = player.GetVar("rizz");

// 3. On calcule l'échelle et on SÉCURISE pour ne pas déborder (Maximum = 1)
// Pour l'Aura, le max reste 100
var scaleAura = Math.min(currentAura / 100, 1);

// Pour le Rizz, le max est maintenant de 300 !
var scaleRizz = Math.min(currentRizz / 300, 1);

// 4. On anime la barre d'Aura (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_aura']")) {
    gsap.to("[data-acc-text='barre_aura']", {
        scaleX: scaleAura, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}

// 5. On anime la barre de Rizz (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_rizz']")) {
    gsap.to("[data-acc-text='barre_rizz']", {
        scaleX: scaleRizz, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}
}

window.Script195 = function()
{
  // 1. On connecte le code à ton module Storyline
var player = GetPlayer();

// 2. On récupère les valeurs de tes variables numériques
var currentAura = player.GetVar("aura");
var currentRizz = player.GetVar("rizz");

// 3. On calcule l'échelle et on SÉCURISE pour ne pas déborder (Maximum = 1)
// Pour l'Aura, le max reste 100
var scaleAura = Math.min(currentAura / 100, 1);

// Pour le Rizz, le max est maintenant de 300 !
var scaleRizz = Math.min(currentRizz / 300, 1);

// 4. On anime la barre d'Aura (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_aura']")) {
    gsap.to("[data-acc-text='barre_aura']", {
        scaleX: scaleAura, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}

// 5. On anime la barre de Rizz (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_rizz']")) {
    gsap.to("[data-acc-text='barre_rizz']", {
        scaleX: scaleRizz, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}
}

window.Script196 = function()
{
  // 1. On connecte le code à ton module Storyline
var player = GetPlayer();

// 2. On récupère les valeurs de tes variables numériques
var currentAura = player.GetVar("aura");
var currentRizz = player.GetVar("rizz");

// 3. On calcule l'échelle et on SÉCURISE pour ne pas déborder (Maximum = 1)
// Pour l'Aura, le max reste 100
var scaleAura = Math.min(currentAura / 100, 1);

// Pour le Rizz, le max est maintenant de 300 !
var scaleRizz = Math.min(currentRizz / 300, 1);

// 4. On anime la barre d'Aura (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_aura']")) {
    gsap.to("[data-acc-text='barre_aura']", {
        scaleX: scaleAura, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}

// 5. On anime la barre de Rizz (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_rizz']")) {
    gsap.to("[data-acc-text='barre_rizz']", {
        scaleX: scaleRizz, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}
}

window.Script197 = function()
{
  // 1. On connecte le code à ton module Storyline
var player = GetPlayer();

// 2. On récupère les valeurs de tes variables numériques
var currentAura = player.GetVar("aura");
var currentRizz = player.GetVar("rizz");

// 3. On calcule l'échelle et on SÉCURISE pour ne pas déborder (Maximum = 1)
// Pour l'Aura, le max reste 100
var scaleAura = Math.min(currentAura / 100, 1);

// Pour le Rizz, le max est maintenant de 300 !
var scaleRizz = Math.min(currentRizz / 300, 1);

// 4. On anime la barre d'Aura (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_aura']")) {
    gsap.to("[data-acc-text='barre_aura']", {
        scaleX: scaleAura, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}

// 5. On anime la barre de Rizz (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_rizz']")) {
    gsap.to("[data-acc-text='barre_rizz']", {
        scaleX: scaleRizz, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}
}

window.Script198 = function()
{
  // 1. On connecte le code à ton module Storyline
var player = GetPlayer();

// 2. On récupère les valeurs de tes variables numériques
var currentAura = player.GetVar("aura");
var currentRizz = player.GetVar("rizz");

// 3. On calcule l'échelle et on SÉCURISE pour ne pas déborder (Maximum = 1)
// Pour l'Aura, le max reste 100
var scaleAura = Math.min(currentAura / 100, 1);

// Pour le Rizz, le max est maintenant de 300 !
var scaleRizz = Math.min(currentRizz / 300, 1);

// 4. On anime la barre d'Aura (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_aura']")) {
    gsap.to("[data-acc-text='barre_aura']", {
        scaleX: scaleAura, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}

// 5. On anime la barre de Rizz (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_rizz']")) {
    gsap.to("[data-acc-text='barre_rizz']", {
        scaleX: scaleRizz, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}
}

window.Script199 = function()
{
  // 1. On connecte le code à ton module Storyline
var player = GetPlayer();

// 2. On récupère les valeurs de tes variables numériques
var currentAura = player.GetVar("aura");
var currentRizz = player.GetVar("rizz");

// 3. On calcule l'échelle et on SÉCURISE pour ne pas déborder (Maximum = 1)
// Pour l'Aura, le max reste 100
var scaleAura = Math.min(currentAura / 100, 1);

// Pour le Rizz, le max est maintenant de 300 !
var scaleRizz = Math.min(currentRizz / 300, 1);

// 4. On anime la barre d'Aura (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_aura']")) {
    gsap.to("[data-acc-text='barre_aura']", {
        scaleX: scaleAura, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}

// 5. On anime la barre de Rizz (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_rizz']")) {
    gsap.to("[data-acc-text='barre_rizz']", {
        scaleX: scaleRizz, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}
}

window.Script200 = function()
{
  // 1. On connecte le code à ton module Storyline
var player = GetPlayer();

// 2. On récupère les valeurs de tes variables numériques
var currentAura = player.GetVar("aura");
var currentRizz = player.GetVar("rizz");

// 3. On calcule l'échelle et on SÉCURISE pour ne pas déborder (Maximum = 1)
// Pour l'Aura, le max reste 100
var scaleAura = Math.min(currentAura / 100, 1);

// Pour le Rizz, le max est maintenant de 300 !
var scaleRizz = Math.min(currentRizz / 300, 1);

// 4. On anime la barre d'Aura (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_aura']")) {
    gsap.to("[data-acc-text='barre_aura']", {
        scaleX: scaleAura, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}

// 5. On anime la barre de Rizz (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_rizz']")) {
    gsap.to("[data-acc-text='barre_rizz']", {
        scaleX: scaleRizz, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}
}

window.Script201 = function()
{
  // 1. On connecte le code à ton module Storyline
var player = GetPlayer();

// 2. On récupère les valeurs de tes variables numériques
var currentAura = player.GetVar("aura");
var currentRizz = player.GetVar("rizz");

// 3. On calcule l'échelle et on SÉCURISE pour ne pas déborder (Maximum = 1)
// Pour l'Aura, le max reste 100
var scaleAura = Math.min(currentAura / 100, 1);

// Pour le Rizz, le max est maintenant de 300 !
var scaleRizz = Math.min(currentRizz / 300, 1);

// 4. On anime la barre d'Aura (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_aura']")) {
    gsap.to("[data-acc-text='barre_aura']", {
        scaleX: scaleAura, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}

// 5. On anime la barre de Rizz (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_rizz']")) {
    gsap.to("[data-acc-text='barre_rizz']", {
        scaleX: scaleRizz, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}
}

window.Script202 = function()
{
  // 1. On connecte le code à ton module Storyline
var player = GetPlayer();

// 2. On récupère les valeurs de tes variables numériques
var currentAura = player.GetVar("aura");
var currentRizz = player.GetVar("rizz");

// 3. On calcule l'échelle et on SÉCURISE pour ne pas déborder (Maximum = 1)
// Pour l'Aura, le max reste 100
var scaleAura = Math.min(currentAura / 100, 1);

// Pour le Rizz, le max est maintenant de 300 !
var scaleRizz = Math.min(currentRizz / 300, 1);

// 4. On anime la barre d'Aura (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_aura']")) {
    gsap.to("[data-acc-text='barre_aura']", {
        scaleX: scaleAura, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}

// 5. On anime la barre de Rizz (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_rizz']")) {
    gsap.to("[data-acc-text='barre_rizz']", {
        scaleX: scaleRizz, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}
}

window.Script203 = function()
{
  // 1. On connecte le code à ton module Storyline
var player = GetPlayer();

// 2. On récupère les valeurs de tes variables numériques
var currentAura = player.GetVar("aura");
var currentRizz = player.GetVar("rizz");

// 3. On calcule l'échelle et on SÉCURISE pour ne pas déborder (Maximum = 1)
// Pour l'Aura, le max reste 100
var scaleAura = Math.min(currentAura / 100, 1);

// Pour le Rizz, le max est maintenant de 300 !
var scaleRizz = Math.min(currentRizz / 300, 1);

// 4. On anime la barre d'Aura (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_aura']")) {
    gsap.to("[data-acc-text='barre_aura']", {
        scaleX: scaleAura, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}

// 5. On anime la barre de Rizz (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_rizz']")) {
    gsap.to("[data-acc-text='barre_rizz']", {
        scaleX: scaleRizz, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}
}

window.Script204 = function()
{
  // 1. On connecte le code à ton module Storyline
var player = GetPlayer();

// 2. On récupère les valeurs de tes variables numériques
var currentAura = player.GetVar("aura");
var currentRizz = player.GetVar("rizz");

// 3. On calcule l'échelle et on SÉCURISE pour ne pas déborder (Maximum = 1)
// Pour l'Aura, le max reste 100
var scaleAura = Math.min(currentAura / 100, 1);

// Pour le Rizz, le max est maintenant de 300 !
var scaleRizz = Math.min(currentRizz / 300, 1);

// 4. On anime la barre d'Aura (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_aura']")) {
    gsap.to("[data-acc-text='barre_aura']", {
        scaleX: scaleAura, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}

// 5. On anime la barre de Rizz (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_rizz']")) {
    gsap.to("[data-acc-text='barre_rizz']", {
        scaleX: scaleRizz, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}
}

window.Script205 = function()
{
  // 1. On connecte le code à ton module Storyline
var player = GetPlayer();

// 2. On récupère les valeurs de tes variables numériques
var currentAura = player.GetVar("aura");
var currentRizz = player.GetVar("rizz");

// 3. On calcule l'échelle et on SÉCURISE pour ne pas déborder (Maximum = 1)
// Pour l'Aura, le max reste 100
var scaleAura = Math.min(currentAura / 100, 1);

// Pour le Rizz, le max est maintenant de 300 !
var scaleRizz = Math.min(currentRizz / 300, 1);

// 4. On anime la barre d'Aura (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_aura']")) {
    gsap.to("[data-acc-text='barre_aura']", {
        scaleX: scaleAura, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}

// 5. On anime la barre de Rizz (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_rizz']")) {
    gsap.to("[data-acc-text='barre_rizz']", {
        scaleX: scaleRizz, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}
}

window.Script206 = function()
{
  // 1. On connecte le code à ton module Storyline
var player = GetPlayer();

// 2. On récupère les valeurs de tes variables numériques
var currentAura = player.GetVar("aura");
var currentRizz = player.GetVar("rizz");

// 3. On calcule l'échelle et on SÉCURISE pour ne pas déborder (Maximum = 1)
// Pour l'Aura, le max reste 100
var scaleAura = Math.min(currentAura / 100, 1);

// Pour le Rizz, le max est maintenant de 300 !
var scaleRizz = Math.min(currentRizz / 300, 1);

// 4. On anime la barre d'Aura (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_aura']")) {
    gsap.to("[data-acc-text='barre_aura']", {
        scaleX: scaleAura, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}

// 5. On anime la barre de Rizz (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_rizz']")) {
    gsap.to("[data-acc-text='barre_rizz']", {
        scaleX: scaleRizz, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}
}

window.Script207 = function()
{
  // 1. On connecte le code à ton module Storyline
var player = GetPlayer();

// 2. On récupère les valeurs de tes variables numériques
var currentAura = player.GetVar("aura");
var currentRizz = player.GetVar("rizz");

// 3. On calcule l'échelle et on SÉCURISE pour ne pas déborder (Maximum = 1)
// Pour l'Aura, le max reste 100
var scaleAura = Math.min(currentAura / 100, 1);

// Pour le Rizz, le max est maintenant de 300 !
var scaleRizz = Math.min(currentRizz / 300, 1);

// 4. On anime la barre d'Aura (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_aura']")) {
    gsap.to("[data-acc-text='barre_aura']", {
        scaleX: scaleAura, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}

// 5. On anime la barre de Rizz (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_rizz']")) {
    gsap.to("[data-acc-text='barre_rizz']", {
        scaleX: scaleRizz, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}
}

window.Script208 = function()
{
  // 1. On connecte le code à ton module Storyline
var player = GetPlayer();

// 2. On récupère les valeurs de tes variables numériques
var currentAura = player.GetVar("aura");
var currentRizz = player.GetVar("rizz");

// 3. On calcule l'échelle et on SÉCURISE pour ne pas déborder (Maximum = 1)
// Pour l'Aura, le max reste 100
var scaleAura = Math.min(currentAura / 100, 1);

// Pour le Rizz, le max est maintenant de 300 !
var scaleRizz = Math.min(currentRizz / 300, 1);

// 4. On anime la barre d'Aura (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_aura']")) {
    gsap.to("[data-acc-text='barre_aura']", {
        scaleX: scaleAura, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}

// 5. On anime la barre de Rizz (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_rizz']")) {
    gsap.to("[data-acc-text='barre_rizz']", {
        scaleX: scaleRizz, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}
}

window.Script209 = function()
{
  // 1. On connecte le code à ton module Storyline
var player = GetPlayer();

// 2. On récupère les valeurs de tes variables numériques
var currentAura = player.GetVar("aura");
var currentRizz = player.GetVar("rizz");

// 3. On calcule l'échelle et on SÉCURISE pour ne pas déborder (Maximum = 1)
// Pour l'Aura, le max reste 100
var scaleAura = Math.min(currentAura / 100, 1);

// Pour le Rizz, le max est maintenant de 300 !
var scaleRizz = Math.min(currentRizz / 300, 1);

// 4. On anime la barre d'Aura (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_aura']")) {
    gsap.to("[data-acc-text='barre_aura']", {
        scaleX: scaleAura, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}

// 5. On anime la barre de Rizz (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_rizz']")) {
    gsap.to("[data-acc-text='barre_rizz']", {
        scaleX: scaleRizz, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}
}

window.Script210 = function()
{
  // 1. On connecte le code à ton module Storyline
var player = GetPlayer();

// 2. On récupère les valeurs de tes variables numériques
var currentAura = player.GetVar("aura");
var currentRizz = player.GetVar("rizz");

// 3. On calcule l'échelle et on SÉCURISE pour ne pas déborder (Maximum = 1)
// Pour l'Aura, le max reste 100
var scaleAura = Math.min(currentAura / 100, 1);

// Pour le Rizz, le max est maintenant de 300 !
var scaleRizz = Math.min(currentRizz / 300, 1);

// 4. On anime la barre d'Aura (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_aura']")) {
    gsap.to("[data-acc-text='barre_aura']", {
        scaleX: scaleAura, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}

// 5. On anime la barre de Rizz (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_rizz']")) {
    gsap.to("[data-acc-text='barre_rizz']", {
        scaleX: scaleRizz, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}
}

window.Script211 = function()
{
  // 1. On connecte le code à ton module Storyline
var player = GetPlayer();

// 2. On récupère les valeurs de tes variables numériques
var currentAura = player.GetVar("aura");
var currentRizz = player.GetVar("rizz");

// 3. On calcule l'échelle et on SÉCURISE pour ne pas déborder (Maximum = 1)
// Pour l'Aura, le max reste 100
var scaleAura = Math.min(currentAura / 100, 1);

// Pour le Rizz, le max est maintenant de 300 !
var scaleRizz = Math.min(currentRizz / 300, 1);

// 4. On anime la barre d'Aura (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_aura']")) {
    gsap.to("[data-acc-text='barre_aura']", {
        scaleX: scaleAura, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}

// 5. On anime la barre de Rizz (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_rizz']")) {
    gsap.to("[data-acc-text='barre_rizz']", {
        scaleX: scaleRizz, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}
}

window.Script212 = function()
{
  // 1. On connecte le code à ton module Storyline
var player = GetPlayer();

// 2. On récupère les valeurs de tes variables numériques
var currentAura = player.GetVar("aura");
var currentRizz = player.GetVar("rizz");

// 3. On calcule l'échelle et on SÉCURISE pour ne pas déborder (Maximum = 1)
// Pour l'Aura, le max reste 100
var scaleAura = Math.min(currentAura / 100, 1);

// Pour le Rizz, le max est maintenant de 300 !
var scaleRizz = Math.min(currentRizz / 300, 1);

// 4. On anime la barre d'Aura (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_aura']")) {
    gsap.to("[data-acc-text='barre_aura']", {
        scaleX: scaleAura, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}

// 5. On anime la barre de Rizz (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_rizz']")) {
    gsap.to("[data-acc-text='barre_rizz']", {
        scaleX: scaleRizz, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}
}

window.Script213 = function()
{
  // 1. On connecte le code à ton module Storyline
var player = GetPlayer();

// 2. On récupère les valeurs de tes variables numériques
var currentAura = player.GetVar("aura");
var currentRizz = player.GetVar("rizz");

// 3. On calcule l'échelle et on SÉCURISE pour ne pas déborder (Maximum = 1)
// Pour l'Aura, le max reste 100
var scaleAura = Math.min(currentAura / 100, 1);

// Pour le Rizz, le max est maintenant de 300 !
var scaleRizz = Math.min(currentRizz / 300, 1);

// 4. On anime la barre d'Aura (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_aura']")) {
    gsap.to("[data-acc-text='barre_aura']", {
        scaleX: scaleAura, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}

// 5. On anime la barre de Rizz (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_rizz']")) {
    gsap.to("[data-acc-text='barre_rizz']", {
        scaleX: scaleRizz, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}
}

window.Script214 = function()
{
  // 1. On connecte le code à ton module Storyline
var player = GetPlayer();

// 2. On récupère les valeurs de tes variables numériques
var currentAura = player.GetVar("aura");
var currentRizz = player.GetVar("rizz");

// 3. On calcule l'échelle et on SÉCURISE pour ne pas déborder (Maximum = 1)
// Pour l'Aura, le max reste 100
var scaleAura = Math.min(currentAura / 100, 1);

// Pour le Rizz, le max est maintenant de 300 !
var scaleRizz = Math.min(currentRizz / 300, 1);

// 4. On anime la barre d'Aura (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_aura']")) {
    gsap.to("[data-acc-text='barre_aura']", {
        scaleX: scaleAura, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}

// 5. On anime la barre de Rizz (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_rizz']")) {
    gsap.to("[data-acc-text='barre_rizz']", {
        scaleX: scaleRizz, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}
}

window.Script215 = function()
{
  // 1. On connecte le code à ton module Storyline
var player = GetPlayer();

// 2. On récupère les valeurs de tes variables numériques
var currentAura = player.GetVar("aura");
var currentRizz = player.GetVar("rizz");

// 3. On calcule l'échelle et on SÉCURISE pour ne pas déborder (Maximum = 1)
// Pour l'Aura, le max reste 100
var scaleAura = Math.min(currentAura / 100, 1);

// Pour le Rizz, le max est maintenant de 300 !
var scaleRizz = Math.min(currentRizz / 300, 1);

// 4. On anime la barre d'Aura (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_aura']")) {
    gsap.to("[data-acc-text='barre_aura']", {
        scaleX: scaleAura, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}

// 5. On anime la barre de Rizz (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_rizz']")) {
    gsap.to("[data-acc-text='barre_rizz']", {
        scaleX: scaleRizz, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}
}

window.Script216 = function()
{
  // 1. On connecte le code à ton module Storyline
var player = GetPlayer();

// 2. On récupère les valeurs de tes variables numériques
var currentAura = player.GetVar("aura");
var currentRizz = player.GetVar("rizz");

// 3. On calcule l'échelle et on SÉCURISE pour ne pas déborder (Maximum = 1)
// Pour l'Aura, le max reste 100
var scaleAura = Math.min(currentAura / 100, 1);

// Pour le Rizz, le max est maintenant de 300 !
var scaleRizz = Math.min(currentRizz / 300, 1);

// 4. On anime la barre d'Aura (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_aura']")) {
    gsap.to("[data-acc-text='barre_aura']", {
        scaleX: scaleAura, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}

// 5. On anime la barre de Rizz (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_rizz']")) {
    gsap.to("[data-acc-text='barre_rizz']", {
        scaleX: scaleRizz, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}
}

window.Script217 = function()
{
  // 1. On connecte le code à ton module Storyline
var player = GetPlayer();

// 2. On récupère les valeurs de tes variables numériques
var currentAura = player.GetVar("aura");
var currentRizz = player.GetVar("rizz");

// 3. On calcule l'échelle et on SÉCURISE pour ne pas déborder (Maximum = 1)
// Pour l'Aura, le max reste 100
var scaleAura = Math.min(currentAura / 100, 1);

// Pour le Rizz, le max est maintenant de 300 !
var scaleRizz = Math.min(currentRizz / 300, 1);

// 4. On anime la barre d'Aura (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_aura']")) {
    gsap.to("[data-acc-text='barre_aura']", {
        scaleX: scaleAura, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}

// 5. On anime la barre de Rizz (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_rizz']")) {
    gsap.to("[data-acc-text='barre_rizz']", {
        scaleX: scaleRizz, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}
}

window.Script218 = function()
{
  // 1. On connecte le code à ton module Storyline
var player = GetPlayer();

// 2. On récupère les valeurs de tes variables numériques
var currentAura = player.GetVar("aura");
var currentRizz = player.GetVar("rizz");

// 3. On calcule l'échelle et on SÉCURISE pour ne pas déborder (Maximum = 1)
// Pour l'Aura, le max reste 100
var scaleAura = Math.min(currentAura / 100, 1);

// Pour le Rizz, le max est maintenant de 300 !
var scaleRizz = Math.min(currentRizz / 300, 1);

// 4. On anime la barre d'Aura (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_aura']")) {
    gsap.to("[data-acc-text='barre_aura']", {
        scaleX: scaleAura, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}

// 5. On anime la barre de Rizz (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_rizz']")) {
    gsap.to("[data-acc-text='barre_rizz']", {
        scaleX: scaleRizz, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}
}

window.Script219 = function()
{
  // 1. On connecte le code à ton module Storyline
var player = GetPlayer();

// 2. On récupère les valeurs de tes variables numériques
var currentAura = player.GetVar("aura");
var currentRizz = player.GetVar("rizz");

// 3. On calcule l'échelle et on SÉCURISE pour ne pas déborder (Maximum = 1)
// Pour l'Aura, le max reste 100
var scaleAura = Math.min(currentAura / 100, 1);

// Pour le Rizz, le max est maintenant de 300 !
var scaleRizz = Math.min(currentRizz / 300, 1);

// 4. On anime la barre d'Aura (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_aura']")) {
    gsap.to("[data-acc-text='barre_aura']", {
        scaleX: scaleAura, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}

// 5. On anime la barre de Rizz (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_rizz']")) {
    gsap.to("[data-acc-text='barre_rizz']", {
        scaleX: scaleRizz, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}
}

window.Script220 = function()
{
  // 1. On connecte le code à ton module Storyline
var player = GetPlayer();

// 2. On récupère les valeurs de tes variables numériques
var currentAura = player.GetVar("aura");
var currentRizz = player.GetVar("rizz");

// 3. On calcule l'échelle et on SÉCURISE pour ne pas déborder (Maximum = 1)
// Pour l'Aura, le max reste 100
var scaleAura = Math.min(currentAura / 100, 1);

// Pour le Rizz, le max est maintenant de 300 !
var scaleRizz = Math.min(currentRizz / 300, 1);

// 4. On anime la barre d'Aura (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_aura']")) {
    gsap.to("[data-acc-text='barre_aura']", {
        scaleX: scaleAura, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}

// 5. On anime la barre de Rizz (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_rizz']")) {
    gsap.to("[data-acc-text='barre_rizz']", {
        scaleX: scaleRizz, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}
}

window.Script221 = function()
{
  // 1. On connecte le code à ton module Storyline
var player = GetPlayer();

// 2. On récupère les valeurs de tes variables numériques
var currentAura = player.GetVar("aura");
var currentRizz = player.GetVar("rizz");

// 3. On calcule l'échelle et on SÉCURISE pour ne pas déborder (Maximum = 1)
// Pour l'Aura, le max reste 100
var scaleAura = Math.min(currentAura / 100, 1);

// Pour le Rizz, le max est maintenant de 300 !
var scaleRizz = Math.min(currentRizz / 300, 1);

// 4. On anime la barre d'Aura (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_aura']")) {
    gsap.to("[data-acc-text='barre_aura']", {
        scaleX: scaleAura, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}

// 5. On anime la barre de Rizz (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_rizz']")) {
    gsap.to("[data-acc-text='barre_rizz']", {
        scaleX: scaleRizz, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}
}

window.Script222 = function()
{
  // 1. On connecte le code à ton module Storyline
var player = GetPlayer();

// 2. On récupère les valeurs de tes variables numériques
var currentAura = player.GetVar("aura");
var currentRizz = player.GetVar("rizz");

// 3. On calcule l'échelle et on SÉCURISE pour ne pas déborder (Maximum = 1)
// Pour l'Aura, le max reste 100
var scaleAura = Math.min(currentAura / 100, 1);

// Pour le Rizz, le max est maintenant de 300 !
var scaleRizz = Math.min(currentRizz / 300, 1);

// 4. On anime la barre d'Aura (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_aura']")) {
    gsap.to("[data-acc-text='barre_aura']", {
        scaleX: scaleAura, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}

// 5. On anime la barre de Rizz (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_rizz']")) {
    gsap.to("[data-acc-text='barre_rizz']", {
        scaleX: scaleRizz, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}
}

window.Script223 = function()
{
  // 1. On connecte le code à ton module Storyline
var player = GetPlayer();

// 2. On récupère les valeurs de tes variables numériques
var currentAura = player.GetVar("aura");
var currentRizz = player.GetVar("rizz");

// 3. On calcule l'échelle et on SÉCURISE pour ne pas déborder (Maximum = 1)
// Pour l'Aura, le max reste 100
var scaleAura = Math.min(currentAura / 100, 1);

// Pour le Rizz, le max est maintenant de 300 !
var scaleRizz = Math.min(currentRizz / 300, 1);

// 4. On anime la barre d'Aura (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_aura']")) {
    gsap.to("[data-acc-text='barre_aura']", {
        scaleX: scaleAura, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}

// 5. On anime la barre de Rizz (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_rizz']")) {
    gsap.to("[data-acc-text='barre_rizz']", {
        scaleX: scaleRizz, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}
}

window.Script224 = function()
{
  // 1. On connecte le code à ton module Storyline
var player = GetPlayer();

// 2. On récupère les valeurs de tes variables numériques
var currentAura = player.GetVar("aura");
var currentRizz = player.GetVar("rizz");

// 3. On calcule l'échelle et on SÉCURISE pour ne pas déborder (Maximum = 1)
// Pour l'Aura, le max reste 100
var scaleAura = Math.min(currentAura / 100, 1);

// Pour le Rizz, le max est maintenant de 300 !
var scaleRizz = Math.min(currentRizz / 300, 1);

// 4. On anime la barre d'Aura (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_aura']")) {
    gsap.to("[data-acc-text='barre_aura']", {
        scaleX: scaleAura, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}

// 5. On anime la barre de Rizz (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_rizz']")) {
    gsap.to("[data-acc-text='barre_rizz']", {
        scaleX: scaleRizz, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}
}

window.Script225 = function()
{
  // 1. On connecte le code à ton module Storyline
var player = GetPlayer();

// 2. On récupère les valeurs de tes variables numériques
var currentAura = player.GetVar("aura");
var currentRizz = player.GetVar("rizz");

// 3. On calcule l'échelle et on SÉCURISE pour ne pas déborder (Maximum = 1)
// Pour l'Aura, le max reste 100
var scaleAura = Math.min(currentAura / 100, 1);

// Pour le Rizz, le max est maintenant de 300 !
var scaleRizz = Math.min(currentRizz / 300, 1);

// 4. On anime la barre d'Aura (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_aura']")) {
    gsap.to("[data-acc-text='barre_aura']", {
        scaleX: scaleAura, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}

// 5. On anime la barre de Rizz (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_rizz']")) {
    gsap.to("[data-acc-text='barre_rizz']", {
        scaleX: scaleRizz, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}
}

window.Script226 = function()
{
  // 1. On connecte le code à ton module Storyline
var player = GetPlayer();

// 2. On récupère les valeurs de tes variables numériques
var currentAura = player.GetVar("aura");
var currentRizz = player.GetVar("rizz");

// 3. On calcule l'échelle et on SÉCURISE pour ne pas déborder (Maximum = 1)
// Pour l'Aura, le max reste 100
var scaleAura = Math.min(currentAura / 100, 1);

// Pour le Rizz, le max est maintenant de 300 !
var scaleRizz = Math.min(currentRizz / 300, 1);

// 4. On anime la barre d'Aura (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_aura']")) {
    gsap.to("[data-acc-text='barre_aura']", {
        scaleX: scaleAura, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}

// 5. On anime la barre de Rizz (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_rizz']")) {
    gsap.to("[data-acc-text='barre_rizz']", {
        scaleX: scaleRizz, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}
}

window.Script227 = function()
{
  // 1. On connecte le code à ton module Storyline
var player = GetPlayer();

// 2. On récupère les valeurs de tes variables numériques
var currentAura = player.GetVar("aura");
var currentRizz = player.GetVar("rizz");

// 3. On calcule l'échelle et on SÉCURISE pour ne pas déborder (Maximum = 1)
// Pour l'Aura, le max reste 100
var scaleAura = Math.min(currentAura / 100, 1);

// Pour le Rizz, le max est maintenant de 300 !
var scaleRizz = Math.min(currentRizz / 300, 1);

// 4. On anime la barre d'Aura (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_aura']")) {
    gsap.to("[data-acc-text='barre_aura']", {
        scaleX: scaleAura, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}

// 5. On anime la barre de Rizz (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_rizz']")) {
    gsap.to("[data-acc-text='barre_rizz']", {
        scaleX: scaleRizz, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}
}

window.Script228 = function()
{
  // 1. On connecte le code à ton module Storyline
var player = GetPlayer();

// 2. On récupère les valeurs de tes variables numériques
var currentAura = player.GetVar("aura");
var currentRizz = player.GetVar("rizz");

// 3. On calcule l'échelle et on SÉCURISE pour ne pas déborder (Maximum = 1)
// Pour l'Aura, le max reste 100
var scaleAura = Math.min(currentAura / 100, 1);

// Pour le Rizz, le max est maintenant de 300 !
var scaleRizz = Math.min(currentRizz / 300, 1);

// 4. On anime la barre d'Aura (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_aura']")) {
    gsap.to("[data-acc-text='barre_aura']", {
        scaleX: scaleAura, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}

// 5. On anime la barre de Rizz (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_rizz']")) {
    gsap.to("[data-acc-text='barre_rizz']", {
        scaleX: scaleRizz, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}
}

window.Script229 = function()
{
  // 1. On connecte le code à ton module Storyline
var player = GetPlayer();

// 2. On récupère les valeurs de tes variables numériques
var currentAura = player.GetVar("aura");
var currentRizz = player.GetVar("rizz");

// 3. On calcule l'échelle et on SÉCURISE pour ne pas déborder (Maximum = 1)
// Pour l'Aura, le max reste 100
var scaleAura = Math.min(currentAura / 100, 1);

// Pour le Rizz, le max est maintenant de 300 !
var scaleRizz = Math.min(currentRizz / 300, 1);

// 4. On anime la barre d'Aura (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_aura']")) {
    gsap.to("[data-acc-text='barre_aura']", {
        scaleX: scaleAura, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}

// 5. On anime la barre de Rizz (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_rizz']")) {
    gsap.to("[data-acc-text='barre_rizz']", {
        scaleX: scaleRizz, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}
}

window.Script230 = function()
{
  // 1. On connecte le code à ton module Storyline
var player = GetPlayer();

// 2. On récupère les valeurs de tes variables numériques
var currentAura = player.GetVar("aura");
var currentRizz = player.GetVar("rizz");

// 3. On calcule l'échelle et on SÉCURISE pour ne pas déborder (Maximum = 1)
// Pour l'Aura, le max reste 100
var scaleAura = Math.min(currentAura / 100, 1);

// Pour le Rizz, le max est maintenant de 300 !
var scaleRizz = Math.min(currentRizz / 300, 1);

// 4. On anime la barre d'Aura (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_aura']")) {
    gsap.to("[data-acc-text='barre_aura']", {
        scaleX: scaleAura, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}

// 5. On anime la barre de Rizz (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_rizz']")) {
    gsap.to("[data-acc-text='barre_rizz']", {
        scaleX: scaleRizz, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}
}

window.Script231 = function()
{
  // 1. On connecte le code à ton module Storyline
var player = GetPlayer();

// 2. On récupère les valeurs de tes variables numériques
var currentAura = player.GetVar("aura");
var currentRizz = player.GetVar("rizz");

// 3. On calcule l'échelle et on SÉCURISE pour ne pas déborder (Maximum = 1)
// Pour l'Aura, le max reste 100
var scaleAura = Math.min(currentAura / 100, 1);

// Pour le Rizz, le max est maintenant de 300 !
var scaleRizz = Math.min(currentRizz / 300, 1);

// 4. On anime la barre d'Aura (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_aura']")) {
    gsap.to("[data-acc-text='barre_aura']", {
        scaleX: scaleAura, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}

// 5. On anime la barre de Rizz (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_rizz']")) {
    gsap.to("[data-acc-text='barre_rizz']", {
        scaleX: scaleRizz, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}
}

window.Script232 = function()
{
  // 1. On connecte le code à ton module Storyline
var player = GetPlayer();

// 2. On récupère les valeurs de tes variables numériques
var currentAura = player.GetVar("aura");
var currentRizz = player.GetVar("rizz");

// 3. On calcule l'échelle et on SÉCURISE pour ne pas déborder (Maximum = 1)
// Pour l'Aura, le max reste 100
var scaleAura = Math.min(currentAura / 100, 1);

// Pour le Rizz, le max est maintenant de 300 !
var scaleRizz = Math.min(currentRizz / 300, 1);

// 4. On anime la barre d'Aura (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_aura']")) {
    gsap.to("[data-acc-text='barre_aura']", {
        scaleX: scaleAura, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}

// 5. On anime la barre de Rizz (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_rizz']")) {
    gsap.to("[data-acc-text='barre_rizz']", {
        scaleX: scaleRizz, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}
}

window.Script233 = function()
{
  // 1. On connecte le code à ton module Storyline
var player = GetPlayer();

// 2. On récupère les valeurs de tes variables numériques
var currentAura = player.GetVar("aura");
var currentRizz = player.GetVar("rizz");

// 3. On calcule l'échelle et on SÉCURISE pour ne pas déborder (Maximum = 1)
// Pour l'Aura, le max reste 100
var scaleAura = Math.min(currentAura / 100, 1);

// Pour le Rizz, le max est maintenant de 300 !
var scaleRizz = Math.min(currentRizz / 300, 1);

// 4. On anime la barre d'Aura (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_aura']")) {
    gsap.to("[data-acc-text='barre_aura']", {
        scaleX: scaleAura, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}

// 5. On anime la barre de Rizz (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_rizz']")) {
    gsap.to("[data-acc-text='barre_rizz']", {
        scaleX: scaleRizz, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}
}

window.Script234 = function()
{
  // 1. On connecte le code à ton module Storyline
var player = GetPlayer();

// 2. On récupère les valeurs de tes variables numériques
var currentAura = player.GetVar("aura");
var currentRizz = player.GetVar("rizz");

// 3. On calcule l'échelle et on SÉCURISE pour ne pas déborder (Maximum = 1)
// Pour l'Aura, le max reste 100
var scaleAura = Math.min(currentAura / 100, 1);

// Pour le Rizz, le max est maintenant de 300 !
var scaleRizz = Math.min(currentRizz / 300, 1);

// 4. On anime la barre d'Aura (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_aura']")) {
    gsap.to("[data-acc-text='barre_aura']", {
        scaleX: scaleAura, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}

// 5. On anime la barre de Rizz (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_rizz']")) {
    gsap.to("[data-acc-text='barre_rizz']", {
        scaleX: scaleRizz, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}
}

window.Script235 = function()
{
  // 1. On connecte le code à ton module Storyline
var player = GetPlayer();

// 2. On récupère les valeurs de tes variables numériques
var currentAura = player.GetVar("aura");
var currentRizz = player.GetVar("rizz");

// 3. On calcule l'échelle et on SÉCURISE pour ne pas déborder (Maximum = 1)
// Pour l'Aura, le max reste 100
var scaleAura = Math.min(currentAura / 100, 1);

// Pour le Rizz, le max est maintenant de 300 !
var scaleRizz = Math.min(currentRizz / 300, 1);

// 4. On anime la barre d'Aura (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_aura']")) {
    gsap.to("[data-acc-text='barre_aura']", {
        scaleX: scaleAura, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}

// 5. On anime la barre de Rizz (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_rizz']")) {
    gsap.to("[data-acc-text='barre_rizz']", {
        scaleX: scaleRizz, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}
}

window.Script236 = function()
{
  // 1. On connecte le code à ton module Storyline
var player = GetPlayer();

// 2. On récupère les valeurs de tes variables numériques
var currentAura = player.GetVar("aura");
var currentRizz = player.GetVar("rizz");

// 3. On calcule l'échelle et on SÉCURISE pour ne pas déborder (Maximum = 1)
// Pour l'Aura, le max reste 100
var scaleAura = Math.min(currentAura / 100, 1);

// Pour le Rizz, le max est maintenant de 300 !
var scaleRizz = Math.min(currentRizz / 300, 1);

// 4. On anime la barre d'Aura (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_aura']")) {
    gsap.to("[data-acc-text='barre_aura']", {
        scaleX: scaleAura, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}

// 5. On anime la barre de Rizz (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_rizz']")) {
    gsap.to("[data-acc-text='barre_rizz']", {
        scaleX: scaleRizz, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}
}

window.Script237 = function()
{
  // 1. On connecte le code à ton module Storyline
var player = GetPlayer();

// 2. On récupère les valeurs de tes variables numériques
var currentAura = player.GetVar("aura");
var currentRizz = player.GetVar("rizz");

// 3. On calcule l'échelle et on SÉCURISE pour ne pas déborder (Maximum = 1)
// Pour l'Aura, le max reste 100
var scaleAura = Math.min(currentAura / 100, 1);

// Pour le Rizz, le max est maintenant de 300 !
var scaleRizz = Math.min(currentRizz / 300, 1);

// 4. On anime la barre d'Aura (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_aura']")) {
    gsap.to("[data-acc-text='barre_aura']", {
        scaleX: scaleAura, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}

// 5. On anime la barre de Rizz (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_rizz']")) {
    gsap.to("[data-acc-text='barre_rizz']", {
        scaleX: scaleRizz, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}
}

window.Script238 = function()
{
  // 1. On connecte le code à ton module Storyline
var player = GetPlayer();

// 2. On récupère les valeurs de tes variables numériques
var currentAura = player.GetVar("aura");
var currentRizz = player.GetVar("rizz");

// 3. On calcule l'échelle et on SÉCURISE pour ne pas déborder (Maximum = 1)
// Pour l'Aura, le max reste 100
var scaleAura = Math.min(currentAura / 100, 1);

// Pour le Rizz, le max est maintenant de 300 !
var scaleRizz = Math.min(currentRizz / 300, 1);

// 4. On anime la barre d'Aura (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_aura']")) {
    gsap.to("[data-acc-text='barre_aura']", {
        scaleX: scaleAura, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}

// 5. On anime la barre de Rizz (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_rizz']")) {
    gsap.to("[data-acc-text='barre_rizz']", {
        scaleX: scaleRizz, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}
}

window.Script239 = function()
{
  // 1. On connecte le code à ton module Storyline
var player = GetPlayer();

// 2. On récupère les valeurs de tes variables numériques
var currentAura = player.GetVar("aura");
var currentRizz = player.GetVar("rizz");

// 3. On calcule l'échelle et on SÉCURISE pour ne pas déborder (Maximum = 1)
// Pour l'Aura, le max reste 100
var scaleAura = Math.min(currentAura / 100, 1);

// Pour le Rizz, le max est maintenant de 300 !
var scaleRizz = Math.min(currentRizz / 300, 1);

// 4. On anime la barre d'Aura (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_aura']")) {
    gsap.to("[data-acc-text='barre_aura']", {
        scaleX: scaleAura, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}

// 5. On anime la barre de Rizz (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_rizz']")) {
    gsap.to("[data-acc-text='barre_rizz']", {
        scaleX: scaleRizz, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}
}

window.Script240 = function()
{
  // 1. On connecte le code à ton module Storyline
var player = GetPlayer();

// 2. On récupère les valeurs de tes variables numériques
var currentAura = player.GetVar("aura");
var currentRizz = player.GetVar("rizz");

// 3. On calcule l'échelle et on SÉCURISE pour ne pas déborder (Maximum = 1)
// Pour l'Aura, le max reste 100
var scaleAura = Math.min(currentAura / 100, 1);

// Pour le Rizz, le max est maintenant de 300 !
var scaleRizz = Math.min(currentRizz / 300, 1);

// 4. On anime la barre d'Aura (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_aura']")) {
    gsap.to("[data-acc-text='barre_aura']", {
        scaleX: scaleAura, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}

// 5. On anime la barre de Rizz (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_rizz']")) {
    gsap.to("[data-acc-text='barre_rizz']", {
        scaleX: scaleRizz, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}
}

window.Script241 = function()
{
  // 1. On connecte le code à ton module Storyline
var player = GetPlayer();

// 2. On récupère les valeurs de tes variables numériques
var currentAura = player.GetVar("aura");
var currentRizz = player.GetVar("rizz");

// 3. On calcule l'échelle et on SÉCURISE pour ne pas déborder (Maximum = 1)
// Pour l'Aura, le max reste 100
var scaleAura = Math.min(currentAura / 100, 1);

// Pour le Rizz, le max est maintenant de 300 !
var scaleRizz = Math.min(currentRizz / 300, 1);

// 4. On anime la barre d'Aura (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_aura']")) {
    gsap.to("[data-acc-text='barre_aura']", {
        scaleX: scaleAura, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}

// 5. On anime la barre de Rizz (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_rizz']")) {
    gsap.to("[data-acc-text='barre_rizz']", {
        scaleX: scaleRizz, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}
}

window.Script242 = function()
{
  // 1. On connecte le code à ton module Storyline
var player = GetPlayer();

// 2. On récupère les valeurs de tes variables numériques
var currentAura = player.GetVar("aura");
var currentRizz = player.GetVar("rizz");

// 3. On calcule l'échelle et on SÉCURISE pour ne pas déborder (Maximum = 1)
// Pour l'Aura, le max reste 100
var scaleAura = Math.min(currentAura / 100, 1);

// Pour le Rizz, le max est maintenant de 300 !
var scaleRizz = Math.min(currentRizz / 300, 1);

// 4. On anime la barre d'Aura (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_aura']")) {
    gsap.to("[data-acc-text='barre_aura']", {
        scaleX: scaleAura, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}

// 5. On anime la barre de Rizz (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_rizz']")) {
    gsap.to("[data-acc-text='barre_rizz']", {
        scaleX: scaleRizz, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}
}

window.Script243 = function()
{
  // 1. On connecte le code à ton module Storyline
var player = GetPlayer();

// 2. On récupère les valeurs de tes variables numériques
var currentAura = player.GetVar("aura");
var currentRizz = player.GetVar("rizz");

// 3. On calcule l'échelle et on SÉCURISE pour ne pas déborder (Maximum = 1)
// Pour l'Aura, le max reste 100
var scaleAura = Math.min(currentAura / 100, 1);

// Pour le Rizz, le max est maintenant de 300 !
var scaleRizz = Math.min(currentRizz / 300, 1);

// 4. On anime la barre d'Aura (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_aura']")) {
    gsap.to("[data-acc-text='barre_aura']", {
        scaleX: scaleAura, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}

// 5. On anime la barre de Rizz (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_rizz']")) {
    gsap.to("[data-acc-text='barre_rizz']", {
        scaleX: scaleRizz, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}
}

window.Script244 = function()
{
  // 1. On connecte le code à ton module Storyline
var player = GetPlayer();

// 2. On récupère les valeurs de tes variables numériques
var currentAura = player.GetVar("aura");
var currentRizz = player.GetVar("rizz");

// 3. On calcule l'échelle et on SÉCURISE pour ne pas déborder (Maximum = 1)
// Pour l'Aura, le max reste 100
var scaleAura = Math.min(currentAura / 100, 1);

// Pour le Rizz, le max est maintenant de 300 !
var scaleRizz = Math.min(currentRizz / 300, 1);

// 4. On anime la barre d'Aura (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_aura']")) {
    gsap.to("[data-acc-text='barre_aura']", {
        scaleX: scaleAura, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}

// 5. On anime la barre de Rizz (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_rizz']")) {
    gsap.to("[data-acc-text='barre_rizz']", {
        scaleX: scaleRizz, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}
}

window.Script245 = function()
{
  // 1. On connecte le code à ton module Storyline
var player = GetPlayer();

// 2. On récupère les valeurs de tes variables numériques
var currentAura = player.GetVar("aura");
var currentRizz = player.GetVar("rizz");

// 3. On calcule l'échelle et on SÉCURISE pour ne pas déborder (Maximum = 1)
// Pour l'Aura, le max reste 100
var scaleAura = Math.min(currentAura / 100, 1);

// Pour le Rizz, le max est maintenant de 300 !
var scaleRizz = Math.min(currentRizz / 300, 1);

// 4. On anime la barre d'Aura (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_aura']")) {
    gsap.to("[data-acc-text='barre_aura']", {
        scaleX: scaleAura, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}

// 5. On anime la barre de Rizz (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_rizz']")) {
    gsap.to("[data-acc-text='barre_rizz']", {
        scaleX: scaleRizz, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}
}

window.Script246 = function()
{
  // 1. On connecte le code à ton module Storyline
var player = GetPlayer();

// 2. On récupère les valeurs de tes variables numériques
var currentAura = player.GetVar("aura");
var currentRizz = player.GetVar("rizz");

// 3. On calcule l'échelle et on SÉCURISE pour ne pas déborder (Maximum = 1)
// Pour l'Aura, le max reste 100
var scaleAura = Math.min(currentAura / 100, 1);

// Pour le Rizz, le max est maintenant de 300 !
var scaleRizz = Math.min(currentRizz / 300, 1);

// 4. On anime la barre d'Aura (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_aura']")) {
    gsap.to("[data-acc-text='barre_aura']", {
        scaleX: scaleAura, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}

// 5. On anime la barre de Rizz (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_rizz']")) {
    gsap.to("[data-acc-text='barre_rizz']", {
        scaleX: scaleRizz, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}
}

window.Script247 = function()
{
  // 1. On connecte le code à ton module Storyline
var player = GetPlayer();

// 2. On récupère les valeurs de tes variables numériques
var currentAura = player.GetVar("aura");
var currentRizz = player.GetVar("rizz");

// 3. On calcule l'échelle et on SÉCURISE pour ne pas déborder (Maximum = 1)
// Pour l'Aura, le max reste 100
var scaleAura = Math.min(currentAura / 100, 1);

// Pour le Rizz, le max est maintenant de 300 !
var scaleRizz = Math.min(currentRizz / 300, 1);

// 4. On anime la barre d'Aura (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_aura']")) {
    gsap.to("[data-acc-text='barre_aura']", {
        scaleX: scaleAura, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}

// 5. On anime la barre de Rizz (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_rizz']")) {
    gsap.to("[data-acc-text='barre_rizz']", {
        scaleX: scaleRizz, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}
}

window.Script248 = function()
{
  // 1. On connecte le code à ton module Storyline
var player = GetPlayer();

// 2. On récupère les valeurs de tes variables numériques
var currentAura = player.GetVar("aura");
var currentRizz = player.GetVar("rizz");

// 3. On calcule l'échelle et on SÉCURISE pour ne pas déborder (Maximum = 1)
// Pour l'Aura, le max reste 100
var scaleAura = Math.min(currentAura / 100, 1);

// Pour le Rizz, le max est maintenant de 300 !
var scaleRizz = Math.min(currentRizz / 300, 1);

// 4. On anime la barre d'Aura (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_aura']")) {
    gsap.to("[data-acc-text='barre_aura']", {
        scaleX: scaleAura, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}

// 5. On anime la barre de Rizz (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_rizz']")) {
    gsap.to("[data-acc-text='barre_rizz']", {
        scaleX: scaleRizz, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}
}

window.Script249 = function()
{
  // 1. On connecte le code à ton module Storyline
var player = GetPlayer();

// 2. On récupère les valeurs de tes variables numériques
var currentAura = player.GetVar("aura");
var currentRizz = player.GetVar("rizz");

// 3. On calcule l'échelle et on SÉCURISE pour ne pas déborder (Maximum = 1)
// Pour l'Aura, le max reste 100
var scaleAura = Math.min(currentAura / 100, 1);

// Pour le Rizz, le max est maintenant de 300 !
var scaleRizz = Math.min(currentRizz / 300, 1);

// 4. On anime la barre d'Aura (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_aura']")) {
    gsap.to("[data-acc-text='barre_aura']", {
        scaleX: scaleAura, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}

// 5. On anime la barre de Rizz (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_rizz']")) {
    gsap.to("[data-acc-text='barre_rizz']", {
        scaleX: scaleRizz, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}
}

window.Script250 = function()
{
  // 1. On connecte le code à ton module Storyline
var player = GetPlayer();

// 2. On récupère les valeurs de tes variables numériques
var currentAura = player.GetVar("aura");
var currentRizz = player.GetVar("rizz");

// 3. On calcule l'échelle et on SÉCURISE pour ne pas déborder (Maximum = 1)
// Pour l'Aura, le max reste 100
var scaleAura = Math.min(currentAura / 100, 1);

// Pour le Rizz, le max est maintenant de 300 !
var scaleRizz = Math.min(currentRizz / 300, 1);

// 4. On anime la barre d'Aura (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_aura']")) {
    gsap.to("[data-acc-text='barre_aura']", {
        scaleX: scaleAura, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}

// 5. On anime la barre de Rizz (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_rizz']")) {
    gsap.to("[data-acc-text='barre_rizz']", {
        scaleX: scaleRizz, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}
}

window.Script251 = function()
{
  // 1. On connecte le code à ton module Storyline
var player = GetPlayer();

// 2. On récupère les valeurs de tes variables numériques
var currentAura = player.GetVar("aura");
var currentRizz = player.GetVar("rizz");

// 3. On calcule l'échelle et on SÉCURISE pour ne pas déborder (Maximum = 1)
// Pour l'Aura, le max reste 100
var scaleAura = Math.min(currentAura / 100, 1);

// Pour le Rizz, le max est maintenant de 300 !
var scaleRizz = Math.min(currentRizz / 300, 1);

// 4. On anime la barre d'Aura (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_aura']")) {
    gsap.to("[data-acc-text='barre_aura']", {
        scaleX: scaleAura, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}

// 5. On anime la barre de Rizz (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_rizz']")) {
    gsap.to("[data-acc-text='barre_rizz']", {
        scaleX: scaleRizz, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}
}

window.Script252 = function()
{
  // 1. On connecte le code à ton module Storyline
var player = GetPlayer();

// 2. On récupère les valeurs de tes variables numériques
var currentAura = player.GetVar("aura");
var currentRizz = player.GetVar("rizz");

// 3. On calcule l'échelle et on SÉCURISE pour ne pas déborder (Maximum = 1)
// Pour l'Aura, le max reste 100
var scaleAura = Math.min(currentAura / 100, 1);

// Pour le Rizz, le max est maintenant de 300 !
var scaleRizz = Math.min(currentRizz / 300, 1);

// 4. On anime la barre d'Aura (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_aura']")) {
    gsap.to("[data-acc-text='barre_aura']", {
        scaleX: scaleAura, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}

// 5. On anime la barre de Rizz (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_rizz']")) {
    gsap.to("[data-acc-text='barre_rizz']", {
        scaleX: scaleRizz, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}
}

window.Script253 = function()
{
  // 1. On connecte le code à ton module Storyline
var player = GetPlayer();

// 2. On récupère les valeurs de tes variables numériques
var currentAura = player.GetVar("aura");
var currentRizz = player.GetVar("rizz");

// 3. On calcule l'échelle et on SÉCURISE pour ne pas déborder (Maximum = 1)
// Pour l'Aura, le max reste 100
var scaleAura = Math.min(currentAura / 100, 1);

// Pour le Rizz, le max est maintenant de 300 !
var scaleRizz = Math.min(currentRizz / 300, 1);

// 4. On anime la barre d'Aura (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_aura']")) {
    gsap.to("[data-acc-text='barre_aura']", {
        scaleX: scaleAura, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}

// 5. On anime la barre de Rizz (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_rizz']")) {
    gsap.to("[data-acc-text='barre_rizz']", {
        scaleX: scaleRizz, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}
}

window.Script254 = function()
{
  // 1. On connecte le code à ton module Storyline
var player = GetPlayer();

// 2. On récupère les valeurs de tes variables numériques
var currentAura = player.GetVar("aura");
var currentRizz = player.GetVar("rizz");

// 3. On calcule l'échelle et on SÉCURISE pour ne pas déborder (Maximum = 1)
// Pour l'Aura, le max reste 100
var scaleAura = Math.min(currentAura / 100, 1);

// Pour le Rizz, le max est maintenant de 300 !
var scaleRizz = Math.min(currentRizz / 300, 1);

// 4. On anime la barre d'Aura (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_aura']")) {
    gsap.to("[data-acc-text='barre_aura']", {
        scaleX: scaleAura, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}

// 5. On anime la barre de Rizz (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_rizz']")) {
    gsap.to("[data-acc-text='barre_rizz']", {
        scaleX: scaleRizz, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}
}

window.Script255 = function()
{
  // 1. On connecte le code à ton module Storyline
var player = GetPlayer();

// 2. On récupère les valeurs de tes variables numériques
var currentAura = player.GetVar("aura");
var currentRizz = player.GetVar("rizz");

// 3. On calcule l'échelle et on SÉCURISE pour ne pas déborder (Maximum = 1)
// Pour l'Aura, le max reste 100
var scaleAura = Math.min(currentAura / 100, 1);

// Pour le Rizz, le max est maintenant de 300 !
var scaleRizz = Math.min(currentRizz / 300, 1);

// 4. On anime la barre d'Aura (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_aura']")) {
    gsap.to("[data-acc-text='barre_aura']", {
        scaleX: scaleAura, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}

// 5. On anime la barre de Rizz (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_rizz']")) {
    gsap.to("[data-acc-text='barre_rizz']", {
        scaleX: scaleRizz, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}
}

window.Script256 = function()
{
  // 1. On connecte le code à ton module Storyline
var player = GetPlayer();

// 2. On récupère les valeurs de tes variables numériques
var currentAura = player.GetVar("aura");
var currentRizz = player.GetVar("rizz");

// 3. On calcule l'échelle et on SÉCURISE pour ne pas déborder (Maximum = 1)
// Pour l'Aura, le max reste 100
var scaleAura = Math.min(currentAura / 100, 1);

// Pour le Rizz, le max est maintenant de 300 !
var scaleRizz = Math.min(currentRizz / 300, 1);

// 4. On anime la barre d'Aura (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_aura']")) {
    gsap.to("[data-acc-text='barre_aura']", {
        scaleX: scaleAura, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}

// 5. On anime la barre de Rizz (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_rizz']")) {
    gsap.to("[data-acc-text='barre_rizz']", {
        scaleX: scaleRizz, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}
}

window.Script257 = function()
{
  // 1. On connecte le code à ton module Storyline
var player = GetPlayer();

// 2. On récupère les valeurs de tes variables numériques
var currentAura = player.GetVar("aura");
var currentRizz = player.GetVar("rizz");

// 3. On calcule l'échelle et on SÉCURISE pour ne pas déborder (Maximum = 1)
// Pour l'Aura, le max reste 100
var scaleAura = Math.min(currentAura / 100, 1);

// Pour le Rizz, le max est maintenant de 300 !
var scaleRizz = Math.min(currentRizz / 300, 1);

// 4. On anime la barre d'Aura (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_aura']")) {
    gsap.to("[data-acc-text='barre_aura']", {
        scaleX: scaleAura, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}

// 5. On anime la barre de Rizz (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_rizz']")) {
    gsap.to("[data-acc-text='barre_rizz']", {
        scaleX: scaleRizz, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}
}

window.Script258 = function()
{
  // 1. On connecte le code à ton module Storyline
var player = GetPlayer();

// 2. On récupère les valeurs de tes variables numériques
var currentAura = player.GetVar("aura");
var currentRizz = player.GetVar("rizz");

// 3. On calcule l'échelle et on SÉCURISE pour ne pas déborder (Maximum = 1)
// Pour l'Aura, le max reste 100
var scaleAura = Math.min(currentAura / 100, 1);

// Pour le Rizz, le max est maintenant de 300 !
var scaleRizz = Math.min(currentRizz / 300, 1);

// 4. On anime la barre d'Aura (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_aura']")) {
    gsap.to("[data-acc-text='barre_aura']", {
        scaleX: scaleAura, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}

// 5. On anime la barre de Rizz (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_rizz']")) {
    gsap.to("[data-acc-text='barre_rizz']", {
        scaleX: scaleRizz, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}
}

window.Script259 = function()
{
  // 1. On connecte le code à ton module Storyline
var player = GetPlayer();

// 2. On récupère les valeurs de tes variables numériques
var currentAura = player.GetVar("aura");
var currentRizz = player.GetVar("rizz");

// 3. On calcule l'échelle et on SÉCURISE pour ne pas déborder (Maximum = 1)
// Pour l'Aura, le max reste 100
var scaleAura = Math.min(currentAura / 100, 1);

// Pour le Rizz, le max est maintenant de 300 !
var scaleRizz = Math.min(currentRizz / 300, 1);

// 4. On anime la barre d'Aura (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_aura']")) {
    gsap.to("[data-acc-text='barre_aura']", {
        scaleX: scaleAura, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}

// 5. On anime la barre de Rizz (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_rizz']")) {
    gsap.to("[data-acc-text='barre_rizz']", {
        scaleX: scaleRizz, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}
}

window.Script260 = function()
{
  // 1. On connecte le code à ton module Storyline
var player = GetPlayer();

// 2. On récupère les valeurs de tes variables numériques
var currentAura = player.GetVar("aura");
var currentRizz = player.GetVar("rizz");

// 3. On calcule l'échelle et on SÉCURISE pour ne pas déborder (Maximum = 1)
// Pour l'Aura, le max reste 100
var scaleAura = Math.min(currentAura / 100, 1);

// Pour le Rizz, le max est maintenant de 300 !
var scaleRizz = Math.min(currentRizz / 300, 1);

// 4. On anime la barre d'Aura (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_aura']")) {
    gsap.to("[data-acc-text='barre_aura']", {
        scaleX: scaleAura, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}

// 5. On anime la barre de Rizz (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_rizz']")) {
    gsap.to("[data-acc-text='barre_rizz']", {
        scaleX: scaleRizz, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}
}

window.Script261 = function()
{
  // 1. On connecte le code à ton module Storyline
var player = GetPlayer();

// 2. On récupère les valeurs de tes variables numériques
var currentAura = player.GetVar("aura");
var currentRizz = player.GetVar("rizz");

// 3. On calcule l'échelle et on SÉCURISE pour ne pas déborder (Maximum = 1)
// Pour l'Aura, le max reste 100
var scaleAura = Math.min(currentAura / 100, 1);

// Pour le Rizz, le max est maintenant de 300 !
var scaleRizz = Math.min(currentRizz / 300, 1);

// 4. On anime la barre d'Aura (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_aura']")) {
    gsap.to("[data-acc-text='barre_aura']", {
        scaleX: scaleAura, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}

// 5. On anime la barre de Rizz (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_rizz']")) {
    gsap.to("[data-acc-text='barre_rizz']", {
        scaleX: scaleRizz, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}
}

window.Script262 = function()
{
  // 1. On connecte le code à ton module Storyline
var player = GetPlayer();

// 2. On récupère les valeurs de tes variables numériques
var currentAura = player.GetVar("aura");
var currentRizz = player.GetVar("rizz");

// 3. On calcule l'échelle et on SÉCURISE pour ne pas déborder (Maximum = 1)
// Pour l'Aura, le max reste 100
var scaleAura = Math.min(currentAura / 100, 1);

// Pour le Rizz, le max est maintenant de 300 !
var scaleRizz = Math.min(currentRizz / 300, 1);

// 4. On anime la barre d'Aura (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_aura']")) {
    gsap.to("[data-acc-text='barre_aura']", {
        scaleX: scaleAura, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}

// 5. On anime la barre de Rizz (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_rizz']")) {
    gsap.to("[data-acc-text='barre_rizz']", {
        scaleX: scaleRizz, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}
}

window.Script263 = function()
{
  // 1. On connecte le code à ton module Storyline
var player = GetPlayer();

// 2. On récupère les valeurs de tes variables numériques
var currentAura = player.GetVar("aura");
var currentRizz = player.GetVar("rizz");

// 3. On calcule l'échelle et on SÉCURISE pour ne pas déborder (Maximum = 1)
// Pour l'Aura, le max reste 100
var scaleAura = Math.min(currentAura / 100, 1);

// Pour le Rizz, le max est maintenant de 300 !
var scaleRizz = Math.min(currentRizz / 300, 1);

// 4. On anime la barre d'Aura (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_aura']")) {
    gsap.to("[data-acc-text='barre_aura']", {
        scaleX: scaleAura, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}

// 5. On anime la barre de Rizz (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_rizz']")) {
    gsap.to("[data-acc-text='barre_rizz']", {
        scaleX: scaleRizz, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}
}

window.Script264 = function()
{
  // 1. On connecte le code à ton module Storyline
var player = GetPlayer();

// 2. On récupère les valeurs de tes variables numériques
var currentAura = player.GetVar("aura");
var currentRizz = player.GetVar("rizz");

// 3. On calcule l'échelle et on SÉCURISE pour ne pas déborder (Maximum = 1)
// Pour l'Aura, le max reste 100
var scaleAura = Math.min(currentAura / 100, 1);

// Pour le Rizz, le max est maintenant de 300 !
var scaleRizz = Math.min(currentRizz / 300, 1);

// 4. On anime la barre d'Aura (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_aura']")) {
    gsap.to("[data-acc-text='barre_aura']", {
        scaleX: scaleAura, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}

// 5. On anime la barre de Rizz (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_rizz']")) {
    gsap.to("[data-acc-text='barre_rizz']", {
        scaleX: scaleRizz, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}
}

window.Script265 = function()
{
  // 1. On connecte le code à ton module Storyline
var player = GetPlayer();

// 2. On récupère les valeurs de tes variables numériques
var currentAura = player.GetVar("aura");
var currentRizz = player.GetVar("rizz");

// 3. On calcule l'échelle et on SÉCURISE pour ne pas déborder (Maximum = 1)
// Pour l'Aura, le max reste 100
var scaleAura = Math.min(currentAura / 100, 1);

// Pour le Rizz, le max est maintenant de 300 !
var scaleRizz = Math.min(currentRizz / 300, 1);

// 4. On anime la barre d'Aura (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_aura']")) {
    gsap.to("[data-acc-text='barre_aura']", {
        scaleX: scaleAura, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}

// 5. On anime la barre de Rizz (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_rizz']")) {
    gsap.to("[data-acc-text='barre_rizz']", {
        scaleX: scaleRizz, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}
}

window.Script266 = function()
{
  // 1. On connecte le code à ton module Storyline
var player = GetPlayer();

// 2. On récupère les valeurs de tes variables numériques
var currentAura = player.GetVar("aura");
var currentRizz = player.GetVar("rizz");

// 3. On calcule l'échelle et on SÉCURISE pour ne pas déborder (Maximum = 1)
// Pour l'Aura, le max reste 100
var scaleAura = Math.min(currentAura / 100, 1);

// Pour le Rizz, le max est maintenant de 300 !
var scaleRizz = Math.min(currentRizz / 300, 1);

// 4. On anime la barre d'Aura (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_aura']")) {
    gsap.to("[data-acc-text='barre_aura']", {
        scaleX: scaleAura, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}

// 5. On anime la barre de Rizz (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_rizz']")) {
    gsap.to("[data-acc-text='barre_rizz']", {
        scaleX: scaleRizz, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}
}

window.Script267 = function()
{
  // 1. On connecte le code à ton module Storyline
var player = GetPlayer();

// 2. On récupère les valeurs de tes variables numériques
var currentAura = player.GetVar("aura");
var currentRizz = player.GetVar("rizz");

// 3. On calcule l'échelle et on SÉCURISE pour ne pas déborder (Maximum = 1)
// Pour l'Aura, le max reste 100
var scaleAura = Math.min(currentAura / 100, 1);

// Pour le Rizz, le max est maintenant de 300 !
var scaleRizz = Math.min(currentRizz / 300, 1);

// 4. On anime la barre d'Aura (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_aura']")) {
    gsap.to("[data-acc-text='barre_aura']", {
        scaleX: scaleAura, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}

// 5. On anime la barre de Rizz (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_rizz']")) {
    gsap.to("[data-acc-text='barre_rizz']", {
        scaleX: scaleRizz, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}
}

window.Script268 = function()
{
  // 1. On connecte le code à ton module Storyline
var player = GetPlayer();

// 2. On récupère les valeurs de tes variables numériques
var currentAura = player.GetVar("aura");
var currentRizz = player.GetVar("rizz");

// 3. On calcule l'échelle et on SÉCURISE pour ne pas déborder (Maximum = 1)
// Pour l'Aura, le max reste 100
var scaleAura = Math.min(currentAura / 100, 1);

// Pour le Rizz, le max est maintenant de 300 !
var scaleRizz = Math.min(currentRizz / 300, 1);

// 4. On anime la barre d'Aura (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_aura']")) {
    gsap.to("[data-acc-text='barre_aura']", {
        scaleX: scaleAura, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}

// 5. On anime la barre de Rizz (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_rizz']")) {
    gsap.to("[data-acc-text='barre_rizz']", {
        scaleX: scaleRizz, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}
}

window.Script269 = function()
{
  // 1. On connecte le code à ton module Storyline
var player = GetPlayer();

// 2. On récupère les valeurs de tes variables numériques
var currentAura = player.GetVar("aura");
var currentRizz = player.GetVar("rizz");

// 3. On calcule l'échelle et on SÉCURISE pour ne pas déborder (Maximum = 1)
// Pour l'Aura, le max reste 100
var scaleAura = Math.min(currentAura / 100, 1);

// Pour le Rizz, le max est maintenant de 300 !
var scaleRizz = Math.min(currentRizz / 300, 1);

// 4. On anime la barre d'Aura (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_aura']")) {
    gsap.to("[data-acc-text='barre_aura']", {
        scaleX: scaleAura, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}

// 5. On anime la barre de Rizz (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_rizz']")) {
    gsap.to("[data-acc-text='barre_rizz']", {
        scaleX: scaleRizz, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}
}

window.Script270 = function()
{
  // 1. On connecte le code à ton module Storyline
var player = GetPlayer();

// 2. On récupère les valeurs de tes variables numériques
var currentAura = player.GetVar("aura");
var currentRizz = player.GetVar("rizz");

// 3. On calcule l'échelle et on SÉCURISE pour ne pas déborder (Maximum = 1)
// Pour l'Aura, le max reste 100
var scaleAura = Math.min(currentAura / 100, 1);

// Pour le Rizz, le max est maintenant de 300 !
var scaleRizz = Math.min(currentRizz / 300, 1);

// 4. On anime la barre d'Aura (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_aura']")) {
    gsap.to("[data-acc-text='barre_aura']", {
        scaleX: scaleAura, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}

// 5. On anime la barre de Rizz (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_rizz']")) {
    gsap.to("[data-acc-text='barre_rizz']", {
        scaleX: scaleRizz, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}
}

window.Script271 = function()
{
  // 1. On connecte le code à ton module Storyline
var player = GetPlayer();

// 2. On récupère les valeurs de tes variables numériques
var currentAura = player.GetVar("aura");
var currentRizz = player.GetVar("rizz");

// 3. On calcule l'échelle et on SÉCURISE pour ne pas déborder (Maximum = 1)
// Pour l'Aura, le max reste 100
var scaleAura = Math.min(currentAura / 100, 1);

// Pour le Rizz, le max est maintenant de 300 !
var scaleRizz = Math.min(currentRizz / 300, 1);

// 4. On anime la barre d'Aura (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_aura']")) {
    gsap.to("[data-acc-text='barre_aura']", {
        scaleX: scaleAura, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}

// 5. On anime la barre de Rizz (On vérifie avant sa présence)
if(document.querySelector("[data-acc-text='barre_rizz']")) {
    gsap.to("[data-acc-text='barre_rizz']", {
        scaleX: scaleRizz, // On utilise la variable sécurisée calculée plus haut
        transformOrigin: "left center",
        duration: 2,
        ease: "power2.out"
    });
}
}

};
