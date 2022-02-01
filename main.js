function createNewBanner (element_id, redirect_link, banner_img) {
    const newBannerImg = document.createElement('img')
    newBannerImg.src = banner_img
    newBannerImg.style.width = "320px"
    newBannerImg.style.height = "320px"
    newBannerImg.onclick = function() {
        window.location = redirect_link
    }
    document.getElementById(element_id).appendChild(newBannerImg)
    // console.log("lol");
    // console.log(element_id);
    // console.log(redirect_link);
    // console.log(banner_img);
}