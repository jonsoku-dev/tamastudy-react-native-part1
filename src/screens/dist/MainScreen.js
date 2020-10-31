"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
var dayjs_1 = require("dayjs");
var relativeTime_1 = require("dayjs/plugin/relativeTime");
var ko_1 = require("dayjs/locale/ko");
var TodoCard_1 = require("../components/TodoCard");
dayjs_1["default"].extend(relativeTime_1["default"]);
dayjs_1["default"].locale(ko_1["default"]);
var MainScreen = function (_a) {
    var logout = _a.logout;
    var _b = react_1["default"].useState([]), todoList = _b[0], setTodoList = _b[1];
    var _c = react_1["default"].useState(''), content = _c[0], setContent = _c[1];
    var handleChangeContent = function (value) {
        setContent(value);
    };
    var addTodo = function () {
        if (!content) {
            return alert('할 일을 입력해주세요.');
        }
        var todo = {
            id: new Date().getTime().toString(),
            content: content.trim(),
            completed: false,
            createdAt: new Date().toISOString()
        };
        setTodoList(__spreadArrays(todoList, [todo]));
        setContent('');
    };
    return (react_1["default"].createElement(react_native_1.SafeAreaView, { style: { flex: 1, backgroundColor: '#606060' } },
        react_1["default"].createElement(react_native_1.View, { style: {
                backgroundColor: 'blue',
                marginTop: react_native_1.Platform.OS === 'android' ? 30 : 0,
                position: 'relative'
            } },
            react_1["default"].createElement(react_native_1.TextInput, { placeholder: '할 일을 입력해주세요. ', value: content, onChangeText: handleChangeContent, autoCorrect: false, autoCapitalize: 'none', style: [styles.defaultInput, styles.contentInput] }),
            react_1["default"].createElement(react_native_1.TouchableOpacity, { style: {
                    position: 'absolute',
                    right: 20,
                    top: '50%',
                    transform: [{ translateY: -8 }],
                    backgroundColor: 'black'
                }, onPress: addTodo },
                react_1["default"].createElement(react_native_1.Text, { style: {
                        padding: 8,
                        color: 'white'
                    } }, "Add"))),
        react_1["default"].createElement(react_native_1.View, { style: { backgroundColor: 'red' } },
            react_1["default"].createElement(TodoCard_1["default"], null))));
};
var styles = react_native_1.StyleSheet.create({
    defaultInput: {
        backgroundColor: '#fff',
        borderColor: '#eaeaea',
        borderWidth: 1,
        fontSize: 20,
        color: '#000',
        padding: 16
    },
    contentInput: {}
});
exports["default"] = MainScreen;
