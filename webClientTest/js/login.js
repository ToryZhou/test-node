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
    $.get('http://127.0.0.1:3000/users/login?phone='+this.$txtPhone.val()+'&password='+this.$txtPassword.val(),{},function (data) {
        console.log(data);
    });
};