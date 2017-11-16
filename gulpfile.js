var gulp = require("gulp"),
    babel = require("gulp-babel"),
    nodemon = require("gulp-nodemon");

// For testing purposes. Just moves JSON files to our build folder;
gulp.task("json-output", function(){
    gulp.src("server/**/**.json")
        .pipe(gulp.dest("./build"));
})

// Sets up a nodemon server for development
gulp.task("dev", ["build", "json-output"], function(){
    nodemon({
        script: 'build/server.js', 
        ext: 'js', 
        watch: "server",
        tasks: ["build"],
        env: { 'NODE_ENV': 'development' }
      })
})

//
gulp.task("build", function(){
   return gulp.src("server/**/**.js")
        .pipe(babel({
            presets: ["env"]
        }))
        .pipe(gulp.dest("./build"));
});