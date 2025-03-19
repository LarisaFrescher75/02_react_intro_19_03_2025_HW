//   В виртуальном DOM создаётся ссылка на корневой элемент
/*
    DOM - Document Object Model - Объектная модель документа
    ReactDOM - Объект, полученный из инструмента ReactDOM для работы с виртуальным DOM
    createRoot - метод создания ссылки в виртуальном DOM
    document.getElementById('root') - привычная ссылка на элемент в обычном DOM
*/
const root = ReactDOM.createRoot(document.getElementById('root'));

// схожий с методом innerHTML

root.render(
    <>
       <h1>Hello world!</h1>
       <p>Hello from paragraph!</p> 

    </>
    
);