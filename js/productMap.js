var _map = $('#productMap'), lat = parseFloat(_map.attr("data-lat")), lon = parseFloat(_map.attr("data-lon")), map_name = _map.attr("data-name"), map_address = _map.attr("data-address");
var isPreview = $(".m-scene").attr("data") == "preview" ? true : false; // 预览模式
$(function () {
    // 微信地图
    $('#productMap').click(function () {
        if (isPreview) {
            showAlert("当前为预览模式，不支持操作");
            return;
        }
        if (isWeiXin()) {
            // wechatMap(lat,lon,map_name,map_address);
            location.href = "http://apis.map.qq.com/tools/poimarker?type=0&marker=coord:" + lat + "," + lon + ";title:" + map_name + ";addr:" + map_address + "&key=OB4BZ-D4W3U-B7VVO-4PJWW-6TKDJ-WPB77&referer=myapp";
        } else {
            location.href = "http://apis.map.qq.com/tools/poimarker?type=0&marker=coord:" + lat + "," + lon + ";title:" + map_name + ";addr:" + map_address + "&key=OB4BZ-D4W3U-B7VVO-4PJWW-6TKDJ-WPB77&referer=myapp";
        }
    });
});
//是否是微信游览器
function isWeiXin() {
    var ua = window.navigator.userAgent.toLowerCase();
    return ua.match(/MicroMessenger/i) == 'micromessenger';
}