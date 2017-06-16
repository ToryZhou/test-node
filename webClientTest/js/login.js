/**
 * Created by Tory on 2017/6/16.
 */
function Login() {
    this.$document = $(document);
    this.$txtPhone = $('#txt-phone');
    this.$txtPassword = $('#txt-password');
    this.$btnLogin = $('#btn-login');
    this.initEvents(this);
}
Login.prototype.initEvents = function (_this) {
    _this.$document.on('click', '#btn-login', function () {
        _this.btnLoginClick();
    });
};

Login.prototype.btnLoginClick = function () {
    //todo 跨域的问题，ajax请求不
    $.get('127.0.0.1:3000/users/login?phone=001&password=001',{},function (data) {
        console.log('1111');
        console.log(data);
    });
    console.log('login click');
};