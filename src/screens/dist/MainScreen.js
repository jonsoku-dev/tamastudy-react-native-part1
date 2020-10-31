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
var EmptyTodoList_1 = require("../components/EmptyTodoList");
var axios_1 = require("axios");
dayjs_1["default"].extend(relativeTime_1["default"]);
dayjs_1["default"].locale(ko_1["default"]);
var MainScreen = function (_a) {
    var logout = _a.logout;
    var _b = react_1["default"].useState([]), todoList = _b[0], setTodoList = _b[1];
    var _c = react_1["default"].useState(''), body = _c[0], setBody = _c[1];
    var handleChangeBody = function (value) {
        setBody(value);
    };
    var addTodo = function () { return __awaiter(void 0, void 0, void 0, function () {
        var response, e_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    if (!body) {
                        return [2 /*return*/, alert('할 일을 입력해주세요.')];
                    }
                    return [4 /*yield*/, axios_1["default"].post("https://tamastudy-todo-api.herokuapp.com/api/todo", {
                            body: body
                        })];
                case 1:
                    response = _a.sent();
                    setTodoList(__spreadArrays(todoList, [response.data.result]));
                    setBody('');
                    return [3 /*break*/, 3];
                case 2:
                    e_1 = _a.sent();
                    console.log(e_1);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); };
    var onClickCompleteTodo = function (_a) {
        var id = _a.id, completed = _a.completed;
        return function () { return __awaiter(void 0, void 0, void 0, function () {
            var response_1, newTodoList, e_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, axios_1["default"].patch("https://tamastudy-todo-api.herokuapp.com/api/todo/" + id, {
                                completed: !completed
                            })];
                    case 1:
                        response_1 = _a.sent();
                        newTodoList = todoList.map(function (todo) {
                            return todo.id === id ? response_1.data.result : todo;
                        });
                        setTodoList(newTodoList);
                        return [3 /*break*/, 3];
                    case 2:
                        e_2 = _a.sent();
                        console.log(e_2);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); };
    };
    var getTodoList = function () { return __awaiter(void 0, void 0, void 0, function () {
        var response, e_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, axios_1["default"].get('https://tamastudy-todo-api.herokuapp.com/api/todo')];
                case 1:
                    response = _a.sent();
                    setTodoList(response.data.result);
                    return [3 /*break*/, 3];
                case 2:
                    e_3 = _a.sent();
                    console.log(e_3);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); };
    react_1.useEffect(function () {
        getTodoList();
    }, []);
    return (react_1["default"].createElement(react_native_1.SafeAreaView, { style: { flex: 1, backgroundColor: '#606060' } },
        react_1["default"].createElement(react_native_1.View, { style: {
                backgroundColor: 'blue',
                marginTop: react_native_1.Platform.OS === 'android' ? 30 : 0,
                position: 'relative'
            } },
            react_1["default"].createElement(react_native_1.TextInput, { placeholder: '할 일을 입력해주세요. ', value: body, onChangeText: handleChangeBody, autoCorrect: false, autoCapitalize: 'none', style: [styles.defaultInput, styles.contentInput] }),
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
        react_1["default"].createElement(react_native_1.View, null,
            react_1["default"].createElement(react_native_1.FlatList, { data: todoList, keyExtractor: function (_a) {
                    var id = _a.id;
                    return String(id);
                }, renderItem: function (_a) {
                    var item = _a.item;
                    return (react_1["default"].createElement(TodoCard_1["default"], { id: item.id, completed: item.completed, content: item.body, createdAt: item.createdAt, onClickCompleteTodo: onClickCompleteTodo }));
                }, ListEmptyComponent: function () { return react_1["default"].createElement(EmptyTodoList_1["default"], null); } }))));
};
var styles = react_native_1.StyleSheet.create({
    defaultInput: {
        backgroundColor: '#fff',
        borderColor: '#eaeaea',
        borderWidth: 1,
        fontSize: 20,
        color: '#000',
        padding: 16,
        height: 80
    },
    contentInput: {}
});
exports["default"] = MainScreen;
