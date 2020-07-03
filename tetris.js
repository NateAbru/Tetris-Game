//Global Variables
var play_btn_activated = false;
let gameAudio = document.getElementById("game_song");
gameAudio.volume = 0.5;
let hold_released = true;
let on_hold = false;
var shape_on_hold = shapeMaker();
let shape_switch = 0;
let game_paused = false;
let paused_interval = false;
const mapWidth = 300
const mapHeight = 500
const numberOfRows = 20;
const numberOfCols = 12;
const cellSize = mapWidth / numberOfCols;
const borderSize = 0.2;
let dropCounter = 0;
let dropInterval = 1000;
let lastTime = 0;
let scoreCount = 0;
let streak = false;
let streakCount = 0;
let level = 1;
let lines = 0;
let in_Play = true;
let drop_number = 0;
let last_strk_drop_n = 0;
var shape_onDeck1 = shapeMaker();
var shape_onDeck2 = shapeMaker();
var shape_onDeck3 = shapeMaker();
let first_drop = true;
let numGamesHelper = 0;
let dropAudio = document.getElementById("drop_audio");
let moveAudio = document.getElementById("move_audio");
let rotateAudio = document.getElementById("rotate_audio");
let scoreAudio = document.getElementById("score_audio");
let loseAudio = document.getElementById("lose_effect");

document.getElementById("drop_audio").playbackRate = 2.0;
document.getElementById("rotate_audio").playbackRate = 2.0;
document.getElementById("move_audio").playbackRate = 2.5;
document.getElementById("score").innerHTML = "SCORE " + scoreCount;
document.getElementById("level").innerHTML = "Hit Play";

const canvas = document.getElementById("tetris");
const context = canvas.getContext("2d");
const canvas2 = document.getElementById("static_field");
const context2 = canvas2.getContext("2d");
const canvas3 = document.getElementById("hold_field");
const context3 = canvas3.getContext("2d");

const player = {
   pos: {x: 5, y: 5},
   matrix: shapeMaker(),
}
const grid = createMatrix(12, 20);
const static_grid = createMatrix(6,10);
const hold_grid = createMatrix(6,6);

function mouse_button(e)
{
  var click_value = e.buttons;
  if(click_value == 1)
  {
    maxDrop();
  }
  else if(click_value == 2)
  {
    shapeRotate();
        if(colliderFunc(grid, player)) antiRotateFunc();
    //rotateAudio.play();
    e.preventDefault();
  }
}

