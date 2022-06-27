# Randomly Polaris
A project using [p5.js](https://p5js.org/) to create a randomly generated scene of the night sky with the North Star. <br/>
Inspired by [this image](https://www.science.org/do/10.1126/article.27798/abs/sn-northstar.jpg) <br/>
Check out the project [here!](https://teihek.github.io/CMPM147-P2/)

## Uses of randomness
- Position of Polaris: This will likely be different depending where it is being observed from.
- Star size, count, and position: There's a lot of stars in the sky. I can't add them all in the image but I can try.
- Hills/Mountains: This will also be different depending on where Polaris is being observed from.
- Moon position, size, and orbit: I couldn't find a picture of the moon and Polaris together in one of those long exposure images, so I just added it in to add more shapes.

## Uses of interactivity
Clicking on the canvas switches from showing the stars as dots and the moon as a crecent to trails of each object. This is done to to imitate what is seen of the night sky using long exposure photography.

## Artist Statement
Given that I had prior experience with p5, I wanted to challenge myself a bit by choosing an image that would require me to take advantage of drawn objects covering one another based on the order that they are placed. <br/> 
I struggled at first, since I knew: <br/>
- The stars needed to rotate around a random point, with Polaris being at the center of the point, while being behind hills/mountains.
- The moon needed to be in front of the stars, but also rotate around a different randomly generated point.
- The hills/mountains need to not rotate, but need to be placed below two sets of objects that do rotate. <br/>

To get around this: <br/>
- The stars are made using arcs with the center at the origin, and the trails are made by manipulating arc length.
- The moon is created by overlapping two circles.
- To rotate the stars and the moon separately while not rotating the hills/mountains, p5's push and pop are used. <br/>

Overall, I think I achieved what I was looking to accomplish with this project

## p2-simple-scene-starter
Credit: Adam Smith; Asiiah Song
