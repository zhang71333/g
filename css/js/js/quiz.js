// 获取URL中的章节参数
const urlParams = new URLSearchParams(window.location.search);
const chapter = urlParams.get('chapter');
const currentQuiz = quizData[chapter];

// DOM元素
const chapterTitleEl = document.getElementById('chapter-title');
const quizContentEl = document.getElementById('quiz-content');
const scoreEl = document.getElementById('score');
const totalScoreEl = document.getElementById('total-score');
const submitBtn = document.getElementById('submit-btn');
const resetBtn = document.getElementById('reset-btn');
const backBtn = document.getElementById('back-btn');
const explanationEl = document.getElementById('explanation');

// 初始化答题页面
if (currentQuiz) {
    chapterTitleEl.textContent = currentQuiz.title;
    totalScoreEl.textContent = currentQuiz.totalScore;
    renderQuestions();
} else {
    quizContentEl.innerHTML = '<div class="loading">无效章节，请返回重新选择</div>';
    submitBtn.disabled = true;
    resetBtn.disabled = true;
}

// 渲染题目
function renderQuestions() {
    let html = '';
    currentQuiz.questions.forEach((question, index) => {
        const questionId = `q${index}`;
        html += `<div class="question" data-index="${index}">`;
        html += `<div class="question-title">${question.title}</div>`;

        // 选择题
        if (question.type === "choice") {
            question.options.forEach((option, optIndex) => {
                const optionId = `${questionId}_opt${optIndex}`;
                const optionLetter = String.fromCharCode(65 + optIndex); // A, B, C, D
                html += `
                    <div class="option">
                        <input type="radio" name="${questionId}" id="${optionId}" value="${optionLetter}">
                        <label for="${optionId}">${option}</label>
                    </div>
                `;
            });
        }

        // 填空题
        if (question.type === "fill") {
            html += `
                <div class="fill-blank">
                    <input type="text" id="${questionId}" placeholder="请输入答案（单词/短语）">
                </div>
            `;
        }

        html += '</div>';
    });
    quizContentEl.innerHTML = html;
}

// 提交答案
submitBtn.addEventListener('click', () => {
    let score = 0;
    let explanationHtml = '<h3>答案解析</h3>';

    currentQuiz.questions.forEach((question, index) => {
        const questionId = `q${index}`;
        const questionEl = document.querySelector(`.question[data-index="${index}"]`);
        let userAnswer = '';

        // 获取用户答案
        if (question.type === "choice") {
            const selectedOption = document.querySelector(`input[name="${questionId}"]:checked`);
            userAnswer = selectedOption ? selectedOption.value : '';
        } else if (question.type === "fill") {
            const inputEl = document.getElementById(questionId);
            userAnswer = inputEl.value.trim().toLowerCase();
        }

        // 验证答案
        const isCorrect = userAnswer === question.correctAnswer.toLowerCase();
        if (isCorrect) score += question.score;

        // 生成解析
        explanationHtml += `<div class="question-explanation">`;
        explanationHtml += `<p><strong>第${index + 1}题：</strong>${question.title}</p>`;
        if (isCorrect) {
            explanationHtml += `<p class="correct-answer">✅ 回答正确！正确答案：${question.correctAnswer}</p>`;
            questionEl.style.borderLeft = '4px solid #27ae60';
        } else {
            explanationHtml += `<p class="incorrect-answer">❌ 回答错误！你的答案：${userAnswer || '未作答'} | 正确答案：${question.correctAnswer}</p>`;
            questionEl.style.borderLeft = '4px solid #e74c3c';
        }
        explanationHtml += `</div>`;
    });

    // 更新得分和解析
    scoreEl.textContent = score;
    explanationEl.innerHTML = explanationHtml;
    explanationEl.style.display = 'block';

    // 禁用输入（防止修改）
    document.querySelectorAll('input').forEach(input => {
        input.disabled = true;
    });
    submitBtn.disabled = true;
});

// 重新答题
resetBtn.addEventListener('click', () => {
    renderQuestions();
    scoreEl.textContent = 0;
    explanationEl.style.display = 'none';
    submitBtn.disabled = false;
});

// 返回章节列表
backBtn.addEventListener('click', () => {
    window.location.href = 'index.html';
});
