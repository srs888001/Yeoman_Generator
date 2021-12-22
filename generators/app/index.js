//此文存做为Generator的核心人口
//需要导出一个继承自Yeoman Generator的类蹩
//Yeoman Generator在工作时会自动调用我的在此类鎏中定义的一些生命属期方法
//我们在这些方法中可以通过调用父类提供的一些工具方法实现一些功能,例如文件写入
//里面有多少个方法， 就执行多少个方法
const Generator = require("yeoman-generator")
module.exports = class extends Generator {
    wirting () {
        // Yeoman自动在生成文件阶段调用此方法
        // 我们这里尝试往项目目录中写入文件
        this.fs.write(
            this.destinationPath('temp.txt'),
            "写了一段测试内容"
        )
    }
    
    wirting1 () {
        // Yeoman自动在生成文件阶段调用此方法
        // 我们这里尝试往项目目录中写入文件
        this.fs.write(
            this.destinationPath('temp1.txt'),
            "写了一段测试内容1"
        )
    }

    templateWirting () {
        // 通过模板方式写入文件到目标目录
        // 模板文件路径 
        const tmpl = this.templatePath('foo.js')
        // 输出目标路径
        const output = this.destinationPath('template-foo.txt')
        // 模板数据上下文
        const context = { 
            title: 'Hello jerry-', 
            success: false , 
            body: { 
                name: 'Jerry',
                age: 18
            }
        }
        this.fs.copyTpl(tmpl, output, context)
    }

    templatesWirting () {

        // 模板数据上下文
        const context = { 
            title: 'Hello jerry-', 
            success: false , 
            body: { 
                name: 'Jerry',
                age: 18
            }
        }
        
        const tmpls = [
            "foo.js",
            "foo.json",
            "foo.html"
        ]

        tmpls.forEach(item => {
            this.fs.copyTpl(this.templatePath(item), 
                this.destinationPath(item), 
                context)
        })
    }
}

//文件目录generator-XXXX

//yo sample 是运行app里面的index.js
//yo sample:app 是运行app里面的index.js
//yo sample:XXX 是运行XXX里面的index.js