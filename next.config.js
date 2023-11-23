module.exports = {
    output: "export",
    basePath: "/mszan-portfolio",
    images: {
        unoptimized: true,
    },
    publicRuntimeConfig: {
        REACT_APP_EMAILJS_USERID: process.env.REACT_APP_EMAILJS_USERID,
    },
};
