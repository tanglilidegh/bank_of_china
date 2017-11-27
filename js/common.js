document.addEventListener('touchstart', function () {
});

var myVideo = document.getElementById("video1");
var myVideo2 = document.getElementById("video2");

$("#playBtn").on('click', function () {
    playPause(myVideo);
});

$("#playBtn2").on('click', function () {
    playPause(myVideo2);
});
function playPause(item) {
    if (item.paused) {
        item.play();
    } else {
        item.pause();
    }
}

// 百度地图API功能,
var map = new BMap.Map("allmap");
var point = new BMap.Point(116.396459, 40.006325);
map.centerAndZoom(point, 17);
var marker = new BMap.Marker(point);  // 创建标注
map.addOverlay(marker);               // 将标注添加到地图中
marker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画
var label = new BMap.Label("朝阳区天辰东路7号(近8号线奥林匹克公园站)", {offset: new BMap.Size(20, -10)});
marker.setLabel(label);

$('#close').on('click', function () {
    $('.apply_btn').css('display', 'none');
});

$(window).load(function () {
    var $c_name = $('.c_name img');
    var c_nameW = $c_name.width();
    $c_name.css('height', ((c_nameW / 202) * 80));
});

// 上传文件的js
var $fileName = $('.fileName');
$('input[type=file]').change(function () {
    var path = $(this).val();
    var fileName = path ? path.substr(path.lastIndexOf('\\') + 1) : '请上传文件';
    $fileName.text(fileName);
});

// 全屏滑动的js
document.addEventListener('touchstart', function () {
});
$(function () {
    $('#dowebok').fullpage({
        scrollOverflow: true
    });
});

// 关闭底部浮层
$('#close').on('click', function () {
    $('.apply_btn').css('display', 'none');
});

// 动态设置图片的高度
$(window).load(function () {
    var $c_name = $('.c_name img');
    var c_nameW = $c_name.width();
    $c_name.css('height', ((c_nameW / 202) * 80));
});
