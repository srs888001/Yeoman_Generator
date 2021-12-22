//此文存做为Generator的核心人口
//需要导出一个继承自Yeoman Generator的类蹩
//Yeoman Generator在工作时会自动调用我的在此类鎏中定义的一些生命属期方法
//我们在这些方法中可以通过调用父类提供的一些工具方法实现一些功能,例如文件写入

const Generator = require("yeoman-generator")
module.exports = class extends Generator {
    wirting () {
        // Yeoman自动在生成文件阶段调用此方法
        // 我们这里尝试往项目目录中写入文件
        this.fs.write(
            this.destinationPath('temp-component.txt'),
            "写了一段测试内容-component"
        )
    }
}

//文件目录generator-XXXX