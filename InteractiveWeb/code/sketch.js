// P_2_2_3_01
//
// Generative Gestaltung – Creative Coding im Web
// ISBN: 978-3-87439-902-9, First Edition, Hermann Schmidt, Mainz, 2018
// Benedikt Groß, Hartmut Bohnacker, Julia Laub, Claudius Lazzeroni
// with contributions by Joey Lee and Niels Poldervaart
// Copyright 2018
//
// http://www.generative-gestaltung.de
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * Jiyoon Seok Fall 2021 IXD 
 * Interactive Objects & Environment Project 4
 *
 * MOUSE
 * click               : Stack a stone
 * 
 * KEY
 * Delete/Backspace    : Clear display and restart
 * s                   : Save image
 */
'use strict';

var formResolution = 10;
var stepSize = 2;
var distortionFactor = 1;
var initRadius = 150;
var centerX;
var centerY;
var x = [];
var y = [];
var angle = 360;
var filled = false;
var freeze = false;

var bg;
var click;
var color = [];
var i;
var r;
var canvas;



function setup() {
    
    
  canvas =  createCanvas(windowWidth, windowHeight);

/*
    noFill();
    // init shape
    centerX = width / 2;
    centerY = height / 2;
    var angle = radians(360 / formResolution);
    for (var i = 0; i < formResolution; i++) {
        x.push(cos(angle * i) * initRadius);
        y.push(sin(angle * i) * initRadius);
    }
*/
    //init color 
    color = ['#CC727226', '#de7f6c26', '#F0AE8D26', '#FFE5B826', '#b7b7a426', '#A5A58D26','#7FA18F26','#E3CCAF26','#FAC0AC26'];

    strokeWeight(0.75);


//init click num
    click = 0;
    background('#2E2E2B');

    drawTxt();
}

function draw() {



    //fill(255,5);
    noStroke();
    
    /*
  // floating towards mouse position
  centerX += (mouseX - centerX) * 0.01;
  centerY += (mouseY - centerY) * 0.01;
  */

    // calculate new points
    for (var i = 0; i < formResolution; i++) {
        x[i] += random(-stepSize, stepSize);
        y[i] += random(-stepSize, stepSize);
        // uncomment the following line to show position of the agents
        // ellipse(x[i] + centerX, y[i] + centerY, 5, 5);
    }
    /*
      if (filled) {
        fill(random(255));
      } else {
        noFill();
      }
    */
    beginShape();

    // first controlpoint
    curveVertex(x[formResolution - 1] + centerX, y[formResolution - 1] + centerY);

    // only these points are drawn
    for (var i = 0; i < formResolution; i++) {
        curveVertex(x[i] + centerX, y[i] + centerY);
    }
    curveVertex(x[0] + centerX, y[0] + centerY);

    // end controlpoint
    curveVertex(x[1] + centerX, y[1] + centerY);
    endShape();

   
}

function drawTxt(){
    
    textAlign(CENTER);
    noStroke();
    fill('#EBEDE9');
    if(click>=1){
        fill('#2E2E2B');
    }
    textSize(21);
    text('Rock Balancing',(windowWidth/2), (windowHeight/5)*4)
    
    textSize(16);
    text('Click where you want to stack a stone', (windowWidth/2), (windowHeight/5)*4+40);
    text('Press delete key to restart', (windowWidth/2), (windowHeight/5)*4+65);
}
function mousePressed() {
   
    click += 1;
    if(click>=20){
      //background('#2E2E2B');

       }
    fill(random(color));
    //fill(color[click]);
    stroke(random(color));
    
    // init shape on mouse position
    centerX = mouseX;
    centerY = mouseY;
    var angle = radians(360 / formResolution);
    //var radius = initRadius * random(0.1, 1);
    var radius = random(0.1, 1);
    
    for (var i = 0; i < formResolution; i++) {
        //x[i] = cos(angle * i) * initRadius;
        //y[i] = sin(angle * i) * initRadius/1.5;
        
         x[i] = random (cos(angle * i) * initRadius/1.5, cos(angle * i) * initRadius);
        y[i] = random (sin(angle * i) * initRadius/1.5 ,sin(angle * i) * initRadius);
    }
    
    //for(let i = 0; i<100 ;i++ ){
    //    centerY =- 200;
    //}
}
function stacking(){

}
function keyReleased() {
    if (key == 's' || key == 'S') saveCanvas(gd.timestamp(), 'png');
    if (keyCode == DELETE || keyCode == BACKSPACE){
        canvas =  createCanvas(windowWidth, windowHeight);
        background('#2E2E2B');
        fill('#2E2E2B');
        
       color = ['#CC727226', '#de7f6c26', '#F0AE8D26', '#FFE5B826', '#b7b7a426', '#A5A58D26','#7FA18F26','#E3CCAF26','#FAC0AC26'];




//init click num
    click = 0;
    background('#2E2E2B');

    drawTxt();
    
    };
    //if (key == '1') filled = false;
    //if (key == '2') filled = true;

    // pauze/play draw loop
    //if (key == 'f' || key == 'F') freeze = !freeze;
    //if (freeze) {
    //  noLoop();
    //} else {
    //  loop();
    //}
}
