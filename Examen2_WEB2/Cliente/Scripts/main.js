var apiURL = "http://localhost:48906/api/";
var productos = '';
var inventario = '';
var factura =Array();
     function crearCliente() {
         debugger;
         var cedula = document.getElementById('cedula').value;
         var nombre = document.getElementById('nombre').value;
         var apellido = document.getElementById('apellido').value;
         var fecha_nacimiento = document.getElementById('fecha_nacimiento').value;
         parseInt(fecha_nacimiento);
         var direccion = document.getElementById('direccion').value;
         var estadocivil = document.getElementById('estadocivil').value;
         var sexo = document.getElementById('sexo').value;
         var fechaingreso =document.getElementById('fechaingreso').value;
         parseInt(fechaingreso);
         var tipo = document.getElementById('tipo').value;
         var descuento = document.getElementById('descuento').value;
         $.post(apiURL + "clientes", {
             cedula: cedula, nombre: nombre, apellido: apellido, fechaingreso: cedula, direccion: direccion,
             estadocivil: estadocivil, sexo: sexo, fechanacimiento:cedula, tipo: tipo, descuento: descuento
         })
                       .done(function (data) {
                           debugger;
                           verCliente();
                       });
        }
     function editarCliente(id) {
         $.get("http://localhost:48906/api/" + "clientes",{id:id})
       .done(function (data) {
           editarClientes(data,id);
       });
     }
     function eliminarCliente(id) {
         $.delete("http://localhost:48906/api/" + "clientes",{id:id})
        .done(function (data) {
            verCliente();
        });
     }
     
     function verCliente() {
         debugger;
         $.get("http://localhost:48906/api/" + "clientes")
              .done(function (data) {
                  MostrarClientes(data);
              });
     }
     function MostrarClientes(data) {
         debugger;
         var table = "table";
         table += "<table id='tableClientes'>";
         table += "<thead>";
         table += "<th>Cedula</th>";
         table += "<th>Nombre</th>";
         table += "<th>Apellido</th>";
         table += "<th>Fecha Nacimiento</th>";
         table += "<th>Dirección</th>";
         table += "<th>Estado Civil</th>";
         table += "<th>Sexo</th>";
         table += "<th>FechaIngreso</th>";
         table += "<th>Tipo</th>";
         table += "<th>Descuento</th>";
         table += "</thead>";
         for (var i = 0; i < data.elementos.length; i++) {
             table += "<tr>";
             table += "<td  id='" + data.elementos[i].id + "'>" + data.elementos[i].cedula + "'><a onClick='eliminarCliente"+(data.elementos[i].id)+"'>" + "Eliminar</a><a onClick='editarCliente"+(data.elementos[i].id)+"'>" + "Editar</a></td>";
             table += "<td  id='" + data.elementos[i].id + "'>" + data.elementos[i].nombre + "'><a onClick='eliminarCliente" + (data.elementos[i].id) + "'>" + "Eliminar</a><a onClick='editarCliente"+(data.elementos[i].id)+"'>" + "Editar</a></td>";
             table += "<td  id='" + data.elementos[i].id + "'>" + data.elementos[i].apellido + "'><a onClick='eliminarCliente" + (data.elementos[i].id) + "'>" + "Eliminar</a><a onClick='editarCliente"+(data.elementos[i].id)+"'>" + "Editar</a></td>";
             table += "<td  id='" + data.elementos[i].id + "'>" + data.elementos[i].fecha_nacimiento + "'><a onClick='eliminarCliente" + (data.elementos[i].id) + "'>" + "Eliminar</a><a onClick='editarCliente"+(data.elementos[i].id)+"'>" + "Editar</a></td>";
             table += "<td  id='" + data.elementos[i].id + "'>" + data.elementos[i].direccion + "'><a onClick='eliminarCliente" + (data.elementos[i].id) + "'>" + "Eliminar</a><a onClick='editarCliente"+(data.elementos[i].id)+"'>" + "Editar</a></td>";
             table += "<td  id='" + data.elementos[i].id + "'>" + data.elementos[i].estadocivil + "'><a onClick='eliminarCliente" + (data.elementos[i].id) + "'>" + "Eliminar</a><a onClick='editarCliente"+(data.elementos[i].id)+"'>" + "Editar</a></td>";
             table += "<td  id='" + data.elementos[i].id + "'>" + data.elementos[i].sexo + "'><a onClick='eliminarCliente" + (data.elementos[i].id) + "'>" + "Eliminar</a><a onClick='editarCliente"+(data.elementos[i].id)+"'>" + "Editar</a></td>";
             table += "<td  id='" + data.elementos[i].id + "'>" + data.elementos[i].fechaingreso + "'><a onClick='eliminarCliente" + (data.elementos[i].id) + "'>" + "Eliminar</a><a onClick='editarCliente"+(data.elementos[i].id)+"'>" + "Editar</a></td>";
             table += "<td  id='" + data.elementos[i].id + "'>" + data.elementos[i].tipo + "'><a onClick='eliminarCliente" + (data.elementos[i].id) + "'>" + "Eliminar</a><a onClick='editarCliente"+(data.elementos[i].id)+"'>" + "Editar</a></td>";
             table += "<td  id='" + data.elementos[i].id + "'>" + data.elementos[i].descuento + "'><a onClick='eliminarCliente" + (data.elementos[i].id) + "'>" + "Eliminar</a><a onClick='editarCliente"+(data.elementos[i].id)+"'>" + "Editar</a></td>";
             table += "</tr>";
         }
         table += "</table>";
         $("#container").html(table);
         debugger;
     }
     function editarClientes(data,id){
             var editar="<form><div class='form-group'><label for='cedula'>Cedula</label>"+
                 "<input type='text' class='form-control' id='cedula' placeholder='Cedula' required"+data.elementos[i].cedula+"></div>"+
                 "<div class='form-group'><label for='nombre'>Nombre</label>"+
                 "<input type='text' class='form-control' id='nombre' placeholder='Nombre' required"+data.elementos[i].nombre>+"</div>"+
                 "<div class='form-group'><label for='Apellido'>Apellido</label><input type='text'class='form-control' id='apellido' placeholder='Apellido' required"+data.elementos[i].apellido+"></div>"+
                 "<div class=form-group'><label for='date'>date</label><input type='date' class='form-control' id='fecha_nacimiento' placeholder='FechaNacimiento' required"+data.elementos[i].fecha_nacimiento>"</div>"+
                 "<div class='form-group'><label for='dirección'>Dirección</label>"+
                 "<input type='text' class='form-control' id='direccion' placeholder='Dirección' required"+data.elementos[i].direccion>+"</div>"+
                 "<div class='form-group'><label for='Estado Civil'>Estado Civil</label>"+
                 "<input type='text' class='form-control' id='estadocivil' placeholder='Estado Civil' required"+data.elementos[i].estadocivil>+"</div>"+
                 "<div class='form-group'><label for='Sexo'>Sexo</label>"+
                 "<input type='text' class='form-control' id='sexo' placeholder='Sexo' required"+data.elementos[i].sexo>"+</div>"+
                 "<div class='form-group'><label for='Ingreso'>Ingreso</label>"+
                 "<input type='date' class='form-control' id='fechaingreso' placeholder='Fecha de Ingreso' required"+data.elementos[i].fechaingreso>"+</div>"+
                 "<div class='form-group'><label for='tipo'>Tipo</label>"+
                 "<input type='text' class='form-control' id='tipo' placeholder='Tipo' required"+data.elementos[i].tipo>"+</div>"+
                 "<div class='form-group'><label for='descuento'>Descuento</label>"+
                 "<input type='text' class='form-control' id='descuento' placeholder='Descuento' required"+data.elementos[i].descuento>"+</div>"+
                 "<button type='submit' onclick='actualizarCliente("+id+");' class='btn btn-default'>Guardar</button></form>";
     }
     function actualizarCliente(id){
         var cedula = document.getElementById('cedula').value;
         var nombre = document.getElementById('nombre').value;
         var apellido = document.getElementById('apellido').value;
         var fecha_nacimiento = document.getElementById('fecha_nacimiento').value;
         parseInt(fecha_nacimiento);
         var direccion = document.getElementById('direccion').value;
         var estadocivil = document.getElementById('estadocivil').value;
         var sexo = document.getElementById('sexo').value;
         var fechaingreso = document.getElementById('fechaingreso').value;
         parseInt(fechaingreso);
         var tipo = document.getElementById('tipo').value;
         var descuento = document.getElementById('descuento').value;
         $.put(apiURL + "clientes", {
             id:id,cedula: cedula, nombre: nombre, apellido: apellido, fechanacimiento: fecha_nacimiento, direccion: direccion,
             estadocivil: estadocivil,sexo:sexo, fechaingreso: fechaingreso, tipo: tipo, descuento:descuento})
                       .done(function (data) {
                           verCliente();
                       });
     }
     function crearProducto() {
         debugger;
         var nombre = document.getElementById('nombre').value;
         var marca = document.getElementById('marca').value;
         var familia = document.getElementById('familia').value;
         var casa_fabricacion = document.getElementById('casadefabricacion').value;
         var tipounidad = document.getElementById('tipounidad').value;
         var departamento = document.getElementById('departamento').value;
         var activo = document.getElementById('activo').value;
         var fechaingreso = document.getElementById('fechaingreso').value;
         parseInt(fechaingreso);
         var unidad = document.getElementById('unidad').value;
         var impuesto = document.getElementById('impuestos').value;
         var costo = document.getElementById('costo').value;
         $.post(apiURL + "productos", {
             nombre: nombre, marca: marca, familia: familia, casa_fabricacion: casa_fabricacion, tipounidad: tipounidad,
             departamento: departamento,activo:activo, fechaingreso: fechaingreso, unidad: unidad, impuesto:impuesto,costo:costo})
                       .done(function (data) {
                           verProducto();
                       });

     }
     function editarProducto(id) {
         $.get("http://localhost:48906/api/" + "productos",{id:id})
       .done(function (data) {
           editarProductos(data,id);
       });
     }
     function eliminarProducto(id) {
         $.delete("http://localhost:48906/api/" + "productos",{id:id})
        .done(function (data) {
            verProducto();
        });
     }
     
     function verProducto() {
         $.get("http://localhost:48906/api/" + "productos")
              .done(function (data) {
                  MostrarProductos(data);
              });
     }
     function MostrarProductos(data) {
         var color = "table";
         table += "<table id='tableProductos'>";
         table += "<thead>";
         table += "<th>Nombre</th>";
         table += "<th>Marca</th>";
         table += "<th>Familia</th>";
         table += "<th>Casa Fabricación</th>";
         table += "<th>Tipo Unidad</th>";
         table += "<th>Departamento</th>";
         table += "<th>Activo</th>";
         table += "<th>FechaIngreso</th>";
         table += "<th>Unidad</th>";
         table += "<th>Impuesto</th>";
         table += "<th>Costo</th>";
         table += "</thead>";
         for (var i = 0; i < data.elementos.length; i++) {
             table += "<tr>";
             table += "<td  id='" + data.elementos[i].idproducto + "'>" + data.elementos[i].nombre + "'><a onClick='eliminarProducto"+(data.elementos[i].idproducto)+"'>" + "Eliminar</a><a onClick='editarProducto"+(data.elementos[i].idproducto)+"'>" + "Editar</a></td>";
             table += "<td  id='" + data.elementos[i].idproducto + "'>" + data.elementos[i].marca + "'><a onClick='eliminarProducto" + (data.elementos[i].idproducto) + "'>" + "Eliminar</a><a onClick='editarProducto"+(data.elementos[i].idproducto)+"'>" + "Editar</a></td>";
             table += "<td  id='" + data.elementos[i].idproducto + "'>" + data.elementos[i].familia + "'><a onClick='eliminarProducto" + (data.elementos[i].idproducto) + "'>" + "Eliminar</a><a onClick='editarProducto"+(data.elementos[i].idproducto)+"'>" + "Editar</a></td>";
             table += "<td  id='" + data.elementos[i].idproducto + "'>" + data.elementos[i].casa_fabricacion + "'><a onClick='eliminarProducto" + (data.elementos[i].idproducto) + "'>" + "Eliminar</a><a onClick='editarProducto"+(data.elementos[i].idproducto)+"'>" + "Editar</a></td>";
             table += "<td  id='" + data.elementos[i].idproducto + "'>" + data.elementos[i].tipounidad + "'><a onClick='eliminarProducto" + (data.elementos[i].idproducto) + "'>" + "Eliminar</a><a onClick='editarProducto"+(data.elementos[i].idproducto)+"'>" + "Editar</a></td>";
             table += "<td  id='" + data.elementos[i].idproducto + "'>" + data.elementos[i].departamento + "'><a onClick='eliminarProducto" + (data.elementos[i].idproducto) + "'>" + "Eliminar</a><a onClick='editarProducto"+(data.elementos[i].idproducto)+"'>" + "Editar</a></td>";
             table += "<td  id='" + data.elementos[i].idproducto + "'>" + data.elementos[i].activo + "'><a onClick='eliminarProducto" + (data.elementos[i].idproducto) + "'>" + "Eliminar</a><a onClick='editarProducto"+(data.elementos[i].idproducto)+"'>" + "Editar</a></td>";
             table += "<td  id='" + data.elementos[i].idproducto + "'>" + data.elementos[i].fechaingreso + "'><a onClick='eliminarProducto" + (data.elementos[i].idproducto) + "'>" + "Eliminar</a><a onClick='editarProducto"+(data.elementos[i].idproducto)+"'>" + "Editar</a></td>";
             table += "<td  id='" + data.elementos[i].idproducto + "'>" + data.elementos[i].unidad + "'><a onClick='eliminarProducto" + (data.elementos[i].idproducto) + "'>" + "Eliminar</a><a onClick='editarProducto"+(data.elementos[i].idproducto)+"'>" + "Editar</a></td>";
             table += "<td  id='" + data.elementos[i].idproducto + "'>" + data.elementos[i].impuesto + "'><a onClick='eliminarProducto" + (data.elementos[i].idproducto) + "'>" + "Eliminar</a><a onClick='editarProducto"+(data.elementos[i].idproducto)+"'>" + "Editar</a></td>";
             table += "<td  id='" + data.elementos[i].idproducto + "'>" + data.elementos[i].costo + "'><a onClick='eliminarProducto" + (data.elementos[i].idproducto) + "'>" + "Eliminar</a><a onClick='editarProducto" + (data.elementos[i].idproducto) + "'>" + "Editar</a></td>";
             table += "</tr>";
         }
         table += "</table>";
         $("#container").html(table);
     }
     function editarProductos(data,id){
         var editar="<form><div class='form-group'><label for='nombre'>Nombre</label>"+
             "<input type='text' class='form-control' id='nombre' placeholder='Nombre' required"+data.elementos[0].nombre+"></div>"+
             "<div class='form-group'><label for='nombre'>Marca</label>"+
             "<input type='text' class='form-control' id='marca' placeholder='Marca' required"+data.elementos[0].marca>+"</div>"+
             "<div class='form-group'><label for='Familia'>Familia</label><input type='text'class='form-control' id='familia' placeholder='familia' required"+data.elementos[0].familia+"></div>"+
             "<div class=form-group'><label for='date'>casa_fabricacion</label><input type='text' class='form-control' id='casadefabricacion' placeholder='Casa de Fabricación' required"+data.elementos[0].casa_fabricacion>"</div>"+
             "<div class='form-group'><label for='tipounidad'>Tipounidad</label>"+
             "<input type='text' class='form-control' id='tipounidad' placeholder='Tipo Unidad' required"+data.elementos[0].tipounidad+"</div>"+
             "<div class='form-group'><label for='Departamento'>Departamento</label>"+
             "<input type='text' class='form-control' id='departamento' placeholder='Departamento' required"+data.elementos[0].departamento>+"</div>"+
             "<div class='form-group'><label for='Activo'>Activo</label>"+
             "<input type='text' class='form-control' id='activo' placeholder='activo' required"+data.elementos[0].activo>"+</div>"+
             "<div class='form-group'><label for='Ingreso'>Ingreso</label>"+
             "<input type='date' class='form-control' id='fechaingreso' placeholder='Fecha de Ingreso' required"+data.elementos[0].fechaingreso>"+</div>"+
             "<div class='form-group'><label for='unidad'>Unidad</label>"+
             "<input type='text' class='form-control' id='unidad' placeholder='Unidad' required"+data.elementos[0].unidad>"+</div>"+
             "<div class='form-group'><label for='impuesto'>Impuesto</label>"+
             "<input type='text' class='form-control' id='impuesto' placeholder='Impuesto' required"+data.elementos[0].impuesto>"+</div>"+
             "<div class='form-group'><label for='impuesto'>Costo</label>" +
             "<input type='text' class='form-control' id='costo' placeholder='Costo' required" + data.elementos[0].costo > "+</div>" +
             "<button type='submit' onclick='actualizarProducto(" + id + ");' class='btn btn-default'>Guardar</button></form>";
     }
     function actualizarProducto(id){
         var nombre = document.getElementById('nombre').value;
         var marca = document.getElementById('marca').value;
         var familia = document.getElementById('familia').value;
         var casa_fabricacion = document.getElementById('casadefabricacion').value;
         var tipounidad = document.getElementById('tipounidad').value;
         var departamento = document.getElementById('departamento').value;
         var activo = document.getElementById('activo').value;
         var fechaingreso = document.getElementById('fechaingreso').value;
         parseInt(fechaingreso);
         var unidad = document.getElementById('unidad').value;
         var impuesto = document.getElementById('impuestos').value;
         var costo = document.getElementById('costo').value;
         $.put(apiURL + "productos", {
             id:id,nombre: nombre,marca:marca, familia:familia, casa_fabricacion: casa_fabricacion, tipounidad: tipounidad,
             departamento: departamento,activo:activo, fechaingreso: fechaingreso, unidad: unidad, impuesto:impuesto,costo:costo})
                       .done(function (data) {
                           verProducto();
                       });
     }
     function traerProducto() {
         $.get("http://localhost:48906/api/" + "productos")
         .done(function (data) {
             AgregarProductoINventario(data);
         });
     }
     function AgregarProductoInventario(data) {
         var lista = "";
         for (var i = 0; i < data.length; i++) {
             productos += { 'id': data.elementos[i].idproducto,'producto':data.elementos[i].nombre };
             lista += " <option>"+ data.elementos[i].nombre + "</option>";
         }
         debugger;
         $("#producto").html(lista);
     }
     function crearInventario() {
         debugger;
         var producto = document.getElementById('producto').value;
         for (var i = 0; i < productos.length; i++) {
             if (productos[i].nombre == producto) {
                 producto = productos[i].idproducto;
                 break;
             }
         }
         var cantidad = document.getElementById('cantidad').value;
         var cantidadminima = document.getElementById('cantidadminima').value;
         var cantidadmaxima = document.getElementById('cantidadmaxima').value;
         var gravadoexcepto = document.getElementById('gravadoexcepto').value;
         $.post(apiURL + "inventarios", {
             idproducto: producto, cantidad: cantidad, cantidadminima: cantidadminima,
             cantidadmaxima: cantidadmaxima, gravadoexcepto: gravadoexcepto
         })
                       .done(function (data) {
                           verInventario();
                       });

     }
     function editarInventario(id) {
         $.get("http://localhost:48906/api/" + "inventarios", { id: id })
       .done(function (data) {
           editarInventarios(data, id);
       });
     }
     function eliminarInventario(id) {
         $.delete("http://localhost:48906/api/" + "inventarios", { id: id })
        .done(function (data) {
            verInventario();
        });
     }

     function verInventario() {
         $.get("http://localhost:48906/api/" + "inventarios")
              .done(function (data) {
                  MostrarInventario(data);
              });
     }

     function MostrarInventario(data) {
         var table = "table";
         table += "<table id='tableInventario'>";
         table += "<thead>";
         table += "<th>Id Producto</th>";
         table += "<th>Cantidad</th>";
         table += "<th>Cantidad Mínima</th>";
         table += "<th>Cantidad Máxima</th>";
         table += "<th>Gravabo Excepto</th>";
         table += "</thead>";
         for (var i = 0; i < data.elementos.length; i++) {
             table += "<tr>";
             table += "<td  id='" + data.elementos[i].idproducto + "'>" + data.elementos[i].idproducto + "'><a onClick='eliminarInventario" + (data.elementos[i].idproducto) + "'>" + "Eliminar</a><a onClick='editarInventario" + (data.elementos[i].idproducto) + "'>" + "Editar</a></td>";
             table += "<td  id='" + data.elementos[i].idproducto + "'>" + data.elementos[i].cantidad + "'><a onClick='eliminarInventario" + (data.elementos[i].idproducto) + "'>" + "Eliminar</a><a onClick='editarInventario" + (data.elementos[i].idproducto) + "'>" + "Editar</a></td>";
             table += "<td  id='" + data.elementos[i].idproducto + "'>" + data.elementos[i].cantidadminima + "'><a onClick='eliminarInventario" + (data.elementos[i].idproducto) + "'>" + "Eliminar</a><a onClick='editarInventario" + (data.elementos[i].idproducto) + "'>" + "Editar</a></td>";
             table += "<td  id='" + data.elementos[i].idproducto + "'>" + data.elementos[i].cantidadmaxima + "'><a onClick='eliminarInventario" + (data.elementos[i].idproducto) + "'>" + "Eliminar</a><a onClick='editarInventario" + (data.elementos[i].idproducto) + "'>" + "Editar</a></td>";
             table += "<td  id='" + data.elementos[i].idproducto + "'>" + data.elementos[i].gravadoexcepto + "'><a onClick='eliminarInventario" + (data.elementos[i].idproducto) + "'>" + "Eliminar</a><a onClick='editarInventario" + (data.elementos[i].idproducto) + "'>" + "Editar</a></td>";
             table += "</tr>";
         }
         table += "</table>";
         $("#container").html(table);
     }
     function editarInventarios(data, id) {
         for (var i = 0; i < productos.length; i++) {
             if (productos[i].id == id) {
                 var product = productos[i].producto;
                 break;
             }
         }
         var editar = "<form><div class='form-group'><label for='producto'></label>" +
             "<input type='text' class='form-control' id='producto' placeholder='Producto' required" +product+ "></div>" +
             "<div class='form-group'><label for='cantidad'>Cantidad</label>" +
             "<input type='text' class='form-control' id='cantidad' placeholder='Cantidad' required" + data.elementos[0].cantidad > +"</div>" +
             "<div class='form-group'><label for='cantidadminima'>Cantidad Mínima</label><input type='text'class='form-control' id='cantidadminima' placeholder='Cantidad Mínima' required" + data.elementos[0].cantidadminima + "></div>" +
             "<div class=form-group'><label for='date'>cantidadmaxima</label><input type='text' class='form-control' id='cantidadmaxima' placeholder='Cantidad Máxima' required" + data.elementos[0].cantidadmaxima > "</div>" +
             "<div class='form-group'><label for='Gravado'>Gravado</label>" +
             "<input type='text' class='form-control' id='gravado' placeholder='Grabado' required" + data.elementos[0].gravadoexcepto + "</div>" +
             "<button type='submit' onclick='actualizarInventario(" + id + ");' class='btn btn-default'>Guardar</button></form>";
     }
     function actualizarInventario(id) {
         var producto = document.getElementById('producto').value;
         for (var i = 0; i < productos.length; i++) {
             if (productos[i].nombre == producto) {
                 producto = productos[i].idproducto;
                 break;
             }
         }
         var cantidad = document.getElementById('cantidad').value;
         var cantidadminima = document.getElementById('cantidadminima').value;
         var cantidadmaxima = document.getElementById('cantidadmaxima').value;
         var gravadoexcepto = document.getElementById('gravadoexcepto').value;
         $.put(apiURL + "inventarios", {
             idproducto: producto, cantidad: cantidad, cantidadminima: cantidadminima,
             cantidadmaxima: cantidadmaxima, gravadoexcepto: gravadoexcepto
         })
                        .done(function (data) {
                            verInventario();
                        });
     }

     function agregarProducto() {
         var nombre = document.getElementById('nombrecliente').value;
         var selecto = document.getElementById('productos').options.selectedIndex;
         $.get("http://localhost:53075/api/" + "inventarios")
         .done(function (data) {
             for (var i = 0; i < data.elementos.length; i++) {
                 var fecha = new Date();
                 if (data.elementos[i].nombre == selecto) {
                     document.getElementById('impuesto').value = data.elementos.impuesto;
                     document.getElementById('total').value = data.elementos.impuesto;
                     document.getElementById('subtotal').value = 0;
                     var producto = "";
                     producto += '<td>' + selecto + '<td>';
                     producto += '<td>' + fecha.getDate() + '<td>';
                 }
             }
             $("#cuerpo").html(producto);
         });
     }

     function loadProductos() {
         $.get("http://localhost:53075/api/" + "inventarios")
         .done(function (formulario) {
             for (var i = 0; i < formulario.elementos.length; i++) {
                 var opcion = "";
                 opcion += '<option>' + formulario.elementos[i].nombre; +'</option>';
             }
             $("#productos").html(opcion);
         });
     }