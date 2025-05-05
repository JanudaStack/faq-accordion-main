const seeMoreBtn = document.querySelector('.btn');
const accordionDes = document.querySelector('.accordion-description');

document.querySelectorAll('.btn').forEach((button) => {
    button.addEventListener('click', () => {
        const accordionItem = button.closest('.accordion-item');
        const accordionDescription = accordionItem.querySelector(
            '.accordion-description'
        );

        // Toggle the visibility of the description
        accordionDescription.style.display =
            accordionDescription.style.display === 'block' ? 'none' : 'block';
    });
});
