/**
 * Created by Tory on 2017/6/16.
 */
function Login() {
    this.$document = $(document);
    this.$txtPhone = $('#txt-phone');
    this.$pwdPassword = $('#pwd-password');
    this.$btnLogin = $('#btn-login');
    this.initEvents(this);
}
Login.prototype.initEvents = function (_this) {
    _this.$document.on('click', '#btn-login', function () {
        _this.btnLoginClick();
    });
};

Login.prototype.btnLoginClick = function () {
    $.get(config.contextPath+'/users/login?phone='+this.$txtPhone.val()+'&password='+this.$pwdPassword.val(),{},function (data) {
        console.log(data);
    });
};