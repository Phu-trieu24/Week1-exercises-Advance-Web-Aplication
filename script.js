// Lấy phần tử container trong HTML
const container = document.querySelector(".container");

// Hàm gọi Wikipedia API để lấy văn bản tóm tắt cho giống chó
async function fetchWikiText(breed) {
    const apiUrl = `https://en.wikipedia.org/api/rest_v1/page/summary/${breed}`;
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        return data.extract || "No information available.";
    } catch (error) {
        console.error("Lỗi khi gọi Wikipedia API:", error);
        return "Error loading information.";
    }
}

// Hàm gọi Dog API để lấy ảnh ngẫu nhiên cho giống chó
async function fetchDogImage(breed) {
    const apiUrl = `https://dog.ceo/api/breed/${breed}/images/random`;
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data.status !== "success") {
            console.error(`Không thể lấy hình ảnh cho giống chó: ${breed}`);
            return "https://via.placeholder.com/150"; // Ảnh mặc định nếu lỗi
        }

        return data.message; // URL của hình ảnh
    } catch (error) {
        console.error("Lỗi khi gọi Dog API:", error);
        return "https://via.placeholder.com/150"; // Ảnh mặc định nếu lỗi
    }
}

// Hàm tạo một mục wiki item
async function generateWikiItem(breed) {
    // Tạo phần tử <div> chính cho wiki item
    const wikiItem = document.createElement("div");
    wikiItem.className = "wiki-item";

    // Tạo phần tử tiêu đề <h1> và thêm nội dung
    const wikiHeader = document.createElement("h1");
    wikiHeader.className = "wiki-header";
    wikiHeader.textContent = breed;

    // Tạo phần tử nội dung <div> cho wiki item
    const wikiContent = document.createElement("div");
    wikiContent.className = "wiki-content";

    // Lấy văn bản từ Wikipedia API
    const text = await fetchWikiText(breed.replace(" ", "_"));

    // Tạo phần tử <p> cho văn bản wiki và thêm nội dung
    const wikiText = document.createElement("p");
    wikiText.className = "wiki-text";
    wikiText.textContent = text;

    // Lấy ảnh ngẫu nhiên từ Dog API
    const imgSrc = await fetchDogImage(breed.toLowerCase().replace(" ", ""));

    // Tạo <div> chứa hình ảnh
    const imgContainer = document.createElement("div");
    imgContainer.className = "img-container";

    // Tạo phần tử <img> và thêm thuộc tính src
    const wikiImage = document.createElement("img");
    wikiImage.className = "wiki-img";
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

// Tạo dữ liệu mẫu cho các mục wiki item với tên giống chó
const wikiData = [
    "Golden Retriever",
    "Bulldog",
    "Beagle",
    "Poodle",
    "German Shepherd",
];

// Tạo các mục wiki item bằng cách duyệt qua mảng wikiData
wikiData.forEach((breed) => {
    generateWikiItem(breed);
});
