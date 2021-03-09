canvas=document.getElementById('myCanvas');
ctx=canvas.getContext("2d");
road_array=["https://i.postimg.cc/bv5d35nK/racing.jpg"];
random_number=Math.floor(Math.random()*3);
car1_width=100;
car1_height=100;
car2_width=100;
car2_height=100;
bg_img=road_array[random_number];
car1_img="https://i.postimg.cc/YqdnnNX1/car1.png";
car2_img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgm9FBQ87HuUQosWThyjOupbB5nv8wp0QVLw&usqp=CAU";
car1_x=10;
car1_y=10;
car2_x=10;
car2_y=10;
function add(){
    bg_new_img=new Image();//defining a variable with a new image
    bg_new_img.onload= upload_bg;// setting a function, onloading this variable
    bg_new_img.src=bg_img;// load image

    car1_new_img=new Image();//defining a variable with a new image
    car1_new_img.onload=upload_car1;// setting a function, onloading this variable
    car1_new_img.src=car1_img;// load image

    car2_new_img=new Image();//defining a variable with a new image
    car2_new_img.onload=upload_car2;// setting a function, onloading this variable
    car2_new_img.src=car1_img;// load image
}

function upload_bg(){
    ctx.drawImage(bg_new_img, 0, 0, canvas.width, canvas.height);
}

function upload_car1(){
    ctx.drawImage(car1_new_img, car1_x, car1_y, car1_width, car1_height);
}

function upload_car2(){
    ctx.drawImage(car2_new_img, car2_x, car2_y, car2_width, car2_height);
}

window.addEventListener("car1_keydown", car1_down);
function car1_down(e){
    key_press=e.keyCode;
    console.log(key_press);
    if(key_press == '38'){
           car1_up();
        console.log("car1 up arrow is pressed");
    }

    if(key_press == '40'){
        car1_down();
        console.log("car1 down arrow is pressed");
    }

    if(key_press == '37'){
        car1_left();
        console.log("car1 left arrow is pressed");
    }

    if(key_press == '39'){
        car1_right();
        console.log("car1 right arrow is pressed");
    }
}

window.addEventListener("car2_keydown", car1_down);
function car1_down(e){
    key_press=e.keyCode;
    console.log(key_press);
    if(key_press == '87'){
           car2_up();
        console.log("car2 up arrow is pressed");
    }

    if(key_press == '83'){
        car2_down();
        console.log("car2 down arrow is pressed");
    }

    if(key_press == '65'){
        car2_left();
        console.log("car2 left arrow is pressed");
    }

    if(key_press == '68'){
        car2_right();
        console.log("car2 right arrow is pressed");
    }
}