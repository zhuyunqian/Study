<template>
   <!-- <section class="home-menu"> -->
       <!-- 
           改变选中状态，获取当前路由的路径赋值
           this.$route.path
           unique-opened -- 默认只打开一个折叠菜单
        -->
        <el-menu
                :default-active="activeRoute"
                class="home-menu"
                background-color="#324157"
                text-color="#fff"
                active-text-color="#20a0ff"
                :router="true"
                :unique-opened="true"
                :collapse="collapse"
                >
                
                <!-- v-for循环 -->
                <el-submenu v-for="(menu , index) in menuConfig" :key="index" :index="index+''" >
                    <template slot="title">
                    <i :class="menu.icon"></i>
                    <span>{{menu.name}}</span>
                    </template>
                    <el-menu-item v-for="(menusub , index) in menu.subs" :key="index" :index="menusub.path">
                        {{menusub.name}}
                    </el-menu-item>
                    
                
                </el-submenu>
                
        </el-menu>
      <!-- </section> -->
</template>

<script>
// 引入需要遍历的js数据文件

export default {
    data() {
        return {
            // 简式写法， 这里的属性 == 引入的js的变量
            menuConfig:[
                {   
                    icon:"el-icon-location",
                    name:"商品管理",
                    subs:[
                        {name:"商品列表",path:"/good"},
                        {name:"商品分类",path:"/category"},
                        {name:"品牌管理",path:"/brand"},
                        {name:"商品属性管理",path:"/attribute"},
                    ]
                },
                {   
                    icon:"el-icon-location",
                    name:"订单中心",
                    subs:[
                        {name:"订单列表",path:"/order"},
                    ]
                },
                {   
                    icon:"el-icon-location",
                    name:"店铺运营",
                    subs:[
                        {name:"专题管理",path:"/topic"},
                    ]
                },

            ],
            newMenuConfig:[]
        }
    },
    created(){
        const menuStore = this.$store.state.menu.reduce((prev,item)=>{
            prev[item.path] = true;
            return prev
        },{})

        //console.log(menuStore)

        const newMenuConfig = [];
        for(var i=0; i<this.menuConfig.length; i++){
            let subss = [];
            for(var j=0; j<this.menuConfig.subs.length; j++){
                var path = this.menuConfig[i].subs[j].path;
                if(menuStore[path]){
                    subss.push(this.menuConfig[i].subs[j]);
                }
            }
            if(subss.length>0){
                newMenuConfig.push({
                    icon:this.menuConfig[i].icon,
                    name:this.menuConfig[i].name,
                    subs:subss
                })
            }
        }

        console.log(newMenuConfig);
        this.newMenuConfig = newMenuConfig
    },
    computed: {
        //选中menu/路由 - 计算属性
        activeRoute(){
            // 解决点击编辑按钮进入编辑员工界面后的menu选中问题
            //console.log(this.$route.meta.index)
            return this.$route.meta.index
        },
        // 计算属性获取 - vuex的共享状态 
        collapse(){
            return this.$store.state.collapse
        }
    },
}
</script>

<style lang="less" scoped>
    .home-menu{
        position: absolute;
        left:0;
        top:70px;
        bottom:0;
        // 这里可以让占满屏幕

        //添加滚动条
        overflow:auto;
    }
    // 隐藏滚动条
    .home-menu::-webkit-scrollbar{
        width:0;
    }

    // 折叠菜单这里是重点css判断没有某个类名的情况下
    .home-menu:not(.el-menu--collapse){
        width:250px;
    }

</style>