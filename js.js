//Invoer van de gebruiker ophalen en conttroleerd of er geen overbodigen spatie zijn.
function sendMessage() {
    var userInput = document.getElementById('user-input').value;
    if (userInput.trim() === '') return;

    //Bericht van de gebruiker toevoegen aan de chatbox en invoer veld leegmaken.
    appendMessage('user', userInput);
    document.getElementById('user-input').value = '';

    //reactie van de bot ophalen aan he hand van wat de gebruiker heeft in gevult.
    var lowerCaseInput = userInput.toLowerCase();
    if (lowerCaseInput.includes('hoi') || lowerCaseInput.includes('hallo')) {
        setTimeout(function () {
            var botResponse = 'Hallo! Hoe kan ik u helpen?';
            appendMessage('bot', botResponse);
        }, 500);
    } else if (lowerCaseInput.includes('wat kan je')) {
        setTimeout(function () {
            var botResponse = 'wanneer zijn alle opendagen?, welken vakken heb je allemaaal?, wat is het adres van de school? en zit de school op een goede locatie?, waar kan ik mezelf aanmelden voor deze opleiding?, hoelang duurt de opleiding. ';
            appendMessage('bot', botResponse);
        }, 500);
    } else if (lowerCaseInput.includes('opendagen')) {
        setTimeout(function () {
            var botResponse = 'Vrijdag 26 januari van 15.00 tot 20.00 en zaterdag 27 januari van 10.00 tot 14.00.';
            appendMessage('bot', botResponse);
        }, 500);
    } else if (lowerCaseInput.includes('welken vakken heb je')) {
        setTimeout(function () {
            var botResponse = 'Je hebt Nederlands, Engels, rekenen, burgerschap, project, project communicatie, project managment, javascript, CSS/HTML en ontwerpen. en na de eerste periode komen er nog wat bij.';
            appendMessage('bot', botResponse);
        }, 500);
    } else if (lowerCaseInput.includes('adres van de school')) {
        setTimeout(function () {
            var botResponse = 'Prins Alexanderlaan 55';
            appendMessage('bot', botResponse);
        }, 500);
    } else if (lowerCaseInput.includes('zit de school op een goede locatie')) {
        setTimeout(function () {
            var botResponse = 'Ja, je kan er heel makelijk komen met de fiets of metro.';
            appendMessage('bot', botResponse);
        }, 500);
    } else if (lowerCaseInput.includes('aanmelden ')) {
        setTimeout(function () {
            var botResponse = '<a href="https://www.techniekcollegerotterdam.nl/aanmelden">hier</a>';
            appendMessage('bot', botResponse);
        }, 500);
    } else if (lowerCaseInput.includes('hoelang duurt de opleiding ')) {
        setTimeout(function () {
            var botResponse = 'de opleiding duurt normaal 4 jaar maar als je hem versneld doet dan 3.';
            appendMessage('bot', botResponse);
        }, 500);
    } else {
        setTimeout(function () {
            var botResponse = "Sorry ik snap niet wat u bedoelt.";
            appendMessage('bot', botResponse);
        }, 500);
    }

//Functie om een bericht aan de chatbox toe te voegen.
    function appendMessage(sender, message) {
        var chatBox = document.getElementById('chat-box');
        var messageDiv = document.createElement('div');
        messageDiv.className = sender === 'user' ? 'user-message' : 'bot-message';
        messageDiv.innerHTML = message;
        chatBox.appendChild(messageDiv);


        //zorgt ervoor dat je erdoor heen kan scrollen.
        chatBox.scrollTop = chatBox.scrollHeight;
    }
}

const mobilenavtoggle=
    document.getElementById('mobileNavtoggle')
const mobileNav
    document.getElementById('mobileNav')

mobileNavToggle.addeventlistener('click',()=>
{
    mobilenav.classlist.toggle('show');
})

/* Regel 1 tot en met regel 77 gaat over de Home page Javascript */
document.addEventListener("DOMContentLoaded", function() {
    begroetingsPopup();
});

