const tabs = document.querySelectorAll('.features-tabs .tab');
const contents = document.querySelectorAll('.feature');
const questions = document.querySelectorAll('.question-item');
const questionParagraphs = document.querySelectorAll('.question p');

  tabs.forEach((tab, index) => {
  tab.addEventListener('click', () => {

    tabs.forEach(element =>
      element.classList.remove('active')
    );

    contents.forEach(element =>
      element.classList.remove('active')
    );

    tab.classList.add('active');

    contents[index].classList.add('active');
  });
});

questions.forEach((question, index) => {
  question.addEventListener('click', () =>{
    questionParagraphs.forEach(element => element.classList.remove('active'));
    questionParagraphs[index].classList.add('active');
  }
  )
})