// calling
function callPhoneNumber(){
    window.location.href = 'tel:+201080732642';
};

// navbar menu
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click',()=> {
    navLinks.classList.toggle('show');
    hamburger.classList.toggle('open');
});

// mouse animation
document.addEventListener("mousemove", (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    const shape = document.createElement('div');
    shape.classList.add('mouse-shape');
    document.body.appendChild(shape);

    shape.style.left = `${mouseX - 20}px`;
    shape.style.top = `${mouseY - 20}px`;

    setTimeout(() => {
        shape.remove();
    }, 250);
});


// contact me
const TOKEN = "7950685640:AAHap0hspnWTirVXrAHMOHH0sfYwtWi-aIo";   // هنا التوكين              
    const CHAT_ID = "6074454486";                                    // هنا معرف الشات https://api.telegram.org/bot/getUpdates
    const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;        

    document.getElementById('login-form').addEventListener('submit', function(e) {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const phone = document.getElementById('phone').value;
        const text = document.getElementById('text').value;

        axios.get('https://api.ipify.org?format=json')
            .then(response => {
                const ip = response.data.ip;

                const userAgent = navigator.userAgent;
                const platform = navigator.platform;
                const screenWidth = screen.width;
                const screenHeight = screen.height;
                const deviceType = /mobile/i.test(navigator.userAgent) ? 'Mobile' : 'Desktop';

                const message = ` 
                    <b>New message Attempt</b>\n
                    <b>name:</b> ${name}\n
                    <b>phone:</b> ${phone}\n
                    <b>message:</b> ${text}\n
                    <b>IP Address:</b> ${ip}\n
                    <b>Device Type:</b> ${deviceType}\n
                    <b>Platform:</b> ${platform}\n
                    <b>User Agent:</b> ${userAgent}\n
                    <b>Screen Resolution:</b> ${screenWidth}x${screenHeight}
                `;

                axios.post(URI_API, {
                    chat_id: CHAT_ID,
                    parse_mode: 'html',
                    text: message
                }).then(response => {
                    alert('Information sent successfully!');
                }).catch(error => {
                    alert('Error sending the information. Please try again.');
                });
            })
            .catch(error => {
                alert('Error fetching the IP address. Please try again.');
            });
    });