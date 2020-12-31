	const obstaculosAray = [];

	class Obstaculos {
		constructor(){
			this.top = (Math.random() * canvas.height/3) + 30;
			this.bottom = (Math.random() * canvas.height/3) + 30;
			this.x = canvas.width;
			this.width = 20;
			this.counted = false;

		}
		draw(){
			if(score < 5){
			ctx.fillStyle = "blue";
			} else{
			ctx.fillStyle = "red";
			}
			ctx.fillRect(this.x, 0, this.width, this.top);
			ctx.fillRect(this.x, canvas.height - this.bottom, this.width, this.bottom);
		}
		update(){
			this.x -= gamespeed;
			if(!this.counted && this.x < coche.x){
				score++;
				
				this.counted = true;
			}
			this.draw();
		}

	}

	function handleObstaculos(){
		if(frame%35 === 0){
			obstaculosAray.unshift(new Obstaculos);
		}
		for(let i = 0; i < obstaculosAray.length; i++){
			obstaculosAray[i].update();
		}
		if(obstaculosAray.length > 30){
			obstaculosAray.pop(obstaculosAray[0]);
		}
	}
