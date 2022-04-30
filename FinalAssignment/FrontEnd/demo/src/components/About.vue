<template>
  <div id="About">
    <h2>开发团队</h2>
    <figure class="sample">
      <img src="../assets/avatar/pyz.png" alt="sample1" />
      <figcaption>
        <h3>潘祎哲</h3>
        <!-- 随机文本，Lorem -->
        <p>Life will always find its way</p>
      </figcaption>
      <a href="https://github.com/CheeseburgerIM" target="_blank"></a>
    </figure>
    <figure class="sample">
      <img src="../assets/avatar/sj.jpg" alt="sample1" />
      <figcaption>
        <h3>宋 杰</h3>
        <!-- 随机文本，Lorem -->
        <p>
          Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de
          l'aimer.
        </p>
      </figcaption>
      <a href="https://github.com/Artist-Song" target="_blank"></a>
    </figure>
    <figure class="sample">
      <img src="../assets/avatar/zyq.jpg" alt="sample1" />
      <figcaption>
        <h3>张雨晴</h3>
        <!-- 随机文本，Lorem -->
        <p>风吹在云, 时针在烧</p>
      </figcaption>
      <a href="https://gitee.com/yuqing_z" target="_blank"></a>
    </figure>
  </div>
</template>

<script>
export default {
  name: "About",
};
</script>

<style scoped>
/* sample 的整体样式 */
.sample {
  position: relative;
  color: #ffffff; /* 控制字体颜色 */
  display: inline-block;
  font-family: "Source Sans Pro", sans-serif;
  font-size: 16px;
  margin: 10px 5px;
  max-width: 320px;
  min-width: 230px;
  overflow: hidden;
  text-align: right;
  width: 100%;
  background-color: #fff;
}

.sample *,
.sample *:before,
.sample *:after {
  box-sizing: border-box;
  transition: all 0.45s ease;
}

.sample:before,
.sample:after {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  content: "";
  opacity: 0.5;
  transition: all 0.45s ease;
  background-color: #b84712;
}

.sample:before {
  transform: skew(30deg) translateX(80%); /* 为了做这个斜角，要用 skew() 控制倾斜量 */
}

.sample:after {
  transform: skew(-30deg) translateX(70%);
}

/* 调整图片大小 */
.sample img {
  backface-visibility: hidden;
  max-width: 100%;
  vertical-align: top;
}

/* 调整标题大小、位置 */
.sample figcaption {
  position: absolute;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  padding: 20px 20px 20px 40%;
  /* 将文字放置在最上层 */
  z-index: 1;
}

.sample figcaption:before,
.sample figcaption:after {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.7);
  content: "";
  opacity: 0.5;
  z-index: -1;
  background-color: #b84712;
}

/* 与上面一致调整斜角 */
.sample figcaption:before {
  transform: skew(30deg) translateX(100%);
}

.sample figcaption:after {
  transform: skew(-30deg) translateX(90%);
}

/* 调整具体对应的文本 */
.sample h3,
.sample p {
  margin: 0;
  opacity: 0;
  letter-spacing: 1px; /* 字间距 */
}

.sample h3 {
  font-family: "Teko", sans-serif;
  font-size: 36px;
  font-weight: 700;
  line-height: 1em;
  text-transform: uppercase;
}

.sample p {
  font-size: 0.9em;
}

/* 链接 */
.sample a {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 1;
}

/* 以下部分为鼠标移动到图片时动画部分 */
.sample:hover h3,
.sample:hover p,
.sample.hover h3,
.sample.hover p {
  transform: translateY(0);
  opacity: 0.9;
}

.sample:hover:before,
.sample.hover:before {
  transform: skew(30deg) translateX(30%);
  transition-delay: 0.05s;
}

.sample:hover:after,
.sample.hover:after {
  transform: skew(-30deg) translateX(20%);
  /* transition-delay: 0.05s; */
}

.sample:hover figcaption:before,
.sample.hover figcaption:before {
  transform: skew(30deg) translateX(50%);
  transition-delay: 0.15s;
}

.sample:hover figcaption:after,
.sample.hover figcaption:after {
  transform: skew(-30deg) translateX(40%);
  transition-delay: 0.1s;
}
</style>
