attachFinderButton();
const logo = document.getElementById('logo');
const logo_options = document.getElementById('logo_options');
const logout = document.querySelectorAll('.logout')

logo_options.style.pointerEvents = 'none';

logo.addEventListener('click', (e) => {
    e.stopPropagation();
    logo_options.style.pointerEvents = '';
    logo_options.classList.toggle('show');
})

document.addEventListener('click', () => {
    logo_options.classList.remove('show');
})

logout.forEach(element => {
    element.addEventListener('click', () => {
        let body = document.querySelectorAll('body');
        body[0].style.backgroundColor = 'black';
        body[0].innerHTML = '';
        setTimeout(() => {
            alert('Refresh To Enjoy Again')
        }, 500);
    })
});

const currentTime = new Date();
const currentDay = currentTime.getDay();
const currentHourInternational = currentTime.getHours();
let currentMinute = currentTime.getMinutes();
const time = document.getElementById('time');
const calendar_month = document.getElementById('month');
const calendar_date = document.getElementById('date');
const day = document.getElementById('day');
let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];
let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
let amorpm;
let currentHour;
const today = currentTime.getDate();
const month = currentTime.getMonth();
calendar_date.innerHTML = today;
calendar_month.innerHTML = months[month];

let textDay = days[currentDay];

if (currentHourInternational > 12) {
    currentHour = currentHourInternational - 12;
    amorpm = 'PM';
} else {
    currentHour = currentHourInternational;
    amorpm = 'AM';
}

if (currentMinute < 10) {
    currentMinute = '0' + currentMinute;
}

const dock_apps = ['finder_dock', 'screen_recorder_dock', 'capcut_dock', 'calendar_dock', 'settings_dock', 'minecraft_dock', 'wireshark_dock', 'whatsapp_dock', 'vscode_dock', 'chrome_dock'];

const dock = document.querySelector('.dock')
const apps = Array.from(document.querySelectorAll('.dock_apps'))
const maxScale = 1.4;
const spread = 150;
const dockGrow = 1.06;
const finder_oc = document.getElementById('finder_oc');
const finder_dock = document.getElementById('finder_dock')
const finder = document.getElementById('app');
const vscode_dock = document.getElementById('vscode_dock')
const finder_content = document.getElementById('finder_content');
function increase_appsizeHandler() {
    const parent_finder = document.getElementById('parent_finder');
    parent_finder.classList.toggle('increaseAppSize')
}

function hide_appHandler() {
    finder.classList.toggle('hide_app');
}
function attachFinderButton() {
    document.getElementById('increase_appsize')?.addEventListener('click', increase_appsizeHandler);
    document.getElementById('finder_redbtn')?.addEventListener('click', hide_appHandler);
    document.getElementById('finder_yellowbtn')?.addEventListener('click', hide_appHandler);
}

function tab_folder() {
    const folder_btns = document.querySelectorAll('.finder_folder');
    folder_btns.forEach((folder) => {
        folder.addEventListener('click', () => {
            document.querySelectorAll('.active_finder_folder').forEach(active => {
                active.classList.remove('active_finder_folder')
                folder.classList.add('active_finder_folder')
            })
            document.querySelectorAll('.active_finder_folder').forEach(active => {
                active.classList.remove('active_finder_folder')
                folder.classList.add('active_finder_folder')
                let folder_name = active.innerHTML;
                document.getElementById('folder_name').innerHTML = `${folder_name}`;
            })
        })
    })
}

tab_folder();

