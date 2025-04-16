try {
    const scroll = new LocomotiveScroll({
        el: document.querySelector('[data-scroll-container]'),
        smooth: true,
        multiplier: 0.5,
    });

} catch (error) {
    console.log(error)
}


let hamburg2 = document.querySelector(".hamburg")
let toggle = document.querySelector(".toggle");
let circle = document.querySelector(".circle");
let lamp = document.querySelector(".lamp")
let mode = "light";
let dot = document.querySelector("#dot")

function mode2() {
    if (mode === "light") {
        mode = "dark";
        toggle.classList.toggle("night");
        circle.classList.toggle("night");
    }
    else {
        mode = "light";
        toggle.classList.toggle("night");
        circle.classList.toggle("night");
    }
    if (mode === "dark") {
        document.querySelector(".left").classList.toggle("night")
        document.querySelector(".right").classList.toggle("night")
        document.querySelector(".light").classList.toggle("night")
        document.querySelector("#h1").classList.toggle("night")
        document.querySelector("#h3").classList.toggle("night")
        document.querySelectorAll(".span").forEach(e => {
            e.classList.toggle("night")
        });
        document.querySelectorAll(".nighty").forEach(e => {
            e.classList.toggle("night")
        });
        document.querySelector(".nighty2").classList.toggle("night")
        document.querySelector("#dot").style.fill = "#B1B1D8"
        document.querySelectorAll(".ttt").forEach(e => {
            e.classList.toggle("night")
        });
        document.querySelector("#hamburg").classList.toggle("night")
        hamburg2.classList.toggle("night")
        document.querySelector(".shadow").classList.toggle("night")
        document.querySelector(".page2").classList.toggle("night")
        document.querySelector("#writing").classList.toggle("night")
        document.querySelector('.shadow').style.backgroundColor = "rgba(0, 0, 0, 0.5)"
        document.querySelectorAll(".boxes").forEach(e => {
            e.classList.toggle("night")
        });
        document.querySelectorAll(".border_top").forEach(e => {
            e.classList.toggle("night")
        });
        document.querySelectorAll(".border_bottom").forEach(e => {
            e.classList.toggle("night")
        });
        document.querySelectorAll(".circles").forEach(e => {
            e.classList.toggle("night")
        });
    }
    else {
        document.querySelector(".left").classList.toggle("night")
        document.querySelectorAll(".circles").forEach(e => {
            e.classList.toggle("night")
        });
        document.querySelector("#hamburg").classList.toggle("night")
        document.querySelectorAll(".border_top").forEach(e => {
            e.classList.toggle("night")
        });
        document.querySelectorAll(".border_bottom").forEach(e => {
            e.classList.toggle("night")
        });
        document.querySelector(".page2").classList.toggle("night")
        document.querySelector("#writing").classList.toggle("night")
        document.querySelectorAll(".boxes").forEach(e => {
            e.classList.toggle("night")
        });
        document.querySelector(".shadow").classList.toggle("night")
        document.querySelector(".right").classList.toggle("night")
        document.querySelector(".light").classList.toggle("night")
        document.querySelector("#h1").classList.toggle("night")
        hamburg2.classList.toggle("night")
        document.querySelectorAll(".ttt").forEach(e => {
            e.classList.toggle("night")
        });
        document.querySelector("#h3").classList.toggle("night")
        document.querySelectorAll(".span").forEach(e => {
            e.classList.toggle("night")
        });
        document.querySelectorAll(".nighty").forEach(e => {
            e.classList.toggle("night")
        });
        document.querySelector('.shadow').style.backgroundColor = "rgba(255, 255, 255, 0.5)"
        document.querySelector(".nighty2").classList.toggle("night")
        document.querySelector("#dot").style.fill = "#6FDCBF"
    }
}

function hamburg() {
    let navbar = document.querySelector("#hamburg")
    hamburg2.addEventListener("click", () => {
        navbar.classList.toggle("show")
        document.querySelector(".navs").classList.toggle("show")
    })
}

toggle.addEventListener("click", () => {
    mode2()
})

lamp.addEventListener("click", () => {
    mode2()
})

function shadow() {
    const header = document.querySelector('.shadow');
    if (window.scrollY > 0) {
        header.classList.add("show");
    } else {
        header.classList.remove("show");
    }
}
try {
    scroll.on('scroll', () => {
        shadow();
    });

} catch (error) {
    console.log(error)
}
window.addEventListener('resize', () => {
    try {
        scroll.update();
    } catch (error) {
        console.log(error)
    }
});

