// script.js
document.getElementById('confirmationForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const presence = document.getElementById('presence').value;
    const message = document.getElementById('message').value;

    const templateParams = {
        name: name,
        email: email,
        presence: presence,
        message: message
    };

    // Substitua pelos seus IDs do EmailJS
    emailjs.send('service_vhk41ln', 'template_7r2rwll', templateParams, '9DLrJcSMLhyZ6PyH2')
        .then(() => {
            // Limpa o formulário
            document.getElementById('confirmationForm').reset();

            // Exibe mensagem de sucesso
            const successMsg = document.getElementById('successMessage');
            successMsg.classList.remove('hidden');
            successMsg.style.display = 'block';

            // Oculta a mensagem depois de 5 segundos
            setTimeout(() => {
                successMsg.style.display = 'none';
            }, 5000);

        }, (err) => {
            alert("Erro ao enviar o formulário. Tente novamente.");
            console.error(err);
        });
});
