const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content";

container.appendChild(content);

// add p with red text to container

const redP = document.createElement("p");
redP.textContent = "Hey I'm red!"
redP.style.color = "red";

container.appendChild(redP);

// add h3 with blue text 

const blueH3 = document.createElement("h3");
blueH3.textContent = "I'm a blue h3!";
blueH3.style.color = "blue";

container.appendChild(blueH3);

// create a div which has styling as well as an h1 and p tag appended to it

const newDiv = document.createElement("div");
newDiv.setAttribute("style", "border: black; backgroundColor: pink");

const newH1 = document.createElement("h1");
newH1.textContent = "I'm in a div";

const newP = document.createElement("p");
newP.textContent = "ME TOO!";

newDiv.appendChild(newH1);
newDiv.appendChild(newP);

container.appendChild(newDiv);