document.getElementById("tetris").addEventListener("mousemove", function(event){
  mouse_move(event);
});
function mouse_move(e)
{
  let x = e.clientX;
  let y = e.clientX;
  if(x > 610 && x < 631)
  {
    player.pos.x = 0;
    let value_found = false;
    for(let c_val = 0; c_val < player.matrix.length; c_val++)
    {
      let column_value_count = 0;
      for(let r_val = 0; r_val < player.matrix.length; r_val++)
      {
        if(player.matrix[r_val][c_val] != 0) 
        {
          column_value_count++;
          value_found = true;
          break;
        }
      }
      if(value_found == true) break;
      else if(column_value_count == 0 && value_found == false) 
      {
        wallLimit(-1);
      }
    }
  }
  if(x > 635 && x < 656)
  {
    player.pos.x = 1;
     let value_found = false;
    for(let c_val = 0; c_val < player.matrix.length; c_val++)
    {
      let column_value_count = 0;
      for(let r_val = 0; r_val < player.matrix.length; r_val++)
      {
        if(player.matrix[r_val][c_val] != 0) 
        {
          column_value_count++;
          value_found = true;
          break;
        }
      }
      if(value_found == true) break;
      else if(column_value_count == 0 && value_found == false) 
      {
        wallLimit(-1);
      }
    }
  }
  if(x > 660 && x < 681)
  {
    player.pos.x = 2;
     let value_found = false;
    for(let c_val = 0; c_val < player.matrix.length; c_val++)
    {
      let column_value_count = 0;
      for(let r_val = 0; r_val < player.matrix.length; r_val++)
      {
        if(player.matrix[r_val][c_val] != 0) 
        {
          column_value_count++;
          value_found = true;
          break;
        }
      }
      if(value_found == true) break;
      else if(column_value_count == 0 && value_found == false) 
      {
        wallLimit(-1);
      }
    }
  }
  if(x > 685 && x < 706)
  {
    player.pos.x = 3;
     let value_found = false;
    for(let c_val = 0; c_val < player.matrix.length; c_val++)
    {
      let column_value_count = 0;
      for(let r_val = 0; r_val < player.matrix.length; r_val++)
      {
        if(player.matrix[r_val][c_val] != 0) 
        {
          column_value_count++;
          value_found = true;
          break;
        }
      }
      if(value_found == true) break;
      else if(column_value_count == 0 && value_found == false) 
      {
        wallLimit(-1);
      }
    }
  }
  if(x > 710 && x < 731)
  {
    player.pos.x = 4;
     let value_found = false;
    for(let c_val = 0; c_val < player.matrix.length; c_val++)
    {
      let column_value_count = 0;
      for(let r_val = 0; r_val < player.matrix.length; r_val++)
      {
        if(player.matrix[r_val][c_val] != 0) 
        {
          column_value_count++;
          value_found = true;
          break;
        }
      }
      if(value_found == true) break;
      else if(column_value_count == 0 && value_found == false) 
      {
        wallLimit(-1);
      }
    }
  }
  if(x > 735 && x < 756)
  {
    player.pos.x = 5;
    let value_found = false;
    for(let c_val = 0; c_val < player.matrix.length; c_val++)
    {
      let column_value_count = 0;
      for(let r_val = 0; r_val < player.matrix.length; r_val++)
      {
        if(player.matrix[r_val][c_val] != 0) 
        {
          column_value_count++;
          value_found = true;
          break;
        }
      }
      if(value_found == true) break;
      else if(column_value_count == 0 && value_found == false) 
      {
        wallLimit(-1);
      }
    }
  }
  if(x > 760 && x < 781)
  {
    player.pos.x = 6;
     let value_found = false;
    for(let c_val = 0; c_val < player.matrix.length; c_val++)
    {
      let column_value_count = 0;
      for(let r_val = 0; r_val < player.matrix.length; r_val++)
      {
        if(player.matrix[r_val][c_val] != 0) 
        {
          column_value_count++;
          value_found = true;
          break;
        }
      }
      if(value_found == true) break;
      else if(column_value_count == 0 && value_found == false) 
      {
        wallLimit(-1);
      }
    }
  } 
  if(x > 785 && x < 806)
  {
    player.pos.x = 7;
     let value_found = false;
    for(let c_val = 0; c_val < player.matrix.length; c_val++)
    {
      let column_value_count = 0;
      for(let r_val = 0; r_val < player.matrix.length; r_val++)
      {
        if(player.matrix[r_val][c_val] != 0) 
        {
          column_value_count++;
          value_found = true;
          break;
        }
      }
      if(value_found == true) break;
      else if(column_value_count == 0 && value_found == false) 
      {
        wallLimit(-1);
      }
    }
  } 
  if(x > 810 && x < 831)
  {
    player.pos.x = 8;
     let value_found = false;
    for(let c_val = 0; c_val < player.matrix.length; c_val++)
    {
      let column_value_count = 0;
      for(let r_val = 0; r_val < player.matrix.length; r_val++)
      {
        if(player.matrix[r_val][c_val] != 0) 
        {
          column_value_count++;
          value_found = true;
          break;
        }
      }
      if(value_found == true) break;
      else if(column_value_count == 0 && value_found == false) 
      {
        wallLimit(-1);
      }
    }
  } 
  if(x > 835 && x < 856)
  {
    player.pos.x = 9;
     let value_found = false;
    for(let c_val = 0; c_val < player.matrix.length; c_val++)
    {
      let column_value_count = 0;
      for(let r_val = 0; r_val < player.matrix.length; r_val++)
      {
        if(player.matrix[r_val][c_val] != 0) 
        {
          column_value_count++;
          value_found = true;
          break;
        }
      }
      if(value_found == true) break;
      else if(column_value_count == 0 && value_found == false) 
      {
        wallLimit(-1);
      }
    }
  } 
  if(x > 860 && x < 881)
  {
    player.pos.x = 10;
     let value_found = false;
    for(let c_val = 0; c_val < player.matrix.length; c_val++)
    {
      let column_value_count = 0;
      for(let r_val = 0; r_val < player.matrix.length; r_val++)
      {
        if(player.matrix[r_val][c_val] != 0) 
        {
          column_value_count++;
          value_found = true;
          break;
        }
      }
      if(value_found == true) break;
      else if(column_value_count == 0 && value_found == false) 
      {
        wallLimit(-1);
      }
    }
  } 
  if(x > 885 && x < 906)
  {
    player.pos.x = 11;
     let value_found = false;
    for(let c_val = 0; c_val < player.matrix.length; c_val++)
    {
      let column_value_count = 0;
      for(let r_val = 0; r_val < player.matrix.length; r_val++)
      {
        if(player.matrix[r_val][c_val] != 0) 
        {
          column_value_count++;
          value_found = true;
          break;
        }
      }
      if(value_found == true) break;
      else if(column_value_count == 0 && value_found == false) 
      {
        wallLimit(1);
      }
    }
  } 
}

//function to quit the game when it has started. Sets the grid back to idle.
function quit()
{
  if(play_btn_activated)
  {
    gameAudio.pause();
    gameAudio.currentTime = 0;
    grid.forEach((row, y) => {
      row.forEach((value, x) => {
        if(value !== 0)
        {
          grid[y][x] = 0;
        }
      });
    });
    scoreCount = 0;
    lines = 0;
    level = 1;
    on_hold = false;
    document.getElementById("score").innerHTML = "SCORE " + scoreCount;
    document.getElementById("level").innerHTML = "Hit Play";
    let randX = Math.floor((Math.random() * 8) + 1);
    player.pos.y = 0;
    player.pos.x = randX;
    player.matrix = shapeMaker();
    in_Play = false;
    play_btn_activated = false;
    var pause_delete = document.getElementById("paused_id");
    pause_delete.parentNode.removeChild(pause_delete);
    game_paused = false;
    paused_interval = false;
  }
}

