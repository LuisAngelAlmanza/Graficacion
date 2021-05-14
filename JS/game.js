    limiteArriba=150;
    limiteAbajo=innerHeight;  
    let b = new Ball(innerWidth/2, innerHeight/2,30,4,limiteArriba,limiteAbajo);
    let jugador1 = new player(1,limiteAbajo/2,300,1000,limiteArriba,limiteAbajo);
    let jugador2 = new player(2,limiteAbajo/2,300,1000,limiteArriba,limiteAbajo);
class Game{
    constructor(){
       
    }

    display(){
        fill('white');
        rect(300,limiteArriba,710,limiteAbajo-10);
        fill('black');

        this.mostrarPuntaje();
        this.mostrarIntrucciones();
        b.display();
		jugador1.display();
		jugador2.display();
        this.puntuacion();

        line(300,652, 1010, 652);

        <!-- Linea del medio -->
        
        line(660,150, 660, 170);
        line(660,200, 660, 220);
        line(660,250, 660, 270);
        line(660,300, 660, 320);
        line(660,350, 660, 370);
        line(660,400, 660, 420);
        line(660,450, 660, 470);
        line(660,500, 660, 520);
        line(660,550, 660, 570);
        line(660,600, 660, 620);
        line(660,645, 660, 670);
    }

    mostrarPuntaje(){
        textSize(30);
        text("PUNTUACIÓN", 550, 50)
        text("Jugador 1 :", 350, 100);
        text("Jugador 2 :", 750, 100);
        text(jugador1.getPuntaje(), 530, 102);
        text(jugador2.getPuntaje(), 930, 102);
    }

    mostrarIntrucciones(){
        textSize(25);
        text('W : ↑',140,350);
        text('S : ↓',145,400);
        text('Movimiento Jugador 1',30,270);

        textSize(25);
        text('Flecha ↑',1110,350);
        text('Flecha ↓',1110,400);
        text('Movimiento Jugador 2',1050,270);


    }

    puntuacion(){
            if(b.getX()<jugador1.getX()){
                jugador2.setPuntaje(1);
                this.reiniciar();
            }
           if(b.getX()>jugador2.getX()){
                jugador1.setPuntaje(1);
                this.reiniciar();
            }    
    }
    reiniciar(){
    b.setX(innerWidth/2);
    b.setY(innerHeight/2);
    jugador1.posicion();
    jugador2.posicion();
    }   
}