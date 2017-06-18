/**
 * Created by Tory on 2017/6/17.
 */
'use strict';
function Register() {
    this.$document = $(document);
    this.$txtPhoneRegister = $('#txt-phone-register');
    this.$pwdPasswordRegister = $('#pwd-password-register');
    this.$pwdPasswordRegisterRepeat = $('#pwd-password-register-repeat');
    this.$pRegisterError = $('#p-register-error');
    this.initEvents(this);
}
Register.prototype.initEvents = function (_this) {
    _this.$document.on('click', '#btn-register', function () {
        _this.btnRegisterClick();
    });
};
Register.prototype.btnRegisterClick = function () {
    let _this = this;
    let phone = this.$txtPhoneRegister.val().trim();
    let password = this.$pwdPasswordRegister.val().trim();
    let passwordRepeat = this.$pwdPasswordRegisterRepeat.val().trim();
    if (!phone || !password || password !== passwordRepeat) {
        this.$pRegisterError.html('输入不正确.');
        return;
    } else {
        this.$pRegisterError.html('');
    }
    $.post(config.contextPath + '/users/addUser', {
        phone: _this.$txtPhoneRegister.val(),
        password: _this.$pwdPasswordRegister.val()
    }, function (data) {
        console.log('data' + data);
    });
};