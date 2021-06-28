workspace(
    name = "org_onosproject_onos",
    managed_directories = {
        "@gui1_npm": ["tools/gui/node_modules"],
        "@npm": ["web/gui2/node_modules"],
    },
)

#load("//tools/build/bazel:bazel_version.bzl", "check_bazel_version")

#check_bazel_version()

load("@bazel_tools//tools/build_defs/repo:http.bzl", "http_archive")

# It is necessary to explicitly load this version of bazel-skylib for the
# GUI build with native bazel e.g. ts_web_test_suite or ts_library. If not specified
# here an older version is pulled in by something else. It may be possible to update
# this once other tools are updated
BAZEL_SKYLIB_VERSION = "1.0.2"

BAZEL_SKYLIB_SHA256 = "97e70364e9249702246c0e9444bccdc4b847bed1eb03c5a3ece4f83dfe6abc44"

http_archive(
    name = "bazel_skylib",
    sha256 = BAZEL_SKYLIB_SHA256,
    urls = [
        "https://github.com/bazelbuild/bazel-skylib/releases/download/%s/bazel-skylib-%s.tar.gz" % (BAZEL_SKYLIB_VERSION, BAZEL_SKYLIB_VERSION),
    ],
)

load("@bazel_skylib//:workspace.bzl", "bazel_skylib_workspace")

bazel_skylib_workspace()

load("//tools/build/bazel:local_jar.bzl", "local_atomix", "local_jar", "local_yang_tools")

# Use this to build against locally built arbitrary 3rd party artifacts
#local_jar(
#    name = "atomix",
#    path = "/Users/tom/atomix/core/target/atomix-3.0.8-SNAPSHOT.jar",
#)

# Use this to build against locally built Atomix
#local_atomix(
#    path = "/home/developer/atomix",
#    version = "3.1.9-SNAPSHOT",
#)

# Use this to build against locally built YANG tools
#local_yang_tools(
#    path = "/Users/andrea/onos-yang-tools",
#    version = "2.6-SNAPSHOT",
#)

load("//tools/build/bazel:generate_workspace.bzl", "generated_maven_jars")

generated_maven_jars()

load("//tools/build/bazel:protobuf_workspace.bzl", "generate_protobuf")

generate_protobuf()

load("@com_google_protobuf//:protobuf_deps.bzl", "protobuf_deps")

protobuf_deps()

load("//tools/build/bazel:grpc_workspace.bzl", "generate_grpc")

generate_grpc()

load("@io_grpc_grpc_java//:repositories.bzl", "grpc_java_repositories")

# We omit as many dependencies as we can and instead import the same via
# deps.json, so they get wrapped properly for Karaf runtime.
grpc_java_repositories(
    omit_bazel_skylib = False,
    omit_com_google_android_annotations = True,
    omit_com_google_api_grpc_google_common_protos = True,
    omit_com_google_auth_google_auth_library_credentials = True,
    omit_com_google_auth_google_auth_library_oauth2_http = True,
    omit_com_google_code_findbugs_jsr305 = True,
    omit_com_google_code_gson = True,
    omit_com_google_errorprone_error_prone_annotations = True,
    omit_com_google_guava = True,
    omit_com_google_guava_failureaccess = True,
    omit_com_google_j2objc_j2objc_annotations = True,
    omit_com_google_protobuf = True,
    omit_com_google_protobuf_javalite = True,
    omit_com_google_truth_truth = True,
    omit_com_squareup_okhttp = True,
    omit_com_squareup_okio = True,
    omit_io_grpc_grpc_proto = True,
    omit_io_netty_buffer = True,
    omit_io_netty_codec = True,
    omit_io_netty_codec_http = True,
    omit_io_netty_codec_http2 = True,
    omit_io_netty_codec_socks = True,
    omit_io_netty_common = True,
    omit_io_netty_handler = True,
    omit_io_netty_handler_proxy = True,
    omit_io_netty_resolver = True,
    omit_io_netty_tcnative_boringssl_static = True,
    omit_io_netty_transport = True,
    omit_io_opencensus_api = True,
    omit_io_opencensus_grpc_metrics = True,
    omit_io_perfmark = True,
    omit_javax_annotation = True,
    omit_junit_junit = True,
    omit_net_zlib = True,
    omit_org_apache_commons_lang3 = True,
    omit_org_codehaus_mojo_animal_sniffer_annotations = True,
)

