/**
 * Created by Tory on 2017/6/23.
 */

function Login() {
    this.$document = $(document);
    this.initEvents(this);

}
Login.prototype.initEvents = function (_this) {
    _this.$document.on('click', '#btn-login', function () {
        _this.btnLoginClick();
    });
};

Login.prototype.btnLoginClick = function () {
    document.cookie = 'phone=' + 123;
    document.cookie = 'password=' + 123;
    let date = new Date();
    date.setTime(date.getTime() - 1);
    document.cookie = 'password=;expires=' + date.toUTCString();
    console.log(document.cookie);
    $(window).attr('location','index.html');
}

