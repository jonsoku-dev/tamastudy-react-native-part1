"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
var dayjs_1 = require("dayjs");
var vector_icons_1 = require("@expo/vector-icons");
var relativeTime_1 = require("dayjs/plugin/relativeTime");
var ko_1 = require("dayjs/locale/ko");
var react_native_swipeout_1 = require("react-native-swipeout");
var react_native_gesture_handler_1 = require("react-native-gesture-handler");
var LoadingComponent_1 = require("./LoadingComponent");
dayjs_1["default"].extend(relativeTime_1["default"]);
dayjs_1["default"].locale(ko_1["default"]);
var TodoCard = function (_a) {
    var id = _a.id, content = _a.content, completed = _a.completed, createdAt = _a.createdAt, onClickCompleteTodo = _a.onClickCompleteTodo, editTodo = _a.editTodo, onClickDeleteButton = _a.onClickDeleteButton, editLoading = _a.editLoading, deleteLoading = _a.deleteLoading;
    var _b = react_1["default"].useState(false), editMode = _b[0], setEditMode = _b[1];
    var _c = react_1["default"].useState(content), editBody = _c[0], setEditBody = _c[1];
    var handleChangeEditBody = function (value) {
        setEditBody(value);
    };
    var onClickEdit = function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, editTodo({ id: id, body: editBody, completed: completed })];
                case 1:
                    _a.sent();
                    setEditMode(false);
                    return [2 /*return*/];
            }
        });
    }); };
    var swipeoutButtons = [
        {
            text: 'Edit',
            backgroundColor: 'green',
            component: (react_1["default"].createElement(react_native_1.View, { style: styles.swipeoutButtonComponent },
                react_1["default"].createElement(vector_icons_1.AntDesign, { name: "edit", size: 24, color: "white" }),
                react_1["default"].createElement(react_native_1.Text, { style: styles.swipeoutButtonComponentText }, "Edit"))),
            onPress: function () { return setEditMode(true); }
        },
        {
            text: 'Delete',
            backgroundColor: 'red',
            component: (react_1["default"].createElement(react_native_1.View, { style: styles.swipeoutButtonComponent }, deleteLoading ? (react_1["default"].createElement(LoadingComponent_1["default"], null)) : (react_1["default"].createElement(react_1["default"].Fragment, null,
                react_1["default"].createElement(vector_icons_1.AntDesign, { name: "delete", size: 24, color: "white" }),
                react_1["default"].createElement(react_native_1.Text, { style: styles.swipeoutButtonComponentText }, "Delete"))))),
            onPress: onClickDeleteButton(id)
        },
    ];
    if (editMode) {
        return (react_1["default"].createElement(react_native_1.View, { style: styles.editModeWrapper },
            react_1["default"].createElement(react_native_1.View, { style: styles.editModeForm },
                react_1["default"].createElement(react_native_gesture_handler_1.TextInput, { style: styles.editModeInput, value: editBody, onChangeText: handleChangeEditBody })),
            react_1["default"].createElement(react_native_1.TouchableOpacity, { onPress: onClickEdit, style: styles.editModeButton }, editLoading ? (react_1["default"].createElement(LoadingComponent_1["default"], null)) : (react_1["default"].createElement(vector_icons_1.AntDesign, { name: "edit", size: 24, color: "black" })))));
    }
    return (react_1["default"].createElement(react_native_swipeout_1["default"], { autoClose: true, right: swipeoutButtons, style: styles.swipeout },
        react_1["default"].createElement(react_native_1.View, { style: styles.wrapper },
            react_1["default"].createElement(react_native_1.View, { style: styles.contents },
                react_1["default"].createElement(react_native_1.Text, { style: styles.body }, content),
                react_1["default"].createElement(react_native_1.Text, null, dayjs_1["default"](createdAt).fromNow())),
            react_1["default"].createElement(react_native_1.TouchableOpacity, { onPress: onClickCompleteTodo({ id: id, completed: completed }), style: styles.completeButton }, completed ? (react_1["default"].createElement(vector_icons_1.AntDesign, { name: "checkcircle", size: 24, color: "black" })) : (react_1["default"].createElement(vector_icons_1.AntDesign, { name: "checkcircleo", size: 24, color: "black" }))))));
};
var styles = react_native_1.StyleSheet.create({
    swipeoutButtonComponent: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    swipeoutButtonComponentText: { color: 'white', marginTop: 4 },
    // edit mode
    editModeWrapper: {
        marginTop: 16,
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center'
    },
    editModeForm: { flex: 1, marginRight: 'auto', padding: 16 },
    editModeInput: {
        padding: 16,
        borderWidth: 1,
        borderColor: 'black'
    },
    editModeButton: { padding: 16, marginRight: 8 },
    // Card
    swipeout: { marginTop: 16 },
    wrapper: {
        backgroundColor: 'white',
        flexDirection: 'row'
    },
    contents: { flex: 3, padding: 16 },
    body: { fontWeight: '900', fontSize: 24, marginBottom: 8 },
    completeButton: { flex: 1, justifyContent: 'center', alignItems: 'center' }
});
exports["default"] = TodoCard;
