<template>
  <div id="app">
    <p>1.考试需求文档在doc文件夹内</p>
    <p>2.要求在本项目基础上完成指定功能</p>
    <p>3.本项目会自动把px自动转换成rem，不需要考虑移动端兼容性问题，单位直接用px即可，浏览器上会自动变成是rem;若不想把px转换成rem，那么直接在对应的css属性后面增加一个/*no*/</p>
    <p>4.完成后提交到本仓库上，注意不能直接提交到master上，要新开一个自己名字全拼的分支（例如:weizhiwei）</p>
    <p>5.克隆仓库代码通过https的方式，不要通过ssh的方式</p>
    <router-view/>
  </div>
</template>

<style lang="less">
p {
  font-size: 40px; 
  border-bottom: 1px solid #ddd;
  color: red;
  letter-spacing: 4px; /*no*/
}
</style>
