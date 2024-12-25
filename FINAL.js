
        document.addEventListener("DOMContentLoaded", function() {
            const searchInput = document.querySelector('.language_inp');
            const items = document.querySelectorAll('.item');

            searchInput.addEventListener('input', function() {
                const searchTerm = searchInput.value.toLowerCase();
                items.forEach(item => {
                    const title = item.querySelector('h2').textContent.toLowerCase();
                    item.style.display = title.includes(searchTerm) ? 'block' : 'none';
                });
            });

            const langSelect = document.querySelector('.lang');
            langSelect.addEventListener('change', function() {
                alert(`You selected: ${langSelect.value}`);
            });

            const backToTopButton = document.getElementById('backToTop');
            window.onscroll = function() {
                backToTopButton.style.display = (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) ? "block" : "none";
            };

            backToTopButton.onclick = function() {
                window.scrollTo({top: 0, behavior: 'smooth'});
            };

            const modal = document.getElementById('itemModal');
            const modalTitle = document.getElementById('modalTitle');
            const modalDescription = document.getElementById('modalDescription');
            const closeModal = document.getElementById('closeModal');

            items.forEach(item => {
                item.addEventListener('click', function() {
                    modalTitle.textContent = item.querySelector('h2').textContent;
                    modalDescription.textContent = "More details about " + item.querySelector('h2').textContent;
                    modal.style.display = 'flex';
                });
            });

            closeModal.addEventListener('click', function() {
                modal.style.display = 'none';
            });

            window.addEventListener('click', function(event) {
                if (event.target === modal) {
                    modal.style.display = 'none';
                }
            });
        });
    