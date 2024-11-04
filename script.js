// Lấy phần tử container trong HTML
const container = document.querySelector(".container");

// Hàm lấy ảnh ngẫu nhiên của giống chó từ API
async function fetchDogImage(breed) {
    try {
        const response = await fetch(
            `https://dog.ceo/api/breed/${breed}/images/random`
        );
        const data = await response.json();
        return data.message; // Trả về URL ảnh
    } catch (error) {
        console.error("Error fetching dog image:", error);
        return null; // Trả về null nếu có lỗi
    }
}

// Hàm sinh số ngẫu nhiên trong một khoảng nhất định
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Hàm sinh văn bản ngẫu nhiên từ 70 đến 120 từ
function generateRandomText() {
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
    const wordCount = getRandomNumber(70, 120);
    const randomTextArray = [];
    for (let i = 0; i < wordCount; i++) {
        const randomIndex = getRandomNumber(0, words.length - 1);
        randomTextArray.push(words[randomIndex]);
    }
    return randomTextArray.join(" ");
}

// Hàm tạo một mục wiki item
async function generateWikiItem(title, breed) {
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
    wikiText.textContent = generateRandomText();

    // Tạo <div> chứa hình ảnh
    const imgContainer = document.createElement("div");
    imgContainer.className = "img-container";

    // Lấy ảnh từ API và tạo phần tử <img>
    const imgSrc = await fetchDogImage(breed);
    if (imgSrc) {
        const wikiImage = document.createElement("img");
        wikiImage.className = "wiki-img";
        wikiImage.src = imgSrc;
        imgContainer.appendChild(wikiImage);
    } else {
        imgContainer.textContent = "Could not load image.";
    }

    // Gắn các phần tử vào wikiContent
    wikiContent.appendChild(wikiText);
    wikiContent.appendChild(imgContainer);

    // Gắn tiêu đề và nội dung vào wikiItem
    wikiItem.appendChild(wikiHeader);
    wikiItem.appendChild(wikiContent);

    // Thêm wikiItem vào container
    container.appendChild(wikiItem);
}

// Danh sách các giống chó muốn hiển thị
const breeds = ["labrador", "poodle", "bulldog", "beagle", "dalmatian"];

// Tạo các mục wiki item với ảnh chó
breeds.forEach((breed) => {
    generateWikiItem(`Breed: ${breed}`, breed);
});
