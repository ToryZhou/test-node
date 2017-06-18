/**
 * Created by Tory on 2017/6/17.
 */
'use strict';
function Register() {
    this.$document = $(document);
    this.$txtPhoneRegister = $('#txt-phone-register');
    this.$pwdPasswordRegister = $('#pwd-password-register');
    this.initEvents(this);
}
Register.prototype.initEvents = function (_this) {
    _this.$document.on('click', '#btn-register', function () {
        _this.btnRegisterClick();
    });
};
Register.prototype.btnRegisterClick = function () {
    var _this = this;
    $.post(config.contextPath + '/users/addUser', {
        phone: _this.$txtPhoneRegister.val(),
        password: _this.$pwdPasswordRegister.val()
    }, function (data) {
        console.log(data);
    });
};