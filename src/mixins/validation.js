const validation = {
    methods: {
        /**
         * Checks the validity of the given name
         *
         * @returns {boolean} the name is valid statement
         */
        nameValidation() {
            const validator = /^[a-z-]{2,}$/i;
            return validator.test(this.name);
        },
    },
};

export default validation;