//function to hold the current shape
function hold()
{
	//switches current shape with the one on hold
	if((on_hold == true) && (hold_released == false) && shape_switch == 0)
	{
		var tempShape = player.matrix;
		player.matrix = shape_on_hold;
		shape_on_hold = tempShape;
		player.pos.y = 0;
		player.pos.x = 5;
		shape_switch++;
	}
	//first time current shape is selected on hold
	else if((on_hold == false))
	{
		shape_on_hold = player.matrix;
		shapeReset(); 
    	player.pos.y = 0;
    	player.pos.x = 5;
		on_hold = true;
		hold_released = false;
    	shape_switch++;
	}
}
function play()
{
	if(play_btn_activated == false)
	{
		play_btn_activated = true;
    in_Play = true;
		gameAudio.play();
		dropInterval = 1000;
		player.pos.x = 5;
		player.pos.y = 0;
		player.matrix = shapeMaker();
		document.getElementById("score").innerHTML = "SCORE " + scoreCount;
		document.getElementById("level").innerHTML = "LVL:" + level + " LINES: " + lines;
    var pauseDiv = document.getElementById("game_btns6");
    var pause_button = document.createElement("BUTTON");
    pause_button.className = "paused";
    pause_button.id = "paused_id";
    pause_button.onclick = function()
    {
      if(in_Play)
      {
        //pause game
        if(pause_button.className == "paused")
        {
          game_paused = true;
          gameAudio.pause();
          pause_button.className = "play";
        }
        //un pause game
        else if(pause_button.className == "play")
        {
          game_paused = false;
          gameAudio.play();
          pause_button.className = "paused";
        }
      };
    }
    pauseDiv.appendChild(pause_button);
	}
}
function restart()
{
	if(play_btn_activated)
	{
		in_Play = true;
   
		gameAudio.currentTime = 0;
		grid.forEach((row, y) => {
			row.forEach((value, x) => {
				if(value !== 0)
				{
					grid[y][x] = 0;
				}
			});
		});
		player.pos.y++;
		hold_released = true;
		on_hold = false;
		shape_on_hold = shapeMaker();
		player.matrix = shapeMaker();
		player.pos.y = 0;
		player.pos.x = 5;
		dropCounter = 0;
		dropInterval = 1000;
		lastTime = 0;
		scoreCount = 0;
		streak = false;
		streakCount = 0;
		level = 1;
		lines = 0;
		drop_number = 0;
		last_strk_drop_n = 0;
		shape_onDeck1 = shapeMaker();
		shape_onDeck2 = shapeMaker();
		shape_onDeck3 = shapeMaker();
		first_drop = true;
		numGamesHelper = 0;
		gameAudio.play();
		document.getElementById("score").innerHTML = "SCORE " + scoreCount;
		document.getElementById("level").innerHTML = "LVL:" + level + " LINES: " + lines;
    	var pause_delete2 = document.getElementById("paused_id");
    	game_paused = false;
    	paused_interval = false;
    	pause_delete2.parentNode.removeChild(pause_delete2);
    	var pauseDiv = document.getElementById("game_btns6");
    	var pause_button = document.createElement("BUTTON");
    	pause_button.className = "paused";
    	pause_button.id = "paused_id";
    	pause_button.onclick = function()
    	{
      		if(in_Play)
      		{
        		//pause game
        		if(pause_button.className == "paused")
        		{
          			game_paused = true;
          			gameAudio.pause();
          			pause_button.className = "play";
        		}
        		//un pause game
        		else if(pause_button.className == "play")
        		{
          			game_paused = false;
          			gameAudio.play();
          			pause_button.className = "paused";
        		}
      		};
    	}
    	pauseDiv.appendChild(pause_button);
	}
}
	


