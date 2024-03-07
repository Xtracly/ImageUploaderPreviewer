function previewImage() {
    let fileInput = document.getElementById('fileInput')
    let imagePreview = document.getElementById('imagePreview')

    let file = fileInput.files[0]

    if (file && file.type.match('image.*')) {
        let reader = new FileReader()

        reader.onload = function(e) {
            let imageUrl = e.target.result

            let imgElement = document.createElement('img')
            imgElement.src = imageUrl
            imagePreview.innerHTML = ''
            imagePreview.appendChild(imgElement)
        }
        reader.readAsDataURL(file)
    } else {
        alert('Please select a valid image file.')
    }
}
