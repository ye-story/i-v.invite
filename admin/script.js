const names = [
  { id: '1', names: 'Дорогие дядя Ваня и тётя Ира!' },
  { id: '2', names: 'Дорогие Анна и Константин !' },
  { id: '3', names: 'Дорогие Елена и Наталья!' },
  { id: '4', names: 'Дорогие Виктор, Ольга, Рома и Леша!' },
  { id: '5', names: 'Дорогие Алеся, Михаил и Артем!' },
  { id: '6', names: 'Дорогие Кирилл и Валерия!' },
  { id: '7', names: 'Дорогие Алёна, Виктор, Анастасия и Яна!' },
  { id: '8', names: 'Дорогие Сергей, Елена и Даник!' },
  { id: '9', names: 'Дорогие Вадим, Екатерина, Василиса, Максим и Ксюша!' },
  { id: '10', names: 'Дорогие Александр и Ксения!' },
  { id: '11', names: 'Дорогие тетя Таня и дядя Саша!' },
  { id: '12', names: 'Дорогие Максим, Наталья, Александрина и Дарина' },
  { id: '13', names: 'Дорогие Денис и Татьяна!' },
  { id: '14', names: 'Дорогие тетя Аня и дядя Саша!' },
  { id: '15', names: 'Дорогие Валерия и Александр!' },
  { id: '16', names: 'Дорогие тетя Нина и дядя Саша !' },
  { id: '17', names: 'Дорогие Руслан, Татьяна, Нелли, Кира и Тимур!' },
  { id: '18', names: 'Дорогие Марат, Виктория, Доминика и Дамир!' },
  { id: '19', names: 'Дорогие тетя Наташа и Дядя Вова!' },
  { id: '20', names: 'Дорогие Екатерина, Юрий, Максим и Арина!' },
  { id: '21', names: 'Дорогие Алеся, Михаил и Никита!' },
  { id: '22', names: 'Дорогие Светлана, Дмитрий и Виталина!' },
  { id: '23', names: 'Дорогие Александра и Александр!' },
  { id: '24', names: 'Дорогие дядя Саша, тетя Ира, Даша и София!' },
  { id: '25', names: 'Уважаемые Ирина Николаевна, Антон и Артём!' },
  { id: '26', names: 'Уважаемые Илья и Елена!' },
  { id: '27', names: 'Дорогие Дмитрий и Карина!' },
  { id: '28', names: 'Дорогой Артём!' },
  { id: '29', names: 'Дорогая Мария!' },
  { id: '30', names: 'Уважаемый Игорь!' },
  { id: '31', names: 'Дорогие тетя Таня, Алеся, Света и Сергей!' },
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
