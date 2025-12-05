document.addEventListener('DOMContentLoaded', function() {
    

    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('h3');
        const answer = item.querySelector('p');
        
        if (answer) {
             answer.style.display = 'none';
        }

        if (question) {
            question.addEventListener('click', () => {
                if (answer.style.display === 'none' || answer.style.display === '') {
                    faqItems.forEach(otherItem => {
                        const otherAnswer = otherItem.querySelector('p');
                        if (otherAnswer && otherAnswer !== answer) {
                             otherAnswer.style.display = 'none';
                             otherItem.classList.remove('active');
                        }
                    });

                    answer.style.display = 'block';
                    item.classList.add('active'); 
                } else {
                    answer.style.display = 'none';
                    item.classList.remove('active');
                }
            });
        }
    });



    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
      
            e.preventDefault();

     
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });


 

});