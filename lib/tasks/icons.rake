namespace("icons") do
  ##
  # for reference:
  #
  # - [fazibear/colorize](https://github.com/fazibear/colorize)
  # - [`Pathname`](https://ruby-doc.org/stdlib-2.7.4/libdoc/pathname/rdoc/Pathname.html)
  # - [`FileUtils.mkdir_p`](https://ruby-doc.org/stdlib-2.7.4/libdoc/fileutils/rdoc/FileUtils.html#method-c-mkdir_p)
  # - [`FileUtils.mv`](https://rubstdlib-2.7.4/libdoc/fileutils/rdoc/FileUtils.html#method-c-mv)
  #
  desc("Build Material Design Icons assets")
  task(build: :environment) do

    app_scss_file_path          = Rails.root.join("app/assets/stylesheets/trestle/vendor/materialdesignicons.scss")
    app_scss_file_backup_path   = Rails.root.join("app/assets/stylesheets/trestle/vendor/materialdesignicons (backup).scss")
    app_font_folder_path        = Rails.root.join("app/assets/fonts")
    app_font_backup_folder_path = app_font_folder_path.join("old")

    node_css_file_path    = Rails.root.join("node_modules/@mdi/font/css/materialdesignicons.css")
    node_font_folder_path = Rails.root.join("node_modules/@mdi/font/fonts")

    step_icon         = "●"
    step_icon_outline = "○"

    step_head       = step_icon
    step_incomplete = step_icon_outline
    step_complete   = step_icon.colorize(color: :green)
    step_error      = step_icon.colorize(color: :red)

    progress_bar_options = [
      "[:bar] :title",
      {
        total: 6,
        hide_cursor: true,
        incomplete: step_incomplete,
        complete: step_complete,
        head: step_head,
      },
    ]

    bar = TTY::ProgressBar.new(*progress_bar_options)

    begin
      bar.start()
      bar.log("Building Icon Assets:")

      bar.advance(title: "Creating backup folder".colorize(color: :cyan))
      sleep(2)
      FileUtils.mkdir_p(app_font_backup_folder_path)

      bar.advance(title: "Moving current font files to backup folder".colorize(color: :cyan))
      sleep(2)
      FileUtils.mv(
        app_font_folder_path.glob("materialdesignicons-webfont.*"),
        app_font_backup_folder_path,
        verbose: false,
      )

      bar.advance(title: "Copying new font files to assets folder".colorize(color: :cyan))
      sleep(2)
      FileUtils.cp(
        node_font_folder_path.glob("materialdesignicons-webfont.*"),
        app_font_folder_path,
        verbose: false,
      )

      bar.advance(title: "Backing up SCSS file".colorize(color: :cyan))
      sleep(2)
      FileUtils.mv(
        app_scss_file_path,
        app_scss_file_backup_path,
        verbose: false,
      )

      bar.advance(title: "Copying new SCSS file to assets folder".colorize(color: :cyan))
      sleep(2)
      FileUtils.cp(
        node_css_file_path,
        app_scss_file_path,
        verbose: false,
      )

      bar.advance(title: "Updating paths in new SCSS file".colorize(color: :cyan))
      sleep(2)
      TTY::File.replace_in_file(
        app_scss_file_path,
        /, url\(/,
        ",\n       url(",
        verbose: false,
      )
      TTY::File.replace_in_file(
        app_scss_file_path,
        %r{url\("../fonts/},
        'asset-url("',
        verbose: false,
      )

      bar.update(head: step_complete)
      bar.advance(title: "Complete".colorize(color: :cyan))
      bar.finish()
    ensure
      bar.update(head: step_error)
      bar.advance(title: "Error occured")
      bar.stop()
    end

  end
end

# "terminal.ansiBlack": "#808080",
# "terminal.ansiBrightBlack": "#808080",
# "terminal.ansiRed": "#d16969",
# "terminal.ansiBrightRed": "#d16969",
# "terminal.ansiBlue": "#569cd6",
# "terminal.ansiBrightBlue": "#9cdcfe",
# "terminal.ansiGreen": "#608b4e",
# "terminal.ansiBrightGreen": "#b5cea8",
# "terminal.ansiCyan": "#4ec9b0",
# "terminal.ansiBrightCyan": "#4ec9b0",
# "terminal.ansiYellow": "#d7ba7d",
# "terminal.ansiBrightYellow": "#ce9178",
# "terminal.ansiMagenta": "#c586c0",
# "terminal.ansiBrightMagenta": "#c586c0",
# "terminal.ansiWhite": "#d4d4d4",
# "terminal.ansiBrightWhite": "#d4d4d4",
