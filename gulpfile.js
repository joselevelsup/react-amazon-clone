var gulp = require("gulp"),
    babel = require("gulp-babel"),
    nodemon = require("gulp-nodemon");

gulp.task("dev", ["build"], function(){
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