finder_dock.addEventListener('click', () => {
    finder_content.innerHTML = `<div class="div1-f">
                        <div class="finder_nav">
                            <button class="finder_nav_cbuttons" id="finder_redbtn"><i class="fa-solid fa-xmark"></i></button>
                            <button class="finder_nav_cbuttons" id="finder_yellowbtn"><i class="fa-solid fa-minus"></i>
                            </button>
                            <button class="finder_nav_cbuttons" id="increase_appsize">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="200" height="200">
                                    <defs>
                                        <filter id="innerShadow" x="-50%" y="-50%" width="200%" height="200%">
                                            <feGaussianBlur in="SourceAlpha" stdDeviation="4" result="blur" />
                                            <feOffset in="blur" dx="0" dy="2" result="off" />
                                            <feComposite in="off" in2="SourceAlpha" operator="arithmetic" k2="-1" k3="1"
                                                result="inner" />
                                            <feColorMatrix in="inner" type="matrix" values="0 0 0 0 0
                                                                                            0 0 0 0 0
                                                                                            0 0 0 0 0
                                                                                            0 0 0 0.5"
                                                result="shadow" />
                                            <feComposite in="shadow" in2="SourceGraphic" operator="over" />
                                        </filter>

                                        <linearGradient id="outerGrad" x1="0" x2="0" y1="0" y2="1">
                                            <stop offset="0" stop-color="#43d24a" />
                                            <stop offset="1" stop-color="#2fb93a" />
                                        </linearGradient>

                                        <linearGradient id="innerGrad" x1="0" x2="0" y1="0" y2="1">
                                            <stop offset="0" stop-color="#1f6b23" />
                                            <stop offset="1" stop-color="#0d5b18" />
                                        </linearGradient>
                                    </defs>

                                    <circle cx="100" cy="100" r="92" fill="url(#outerGrad)" stroke="#2d9f2f"
                                        stroke-width="1.5" />
                                    <circle cx="100" cy="100" r="92" fill="none" stroke="#1f7a2b" stroke-opacity="0.08"
                                        stroke-width="6" />

                                    <g transform="translate(57,57)">
                                        <rect x="0" y="0" width="86" height="86" rx="6" ry="6" fill="url(#innerGrad)"
                                            filter="url(#innerShadow)" />

                                        <rect x="-20" y="34" width="130" height="18" rx="3" ry="3"
                                            fill="url(#outerGrad)" transform="rotate(-45 43 43)" />
                                    </g>

                                    <circle cx="100" cy="100" r="92" fill="none" stroke="#ffffff" stroke-opacity="0.04"
                                        stroke-width="2" />
                                </svg>
                            </button>
                        </div>

                        <div class="finder_folders">
                            <div class="finder_folder">Photos</div>
                            <div class="finder_folder">Videos</div>
                            <div class="finder_folder active_finder_folder">Projects</div>
                            <div class="finder_folder">Apps</div>
                            <div class="finder_folder">Docs</div>
                        </div>
                    </div>
                    <div class="div2-f">
                        <div class="finder_nav" style="margin-top: 15px;margin-bottom: 12px;">
                            <div class="folder_name" id="folder_name">Projects</div>
                        </div>
                        <div class="divider_right"></div>
                        <div class="folders">
                            <img class="folders_img" src="./folders.png" alt="">
                        </div>
                    </div>`;
    finder.classList.toggle('hide_app');
    vscode_dock.classList.remove('finder_dock')
    finder_oc.innerHTML = 'Finder';

    if (!finder_dock.classList.contains('finder_dock')) {
        finder_dock.classList.toggle('finder_dock')
    }
    attachFinderButton();
    tab_folder();
})
attachFinderButton();
vscode_dock.addEventListener('click', () => {
    finder_content.innerHTML = `                    <div class="vscode_app">
                        <img class="vscodescreen" src="./vscodescreen.png" alt="">
                         <div class="finder_nav vscodenav">
                            <button class="finder_nav_cbuttons" id="finder_redbtn"><i class="fa-solid fa-xmark"></i></button>
                            <button class="finder_nav_cbuttons" id="finder_yellowbtn"><i class="fa-solid fa-minus"></i>
                            </button>
                            <button class="finder_nav_cbuttons" id="increase_appsize">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="200" height="200">
                                    <defs>
                                        <filter id="innerShadow" x="-50%" y="-50%" width="200%" height="200%">
                                            <feGaussianBlur in="SourceAlpha" stdDeviation="4" result="blur" />
                                            <feOffset in="blur" dx="0" dy="2" result="off" />
                                            <feComposite in="off" in2="SourceAlpha" operator="arithmetic" k2="-1" k3="1"
                                                result="inner" />
                                            <feColorMatrix in="inner" type="matrix" values="0 0 0 0 0
                                                                                            0 0 0 0 0
                                                                                            0 0 0 0 0
                                                                                            0 0 0 0.5"
                                                result="shadow" />
                                            <feComposite in="shadow" in2="SourceGraphic" operator="over" />
                                        </filter>

                                        <linearGradient id="outerGrad" x1="0" x2="0" y1="0" y2="1">
                                            <stop offset="0" stop-color="#43d24a" />
                                            <stop offset="1" stop-color="#2fb93a" />
                                        </linearGradient>

                                        <linearGradient id="innerGrad" x1="0" x2="0" y1="0" y2="1">
                                            <stop offset="0" stop-color="#1f6b23" />
                                            <stop offset="1" stop-color="#0d5b18" />
                                        </linearGradient>
                                    </defs>

                                    <circle cx="100" cy="100" r="92" fill="url(#outerGrad)" stroke="#2d9f2f"
                                        stroke-width="1.5" />
                                    <circle cx="100" cy="100" r="92" fill="none" stroke="#1f7a2b" stroke-opacity="0.08"
                                        stroke-width="6" />

                                    <g transform="translate(57,57)">
                                        <rect x="0" y="0" width="86" height="86" rx="6" ry="6" fill="url(#innerGrad)"
                                            filter="url(#innerShadow)" />

                                        <rect x="-20" y="34" width="130" height="18" rx="3" ry="3"
                                            fill="url(#outerGrad)" transform="rotate(-45 43 43)" />
                                    </g>

                                    <circle cx="100" cy="100" r="92" fill="none" stroke="#ffffff" stroke-opacity="0.04"
                                        stroke-width="2" />
                                </svg>
                            </button>
                        </div>
                        <textarea name="" id="codingArea"><!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mac OS</title>
</head>
<body>
    
</body>
</html></textarea>
                    </div>`;
    attachFinderButton();
    finder.classList.toggle('hide_app');
    if (!vscode_dock.classList.contains('finder_dock')) {
        vscode_dock.classList.toggle('finder_dock')
    }
    finder_oc.innerHTML = 'Visual Studio Code';
    finder_dock.classList.remove('finder_dock')
})

finder_oc.addEventListener('click', hide_appHandler)

dock.addEventListener('mousemove', (e) => {
    const rect = dock.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    dock.style.transform = `scaleX(${dockGrow})`

    apps.forEach(app => {
        const appRect = app.getBoundingClientRect();
        const appCenter = (appRect.left - rect.left) + appRect.width / 2;
        const distance = Math.abs(mouseX - appCenter);
        const exponent = -(distance * distance) / (2 * spread * spread);
        const factor = Math.exp(exponent);
        const scale = 1 + (maxScale - 1) * factor;
        const lift = -(scale - 1) * 20;

        app.style.transform = `scale(${scale})
        translateY(${lift}px)`;
    })
})


dock.addEventListener('mouseleave', () => {
    apps.forEach(app => {
        app.style.transform = 'scale(1) translateY(0)';
    })
    dock.style.transform = 'scaleX(1)';
})

day.innerHTML = `${textDay}`;
time.innerHTML = `${amorpm} ${currentHour}:${currentMinute}`;


// setTimeout(() => {
//     alert('Take the code and feel Mac OS')
// }, 2000);