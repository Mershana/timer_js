'use strict' //строгий режим
		
		function start(){
			window.timeId = window.setInterval(time, 1000);
			document.getElementById('start').disabled = true;
			document.getElementById('stop').disabled = false;
			document.getElementById('reset').disabled = false;
		}
		

		function stop(){
			window.clearInterval(window.timeId);
			document.getElementById('start').disabled = false;
			document.getElementById('stop').disabled = true;
			document.getElementById('reset').disabled = false;
		}

		// function reset(){
		// 	window.resetCounter(window.timeId);
		// 	document.getElementById('start').disabled = false;
		// 	document.getElementById('stop').disabled = false;
		// 	document.getElementById('resert').disabled = true;
		// }
		 
		function time(){
			let time = document.getElementById('time');
			time.innerHTML = parseInt(time.innerHTML)+1;
		}
	