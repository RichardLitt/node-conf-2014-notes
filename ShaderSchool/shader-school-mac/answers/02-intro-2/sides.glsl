void sideLengths(
  highp float hypotenuse,
  highp float angleInDegrees,
  out highp float opposite,
  out highp float adjacent) {

  opposite = sin(opposite/hypotenuse);
  adjacent = cos(adjacent/hypotenuse);

  //TODO: Calculate side lengths here

}

//Do not change this line
#pragma glslify: export(sideLengths)