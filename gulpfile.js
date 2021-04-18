"use strict";
const { src, dest, watch, series, parallel } = require("gulp");
const log = require("fancy-log");
const colors = require("ansi-colors");
const browserSync = require("browser-sync").create();
const sass = require("gulp-sass");
const bourbon = require("node-bourbon").includePaths;
const rename = require("gulp-rename");
const concat = require("gulp-concat");
const del = require("del");
const panini = require("panini");
const uglify = require("gulp-uglify-es").default;
const sourcemaps = require("gulp-sourcemaps");
const imagemin = require("gulp-imagemin");
const removeCode = require("gulp-remove-code");
const removeLog = require("gulp-remove-logging");
const prettyHtml = require("gulp-pretty-html");
const sassLint = require("gulp-sass-lint");
const htmllint = require("gulp-htmllint");
const jshint = require("gulp-jshint");
const htmlreplace = require("gulp-html-replace");
const newer = require("gulp-newer");
const autoprefixer = require("gulp-autoprefixer");
const accessibility = require("gulp-accessibility");
const babel = require("gulp-babel");
const logSymbols = require('log-symbols'); //For Symbolic Console logs :) :P

sass.compiler = require("sass");

/* ==========================================================================
ADDITIONAL VARIABLES
========================================================================== */

const nodepath = "node_modules/";
const assetspath = "assets/";
const environment = "dev";

/* ==========================================================================
FILE PATHS
========================================================================== */

const files = {
  scssPath: "app/scss/**/*.scss",
  jsPath: "app/js/**/*.js",
};

/* ==========================================================================
SETUP TASKS 
========================================================================== */

function setupBulma() {
  console.log("\n\t" + logSymbols.info, "Setting up Bulma..\n");
  return src([nodepath + "bulma/*.sass", nodepath + "bulma/**/*.sass"]).pipe(
    dest("src/assets/sass/")
  );
}

/* ==========================================================================
DEVELOPMENT TASKS
========================================================================== */

function compileSCSS() {
  console.log("\n\t" + logSymbols.info, "Compiling SCSS..\n");
  if (environment === "dev") {
    return src(["src/assets/scss/core.scss"])
      .pipe(
        sass({
          outputStyle: "compressed",
          sourceComments: "map",
          sourceMap: "scss",
          includePaths: bourbon,
        }).on("error", sass.logError)
      )
      .pipe(autoprefixer("last 2 versions"))
      .pipe(dest("dist/assets/css"))
      .pipe(browserSync.stream());
  } else {
    return src([
      "src/assets/scss/core.scss",
      "src/assets/scss/teal.scss",
      "src/assets/scss/green.scss",
      "src/assets/scss/blue.scss",
      "src/assets/scss/azur.scss",
      "src/assets/scss/night.scss",
      "src/assets/scss/yellow.scss",
      "src/assets/scss/orange.scss",
      "src/assets/scss/red.scss",
      "src/assets/scss/purple.scss",
    ])
      .pipe(
        sass({
          outputStyle: "compressed",
          sourceComments: "map",
          sourceMap: "scss",
          includePaths: bourbon,
        }).on("error", sass.logError)
      )
      .pipe(autoprefixer("last 2 versions"))
      .pipe(dest("dist/assets/css"))
      .pipe(browserSync.stream());
  }
}

function compileHTML() {
  console.log("\n\t" + logSymbols.info, "Compiling HTML..\n");
  panini.refresh();
  return src("src/pages/**/*.html")
    .pipe(
      panini({
        root: "src/pages/",
        layouts: "src/layouts/",
        partials: "src/partials/",
        helpers: "src/helpers/",
        data: "src/data/",
      })
    )
    .pipe(dest("dist"))
    .pipe(browserSync.stream());
}

function resetPages(done) {
  console.log("\n\t" + logSymbols.info, "Clearing Panini Cache..\n");
  panini.refresh();
  done();
}

