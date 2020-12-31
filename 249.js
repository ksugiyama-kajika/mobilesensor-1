// DeviceOrientationEvent
window.addEventListener('deviceorientation', deviceorientationHandler);

// ジャイロセンサーの値が変化
function DeviceOrientationEvent(event) {
  // x軸
  const beta = event.beta;
  // Y軸
  const gamma = event.gamma;
  // z軸
  const alpha = event.alpha;
}