function begroetingsPopup() {
    let huidigeTijd = new Date().getHours();
    let begroetingTekst = "";
    /* begroetingstijd pop up. dus als het 10 uur in de ochtend is krijg je goedenmorgen en als het 9 uur in de avond is krijg je goedenavond. */

    if (huidigeTijd >= 0 && huidigeTijd < 12) {
        begroetingTekst = "Goedemorgen";
    } else if (huidigeTijd >= 12 && huidigeTijd < 18) {
        begroetingTekst = "Goedemiddag";
    } else {
        begroetingTekst = "Goedenavond";
    }

    toonPopup(begroetingTekst);
}

function toonPopup(begroetingTekst) {
    let popupElement = document.getElementById("popup");
    let overlayElement = document.getElementById("overlay");
    let welkomstTekstElement = document.getElementById("welkomstTekst");
     /* hier zie je de getelementbyid; popup, overlay en welkomstekst. hiermee geef je ze een apart id zodat je ze kan onderscheiden */
    if (popupElement && overlayElement && welkomstTekstElement) {
        welkomstTekstElement.innerText = begroetingTekst;
        popupElement.style.display = "block";
        overlayElement.style.display = "block";
    }
}

function sluitPopup() {
    let popupElement = document.getElementById("popup");
    let overlayElement = document.getElementById("overlay");
/* dit stukje code gaat over de sluit pop up dus wanneer je hem weer weg klikt. en daar komt tuurlijk ook weer de id popup en overlay. */
  /* hier staat tuurlijk geen id van welkomstekst, omdat je hem sluit dus hoeft er geen tekst meer in.  */
    if (popupElement && overlayElement) {
        popupElement.style.display = "none";
        overlayElement.style.display = "none";
    }
}

document.addEventListener("DOMContentLoaded", function() {
    // dit zet te datum tot wanneer die aftelt
    const countDownDate = new Date("January 26, 2024 15:00:00").getTime();
    /* hier staat in dat de datum op 26 January 2024 om 15.00 is en dat dan de countdown moet stoppen.*/

    // herlaad countdown om de seconde
    const x = setInterval(function() {
        // pakt de huidige datum en tijd
        const now = new Date().getTime();

        // rekent uit hoelang nog tot de countdown
        const distance = countDownDate - now;

        // rekent uit hoeveel dagen, uren, minuten en seconden het nog is tot de countdown.
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // dit laat de countdown zien.
        document.getElementById("days").innerText = days + "d";
        document.getElementById("hours").innerText = hours + "h";
        document.getElementById("minutes").innerText = minutes + "m";
        document.getElementById("seconds").innerText = seconds + "s";

        // als de countdown voorbij is laad het een berichtje in beeld zien.
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("days").innerText = "EXPIRED";
            document.getElementById("hours").innerText = "";
            document.getElementById("minutes").innerText = "";
            document.getElementById("seconds").innerText = "";
        }
    }, 1000);
});


