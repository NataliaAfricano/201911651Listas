console.log("Script loaded!")

var form1 = document.getElementById("form-1");

form1.addEventListener("submit", function(event){
  event.preventDefault();
  
  var results = document.getElementById("answer");
  var newtext = form1.elements["input_text"].value;


  linkedlist.add(newtext);
  console.log(linkedlist);

  
  results.innerHTML += "<p>" + linkedlist.showlist() + "</p>";


});

var test1 = document.getElementById("answer"); 


test1.addEventListener("click", function(event){
  event.preventDefault();

  var results = document.getElementById("answer2");

  var newtext = form1.elements["input_text"].value;
  linkedlist.removeData(this)
  console.log(linkedlist);

  
  results.innerHTML += "<p>" + linkedlist.showlist() + "</p>";


    

}); 

class Node{
// Recibe por parametros la informacion que se quiere guardar (data) dentro del nodo
// y la siguiente es una referencia al siguiente nodo

  constructor(data, next){
    this.data = data;
    this.next = next;
  };
};

class LinkedList {
  constructor(){
    // Propiedad de cabeza o el inicio de la lista se inicializa en null 
    //y un tamaño size

    this.head = null;
    this.size = 0;
  };

  //Agregar elementos a la lista

 add(data){
  
    // Creamos una nueva variable de Tipo Node 
    const newNode = new Node(data, null);
    //Revisamos una condicion la cual es si la cabeza esta basia
    if (!this.head) {
      this.head = newNode
    }else{
    // creamos una nueva variable para tener registro del valor actual de la head
      var current = this.head;
      while(current.next){
        current = current.next;
      };
      current.next = newNode;
    }
    this.size++;
  }

  showlist(){
   if (this.size == 0) {
      return null;
   } 
   var current = this.head;
   let result = ' ';
   while (current){
    result += current.data + '\n'
    current = current.next;
   };
   return result;
  };

//Remover elementos de la lista

  removeData(data){
      let current = this.head;
      let previous = null;

      while(current!= null){
        if (current.data === data ) {
            if (!previous) {
              this.head = current.next;
            }else{
              previous.next = current.next;
            };
            this.else--;
            return current.data;
        };
        previous = current;
        current = current.next;
      };
      return null;
  }

};
 


const linkedlist = new LinkedList(); 
console.log(linkedlist);

linkedlist.add(12);
linkedlist.add(99);
linkedlist.add(37);
console.log(linkedlist);
