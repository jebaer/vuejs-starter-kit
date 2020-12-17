<template>
    <div id="app" class="bg-black-base text-white-base">
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'App',
};
</script>

<style>
html,
body,
#app {
    height: 100vh;
}

body,
#app {
    min-height: 100vh;
    margin: 0;
}

main {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    position: fixed;
    top: 75px;
    bottom: 55px;
    overflow-y: overlay;
    overflow: scroll;
    scrollbar-width: none;
    padding: 50px 0;
}
@media screen and (min-width: 767px) {
    main {
        top: 115px;
        bottom: 0px;
    }
}
main::-webkit-scrollbar {
    display: none;
}

/* width */
::-webkit-scrollbar {
    width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
    background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
    background: #888;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
    background: #555;
}
</style>
