$("#slick").slick({
  dots: true,
  infinite: true,
  speed: 600,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  pauseOnHover: false,
  prevArrow: '<span class="prev"><i class="bi bi-caret-left-fill"></i></span>',
  nextArrow: '<span class="next"><i class="bi bi-caret-right-fill"></i></span>',
});

const GS_ID = "1nGRfAcNPiCYqKWBuidbApMD7COaBH8p0aVfn41W0z1A";
const vam = document.querySelector.bind(document);
const vams = document.querySelectorAll.bind(document);
fetchSheet
  .fetch({
    gSheetId: GS_ID,
    wSheetName: "sum",
  })
  .then((rows) => {
    let content = {};
    rows.forEach(row => {
      let key = row.section;
      Object(content).hasOwnProperty(key) || Object.assign(content, { [key]: [] });
      content[key].push(row);
    });
    qr = rows.filter(row => row.section == 'pay')
    packages = rows.filter(row => row.section == 'packages');
    var item = ''
    content.item.forEach((row, i) => {
      item += `
    <div class="items col-lg-4" index=${i}>
                            <div class="items-top">
                                T&A Lab
                            </div>
                            <div class="items-img">
                                <img src="${row.row5}">
                            </div>
                            <div class="items-bottom">
                                <p>${row.row1}</p>
                                <h1>${row.row2}</h1>
                                <div><h4>${row.row3}</h4><p>Kho còn ${row.row4}</p></div>
                            </div>
                        </div>`
    })
    vam('.bughtwrap').innerHTML = item
    $('.bughtwrap').slick({
      dots: false,
      infinite: true,
      speed: 600,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: true,
      prevArrow: '<span class="preve"><i class="bi bi-arrow-left-short"></i></span>',
      nextArrow: '<span class="nexte"><i class="bi bi-arrow-right-short"></i></span>',
    });



    vams('.items').forEach((box) => {
      box.addEventListener('click', (e) => {
        let index = box.getAttribute('index')
        let list = [];
        list = content.item[index]
        vam('#payqr').src = list.row9;
        vam('.thongtin span').innerText = list.row1
        vam('.thongtin h1').innerText = list.row2
        vam('.feedback h4').innerText = list.row3
        vam('.feedback h3').innerText = 'Kho còn: ' + list.row4
        vam('.thongtin p').innerText = list.row10
        vam('#img1').src = list.row5
        vam('#img2').src = list.row6
        vam('#img3').src = list.row7
        vam('#img4').src = list.row8
        vam('body').setAttribute('style', 'overflow-y: hidden;')
        vam('#Box_1412c>.background').setAttribute('style', 'display:block')
        vam('#Box_1412c>.box').setAttribute('style', 'display:flex')
        vam('#Box_1412c .dot').classList.add('acc')
        vam('#Box_1412c .content').classList.add('acc')
        vam('#Box_1412c>.background').addEventListener('click', () => {
          vam('body').setAttribute('style', 'overflow-y: auto;')
          vam('#Box_1412c>.background').setAttribute('style', 'display:none')
          vam('#Box_1412c>.box').setAttribute('style', 'display:none')
          vam("#Box_1412c .content.acc").classList.remove('acc')
          vams('#Box_1412c .dot.acc').forEach((tab) => {
            tab.classList.remove('acc')
          })
          vams('#Box_1412c .line>p').forEach((line) => {
            line.setAttribute('style', 'display: none')
          })
        })
        vam('#Box_1412c .out').addEventListener('click', () => {
          vam('body').setAttribute('style', 'overflow-y: auto;')
          vam('#Box_1412c>.background').setAttribute('style', 'display:none')
          vam('#Box_1412c>.box').setAttribute('style', 'display:none')
        })
      })
    })

    vam('#Box_1412c .suc').addEventListener('click', () => {
      vam('#Box_1412c>.background').setAttribute('style', 'display:none')
      vam('#Box_1412c>.box').setAttribute('style', 'display:none')
      vam("#Box_1412c .content.acc").classList.remove('acc')
      vams('#Box_1412c .dot.acc').forEach((tab) => {
        tab.classList.remove('acc')
      })
      vams('#Box_1412c .line>p').forEach((tab) => {
        tab.setAttribute('style', 'display: none')
      })
      vam('body').setAttribute('style', 'overflow-y: auto;')
    })


    vams('#Box_1412c .nextt').forEach((tab, index) => {
      var contentlist = vams('#Box_1412c .content')[index + 1];
      var dotlist = vams('#Box_1412c .dot')[index + 1];
      var line = vams('#Box_1412c .line>p')[index];
      tab.addEventListener('click', () => {
        vam("#Box_1412c .content.acc").classList.remove('acc')
        contentlist.classList.add('acc')
        dotlist.classList.add('acc')
        line.setAttribute('style', 'display:block')
      })
    })

    vams('#Box_1412c .back').forEach((tab, index) => {
      var contentlist = vams('#Box_1412c .content')[index + 1];
      var contentback = vams('#Box_1412c .content')[index];
      var dotlist = vams('#Box_1412c .dot')[index + 1];
      var line = vams('#Box_1412c .line>p')[index]
      const backtitle = vams('#Box_1412c .back');
      tab.addEventListener('click', () => {
        contentlist.classList.remove('acc');
        contentback.classList.add('acc')
        dotlist.classList.remove('acc')
        line.setAttribute('style', 'display: none')
      })
    })

  });
  