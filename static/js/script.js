    
//line01 원피스 검색량

const line01 = document.getElementById('line01');

  new Chart(line01, {
    type: 'line',
    data: {
      labels: ['1월', '2월', '3월', '4월', '5월', '6월', '7월','8월','9월','10월','11월','12월'],
      datasets: [{
        label: '월별 원피스 검색량',
        data: [12, 19, 3, 5, 2, 3,10, 14, 19, 3, 11, 6],
        borderWidth: 1
      }]
    },
    options: {
     maintainAspectRatio: true,
     //true 하게 되면 캔버스 width,height에 따라 리사이징된다. 아닐경우 false
        //출처: https://spatiumwdev.tistory.com/49 [아웃도어가 좋은 Dev-JHS:티스토리]
    //  responsive: true,
       
      // title:{
      //   display: true,
      //   text: '월별 통계',
      //   position: 'top'
      // },
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });

//bar02 연도별 검색량
 const bar02 = document.getElementById('bar02');

  new Chart(bar02, {
    type: 'bar',
    data: {
      labels: ['미니원피스', '미디원피스', '롱원피스', '정장원피스', '투피스', '바스락원피스'],
      datasets: [{
        label: '인기 워피스 종류',
        data: [12, 19, 3, 5, 2, 3],
        //borderWidth: 1,
        barThickness: 20, // 최소 bar 두께
        maxBarThickness: 40, //최대 바 두께
        
      }]
    },
    options: {      
      scales: {
        y: {
          beginAtZero: true
        }
      },
     
    }
  });





    
//네이버 인기검색어
window.addEventListener('DOMContentLoaded', () => {
    const rankList = document.getElementById('rank-list');

    // 예시 키워드 배열 (실제 데이터는 Flask에서 가져올 수 있음)
    const keywords = [
        '원피스','청바지','티셔츠','스니커즈','가방',
        '모자','코트','원피스2','셔츠','청바지2',
        '패딩','스커트','후드티','재킷','운동화',
        '양말','액세서리','원피스3','티셔츠2','코트2'
    ];

    // 기존 li 초기화 (원래 있던 1개 삭제)
    rankList.innerHTML = '';

    // 20개 반복
    for (let i = 0; i < 20; i++) {
        const li = document.createElement('li');
        li.className = 'has-text-left pb-2 rank-item';

        const spanRank = document.createElement('span');
        spanRank.className = 'pr-3 is-size-6 has-text-weight-semibold rank-number';
        spanRank.textContent = i + 1;  // 순위

        const spanKeyword = document.createElement('span');
        spanKeyword.className = 'is-size-6 rank-keyword';
        spanKeyword.textContent = keywords[i];  // 키워드

        li.appendChild(spanRank);
        li.appendChild(spanKeyword);
        rankList.appendChild(li);
    }
});


//성별 파이차트
 const gender_cht = document.getElementById('gender_cht');

  new Chart(gender_cht, {
    type: 'pie',
    data: {
      labels: ['여성', '남성'],
      datasets: [{
        label: '인기 워피스 종류',
        data: [70, 30], 
             
        //borderWidth: 1,
        
        
      }]
    },
    options: {        
        
      scales: {
        // y: {
        //   beginAtZero: true
        // }
        
      },
     
    }
  });
