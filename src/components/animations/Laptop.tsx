import React from "react";
import Lottie from "react-lottie-player";

import lottieJson from "public/img/laptop-animation.json";

export default function Laptop() {
  return <Lottie loop animationData={lottieJson} play />;
}
