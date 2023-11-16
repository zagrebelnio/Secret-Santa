function scrollToSection(sectionId) {
    let section = document.querySelector(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

function setToCookies() {

    var randomUserData = getRandomUserDataFromCookies();

    let fullName = document.querySelector('input[name="fullName"]').value;
    let email = document.querySelector('input[name="email"]').value;
    let subject = document.querySelector('input[name="subject"]').value;

    var now = new Date();
    var time = now.getTime();
    time += 3600 * 1000;
    now.setTime(time);

    let cookieLength = document.cookie.length;

    document.cookie = "fullName" + (cookieLength + 1) + "=" + encodeURIComponent(fullName) + "; expires=" + now.toUTCString();
    document.cookie = "email" + (cookieLength + 1) + "=" + encodeURIComponent(email) + "; expires=" + now.toUTCString();
    document.cookie = "subject" + (cookieLength + 1) + "=" + encodeURIComponent(subject) + "; expires=" + now.toUTCString();

    if (randomUserData) {
        alert("You are secret Santa to\n" + randomUserData);
    } else {
        alert("Unfortunately, there are no users for secret santa yet! We will send you the user data soon!");
    }
}

function getRandomUserDataFromCookies() {
    let allCookies = document.cookie.split(';');

    if (allCookies.length == 0) {
        return null;
    }

    let randomCookie = Math.floor(Math.random() * (allCookies.length / 3));

    let output = '';

    const attributes = ['Full Name', 'Email', 'Subject'];

    for (let i = randomCookie * 3, j = 0; i < randomCookie * 3 + 3; i++) {
        output += attributes[j] + ': ' + decodeURIComponent(allCookies[i].trim()).split('=')[1] + '\n';
        j++;
    }

    return output;
}