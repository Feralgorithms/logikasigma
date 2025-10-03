document.getElementById('mobile-menu-btn').addEventListener('click', function () {
            const mobileMenu = document.getElementById('mobile-menu');
            mobileMenu.classList.toggle('hidden');
        });

const swiper = new Swiper(".myHeroSwiper", {
        loop: true,
        autoplay: {
        delay: 4500,
        disableOnInteraction: false,
        },
        pagination: {
        el: ".swiper-pagination",
        clickable: true,
        },
          effect: "fade",       
          speed: 1000,          
          fadeEffect: {
            crossFade: true     
          }
    });

 
  document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll(".scroll-fade");

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fadeIn");
          entry.target.classList.remove("scroll-fade");
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

    elements.forEach((el) => observer.observe(el));
  });

document.querySelectorAll('.copy-code-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const code = btn.previousElementSibling.querySelector('code').innerText;
    navigator.clipboard.writeText(code)
      .then(() => {
        btn.innerText = 'Copied!';
        setTimeout(() => btn.innerText = 'Copy', 1500);
      });
  });
});


const scriptURL = 'https://script.google.com/macros/s/AKfycbzkDDkDb7_-RpkyAR2VLFc3JdzSMrBD8_kv5XhvkweizlN3rOYsqkCwWDSiQPKFLr2P/exec'
    const form = document.forms['My-web-portfolio-contact-form'];
    const btn = document.getElementById('btn');
    const myAlert = document.getElementById('my-alert');
    
    // Button load
    btn.addEventListener('click', function() {
      btn.innerHTML = '<i class="fa fa-spinner fa-spin"></i>Mengirim!'
    });

    form.addEventListener('submit', e => {
      e.preventDefault()
      fetch(scriptURL, {
              method: 'POST',
              mode: 'no-cors',
              body: new FormData(form)
            })
        .then(response => {
          myAlert.classList.toggle('hidden');
          myAlert.classList.toggle('bg-green-400');
          myAlert.innerHTML += 'Terima kasih, pesan anda sudah kami terima!';
          btn.innerHTML = 'Kirim';
          console.log('succsess!', response);
          form.reset();
        })
        .catch(error => {
          myAlert.classList.toggle('hidden');
          myAlert.classList.toggle('bg-red-100');
          myAlert.innerHTML += 'Terjadi kesalahan, gagal mengirim pesan⚠️';
          btn.innerHTML = 'Kirim';
          alert(error.message);
          form.reset();
        })

});

