function setup()
{
    canvas = createCanvas(640,480);
    canvas.position(110,250);
    video = createCapture(VIDEO)
    video.hide();
}

function draw()
{
    image(video,160,117,320,240);
    fill(227, 217, 84);

    rect(110, 55, 420, 30);
    rect(110, 385, 420, 30);

    rect(55, 385, 30, -300);
    rect(555, 385, 30, -300);

    fill(54, 224, 216);
    circle(70,70,100);
    circle(570,70,100);

    circle(70,400,100);
    circle(570,400,100);
}