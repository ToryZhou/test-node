# test-node
The HTML5 competition project.

电商主题
node.js调用数据库，自己写

webClient
webServer
5个页面，一定要敲过代码，界面占30%，不要求自适应。先写界面，再写接口。没提到的可以不写
身份验证，投机的方法解决登录状态。只需要存在本地。页面整体效果分。没有动画。

1.基本表单验证，自己写，非空，邮箱，电话号码，身份证验证。验证身份证，邮箱。长度，点，@符号
2.文件命名规则，见名思意。
3.js,css,html分开写
4.登录，注册，新闻列表，新闻详情，个人中心，hight,width 控制图片。登录页面验证，注册页面不需要验证。
5.验证了哪些，通过，不通过也有截图，不通过的样式。导航宽度100， 宽度是多少，距离上面是多少。
6.记住密码的功能，存cookie或localStorage.安全性没有要求。<input type=checkbox>,清空记住密码，用户信息，是否记住密码，两个变量。load的时候拿出来，需要加密存储
7.点击button，失去焦点验证，输入合法性。登录和注册的业务逻辑，提前敲好。
8.实现提示框（模态框）

9.index页面，登录状态的验证，从后端取，或则从localstorage取，
10.搜索，排序，分页，分类，服务器端操作。ajax,数据库连接配置，背下来。界面+功能。后台有路由的要求。图片写死，自己写app server.没有express框架。
11.进详情，上面有导航。权限验证，（没有，购买页面。购物车页面。）。
12.书籍的增删改查
13.node访问mysql。只能用node原生的。node的路由，请求数据接口的，请求路径,两级路由。请求数据POST，只需要演示正确的操作。restful风格

npm install mysql
npm ini

14.跨域，access allow me,返回header设置。
15.insert，update,delete,  insertid需要用到，返回受影响行数.
16.select返回的数据格式，json.
17.登录，用户名密码错误。注册，该用户已存在。提示错误信息

注册     10
登录     15
List     30 时间格式，5分钟前，3天前，过滤。6月8号前显示3天前，日期格式显示，日期运算，时间加减。京东页面布局。列表页有自适应要求（写两套CSS），
	  （第一页，最后一页。在最后一页，最后一页灰掉）书籍列表里要显示我是否已点赞，是否已收藏。列表会有是否已收藏。不一定会有点赞。
Detail      点赞的功能。红星变红，后端有表，刷新过后显示点赞过后。多表查询。点赞，评论，关联子表。
	    点收藏，点登录，没有登录跳登录，登录了回来。 当前路径存到sessionStorage.没有就跳首页。没有登录不可以点，可不可以点赞，后台判断。
            加载的时候要去数据库查是否已经点赞。查一下多少人对这篇文章点赞了。

我的文章   上面是我的信息，下面是文章列表。点击文章到文章预览。(我收藏的文章，增加一段文字)
#个人中心    编辑功能，多表查询，单表插入，更新，删除。第三段编辑，技术标签编辑。增加一段。点一个加号，当前页值取出来，存进去。我的文章，需要编辑。

emmet

setting npm&node enable node.
language javascript Library里面确认html 和 node.js core
超链接有focus样式。 分类多选，js写，不需要用focus， 分类的选中情况。focus的时候该分类的按钮颜色加深
分类只有一个，排序只需要按照时间排序。参考一个京东。
模糊查询，type="%"+?+"%"
只有一页的时候隐藏分页DIV
超链接下划线要去掉
前端静态页面服务器
正则表达式，手机号。
ajax的 type:text

老师演示的时候连数据库失败，是因为多包了个Option,配置没配置对。

使用flex 上下左右布局，使用media标签实现电脑，手机适配，不同的屏幕使用不同的CSS。

发送请求的时候前面要写http://

chrome 设置里面管理密码，点击显示，输入操作系统密码可以看到所有网站密码

Chrome浏览器密码框自动填充的bug
了解决Chrome浏览器密码框自动填充的问题，经过查找资料，此问题已经解决了，就是在原有的input标签前面再加个input标签，并给此input标签设置相应的属性
<!-- 额外增加的input -->
<input type="password" style="width:0;height:0;float:left;visibility:hidden"/>
<!-- 原先的input -->
<input type="password"/>

1.KISSY CSS Reset 1.0
2.css命名空间 命名
3.绝对位置定位 absolute
    relative fixed static absolute
    CSS中position属性( absolute | relative | static | fixed )详解
    absolute | 相对与上一个relative的作偏移，如果是没有就找根
    relative | 被别人挤成现在形状，然后相对与现在形状作偏移
    static | 被别人挤成现在形状，不受top和left控制，这个是position默认属性
    fixed fixed定位，又称为固定定位，它和absoult定位一样，都脱离了文档流，并且能够根据top、right、left、bottom属性进行定位，
          但不同的是fixed是根据窗口为原点进行偏移定位的，也就是说它不会根据滚动条的滚动而进行偏移。
     z-index，又称为对象的层叠顺序，它用一个整数来定义堆叠的层次，整数值越大，则被层叠在越上面，当然这是指同级元素间的堆叠，
     如果两个对象的此属性具有同样的值，那么将依据它们在HTML文档中流的顺序层叠，写在后面的将会覆盖前面的。
     需要注意的是，父子关系是无法用z-index来设定上下关系的，一定是子级在上父级在下。
     Note：使用static 定位或无position定位的元素z-index属性是无效的。
4.span里面不能出现div,行级元素里面不能出现块级元素
5.圣杯布局和双飞翼布局