/**
 * Created by toryzhou on 5/22/17.
 */
"use strict";
console.log("hello world");
// x = 3.14;
let a = 'tt';
// var a = 'bb';
console.log(a);
var user = {name: "zhoutong", sex: "male"};
console.log(user.name);
for (var key in user) {
    console.log(user[key]);
}

var userList = [{name: "zhoutong", sex: "male"}, {name: "baobao", sex: "female"}];


for (var i = 0, length = userList.length; i < length; i++) {
    var userItem = userList[i];
    for (var keyItem in userItem) {
        console.log(userItem[keyItem]);
    }
}

console.log(Math.random());
console.log(Math.round(1.49));
console.log(Math.ceil(1.49));
console.log(Math.floor(1.49));
console.log(Math.floor(Math.random() * 8));

var userArray = [5, 3, 1, 4, 2];
function bubbleSort(array) {
    for (var i = 0, length = array.length; i < length; i++) {
        for (var j = i + 1; j < length; j++) {
            if (array[i] > array[j]) {
                var temp = array[j];
                array[j] = array[i];
                array[i] = temp;
            }
        }
    }
}

function selectSort(array) {
    for (var i = 0, length = array.length; i < length; i++) {
        var slc = array[i];
        var slcIdx;
        for (var j = i; j < length; j++) {//选择最小的
            if (array[j] < slc) {
                slc = array[j];
                slcIdx = j;
            }
        }
        if (slc !== array[i]) {
            var temp = array[i];
            array[i] = array[slcIdx];
            array[slcIdx] = temp;
        }
    }
}

function insertSort(array) {
    if (!array || array.length < 2) {
        return;
    }
    for (var i = 0, length = array.length; i < length - 1; i++) {
        var curElement = array[i + 1];
        for (var j = i; j >= 0; j--) {
            if (curElement < array[j]) {
                array[j + 1] = array[j];
                if (j === 0) {
                    array[0] = curElement;
                }

            } else {
                array[j + 1] = curElement;
                break;
            }
        }
    }
}

function insertSort2(array) {
    if (!array || array.length < 2) {
        return;
    }
    for (var i = 1, length = array.length; i < length; i++) {
        if (array[i - 1] > array[i]) {
            var temp = array[i];
            var j = i;
            for (; j > 0 && array[j - 1] > temp; j--) {
                array[j] = array[j - 1];
            }
            array[j] = temp;
        }
    }
}
// bubbleSort(userArray);
// selectSort(userArray);
// insertSort(userArray);
insertSort2(userArray);
console.log(userArray);

var reg = /^[0-9]{6}$/g;
var s = '123456';
// console.log(reg.test(s));//成功返回ture,
var message = reg.exec(s);//成功返回object,不成功返回null
console.log(message);
console.log(typeof message);

class Base {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

var b1 = new Base("zhoutong", 12);
console.log(b1.name);
console.log(b1.age);

var ob = {
    name: "ob",
    show: function () {
        setTimeout(() => {
            console.log(this.name);
        }, 1000);
    }
};
ob.show();

var ob2 = {
    name: "ob2",
    show: function () {
        var _this=this;
        setTimeout(function () {
            console.log(_this.name);
        }, 1000);
    }

};
ob2.show();

// userArray.unshift(9);//数组前面插入
// userArray.push(11);//数组后面插入
// userArray.splice(0,1);//删第一个
userArray.pop();//删最后一个
console.log(userArray);

