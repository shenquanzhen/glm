from zhipuai import ZhipuAI

# 初始化客户端
client = ZhipuAI(api_key="d84165d005595ef758183443b5053037.4jaUy23BLGGoiyUv")

# 创建聊天完成请求
response = client.chat.completions.create(
    model="glm-4",
    messages=[
        {"role": "user", "content": "你好,请介绍一下你自己。"}
    ]
)

# 打印响应
print(response.choices[0].message.content)