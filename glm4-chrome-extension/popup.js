document.addEventListener('DOMContentLoaded', function() {
  const apiKeyInput = document.getElementById('apiKey');
  const saveKeyButton = document.getElementById('saveKey');
  const userInput = document.getElementById('userInput');
  const submitButton = document.getElementById('submit');
  const responseDiv = document.getElementById('response');

  const SYSTEM_PROMPT = `你是一个AI助手，负责模拟人际交往中的两种不同立场：天使般的自己和恶魔般的自己。你的任务是：
1. 分析用户输入的情境或对话。
2. 提供两种不同的解读方式：
   - "天使解读"：站在善意的角度，尽量理解对方的良好意图。
   - "恶魔解读"：站在防御或攻击的角度，假设对方可能有不好的意图。
3. 基于这两种解读，分别给出相应的回应建议：
   - "天使回应"：温和、鼓励或安慰的回应。
   - "恶魔回应"：机智、幽默或巧妙回怼的回应。
4. 每种解读和回应都应该措辞得体，富有表现力，以帮助用户更好地理解情境并选择合适的回应。
5. 确保回应选项能够助用户克服词穷，提供有启发性的表达方式。
请确保每次的解读和回应都是根据具体情境生成的，而不是固定的模板。你的目标是给予用户类似乙游的体验，让他们在选择回应时感受到不同选项带来的影响。`;

  // 加载保存的API密钥
  chrome.storage.sync.get('apiKey', function(data) {
    if (data.apiKey) {
      apiKeyInput.value = data.apiKey;
    }
  });

  // 保存API密钥
  saveKeyButton.addEventListener('click', function() {
    const apiKey = apiKeyInput.value;
    chrome.storage.sync.set({apiKey: apiKey}, function() {
      alert('API key saved');
    });
  });

  // 提交请求
  submitButton.addEventListener('click', function() {
    const apiKey = apiKeyInput.value;
    const message = userInput.value;

    if (!apiKey || !message) {
      alert('Please enter both API key and message');
      return;
    }

    responseDiv.textContent = 'Loading...';

    fetch('https://open.bigmodel.cn/api/paas/v4/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: 'glm-4',
        messages: [
          {role: 'system', content: SYSTEM_PROMPT}, // 这里可以保留
          {role: 'user', content: message}
        ]
      })
    })
    .then(response => response.json())
    .then(data => {
      if (data.choices && data.choices.length > 0) {
        const content = data.choices[0].message.content;
        responseDiv.innerHTML = formatResponse(content);
      } else {
        responseDiv.textContent = 'Error: ' + JSON.stringify(data);
      }
    })
    .catch(error => {
      responseDiv.textContent = 'Error: ' + error.message;
    });
  });

  function formatResponse(content) {
    // 将回应格式化为HTML
    return content.replace(/天使解读：|恶魔解读：|天使回应：|恶魔回应：/g, '<strong>$&</strong><br>')
                  .replace(/\n/g, '<br>');
  }
});