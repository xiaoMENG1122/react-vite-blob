import { EventEmitter } from 'events';

// new一个全局的EventEmitter对象
const eventEmiter = new EventEmitter();

// 组件间通讯的事件
const eventHello = "hello";

// 注册事件监听
export function addListenerHello (handler) {
	eventEmiter.on(eventHello, handler);
}

// 触发事件
export function doHello (args) {
	eventEmiter.emit(eventHello, args);
}
