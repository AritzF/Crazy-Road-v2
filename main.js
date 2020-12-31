	const canvas = document.getElementById("canvas1");
	const ctx = canvas.getContext("2d");
	canvas.width= 600;
	canvas.height= 400;

	let U_Pressed= false;
	let D_Pressed= false;
	let angle = 0;
	let hue = 0;
	let frame = 0;
	let score = 0;
	let gamespeed = 10;
	let score0 = 0;
	
	/*const gradient = ctx.createLinearGradient(0, 0, 0, 70);
	gradient.addColorStop("0.4", "#fff");
	gradient.addColorStop("0.5", "#000");
	gradient.addColorStop("0.55", "#4040ff");
	gradient.addColorStop("0.6", "#000");
	gradient.addColorStop("0.9", "#fff");*/



	const background = new Image();
	background.src = "carretera.png";
	
	const background2 = new Image();
	background2.src = "carretera_nieve.png";
	

	const carretera = {
		x1: 0,
		x2: canvas.width,
		y: 0,
		width: canvas.width,
		height: canvas.height

	}
	function handleBackground(){
		if (carretera.x1 <= -carretera.width + gamespeed) carretera.x1 = carretera.width;
		else (carretera.x1 -= gamespeed);
		if (carretera.x2 <= -carretera.width + gamespeed) carretera.x2 = carretera.width;
		else (carretera.x2 -= gamespeed);

		ctx.drawImage(background, carretera.x1, carretera.y, (carretera.width)+(score+5), carretera.height);
		if((score >= 20 && score < 40) || (score >= 60 && score < 80)){//temporal
		ctx.drawImage(background, carretera.x2, carretera.y, (carretera.width)+(score+1), carretera.height);
		
		} else{
		ctx.drawImage(background2, carretera.x1, carretera.y, (carretera.width)+(score+1), carretera.height);
		ctx.drawImage(background2, carretera.x2, carretera.y, (carretera.width)+(score+1), carretera.height);
		}
	}


	function animate()
	{
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		//ctx.fillRect(10, canvas.height - 90, 50, 50);
		handleBackground();
		coche.update();
		coche.draw();
		ctx.fillStyle = "black";
		ctx.font ="70px Georgia";
		ctx.strokeText(score, 450, 70);
		ctx.fillText(score, 450, 70);
		handleObstaculos();	
		
		handleColision();
		if(handleColision()) return;

		if (score > score0){
		gamespeed = gamespeed + 0.05;
		score0 = score;
		}

		requestAnimationFrame(animate);
		hue++;
		frame++;

	}
	animate();

	window.addEventListener("keydown", function(e)
	{
		if (e.code === "ArrowUp") U_Pressed = true;
	});

	window.addEventListener("keyup", function(e)
	{
		if (e.code === "ArrowUp") U_Pressed = false;
	});

	window.addEventListener("keydown", function(e)
	{
		if (e.code === "ArrowDown") D_Pressed = true;
	});

	window.addEventListener("keyup", function(e)
	{
		if (e.code === "ArrowDown") D_Pressed = false;
	});


	const explosion06 = new Image();
	explosion06.src = "explosion06.png";
	function handleColision(){
		for(let i = 0; i < obstaculosAray.length; i++){
			if(coche.x < obstaculosAray[i].x + obstaculosAray[i].width && coche.x + coche.width > obstaculosAray[i].x && ((coche.y < 0 + obstaculosAray[i].top && coche.y + coche.height > 0) || (coche.y > canvas.height - obstaculosAray[i].bottom && coche.y + coche.height < canvas.height))){
				// detectar colision
				ctx.drawImage(explosion06, coche.x - 45, coche.y - 45, 100, 100);

				alert('GAME OVER');
				window.open("GalduPantalla.html","_self");
				return true;
			}
		}
	}
