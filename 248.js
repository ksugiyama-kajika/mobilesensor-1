// 現在位置の取得
navigator.geolocation.getCurrentPosition(geoSuccess, geoError);

// 取得成功
function geoSuccess(position) {
  // 緯度
  const lat = position.coords.latitude;
  // 経度
  const lng = position.coords.longitude;
  // 緯度経度の誤差(m)
  const accuracy = Math.floor(position.coords.accuracy);

  setMap(lat, lng);
}

function setMap(lat, lng) {
  // 緯度経度を設定
  const latlng = new google.maps.LatLng(lat, lng);

  // マーカーを追加
  const marker = new google.maps.Marker({
    map: map,
    draggable: true,
    animation: google.maps.Animation.DROP,
    position: latlng
  });
}

// 取得失敗
function geoError() {
  alert('Geolocation Error');
}
