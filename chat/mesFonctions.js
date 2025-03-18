async function getResponse(message, chat_id) {
  var url = "https://aicha.pythonanywhere.com/chat";
  var data = {
    "message": message,
    "chat_id": chat_id
  };

  try {
    let response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });

    let result = await response.json();
    
    if (result) {
      return result.choices[0].message.content;
    } else {
      return "Oups une erreur";
    }
  } catch (error) {
    console.error('Erreur:', error);
    return "Oups une erreur";
  }
}
  function newChat_id(){
    var url = "https://aicha.pythonanywhere.com/newChat"
    fetch(url, {
      method : "GET",
      headers : {
        "Content-Type" : "application/json"
      }
      })
      .then(response => response.json())
      .then(data => {
        if(data) {
          
        }else{
          
          return "Oups un petit problème dans système"
        }
        
      })
      .catch((error) => {
        return error
        
      })
    
  }
  async function sendMessage() {
    const message = userInput.value.trim();
    
    alert(chat_id);
    if (message !== '') {
        appendMessage('user', message);
        
        try {
            var reponse = await getResponse(message, chat_id);
            console.log("Réponse reçue:", reponse);  // Vérifier si la réponse est bien reçue
            
            appendMessage('Aicha', reponse || "Je n'ai pas compris."); // Évite d'afficher 'undefined'
            userInput.value = '';
        } catch (error) {
            console.error("Erreur lors de la récupération de la réponse:", error);
            appendMessage('Aicha', "Une erreur est survenue.");
        }
    }
}
  

function appendMessage(sender, message) {
    const p = document.createElement('p');
    p.textContent = `${sender}: ${message}`;
    chatBox.appendChild(p);
    chatBox.scrollTop = chatBox.scrollHeight;
}
