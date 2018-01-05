/**
 * Created by Tory on 2017/6/18.
 */
function Index() {
    this.$document = $(document);
    this.$schSearch = $('#sch-search');
    this.$divBookList = $('#div-book-list');
    this.$divBookPage = $('#div-book-page');
    this.$spnInfo = $('#spn-info');
    this.$divLogin = $('#div-login');
    this.$divLogged = $('#div-logged');

    this.$divLogged = $('#div-logged');

    this.page = 0;
    this.type = 0;
    this.order = 'price';
    this.initEvents(this);
    this.loadBookTypeList();
    this.loadBookList();
}
Index.prototype.initEvents = function (_this) {
    let split = document.cookie.split(";");
    let isLogin = false;
    split.forEach(function (item) {
        if (item.indexOf('phone') >= 0) {
            isLogin = true;
            let phone = item.split('=');
            _this.$spnInfo.html(phone[1]);
            _this.$divLogin.addClass('hidden');
            _this.$divLogged.removeClass('hidden');
        }
    });
    if (!isLogin) {
        _this.$spnInfo.empty();
        _this.$divLogin.removeClass('hidden');
        _this.$divLogged.addClass('hidden');
    }

    _this.$document.on('click', '#a-logout', function () {
        let date = new Date();
        date.setTime(date.getTime() - 1);
        document.cookie = "phone=; expires=" + date.toUTCString();
        document.cookie = "password=; expires=Thu, 01 Jan 1970 00:00:00 GMT";
    });

    _this.$document.on('click', '#btn-search', function () {
        console.log('--------');
        $.get('http://127.0.0.1:8088/pay/pay-method', function (data) {
            console.log(data);
        });
        $.ajax({
            url: 'http://ci-passport.zhihuiya.com:80/loginsubmit',
            type: "POST",
            contentType: "application/x-www-form-urlencoded",
            data: {
                username: 'test_passport@patsnap.com',
                password: 'patsnap123',
                client_id: '10',
                response_type: 'TOKEN'
            },
            success: function (data) {
                console.log(data);
            },
            error: function (error) {
                console.log(error);
            }
        });
        _this.loadBookList(_this.$schSearch.val());
    });
    _this.$document.on('click', '[name="pageButton"]', function () {
        _this.page = $(this).val();
        _this.loadBookList(_this.$schSearch.val());
    });
    _this.$document.on('click', '[name="typeA"]', function () {
        _this.type = $(this)[0].title;
        $('[name="typeA"]').removeClass('background-grey');
        $(this).addClass('background-grey');
        _this.loadBookList(_this.$schSearch.val());
    });
    _this.$document.on('click', '[name="orderA"]', function () {
        _this.order = $(this)[0].title;
        $('[name="orderA"]').removeClass('background-ff1717');
        $(this).addClass('background-ff1717');
        _this.loadBookList(_this.$schSearch.val());
    });
};

Index.prototype.loadBookTypeList = function () {
    $.get(config.contextPath + '/bookTypes/getBookTypeList', {}, function (data) {
        let bookTypeList = JSON.parse(data);
        for (let i = 0, length = bookTypeList.length; i < length; i++) {
            $('#div-type-value').find('ul').append(
                `<li class="booktypevalue">
                   <a href="javascript:void 0" name="typeA" title="${bookTypeList[i].id}">${bookTypeList[i].type}</a>
                 </li>`
            );
        }
    });
};
Index.prototype.loadBookList = function (name) {
    let _this = this;
    let page = this.page;
    let type = this.type;
    let order = this.order;
    $.get(config.contextPath + '/books/getBookList?' + $.param({
            page: page,
            size: 4,
            name: name,
            type: type,
            order: order
        }), {}, function (data) {
        let result = JSON.parse(data);
        let bookList = result.bookList;
        _this.$divBookList.empty();
        localStorage.setItem('bookList',JSON.stringify(bookList));
        for (let i = 0, length = bookList.length; i < length; i++) {
            let book = bookList[i];
            _this.$divBookList.append(
                `    <div style="margin-left: 40px;border: 1px solid rgba(19,20,23,0.46);padding: 6px">
                        <a href="detail.html?id=${book.id}"><img src="image/zzdx.jpg" height="200" width="200"/></a>
                        <p style="font-size: 20px;">${book.name}</p>
                        <p style="font-size: 15px;">价格:$${book.price}</p>
                        <p style="font-size: 15px;">已销售:<span style="color: #ff1717;">${book.sale_count}</span></p>
                        <p style="font-size: 15px;">发行日期:${book.issue_date}</p>
                        <button> 立即购买</button><button style="margin-left: 5px">加入购物车</button>
                    </div>`
            );
        }
        _this.$divBookPage.empty();
        _this.$divBookPage.append(
            `<button name="pageButton" style="width: 50px;height: 30px;" value="0">首页</button>`
        );
        for (let i = 0; i < result.pageCount; i++) {
            if (i == page) {
                _this.$divBookPage.append(
                    `<span style="height: 30px;">${i + 1}</span>`
                );
            } else {
                _this.$divBookPage.append(
                    `<button  name="pageButton" style="width: 30px;height: 30px;" value="${i}">${i + 1}</button>`
                );
            }

        }
        _this.$divBookPage.append(
            `<button  name="pageButton" style="width: 50px;height: 30px;" value="${result.pageCount - 1}">末页</button>`
        );
    });
};