/**
 * Created by Tory on 2017/6/18.
 */
function Index() {
    this.$document = $(document);
    this.$schSearch = $('#sch-search');
    this.$divBookList = $('#div-book-list');
    this.$divBookPage = $('#div-book-page');
    this.initEvents(this);
    this.loadBookTypeList();
    this.loadBookList();
}
Index.prototype.initEvents = function (_this) {
    _this.$document.on('click', '#btn-search', function () {
        _this.loadBookList(_this.$schSearch.val());
    });
    _this.$document.on('click', '[name="pageButton"]', function () {
        _this.loadBookList(_this.$schSearch.val(), $(this).val());
    });
};

Index.prototype.loadBookTypeList = function () {
    $.get(config.contextPath + '/bookTypes/getBookTypeList', {}, function (data) {
        let bookTypeList = JSON.parse(data);
        for (let i = 0, length = bookTypeList.length; i < length; i++) {
            $('#div-type-value').find('ul').append(
                `<li class="booktypevalue">
                   <a href="javascript:void 0">${bookTypeList[i].type}</a>
                 </li>`
            );
        }
    });
};
Index.prototype.loadBookList = function (name, page) {
    let _this = this;
    page = page ? page : 0;
    $.get(config.contextPath + '/books/getBookList?' + $.param({
            page: page,
            size: 4,
            name: name
        }), {}, function (data) {
        let result = JSON.parse(data);
        let bookList = result.bookList;
        _this.$divBookList.empty();
        for (let i = 0, length = bookList.length; i < length; i++) {
            let book = bookList[i];
            _this.$divBookList.append(
                `    <div style="margin-left: 40px;border: 1px solid rgba(19,20,23,0.46);padding: 6px">
                        <img src="image/zzdx.jpg" height="200" width="200"/>
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
            console.log(i);
            console.log(page);
            console.log("====");

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