load("//tools/build/bazel:p4lang_workspace.bzl", "generate_p4lang")

generate_p4lang()

load("//tools/build/bazel:gnmi_workspace.bzl", "generate_gnmi")

generate_gnmi()

load("//tools/build/bazel:gnoi_workspace.bzl", "generate_gnoi")

generate_gnoi()

# For GUI2 build
RULES_NODEJS_VERSION = "3.6.0"

#RULES_NODEJS_SHA256 = "0fa2d443571c9e02fcb7363a74ae591bdcce2dd76af8677a95965edf329d778a"
RULES_NODEJS_SHA256 = "32e1e6207edfa288e394fee6fe3e4f53a0241922cff59f4229a9f5bebdb26c2b"

load("//tools/build/bazel:topo_workspace.bzl", "generate_topo_device")

generate_topo_device()

http_archive(
    name = "build_bazel_rules_nodejs",
    sha256 = RULES_NODEJS_SHA256,
    urls = [
        #"https://github.com/bazelbuild/rules_nodejs/releases/download/%s/rules_nodejs-%s.tar.gz" % (RULES_NODEJS_VERSION, RULES_NODEJS_VERSION),
	"https://github.com/janboeye/rules_nodejs/releases/download/alexfix/alex.tar.gz",
    ],
)

# Rules for compiling sass
RULES_SASS_VERSION = "1.35.1"

#RULES_SASS_SHA256 = "c78be58f5e0a29a04686b628cf54faaee0094322ae0ac99da5a8a8afca59a647"
RULES_SASS_SHA256 = "442d5448be91dc8d2da65a0f2e6846f7c35311513a2d88ec0f27d772e0174daa"

http_archive(
    name = "io_bazel_rules_sass",
    sha256 = RULES_SASS_SHA256,
    strip_prefix = "rules_sass-%s" % RULES_SASS_VERSION,
    urls = [
        "https://github.com/bazelbuild/rules_sass/archive/%s.zip" % RULES_SASS_VERSION,
        "https://mirror.bazel.build/github.com/bazelbuild/rules_sass/archive/%s.zip" % RULES_SASS_VERSION,
    ],
)

load("@build_bazel_rules_nodejs//:index.bzl", "node_repositories", "npm_install", "yarn_install")

# Setup the Node repositories. We need a NodeJS version that is more recent than v10.15.0
# because "selenium-webdriver" which is required for "ng e2e" cannot be installed.
node_repositories(
    node_repositories = {
        "16.3.0-linux_arm64": ("node-v16.3.0-linux-arm64.tar.gz", "node-v16.3.0-linux-arm64", "7040a1f2a0a1aa9cf0f66ec46d0049c6638cb4c05490c13ca71d298fa94ed8ce"),
        "16.3.0-linux_amd64": ("node-v16.3.0-linux-x64.tar.gz", "node-v16.3.0-linux-x64", "86f6d06c05021ae73b51f57bb56569a2eebd4a2ecc0b881972a0572e465b5d27"),
        "16.3.0-darwin_amd64": ("node-v16.3.0-darwin-x64.tar.gz", "node-v16.3.0-darwin-x64", "3e075bcfb6130dda84bfd04633cb228ec71e72d9a844c57efb7cfff130b4be89"),
        "16.3.0-darwin_arm64": ("node-v16.3.0-darwin-arm64.tar.gz", "node-v16.3.0-darwin-arm64", "aeac294dbe54a4dfd222eedfbae704b185c40702254810e2c5917f6dbc80e017"),
        "16.3.0-windows_amd64": ("node-v16.3.0-win-x64.zip", "node-v16.3.0-win-x64", "3352e58d3603cf58964409d07f39f3816285317d638ddb0a0bf3af5deb2ff364"),
    },
    node_version = "16.3.0",
)

# TODO give this a name like `gui2_npm` once the @bazel/karma tools can tolerate a name other than `npm`
yarn_install(
    name = "npm",
    package_json = "//web/gui2:package.json",
    use_global_yarn_cache = True,
    yarn_lock = "//web/gui2:yarn.lock",
)