function createMatrix(w, h)
{
	const matrix1 = [];
	while(h--)
	{
		matrix1.push(new Array(w).fill(0));
		
	}
	return matrix1;
}
function draw()
{	    
	if(play_btn_activated)
	{	   	
    	drawGrid(grid, {x:0, y:0});
    	drawGrid(player.matrix, player.pos);
      drawGrid(ghost_block_func(), ghost_coordinates());
    	drawStaticGrid(static_grid, {x:0, y:0});
    	drawHoldGrid(hold_grid, {x:0, y:0});
    	if(on_hold == true) drawHoldGrid(shape_on_hold, {x:1, y:1});
    	if(shape_onDeck1.length == 3)
    	{
    		drawStaticGrid(switchShapeRotate(shape_onDeck1), {x:1, y:1});
    	}
    	else if(shape_onDeck1.length == 4)
    	{
    		drawStaticGrid(switchShapeRotate(shape_onDeck1), {x:1, y:0});
    	}
    	else
    	{
    		drawStaticGrid(shape_onDeck1, {x:2, y:1});
    	}
    	if(shape_onDeck2.length == 2)
    	{
    		drawStaticGrid(shape_onDeck2, {x:2, y:4});
    	}
      else if(shape_onDeck2.length == 4)
      {
        drawStaticGrid(switchShapeRotate(shape_onDeck2), {x:1, y:3});
      }
    	else
    	{
    		drawStaticGrid(switchShapeRotate(shape_onDeck2), {x:1, y:4});
    	}
    	if(shape_onDeck3.length == 2)
    	{
    		drawStaticGrid(shape_onDeck3, {x:2, y:7});
    	}
      else if(shape_onDeck3.length == 4)
      {
        drawStaticGrid(switchShapeRotate(shape_onDeck3), {x:1, y:6});
      }
    	else
    	{
    		drawStaticGrid(switchShapeRotate(shape_onDeck3), {x:1, y:7});
    	}
    }
    else if(!play_btn_activated)	
    {
    	drawGrid(grid, {x:0, y:0});
    	drawGrid(player.matrix, player.pos);
    	drawStaticGrid(static_grid, {x:0, y:0});
    	drawHoldGrid(hold_grid, {x:0, y:0});
    }
}
function drawGrid(matrix, offset)
{
   matrix.forEach((row, y) => {
   	   row.forEach((value, x) => {
   	   	if(value === 1) 
   	   	{
   	   		context.fillStyle = "#cc0000";
   	   		context.fillRect(x + offset.x, y + offset.y, 1, 1);
   			  context.strokeStyle = 'rgb(192, 192, 192)';
          context.lineWidth = borderSize / 20;
          context.lineJoin = "round";
          context.strokeRect(x + offset.x, y + offset.y, 1, 1);
   	   		
   	   	}
   	   	else if(value === 2)
   	   	{
   	   		context.fillStyle = "rgb(0, 63, 235)"; //blue
   	   		context.fillRect(x + offset.x, y + offset.y, 1, 1);
   			  context.strokeStyle = 'rgb(192, 192, 192)';
          context.lineWidth = borderSize / 20;
          context.lineJoin = "round";
          context.strokeRect(x + offset.x, y + offset.y, 1, 1);
   	   	}
   	   	else if(value === 3)
   	   	{
   	   		context.fillStyle = "#ffcc00"; //yellow
   	   		context.fillRect(x + offset.x, y + offset.y, 1, 1);
   			  context.strokeStyle = 'rgb(192, 192, 192)';
          context.lineWidth = borderSize / 20;
          context.lineJoin = "round";
          context.strokeRect(x + offset.x, y + offset.y, 1, 1);
   	   	}
   	   	else if(value === 4)
   	   	{
   	   		//context.fillStyle = "#33cc33"; //green
   	   		context.fillStyle = "rgb(0, 255, 0)";//lime green
   	   		context.fillRect(x + offset.x, y + offset.y, 1, 1);
   			  context.strokeStyle = "rgb(192, 192, 192)";
   			  context.lineWidth = borderSize / 20;
          context.lineJoin = "round";
   	   		context.strokeRect(x + offset.x, y + offset.y, 1, 1);
   	   	}
   	   	else if(value === 5) 
   	   	{
   	   		context.lineJoin = "round";
   	   		context.fillStyle = "rgb(124, 17, 178)"; //purple
   	   		context.fillRect(x + offset.x, y + offset.y, 1, 1);
   			  context.strokeStyle = 'rgb(192, 192, 192)';
          context.lineWidth = borderSize / 20;
          context.lineJoin = "round";
          context.strokeRect(x + offset.x, y + offset.y, 1, 1);
   	   	}
   	   	else if(value === 6)
   	   	{
   	   		context.fillStyle = "#ff6600"; //orange
   	   		context.fillRect(x + offset.x, y + offset.y, 1, 1);
   	   		context.strokeStyle = 'rgb(192, 192, 192)';
          context.lineWidth = borderSize / 20;
          context.lineJoin = "round";
   	   		context.strokeRect(x + offset.x, y + offset.y, 1, 1);
   	   	}
   	   	else if(value === 7)
   	   	{
   	   		context.fillStyle = "rgb(0, 191, 255)"; //light blue
   	   		context.fillRect(x + offset.x, y + offset.y, 1, 1);
   			  context.strokeStyle = 'rgb(192, 192, 192)';
          context.lineWidth = borderSize / 20;
          context.lineJoin = "round";
          context.strokeRect(x + offset.x, y + offset.y, 1, 1);

   	   		
   	   	}
        else if(value == 10)
        {
          if(matrix != player.matrix && matrix != grid && matrix.length < 5)
          {
            context.strokeStyle = "rgb(255,255,255)"; //white
            context.lineWidth = borderSize / 6;
            context.lineJoin = "round";
            context.strokeRect(x + offset.x, y + offset.y, 1, 1);
          }
          
        }
   	   	else if((matrix != player.matrix) && (value === 0) && (matrix.length > 4))
   	   	{
   	   		context.fillStyle = 'rgb(0, 0, 0)';
   	   		context.fillRect(x, y, 1, 1);
   			  context.strokeStyle = 'rgb(192, 192, 192)';
          context.lineWidth = borderSize / 60;
          context.lineJoin = "round";
          context.strokeRect(x, y, 1, 1);
   	   	}
   	   });
   });
}  

