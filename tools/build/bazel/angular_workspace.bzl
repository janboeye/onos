load("@bazel_tools//tools/build_defs/repo:http.bzl", "http_archive")
load("@npm//@bazel/protractor:package.bzl", "npm_bazel_protractor_dependencies")
#load("@npm//@bazel/karma:package.bzl", "npm_bazel_karma_dependencies")
load("@io_bazel_rules_webtesting//web:repositories.bzl", "web_test_repositories")
load("@io_bazel_rules_webtesting//web/versioned:browsers-0.3.2.bzl", "browser_repositories")
load("@io_bazel_rules_sass//sass:sass_repositories.bzl", "sass_repositories")

def load_angular():
    npm_bazel_protractor_dependencies()

    http_archive(
         name = "io_bazel_rules_webtesting",
         sha256 = "9bb461d5ef08e850025480bab185fd269242d4e533bca75bfb748001ceb343c3",
          urls = ["https://github.com/bazelbuild/rules_webtesting/releases/download/0.3.3/rules_webtesting.tar.gz"],
    )

    web_test_repositories()

    browser_repositories(
        chromium = True,
        firefox = True,
    )

    sass_repositories()
