import { Posts } from './types';

export const posts: Posts = [
    {
        id: "f45bad4a061a3e23ad92912c89105d7811c747f9",
        title: "Przewodnik po Web Components",
        author: "Piotr Gajowniczek",
        date: "07-03-2020",
        image: "https://picsum.photos/id/911/0/0",
        content: postContent("<p>React, Angular, Vue… współczesne frameworki frontendowe opierają swoje działanie na wielu komponentach, które składane są w aplikację. 💻 Projektowanie oparte o komponenty pozwala na logiczny podział złożonego problemu na mniejsze, łatwiejsze do rozwiązania części. ⚙️ Nie musimy jednak wcale używać frameworków, żeby korzystać z zalet komponentów. </p><p>Takie możliwości daje nam też rozwijana od 2011 r. technologia web components. </p><p>Serdecznie zapraszamy 📅 7 marca o godzinie 10:00 do łódzkiego biura Sii na warsztaty współorganizowane z grupą NodeSchool! Odpowiemy sobie na nich na następujące pytania ❓ związane z web components: </p><ul><li>Jak tworzyć własne komponenty?</li><li>Jak łączyć komponenty?</li><li>Jakie są główne zalety i wady tej technologii?</li><li>Na co powinniśmy zwracać uwagę podczas projektowania komponentów?</li></ul>", "<p>Na warsztatach wymagana jest podstawowa znajomość języków HTML i JavaScript.</p><p>Mile widziane: znajomość języka TypeScript i dowolnego frontendowego frameworku.</p><p>Pamiętaj, by zabrać ze sobą własnego laptopa 💻, na którym będziesz miał zainstalowane:</p><ul><li>Node.js wraz z npm i TypeScript</li><li>Ulubione środowisko do pisania kodu</li><li>Aktualna wersja przeglądarki (preferowany Chrome, ale Firefox albo Edge też mogą być)</li></ul>"),
        comments: [],
    },
    {
        id: "009e396ace86a44e271efc94d8d51bf1bc05b2fd",
        title: "Frameworki: używać czy nie, a jeśli tak to kiedy?",
        author: "Krzysztof Lipiec",
        date: "18-01-2020",
        image: "https://picsum.photos/id/1019/0/0",
        content: postContent("<p>Na tych warsztatach Krzysztof przedstawi nam zagadnienie użytkowania framework'ów w ramach projektu. Pokaże, że wbrew przekonaniu wielu osób oraz firm, nie zawsze dobrym wyborem jest gotowe narzędzie (wielka biblioteka, aby zabezpieczyć tylko podstawowe wygody i funkcjonalności). </p><p>Porozmawiamy o zaletach i wadach tego rodzaju rozwiązań oraz rozwiniemy wszelkie \"tabu\" związane z budowaniem aplikacji w czystym JS/TS, opartych o proste mechanizmy.</p>", "<p>Stopień wiedzy, który musisz posiadać przychodząc na warsztaty - średnio zaawansowany (Podstawy TypeScript oraz podstawy jednego z popularnych frameworków (Angular, React etc.)</p><p>Zabierz ze sobą własny laptop 💻, na którym będziesz miał zainstalowane:</p><ul><li>Ulubione IDE (preferowane Visual Studio Code)</li><li>TypeScript w najnowszej wersji</li></ul>"),
        comments: [
            {
                author: "Piotr Gajowniczek",
                timestamp: "19-02-2020 17:32",
                content: "Frameworki nie są potrzebne kiedy mamy web components! 🎉",
            }
        ],
    },
    {
        id: "01a62529130144a5376b861724934df87ca7ef18",
        title: "Wprowadzenie do Node.js",
        author: "Krzysztof Zbiciński & Mateusz Pokora",
        date: "23-11-2019",
        image: "https://picsum.photos/id/19/0/0",
        content: postContent("<ul><li>Czym charakteryzuje się to środowisko i jakie są różnice względem przeglądarki internetowej?</li><li>Jakie są zalety i wady wykorzystania Node.js; kiedy jest to dobry wybór, a kiedy lepiej postawić na inną technologię?</li><li>Jak instalować i zarządzać zależnościami w projektach?</li><li>Jak korzystać z natywnych modułów?</li><li>Jak pisać wydajny i asynchroniczny kod?</li><li>Jak wygodnie zarządzać wieloma wersjami Node.js na lokalnym środowisku?</li><li>Jakich narzędzi użyć do pisania testów jednostkowych?</li><li>Jak stworzyć proste API przy użyciu Node.js i Express.js?</li></ul><p>Podczas zajęć napiszemy wspólnie aplikację czatu 💬, aby wykorzystać zdobytą wiedzę w praktyce.</p>", "<ul><li>Podstawowa znajomość języka JavaScript.</li><li>Zainstalowany Node.js w wersji wyższej niż 10.0.0.</li><li>Ulubiony edytor kodu, np. Visual Studio Code</li></ul>"),
        comments: [],
    },
];


