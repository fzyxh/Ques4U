# Ques4U详细规划

## 零、工程的基本逻辑

### 1.路由（./src/router）

- 使用路由监听url路径以触发对应事件

### 2.变量与不变量（./src/config）

- 请将数据库帐户密码、路由地址等信息放置于此处，与代码实现分离

### 3.开放接口（./src/api）

- 将所有功能抽象成对象，提供接口于此处，尽量减少依赖，必须的依赖尽量使用传参处理

### 4.责任分离（./src/services）

- 将所有对对象的操作实现于此，每个（读写）操作（行为）单独写于一个文件中

### 5.对象化（./src/models）

- 将对象抽象于此，例如用户实体，问卷实体等

### 6.公共资源（./public）

- 一些公共的css样式表、图像、js脚本等存放于此
  - ./public/images	./public/stylesheets	./public/javascripts

### 7.前端处理（./views）

- 将公共的前端页面模板存放于此

### 8. ./server.js

- 启动http服务

### 9. ./src/app.js

- 处理后端，可参考questionnaire-master

### 10.空白信息

- 空用户ID为000000，空群组ID为000000

### 11.注释

请在代码旁补充必要的注释

## 一、数据库

### 1.Tables

- users_info
- groups_info
- questionnaires_info
- questions_info
- tags_info
- questionnaires_results

### 2.数据库登入

- 存储于./src/config

## 二、用户管理

### 1.用户的基本信息

- 用户ID（user_id）：六位数，顺序生成，从000001开始
- 用户昵称（user_name）：默认初始化为user_xxxxxx，后面的x为user_id
- 用户权限（user_power）：root默认为1，管理员默认为2，普通注册用户默认为3
- 用户密码（user_password）：暂时直接储存为明文，大体完成后改为加密存储
- 用户邮箱（user_email）：字符串，暂时不添加验证邮箱功能
- 用户设置（user_setting）：setting_id-setting_info集合，json

### 2.用户管理的行为

- 注册用户：
  - 接口名称：register_user
  - 需要的参数：user_name、user_password、user_email
  - 数据库table名称：users_info
  - 返回值：注册成功/失败（True/False）
- 登录用户：
  - 接口名称：login_user
  - 需要的参数：user_email、user_password
  - 数据库table名称：user_info
  - 返回值：登录成功/失败（True/False）

## 三、群组管理

### 1.群组的基本信息

- 群组ID（group_id）：六位数，顺序生成，从000001开始
- 群组昵称（group_name）：默认初始化为group_xxxxxx，后面的x为group_id
- 群主ID（master_id）：即创建者的user_id
- 管理员（group_rulers）：ID集合
- 用户集（group_members）：ID集合

### 2.群组管理的行为

- 创建群组：
  - 接口名称：register_group
  - 需要的参数：user_id、group_name
  - 数据库table名称：groups_info
  - 返回值：创建成功/失败（True/False）
- 删除群组：
  - 接口名称：delete_group
  - 需要的参数：group_id
  - 数据库table名称：groups_info
  - 返回值：删除成功/失败（True/False）
- 加入群组：
  - 接口名称：join_group
  - 需要的参数：user_id、group_id
  - 数据库table名称：groups_info
  - 返回值：加入成功/失败（True/False）
- 退出群组：
  - 接口名称：quit_group
  - 需要的参数：user_id、group_id
  - 数据库table名称：groups_info
  - 返回值：退出成功/失败（True/False）

## 四、问卷管理

### 1.问卷的基本信息

- 问卷ID（naire_id）：八位数，顺序生成，从00000001开始
- 问卷名称（naire_name）：字符串
- 发布者（publisher_info）：发布者ID（publisher）、有权限查看该问卷结果的群组ID集合（group_checkers）、可查看该问卷结果的用户ID集合（user_checkers）组成的json串
- 问卷名称（naire_name）：字符串
- 问题ID集合(question_ids)：问卷的问题ID-序号的集合

### 2.问卷管理的行为

- 创建问卷：
  - 接口名称：creat_questionnaire
  - 需要的参数：user_id、naire_name
  - 数据库table名称：questionnaires_info
  - 返回值：创建成功/失败（True/False）
- 删除问卷：
  - 接口名称：delete_questionnaire
  - 需要的参数：user_id
  - 数据库table名称：questionnaires_info
  - 返回值：删除成功/失败（True/False）
- 填写问卷：
  - 接口名称：submit_questionnaire
  - 需要的参数：user_id、问卷填写信息submit_info
  - 数据库table名称：questionnaires_result
  - 返回值：提交成功/失败（True/False）
- 加入题目：
  - 接口名称：add_question
  - 需要的参数：question_number（在问卷中序号，从1开始）、question_id
  - 数据库table名称：questionnaires_results
  - 返回值：加入成功/失败（True/False）

## 五、问题管理

### 1.问题的基本信息

- 问题ID（ques_id）：十位数，顺序生成，从0000000001开始
- 创建者（publisher_id）：创建者ID（publisher）
- 问题类型（ques_type）：一个数字（1单选，2多选，3填空）
- 问题内容（ques_info）：题面ques_title、标签tag_id、题目内容ques_detail（比如选择题的选项等）

### 2.问题管理的行为

- 创建问题：
  - 接口名称：creat_questionnaire
  - 需要的参数：user_id、ques_info、ques_type
  - 数据库table名称：questions_info
  - 返回值：创建成功/失败（True/False）
- 复制问题：
  - 接口名称：copy_questionnaire
  - 需要的参数：ques_id
  - 数据库table名称：questions_info
  - 返回值：复制成功/失败（True/False）
- 修改问题：
  - 接口名称：modify_questionnaire
  - 需要的参数：ques_id、ques_info、ques_type
  - 数据库table名称：questions_info
  - 返回值：修改成功/失败（True/False）

## 六、标签Tag管理

### 1.标签的基本信息：

- 归属用户ID（user_id）：所有者ID
- 归属群组ID（group_id）：若无归属群组，则默认为全0
- 标签内容（tag_info）：tag_id-user_detail集合

### 2.标签管理的行为：

- 添加标签：
  - 接口名称：creat_tag
  - 需要的参数：user_id、group_id、tag_id-user_detail
  - 数据库table名称：tags_info
  - 返回值：添加成功/失败（True/False）
- 修改标签：
  - 接口名称：modify_tag
  - 需要的参数：user_id、group_id、tag_id-user_detail
  - 数据库table名称：tags_info
  - 返回值：修改成功/失败（True/False）

- 删除标签：
  - 接口名称：delete_tag
  - 需要的参数：user_id、group_id、tag_id（若为0则表示该分组全部删除）
  - 数据库table名称：tags_info
  - 返回值：添加成功/失败（True/False）