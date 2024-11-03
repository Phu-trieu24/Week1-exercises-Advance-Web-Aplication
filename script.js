// Lấy phần tử container trong HTML
const container = document.querySelector(".container");

// Hàm sinh số ngẫu nhiên trong một khoảng nhất định
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Hàm sinh văn bản ngẫu nhiên từ 70 đến 120 từ
function generateRandomText() {
    // Mảng từ mẫu để tạo văn bản ngẫu nhiên
    const words = [
        "lorem",
        "ipsum",
        "dolor",
        "sit",
        "amet",
        "consectetur",
        "adipiscing",
        "elit",
        "sed",
        "do",
        "eiusmod",
        "tempor",
        "incididunt",
        "ut",
        "labore",
        "et",
        "dolore",
        "magna",
        "aliqua",
        "ut",
        "enim",
        "ad",
        "minim",
        "veniam",
        "quis",
        "nostrud",
        "exercitation",
        "ullamco",
        "laboris",
        "nisi",
        "ut",
        "aliquip",
        "ex",
        "ea",
        "commodo",
        "consequat",
        "duis",
        "aute",
        "irure",
        "dolor",
        "in",
        "reprehenderit",
        "in",
        "voluptate",
        "velit",
        "esse",
        "cillum",
        "dolore",
        "eu",
        "fugiat",
        "nulla",
        "pariatur",
        "excepteur",
        "sint",
        "occaecat",
        "cupidatat",
        "non",
        "proident",
        "sunt",
        "in",
        "culpa",
        "qui",
        "officia",
        "deserunt",
        "mollit",
        "anim",
        "id",
        "est",
        "laborum",
    ];
    // Sinh số từ ngẫu nhiên từ 70 đến 120
    const wordCount = getRandomNumber(70, 120);
    const randomTextArray = [];

    // Chọn các từ ngẫu nhiên từ mảng `words`
    for (let i = 0; i < wordCount; i++) {
        const randomIndex = getRandomNumber(0, words.length - 1);
        randomTextArray.push(words[randomIndex]);
    }

    // Ghép các từ thành chuỗi văn bản
    return randomTextArray.join(" ");
}

// Hàm tạo một mục wiki item
function generateWikiItem(title, text, imgSrc) {
    // Tạo phần tử <div> chính cho wiki item
    const wikiItem = document.createElement("div");
    wikiItem.className = "wiki-item";

    // Tạo phần tử tiêu đề <h1> và thêm nội dung
    const wikiHeader = document.createElement("h1");
    wikiHeader.className = "wiki-header";
    wikiHeader.textContent = title;

    // Tạo phần tử nội dung <div> cho wiki item
    const wikiContent = document.createElement("div");
    wikiContent.className = "wiki-content";

    // Tạo phần tử <p> cho văn bản wiki và thêm nội dung
    const wikiText = document.createElement("p");
    wikiText.className = "wiki-text";
    wikiText.textContent = text;

    // Tạo <div> chứa hình ảnh
    const imgContainer = document.createElement("div");
    imgContainer.className = "img-container";

    // Tạo phần tử <img> và thêm thuộc tính src
    const wikiImage = document.createElement("img");
    wikiImage.className = "wiki-image";
    wikiImage.src = imgSrc;

    // Gắn <img> vào imgContainer
    imgContainer.appendChild(wikiImage);

    // Gắn các phần tử vào wikiContent
    wikiContent.appendChild(wikiText);
    wikiContent.appendChild(imgContainer);

    // Gắn tiêu đề và nội dung vào wikiItem
    wikiItem.appendChild(wikiHeader);
    wikiItem.appendChild(wikiContent);

    // Thêm wikiItem vào container
    container.appendChild(wikiItem);
}

// Tạo dữ liệu mẫu cho các mục wiki item
const wikiData = [
    {
        title: "Breed A",
        text: generateRandomText(),
        imgageSrc: "https://link.com/wiki/BreedA",
    },
    {
        title: "Breed B",
        text: generateRandomText(),
        imgageSrc: "https://link.com/wiki/BreedB",
    },
    {
        title: "Breed C",
        text: generateRandomText(),
        imgageSrc: "https://link.com/wiki/BreedC",
    },
    {
        title: "Breed D",
        text: generateRandomText(),
        imgageSrc: "https://link.com/wiki/BreedD",
    },
    {
        title: "Breed E",
        text: generateRandomText(),
        imgageSrc: "https://link.com/wiki/BreedE",
    },
];

// Tạo các mục wiki item bằng cách duyệt qua mảng wikiData
wikiData.forEach((item) => {
    generateWikiItem(item.title, item.text, item.imgSrc);
});
