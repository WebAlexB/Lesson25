import './styles.css';
document.addEventListener("DOMContentLoaded", function() {
    let userName = prompt("Введите ваше имя:");
    while (!userName || userName.trim() === "") {
        userName = prompt("Пожалуйста, введите ваше имя:");
    }

    const btnSend = document.querySelector('.btn-send');
    const inputEl = document.querySelector('.msg');
    const chatContainer = document.querySelector('.chat-container');

    const ws = new WebSocket('ws://localhost:1111');

    ws.onmessage = (event) => {
        const message = JSON.parse(event.data);
        showMessage(message);
    }

    ws.onopen = () => {
        console.log('Connected');
        ws.send(JSON.stringify({ type: 'join', name: userName }));

        btnSend.onclick = () => {
            const msg = inputEl.value.trim();
            if (msg) {
                ws.send(JSON.stringify({ type: 'message', msg, name: userName }));
            }
            inputEl.value = '';
        }
    }

    ws.onclose = () => {
        console.log('Disconnected');
    }

    function showMessage(message) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message');
        messageElement.innerHTML = `
            <div><strong>${message.name}</strong> (${message.time}): ${message.msg}</div>
        `;
        chatContainer.appendChild(messageElement);
    }
});

