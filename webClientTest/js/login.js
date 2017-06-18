/**
 * Created by Tory on 2017/6/16.
 */
function Login() {
    this.$document = $(document);
    this.$txtPhone = $('#txt-phone');
    this.$pwdPassword = $('#pwd-password');

    this.$pPhoneError = $('#p-phone-error');
    this.$pPasswordError = $('#p-password-error');

    this.$chbRemember = $('#chb-remember');

    this.$btnLogin = $('#btn-login');
    this.initEvents(this);
}
Login.prototype.initEvents = function (_this) {
    _this.$document.on('click', '#btn-login', function () {
        _this.txtPhoneBlur();
        _this.pwdPasswordBlur();
        _this.btnLoginClick();
    });
    _this.$txtPhone.blur(function () {
        _this.txtPhoneBlur();
    });
    _this.$pwdPassword.blur(function () {
        _this.pwdPasswordBlur();
    });

    let isRem = localStorage.getItem('isRem') || null;
    if (isRem) {
        let user = JSON.parse(localStorage.getItem('user'));
        _this.$chbRemember.prop('checked', true);
        _this.$txtPhone.val(user.phone);
        _this.$pwdPassword.val(user.password);
    }
};

Login.prototype.btnLoginClick = function () {
    let _this = this;
    let phone = this.$txtPhone.val().trim();
    let password = this.$pwdPassword.val().trim();
    let reg = /^1[345678][0-9]{9}$/;
    let isPhone = reg.test(phone);
    if (!phone || !password || !isPhone) {
        return;
    }
    $.get(config.contextPath + '/users/login?phone=' + phone + '&password=' + password, {}, function (data) {
        if (data <= 0) {
            _this.$pPasswordError.html('用户名或密码错误.');
        } else {
            let isRem = _this.$chbRemember.prop('checked');
            if (isRem) {
                localStorage.setItem('isRem', isRem);
                localStorage.setItem('user', JSON.stringify({phone: phone, password: password}));
            } else {
                localStorage.removeItem('isRem');
                localStorage.removeItem('user');
            }
            $(window).attr('location', 'index.html');
        }
    });
};
Login.prototype.txtPhoneBlur = function () {
    let phone = this.$txtPhone.val().trim();
    if (!phone) {
        this.$pPhoneError.html('电话号码不能为空.');
    } else {
        let reg = /^1[345678][0-9]{9}$/;
        let isPhone = reg.test(phone);
        if (!isPhone) {
            this.$pPhoneError.html('电话格式不正确.');
        } else {
            this.$pPhoneError.html('');
        }

    }
};
Login.prototype.pwdPasswordBlur = function () {
    if (!this.$pwdPassword.val().trim()) {
        this.$pPasswordError.html('密码不能为空.');
    } else {
        this.$pPasswordError.html('');
    }
};