npm_install(
    # Name this npm so that Bazel Label references look like @npm//package
    name = "gui1_npm",
    package_json = "//tools/gui:package.json",
    package_lock_json = "//tools/gui:package-lock.json",
)

# Install any Bazel rules which were extracted earlier by the npm_install rule.
# Versions are set in web/gui2-fw-lib/package.json

RULES_WEBTESTING_VERSION = "0.3.3"

RULES_WEBTESTING_SHA256 = "9bb461d5ef08e850025480bab185fd269242d4e533bca75bfb748001ceb343c3"

http_archive(
    name = "io_bazel_rules_webtesting",
    sha256 = RULES_WEBTESTING_SHA256,
    urls = [
        "https://github.com/bazelbuild/rules_webtesting/releases/download/%s/rules_webtesting.tar.gz" % RULES_WEBTESTING_VERSION,
    ],
)

load("//tools/build/bazel:angular_workspace.bzl", "load_angular")

load_angular()

# buildifier is written in Go and hence needs rules_go to be built.
# See https://github.com/bazelbuild/rules_go for the up to date setup instructions.
RULES_GO_VERSION = "v0.19.8"

RULES_GO_SHA256 = "9976c2572587aa71f81b502cc870ef8058f6de37f5fcfaade6a5996934b4a324"

http_archive(
    name = "io_bazel_rules_go",
    sha256 = RULES_GO_SHA256,
    urls = [
        "https://storage.googleapis.com/bazel-mirror/github.com/bazelbuild/rules_go/releases/download/%s/rules_go-%s.tar.gz" % (RULES_GO_VERSION, RULES_GO_VERSION),
        "https://github.com/bazelbuild/rules_go/releases/download/%s/rules_go-%s.tar.gz" % (RULES_GO_VERSION, RULES_GO_VERSION),
    ],
)

load("@io_bazel_rules_go//go:deps.bzl", "go_register_toolchains", "go_rules_dependencies")

go_rules_dependencies()

go_register_toolchains()

GAZELLE_VERSION = "0.18.1"

GAZELLE_SHA256 = "be9296bfd64882e3c08e3283c58fcb461fa6dd3c171764fcc4cf322f60615a9b"

http_archive(
    name = "bazel_gazelle",
    sha256 = GAZELLE_SHA256,
    urls = [
        "https://storage.googleapis.com/bazel-mirror/github.com/bazelbuild/bazel-gazelle/releases/download/%s/bazel-gazelle-%s.tar.gz" % (GAZELLE_VERSION, GAZELLE_VERSION),
        "https://github.com/bazelbuild/bazel-gazelle/releases/download/%s/bazel-gazelle-%s.tar.gz" % (GAZELLE_VERSION, GAZELLE_VERSION),
    ],
)

load("@bazel_gazelle//:deps.bzl", "gazelle_dependencies")

gazelle_dependencies()

BUILDTOOLS_VERSION = "0.29.0"

BUILDTOOLS_SHA256 = "05eb52437fb250c7591dd6cbcfd1f9b5b61d85d6b20f04b041e0830dd1ab39b3"

http_archive(
    name = "com_github_bazelbuild_buildtools",
    sha256 = BUILDTOOLS_SHA256,
    strip_prefix = "buildtools-" + BUILDTOOLS_VERSION,
    url = "https://github.com/bazelbuild/buildtools/archive/%s.zip" % BUILDTOOLS_VERSION,
)

http_archive(
    name = "rules_proto",
    sha256 = "602e7161d9195e50246177e7c55b2f39950a9cf7366f74ed5f22fd45750cd208",
    strip_prefix = "rules_proto-97d8af4dc474595af3900dd85cb3a29ad28cc313",
    urls = [
        "https://mirror.bazel.build/github.com/bazelbuild/rules_proto/archive/97d8af4dc474595af3900dd85cb3a29ad28cc313.tar.gz",
        "https://github.com/bazelbuild/rules_proto/archive/97d8af4dc474595af3900dd85cb3a29ad28cc313.tar.gz",
    ],
)
load("@rules_proto//proto:repositories.bzl", "rules_proto_dependencies", "rules_proto_toolchains")
rules_proto_dependencies()
rules_proto_toolchains()
