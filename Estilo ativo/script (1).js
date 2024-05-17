let preveiwContainer = document.querySelector('.product-preview');
let previewBox = preveiwContainer.querySelectorAll('.preview');

document.querySelector('.product-container .product').forEach(product => {
    product.onclick = () => {
        preveiwContainer.getElementsByClassName.display = 'flex';
        let name = product.getAttribute('data-name');
        previewBox.forEach(preview => {
            let target = preview.getAttribute('data-target');
            if (name == target) {
                preview.classLits.add('active');
            }
        })
    }
});

previewBox.forEach(close => {
close.querySelector('fa-times').onclick = () => {
    close.classList.remove ('active');
    preveiwContainer.style.display = 'none';
}
})