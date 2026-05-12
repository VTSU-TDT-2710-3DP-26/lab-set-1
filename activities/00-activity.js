/// <reference types="p5/global" />

export function preload(){
    //This function is called earliest
}

export function setup(){
    //This function is run once before drawing begins
}

export function main(){
    //This function is called once after setup IF it is exported
    //It may be used with delays or breakpoints to go through step
    //by step
}

export function preDraw(){
    //This function is called before each draw call IF it is
    //exported. The default version sets some sensible defaults
}

export function draw( time ){
    //This function is called every frame IF it is exported.
    //Time is in seconds since start
}