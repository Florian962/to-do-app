class Note {
  constructor(title) {
    this.title = title;
    this.element = this.createElement(title);
  }
  
  createElement(title){
    //creeer de elementen in de div
    let newNote = document.createElement('div');
    newNote.classname = "card";
    let txt = document.createElement('p');
    let remove = document.createElement('a');
    // steek txt en remove in note
    newNote.append(txt);
    newNote.append(remove);
     
    txt.textContent = title;
    remove.textContent = "remove";
    
    
    remove.addEventListener('click', this.remove.bind(newNote));

    return newNote;
  }
  
  add(){
      let wrapper = document.getElementsByClassName('notes')[0];
      wrapper.appendChild(this.element);
      
  }
  
  saveToStorage(){
    // HINT🤩
    // localStorage only supports strings, not arrays
    // if you want to store arrays, look at JSON.parse and JSON.stringify
  }
  
  remove(){
    // HINT🤩 the meaning of 'this' was set by bind() in the createElement function
    // in this function, 'this' will refer to the current note element
  } 
}

class App {
  constructor() {
    console.log("👊🏼 The Constructor!");
    // clicking the button should work
    this.btnAdd = document.querySelector("#btnAddNote");
    let click = this.btnAdd; 
    // pressing the enter key should also work
    this.txtAdd = document.querySelector("#txtAddNote");
    let enter = this.txtAdd.addEventListener("keyup", function (e) {
    if (e.keyCode == 13) {
        // Do something
        click.click();
        console.log("geenterd");
    }
});
      
    this.btnAdd.addEventListener("click", this.createNote.bind(this));
      //binden dient om de content van this ...
    this.loadNotesFromStorage();
  }
  
  loadNotesFromStorage() {
    // HINT🤩
    // load all notes from storage here and add them to the screen
    // something like note.add() in a loop would be nice
  }
   
  createNote(e){
    // this function should create a new note by using the Note() class
    let txtInput = document.getElementById("txtAddNote").value; 
    let note = new Note(txtInput);
    // HINT🤩
    note.add();
    note.saveToStorage();
    this.reset(); //verwijst naar de app klasse
  }
  
  reset(){
    document.getElementById("reset").reset();
  }
  
}

let app = new App();
