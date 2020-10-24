"use strict";
exports.__esModule = true;
var native_1 = require("@react-navigation/native");
var react_1 = require("react");
var react_native_1 = require("react-native");
var react_native_keyboard_aware_scroll_view_1 = require("react-native-keyboard-aware-scroll-view");
var LoginScreen = function (_a) {
    var login = _a.login;
    var _b = react_1["default"].useState(''), email = _b[0], setEmail = _b[1];
    var _c = react_1["default"].useState(''), password = _c[0], setPassword = _c[1];
    var navigation = native_1.useNavigation();
    var goToMainScreen = function () {
        navigation.navigate('Main');
    };
    var handleChangeEmail = function (value) {
        setEmail(value);
    };
    var handleChangePassword = function (value) {
        setPassword(value);
    };
    var handleSubmit = function () {
        // TODO
        // api -> email, password
        // ... ...
        if (!email || !password) {
            alert('아이디와 비밀번호를 입력해주세요. ');
            return;
        }
        if (email && password) {
            login();
            return;
        }
    };
    return (react_1["default"].createElement(react_native_keyboard_aware_scroll_view_1.KeyboardAwareScrollView, { contentContainerStyle: { flexGrow: 1 } },
        react_1["default"].createElement(react_native_1.View, { style: styles.wrapper },
            react_1["default"].createElement(react_native_1.View, { style: styles.logo },
                react_1["default"].createElement(react_native_1.Text, { style: styles.logoTitle }, "TAMASTUDY"),
                react_1["default"].createElement(react_native_1.Text, { style: styles.logoSubTitle }, "React Native Study")),
            react_1["default"].createElement(react_native_1.View, { style: styles.form },
                react_1["default"].createElement(react_native_1.TextInput, { placeholder: 'Input your Email address...', value: email, onChangeText: handleChangeEmail, autoCorrect: false, autoCapitalize: 'none', style: [styles.defaultInput, styles.emailInput] }),
                react_1["default"].createElement(react_native_1.TextInput, { placeholder: 'Input your Password...', value: password, onChangeText: handleChangePassword, autoCorrect: false, autoCapitalize: 'none', secureTextEntry: true, style: [styles.defaultInput, styles.passwordInput] }),
                react_1["default"].createElement(react_native_1.TouchableOpacity, { onPress: function () { return alert('clicked!'); } },
                    react_1["default"].createElement(react_native_1.Text, { style: { textAlign: 'right', color: '#fff' } }, "Forgot your password?"))),
            react_1["default"].createElement(react_native_1.View, { style: styles.buttons },
                react_1["default"].createElement(react_native_1.TouchableOpacity, { onPress: handleSubmit, style: styles.button },
                    react_1["default"].createElement(react_native_1.Text, { style: styles.buttonText }, "Log In")),
                react_1["default"].createElement(react_native_1.TouchableOpacity, { onPress: function () { return alert('clicked!'); } },
                    react_1["default"].createElement(react_native_1.Text, { style: { textAlign: 'left', color: '#fff' } }, "Don't have an account?"))))));
};
var styles = react_native_1.StyleSheet.create({
    wrapper: {
        flex: 1,
        paddingLeft: 60,
        paddingRight: 60,
        backgroundColor: 'black'
    },
    // LOGO
    logo: {
        flex: 1,
        justifyContent: 'flex-end'
    },
    logoTitle: {
        fontSize: 48,
        fontWeight: '700',
        margin: -10,
        textAlign: 'center',
        color: '#fff',
        marginBottom: 4
    },
    logoSubTitle: {
        fontSize: 14,
        color: '#fff'
    },
    // FORM
    form: {
        flex: 1,
        justifyContent: 'center'
    },
    defaultInput: {
        padding: 16,
        backgroundColor: '#fff',
        borderColor: '#eaeaea',
        borderWidth: 1,
        marginBottom: 8,
        fontSize: 20,
        color: '#000'
    },
    emailInput: {},
    passwordInput: {},
    buttons: {
        flex: 1
    },
    button: {
        backgroundColor: 'red',
        marginBottom: 8
    },
    buttonText: {
        textAlign: 'center',
        color: 'white',
        padding: 16,
        fontWeight: '600'
    }
});
exports["default"] = LoginScreen;
