let url = "http://universities.hipolabs.com/search?name=";


let btn = document.querySelector("button");
btn.addEventListener("click", async () => {
    let country = document.querySelector("input").value;
    let colleges = await getUniversity(country);

    Show(colleges);
});

function Show(colleges){
    let ul = document.querySelector("#res");
    ul.innerText = "";

    colleges.forEach(collArr => {

        let makeLi = document.createElement("li");
        makeLi.textContent = collArr.name;
        ul.append(makeLi);

        console.log(collArr.web_pages);
    });
};

async function getUniversity(country) {
    try {
        let res = await axios.get(url + country);
        return res.data;
    } catch (err) {
        return [];
    }
};