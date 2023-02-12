"use strict";
exports.id = 491;
exports.ids = [491];
exports.modules = {

/***/ 4491:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_Layout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/Footer.js

function Footer() {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        className: "footerSection",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "footerTitle",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                        className: "footerh2",
                        children: "Barrsoft"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "footerDesc",
                        children: "We make Blockchain easy"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "footerCopyright",
                children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                    className: "footerCopyrightDesc",
                    children: "Copyright @ 2022 Barrsfot"
                })
            })
        ]
    }));
};

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./components/NavBar.js


const firstClick = ()=>{
    document.querySelector(".navRight").classList.toggle("show");
    document.getElementById("nav-icon").classList.toggle("fa-times");
};
const NavBar = ()=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
        className: "navBar",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "navContent",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "navLeft",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                href: "/",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    src: "logo.png",
                                    alt: "",
                                    className: "logo"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                href: "/",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                    className: "logoTilte",
                                    children: "Barrsoft"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "navRight",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                            className: "navUl",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    className: "navLi",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                        href: "/",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            onClick: firstClick,
                                            children: "Home"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    className: "navLi",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                        href: "/about",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            onClick: firstClick,
                                            children: "About"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    className: "navLi",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                        href: "/services",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            onClick: firstClick,
                                            children: "Services"
                                        })
                                    })
                                })
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "menu-btn",
                id: "menu-btn",
                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                    className: "fas fa-bars fa-2x",
                    id: "nav-icon",
                    onClick: firstClick
                })
            })
        ]
    })
;
/* harmony default export */ const components_NavBar = (NavBar);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "nprogress"
var external_nprogress_ = __webpack_require__(808);
var external_nprogress_default = /*#__PURE__*/__webpack_require__.n(external_nprogress_);
;// CONCATENATED MODULE: ./components/Layout.js






const Layout = ({ children  })=>{
    const router = (0,router_.useRouter)();
    (0,external_react_.useEffect)(()=>{
        const handleRouteChange = (url)=>{
            external_nprogress_default().start();
        };
        router.events.on('routeChangeStart', handleRouteChange);
        router.events.on('routeChangeComplete', ()=>external_nprogress_default().done()
        );
        return ()=>{
            router.events.off('routeChangeStart', handleRouteChange);
        };
    }, []);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(components_NavBar, {}),
            children,
            /*#__PURE__*/ jsx_runtime_.jsx(Footer, {})
        ]
    }));
};
/* harmony default export */ const components_Layout = (Layout);


/***/ })

};
;