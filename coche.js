	const imagenCoche = new Image();
	imagenCoche.src = "coche0.png";
	class Coche {
		constructor(){
			this.x = 150;
			this.y = 200;
			this.vy = 0;
			this.originalWidth = 941;
			this.originalHeight = 680;
			this.width = this.originalWidth/20;
			this.height = this.originalHeight/20;
			this.weight = 0;
		}
		update(){
			if (this.y > canvas.height - (this.height * 3)){ //cambiar distancia de lados de choque//
				this.y = canvas.height - (this.height * 3);
				this.vy = 0;
			} else {
				this.vy += this.weight;
				this.y += this.vy;
			}

			if (this.y < 0 + this.height){
				this.y = 0 + this.height;
				this.vy = 0;
			}

			if(U_Pressed) this.up();
			if(D_Pressed) this.down();

		}
		draw(){
			ctx.fillStyle = "red";
			//ctx.fillRect(this.x, this.y , this.width, this.height); CUADRADO INTERACTIVO
			ctx.drawImage(imagenCoche, 0, 0, this.originalWidth, this.originalHeight, this.x -20, this.y - 12, this.width * 45, this.height * 45); //PONER IMAGEN DEL COCHE ENCIMA DEL CUADRADO

		}
		up(){
			this.vy -= .25;
		}
		down(){
			this.vy += .25;
		}
	}
	const coche = new Coche();
