
function getBookCard(book) {

    let html = ` 
    <div id="bookDetails" style="position:absolute;width:20vw" >
        <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">${book.title}</div>
                <p class="text-gray-700 text-base">
                    Information om boken du sökt på: 
                </p>
            </div>
        <img class="w-full" src="${book.coverImage}" alt="${book.title}coverImage">
    </div>`;

    return html;
};