var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["75ad7831-a81b-4455-8114-c559e9365183","74359d52-013e-4bf4-b415-02235840f8d0","d8c2d02c-b0fc-416b-8b3a-cc96fff69b2b","7b038f6e-5ed6-4f36-8c6a-17f02611bf7f","289790d5-c7a0-4692-8007-6603290d395c","b59d488a-ab72-463c-94f2-c10dc1f955eb","591fb63c-657a-4c64-a495-0a765058a7df","70c5ce50-6e4a-45e5-9606-3df566225f0a","caf0ace3-8864-4138-8417-a94ecd8e8bc5","fd086793-78cf-401c-a04d-d75055850457","fa31d2d7-ac9a-4216-b5c0-57a12e6e0bde"],"propsByKey":{"75ad7831-a81b-4455-8114-c559e9365183":{"name":"bg","sourceUrl":"assets/v3/animations/XY2Eg-wzlz06s14ns67LSLdhO_XlGfDp6Z03ywlLza0/75ad7831-a81b-4455-8114-c559e9365183.png","frameSize":{"x":168,"y":299},"frameCount":1,"looping":true,"frameDelay":4,"version":"eeh_C.AHIvlBmgq0QPrxhiHgV25CgZJ9","loadedFromSource":true,"saved":true,"sourceSize":{"x":168,"y":299},"rootRelativePath":"assets/v3/animations/XY2Eg-wzlz06s14ns67LSLdhO_XlGfDp6Z03ywlLza0/75ad7831-a81b-4455-8114-c559e9365183.png"},"74359d52-013e-4bf4-b415-02235840f8d0":{"name":"arrow.png_1","sourceUrl":"assets/v3/animations/XY2Eg-wzlz06s14ns67LSLdhO_XlGfDp6Z03ywlLza0/74359d52-013e-4bf4-b415-02235840f8d0.png","frameSize":{"x":94,"y":453},"frameCount":1,"looping":true,"frameDelay":4,"version":"nki7LizRnyHnSzHreIoTGSW.oTOqNJiC","loadedFromSource":true,"saved":true,"sourceSize":{"x":94,"y":453},"rootRelativePath":"assets/v3/animations/XY2Eg-wzlz06s14ns67LSLdhO_XlGfDp6Z03ywlLza0/74359d52-013e-4bf4-b415-02235840f8d0.png"},"d8c2d02c-b0fc-416b-8b3a-cc96fff69b2b":{"name":"bow.png_1","sourceUrl":"assets/v3/animations/XY2Eg-wzlz06s14ns67LSLdhO_XlGfDp6Z03ywlLza0/d8c2d02c-b0fc-416b-8b3a-cc96fff69b2b.png","frameSize":{"x":427,"y":127},"frameCount":1,"looping":true,"frameDelay":4,"version":".mbqjgmOrvkPVdidn4YgranoRmGKkPxH","loadedFromSource":true,"saved":true,"sourceSize":{"x":427,"y":127},"rootRelativePath":"assets/v3/animations/XY2Eg-wzlz06s14ns67LSLdhO_XlGfDp6Z03ywlLza0/d8c2d02c-b0fc-416b-8b3a-cc96fff69b2b.png"},"7b038f6e-5ed6-4f36-8c6a-17f02611bf7f":{"name":"boy.png_1","sourceUrl":"assets/v3/animations/XY2Eg-wzlz06s14ns67LSLdhO_XlGfDp6Z03ywlLza0/7b038f6e-5ed6-4f36-8c6a-17f02611bf7f.png","frameSize":{"x":225,"y":225},"frameCount":1,"looping":true,"frameDelay":4,"version":"Z7OVfIXd5c31cVTOmcih8XXZM06GH4RZ","loadedFromSource":true,"saved":true,"sourceSize":{"x":225,"y":225},"rootRelativePath":"assets/v3/animations/XY2Eg-wzlz06s14ns67LSLdhO_XlGfDp6Z03ywlLza0/7b038f6e-5ed6-4f36-8c6a-17f02611bf7f.png"},"289790d5-c7a0-4692-8007-6603290d395c":{"name":"girl.png_1","sourceUrl":"assets/v3/animations/XY2Eg-wzlz06s14ns67LSLdhO_XlGfDp6Z03ywlLza0/289790d5-c7a0-4692-8007-6603290d395c.png","frameSize":{"x":492,"y":507},"frameCount":1,"looping":true,"frameDelay":4,"version":"1wbFIoPRBUvzVaGarO5OOmWJijlGNYUS","loadedFromSource":true,"saved":true,"sourceSize":{"x":492,"y":507},"rootRelativePath":"assets/v3/animations/XY2Eg-wzlz06s14ns67LSLdhO_XlGfDp6Z03ywlLza0/289790d5-c7a0-4692-8007-6603290d395c.png"},"b59d488a-ab72-463c-94f2-c10dc1f955eb":{"name":"yellow_balloon.png_1","sourceUrl":"assets/v3/animations/XY2Eg-wzlz06s14ns67LSLdhO_XlGfDp6Z03ywlLza0/b59d488a-ab72-463c-94f2-c10dc1f955eb.png","frameSize":{"x":233,"y":217},"frameCount":1,"looping":true,"frameDelay":4,"version":"h9fZU9Y0lkfcnufnJF0VF6gwNVFDtP93","loadedFromSource":true,"saved":true,"sourceSize":{"x":233,"y":217},"rootRelativePath":"assets/v3/animations/XY2Eg-wzlz06s14ns67LSLdhO_XlGfDp6Z03ywlLza0/b59d488a-ab72-463c-94f2-c10dc1f955eb.png"},"591fb63c-657a-4c64-a495-0a765058a7df":{"name":"heart.png_1","sourceUrl":"assets/v3/animations/XY2Eg-wzlz06s14ns67LSLdhO_XlGfDp6Z03ywlLza0/591fb63c-657a-4c64-a495-0a765058a7df.png","frameSize":{"x":360,"y":360},"frameCount":1,"looping":true,"frameDelay":4,"version":"qMNX_XnGG7Eyrx.7X81jysepDYLSa4u4","loadedFromSource":true,"saved":true,"sourceSize":{"x":360,"y":360},"rootRelativePath":"assets/v3/animations/XY2Eg-wzlz06s14ns67LSLdhO_XlGfDp6Z03ywlLza0/591fb63c-657a-4c64-a495-0a765058a7df.png"},"70c5ce50-6e4a-45e5-9606-3df566225f0a":{"name":"shooter.png_1","sourceUrl":"assets/v3/animations/XY2Eg-wzlz06s14ns67LSLdhO_XlGfDp6Z03ywlLza0/70c5ce50-6e4a-45e5-9606-3df566225f0a.png","frameSize":{"x":5,"y":16},"frameCount":1,"looping":true,"frameDelay":4,"version":"lTZ0D87xalsDI2vKqI4_f0mpivA9nQ6M","loadedFromSource":true,"saved":true,"sourceSize":{"x":5,"y":16},"rootRelativePath":"assets/v3/animations/XY2Eg-wzlz06s14ns67LSLdhO_XlGfDp6Z03ywlLza0/70c5ce50-6e4a-45e5-9606-3df566225f0a.png"},"caf0ace3-8864-4138-8417-a94ecd8e8bc5":{"name":"pin.png_1","sourceUrl":"assets/v3/animations/zxtKHIUVHGEJXuecNY-SgetpHiRuD9DjiWxj7g2jG_Q/caf0ace3-8864-4138-8417-a94ecd8e8bc5.png","frameSize":{"x":469,"y":469},"frameCount":1,"looping":true,"frameDelay":4,"version":"A8BduzC22dnhVrlqYWMDt0VvFb5HEHB7","loadedFromSource":true,"saved":true,"sourceSize":{"x":469,"y":469},"rootRelativePath":"assets/v3/animations/zxtKHIUVHGEJXuecNY-SgetpHiRuD9DjiWxj7g2jG_Q/caf0ace3-8864-4138-8417-a94ecd8e8bc5.png"},"fd086793-78cf-401c-a04d-d75055850457":{"name":"pruple.jpg_1","sourceUrl":"assets/v3/animations/zxtKHIUVHGEJXuecNY-SgetpHiRuD9DjiWxj7g2jG_Q/fd086793-78cf-401c-a04d-d75055850457.png","frameSize":{"x":199,"y":254},"frameCount":1,"looping":true,"frameDelay":4,"version":"wwh4rvBUXdabLBQcXVLILUSZaf0kJ8YI","loadedFromSource":true,"saved":true,"sourceSize":{"x":199,"y":254},"rootRelativePath":"assets/v3/animations/zxtKHIUVHGEJXuecNY-SgetpHiRuD9DjiWxj7g2jG_Q/fd086793-78cf-401c-a04d-d75055850457.png"},"fa31d2d7-ac9a-4216-b5c0-57a12e6e0bde":{"name":"start_button_1","categories":["video_games"],"frameCount":1,"frameSize":{"x":108,"y":48},"looping":true,"frameDelay":2,"jsonLastModified":"2021-03-29 19:28:59 UTC","pngLastModified":"2021-03-29 19:28:59 UTC","version":"J9BTQrhVZ423u2LL0.f5j1tn.Mhq9sml","sourceUrl":"assets/api/v1/animation-library/gamelab/J9BTQrhVZ423u2LL0.f5j1tn.Mhq9sml/category_video_games/start_button.png","sourceSize":{"x":108,"y":48},"loadedFromSource":true,"saved":true,"rootRelativePath":"assets/api/v1/animation-library/gamelab/J9BTQrhVZ423u2LL0.f5j1tn.Mhq9sml/category_video_games/start_button.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----


var bg = createSprite(200, 200);
bg.setAnimation("bg");
bg.scale = 2.5;

var play = createSprite(200,200,20,20);
play.setAnimation("start_button_1");
play.scale = 1;
play.visible = true;

var yellowBalloon1 = createSprite(135,85,70,70);
    yellowBalloon1.setAnimation("yellow_balloon.png_1");
    yellowBalloon1.scale = 0.20;
    yellowBalloon1.visible = false; 

var yellowBalloon2 = createSprite(120,155,70,70);
    yellowBalloon2.setAnimation("yellow_balloon.png_1");
    yellowBalloon2.scale = 0.20;
 yellowBalloon2.visible = false; 

var yellowBalloon3 = createSprite(80,210,70,70);
    yellowBalloon3.setAnimation("yellow_balloon.png_1");
    yellowBalloon3.scale = 0.20;
 yellowBalloon3.visible = false; 

var yellowBalloon4 = createSprite(20,215,70,70);
    yellowBalloon4.setAnimation("yellow_balloon.png_1");
    yellowBalloon4.scale = 0.20;
 yellowBalloon4.visible = false; 
 
var yellowBalloon5 = createSprite(265,85,70,70);
    yellowBalloon5.setAnimation("yellow_balloon.png_1");
    yellowBalloon5.scale = 0.20;
 yellowBalloon5.visible = false; 

var yellowBalloon6 = createSprite(290,155,70,70);
    yellowBalloon6.setAnimation("yellow_balloon.png_1");
    yellowBalloon6.scale = 0.20;
 yellowBalloon6.visible = false; 
 
var yellowBalloon7 = createSprite(330,210,70,70);
    yellowBalloon7.setAnimation("yellow_balloon.png_1");
    yellowBalloon7.scale = 0.20;
 yellowBalloon7.visible = false; 

var yellowBalloon8 = createSprite(385,215,70,70);
    yellowBalloon8.setAnimation("yellow_balloon.png_1");
    yellowBalloon8.scale = 0.20;
     yellowBalloon8.visible = false; 

var yellowBalloon9 = createSprite(115,280,70,70);
    yellowBalloon9.setAnimation("yellow_balloon.png_1");
    yellowBalloon9.scale = 0.20;
     yellowBalloon9.visible = false; 

var yellowBalloon10 = createSprite(175,340,70,70);
    yellowBalloon10.setAnimation("yellow_balloon.png_1");
    yellowBalloon10.scale = 0.20;
 yellowBalloon10.visible = false; 

var yellowBalloon11 = createSprite(250,340,70,70);
    yellowBalloon11.setAnimation("yellow_balloon.png_1");
    yellowBalloon11.scale = 0.20;
     yellowBalloon11.visible = false; 

var yellowBalloon12 = createSprite(300,280,70,70);
    yellowBalloon12.setAnimation("yellow_balloon.png_1");
    yellowBalloon12.scale = 0.20;
     yellowBalloon12.visible = false; 
    
var yellowBalloon13 = createSprite(210,155,70,70);
    yellowBalloon13.setAnimation("yellow_balloon.png_1");
    yellowBalloon13.scale = 0.20;
     yellowBalloon13.visible = false; 
    
var heart1 = createSprite(35,85,85,85);
    heart1.setAnimation("heart.png_1");
    heart1.scale = 0.15;
    heart1.visible = false; 

var heart2 = createSprite(365,85,85,85);
    heart2.setAnimation("heart.png_1");
    heart2.scale = 0.15;
    heart2.visible = false; 

var heart3 = createSprite(215,225,85,85);
    heart3.setAnimation("heart.png_1");
    heart3.scale = 0.15;
    heart3.visible = false; 
    
var pin = createSprite(250,500,10,100);
    pin.setAnimation("pin.png_1");
    pin.scale = 0.1;
    pin.visible = false; 
   
var purpleBalloon1 = createSprite(90,85,70,70);
    purpleBalloon1.setAnimation("pruple.jpg_1");
    purpleBalloon1.scale = 0.15;
    purpleBalloon1.visible = false; 
    
var purpleBalloon2 = createSprite(70,145,70,70);
    purpleBalloon2.setAnimation("pruple.jpg_1");
    purpleBalloon2.scale = 0.15;
     purpleBalloon2.visible = false; 
    
var purpleBalloon3 = createSprite(20,150,70,70);
    purpleBalloon3.setAnimation("pruple.jpg_1");
    purpleBalloon3.scale = 0.15;
   purpleBalloon3.visible = false; 
    
var purpleBalloon4 = createSprite(310,85,70,70);
    purpleBalloon4.setAnimation("pruple.jpg_1");
    purpleBalloon4.scale = 0.15;
    purpleBalloon4.visible = false; 
    
var purpleBalloon5 = createSprite(330,145,70,70);
    purpleBalloon5.setAnimation("pruple.jpg_1");
    purpleBalloon5.scale = 0.15;
    purpleBalloon5.visible = false; 
    
var purpleBalloon6 = createSprite(380,150,70,70);
    purpleBalloon6.setAnimation("pruple.jpg_1");
    purpleBalloon6.scale = 0.15;
    purpleBalloon6.visible = false; 
    
var purpleBalloon7 = createSprite(150,220,70,70);
    purpleBalloon7.setAnimation("pruple.jpg_1");
    purpleBalloon7.scale = 0.15;
    purpleBalloon7.visible = false; 

var purpleBalloon8 = createSprite(165,280,70,70);
    purpleBalloon8.setAnimation("pruple.jpg_1");
    purpleBalloon8.scale = 0.15;
    purpleBalloon8.visible = false; 
    
var purpleBalloon9 = createSprite(215,310,70,70);
    purpleBalloon9.setAnimation("pruple.jpg_1");
    purpleBalloon9.scale = 0.15;
    purpleBalloon9.visible = false; 
    
var purpleBalloon10 = createSprite(260,280,70,70);
    purpleBalloon10.setAnimation("pruple.jpg_1");
    purpleBalloon10.scale = 0.15;
    purpleBalloon10.visible = false; 
    
var purpleBalloon11 = createSprite(280,220,70,70);
    purpleBalloon11.setAnimation("pruple.jpg_1");
    purpleBalloon11.scale = 0.15;
    purpleBalloon11.visible = false; 

var purpleBalloon12 = createSprite(170,155,70,70);
    purpleBalloon12.setAnimation("pruple.jpg_1");
    purpleBalloon12.scale = 0.15;
    purpleBalloon12.visible = false; 
    
var purpleBalloon13 = createSprite(245,155,70,70);
    purpleBalloon13.setAnimation("pruple.jpg_1");
    purpleBalloon13.scale = 0.15;
    purpleBalloon13.visible = false; 
    
var purpleBalloon14 = createSprite(185,85,70,70);
    purpleBalloon14.setAnimation("pruple.jpg_1");
    purpleBalloon14.scale = 0.15;
    purpleBalloon14.visible = false; 
 
var purpleBalloon15 = createSprite(228,85,70,70);
    purpleBalloon15.setAnimation("pruple.jpg_1");
    purpleBalloon15.scale = 0.15;
 purpleBalloon15.visible = false; 
 
var scores=0;

var hearts = 0;

var pins = 31;

function draw() {

  background(rgb(World.mouseX, World.mouseY, 0));
  
 
 
if(keyDown("UP_ARROW")){
  
  pin.y = pin.y -5;
  
}

if(keyDown("DOWN_ARROW")){
  
  pin.y = pin.y +5;
  
}

if(keyDown("LEFT_ARROW")){
  
  pin.x = pin.x -5;
  
}

if(keyDown("RIGHT_ARROW")){
  
  pin.x = pin.x +5;
  
}
   
if (pin.isTouching(yellowBalloon1)){
   yellowBalloon1.destroy();
   scores=scores+1;
   pins = pins-1;
   playSound("assets/Balloon-Popping.mp3",false);
   
   }
  
if (pin.isTouching(yellowBalloon2)){
   yellowBalloon2.destroy();
   scores=scores+1;
   pins = pins-1;
   playSound("assets/Balloon-Popping.mp3",false);
   
   }
   
if (pin.isTouching(yellowBalloon3)){
   yellowBalloon3.destroy();
   scores=scores+1;
   pins = pins-1;
    playSound("assets/Balloon-Popping.mp3",false);
   
   }
   
if (pin.isTouching(yellowBalloon4)){
   yellowBalloon4.destroy();
   scores=scores+1;
   pins = pins-1;
    playSound("assets/Balloon-Popping.mp3",false);
   
   }
   
if (pin.isTouching(yellowBalloon5)){
   yellowBalloon5.destroy();
   scores=scores+1;
   pins = pins-1;
    playSound("assets/Balloon-Popping.mp3",false);
   
   }
   
if (pin.isTouching(yellowBalloon6)){
   yellowBalloon6.destroy();
   scores=scores+1;
   pins = pins-1;
    playSound("assets/Balloon-Popping.mp3",false);
   
   }
   
if (pin.isTouching(yellowBalloon7)){
   yellowBalloon7.destroy();
   scores=scores+1;
   pins = pins-1;
    playSound("assets/Balloon-Popping.mp3",false);
   
   }
    
if (pin.isTouching(yellowBalloon8)){
   yellowBalloon8.destroy();
   scores=scores+1;
   pins = pins-1;
    playSound("assets/Balloon-Popping.mp3",false);
   
   }
   
if (pin.isTouching(yellowBalloon9)){
   yellowBalloon9.destroy();
   scores=scores+1;
   pins = pins-1;
    playSound("assets/Balloon-Popping.mp3",false);
   
   }
   
if (pin.isTouching(yellowBalloon10)){
   yellowBalloon10.destroy();
   scores=scores+1;
   pins = pins-1;
    playSound("assets/Balloon-Popping.mp3",false);
   
   }
   
if (pin.isTouching(yellowBalloon11)){
   yellowBalloon11.destroy();
   scores=scores+1;
   pins = pins-1;
    playSound("assets/Balloon-Popping.mp3",false);
   
   }
   
if (pin.isTouching(yellowBalloon12)){
   yellowBalloon12.destroy();
   scores=scores+1;
   pins = pins-1;
    playSound("assets/Balloon-Popping.mp3",false);
   
   }
   
if (pin.isTouching(yellowBalloon13)){
   yellowBalloon13.destroy();
   scores=scores+1;
   pins = pins-1;
    playSound("assets/Balloon-Popping.mp3",false);
   
   }   
   
if (pin.isTouching(purpleBalloon1)){
   purpleBalloon1.destroy();
   scores=scores+1;
   pins = pins-1;
    playSound("assets/Balloon-Popping.mp3",false);
   
   }
  
if (pin.isTouching(purpleBalloon2)){
   purpleBalloon2.destroy();
   scores=scores+1;
   pins = pins-1;
    playSound("assets/Balloon-Popping.mp3",false);
   
   }
   
if (pin.isTouching(purpleBalloon3)){
   purpleBalloon3.destroy();
   scores=scores+1;
   pins = pins-1;
    playSound("assets/Balloon-Popping.mp3",false);
   
   }
   
if (pin.isTouching(purpleBalloon4)){
   purpleBalloon4.destroy();
   scores=scores+1;
   pins = pins-1;
    playSound("assets/Balloon-Popping.mp3",false);
   
   }
   
if (pin.isTouching(purpleBalloon5)){
   purpleBalloon5.destroy();
   scores=scores+1;
   pins = pins-1;
    playSound("assets/Balloon-Popping.mp3",false);
   
   }
   
if (pin.isTouching(purpleBalloon6)){
   purpleBalloon6.destroy();
   scores=scores+1;
   pins = pins-1;
    playSound("assets/Balloon-Popping.mp3",false);
   
   }
   
if (pin.isTouching(purpleBalloon7)){
   purpleBalloon7.destroy();
   scores=scores+1;
   pins = pins-1;
    playSound("assets/Balloon-Popping.mp3",false);
   
   }
    
if (pin.isTouching(purpleBalloon8)){
   purpleBalloon8.destroy();
   scores=scores+1;
   pins = pins-1;
    playSound("assets/Balloon-Popping.mp3",false);
   
   }
   
if (pin.isTouching(purpleBalloon9)){
   purpleBalloon9.destroy();
   scores=scores+1;
   pins = pins-1;
    playSound("assets/Balloon-Popping.mp3",false);
   
   }
   
if (pin.isTouching(purpleBalloon10)){
   purpleBalloon10.destroy();
   scores=scores+1;
   pins = pins-1;
    playSound("assets/Balloon-Popping.mp3",false);
   
   }
   
if (pin.isTouching(purpleBalloon11)){
   purpleBalloon11.destroy();
   scores=scores+1;
   pins = pins-1;
    playSound("assets/Balloon-Popping.mp3",false);
   
   }
   
if (pin.isTouching(purpleBalloon12)){
   purpleBalloon12.destroy();
   scores=scores+1;
   pins = pins-1;
    playSound("assets/Balloon-Popping.mp3",false);
   
   }
   
if (pin.isTouching(purpleBalloon13)){
   purpleBalloon13.destroy();
   scores=scores+1;
   pins = pins-1;
    playSound("assets/Balloon-Popping.mp3",false);
   
   }   
   
if (pin.isTouching(purpleBalloon14)){
   purpleBalloon14.destroy();
   scores=scores+1;
   pins = pins-1;
    playSound("assets/Balloon-Popping.mp3",false);
   
   }
   
if (pin.isTouching(purpleBalloon15)){
   purpleBalloon15.destroy();
   scores=scores+1;
   pins = pins-1;
    playSound("assets/Balloon-Popping.mp3",false);
   
   }   
   
if (pin.isTouching(heart1)){
   heart1.destroy();
   hearts=hearts+1;
   pins = pins-1;
   playSound("assets/Burst.mp3",false);
    
   }
  
 if (pin.isTouching(heart2)){
   heart2.destroy();
   hearts=hearts+1;
    pins = pins-1;
    playSound("assets/Burst.mp3",false);
    
   }
if (pin.isTouching(heart3)){
   heart3.destroy();
   hearts=hearts+1;
   pins = pins-1;
   playSound("assets/Burst.mp3",false);
   
   }
   
  drawSprites();
  
   if(mousePressedOver(play)){
     
  yellowBalloon1.visible = true;
  yellowBalloon2.visible = true;
  yellowBalloon3.visible = true;
  yellowBalloon4.visible = true;
  yellowBalloon5.visible = true;
  yellowBalloon6.visible = true;
  yellowBalloon7.visible = true;
  yellowBalloon8.visible = true;
  yellowBalloon9.visible = true;
  yellowBalloon10.visible = true;
  yellowBalloon11.visible = true;
  yellowBalloon12.visible = true;
  yellowBalloon13.visible = true;
  
  purpleBalloon1.visible = true;
  purpleBalloon2.visible = true;
  purpleBalloon3.visible = true;
  purpleBalloon4.visible = true;
  purpleBalloon5.visible = true;
  purpleBalloon6.visible = true;
  purpleBalloon7.visible = true;
  purpleBalloon8.visible = true;
  purpleBalloon9.visible = true;
  purpleBalloon10.visible = true;
  purpleBalloon11.visible = true;
  purpleBalloon12.visible = true;
  purpleBalloon13.visible = true;
  purpleBalloon14.visible = true;
  purpleBalloon15.visible = true;
  
  pin.visible = true;
  
  heart1.visible = true;
  heart2.visible = true;
  heart3.visible = true;
  
  play.visible = false;
  
  }
  
     textSize(25);
   fill(0);
  text("SCORE :- "+scores,215,45);
  
  textSize(25);
  fill(0);
  text("Hearts :- "+hearts,70,45);
  
  textSize(25);
  fill(0);
  text("Pins :- "+pins,285,370);
  
 
  
  if(pins === 0){
  background("black");
  textSize(35);
  fill("yellow");
  text("Game Over! You Won",30,200);
  
  
  
}   
  
}


// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
