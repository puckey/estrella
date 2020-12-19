// Do not edit. Generated by build.js

export const esbuild = {
  version:      "0.8.24",
  BuildOptions: new Set([
    "sourcemap"         , // boolean | 'inline' | 'external'
    "format"            , // Format
    "globalName"        , // string
    "target"            , // string | string[]
    "minify"            , // boolean
    "minifyWhitespace"  , // boolean
    "minifyIdentifiers" , // boolean
    "minifySyntax"      , // boolean
    "charset"           , // Charset
    "treeShaking"       , // TreeShaking
    "jsxFactory"        , // string
    "jsxFragment"       , // string
    "define"            , // { [key: string]: string; }
    "pure"              , // string[]
    "avoidTDZ"          , // boolean
    "keepNames"         , // boolean
    "banner"            , // string
    "footer"            , // string
    "color"             , // boolean
    "logLevel"          , // LogLevel
    "errorLimit"        , // number
    "bundle"            , // boolean
    "splitting"         , // boolean
    "outfile"           , // string
    "metafile"          , // string
    "outdir"            , // string
    "outbase"           , // string
    "platform"          , // Platform
    "external"          , // string[]
    "loader"            , // { [ext: string]: Loader; }
    "resolveExtensions" , // string[]
    "mainFields"        , // string[]
    "write"             , // boolean
    "tsconfig"          , // string
    "outExtension"      , // { [ext: string]: string; }
    "publicPath"        , // string
    "inject"            , // string[]
    "incremental"       , // boolean
    "entryPoints"       , // string[]
    "stdin"             , // StdinOptions
    "plugins"           , // Plugin[]
  ]), // BuildOptions
}

export const estrella = {
  BuildConfig: new Set([
    "entry"       , // string | string[]
    "debug"       , // boolean
    "watch"       , // boolean | WatchOptions
    "cwd"         , // string
    "quiet"       , // boolean
    "clear"       , // boolean
    "tslint"      , // boolean | "auto" | "on" | "off" | TSLintBasicOptions
    "onStart"     , // (config: Readonly<BuildConfig>, changedFiles: string[], ctx: BuildContext) => Promise<void> | any
    "onEnd"       , // (config: Readonly<BuildConfig>, buildResult: BuildResult, ctx: BuildContext) => Promise<void> | any
    "outfileMode" , // number | string | string[]
    "run"         , // boolean | string | string[]
    "tsc"         , // boolean | "auto" | "on" | "off"
    "tsrules"     , // TSRules
    "title"       , // string
  ]), // BuildConfig
}