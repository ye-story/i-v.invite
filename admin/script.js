const names = [
  { id: '1', names: 'Дорогие Александр и Наталья' },
  { id: '2', names: 'Дорогие Евгений, Ирина, Никита и Вероника' },
  { id: '3', names: 'Дорогие Ирина и Сергей' },
  { id: '4', names: 'Дорогие Александр и Юлия' },
  { id: '5', names: 'Дорогие Виктория и Василий' },
  { id: '6', names: 'Дорогие Сергей и Светлана' },
  { id: '7', names: 'Дорогие Александр и Наталья' },
  { id: '8', names: 'Дорогие Константин и Виктория' },
  { id: '9', names: 'Дорогие Никита и Мария' },
  { id: '10', names: 'Дорогие Юрий и Алина' },
  { id: '11', names: 'Дорогие Павел и Наталья' },
  { id: '12', names: 'Дорогие Кирилл и Инна' },
  { id: '13', names: 'Дорогие Роман и Диана' },
  { id: '14', names: 'Дорогие Анна и Денис, Евгений и Дмитрий' },
  { id: '15', names: 'Дорогие Олег и Елена' },
  { id: '16', names: 'Дорогие Анжелика и Алексей' },
  { id: '17', names: 'Дорогие Алеся и Евгений' },
  { id: '18', names: 'Дорогие Юлия и Максим' },
  { id: '19', names: 'Дорогие Ольга, Виталий и Александр' },
  { id: '20', names: 'Дорогие Виталий и Вероника' },
  { id: '21', names: 'Дорогие Игорь и Людмила' },
  { id: '22', names: 'Дорогие Дмитрий и Вероника' },
  { id: '23', names: 'Дорогие Виктория и Дмитрий' },
  { id: '24', names: 'Дорогие Алена и Дмитрий' },
  { id: '25', names: 'Дорогие Геннадий и Оксана' },
  { id: '26', names: 'Дорогой Анатолий' },
  { id: '27', names: 'Дорогой Глеб' },
  { id: '28', names: 'Дорогая Евгения' },
  { id: '29', names: 'Дорогие Александр и Екатерина' },
  { id: '30', names: 'Дорогие Дмитрий и Татьяна' },
];

const baseURL = location.href.replace('admin/', ''); //location.origin
const container = document.getElementById('container');

names.forEach((name, index) => {
  const nameElem = document.createElement('div');
  nameElem.classList.add('name');
  const titleNameElem = document.createElement('p');
  titleNameElem.classList.add('name__title');
  titleNameElem.innerHTML = name.names;
  const linkNameElem = document.createElement('a');
  linkNameElem.classList.add('name__link');

  const link = `${baseURL}?id=${name.id}`;
  linkNameElem.href = link;
  linkNameElem.innerHTML = link;
  linkNameElem.target = '_blank';

  const btnCopyLink = document.createElement('button');
  btnCopyLink.innerHTML = 'copy';
  btnCopyLink.classList.add('name__btn-copy');
  btnCopyLink.dataset.link = link;

  const btnShareViber = document.createElement('a');
  btnShareViber.classList.add('name__btn-share-viber');
  btnShareViber.href = 'viber://forward?text=' + link;
  btnShareViber.target = '_blank';

  const btnShareTelegram = document.createElement('a');
  btnShareTelegram.classList.add('name__btn-share-telegram');
  btnShareTelegram.href = `https://telegram.me/share/url?url=${link}&amp;text=${link}`;
  btnShareTelegram.target = '_blank';

  const linkWrapper = document.createElement('div');
  linkWrapper.classList.add('name__link-wrapper');

  linkWrapper.append(
    linkNameElem,
    btnCopyLink,
    btnShareViber,
    btnShareTelegram
  );

  nameElem.append(titleNameElem, linkWrapper);

  container.append(nameElem);
});

container.addEventListener('click', (e) => {
  const btnCopy = e.target;

  if (btnCopy.classList.contains('name__btn-copy')) {
    const linkUrl = btnCopy.dataset.link;
    console.log(linkUrl);
    navigator.clipboard
      .writeText(linkUrl)
      .then(() => {
        console.log('Text copied to clipboard ' + linkUrl);
        btnCopy.innerHTML = 'copied';

        setTimeout(() => {
          btnCopy.innerHTML = 'copy';
        }, 5000);
      })
      .catch((err) => {
        console.error('Error in copying text: ', err);
      });
  }
});
