// selecting all the questions
const questions = document.querySelectorAll('.question');

questions.forEach((question) => {
    // select question title 
    const questionTitle = question.querySelector('.question-title')
    questionTitle.addEventListener('click', () => {
        console.log(question)

        questions.forEach(function (item) {
        if (item !== question) {
            item.classList.remove("show-text");
        }
        });
        
        question.classList.toggle('show-text')
    })
})