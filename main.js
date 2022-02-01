const displaySavedBanners = (banners) => {
    for (let banner of banners) {
        const bannerImg = document.createElement('img')
        bannerImg.setAttribute("class", "banner_Img")
        bannerImg.src = banner.src
        bannerImg.style.width = "320px"
        bannerImg.style.height = "320px"
        document.getElementById("saved-banners").appendChild(bannerImg)
    }
}

const checkBanners = () => {
    const banners = localStorage.getItem('banners-data')
    banners === null ? null : displaySavedBanners(JSON.parse(banners))
}

window.onload = checkBanners();

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

const saveBanners = () => {
    const bannersData = (() => {
        const fieldValue = localStorage.getItem('banners-data');
        return fieldValue === null ? [] : JSON.parse(fieldValue)
    })();
    const banners = document.getElementsByClassName("bannerImg")
    for (let banner of banners) {
        bannersData.push({ "src": banner.src })
    }
    localStorage.setItem('banners-data', JSON.stringify(bannersData))
};

const clearBanners = () => {
    localStorage.removeItem("banners-data")
}
