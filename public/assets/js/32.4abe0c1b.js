(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{527:function(t,s,a){"use strict";a.r(s);var n=a(6),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"title"},[t._v("笔记概览")]),a("p",[t._v("1、JS数据类型"),a("br"),t._v("\n2、JS数据类型的判断"),a("br"),t._v("\n3、JS数据类型的转换")])]),t._v(" "),a("h2",{attrs:{id:"js数据类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#js数据类型"}},[t._v("#")]),t._v(" JS数据类型")]),t._v(" "),a("ul",[a("li",[t._v("基本数据类型：\n"),a("ul",[a("li",[t._v("Undefined\n"),a("ul",[a("li",[t._v("声明但未对其进行初始化时值即为undefined")]),t._v(" "),a("li",[t._v("引入是为了区分空对象指针与未经初始化的变量")]),t._v(" "),a("li",[t._v("对未初始化和未声明的变量执行typeof操作符都会返回undefined，这个结果有逻辑上的合理性(无论对哪种变量都不可能执行真正的操作)")])])]),t._v(" "),a("li",[t._v("Null\n"),a("ul",[a("li",[t._v("表示一个空对象指针")]),t._v(" "),a("li",[t._v("undefined值是派生自null的（null == undefined为true）")]),t._v(" "),a("li",[t._v("只要意在保存对象的变量还没有真正保存对象，就应该明确地让该变量保存为null")])])]),t._v(" "),a("li",[t._v("Boolean")]),t._v(" "),a("li",[t._v("Number\n"),a("ul",[a("li",[t._v("在进行算术计算时，所有以八进制和十六进制表示的数值最终都将被转换为十进制数值、")]),t._v(" "),a("li",[t._v("由于浮点数值需要的内存空间是保存整数值的两倍，因此ECMAScript会不失时机地将浮点数值转换为整数值")]),t._v(" "),a("li",[t._v("浮点数值的最高精度是17位小数，但在进行算术计算时其精确度远远不如整数。(0.1 + 0.2 = 0.30000000000000004)")]),t._v(" "),a("li",[t._v("NaN的特点是\n"),a("ul",[a("li",[t._v("任何涉及NaN的操作都会返回NaN")]),t._v(" "),a("li",[t._v("NaN与任何值都不相等包括它本身")])])])])]),t._v(" "),a("li",[t._v("String")])])]),t._v(" "),a("li",[t._v("引用数据类型：Function、Object（Array、Date、Function、Error、RegExp、Math、Number、String、Boolean、Globle）"),a("br"),t._v("\nObject的每个实例都具有下列方法和属性\n"),a("ul",[a("li",[t._v("constructor: 保存着用于创建当前对象的函数")]),t._v(" "),a("li",[t._v("hasOwnProperty(propertyName): 用于检查给定的属性在当前对象实例中是否存在")]),t._v(" "),a("li",[t._v("isPrototypeOf(object): 用于检查传入的对象是否是当前对象的原型")]),t._v(" "),a("li",[t._v("propertyIsEnumerable(propertyName): 用于检查给定的属性是否能够使用for-in语句来枚举")]),t._v(" "),a("li",[t._v("toLocaleString(): 返回对象的字符串表示，该字符串与执行环境对应")]),t._v(" "),a("li",[t._v("toString(): 返回对象的字符串表示")]),t._v(" "),a("li",[t._v("valueOf(): 返回对象的字符串、数值或布尔值表示")])])]),t._v(" "),a("li",[t._v("ES6新增：Symbol（Symbol类型的对象永远不相等，即便创建它们的时候传入了相同的值，因此，可借助此特性解决属性名的冲突问题，这也是该数据类型存在的主要用途，意为标记）")])]),t._v(" "),a("h2",{attrs:{id:"js数据类型的判断"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#js数据类型的判断"}},[t._v("#")]),t._v(" JS数据类型的判断")]),t._v(" "),a("h3",{attrs:{id:"_1-typeof-操作符"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-typeof-操作符"}},[t._v("#")]),t._v(" 1.typeof 操作符")]),t._v(" "),a("p",[a("code",[t._v("typeof")]),t._v(" 操作符可能返回的值")]),t._v(" "),a("ul",[a("li",[t._v('"undefined" 如果这个值未定义')]),t._v(" "),a("li",[t._v('"boolean" 如果这个值是布尔值')]),t._v(" "),a("li",[t._v('"string" 如果这个值是字符串')]),t._v(" "),a("li",[t._v('"number" 如果这个值是数值')]),t._v(" "),a("li",[t._v('"object" 如果这个值是对象或null')]),t._v(" "),a("li",[t._v('"function" 如果这个值是函数')]),t._v(" "),a("li",[t._v('"symbol" 如果这个值是Symbol')])]),t._v(" "),a("h3",{attrs:{id:"_2-instanceof-对象运算符"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-instanceof-对象运算符"}},[t._v("#")]),t._v(" 2.instanceof 对象运算符")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("obj1 instanceof obj2")]),t._v(" 可以判断obj1是否为obj2的实例")]),t._v(" "),a("li",[t._v("obj2必须为对象，否则会报错")]),t._v(" "),a("li",[t._v("可以对不同的对象实例进行判断判断方法是根据对象的原型链依次向下查询，如果obj2的原型属性存在obj1的原型链上，（obj1 instanceof obj2）值为true")]),t._v(" "),a("li",[t._v("instanceof检测不到基本数据类型但是可以检测到使用下面的方式创建的num、str、boolean")])]),t._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" num "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Number")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("123")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" str "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'abcdef'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" boolean "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Boolean")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 以上三种方式等同于new Object()，Object构造函数会根据传入值的类型返回相应基本包装类型的实例 ")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("h3",{attrs:{id:"_3-constructor-查看对象对应的构造函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-constructor-查看对象对应的构造函数"}},[t._v("#")]),t._v(" 3.constructor 查看对象对应的构造函数")]),t._v(" "),a("p",[t._v("使用constructor是不保险的，因为constructor属性是可以被修改的，会导致检测出的结果不正确")]),t._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" str "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'hello'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("alert")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("str"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("constructor "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" String"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//true")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" bool "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("alert")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("bool"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("constructor "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" Boolean"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//true")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" num "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("123")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("alert")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("num"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("constructor "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v("Number"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//true")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" nul "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("alert")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("nul"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("constructor "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" Object"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//报错")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" und "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("undefined")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("alert")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("und"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("constructor "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" Object"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//报错")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" oDate "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Date")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("alert")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("oDate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("constructor "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" Date"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//true")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" json "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("alert")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("json"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("constructor "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" Object"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//true")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" arr "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("alert")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("arr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("constructor "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" Array"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//true")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" reg "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[t._v("a")]),a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("alert")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("reg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("constructor "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" RegExp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//true")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("fun")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("alert")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fun"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("constructor "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v("Function"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//true")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" error "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Error")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("alert")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("error"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("constructor "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" Error"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//true")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br"),a("span",{staticClass:"line-number"},[t._v("22")]),a("br"),a("span",{staticClass:"line-number"},[t._v("23")]),a("br"),a("span",{staticClass:"line-number"},[t._v("24")]),a("br"),a("span",{staticClass:"line-number"},[t._v("25")]),a("br"),a("span",{staticClass:"line-number"},[t._v("26")]),a("br"),a("span",{staticClass:"line-number"},[t._v("27")]),a("br"),a("span",{staticClass:"line-number"},[t._v("28")]),a("br"),a("span",{staticClass:"line-number"},[t._v("29")]),a("br"),a("span",{staticClass:"line-number"},[t._v("30")]),a("br"),a("span",{staticClass:"line-number"},[t._v("31")]),a("br"),a("span",{staticClass:"line-number"},[t._v("32")]),a("br")])]),a("h3",{attrs:{id:"_4-object-prototype-tostring-call"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-object-prototype-tostring-call"}},[t._v("#")]),t._v(" 4.Object.prototype.toString.call()")]),t._v(" "),a("p",[t._v("可以说不管是什么类型，它都可以立即判断出。"),a("br"),t._v(" "),a("code",[t._v("toString")]),t._v("是"),a("code",[t._v("Object")]),t._v("原型对象上的一个方法，该方法默认返回其调用者的具体类型，更严格的讲，是"),a("code",[t._v("toString")]),t._v("运行时this指向的对象类型，返回的类型格式为"),a("code",[t._v("[object xxx]")]),t._v("，xxx是具体的数据类型"),a("br"),t._v("\n其中包括："),a("br"),t._v(" "),a("code",[t._v("String,Number,Boolean,Undefined,Null,Function,Date,Array,RegExp,Error,HTMLDocument,...")]),a("br"),t._v("\n基本上所有对象的类型都可以通过这个方法获取到。")]),t._v(" "),a("h3",{attrs:{id:"_5-四种判断方法的比较"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-四种判断方法的比较"}},[t._v("#")]),t._v(" 5. 四种判断方法的比较")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("不同类型的优缺点")]),t._v(" "),a("th",[t._v("typeof")]),t._v(" "),a("th",[t._v("instanceof")]),t._v(" "),a("th",[t._v("constructor")]),t._v(" "),a("th",[t._v("Object.prototype.toString.call")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("优点")]),t._v(" "),a("td",[t._v("使用简单")]),t._v(" "),a("td",[t._v("能检测出引用类型")]),t._v(" "),a("td",[t._v("基本能检测所有的类型（除了null和undefined）")]),t._v(" "),a("td",[t._v("检测出所有的类型")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("缺点")]),t._v(" "),a("td",[t._v("只能检测出基本类型(除null)")]),t._v(" "),a("td",[t._v("不能检测出基本类型，且不能跨iframe")]),t._v(" "),a("td",[t._v("constructor易被修改，也不能跨iframe")]),t._v(" "),a("td",[t._v("IE6下，undefined和null均为Object")])])])]),t._v(" "),a("h3",{attrs:{id:"_6-一些tips"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-一些tips"}},[t._v("#")]),t._v(" 6. 一些Tips")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("null == undefined")]),t._v("是true，其实值undefined是null派生来的，因此ecmaScript把他们定义为相等的")]),t._v(" "),a("li",[t._v("判断一个对象"),a("code",[t._v("{}")]),t._v("是否为空对象的方法\n"),a("ul",[a("li",[t._v("用 "),a("code",[t._v("for in")]),t._v(" 遍历属性"),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("isEmptyObject")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("e")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("  \n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  \n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("t "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  \n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  \n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("  \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br")])])]),t._v(" "),a("li",[t._v("通过JSON自带的"),a("code",[t._v(".stringify()")]),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("JSON")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("stringify")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("c"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'{}'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'空对象'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])])]),t._v(" "),a("li",[t._v("ES6新增的方法"),a("code",[t._v("Object.keys()")]),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Object"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("keys")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("obj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'空对象'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'非空对象'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])])])])])]),t._v(" "),a("h2",{attrs:{id:"js数据类型的转换"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#js数据类型的转换"}},[t._v("#")]),t._v(" JS数据类型的转换")]),t._v(" "),a("h3",{attrs:{id:"boolean"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#boolean"}},[t._v("#")]),t._v(" Boolean")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("Boolean()")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("转换类型")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("转换为true的值")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("转换为false的值")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("String => Boolean")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("非空字符串")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("空字符串")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Number => Boolean")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("任何非零数字值（包括无穷大）")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("0和NaN")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Object => Boolean")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("任何对象")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("null")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Undefined => Boolean")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("not applicable")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("undefined")])])])])])]),t._v(" "),a("h3",{attrs:{id:"number"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#number"}},[t._v("#")]),t._v(" Number")]),t._v(" "),a("ul",[a("li",[a("p",[a("code",[t._v("Number()")]),a("br"),t._v("\n转换规则")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("Boolead => Number")]),t._v(" true和false将分别被转换为1和0")]),t._v(" "),a("li",[a("code",[t._v("null => Number")]),t._v(" 返回0")]),t._v(" "),a("li",[a("code",[t._v("undefined => Number")]),t._v(" 返回NaN")]),t._v(" "),a("li",[a("code",[t._v("String => Number")]),t._v(" "),a("ul",[a("li",[t._v("只包含数字则将其转换为十进制数值")]),t._v(" "),a("li",[t._v("包含有效的浮点格式则将其转换为对应的浮点数值")]),t._v(" "),a("li",[t._v("包含有效的十六进制格式，则将其转换为相同大小的十进制数值")]),t._v(" "),a("li",[t._v("空字符串转换为0")]),t._v(" "),a("li",[t._v("包含上述格式之外的字符转换为NaN")])])]),t._v(" "),a("li",[a("code",[t._v("Object => Number")]),t._v(" "),a("ul",[a("li",[t._v("是对象则调用对象的valueOf() 方法，然后依照前面的规则转换返回的值，如果转换的结果是NaN，则调用对象的toString() 方法，然后再依照前面的规则转换返回的字符串值")])])])])]),t._v(" "),a("li",[a("p",[a("code",[t._v("parseInt()")])]),t._v(" "),a("p",[a("code",[t._v("Number()")]),t._v("在转换字符串时比较复杂而且不够合理，在处理整数的时候更常用"),a("code",[t._v("parseInt()")])]),t._v(" "),a("p",[t._v("转换规则：从第一个非空格字符开始，如果第一个非空格字符不是数字字符或者负号，就会返回NaN，如果第一个非空格字符是数字字符，就会继续解析直到解析完所有字符或者遇到了一个非数字字符。")]),t._v(" "),a("p",[t._v("小数点不算做有效字符")]),t._v(" "),a("p",[t._v("第二个参数可以设置转换时使用的基数(即多少进制)")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("parseFloat()")]),a("br"),t._v("\n转换规则与"),a("code",[t._v("parseInt()")]),t._v("相似，但是字符串中的第一个小数点是有效的，而第二个小数点都是无效的")]),t._v(" "),a("p",[a("code",[t._v("parseInt()")]),t._v(" 和 "),a("code",[t._v("parseFloat()")]),t._v("的区别")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("parseFloat")]),t._v("的第一个小数点是有效的")]),t._v(" "),a("li",[a("code",[t._v("parseFloat")]),t._v("始终都会忽略前导的0")]),t._v(" "),a("li",[a("code",[t._v("parseFloat")]),t._v("只解析十进制值，因此他没有用第二个参数指定基数的用法，所以十六进制的字符串始终会被转换成0")]),t._v(" "),a("li",[t._v("如果字符串包含的是一个可解析为整数的值，"),a("code",[t._v("parseFloat")]),t._v("会返回整数")])])])]),t._v(" "),a("h3",{attrs:{id:"string"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#string"}},[t._v("#")]),t._v(" String")]),t._v(" "),a("ul",[a("li",[a("p",[a("code",[t._v("toString()")])]),t._v(" "),a("ul",[a("li",[t._v("数值、布尔值、对象和字符串值都有"),a("code",[t._v("toString()")]),t._v("方法但null和undefinded值没有这个方法")]),t._v(" "),a("li",[t._v("在调用数值的该方法时"),a("code",[t._v("toString()")]),t._v("也可以传递参数，参数为输出数值的基数")])])]),t._v(" "),a("li",[a("p",[a("code",[t._v("String()")]),a("br"),t._v("\n在不知道要转换的值是不是null或undefined的情况下，还可以使用转型函数"),a("code",[t._v("String()")]),t._v("，这个函数能够将任何类型的值转换为字符串，转换规则如下：")]),t._v(" "),a("ul",[a("li",[t._v("如果值有"),a("code",[t._v("toString()")]),t._v("方法，则调用该方法并返回相应的结果")]),t._v(" "),a("li",[t._v('如果值为null则返回"null"')]),t._v(" "),a("li",[t._v('如果值是undefined，则返回"undefined"')])])])]),t._v(" "),a("h3",{attrs:{id:"object"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#object"}},[t._v("#")]),t._v(" Object")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("toLocalString()")]),t._v("：返回对象的字符串表示，该字符串与执行环境的地区对应")]),t._v(" "),a("li",[a("code",[t._v("toString()")]),t._v("：返回对象的字符串表示")]),t._v(" "),a("li",[a("code",[t._v("valueOf()")]),t._v("：返回对象的字符串、数值或布尔值表示")])]),t._v(" "),a("h3",{attrs:{id:"隐式类型转换"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#隐式类型转换"}},[t._v("#")]),t._v(" 隐式类型转换")]),t._v(" "),a("p",[t._v("转换隐式类型转换指的是字符串和数值类型之间的转换")]),t._v(" "),a("ul",[a("li",[t._v("在进行字符串和数字之间进行减乘除取模运算或者进行比较运算时，字符串会自动转换为数字。转换数字的默认方法是调用"),a("code",[t._v("Number()")])]),t._v(" "),a("li",[t._v("进行加法运算则是将数字看成字符串进行拼接")])])])}),[],!1,null,null,null);s.default=e.exports}}]);