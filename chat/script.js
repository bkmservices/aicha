
//Initialisation et definition des variables
const chatBox = 
    document.getElementById('chat-box');
const userInput = 
    document.getElementById('user-input');
const sendButton = 
    document.getElementById('send-button');
const sidebarToggle = 
    document.getElementById('sidebar-toggle');
const modeToggle = 
    document.getElementById('mode-toggle-checkbox');
const sidebar = 
    document.querySelector('.sidebar');

var chat_id = "8d829c65-a0b8-42b5-ae6d-fa168a91c5de"



//code d'optimisations de la barre

    var chatContainer = 
            document.querySelector('.chat-container');
chatContainer.style.width = 'calc(100% - 300px)';
            chatContainer.style.marginLeft = '300px';
            chatContainer.style.width = '100%';
            chatContainer.style.marginLeft = '0%';
            
            

//ecoute d'evenement et action 


sendButton.addEventListener('click', sendMessage);
userInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        sendMessage();
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const newConversationBtn = 
            document.getElementById('new-conversation-btn');
    const conversationContent = 
            document.querySelector('.conversation-content');
    const chatListeButton = 
            document.getElementById('chatListeButton');
            const sidebarToggle = 
            document.getElementById('sidebar-toggle');
    const chatContainer = 
            document.querySelector('.chat-container');

    sidebarToggle.addEventListener('click', function () {
        const sidebar = document.querySelector('.sidebar');
        sidebar.classList.toggle('collapsed');

        if (sidebar.classList.contains('collapsed')) {
            chatContainer.style.width = '96%';
            chatContainer.style.marginLeft = '3%';
        } else {
            chatContainer.style.width = 'calc(100% - 300px)';
            chatContainer.style.marginLeft = '300px';
        }
    });
    newConversationBtn.addEventListener('click', function () {
        conversationContent.textContent = "Nouvelle Conversation";
    });
    chatListeButton.addEventListener('click', function () {
        const sidebar = document.querySelector('.sidebar');
        sidebar.classList.toggle('collapsed');

        if (sidebar.classList.contains('collapsed')) {
            chatContainer.style.width = '96%';
            chatContainer.style.marginLeft = '3%';
        } else {
            chatContainer.style.width = 'calc(100% - 300px)';
            chatContainer.style.marginLeft = '300px';
        }
    });
    newConversationBtn.addEventListener('click', function () {
        conversationContent.textContent = "Nouvelle Conversation";
    });


    modeToggleCheckbox.addEventListener('change', function () {
        chatContainer.classList.toggle('light-mode');
        chatContainer.classList.toggle('dark-mode');
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const dropdownMenu = document.getElementById("dropdown-menu");
    const closeMenuButton = document.getElementById("close-menu");

    // Ouvrir le menu
    menuToggle.addEventListener("click", () => {
        dropdownMenu.classList.toggle("open");
    });

    // Fermer le menu
    closeMenuButton.addEventListener("click", () => {
        dropdownMenu.classList.remove("open");
    });

    // Fermer le menu si on clique en dehors
    document.addEventListener("click", (event) => {
        if (!dropdownMenu.contains(event.target) && event.target !== menuToggle) {
            dropdownMenu.classList.remove("open");
        }
    });
});
alert('b')


