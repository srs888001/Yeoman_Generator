这是一个模板文件 
内部可以使用EJS模板标记输出数据 
例如: <%= title %> 

其他的EJS语法也支持
<% if (success) { %>
成功了
<% } else { %>
失败了
<% } %>

var data = <%- JSON.stringify(body) %> 