function concatJS() {
  console.log("\n\t" + logSymbols.info, "Concatenating Bulkit Javascript..\n");
  return src([
    "src/assets/js/utilities/constants.js",
    "src/assets/js/utilities/utilities.js",
    "src/assets/js/components/pageloader.js",
    "src/assets/js/components/navbar.js",
    "src/assets/js/components/sidebar.js",
    "src/assets/js/utilities/homepage.js",
    "src/assets/js/utilities/demo.js",
    "src/assets/js/components/themeswitcher.js",
    "src/assets/js/components/animations.js",
    "src/assets/js/components/accordion.js",
    "src/assets/js/components/backtotop.js",
    "src/assets/js/components/cards.js",
    "src/assets/js/components/carousel.js",
    "src/assets/js/components/counters.js",
    "src/assets/js/components/countdown.js",
    "src/assets/js/components/dropdowns.js",
    "src/assets/js/components/faq.js",
    "src/assets/js/components/map.js",
    "src/assets/js/components/marquee.js",
    "src/assets/js/components/mockup.js",
    "src/assets/js/components/modal.js",
    "src/assets/js/components/popups.js",
    "src/assets/js/components/pricing.js",
    "src/assets/js/components/quickview.js",
    "src/assets/js/components/search.js",
    "src/assets/js/components/slider.js",
    "src/assets/js/components/tabs.js",
    "src/assets/js/components/tilt.js",
    "src/assets/js/components/toast.js",
    "src/assets/js/components/uploader.js",
    "src/assets/js/components/video.js",
    "src/assets/js/form/autocomplete.js",
    "src/assets/js/form/bulma.js",
    "src/assets/js/form/combo.js",
    "src/assets/js/form/datetime.js",
    "src/assets/js/form/input.js",
    "src/assets/js/form/select.js",
    "src/assets/js/features/auth.js",
    "src/assets/js/features/commerce.js",
    "src/assets/js/extensions/bulma-calendar.min.js",
    "src/assets/js/extensions/bulma-iconpicker.js",
    "src/assets/js/extensions/bulma-steps.min.js",
    "src/assets/js/extensions/bulma-tagsinput.min.js",
    "src/assets/js/main.js",
  ])
    .pipe(sourcemaps.init())
    .pipe(uglify())
    .pipe(concat("core.js"))
    .pipe(sourcemaps.write("./"))
    .pipe(dest("dist/assets/js"))
    .pipe(browserSync.stream());
}

function concatPlugins() {
  console.log("\n\t" + logSymbols.info, "Concatenating Javascript from plugins..\n");
  return src([
    nodepath + "jquery/dist/jquery.min.js",
    nodepath + "lozad/dist/lozad.min.js",
    nodepath + "izitoast/dist/js/iziToast.min.js",
    nodepath + "chosen-js/chosen.jquery.min.js",
    nodepath + "slick-carousel/slick/slick.min.js",
    nodepath + "vivus/dist/vivus.min.js",
    nodepath + "covervid/covervid.min.js",
    nodepath + "plyr/dist/plyr.min.js",
    nodepath + "scrollreveal/dist/scrollreveal.min.js",
    nodepath + "waypoints/lib/jquery.waypoints.min.js",
    nodepath + "waypoints/lib/shortcuts/sticky.min.js",
    nodepath + "simplebar/dist/simplebar.min.js",
    nodepath + "feather-icons/dist/feather.min.js",
    nodepath + "jquery.counterup/jquery.counterup.min.js",
    nodepath + "jquery.marquee/jquery.marquee.min.js",
    nodepath + "@claviska/jquery-dropdown/jquery.dropdown.min.js",
    nodepath + "@fengyuanchen/datepicker/dist/datepicker.min.js",
    nodepath + "datedropper/datedropper.min.js",
    nodepath + "timedropper/timedropper.min.js",
    nodepath + "paper/dist/paper-full.min.js",
    nodepath + "easy-autocomplete/dist/jquery.easy-autocomplete.min.js",
    nodepath + "jquery-tags-input/dist/jquery.tagsinput.min.js",
    nodepath + "wallop/js/Wallop.min.js",
    "src/assets/js/extensions/bulma-calendar.min.js",
    "src/assets/js/extensions/bulma-iconpicker.js",
    "src/assets/js/extensions/bulma-steps.min.js",
    "src/assets/js/extensions/bulma-tagsinput.min.js",
    //Additional static js assets
    "src/assets/vendor/js/**/*.js",
  ])
    .pipe(sourcemaps.init())
    .pipe(uglify())
    .pipe(concat("app.js"))
    .pipe(sourcemaps.write("./"))
    .pipe(dest("dist/assets/js"))
    .pipe(browserSync.stream());
}

function concatCssPlugins() {
  console.log("\n\t" + logSymbols.info, "Concatenating CSS from plugins..\n");
  return src([
    nodepath + "slick-carousel/slick/slick.css",
    nodepath + "slick-carousel/slick/slick-theme.css",
    nodepath + "datedropper/datedropper.min.css",
    nodepath + "timedropper/timedropper.min.css",
    nodepath + "simplebar/dist/simplebar.min.css",
    nodepath + "plyr/dist/plyr.css",
    nodepath + "easy-autocomplete/dist/easy-autocomplete.min.css",
    nodepath + "izitoast/dist/css/iziToast.min.css",
    nodepath + "wallop/css/wallop.css",
    //Additional static css assets
    "src/assets/vendor/css/**/*.css",
  ])
    .pipe(sourcemaps.init())
    .pipe(concat("app.css"))
    .pipe(sourcemaps.write("./"))
    .pipe(dest("dist/assets/css"))
    .pipe(browserSync.stream());
}