function drawStaticGrid(matrix, offset)
{
   matrix.forEach((row, y) => {
   	   row.forEach((value, x) => {
   	   	if(value === 1) {
   	   		context2.fillStyle = "#cc0000";
   	   		context2.fillRect(x + offset.x, y + offset.y, 1, 1);
   			  context2.lineWidth = borderSize / 20;
   			  context2.strokeStyle = 'rgb(192, 192, 192)';
          context2.strokeRect(x + offset.x, y + offset.y, 1, 1);
   	   		
   	   	}
   	   	else if(value === 2)
   	   	{
   	   		context2.fillStyle = "rgb(0, 63, 235)"; //blue
   	   		context2.fillRect(x + offset.x, y + offset.y, 1, 1);
   			  context2.lineWidth = borderSize / 20;
   			  context2.strokeStyle = 'rgb(192, 192, 192)';
          context2.strokeRect(x + offset.x, y + offset.y, 1, 1);
   	   		
   	   	}
   	   	else if(value === 3)
   	   	{
   	   		context2.fillStyle = "#ffcc00"; //yellow
   	   		context2.fillRect(x + offset.x, y + offset.y, 1, 1);
   			  context2.lineWidth = borderSize / 20;
   			  context2.strokeStyle = 'rgb(192, 192, 192)';
   	   		context2.strokeRect(x + offset.x, y + offset.y, 1, 1);
   	   	}
   	   	else if(value === 4)
   	   	{
   	   		//context2.fillStyle = "#33cc33"; //green
   	   		context2.fillStyle = "rgb(0, 255, 0)";//lime green
   	   		context2.fillRect(x + offset.x, y + offset.y, 1, 1);
   			  context2.strokeStyle = "rgb(192, 192, 192)";
   			  context2.lineWidth = borderSize / 20;
          context2.strokeRect(x + offset.x, y + offset.y, 1, 1);
   	   	}
   	   	else if(value === 5) 
   	   	{
   	   		context2.fillStyle = "rgb(124, 17, 178)"; //purple
   	   		context2.fillRect(x + offset.x, y + offset.y, 1, 1);
   			  context2.lineWidth = borderSize / 20;
   			  context2.strokeStyle = 'rgb(192, 192, 192)';
   	   		context2.strokeRect(x + offset.x, y + offset.y, 1, 1);
   	   	}
   	   	else if(value === 6)
   	   	{
   	   		context2.fillStyle = "#ff6600"; //orange
   	   		context2.fillRect(x + offset.x, y + offset.y, 1, 1);
   	   		context2.lineWidth = borderSize / 20;
   	   		context2.strokeStyle = 'rgb(192, 192, 192)';
          context2.strokeRect(x + offset.x, y + offset.y, 1, 1);
   	   	}
   	   	else if(value === 7)
   	   	{
   	   		context2.fillStyle = "rgb(0, 191, 255)"; //light blue
   	   		context2.fillRect(x + offset.x, y + offset.y, 1, 1);
   			  context2.lineWidth = borderSize / 20;
   			  context2.strokeStyle = 'rgb(192, 192, 192)';
   	   		context2.strokeRect(x + offset.x, y + offset.y, 1, 1);
   	   	}
   	   	else if(matrix.length > 4)
   	   	{
   	   		context2.fillStyle = 'rgb(0, 0, 0)';
   	   		context2.fillRect(x, y, 1, 1);
   	   	}
   	   });
   });
}     	
function drawHoldGrid(matrix, offset)
{
   matrix.forEach((row, y) => {
   	   row.forEach((value, x) => {
   	   	if(value === 1) {
   	   		context3.fillStyle = "#cc0000";
   	   		context3.fillRect(x + offset.x, y + offset.y, 1, 1);
   			  context3.lineWidth = borderSize / 20;
   			  context3.strokeStyle = 'rgb(192, 192, 192)';
   	   		context3.strokeRect(x + offset.x, y + offset.y, 1, 1);
   	   	}
   	   	else if(value === 2)
   	   	{
   	   		context3.fillStyle = "rgb(0, 63, 235)"; //blue
   	   		context3.fillRect(x + offset.x, y + offset.y, 1, 1);
   			  context3.lineWidth = borderSize / 20;
   			  context3.strokeStyle = 'rgb(192, 192, 192)';
   	   		context3.strokeRect(x + offset.x, y + offset.y, 1, 1);
   	   	}
   	   	else if(value === 3)
   	   	{
   	   		context3.fillStyle = "#ffcc00"; //yellow
   	   		context3.fillRect(x + offset.x, y + offset.y, 1, 1);
   			  context3.lineWidth = borderSize / 20;
   			  context3.strokeStyle = 'rgb(192, 192, 192)';
   	   		context3.strokeRect(x + offset.x, y + offset.y, 1, 1);
   	   	}
   	   	else if(value === 4)
   	   	{
   	   		//context2.fillStyle = "#33cc33"; //green
   	   		context3.fillStyle = "rgb(0, 255, 0)";//lime green
   	   		context3.fillRect(x + offset.x, y + offset.y, 1, 1);
   			  context3.strokeStyle = "rgb(192, 192, 192)";
   			  context3.lineWidth = borderSize / 20;
   	   		context3.strokeRect(x + offset.x, y + offset.y, 1, 1);
   	   	}
   	   	else if(value === 5) 
   	   	{
   	   		context3.fillStyle = "rgb(124, 17, 178)"; //purple
   	   		context3.fillRect(x + offset.x, y + offset.y, 1, 1);
   			  context3.lineWidth = borderSize / 20;
   			  context3.strokeStyle = 'rgb(192, 192, 192)';
   	   		context3.strokeRect(x + offset.x, y + offset.y, 1, 1);
   	   	}
   	   	else if(value === 6)
   	   	{
   	   		context3.fillStyle = "#ff6600"; //orange
   	   		context3.fillRect(x + offset.x, y + offset.y, 1, 1);
   	   		context3.lineWidth = borderSize / 20;
   	   		context3.strokeStyle = 'rgb(192, 192, 192)';
          context3.strokeRect(x + offset.x, y + offset.y, 1, 1);
   	   	}
   	   	else if(value === 7)
   	   	{
   	   		context3.fillStyle = "rgb(0, 191, 255)"; //light blue
   	   		context3.fillRect(x + offset.x, y + offset.y, 1, 1);
   			  context3.lineWidth = borderSize / 20;
   			  context3.strokeStyle = 'rgb(192, 192, 192)';
          context3.strokeRect(x + offset.x, y + offset.y, 1, 1);
   	   	}
   	   	else if(matrix.length > 4)
   	   	{
   	   		context3.fillStyle = 'rgb(0, 0, 0)';
   	   		context3.fillRect(x, y, 1, 1);
   	   	}
   	   });
   });
} 

