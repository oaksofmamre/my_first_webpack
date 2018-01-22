require("./style.css");

//DC: note this greeting hot-reloads
const greeting =
	"Hello, webpack! Configuations include loaders, plugins, use of dev server, embedded stylesheets, images, code-splitting and tree-shaking. Stephen Curry says: 'Alright!!'";
(() => {
	console.log(greeting);
	const d = document.createElement("div");
	d.classList.add("myDiv");
	d.innerText = greeting;
	document.body.appendChild(d);
})();

const imgSrc = require("./image.jpg");

// Inside the IIFE ...

// Create the image
const image = document.createElement("img");
image.src = imgSrc;
image.height = 400;
document.body.appendChild(image);
