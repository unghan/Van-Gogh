// 귀 클릭 시 다음 페이지로 이동 (page2 -> page3)
function goToPage3() {
    window.location.href = "page3.html"; // 클릭 시 page3.html로 이동
}

// 페이지 로드 시 귀 클릭 이벤트 리스너 추가 (page2)
document.addEventListener("DOMContentLoaded", function() {
    const earElement = document.querySelector('.ear-missing');
    const earOverlayElement = document.querySelector('.ear-overlay');

    if (earElement) {
        earElement.addEventListener('click', function(event) {
            event.stopPropagation(); // 다른 클릭 이벤트와의 충돌 방지
            goToPage3(); // page3로 이동
        });
    }
    if (earOverlayElement) {
        earOverlayElement.addEventListener('click', function(event) {
            event.stopPropagation(); // 다른 클릭 이벤트와의 충돌 방지
            goToPage3(); // page3로 이동
        });
    }

    // 커스텀 커서 초기화
    const cursor = document.getElementById('custom-cursor');
    if (cursor) {
        cursor.style.position = 'absolute';
        cursor.style.width = '150px';
        cursor.style.height = '150px';
        cursor.style.background = "url('ear.png') no-repeat center center";
        cursor.style.backgroundSize = 'contain';
        cursor.style.pointerEvents = 'none';
        cursor.style.transform = 'translate(-50%, -50%)';
        cursor.style.zIndex = '1000'; // 커서가 위에 표시되도록 설정
    }
});

// 마우스 움직임에 따라 커스텀 커서 움직이기
document.addEventListener("mousemove", function(event) {
    // 커스텀 커서 움직임
    const cursor = document.getElementById('custom-cursor');
    if (cursor) {
        cursor.style.left = `${event.pageX}px`;
        cursor.style.top = `${event.pageY}px`;
    }
});

// 흑백 이미지를 클릭하면 컬러 이미지로 바꾸고 다음 페이지로 이동 (page3 -> page4)
function goToPage4() {
    const colorImage = document.querySelector('.color-image');
    const bwImage = document.querySelector('.bw-image');

    if (colorImage && bwImage) {
        // 컬러 이미지 보이기
        colorImage.style.opacity = 1;

        // 페이지 4로 이동하기 전에 잠시 기다림 (컬러 이미지가 보이도록 0.5초)
        setTimeout(() => {
            window.location.href = "page4.html"; // page4.html로 이동
        }, 500);
    }
}

// 페이지 로드 시 흑백 이미지 클릭 이벤트 리스너 추가 (page3)
document.addEventListener("DOMContentLoaded", function() {
    const bwImage = document.querySelector('.bw-image');

    if (bwImage) {
        bwImage.addEventListener('click', goToPage4);
    }
});

// 페이지 로드 시 GIF 완료 감지 및 클릭 이벤트 리스너 추가 (page4 -> page5)
document.addEventListener("DOMContentLoaded", function() {
    const gifElement = document.getElementById('page4-gif');

    if (gifElement) {
        // GIF가 로드되면 클릭 이벤트 리스너 추가
        gifElement.addEventListener('click', function() {
            goToPage5(); // 클릭 시 페이지 5로 이동
        });
    }

    // 커서 이미지 변경 (GIF 위에서도 커서 표시)
    const cursor = document.getElementById('custom-cursor');
    document.addEventListener("mousemove", function(event) {
        if (cursor) {
            cursor.style.left = `${event.pageX}px`;
            cursor.style.top = `${event.pageY}px`;
        }
    });
});

// 페이지 4에서 페이지 5로 이동하는 함수
function goToPage5() {
    window.location.href = "page5.html"; // page5.html로 이동
}

// 페이지 5에서 페이지 6으로 이동하는 함수
function goToPage6() {
    window.location.href = "page6.html"; // 클릭 시 page6.html로 이동
}

document.addEventListener("DOMContentLoaded", function() {
    // 현재 페이지가 page6인지 확인
    if (document.body.id === 'page6') {
        // page6에서만 마우스 움직임에 따라 파란색 잔상 효과 추가
        document.addEventListener("mousemove", function(event) {
            createTrail(event.pageX, event.pageY);
        });
    }
});

function createTrail(x, y) {
    const trail = document.createElement('div');
    trail.className = 'trail';
    trail.style.left = `${x}px`;
    trail.style.top = `${y}px`;

    document.body.appendChild(trail);

    // 잔상이 화면에 남아 있는 시간 이후 제거
    setTimeout(() => {
        trail.remove();
    }, 1000);
}

// 페이지 6에서 페이지 7로 이동하는 함수
function goToNextPage() {
    window.location.href = "page7.html"; // 클릭 시 page7.html로 이동
}

// 페이지 6에서 커스텀 커서 효과 추가
document.addEventListener("DOMContentLoaded", function() {
    if (document.body.id === 'page6') {
        // 커스텀 커서 초기화
        const cursor = document.getElementById('custom-cursor');
        if (cursor) {
            cursor.style.position = 'absolute';
            cursor.style.width = '80px';
            cursor.style.height = '80px';
            cursor.style.background = "radial-gradient(circle, rgba(0, 162, 255, 0.8), rgba(0, 162, 255, 0))";
            cursor.style.pointerEvents = 'none';
            cursor.style.transform = 'translate(-50%, -50%)';
            cursor.style.zIndex = '1000'; // 커서가 위에 표시되도록 설정
        }

        // 마우스 움직임에 따라 커스텀 커서 움직이기
        document.addEventListener("mousemove", function(event) {
            if (cursor) {
                cursor.style.left = `${event.pageX}px`;
                cursor.style.top = `${event.pageY}px`;
            }
        });

        // 마우스 클릭 시 page7로 이동
        document.body.addEventListener("click", goToNextPage);
    }
});

// 마우스 움직임에 따라 눈동자 움직이기
document.addEventListener("mousemove", function(event) {
    const eyes = document.querySelectorAll('.eye');
    
    eyes.forEach(eye => {
        const pupil = eye.querySelector('.pupil');
        const rect = eye.getBoundingClientRect();

        // 눈의 중심 좌표 계산
        const eyeCenterX = rect.left + rect.width / 2;
        const eyeCenterY = rect.top + rect.height / 2;

        // 마우스와 눈 중심 사이의 각도 계산
        const deltaX = event.clientX - eyeCenterX;
        const deltaY = event.clientY - eyeCenterY;
        const angle = Math.atan2(deltaY, deltaX);

        // 동공의 움직임 범위 설정
        const moveDistance = 30; // 동공이 눈 안에서 이동할 수 있는 최대 거리
        const x = Math.cos(angle) * moveDistance;
        const y = Math.sin(angle) * moveDistance;

        // 동공의 위치 설정
        pupil.style.transform = `translate(${x}px, ${y}px)`;
    });
});
