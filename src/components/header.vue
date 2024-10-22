<template>
  <header>
    <div class="container">
      <nav class="nav">
        <router-link to="/" class="nav--list--itim">
          <p class="nav--logo">&lt;/MH&gt;</p>
        </router-link>
        <ul class="nav--list">
          <router-link to="/" class="nav--list--itim">Home</router-link>
          <router-link to="/about" class="nav--list--itim">About</router-link>
          <router-link to="/portfolio" class="nav--list--itim">Portfolio</router-link>
          <router-link to="/contact" class="nav--list--itim">Contact</router-link>
        </ul>
        <button class="nav--menu">
          <i class="pi pi-bars" style="font-size: 20px"></i>
        </button>
      </nav>
    </div>
  </header>
</template>

<script setup></script>

<style lang="scss" scoped>
header {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
}
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  z-index: 1px;

  &--logo {
    font-size: 24px;
    font-weight: 600;
    color: #fff;
    text-decoration: none;
    transition: 0.5s;
  }

  &--list {
    display: flex;
    align-items: center;
    gap: 20px;

    &--itim {
      color: #fff;
      text-decoration: none;
      transition: 0.5s;

      &:hover {
        color: #7cf03d;
      }
    }
  }

  &--menu {
    background-color: transparent;
    border: none;
    color: #fff;
    cursor: pointer;
    transition: 0.5s;
    display: none;
    &:hover {
      color: #7cf03d;
    }
  }
}

.router-link-exact-active {
  color: #7cf03d;
}

@media screen and (max-width: 577px) {
  .nav {
    &--list {
      display: none;
    }

    &--menu {
      display: block;
    }
  }
}
</style>
