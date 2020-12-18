/*
时间：2020/11/09
功能：开始确认界面
原理：弹窗提示用户注意事项，确认则开始调用脚本，取消则退出脚本
声明：代码仅供交流使用
*/
//判断是否打开无障碍授权，否则弹到设置页面
auto.waitFor();


events.observeKey();
//启用按键监听,按下音量下键关闭所有脚本运行
events.onKeyDown("volume_down", function(event){
    toast("正在结束运行")
    //文本进度反馈
    engines.stopAllAndToast()
    //停止运行所以脚本并显示停止脚本数量
});


dialogs.build({
  //对话框标题
  title: "注意事项",
  //对话框内容
  content: "1-音量下键停止功能运行\n2-订阅功能下线",
  contentColor:"red",
  
  //第一个键内容
  //positive: "今天是第一次运行",
  //第二个键内容
  negative: "已阅读相关事项并开始",
  //第三个按键
  neutral: "我再想想",
  

/*}).on("positive", ()=>{
  //监听确定键
  var appName = ("学习强国");
  if(appName){
    //启动学习强国  
    launchApp(appName);
  }
  else{
      exit()
      toastLog("未找到学习强国APP，请下载安装后重试")
  }
  
  //显示控制台
  console.show()
  
  //运行计时
  function main() {
    threads.start(
      function () {
        while (1) {
          runTime();
          sleep(1000)
        }
      }
    )
  
    //输出进度提示//
    toastLog("每日首次登陆");
    //3秒后调用第一个脚本
    setTimeout(function(){ engines.execScriptFile("Subscribe.js");},3000);
    
  }
  var runTime = function () {
    var startTime = new Date().getTime()
    return function () {
      var endTime = new Date().getTime()
      var spendTime = Math.floor((endTime - startTime)/1000)
      log(util.format('运行了%d秒',spendTime))
    }
  }()
  main()

toastLog("每日首次登陆");
*/
}).on("negative", ()=>{
  //监听取消键
  var appName = ("学习强国");
if(appName){
    launchApp(appName);
    //启动学习强国
}
else{
    exit()
    toastLog("未找到学习强国APP，请下载安装后重试")
}

console.show()

function main() {
  threads.start(
    function () {
      while (1) {
        runTime();
        sleep(1000)
      }
    }
  )
  
  toastLog("正在启动Seraphine测试");
  //输出进度提示
  setTimeout(function(){ engines.execScriptFile("ArticleRead_1.js");},3000);
  //3秒后调用第一个脚本
}
var runTime = function () {
  var startTime = new Date().getTime()
  return function () {
    var endTime = new Date().getTime()
    var spendTime = Math.floor((endTime - startTime)/1000)
    log(util.format('运行了%d秒',spendTime))
  }
}()
main()
toastLog("正在启动Seraphine测试");
}).on("neutral", ()=>{
  //监听中性键
    exit() 
}).show();

