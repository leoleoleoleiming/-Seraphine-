/*
时间：2020/11/19
时间：2020/12/04
功能：阅读第一篇文章
原理：寻找文字点击控件，寻找播放控件/获取坐标计算点击/新增随机评论
声明：代码仅供交流使用
*/
//排除系统自动刷新干扰
sleep(3000);
//滑到"综合"
click("综合");
//排除手机性能干扰，然后点击第一篇文章
sleep(4000);
var target = className("android.widget.TextView").text("播报").findOnce(0);
click(target.bounds().centerX(), target.bounds().centerY()-70);
//反系统作弊检测
sleep(2000);
setScreenMetrics(1080, 2340);
swipe(570, 1660, 590, 700, 2000);
//反系统作弊检测
sleep(1000);
setScreenMetrics(1080, 2340);
swipe(530, 1990, 575, 420, 2000);
//寻找小星星控件
sleep(1000);
toastLog("正在收藏");
sleep(500);

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
//反作弊检测
sleep(2000);
setScreenMetrics(1080, 2340);
swipe(570, 1660, 590, 700, 2000);

//寻找文本输入控件
var sendButton = text("欢迎发表你的观点").findOne();
sendButton.click();
//产生随机数，通过下面的数组来实现随机回答
var na = random(0,9);
numbers = new Array();
    numbers[0] = "团结合作，共创辉煌";
    numbers[1] = "完善社会保障制度，让老百姓过上好日子";
    numbers[2] = "依法治国和以德治国相辅相成，依法治国为主";
    numbers[3] = "完善法制保障体系，加强法治社会建设";
    numbers[4] = "以人民为中心，加快生态文明建设";
    numbers[5] = "国民经济和社会的发展需要党中央统一规划";
    numbers[6] = "全面建设，新时代高质量发展";
    numbers[7] = "制定规划，抓好落实";
    numbers[8] = "坚持新发展理念，实现高质量发展";
    numbers[9] = "伟大祖国，共创辉煌";
var answer = numbers[na];
setText(answer);
//在控件中输入"团结合作，共创辉煌"
var sendButton = text("发布").findOne();
sendButton.click();
//寻找发布控件并执行发布

sleep(5000);
setScreenMetrics(1080, 2340);
swipe(570, 1660, 590, 700, 2000);
//反系统作弊检测

sleep(35000);
/*
setScreenMetrics(1080, 2340);
click(75, 175);
*/
back();
//执行返回主页

setTimeout(function(){ engines.execScriptFile("ArticleRead_2.js");}, 3000);
//调用第二个脚本
toastLog("正在进行第二篇文章阅读");
//程序进度提醒

