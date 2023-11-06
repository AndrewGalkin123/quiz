const questionSets = {
    JavaScript: [
        {
            question: "Какой символ используется для комментирования однострочного комментария?",
            choices: ["//", "/*/", "--", " ##", "''"],
            correctAnswer: "//"
        },
        {
            question: "Как объявить константу в JavaScript?",
            choices: ["var myConst", "let myConst", "const myConst", "const myConst = 5", "const myConst := 10"],
            correctAnswer: "const myConst"
        },
        {
            question: "Какой оператор используется для проверки строгого равенства в JavaScript?",
            choices: ["==", "=", "===", "!=", "!=="],
            correctAnswer: "=="
        },
        {
            question: "Как получить длину строки в JavaScript?",
            choices: ["string.length()", "string.size()", "string.count()", "string.length", "string.size"],
            correctAnswer: "string.length"
        },
        {
            question: "Какой метод используется для добавления элемента в начало массива в JavaScript?",
            choices: ["array.addFirst()", "array.unshift()", "array.prepend()", "array.insertFirst()", "array.push()"],
            correctAnswer: "array.unshift()"
        }
    ],
    Swift: [
        {
            question: "Что такое Swift?",
            choices: ["Язык программирования", "Игровая консоль", "Фреймворк", "Браузер", "Сетевой протокол"],
            correctAnswer: "Язык программирования"
        },
        {
            question: "Как объявить переменную в Swift?",
            choices: ["declare myVar", "let myVar", "var myVar", "myVar = 5", "const myVar"],
            correctAnswer: "var myVar"
        },
        {
            question: "Как называется оператор для опционального связывания в Swift?",
            choices: ["if-let", "bind", "unwrap", "optional", "link"],
            correctAnswer: "if-let"
        },
        {
            question: "Что такое 'интерполяция строк' в Swift?",
            choices: ["Способ создания пустой строки", "Метод шифрования строк", "Создание строки из чисел", "Вставка значений в строку", "Удаление символов из строки"],
            correctAnswer: "Вставка значений в строку"
        },
        {
            question: "Какой тип данных используется для хранения целых чисел в Swift?",
            choices: ["float", "integer", "int", "double", "number"],
            correctAnswer: "int"
        }
    ],
    "C++": [
        {
            question: "Какой оператор используется для выделения динамической памяти в C++?",
            choices: ["new", "malloc", "allocate", "reserve", "memory"],
            correctAnswer: "new"
        },
        {
            question: "Как объявить указатель на целое число в C++?",
            choices: ["int ptr;", "int *ptr;", "ptr int;", "pointer int;", "intptr"],
            correctAnswer: "int *ptr;"
        },
        {
            question: "Какой тип данных используется для хранения целых чисел без десятичной точки в C++?",
            choices: ["float", "double", "int", "char", "long"],
            correctAnswer: "int"
        },
        {
            question: "Какое ключевое слово используется для определения функции в C++?",
            choices: ["define", "function", "def", "void", "class"],
            correctAnswer: "void"
        },
        {
            question: "Какой цикл в C++ выполняется, пока условие истинно и проверяется после каждой итерации?",
            choices: ["for", "while", "do-while", "if", "until"],
            correctAnswer: "while"
        },
        {
            question: "Какой оператор используется для сравнения двух значений в C++?",
            choices: ["=", "==", "!=", "<>", "><"],
            correctAnswer: "=="
        },
        {
            question: "Какой тип данных используется для хранения символов в C++?",
            choices: ["int", "char", "string", "character", "str"],
            correctAnswer: "char"
        },
        {
            question: "Какой оператор используется для увеличения значения переменной на 1 в C++?",
            choices: ["++", "+=", "+1", "+++", "add"],
            correctAnswer: "++"
        },
        {
            question: "Какой оператор используется для доступа к членам структуры или класса в C++?",
            choices: [".", "->", "::", "[]", "//"],
            correctAnswer: "->"
        },
        {
            question: "Какой стандарт библиотеки C++ включает поддержку объектно-ориентированного программирования?",
            choices: ["C++98", "C++03", "C++11", "C++17", "C++20"],
            correctAnswer: "C++11"
        }
    ],
    "C#": [
        {
            question: "Что означает аббревиатура C#?",
            choices: ["C Sharp", "C Plus", "C Number", "C Hashtag", "C Music"],
            correctAnswer: "C Sharp"
        },
        {
            question: "Как объявить переменную в C#?",
            choices: ["declare myVar", "let myVar", "var myVar", "myVar = 5", "const myVar"],
            correctAnswer: "var myVar"
        },
        {
            question: "Какой тип данных используется для хранения целых чисел без десятичной точки в C#?",
            choices: ["float", "double", "int", "char", "long"],
            correctAnswer: "int"
        },
        {
            question: "Как называется оператор для опционального связывания в C#?",
            choices: ["if-let", "bind", "unwrap", "optional", "link"],
            correctAnswer: "if-let"
        },
        {
            question: "Что такое 'интерполяция строк' в C#?",
            choices: ["Способ создания пустой строки", "Метод шифрования строк", "Создание строки из чисел", "Вставка значений в строку", "Удаление символов из строки"],
            correctAnswer: "Вставка значений в строку"
        },
        {
            question: "Какой тип данных используется для хранения символов в C#?",
            choices: ["int", "char", "string", "character", "str"],
            correctAnswer: "char"
        },
        {
            question: "Какой оператор используется для увеличения значения переменной на 1 в C#?",
            choices: ["++", "+=", "+1", "+++", "+1"],
            correctAnswer: "++"
        },
        {
            question: "Какой оператор используется для доступа к членам структуры или класса в C#?",
            choices: [".", "->", "::", "[]", "//"],
            correctAnswer: "."
        },
        {
            question: "Какой ключевой слово используется для определения метода в C#?",
            choices: ["method", "function", "def", "void", "class"],
            correctAnswer: "void"
        },
        {
            question: "Какой стандарт языка C# включает поддержку объектно-ориентированного программирования?",
            choices: ["C# 2.0", "C# 3.0", "C# 4.0", "C# 5.0", "C# 6.0"],
            correctAnswer: "C# 3.0"
        }
    ],
    PHP: [
        {
            question: "Что означает аббревиатура PHP?",
            choices: ["Personal Home Page", "Professional Hypertext Processor", "Preprocessor Hyperlink Protocol", "Public Hosted Pages", "Private Hyperlink Parser"],
            correctAnswer: "Personal Home Page"
        },
        {
            question: "Как объявить переменную в PHP?",
            choices: ["var myVar", "variable myVar", "$myVar", "let myVar", "const myVar"],
            correctAnswer: "$myVar"
        },
        {
            question: "Какой тип данных используется для хранения целых чисел без десятичной точки в PHP?",
            choices: ["float", "double", "int", "char", "integer"],
            correctAnswer: "int"
        },
        {
            question: "Как называется оператор для проверки равенства по значению и типу в PHP?",
            choices: ["=", "==", "===", "!=", "!=="],
            correctAnswer: "==="
        },
        {
            question: "Что такое 'суперглобальный массив' в PHP?",
            choices: ["Способ создания многомерных массивов", "Ассоциативный массив с неизменяемыми ключами", "Массив, содержащий все глобальные переменные", "Массив для хранения пар ключ-значение", "Массив, в котором можно хранить только числа"],
            correctAnswer: "Массив, содержащий все глобальные переменные"
        },
        {
            question: "Какой тип данных используется для хранения текстовых строк в PHP?",
            choices: ["string", "text", "varchar", "char", "textstring"],
            correctAnswer: "string"
        },
        {
            question: "Какой оператор используется для инкрементирования переменной на 1 в PHP?",
            choices: ["++", "+=", "+1", "inc", "increase"],
            correctAnswer: "++"
        },
        {
            question: "Какой оператор используется для доступа к членам объекта в PHP?",
            choices: [".", "->", "::", "=>", ">>"],
            correctAnswer: "->"
        },
        {
            question: "Какой ключевой слово используется для определения функции в PHP?",
            choices: ["method", "function", "def", "void", "class"],
            correctAnswer: "function"
        },
        {
            question: "Какой стандарт библиотеки PHP используется для работы с базами данных?",
            choices: ["PDO", "DBMS", "SQLI", "DBConnect", "DBAccess"],
            correctAnswer: "PDO"
        }
    ],
    React: [
        {
            question: "Что такое React?",
            choices: ["Язык программирования", "База данных", "Библиотека JavaScript", "Операционная система", "Графический дизайн"],
            correctAnswer: "Библиотека JavaScript"
        },
        {
            question: "Как создать компонент в React?",
            choices: ["С помощью HTML", "С помощью CSS", "С помощью JavaScript", "С помощью Python", "С помощью PHP"],
            correctAnswer: "С помощью JavaScript"
        },
        {
            question: "Какой метод жизненного цикла React вызывается после компонента монтируется?",
            choices: ["componentWillUnmount", "componentWillMount", "componentDidMount", "componentDidUpdate", "componentWillUpdate"],
            correctAnswer: "componentDidMount"
        },
        {
            question: "Какой хук React используется для управления состоянием в функциональных компонентах?",
            choices: ["useState", "useEffect", "componentDidMount", "setState", "useStateEffect"],
            correctAnswer: "useState"
        },
        {
            question: "Что такое JSX в React?",
            choices: ["Язык разметки", "Язык запросов к базе данных", "Язык программирования", "Язык стилей", "Язык макросов"],
            correctAnswer: "Язык разметки"
        },
        {
            question: "Какой оператор используется для вставки переменных в JSX?",
            choices: ["$", "{}", "[]", "()", "%%"],
            correctAnswer: "{}"
        },
        {
            question: "Какой компонент в React позволяет отображать список элементов с использованием итерации?",
            choices: ["<List>", "<Map>", "<Array>", "<Loop>", "<ul>"],
            correctAnswer: "<Map>"
        },
        {
            question: "Что представляет собой 'подъем состояния' (lifting state up) в React?",
            choices: ["Поднимание компонентов вверх по иерархии", "Поднятие состояния компонента на уровень выше", "Поднимание компонентов вниз по иерархии", "Поднимание компонентов на один уровень", "Поднимание состояния компонента на один уровень выше"],
            correctAnswer: "Поднятие состояния компонента на уровень выше"
        },
        {
            question: "Какой метод React вызывается при обновлении компонента?",
            choices: ["componentWillUnmount", "componentWillMount", "componentDidMount", "componentDidUpdate", "componentWillUpdate"],
            correctAnswer: "componentDidUpdate"
        },
        {
            question: "Какой инструмент используется для управления маршрутизацией (routing) в React?",
            choices: ["React Router", "React Navigator", "React Route", "React RouteManager", "React Navigation"],
            correctAnswer: "React Router"
        }
    ],
    Python: [
        {
            question: "Что такое Python?",
            choices: ["Язык программирования", "База данных", "Операционная система", "Графический дизайн", "Сетевой протокол"],
            correctAnswer: "Язык программирования"
        },
        {
            question: "Как объявить переменную в Python?",
            choices: ["declare myVar", "var myVar", "myVar = 5", "const myVar", "$myVar"],
            correctAnswer: "myVar = 5"
        },
        {
            question: "Какой тип данных используется для хранения целых чисел в Python?",
            choices: ["float", "double", "int", "char", "str"],
            correctAnswer: "int"
        },
        {
            question: "Как называется оператор для опционального связывания в Python?",
            choices: ["if-let", "bind", "unwrap", "optional", "link"],
            correctAnswer: "optional"
        },
        {
            question: "Какие отступы используются для обозначения блоков кода в Python?",
            choices: ["Пробелы", "Табуляция", "Двоеточие", "Запятая", "Скобки"],
            correctAnswer: "Пробелы"
        },
        {
            question: "Какой тип данных используется для хранения текстовых строк в Python?",
            choices: ["int", "char", "string", "character", "str"],
            correctAnswer: "str"
        },
        {
            question: "Какой оператор используется для увеличения значения переменной на 1 в Python?",
            choices: ["++", "+=", "+1", "+++", "add"],
            correctAnswer: "+="
        },
        {
            question: "Какой ключевой слово используется для определения функции в Python?",
            choices: ["method", "function", "def", "void", "class"],
            correctAnswer: "def"
        },
        {
            question: "Какой оператор используется для доступа к элементам списка (list) в Python?",
            choices: [".", "->", "::", "[]", "//"],
            correctAnswer: "[]"
        },
        {
            question: "Какой стандарт библиотеки Python используется для работы с регулярными выражениями?",
            choices: ["relib", "regex", "pattern", "regexp", "re"],
            correctAnswer: "re"
        }
    ],
    Java: [
        {
            question: "Что такое 'строка' (String) в Java?",
            choices: ["Целочисленный тип данных", "Тип данных для хранения текста", "Тип данных для хранения дробных чисел", "Логический тип данных", "Тип данных для хранения массивов"],
            correctAnswer: "Тип данных для хранения текста"
        },
        {
            question: "Какой модификатор доступа используется, чтобы сделать метод видимым только внутри класса в Java?",
            choices: ["public", "private", "protected", "default", "static"],
            correctAnswer: "private"
        },
        {
            question: "Что такое 'перегрузка методов' в Java?",
            choices: ["Возможность вызвать метод из другого метода", "Создание методов с одинаковыми именами, но разными параметрами", "Использование методов для пересылки данных", "Вызов метода из разных потоков", "Изменение метода во время выполнения программы"],
            correctAnswer: "Создание методов с одинаковыми именами, но разными параметрами"
        },
        {
            question: "Какая конструкция в Java используется для обработки исключений?",
            choices: ["if-else", "try-catch", "switch-case", "for-in", "while-do"],
            correctAnswer: "try-catch"
        },
        {
            question: "Что такое 'полиморфизм' в Java?",
            choices: ["Способность объекта принимать разные формы", "Использование множества методов с одинаковыми именами", "Использование одного метода для разных типов данных", "Использование одного метода для разных классов", "Преобразование объектов в другие типы данных"],
            correctAnswer: "Способность объекта принимать разные формы"
        },
        {
            question: "Какой ключевой слово используется для создания экземпляра класса в Java?",
            choices: ["new", "class", "instance", "this", "object"],
            correctAnswer: "new"
        },
        {
            question: "Какая структура данных в Java используется для хранения уникальных значений без дубликатов?",
            choices: ["List", "Set", "Array", "Map", "Queue"],
            correctAnswer: "Set"
        },
        {
            question: "Что произойдет, если вы попытаетесь делить целое число на ноль в Java?",
            choices: ["Программа зависнет", "Будет выброшено исключение", "Результат будет бесконечность", "Программа закроется", "Ничего не произойдет"],
            correctAnswer: "Будет выброшено исключение"
        },
        {
            question: "Что такое 'аннотация' (annotation) в Java?",
            choices: ["Текстовый комментарий в коде", "Метод для выделения текста", "Метаданные, добавляемые к классам, методам и полям", "Маркер для текста", "Способ форматирования кода"],
            correctAnswer: "Метаданные, добавляемые к классам, методам и полям"
        },
        {
            question: "Какой метод вызывается при создании объекта класса в Java?",
            choices: ["create()", "initialize()", "constructor()", "new()", "instantiate()"],
            correctAnswer: "constructor()"
        }
    ]
    
    

}

export default questionSets;