function pencil() {
    const pencilText = document.querySelector('.write_hover')
    pencilText.addEventListener('mouseenter', () => {
        for (let i = 0; i < 17; i++) {
            const pencil = document.createElement('span');
            pencil.classList.add('pencil');
            pencil.textContent = '✏️';
            const angle = Math.random() * 2 * Math.PI;
            const distance = Math.random() * 150 + 50;

            const z = Math.random() + 0.2 + 's';
            const x = Math.cos(angle) * 1.4 * distance + 'px';
            const y = Math.random() * 5 * distance + 0.2 + 'px';

            pencil.style.setProperty('--x', x);
            pencil.style.setProperty('--y', y);
            pencil.style.setProperty('--z', z);
            const main = document.querySelector(".main")
            main.appendChild(pencil);
            setTimeout(() => {
                pencil.remove();
            }, 2600);
        }
    })
}

function image() {
    let image2 = document.querySelector(".imagee")
    let talk = document.querySelector(".talk_hover")
    talk.addEventListener("mouseover", (e) => {
        image2.classList.add("showing")
    })
    talk.addEventListener("mouseout", () => {
        image2.classList.remove("showing")
    })
}

function transition() {
    let image2 = document.querySelector(".transition")
    let talk = document.querySelector(".talk_hover")
    talk.addEventListener("mouseover", (e) => {
        image2.classList.add("showing")
    })
    talk.addEventListener("mouseout", () => {
        image2.classList.remove("showing")
    })
    let image1 = document.querySelector(".real")
    talk.addEventListener("mouseover", (e) => {
        image1.classList.add("showing")
    })
    talk.addEventListener("mouseout", () => {
        image1.classList.remove("showing")
    })
}

function fun() {
    let main_box = document.querySelector(".main")
    let text = document.querySelector(".fun_hover")
    let objects = [
        "[", "]", "{", "}", "(", ")", "<", ">", "/", "//", "?", "!", "+", "-", "=", "*", "%", "#", "@", "&", "|", "~", "^", "_", ":",
        ";", ".", ",", "'", "/", "`"
    ];
    text.addEventListener("mouseenter", () => {
        for (let i = 0; i < 20; i++) {
            let index = Math.floor(Math.random() * objects.length)
            const fun2 = document.createElement("span")
            fun2.innerText = objects[index]
            fun2.classList.add("fun")
            main_box.appendChild(fun2)

            const angle = Math.random() * 10 * Math.PI;
            const distance = Math.random() * 15;
            const x = Math.cos(angle) * distance
            const y = Math.sin(angle) * distance

            fun2.style.setProperty('--x', `${x}vw`);
            fun2.style.setProperty('--y', `${y}vw`);
            const color = getRandomColor()
            fun2.style.color = color;
            main_box.appendChild(fun2);

            setTimeout(() => {
                fun2.remove();
            }, 1000);
        }
    });

    function getRandomColor() {
        const letters = "59ABCDEF";  // Start from 8 to avoid low values (dark colors)
        let color = "#";
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * letters.length)];
        }
        return color;
    }
}
window.addEventListener("scroll", () => {
    shadow()
})


const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // Stop observing once it becomes visible
        }
    });
}, {
    threshold: 0.5 // Div will appear when 50% is visible
});
// Select all divs with class 'scroll-div' and observe them
const divs = document.querySelectorAll('.boxes');
divs.forEach(div => observer.observe(div));

const divs1 = document.querySelectorAll(".hero").forEach(div=>{
    observer.observe(div)
})
const divs3 = document.querySelectorAll(".computer_animation").forEach(div=>{
    observer.observe(div)
})
const divs4 = document.querySelectorAll(".lamp_anim").forEach(div=>{
    observer.observe(div)
})

let observer2 = new IntersectionObserver((entries,observer) =>{
    entries.forEach(entry =>{
        if (entry.isIntersecting) {
            entry.target.classList.add("visible")
            observer.unobserve(entry.target)
        }
    }),{threshold:0.1}
})
const div2 = document.querySelectorAll(".text").forEach(div=>{
    observer2.observe(div)
})
fun()
transition()
image()
pencil()
hamburg()


