<template>
  <section>
    <div class="container">
      <div class="home">
        <div class="home--info">
          <h1>Akbarov Muhammadaziz</h1>
          <h2>
            I'm a
            <span style="--i: 3" data-text="Web Developer">Web Developer</span>
            <span style="--i: 2" data-text="Frontend Developer">Frontend Developer</span>
            <span style="--i: 1" data-text="Software Engineer">Software Engineer</span>
          </h2>
          <p>
            I’m Muhammadaziz, a frontend developer with one year of experience working on
            various web projects. My expertise lies in React.js and Vue.js, where I focus
            on creating modern, fast, and responsive user interfaces. I am proficient in a
            wide range of web technologies and continuously strive to enhance my skills.
            My goal is to add value to companies by developing user-friendly and visually
            appealing interfaces that provide an excellent user experience.
          </p>
          <div class="home--info--btnSci">
            <a href="#" class="home--info--btnSci-btn">Downlod CV</a>
            <div class="home--info--btnSci--sci">
              <a href="https://github.com/muhammadaziz01-dev" target="_blank"
                ><i class="pi pi-github"></i
              ></a>
              <a
                href="https://www.linkedin.com/in/muhammadaziz-akbarov-00147331a/"
                target="_blank"
                ><i class="pi pi-linkedin"></i
              ></a>
              <a href="https://t.me/Akbarov_Muhammadaziz" target="_blank"
                ><i class="pi pi-telegram"></i
              ></a>
            </div>
          </div>
        </div>
        <div class="home--image">
          <div class="home--image--box">
            <div class="home--image--box--item">
              <img
                src="../../assets/admin-removebg-preview.png"
                alt="akbarov muhammadaziz"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// import "boxicons";
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  height: 100vh;
  padding-top: 60px;
  color: #ffff;

  &--info h1 {
    font-size: 45px;
  }

  &--info h2 {
    display: inline-block;
    font-size: 32px;
    margin-top: -10px;

    span {
      position: relative;
      display: inline-block;
      color: transparent;
      -webkit-text-stroke: 0.7px #7cf03d;
      animation: display-text 9s linear infinite;
      animation-delay: calc(-3s * var(--i));

      &::before {
        content: attr(data-text);
        position: absolute;
        width: 0;
        border-right: 2px solid #7cf03d;
        color: #7cf03d;
        white-space: nowrap;
        overflow: hidden;
        animation: fill-text 2.4s linear infinite;
      }
    }
    @keyframes fill-text {
      0%,
      20% {
        width: 0;
      }
      50%,
      80% {
        width: 100%;
      }
      100% {
        width: 0;
      }
    }

    @keyframes display-text {
      0%,
      30% {
        display: inline;
      }
      31%,
      100% {
        display: none;
      }
    }
  }
  &--info p {
    font-size: 16px;
    margin: 10px 0 25px;
  }

  &--info--btnSci {
    display: flex;
    align-items: center;
    gap: 20px;

    &-btn {
      display: inline-block;
      padding: 10px 30px;
      background-color: #7cf03d;
      border: 2px solid #7cf03d;
      border-radius: 40px;
      box-shadow: 0 0 10px #7cf03d;
      font-style: 16px;
      color: #1f242d;
      font-weight: 600;
      transition: 0.5s;

      &:hover {
        background-color: transparent;
        color: #7cf03d;
        box-shadow: none;
      }
    }

    &--sci {
      display: flex;
      gap: 20px;

      a {
        display: inline-flex;
        padding: 8px;
        border-radius: 50%;
        border: 2px solid #7cf03d;
        font-style: 20px;
        margin: 0 8px;
        color: #7cf03d;
        transition: 0.5s;

        &:hover {
          background-color: #7cf03d;
          color: #1f242d;
          box-shadow: 0 0 10px #7cf03d;
        }
      }
    }
  }

  &--image {
    display: flex;
    align-items: center;
    justify-content: center;
    // background-color: #fff;

    &--box {
      width: 32vw;
      height: 32vw;
      border-radius: 50%;
      padding: 5px;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      transform: rotate(0deg);

      &::before {
        content: "";
        position: absolute;
        width: 500px;
        height: 500px;
        background: conic-gradient(transparent, transparent, transparent, #7cf03d);
        transform: rotate(0deg);
        animation: rotate-border 10s linear infinite;
      }

      &::after {
        content: "";
        position: absolute;
        width: 500px;
        height: 500px;
        background: conic-gradient(transparent, transparent, transparent, #7cf03d);
        transform: rotate(0deg);
        animation: rotate-border 10s linear infinite;
        animation-delay: -15s;
      }

      @keyframes rotate-border {
        100% {
          transform: rotate(360deg);
        }
      }

      &--item {
        position: relative;
        width: 100%;
        height: 100%;
        background-color: #1f242d;
        border-radius: 50%;
        border: 0.1px solid #1f242d;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        z-index: 1;

        img {
          position: absolute;
          top: 20px;
          display: block;
          width: 85%;
          object-fit: cover;
          mix-blend-mode: lighten;
        }
      }
    }
  }
}


@media screen and (max-width: 577px) {

  .home {
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  height: auto;
  padding-top: 80px;

  &--info h1 {
    font-size: 30px;
  }

  &--info h2 {
    display: inline-block;
    font-size: 22px;
    margin-top: 0px;

    
  }
  &--info p {
    font-size: 14px;
    margin: 10px 0 25px;
  }

  &--info--btnSci {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;

    &-btn {
      font-style: 14px;
    }

    &--sci {
      display: flex;
      gap: 0px;

      a {
        display: inline-flex;
        padding: 10px;
      }
    }
  }

  &--image {
    display: flex;
    align-items: center;
    justify-content: center;
    // background-color: #fff;

    &--box {
      width: 60vw;
      height: 60vw;
      border-radius: 50%;
      padding: 4px;

      &--item {

        img {
          position: absolute;
          top: 15px;
        }
      }
    }
  }
}
}
</style>
