const button = document.getElementById("loveButton");
const quote = document.getElementById("quote");

const messages = [

"67 ka /*nag Brazilian dance.",

"Parang ang dali ngumiti kapag ikaw ang dahilan.",

"You're prettier than you'll ever realize.",

"Ang cute mo kahit wala kang ginagawa.",

"Erelah, sana alam mo kung gaano ka ka-special.",

"Your smile has a way of making everything feel lighter.",

"Hindi lang maganda... iba ka.",

"You deserve every good thing this world has to offer.",

"Ang gaan sa pakiramdam kapag kausap kita.",

"Some people are beautiful. You make people feel peaceful.",

"Di mo siguro napapansin, pero you make people's day better.",

"Kung may favorite notification ako, pangalan mo yun yiee HAHAHAHA.",

"Your laugh is honestly one of my favorite sounds.",

"Hindi ko kailangan ng dahilan para isipin ka.",

"Erelah, thank you for existing.",

"I still get happy whenever I see your name.",

"I don't think you realize how beautiful you are. Kaya i-realize mona rawr",

"Everything feels calmer whenever you're around.",

"You have the kind of smile people remember.",

"Parang ang bilis ng oras kapag ikaw ang kausap.",

"Ang tahimik ng gabi pero ikaw pa rin ang naiisip ko.",

"I hope life is being kind to you today.",

"You're worth every effort.",

"Kung pwede lang i-pause yung oras kapag kasama kita.",

"Hindi ko man masabi palagi, pero naa-appreciate talaga kita.",

"You're one of my favorite people.",

"Every little thing about you feels genuine.",

"Kung may isang tao akong gustong makitang masaya lagi... ikaw yun.",

"You make ordinary moments unforgettable.",

"Ang sarap mong kausap kahit random lang yung topic.",

"You're my peace in a noisy world.",

"Your kindness is one of the reasons I admire you.",

"Erelah... you mean more to me than you probably know.",

"I hope one day you see yourself the way I see you.",

"Every day I find another reason to admire you.",

"You make blue my favorite color lalo HAHAHAHA.",

"Ikaw yung tipo ng tao na gusto kong alagaan.",

"I'm really glad I met you.",

"You have the prettiest smile.",

"Thank you for making life a little brighter.",

"Being around you feels like home.",

"Kung alam mo lang kung ilang beses kitang gustong i-message ay gagi kasama ba toh HAHAHAHAH",

"Sa dami ng tao sa mundo, ikaw pa rin ang hinahanap ng mata ko aray mo PAKAK.",

"Ang saya ng araw ko kapag nakikita kitang masaya.",

"You're my favorite brain rot buddy.",

"May mga araw na simpleng 'Hi' mo sapat na para gumanda araw ko.",

"Hindi ko alam kung kailan nagsimula, basta isang araw napansin kong ikaw na lagi.",

"You're the kind of person that makes ordinary days unforgettable.",

"Kung may gusto akong ulitin, yun yung mga oras na kasama kita.",

"Your smile deserves to be protected.",

"Ang ganda mo kahit hindi ka nag-e-effort.",

"Erelah, I really like you.",

"Lowkey ang hirap pala neto gawin HAHAHAH",

"I love you. ❤️"

];

let last = -1;

button.addEventListener("click", () => {

    let random;

    do {
        random = Math.floor(Math.random() * messages.length);
    } while (random === last);

    last = random;

    typeWriter(messages[random]);

});

function typeWriter(text) {

    quote.style.opacity = 0;
    quote.innerHTML = "";

    setTimeout(() => {

        quote.style.opacity = 1;

        let i = 0;

        function type() {

            if (i < text.length) {

                quote.innerHTML += text.charAt(i);
                i++;

                setTimeout(type, 35);

            }

        }

        type();

    }, 250);

}

/* Shooting Stars */

setInterval(() => {

    const star = document.createElement("div");

    star.className = "shooting-star";

    star.style.top = Math.random() * (window.innerHeight / 2) + "px";
    star.style.left = Math.random() * window.innerWidth + "px";

    document.body.appendChild(star);

    setTimeout(() => {

        star.remove();

    }, 1500);

}, 3500);
