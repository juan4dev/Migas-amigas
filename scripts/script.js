var ES = [
  { name: "INICIO", value: "Inicio" },
  { name: "PRODUCTOS", value: "Productos" },
  { name: "CONTACTO", value: "Contacto" },
  {
    name: "HOME_INFO",
    value:
      "Somos panaderos artesanos, nos gusta el pan en la cesta del pan. El que sabe y huele como el del horno de nuestros abuelos…",
  },
  { name: "PANADERÍA", value: "Panadería" },
  { name: "PASTELERÍA", value: "Pastelería" },
  { name: "EMPANADAS", value: "Empanadas" },
];
var PR = [
  { name: "INICIO", value: "Inicial" },
  { name: "PRODUCTOS", value: "Produtos" },
  { name: "CONTACTO", value: "Contacto" },
  {
    name: "HOME_INFO",
    value:
      "Somos padeiros artesanais, gostamos de pão no cesto do pão. Aquele que sabe e cheira como o forno dos nossos avós.",
  },
  { name: "PANADERÍA", value: "Padaria" },
  { name: "PASTELERÍA", value: "Panificação" },
  { name: "EMPANADAS", value: "Empanadas" },
];

function Ocultar_Section(selection,string_section) {
    
  var allPanels = document.querySelectorAll(".flex-container-home ");
  var allH1s= document.querySelectorAll(".h1_section");

  allH1s.forEach(h1 => {
    console.log(h1.getAttribute("data-string"));     
      if(h1.getAttribute("data-string") != string_section){
        h1.style.display = "none";
      }else{
        h1.style.display = "block";
      }
  });

  
    allPanels.forEach(panel => {
        if(panel.id !== selection){
            panel.style.display = "none";
        }else{
            panel.style.display = "flex";
        }
    });
}

function changeLanguage(idiom) {
  console.log(idiom);

  var idioma_actual = idiom == "ES" ? ES : PR;

  var elementos = document.querySelectorAll(".js-translate");

  elementos.forEach((element) => {
    var actual_element = element.getAttribute("data-string").toUpperCase();
    var actual_element_traslate = idioma_actual.find(
      (e) => e.name == actual_element
    ).value;
    element.innerHTML = actual_element_traslate;
    console.log(actual_element_traslate);
  });
}