/* setting the scale of the grid squares
 * parameter values multiplied with the size of the grid set earlier for the corresponding context
 * must equal the size of the canvas set in the html document
 */
context.scale(25, 25);
context2.scale(25, 25);
context3.scale(25, 25);

/* function to set current shape to the one on deck and move up the on deck shapes 
 * and reset the last one on deck
 */
function shapeReset()
{
	player.matrix = shape_onDeck1;
	shape_onDeck1 = shape_onDeck2;
	shape_onDeck2 = shape_onDeck3;
	shape_onDeck3 = shapeMaker();
}

//function that creates the unique shapes of the game
function shapeMaker(){
	let shape;
	var randNum;
	randNum = Math.floor((Math.random() * 7) + 1);
	if(randNum == 1)
	{
		shape = [
   			[0, 1, 0],
   			[1, 1, 0],
  			[0, 1, 0],
		];
		
	}
	if(randNum == 2)
	{
		shape = [
		   [2, 2, 0],
		   [0, 2, 0],
		   [0, 2, 0],
		];
	}
	if(randNum == 3)
	{
		shape = [
			[0, 3, 0],
			[0, 3, 0],
			[3, 3, 0],
		]
	}
	if(randNum == 4)
	{
		shape = [
			[4, 0, 0],
			[4, 4, 0],
			[0, 4, 0],
		]
	}
	if(randNum == 5)
	{
		shape = [
		    [0, 5, 0],
		    [5, 5, 0],
		    [5, 0, 0],
		]
	}
	if(randNum == 6)
	{
		shape = [
			[6, 6],
			[6, 6],
		]
	}
	if(randNum == 7)
	{
		shape = [
			[0, 7, 0, 0],
			[0, 7, 0, 0],
			[0, 7, 0, 0],
			[0, 7, 0, 0],
		]
	}
	return shape;
}

//Rotation function for 3x3 and 4x4 pieces. 2x2 square needs no rotation
function shapeRotate()
{
	let rot = player.matrix;
	//Rotation for 3 tuple
	if(player.matrix.length === 3)
	{
		player.matrix = [
			[rot[2][0], rot[1][0], rot[0][0]],
			[rot[2][1], rot[1][1], rot[0][1]],
			[rot[2][2], rot[1][2], rot[0][2]],
		]
		//right wall bounce back during rotation for 3x3
		if(player.pos.x > 9)
		{
			let tempPlayer = player;
			tempPlayer.pos.x = tempPlayer.pos.x--;
			if(colliderFunc(grid, tempPlayer)) player.pos.x--;
		}
		//Bottom bounds bounce back during rotation out of bounds for 3x3
		if(player.pos.y > 17)
		{
			let tempPlayer = player;
			tempPlayer.pos.y = tempPlayer.pos.y--;
			if(colliderFunc(grid, player)) player.pos.y--;
		}
	}
	//Rotation for 4 tuple Long piece
	else if(player.matrix.length === 4)
	{
		player.matrix = [
			[rot[3][0], rot[2][0], rot[1][0], rot[0][0]],
			[rot[3][1], rot[2][1], rot[1][1], rot[0][1]],
			[rot[3][2], rot[2][2], rot[1][2], rot[0][2]],
			[rot[3][3], rot[2][3], rot[1][3], rot[0][3]],
		]
		//right wall out of bounds bounce back for 4x4
		if(player.pos.x > 9 || player.pos.x > 8)
		{
			let tempPlayer = player;
			tempPlayer.pos.x = tempPlayer.pos.x - 1;
			if(colliderFunc(grid, tempPlayer)) player.pos.x--;
		}
		if(player.pos.y > 16)
		{
			let tempPlayer = player;
			tempPlayer.pos.y = tempPlayer.pos.y--;
			if(colliderFunc(grid, tempPlayer)) player.pos.y--;
		}
	}
	//bounce piece back if it goes out of bounds during rotation
	if(player.pos.x < 0)
	{
       let tempPlayer = player;
	   tempPlayer.pos.x = tempPlayer.pos.x++;
	   if(colliderFunc(grid, tempPlayer)) player.pos.x++;
	}	
}

let max_drop_used = false;
let c_dropTime = 0;
/* function to make the shape drop all the way to the bottom of the grid
 * when user hits the space bar
 */
function maxDrop()
{
  if(player.pos.y >= 1)
  {
    while(!colliderFunc(grid, player))
    {
      player.pos.y++;
    }
    player.pos.y--;
    c_dropTime = dropInterval;
    dropInterval = 0;
    max_drop_used = true;
  }
}

//functions to create the ghost piece
function ghost_block_func()
{
  const ghost = _.cloneDeep(player);
  for(let vy = 0; vy < ghost.matrix.length; vy++)
  {
    for(let vx = 0; vx < ghost.matrix.length; vx++)
    {
      if(ghost.matrix[vy][vx] != 0) ghost.matrix[vy][vx] = 10;
    }
  }
  return ghost.matrix;
}

