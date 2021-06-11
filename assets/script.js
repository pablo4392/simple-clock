(function(){
	var horaActual = function(){
		//generamos las variables para trabajar en js
		var fecha = new Date(),
			horas = fecha.getHours(),
			minutos = fecha.getMinutes(),
			segundos = fecha.getSeconds(),
			ampm,
			diaSemana = fecha.getDay(),
			dia = fecha.getDate(),
			mes = fecha.getMonth(),
			year = fecha.getFullYear();
			
		// generamos variables para ir agregando al documento html
		var pHoras = document.getElementById("horas"),
			pMinutos = document.getElementById("minutos"),
			pSegundos = document.getElementById("segundos"),
			pampm = document.getElementById("ampm"),
			pDiaSemana = document.getElementById("diaSemana"),
			pDia = document.getElementById("dia"),
			pMes = document.getElementById("mes"),
			pYear = document.getElementById("year");
			
		// para el dia de la semana creamos un array ya que "getDay" unicamente muestra un numero 
		var semana = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];
		pDiaSemana.textContent = semana[diaSemana];
		
		pDia.textContent = dia; //sentencia para ingresar el dia
		
	    //para el mes pasa algo similar que en la semana solo obtenemos un numero por lo que debemos generar un array 
		var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
		pMes.textContent = meses[mes];
		
		pYear.textContent = year; //sentencia para agregar el año 
		
		if(horas >= 12){ //con esta condicional haremos que el reloj sea de 12 horas 
			horas = horas- 12;
			ampm = "PM";
		}else {
			ampm = "AM";
		}
		if(horas == 0){ //esta condicional hara que cuando sean las 0 horas muestre 12 am
			horas = 12;
		}
		pHoras.textContent = horas;
		pampm.textContent = ampm;
		
		//agregamos esta condicional ya que al mostrar la hora en menos de 10 minutos solo muestra un numero por lo cual agregamos un cero para darle un mejor formato a la hora  
		if (minutos < 10){minutos = "0" + minutos}; 
		// aplicamos el mismo metodo para los segundos 
		if (segundos < 10){segundos = "0" + segundos}; 
		pMinutos.textContent = minutos;
		pSegundos.textContent = segundos;
	};
	
	horaActual();
	intervalo= setInterval(horaActual, 1000);
	
}())