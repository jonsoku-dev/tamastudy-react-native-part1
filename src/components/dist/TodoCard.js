"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
var dayjs_1 = require("dayjs");
var vector_icons_1 = require("@expo/vector-icons");
var relativeTime_1 = require("dayjs/plugin/relativeTime");
var ko_1 = require("dayjs/locale/ko");
var react_native_swipeout_1 = require("react-native-swipeout");
dayjs_1["default"].extend(relativeTime_1["default"]);
dayjs_1["default"].locale(ko_1["default"]);
var TodoCard = function (_a) {
    var id = _a.id, content = _a.content, completed = _a.completed, createdAt = _a.createdAt, onClickCompleteTodo = _a.onClickCompleteTodo, onClickEditButton = _a.onClickEditButton, onClickDeleteButton = _a.onClickDeleteButton;
    var swipeoutButtons = [
        {
            text: 'Edit',
            backgroundColor: 'green',
            component: (react_1["default"].createElement(react_native_1.View, { style: { flex: 1, justifyContent: 'center', alignItems: 'center' } },
                react_1["default"].createElement(vector_icons_1.AntDesign, { name: "edit", size: 24, color: "white" }),
                react_1["default"].createElement(react_native_1.Text, { style: { color: 'white', marginTop: 4 } }, "Edit"))),
            onPress: onClickEditButton(id)
        },
        {
            text: 'Delete',
            backgroundColor: 'red',
            component: (react_1["default"].createElement(react_native_1.View, { style: { flex: 1, justifyContent: 'center', alignItems: 'center' } },
                react_1["default"].createElement(vector_icons_1.AntDesign, { name: "delete", size: 24, color: "white" }),
                react_1["default"].createElement(react_native_1.Text, { style: { color: 'white', marginTop: 4 } }, "Delete"))),
            onPress: onClickDeleteButton(id)
        },
    ];
    return (react_1["default"].createElement(react_native_swipeout_1["default"], { right: swipeoutButtons, style: { marginTop: 16 } },
        react_1["default"].createElement(react_native_1.View, { style: {
                backgroundColor: 'white',
                flexDirection: 'row'
            } },
            react_1["default"].createElement(react_native_1.View, { style: { flex: 3, padding: 16 } },
                react_1["default"].createElement(react_native_1.Text, { style: { fontWeight: '900', fontSize: 24, marginBottom: 8 } }, content),
                react_1["default"].createElement(react_native_1.Text, null, dayjs_1["default"](createdAt).fromNow())),
            react_1["default"].createElement(react_native_1.TouchableOpacity, { onPress: onClickCompleteTodo({ id: id, completed: completed }), style: { flex: 1, justifyContent: 'center', alignItems: 'center' } }, completed ? (react_1["default"].createElement(vector_icons_1.AntDesign, { name: "checkcircle", size: 24, color: "black" })) : (react_1["default"].createElement(vector_icons_1.AntDesign, { name: "checkcircleo", size: 24, color: "black" }))))));
};
exports["default"] = TodoCard;
