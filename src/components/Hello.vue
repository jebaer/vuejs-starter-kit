<template>
    <section class="m-12">
        <div v-if="!display" class="input-group">
            <input
                v-model="name"
                type="text"
                placeholder="What's your name?"
                class="bg-transparent text-white-base border-0 focus:border-0 border-b-2 border-white-base min-w-full"
                :class="{ 'border-secondary-base': isInvalid }"
                @keyup="validate"
            />
            <button
                class="bg-secondary-base hover:bg-secondary-dark text-lg min-w-full mt-3"
                @click="handleClick"
            >
                &#128640; SEND
            </button>
        </div>
        <p v-if="display" class="text-xl text-white-base font-bold">
            &#128075; Hello {{ getName.toUpperCase() }} ! &#128075;
        </p>
    </section>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import validation from '@/mixins/validation';

export default {
    name: 'Hello',
    mixins: [validation],
    data() {
        return {
            name: null,
            display: false,
            isInvalid: null,
        };
    },
    computed: {
        ...mapGetters(['getName']),
    },
    methods: {
        handleClick() {
            if (this.name && this.nameValidation()) {
                this.display = true;
                this.setName({ name: this.name });
            }
        },
        validate() {
            this.isInvalid = !this.nameValidation();
        },
        ...mapActions({
            setName: 'SET_NAME',
        }),
    },
};
</script>
