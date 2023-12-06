/*
 * @Author: wangshiyang
 * @Date: 2023-06-21 13:42:23
 * @LastEditors: wangshiyang
 * @LastEditTime: 2023-06-21 15:11:29
 * @Description: 请填写简介
 */
window.onload = () => {
  // 使用jquery的ajax
  const baseUrl = `http://1.15.88.222:3000`;
  //   渲染轮播图
  axios.get(`${baseUrl}/banner`).then((res) => {
    // 获取轮播图数据
    console.log(res);
    const {
      data: { banners },
      status,
    } = res;
    if (status === 200) {
      const wrapper = document.querySelector(".swiper-wrapper");

      banners.forEach((banner) => {
        const { imageUrl } = banner;
        const newSwiperItem = document.createElement("div");
        newSwiperItem.className = "swiper-slide";
        newSwiperItem.style.background = `url(${imageUrl}) no-repeat`;
        newSwiperItem.style.backgroundSize = `100% 100%`;
        wrapper.appendChild(newSwiperItem);
      });
      // 初始化轮播图
      var mySwiper = new Swiper(".swiper", {
        direction: "horizontal", // 垂直切换选项
        loop: true, // 循环模式选项

        // 如果需要分页器
        pagination: {
          el: ".swiper-pagination",
        },

        // 如果需要前进后退按钮
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
    }
  });

  // 渲染列表
  axios.get(`${baseUrl}/top/playlist`).then((res) => {
    console.log(res);
    const {
      status,
      data: { playlists },
    } = res;
    if (status === 200) {
      const content = document.querySelector(".content");
      playlists.forEach((item) => {
        const { name, coverImgUrl } = item;
        const newItem = document.createElement("div");
        const newName = document.createElement("span");
        const newImg = document.createElement("img");
        newItem.className = "item";
        newName.innerText = name;
        newImg.src = coverImgUrl;
        newItem.appendChild(newImg);
        newItem.appendChild(newName);
        content.appendChild(newItem);
      });
    }
  });
};
