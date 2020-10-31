"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
var windowHeight = react_native_1.Dimensions.get('window').height;
var EmptyTodoList = function () {
    return (react_1["default"].createElement(react_native_1.View, { style: {
            height: windowHeight - 80,
            justifyContent: 'center',
            alignItems: 'center'
        } },
        react_1["default"].createElement(react_native_1.Text, null, "\uD560 \uC77C \uBAA9\uB85D\uC774 \uC874\uC7AC\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4. "),
        react_1["default"].createElement(react_native_1.Text, null, "\uD560 \uC77C\uC744 \uCD94\uAC00\uD574\uC8FC\uC138\uC694. ")));
};
exports["default"] = EmptyTodoList;
