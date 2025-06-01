<script>
    document.addEventListener('DOMContentLoaded', function() {
        // Collapsible solutions
        const questionTitles = document.querySelectorAll('.question strong');
        questionTitles.forEach(title => {
            title.addEventListener('click', function() {
                this.classList.toggle('expanded');
                const solutionDiv = this.nextElementSibling;
                if (solutionDiv && solutionDiv.classList.contains('solution')) {
                    solutionDiv.classList.toggle('visible');
                }
            });
        });

        // Scroll to top button
        const scrollToTopBtn = document.getElementById('scrollToTopBtn');
        window.onscroll = function() {
            if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
                scrollToTopBtn.style.display = "block";
            } else {
                scrollToTopBtn.style.display = "none";
            }
        };
        scrollToTopBtn.addEventListener('click', function() {
            window.scrollTo({top: 0, behavior: 'smooth'});
        });

        // Dark Mode Toggle
        const darkModeToggle = document.getElementById('darkModeToggle');
        const body = document.body;

        // Check for saved dark mode preference
        if (localStorage.getItem('darkMode') === 'enabled') {
            body.classList.add('dark-mode');
            darkModeToggle.textContent = 'Light Mode';
        }

        darkModeToggle.addEventListener('click', function() {
            body.classList.toggle('dark-mode');
            if (body.classList.contains('dark-mode')) {
                localStorage.setItem('darkMode', 'enabled');
                darkModeToggle.textContent = 'Light Mode';
            } else {
                localStorage.setItem('darkMode', 'disabled');
                darkModeToggle.textContent = 'Dark Mode';
            }
        });
    });
</script>
