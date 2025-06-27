# 树简介

前端没有树类型，使用Array和Object组成树结构

## 树的基本结构

```text
        A (根节点)
       /|\
      B C D (A的子节点，B、C、D的父节点是A)
     /|  |\
    E F  G H (叶子节点)
```

## JavaScript中的树实现

### 1. 使用对象表示树节点

```javascript
// 定义树节点
class TreeNode {
    constructor(value) {
        this.value = value;
        this.children = [];
    }
    
    addChild(child) {
        this.children.push(child);
    }
    
    removeChild(child) {
        const index = this.children.indexOf(child);
        if (index !== -1) {
            this.children.splice(index, 1);
        }
    }
}

// 创建树
const root = new TreeNode('A');
const nodeB = new TreeNode('B');
const nodeC = new TreeNode('C');
const nodeD = new TreeNode('D');
const nodeE = new TreeNode('E');
const nodeF = new TreeNode('F');

root.addChild(nodeB);
root.addChild(nodeC);
root.addChild(nodeD);
nodeB.addChild(nodeE);
nodeB.addChild(nodeF);
```

### 2. 使用数组和对象表示树

```javascript
// 使用嵌套对象表示树
const tree = {
    value: 'A',
    children: [
        {
            value: 'B',
            children: [
                { value: 'E', children: [] },
                { value: 'F', children: [] }
            ]
        },
        {
            value: 'C',
            children: [
                { value: 'G', children: [] }
            ]
        },
        {
            value: 'D',
            children: [
                { value: 'H', children: [] }
            ]
        }
    ]
};
```

### 3. 扁平化数组表示树

```javascript
// 使用扁平数组表示树，每个节点包含id和parentId
const flatTree = [
    { id: 1, value: 'A', parentId: null },
    { id: 2, value: 'B', parentId: 1 },
    { id: 3, value: 'C', parentId: 1 },
    { id: 4, value: 'D', parentId: 1 },
    { id: 5, value: 'E', parentId: 2 },
    { id: 6, value: 'F', parentId: 2 },
    { id: 7, value: 'G', parentId: 3 },
    { id: 8, value: 'H', parentId: 4 }
];

// 将扁平数组转换为嵌套结构
function buildTree(flatData) {
    const map = {};
    const roots = [];
    
    // 创建映射
    flatData.forEach(item => {
        map[item.id] = { ...item, children: [] };
    });
    
    // 构建树结构
    flatData.forEach(item => {
        if (item.parentId === null) {
            roots.push(map[item.id]);
        } else {
            map[item.parentId].children.push(map[item.id]);
        }
    });
    
    return roots;
}

const nestedTree = buildTree(flatTree);
```

## 实际应用场景

### 1. 文件系统

```javascript
// 文件系统树结构
const fileSystem = {
    name: 'root',
    type: 'folder',
    children: [
        {
            name: 'documents',
            type: 'folder',
            children: [
                { name: 'report.txt', type: 'file', children: [] },
                { name: 'presentation.pptx', type: 'file', children: [] }
            ]
        },
        {
            name: 'pictures',
            type: 'folder',
            children: [
                { name: 'vacation.jpg', type: 'file', children: [] }
            ]
        }
    ]
};
```

### 2. DOM树

```javascript
// DOM树结构
const domTree = {
    tagName: 'div',
    attributes: { id: 'container' },
    children: [
        {
            tagName: 'h1',
            attributes: {},
            children: [{ text: '标题', type: 'text' }]
        },
        {
            tagName: 'p',
            attributes: {},
            children: [{ text: '段落内容', type: 'text' }]
        }
    ]
};
```

### 3. 组织架构图

```javascript
// 公司组织架构
const orgChart = {
    name: 'CEO',
    title: '首席执行官',
    children: [
        {
            name: 'CTO',
            title: '技术总监',
            children: [
                { name: '前端组', title: '前端开发', children: [] },
                { name: '后端组', title: '后端开发', children: [] }
            ]
        },
        {
            name: 'CFO',
            title: '财务总监',
            children: [
                { name: '会计组', title: '会计', children: [] }
            ]
        }
    ]
};
```

## 总结

树是一种非常重要的数据结构，在前端开发中有广泛应用：

1. **DOM操作**：浏览器中的DOM就是一棵树
2. **文件系统**：文件夹和文件的层级结构
3. **组件树**：React、Vue等框架的组件结构
4. **路由系统**：前端路由的嵌套结构
5. **菜单系统**：多级菜单的展示

掌握树的基本概念和操作对于理解复杂的数据结构和算法非常重要。
