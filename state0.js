    var demo = {}; 
    var speed = 6;
    var adam;


    demo.state0 = function(){};

    demo.state0.prototype = {
       
        preload: function(){ 
         game.load.image('trees','assets/background/treeBG.png'); 
         game.load.spritesheet('adam','assets/spritesheets/adamSpritesheet.png', 240, 370);
        },

        create: function(){
              game.world.setBounds(0, 0, 2183, 1000);
            //(startx,y,endx,y)
            game.physics.startSystem(Phaser.Physics.ARCADE); 
        

           var trees = game.add.sprite(0, 0, 'trees');
            adam = game.add.sprite(0, 450, 'adam');  
           
            game.physics.enable(adam);
            
            adam.body.collideWorldBounds = true;
            
            adam.scale.setTo(1,1);
            
            adam.animations.add("walk",[0,1,2,3,4]);
        
        },


        update: function(){

            if(game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)){
                adam.animations.play("walk");
              adam.x = adam.x + 6; 
                adam.scale.setTo(1,1);
                
            }

            if(game.input.keyboard.isDown(Phaser.Keyboard.LEFT)){
                adam.animations.play("walk");
                    adam.x = adam.x - 6; 
                adam.scale.setTo(-1,1);
            }

            if(game.input.keyboard.isDown(Phaser.Keyboard.UP)){
              if(adam.y < 200 ){
                  adam.y = 200;
              }
                adam.animations.play("walk");
                adam.y =  adam.y - 6;}

            if(game.input.keyboard.isDown(Phaser.Keyboard.DOWN)){
                adam.animations.play("walk");
                adam.y = adam.y + 6; }
           
        }

    };
