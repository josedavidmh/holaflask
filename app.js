function enviar(){
    var contenido =document.querySelector('#contenido')
    var v1 =document.querySelector('#t1').value
    var v2 =document.querySelector('#t2').value
    var v3 =document.querySelector('#t3').value
    var url=""
    if (document.querySelector('#opcion1').checked)
       url='http://127.0.0.1:5000'
       // url='https://josedavidmh.pythonanywhere.com'
    else if(document.querySelector('#opcion2').checked)
        //url='https://josedavidmh.pythonanywhere.com/notas/'+v1+'/'+v2+'/'+v3
        url='http://127.0.0.1:5000/notas/'+v1+'/'+v2+'/'+v3
    else if(document.querySelector('#opcion3').checked)
        //url='https://josedavidmh.pythonanywhere.com/edades/'+v1
        url='http://127.0.0.1:5000/edades/'+v1
    else if(document.querySelector('#opcion4').checked)
       // url='https://josedavidmh.pythonanywhere.com/arreglos/'+v1+'/'+v2+'/'+v3
        url='http://127.0.0.1:5000/arreglos/'+v1+'/'+v2+'/'+v3
    else
        swal("Mensaje", "Seleccione una opción", "warning");
   
    fetch(url)
    .then (function(response1){
        if (response1.ok){
            return response1.text()
        }else{
            throw "Error en la llamada"
        }
            })
            .then(function(texto){
                console.log(texto)
                //document.write(texto)
                contenido.innerHTML=texto        
               //swal("Mensaje", "Proceso realizado correctamente", "success");   
             })

            .catch(function(error){
                console.log(error)
                document.write(error)
                swal(error)

                swal({
                title: "Advertencia",
                text: error,
                icon: "warning",
                buttons: true,
                dangerMode: true,
                })
            })  
        }
        //opcion para mensaje
        function opcion1(){
            var t1 =document.querySelector('#t1')
            var t2 =document.querySelector('#t2')
            var t3 =document.querySelector('#t3')
            t1.disabled=true
            t2.disabled=true
            t3.disabled=true
            t1.value=""
            t2.value=""
            t3.value=""
            t1.placeholder=""
            t2.placeholder=""
            t3.placeholder=""
        }
        //opcion para notas    ##python

        function opcion2(){        /*## def opcion2():*/
            var t1 =document.querySelector('#t1')
            var t2 =document.querySelector('#t2')
            var t3 =document.querySelector('#t3')
            t1.disabled=false
            t2.disabled=false
            t3.disabled=false
            t1.value=""
            t2.value=""
            t3.value=""
            t1.placeholder="Nota 1"
            t2.placeholder="Nota 2"
            t3.placeholder="Nota 3"
        }

        function opcion3(){
            var t1 =document.querySelector('#t1')
            var t2 =document.querySelector('#t2')
            var t3 =document.querySelector('#t3')
            t1.disabled=false
            t2.disabled=true
            t3.disabled=true
            t1.value=""
            t2.value=""
            t3.value=""
            t1.placeholder="Edad"
            t2.placeholder=""
            t3.placeholder=""
        }

        function opcion4(){
            var t1 =document.querySelector('#t1')
            var t2 =document.querySelector('#t2')
            var t3 =document.querySelector('#t3')
            t1.disabled=false
            t2.disabled=false
            t3.disabled=false
            t1.value=""
            t2.value=""
            t3.value=""
            t1.placeholder="Valores permitidos"
            t2.placeholder="Columnas"
            t3.placeholder="Filas"
        }