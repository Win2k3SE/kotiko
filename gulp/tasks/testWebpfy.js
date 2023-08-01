import gfi from 'gulp-file-include'
import webpfy from 'webpfy'

export const testWebpfy = (args) => {
    // console.log("args", args)
    return app.gulp
        .src(`./test.html`)
        .pipe(
            app.plugins.plumber(
                app.plugins.notify.onError({
                    title: 'HTML',
                    message: 'Error: <%= error.message %>',
                })
            )
        )
        .pipe(gfi())
        .pipe(webpfy({
            debug: true,
            insertDefaultImage: true
        }))
        .pipe(app.gulp.dest(`./test/`))
}
