var canvas = new fabric.Canvas('myCanvas');

player_x = 10;
player_y = 10;

superhero_image_width = 30;
superhero_image_height = 30;

var player_object = "";
var superhero_image_object = "";

function player_update() {

    fabric.Image.fromURL("player.png", function (Img) {
        player_object = Img;

        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top: player_y,
            left: player_x,
        });
        canvas.add(player_object);
    });

}

function new_image(get_image) {

    fabric.Image.fromURL(get_image, function (Img) {
        superhero_image_object = Img;

        superhero_image_object.scaleToWidth(superhero_image_width);
        superhero_image_object.scaleToHeight(superhero_image_height);
        superhero_image_object.set({
            top: player_y,
            left: player_x
        });
        canvas.add(superhero_image_object);

    });
}
window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if (e.shiftKey == true && keyPressed == '80') {
        console.log("p and shift pressed together");
        superhero_image_width = superhero_image_width + 10;
        superhero_image_height = superhero_image_height + 10;
        document.getElementById("current_width").innerHTML = superhero_image_width;
        document.getElementById("current_height").innerHTML = superhero_image_height;
    }
    if (e.shiftKey && keyPressed == '77') {
        console.log("m and shift pressed together")
        superhero_image_width = superhero_image_width - 10;
        superhero_image_height = superhero_image_height - 10;
        document.getElementById("current_width").innerHTML = superhero_image_width;
        document.getElementById("current_height").innerHTML = superhero_image_height;
    }
    if (keyPressed == '38') {
        up();
        console.log("up");
    }
    if (keyPressed == '40') {

        down();
        console.log("down");
    }

    if (keyPressed == '37') {
        left();
        console.log("left");
    }
    if (keyPressed == '39') {
        right();
        console.log("right");
    }

    if (keyPressed == '73') {
        new_image('ironman_left_hand.png')
        console.log("I")
    }
    if (keyPressed == '82') {
        new_image('ironman_right_hand.png')
        console.log("R")
    }

    if (keyPressed == '79') {
        new_image('ironman_legs.png')
        console.log("O")
    }

    if (keyPressed == '78') {
        new_image('ironman_face.png')
        console.log("N")
    }

    if (keyPressed == '77') {
        new_image('ironman_body.png')
        console.log("M")
    }

    if (keyPressed == '72') {
        new_image('hulk_face.png')
        console.log("H")
    }

    if (keyPressed == '85') {
        new_image('hulk_body.png')
        console.log("U")
    }
    if (keyPressed == '76') {
        new_image('hulk_legs.png')
        console.log("L")
    }
    if (keyPressed == '75') {
        new_image('hulk_left_hand.png')
        console.log("K")
    }
    if (keyPressed == '74') {
        new_image('hulk_right_hand.png')
        console.log("J")
    }


    if (keyPressed == '83') {
        new_image('spiderman_face.png')
        console.log("S")
    }

    if (keyPressed == '80') {
        new_image('spiderman_body.png')
        console.log("P")
    }
    if (keyPressed == '65') {
        new_image('spiderman_legs.png')
        console.log("A")
    }
    if (keyPressed == '68') {
        new_image('spiderman_left_hand.png')
        console.log("D")
    }
    if (keyPressed == '69') {
        new_image('spiderman_right_hand.png')
        console.log("E")
    }

    if (keyPressed == '84') {
        new_image('thor_face.png')
        console.log("T")
    }
    if (keyPressed == '72') {
        new_image('thor_left_hand.png')
        console.log("H")
    }
    if (keyPressed == '71') {
        new_image('thor_right_hand.png')
        console.log("G")
    }



}


function up() {

    if(player_y >=15) {
    player_y = player_y - superhero_image_height;
    console.log("superhero image height = " + superhero_image_height);
    console.log("when Up arrow key is pressed, X = " + player_x + " , Y = " + player_y);
    canvas.remove(player_object);
    player_update()
    }
    
    }

    function down() {
        if(player_y <=450) {
        player_y = player_y + superhero_image_height;
        console.log("superhero image height = " + superhero_image_height);
        console.log("when Down arrow key is pressed, X = " + player_x + " , Y =" + player_y);
        canvas.remove(player_object);
        player_update();
        }
        
        
        }


        function left() {
            if(player_x >0) {
            player_x = player_x - superhero_image_width;
            console.log("superhero image width = " + superhero_image_width);
            console.log("when Left arrow key is pressed , X = " + player_x + ", Y =" +player_y);
            canvas.remove(player_object);
            player_update();
            }
            
            
            }
            
            function right() {
            if(player_x <=850) {
            player_x = player_x + superhero_image_width;
            console.log("superhero image width = " + superhero_image_width);
            console.log("when Right arrow key is pressed, X = " + player_x + " , Y =" + player_y);
            canvas.remove(player_object);
            player_update();
            }
            
            
            }

            