function postContent(desc: string, reqs: string): string {
    return `<h3>Opis</h3>${desc}<h3>Wymagania</h3>${reqs}<h3>Treść</h3>${loremIpsum()}`;
}

function loremIpsum(): string {
    return "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc mattis, erat ac placerat finibus, eros massa porttitor elit, et gravida ipsum arcu vitae eros. Donec accumsan ante at lacus volutpat suscipit. In accumsan mi mi, in tempor augue volutpat ac. Nulla vestibulum, massa et luctus pharetra, risus nisl hendrerit justo, ac convallis felis velit sit amet quam. Mauris nec justo vel sem vehicula gravida quis et eros. Quisque ex tortor, commodo et felis a, convallis blandit justo. Mauris ante mi, consequat ut porta iaculis, semper ut turpis. In mattis ex id tempor condimentum. Suspendisse ut nulla gravida, accumsan dolor ut, fermentum enim. Quisque ut dictum elit. Duis scelerisque et lorem ac aliquam. Suspendisse rutrum ornare ipsum, quis porta arcu. Nam magna ligula, dictum eu faucibus nec, eleifend vitae ex. Maecenas sem elit, volutpat et mollis at, vulputate ut odio. Aliquam tempor vitae ex sed egestas.</p><p>Vivamus sagittis augue nunc, ut viverra massa auctor quis. Maecenas ut leo dignissim, interdum lectus a, iaculis justo. Integer viverra nunc in justo congue, sit amet consectetur nulla vulputate. Fusce rhoncus eget justo ac condimentum. Mauris eleifend aliquam laoreet. Phasellus tellus nulla, pellentesque sit amet pulvinar eu, condimentum sed dui. Aliquam cursus tristique pharetra. Curabitur tincidunt orci sapien, id ornare sem lobortis non. In hac habitasse platea dictumst. Integer sit amet massa mollis, placerat eros ut, posuere neque. Vestibulum finibus dui lacinia iaculis sagittis. Nunc scelerisque sodales erat ut malesuada. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam sed laoreet tortor. Nullam non lectus dui.</p><p>Maecenas sit amet facilisis lectus. Donec blandit ornare arcu nec efficitur. Cras gravida at elit volutpat egestas. Proin malesuada mollis rutrum. Morbi lorem nulla, faucibus non purus eget, vestibulum condimentum dolor. Aenean varius nulla hendrerit quam fringilla, efficitur sollicitudin diam maximus. Suspendisse potenti.</p><p>Duis sed mauris vehicula, efficitur mi et, ornare sapien. Fusce nisl arcu, lobortis eget sem id, laoreet hendrerit libero. Mauris nec bibendum eros, eu pulvinar nunc. Etiam tristique luctus dolor sit amet vulputate. Phasellus ante sem, lacinia sit amet nisl sit amet, dignissim blandit nisl. Praesent pellentesque sagittis lacus, sit amet vestibulum risus tempor id. Phasellus ultrices erat quis est consequat egestas. In vel ipsum et leo ornare tincidunt nec a tortor. Aenean vitae est tortor. Nullam venenatis rutrum ullamcorper.</p><p>Curabitur vel ante hendrerit tortor porttitor accumsan. Aenean lobortis odio in lacus scelerisque, sit amet commodo ligula pellentesque. Quisque ac venenatis ex. Fusce iaculis mi et odio condimentum viverra. Nullam finibus diam tellus, id laoreet ante pellentesque at. Vestibulum sit amet justo at lectus commodo iaculis. Praesent sodales pharetra pulvinar. Suspendisse potenti.</p>"
}
