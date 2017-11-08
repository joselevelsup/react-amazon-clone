var gulp = require("gulp"),
    babel = require("gulp-babel"),
    nodemon = require("gulp-nodemon");

gulp.task("json-output", function(){
    gulp.src("server/**/**.json")
        .pipe(gulp.dest("./build"));
})

gulp.task("dev", ["build", "json-output"], function(){
    nodemon({
        script: 'build/server.js', 
        ext: 'js', 
        watch: "server",
        tasks: ["build"],
        env: { 'NODE_ENV': 'development' }
      })
})

gulp.task("build", function(){
   return gulp.src("server/**/**.js")
        .pipe(babel({
            presets: ["env"]
        }))
        .pipe(gulp.dest("./build"));
});