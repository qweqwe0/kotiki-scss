
    document.querySelectorAll('.cont-article').forEach(article => {
        article.addEventListener('click', function(event) {
            event.stopPropagation(); 
            document.querySelector('.overlay').style.display = 'block'; 
            this.style.zIndex = 15; 
        });
    });

    document.querySelector('.overlay').addEventListener('click', function() {
        this.style.display = 'none'; 
        document.querySelectorAll('.cont-article').forEach(a => {
            a.style.zIndex = 10; 
        });
    });
