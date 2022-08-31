//crea una variable que se llame SpeechRecognition que sea igual con window.webkitSpeechRecognition; este comando se usa para reconocer lo que decimos y convertirlo a texto, almacenamos el comando en la variable
var SpeechRecognition = window.webkitSpeechRecognition;
 //crea una variable que se llame recognition que sea igual con new SpeechRecognition(); new es la palabra clave para crear Web Speech API 
var recognition = new SpeechRecognition();
//crea una variable que se llame Textbox que sea ingual con document.getElementById("textbox")
 var Textbox = document.getElementById("textbox");
//crea una funcion que se llame start
function start()
{
//usa la variable Textbox y el comnado innerHTML para vaciar el contenido de la variable
Textbox.innerHTML = "" ;
// usa la variable recognition y llama la funcion start dentro de la variable para convertir la voz en texto
recognition.start();
}

recognition.onresult = function (event) 
{
    console.log(event); 
   var Content = event.results[0][0].transcript;//event.results tiene el output de nuestra voz a texto, y vamos a almacenar esto en una variable.
       Textbox.innerHTML = Content;
       console.log(Content);
       if (Content == "Toma mi selfie") {
        console.log("no te muevas estoy tomando tu selfie");
        speak();
       }
   }

function speak()
{
//crea una variable synth para almacenar el comando window.speechSynthesis; Esta es la API que utilizaremos para convertir el texto a voz.
var synth = window.speechSynthesis;
//usa la variable speak_data con el comando document.getElementById("textbox").innerHTML; para almacenar el texto obtenido en Html del campo de texto 
speak_data = "tomando tu selfie en, 5, 4, 3, 2, 1, 0, selfie tomada"
//crea una variable utterThis para guardar el texto convertido a voz, new SpeechSynthesisUtterance(speak_data); esta es la función de la API que convertirá el texto a voz.
var utterThis = new SpeechSynthesisUtterance(speak_data); 
// usa la variable synth con la función speak , esta es la función predefinida de la API, agrega el parametro utterThis el cual convierte el valor del texto a voz para que el sistema lo reproduzca en voz.
synth.speak(utterThis);
//usa el comando  Webcam.attach(camera); para accesar a la camara web
Webcam.attach(camera);

setTimeout(function(){
    take_selfie(); 
    save();
},
 6000
// el 6000 es la cantidad de milisegundos que va a esperar para tomar la selfie
 );
} 
// usa la variable camera y el comando document.getElementById para guardar lo que tenemos en la div coon el id camera 
camera = document.getElementById("camera");
// usa el comando Webcam.set para establecer las características de la camara, la sintaxis lleva ({   establece las características         })
Webcam.set({width:360, height:250, image_format:'jpeg', jpeg_cuality:90});

function take_selfie(){
Webcam.snap(function(data_uri)
{
document.getElementById("result").innerHTML = '<img  id = "selfie_image" src ="'+ data_uri +'" / >';
}
);
}

function save() {
 link = document.getElementById("link");
 image = document.getElementById("selfie_image").src;
 link.href = image ;
 link.click();   
}


function next()
{
    window.location = "index2.html";
}