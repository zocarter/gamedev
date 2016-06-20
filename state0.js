
var demo = {}; 

demo.state0 = function(){};

demo.state0.prototype = {
   
    preload: function(){ 
     
        game.load.image('trees','assets/background/treeBG.png'); 
        
        game.load.spritesheet('adam',
                              'assets/spritesheets/adamSpritesheet.png', 240, 370);
    },
    
    create: function(){
        
         game.physics.startSystem(Phaser.Physics.ARCADE);
        
        var trees = game.add.sprite(100, 50, 'trees');
   
        var adam = game.add.sprite(200, 500, 'adam');
        
        game.physics.enable(adam);
        
        adam.scale.setTo(1,1);
        
        
},
    update: function(){
        
        if(game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)){
         
            adam.x = adam.x + 3;
    } 

},
};
