/*
时间：2020/11/19
功能：阅读第三篇文章
原理：寻找文字点击控件，寻找播放控件，获取坐标计算点击
声明：代码仅供交流使用
*/
sleep(3000);
//排除系统自动刷新干扰
click("发布");
//滑到"综合"
sleep(4000);
var target = className("android.widget.TextView").text("播报").findOnce(0);
click(target.bounds().centerX(), target.bounds().centerY()-70);
//点击第三篇文章
sleep(2000);
setScreenMetrics(1080, 2340);
swipe(570, 1660, 590, 700, 2000);
//反系统作弊检测
sleep(1000);
setScreenMetrics(1080, 2340);
swipe(530, 1990, 575, 420, 2000);
//反系统作弊检测
sleep(1000);
toastLog("正在收藏");
sleep(500);
//找到小星星控件
collect_star = className("android.widget.ImageView").depth(10).findOne();
collect_star.click();
//收藏文章并提示进度

sleep(1000);
toastLog("正在分享");
var share_icon = className("android.widget.ImageView").depth(10).drawingOrder(4).findOne();
share_icon.click();
//点击分享

/*
sleep(1500);
click("分享到");
//点击分享到学习强国
sleep(1500);
var share_part = id("enterprise_session_icon").findOne();
click(share_part.bounds().centerX(),share_part.bounds().centerY());
//选择组织群群聊
sleep(1500);
click("发送",1);
//点击发生，完成分享
*/

sleep(2000);
var share_choice = text("分享到学习强国").id("txt_gv_item").findOne().parent();
sleep(2000);
//点击分享
share_choice.click();
//停留5秒
sleep(5000);
//返回新闻主体内容界面    
back();

sleep(5000);
setScreenMetrics(1080, 2340);
swipe(570, 1660, 590, 700, 2000);
//反系统作弊检测

sleep(35000);
/*
sleep(40000);
setScreenMetrics(1080, 2340);
click(75, 175);
*/
back();
//执行返回主页

setTimeout(function(){ engines.execScriptFile("ArticleRead_4.js");}, 3000);
//调用第二个脚本
toastLog("正在进行第四篇文章阅读");
//程序进度提醒

