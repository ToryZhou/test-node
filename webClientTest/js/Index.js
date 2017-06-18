/**
 * Created by Tory on 2017/6/18.
 */
function Index() {
    this.$document=$(document);
    this.initEvents(this);
    this.loadBookList();
}
Index.prototype.initEvents=function (_this) {

};
Index.prototype.loadBookList=function () {
    $.get(config.contextPath+'/books/getBookList',{},function (data) {
        let bookList = JSON.parse(data);
    });
};