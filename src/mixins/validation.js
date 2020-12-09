const validation = {
    methods: {
        /**
         * Checks the validity of the given email
         *
         * @returns {boolean} true, if the given email is valid
         */
        emailValidation() {
            const emailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,6}$/;
            return emailRegExp.test(this.email);
        },
    },
};

export default validation;
