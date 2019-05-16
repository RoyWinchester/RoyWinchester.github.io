(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{183:function(s,t,a){"use strict";a.r(t);var n=a(0),e=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"广度优先搜索"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#广度优先搜索","aria-hidden":"true"}},[s._v("#")]),s._v(" 广度优先搜索")]),s._v(" "),a("p",[s._v("可以回答两类问题")]),s._v(" "),a("ul",[a("li",[s._v("从节点A出发，有前往节点B的路径吗？")]),s._v(" "),a("li",[s._v("从节点A出发，前往节点B的哪条路径最短")])]),s._v(" "),a("h1",{attrs:{id:"队列"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#队列","aria-hidden":"true"}},[s._v("#")]),s._v(" 队列")]),s._v(" "),a("p",[s._v("只支持两个操作："),a("code",[s._v("入队")]),s._v("和"),a("code",[s._v("出队")]),s._v("     先进先出")]),s._v(" "),a("h1",{attrs:{id:"实现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实现","aria-hidden":"true"}},[s._v("#")]),s._v(" 实现")]),s._v(" "),a("p",[s._v("用散列表实现，散列表的好处之一：添加键-值对的顺序是无关紧要的")]),s._v(" "),a("h4",{attrs:{id:"工作原理："}},[a("a",{staticClass:"header-anchor",attrs:{href:"#工作原理：","aria-hidden":"true"}},[s._v("#")]),s._v(" 工作原理：")]),s._v(" "),a("ol",[a("li",[s._v("创建一个队列，用于储存要检查的人")]),s._v(" "),a("li",[s._v("从队列中弹出一个人")]),s._v(" "),a("li",[s._v("检查这个人是否为你想要的")]),s._v(" "),a("li",[s._v("是 那么就大功告成 "),a("code",[s._v("return")])]),s._v(" "),a("li",[s._v("不是 那么将这个人的所有下层加入队列")]),s._v(" "),a("li",[s._v("回到第二步")]),s._v(" "),a("li",[s._v("如果队列为空，那么你的数据中没有你想要的")])]),s._v(" "),a("blockquote",[a("p",[s._v("入队和出队 等价于 压入和弹出")])]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" collections "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" deque\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("search")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    search_queue "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" deque"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    search_queue "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+=")]),s._v(" graph"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n    searched "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("while")]),s._v(" search_queue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        person "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" search_queue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("popleft"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" person_is_seller"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("person"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("person"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('" yes it is!"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("True")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n            search_queue "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+=")]),s._v(" graph"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"person"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n            serach"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("append"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("person"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("False")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("person_is_seller")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'m'")]),s._v("\nsearch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"you"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br")])]),a("p",[s._v("这基本是把每一条边都遍历了，因此运行时间至少为O(边数)")]),s._v(" "),a("p",[s._v("将一个人添加到队列的时间是固定的，即为O(1),因此对每个人都这么做需要的总时间为O(人数)")]),s._v(" "),a("p",[s._v("所以广度优先搜索的运行时间为O(人数+边数)，O(V+E)")]),s._v(" "),a("h1",{attrs:{id:"小结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#小结","aria-hidden":"true"}},[s._v("#")]),s._v(" 小结")]),s._v(" "),a("ul",[a("li",[s._v("广度优先搜索指出是否有A到B的路径")]),s._v(" "),a("li",[s._v("如果有，广度优先搜索将找出最短路径")]),s._v(" "),a("li",[s._v("可以先使用图来建立模型，再使用广度优先搜素来解决问题")]),s._v(" "),a("li",[s._v("有向图中的边为箭头，箭头的方向指定了关系的方向")]),s._v(" "),a("li",[s._v("无向图中的边不带箭头，其中的关系可以是双向的")]),s._v(" "),a("li",[s._v("队列是先进先出的")]),s._v(" "),a("li",[s._v("栈是后进后出的")]),s._v(" "),a("li",[s._v("需要按加入顺序检查搜索列表中的人，否则找到的就不是最短路径，因此搜索列表必须是队列")]),s._v(" "),a("li",[s._v("对于检查过的人，务必不要再去检查，否则可能导致无限循环")])])])}],!1,null,null,null);t.default=e.exports}}]);