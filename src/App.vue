<template>
    <div id="app" class="bg-black-base text-white-base">
        <main
            class="flex flex-col fixed top-0 bottom-0 w-full items-center justify-center"
        >
            <router-view></router-view>
        </main>
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
