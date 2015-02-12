var canvas;
var stage;

// Game Objects
var game;
var background;
var spinButton;

function init() {
    canvas = document.getElementById("canvas");
    stage = new createjs.Stage(canvas);
    stage.enableMouseOver(20); // Enable mouse events
    createjs.Ticker.setFPS(60); // 60 frames per second
    createjs.Ticker.addEventListener("tick", gameLoop);

    main();
}

function gameLoop() {
    stage.update(); // Refreshes our stage
}

// Event handlers
function spinButtonOut() {
    spinButton.alpha = 1.0;
    console.log("mouseout");
}

function spinButtonOver() {
    spinButton.alpha = 0.4;
    console.log("mouseover");
}

function spinReels() {
    // Add Spin Reels code here
    console.log("spin button clicked");
}

function createUI() {
    // instantiate my background
    background = new createjs.Bitmap("assets/images/background.png");
    game.addChild(background);

    // Spin Button
    spinButton = new createjs.Bitmap("assets/images/spinButton.png");
    spinButton.x = 323;
    spinButton.y = 376;
    game.addChild(spinButton);

    spinButton.addEventListener("click", spinReels);
    spinButton.addEventListener("mouseover", spinButtonOver);
    spinButton.addEventListener("mouseout", spinButtonOut);
}

// Our Game Kicks off in here
function main() {
    // instantiate my game container
    game = new createjs.Container();
    game.x = 23;
    game.y = 6;

    // Create Slotmachine User Interface
    createUI();

    stage.addChild(game);
}
//# sourceMappingURL=game.js.map
