const button = $('#button').click(getImg)
const dateValue = $('#input-date')
const image = $('#image')
const expli = $('#date-input')

function getImg() {
    console.log('AJAX request initiated')
    $.ajax({
        url: `https://api.nasa.gov/planetary/apod?api_key=3hVKYoZIx8GNzHUod7VHqr132ucwUyvQ6rB37kCl&date=${dateValue.val()}`,
        success(event) {
            image.css('background-image', `url(${event.url})`)
            image.css('display', 'flex')
            expli[0].innerHTML = event.explanation
        },
        error() {
            $('#error').toggle()
            setTimeout(() => {
                $('#error').toggle()
            }, 3500);
        }
    })
}