function watchFiles() {
  watch("src/**/*.html", compileHTML);
  watch(["src/assets/scss/**/*", "src/assets/scss/*"], compileSCSS);
  watch(["src/assets/js/**/*", "src/assets/js/*"], concatJS);
  watch("src/assets/img/**/*", copyImages);
}

function cleanDist(done) {
  console.log("\n\t" + logSymbols.info, "Cleaning .dist folder..\n");
  del.sync("dist");
  return done();
}

function browserSyncInit(done) {
  console.log("\n\t" + logSymbols.info, "Starting development server..\n");
  browserSync.init({
    server: "./dist",
  });
  return done();
}

function copyImages() {
  console.log("\n\t" + logSymbols.info, "Optimizing Images..\n");
  return (
    src("src/assets/img/**/*.+(png|jpg|jpeg|gif|svg|mp4|ogv|webm)")
      .pipe(newer("dist/assets/img/"))
      .pipe(dest("dist/assets/img/"))
      .pipe(browserSync.stream())
  );
}

function copyFont() {
  console.log("\n\t" + logSymbols.info, "Copying Font files..\n");
  return src(["src/assets/font/**/*"])
    .pipe(dest("dist/assets/fonts"))
    .pipe(browserSync.stream());
}

function copyData() {
  console.log("\n\t" + logSymbols.info, "Copying data files..\n");
  return src(["src/data/**/*"])
    .pipe(dest("dist/assets/data"))
    .pipe(browserSync.stream());
}

function jsVendor() {
  console.log("\n\t" + logSymbols.info, "Copying JS vendor files..\n");
  return src(["src/assets/vendor/js/*"])
    .pipe(dest("dist/assets/vendor/js"))
    .pipe(browserSync.stream());
}

function cssVendor() {
  console.log("\n\t" + logSymbols.info, "Copying CSS vendor files..\n");
  return src(["src/assets/vendor/css/*"])
    .pipe(dest("dist/assets/vendor/css"))
    .pipe(browserSync.stream());
}

/* ==========================================================================
OPTIMIZATION TASKS
========================================================================== */

function scssLint() {
  console.log("\n\t" + logSymbols.info, "Linting Sass..\n");
  return src("src/assets/scss/**/*.scss")
    .pipe(
      sassLint({
        configFile: ".scss-lint.yml",
      })
    )
    .pipe(sassLint.format())
    .pipe(sassLint.failOnError());
}

function htmlLint() {
  console.log("\n\t" + logSymbols.info, "Linting HTML..\n");
  return src("dist/*.html").pipe(htmllint({}, htmllintReporter));
}

function htmllintReporter(filepath, issues) {
  if (issues.length > 0) {
    issues.forEach(function (issue) {
      log(
        colors.cyan("[gulp-htmllint] ") +
          colors.white(filepath + " [" + issue.line + "]: ") +
          colors.red("(" + issue.code + ") " + issue.msg)
      );
    });
    process.exitCode = 1;
  } else {
    console.log("\n\t" + logSymbols.info, "No Linting Errors..\n");
  }
}

function jsLint() {
  return src("src/assets/js/*.js")
    .pipe(jshint())
    .pipe(jshint.reporter("default"));
}



function prettyHTML() {
  console.log("\n\t" + logSymbols.info, "Running Pretty on HTML..\n");
  return src("dist/*.html")
    .pipe(
      prettyHtml({
        indent_size: 4,
        indent_char: " ",
        unformatted: ["code", "pre", "em", "strong", "span", "i", "b", "br"],
      })
    )
    .pipe(dest("dist"));
}

function HTMLAccessibility() {
  return src("dist/*.html")
    .pipe(
      accessibility({
        force: true,
      })
    )
    .on("error", console.log)
    .pipe(
      accessibility.report({
        reportType: "txt",
      })
    )
    .pipe(
      rename({
        extname: ".txt",
      })
    )
    .pipe(dest("accessibility-reports"));
}

// RUN ALL LINTERS
exports.linters = series(htmlLint, scssLint, jsLint);

// RUN ACCESSIILITY CHECK
exports.accessibility = HTMLAccessibility;

//SETUP
exports.setup = series(setupBulma);

// DEV
exports.dev = series(
  cleanDist,
  copyFont,
  copyData,
  jsVendor,
  cssVendor,
  copyImages,
  compileHTML,
  concatPlugins,
  concatCssPlugins,
  concatJS,
  resetPages,
  prettyHTML,
  compileSCSS,
  browserSyncInit,
  watchFiles
);

// BUILD
exports.build = series(
  cleanDist,
  copyFont,
  copyData,
  jsVendor,
  cssVendor,
  copyImages,
  compileHTML,
  concatPlugins,
  concatCssPlugins,
  concatJS,
  resetPages,
  prettyHTML,
  compileSCSS
);
