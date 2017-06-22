/**
 * Created by Tory on 2017/6/22.
 */
'use strict';
function Detail() {
    this.$document = $(document);
    this.initEvents(this);
}
Detail.prototype.initEvents = function (_this) {
    let search = location.search;
    let bookList = JSON.parse(localStorage.getItem('bookList'));
    let id = search.split('=')[1];
    bookList.forEach(function (item) {
        if(item.id==id){
            $('#div-detail').empty().append(`
                <div style="display: inline-block" id="div-detail">
                    <span style="font-size: 28px;">${item.name}</span>
                    <p style="font-size: 15px;">价格:$${item.price}</p>
                    <p style="font-size: 15px;">已销售:<span style="color: #ff1717;">${item.sale_count}</span></p>
                    <p style="font-size: 15px;">发行日期:${item.issue_date}</p>
                    <button> 立即购买</button>
                    <button style="margin-left: 5px">加入购物车</button>
                </div>
            `);
        }
    });
    _this.$document.on('click', '#btn-comment', function () {
    });
};