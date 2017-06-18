/**
 * Created by Tory on 2017/6/18.
 */
function Index() {
    this.$document = $(document);
    this.initEvents(this);
    this.loadBookTypeList();
    this.loadBookList();
}
Index.prototype.initEvents = function (_this) {

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
Index.prototype.loadBookList = function () {
    $.get(config.contextPath + '/books/getBookList', {}, function (data) {
        let bookList = JSON.parse(data);
        for (let i = 0, length = bookList.length; i < length; i++) {

        }

    });
};