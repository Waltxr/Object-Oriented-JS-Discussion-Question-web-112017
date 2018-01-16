class Unicorn {
  constructor(name, occupation) {
    this.name = name;
    this.occupation = occupation;
    this.health = 1000
  }

  restart() {
    while (eventArea.hasChildNodes()) {
        eventArea.removeChild(eventArea.lastChild);
      }
    this.createDiv("new", "Out on the street, ready to go!")
  }

  createDiv(className, phrase) {
    let div = document.createElement("div");
    div.appendChild(document.createTextNode(phrase));
    eventArea.prepend(div);
    imageArea.className = className;
  }

}

const eventArea = document.getElementById('event_area')
const imageArea = document.getElementById('image_area')

const unicorn = new Unicorn('jerry', 'goat hearder')

document.getElementById('restart').addEventListener("click",()=> unicorn.restart())
document.getElementById('attack').addEventListener("click",()=> unicorn.createDiv("attack", "'ATTAAAAAAAAAK!''"))
document.getElementById('defend').addEventListener("click",()=> unicorn.createDiv("defend", "You put sunglasses on."))
document.getElementById('heal').addEventListener("click",()=> unicorn.createDiv("heal", "You feel refreshed after yoga."))
document.getElementById('breakdance').addEventListener("click",()=> unicorn.createDiv("breakdance", "It's really spinning class"))
document.getElementById('eat').addEventListener("click",()=> unicorn.createDiv("eat", "You've gained 1000 health points."))