function ghost_coordinates()
{
  let ghost_matrix = player.matrix;
  let gx = player.pos.x;
  let gy = player.pos.y;
  const ghost = {
    pos: {x: gx, y: gy},
    matrix: ghost_matrix,
  };
  if(ghost.pos.y >= 0)
  {
    while(!colliderFunc(grid, ghost))
    {
      ghost.pos.y++;
    }
    ghost.pos.y--;
  }
  return ghost.pos;
}

function colliderFunc(grid, player)
{
	let len = player.matrix.length;
	let matrix = player.matrix;
	let pos = player.pos;
	for(let y = 0; y < len; ++y)
	{
		for(let x = 0; x < player.matrix[y].length; ++x)
		{
			if( matrix[y][x] !== 0 &&
				(grid[y + pos.y] && 
				grid[y + pos.y][x + pos.x]) !== 0)
			{
				return true;
			}
		}
	}
	return false;
}

/* Function to set the shape on the board once it lands
 * and to count the score for each piece that lands.
 * See the "score" function for the addition scoring
 * for completing rows
 */
function merge(grid, player)
{
	player.matrix.forEach((row, y) => {
		row.forEach((value, x) => {
			if(value !== 0){
				grid[y + player.pos.y][x + player.pos.x] = value;
			}
		});
		
	});
	// Scoring for level 1
	if((scoreCount >= 0) && (scoreCount < 1000))
	{
		scoreCount += 37;
	}
	// Scoring for level 2
	else if((scoreCount >= 1000) && (scoreCount < 3000))
	{
		level = 2;
		scoreCount += 53;
		dropInterval = 700;
	}
	// Scoring for level 3
	else if((scoreCount >= 3000) && (scoreCount < 6000))
	{
		level = 3;
		scoreCount += 78;
		dropInterval = 500;
	}
	// Scoring for level 4
	else if((scoreCount >= 6000) && (scoreCount < 12000))
	{
		level = 4;
		scoreCount += 105;
		dropInterval = 400;
	}
	// Scoring for level 5
	else if((scoreCount >= 12000) && (scoreCount < 20000))
	{
		level = 5;
		scoreCount += 139;
		dropInterval = 300;
	}
	// Scoring for level 6
	else if((scoreCount >= 20000) && (scoreCount < 28000))
	{
		level = 6;
		scoreCount += 170;
		dropInterval = 150;
	}
	// Scoring for level 7
	else if((scoreCount >= 28000))
	{
		level = 7;
		scoreCount += 250;
		dropInterval = 100;
	}
	document.getElementById("score").innerHTML = "SCORE " + scoreCount;
}
function playerDrop()
{
	if(play_btn_activated)
	{
		player.pos.y++;

    //pausing the game if game paus buttion is pressed
    if(game_paused == true)
    {
      player.pos.y--;
      paused_interval = true;
    }
    //un pausing the game if game unpause button is pressed
    else if((game_paused == false) && (paused_interval == true))
    {
      paused_interval = false;
      gameAudio.play();
    }
		//endGame();
		if(colliderFunc(grid, player))
		{	
			//player reaches the top. Game over
			if(((player.pos.y) == 1))
			{
				player.pos.y--;
				gameAudio.pause();
				document.getElementById("score").innerHTML = "GAME OVER";
				document.getElementById("level").innerHTML = "SCORE = " + scoreCount 
				+ " LVL = " + level + " LINES = " + lines;
				in_Play = false;
			}
			else
			{	
				drop_number++;
				player.pos.y--;
				merge(grid, player);
				dropAudio.play();
				score();
				player.pos.y = 0;
				player.pos.x = 5;
				shape_switch = 0;
				shapeReset();
        if(max_drop_used)
        {
          dropInterval = c_dropTime;
          max_drop_used = false;
        }
			}
		}
 		dropCounter = 0;
 	}
 	else if(!play_btn_activated)
 	{
 		dropInterval = 200;
 		player.pos.y++;
 		if(colliderFunc(grid, player))
 		{
 			let randX = Math.floor((Math.random() * 8) + 1);
 			player.pos.y = 0;
 			player.pos.x = randX;
      player.matrix = shapeMaker();
 		}
 		dropCounter = 0;
 	}
}
function updateDropNumberFunc()
{
	last_strk_drop_n = drop_number;
}

