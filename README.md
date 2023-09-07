GitHub Pages: [only.testtask](https://dsa25.github.io/only.testtask/)

Самый простой способ расположить кнопки на соотвествующих строениях: 
- для изображения задать `background-size: 100% 100%;`
- позиционирование кнопок в `%`

Возможные минусы такого подхода - мы не сохраним точные пропорции изображения при некоторых разрешениях экрана.     
Или пойти другим путем, указав для фона изображения `background-size: 100% auto;`     
И пытаться с помощью `media-запросов` по вертикали и горизонтали крутить `top` и `left` в процентах по каждому endpoint.

**Важно**: если вы знаете другой способ - срочно сообщите мне!

```css
.btn__one {
  top: calc(282 / var(--heightImg) * 100%);
  left: calc(580 / var(--widthImg) * 100%);
  /* top: 26%; */
  /* left: 30%; */
}
```
где 282 и 580 - это координаты с макета, либо подгоняем на глаз в % ( для удобства  main2.jpg -  в котором кнопки на картинке)

```css
.main {
  height: 100vh;
  width: 100vw;
  /* min-width: 1280px;
  min-height: 600px; */
  background: url("../img/main.webp") 0 0 no-repeat;
  background-size: 100% 100%;
  /* background-size: 100% auto; */
  /* background-size: cover; */
  position: relative;
}
```





### ТЗ:

Реализовать следующий блок в соответствии с [макетом](https://www.figma.com/file/3gcKt8coTeNhFGnHuHWzjr/%D0%A1%D1%82%D0%B0%D0%B6%D0%B8%D1%80%D0%BE%D0%B2%D0%BA%D0%B0---%D0%A2%D0%B5%D1%81%D1%82%D0%BE%D0%B2%D0%BE%D0%B2%D0%B5-%D0%B7%D0%B0%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5?type=design&node-id=0%3A1&mode=design&t=vrGHG3JQdFUgm3Da-1)

Блок состоит из фонового изображения и кнопок, расположенных поверх изображения
Блок всегда занимает полную высоту и ширину экрана (верстка для ширины экрана меньше 1280px не требуется)
Текст внутри кнопок произвольный, позиция кнопок должна совпадать с макетом

Функционал:
По нажатию на каждую кнопку, она “открывается” для отображения подписи
Повторный клик по открытой кнопке или по изображению закрывает открытую кнопку

### Требования к реализации

Использовать HTML5, CSS3, JS (Только чистый JavaScript без jQuery или других сторонних библиотек)
Все кнопки не должны терять свою позицию на при ширине экрана в промежутке от 1920px до 1280px (Идеальное совпадение не требуется, кнопки должны располагаться в пределах указанных построек)
Одновременно на странице не должно быть больше одного обработчика события “click”

Выполненное задание необходимо прислать в виде ссылки на git-репозиторий. Актуальная версия кода должна находится в основной ветке.
