const map = new Map();

// 添加元素
map.set('name', '张三');
map.set('age', 18);
map.set('gender', '男');

// 获取元素
console.log(map.get('name'));

// 删除元素
map.delete('age');

// 修改元素
map.set('name', '李四');

// 判断元素是否存在
console.log(map.has('name'));

// 获取元素数量
console.log(map.size);

// 清空元素
map.clear();

// 判断元素是否存在
console.log(map.has('name'));

// 获取元素数量
console.log(map.size);
