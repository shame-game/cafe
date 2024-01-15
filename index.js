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
    content.item.forEach((row,i) => {
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
    

    vams('.items').forEach((tab)=>{
      tab.addEventListener('click',()=>{
        let index = tab.getAttribute('index');
        vam('.bg').setAttribute('style','display:block');
        vam('.box').setAttribute('style','display:flex')
        let box = content.item[index]
        vam('#img1').src = box.row5;
        vam('#img2').src = box.row6;
        vam('#img3').src = box.row7;
        vam('#img4').src = box.row8;
        vam('.thongtin span').innerText = box.row1;
        vam('.thongtin h1').innerText = box.row2;
        vam('.thongtin h4').innerText = box.row3;
        vam('.thongtin p').innerText = box.row9;
        vam('.bg').addEventListener('click',()=>{
          vam('.bg').setAttribute('style','display:none')
        vam('.box').setAttribute('style','display:none')
        })
      })
    })
  });
