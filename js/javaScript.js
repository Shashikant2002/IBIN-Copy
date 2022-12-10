function togleBar() {
  const barTogle = document.getElementById('togleFaFa');
  barTogle.classList.toggle('closeNavBar');
}

const activeTabContent = (ind) =>{ 

    const content = document.querySelectorAll('.dataAnal .analis .tabscontent .tab_content');
    const tabButton = document.querySelectorAll('.dataAnal .analis .tabs .tab');
    content.forEach((tag) => {
        tag.classList.remove('active_tab_content');
    })
    tabButton.forEach((tag) => {
        tag.classList.remove('tabActive');
    })
    content[ind].classList.add("active_tab_content");
    tabButton[ind].classList.add("tabActive");
}

activeTabContent(0);

const activeTabContent_1 = (ind) =>{ 

    const content = document.querySelectorAll('.spec_feature .tab .content .tab_con');
    const tabButton = document.querySelectorAll('.spec_feature .tab .tab_but button');
    content.forEach((tag) => {
        tag.classList.remove('active_con');
    })
    tabButton.forEach((tag) => {
        tag.classList.remove('tabActiveButton');
    })
    content[ind].classList.add("active_con");
    tabButton[ind].classList.add("tabActiveButton");
}

activeTabContent_1(0);


window.onload = function () {
    var options = {
      data: [
        {
          type: 'pie',
          dataPoints: [
            { y: 6566.4, name: 'Housing' },
            { y: 2599.2, name: 'Food' },
            { y: 1231.2, name: 'Fun' },
            { y: 1368, name: 'Clothes' },
            { y: 684, name: 'Others' },
            { y: 1231.2, name: 'Utilities' },
          ],
        },
      ],
    }
    $('#chartContainer').CanvasJSChart(options)
  }