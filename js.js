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
