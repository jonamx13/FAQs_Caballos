function desplegarRespuesta(button) {
    button.addEventListener('click',()=> {
        const faq = button.nextElementSibling;
        const chevron = button.children[1];

        faq.classList.toggle('show');
        chevron.classList.toggle('rotate');
    });
}

function estructuraHtmlFaqs(FAQ) {
    const question = document.createElement('li');
    question.classList.add('question');
    const buttonQuestion = document.createElement('button');
    //Pregunta
    const questionSpan = document.createElement('span');
    questionSpan.innerText = FAQ.pregunta;
    //Flechita
    const chevronDropDown = document.createElement('i');
    chevronDropDown.setAttribute('class', 'fas fa-chevron-down d-arrow');
    //Respuesta
    const answerFaq = document.createElement('p');
    answerFaq.innerText = FAQ.respuesta;

    //Estructura
    buttonQuestion.append(questionSpan, chevronDropDown);

    question.append(buttonQuestion, answerFaq);

    document.querySelector('.questions-container').append(question);

    //Boton Dropdown
    desplegarRespuesta(buttonQuestion);
}

function cargarPreguntas() {
    fetch('FAQs.json')
        .then(function(res) {
            return res.json();
        })
        .then(function(data) {
            data.forEach(estructuraHtmlFaqs)
        })
}

cargarPreguntas();