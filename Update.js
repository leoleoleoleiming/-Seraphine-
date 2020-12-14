"ui";

ui.layout(
    <vertical>
        <ScrollView>
            <vertical>
                <text textSize="16sp" margin="8">请自行查看版本选择下载，目前就这么更新最方便也最省钱，普通的更新不论是热更新还是冷更新，我都需要花费一定时间来处理，先这么用着</text>
                <webview id="webview" h="*" margin="0 16"/>
            </vertical>
        </ScrollView>
    </vertical>
)

ui.webview.loadUrl("https://wwe.lanzous.com/b00zyjzcb");