//score function for when a player completes rows
function score()
{
	grid.forEach((row, y) => {
			let fullBox = 0;
			row.forEach((value, x) => {
				if(value !== 0) fullBox++;
			});
				if(fullBox == numberOfCols)
				{
					//Start from bottom of grid to remove complete rows
					//Cannot start from top or all rows will be deleted
					for(let rComplete = y; rComplete > 0; rComplete--)
					{
						for(let c2 = 0; c2 <= 11; c2++)
						{
							grid[rComplete][c2] = grid[rComplete - 1][c2];
						}
					}
					updateDropNumberFunc();
					streakCount++;
					lines++;
					// Row streak multiplier
					// level 1 multiplier
					if((scoreCount >= 0) && (scoreCount < 1000))
					{
						scoreCount = scoreCount + (100 * streakCount);
						document.getElementById("score").innerHTML = "SCORE " + scoreCount + 
						" (x " + streakCount + ")";
					}
					// level 2 multiplier
					else if((scoreCount >= 1000) && (scoreCount < 3000))
					{
						scoreCount = scoreCount + (125 * streakCount);
						document.getElementById("score").innerHTML = "SCORE " + scoreCount + 
						" (x " + streakCount + ")";
							
					}
					// level 3 multiplier
					else if((scoreCount >= 3000) && (scoreCount < 6000)) 
					{
						scoreCount = scoreCount + (150 * streakCount);
						document.getElementById("score").innerHTML = "SCORE " + scoreCount + 
						" (x " + streakCount + ")";
					}
					// level 4 multiplier
					else if((scoreCount >= 6000) && (scoreCount < 12000)) 
					{
						scoreCount = scoreCount + (200 * streakCount);
						document.getElementById("score").innerHTML = "SCORE " + scoreCount + 
						" (x " + streakCount + ")";
					}
					// level 5 multiplier
					else if((scoreCount >= 12000) && (scoreCount < 20000)) 
					{
						scoreCount = scoreCount + (250 * streakCount);
						document.getElementById("score").innerHTML = "SCORE " + scoreCount + 
						" (x " + streakCount + ")";
					}
					// level 6 multiplier
					else if((scoreCount >= 20000) && (scoreCount < 28000)) 
					{
						scoreCount = scoreCount + (350 * streakCount);
						document.getElementById("score").innerHTML = "SCORE " + scoreCount + 
						" (x " + streakCount + ")";
					}
					// level 7 multiplier
					else if(scoreCount >= 28000)
					{
						scoreCount = scoreCount + (500 * streakCount);
						document.getElementById("score").innerHTML = "SCORE " + scoreCount + 
						" (x " + streakCount + ")";
					}
					scoreAudio.play();
				}
				else
				{
					if(drop_number !== last_strk_drop_n) streakCount = 0;
				}
				document.getElementById("level").innerHTML = "LVL:" + level + " LINES: " + lines;	
		});	
}	
function updateAnimation(timeStamp)
{
	const deltaTime = timeStamp - lastTime;
	lastTime = timeStamp;
	dropCounter += deltaTime;
	if(dropCounter > dropInterval)
	{
		playerDrop();
	}
	draw();
	requestAnimationFrame(updateAnimation);		
}
function wallLimit(move)
{
	player.pos.x += move;
	if(colliderFunc(grid, player))
	{
		player.pos.x -= move;
	}
}
document.addEventListener('keydown', event => {
	if(play_btn_activated == true)
	{
		//left Key move
		if(event.keyCode == 37)
		{
			if((in_Play == true) && (!game_paused))
			{
		   		wallLimit(-1);
		   		moveAudio.play();
			}
		}
		//right key move
		else if(event.keyCode == 39)
		{
			if((in_Play == true) && (!game_paused))
			{
		   		wallLimit(1);
		   		moveAudio.play();
			}
		}
		//down key move
		else if(event.keyCode == 40)
		{
			if(in_Play == true && (!game_paused))
			{
		   		playerDrop();
		   		moveAudio.play();
			}
			event.preventDefault();
		}
		//up arrow key piece rotate
		else if(event.keyCode == 38)
		{
			if((in_Play == true) && (!game_paused))
			{
		   		shapeRotate();
          if(colliderFunc(grid, player)) antiRotateFunc();
		   		rotateAudio.play();
			}
			event.preventDefault();
		}
		//space bar piece drop
		else if((event.keyCode == 32))
		{
			if(in_Play == true)
			{
		   		maxDrop();
		   		event.preventDefault();
			}
		}
    //z key hold shape function
		else if(event.keyCode == 90)
		{
			if((in_Play == true) && (!game_paused))
			{
		   		hold();
			}
		}
	}
	else if(!play_btn_activated)
	{
		//down key
		if(event.keyCode == 40)
		{
			event.preventDefault();
		}
		//up arrow key
		if(event.keyCode == 38)
		{
			event.preventDefault();
		}
	}	
});
function switchShapeRotate(switch_matrix)
{
  let rot = switch_matrix;
  //Rotation for 3 tuple
  if(switch_matrix.length === 3)
  {
    switch_matrix = [
      [rot[2][0], rot[1][0], rot[0][0]],
      [rot[2][1], rot[1][1], rot[0][1]],
      [rot[2][2], rot[1][2], rot[0][2]],
    ]
  }
  //Rotation for 4 tuple Long piece
  else if(switch_matrix.length === 4)
  {
    switch_matrix = [
      [rot[3][0], rot[2][0], rot[1][0], rot[0][0]],
      [rot[3][1], rot[2][1], rot[1][1], rot[0][1]],
      [rot[3][2], rot[2][2], rot[1][2], rot[0][2]],
      [rot[3][3], rot[2][3], rot[1][3], rot[0][3]],
    ]
  }
  return switch_matrix;
}
function antiRotateFunc()
{
  let rot = player.matrix;
  //Rotation for 3 tuple
  if(player.matrix.length == 3)
  {
    player.matrix = [
      [rot[0][2], rot[1][2], rot[2][2]],
      [rot[0][1], rot[1][1], rot[2][1]],
      [rot[0][0], rot[1][0], rot[2][0]],
    ]
  }
  //Rotation for 4 tuple Long piece
  else if(player.matrix.length == 4)
  {
    player.matrix = [
      [rot[0][3], rot[1][3], rot[2][3], rot[3][3]],
      [rot[0][2], rot[1][2], rot[2][2], rot[3][2]],
      [rot[0][1], rot[1][1], rot[2][1], rot[3][1]],
      [rot[0][0], rot[1][0], rot[2][0], rot[3][0]],
    ]
  }
}
updateAnimation(0);