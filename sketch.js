var ball;
var database, ballPosition;

function setup(){
    createCanvas(500,500);
    database = firebase.database();
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";

    bpRef = database.ref("ball/position");

    bpRef.on("value", (store)=>{
        ballPosition = store.val()
        ball.x = ballPosition.x;
        ball.y = ballPosition.y;
    })
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
}

function changePosition(x,y){
    database.ref("ball/position").set({
        x: ballPosition.x + x,
        y: ballPosition.y + y
    })
}
