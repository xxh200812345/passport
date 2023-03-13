// 创建一个隐藏的链接，并触发点击事件，下载csv文件
function downloadCsv(csv) {
    // BOMを作成
    let bom = new Uint8Array([0xEF, 0xBB, 0xBF]);
    // 创建一个blob对象，用来存储csv数据
    let blob = new Blob([bom,csv], { type: "text/csv;charset=utf-8;" });
    // 创建一个隐藏的a元素，用来指向blob对象，并设置下载属性和文件名
    let link = document.createElement("a");
    link.style.display = "none";
    link.href = URL.createObjectURL(blob);
    link.download = "myTable.csv";
    // 将a元素添加到文档中，并触发点击事件
    document.body.appendChild(link);
    link.click();
}