const titleDev = document.getElementById("titleDev");
const allNews = async (category) => {
    const response = await fetch(
        `https://openapi.programming-hero.com/api/retro-forum/posts?category=${category}`
    );
    const data = await response.json();

    const newsContainer = document.getElementById("news-container");
    newsContainer.innerHTML = "";

    data.posts.forEach((news) => {
        const div = document.createElement("div");
        div.classList.add("singleNews");
        div.innerHTML = `
        <div id="singleNews" class="lg:flex mr-10 bg-[#2328b81a] opacity-10% p-5 rounded-3xl mb-5 gap-5 ml-10 md:ml-0 ">
        
    <div class="indicator">
    <span class="indicator-item badge  ${news.isActive ? "bg-green-600" : "bg-red-600"
            } border-none ">
   
    </span> 
    <div class="grid w-20 h-20  bg-base-300 place-items-center"><img class="rounded-xl" src="${news.image
            }" alt=""></div>
    </div>
    <div class="">
    <div class="lg:flex gap-5">
        <h3># ${news.category}</h3>
        <h3 class="mr-20">Author <span class="mr-2">:</span><span >${news.author.name
            }</span></h3>

    </div>
    <div>
        <h1 class="lg:text-xl font-bold mt-2 w-full">${news.title}</h1>
        <p class="mt-7 text-[#12132D99]">${news.description}</p>
       
        <hr class="mt-2 border-dotted bg-black gap-11">
        <div class="flex justify-between mt-5">
            <div class="flex md:gap-10 gap-5">
                <div class="flex gap-2">
                    <div><img src="icon/Vector (4).png" alt=""></div>
                    <h3>${news.comment_count}</h3>
                </div>

                <div class="flex gap-2">
                    <div class="mt-1.5 mr-2"><img src="icon/Vector (3).png" alt=""></div>
                    <h3>${news.view_count}</h3>
                </div>

                <div class="flex gap-2">
                    <div> <img src="icon/Vector (2).png" alt=""></div>
                    <h3>${news.posted_time}</h3>
                </div>

            </div>
            <div class=""onclick="handleClick('${news.title}',${news.view_count})">
            <img src="icon/Group.png" alt="">
            </div>
        </div>
    </div>

    </div>
    </div>
        `;
        newsContainer.appendChild(div);
    });
};
allNews("");

const allCard = async () => {
    const response = await fetch(
        "https://openapi.programming-hero.com/api/retro-forum/latest-posts"
    );
    const data = await response.json();

    const cardContainer = document.getElementById("card-container");
    data.forEach((card) => {
        const div = document.createElement("div");


        div.setAttribute('news-title', card.title)
        div.setAttribute('id', `${card.id}`)
        div.setAttribute('news-view-count', card.view_count)



        div.classList.add("card-container");
        div.innerHTML = `
    <div id="card-titile"  class="card md:w-96 w-80 mx-auto bg-base-100 shadow-xl">
    <figure><img class="" src="${card.cover_image}"
            alt="Shoes" />
    </figure>
    <div class="card-body ">
        <div class="flex gap-2">
            <div> <img src="icon/c.png" alt=""></div>
            <h2>${card.author.posted_date}</h2>
        </div>
        <h2 class="text-lg font-extrabold">${card.title}</h2>
        <p>${card.description}</p>
        <div class="flex gap-2">
            <div class="w-10  mt-3">
                <img class="rounded-full" src="${card.profile_image} " alt="">
            </div>
            <div class="mt-2">
                <h2 class="text-lg font-extrabold">Cameron williamson</h2>
                <h2>${card.author.designation}</h2>
            </div>
        </div>

    </div>
    </div>
        `;
        cardContainer.appendChild(div);
    });
    spinner(false);
};
allCard();

// handleSearch result

const Search = () => {
    spinner(true);

    const value = document.getElementById("input").value;
    const values = value.toLowerCase().split(" ").join("");
    if (values) {
        setTimeout(() => {
            allCard(values);
        }, 2000);
    } else {
        alert("please enter valid id Number");
    }
};

const spinner = (loading) => {
    const loadingSpinner = document.getElementById("loading-spinner");
    if (loading) {
        loadingSpinner.classList.remove("hidden");
        titleDev.classList.add("hidden");
    } else {
        loadingSpinner.classList.add("hidden");
        titleDev.classList.remove("hidden");
    }
};

const markAsRedNumber = document.getElementById("countUP");
let markValue = 0;
const clickHandle = () => {
    markValue += 1;
    markAsRedNumber.innerText = markValue;
};

const cardFunction = () => {

}




const handleClick = (title, view) => {
    const titleShow = document.getElementById("titleShow");
    clickHandle();

    const div = document.createElement("div");
    div.className =
        "flex bg-white p-5  rounded-2xl justify-between mb-2";
    div.innerHTML = `
    <h2 class="text-[#12132D] font-semibold">${title}</h2>
    <div class="flex">
        <div  class="mt-1.5 mr-2"> <img src="icon/Vector (3).png" alt=""></div>
        <h2>${view}</h2>
    </div>
    `;
    titleShow.appendChild(div);
};
