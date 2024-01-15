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
    content.item.forEach((row) => {
      item += `
    <div class="items col-lg-4">
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
  });
