Vue.createApp({
    data() {
        return {
            mails: [],
        };
    },
    created() {
        this.generatedEmails();
    },
    methods: {
        generatedEmails: function () {
            for (i = 0; i < 10; i++) {
                axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
                    .then((randMail) => {
                        this.mails.push(randMail.data.response);
                    });
            }
        },
    },
}).mount("#app");