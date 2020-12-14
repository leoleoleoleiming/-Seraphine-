/*
时间：2020/11/19
时间：2020/12/04
功能：地方电台打开
原理：切换到百灵视频页面，刷新，选择第一个视频，利用自动观看，设置计时观看，最后退出，弹到积分页面，提示用户完成测试/兼容控制台显示
声明：代码仅供交流使用
*/
sleep(1500);
//兼容模式和网络
click("百灵");
sleep(3000);
//兼容页面刷新
setScreenMetrics(1080, 2340);
click(838,668); 
//选择第一个视频
sleep(2000);
var video_play = className("android.widget.TextView").text("继续播放").findOnce();
if(text("继续播放").exists())
    {
        video_play.click()
    }
//判断是否为数据连接，如果是点击控件继续播放
toastLog("开始观看，预计8分钟后结束");

sleep(1000);
sleep(60*8*1000);
//观看8分钟视频
id("iv_back").findOne().click();
//返回主页面
//setTimeout(function(){ engines.execScriptFile("/sdcard/脚本/学习强国/4.js");}, 6000);
//6秒后调用第5个脚本
//toast("正在调用第五个脚本");
//输出文本进度
sleep(1000);
id("comm_head_xuexi_score").findOne().click();
sleep(1000);
var end = confirm("今日Seraphine测试已完成,请查看分数，完成后续答题");
if(end){
    toastLog("感谢使用，关闭控制台即可");
    sleep(500);
    engines.stopAll();
    exit();
}
toastLog("感谢使用，关闭控制台即可");
sleep(500);
engines.stopAll();
exit();