/* hieronder komt javascript code voor de quiz */
/* hieronder staan de 15 vragen die in de quiz komen met de antwoorden */
const questions = [

    { question: 'Uit hoeveel jaar bestaat de opleiding software developer?', answers: ['2 jaar', '5 jaar', '1 jaar', '4 jaar'], correctIndex: 3 },
    { question: 'Waar zorgt HTML voor?', answers: ['Hiermee kan je je website interactief maken', 'dit voegt tekst toe aan je website', 'hiermee kan je je website kleur geven', 'HTML is voor de database '], correctIndex: 1 },
    { question: 'Welke code gebruik je om een link op je website te zetten?', answers: ['a /a', 'p /p', 'h /h', 'br /br'], correctIndex: 0 },
    { question: 'Waar staat deze code voor? img ', answers: ['daarmee kan je het lettertype groter maken ', 'met die code kan je de tekst dikgedrukt maken ', 'met de code kan je tekst schuingedrukt maken ', 'daarmee kan je een plaatje op je website zetten'], correctIndex: 3 },
    { question: 'waar zorgt CSS voor?', answers: ['met CSS kan je tekst toevoegen aan je website', 'met CSS kan je animaties aan je website toevoegen', 'met CSS kan je kleur geven aan je website', 'CSS bestaat niet'], correctIndex: 2 },
    { question: 'Wat is het adres van de school/opleiding?', answers: ['prins alexanderlaan 55 ', 'schiedamseweg 59', 'Jan Ligthartstraat ', 'scheepsbouwweg 15 '], correctIndex: 0 },
    { question: 'moet je stage lopen? Zo ja welke jaar/jaren.', answers: ['nee hoeft niet', 'leerjaar 2 en 4', 'leerjaar 1', 'leerjaar 3'], correctIndex: 1 },
    { question: 'Hoe plaats je commentaar in een css file?', answers: ['..', '||', '/* */', '**'], correctIndex: 2 },
    { question: 'Waar staat NAVBAR voor?', answers: ['Navigatie bar', 'footer', 'body', 'header'], correctIndex: 0 },
    { question: 'Waar staat deze code voor? #006445', answers: ['het bestaat niet', 'het is een lettertype', 'het is een kleur', 'het is een foutmelding'], correctIndex: 2 },
    { question: 'Wat is een pop up?', answers: ['het bestaat niet', 'je kan codes omhoog poppen', 'de tekst popt omhoog ', 'een berichtbar dat in beeld komt'], correctIndex: 3 },
    { question: 'Wat kan je met een class doen?', answers: ['een code kan je een class geven om het te onderscheiden ', 'verschillende indexes een class geven ', 'het onderscheiden van html en css', 'hierdoor kan je pagina’s samenvoegen '], correctIndex: 0 },
    { question: 'Welke kleur is deze code? 006445 ', answers: ['wit', 'rood', 'groen', 'blauw'], correctIndex: 2 },
    { question: 'Wat voor niveau is de opleiding?', answers: ['vmbo', 'mbo', 'hbo', 'universiteit'], correctIndex: 1 },
    { question: 'Welke code taal ga je als eerst leren in de eerste periode?', answers: ['javascript', 'html', 'c sharp', 'php'], correctIndex: 1 },

];

let currentQuestionIndex = 0;
/* hieronder staan de buttons om de quiz te resetten, om naar volgende vraag te gaan, next quiz voor als je er bijv 2 heb. */
const questionContainer = document.getElementById('question-container');
const answerButtonsContainer = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-button');
const resetButton = document.getElementById('reset-button');

function startQuiz() {
    resetButton.classList.add('hide');
    nextButton.classList.add('hide');
    shuffleQuestions();
    currentQuestionIndex = 0;
    showQuestion(questions[currentQuestionIndex]);
    /* ik heb hierboven ervoor gezorgd dat in de quiz de vragen shuffelen. dus dat je steeds een andere volgorde krijgt. */
}

function resetQuiz() {
    startQuiz();
    document.body.style.backgroundColor = '#fff';
    /* dit is de background color voor als je over de antwoorden heen gaat. normaal is de balk geel maar als je eroverheen gaat word hij wit zodat je weet welke je aanklikt */
}

function showQuestion(question) {
    questionContainer.innerText = question.question;
    resetAnswerButtons();
    /* hierboven staat resetanswerbuttons. daarmee kan je hem dus resetten */
    question.answers.forEach((answer, index) => {
        const button = document.createElement('button');
        button.innerText = answer;
        button.classList.add('btn');
        button.addEventListener('click', () => selectAnswer(index === question.correctIndex));
        answerButtonsContainer.appendChild(button);
        /* met de code hierboven kan je de antwoorden selecteren en ook zien of je hem goed heb ja of nee */
    });
}

function resetAnswerButtons() {
    while (answerButtonsContainer.firstChild) {
        answerButtonsContainer.removeChild(answerButtonsContainer.firstChild);
    }
}

function selectAnswer(correct) {
    if (correct) {
        document.body.style.backgroundColor = '#5cb85c';
    } else {
        document.body.style.backgroundColor = '#d9534f';
    }
    nextButton.classList.remove('hide');
    /* hierboven zie je dat als je hem goed heb dat die groen word en als die fout is word die rood. */
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion(questions[currentQuestionIndex]);
        document.body.style.backgroundColor = '#fff';
        nextButton.classList.add('hide');
    } else {
        questionContainer.innerText = 'Quiz completed!';
        resetButton.classList.remove('hide');
        resetButton.onclick = resetQuiz;
        resetAnswerButtons();
    }
}

function shuffleQuestions() {
    for (let i = questions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [questions[i], questions[j]] = [questions[j], questions[i]];
        /* hier zie je dat de fuction shufflequestions weer terug komt.  */
    }
}