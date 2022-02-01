function createNewBanner(element_id, redirect_link, banner_img) {
    const newBannerImg = document.createElement('img')
    newBannerImg.setAttribute("class", "bannerImg")
    newBannerImg.src = banner_img
    newBannerImg.style.width = "320px"
    newBannerImg.style.height = "320px"
    newBannerImg.onclick = function () {
        window.location = redirect_link
    }
    document.getElementById(element_id).appendChild(newBannerImg)
}
console.log(localStorage);

const saveBanners = () => {
    const bannersData = (() => {
        const fieldValue = localStorage.getItem('banners-data');
        return fieldValue === null ? [] : JSON.parse(fieldValue)
    })();
    const banners = document.getElementsByClassName("bannerImg")
    for(let banner of banners) {
        bannersData.push({"class": banner.className, "src": banner.src})
    }
    localStorage.setItem('banners-data', JSON.stringify(bannersData))
};

const clearBanners = () => {
    localStorage.removeItem("banners-data")
}